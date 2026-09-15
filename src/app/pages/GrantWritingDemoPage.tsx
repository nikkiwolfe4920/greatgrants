import { useState } from "react";
import {
  Info,
  Sparkles,
  Upload,
  FileText,
  X,
  Download,
  Clock,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  List,
  Link as LinkIcon,
  Image as ImageIcon,
  Eye,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Switch } from "@/app/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";

/**
 * GrantWritingDemoPage — /grant-writing-demo, step 6 of 6 in the locked demo
 * tour (see lockedDemoTour.ts), ported from the Figma "Grant Writing" screen
 * (https://www.figma.com/design/AJQoDJAJZL2ItawgAfLYh3/Great-Grants-MVP?node-id=14630-45483).
 *
 * One long, single-page grant application — every section stacked
 * vertically with a right-hand "Application Resources" panel that scrolls
 * along with it — rather than the live app's one-route-per-section model
 * (/application/:id/s/:id). The six sections below (Cover Page & Project
 * Abstract, Project Narrative, Budget Narrative, Attachments, Federal
 * Application Forms, Applicant Eligibility & Certifications), every field
 * label/helper/example value within them, and the left nav's matching
 * six-item sub-list (see SharedSidebar's GRANT_WRITING_DEMO_SECTIONS) are
 * ported directly from the Figma node's actual content — not the generic
 * nine-section taxonomy /applications and /applications-demo share.
 */

// ---------------------------------------------------------------------------
// Shared field primitives
// ---------------------------------------------------------------------------

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;

/**
 * "Coaching" tip — the /organization Financial Info tab's collapsed
 * "Helpful Tips" disclosure (OrganizationProfileForm.tsx's local
 * `HelpfulTip`), reused verbatim except for the label, positioned the same
 * way: between a field's label and its input. Default collapsed; mock copy
 * only, since this is a demo.
 */
function CoachingTip({ tip }: { tip: string }) {
  return (
    <Accordion type="single" collapsible className="mb-3">
      <AccordionItem value="tip" className="!border !border-gray-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="!rounded-none !gap-2 !px-4 !py-2.5 !bg-gray-100 hover:!bg-gray-200 hover:!no-underline !text-sm !font-medium !text-gray-700">
          <span className="flex items-center gap-2">
            <Info className="w-4 h-4 text-gray-500 shrink-0" />
            Coaching
          </span>
        </AccordionTrigger>
        <AccordionContent className="!px-4 !pb-3 !pt-3 !text-sm !text-gray-600 !leading-relaxed bg-white border-t border-gray-200">
          {tip}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

/** Decorative rich-text toolbar — same controls as ApplicationSectionPage's Mission & Vision editor, non-functional (this is a demo). */
function RichTextToolbar() {
  const btn = "p-1.5 rounded text-gray-400 cursor-not-allowed";
  return (
    <div
      aria-hidden="true"
      className="border-b border-gray-200 bg-gray-50 px-3 py-2 flex items-center gap-2 flex-wrap rounded-t-lg"
    >
      <select disabled className="px-2 py-1 border border-gray-300 rounded text-xs bg-white text-gray-400 cursor-not-allowed" style={CABIN}>
        <option>Times New Roman</option>
      </select>
      <select disabled className="px-2 py-1 border border-gray-300 rounded text-xs bg-white text-gray-400 cursor-not-allowed" style={CABIN}>
        <option>12pt</option>
      </select>
      <div className="w-px h-5 bg-gray-300" />
      <span className={btn} title="This is a locked demo — formatting isn't available here">
        <Bold className="w-4 h-4" />
      </span>
      <span className={btn}>
        <Italic className="w-4 h-4" />
      </span>
      <span className={btn}>
        <Underline className="w-4 h-4" />
      </span>
      <div className="w-px h-5 bg-gray-300" />
      <span className={btn}>
        <AlignLeft className="w-4 h-4" />
      </span>
      <span className={btn}>
        <AlignCenter className="w-4 h-4" />
      </span>
      <div className="w-px h-5 bg-gray-300" />
      <span className={btn}>
        <List className="w-4 h-4" />
      </span>
      <span className={btn}>
        <LinkIcon className="w-4 h-4" />
      </span>
      <span className={btn}>
        <ImageIcon className="w-4 h-4" />
      </span>
    </div>
  );
}

/** The standard four-color Google "G" mark, for the Connect Google button. */
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}

interface SmartFieldProps {
  /** Anchor id the left nav's section list scrolls to — pass on the first field of each of the six sections. */
  anchorId?: string;
  label: string;
  required?: boolean;
  helperText?: string;
  /** Renders a textarea with the decorative rich-text toolbar above it, standing in for Figma's full text editor. */
  richText?: boolean;
  maxLength?: number;
  defaultValue?: string;
  /** Overrides the placeholder shown in an empty field — e.g. Milestone Schedule's example task list, which the Figma design shows as ghost placeholder text rather than a typed-in value. */
  placeholder?: string;
  /** Starts this field in the purple "AI Draft" state. Defaults to false (a plain field). */
  aiDraft?: boolean;
  /** Mock coaching copy shown above the input while this field is still an AI Draft. */
  coachingTip?: string;
}

/**
 * One field, covering every border/state rule this walkthrough step calls
 * for:
 *   - A field that starts as an "AI Draft" gets a 2px purple border, an "AI
 *     Draft" badge next to its label, a Coaching tip above the input, and an
 *     "Accept AI Recommendation" checkbox below it.
 *   - Editing that field's value and then clicking away (blur) "graduates"
 *     it — the purple border, badge, tip, and checkbox all disappear, for
 *     good.
 *   - Checking "Accept AI Recommendation" without editing graduates it the
 *     same way, keeping the drafted value as-is.
 *   - Once a field isn't purple (whether it started plain or already
 *     graduated), focusing it shows a 1px green border instead — cleared on
 *     blur back to a plain gray border.
 */
function SmartField({
  anchorId,
  label,
  required = false,
  helperText,
  richText = false,
  maxLength = 600,
  defaultValue = "",
  placeholder,
  aiDraft = false,
  coachingTip,
}: SmartFieldProps) {
  const [value, setValue] = useState(defaultValue);
  const [isDraftActive, setIsDraftActive] = useState(aiDraft);
  const [dirty, setDirty] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(false);
    // Only an actual edit graduates the field on blur — merely tabbing
    // through an untouched AI Draft field shouldn't clear its badge.
    if (isDraftActive && dirty) setIsDraftActive(false);
  };

  const borderClass = isDraftActive
    ? "border-2 border-[#8B5CF6] focus:ring-2 focus:ring-purple-500 focus:border-[#8B5CF6]"
    : focused
      ? "border border-green-500 focus:ring-0"
      : "border border-gray-300 focus:ring-0";

  const fieldClassName = `w-full px-4 py-3 text-sm focus:outline-none ${
    richText ? "rounded-b-lg" : "rounded-lg"
  } ${borderClass}`;

  const sharedProps = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
      setDirty(true);
    },
    onFocus: () => setFocused(true),
    onBlur: handleBlur,
    maxLength,
    style: CABIN,
  };

  return (
    <div id={anchorId} className="scroll-mt-8">
      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
        <label className="text-sm font-semibold text-gray-900" style={CABIN}>
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        {isDraftActive && (
          <Badge className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-300 hover:bg-purple-50">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            AI Draft
          </Badge>
        )}
      </div>
      {helperText && (
        <p className="text-xs text-gray-500 mb-2" style={CABIN}>
          {helperText}
        </p>
      )}
      {isDraftActive && coachingTip && <CoachingTip tip={coachingTip} />}

      {richText ? (
        <div>
          <RichTextToolbar />
          <textarea rows={5} placeholder={placeholder ?? "Write something..."} className={fieldClassName} {...sharedProps} />
        </div>
      ) : (
        <input type="text" placeholder={placeholder} className={fieldClassName} {...sharedProps} />
      )}

      {isDraftActive && (
        <label className="flex items-center gap-2 mt-2 cursor-pointer w-fit">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) setIsDraftActive(false);
            }}
            className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-purple-500"
          />
          <span className="text-sm text-[#8B5CF6] font-medium" style={CABIN}>
            Accept AI Recommendation
          </span>
        </label>
      )}
    </div>
  );
}

function SelectField({
  anchorId,
  label,
  required = false,
  helperText,
  options,
  defaultValue = "",
}: {
  anchorId?: string;
  label: string;
  required?: boolean;
  helperText?: string;
  options: string[];
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div id={anchorId} className="scroll-mt-8">
      <label className="text-sm font-semibold text-gray-900 mb-1.5 block" style={CABIN}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          style={CABIN}
        >
          <option value="" disabled>
            Select
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
      {helperText && (
        <p className="text-xs text-gray-500 mt-2" style={CABIN}>
          {helperText}
        </p>
      )}
    </div>
  );
}

function RadioGroupField({
  anchorId,
  label,
  required = false,
  helperText,
  options,
  defaultValue,
}: {
  anchorId?: string;
  label: string;
  required?: boolean;
  helperText?: string;
  options: string[];
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div id={anchorId} className="scroll-mt-8">
      <label className="text-sm font-semibold text-gray-900 mb-2 block" style={CABIN}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="space-y-2.5">
        {options.map((option) => (
          <label key={option} className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="radio"
              name={label}
              checked={value === option}
              onChange={() => setValue(option)}
              className="mt-0.5 w-4 h-4 border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500"
            />
            <span className="text-sm text-gray-700 leading-snug" style={CABIN}>
              {option}
            </span>
          </label>
        ))}
      </div>
      {helperText && (
        <p className="text-xs text-gray-500 mt-2" style={CABIN}>
          {helperText}
        </p>
      )}
    </div>
  );
}

/**
 * A certification item — the Figma design uses a toggle switch here, not a
 * checkbox, defaulting on. Matches shadcn's Switch (already used elsewhere
 * in the app), which is the same 36x20px track / 16px thumb Figma shows.
 */
function CertificationToggle({ title, description }: { title: string; description: string }) {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
      <Switch checked={checked} onCheckedChange={setChecked} className="mt-0.5 shrink-0" />
      <div>
        <span className="block text-sm font-semibold text-gray-900" style={CABIN}>
          {title}
        </span>
        <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed" style={CABIN}>
          {description}
        </span>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 mb-4" style={CABIN}>
      {children}
    </h3>
  );
}

// ---------------------------------------------------------------------------
// Upload field — drag-and-drop or click-to-browse, cloud-import row, and an
// uploaded-file row matching the attached screenshot: icon, name, type/size,
// then three square buttons (Preview — now a labeled tertiary button
// instead of a bare eye icon — Download, and Trash).
// ---------------------------------------------------------------------------

interface UploadedFile {
  id: string;
  name: string;
  size: string;
}

function UploadField({
  anchorId,
  label,
  required = false,
  helperText,
  formatHint = ".pdf,.xls,.xlsx, max 50MB",
}: {
  anchorId?: string;
  label: string;
  required?: boolean;
  helperText?: string;
  formatHint?: string;
}) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const addFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const newFiles: UploadedFile[] = Array.from(fileList).map((f) => ({
      id: `${f.name}-${f.size}-${Math.random().toString(36).slice(2, 8)}`,
      name: f.name,
      size: `${Math.max(1, Math.round(f.size / 1024))} KB`,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (id: string) => setFiles((prev) => prev.filter((f) => f.id !== id));

  return (
    <div id={anchorId} className="scroll-mt-8">
      <label className="text-sm font-semibold text-gray-900 mb-1.5 block" style={CABIN}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {helperText && (
        <p className="text-xs text-gray-500 mb-3" style={CABIN}>
          {helperText}
        </p>
      )}

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        className={`border border-gray-200 rounded-lg transition-colors ${isDragging ? "border-teal-600 bg-teal-50" : "bg-white"}`}
      >
        <label className="flex flex-col items-center justify-center py-8 px-6 cursor-pointer">
          <div className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center mb-3">
            <Upload className="w-5 h-5 text-teal-600" />
          </div>
          <p className="text-sm" style={CABIN}>
            <span className="font-semibold text-teal-700">Click to upload</span>{" "}
            <span className="text-gray-500">or drag and drop</span>
          </p>
          <p className="text-xs text-gray-400 mt-1.5" style={CABIN}>
            {formatHint}
          </p>
          <input type="file" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />
        </label>

        <div className="px-6 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide" style={CABIN}>
              Or import from the cloud
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              aria-disabled="true"
              title="This is a locked demo — cloud imports aren't available here"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-not-allowed text-left"
            >
              <div className="w-6 h-6 shrink-0 grid grid-cols-2 grid-rows-2 gap-px">
                <span className="bg-red-500" />
                <span className="bg-green-500" />
                <span className="bg-blue-500" />
                <span className="bg-yellow-400" />
              </div>
              <span>
                <span className="block text-sm font-semibold text-gray-400" style={CABIN}>
                  Connect Microsoft
                </span>
                <span className="block text-xs text-gray-400" style={CABIN}>
                  OneDrive / SharePoint
                </span>
              </span>
            </button>
            <button
              type="button"
              aria-disabled="true"
              title="This is a locked demo — cloud imports aren't available here"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-not-allowed text-left"
            >
              <GoogleLogo className="w-6 h-6 shrink-0 opacity-50" />
              <span>
                <span className="block text-sm font-semibold text-gray-400" style={CABIN}>
                  Connect Google
                </span>
                <span className="block text-xs text-gray-400" style={CABIN}>
                  Google Drive
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2 mt-3">
          {files.map((file) => (
            <div key={file.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="w-5 h-5 text-gray-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate" style={CABIN}>
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500" style={CABIN}>
                    PDF • {file.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {/* The eye icon from the attached screenshot, as an actual
                    tertiary button labeled "Preview" instead of a bare icon. */}
                <Button variant="outline" size="icon" className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50" title="Preview">
                  <Eye className="w-4 h-4" />
                  <span className="sr-only">Preview</span>
                </Button>
                <button
                  aria-disabled="true"
                  title="This is a locked demo — downloads aren't available here"
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-300 cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeFile(file.id)}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Application Resources — right-hand panel. Gray background spanning the
// full viewport height, open by default but collapsible, and sticky so the
// Documents module stays in view as the page scrolls (matching the Figma
// sidebar frame, which runs the full height of the page behind a much
// shorter content block pinned near the top).
// ---------------------------------------------------------------------------

function ApplicationResourcesPanel() {
  const [expanded, setExpanded] = useState(true);

  if (!expanded) {
    return (
      <div className="w-full lg:w-12 shrink-0 lg:sticky lg:top-6 flex lg:justify-center">
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-2 lg:flex-col lg:h-40 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
          title="Show Application Resources"
        >
          <FileText className="w-4 h-4 shrink-0" />
          <span className="text-xs font-semibold lg:[writing-mode:vertical-rl]" style={CABIN}>
            Resources
          </span>
        </button>
      </div>
    );
  }

  return (
    <aside className="w-full lg:w-[320px] shrink-0 relative lg:sticky lg:top-0 lg:h-screen bg-gray-50">
      <button
        onClick={() => setExpanded(false)}
        className="hidden lg:flex absolute top-5 -left-4 z-10 w-8 h-8 bg-white rounded-full border-2 border-gray-200 shadow-sm items-center justify-center hover:border-gray-300 transition-colors"
        title="Collapse Application Resources"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>
      <div className="pt-5 px-5 lg:px-4">
        <h3 className="text-base font-semibold text-gray-900" style={CABIN}>
          Application Resources
        </h3>
      </div>

      <div className="px-5 lg:px-4 pt-4 space-y-3">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div
            aria-disabled="true"
            title="This is a locked demo — this panel can't be collapsed here"
            className="w-full px-4 py-3 flex items-center justify-between gap-2 cursor-not-allowed"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-900" style={CABIN}>
                Documents
              </span>
              <span className="text-sm text-gray-400" style={CABIN}>
                (1)
              </span>
            </span>
            <ChevronDown className="w-4 h-4 text-gray-300 rotate-180" />
          </div>
          <div className="border-t border-gray-100 p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <FileText className="w-4.5 h-4.5 text-red-500" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate" style={CABIN}>
                  Notice of Funding Opportunity
                </p>
                <p className="text-xs text-gray-500" style={CABIN}>
                  PDF Document • 104 KB
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              aria-disabled="true"
              title="This is a locked demo — documents can't be opened here"
              className="border-gray-300 bg-white text-gray-300 cursor-not-allowed shrink-0"
            >
              View
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            aria-disabled="true"
            title="This is a locked demo — this link can't navigate away"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-white rounded-lg text-sm font-medium text-gray-400 cursor-not-allowed"
            style={CABIN}
          >
            Grant Opportunity Overview
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const GRANT_TITLE = "National Oceanic and Atmospheric Administration (NOAA) – Alaska Marine Education and Training Mini-Grant Program";

const APPLICANT_NAME_TIP =
  "Use the exact legal name on file with the IRS and SAM.gov — a mismatch here is one of the most common reasons a Statement of Interest gets kicked back for correction.";
const FUNDING_TITLE_TIP =
  "Copy the NOFO's title exactly, including the year and any addendum name — funders' intake systems often match on this string verbatim.";
const FUNDING_NUMBER_TIP =
  "This is the opportunity number printed on the NOFO itself, not your own internal tracking number — double check it against grants.gov before submitting.";
const PROJECT_TITLE_TIP =
  "Keep this to one line a reviewer can scan in a list of forty other applications — specific enough to be memorable, short enough to fit a table cell.";
const DURATION_TIP =
  "Confirm your proposed start date falls within the NOFO's allowed project period — starting outside that window is an easy, avoidable rejection reason.";
const PI_NAME_TIP =
  "This should be whoever will actually answer the funder's technical questions during review, not necessarily your executive director.";
const PI_EMAIL_TIP =
  "Use an email you check daily during the review period — funders often give a narrow window to respond to clarification requests.";

export function GrantWritingDemoPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Breadcrumb — Home is inert like every locked demo page. "Applications"
          is a middle crumb here (not the current page), so unlike
          BreadcrumbPage's teal "current page" styling, it renders as plain
          gray, non-clickable text. */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <span
              aria-disabled="true"
              title="This is a locked demo — the breadcrumb can't navigate away"
              className="cursor-not-allowed"
            >
              <BreadcrumbHome />
            </span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span
              aria-disabled="true"
              title="This is a locked demo — the breadcrumb can't navigate away"
              className="text-sm font-semibold text-[#717680] cursor-not-allowed whitespace-nowrap"
              style={CABIN}
            >
              Applications
            </span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="max-w-[420px] truncate">{GRANT_TITLE}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header — title/description constrained to a narrower column on the
          left (not stretched full-width), with a compact right-aligned
          cluster for the last-saved timestamp and the Preview & Export
          button, matching the Figma layout's ~54/46 column split. */}
      <div className="flex items-center justify-between gap-8 flex-wrap pb-6 border-b border-gray-100">
        <div className="min-w-0 max-w-md">
          <h1 className="text-3xl text-gray-900 mb-3" style={{ fontFamily: "Lustria, serif" }}>
            {GRANT_TITLE}
          </h1>
          <p className="text-sm text-gray-500" style={CABIN}>
            Complete all required assessment criteria below. Each section shows the point value assigned.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 whitespace-nowrap" style={CABIN}>
            <Clock className="w-4 h-4" />
            Last saved 45 days ago
          </div>
          {/* Green like the design, but locked — cursor-not-allowed on
              hover, no navigation. */}
          <Button
            aria-disabled="true"
            title="This is a locked demo — export isn't available here"
            className="gap-1.5 bg-teal-600 text-white cursor-not-allowed hover:bg-teal-600 shrink-0"
          >
            <Download className="w-4 h-4" />
            Preview &amp; Export
          </Button>
        </div>
      </div>

      {/* Programs row — "My Program" is a plain teal link-styled chip, not
          a filled gray badge. */}
      <div className="flex items-center gap-2 py-4 border-b border-gray-100 mb-8 text-sm" style={CABIN}>
        <span className="text-gray-500">Programs:</span>
        <span
          aria-disabled="true"
          title="This is a locked demo — this link can't navigate away"
          className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold text-teal-700 cursor-not-allowed"
        >
          My Program
        </span>
      </div>

      {/* Body: sections + resources panel */}
      <div className="flex gap-8 items-start flex-col lg:flex-row">
        <div className="flex-1 min-w-0 space-y-8">
          {/* ============================================================ */}
          {/* 1. Cover Page & Project Abstract                              */}
          {/* ============================================================ */}
          <div id="cover-page" className="scroll-mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
              <SectionHeading>Cover Page &amp; Project Abstract</SectionHeading>
              <SmartField
                label="Applicant Name"
                required
                aiDraft
                coachingTip={APPLICANT_NAME_TIP}
                helperText="Enter the full legal name of the applicant entity as registered with the IRS."
                defaultValue="Nikki's Org"
              />
              <SmartField
                label="Funding Opportunity Title"
                required
                aiDraft
                coachingTip={FUNDING_TITLE_TIP}
                helperText="Enter the exact title as listed in the NOFO: '2026 Alaska Marine Education and Training Mini-Grant'."
                defaultValue="2026 Alaska Marine Education and Training Mini-Grant"
              />
              <SmartField
                label="Funding Opportunity Number"
                required
                aiDraft
                coachingTip={FUNDING_NUMBER_TIP}
                helperText="Enter the Funding Opportunity Number exactly as listed on grants.gov."
                defaultValue="NOAA-NMFS-AK-2026-33268"
              />
              <SmartField
                label="Assistance Listing Number (CFDA Number)"
                required
                helperText="Enter the Assistance Listing Number: 11.455."
                defaultValue="11.455"
              />
              <SmartField
                label="Program/Project Title"
                required
                aiDraft
                coachingTip={PROJECT_TITLE_TIP}
                helperText="Provide a concise, descriptive title for your proposed project."
                defaultValue="Expanding Access to Assistive Technology Financing"
              />
              <SmartField
                label="Program/Project Duration"
                required
                aiDraft
                coachingTip={DURATION_TIP}
                helperText="Projects may begin no earlier than September 1, 2026."
                defaultValue="September 1, 2026 - August 31, 2027"
              />
              <SmartField
                label="Principal Investigator / Project Manager Name"
                required
                aiDraft
                coachingTip={PI_NAME_TIP}
                helperText="The PI/PM is the lead technical contact. This person will be listed on all correspondence."
                defaultValue="Nikki Wolfe"
              />
              <SmartField
                label="Principal Investigator / Project Manager Email"
                required
                aiDraft
                coachingTip={PI_EMAIL_TIP}
                helperText="Email address for the PI/PM."
                defaultValue="nikki@email.com"
              />
              <SmartField
                label="Financial Representative Name"
                required
                helperText="Provide the name of the financial representative for this application."
              />
              <SelectField
                label="Program Priority (Primary)"
                required
                helperText="Select the single priority that most closely reflects this project's focus."
                options={["Marine Education & Outreach", "Habitat Restoration", "Fisheries Research", "Community Resilience"]}
              />
              <SmartField
                label="Program/Project Proposal Total Amount Requested"
                required
                helperText="Enter the total amount of federal funding requested for this project period."
                defaultValue="$50,000.00"
              />
              <SmartField
                label="Program/Proposed Project Outcomes (Summary)"
                required
                richText
                helperText="Provide a concise summary of the expected outcomes of this project."
              />
              <SmartField
                label="Project Abstract"
                required
                richText
                helperText="Write a clear, non-technical summary of your project suitable for public release."
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. Project Narrative                                          */}
          {/* ============================================================ */}
          <div id="project-narrative" className="scroll-mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
              <SectionHeading>Project Narrative</SectionHeading>
              <SmartField
                label="Project Goals and Objectives"
                required
                richText
                helperText="State the overarching project goal clearly. Explain how it aligns with the funder's priorities."
              />
              <SmartField
                label="Project Activities and Plans"
                required
                richText
                helperText="Describe all activities in detail. Explain the methods and approach you'll use."
              />
              <SmartField
                label="Milestone Schedule"
                required
                richText
                helperText="Provide a clear timeline showing when each major task will be completed."
                placeholder={"Task 1: [Description] – Month 1-3\nTask 2: [Description] – Month 4-6\nTask 3: [Description] – Month 7-12"}
              />
              <SmartField
                label="Benefits or Results Expected"
                required
                richText
                helperText="Describe the anticipated outcomes and benefits. Identify who benefits and how."
              />
              <SmartField
                label="Project Management"
                required
                richText
                helperText="Identify the lead organization/individual and the roles of any partners involved."
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 3. Budget Narrative — ends with the generic Documents upload  */}
          {/* ============================================================ */}
          <div id="budget-narrative" className="scroll-mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
              <SectionHeading>Budget Narrative</SectionHeading>
              <SmartField
                label="Budget by Cost Category"
                required
                richText
                helperText="List all costs by category. Ineligible costs include construction and lobbying."
              />
              <SmartField
                label="Budget Justification Narrative"
                required
                richText
                helperText="Provide a written explanation for each budget line item requested."
              />
              <RadioGroupField
                label="Indirect Cost Rate Approach"
                required
                helperText="If you have a negotiated indirect cost rate with a Federal agency, enter it below."
                options={[
                  "Negotiated indirect cost rate with a Federal agency",
                  "De minimis rate of 15% of Modified Total Direct Costs",
                  "No indirect costs claimed",
                ]}
                defaultValue="De minimis rate of 15% of Modified Total Direct Costs"
              />
              <SmartField
                label="Negotiated Indirect Cost Rate (%)"
                helperText="Enter your negotiated indirect cost rate as a percentage, if applicable."
              />
              <UploadField label="Documents" helperText="Upload any supporting budget documentation." />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 4. Attachments                                                */}
          {/* ============================================================ */}
          <div id="attachments" className="scroll-mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <SectionHeading>Attachments</SectionHeading>
              <UploadField
                label="Attachments (Combined PDF)"
                required
                helperText="Combine ALL attachments into ONE PDF file. Required: Letters of Support, Resumes, Logic Model."
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 5. Federal Application Forms                                  */}
          {/* ============================================================ */}
          <div id="federal-forms" className="scroll-mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
              <SectionHeading>Federal Application Forms</SectionHeading>
              <SmartField
                label="Unique Entity Identifier (UEI)"
                required
                helperText="Your UEI is obtained by registering with SAM.gov."
                defaultValue=""
              />
              <SmartField
                label="eRA Commons User ID (PD/PI Username)"
                required
                helperText="The PD/PI's eRA Commons username must appear on SF-424."
              />
              <SmartField
                label="Congressional District"
                required
                helperText="Enter in the format: [State Abbreviation]-[three digit district number]."
                defaultValue="AK-001"
              />
              <UploadField
                label="SF-424: Application for Federal Assistance (Upload)"
                required
                helperText="Download the SF-424 from www.grants.gov/forms. Complete, sign, and upload it here."
              />
              <UploadField
                label="SF-424A: Budget Information for Non-Construction Programs (Upload)"
                required
                helperText="Download the SF-424A from www.grants.gov/forms. Complete and upload it here."
              />
              <UploadField
                label="SF-424B: Assurances for Non-Construction Programs (Upload)"
                required
                helperText="Download the SF-424B from www.grants.gov/forms. This must be signed by an authorized representative."
              />
              <UploadField
                label="CD-511: Certification Regarding Lobbying (Upload)"
                required
                helperText="Complete and upload the CD-511 form certifying compliance with federal lobbying restrictions."
              />
              <UploadField
                label="NEPA Questionnaire (Upload)"
                required
                helperText="Complete the NEPA questionnaire, answering at minimum the environmental review questions."
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 6. Applicant Eligibility & Certifications                     */}
          {/* ============================================================ */}
          <div id="eligibility-certs" className="scroll-mt-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
              <SectionHeading>Applicant Eligibility &amp; Certifications</SectionHeading>
              <SelectField
                label="Applicant Type"
                required
                helperText="Federal agencies and their employees are NOT eligible to apply."
                options={["Nonprofit Entity", "For-Profit Entity", "State Government", "Local Government", "Tribal Government", "Institution of Higher Education"]}
                defaultValue="Nonprofit Entity"
              />
              <RadioGroupField
                label="Will the project be conducted within Alaska?"
                required
                helperText="Only projects conducted within Alaska are eligible for this NOFO."
                options={["Yes – the project will be conducted within Alaska", "No – the project will not be conducted within Alaska"]}
                defaultValue="Yes – the project will be conducted within Alaska"
              />
              <CertificationToggle
                title="Certification: Only one application submitted per applicant"
                description="Only one application per individual or organization will be accepted for this opportunity."
              />
              <RadioGroupField
                label="Is your organization/entity currently registered and active in SAM.gov?"
                required
                helperText="You must be registered in SAM.gov and have an active registration to receive an award."
                options={["Yes – registered and active in SAM.gov", "In progress – registration submitted but not yet completed", "No – not yet registered"]}
              />
              <CertificationToggle
                title="Certification: Applicant is NOT a Federal agency"
                description="Federal agencies and their employees, as well as Federally-funded R&D centers, are not eligible applicants."
              />
              <RadioGroupField
                label="Do you anticipate incurring pre-award costs?"
                required
                helperText="Pre-award costs up to 90 days before the period of performance may be allowable with prior written approval."
                options={["Yes – I anticipate pre-award costs and will notify the agency", "No – I do not anticipate pre-award costs"]}
                defaultValue="No – I do not anticipate pre-award costs"
              />
            </div>
          </div>
        </div>

        <ApplicationResourcesPanel />
      </div>
    </div>
  );
}
