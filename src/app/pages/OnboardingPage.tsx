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
  Info,
  Circle
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

// Step 1 identifies the organization, step 2 gives us something to learn from.
// Both are required; within each step the two options are interchangeable.
type IdentityMethod = "uei" | "website";
type DocumentMethod = "application" | "990";
type OnboardingMethod = IdentityMethod | DocumentMethod;

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
  application: {
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

// Visual separator that spells out the either/or relationship between the two
// options in a step, so "pick one of these" never has to be inferred.
function OrDivider() {
  return (
    <div className="flex items-center gap-3 py-0.5" aria-hidden="true">
      <div className="h-px flex-1 bg-gray-200" />
      <span
        className="text-[11px] font-bold uppercase tracking-widest text-gray-400"
        style={{ fontFamily: 'Cabin, sans-serif' }}
      >
        or
      </span>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function StepStatusPill({ complete }: { complete: boolean }) {
  if (complete) {
    return (
      <span
        className="inline-flex items-center gap-1 rounded-full bg-teal-50 border border-teal-200 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-teal-700 flex-shrink-0"
        style={{ fontFamily: 'Cabin, sans-serif' }}
      >
        <CheckCircle2 className="w-3 h-3" />
        Complete
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center rounded-full bg-red-50 border border-red-200 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-600 flex-shrink-0"
      style={{ fontFamily: 'Cabin, sans-serif' }}
    >
      Required
    </span>
  );
}

interface StepSectionProps {
  step: number;
  title: string;
  requirement: string;
  complete: boolean;
  error?: string;
  headingId: string;
  descriptionId: string;
  errorId: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

function StepSection({
  step,
  title,
  requirement,
  complete,
  error,
  headingId,
  descriptionId,
  errorId,
  containerRef,
  children,
}: StepSectionProps) {
  return (
    <section
      ref={containerRef}
      tabIndex={-1}
      aria-labelledby={headingId}
      className={`rounded-xl border p-5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
        error
          ? 'border-red-300 bg-red-50/40'
          : complete
            ? 'border-teal-200 bg-teal-50/20'
            : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
            complete ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600 border border-gray-300'
          }`}
          style={{ fontFamily: 'Cabin, sans-serif' }}
          aria-hidden="true"
        >
          {complete ? <CheckCircle2 className="w-4 h-4" /> : step}
        </div>
        <div className="flex-1 min-w-0">
          {/* The pill drops below the title on narrow screens so the heading
              isn't squeezed into a three-line column. */}
          <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
            <h3
              id={headingId}
              className="text-base font-semibold text-gray-900"
              style={{ fontFamily: 'Cabin, sans-serif' }}
            >
              Step {step} of 2 · {title}
            </h3>
            <StepStatusPill complete={complete} />
          </div>
          <p
            id={descriptionId}
            className="text-xs text-gray-600 mt-1 leading-relaxed"
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            {requirement}
          </p>
        </div>
      </div>

      <div className="mt-4">{children}</div>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-3 flex items-start gap-1.5 text-xs font-medium text-red-700"
          style={{ fontFamily: 'Cabin, sans-serif' }}
        >
          <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-px" />
          {error}
        </p>
      )}
    </section>
  );
}

interface DocumentUploadPanelProps {
  files: DocumentationFile[];
  proTip: string;
  onFilesSelected: (files: FileList | null) => void;
  onCloudImport: (files: ImportedCloudFile[]) => void;
  onRemove: (id: string) => void;
}

function DocumentUploadPanel({
  files,
  proTip,
  onFilesSelected,
  onCloudImport,
  onRemove,
}: DocumentUploadPanelProps) {
  return (
    <div className="px-4 pb-4 pl-[46px] space-y-1.5">
      <label
        className="border-2 border-dashed border-gray-300 rounded-lg py-4 text-center hover:border-teal-400 transition-colors cursor-pointer block"
        onDrop={(e) => {
          e.preventDefault();
          onFilesSelected(e.dataTransfer.files);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-1.5">
          <Upload className="w-4 h-4 text-teal-600" />
        </div>
        <p className="text-sm text-teal-600 font-medium" style={{ fontFamily: 'Cabin, sans-serif' }}>
          Click to upload or drag and drop
        </p>
        <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
          PDF, DOC, DOCX up to 10MB each · one file is enough
        </p>
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            onFilesSelected(e.target.files);
            e.target.value = "";
          }}
          className="hidden"
        />
      </label>

      <CloudDocumentImport onImport={onCloudImport} />

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file) => (
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
                onClick={() => onRemove(file.id)}
                aria-label={`Remove ${file.fileName}`}
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
              {proTip}
            </p>
          </div>
        </div>
      </div>
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

  // One choice per required step: how we identify the org, and which document
  // we learn from. The two steps are independent of each other.
  const [identityMethod, setIdentityMethod] = useState<IdentityMethod | null>(null);
  const [documentMethod, setDocumentMethod] = useState<DocumentMethod | null>(null);

  // Errors stay hidden until the user tries to continue, then stay live so the
  // messages clear themselves as each requirement is satisfied.
  const [showErrors, setShowErrors] = useState(false);

  // UEI Verification state
  const [ueiVerificationStatus, setUeiVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');
  const [verifiedUEI, setVerifiedUEI] = useState<string>('');
  const verificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Website verification state
  const [websiteVerificationStatus, setWebsiteVerificationStatus] = useState<'idle' | 'verified' | 'failed'>('idle');

  const identityStepRef = useRef<HTMLDivElement | null>(null);
  const documentStepRef = useRef<HTMLDivElement | null>(null);

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

  const handleWebsiteBlur = () => {
    const value = formData.website.trim();
    if (!value) {
      setWebsiteVerificationStatus('idle');
      return;
    }
    setWebsiteVerificationStatus(isValidUrl(value) ? 'verified' : 'failed');
  };

  // Switching the answer inside a step clears only that step's data, so
  // progress on the other required step is never silently thrown away.
  const handleSelectIdentityMethod = (method: IdentityMethod) => {
    if (method === identityMethod) return;

    if (verificationTimeoutRef.current) {
      clearTimeout(verificationTimeoutRef.current);
    }
    setFormData(prev => ({ ...prev, uei: "", website: "" }));
    setUeiVerificationStatus('idle');
    setVerifiedUEI('');
    setWebsiteVerificationStatus('idle');
    setIdentityMethod(method);
  };

  const handleSelectDocumentMethod = (method: DocumentMethod) => {
    if (method === documentMethod) return;

    setFormData(prev => ({ ...prev, previousApplications: [], form990s: [] }));
    setDocumentMethod(method);
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

  const handleRemoveFile = (field: UploadField, id: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter(file => file.id !== id)
    }));
  };

  const isIdentityComplete =
    (identityMethod === 'uei' && ueiVerificationStatus === 'verified') ||
    (identityMethod === 'website' && websiteVerificationStatus === 'verified');

  const isDocumentComplete =
    (documentMethod === 'application' && formData.previousApplications.length > 0) ||
    (documentMethod === '990' && formData.form990s.length > 0);

  const isFormValid = isIdentityComplete && isDocumentComplete;
  const completedSteps = (isIdentityComplete ? 1 : 0) + (isDocumentComplete ? 1 : 0);

  const identityError = (() => {
    if (isIdentityComplete) return undefined;
    if (!identityMethod) return "Choose one: enter a UEI or your organization's website.";
    if (identityMethod === 'uei') {
      if (ueiVerificationStatus === 'verifying') return "Hang tight — we're still verifying that UEI.";
      return "Enter a valid 12-digit UEI, or switch to the website option instead.";
    }
    return "Enter a valid website URL starting with https://, or switch to the UEI option instead.";
  })();

  const documentError = (() => {
    if (isDocumentComplete) return undefined;
    if (!documentMethod) return "Choose one: upload a previous grant application or an IRS Form 990.";
    if (documentMethod === 'application') return "Upload at least one previous grant application, or switch to the Form 990 option instead.";
    return "Upload at least one IRS Form 990, or switch to the previous application option instead.";
  })();

  const handleCompleteSetup = () => {
    if (!isFormValid) {
      // Surface the specific blockers and take the user straight to the first
      // one instead of leaving them staring at an inert button.
      setShowErrors(true);
      const target = !isIdentityComplete ? identityStepRef.current : documentStepRef.current;
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target?.focus({ preventScroll: true });
      return;
    }

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
    // Escape hatch for users who have neither on hand right now - they'll be
    // prompted for the same two requirements from their profile later.
    localStorage.setItem('onboardingComplete', 'true');
    navigate('/');
  };

  const requirementChecklist = [
    { label: "A UEI or an organization website", done: isIdentityComplete },
    { label: "One document: a past application or a 990", done: isDocumentComplete },
  ];

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
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-4">
          <div className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Setup Progress
          </div>
          <div
            className="text-sm font-semibold text-gray-700"
            style={{ fontFamily: 'Cabin, sans-serif' }}
            aria-live="polite"
          >
            {completedSteps} of 2 required steps complete
          </div>
        </div>
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-teal-600 to-teal-500 transition-all duration-300"
            style={{ width: `${(completedSteps / 2) * 100}%` }}
          />
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
              Let's get you set up in just a few minutes. There are two things we need before you can start applying for grants.
            </p>

            {/* Requirements checklist - sets expectations up front and doubles
                as a live progress readout as each step is satisfied. */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-8">
              <h2
                className="text-sm font-semibold text-gray-900 mb-3"
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                What you'll need — both are required
              </h2>
              <ul className="space-y-3">
                {requirementChecklist.map((item, index) => (
                  <li key={item.label} className="flex items-start gap-3">
                    {item.done ? (
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-px" aria-hidden="true" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-px" aria-hidden="true" />
                    )}
                    <span
                      className={`text-sm leading-relaxed ${item.done ? 'text-gray-500 line-through' : 'text-gray-700'}`}
                      style={{ fontFamily: 'Cabin, sans-serif' }}
                    >
                      <span className="font-semibold">Step {index + 1}:</span> {item.label}
                      <span className="sr-only">{item.done ? ' (complete)' : ' (not yet complete)'}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

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
              Complete <span className="font-semibold text-gray-900">both</span> steps below. In each step you only need to
              provide <span className="font-semibold text-gray-900">one</span> of the two options — pick whichever you have handy.
            </p>

            <div className="space-y-5">
              {/* ---------------- Step 1: identify the organization ------------- */}
              <StepSection
                step={1}
                title="Identify your organization"
                requirement="Provide your UEI or your organization's website — either one works, and you only need one of them."
                complete={isIdentityComplete}
                error={showErrors ? identityError : undefined}
                headingId="step-1-heading"
                descriptionId="step-1-description"
                errorId="step-1-error"
                containerRef={identityStepRef}
              >
                <RadioGroup
                  value={identityMethod ?? ""}
                  onValueChange={(value) => handleSelectIdentityMethod(value as IdentityMethod)}
                  aria-labelledby="step-1-heading"
                  aria-describedby={
                    showErrors && identityError ? "step-1-description step-1-error" : "step-1-description"
                  }
                  aria-required="true"
                  className="space-y-2"
                >
                  {/* UEI Option */}
                  <div
                    className={`rounded-lg border transition-colors bg-white ${
                      identityMethod === 'uei' ? 'border-teal-500 ring-1 ring-teal-500 bg-teal-50/30' : 'border-gray-200'
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

                    {identityMethod === 'uei' && (
                      <div className="px-4 pb-4 pl-[46px] space-y-1.5">
                        <Input
                          id="uei"
                          value={formData.uei}
                          onChange={(e) => handleInputChange('uei', e.target.value)}
                          onBlur={handleUeiBlur}
                          placeholder="Enter 12-digit UEI"
                          maxLength={12}
                          autoFocus
                          aria-invalid={ueiVerificationStatus === 'failed'}
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
                                  <p className="text-xs text-red-700 mt-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    You can use your organization's website for this step instead.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <OrDivider />

                  {/* Website Option */}
                  <div
                    className={`rounded-lg border transition-colors bg-white ${
                      identityMethod === 'website' ? 'border-teal-500 ring-1 ring-teal-500 bg-teal-50/30' : 'border-gray-200'
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

                    {identityMethod === 'website' && (
                      <div className="px-4 pb-4 pl-[46px]">
                        <Input
                          id="website"
                          type="url"
                          value={formData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                          onBlur={handleWebsiteBlur}
                          placeholder="https://www.yourorganization.org"
                          autoFocus
                          aria-invalid={websiteVerificationStatus === 'failed'}
                          className={`focus-visible:ring-2 focus-visible:ring-teal-500 ${
                            websiteVerificationStatus === 'verified' ? 'border-teal-500 bg-teal-50' :
                            websiteVerificationStatus === 'failed' ? 'border-red-500 bg-red-50' : ''
                          }`}
                        />
                      </div>
                    )}
                  </div>
                </RadioGroup>
              </StepSection>

              {/* ---------------- Step 2: one supporting document --------------- */}
              <StepSection
                step={2}
                title="Add one document"
                requirement="Upload a previous grant application or your IRS Form 990 — either one works, and a single file is enough."
                complete={isDocumentComplete}
                error={showErrors ? documentError : undefined}
                headingId="step-2-heading"
                descriptionId="step-2-description"
                errorId="step-2-error"
                containerRef={documentStepRef}
              >
                <RadioGroup
                  value={documentMethod ?? ""}
                  onValueChange={(value) => handleSelectDocumentMethod(value as DocumentMethod)}
                  aria-labelledby="step-2-heading"
                  aria-describedby={
                    showErrors && documentError ? "step-2-description step-2-error" : "step-2-description"
                  }
                  aria-required="true"
                  className="space-y-2"
                >
                  {/* Previous application Option */}
                  <div
                    className={`rounded-lg border transition-colors bg-white ${
                      documentMethod === 'application' ? 'border-teal-500 ring-1 ring-teal-500 bg-teal-50/30' : 'border-gray-200'
                    }`}
                  >
                    <label htmlFor="method-application" className="flex items-start gap-3 p-4 cursor-pointer">
                      <RadioGroupItem value="application" id="method-application" className="mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            Previous Grant Application
                          </span>
                          {formData.previousApplications.length > 0 && (
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-teal-600" />
                              <span className="text-xs text-teal-600 font-medium">
                                {formData.previousApplications.length} uploaded
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Upload a past application so our AI can learn your writing style and improve suggestions
                        </p>
                        <AutoFillMeter method="application" />
                      </div>
                    </label>

                    {documentMethod === 'application' && (
                      <DocumentUploadPanel
                        files={formData.previousApplications}
                        proTip="Uploading previous grant applications helps our AI learn your organization's voice and priorities, resulting in better grant recommendations and writing assistance."
                        onFilesSelected={(files) => handleFileSelect('previousApplications', files)}
                        onCloudImport={(files) => handleCloudImport('previousApplications', files)}
                        onRemove={(id) => handleRemoveFile('previousApplications', id)}
                      />
                    )}
                  </div>

                  <OrDivider />

                  {/* 990 Option */}
                  <div
                    className={`rounded-lg border transition-colors bg-white ${
                      documentMethod === '990' ? 'border-teal-500 ring-1 ring-teal-500 bg-teal-50/30' : 'border-gray-200'
                    }`}
                  >
                    <label htmlFor="method-990" className="flex items-start gap-3 p-4 cursor-pointer">
                      <RadioGroupItem value="990" id="method-990" className="mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            IRS Form 990
                          </span>
                          {formData.form990s.length > 0 && (
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-teal-600" />
                              <span className="text-xs text-teal-600 font-medium">
                                {formData.form990s.length} uploaded
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Upload your IRS Form 990 so we can pull your financials, mission, and programs directly into your profile
                        </p>
                        <AutoFillMeter method="990" />
                      </div>
                    </label>

                    {documentMethod === '990' && (
                      <DocumentUploadPanel
                        files={formData.form990s}
                        proTip="Your 990 already contains verified financials and program details — uploading it lets us auto-fill those fields instead of you re-typing them."
                        onFilesSelected={(files) => handleFileSelect('form990s', files)}
                        onCloudImport={(files) => handleCloudImport('form990s', files)}
                        onRemove={(id) => handleRemoveFile('form990s', id)}
                      />
                    )}
                  </div>
                </RadioGroup>
              </StepSection>

              {/* Validation summary - names exactly what is still outstanding
                  rather than relying on a disabled button to explain itself. */}
              {showErrors && !isFormValid && (
                <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-red-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Finish the required steps below to continue
                      </p>
                      <ul className="text-xs text-red-700 space-y-1 list-disc list-inside" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        {identityError && <li><span className="font-semibold">Step 1:</span> {identityError}</li>}
                        {documentError && <li><span className="font-semibold">Step 2:</span> {documentError}</li>}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Complete Setup Button - deliberately left enabled (not
                  aria-disabled) so keyboard and screen reader users can click it
                  and be told exactly what is missing, instead of hitting an
                  inert control with no explanation. */}
              <Button
                onClick={handleCompleteSetup}
                aria-describedby="submit-status"
                className={`w-full text-sm font-medium transition-colors mt-6 text-white ${
                  isFormValid
                    ? 'bg-teal-600 hover:bg-teal-700'
                    : 'bg-teal-600/40 hover:bg-teal-600/50'
                }`}
              >
                Complete Setup & Get Started
              </Button>

              <p
                id="submit-status"
                className="text-center text-xs text-gray-500"
                style={{ fontFamily: 'Cabin, sans-serif' }}
                aria-live="polite"
              >
                {isFormValid
                  ? "Both required steps are complete — you're ready to go."
                  : `${completedSteps} of 2 required steps complete`}
              </p>

              {/* Tertiary escape hatch */}
              <button
                type="button"
                onClick={handleSkip}
                className="w-full text-center text-xs text-gray-500 hover:text-gray-700 underline transition-colors"
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                I don't have these on hand — set up manually instead
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
