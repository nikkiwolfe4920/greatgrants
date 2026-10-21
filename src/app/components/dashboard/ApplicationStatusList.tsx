import { useMemo } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { mockApplications, type Application } from "@/data/applications";

/**
 * "Pick up where you left off" — active applications with a one-click way
 * back into the exact section that still needs work.
 *
 * Each card is deliberately minimal (Figma "Progress Card"): title, due date,
 * last updated, the program link, and a single "Jump back in" CTA. No progress
 * bar, section chips or status badges.
 *
 * "Jump back in" does not drop the user on the applications index. It
 * deep-links to the first section that isn't complete, because reopening an
 * application only to hunt for your place is the friction this module exists
 * to remove.
 *
 * Destinations (every element ends somewhere):
 *   - "View all" (header, and footer link when capped) → /applications
 *   - Program name                                     → /project-details
 *   - "Jump back in"                                   → /application/:id/s/:nextSectionId
 *   - "Start an application" (no active applications)  → /search
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

/**
 * Card cap. Three keeps the module to roughly one screen and leaves the
 * Recommended feed below it in view; beyond that the user is managing, not
 * resuming, and /applications is the better tool. Cards are sorted by
 * urgency first so the cap never hides the one that matters.
 */
export const MAX_VISIBLE_APPLICATIONS = 3;

/** The section the user left off in: in-progress first, else first unfinished. */
function nextSectionId(app: Application): string | null {
  const next =
    app.sections.find((s) => s.status === "in-progress") ??
    app.sections.find((s) => s.status !== "complete");
  return next?.id ?? null;
}

function dueLabel(app: Application): string {
  const days = Math.abs(app.daysLeft);
  const unit = days === 1 ? "day" : "days";
  return app.daysLeft < 0
    ? `Due ${app.dueDate} (${days} ${unit} past due)`
    : `Due ${app.dueDate} (${days} ${unit} left)`;
}

/** Overdue first, then soonest deadline, so the cap never hides what's urgent. */
function byUrgency(a: Application, b: Application) {
  return a.daysLeft - b.daysLeft;
}

export function ApplicationCard({ app, index = 0 }: { app: Application; index?: number }) {
  const navigate = useNavigate();
  const sectionId = nextSectionId(app);
  const nextPath = sectionId ? `/application/${app.id}/s/${sectionId}` : "/applications";

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="p-5 sm:p-6 hover:bg-gray-50/70 transition-colors"
    >
      <h3 className="text-[15px] font-semibold text-gray-900 leading-snug" style={CABIN}>
        {app.title}
      </h3>

      <div
        className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-600"
        style={CABIN}
      >
        <span className="inline-flex items-center gap-2">
          <Calendar className="w-4 h-4" aria-hidden />
          {dueLabel(app)}
        </span>
        <span>Last updated: {app.lastUpdated}</span>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
        <button
          onClick={() => navigate("/project-details")}
          className="text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          style={CABIN}
        >
          {app.programName}
        </button>
        <Button
          onClick={() => navigate(nextPath)}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold shrink-0"
          style={CABIN}
        >
          Jump back in
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.li>
  );
}

export function ApplicationStatusList() {
  const navigate = useNavigate();

  const active = useMemo(
    () => mockApplications.filter((a) => a.applicationStatus === "active").sort(byUrgency),
    [],
  );
  const submitted = mockApplications.filter((a) => a.applicationStatus === "submitted");

  const visible = active.slice(0, MAX_VISIBLE_APPLICATIONS);
  const hiddenCount = active.length - visible.length;

  return (
    <section className="rounded-xl border border-gray-200 bg-white" aria-labelledby="applications-heading">
      <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100">
        <div className="min-w-0">
          <h2 id="applications-heading" className="text-lg text-gray-900" style={LUSTRIA}>
            Pick up where you left off
          </h2>
          <p className="mt-0.5 text-sm text-gray-600" style={CABIN}>
            {active.length} active {active.length === 1 ? "application" : "applications"} ·{" "}
            {submitted.length} submitted
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/applications")}
          className="border-gray-300 text-gray-700 hover:bg-gray-50 shrink-0"
          style={CABIN}
        >
          View all
        </Button>
      </div>

      <ul className="divide-y divide-gray-100">
        {visible.map((app, index) => (
          <ApplicationCard key={app.id} app={app} index={index} />
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className="border-t border-gray-100 px-5 sm:px-6 py-3">
          <button
            onClick={() => navigate("/applications")}
            className="text-sm font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            style={CABIN}
          >
            View {hiddenCount} more {hiddenCount === 1 ? "application" : "applications"}
            <ArrowRight className="w-4 h-4" aria-hidden />
          </button>
        </div>
      )}
    </section>
  );
}

/**
 * No-applications state (user has programs, nothing started). Renders in the
 * work column directly above the Recommended feed so the prompt and the
 * grants that answer it sit together. The zero-programs state is owned by the
 * dashboard empty-state ticket, not this module.
 */
export function StartApplicationPrompt() {
  const navigate = useNavigate();
  return (
    <section
      className="rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-5 sm:p-6"
      aria-labelledby="start-application-heading"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
          <Plus className="w-5 h-5 text-white" aria-hidden />
        </span>
        <div className="flex-1 min-w-0">
          <h2 id="start-application-heading" className="text-lg text-gray-900" style={LUSTRIA}>
            Start an application
          </h2>
          <p className="mt-0.5 text-sm text-gray-600" style={CABIN}>
            Pick a grant from the recommendations below and we'll generate a full first draft from
            your profile and programs.
          </p>
        </div>
        <Button
          onClick={() => navigate("/search")}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold shrink-0"
          style={CABIN}
        >
          Start an application
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
