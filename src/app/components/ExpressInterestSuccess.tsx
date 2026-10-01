import { Link } from "react-router";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

/** The "Submitted" screen (Figma 15494:25655), shared by every Express
 * interest flow — only the body copy, summary line and closing action
 * differ between them. */
export function ExpressInterestSuccess({
  bodyText,
  summaryLabel = "You responded to",
  summaryLine,
  cta,
}: {
  bodyText: React.ReactNode;
  summaryLabel?: string;
  summaryLine: string;
  cta: { label: string; to: string };
}) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-xl border border-[#e9eaeb] bg-white px-7 py-12 text-center">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#dcfae6]">
        <Check className="size-7 text-[#079455]" strokeWidth={2.5} />
      </div>
      <h1
        className="max-w-[520px] text-[28px] leading-9 text-[#181d27]"
        style={{ fontFamily: "Lustria, serif" }}
      >
        You're on their list
      </h1>
      <p
        className="max-w-[520px] text-base leading-6 text-[#414651]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        {bodyText}
      </p>
      <div className="flex w-full flex-col gap-1 rounded-lg bg-[#f9fafb] px-4 py-3.5 text-left">
        <p className="text-xs text-[#535862]" style={{ fontFamily: "Cabin, sans-serif" }}>
          {summaryLabel}
        </p>
        <p className="text-sm font-semibold text-[#181d27]" style={{ fontFamily: "Cabin, sans-serif" }}>
          {summaryLine}
        </p>
      </div>
      <Button
        asChild
        variant="outline"
        className="h-11 border-[#d5d7da] font-semibold text-[#414651] shadow-xs hover:bg-[#fafafa]"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        <Link to={cta.to}>{cta.label}</Link>
      </Button>
    </div>
  );
}
