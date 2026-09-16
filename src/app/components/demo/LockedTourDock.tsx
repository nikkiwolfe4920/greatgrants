import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  LOCKED_DEMO_TOUR,
  getLockedDemoTourStep,
  getNextTourStep,
  getPreviousTourStep,
} from "../../demo/lockedDemoTour";

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

/** Shared look for the two round prev/next arrows either side of the dock —
 * white-on-green, matching the dock's own palette (see LockedTourDock). */
function DockArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      aria-label={direction === "prev" ? "Previous step" : "Next step"}
      title={
        disabled
          ? direction === "prev"
            ? "This is the first step of the demo"
            : "More steps are coming soon"
          : direction === "prev"
            ? "Previous step"
            : "Next step"
      }
      className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b5c53] ${
        disabled
          ? "cursor-not-allowed border-white/10 text-white/25"
          : "cursor-pointer border-white/25 text-white hover:scale-105 hover:border-white/50 hover:bg-white/10 active:scale-95"
      }`}
    >
      <Icon size={19} strokeWidth={2.25} />
    </button>
  );
}

/**
 * LockedTourDock — the floating "Step X of 6" + title module for the locked
 * demo tour, docked at the bottom-center of the screen. Previously this
 * lived as a compact stepper in the center of DemoOnlyBar's top bar; moved
 * here (and given its own green, white-icon, grey/white-text treatment) for
 * more visual hierarchy against the page content sitting underneath it.
 *
 * Two states:
 *   - Collapsed (default): a pill — prev arrow, icon + "Step X of Y" +
 *     title, next arrow. Tapping the pill (or the chevron riding its right
 *     edge) is the only way in; the prev/next arrows always act on the tour
 *     itself, never the expand/collapse.
 *   - Expanded: a card blooms open directly above the pill — a step
 *     progress dots row, the same icon/label/title at a larger size, and
 *     the step's `description` (its value proposition to the end user) —
 *     with a "Collapse" affordance at the bottom mirroring the chevron that
 *     opened it.
 *
 * Rendered by AppLayout as a fixed-position sibling of the page content
 * (not nested inside DemoOnlyBar), since "bottom-center of the screen" is a
 * viewport position, not something that belongs inside the top bar's own
 * layout flow.
 */
export function LockedTourDock() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const currentStep = getLockedDemoTourStep(location.pathname);
  const previousStep = getPreviousTourStep(location.pathname);
  const nextStep = getNextTourStep(location.pathname);

  // Always land on a fresh, collapsed pill for the new step — carrying an
  // expanded panel across a navigation would show the previous step's
  // description under the new step's title for a beat.
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  if (!currentStep) return null;
  const StepIcon = currentStep.icon;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-6 z-40 hidden justify-center px-4 lg:flex"
      style={CABIN}
    >
      <div className="pointer-events-auto flex flex-col items-center">
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 w-[min(90vw,380px)] rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e8f81] to-[#0b5c53] p-5 shadow-[0_20px_44px_-12px_rgba(6,42,38,0.55)]"
            >
              {/* Progress dots — filled for the current and completed
                  steps, dim for what's ahead, so the panel itself carries
                  the "how far through the tour am I" context. */}
              <div className="mb-3.5 flex items-center gap-1.5">
                {LOCKED_DEMO_TOUR.map((step) => (
                  <span
                    key={step.path}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      step.stepNumber === currentStep.stepNumber
                        ? "w-6 bg-white"
                        : step.stepNumber < currentStep.stepNumber
                          ? "w-1.5 bg-white/70"
                          : "w-1.5 bg-white/25"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-white/15">
                  <StepIcon size={18} strokeWidth={1.75} className="text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.5px] text-[#cdf0e8]">
                    Step {currentStep.stepNumber} of {currentStep.totalSteps}
                  </span>
                  <h3 className="mt-0.5 text-[16px] leading-[20px] text-white" style={LUSTRIA}>
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-[13px] leading-[19px] text-[#e3f6f1]">
                {currentStep.description}
              </p>

              <button
                onClick={() => setExpanded(false)}
                className="mt-3.5 flex w-full items-center justify-center gap-1 rounded-lg py-1.5 text-[12px] font-semibold text-[#cdf0e8] transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Collapse
                <ChevronDown size={14} strokeWidth={2.5} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-r from-[#107569] to-[#0b5c53] py-1.5 pr-2 pl-1.5 shadow-[0_16px_36px_-10px_rgba(6,42,38,0.55)]"
        >
          <DockArrowButton
            direction="prev"
            disabled={!previousStep}
            onClick={() => previousStep && navigate(previousStep.path)}
          />

          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse step details" : "Expand step details"}
            title={currentStep.description}
            className="flex min-w-0 items-center gap-2.5 rounded-full px-1.5 py-1 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-white/15">
              <StepIcon size={16} strokeWidth={1.75} className="text-white" />
            </div>
            <div className="flex min-w-0 flex-col items-start leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-[0.5px] text-[#cdf0e8]">
                Step {currentStep.stepNumber} of {currentStep.totalSteps}
              </span>
              <span className="max-w-[180px] truncate text-[14px] leading-[18px] text-white" style={LUSTRIA}>
                {currentStep.title}
              </span>
            </div>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-0.5 flex shrink-0 items-center text-[#cdf0e8]"
            >
              <ChevronUp size={14} strokeWidth={2.5} />
            </motion.span>
          </button>

          <DockArrowButton
            direction="next"
            disabled={!nextStep}
            onClick={() => nextStep && navigate(nextStep.path)}
          />
        </motion.div>
      </div>
    </div>
  );
}
