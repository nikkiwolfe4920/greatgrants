import type { ReactNode } from "react";
import { Gauge, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

type GoStatus = "go" | "caution" | "no-go";

const STATUS_STYLES: Record<
  GoStatus,
  { label: string; badgeBg: string; badgeBorder: string; badgeText: string; Icon: typeof CheckCircle2 }
> = {
  go: {
    label: "GO",
    badgeBg: "bg-green-50",
    badgeBorder: "border-green-200",
    badgeText: "text-green-700",
    Icon: CheckCircle2,
  },
  caution: {
    label: "Caution",
    badgeBg: "bg-amber-50",
    badgeBorder: "border-amber-200",
    badgeText: "text-amber-600",
    Icon: AlertTriangle,
  },
  "no-go": {
    label: "No-Go",
    badgeBg: "bg-red-50",
    badgeBorder: "border-red-200",
    badgeText: "text-red-600",
    Icon: XCircle,
  },
};

/**
 * Same score-band thresholds used on MyGrantReadiness, so a "92%" reads as
 * the same color everywhere in the app. The meter's unfilled track is a
 * lighter step of the same ramp as its fill (not a neutral gray), so
 * severity reads across the whole tile, not just the filled portion.
 */
function getScoreBandClasses(score: number): { text: string; bar: string; track: string } {
  if (score >= 90) return { text: "text-teal-700", bar: "bg-teal-600", track: "bg-teal-100" };
  if (score >= 75) return { text: "text-blue-700", bar: "bg-blue-500", track: "bg-blue-100" };
  if (score >= 65) return { text: "text-amber-700", bar: "bg-amber-500", track: "bg-amber-100" };
  return { text: "text-red-700", bar: "bg-red-500", track: "bg-red-100" };
}

export interface FitCategory {
  label: string;
  score: number;
}

interface CategoryTileProps extends FitCategory {}

/**
 * One category as a compact stat tile: label, value, and a short meter —
 * six of these read as a scannable scorecard grid instead of six identical
 * full-width bars stacked into a wall.
 */
function CategoryTile({ label, score }: CategoryTileProps) {
  const band = getScoreBandClasses(score);
  return (
    <div className="rounded-xl border border-gray-100 p-3.5">
      <p className="truncate text-xs font-medium text-gray-500">{label}</p>
      <p className={`mt-0.5 text-lg font-semibold leading-none ${band.text}`}>{score}%</p>
      <div
        className={`mt-2.5 h-1.5 w-full overflow-hidden rounded-full ${band.track}`}
        role="progressbar"
        aria-label={label}
        aria-valuenow={score}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ${band.bar}`}
          style={{ width: `${Math.max(0, Math.min(100, score))}%` }}
        />
      </div>
    </div>
  );
}

function ListSection({
  title,
  titleColor,
  itemIcon,
  items,
  emptyLabel,
}: {
  title: string;
  titleColor: string;
  itemIcon: ReactNode;
  items: string[];
  emptyLabel?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 p-4">
      <p className={`text-xs font-semibold uppercase tracking-wide ${titleColor}`}>{title}</p>
      {items.length > 0 ? (
        <ul className="mt-3 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0">{itemIcon}</span>
              <span className="text-xs leading-relaxed text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      ) : emptyLabel ? (
        <p className="mt-3 text-xs leading-relaxed text-gray-400">{emptyLabel}</p>
      ) : null}
    </div>
  );
}

export interface OverallNofoFitScorecardProps {
  eyebrow?: string;
  title?: string;
  overallScore?: number;
  status?: GoStatus;
  categories?: FitCategory[];
  strengths?: string[];
  risks?: string[];
  nextSteps?: string[];
}

/**
 * Overall NOFO Fit scorecard — reuses the card shell, header layout, and
 * score/tone conventions from EligibilityAssessmentResults, extended with a
 * per-category progress breakdown and a recommended-next-steps checklist.
 */
export function OverallNofoFitScorecard({
  eyebrow = "NOFO Analysis",
  title = "Overall NOFO Fit",
  overallScore = 87,
  status = "go",
  categories = [
    { label: "Eligibility", score: 100 },
    { label: "Mission Fit", score: 92 },
    { label: "Program Alignment", score: 84 },
    { label: "Capacity", score: 71 },
    { label: "Compliance", score: 100 },
    { label: "Competitiveness", score: 65 },
  ],
  strengths = [
    "Strong mission alignment",
    "Eligible applicant",
    "Excellent financial controls",
    "Proven service population",
  ],
  risks = [
    "No prior awards from this agency",
    "Limited evaluation framework",
    "Matching funds not secured",
  ],
  nextSteps = [
    "Confirm matching funds.",
    "Upload evaluation plan.",
    "Add partner MOUs.",
    "Strengthen evidence of measurable outcomes.",
  ],
}: OverallNofoFitScorecardProps) {
  const statusStyles = STATUS_STYLES[status];
  const StatusIcon = statusStyles.Icon;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-6 border-b border-gray-100 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-teal-50">
            <Gauge className="size-4 text-teal-600" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
              {eyebrow}
            </p>
            <p className="truncate text-base font-semibold text-gray-900">{title}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <span className="text-2xl font-semibold leading-none text-gray-900">
            {overallScore}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusStyles.badgeBg} ${statusStyles.badgeBorder} ${statusStyles.badgeText}`}
          >
            <StatusIcon className="size-3.5" aria-hidden="true" />
            {statusStyles.label}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 px-6 py-5">
        {/* Category breakdown */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Category Breakdown
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {categories.map((category) => (
              <CategoryTile key={category.label} {...category} />
            ))}
          </div>
        </div>

        {/* Strengths / Risks */}
        <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 md:grid-cols-2">
          <ListSection
            title="Strengths"
            titleColor="text-green-700"
            itemIcon={<CheckCircle2 className="size-3.5 text-green-700" aria-hidden="true" />}
            items={strengths}
          />
          <ListSection
            title="Risks"
            titleColor="text-amber-600"
            emptyLabel="No risks identified — nice work."
            itemIcon={<AlertTriangle className="size-3.5 text-amber-500" aria-hidden="true" />}
            items={risks}
          />
        </div>

        {/* Recommended Next Steps */}
        {nextSteps.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5">
            <p className="text-xs font-semibold text-gray-700">Recommended Next Steps</p>
            <ol className="mt-2.5 space-y-2">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-2.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[11px] font-semibold text-teal-700">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-xs leading-relaxed text-gray-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
