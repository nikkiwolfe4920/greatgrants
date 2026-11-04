import { ArrowLeft, ArrowRight, ListChecks } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  RequirementAnswerToggle,
  RequirementStatusBadge,
  requirementStatus,
} from "@/app/components/eligibility/RequirementStatus";
import type { GrantRequirement, RequirementAnswer, RequirementStatus } from "@/data/eligibilityAssessmentData";

export { requirementStatus };

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
 * tagged Met / Unmet / Unresolved and answerable with Yes / No / Not sure.
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
            {count("met")} met · {count("unmet")} unmet · {count("unknown")} unresolved
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Pulled from this grant&apos;s NOFO. Answer each one — if you can&apos;t meet a requirement, you likely can&apos;t apply.
        </p>

        <div className="mt-5 space-y-4">
          {requirements.map((req, i) => (
            <div key={req.id} className="rounded-xl border border-gray-200 p-5">
              <RequirementStatusBadge status={statuses[i]} />
              <p className="mt-3 text-base font-semibold text-gray-900 leading-snug">{req.question}</p>
              <div className="mt-4">
                <RequirementAnswerToggle
                  answer={answers[req.id]}
                  onChange={(a) => onAnswer(req.id, a)}
                  label={req.question}
                />
              </div>
            </div>
          ))}
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
