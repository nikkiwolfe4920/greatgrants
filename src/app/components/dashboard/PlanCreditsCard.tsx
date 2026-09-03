import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { FileText, ClipboardCheck, MessageSquareQuote, Clock, ArrowUpRight, Infinity as InfinityIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useCreditUsage, type CreditMeter } from "@/hooks/useCreditUsage";

/**
 * Plan & credits — the Dashboard's expanded view of the cream credits module
 * in the left nav (SharedSidebar.tsx).
 *
 * Both surfaces read the same `useCreditUsage` record, so "3 Applications
 * Generated / 0 remaining credits" is one number rendered twice, never two
 * numbers maintained separately. The warm palette is shared on purpose: the
 * user should recognize this as the same thing they see in the nav.
 *
 * Where the sidebar shows only the headline application count (it has ~200px
 * to work with), this card breaks out every metered resource on the tier and
 * turns an exhausted allowance into a clear next move rather than a dead end.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

interface MeterRowProps {
  label: string;
  icon: typeof FileText;
  meter: CreditMeter;
  /** Singular noun for the "N left" line, e.g. "application". */
  noun: string;
  /** Plural form, for nouns where adding "s" is wrong (pass → passes). */
  plural: string;
}

function MeterRow({ label, icon: Icon, meter, noun, plural }: MeterRowProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="inline-flex items-center gap-1.5 min-w-0">
          <Icon className="w-3.5 h-3.5 text-[#7a5b02] shrink-0" />
          <span className="text-xs font-semibold text-[#181d27] truncate" style={CABIN}>
            {label}
          </span>
        </span>
        <span className="text-xs font-semibold text-[#4a5565] tabular-nums shrink-0" style={CABIN}>
          {meter.isUnlimited ? (
            <span className="inline-flex items-center gap-1 text-[#00786f]">
              <InfinityIcon className="w-3.5 h-3.5" />
              Unlimited
            </span>
          ) : (
            `${meter.used} of ${meter.limit} used`
          )}
        </span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-[#fef7c3] overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${meter.isUnlimited ? "bg-[#00786f]" : "bg-[#ca8504]"}`}
          initial={{ width: 0 }}
          animate={{ width: `${meter.percentUsed}%` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
      <p className="mt-1 text-[11px] text-[#4a5565]" style={CABIN}>
        {meter.isUnlimited
          ? `Included with your plan — use as many ${plural} as you need.`
          : meter.remaining === 0
          ? `No ${noun} credits left this period.`
          : `${meter.remaining} ${meter.remaining === 1 ? noun : plural} remaining.`}
      </p>
    </div>
  );
}

export function PlanCreditsCard() {
  const navigate = useNavigate();
  const { plan, nextPlan, resetDate, applications, eligibility, coaching } = useCreditUsage();

  const outOfApplications = applications.isExhausted;

  return (
    <section
      className="rounded-xl border border-[#feee95] bg-[#fffefa] overflow-hidden"
      aria-labelledby="plan-heading"
    >
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="min-w-0">
            <h2 id="plan-heading" className="text-base text-gray-900" style={LUSTRIA}>
              Plan &amp; credits
            </h2>
            <p className="mt-0.5 text-xs text-[#4a5565]" style={CABIN}>
              You're on the{" "}
              <span className="font-semibold text-[#181d27]">{plan.name}</span> plan.
            </p>
          </div>
          <button
            onClick={() => navigate("/settings")}
            className="text-xs font-semibold text-[#00786f] hover:underline shrink-0 inline-flex items-center gap-0.5"
            style={CABIN}
          >
            Manage Plan
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Headline: the two numbers the nav module shows, at full size */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg bg-white border border-[#feee95] px-3 py-2.5">
            <span className="block text-2xl font-semibold text-[#181d27] tabular-nums leading-none" style={CABIN}>
              {applications.used}
            </span>
            <span className="block mt-1 text-[11px] text-[#4a5565] leading-snug" style={CABIN}>
              Applications generated
            </span>
          </div>
          <div className="rounded-lg bg-white border border-[#feee95] px-3 py-2.5">
            <span
              className={`block text-2xl font-semibold tabular-nums leading-none ${
                outOfApplications ? "text-[#ca8504]" : "text-[#181d27]"
              }`}
              style={CABIN}
            >
              {applications.isUnlimited ? "∞" : applications.remaining}
            </span>
            <span className="block mt-1 text-[11px] text-[#4a5565] leading-snug" style={CABIN}>
              Credits remaining
            </span>
          </div>
        </div>

        <div className="space-y-3.5">
          <MeterRow
            label="AI applications"
            icon={FileText}
            meter={applications}
            noun="application"
            plural="applications"
          />
          <MeterRow
            label="Eligibility assessments"
            icon={ClipboardCheck}
            meter={eligibility}
            noun="assessment"
            plural="assessments"
          />
          <MeterRow
            label="AI coaching passes"
            icon={MessageSquareQuote}
            meter={coaching}
            noun="pass"
            plural="passes"
          />
        </div>
      </div>

      {/* Footer — renewal, plus the upgrade path when the allowance is spent */}
      <div className="border-t border-[#feee95] px-5 py-3">
        {outOfApplications && nextPlan ? (
          <div>
            <p className="text-xs text-[#4a5565] leading-relaxed mb-2.5" style={CABIN}>
              <span className="font-semibold text-[#181d27]">Ready for the next one?</span>{" "}
              {nextPlan.tagline}
            </p>
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1 text-[11px] text-[#4a5565]" style={CABIN}>
                <Clock className="w-3 h-3 shrink-0" />
                Resets {resetDate}
              </span>
              <Button
                size="sm"
                onClick={() => navigate("/settings")}
                className="bg-[#ca8504] hover:bg-[#a86e03] text-white font-semibold shrink-0"
                style={CABIN}
              >
                Upgrade plan
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1 text-xs text-[#4a5565]" style={CABIN}>
              <Clock className="w-3 h-3 shrink-0" />
              Resets {resetDate}
            </span>
            <button
              onClick={() => navigate("/settings")}
              className="text-xs font-semibold text-[#00786f] hover:underline shrink-0"
              style={CABIN}
            >
              Manage Plan
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
