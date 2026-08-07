import { ShieldCheck, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

type FitTone = "low" | "moderate" | "strong";

const FIT_TONE_STYLES: Record<
  FitTone,
  { label: string; badgeBg: string; badgeBorder: string; badgeText: string; scoreText: string; scoreBar: string; scoreTrack: string }
> = {
  low: {
    label: "Low Fit",
    badgeBg: "bg-red-50",
    badgeBorder: "border-red-200",
    badgeText: "text-red-600",
    scoreText: "text-red-600",
    scoreBar: "bg-red-500",
    scoreTrack: "bg-red-100",
  },
  moderate: {
    label: "Moderate Fit",
    badgeBg: "bg-amber-50",
    badgeBorder: "border-amber-200",
    badgeText: "text-amber-600",
    scoreText: "text-amber-600",
    scoreBar: "bg-amber-500",
    scoreTrack: "bg-amber-100",
  },
  strong: {
    label: "Strong Fit",
    badgeBg: "bg-teal-50",
    badgeBorder: "border-teal-200",
    badgeText: "text-teal-600",
    scoreText: "text-teal-600",
    scoreBar: "bg-teal-500",
    scoreTrack: "bg-teal-100",
  },
};

interface FitScoreMeterProps {
  score: number;
  maxScore: number;
  tone: FitTone;
}

/**
 * Compact score readout for the assessment header: a number, a proportional
 * bar, and a label. Color follows the same tone as the fit badge so the
 * score and the verdict never disagree at a glance.
 */
function FitScoreMeter({ score, maxScore, tone }: FitScoreMeterProps) {
  const styles = FIT_TONE_STYLES[tone];
  const percent = Math.max(0, Math.min(100, (score / maxScore) * 100));

  return (
    <div className="flex shrink-0 flex-col items-end gap-1.5">
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-semibold leading-none ${styles.scoreText}`}>
          {score}
        </span>
        <span className="text-sm font-medium text-gray-400">/{maxScore}</span>
      </div>
      <div
        className={`h-1.5 w-24 overflow-hidden rounded-full ${styles.scoreTrack}`}
        aria-hidden="true"
      >
        <div
          className={`h-full rounded-full ${styles.scoreBar}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
        Fit Score
      </span>
    </div>
  );
}

export interface EligibilityAssessmentResultsProps {
  eyebrow?: string;
  title?: string;
  headline?: string;
  description?: string;
  fitTone?: FitTone;
  score?: number;
  maxScore?: number;
  reasonsToPursue?: string[];
  currentGaps?: string[];
  keyRisk?: { title: string; description: string };
}

/**
 * Eligibility Assessment Results card — implements Figma node 12683:25855.
 * Reproduces the NOFO analysis header, fit verdict, reasons/gaps columns,
 * and key-risk callout, plus a fit-score meter (score/maxScore) in the
 * header of the verdict row so the numeric result reads alongside it.
 */
export function EligibilityAssessmentResults({
  eyebrow = "NOFO Analysis",
  title = "Eligibility Assessment Results",
  headline = "Might not be a strong fit",
  description = "Based on your eligibility assessment, your organization may not meet the core criteria for this grant at this time. Work through the action items above to close gaps — then retake the assessment to see if your fit has improved.",
  fitTone = "low",
  score = 20,
  maxScore = 100,
  reasonsToPursue = [
    "Strong mission fit if your organization has child protection systems experience",
    "Large funding pool of up to $52.65 million across up to 5 awards",
    "Phase 1 is only a 5-page SOI — lower entry burden than a full proposal",
  ],
  currentGaps = [
    "Direct service-only organizations without systems change experience are a poor fit",
    "Weak federal compliance or finance capacity may outweigh program strength",
    "Concepts must align with America First Global Health Strategy framing",
  ],
  keyRisk = {
    title: "Key Risk to Watch",
    description:
      "Writing a child protection concept that is too programmatic and not 'federal' enough — it must show system strengthening, measurable outcomes, sustainability, and alignment with State Department strategy.",
  },
}: EligibilityAssessmentResultsProps) {
  const tone = FIT_TONE_STYLES[fitTone];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal-50">
          <ShieldCheck className="size-4 text-teal-600" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
            {eyebrow}
          </p>
          <p className="truncate text-base font-semibold text-gray-900">{title}</p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${tone.badgeBg} ${tone.badgeBorder} ${tone.badgeText}`}
        >
          <XCircle className="size-3.5" aria-hidden="true" />
          {tone.label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 px-6 py-5">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="text-base text-gray-900" style={{ fontFamily: "Lustria, serif" }}>
              {headline}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-500">{description}</p>
          </div>
          <FitScoreMeter score={score} maxScore={maxScore} tone={fitTone} />
        </div>

        {/* Reasons / Gaps */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-green-700" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                Reasons to Pursue
              </p>
            </div>
            <ul className="mt-3 space-y-2.5">
              {reasonsToPursue.map((reason) => (
                <li key={reason} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-green-400" />
                  <span className="text-xs leading-relaxed text-gray-600">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-100 p-4">
            <div className="flex items-center gap-1.5">
              <XCircle className="size-3.5 text-red-600" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                Current Gaps
              </p>
            </div>
            <ul className="mt-3 space-y-2.5">
              {currentGaps.map((gap) => (
                <li key={gap} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-red-400" />
                  <span className="text-xs leading-relaxed text-gray-600">{gap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Risk */}
        <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-gray-700">{keyRisk.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{keyRisk.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
