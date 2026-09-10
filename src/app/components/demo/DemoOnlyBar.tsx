import { ArrowLeft, Eye } from "lucide-react";
import { useNavigate } from "react-router";

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;

/**
 * DemoOnlyBar — the locked-page header for /organization-demo (and any
 * future page that duplicates a real screen into a walkthrough a viewer
 * can't navigate away from).
 *
 * Ported from the Figma "Header / Nav" component
 * (node 14398:21777, https://www.figma.com/design/AJQoDJAJZL2ItawgAfLYh3/Great-Grants-MVP?node-id=14398-21777)
 * — same 80px height, white-to-white/85% blurred background, 1200px
 * container and Cabin type — but adapted for this use rather than copied
 * verbatim: the "Great Grants home" logo slot is replaced with a back
 * arrow (there is nowhere else on this locked page to go), and the
 * Login / Create Account buttons are replaced with the one thing this bar
 * exists to say — that the page below it is a demo, not a live workspace.
 *
 * Distinct from DemoBanner.tsx: that one rides on top of the *real,
 * fully-clickable* app during the public /marketing tour. This bar sits on
 * top of a page that has deliberately disabled its own navigation, so a
 * viewer's only way out is the back link this bar provides.
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
      className="sticky top-0 z-30 border-b border-[#e4e7ec] bg-gradient-to-b from-white to-white/85 backdrop-blur-[8px]"
      style={CABIN}
      data-demo-only-bar
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-8">
        {/* Left — back arrow stands in for the Great Grants logo, since
            there is nothing else on this locked page to navigate to. */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 rounded-[8px] px-4 py-[11px] text-[16px] leading-[19.2px] tracking-[0.5px] text-[#475467] transition-colors hover:bg-[#f9fafb] hover:text-[#101828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-1"
        >
          <ArrowLeft size={18} strokeWidth={2} />
          Back
        </button>

        {/* Right — the one thing this bar exists to say. */}
        <div className="flex items-center gap-2 text-[#475467]">
          <Eye size={16} strokeWidth={2} className="shrink-0 text-[#94979c]" />
          <span className="text-[14px] leading-[19.2px] tracking-[0.5px] sm:text-[16px]">
            This is a demo of Great Grants only.
          </span>
        </div>
      </div>
    </div>
  );
}
