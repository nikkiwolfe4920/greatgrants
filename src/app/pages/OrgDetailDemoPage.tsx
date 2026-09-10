import { EligibilityAssessmentPage } from "./EligibilityAssessmentPage";

/**
 * OrgDetailDemoPage — a locked-down duplicate of EligibilityAssessmentPage
 * (/eligibility-assessment) for walking a viewer through a grant's detail
 * and eligibility assessment screen without letting them wander off it.
 *
 * Three differences from the real /eligibility-assessment page:
 *   1. DemoOnlyBar spans the full width of the screen above both the
 *      global left nav and this page — see isLockedDemoRoute in
 *      lockedDemoRoutes.ts (read by AppLayout) — replacing the Great
 *      Grants logo with a back arrow and stating plainly that this is a
 *      demo, not the live product.
 *   2. SharedSidebar (the global left nav) disables its own links while
 *      this route is active, and hides the Dashboard link and the credits
 *      widget entirely — see the isLockedNav check in SharedSidebar.tsx —
 *      so every way out of this page except DemoOnlyBar's back link is
 *      inert.
 *   3. EligibilityAssessmentPage's `demoLocked` prop makes every other
 *      control that would navigate away inert: the breadcrumb's Home
 *      crumb, the sticky header's back arrow, both "Start Application"
 *      buttons, "Upgrade Plan", "Start Eligibility Assessment", the two
 *      document rows under Documents (2), and the program website link —
 *      each showing the browser's native not-allowed cursor on hover
 *      instead of clicking through.
 *
 * Everything else — Watch, Share, the "On This Page" scroll nav, and the
 * eligibility assessment's own interactive elements once started — is the
 * same live EligibilityAssessmentPage the real page renders, untouched.
 */
export function OrgDetailDemoPage() {
  return <EligibilityAssessmentPage demoLocked />;
}
