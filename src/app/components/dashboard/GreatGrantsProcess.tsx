import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Clock,
  Flag,
  ArrowRight,
  Circle,
} from "lucide-react";
import { Button } from "../ui/button";
import { PROCESS_PHASES, PROCESS_STEPS, type ProcessStep } from "@/data/greatGrantsProcess";

/**
 * "How it works" — the Great Grants Process, rendered as an interactive rail.
 *
 * This module does two jobs at once, which is what makes it worth the space:
 *
 *  1. It explains the nine-step arc from onboarding to submission, with real
 *     value content for each step (what happens, why it matters, what you
 *     walk away with) rather than a row of unlabeled icons.
 *  2. It shows the user where they actually are. Step status is derived from
 *     live app state by the Dashboard and passed in, so the same module that
 *     teaches the process also answers "what's my next move?".
 *
 * Interaction model — click or arrow-key a node to inspect that step, or press
 * play to auto-advance through the whole process. Auto-play pauses the moment
 * the user takes over, and never starts at all under prefers-reduced-motion.
 */

export type StepStatus = "complete" | "current" | "upcoming";

interface GreatGrantsProcessProps {
  /** Live status per step id, derived by the Dashboard from real app state. */
  statusByStep: Record<string, StepStatus>;
  /** The step the user should do next — the rail opens here. */
  currentStepId: string;
}

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

/** Milliseconds a step stays on screen during the auto-play tour. */
const TOUR_STEP_MS = 7000;

const PHASE_ACCENT: Record<string, { chip: string; dot: string }> = {
  setup: { chip: "bg-teal-50 text-teal-800 border-teal-200", dot: "bg-teal-600" },
  discover: { chip: "bg-blue-50 text-blue-800 border-blue-200", dot: "bg-blue-600" },
  write: { chip: "bg-purple-50 text-purple-800 border-purple-200", dot: "bg-purple-600" },
};

export function GreatGrantsProcess({ statusByStep, currentStepId }: GreatGrantsProcessProps) {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const [selectedId, setSelectedId] = useState<string>(currentStepId);
  const [isTouring, setIsTouring] = useState(false);
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const railRef = useRef<HTMLDivElement>(null);

  const steps = PROCESS_STEPS;
  const selectedIndex = Math.max(0, steps.findIndex((s) => s.id === selectedId));
  const selected = steps[selectedIndex];

  // Keep the rail in sync if the user's real progress moves while they're
  // looking at it (e.g. they complete their profile in another tab).
  useEffect(() => {
    setSelectedId(currentStepId);
  }, [currentStepId]);

  const completedCount = useMemo(
    () => steps.filter((s) => statusByStep[s.id] === "complete").length,
    [steps, statusByStep],
  );

  // The rail is drawn as one segment per gap between nodes rather than a
  // single continuous fill. Progress through this product genuinely isn't
  // linear — someone can be generating drafts while their Organization
  // Profile is still incomplete — and a single bar would have to either
  // overstate or hide that. Segment-by-segment, the line tells the truth:
  // it lights up exactly where the work is actually done.
  const segments = useMemo(
    () =>
      steps.slice(0, -1).map((step, i) => ({
        key: `${step.id}-${steps[i + 1].id}`,
        index: i,
        filled:
          statusByStep[step.id] === "complete" && statusByStep[steps[i + 1].id] === "complete",
      })),
    [steps, statusByStep],
  );

  const selectStep = useCallback((id: string, { stopTour = true } = {}) => {
    setSelectedId(id);
    if (stopTour) setIsTouring(false);
  }, []);

  const goRelative = useCallback(
    (delta: number) => {
      const next = steps[Math.min(steps.length - 1, Math.max(0, selectedIndex + delta))];
      if (next) {
        selectStep(next.id);
        nodeRefs.current[next.id]?.focus();
      }
    },
    [selectedIndex, steps, selectStep],
  );

  // Auto-play tour. Advances until the last step, then stops on its own so the
  // module never loops distractingly in the corner of the user's eye.
  useEffect(() => {
    if (!isTouring || prefersReducedMotion) return;
    const timer = window.setTimeout(() => {
      if (selectedIndex >= steps.length - 1) {
        setIsTouring(false);
      } else {
        setSelectedId(steps[selectedIndex + 1].id);
      }
    }, TOUR_STEP_MS);
    return () => window.clearTimeout(timer);
  }, [isTouring, selectedIndex, steps, prefersReducedMotion]);

  // Scroll the active node into view on narrow screens where the rail scrolls.
  useEffect(() => {
    const node = nodeRefs.current[selectedId];
    const rail = railRef.current;
    if (!node || !rail) return;
    if (rail.scrollWidth <= rail.clientWidth) return;
    const target = node.offsetLeft - rail.clientWidth / 2 + node.clientWidth / 2;
    rail.scrollTo({ left: Math.max(0, target), behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [selectedId, prefersReducedMotion]);

  const onRailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      goRelative(1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      goRelative(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      selectStep(steps[0].id);
      nodeRefs.current[steps[0].id]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = steps[steps.length - 1];
      selectStep(last.id);
      nodeRefs.current[last.id]?.focus();
    }
  };

  return (
    <section
      className="rounded-xl border border-gray-200 bg-white overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Header */}
      <div className="px-5 sm:px-6 pt-6 pb-5 border-b border-gray-100 bg-gradient-to-br from-[#f6fefb] via-white to-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[11px] font-semibold uppercase tracking-wider text-teal-700"
                style={CABIN}
              >
                How it works
              </span>
              <span className="h-px w-8 bg-teal-200" aria-hidden="true" />
            </div>
            <h2 id="process-heading" className="text-xl sm:text-2xl text-gray-900" style={LUSTRIA}>
              The Great Grants Process
            </h2>
            <p className="mt-1.5 text-sm text-gray-600 max-w-2xl" style={CABIN}>
              Nine steps from signing up to hitting submit. Select any step to see what happens,
              why it matters, and what you walk away with.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span
              className="hidden sm:inline text-xs font-medium text-gray-500 tabular-nums"
              style={CABIN}
            >
              {completedCount} of {steps.length} complete
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (isTouring) {
                  setIsTouring(false);
                } else {
                  // Restart from the top if the tour already ran to the end.
                  if (selectedIndex >= steps.length - 1) setSelectedId(steps[0].id);
                  setIsTouring(true);
                }
              }}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 gap-1.5"
              style={CABIN}
              aria-pressed={isTouring}
            >
              {isTouring ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isTouring ? "Pause tour" : "Take the tour"}
            </Button>
          </div>
        </div>
      </div>

      {/* Phase legend */}
      <div className="px-5 sm:px-6 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PHASE_PROGRESS(steps, statusByStep).map(({ phase, done, total }) => (
            <div
              key={phase.id}
              className={`rounded-lg border px-3 py-2.5 transition-colors ${
                selected.phase === phase.id
                  ? "border-gray-300 bg-gray-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${PHASE_ACCENT[phase.id].dot}`}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-gray-900 truncate" style={CABIN}>
                    {phase.label}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-gray-500 tabular-nums shrink-0" style={CABIN}>
                  {done}/{total}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed" style={CABIN}>
                {phase.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The rail */}
      <div className="px-5 sm:px-6 pt-6 pb-2">
        <div ref={railRef} className="overflow-x-auto pb-2 -mx-1 px-1 scroll-smooth">
          <div
            role="tablist"
            aria-label="Great Grants process steps"
            aria-orientation="horizontal"
            onKeyDown={onRailKeyDown}
            className="relative grid grid-cols-9 min-w-[760px] pt-1"
          >
            {/* Track — inset by half a column so it starts and ends at node centers */}
            <div
              className="absolute top-[22px] h-0.5 bg-gray-200 rounded-full"
              style={{ left: `${100 / (steps.length * 2)}%`, right: `${100 / (steps.length * 2)}%` }}
              aria-hidden="true"
            />
            {/* One segment per gap, filled only where both ends are complete */}
            {segments.map((segment) => (
              <motion.div
                key={segment.key}
                className="absolute top-[22px] h-0.5 bg-teal-600 origin-left"
                style={{
                  left: `${((segment.index * 2 + 1) * 100) / (steps.length * 2)}%`,
                  width: `${100 / steps.length}%`,
                }}
                initial={false}
                animate={{ scaleX: segment.filled ? 1 : 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.45,
                  delay: prefersReducedMotion ? 0 : segment.index * 0.06,
                  ease: [0.4, 0, 0.2, 1],
                }}
                aria-hidden="true"
              />
            ))}

            {steps.map((step, index) => {
              const status = statusByStep[step.id] ?? "upcoming";
              const isSelected = step.id === selectedId;
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  ref={(el) => {
                    nodeRefs.current[step.id] = el;
                  }}
                  role="tab"
                  id={`process-tab-${step.id}`}
                  aria-selected={isSelected}
                  aria-controls="process-detail-panel"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectStep(step.id)}
                  className="group relative flex flex-col items-center gap-2 px-1 pt-0 text-center outline-none"
                >
                  <span className="relative flex items-center justify-center">
                    {/* Selection halo */}
                    {isSelected && (
                      <motion.span
                        layoutId="process-node-halo"
                        className="absolute -inset-1.5 rounded-full ring-2 ring-teal-600 ring-offset-2 ring-offset-white"
                        transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.4, 0, 0.2, 1] }}
                        aria-hidden="true"
                      />
                    )}
                    {/* Live pulse on the step the user should do next */}
                    {status === "current" && !prefersReducedMotion && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-teal-500/25"
                        animate={{ scale: [1, 1.55, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden="true"
                      />
                    )}
                    <motion.span
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                      className={`relative w-11 h-11 rounded-full flex items-center justify-center border-2 transition-colors ${
                        status === "complete"
                          ? "bg-teal-600 border-teal-600 text-white"
                          : status === "current"
                          ? "bg-white border-teal-600 text-teal-700"
                          : isSelected
                          ? "bg-white border-gray-400 text-gray-700"
                          : "bg-white border-gray-300 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-600"
                      }`}
                    >
                      {status === "complete" ? (
                        <Check className="w-5 h-5" strokeWidth={2.5} />
                      ) : (
                        <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
                      )}
                    </motion.span>
                    {/* Step number badge */}
                    <span
                      className={`absolute -bottom-1 -right-1 w-[18px] h-[18px] rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold tabular-nums ${
                        status === "upcoming" ? "bg-gray-200 text-gray-600" : "bg-gray-900 text-white"
                      }`}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                  </span>

                  <span
                    className={`text-[11px] leading-tight max-w-[92px] transition-colors ${
                      isSelected
                        ? "text-gray-900 font-semibold"
                        : status === "upcoming"
                        ? "text-gray-500"
                        : "text-gray-700 font-medium"
                    }`}
                    style={CABIN}
                  >
                    {step.navLabel}
                  </span>
                  <span className="sr-only">
                    Step {index + 1} of {steps.length}. {step.title}.{" "}
                    {status === "complete"
                      ? "Complete."
                      : status === "current"
                      ? "This is your next step."
                      : "Not started."}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      <div className="px-5 sm:px-6 pb-6 pt-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selected.id}
            id="process-detail-panel"
            role="tabpanel"
            aria-labelledby={`process-tab-${selected.id}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="rounded-xl border border-gray-200 bg-gray-50/70 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
              {/* Left: the story of this step */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-semibold ${
                      PHASE_ACCENT[selected.phase].chip
                    }`}
                    style={CABIN}
                  >
                    {PROCESS_PHASES.find((p) => p.id === selected.phase)?.label}
                  </span>
                  <span className="text-[11px] font-medium text-gray-500 tabular-nums" style={CABIN}>
                    Step {selected.order} of {steps.length}
                  </span>
                  <StatusPill status={statusByStep[selected.id] ?? "upcoming"} />
                </div>

                <h3 className="text-lg sm:text-xl text-gray-900 mb-1.5" style={LUSTRIA}>
                  {selected.title}
                </h3>
                <p className="text-[15px] text-teal-800 font-medium mb-3" style={CABIN}>
                  {selected.promise}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4" style={CABIN}>
                  {selected.summary}
                </p>

                <div className="rounded-lg bg-white border border-gray-200 p-3.5">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Flag className="w-3.5 h-3.5 text-gray-500" />
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wide text-gray-500"
                      style={CABIN}
                    >
                      Why this step matters
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed" style={CABIN}>
                    {selected.whyItMatters}
                  </p>
                </div>
              </div>

              {/* Right: the concrete payoff */}
              <div className="p-5 sm:p-6 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col">
                <span
                  className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-3"
                  style={CABIN}
                >
                  What you get
                </span>
                <ul className="space-y-2.5 mb-5">
                  {selected.value.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={prefersReducedMotion ? false : { opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: prefersReducedMotion ? 0 : 0.12 + i * 0.08, duration: 0.25 }}
                      className="flex items-start gap-2.5"
                    >
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-teal-700" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-gray-700 leading-relaxed" style={CABIN}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-600" style={CABIN}>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {selected.duration}
                    </span>
                  </div>
                  <div className="rounded-lg bg-teal-50 border border-teal-100 px-3 py-2.5">
                    <span
                      className="block text-[11px] font-semibold uppercase tracking-wide text-teal-700 mb-0.5"
                      style={CABIN}
                    >
                      You end up with
                    </span>
                    <span className="text-sm text-teal-900 font-medium" style={CABIN}>
                      {selected.outcome}
                    </span>
                  </div>
                  <Button
                    onClick={() => navigate(selected.cta.to)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                    style={CABIN}
                  >
                    {selected.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Panel footer — step-through controls */}
            <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-3 border-t border-gray-200 bg-white">
              <button
                onClick={() => goRelative(-1)}
                disabled={selectedIndex === 0}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:hover:text-gray-600 transition-colors"
                style={CABIN}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {selectedIndex > 0 ? steps[selectedIndex - 1].navLabel : "Previous"}
                </span>
                <span className="sm:hidden">Back</span>
              </button>

              <div className="flex items-center gap-1.5" aria-hidden="true">
                {steps.map((s) => (
                  <span
                    key={s.id}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s.id === selectedId ? "w-5 bg-teal-600" : "w-1.5 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => goRelative(1)}
                disabled={selectedIndex === steps.length - 1}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:hover:text-gray-600 transition-colors"
                style={CABIN}
              >
                <span className="hidden sm:inline">
                  {selectedIndex < steps.length - 1 ? steps[selectedIndex + 1].navLabel : "Next"}
                </span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: StepStatus }) {
  if (status === "complete") {
    return (
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-[11px] font-semibold text-green-700"
        style={CABIN}
      >
        <Check className="w-3 h-3" strokeWidth={3} />
        Complete
      </span>
    );
  }
  if (status === "current") {
    return (
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-600 text-[11px] font-semibold text-white"
        style={CABIN}
      >
        You are here
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-semibold text-gray-600"
      style={CABIN}
    >
      <Circle className="w-2.5 h-2.5" />
      Not started
    </span>
  );
}

/** Per-phase completion counts for the legend row. */
function PHASE_PROGRESS(steps: ProcessStep[], statusByStep: Record<string, StepStatus>) {
  return PROCESS_PHASES.map((phase) => {
    const inPhase = steps.filter((s) => s.phase === phase.id);
    return {
      phase,
      total: inPhase.length,
      done: inPhase.filter((s) => statusByStep[s.id] === "complete").length,
    };
  });
}
