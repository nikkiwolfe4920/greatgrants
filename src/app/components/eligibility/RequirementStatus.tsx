import type { GrantRequirement, RequirementAnswer, RequirementStatus } from "@/data/eligibilityAssessmentData";

/** Yes → Met, No → Unmet, Not sure → Unresolved. */
export const ANSWER_STATUS: Record<RequirementAnswer, RequirementStatus> = {
  yes: "met",
  no: "unmet",
  unsure: "unknown",
};

export const STATUS_LABEL: Record<RequirementStatus, string> = {
  met: "Met",
  unmet: "Unmet",
  unknown: "Unresolved",
};

const STATUS_BADGE: Record<RequirementStatus, string> = {
  met: "border-teal-200 bg-teal-50 text-teal-700",
  unmet: "border-amber-200 bg-amber-50 text-amber-700",
  unknown: "border-gray-200 bg-gray-100 text-gray-600",
};

/**
 * Every requirement starts Unresolved; it only changes once the viewer picks
 * an answer. (Profile-derived `initialStatus` is intentionally not applied.)
 */
export function requirementStatus(_req: GrantRequirement, answer?: RequirementAnswer): RequirementStatus {
  return answer ? ANSWER_STATUS[answer] : "unknown";
}

export function RequirementStatusBadge({
  status,
  label,
  className = "",
}: {
  status: RequirementStatus;
  /** Overrides the default label, e.g. "Response stored" for a Met requirement in the report. */
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_BADGE[status]} ${className}`}
      style={{ fontFamily: "Cabin, sans-serif" }}
    >
      {label ?? STATUS_LABEL[status]}
    </span>
  );
}

const OPTIONS: { value: RequirementAnswer; label: string; selected: string }[] = [
  // Same teal / amber tokens the Yes / No / Unsure inputs use on Financial Info.
  { value: "yes", label: "Yes", selected: "bg-teal-600 text-white" },
  { value: "no", label: "No", selected: "bg-amber-600 text-white" },
  { value: "unsure", label: "Not sure", selected: "bg-amber-100 text-gray-900" },
];

/** Segmented Yes / No / Not sure control shared by Step 3 and the report. */
export function RequirementAnswerToggle({
  answer,
  onChange,
  label,
}: {
  answer?: RequirementAnswer;
  onChange: (answer: RequirementAnswer) => void;
  /** Accessible name — the question being answered. */
  label: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="inline-flex overflow-hidden rounded-lg border border-gray-200 divide-x divide-gray-200"
    >
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={answer === o.value}
          onClick={() => onChange(o.value)}
          className={`px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-600 ${
            answer === o.value ? o.selected : "bg-white text-gray-900 hover:bg-gray-50"
          }`}
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
