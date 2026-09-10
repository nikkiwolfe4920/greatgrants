/**
 * Locked demo routes — full-page duplicates of a real screen (see
 * OrganizationDemoPage, SearchDemoPage) that pin DemoOnlyBar across the top
 * of the screen and disable every control that would navigate away, so a
 * viewer stays on that one page.
 *
 * AppLayout and SharedSidebar both need to know "is this route locked" —
 * one list here keeps them from drifting out of sync as more of these
 * walkthrough pages get added.
 */
const LOCKED_DEMO_ROUTES = ["/organization-demo", "/search-demo", "/org-detail-demo"] as const;

export function isLockedDemoRoute(pathname: string): boolean {
  return (LOCKED_DEMO_ROUTES as readonly string[]).includes(pathname);
}
