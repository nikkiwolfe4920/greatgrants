import { EligibilityAssessmentPage } from "@/app/pages/EligibilityAssessmentPage";

/**
 * /eligibility-assessment-sub — same grant detail page as
 * /eligibility-assessment (Figma node 12683:22351), opened straight into a
 * completed eligibility report showing a below-70% NOFO fit. Both
 * "Start Application" CTAs (Figma node 12827:38919) are replaced with the
 * "Request to Join" sub-recipient callout (Figma node 15004:44351), since a
 * below-70% fit calls for redirecting toward the sub-recipient path instead
 * of nudging the viewer toward a prime application. See
 * EligibilityAssessmentPage's `subRecipientOutcome` prop.
 */
export function EligibilityAssessmentSubPage() {
  return <EligibilityAssessmentPage subRecipientOutcome autoScrollToEligibility hideAssessmentUsage />;
}
