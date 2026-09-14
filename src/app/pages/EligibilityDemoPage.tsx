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
 *      Application" buttons (including the two inside the completed
 *      report), "Upgrade Plan", the two document rows, the program website
 *      link, "Improve Program", "I would like to create a new program",
 *      and the "Account Settings → Organization Profile" link in Step 2 —
 *      exactly as it does on /org-detail-demo. The global left nav
 *      (SharedSidebar) disables itself the same way too, via the shared
 *      isLockedDemoRoute check in lockedDemoRoutes.ts, since
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
 *   4. `resetAssessmentUsageOnMount` clears every recorded assessment
 *      completion the moment this page mounts, so a viewer who used up
 *      assessments earlier in the demo (or on a previous visit — usage is
 *      tracked subscription-wide, not per grant) never lands on the
 *      exhausted "You've used all 3 eligibility assessments" card here.
 *      Every navigation to /eligibility-demo starts the counter fresh at 0
 *      of 3, guaranteeing "Start Eligibility Assessment" is clickable.
 *   5. `hideAssessmentUsage` goes further than the reset above: it hides
 *      every "X of N assessments used" display in the entry card, the
 *      workflow's own usage line, Policy Info's "this will use assessment
 *      N of M" line, and the completed report's "Assessment complete —
 *      marked as used" banner, and makes the entry card ignore
 *      `isExhausted` entirely — so this demo is never capped at N runs at
 *      all, not just reset to 0 on arrival.
 *
 * Everything else — Watch, Share, the "On This Page" scroll nav — is the
 * same live EligibilityAssessmentPage the real page renders, untouched.
 */
export function EligibilityDemoPage() {
  return (
    <EligibilityAssessmentPage
      demoLocked
      unlockEligibilityAssessment
      autoScrollToEligibility
      resetAssessmentUsageOnMount
      hideAssessmentUsage
    />
  );
}
