import { ApplicationsPage } from "./ApplicationsPage";

/**
 * ApplicationsDemoPage — /applications-demo, step 5 of 6 in the locked demo
 * tour (see lockedDemoTour.ts) and a locked-down duplicate of
 * ApplicationsPage (/applications), the same way EligibilityDemoPage
 * (/eligibility-demo, step 4) duplicates EligibilityAssessmentPage.
 *
 *   1. `demoLocked` renders the breadcrumb's Home crumb inert (not-allowed
 *      cursor, no navigation) — the global left nav disables itself
 *      separately via the existing isLockedDemoRoute check, same as every
 *      other locked demo route.
 *   2. `demoLockedApplicationId="2"` freezes the entire accordion card for
 *      "FY26 National Network Cooperative Agreement to the National
 *      Railroad Passenger Corporation" — it starts (and, since its
 *      expand/collapse chevron is inert, stays) collapsed, and its "..."
 *      menu, "Mark as submitted" checkbox, "Add Programs" button (shown
 *      with 1 program already added), and Preview/Export button are all
 *      inert too. Every other application on the page — including the
 *      default-expanded one — is untouched.
 *   3. `rightRailDefaultCollapsed` starts ApplicationRightRail collapsed to
 *      just its floating tab, instead of open, so the workspace opens
 *      uncluttered.
 *   4. `rightRailCollapsedLabel="Expert Help?"` relabels that floating tab
 *      (normally "PROGRESS").
 *   5. `rightRailHideContentGaps` drops "Content Gaps to Address" from the
 *      rail once opened, leaving "Need Expert Help?" as the only — and
 *      therefore topmost — card.
 */
export function ApplicationsDemoPage() {
  return (
    <ApplicationsPage
      demoLocked
      demoLockedApplicationId="2"
      rightRailDefaultCollapsed
      rightRailCollapsedLabel="Expert Help?"
      rightRailHideContentGaps
    />
  );
}
