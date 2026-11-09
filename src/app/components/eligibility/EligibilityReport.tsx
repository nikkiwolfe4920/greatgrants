import { CheckCircle2, XCircle, ArrowRight, Download, FileDown, Share2, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";
import { OverallNofoFitScorecard, type FitCategory, type GoStatus } from "@/app/components/OverallNofoFitScorecard";
import { SubRecipientCallout } from "@/app/components/eligibility/SubRecipientCallout";
import { RequirementStatusBadge } from "@/app/components/eligibility/RequirementStatus";
import type { ActionItem, PassItem } from "@/data/eligibilityAssessmentData";

function ActionItemRow({ item }: { item: ActionItem }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-[17px] flex items-start gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            {item.title}
          </p>
          <RequirementStatusBadge status="unknown" />
        </div>
        <p className="text-xs mt-1 text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

function PassTagRow({ item }: { item: PassItem }) {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 px-[17px] py-[13px] flex items-start gap-3">
      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700 shrink-0 mt-0.5">
        <CheckCircle2 className="size-3" />
        Met
      </span>
      <div>
        <p className="text-sm font-medium text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          {item.title}
        </p>
        <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

const BASE_CATEGORIES: FitCategory[] = [
  { label: "Eligibility", score: 100 },
  { label: "Mission Fit", score: 92 },
  { label: "Program Alignment", score: 84 },
  { label: "Capacity", score: 71 },
  { label: "Compliance", score: 100 },
  { label: "Competitiveness", score: 65 },
];

/** The report headlines just these two metrics. */
const HEADLINE_METRICS = ["Eligibility", "Program Alignment"];

const BASE_RISKS = ["No prior awards from this agency", "Limited evaluation framework", "Matching funds not secured"];

/** GO / NO GO outcome of the whole workflow, computed by EligibilityWorkflowPanel. */
export interface EligibilityDecision {
  /** GO only when every answer is Yes / every requirement is Met. */
  isGo: boolean;
  /** Questions answered "No" (financial + policy). */
  noAnswers: number;
  /** Grant requirements answered "No" (Unmet). */
  unmetRequirements: number;
  /** Anything answered "Not sure" or left unresolved. */
  notSure: number;
}

function DecisionBlock({ decision }: { decision: EligibilityDecision }) {
  const { isGo, noAnswers, unmetRequirements, notSure } = decision;
  // "No" answers and requirements answered No are both Unmet; "Not sure" is Unresolved.
  const unmet = noAnswers + unmetRequirements;
  const unresolved = notSure;

  return (
    <div
      className={`rounded-xl border px-5 py-4 flex items-start gap-3 ${
        isGo ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
      }`}
      role="status"
    >
      {isGo ? (
        <CheckCircle2 className="size-6 text-green-700 shrink-0" aria-hidden="true" />
      ) : (
        <XCircle className="size-6 text-red-600 shrink-0" aria-hidden="true" />
      )}
      <div>
        <p
          className={`text-2xl font-semibold leading-none ${isGo ? "text-green-700" : "text-red-600"}`}
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          {isGo ? "GO" : "NO GO"}
        </p>
        <p className="mt-1.5 text-sm text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
          {isGo
            ? "You have 100% answers marked Yes or Meets requirements."
            : `There ${unmet === 1 ? "is" : "are"} ${unmet} ${unmet === 1 ? "requirement" : "requirements"} marked Unmet & ${unresolved} Unresolved.`}
        </p>
      </div>
    </div>
  );
}


/**
 * NO GO only: the prominent "Download report" callout under the status. A solid
 * blue panel (deliberately louder than the Figma notification) that spells
 * out the two-step handoff — export the PDF, then share it with the team.
 */
export function DownloadReportModule({ onDownload, onRetake }: { onDownload?: () => void; onRetake?: () => void }) {
  return (
    <section
      aria-label="Download report"
      data-print-hide
      className="rounded-xl border-2 border-[#125d56] bg-[#125d56] p-5 text-white shadow-lg"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0 flex-1 basis-64">
          <p className="text-lg font-semibold leading-tight" style={{ fontFamily: "Cabin, sans-serif" }}>
            Download your eligibility report
          </p>
          <p className="mt-1 text-sm text-[#eff6ff]" style={{ fontFamily: "Cabin, sans-serif" }}>
            Take this outcome to your team — it&apos;s the fastest way to decide what to do next.
          </p>
        </div>
        <Button
          data-print-hide
          onClick={onDownload}
          className="h-11 shrink-0 gap-2 bg-white px-5 text-base font-semibold text-[#125d56] hover:bg-gray-100"
        >
          <Download className="size-5" aria-hidden="true" />
          Download Report
        </Button>
      </div>

      <ol className="mt-4 grid gap-2 sm:grid-cols-2" style={{ fontFamily: "Cabin, sans-serif" }}>
        <li className="flex items-center gap-3 rounded-lg bg-[#134e48] px-3 py-2.5 text-sm">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#125d56]">1</span>
          <FileDown className="size-4 shrink-0" aria-hidden="true" />
          <span><span className="font-semibold">Export the PDF</span> of this report</span>
        </li>
        <li className="flex items-center gap-3 rounded-lg bg-[#134e48] px-3 py-2.5 text-sm">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#125d56]">2</span>
          <Share2 className="size-4 shrink-0" aria-hidden="true" />
          <span><span className="font-semibold">Share it with your team</span> to review</span>
        </li>
      </ol>

      {onRetake && (
        <p data-print-hide className="mt-3 text-xs text-[#dbeafe]" style={{ fontFamily: "Cabin, sans-serif" }}>
          Answers changed?{" "}
          <button type="button" onClick={onRetake} className="text-base font-semibold text-white underline underline-offset-2">
            Retake assessment
          </button>{" "}
          — it&apos;s the only way to update this outcome.
        </p>
      )}
    </section>
  );
}

interface EligibilityReportProps {
  actionItems: ActionItem[];
  passItems: PassItem[];
  onStartApplication: () => void;
  /**
   * Disables the "Start Application" button in the "Ready when you are"
   * banner below (and the matching one inside OverallNofoFitScorecard)
   * with a not-allowed cursor — it would otherwise navigate off the
   * locked demo. See EligibilityAssessmentPage.
   */
  demoLocked?: boolean;
  /** Hides the "Assessment complete — marked as used" banner below. See EligibilityAssessmentPage. */
  hideAssessmentUsage?: boolean;
  /** Category breakdown for the scorecard. Defaults to the standard BASE_CATEGORIES below. */
  categories?: FitCategory[];
  /** Risks list for the scorecard. Defaults to the standard BASE_RISKS below. */
  risks?: string[];
  /** Shows the scorecard's numeric overall score + GO/Caution/No-Go badge. Defaults to false (hidden), matching the standard report. */
  showScore?: boolean;
  overallScore?: number;
  status?: GoStatus;
  /**
   * Swaps both "Start Application" CTAs (the scorecard footer and the
   * bottom-of-report card) for the SubRecipientCallout instead — used by
   * the /eligibility-assessment-sub below-70%-fit report, where nudging
   * toward a prime application no longer fits the outcome.
   */
  onRequestToJoin?: () => void;
  /** Restarts the assessment from Step 1 — drives the "Retake assessment" link next to "Start AI Draft". */
  onRetake?: () => void;
  /** When set, the scorecard shows a GO / NO GO decision instead of the category breakdown. */
  decision?: EligibilityDecision;
  /** Exports the report as a PDF — drives the Download Report module shown on NO GO. */
  onDownload?: () => void;
}

/**
 * The eligibility report — Figma node 12683:25848: a single "Eligibility
 * Activities & Assessment" heading (rendered by the parent page) followed
 * by the two modules that make it up — the NOFO Analysis fit card
 * (OverallNofoFitScorecard, node 12749:6075) and the Action Items
 * accordion (node 12683:25936, renamed from "Final Snapshot", no priority
 * badges). Once every action item is checked, the fit card goes to a
 * clean 100%/no-risk state. The "ready to apply" CTA (node 12827:38919)
 * always renders at the bottom, regardless of how many action items are
 * checked off, so there's always a path into the application.
 */
export function EligibilityReport({
  actionItems,
  passItems,
  onStartApplication,
  demoLocked = false,
  hideAssessmentUsage = false,
  categories = BASE_CATEGORIES,
  risks = BASE_RISKS,
  showScore = false,
  overallScore,
  status,
  onRequestToJoin,
  onRetake,
  decision,
  onDownload,
}: EligibilityReportProps) {
  const completedCount = actionItems.filter((item) => item.completed).length;
  const totalCount = actionItems.length;
  const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  const passCount = passItems.length;
  const isGo = decision?.isGo === true;
  // On GO everything is Met: no unresolved action items are listed or counted.
  const unresolvedCount = isGo ? 0 : totalCount - completedCount + (decision?.notSure ?? 0);
  const isAllComplete = totalCount > 0 && completedCount === totalCount;

  // Reflects the assessment this report belongs to, which
  // EligibilityWorkflowPanel already marked as used the moment this report
  // was generated — this banner is just confirming that back to the user.
  return (
    <div id="eligibility-report-print" className="space-y-5">
      <OverallNofoFitScorecard
        eyebrow="Eligibility Report"
        title="Grant Readiness Overview"
        showStrengthsRisks={false}
        showScore={showScore}
        overallScore={overallScore}
        status={status}
        categories={(isAllComplete ? categories.map((c) => ({ ...c, score: 100 })) : categories).filter((c) =>
          HEADLINE_METRICS.includes(c.label),
        )}
        risks={isAllComplete ? [] : risks}
        nextSteps={[]}
        onStartApplication={decision && !decision.isGo ? undefined : onStartApplication}
        allActionsComplete={isAllComplete}
        demoLocked={demoLocked}
        decision={
          decision ? (
            <>
              <DecisionBlock decision={decision} />
              {!decision.isGo && <DownloadReportModule onDownload={onDownload} onRetake={onRetake} />}
            </>
          ) : undefined
        }
        ctaSecondary={
          decision && decision.isGo && onRetake ? (
            <button
              type="button"
              onClick={onRetake}
              className="text-sm font-medium text-teal-700 underline-offset-2 hover:underline whitespace-nowrap"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Retake assessment
            </button>
          ) : undefined
        }
        ctaOverride={
          onRequestToJoin ? (
            <SubRecipientCallout layout="inline" onRequestToJoin={onRequestToJoin} demoLocked={demoLocked} />
          ) : undefined
        }
      />

      {!isGo && (
      <Accordion type="single" defaultValue="action-items" collapsible className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <AccordionItem value="action-items" className="border-b-0">
          <AccordionTrigger className="px-5 py-4 no-underline hover:no-underline">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                Action Items
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-green-100 px-1.5 py-0.5 text-xs font-semibold text-green-700">
                <CheckCircle2 className="size-3" />
                {passCount} Met
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-700">
                <XCircle className="size-3" />
                {decision ? decision.noAnswers + decision.unmetRequirements : 0} Unmet
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-gray-100 px-1.5 py-0.5 text-xs font-semibold text-gray-600">
                {unresolvedCount} Unresolved
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5">
            {!isGo && (
            <>
            <div className="space-y-3">
              {actionItems.map((item) => (
                <ActionItemRow key={item.id} item={item} />
              ))}
            </div>
            </>
            )}

            {passCount > 0 && (
              <details className="group mt-4 rounded-lg border border-green-200 bg-green-50/60">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-green-800 [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex items-center gap-2" style={{ fontFamily: "Cabin, sans-serif" }}>
                    <CheckCircle2 className="size-4" aria-hidden="true" />
                    {passCount} Met
                  </span>
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="space-y-2 px-3 pb-3">
                  {passItems.map((item) => (
                    <PassTagRow key={item.id} item={item} />
                  ))}
                </div>
              </details>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      )}

      {/* "Ready to apply" CTA — Figma node 12827:38919. Always shown at the
          bottom of the report regardless of how many action items are
          checked off, so there's always a clear next step into the
          application. `onRequestToJoin` swaps this for SubRecipientCallout. */}
      {decision ? null : onRequestToJoin ? (
        <SubRecipientCallout layout="card" onRequestToJoin={onRequestToJoin} demoLocked={demoLocked} />
      ) : (
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 flex items-start gap-4">
          <div className="size-10 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
            <CheckCircle2 className="size-5 text-teal-700" />
          </div>
          <div className="flex-1">
            <p className="text-base text-gray-900" style={{ fontFamily: "Lustria, serif" }}>
              {isAllComplete ? <>All clear — you&apos;re ready to apply</> : <>Ready when you are</>}
            </p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
              {isAllComplete ? (
                <>
                  Every action item is resolved and your NOFO fit is 100% with no outstanding risks. You&apos;re in
                  strong shape to move forward with a full application.
                </>
              ) : (
                <>
                  You can start your application any time — keep closing out action items above to strengthen your
                  NOFO fit along the way.
                </>
              )}
            </p>
            <Button
              onClick={() => {
                if (!demoLocked) onStartApplication();
              }}
              aria-disabled={demoLocked || undefined}
              title={demoLocked ? "This is a locked demo — applications can't be started here" : undefined}
              className={`mt-4 bg-teal-600 text-white gap-1.5 ${demoLocked ? "cursor-not-allowed" : "hover:bg-teal-700"}`}
            >
              Start AI Draft
              <ArrowRight className="size-4" />
            </Button>
            {onRetake && (
              <button
                type="button"
                onClick={onRetake}
                className="mt-4 ml-4 text-sm font-medium text-teal-700 underline-offset-2 hover:underline"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Retake assessment
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
