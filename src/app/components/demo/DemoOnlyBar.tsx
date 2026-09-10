import { ArrowLeft, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { getNextTourStep, getPreviousTourStep, getLockedDemoTourStep } from "../../demo/lockedDemoTour";

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;

/** Shared look for the two round prev/next stepper buttons. Disabled means
 * "there is nothing before/after this in the tour" (not "locked demo"),
 * but gets the same not-allowed cursor as everything else on these pages. */
function StepArrowButton({
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
      className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1 ${
        disabled
          ? "cursor-not-allowed border-[#e4e7ec] text-[#d0d5dd]"
          : "cursor-pointer border-[#d0d5dd] text-[#475467] hover:scale-105 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 active:scale-95"
      }`}
    >
      <Icon size={18} strokeWidth={2.25} />
    </button>
  );
}

/**
 * DemoOnlyBar — the full-width header that sits above *everything* on a
 * locked walkthrough route (/organization-demo, /search-demo,
 * /org-detail-demo — see lockedDemoRoutes.ts), both SharedSidebar and the
 * page content, so there's no mistaking that what's underneath is a demo,
 * not the live workspace. AppLayout mounts it above the sidebar rather than
 * the page mounting it itself, precisely so it can span that full width on
 * every locked route.
 *
 * Ported from two pieces of the Figma "Header / Nav" component
 * (https://www.figma.com/design/AJQoDJAJZL2ItawgAfLYh3/Great-Grants-MVP?node-id=14398-21777):
 *   - node 14398:21777 for the bar itself — 80px height, white-to-white/85%
 *     blurred background, Cabin type. The "Great Grants home" logo slot is
 *     replaced with a back arrow, since there is nowhere else on this locked
 *     page to go, followed immediately by the demo-context message.
 *   - node 14398:21796 (the "Navigation" sub-component) for the Login /
 *     Create Your Free Account buttons, reused as-is in the top-right
 *     corner — same padding, gap, and colors as the design.
 *
 * The center of the bar is a compact step stepper — prev/next arrows
 * bracketing a step card (icon, "Step X of 6", title) — built from
 * lockedDemoTour.ts and scaled down from three Figma step-card designs
 * (nodes 14101:13562 / 14101:13625 / 14101:13675) to fit this 80px bar.
 * It lays out on a three-column grid (left / center / right), each column
 * getting an equal share of the remaining width, so the center card sits
 * at the bar's true visual center regardless of how wide the back-link and
 * Login/CTA clusters are — not just flex-space-between "center-ish".
 *
 * Distinct from DemoBanner.tsx: that one rides on top of the *real, fully
 * clickable* app during the public /marketing tour. This bar sits above a
 * page that has deliberately disabled its own navigation, so the back link
 * and stepper here are the only ways to move around.
 */
export function DemoOnlyBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // A viewer can land here directly (a shared link) with no in-app
    // history to pop, so fall back to the dashboard rather than stranding
    // them on a dead "back" click.
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const currentStep = getLockedDemoTourStep(location.pathname);
  const previousStep = getPreviousTourStep(location.pathname);
  const nextStep = getNextTourStep(location.pathname);
  const StepIcon = currentStep?.icon;

  return (
    <div
      className="relative z-30 w-full bg-gradient-to-b from-white to-white/85 backdrop-blur-[8px] shadow-[0_24px_40px_-28px_rgba(16,24,40,0.35)]"
      style={CABIN}
      data-demo-only-bar
    >
      <div className="grid h-20 w-full grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-8">
        {/* Left — back link (standing in for the Great Grants logo slot)
            immediately followed by the "this is a demo" context, so the
            whole story reads in one glance from the left edge. */}
        {/* No justify-self here — this grid item needs to actually stretch
            to fill its 1fr column so the truncating span below has a real
            constrained width to clip against; justify-self-start would let
            it size to its own (untruncated) content instead and overflow
            into the center column. */}
        <div className="flex min-w-0 items-center gap-3">
          <button
            onClick={handleBack}
            className="flex shrink-0 items-center gap-2 rounded-[8px] px-4 py-[11px] text-[16px] leading-[19.2px] tracking-[0.5px] text-teal-600 transition-colors hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1"
          >
            <ArrowLeft size={18} strokeWidth={2} />
            Back
          </button>

          <div className="hidden min-w-0 items-center gap-2 text-[#475467] lg:flex">
            <Eye size={16} strokeWidth={2} className="shrink-0 text-[#94979c]" />
            {/* flex-1 + min-w-0 are what let this actually truncate instead
                of overflowing past its grid column — a flex/grid item's
                min-width defaults to auto (content size), so without this
                "truncate" has no narrower box to clip against. */}
            <span className="min-w-0 flex-1 truncate text-[14px] leading-[19.2px] tracking-[0.5px] xl:text-[16px]">
              This is a demo of Great Grants only.
            </span>
          </div>
        </div>

        {/* Center — the locked-tour stepper, present only on routes that
            are actually part of lockedDemoTour.ts. Hidden below lg: three
            clusters plus a multi-part stepper has nowhere graceful to go
            on a narrow viewport, and the back link alone is still enough
            to get a mobile visitor out. */}
        {currentStep && StepIcon && (
          <div className="col-start-2 hidden items-center gap-2 justify-self-center rounded-full border border-[#e4e7ec] bg-white/70 py-1.5 pr-2 pl-1.5 shadow-[0px_1px_2px_rgba(16,24,40,0.06)] lg:flex">
            <StepArrowButton
              direction="prev"
              disabled={!previousStep}
              onClick={() => previousStep && navigate(previousStep.path)}
            />

            <div
              className="flex min-w-0 items-center gap-2.5 px-1"
              title={currentStep.description}
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-[#d0d5dd] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.1)]">
                <StepIcon size={16} strokeWidth={1.75} className="text-[#344054]" />
              </div>
              <div className="flex min-w-0 flex-col leading-tight">
                <span className="text-[10px] font-semibold tracking-[0.5px] text-[#94979c] uppercase">
                  Step {currentStep.stepNumber} of {currentStep.totalSteps}
                </span>
                <span
                  className="truncate text-[14px] leading-[18px] text-[#101828]"
                  style={{ fontFamily: "Lustria, serif" }}
                >
                  {currentStep.title}
                </span>
              </div>
            </div>

            <StepArrowButton
              direction="next"
              disabled={!nextStep}
              onClick={() => nextStep && navigate(nextStep.path)}
            />
          </div>
        )}

        {/* Right — Login / Create Your Free Account, ported from the Figma
            "Header / Nav" > Navigation component (node 14398:21796). */}
        {/* justify-end (not justify-self-end) — this item stretches to
            fill its 1fr column like the left one, then packs its own
            children against the column's right edge. */}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => navigate("/signin")}
            className="hidden items-center rounded-[8px] px-4 py-[11px] text-[16px] leading-[19.2px] tracking-[0.5px] text-[#475467] transition-colors hover:bg-[#f9fafb] hover:text-[#101828] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1 sm:flex"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/subscribe/create-account")}
            className="flex shrink-0 items-center justify-center rounded-[8px] border border-[#0e9384] bg-[#107569] px-[18px] py-[10px] text-[16px] leading-6 tracking-[0.5px] text-white shadow-[0px_1px_0.5px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#0e9384] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
          >
            {/* Same CTA, shorter label below sm — the full sentence and
                "← Back" no longer both fit on a phone-width screen. */}
            <span className="hidden sm:inline">Create Your Free Account</span>
            <span className="sm:hidden">Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  );
}
