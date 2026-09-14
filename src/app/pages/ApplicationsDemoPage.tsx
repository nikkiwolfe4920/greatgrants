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
 *      other locked demo route. It also, page-wide: relabels "AI Enhanced"
 *      section badges to "AI Draft"; shows every active application's "Add
 *      Programs" button with 1 program already added, disabled; disables
 *      every section's Start/Continue button (they'd otherwise navigate off
 *      this page); hides the Unlimited AI-Grant Writer upsell in the "mark
 *      as submitted" confirmation; and keeps "Download Grants.gov
 *      Submission Package" in the export dialog disabled regardless of the
 *      acknowledgement checkbox.
 *   2. `demoLockedApplicationId="2"` freezes the entire accordion card for
 *      "FY26 National Network Cooperative Agreement to the National
 *      Railroad Passenger Corporation" — it starts (and, since its
 *      expand/collapse chevron is inert, stays) collapsed, and its "..."
 *      menu and "Mark as submitted" checkbox are inert too (Add Programs
 *      and Start/Continue are already covered by the page-wide rule
 *      above). Every other application on the page — including the
 *      default-expanded one — keeps its own expand/collapse, "...", "Mark
 *      as submitted", and Preview/Export controls live. Any application
 *      moved from Submitted back to Active gets this same frozen treatment
 *      automatically.
 *   3. `rightRailDefaultCollapsed` starts ApplicationRightRail collapsed to
 *      just its floating tab, instead of open, so the workspace opens
 *      uncluttered.
 *   4. `rightRailCollapsedLabel="Expert Help?"` relabels that floating tab
 *      (normally "PROGRESS").
 *   5. `rightRailHideContentGaps` drops "Content Gaps to Address" from the
 *      rail once opened, leaving "Need Expert Help?" as the only — and
 *      therefore topmost — card.
 *   6. `scrollToTopOnMount` scrolls the shared scroll container back to the
 *      top on mount, so arriving here via the forward arrow on
 *      /eligibility-demo (which leaves that page scrolled partway down)
 *      doesn't make this page appear to load mid-page.
 */
export function ApplicationsDemoPage() {
  return (
    <ApplicationsPage
      demoLocked
      demoLockedApplicationId="2"
      rightRailDefaultCollapsed
      rightRailCollapsedLabel="Expert Help?"
      rightRailHideContentGaps
      scrollToTopOnMount
    />
  );
}
