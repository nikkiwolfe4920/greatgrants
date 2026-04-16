import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Link2,
  Mail,
  FileText,
  Copy,
  Check,
  Download,
  ExternalLink
} from "lucide-react";
import { Button } from "./ui/button";

interface Grant {
  id: string;
  title: string;
  description: string;
  status: string;
  maxAmount: number;
  minAmount?: number;
  location: string;
  closeDate?: string;
  overview?: string;
  difficulty: string;
  category: string;
}

interface ShareGrantModalProps {
  isOpen: boolean;
  onClose: () => void;
  grant: Grant;
}

export function ShareGrantModal({ isOpen, onClose, grant }: ShareGrantModalProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const grantUrl = `${window.location.origin}/grant/${grant.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(grantUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const emailSubject = `Grant Opportunity: ${grant.title}`;
  const emailBody = `Hi there,

I found this grant opportunity that might be a great fit for us:

${grant.title}

Key Details:
• Funding: Up to $${grant.maxAmount.toLocaleString()}
• Location: ${grant.location}
• Category: ${grant.category}
• Difficulty: ${grant.difficulty}
${grant.closeDate ? `• Closing Date: ${grant.closeDate}` : ''}

${grant.description}

View full details here: ${grantUrl}

Let me know what you think!`;

  const handleCopyEmailTemplate = () => {
    navigator.clipboard.writeText(emailBody);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleExportPDF = () => {
    alert("PDF export would be triggered here. This would generate a professional PDF of the grant details.");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
                  Share Grant
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {grant.title}
                </p>
              </div>
              <button
                onClick={onClose}
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[calc(100vh-240px)] overflow-y-auto">
            <div className="space-y-6">
              {/* Copy Link */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-teal-300 transition-colors">
                <div className="flex items-start gap-4">
                  <Link2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Copy Link
                    </h3>
                    <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Share this grant opportunity via link
                    </p>
                    
                    {/* Link Preview */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-mono break-all">
                        <ExternalLink className="w-4 h-4 flex-shrink-0 text-gray-400" />
                        <span className="truncate">{grantUrl}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleCopyLink}
                        className={`flex-1 ${copiedLink ? "bg-green-600 hover:bg-green-700" : "bg-teal-600 hover:bg-teal-700"} text-white`}
                      >
                        {copiedLink ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied to Clipboard
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Link
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Synopsis */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-teal-300 transition-colors">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Email Synopsis
                    </h3>
                    <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Send a pre-formatted email with grant details
                    </p>
                    
                    {/* Email Preview */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
                      <div className="text-xs text-gray-500 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        <strong className="text-gray-700">Subject:</strong> {emailSubject}
                      </div>
                      <div className="text-xs text-gray-700 max-h-32 overflow-y-auto whitespace-pre-line font-mono leading-relaxed">
                        {emailBody}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleEmailClick}
                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Open in Email
                      </Button>
                      <Button
                        onClick={handleCopyEmailTemplate}
                        variant="outline"
                        className={`bg-white ${copiedEmail ? "border-green-600 text-green-600" : "border-gray-300"}`}
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Export PDF */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-teal-300 transition-colors">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Export as PDF
                    </h3>
                    <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Download a professional PDF document to share via email, Slack, or other platforms. Perfect for offline review or forwarding to team members and stakeholders.
                    </p>
                    
                    {/* PDF Preview Info */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span style={{ fontFamily: 'Cabin, sans-serif' }}>
                          <strong>Includes:</strong> Overview, eligibility, requirements, deadlines
                        </span>
                      </div>
                    </div>

                    <Button
                      onClick={handleExportPDF}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-between">
            <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Share responsibly. Grant details are subject to change.
            </p>
            <Button
              onClick={onClose}
              variant="outline"
              className="bg-white border-gray-300"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}