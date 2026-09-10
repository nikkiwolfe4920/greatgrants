import { GrantSearch } from "../components/GrantSearch";

/**
 * SearchDemoPage — a locked-down duplicate of GrantSearchPage (/search) for
 * walking a viewer through Grant Search without letting them wander off it.
 *
 * Three differences from the real /search page:
 *   1. DemoOnlyBar spans the full width of the screen above both the global
 *      left nav and this page — see isLockedDemoRoute in lockedDemoRoutes.ts
 *      (read by AppLayout) — replacing the Great Grants logo with a back
 *      arrow and stating plainly that this is a demo, not the live product.
 *   2. SharedSidebar (the global left nav) disables its own links while
 *      this route is active — see the isLockedNav check in
 *      SharedSidebar.tsx — so every way out of this page except
 *      DemoOnlyBar's back link is inert.
 *   3. GrantSearch's `demoLocked` prop makes the breadcrumb's Home crumb,
 *      every grant result (main list and Recently Viewed), and every
 *      "Add Program" / "Create Program" / "Add Your Website" CTA inert —
 *      hovering any of them shows the not-allowed cursor instead of
 *      clicking through to Grant Detail, Programs, or the Organization
 *      Profile.
 *
 * Everything else — search, filters, sort, grid/list toggle, and the Watch
 * toggle — is the same live GrantSearch the real page renders, untouched.
 */
export function SearchDemoPage() {
  return <GrantSearch demoLocked />;
}
