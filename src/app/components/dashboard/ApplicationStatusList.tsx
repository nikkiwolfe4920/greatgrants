import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Sparkles,
  Plus,
} from "lucide-react";
import { Button } from "../ui/button";
import { ExportApplicationDialog } from "../ExportApplicationDialog";
import { mockApplications, type Application } from "@/data/applications";

/**
 * "Pick up where you left off" — active applications with a one-click way
 * back into the exact section that still needs work.
 *
 * The important UX decision here: "Jump back in" does not drop the user on the
 * applications index. It deep-links to the first section that isn't complete,
 * because reopening an application only to hunt for your place is the friction
 * this module exists to remove.
 *
 * Destinations (every element ends somewhere):
 *   - "View all" (header, and footer link when capped) → /applications
 *   - Card title                                       → /applications
 *   - Section chip                                     → /application/:id/s/:sectionId
 *   - "Jump back in" (in progress / overdue)           → /application/:id/s/:nextSectionId
 *   - "Review & export" (100%)                         → opens the export dialog in place
 *   - "Start an application" (no active applications)  → /search
 *
 * Card variants (ApplicationCard):
 *   - in-progress — neutral/amber/red days-left badge by urgency, "Jump back in"
 *   - ready       — 100% complete: green bar, "Ready to export", "Review & export"
 *   - overdue     — past the due date: red "Past due" badge + red due date. Still
 *                   resumable; it sorts to the top because it needs a decision.
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

/**
 * The "AI coaching is ready on this section" hint depends on Post-draft
 * Coaching (TP-1589). Kept for this increment because it's in the approved
 * design; flip to false to drop it without touching the layout.
 */
const SHOW_AI_COACHING_HINT = true;

type CardVariant = "in-progress" | "ready" | "overdue";

interface Progress {
  complete: number;
  total: number;
  percent: number;
  nextSectionId: string | null;
  nextSectionName: string | null;
}

function getProgress(app: Application): Progress {
  const total = app.sections.length;
  const complete = app.sections.filter((s) => s.status === "complete").length;
  // Prefer an in-progress section over an untouched one — that's where the
  // user actually left off.
  const next =
    app.sections.find((s) => s.status === "in-progress") ??
    app.sections.find((s) => s.status !== "complete") ??
    null;
  return {
    complete,
    total,
    percent: total === 0 ? 0 : Math.round((complete / total) * 100),
    nextSectionId: next?.id ?? null,
    nextSectionName: next?.name ?? null,
  };
}

function variantOf(app: Application, progress: Progress): CardVariant {
  if (app.daysLeft < 0) return "overdue";
  if (progress.total > 0 && progress.complete === progress.total) return "ready";
  return "in-progress";
}

function urgencyOf(daysLeft: number, variant: CardVariant) {
  if (variant === "overdue") {
    const days = Math.abs(daysLeft);
    return {
      label: days === 0 ? "Past due" : `Past due · ${days} ${days === 1 ? "day" : "days"}`,
      classes: "bg-red-50 text-red-700 border-red-200",
    };
  }
  const label = `${daysLeft} ${daysLeft === 1 ? "day" : "days"} left`;
  if (daysLeft <= 14) return { label, classes: "bg-red-50 text-red-700 border-red-200" };
  if (daysLeft <= 30) return { label, classes: "bg-orange-50 text-orange-700 border-orange-200" };
  return { label, classes: "bg-gray-100 text-gray-700 border-gray-200" };
}

/** Overdue first, then soonest deadline, so the cap never hides what's urgent. */
function byUrgency(a: Application, b: Application) {
  return a.daysLeft - b.daysLeft;
}

interface ApplicationCardProps {
  app: Application;
  index?: number;
  onExport: (app: Application) => void;
}

export function ApplicationCard({ app, index = 0, onExport }: ApplicationCardProps) {
  const navigate = useNavigate();
  const progress = getProgress(app);
  const variant = variantOf(app, progress);
  const urgency = urgencyOf(app.daysLeft, variant);
  const isReady = variant === "ready";
  const isOverdue = variant === "overdue";
  const nextPath = progress.nextSectionId
    ? `/application/${app.id}/s/${progress.nextSectionId}`
    : "/applications";

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      data-variant={variant}
      className="p-5 sm:p-6 hover:bg-gray-50/70 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-semibold ${urgency.classes}`}
              style={CABIN}
            >
              {isOverdue ? (
                <AlertTriangle className="w-3 h-3" aria-hidden />
              ) : (
                <CalendarClock className="w-3 h-3" aria-hidden />
              )}
              {urgency.label}
            </span>
            <span className="text-[11px] text-gray-500" style={CABIN}>
              <span className={isOverdue ? "font-semibold text-red-700" : undefined}>
                Due {app.dueDate}
              </span>{" "}
              · Updated {app.lastUpdated}
            </span>
          </div>

          <button
            onClick={() => navigate("/applications")}
            className="text-left block w-full group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            <h3
              className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-teal-700 transition-colors line-clamp-2"
              style={CABIN}
            >
              {app.title}
            </h3>
          </button>

          {/* Section progress */}
          <div className="mt-3 max-w-md">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-700" style={CABIN}>
                {progress.complete} of {progress.total} sections complete
              </span>
              <span className="text-xs font-semibold text-gray-900 tabular-nums" style={CABIN}>
                {progress.percent}%
              </span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={progress.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${progress.complete} of ${progress.total} sections complete`}
              className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden"
            >
              <motion.div
                className={`h-full rounded-full ${isReady ? "bg-green-600" : "bg-teal-600"}`}
                initial={{ width: 0 }}
                animate={{ width: `${progress.percent}%` }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
              />
            </div>
            {/* Section chips — a glanceable map of what's left */}
            <div className="mt-2.5 flex flex-wrap gap-1">
              {app.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => navigate(`/application/${app.id}/s/${section.id}`)}
                  title={`${section.name} — ${
                    section.status === "complete"
                      ? "complete"
                      : section.status === "in-progress"
                      ? "in progress"
                      : "not started"
                  }`}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                    section.status === "complete"
                      ? "bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100"
                      : section.status === "in-progress"
                      ? "bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100"
                      : "bg-white border-gray-200 text-gray-500 hover:bg-gray-100"
                  }`}
                  style={CABIN}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Primary action */}
        <div className="sm:w-52 shrink-0 sm:text-right">
          {isReady ? (
            <>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 mb-2"
                style={CABIN}
              >
                <CheckCircle2 className="w-3.5 h-3.5" aria-hidden />
                Ready to export
              </div>
              <Button
                onClick={() => onExport(app)}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                style={CABIN}
              >
                Review &amp; export
                <ArrowRight className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <>
              <p className="text-[11px] text-gray-500 mb-2 sm:text-right" style={CABIN}>
                Next up: <span className="font-semibold text-gray-800">{progress.nextSectionName}</span>
              </p>
              <Button
                onClick={() => navigate(nextPath)}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                style={CABIN}
              >
                Jump back in
                <ArrowRight className="w-4 h-4" />
              </Button>
              {SHOW_AI_COACHING_HINT && (
                <p
                  className="mt-2 text-[11px] text-gray-500 inline-flex items-center gap-1 sm:justify-end w-full"
                  style={CABIN}
                >
                  <Sparkles className="w-3 h-3 text-teal-600" aria-hidden />
                  AI coaching is ready on this section
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export function ApplicationStatusList() {
  const navigate = useNavigate();
  const [exportTarget, setExportTarget] = useState<Application | null>(null);

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
          <ApplicationCard key={app.id} app={app} index={index} onExport={setExportTarget} />
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

      {exportTarget && (
        <ExportApplicationDialog
          isOpen
          onClose={() => setExportTarget(null)}
          applicationTitle={exportTarget.title}
          applicationId={exportTarget.id}
        />
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
