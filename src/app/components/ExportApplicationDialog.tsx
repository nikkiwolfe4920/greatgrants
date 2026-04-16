import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  FileText,
  Download,
  CheckCircle2,
  Folder,
  File,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Package
} from "lucide-react";
import { Button } from "./ui/button";
import logoMark from "figma:asset/13e1a83af014d5259eb6cef7298fecb2bcd3b937.png";

interface ExportApplicationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  applicationTitle: string;
  applicationId: string;
}

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
}

const DOCUMENT_SECTIONS = [
  { id: 'narrative', label: 'Project Narrative', pages: [1, 20] },
  { id: 'budget-narrative', label: 'Budget Narrative', pages: [21, 35] },
  { id: 'compliance', label: 'Compliance / Certifications', pages: [36, 50] },
  { id: 'resumes', label: 'Resumes', pages: [51, 70] },
  { id: 'letters', label: 'Letters of Support', pages: [71, 95] },
  { id: 'logic-models', label: 'Logic Models', pages: [96, 116] },
];

const CHECKLIST_ITEMS = [
  { label: 'Project Narrative Compiled', delay: 0 },
  { label: 'Budget Table Ready', delay: 300 },
  { label: 'Budget Narrative Ready', delay: 600 },
  { label: 'Compliance Documents Ready', delay: 900 },
  { label: 'Attachments Organized', delay: 1200 },
];

export function ExportApplicationDialog({
  isOpen,
  onClose,
  applicationTitle,
  applicationId
}: ExportApplicationDialogProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showChecklist, setShowChecklist] = useState(true);
  const [checklistComplete, setChecklistComplete] = useState<number[]>([]);
  const [acknowledgeChecked, setAcknowledgeChecked] = useState(false);
  const [markAsSubmitted, setMarkAsSubmitted] = useState(false);
  const totalPages = 116;

  // Loading state effect with checklist animation
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setChecklistComplete([]);
      setAcknowledgeChecked(false);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Animate checklist items
        CHECKLIST_ITEMS.forEach((item, index) => {
          setTimeout(() => {
            setChecklistComplete(prev => [...prev, index]);
          }, item.delay);
        });
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Get current document label based on page
  const getCurrentDocumentLabel = () => {
    const section = DOCUMENT_SECTIONS.find(s => 
      currentPage >= s.pages[0] && currentPage <= s.pages[1]
    );
    return section?.label || 'Document';
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleExport = () => {
    alert('Downloading Grants.gov Submission Package...');
  };

  if (!isOpen) return null;

  // Page content renderer
  const renderPageContent = () => {
    if (currentPage === 1) {
      return (
        <>
          {/* Page 1: Grant Application Package Cover */}
          <div className="space-y-6">
            {/* Header with Logo */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <div className="flex items-center gap-4">
                <img 
                  src={logoMark} 
                  alt="Great Grants" 
                  className="h-10 w-auto"
                />
                <div className="w-px h-10 bg-gray-300"></div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Grant Application Package
                  </h1>
                </div>
              </div>
            </div>

            {/* Grant Opportunity Details Table */}
            <div className="space-y-3">
              <div className="grid grid-cols-[200px,1fr] gap-0 border border-gray-900">
                <div className="px-4 py-2.5 bg-white border-b border-gray-900 font-semibold text-sm">
                  Opportunity Title:
                </div>
                <div className="px-4 py-2.5 bg-white border-b border-l border-gray-900 text-sm">
                  {applicationTitle}
                </div>

                <div className="px-4 py-2.5 bg-white border-b border-gray-900 font-semibold text-sm">
                  Offering Agency:
                </div>
                <div className="px-4 py-2.5 bg-white border-b border-l border-gray-900 text-sm">
                  Administration for Community Living (ACL)
                </div>

                <div className="px-4 py-2.5 bg-white border-b border-gray-900 font-semibold text-sm">
                  CFDA Number:
                </div>
                <div className="px-4 py-2.5 bg-white border-b border-l border-gray-900 text-sm">
                  93.448
                </div>

                <div className="px-4 py-2.5 bg-white border-b border-gray-900 font-semibold text-sm">
                  CFDA Description:
                </div>
                <div className="px-4 py-2.5 bg-white border-b border-l border-gray-900 text-sm">
                  Assistive Technology Alternative Financing Program
                </div>

                <div className="px-4 py-2.5 bg-white border-b border-gray-900 font-semibold text-sm">
                  Opportunity Number:
                </div>
                <div className="px-4 py-2.5 bg-white border-b border-l border-gray-900 text-sm">
                  HHS-2026-ACL-AT-0001
                </div>

                <div className="px-4 py-2.5 bg-white border-b border-gray-900 font-semibold text-sm">
                  Competition ID:
                </div>
                <div className="px-4 py-2.5 bg-white border-b border-l border-gray-900 text-sm">
                  HHS-2026-ACL-AT-0001-018543
                </div>

                <div className="px-4 py-2.5 bg-white border-b border-gray-900 font-semibold text-sm">
                  Opportunity Open Date:
                </div>
                <div className="px-4 py-2.5 bg-white border-b border-l border-gray-900 text-sm">
                  01/15/2026
                </div>

                <div className="px-4 py-2.5 bg-white border-b border-gray-900 font-semibold text-sm">
                  Opportunity Close Date:
                </div>
                <div className="px-4 py-2.5 bg-white border-b border-l border-gray-900 text-sm">
                  06/30/2026
                </div>

                <div className="px-4 py-2.5 bg-white border-gray-900 font-semibold text-sm">
                  Agency Contact:
                </div>
                <div className="px-4 py-2.5 bg-white border-l border-gray-900 text-sm">
                  ACLGrants@acl.hhs.gov
                </div>
              </div>

              {/* Eligibility Notice */}
              <div className="py-3 text-xs text-gray-700 italic border-b border-gray-300">
                This opportunity is only open to organizations, applicants who are submitting grant applications on behalf of a company, state, local or tribal government, academia, or other type of organization.
              </div>

              {/* Application Filing Name */}
              <div className="grid grid-cols-[200px,1fr] gap-0 border border-gray-900">
                <div className="px-4 py-2.5 bg-white font-semibold text-sm">
                  Application Filing Name:
                </div>
                <div className="px-4 py-2.5 bg-white border-l border-gray-900 text-sm">
                  Expanding Access to Assistive Technology Financing
                </div>
              </div>
            </div>

            {/* Select Forms to Complete */}
            <div className="mt-6">
              <div className="bg-teal-600 text-white px-4 py-2.5 font-semibold text-sm">
                Application Package Contents
              </div>
              <div className="border border-gray-900 border-t-0">
                {/* Mandatory Section */}
                <div className="px-4 py-3 border-b border-gray-300">
                  <h4 className="font-bold text-sm mb-3">Mandatory Documents</h4>
                  <div className="space-y-2 text-sm">
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Application for Federal Assistance (SF-424)
                    </div>
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Project Abstract Summary
                    </div>
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Project Narrative Attachment
                    </div>
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Budget Narrative Attachment
                    </div>
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Budget Information for Non-Construction Programs (SF-424A)
                    </div>
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Assurances for Non-Construction Programs (SF-424B)
                    </div>
                  </div>
                </div>

                {/* Attachments Section */}
                <div className="px-4 py-3">
                  <h4 className="font-bold text-sm mb-3">Supporting Documents</h4>
                  <div className="space-y-2 text-sm">
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Key Personnel Resumes
                    </div>
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Letters of Support / MOUs
                    </div>
                    <div className="border-b border-dotted border-gray-300 pb-2">
                      • Logic Models
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      // Generic content for other pages
      return (
        <div className="space-y-4">
          <div className="border-2 border-gray-900 p-6">
            <h2 className="font-bold text-xl mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
              {getCurrentDocumentLabel()}
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>This is page {currentPage} of your grant application package.</p>
              <p className="border-l-4 border-teal-600 pl-4 py-2 bg-gray-50">
                Content for <strong>{getCurrentDocumentLabel()}</strong> section would appear here in the actual export.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="border border-gray-300 p-3 bg-white">
                  <div className="text-xs text-gray-500 mb-1">Document Section</div>
                  <div className="font-semibold">{getCurrentDocumentLabel()}</div>
                </div>
                <div className="border border-gray-300 p-3 bg-white">
                  <div className="text-xs text-gray-500 mb-1">Page Number</div>
                  <div className="font-semibold">{currentPage} of {totalPages}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />

          {/* Main Dialog */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="w-[95vw] h-[95vh] max-w-[1600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Loading State */}
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Preparing Application Package
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Compiling your grant application...</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Compact Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-teal-600" />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Application Preview
                        </h2>
                        <p className="text-xs text-gray-500">{applicationTitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={markAsSubmitted}
                          onChange={(e) => setMarkAsSubmitted(e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer"
                        />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Mark as submitted
                        </span>
                      </label>
                      <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-1 overflow-hidden">
                    {/* Main Preview Area - Left Side */}
                    <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col">
                      {/* Document Label - Sticky at top */}
                      <div className="sticky top-0 z-10 bg-teal-600 px-6 py-3 border-b border-teal-700">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-white" />
                          <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            Viewing: {getCurrentDocumentLabel()}
                          </span>
                        </div>
                      </div>

                      {/* Document Viewer */}
                      <div className="flex-1 p-8 max-w-5xl mx-auto w-full">
                        {/* DocuSign-style Paper */}
                        <div 
                          className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden"
                          style={{ fontFamily: 'Cabin, sans-serif' }}
                        >
                          <div className="p-12">
                            {renderPageContent()}
                          </div>
                        </div>

                        {/* DocuSign-style Pagination */}
                        <div className="mt-6 mb-4 flex items-center justify-center gap-4">
                          <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                          </button>
                          
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              value={currentPage}
                              onChange={(e) => {
                                const val = parseInt(e.target.value);
                                if (val >= 1 && val <= totalPages) setCurrentPage(val);
                              }}
                              className="w-16 px-3 py-2 text-center border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <span className="text-sm text-gray-600">of {totalPages}</span>
                          </div>

                          <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Sidebar - Export Package Info */}
                    <div className="w-[380px] border-l border-gray-200 bg-white flex flex-col">
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Preparation Checklist */}
                        <div>
                          <h3 className="font-semibold text-sm text-gray-900 mb-3 flex items-center gap-2">
                            <Package className="w-4 h-4 text-teal-600" />
                            Package Preparation
                          </h3>
                          <div className="space-y-2">
                            {CHECKLIST_ITEMS.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ 
                                  opacity: checklistComplete.includes(index) ? 1 : 0.3,
                                  x: 0 
                                }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle2 
                                  className={`w-4 h-4 flex-shrink-0 ${
                                    checklistComplete.includes(index) 
                                      ? 'text-green-600' 
                                      : 'text-gray-300'
                                  }`} 
                                />
                                <span className={
                                  checklistComplete.includes(index)
                                    ? 'text-gray-900'
                                    : 'text-gray-400'
                                }>
                                  {item.label}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Export Structure */}
                        <div>
                          <h3 className="font-semibold text-sm text-gray-900 mb-3 flex items-center gap-2">
                            <Folder className="w-4 h-4 text-teal-600" />
                            Export Structure
                          </h3>
                          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-xs">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 font-semibold text-teal-700">
                                <Folder className="w-3.5 h-3.5" />
                                Grant_Application_Export.zip
                              </div>
                              <div className="ml-4 space-y-1">
                                <div className="flex items-center gap-2 text-gray-700">
                                  <File className="w-3 h-3 text-red-600" />
                                  Project_Narrative.pdf
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                  <File className="w-3 h-3 text-green-600" />
                                  Budget_Table.xlsx
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                  <File className="w-3 h-3 text-red-600" />
                                  Budget_Narrative.pdf
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                  <File className="w-3 h-3 text-red-600" />
                                  Compliance_Certifications.pdf
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                  <Folder className="w-3.5 h-3.5 text-teal-600" />
                                  Attachments
                                </div>
                                <div className="ml-4 space-y-1">
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <span className="text-gray-400">•</span>
                                    Resumes.pdf
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <span className="text-gray-400">•</span>
                                    Letters_of_Support.pdf
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <span className="text-gray-400">•</span>
                                    Logic_Models.pdf
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Button */}
                      <div className="p-6 border-t border-gray-200 bg-gray-50">
                        {/* Acknowledgement Checkbox */}
                        <label className="flex items-start gap-3 mb-4 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={acknowledgeChecked}
                            onChange={(e) => setAcknowledgeChecked(e.target.checked)}
                            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer mt-0.5 flex-shrink-0"
                          />
                          <span className="text-xs text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                            I acknowledge that I am fully responsible for the content of this document and our services as support in your submission process.
                          </span>
                        </label>

                        <Button
                          onClick={handleExport}
                          disabled={!acknowledgeChecked}
                          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Download className="w-5 h-5" />
                          Download Grants.gov Submission Package
                        </Button>
                        <p className="text-xs text-gray-500 text-center mt-3">
                          Ready for manual upload to Grants.gov
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}