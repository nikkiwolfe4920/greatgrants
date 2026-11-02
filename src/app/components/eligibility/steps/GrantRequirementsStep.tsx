import { ArrowLeft, ArrowRight, ListChecks } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import type {
  GrantRequirement,
  RequirementAnswer,
  RequirementStatus,
} from "@/data/eligibilityAssessmentData";

const ANSWER_STATUS: Record<RequirementAnswer, RequirementStatus> = {
  yes: "met",
  no: "unmet",
  unsure: "unknown",
};

const ANSWER_OPTIONS: { value: RequirementAnswer; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
];

const STATUS_STYLES: Record<RequirementStatus, { label: string; className: string }> = {
  met: { label: "Met", className: "border-teal-200 bg-teal-50 text-teal-700" },
  unmet: { label: "Unmet", className: "border-red-200 bg-red-50 text-red-600" },
  unknown: { label: "Unknown", className: "border-gray-200 bg-white text-gray-700" },
};

/** A viewer's answer wins; otherwise the requirement's profile-derived starting status applies. */
export function requirementStatus(req: GrantRequirement, answer?: RequirementAnswer): RequirementStatus {
  return answer ? ANSWER_STATUS[answer] : req.initialStatus;
}

interface GrantRequirementsStepProps {
  requirements: GrantRequirement[];
  answers: Record<string, RequirementAnswer | undefined>;
  onAnswer: (id: string, answer: RequirementAnswer) => void;
  onBack: () => void;
  onContinue: () => void;
  /** Hides the footer Continue button — the modal header renders it instead (sticky, top right). */
  hideContinue?: boolean;
}

/**
 * Step 3 — Grant Requirements. Lists what the grant's NOFO requires, each
 * tagged Met / Unmet / Unknown and answerable with Yes / No / Not sure.
 * Never blocks Continue: an unmet requirement is advice ("you likely can't
 * apply"), and the report below reflects it.
 */
export function GrantRequirementsStep({
  requirements,
  answers,
  onAnswer,
  onBack,
  onContinue,
  hideContinue = false,
}: GrantRequirementsStepProps) {
  const statuses = requirements.map((r) => requirementStatus(r, answers[r.id]));
  const count = (s: RequirementStatus) => statuses.filter((x) => x === s).length;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-[33px]">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
          <ListChecks className="size-5 text-teal-600" />
        </div>
        <div>
          <p className="text-xs font-normal text-gray-500 uppercase tracking-[0.3px]" style={{ fontFamily: "Cabin, sans-serif" }}>
            Step 3 of 6
          </p>
          <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            Grant Requirements
          </h3>
        </div>
      </div>

      <div className="pt-6" style={{ fontFamily: "Cabin, sans-serif" }}>
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <h4 className="text-lg font-semibold text-gray-900">This grant&apos;s requirements</h4>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            {count("met")} met · {count("unmet")} unmet · {count("unknown")} unknown
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Pulled from this grant&apos;s NOFO. If you can&apos;t meet one of these, you likely can&apos;t apply.
        </p>

        <div className="mt-5 space-y-4">
          {requirements.map((req, i) => {
            const status = statuses[i];
            const style = STATUS_STYLES[status];
            const answer = answers[req.id];
            return (
              <div key={req.id} className="rounded-xl border border-gray-200 p-5 flex flex-col sm:flex-row gap-4">
                <div className="shrink-0">
                  <span className={`inline-block rounded-full border px-3 py-1 text-sm ${style.className}`}>{style.label}</span>
                </div>
                <div className="min-w-0 flex-1 space-y-3">
                  <p className="text-base font-medium text-gray-900 leading-snug">{req.title}</p>

                  {(req.detail || req.answeredFromProfile) && (
                    <div className="space-y-1">
                      {req.detail && <p className="text-sm text-gray-500">{req.detail}</p>}
                      {req.answeredFromProfile && (
                        <p className="text-sm text-gray-500">Answered from your organization profile.</p>
                      )}
                    </div>
                  )}

                  {req.guidance && (
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">What you can do:</span> {req.guidance}
                    </p>
                  )}

                  {req.quote && (
                    <blockquote className="border-l-2 border-gray-200 pl-3">
                      <p className="text-sm italic text-gray-600">&ldquo;{req.quote}&rdquo;</p>
                      {req.quoteSource && <p className="text-sm text-gray-500 mt-1">{req.quoteSource}</p>}
                    </blockquote>
                  )}

                  <p className="text-base text-gray-900 leading-snug pt-1">{req.question}</p>

                  <div role="radiogroup" aria-label="Your answer" className="inline-flex rounded-lg border border-gray-200 overflow-hidden divide-x divide-gray-200">
                    {ANSWER_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        role="radio"
                        aria-checked={answer === option.value}
                        onClick={() => onAnswer(req.id, option.value)}
                        className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                          answer === option.value ? "bg-teal-600 text-white" : "bg-white text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-8">
        <div className="border-t border-gray-100 pt-[25px] flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-1.5 text-gray-500">
            <ArrowLeft className="size-4" />
            Back
          </Button>
          {!hideContinue && (
            <Button onClick={onContinue} className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5">
              Continue
              <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
