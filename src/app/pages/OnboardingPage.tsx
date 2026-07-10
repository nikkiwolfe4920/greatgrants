import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { Logo } from "@/app/components/Logo";
import {
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Upload,
  Trash2,
  FileText,
  Lightbulb,
  HelpCircle,
  Info
} from "lucide-react";
import { CloudDocumentImport, ProviderBadgeIcon, type ImportedCloudFile } from "@/app/components/CloudDocumentImport";

interface DocumentationFile {
  id: string;
  fileName: string;
  fileSize: string;
  uploadedAt: number;
  source: "local" | "microsoft" | "google";
}

interface OnboardingData {
  uei: string;
  website: string;
  previousApplications: DocumentationFile[];
  form990s: DocumentationFile[];
}

type OnboardingMethod = "uei" | "website" | "upload" | "990";

type UploadField = "previousApplications" | "form990s";

const isValidUrl = (url: string): boolean => {
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

// How much of the organization profile each method auto-fills, plus the perks
// worth surfacing so users can weigh their options before picking one.
const AUTO_FILL_INFO: Record<OnboardingMethod, { percent: number; perks: string[] }> = {
  uei: {
    percent: 95,
    perks: [
      "Instant profile completion",
      "Pre-filled applications",
      "Accurate grant matching",
      "Little manual entry",
    ],
  },
  website: {
    percent: 30,
    perks: ["Most setup required", "Standard accuracy"],
  },
  upload: {
    percent: 50,
    perks: ["Org details auto-filled", "Moderate automation"],
  },
  "990": {
    percent: 50,
    perks: ["Org details auto-filled", "Moderate automation"],
  },
};

function AutoFillMeter({ method }: { method: OnboardingMethod }) {
  const { percent, perks } = AUTO_FILL_INFO[method];
  const tone = percent >= 80 ? "high" : percent >= 45 ? "medium" : "low";
  const barColor = tone === "high" ? "bg-teal-600" : tone === "medium" ? "bg-teal-400" : "bg-gray-400";
  const textColor = tone === "high" ? "text-teal-700" : tone === "medium" ? "text-teal-600" : "text-gray-500";

  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${percent}%` }} />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-1 text-xs font-semibold ${textColor} hover:underline flex-shrink-0`}
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            {percent}% Auto-Fill
            <Info className="w-3 h-3" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-64 p-3"
          align="start"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-xs font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Perks
          </p>
          <ul className="space-y-1.5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-1.5 text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                {perk}
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function OnboardingPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<OnboardingData>({
    uei: "",
    website: "",
    previousApplications: [],
    form990s: []
  });

  // Only one verification method may be used at a time
  const [activeMethod, setActiveMethod] = useState<OnboardingMethod | null>(null);

  // UEI Verification state
  const [ueiVerificationStatus, setUeiVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');
  const [verifiedUEI, setVerifiedUEI] = useState<string>('');
  const verificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Website verification state
  const [websiteVerificationStatus, setWebsiteVerificationStatus] = useState<'idle' | 'verified' | 'failed'>('idle');

  // Cleanup verification timeout on unmount
  useEffect(() => {
    return () => {
      if (verificationTimeoutRef.current) {
        clearTimeout(verificationTimeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = (field: keyof OnboardingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Handle UEI verification
    if (field === 'uei') {
      // Clear any existing verification timeout
      if (verificationTimeoutRef.current) {
        clearTimeout(verificationTimeoutRef.current);
      }

      // Reset verification status when user modifies the UEI
      if (value !== verifiedUEI) {
        setUeiVerificationStatus('idle');
      }

      // Only trigger verification if the value is exactly 12 digits
      if (value.length === 12 && /^\d{12}$/.test(value)) {
        setUeiVerificationStatus('verifying');

        // Simulate API call with delay
        verificationTimeoutRef.current = setTimeout(() => {
          if (value === '123456789012') {
            setUeiVerificationStatus('verified');
            setVerifiedUEI(value);
          } else {
            setUeiVerificationStatus('failed');
            setVerifiedUEI('');
          }
        }, 1500); // 1.5 second delay for realistic verification
      } else {
        // Reset if not 12 digits
        setUeiVerificationStatus('idle');
        setVerifiedUEI('');
      }
    }

    // Handle website validation as the user types
    if (field === 'website') {
      setWebsiteVerificationStatus(isValidUrl(value) ? 'verified' : 'idle');
    }
  };

  const handleUeiBlur = () => {
    const value = formData.uei.trim();
    if (!value) {
      setUeiVerificationStatus('idle');
      return;
    }
    if (ueiVerificationStatus === 'verifying' || ueiVerificationStatus === 'verified') {
      return;
    }
    setUeiVerificationStatus('failed');
    setVerifiedUEI('');
  };

  const handleSelectMethod = (method: OnboardingMethod) => {
    if (method === activeMethod) return;

    // Clear any data entered for the previously active method so only
    // one verification path is ever active at a time.
    if (verificationTimeoutRef.current) {
      clearTimeout(verificationTimeoutRef.current);
    }
    setFormData({
      uei: "",
      website: "",
      previousApplications: [],
      form990s: []
    });
    setUeiVerificationStatus('idle');
    setVerifiedUEI('');
    setWebsiteVerificationStatus('idle');
    setActiveMethod(method);
  };

  const handleWebsiteBlur = () => {
    const value = formData.website.trim();
    if (!value) {
      setWebsiteVerificationStatus('idle');
      return;
    }
    setWebsiteVerificationStatus(isValidUrl(value) ? 'verified' : 'failed');
  };

  const formatFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  const handleFileSelect = (field: UploadField, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const now = Date.now();
    const newFiles: DocumentationFile[] = Array.from(files)
      .filter(file => {
        const sizeInMB = file.size / (1024 * 1024);
        return sizeInMB <= 10 && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type);
      })
      .map((file, index) => ({
        id: `${now}-${index}`,
        fileName: file.name,
        fileSize: formatFileSize(file.size),
        uploadedAt: now,
        source: "local" as const,
      }));

    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ...newFiles]
    }));
  };

  const handleCloudImport = (field: UploadField, files: ImportedCloudFile[]) => {
    const newFiles: DocumentationFile[] = files.map(file => ({
      id: file.id,
      fileName: file.fileName,
      fileSize: file.fileSize,
      uploadedAt: file.uploadedAt,
      source: file.source,
    }));

    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ...newFiles]
    }));
  };

  const handleDocInputChange = (field: UploadField, e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(field, e.target.files);
    e.target.value = "";
  };

  const handleDocDrop = (field: UploadField, e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    handleFileSelect(field, e.dataTransfer.files);
  };

  const handleRemoveFile = (field: UploadField, id: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter(file => file.id !== id)
    }));
  };

  const isFormValid = () => {
    if (activeMethod === 'uei') return ueiVerificationStatus === 'verified';
    if (activeMethod === 'website') return websiteVerificationStatus === 'verified';
    if (activeMethod === 'upload') return formData.previousApplications.length > 0;
    if (activeMethod === '990') return formData.form990s.length > 0;
    return false;
  };

  const handleCompleteSetup = () => {
    if (!isFormValid()) return;

    // Store onboarding data in localStorage
    localStorage.setItem('onboardingComplete', 'true');

    // Only store fields that have values
    if (formData.uei) {
      localStorage.setItem('organizationUEI', formData.uei);
    }
    if (formData.website) {
      localStorage.setItem('organizationWebsite', formData.website);
    }

    // Navigate to dashboard
    navigate('/');
  };

  const handleSkip = () => {
    // User opted out of verification - they'll fill in details manually later
    localStorage.setItem('onboardingComplete', 'true');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Logo />
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span>Need Help?</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Setup Progress
          </div>
        </div>
        <div className="h-1 bg-gray-200">
          <div className="h-full bg-gradient-to-r from-teal-600 to-teal-500" style={{ width: '100%' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Welcome Message */}
          <div className="flex flex-col">
            <h1
              className="text-3xl text-gray-900 mb-4"
              style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}
            >
              Welcome to Great Grants
            </h1>
            <p className="text-gray-600 text-base mb-8 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Let's get you set up in just a few minutes. We'll need some basic information to help you start applying for grants immediately.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Quick Setup
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Complete your profile in under 5 minutes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    AI-Powered Assistance
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Our AI learns from your previous applications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Start Applying Today
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Begin your grant applications immediately
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Organization Information
            </h2>
            <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Choose one way to verify your organization. You can add the others later from your profile settings.
            </p>

            <div className="space-y-6">
              <RadioGroup
                value={activeMethod ?? ""}
                onValueChange={(value) => handleSelectMethod(value as OnboardingMethod)}
                className="space-y-3"
              >
                {/* UEI Option */}
                <div
                  className={`rounded-lg border transition-colors ${
                    activeMethod === 'uei' ? 'border-teal-500 bg-teal-50/30' : 'border-gray-200'
                  }`}
                >
                  <label htmlFor="method-uei" className="flex items-start gap-3 p-4 cursor-pointer">
                    <RadioGroupItem value="uei" id="method-uei" className="mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Unique Entity Identifier (UEI)
                        </span>
                        {ueiVerificationStatus === 'verifying' && (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <Loader2 className="w-3 h-3 text-teal-600 animate-spin" />
                            <span className="text-xs text-teal-600">Verifying...</span>
                          </div>
                        )}
                        {ueiVerificationStatus === 'verified' && (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-teal-600" />
                            <span className="text-xs text-teal-600 font-medium">Verified: {verifiedUEI}</span>
                          </div>
                        )}
                        {ueiVerificationStatus === 'failed' && (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <AlertTriangle className="w-3 h-3 text-red-600" />
                            <span className="text-xs text-red-600 font-medium">Verification Failed</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Required for federal grant applications (formerly DUNS number)
                      </p>
                      <AutoFillMeter method="uei" />
                    </div>
                  </label>

                  {activeMethod === 'uei' && (
                    <div className="px-4 pb-4 pl-[46px] space-y-1.5">
                      <Input
                        id="uei"
                        value={formData.uei}
                        onChange={(e) => handleInputChange('uei', e.target.value)}
                        onBlur={handleUeiBlur}
                        placeholder="Enter 12-digit UEI"
                        maxLength={12}
                        autoFocus
                        className={`focus-visible:ring-2 focus-visible:ring-teal-500 ${
                          ueiVerificationStatus === 'verified' ? 'border-teal-500 bg-teal-50' :
                          ueiVerificationStatus === 'failed' ? 'border-red-500 bg-red-50' : ''
                        }`}
                      />

                      {ueiVerificationStatus === 'failed' && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-red-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                UEI Verification Failed
                              </p>
                              <p className="text-xs text-red-700 leading-relaxed mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                The UEI you entered could not be verified. Please check the following:
                              </p>
                              <ul className="text-xs text-red-700 space-y-1 list-disc list-inside" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                <li>Double-check your UEI to ensure it's correct</li>
                                <li>Your UEI should be exactly 12 digits</li>
                                <li>Find your UEI in your SAM.gov account under "Entity Registration"</li>
                              </ul>
                              <div className="mt-3 pt-2 border-t border-red-200">
                                <p className="text-xs font-medium text-red-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                  Don't have a UEI?
                                </p>
                                <a
                                  href="https://sam.gov"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-red-700 underline hover:text-red-800"
                                  style={{ fontFamily: 'Cabin, sans-serif' }}
                                >
                                  Register at SAM.gov →
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Website Option */}
                <div
                  className={`rounded-lg border transition-colors ${
                    activeMethod === 'website' ? 'border-teal-500 bg-teal-50/30' : 'border-gray-200'
                  }`}
                >
                  <label htmlFor="method-website" className="flex items-start gap-3 p-4 cursor-pointer">
                    <RadioGroupItem value="website" id="method-website" className="mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Organization Website
                        </span>
                        {websiteVerificationStatus === 'verified' && (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-teal-600" />
                            <span className="text-xs text-teal-600 font-medium">Verified</span>
                          </div>
                        )}
                        {websiteVerificationStatus === 'failed' && (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <AlertTriangle className="w-3 h-3 text-red-600" />
                            <span className="text-xs text-red-600 font-medium">Invalid URL</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Your organization's official website URL
                      </p>
                      <AutoFillMeter method="website" />
                    </div>
                  </label>

                  {activeMethod === 'website' && (
                    <div className="px-4 pb-4 pl-[46px]">
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        onBlur={handleWebsiteBlur}
                        placeholder="https://www.yourorganization.org"
                        autoFocus
                        className={`focus-visible:ring-2 focus-visible:ring-teal-500 ${
                          websiteVerificationStatus === 'verified' ? 'border-teal-500 bg-teal-50' :
                          websiteVerificationStatus === 'failed' ? 'border-red-500 bg-red-50' : ''
                        }`}
                      />
                    </div>
                  )}
                </div>

                {/* Upload Option */}
                <div
                  className={`rounded-lg border transition-colors ${
                    activeMethod === 'upload' ? 'border-teal-500 bg-teal-50/30' : 'border-gray-200'
                  }`}
                >
                  <label htmlFor="method-upload" className="flex items-start gap-3 p-4 cursor-pointer">
                    <RadioGroupItem value="upload" id="method-upload" className="mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Upload Previous Grant Applications
                      </span>
                      <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Upload past applications so our AI can learn your writing style and improve suggestions
                      </p>
                      <AutoFillMeter method="upload" />
                    </div>
                  </label>

                  {activeMethod === 'upload' && (
                    <div className="px-4 pb-4 pl-[46px] space-y-1.5">
                      {/* Upload Area */}
                      <label
                        className="border-2 border-dashed border-gray-300 rounded-lg py-4 text-center hover:border-teal-400 transition-colors cursor-pointer block"
                        onDrop={(e) => handleDocDrop('previousApplications', e)}
                        onDragOver={(e) => e.preventDefault()}
                      >
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-1.5">
                          <Upload className="w-4 h-4 text-teal-600" />
                        </div>
                        <p className="text-sm text-teal-600 font-medium" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          PDF, DOC, DOCX up to 10MB each
                        </p>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleDocInputChange('previousApplications', e)}
                          className="hidden"
                        />
                      </label>

                      <CloudDocumentImport onImport={(files) => handleCloudImport('previousApplications', files)} />

                      {/* Uploaded Files List */}
                      {formData.previousApplications.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {formData.previousApplications.map((file) => (
                            <div
                              key={file.id}
                              className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-[10px]"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="relative w-10 h-10 rounded-[10px] bg-red-50 flex items-center justify-center flex-shrink-0">
                                  <FileText className="w-5 h-5 text-red-500" />
                                  {(file.source === "microsoft" || file.source === "google") && (
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                                      <ProviderBadgeIcon provider={file.source} className="w-2.5 h-2.5" />
                                    </div>
                                  )}
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    {file.fileName}
                                  </p>
                                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    {file.fileSize} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                                    {file.source === "microsoft" && " • Imported from Microsoft"}
                                    {file.source === "google" && " • Imported from Google Drive"}
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile('previousApplications', file.id)}
                                className="text-red-500 hover:text-red-600 transition-colors p-1 flex-shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Security Notice */}
                      <div className="flex items-start gap-2 mt-3 p-3 bg-gray-50 rounded-lg">
                        <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Your documents are encrypted and secure. We analyze them to provide better AI assistance but never share them with third parties.
                        </p>
                      </div>

                      {/* Pro Tip */}
                      <div className="mt-3 p-4 bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                              Pro Tip
                            </p>
                            <p className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                              Uploading previous grant applications helps our AI learn your organization's voice and priorities, resulting in better grant recommendations and writing assistance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 990 Option */}
                <div
                  className={`rounded-lg border transition-colors ${
                    activeMethod === '990' ? 'border-teal-500 bg-teal-50/30' : 'border-gray-200'
                  }`}
                >
                  <label htmlFor="method-990" className="flex items-start gap-3 p-4 cursor-pointer">
                    <RadioGroupItem value="990" id="method-990" className="mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Upload a 990
                      </span>
                      <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Upload your IRS Form 990 so we can pull your financials, mission, and programs directly into your profile
                      </p>
                      <AutoFillMeter method="990" />
                    </div>
                  </label>

                  {activeMethod === '990' && (
                    <div className="px-4 pb-4 pl-[46px] space-y-1.5">
                      {/* Upload Area */}
                      <label
                        className="border-2 border-dashed border-gray-300 rounded-lg py-4 text-center hover:border-teal-400 transition-colors cursor-pointer block"
                        onDrop={(e) => handleDocDrop('form990s', e)}
                        onDragOver={(e) => e.preventDefault()}
                      >
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-1.5">
                          <Upload className="w-4 h-4 text-teal-600" />
                        </div>
                        <p className="text-sm text-teal-600 font-medium" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          PDF, DOC, DOCX up to 10MB each
                        </p>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleDocInputChange('form990s', e)}
                          className="hidden"
                        />
                      </label>

                      <CloudDocumentImport onImport={(files) => handleCloudImport('form990s', files)} />

                      {/* Uploaded Files List */}
                      {formData.form990s.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {formData.form990s.map((file) => (
                            <div
                              key={file.id}
                              className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-[10px]"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="relative w-10 h-10 rounded-[10px] bg-red-50 flex items-center justify-center flex-shrink-0">
                                  <FileText className="w-5 h-5 text-red-500" />
                                  {(file.source === "microsoft" || file.source === "google") && (
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                                      <ProviderBadgeIcon provider={file.source} className="w-2.5 h-2.5" />
                                    </div>
                                  )}
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    {file.fileName}
                                  </p>
                                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    {file.fileSize} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                                    {file.source === "microsoft" && " • Imported from Microsoft"}
                                    {file.source === "google" && " • Imported from Google Drive"}
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile('form990s', file.id)}
                                className="text-red-500 hover:text-red-600 transition-colors p-1 flex-shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Security Notice */}
                      <div className="flex items-start gap-2 mt-3 p-3 bg-gray-50 rounded-lg">
                        <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Your documents are encrypted and secure. We analyze them to provide better AI assistance but never share them with third parties.
                        </p>
                      </div>

                      {/* Pro Tip */}
                      <div className="mt-3 p-4 bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                              Pro Tip
                            </p>
                            <p className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                              Your 990 already contains verified financials and program details — uploading it lets us auto-fill those fields instead of you re-typing them.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </RadioGroup>

              {/* Complete Setup Button */}
              <Button
                onClick={handleCompleteSetup}
                disabled={!isFormValid()}
                className="w-full text-sm font-medium transition-colors mt-6 bg-teal-600 hover:bg-teal-700 text-white"
              >
                Complete Setup & Get Started
              </Button>

              {/* Tertiary skip option */}
              <button
                type="button"
                onClick={handleSkip}
                className="w-full text-center text-xs text-gray-500 hover:text-gray-700 underline transition-colors"
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                Skip, Proceed with Manual Entry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-center gap-1">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Your information is encrypted and secure
          </p>
        </div>
      </div>
    </div>
  );
}
