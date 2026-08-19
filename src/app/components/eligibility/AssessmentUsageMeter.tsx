import { ClipboardCheck, AlertTriangle } from "lucide-react";

interface AssessmentUsageMeterProps {
  usedCount: number;
  limit: number;
  /** Inline pill only, no bar/caption underneath — for tight spaces like the entry CTA footer line. */
  compact?: boolean;
  className?: string;
}

/**
 * Shared "X of Y assessments used" indicator for the eligibility assessment
 * workflow, so the subscription limit stays visible at every stage: before
 * starting (CheckYourEligibilityCard), while filling out the workflow
 * (EligibilityWorkflowPanel), and right after completing it
 * (EligibilityReport). Mirrors the "N of Total + %" progress idiom already
 * used for Action Items in EligibilityReport, so it reads as the same
 * pattern rather than a new one.
 */
export function AssessmentUsageMeter({ usedCount, limit, compact = false, className = "" }: AssessmentUsageMeterProps) {
  const remaining = Math.max(0, limit - usedCount);
  const percent = limit === 0 ? 0 : Math.round((usedCount / limit) * 100);
  const isExhausted = remaining === 0;
  const isLastOne = remaining === 1;

  const tone = isExhausted
    ? { text: "text-red-700", bg: "bg-red-50", border: "border-red-200", bar: "bg-red-500" }
    : isLastOne
    ? { text: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", bar: "bg-amber-500" }
    : { text: "text-teal-700", bg: "bg-teal-50", border: "border-teal-200", bar: "bg-teal-500" };

  return (
    <div className={className}>
      <div
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold whitespace-nowrap ${tone.bg} ${tone.text} ${tone.border}`}
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        {isExhausted ? <AlertTriangle className="size-3" /> : <ClipboardCheck className="size-3" />}
        {usedCount} of {limit} assessments used
      </div>
      {!compact && (
        <div className="mt-2">
          <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div className={`h-full rounded-full ${tone.bar} transition-all`} style={{ width: `${percent}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Cabin, sans-serif" }}>
            {isExhausted
              ? "You've used every assessment included in your plan this period."
              : `${remaining} assessment${remaining === 1 ? "" : "s"} remaining this period.`}
          </p>
        </div>
      )}
    </div>
  );
}
