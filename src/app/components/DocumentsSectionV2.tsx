import { useState, useEffect } from "react";
import { Upload, X, FileText, FileSpreadsheet, Info, CheckCircle2, File, Image as ImageIcon, AlertCircle, ChevronDown } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  type: "pdf" | "excel" | "image" | "csv";
  documentType: string;
  size: string;
  uploadedAt: string;
}

interface DocumentsSectionV2Props {
  applicationId: string;
}

const DOCUMENT_TYPES = [
  "Letters of Support / MOUs",
  "Key Personnel Resumes",
  "Logic Model",
  "Data / Evidence",
  "Maps / Service Area",
  "Organizational Documents"
];

const ALLOWED_FORMATS = ["PDF", "DOCX", "XLSX", "CSV", "PNG", "JPG"];
const MAX_FILE_SIZE = 50; // MB

export function DocumentsSectionV2({ applicationId }: DocumentsSectionV2Props) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>("");
  const [uploadError, setUploadError] = useState<string>("");
  const [showUploadForm, setShowUploadForm] = useState(false);

  // Load files from localStorage on mount
  useEffect(() => {
    const storageKey = `app-${applicationId}-documents`;
    const savedFiles = localStorage.getItem(storageKey);
    if (savedFiles) {
      setUploadedFiles(JSON.parse(savedFiles));
    }
  }, [applicationId]);

  // Save files to localStorage whenever they change
  useEffect(() => {
    const storageKey = `app-${applicationId}-documents`;
    localStorage.setItem(storageKey, JSON.stringify(uploadedFiles));
  }, [uploadedFiles, applicationId]);

  const getFileType = (fileName: string): "pdf" | "excel" | "image" | "csv" => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return 'pdf';
    if (ext === 'xlsx' || ext === 'xls' || ext === 'docx') return 'excel';
    if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') return 'image';
    if (ext === 'csv') return 'csv';
    return 'pdf';
  };

  const validateFile = (file: File): string | null => {
    // Check file size (50 MB max)
    const maxSizeBytes = MAX_FILE_SIZE * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return `File size exceeds ${MAX_FILE_SIZE} MB limit`;
    }

    // Check file format
    const ext = file.name.split('.').pop()?.toLowerCase();
    const allowedExts = ['pdf', 'docx', 'xlsx', 'csv', 'png', 'jpg', 'jpeg'];
    if (!ext || !allowedExts.includes(ext)) {
      return `File format not allowed. Accepted formats: ${ALLOWED_FORMATS.join(', ')}`;
    }

    return null;
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    
    // Check if document type is selected
    if (!selectedDocumentType) {
      setUploadError("Please select a document type before uploading");
      return;
    }

    setUploadError("");
    
    const newFiles: UploadedFile[] = [];
    
    Array.from(files).forEach(file => {
      const error = validateFile(file);
      if (error) {
        setUploadError(error);
        return;
      }

      newFiles.push({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: getFileType(file.name),
        documentType: selectedDocumentType,
        size: file.size > 1024 * 1024 
          ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          : `${(file.size / 1024).toFixed(0)} KB`,
        uploadedAt: new Date().toISOString()
      });
    });
    
    if (newFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...newFiles]);
      setSelectedDocumentType(""); // Reset selection after upload - panel stays open
    }
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-600 flex-shrink-0" />;
      case 'excel':
        return <FileSpreadsheet className="w-5 h-5 text-green-600 flex-shrink-0" />;
      case 'image':
        return <ImageIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />;
      case 'csv':
        return <File className="w-5 h-5 text-purple-600 flex-shrink-0" />;
      default:
        return <File className="w-5 h-5 text-gray-600 flex-shrink-0" />;
    }
  };

  // Check which required documents have been uploaded
  const hasLettersOfSupport = uploadedFiles.some(f => f.documentType === "Letters of Support / MOUs");
  const hasKeyPersonnelResumes = uploadedFiles.some(f => f.documentType === "Key Personnel Resumes");
  const hasLogicModel = uploadedFiles.some(f => f.documentType === "Logic Model");

  return (
    <div className="space-y-6">
      {/* Grant-Specific Document Requirements */}
      <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-lg p-6">
        <div className="flex items-start gap-3 mb-4">
          <Info className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Document Requirements for This Grant
            </h3>
            <p className="text-sm text-gray-700 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
              <span className="font-medium">Administration for Community Living (ACL) - Assistive Technology Alternative Financing Program</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Required Documents */}
          <div className="bg-white rounded-lg p-4 border border-teal-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-xs font-bold">*</span>
              </div>
              <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Required Documents
              </h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${hasLettersOfSupport ? 'text-green-600' : 'text-gray-300'}`} />
                <span>Letters of Support / MOUs (minimum 2)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${hasKeyPersonnelResumes ? 'text-green-600' : 'text-gray-300'}`} />
                <span>Key Personnel Resumes</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${hasLogicModel ? 'text-green-600' : 'text-gray-300'}`} />
                <span>Logic Model</span>
              </li>
            </ul>
          </div>

          {/* Recommended Documents */}
          <div className="bg-white rounded-lg p-4 border border-teal-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
                <Info className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Recommended Documents
              </h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Data Files / Projections / Analytics</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Maps / Service Area Demographics</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Organizational Certifications</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Financial Statements (990s)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Upload Documents
          </h3>
          {!showUploadForm && (
            <button
              onClick={() => setShowUploadForm(true)}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Upload className="w-4 h-4" />
              Add Document
            </button>
          )}
        </div>

        {showUploadForm && (
          <div className="space-y-4">
            {/* Document Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Document Type <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <select
                  value={selectedDocumentType}
                  onChange={(e) => setSelectedDocumentType(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none bg-white"
                  style={{ fontFamily: 'Cabin, sans-serif' }}
                >
                  <option value="">Select document type...</option>
                  {DOCUMENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Upload Error */}
            {uploadError && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {uploadError}
                </p>
              </div>
            )}

            {/* File Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg transition-all ${
                isDragging 
                  ? 'border-teal-600 bg-teal-50' 
                  : selectedDocumentType
                  ? 'border-gray-300 bg-white hover:border-teal-400 hover:bg-teal-50/30'
                  : 'border-gray-200 bg-white cursor-not-allowed opacity-60'
              }`}
              onDragOver={selectedDocumentType ? handleDragOver : undefined}
              onDragLeave={selectedDocumentType ? handleDragLeave : undefined}
              onDrop={selectedDocumentType ? handleDrop : undefined}
            >
              <label className={`flex flex-col items-center justify-center py-10 px-6 ${selectedDocumentType ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                  selectedDocumentType ? 'bg-teal-100' : 'bg-gray-100'
                }`}>
                  <Upload className={`w-7 h-7 ${selectedDocumentType ? 'text-teal-600' : 'text-gray-400'}`} />
                </div>
                <p className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {selectedDocumentType 
                    ? "Drag and drop files here, or click to browse"
                    : "Select a document type first"}
                </p>
                <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {ALLOWED_FORMATS.join(', ')} • Max {MAX_FILE_SIZE} MB
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Secure upload</span>
                </div>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.docx,.xlsx,.csv,.png,.jpg,.jpeg"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  disabled={!selectedDocumentType}
                />
              </label>
            </div>

            {/* Cancel Button */}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowUploadForm(false);
                  setSelectedDocumentType("");
                  setUploadError("");
                }}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Uploaded Files Display */}
      {uploadedFiles.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Uploaded Documents ({uploadedFiles.length})
          </h3>
          <div className="space-y-3">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {getFileIcon(file.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium text-gray-900 truncate" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        {file.name}
                      </p>
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-medium rounded flex-shrink-0">
                        {file.documentType}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {file.size} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFile(file.id)}
                  className="p-2 hover:bg-red-100 rounded-lg transition-colors ml-2 flex-shrink-0 opacity-0 group-hover:opacity-100"
                  title="Remove file"
                >
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}