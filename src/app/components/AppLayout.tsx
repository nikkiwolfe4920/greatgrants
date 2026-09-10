import { Outlet, useLocation } from "react-router";
import { SharedSidebar } from "./SharedSidebar";
import { DemoBanner } from "./demo/DemoBanner";
import { DemoOnlyBar } from "./demo/DemoOnlyBar";
import { isLockedDemoRoute } from "../demo/lockedDemoRoutes";

export function AppLayout() {
  const location = useLocation();
  // Locked walkthrough duplicates (e.g. /organization-demo, /search-demo)
  // need their "this is a demo" bar to run the full width of the screen,
  // above SharedSidebar as well as the page content, so it's mounted here
  // rather than inside the page itself. See lockedDemoRoutes.ts.
  const isLockedDemo = isLockedDemoRoute(location.pathname);

  return (
    <div className="flex h-screen flex-col bg-white">
      {isLockedDemo && <DemoOnlyBar />}
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
