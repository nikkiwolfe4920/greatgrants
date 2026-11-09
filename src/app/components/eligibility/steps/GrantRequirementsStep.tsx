import { ArrowLeft, CircleHelp, ListChecks, Loader2, ShieldCheck, TriangleAlert } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/components/ui/tooltip";
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
  onCheckEligibility: () => void;
  isSubmitting: boolean;
  /** Hides the usage display — kept for parity with the other steps. */
  hideAssessmentUsage?: boolean;
  /** Hides the footer Check My Eligibility button — the modal header renders it instead (sticky, top right). */
  hideContinue?: boolean;
}

/**
 * Step 5 — Grant Requirements. Lists what the grant's NOFO requires, each
 * tagged Met / Unmet / Unresolved and answerable with Yes / No / Not sure.
 * Never blocks Check My Eligibility: an unmet requirement is advice ("you likely can't
 * apply"), and the report below reflects it.
 */
export function GrantRequirementsStep({
  requirements,
  answers,
  onAnswer,
  onBack,
  onCheckEligibility,
  isSubmitting,
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
            Step 5 of 6
          </p>
          <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            Grant Requirements
          </h3>
        </div>
      </div>

      <TooltipProvider delayDuration={100}>
      <div className="pt-6" style={{ fontFamily: "Cabin, sans-serif" }}>
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <h4 className="text-lg font-semibold text-gray-900">This grant&apos;s requirements</h4>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            {count("met")} met · {count("unmet") + count("failed")} unmet · {count("error")} error · {count("unknown")} unresolved
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Pulled from this grant&apos;s NOFO. Answer each one — if you can&apos;t meet a requirement, you likely can&apos;t apply.
        </p>

        <div className="mt-5 space-y-4">
          {requirements.map((req, i) => (
            <div key={req.id} className="rounded-xl border border-gray-200 p-5">
              <RequirementStatusBadge status={statuses[i]} />
              {req.outcomeMessage?.[statuses[i]] && (
                <p
                  role="alert"
                  className={`mt-3 flex items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
                    statuses[i] === "failed" ? "border-red-200 bg-red-50 text-red-700" : "border-orange-200 bg-orange-50 text-orange-700"
                  }`}
                >
                  <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {req.outcomeMessage[statuses[i]]}
                </p>
              )}
              <p className="mt-3 text-base font-semibold text-gray-900 leading-snug">{req.question}</p>
              <div className="mt-4 flex items-center gap-2">
                <RequirementAnswerToggle
                  answer={answers[req.id]}
                  onChange={(a) => onAnswer(req.id, a)}
                  label={req.question}
                />
                {req.quote && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        aria-label="View citation from the NOFO"
                        className="rounded-full text-gray-400 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                      >
                        <CircleHelp className="size-5" />
                      </button>
                    </TooltipTrigger>
                    {/* z-[70]: the assessment modal sits at z-[60], above the tooltip's default z-50. */}
                    <TooltipContent side="top" className="z-[70] max-w-sm space-y-1 px-3 py-2 text-left">
                      <p className="italic">&ldquo;{req.quote}&rdquo;</p>
                      {req.quoteSource && <p className="text-gray-300">{req.quoteSource}</p>}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </TooltipProvider>

      <div className="pt-8">
        <div className="border-t border-gray-100 pt-[25px] flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} disabled={isSubmitting} className="gap-1.5 text-gray-500">
            <ArrowLeft className="size-4" />
            Back
          </Button>
          {!hideContinue && (
            <Button
              onClick={onCheckEligibility}
              disabled={isSubmitting}
              className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5"
            >
              {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <ShieldCheck className="size-4" />}
              Check My Eligibility
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
