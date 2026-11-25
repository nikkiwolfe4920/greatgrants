import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Eye,
  EyeOff,
  FileText,
  Globe,
  Lightbulb,
  Loader2,
  ShieldCheck,
  Sparkles,
  Trash2,
  Upload,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Logo } from "@/app/components/Logo";
import { GoogleIcon, MicrosoftIcon } from "@/app/components/BrandIcons";
import {
  CloudDocumentImport,
  ProviderBadgeIcon,
  type ImportedCloudFile,
} from "@/app/components/CloudDocumentImport";
import { FocusAreasField } from "@/app/components/focus-areas/FocusAreasField";
import { FOCUS_AREA_MIN_SELECTIONS } from "@/lib/constants/focus-areas";

/* -------------------------------------------------------------------------- */
/*  /onboarding-2                                                             */
/*                                                                            */
/*  Phase 1 – "account":  Create your account (Google / Microsoft / password)  */
/*  Phase 2 – "setup":    Two-column flow                                     */
/*      left  = Step 1  Auto-fill your profile (optional, 4 expandable options)*/
/*      right = Step 2  Create your organization account (the form)           */
/*                                                                            */
/*  Anything Step 1 can extract pre-fills Step 2, and every pre-filled field  */
/*  stays editable. Step 1 can be skipped ("Proceed with Manual Entry").      */
/* -------------------------------------------------------------------------- */

const FONT = { fontFamily: "Cabin, sans-serif" } as const;
const SERIF = { fontFamily: "Lustria, serif" } as const;

type Phase = "account" | "setup";
type AuthMethod = "password" | "google" | "microsoft";
type MethodId = "uei" | "website" | "grant" | "form990";
type Status = "idle" | "verifying" | "verified" | "failed";

/* ------------------------------ mock data -------------------------------- */

const DEMO_UEI = "123456789012";

// What a verified UEI / extracted document would return in production.
const MOCK_ORG = {
  organizationName: "Riverbend Community Foundation",
  streetAddress: "412 Main Street",
  city: "Austin",
  state: "Texas",
  zipCode: "78701",
  website: "riverbendfoundation.org",
  focusAreas: ["Food Banks & Pantries", "Early Childhood Education"],
};

type OrgFields = typeof MOCK_ORG;

// Which profile fields each method is able to fill in.
const FILLS: Record<MethodId, (keyof OrgFields)[]> = {
  uei: ["organizationName", "streetAddress", "city", "state", "zipCode", "website", "focusAreas"],
  form990: ["organizationName", "streetAddress", "city", "state", "zipCode"],
  grant: ["organizationName", "website", "focusAreas"],
  website: [], // filled from what the user typed, see below
};

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

/* ------------------------------ validators ------------------------------- */

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isPassword = (v: string) => v.length >= 8 && /[\d\W_]/.test(v);
const isDomain = (v: string) =>
  /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(v.trim());
const isZip = (v: string) => /^\d{5}(-\d{4})?$/.test(v.trim());

const formatBytes = (bytes: number) =>
  bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;

/* ---------------------------- option definitions -------------------------- */

interface MethodDef {
  id: MethodId;
  title: string;
  description: string;
  percent: number;
  perks: string[];
  icon: LucideIcon;
  iconClass: string;
  recommended?: boolean;
}

const METHODS: MethodDef[] = [
  {
    id: "uei",
    title: "I have a UEI Number",
    description: "The fastest way to get started with full automation",
    percent: 95,
    perks: ["Instant profile completion", "Pre-filled applications", "Accurate grant matching", "Little manual entry"],
    icon: Zap,
    iconClass: "text-teal-600",
    recommended: true,
  },
  {
    id: "website",
    title: "I only have a Website",
    description: "Manual setup with basic information",
    percent: 30,
    perks: ["Most setup required", "Standard accuracy"],
    icon: Globe,
    iconClass: "text-gray-500",
  },
  {
    id: "grant",
    title: "I have a Previous Grant",
    description: "Upload a prior application to auto-fill your profile",
    percent: 50,
    perks: ["Org details auto-filled", "Moderate automation"],
    icon: FileText,
    iconClass: "text-purple-600",
  },
  {
    id: "form990",
    title: "I have a Form 990",
    description: "Upload your IRS Form 990 to auto-fill financials and org details",
    percent: 60,
    perks: ["Financials auto-filled", "Org details auto-filled"],
    icon: FileText,
    iconClass: "text-blue-600",
  },
];

const DOC_CONFIG = {
  grant: {
    heading: "Upload Previous Grant Applications",
    blurb: "Upload past applications so our AI can learn your writing style and improve suggestions.",
    formats: "PDF, DOC, DOCX, XLS, XLSX, CSV up to 50 MB · JPG/JPEG, PNG up to 25 MB per image",
    accept: ".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png",
    allowed: ["pdf", "doc", "docx", "xls", "xlsx", "csv", "jpg", "jpeg", "png"],
    maxMb: (ext: string) => (["jpg", "jpeg", "png"].includes(ext) ? 25 : 50),
    tip: "Uploading previous grant applications helps our AI learn your organization's voice and priorities, resulting in better grant recommendations and writing assistance.",
  },
  form990: {
    heading: "Upload an IRS Form 990",
    blurb: "Upload your IRS Form 990 so we can pull your financials, mission, and programs directly into your profile.",
    formats: "PDF or XML up to 10 MB",
    accept: ".pdf,.xml",
    allowed: ["pdf", "xml"],
    maxMb: () => 10,
    tip: "Uploading a 990 helps our AI learn your organization's voice and priorities, resulting in better grant recommendations and writing assistance.",
  },
} as const;

interface DocFile {
  id: string;
  fileName: string;
  fileSize: string;
  source: "local" | "microsoft" | "google";
  ready: boolean; // false while "extracting"
}

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                     */
/* -------------------------------------------------------------------------- */

function AutoFillMeter({ percent }: { percent: number }) {
  return (
    <div className="mt-3">
      <p className="text-xs text-gray-500">Profile Auto-Fill Percentage</p>
      <div className="mt-1.5 flex items-center gap-3">
        <div
          className="h-1.5 w-28 overflow-hidden rounded-full bg-gray-100"
          role="img"
          aria-label={`${percent}% of your profile is auto-filled with this option`}
        >
          <div className="h-full rounded-full bg-teal-600" style={{ width: `${percent}%` }} />
        </div>
        <span className="text-xs font-medium text-gray-700">{percent}%</span>
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  required,
  hint,
  error,
  autofilled,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  autofilled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor={id} className="flex gap-0.5 text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-teal-600">*</span>}
        </Label>
        {autofilled && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-teal-700">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            Auto-filled
          </span>
        )}
      </div>
      {hint && <p id={`${id}-hint`} className="text-sm text-gray-500">{hint}</p>}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SecurityNote() {
  return (
    <div className="flex items-start gap-2 rounded-lg bg-gray-50 p-3">
      <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500" aria-hidden="true" />
      <p className="text-xs text-gray-600">
        Your documents are encrypted and secure. We analyze them to provide better AI assistance but never share them
        with third parties.
      </p>
    </div>
  );
}

function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-teal-200 bg-teal-50/60 p-3.5">
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-gray-900">Pro Tip</p>
          <p className="mt-0.5 text-xs leading-relaxed text-teal-800">{children}</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step 1 option panels                                                      */
/* -------------------------------------------------------------------------- */

function UeiPanel({
  value,
  status,
  onChange,
  onUseWebsite,
}: {
  value: string;
  status: Status;
  onChange: (v: string) => void;
  onUseWebsite: () => void;
}) {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="uei">Unique Entity Identifier (UEI)</Label>
        <p className="text-xs text-gray-500">
          12 characters, required for federal grants (formerly the DUNS number).
        </p>
        <div className="relative">
          <Input
            id="uei"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter 12-digit UEI"
            inputMode="numeric"
            maxLength={12}
            autoComplete="off"
            aria-invalid={status === "failed"}
            aria-describedby="uei-status"
            className={`pr-10 focus-visible:border-teal-600 ${
              status === "verified" ? "border-teal-500 bg-teal-50" : status === "failed" ? "border-red-500 bg-red-50" : ""
            }`}
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            {status === "verifying" && <Loader2 className="h-4 w-4 animate-spin text-teal-600" />}
            {status === "verified" && <CheckCircle2 className="h-4 w-4 text-teal-600" />}
            {status === "failed" && <AlertTriangle className="h-4 w-4 text-red-600" />}
          </span>
        </div>
        <div id="uei-status" aria-live="polite" className="min-h-[1rem] text-xs">
          {status === "verifying" && <span className="text-teal-700">Verifying with SAM.gov…</span>}
          {status === "verified" && (
            <span className="font-medium text-teal-700">
              Verified · {MOCK_ORG.organizationName}, {MOCK_ORG.city}, TX. We've filled in your details in Step 2.
            </span>
          )}
          {status === "idle" && <span className="text-gray-400">Demo: use {DEMO_UEI}</span>}
        </div>
      </div>

      {status === "failed" && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
            <div className="text-xs text-red-700">
              <p className="text-sm font-medium text-red-900">We couldn't verify that UEI</p>
              <ul className="mt-1.5 list-inside list-disc space-y-1">
                <li>It should be exactly 12 characters</li>
                <li>Find it in SAM.gov under "Entity Registration"</li>
              </ul>
              <p className="mt-2 border-t border-red-200 pt-2">
                Don't have one?{" "}
                <a href="https://sam.gov" target="_blank" rel="noopener noreferrer" className="underline">
                  Register at SAM.gov
                </a>{" "}
                or{" "}
                <button type="button" onClick={onUseWebsite} className="font-medium underline">
                  use your website instead
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WebsitePanel({
  value,
  status,
  onChange,
  onBlur,
  onUseUei,
}: {
  value: string;
  status: Status;
  onChange: (v: string) => void;
  onBlur: () => void;
  onUseUei: () => void;
}) {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="step1-website">Organization website</Label>
        <Input
          id="step1-website"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder="example.org"
          inputMode="url"
          autoComplete="url"
          aria-invalid={status === "failed"}
          aria-describedby="step1-website-status"
          className={`focus-visible:border-teal-600 ${
            status === "verified" ? "border-teal-500 bg-teal-50" : status === "failed" ? "border-red-500 bg-red-50" : ""
          }`}
        />
        <p id="step1-website-status" aria-live="polite" className="text-xs">
          {status === "verified" && <span className="font-medium text-teal-700">Looks good. Added to Step 2.</span>}
          {status === "failed" && <span className="font-medium text-red-600">Enter a valid website, like example.org</span>}
          {(status === "idle" || status === "verifying") && (
            <span className="text-gray-500">We'll use your public site to understand your mission and programs.</span>
          )}
        </p>
      </div>
      <div className="flex items-start gap-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
        <Zap className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-teal-600" aria-hidden="true" />
        <p>
          This option fills in the least. If you have a UEI, you can complete your profile ~3× faster.{" "}
          <button type="button" onClick={onUseUei} className="font-medium text-teal-700 underline">
            Use a UEI instead
          </button>
        </p>
      </div>
    </div>
  );
}

function DocumentPanel({
  kind,
  files,
  error,
  onFiles,
  onCloud,
  onRemove,
}: {
  kind: "grant" | "form990";
  files: DocFile[];
  error: string | null;
  onFiles: (list: FileList | null) => void;
  onCloud: (files: ImportedCloudFile[]) => void;
  onRemove: (id: string) => void;
}) {
  const cfg = DOC_CONFIG[kind];
  const [dragging, setDragging] = useState(false);

  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm font-medium text-gray-900">{cfg.heading}</p>
        <p className="mt-0.5 text-xs text-gray-600">{cfg.blurb}</p>
      </div>

      <label
        className={`block cursor-pointer rounded-lg border-2 border-dashed px-4 py-5 text-center transition-colors focus-within:ring-2 focus-within:ring-teal-500 ${
          dragging ? "border-teal-500 bg-teal-50" : "border-gray-300 hover:border-teal-400"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          onFiles(e.dataTransfer.files);
        }}
      >
        <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-teal-50">
          <Upload className="h-4 w-4 text-teal-600" aria-hidden="true" />
        </div>
        <p className="text-sm text-gray-700">
          <span className="font-medium text-teal-700">Click to upload</span> or drag and drop
        </p>
        <p className="mt-1 text-xs text-gray-500">{cfg.formats}</p>
        <input
          type="file"
          multiple={kind === "grant"}
          accept={cfg.accept}
          className="sr-only"
          onChange={(e) => {
            onFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </label>

      {error && (
        <p role="alert" className="flex items-start gap-1.5 text-xs font-medium text-red-600">
          <AlertTriangle className="mt-px h-3.5 w-3.5 flex-shrink-0" />
          {error}
        </p>
      )}

      {files.length > 0 && (
        <ul className="space-y-2" aria-live="polite">
          {files.map((f) => (
            <li key={f.id} className="flex items-center justify-between gap-3 rounded-[10px] border border-gray-200 bg-white p-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <FileText className="h-4 w-4 text-red-500" />
                  {f.source !== "local" && (
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 bg-white">
                      <ProviderBadgeIcon provider={f.source} className="h-2.5 w-2.5" />
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-gray-900">{f.fileName}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    {f.fileSize} ·{" "}
                    {f.ready ? (
                      <span className="inline-flex items-center gap-1 font-medium text-teal-700">
                        <CheckCircle2 className="h-3 w-3" /> Details extracted
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-teal-700">
                        <Loader2 className="h-3 w-3 animate-spin" /> Reading document…
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemove(f.id)}
                aria-label={`Remove ${f.fileName}`}
                className="flex-shrink-0 rounded p-1 text-gray-400 transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <CloudDocumentImport onImport={onCloud} />
      <SecurityNote />
      <ProTip>{cfg.tip}</ProTip>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Phase 1 – create your account                                             */
/* -------------------------------------------------------------------------- */

function AccountPhase({
  onContinue,
  onSignIn,
}: {
  onContinue: (method: AuthMethod, email: string, password: string) => void;
  onSignIn: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const valid = isEmail(email) && isPassword(password);

  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-4 py-12 sm:py-16">
      <div className="w-full max-w-[400px]">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>
        <h1 className="mb-8 text-center text-4xl leading-tight tracking-tight text-gray-900" style={{ ...SERIF, letterSpacing: "-0.72px" }}>
          Create your account
        </h1>

        <div className="space-y-3">
          <Button type="button" variant="outline" className="h-11 w-full gap-3 bg-white" onClick={() => onContinue("google", "alex.morgan@example.org", "")}>
            <GoogleIcon className="h-5 w-5" />
            Continue with Google
          </Button>
          <Button type="button" variant="outline" className="h-11 w-full gap-3 bg-white" onClick={() => onContinue("microsoft", "alex.morgan@example.org", "")}>
            <MicrosoftIcon className="h-5 w-5" />
            Continue with Microsoft
          </Button>
        </div>

        <div className="my-6 flex items-center gap-3" aria-hidden="true">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs uppercase tracking-widest text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            setEmailTouched(true);
            setPasswordTouched(true);
            if (valid) onContinue("password", email.trim(), password);
          }}
          className="space-y-4"
        >
          <FormField id="signup-email" label="Email" error={emailTouched && email && !isEmail(email) ? "Enter a valid email address" : undefined}>
            <Input
              id="signup-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              aria-invalid={emailTouched && !!email && !isEmail(email)}
              className="h-10 focus-visible:border-teal-600"
            />
          </FormField>

          <FormField
            id="signup-password"
            label="Password"
            hint="Use 8 or more characters, with at least one number or special character."
            error={passwordTouched && password && !isPassword(password) ? "Password doesn't meet the requirements yet" : undefined}
          >
            <div className="relative">
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
                aria-describedby="signup-password-hint"
                aria-invalid={passwordTouched && !!password && !isPassword(password)}
                className="h-10 pr-10 focus-visible:border-teal-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </FormField>

          <p className="pt-1 text-center text-sm text-gray-500">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-teal-700 underline">Terms of Service</a> and{" "}
            <a href="#" className="text-teal-700 underline">Privacy Policy</a>.
            <br />
            <a href="#" className="font-medium text-teal-700">Cookie Preferences</a>
          </p>

          <Button
            type="submit"
            disabled={!valid}
            className="h-10 w-full bg-teal-600 text-white hover:bg-teal-700"
          >
            Continue with password
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button type="button" onClick={onSignIn} className="font-semibold text-gray-900 hover:underline">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Phase 2 – two-step setup                                                  */
/* -------------------------------------------------------------------------- */

interface FormState extends OrgFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const REQUIRED_LABELS: Partial<Record<keyof FormState, string>> = {
  firstName: "first name",
  lastName: "last name",
  organizationName: "organization name",
  streetAddress: "street address",
  city: "city",
  state: "state",
  zipCode: "zip code",
  focusAreas: "focus areas",
  website: "website",
};

export function OnboardingFlowPage() {
  const navigate = useNavigate();

  /* ---- phase / auth ---- */
  const [phase, setPhase] = useState<Phase>("account");
  const [authMethod, setAuthMethod] = useState<AuthMethod>("password");

  /* ---- step 2 form ---- */
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    organizationName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    focusAreas: [],
    website: "",
  });
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [autofilled, setAutofilled] = useState<Set<string>>(new Set());
  const edited = useRef<Set<string>>(new Set()); // fields the user typed in; never overwritten
  const [autofillSource, setAutofillSource] = useState<MethodId | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  /* ---- step 1 ---- */
  const [openMethod, setOpenMethod] = useState<MethodId | null>(null);
  const [ueiValue, setUeiValue] = useState("");
  const [ueiStatus, setUeiStatus] = useState<Status>("idle");
  const [websiteValue, setWebsiteValue] = useState("");
  const [websiteStatus, setWebsiteStatus] = useState<Status>("idle");
  const [docs, setDocs] = useState<Record<"grant" | "form990", DocFile[]>>({ grant: [], form990: [] });
  const [docError, setDocError] = useState<Record<"grant" | "form990", string | null>>({ grant: null, form990: null });
  const ueiTimer = useRef<number | null>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => () => {
    if (ueiTimer.current) window.clearTimeout(ueiTimer.current);
  }, []);

  /* ---- step 1 completion (derived) ---- */
  const complete: Record<MethodId, boolean> = {
    uei: ueiStatus === "verified",
    website: websiteStatus === "verified",
    grant: docs.grant.some((f) => f.ready),
    form990: docs.form990.some((f) => f.ready),
  };

  /* ---- auto-fill: runs when an option newly completes ---- */
  const applyAutofill = useCallback((method: MethodId, websiteTyped: string) => {
    const values: Partial<OrgFields> = {};
    for (const key of FILLS[method]) (values as Record<string, unknown>)[key] = MOCK_ORG[key];
    if (method === "website") values.website = websiteTyped.trim().replace(/^https?:\/\//i, "");

    // Never clobber a field the user has typed in themselves.
    const entries = Object.entries(values).filter(([key]) => !edited.current.has(key));
    if (entries.length === 0) return;

    setForm((prev) => ({ ...prev, ...Object.fromEntries(entries) }));
    setAutofilled((prev) => new Set([...prev, ...entries.map(([key]) => key)]));
    setAutofillSource(method);
  }, []);

  const prevComplete = useRef(complete);
  useEffect(() => {
    (Object.keys(complete) as MethodId[]).forEach((m) => {
      if (complete[m] && !prevComplete.current[m]) applyAutofill(m, websiteValue);
    });
    prevComplete.current = complete;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete.uei, complete.website, complete.grant, complete.form990]);

  /* ---- step 1 handlers ---- */
  const handleUei = (raw: string) => {
    const v = raw.replace(/\s/g, "").slice(0, 12);
    setUeiValue(v);
    if (ueiTimer.current) window.clearTimeout(ueiTimer.current);
    if (v.length === 12) {
      setUeiStatus("verifying");
      ueiTimer.current = window.setTimeout(() => setUeiStatus(v === DEMO_UEI ? "verified" : "failed"), 1200);
    } else {
      setUeiStatus("idle");
    }
  };

  const handleWebsite = (v: string) => {
    setWebsiteValue(v);
    setWebsiteStatus(isDomain(v) ? "verified" : "idle");
  };

  const addDocs = (kind: "grant" | "form990", incoming: DocFile[]) => {
    setDocs((prev) => ({ ...prev, [kind]: [...prev[kind], ...incoming] }));
    window.setTimeout(() => {
      setDocs((prev) => ({
        ...prev,
        [kind]: prev[kind].map((f) => (incoming.some((i) => i.id === f.id) ? { ...f, ready: true } : f)),
      }));
    }, 1600);
  };

  const handleFiles = (kind: "grant" | "form990", list: FileList | null) => {
    if (!list) return;
    const cfg = DOC_CONFIG[kind];
    const accepted: DocFile[] = [];
    let error: string | null = null;
    Array.from(list).forEach((file) => {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!(cfg.allowed as readonly string[]).includes(ext)) {
        error = `"${file.name}" isn't a supported file type. Accepted: ${cfg.formats.split(" up to")[0]}.`;
      } else if (file.size > cfg.maxMb(ext) * 1024 * 1024) {
        error = `"${file.name}" is larger than ${cfg.maxMb(ext)} MB.`;
      } else {
        accepted.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          fileName: file.name,
          fileSize: formatBytes(file.size),
          source: "local",
          ready: false,
        });
      }
    });
    setDocError((p) => ({ ...p, [kind]: error }));
    // A Form 990 is a single document — keep only the latest.
    if (accepted.length) {
      if (kind === "form990") setDocs((p) => ({ ...p, form990: [] }));
      addDocs(kind, kind === "form990" ? accepted.slice(0, 1) : accepted);
    }
  };

  const handleCloud = (kind: "grant" | "form990", files: ImportedCloudFile[]) => {
    setDocError((p) => ({ ...p, [kind]: null }));
    const mapped: DocFile[] = files.map((f) => ({
      id: f.id + Date.now(),
      fileName: f.fileName,
      fileSize: f.fileSize,
      source: f.source,
      ready: false,
    }));
    if (kind === "form990") setDocs((p) => ({ ...p, form990: [] }));
    addDocs(kind, kind === "form990" ? mapped.slice(0, 1) : mapped);
  };

  const removeDoc = (kind: "grant" | "form990", id: string) =>
    setDocs((p) => ({ ...p, [kind]: p[kind].filter((f) => f.id !== id) }));

  const goManual = () => {
    setOpenMethod(null);
    step2Ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => document.getElementById("firstName")?.focus({ preventScroll: true }), 350);
  };

  /* ---- step 2 handlers ---- */
  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    edited.current.add(key as string);
    setForm((p) => ({ ...p, [key]: value }));
    setAutofilled((p) => {
      if (!p.has(key as string)) return p;
      const n = new Set(p);
      n.delete(key as string);
      return n;
    });
  };
  const touch = (key: string) => setTouched((p) => new Set(p).add(key));

  const errors: Partial<Record<keyof FormState, string>> = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) e.firstName = "Enter your first name";
    if (!form.lastName.trim()) e.lastName = "Enter your last name";
    if (!form.organizationName.trim()) e.organizationName = "Enter your organization's name";
    if (!form.streetAddress.trim()) e.streetAddress = "Enter the street address";
    if (!form.city.trim()) e.city = "Enter a city";
    if (!form.state) e.state = "Select a state";
    if (!isZip(form.zipCode)) e.zipCode = "Enter a 5-digit zip code";
    if (form.focusAreas.length < FOCUS_AREA_MIN_SELECTIONS) e.focusAreas = "focus";
    if (!isDomain(form.website)) e.website = "Enter a valid website, like example.org";
    if (!isEmail(form.email)) e.email = "Enter a valid email address";
    if (authMethod === "password" && !isPassword(form.password)) e.password = "Use 8+ characters with a number or special character";
    return e;
  }, [form, authMethod]);

  const remaining = Object.keys(errors).length;
  const canSubmit = remaining === 0;
  const err = (k: keyof FormState) => (touched.has(k) ? errors[k] : undefined);

  const missingList = (Object.keys(errors) as (keyof FormState)[])
    .map((k) => REQUIRED_LABELS[k])
    .filter(Boolean) as string[];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      setTouched(new Set(Object.keys(form)));
      return;
    }
    localStorage.setItem("onboardingComplete", "true");
    localStorage.setItem("organizationName", form.organizationName);
    localStorage.setItem("organizationWebsite", form.website);
    if (ueiStatus === "verified") localStorage.setItem("organizationUEI", ueiValue);
    navigate("/");
  };

  const handleAuth = (method: AuthMethod, email: string, password: string) => {
    setAuthMethod(method);
    setForm((p) => ({ ...p, email, password }));
    setPhase("setup");
    window.scrollTo({ top: 0 });
  };

  if (phase === "account") {
    return (
      <div style={FONT}>
        <AccountPhase onContinue={handleAuth} onSignIn={() => navigate("/signin")} />
      </div>
    );
  }

  const autofillCount = autofilled.size;
  const sourceTitle = METHODS.find((m) => m.id === autofillSource)?.title.replace(/^I (have a |only have a )?/, "") ?? "";
  const af = (k: string) => autofilled.has(k);
  const inputCls = "h-10 focus-visible:border-teal-600";

  /* ---------------------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-gray-50" style={FONT}>
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-[60px] max-w-[1160px] items-center justify-between px-4 sm:px-6">
          <Logo />
          <button
            type="button"
            onClick={() => setPhase("account")}
            className="flex items-center gap-1.5 rounded text-sm font-semibold text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1160px] px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
        <div className="mx-auto mb-8 max-w-[640px] text-center lg:mb-10">
          <h1 className="text-3xl tracking-tight text-gray-900 sm:text-4xl" style={SERIF}>
            Let's set up your profile
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Share what you have in Step 1 and we'll fill in most of Step 2 for you. No documents handy? You can skip
            straight to Step 2.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-8">
          {/* ===================== STEP 1 ===================== */}
          <section aria-labelledby="step1-title" className="min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white" aria-hidden="true">
                {Object.values(complete).some(Boolean) ? <CheckCircle2 className="h-4 w-4" /> : 1}
              </span>
              <div>
                <h2 id="step1-title" className="text-lg font-semibold text-gray-900">
                  Step 1 · Auto-fill your profile
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-700">Optional.</span> Choose the option that best describes what you have right now.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {METHODS.map((m) => {
                const open = openMethod === m.id;
                const done = complete[m.id];
                const Icon = m.icon;
                return (
                  <div
                    key={m.id}
                    className={`relative rounded-xl border bg-white transition-colors ${
                      open ? "border-teal-500 ring-1 ring-teal-500" : done ? "border-teal-300" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {m.recommended && (
                      <span className="absolute -top-2.5 right-4 rounded-full bg-teal-600 px-2.5 py-0.5 text-xs font-medium text-white">
                        Recommended
                      </span>
                    )}
                    <button
                      type="button"
                      id={`method-${m.id}-trigger`}
                      aria-expanded={open}
                      aria-controls={`method-${m.id}-panel`}
                      onClick={() => setOpenMethod(open ? null : m.id)}
                      className="flex w-full items-start gap-4 rounded-xl p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                    >
                      <Icon className={`mt-1 h-5 w-5 flex-shrink-0 ${m.iconClass}`} aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-gray-900">{m.title}</h3>
                          {done && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
                              <CheckCircle2 className="h-3 w-3" /> Added
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-600">{m.description}</p>
                        <AutoFillMeter percent={m.percent} />
                        {!open && (
                          <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                            {m.perks.map((p) => (
                              <li key={p} className="flex items-center gap-1.5 text-xs text-gray-600">
                                <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-teal-600" aria-hidden="true" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <ChevronRight
                        className={`mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${open ? "rotate-90" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="panel"
                          id={`method-${m.id}-panel`}
                          role="region"
                          aria-labelledby={`method-${m.id}-trigger`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                            {m.id === "uei" && (
                              <UeiPanel
                                value={ueiValue}
                                status={ueiStatus}
                                onChange={handleUei}
                                onUseWebsite={() => setOpenMethod("website")}
                              />
                            )}
                            {m.id === "website" && (
                              <WebsitePanel
                                value={websiteValue}
                                status={websiteStatus}
                                onChange={handleWebsite}
                                onBlur={() => websiteValue && setWebsiteStatus(isDomain(websiteValue) ? "verified" : "failed")}
                                onUseUei={() => setOpenMethod("uei")}
                              />
                            )}
                            {(m.id === "grant" || m.id === "form990") && (
                              <DocumentPanel
                                kind={m.id}
                                files={docs[m.id]}
                                error={docError[m.id]}
                                onFiles={(l) => handleFiles(m.id as "grant" | "form990", l)}
                                onCloud={(f) => handleCloud(m.id as "grant" | "form990", f)}
                                onRemove={(id) => removeDoc(m.id as "grant" | "form990", id)}
                              />
                            )}
                            {complete[m.id] && (
                              <Button
                                type="button"
                                onClick={goManual}
                                className="mt-4 w-full gap-2 bg-teal-600 text-white hover:bg-teal-700 lg:hidden"
                              >
                                Review details in Step 2
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={goManual}
                className="rounded text-sm font-semibold text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                Proceed with Manual Entry
              </button>
              <p className="mt-1 text-xs text-gray-500">You'll enter your organization details yourself in Step 2.</p>
            </div>
          </section>

          {/* ===================== STEP 2 ===================== */}
          <section
            ref={step2Ref}
            aria-labelledby="step2-title"
            className="scroll-mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white" aria-hidden="true">
                2
              </span>
              <div>
                <h2 id="step2-title" className="text-lg font-semibold text-gray-900">
                  Step 2 · Create your account
                </h2>
                <p className="text-sm text-gray-600">Confirm your details to finish.</p>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {autofillCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div role="status" className="mb-5 flex items-start gap-2.5 rounded-lg border border-teal-200 bg-teal-50 p-3">
                    <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                    <p className="text-sm text-teal-900">
                      We filled in <span className="font-semibold">{autofillCount} {autofillCount === 1 ? "field" : "fields"}</span> from
                      your {sourceTitle}. Review them and edit anything that's off.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <FormField id="email" label="Email Address" required error={err("email")}>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  readOnly={authMethod !== "password"}
                  onChange={(e) => setField("email", e.target.value)}
                  onBlur={() => touch("email")}
                  aria-invalid={!!err("email")}
                  className={`${inputCls} ${authMethod !== "password" ? "bg-gray-50 text-gray-600" : ""}`}
                />
              </FormField>

              {authMethod === "password" && (
                <FormField
                  id="password"
                  label="Password"
                  required
                  hint="Use 8 or more characters, with at least one number or special character."
                  error={err("password")}
                >
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={form.password}
                      onChange={(e) => setField("password", e.target.value)}
                      onBlur={() => touch("password")}
                      aria-describedby="password-hint"
                      aria-invalid={!!err("password")}
                      className={`${inputCls} pr-10`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      aria-pressed={showPassword}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </FormField>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField id="firstName" label="First name" required error={err("firstName")}>
                  <Input
                    id="firstName"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={(e) => setField("firstName", e.target.value)}
                    onBlur={() => touch("firstName")}
                    aria-invalid={!!err("firstName")}
                    className={inputCls}
                  />
                </FormField>
                <FormField id="lastName" label="Last name" required error={err("lastName")}>
                  <Input
                    id="lastName"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={(e) => setField("lastName", e.target.value)}
                    onBlur={() => touch("lastName")}
                    aria-invalid={!!err("lastName")}
                    className={inputCls}
                  />
                </FormField>
              </div>

              <FormField id="organizationName" label="Organization Name" required error={err("organizationName")} autofilled={af("organizationName")}>
                <Input
                  id="organizationName"
                  autoComplete="organization"
                  placeholder="My Organization"
                  value={form.organizationName}
                  onChange={(e) => setField("organizationName", e.target.value)}
                  onBlur={() => touch("organizationName")}
                  aria-invalid={!!err("organizationName")}
                  className={`${inputCls} ${af("organizationName") ? "border-teal-300 bg-teal-50/40" : ""}`}
                />
              </FormField>

              <fieldset className="space-y-4">
                <legend className="pb-1 text-base font-medium text-gray-700">Organization Legal Address</legend>

                <FormField id="streetAddress" label="Street Address" required error={err("streetAddress")} autofilled={af("streetAddress")}>
                  <Input
                    id="streetAddress"
                    autoComplete="address-line1"
                    placeholder="Start typing an address..."
                    value={form.streetAddress}
                    onChange={(e) => setField("streetAddress", e.target.value)}
                    onBlur={() => touch("streetAddress")}
                    aria-invalid={!!err("streetAddress")}
                    className={`${inputCls} ${af("streetAddress") ? "border-teal-300 bg-teal-50/40" : ""}`}
                  />
                </FormField>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField id="city" label="City" required error={err("city")} autofilled={af("city")}>
                    <Input
                      id="city"
                      autoComplete="address-level2"
                      placeholder="Enter city"
                      value={form.city}
                      onChange={(e) => setField("city", e.target.value)}
                      onBlur={() => touch("city")}
                      aria-invalid={!!err("city")}
                      className={`${inputCls} ${af("city") ? "border-teal-300 bg-teal-50/40" : ""}`}
                    />
                  </FormField>
                  <FormField id="zipCode" label="Zip Code" required error={err("zipCode")} autofilled={af("zipCode")}>
                    <Input
                      id="zipCode"
                      autoComplete="postal-code"
                      inputMode="numeric"
                      placeholder="Enter zip code"
                      value={form.zipCode}
                      onChange={(e) => setField("zipCode", e.target.value)}
                      onBlur={() => touch("zipCode")}
                      aria-invalid={!!err("zipCode")}
                      className={`${inputCls} ${af("zipCode") ? "border-teal-300 bg-teal-50/40" : ""}`}
                    />
                  </FormField>
                </div>

                <FormField id="state" label="State" required error={err("state")} autofilled={af("state")}>
                  <div className="relative">
                    <select
                      id="state"
                      autoComplete="address-level1"
                      value={form.state}
                      onChange={(e) => setField("state", e.target.value)}
                      onBlur={() => touch("state")}
                      aria-invalid={!!err("state")}
                      className={`h-10 w-full appearance-none rounded-md border bg-white px-3 pr-9 text-base shadow-[0px_1px_1px_rgba(10,13,18,0.05)] focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/30 md:text-sm ${
                        af("state") ? "border-teal-300 bg-teal-50/40" : err("state") ? "border-red-500" : "border-gray-300"
                      } ${form.state ? "text-gray-900" : "text-gray-500"}`}
                    >
                      <option value="" disabled>Select state</option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" aria-hidden="true" />
                  </div>
                </FormField>
              </fieldset>

              <div>
                <FocusAreasField
                  value={form.focusAreas}
                  onChange={(next) => {
                    setField("focusAreas", next);
                    touch("focusAreas");
                  }}
                />
                {af("focusAreas") && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-teal-700">
                    <Sparkles className="h-3 w-3" aria-hidden="true" /> Auto-filled from your {sourceTitle}. Edit as needed.
                  </p>
                )}
              </div>

              <FormField id="website" label="Organization Website" required error={err("website")} autofilled={af("website")}>
                <Input
                  id="website"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="example.org"
                  value={form.website}
                  onChange={(e) => setField("website", e.target.value)}
                  onBlur={() => touch("website")}
                  aria-invalid={!!err("website")}
                  className={`${inputCls} ${af("website") ? "border-teal-300 bg-teal-50/40" : ""}`}
                />
              </FormField>

              <p className="pt-1 text-center text-sm text-gray-500">
                By creating an account, you agree to our{" "}
                <a href="#" className="text-teal-700 underline">Terms of Service</a> and{" "}
                <a href="#" className="text-teal-700 underline">Privacy Policy</a>.
                <br />
                <a href="#" className="font-medium text-teal-700">Cookie Preferences</a>
              </p>

              <div>
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  aria-describedby="submit-help"
                  className="h-10 w-full bg-teal-600 text-white hover:bg-teal-700"
                >
                  Create account
                </Button>
                <p id="submit-help" aria-live="polite" className="mt-2 text-center text-xs text-gray-500">
                  {canSubmit
                    ? "All set. You can change any of this later in Settings."
                    : `${remaining} required ${remaining === 1 ? "field" : "fields"} left${
                        missingList.length ? `: ${missingList.slice(0, 3).join(", ")}${missingList.length > 3 ? "…" : ""}` : ""
                      }`}
                </p>
              </div>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button type="button" onClick={() => navigate("/signin")} className="font-semibold text-gray-900 hover:underline">
                  Sign in
                </button>
              </p>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
