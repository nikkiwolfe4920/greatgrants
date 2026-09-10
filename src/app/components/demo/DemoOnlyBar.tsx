import { ArrowLeft, Eye } from "lucide-react";
import { useNavigate } from "react-router";

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;

/**
 * DemoOnlyBar — the full-width header that sits above *everything* on
 * /organization-demo (both SharedSidebar and the page content — see the
 * isLockedOrgDemo check in AppLayout, which mounts this above the sidebar
 * rather than the page mounting it itself) so there's no mistaking that
 * what's underneath is a demo, not the live workspace.
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
 * Distinct from DemoBanner.tsx: that one rides on top of the *real, fully
 * clickable* app during the public /marketing tour. This bar sits above a
 * page that has deliberately disabled its own navigation, so the back link
 * here is the one way out.
 */
export function DemoOnlyBar() {
  const navigate = useNavigate();

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

  return (
    <div
      className="relative z-30 w-full bg-gradient-to-b from-white to-white/85 backdrop-blur-[8px] shadow-[0_24px_40px_-28px_rgba(16,24,40,0.35)]"
      style={CABIN}
      data-demo-only-bar
    >
      <div className="flex h-20 w-full items-center justify-between gap-4 px-4 sm:px-8">
        {/* Left — back link (standing in for the Great Grants logo slot)
            immediately followed by the "this is a demo" context, so the
            whole story reads in one glance from the left edge. */}
        <div className="flex min-w-0 items-center gap-3">
          <button
            onClick={handleBack}
            className="flex shrink-0 items-center gap-2 rounded-[8px] px-4 py-[11px] text-[16px] leading-[19.2px] tracking-[0.5px] text-teal-600 transition-colors hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1"
          >
            <ArrowLeft size={18} strokeWidth={2} />
            Back
          </button>

          <div className="flex min-w-0 items-center gap-2 text-[#475467]">
            <Eye size={16} strokeWidth={2} className="shrink-0 text-[#94979c]" />
            <span className="truncate text-[14px] leading-[19.2px] tracking-[0.5px] sm:text-[16px]">
              This is a demo of Great Grants only.
            </span>
          </div>
        </div>

        {/* Right — Login / Create Your Free Account, ported from the Figma
            "Header / Nav" > Navigation component (node 14398:21796). */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => navigate("/signin")}
            className="flex items-center rounded-[8px] px-4 py-[11px] text-[16px] leading-[19.2px] tracking-[0.5px] text-[#475467] transition-colors hover:bg-[#f9fafb] hover:text-[#101828] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-1"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/subscribe/create-account")}
            className="flex items-center justify-center rounded-[8px] border border-[#0e9384] bg-[#107569] px-[18px] py-[10px] text-[16px] leading-6 tracking-[0.5px] text-white shadow-[0px_1px_0.5px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#0e9384] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
          >
            Create Your Free Account
          </button>
        </div>
      </div>
    </div>
  );
}
