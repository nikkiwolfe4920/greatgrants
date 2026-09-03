import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  FileText,
  Sparkles,
  Plus,
} from "lucide-react";
import { Button } from "../ui/button";
import { mockApplications, type Application } from "@/data/applications";

/**
 * "Pick up where you left off" — application status with a one-click way back
 * into the exact section that still needs work.
 *
 * The important UX decision here: "Jump back in" does not drop the user on the
 * applications index. It deep-links to the first section that isn't complete,
 * because reopening an application only to hunt for your place is the friction
 * this module exists to remove.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

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

function urgencyOf(daysLeft: number) {
  if (daysLeft <= 0) return { label: "Past due", classes: "bg-red-50 text-red-700 border-red-200" };
  if (daysLeft <= 14)
    return { label: `${daysLeft} days left`, classes: "bg-red-50 text-red-700 border-red-200" };
  if (daysLeft <= 30)
    return { label: `${daysLeft} days left`, classes: "bg-orange-50 text-orange-700 border-orange-200" };
  return { label: `${daysLeft} days left`, classes: "bg-gray-100 text-gray-700 border-gray-200" };
}

export function ApplicationStatusList() {
  const navigate = useNavigate();
  const active = mockApplications.filter((a) => a.applicationStatus === "active");
  const submitted = mockApplications.filter((a) => a.applicationStatus === "submitted");

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

      {active.length === 0 ? (
        <div className="px-5 sm:px-6 py-10 text-center">
          <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
            <FileText className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1" style={CABIN}>
            No applications in progress
          </h3>
          <p className="text-sm text-gray-600 mb-4 max-w-sm mx-auto" style={CABIN}>
            Find a grant that fits, and we'll generate a full first draft from your profile and programs.
          </p>
          <Button
            onClick={() => navigate("/search")}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
            style={CABIN}
          >
            <Plus className="w-4 h-4" />
            Start an application
          </Button>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {active.map((app, index) => {
            const progress = getProgress(app);
            const urgency = urgencyOf(app.daysLeft);
            const isReady = progress.complete === progress.total;

            return (
              <motion.li
                key={app.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="p-5 sm:p-6 hover:bg-gray-50/70 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-semibold ${urgency.classes}`}
                        style={CABIN}
                      >
                        <CalendarClock className="w-3 h-3" />
                        {urgency.label}
                      </span>
                      <span className="text-[11px] text-gray-500" style={CABIN}>
                        Due {app.dueDate} · Updated {app.lastUpdated}
                      </span>
                    </div>

                    <button
                      onClick={() => navigate("/applications")}
                      className="text-left block w-full group"
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
                      <div className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
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
                            className={`px-1.5 py-0.5 rounded text-[10px] font-medium border transition-colors ${
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

                  {/* Jump back in */}
                  <div className="sm:w-52 shrink-0 sm:text-right">
                    {isReady ? (
                      <>
                        <div
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 mb-2"
                          style={CABIN}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Ready to export
                        </div>
                        <Button
                          onClick={() => navigate("/applications")}
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
                          Next up:{" "}
                          <span className="font-semibold text-gray-800">{progress.nextSectionName}</span>
                        </p>
                        <Button
                          onClick={() =>
                            navigate(
                              progress.nextSectionId
                                ? `/application/${app.id}/s/${progress.nextSectionId}`
                                : "/applications",
                            )
                          }
                          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                          style={CABIN}
                        >
                          Jump back in
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                        <p
                          className="mt-2 text-[11px] text-gray-500 inline-flex items-center gap-1 sm:justify-end w-full"
                          style={CABIN}
                        >
                          <Sparkles className="w-3 h-3 text-teal-600" />
                          AI coaching is ready on this section
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
