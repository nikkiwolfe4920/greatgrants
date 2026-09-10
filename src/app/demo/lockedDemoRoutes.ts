import { LOCKED_DEMO_TOUR } from "./lockedDemoTour";

/**
 * Locked demo routes — full-page duplicates of a real screen (see
 * OrganizationDemoPage, SearchDemoPage, OrgDetailDemoPage) that pin
 * DemoOnlyBar across the top of the screen and disable every control that
 * would navigate away, so a viewer stays within this set of pages.
 *
 * AppLayout and SharedSidebar both need to know "is this route locked" —
 * derived from LOCKED_DEMO_TOUR (lockedDemoTour.ts) rather than a second
 * hardcoded list, so the two can't drift out of sync as more of these
 * walkthrough pages get added.
 */
export function isLockedDemoRoute(pathname: string): boolean {
  return LOCKED_DEMO_TOUR.some((step) => step.path === pathname);
}
