import { motion } from "motion/react";
import { ApplicationStatusList, StartApplicationPrompt } from "../components/dashboard/ApplicationStatusList";
import { RecommendedGrants } from "../components/dashboard/RecommendedGrants";
import { PartnershipsPanel } from "../components/dashboard/PartnershipsPanel";
import { useDashboardState } from "../components/dashboard/useDashboardState";

/**
 * Dashboard (/) — the app's home (Figma: "GG Dashboard with Recommended for
 * you feed").
 *
 * Reading order:
 *   1. Greeting.
 *   2. Pick up where you left off (active applications), when there are any;
 *      otherwise the "Start an application" prompt.
 *   3. Recommended for you.
 * Partnerships sit in the right rail, top-aligned with the greeting.
 *
 * Nothing here holds its own copy of app state: every module reads from
 * useDashboardState or the shared data modules, so the dashboard can never
 * disagree with the page it links to.
 */

const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function DashboardPage() {
  const state = useDashboardState();

  return (
    <div className="max-w-[1400px] mx-auto p-6 sm:p-8 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-6 items-start">
      {/* Partnerships — pinned to the top right of the page */}
      <aside className="min-w-0 order-first xl:order-none xl:col-start-2 xl:row-start-1">
        <PartnershipsPanel />
      </aside>

      <div className="min-w-0 xl:col-start-1 xl:row-start-1 space-y-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl sm:text-3xl text-gray-900" style={LUSTRIA}>
            {greeting()}, Olivia
          </h1>
        </motion.header>

        {state.activeApplications.length > 0 ? <ApplicationStatusList /> : <StartApplicationPrompt />}
        <RecommendedGrants />
      </div>
    </div>
  );
}
