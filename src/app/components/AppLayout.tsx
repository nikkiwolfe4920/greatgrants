import { Outlet } from "react-router";
import { SharedSidebar } from "./SharedSidebar";
import { DemoBanner } from "./demo/DemoBanner";

export function AppLayout() {
  return (
    <div className="flex h-screen bg-white">
      <SharedSidebar />
      <main className="flex-1 overflow-y-auto bg-white lg:pl-0 pl-12">
        {/* Only renders while a public visitor is walking through the demo
            from /marketing — see src/app/demo/useDemoMode.ts. */}
        <DemoBanner />
        <Outlet />
      </main>
    </div>
  );
}
