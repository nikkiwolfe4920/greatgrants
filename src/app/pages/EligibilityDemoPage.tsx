import { EligibilityAssessmentPage } from "./EligibilityAssessmentPage";

/**
 * EligibilityDemoPage — /eligibility-demo, step 4 of 6 in the locked demo
 * tour (see lockedDemoTour.ts) and a locked-down duplicate of
 * EligibilityAssessmentPage (/eligibility-assessment), the same way
 * OrgDetailDemoPage (/org-detail-demo, step 3) duplicates it.
 *
 * Reached by clicking DemoOnlyBar's forward stepper arrow from
 * /org-detail-demo ("A grant, in full" — step 3), this page lands the
 * viewer directly on the same grant's "Eligibility Assessment" section and,
 * unlike every other locked walkthrough page, actually lets them run it:
 *
 *   1. `demoLocked` still renders every navigate-away control inert — the
 *      breadcrumb's Home crumb, the sticky header's back arrow, both "Start
 *      Application" buttons, "Upgrade Plan", the two document rows, and the
 *      program website link — exactly as it does on /org-detail-demo. The
 *      global left nav (SharedSidebar) disables itself the same way too,
 *      via the shared isLockedDemoRoute check in lockedDemoRoutes.ts, since
 *      /eligibility-demo is part of LOCKED_DEMO_TOUR.
 *   2. `unlockEligibilityAssessment` carves out the one exception: "Start
 *      Eligibility Assessment" stays clickable and the full 4-step workflow
 *      behind it (Program Association → Organization Details → Financial
 *      Info → Policy Info → report) runs for real — see
 *      EligibilityAssessmentPage and EligibilityWorkflowPanel. That's the
 *      whole point of this walkthrough step.
 *   3. `autoScrollToEligibility` scrolls straight down to that section on
 *      mount, so the viewer lands on the assessment rather than the top of
 *      the grant overview.
 *
 * Everything else — Watch, Share, the "On This Page" scroll nav — is the
 * same live EligibilityAssessmentPage the real page renders, untouched.
 */
export function EligibilityDemoPage() {
  return <EligibilityAssessmentPage demoLocked unlockEligibilityAssessment autoScrollToEligibility />;
}
