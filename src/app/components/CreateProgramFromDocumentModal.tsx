import { useState } from "react";
import { Upload, Info, FileText, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { CloudDocumentImport, ProviderBadgeIcon, type ImportedCloudFile } from "./CloudDocumentImport";

export interface FastTrackDocumentFile {
  id: string;
  fileName: string;
  fileSize: string;
  uploadedAt: number;
  source?: "local" | "microsoft" | "google";
}

const formatFileSize = (bytes: number): string => {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
};

interface CreateProgramFromDocumentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProcessDocument: (files: FastTrackDocumentFile[]) => void;
}

export function CreateProgramFromDocumentModal({
  open,
  onOpenChange,
  onProcessDocument,
}: CreateProgramFromDocumentModalProps) {
  const [files, setFiles] = useState<FastTrackDocumentFile[]>([]);

  const handleFileSelect = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const now = Date.now();
    const newFiles: FastTrackDocumentFile[] = Array.from(fileList).map((file, index) => ({
      id: `${now}-${index}`,
      fileName: file.name,
      fileSize: formatFileSize(file.size),
      uploadedAt: now,
      source: "local",
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    handleFileSelect(event.dataTransfer.files);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(event.target.files);
    event.target.value = "";
  };

  const handleCloudImport = (imported: ImportedCloudFile[]) => {
    setFiles((prev) => [
      ...prev,
      ...imported.map((file) => ({
        id: file.id,
        fileName: file.fileName,
        fileSize: file.fileSize,
        uploadedAt: file.uploadedAt,
        source: file.source,
      })),
    ]);
  };

  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleClose = (nextOpen: boolean) => {
    if (!nextOpen) setFiles([]);
    onOpenChange(nextOpen);
  };

  const handleProcess = () => {
    if (files.length === 0) return;
    onProcessDocument(files);
    setFiles([]);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl p-0 gap-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="px-6 pt-6 pb-4 space-y-2">
          <DialogTitle className="flex items-center gap-2 flex-wrap text-lg text-gray-900">
            <Upload className="w-5 h-5 text-blue-600" />
            Create Program from Document
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide bg-[#f3e8ff] text-[#8200db]">
              Fast Track
            </span>
          </DialogTitle>
          <DialogDescription>
            Upload a document and let AI automatically extract your program details
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-2">
              <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-blue-900">Recommended Document Types</h4>
                <p className="text-xs text-blue-800 mt-1">
                  For best results, upload documents that contain comprehensive program information:
                </p>
              </div>
            </div>
            <ul className="pl-7 space-y-1 text-xs text-blue-800">
              <li>
                • <span className="font-bold">Grant Proposals</span> - Contains mission, goals, locations, and populations served
              </li>
              <li>
                • <span className="font-bold">Annual Reports</span> - Includes impact data, program descriptions, and service areas
              </li>
              <li>
                • <span className="font-bold">Program Descriptions/Brochures</span> - Detailed overview of services and target populations
              </li>
              <li>
                • <span className="font-bold">Strategic Plans</span> - Outlines mission, vision, and program objectives
              </li>
              <li>
                • <span className="font-bold">IRS Form 990</span> - Contains organizational mission and program descriptions
              </li>
              <li>
                • <span className="font-bold">Program Fact Sheets</span> - Summarizes key program details and impact
              </li>
            </ul>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Document <span className="text-red-500">*</span>
            </label>
            <label
              className="border-2 border-dashed border-gray-300 rounded-lg py-7 text-center hover:border-teal-400 transition-colors cursor-pointer block"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-2">
                <Upload className="w-4 h-4 text-teal-600" />
              </div>
              <p className="text-sm text-teal-600 font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 25MB</p>
              <input type="file" accept=".pdf,.doc,.docx" multiple className="hidden" onChange={handleInputChange} />
            </label>
          </div>

          <CloudDocumentImport onImport={handleCloudImport} />

          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-red-500" />
                      {(file.source === "microsoft" || file.source === "google") && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                          <ProviderBadgeIcon provider={file.source} className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{file.fileName}</p>
                      <p className="text-xs text-gray-500">{file.fileSize}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFile(file.id)}
                    className="text-red-500 hover:text-red-600 transition-colors p-1 flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <Button variant="outline" onClick={() => handleClose(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleProcess}
            disabled={files.length === 0}
            className="bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-600"
          >
            Process Document
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
