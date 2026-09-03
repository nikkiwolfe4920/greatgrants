import { useMemo } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CalendarClock, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { GreatGrantsProcess } from "../components/dashboard/GreatGrantsProcess";
import { ApplicationStatusList } from "../components/dashboard/ApplicationStatusList";
import { RecommendedGrants } from "../components/dashboard/RecommendedGrants";
import { NotificationsPanel } from "../components/dashboard/NotificationsPanel";
import { AskGreatGrants } from "../components/dashboard/AskGreatGrants";
import { PlanCreditsCard } from "../components/dashboard/PlanCreditsCard";
import { FeatureSummaryGrid } from "../components/dashboard/FeatureSummaryGrid";
import { useDashboardState } from "../components/dashboard/useDashboardState";
import { PROCESS_STEPS } from "@/data/greatGrantsProcess";

/**
 * Dashboard (/) — the app's home.
 *
 * Reading order is deliberate:
 *   1. Where you stand and the single next thing to do.
 *   2. Your workspace at a glance — one tile per feature, each with live state.
 *   3. The Great Grants Process — how the whole thing works, and where you are in it.
 *   4. Work in flight (applications, recommendations) beside the support rail
 *      (plan credits, notifications, AI help).
 *
 * Nothing here holds its own copy of app state: every module reads from
 * useDashboardState, useCreditUsage, or the shared data modules, so the
 * dashboard can never disagree with the page it links to.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function DashboardPage() {
  const navigate = useNavigate();
  const state = useDashboardState();

  const nextStep = useMemo(
    () => PROCESS_STEPS.find((s) => s.id === state.currentStepId) ?? PROCESS_STEPS[0],
    [state.currentStepId],
  );

  const progressPercent = Math.round((state.completedStepCount / state.totalStepCount) * 100);

  return (
    <div className="max-w-[1400px] mx-auto p-6 sm:p-8">
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

          {/* Next best action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-4 lg:min-w-[380px] shrink-0"
          >
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </span>
              <div className="min-w-0 flex-1">
                <span
                  className="block text-[11px] font-semibold uppercase tracking-wide text-teal-700 mb-0.5"
                  style={CABIN}
                >
                  Your next step
                </span>
                <span className="block text-sm font-semibold text-gray-900 mb-0.5" style={CABIN}>
                  {nextStep.title}
                </span>
                <span className="block text-xs text-gray-600 leading-relaxed mb-2.5" style={CABIN}>
                  {nextStep.promise}
                </span>
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    onClick={() => navigate(nextStep.cta.to)}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                    style={CABIN}
                  >
                    {nextStep.cta.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                  <span className="text-[11px] text-gray-500 tabular-nums" style={CABIN}>
                    Step {nextStep.order} of {state.totalStepCount}
                  </span>
                </div>
              </div>
            </div>

            {/* Overall process progress */}
            <div className="mt-3.5 pt-3 border-t border-teal-100">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-medium text-gray-600" style={CABIN}>
                  Great Grants Process
                </span>
                <span className="text-[11px] font-semibold text-gray-900 tabular-nums" style={CABIN}>
                  {state.completedStepCount}/{state.totalStepCount} complete
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-teal-100 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-teal-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Urgent deadline strip */}
        {state.nearestDeadline && state.nearestDeadline.daysLeft <= 14 && (
          <motion.button
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            onClick={() => navigate("/applications")}
            className="mt-5 w-full text-left rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 flex items-center gap-3 hover:bg-red-100/70 transition-colors"
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
        )}
      </motion.header>

      {/* At a glance */}
      <div className="mb-6">
        <FeatureSummaryGrid />
      </div>

      {/* How it works — the Great Grants Process */}
      <div className="mb-6">
        <GreatGrantsProcess
          statusByStep={state.statusByStep}
          currentStepId={state.currentStepId}
        />
      </div>

      {/* Work in flight + support rail */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)] gap-6 items-start">
        <div className="space-y-6 min-w-0">
          <ApplicationStatusList />
          <RecommendedGrants />
        </div>
        <div className="space-y-6 min-w-0">
          <PlanCreditsCard />
          <AskGreatGrants />
          <NotificationsPanel />
        </div>
      </div>
    </div>
  );
}
