import { useState } from "react";
import {
  Info,
  Sparkles,
  Upload,
  FileText,
  X,
  Download,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
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
 * (https://www.figma.com/design/AJQoDJAJZL2ItawgAfLYh3/Great-Grants-MVP?node-id=14622-43375).
 *
 * The Figma frame lays out one long, single-page grant application — every
 * section stacked vertically with a right-hand "Application Resources"
 * panel that scrolls along with it — rather than the live app's one
 * route-per-section model (/application/:id/s/:id). This page follows the
 * Figma structure: it renders application "1" (Administration for Community
 * Living) with all nine of its sections on one page, each addressable by id
 * so the left nav's nested section list (forced open — see SharedSidebar's
 * isGrantWritingDemo) can scroll straight to it instead of navigating away.
 *
 * The Figma frame's field-by-field content (a ~20-field SF-424 federal
 * grant form for a different, NOAA-specific opportunity) doesn't map onto
 * that shared nine-section taxonomy, so each section below carries
 * representative fields inspired by the Figma content instead of a literal
 * field-for-field port — see individual section comments. What IS ported
 * faithfully, because it's the part of the design this walkthrough step
 * exists to demonstrate, is every interaction pattern the design specifies:
 * the purple "AI Draft" field treatment with its Accept checkbox, the
 * collapsed Coaching tip sitting above an input (reusing the /organization
 * Financial Info tab's "Helpful Tips" pattern, renamed), the drag-and-drop
 * upload card, and the disabled "View" link on the Application Resources
 * panel's document row.
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

interface SmartFieldProps {
  /** Anchor id the left nav's section list scrolls to — pass the section's id on its first field only. */
  anchorId?: string;
  label: string;
  required?: boolean;
  helperText?: string;
  multiline?: boolean;
  maxLength?: number;
  defaultValue?: string;
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
  multiline = false,
  maxLength = 600,
  defaultValue = "",
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

  const sharedProps = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
      setDirty(true);
    },
    onFocus: () => setFocused(true),
    onBlur: handleBlur,
    maxLength,
    className: `w-full rounded-lg px-4 py-3 text-sm focus:outline-none ${borderClass}`,
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

      {multiline ? (
        <textarea rows={5} {...sharedProps} />
      ) : (
        <input type="text" {...sharedProps} />
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 mb-4" style={CABIN}>
      {children}
    </h3>
  );
}

// ---------------------------------------------------------------------------
// Documents section — drag-and-drop upload
// ---------------------------------------------------------------------------

interface UploadedFile {
  id: string;
  name: string;
  size: string;
}

function DocumentsSection() {
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
    <div id="s7" className="scroll-mt-8">
      <SectionHeading>Documents</SectionHeading>
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
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
          className={`border-2 border-dashed rounded-lg transition-colors ${
            isDragging ? "border-teal-600 bg-teal-50" : "border-gray-300 hover:border-teal-400 hover:bg-teal-50/30"
          }`}
        >
          <label className="flex flex-col items-center justify-center py-10 px-6 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-3">
              <Upload className="w-6 h-6 text-teal-600" />
            </div>
            <p className="text-sm font-semibold text-gray-900" style={CABIN}>
              Click to upload
            </p>
            <p className="text-sm text-gray-500" style={CABIN}>
              or drag and drop
            </p>
            <p className="text-xs text-gray-400 mt-2" style={CABIN}>
              .pdf, .xls, .xlsx, max 50MB
            </p>
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(e) => addFiles(e.target.files)}
            />
          </label>
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <FileText className="w-4.5 h-4.5 text-red-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate" style={CABIN}>
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500" style={CABIN}>
                      {file.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {/* The eye icon from the attached screenshot, as an actual
                      button: grey border, white background, black text. */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 bg-white text-black hover:bg-gray-50"
                  >
                    Preview
                  </Button>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="p-1.5 rounded hover:bg-red-50 transition-colors"
                    aria-label={`Remove ${file.name}`}
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Application Resources — right-hand panel. Not sticky/fixed on purpose: it
// scrolls in the normal document flow along with the rest of the page.
// ---------------------------------------------------------------------------

function ApplicationResourcesPanel() {
  return (
    <aside className="w-full lg:w-[320px] shrink-0">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-base font-semibold text-gray-900" style={CABIN}>
            Application Resources
          </h3>
        </div>

        <div className="p-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 bg-gray-50 border-b border-gray-100">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-900" style={CABIN}>
                Documents
              </span>
              <span className="text-sm text-gray-400" style={CABIN}>
                (1)
              </span>
            </div>
            <div className="p-4 flex items-center justify-between gap-3">
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
              {/* Locked demo — clicking through to a document viewer isn't
                  part of this walkthrough. */}
              <span
                aria-disabled="true"
                title="This is a locked demo — documents can't be opened here"
                className="text-sm font-medium text-gray-300 cursor-not-allowed shrink-0"
                style={CABIN}
              >
                View
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const GRANT_TITLE = "Administration for Community Living (ACL) - Assistive Technology Alternative Financing Program";

const MISSION_COACHING_TIP =
  "Lead with the population you serve and the outcome you're driving toward, in plain language a program officer skimming forty of these can still follow. Save the how — your specific approach — for Project Details below.";
const PROGRAM_DETAILS_COACHING_TIP =
  "Reviewers are scoring this against the NOFO's stated priorities, not just reading it as a story. Name the specific priority you're addressing before describing your approach.";
const PERFORMANCE_METRICS_COACHING_TIP =
  "Every metric here should be something you can actually report on in year one — a number your program already tracks, or could start tracking with a one-line intake form change. Avoid metrics you'd need a new system to measure.";
const NARRATIVE_COACHING_TIP =
  "This is usually the highest-weighted section. Structure it around the funder's own review criteria, in the funder's own order, so a reviewer scoring against a rubric can find every point you're making.";

export function GrantWritingDemoPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-8">
      {/* Breadcrumb — Home is inert, same as every other locked demo page. */}
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
            <BreadcrumbPage>Applications</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="max-w-[420px] truncate">{GRANT_TITLE}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="flex items-start justify-between gap-6 flex-wrap mb-8">
        <div className="min-w-0">
          <h1 className="text-3xl text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
            {GRANT_TITLE}
          </h1>
          <p className="text-sm text-gray-500" style={CABIN}>
            Complete all required sections below. Every AI Draft is a starting point — edit it, or accept it as-is.
          </p>
          <p className="text-xs text-gray-400 mt-2" style={CABIN}>
            Last saved 45 days ago
          </p>
        </div>
        <Button
          variant="outline"
          aria-disabled="true"
          title="This is a locked demo — export isn't available here"
          className="gap-1.5 border-gray-300 text-gray-400 cursor-not-allowed shrink-0"
        >
          <Download className="w-4 h-4" />
          Preview &amp; Export
        </Button>
      </div>

      {/* Body: sections + resources panel */}
      <div className="flex gap-8 items-start flex-col lg:flex-row">
        <div className="flex-1 min-w-0 space-y-10">
          <SmartField
            anchorId="s1"
            label="Mission & Vision"
            required
            multiline
            aiDraft
            maxLength={2000}
            coachingTip={MISSION_COACHING_TIP}
            helperText="Describe the mission and vision this project advances."
            defaultValue={
              "Our mission is to expand equitable access to assistive technology by providing flexible, affordable financing options that empower individuals with disabilities to live independently and participate fully in their communities."
            }
          />

          <div id="s2" className="scroll-mt-8">
            <SectionHeading>Focus Area *</SectionHeading>
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
              {["Education", "Health", "Environment", "Community Development"].map((area) => (
                <label key={area} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500 cursor-pointer"
                  />
                  <span className="text-base text-gray-700 group-hover:text-gray-900 transition-colors" style={CABIN}>
                    {area}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <SmartField
            anchorId="s3"
            label="Program Details"
            required
            multiline
            aiDraft
            maxLength={2000}
            coachingTip={PROGRAM_DETAILS_COACHING_TIP}
            helperText="Describe the program this application funds and how it addresses the NOFO's stated priorities."
            defaultValue="This program provides low-interest financing for assistive technology purchases, paired with financial literacy coaching, for individuals with disabilities who are unable to access traditional consumer credit."
          />

          <SmartField
            anchorId="s4"
            label="Performance Metrics"
            required
            multiline
            aiDraft
            maxLength={2000}
            coachingTip={PERFORMANCE_METRICS_COACHING_TIP}
            helperText="List the outcome measures you'll report against."
            defaultValue="Number of loans issued, average loan-to-approval time, percentage of borrowers reporting improved independence at 12 months, and loan default rate."
          />

          <div id="s5" className="scroll-mt-8">
            <SectionHeading>Budget</SectionHeading>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <SmartField label="Amount Requested" defaultValue="$500,000" helperText="Total federal funding requested for this project period." />
            </div>
          </div>

          <SmartField
            anchorId="s6"
            label="Narrative"
            multiline
            aiDraft
            maxLength={3000}
            coachingTip={NARRATIVE_COACHING_TIP}
            helperText="Your full project narrative — goals, activities, timeline, and expected outcomes."
            defaultValue="Task 1: Recruit and onboard lending partners — Months 1-3. Task 2: Launch financial literacy coaching curriculum — Months 3-6. Task 3: Begin loan originations and track outcomes against baseline — Months 6-24."
          />

          <DocumentsSection />

          <div id="s8" className="scroll-mt-8">
            <SectionHeading>Compliance *</SectionHeading>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500" />
                <span className="text-base text-gray-700" style={CABIN}>
                  I certify that all information provided is accurate and complete
                </span>
              </label>
            </div>
          </div>

          <div id="s9" className="scroll-mt-8">
            <SectionHeading>Eligibility *</SectionHeading>
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="eligibility" value={option} className="w-5 h-5 border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500" />
                  <span className="text-base text-gray-700" style={CABIN}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <ApplicationResourcesPanel />
      </div>
    </div>
  );
}
