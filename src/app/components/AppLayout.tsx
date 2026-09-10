import { Outlet, useLocation } from "react-router";
import { SharedSidebar } from "./SharedSidebar";
import { DemoBanner } from "./demo/DemoBanner";
import { DemoOnlyBar } from "./demo/DemoOnlyBar";

export function AppLayout() {
  const location = useLocation();
  // /organization-demo is a locked walkthrough duplicate of /organization —
  // its "this is a demo" bar has to run the full width of the screen, above
  // SharedSidebar as well as the page content, so it's mounted here rather
  // than inside the page itself. See OrganizationDemoPage and DemoOnlyBar.
  const isLockedOrgDemo = location.pathname === "/organization-demo";

  return (
    <div className="flex h-screen flex-col bg-white">
      {isLockedOrgDemo && <DemoOnlyBar />}
      <div className="flex flex-1 min-h-0">
        <SharedSidebar />
        <main className="flex-1 overflow-y-auto bg-white lg:pl-0 pl-12">
          {/* Only renders while a public visitor is walking through the demo
              from /marketing — see src/app/demo/useDemoMode.ts. */}
          <DemoBanner />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
