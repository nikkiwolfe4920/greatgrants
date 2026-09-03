import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Eye,
  Lightbulb,
  X,
} from "lucide-react";
import { useDemoMode } from "@/app/demo/useDemoMode";
import {
  DEMO_STOPS,
  nextStop as findNextStop,
  previousStop as findPreviousStop,
  stopForPath,
} from "@/app/demo/demoTour";

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;

// Colours and letter-spacing come from the marketing design language
// (src/app/marketing/design.ts) so the tour rail reads as part of /marketing
// rather than as app chrome that happens to be teal.

/**
 * DemoBanner — the tour rail that rides on top of the real app pages while a
 * public visitor is walking through the demo from /marketing.
 *
 * It does three jobs at once, and all three are the reason the walkthrough
 * converts rather than confuses:
 *
 *   1. **Says "demo" continuously.** A prospect clicking through a product
 *      they don't have an account for needs to know, on every screen, that the
 *      numbers belong to a sample organization. Unlabelled sample data reads
 *      as either a bug or somebody else's private data — both raise the
 *      skepticism this page exists to lower.
 *   2. **Keeps the tour navigable.** The visitor is free to click anything in
 *      the real sidebar; the banner still knows which stop they're on and
 *      offers the next one, so exploring never becomes getting lost.
 *   3. **Keeps the upsell one click away** from the moment of interest, rather
 *      than only at the bottom of a landing page they already left.
 *
 * Rendered from AppLayout so it appears on every authenticated-app route
 * without each page having to opt in.
 */
export function DemoBanner() {
  const {
    isDemo,
    visitedStopIds,
    visitedCount,
    totalStops,
    progressPercent,
    endDemo,
    markStopVisited,
  } = useDemoMode();
  const location = useLocation();
  const navigate = useNavigate();
  const [tipsOpen, setTipsOpen] = useState(false);

  const stop = stopForPath(location.pathname);
  const next = stop ? findNextStop(stop.id) : null;
  const previous = stop ? findPreviousStop(stop.id) : null;

  // A visitor who has wandered off the tour is offered the first screen they
  // haven't seen, not the beginning — clicking around the product shouldn't
  // cost them their place.
  const rejoinStop =
    DEMO_STOPS.find((candidate) => !visitedStopIds.includes(candidate.id)) ?? DEMO_STOPS[0];

  // Record the stop as seen so the tour on /marketing shows real progress
  // when the visitor goes back to it.
  useEffect(() => {
    if (isDemo && stop) markStopVisited(stop.id);
  }, [isDemo, stop, markStopVisited]);

  // Collapse the tip list when the visitor moves to another screen — the
  // tips belong to the stop, not to the session.
  useEffect(() => {
    setTipsOpen(false);
  }, [location.pathname]);

  if (!isDemo) return null;

  const handleExit = () => {
    endDemo();
    navigate("/marketing");
  };

  const openStopPath = (path: string) => navigate(path);

  return (
    <div
      className="sticky top-0 z-40 border-b border-[#0e9384]/25 bg-gradient-to-r from-[#f0fdf9] to-white"
      style={CABIN}
      data-demo-banner
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left — what you're looking at */}
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#107569] px-2.5 py-1 text-[11px] leading-[16px] font-semibold uppercase tracking-[0.5px] text-white">
            <Eye size={12} strokeWidth={2.5} />
            Demo
          </span>

          <div className="min-w-0">
            <p className="truncate text-[14px] leading-[20px] font-semibold text-[#101828]">
              {stop ? (
                <>
                  Stop {stop.order} of {totalStops} — {stop.title}
                </>
              ) : (
                <>You're exploring beyond the guided tour</>
              )}
            </p>
            <p className="mt-0.5 text-[12px] leading-[18px] text-[#475467]">
              Sample organization, sample data. Nothing you click here is saved or sent
              anywhere.
            </p>
          </div>

          {/* On narrow screens the exit sits up here rather than claiming a
              row of its own beneath the tour controls. */}
          <button
            onClick={handleExit}
            title="Exit the demo"
            aria-label="Exit the demo"
            className="ml-auto shrink-0 rounded-[8px] p-2 text-[#94979c] transition-colors hover:bg-white hover:text-[#475467] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1 lg:hidden"
          >
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>

        {/* Right — tour controls and the one CTA */}
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {stop && stop.whatToLookFor.length > 0 && (
            <button
              onClick={() => setTipsOpen((open) => !open)}
              aria-expanded={tipsOpen}
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#0e9384] bg-white px-3 py-2 text-[12px] leading-[18px] font-semibold tracking-[0.5px] text-[#107569] transition-colors hover:bg-[#f0fdf9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
            >
              <Lightbulb size={14} strokeWidth={2} />
              What to look for
              <ChevronDown
                size={14}
                strokeWidth={2.5}
                className={`transition-transform ${tipsOpen ? "rotate-180" : ""}`}
              />
            </button>
          )}

          {previous && (
            <button
              onClick={() => openStopPath(previous.path)}
              title={`Back to ${previous.title}`}
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#d0d5dd] bg-white px-3 py-2 text-[12px] leading-[18px] font-semibold tracking-[0.5px] text-[#475467] transition-colors hover:bg-[#f9fafb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
            >
              <ArrowLeft size={14} strokeWidth={2} />
              <span className="hidden sm:inline">{previous.navLabel}</span>
              <span className="sm:hidden">Back</span>
            </button>
          )}

          {/* Three cases: mid-tour, off-tour, and finished. */}
          {!stop ? (
            <button
              onClick={() => openStopPath(rejoinStop.path)}
              title={`Rejoin at ${rejoinStop.title}`}
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#d0d5dd] bg-white px-3 py-2 text-[12px] leading-[18px] font-semibold tracking-[0.5px] text-[#101828] transition-colors hover:bg-[#f9fafb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
            >
              Rejoin the tour
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          ) : next ? (
            <button
              onClick={() => openStopPath(next.path)}
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#d0d5dd] bg-white px-3 py-2 text-[12px] leading-[18px] font-semibold tracking-[0.5px] text-[#101828] transition-colors hover:bg-[#f9fafb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
            >
              Next: {next.navLabel}
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          ) : (
            <button
              onClick={() => navigate("/marketing")}
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#d0d5dd] bg-white px-3 py-2 text-[12px] leading-[18px] font-semibold tracking-[0.5px] text-[#101828] transition-colors hover:bg-[#f9fafb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
            >
              Back to the tour
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          )}

          <button
            onClick={() => navigate("/subscribe/create-account")}
            className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#0e9384] bg-[#107569] px-3.5 py-2 text-[12px] leading-[18px] font-semibold tracking-[0.5px] text-white shadow-[0px_1px_1px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#0e9384] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
          >
            Create free account
          </button>

          <button
            onClick={handleExit}
            title="Exit the demo"
            aria-label="Exit the demo"
            className="hidden rounded-[8px] p-2 text-[#94979c] transition-colors hover:bg-white hover:text-[#475467] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1 lg:block"
          >
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Progress through the tour — the visitor can see the walkthrough is
          finite, which is what makes them willing to start it. */}
      <div className="h-0.5 w-full bg-[#f0fdf9]">
        <motion.div
          className="h-full bg-[#0e9384]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence initial={false}>
        {tipsOpen && stop && (
          <motion.div
            key="demo-tips"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#f0fdf9] bg-white"
          >
            <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-8">
              <p className="text-[14px] leading-[20px] text-[#475467]">{stop.promise}</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {stop.whatToLookFor.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 rounded-[8px] border border-[#e4e7ec] bg-[#f9fafb] px-3 py-2.5"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#0e9384]" />
                    <span className="text-[12px] leading-[18px] text-[#475467]">{tip}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[12px] leading-[18px] text-[#94979c]">
                {visitedCount} of {totalStops} screens seen. Click anything you like — the
                sidebar and every card on the page are the real product.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
