import { OrganizationProfileForm } from "../components/OrganizationProfileForm";

/**
 * OrganizationDemoPage — a locked-down duplicate of OrganizationPage for
 * walking a viewer through the Organization Profile screen without letting
 * them wander off it.
 *
 * Three differences from the real /organization page:
 *   1. A white "demo" bar (DemoOnlyBar) spans the full width of the screen
 *      above both the global left nav and this page — see the
 *      isLockedOrgDemo check in AppLayout — replacing the Great Grants logo
 *      with a back arrow and stating plainly that this is a demo, not the
 *      live product.
 *   2. The breadcrumb's Home and Settings crumbs are inert (see the
 *      `demoLocked` prop on OrganizationProfileForm) — there's no path back
 *      to Settings from here.
 *   3. SharedSidebar (the global left nav) disables its own links while
 *      this route is active — see the isLockedNav check in
 *      SharedSidebar.tsx — so every way out of this page except
 *      DemoOnlyBar's back link is inert.
 *
 * Everything else — the tabs, the fields, autosave, and the right-hand
 * completion rail — is the same live OrganizationProfileForm the real page
 * renders, untouched.
 */
export function OrganizationDemoPage() {
  return (
    <>
      <style>{`
        /* Hide the duplicate sidebar in OrganizationProfileForm — the real
           nav is SharedSidebar (locked, rendered by AppLayout), same as on
           the live /organization page. */
        .organization-demo-wrapper > div > aside {
          display: none !important;
        }
        .organization-demo-wrapper > div {
          display: flex !important;
        }
        .organization-demo-wrapper > div > main {
          flex: 1 !important;
        }
      `}</style>
      <div className="organization-demo-wrapper">
        <OrganizationProfileForm onBack={() => {}} demoLocked />
      </div>
    </>
  );
}
