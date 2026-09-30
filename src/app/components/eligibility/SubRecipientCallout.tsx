import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const HEADING = "This opportunity may fit you best as a sub-recipient";
const BODY =
  "You can still work through the action items below — or request to join this opportunity so primes applying can invite you, or find a prime with an open Partner Call.";
const CTA_LABEL = "Request to Join";

interface SubRecipientCalloutProps {
  onRequestToJoin: () => void;
  /**
   * "inline" matches the compact CTA row folded into the scorecard footer
   * (OverallNofoFitScorecard's `ctaOverride` slot). "card" matches the
   * larger standalone CTA card at the bottom of the report
   * (EligibilityReport). Both read the same copy — only sizing changes.
   */
  layout: "inline" | "card";
  /** Disables the CTA button — mirrors the "Start Application" buttons it replaces. */
  demoLocked?: boolean;
}

/**
 * Figma node 15004:44351 ("Eligibility Info / Start"), adapted for a
 * below-70% NOFO fit report: instead of nudging the applicant to "Start
 * Application", it redirects them to the sub-recipient path — pairs with
 * the existing "Request to be a Sub-recipient" action already on
 * EligibilityAssessmentPage.
 */
export function SubRecipientCallout({ onRequestToJoin, layout, demoLocked = false }: SubRecipientCalloutProps) {
  const handleClick = () => {
    if (!demoLocked) onRequestToJoin();
  };

  if (layout === "inline") {
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-100">
            <Users className="size-4 text-blue-700" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-blue-900">{HEADING}</p>
            <p className="text-xs leading-relaxed text-blue-800">{BODY}</p>
          </div>
        </div>
        <Button
          onClick={handleClick}
          size="sm"
          aria-disabled={demoLocked || undefined}
          title={demoLocked ? "This is a locked demo — requests can't be sent here" : undefined}
          className={`shrink-0 bg-teal-600 text-white gap-1.5 ${demoLocked ? "cursor-not-allowed" : "hover:bg-teal-700"}`}
        >
          {CTA_LABEL}
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
      <div className="size-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
        <Users className="size-5 text-blue-700" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <p className="text-base text-gray-900" style={{ fontFamily: "Lustria, serif" }}>
          {HEADING}
        </p>
        <p className="text-sm text-blue-800 mt-1 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
          {BODY}
        </p>
        <Button
          onClick={handleClick}
          aria-disabled={demoLocked || undefined}
          title={demoLocked ? "This is a locked demo — requests can't be sent here" : undefined}
          className={`mt-4 bg-teal-600 text-white gap-1.5 ${demoLocked ? "cursor-not-allowed" : "hover:bg-teal-700"}`}
        >
          {CTA_LABEL}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
