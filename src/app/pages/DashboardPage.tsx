import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CalendarClock } from "lucide-react";
import { GreatGrantsProcess } from "../components/dashboard/GreatGrantsProcess";
import { ApplicationStatusList, StartApplicationPrompt } from "../components/dashboard/ApplicationStatusList";
import { RecommendedGrants } from "../components/dashboard/RecommendedGrants";
import { NotificationsPanel } from "../components/dashboard/NotificationsPanel";
import { AskGreatGrants } from "../components/dashboard/AskGreatGrants";
import { PlanCreditsCard } from "../components/dashboard/PlanCreditsCard";
import { FeatureSummaryGrid } from "../components/dashboard/FeatureSummaryGrid";
import { useDashboardState } from "../components/dashboard/useDashboardState";

/**
 * Dashboard (/) — the app's home.
 *
 * Reading order is deliberate:
 *   1. Where you stand and the single next thing to do.
 *   2. Pick up where you left off (active applications), when there are any.
 *   3. Recommended for you (with the start prompt above it when nothing is active).
 *   4. Your workspace at a glance — one tile per feature, each with live state.
 *   5. The Great Grants Process — how the whole thing works, and where you are in it.
 *   6. The support rail (plan credits, AI help); notifications sit top right.
 *
 * Nothing here holds its own copy of app state: every module reads from
 * useDashboardState, useCreditUsage, or the shared data modules, so the
 * dashboard can never disagree with the page it links to.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

/**
 * FPO (for placement only) wrapper — greys out a module and overlays an
 * "FPO" label. Content is inert while wrapped.
 */
function Fpo({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden className="grayscale opacity-50 pointer-events-none select-none">
        {children}
      </div>
      <div className="absolute inset-0 rounded-xl bg-gray-200/60 flex items-center justify-center pointer-events-none">
        <span
          className="text-4xl font-bold tracking-[0.3em] text-gray-500/80 -rotate-12 border-4 border-gray-500/60 rounded-lg px-4 py-1"
          style={CABIN}
        >
          FPO
        </span>
      </div>
    </div>
  );
}

function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function DashboardPage() {
  const navigate = useNavigate();
  const state = useDashboardState();

  return (
    <div className="max-w-[1400px] mx-auto p-6 sm:p-8 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-6 items-start">
      {/* Notifications — pinned to the top right of the page */}
      <aside className="min-w-0 order-first xl:order-none xl:col-start-2 xl:row-start-1">
        <NotificationsPanel />
      </aside>

      <div className="min-w-0 xl:col-start-1 xl:row-start-1">
      {/* Welcome header */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl text-gray-900" style={LUSTRIA}>
              {greeting()}, Olivia
            </h1>
            <p className="mt-1.5 text-sm text-gray-600 max-w-2xl" style={CABIN}>
              {state.nearestDeadline ? (
                <>
                  Your next deadline is{" "}
                  <span className="font-semibold text-gray-900">
                    {state.nearestDeadline.dueDate}
                  </span>{" "}
                  — {state.nearestDeadline.daysLeft} days out, with{" "}
                  {state.sectionsRemaining} section
                  {state.sectionsRemaining === 1 ? "" : "s"} left across your active drafts.
                </>
              ) : (
                <>Nothing is due right now — a good moment to line up your next opportunity.</>
              )}
            </p>
          </div>

        </div>

        {/* Urgent deadline strip */}
        {state.nearestDeadline && state.nearestDeadline.daysLeft <= 14 && (
          <Fpo className="mt-5">
          <motion.button
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            onClick={() => navigate("/applications")}
            className="w-full text-left rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 flex items-center gap-3 hover:bg-red-100/70 transition-colors"
          >
            <CalendarClock className="w-4 h-4 text-red-600 shrink-0" />
            <span className="text-sm text-red-900 flex-1 min-w-0" style={CABIN}>
              <span className="font-semibold">
                {state.nearestDeadline.daysLeft} days left
              </span>{" "}
              on {state.nearestDeadline.title}
            </span>
            <ArrowRight className="w-4 h-4 text-red-600 shrink-0" />
          </motion.button>
          </Fpo>
        )}
      </motion.header>

      {/* Pick up where you left off — resuming a draft is the most frequent
          return-visit job, so it sits straight under the header, ahead of the
          explanatory modules. With no active applications the "Start an
          application" prompt takes its place beside Recommended instead. */}
      {state.activeApplications.length > 0 && (
        <div className="mb-6">
          <ApplicationStatusList />
        </div>
      )}

      {/* Recommended for you — directly under Pick up where you left off. With
          no active applications, the start prompt leads into it instead. */}
      <div className="mb-6 space-y-6">
        {state.activeApplications.length === 0 && <StartApplicationPrompt />}
        <RecommendedGrants />
      </div>

      {/* At a glance */}
      <div className="mb-6">
        <Fpo>
          <FeatureSummaryGrid />
        </Fpo>
      </div>

      {/* How it works — the Great Grants Process */}
      <div className="mb-6">
        <Fpo>
          <GreatGrantsProcess
            statusByStep={state.statusByStep}
            currentStepId={state.currentStepId}
          />
        </Fpo>
      </div>

      {/* Support rail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <Fpo>
          <PlanCreditsCard />
        </Fpo>
        <Fpo>
          <AskGreatGrants />
        </Fpo>
      </div>
      </div>
    </div>
  );
}
