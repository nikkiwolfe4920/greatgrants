import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

export interface ExpressInterestUpsell {
  /** Short, high-contrast hook — not the generic "create an account" ask. */
  heading: string;
  body: React.ReactNode;
  /** 3–5 benefits framed around the application the guest just responded to. */
  benefits: string[];
  primaryCta: { label: string; to: string };
}

/** The "Submitted" screen (Figma 15494:25655), shared by every Express
 * interest flow — only the body copy, summary line and closing action
 * differ between them.
 *
 * `upsell` is guest-only: a signed-in member already has an account, so
 * PublicPartnerMemberInterestPage never passes it and gets the plain
 * confirmation card unchanged. When present, it renders as its own module
 * below the confirmation card — distinct from "you're on their list" so the
 * two messages (confirmation vs. pitch) don't compete — and the exploring
 * path (`cta`) steps down to a secondary, no-account-needed link underneath
 * the primary sign-up button. */
export function ExpressInterestSuccess({
  bodyText,
  summaryLabel = "You responded to",
  summaryLine,
  cta,
  upsell,
}: {
  bodyText: React.ReactNode;
  summaryLabel?: string;
  summaryLine: string;
  cta: { label: string; to: string };
  upsell?: ExpressInterestUpsell;
}) {
  return (
    <div className="flex w-full flex-col gap-4">
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
        {!upsell && (
          <Button
            asChild
            variant="outline"
            className="h-11 border-[#d5d7da] font-semibold text-[#414651] shadow-xs hover:bg-[#fafafa]"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <Link to={cta.to}>{cta.label}</Link>
          </Button>
        )}
      </div>

      {upsell && (
        <div className="flex w-full flex-col items-center gap-5 rounded-xl border border-[#b2e9d6] bg-[#f0fdfa] px-7 py-8 text-center">
          <div className="flex flex-col items-center gap-1.5">
            <h2
              className="max-w-[460px] text-xl leading-7 text-[#0d3a33]"
              style={{ fontFamily: "Lustria, serif" }}
            >
              {upsell.heading}
            </h2>
            <p className="max-w-[460px] text-sm leading-5 text-[#2e6d61]" style={{ fontFamily: "Cabin, sans-serif" }}>
              {upsell.body}
            </p>
          </div>
          <ul className="flex w-full max-w-[420px] flex-col gap-2.5 self-center text-left">
            {upsell.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-[#0e9384]" strokeWidth={2.5} />
                <span className="text-sm leading-5 text-[#1a473f]" style={{ fontFamily: "Cabin, sans-serif" }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col items-center gap-3">
            <Button
              asChild
              className="h-11 w-full max-w-[320px] bg-[#0e9384] font-semibold text-white shadow-xs hover:bg-[#107569]"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              <Link to={upsell.primaryCta.to}>
                {upsell.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Link
              to={cta.to}
              className="text-sm font-semibold text-[#2e6d61] transition-colors hover:text-[#0d3a33]"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
