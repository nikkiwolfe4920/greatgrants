import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router";
import { FileText, Sparkles, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Link, Image, Undo2, Clock, Download, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { DocumentsSectionV2 } from "../components/DocumentsSectionV2";
import { AICoachingModule } from "../components/AICoachingModule";
import { ExportApplicationDialog } from "../components/ExportApplicationDialog";
import { SectionAssignmentControl } from "../components/SectionAssignmentControl";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "../components/ui/breadcrumb";
import { mockApplications } from "@/data/applications";
import { useSectionAssignments } from "@/hooks/useSectionAssignments";
import type { SectionReviewStatus } from "@/lib/sectionAssignments";

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;

/** Decorative formatting toolbar shared by every rich-text field (Mission & Vision, Program Details, Performance Metrics, Narrative). */
function RichTextToolbar() {
  return (
    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 flex items-center gap-4 flex-wrap">
      <select className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white" style={CABIN}>
        <option>Inter</option>
        <option>Arial</option>
        <option>Helvetica</option>
      </select>
      <select className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white" style={CABIN}>
        <option>16px</option>
        <option>14px</option>
        <option>18px</option>
        <option>20px</option>
      </select>
      <div className="w-px h-6 bg-gray-300" />
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Bold">
        <Bold className="w-4 h-4 text-gray-700" />
      </button>
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Italic">
        <Italic className="w-4 h-4 text-gray-700" />
      </button>
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Underline">
        <Underline className="w-4 h-4 text-gray-700" />
      </button>
      <div className="w-px h-6 bg-gray-300" />
      <button className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-gray-200 rounded transition-colors">
        <div className="w-4 h-4 rounded-full bg-gray-900 border border-gray-300" />
      </button>
      <div className="w-px h-6 bg-gray-300" />
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Align Left">
        <AlignLeft className="w-4 h-4 text-gray-700" />
      </button>
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Align Center">
        <AlignCenter className="w-4 h-4 text-gray-700" />
      </button>
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Align Right">
        <AlignRight className="w-4 h-4 text-gray-700" />
      </button>
      <div className="w-px h-6 bg-gray-300" />
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Bullet List">
        <List className="w-4 h-4 text-gray-700" />
      </button>
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Numbered List">
        <ListOrdered className="w-4 h-4 text-gray-700" />
      </button>
      <div className="w-px h-6 bg-gray-300" />
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Insert Link">
        <Link className="w-4 h-4 text-gray-700" />
      </button>
      <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Insert Image">
        <Image className="w-4 h-4 text-gray-700" />
      </button>
    </div>
  );
}

/** A textarea with the shared RichTextToolbar above it and a "characters left" footer below — used by Program Details, Performance Metrics, and Narrative. */
function RichTextField({
  value,
  onChange,
  onBlur,
  placeholder,
  maxLength,
  minHeight = "200px",
}: {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder: string;
  maxLength: number;
  minHeight?: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <RichTextToolbar />
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full p-4 focus:outline-none resize-none"
        style={{ ...CABIN, fontSize: "14px", lineHeight: "1.6", minHeight }}
        maxLength={maxLength}
      />
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 text-sm text-gray-500" style={CABIN}>
        {maxLength - value.length} characters left
      </div>
    </div>
  );
}

/**
 * ApplicationSectionPage — /application/:applicationId/s/:sectionId, mirroring
 * the single-page, continuously-scrolling layout ported from the
 * /grant-writing-demo walkthrough (see GrantWritingDemoPage), but for a real
 * (non-demo) application: every one of the application's nine sections
 * renders on one page with a right-hand Application Resources panel,
 * instead of one route per section with a Back/Save & Continue pagination
 * bar. The :sectionId in the URL just scrolls the page to that section's
 * anchor — see the effect below — so the sidebar's per-section links (see
 * SharedSidebar) keep working unchanged.
 */
export function ApplicationSectionPage() {
  const { applicationId, sectionId } = useParams<{ applicationId: string; sectionId: string }>();

  const currentApplication = mockApplications.find((app) => app.id === applicationId);
  const sections = currentApplication?.sections ?? [];

  // Per-section "assigned to" + review status + last-saved state, shared
  // with the /applications list via localStorage — see useSectionAssignments.
  const assignmentApplications = useMemo(
    () => (currentApplication ? [{ id: currentApplication.id, sections: currentApplication.sections }] : []),
    [currentApplication],
  );
  const { getAssignment, assignSection, setReviewStatus, markSaved } = useSectionAssignments(assignmentApplications);

  // Scroll to the requested section whenever the URL's :sectionId changes
  // (sidebar section clicks navigate here with a new sectionId rather than
  // remounting the page — see SharedSidebar's handleSectionClick).
  useEffect(() => {
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [sectionId]);

  const [exportDialogOpen, setExportDialogOpen] = useState(false);

  // ---------------------------------------------------------------------
  // Section field state
  // ---------------------------------------------------------------------
  const [missionVisionText, setMissionVisionText] = useState(`Mission
Our mission is to expand equitable access to assistive technology by providing flexible, affordable financing options that empower individuals with disabilities to live independently, participate fully in their communities, and achieve economic self-sufficiency. Through inclusive lending practices, financial education, and strategic partnerships, we aim to remove systemic financial barriers that prevent individuals from acquiring the tools and technologies essential to daily living, employment, and overall well-being.
Vision
We envision a future where all individuals—regardless of disability, income, or background—have timely access to the assistive technology they need to thrive. In this future, financial constraints no longer limit independence or opportunity, and communities are strengthened by the full participation of people with disabilities. By building a sustainable, community-centered financing ecosystem, we strive to create lasting pathways to inclusion, autonomy, and dignity for those we serve.`);
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([]);
  const [programDetailsText, setProgramDetailsText] = useState("");
  const [performanceMetricsText, setPerformanceMetricsText] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [narrativeText, setNarrativeText] = useState("");
  const [complianceChecked, setComplianceChecked] = useState(false);
  const [eligibilitySelection, setEligibilitySelection] = useState<string>("");

  // Mission & Vision AI states
  const [aiAccepted, setAiAccepted] = useState(false);
  const [isAcceptingAI, setIsAcceptingAI] = useState(false);

  // Edit tracking and undo states
  const [contentEditedAfterAI, setContentEditedAfterAI] = useState(false);
  const [lastSavedContent, setLastSavedContent] = useState("");
  const [showUndoButton, setShowUndoButton] = useState(false);
  const [lastEditTime, setLastEditTime] = useState<Date | null>(null);
  const [showAIBadge, setShowAIBadge] = useState(true);

  const aiGeneratedText = `We need another and a wiser and perhaps a more mystical concept of animals. Remote from universal nature, and living by complicated artifice, man in civilization surveys the creature through the glass of his knowledge and sees thereby a feather magnified and the whole image in distortion.

We patronize them for their incompleteness, for their tragic fate of having taken form so far below ourselves. And therein we err, and greatly err. For the animal shall not be measured by man.

In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear. They are not brethren, they are not underlings; they are other nations, caught with ourselves in the net of life and time, fellow prisoners of the splendour and travail of the earth.`;

  const handleAcceptAI = () => {
    setIsAcceptingAI(true);
    setTimeout(() => {
      setAiAccepted(true);
      setMissionVisionText(aiGeneratedText);
      setLastSavedContent(aiGeneratedText);
      setIsAcceptingAI(false);
      setShowAIBadge(false);
      if (applicationId) markSaved(applicationId, "s1");
    }, 1500);
  };

  const handleMissionVisionChange = (value: string) => {
    setAiAccepted(true);
    setMissionVisionText(value);
    if (aiAccepted && value !== aiGeneratedText && !contentEditedAfterAI) {
      setContentEditedAfterAI(true);
      setShowAIBadge(false);
    }
  };

  const handleMissionVisionBlur = () => {
    if (missionVisionText !== lastSavedContent && missionVisionText.length > 0) {
      setLastSavedContent(missionVisionText);
      setLastEditTime(new Date());
      setShowUndoButton(true);
      setTimeout(() => setShowUndoButton(false), 10000);
      if (applicationId) markSaved(applicationId, "s1");
    }
  };

  const handleUndo = () => {
    const storageKey = `app-${applicationId}-section-s1-previousContent`;
    const previousContent = localStorage.getItem(storageKey);
    if (previousContent) {
      setMissionVisionText(previousContent);
      setShowUndoButton(false);
    }
  };

  // Store previous content before save for undo
  useEffect(() => {
    if (missionVisionText && lastSavedContent !== missionVisionText) {
      const storageKey = `app-${applicationId}-section-s1-previousContent`;
      localStorage.setItem(storageKey, lastSavedContent);
    }
  }, [lastSavedContent, missionVisionText, applicationId]);

  if (!currentApplication) {
    return (
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <p className="text-sm text-gray-500" style={CABIN}>
          Application not found.
        </p>
      </div>
    );
  }

  const sectionPoints = (id: string) => sections.find((s) => s.id === id)?.points ?? 0;

  // Wires a section id up to the shared assignment state — spread onto
  // <SectionAssignmentControl> in every section header below.
  const assignmentProps = (sectionId: string) => {
    const record = getAssignment(currentApplication.id, sectionId);
    return {
      assigneeId: record.assigneeId,
      reviewStatus: record.reviewStatus,
      lastSavedAt: record.lastSavedAt,
      onAssign: (memberId: string) => assignSection(currentApplication.id, sectionId, memberId),
      onReviewStatusChange: (status: SectionReviewStatus) => setReviewStatus(currentApplication.id, sectionId, status),
    };
  };

  const handleSectionSaved = (sectionId: string) => markSaved(currentApplication.id, sectionId);

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-8">
      <div className="flex gap-8 items-start flex-col lg:flex-row">
        <div className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <RouterLink to="/">
                    <BreadcrumbHome />
                  </RouterLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <RouterLink to="/applications" className="text-sm font-semibold whitespace-nowrap">
                    Applications
                  </RouterLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[420px] truncate">{currentApplication.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="flex items-center justify-between gap-8 flex-wrap pb-6 border-b border-gray-100">
            <div className="min-w-0 max-w-md">
              <h1 className="text-3xl text-gray-900 mb-3" style={{ fontFamily: "Lustria, serif" }}>
                {currentApplication.title}
              </h1>
              <p className="text-sm text-gray-500" style={CABIN}>
                Complete all required sections below. Each section shows the point value assigned.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-1.5 text-sm text-gray-500 whitespace-nowrap" style={CABIN}>
                <Clock className="w-4 h-4" />
                Last updated {currentApplication.lastUpdated}
              </div>
              <Button onClick={() => setExportDialogOpen(true)} className="gap-1.5 bg-teal-600 hover:bg-teal-700 text-white shrink-0">
                <Download className="w-4 h-4" />
                Preview &amp; Export
              </Button>
            </div>
          </div>

          <div className="space-y-8 mt-8">
            {/* ============================================================ */}
            {/* s1. Mission & Vision                                          */}
            {/* ============================================================ */}
            <div id="s1" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <h3 className="text-base text-gray-900" style={CABIN}>
                    Mission &amp; Vision
                  </h3>
                  {showAIBadge && (
                    <Badge className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-300 hover:bg-purple-50">
                      <Sparkles className="w-3.5 h-3.5 mr-1" />
                      AI Enhanced
                    </Badge>
                  )}
                </div>
                <SectionAssignmentControl {...assignmentProps("s1")} />
              </div>

              <AICoachingModule applicationId={applicationId || "1"} sectionId="s1" />

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mt-4">
                <RichTextToolbar />

                {/* Text Area with AI Accept overlay */}
                <div className="relative">
                  {isAcceptingAI && (
                    <div className="absolute inset-0 bg-white flex items-center justify-center z-20">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
                        <span className="text-sm font-medium text-purple-700">Accepting AI recommendation...</span>
                      </div>
                    </div>
                  )}
                  <textarea
                    value={missionVisionText}
                    onChange={(e) => handleMissionVisionChange(e.target.value)}
                    placeholder="Enter your mission and vision..."
                    className="w-full min-h-[300px] p-6 rounded-b-lg focus:outline-none resize-none border-2 border-[#8B5CF6] focus:ring-2 focus:ring-purple-500 focus:border-[#8B5CF6]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.8" }}
                    maxLength={2000}
                    readOnly={isAcceptingAI}
                    onBlur={handleMissionVisionBlur}
                  />
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-sm text-gray-500" style={CABIN}>
                      {2000 - missionVisionText.length} characters left
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) handleAcceptAI();
                        }}
                        className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-sm text-[#8B5CF6] font-medium" style={CABIN}>
                        Accept AI Recommendation
                      </span>
                    </label>
                  </div>
                  {showUndoButton && lastEditTime && (
                    <button
                      onClick={handleUndo}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors text-sm font-medium"
                      style={CABIN}
                    >
                      <Undo2 className="w-3.5 h-3.5" />
                      Undo
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* s2. Focus Area                                                */}
            {/* ============================================================ */}
            <div id="s2" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <h3 className="text-base text-gray-900" style={CABIN}>
                  Focus Area <span className="text-gray-600">({sectionPoints("s2")} points)</span> <span className="text-teal-600">*</span>
                </h3>
                <SectionAssignmentControl {...assignmentProps("s2")} />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  {["Education", "Health", "Environment", "Community Development"].map((area) => (
                    <label key={area} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedFocusAreas.includes(area)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFocusAreas([...selectedFocusAreas, area]);
                          } else {
                            setSelectedFocusAreas(selectedFocusAreas.filter((a) => a !== area));
                          }
                          handleSectionSaved("s2");
                        }}
                        className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500 cursor-pointer"
                      />
                      <span className="text-base text-gray-700 group-hover:text-gray-900 transition-colors" style={CABIN}>
                        {area}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* s3. Program Details                                           */}
            {/* ============================================================ */}
            <div id="s3" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <h3 className="text-base text-gray-900" style={CABIN}>
                  Program Details <span className="text-gray-600">({sectionPoints("s3")} points)</span> <span className="text-teal-600">*</span>
                </h3>
                <SectionAssignmentControl {...assignmentProps("s3")} />
              </div>
              <RichTextField
                value={programDetailsText}
                onChange={setProgramDetailsText}
                onBlur={() => handleSectionSaved("s3")}
                placeholder="Describe the program details..."
                maxLength={2000}
              />
            </div>

            {/* ============================================================ */}
            {/* s4. Performance Metrics                                       */}
            {/* ============================================================ */}
            <div id="s4" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <h3 className="text-base text-gray-900" style={CABIN}>
                  Performance Metrics <span className="text-gray-600">({sectionPoints("s4")} points)</span> <span className="text-red-600">*</span>
                </h3>
                <SectionAssignmentControl {...assignmentProps("s4")} />
              </div>
              <RichTextField
                value={performanceMetricsText}
                onChange={setPerformanceMetricsText}
                onBlur={() => handleSectionSaved("s4")}
                placeholder="Describe the performance metrics..."
                maxLength={2000}
              />
            </div>

            {/* ============================================================ */}
            {/* s5. Budget                                                    */}
            {/* ============================================================ */}
            <div id="s5" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <h3 className="text-base text-gray-900" style={CABIN}>
                  Budget <span className="text-gray-600">({sectionPoints("s5")} points)</span>
                </h3>
                <SectionAssignmentControl {...assignmentProps("s5")} />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <input
                  type="text"
                  value={budgetAmount}
                  onChange={(e) => setBudgetAmount(e.target.value)}
                  onBlur={() => handleSectionSaved("s5")}
                  placeholder="Enter budget amount..."
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  style={{ ...CABIN, fontSize: "14px" }}
                />
              </div>
            </div>

            {/* ============================================================ */}
            {/* s6. Narrative                                                 */}
            {/* ============================================================ */}
            <div id="s6" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <h3 className="text-base text-gray-900" style={CABIN}>
                  Narrative <span className="text-gray-600">({sectionPoints("s6")} points)</span>
                </h3>
                <SectionAssignmentControl {...assignmentProps("s6")} />
              </div>
              <RichTextField
                value={narrativeText}
                onChange={setNarrativeText}
                onBlur={() => handleSectionSaved("s6")}
                placeholder="Write your narrative..."
                maxLength={3000}
              />

              <div className="mt-6">
                <AICoachingModule applicationId={applicationId || "1"} sectionId="s6" />
              </div>
            </div>

            {/* ============================================================ */}
            {/* s7. Documents                                                 */}
            {/* ============================================================ */}
            <div id="s7" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <h3 className="text-base text-gray-900" style={CABIN}>
                  Documents
                </h3>
                <SectionAssignmentControl {...assignmentProps("s7")} />
              </div>
              <DocumentsSectionV2 applicationId={applicationId || "1"} />
            </div>

            {/* ============================================================ */}
            {/* s8. Compliance                                                */}
            {/* ============================================================ */}
            <div id="s8" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <h3 className="text-base text-gray-900" style={CABIN}>
                  Compliance <span className="text-red-600">*</span>
                </h3>
                <SectionAssignmentControl {...assignmentProps("s8")} />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={complianceChecked}
                    onChange={(e) => {
                      setComplianceChecked(e.target.checked);
                      handleSectionSaved("s8");
                    }}
                    className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500"
                  />
                  <span className="text-base text-gray-700" style={CABIN}>
                    I certify that all information provided is accurate and complete
                  </span>
                </label>
              </div>
            </div>

            {/* ============================================================ */}
            {/* s9. Eligibility                                               */}
            {/* ============================================================ */}
            <div id="s9" className="scroll-mt-8">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <h3 className="text-base text-gray-900" style={CABIN}>
                  Eligibility <span className="text-red-600">*</span>
                </h3>
                <SectionAssignmentControl {...assignmentProps("s9")} />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-3">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="eligibility"
                        value={option}
                        checked={eligibilitySelection === option}
                        onChange={(e) => {
                          setEligibilitySelection(e.target.value);
                          handleSectionSaved("s9");
                        }}
                        className="w-5 h-5 border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-base text-gray-700" style={CABIN}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ApplicationResourcesPanel onOpenExport={() => setExportDialogOpen(true)} />
      </div>

      <ExportApplicationDialog
        isOpen={exportDialogOpen}
        onClose={() => setExportDialogOpen(false)}
        applicationTitle={currentApplication.title}
        applicationId={currentApplication.id}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Application Resources — right-hand panel, mirroring GrantWritingDemoPage's
// ApplicationResourcesPanel layout and content (gray background, sticky,
// collapsible to a floating tab, a Documents card holding the funder's
// Notice of Funding Opportunity, a Grant Opportunity Overview button), but
// with real, working controls since this isn't a locked demo: "View" and
// "Grant Opportunity Overview" both open Grant Search — this mock data has
// no per-application grant record to deep-link to, so Grant Search is the
// nearest real destination for "go look at the funding opportunity".
// ---------------------------------------------------------------------------

function ApplicationResourcesPanel({ onOpenExport }: { onOpenExport: () => void }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="fixed right-0 top-1/3 z-20 flex flex-col items-center gap-2 text-white px-3 py-4 rounded-l-xl shadow-xl hover:shadow-2xl transition-all bg-gray-500 hover:bg-gray-600"
        title="Show Application Resources"
      >
        <FileText className="w-5 h-5" />
        <span className="text-xs font-semibold tracking-wider [writing-mode:vertical-rl]" style={CABIN}>
          Resources
        </span>
      </button>
    );
  }

  return (
    <aside className="w-full lg:w-[320px] shrink-0 relative lg:sticky lg:top-0 lg:h-screen bg-[#F9FAFB] border-l border-gray-200 overflow-hidden">
      <button
        onClick={() => setExpanded(false)}
        className="hidden lg:flex absolute top-6 -left-4 z-10 w-8 h-8 bg-white rounded-full border-2 border-gray-200 shadow-lg items-center justify-center hover:border-gray-300 transition-colors"
        title="Collapse Application Resources"
      >
        <ChevronDown className="w-4 h-4 text-gray-500 rotate-90" />
      </button>

      <div className="overflow-y-auto h-full">
        <div className="p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4" style={CABIN}>
            Application Resources
          </h3>

          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-full px-4 py-3 flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-900" style={CABIN}>
                    Documents
                  </span>
                  <span className="text-sm text-gray-400" style={CABIN}>
                    (1)
                  </span>
                </span>
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
                  onClick={() => navigate("/search")}
                  className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shrink-0"
                >
                  View
                </Button>
              </div>
            </div>

            <button
              onClick={() => navigate("/search")}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              style={CABIN}
            >
              Grant Opportunity Overview
              <ExternalLink className="w-4 h-4" />
            </button>

            <Button
              onClick={onOpenExport}
              variant="outline"
              className="w-full gap-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              <Download className="w-4 h-4" />
              Preview &amp; Export
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
