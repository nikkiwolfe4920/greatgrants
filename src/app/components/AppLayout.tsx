import { Outlet } from "react-router";
import { SharedSidebar } from "./SharedSidebar";

export function AppLayout() {
  return (
    <div className="flex h-screen bg-white">
      <SharedSidebar />
      <main className="flex-1 overflow-y-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
}