import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, MapPin, CalendarClock, Gauge } from "lucide-react";
import { Button } from "../ui/button";
import { getRecommendedGrants } from "@/data/dashboardData";

/**
 * Recommended grants.
 *
 * Every card answers "why am I seeing this?" before it asks for a click.
 * A recommendation the user can't interrogate is a recommendation they won't
 * trust — so the match reason and the specific signals behind it sit above
 * the fold on each card, and stretch fits are labeled as stretch fits rather
 * than quietly padded into the list.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

function formatAmount(amount: number): string {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000;
    return `$${millions % 1 === 0 ? millions : millions.toFixed(1)}M`;
  }
  if (amount >= 1_000) return `$${Math.round(amount / 1_000)}K`;
  return `$${amount}`;
}

const DIFFICULTY_CLASSES: Record<string, string> = {
  "D.I.Y.": "bg-green-50 text-green-700 border-green-200",
  "Might Need Help": "bg-orange-50 text-orange-700 border-orange-200",
  "Expert Assistance": "bg-red-50 text-red-700 border-red-200",
};

export function RecommendedGrants() {
  const navigate = useNavigate();
  const recommendations = getRecommendedGrants();

  return (
    <section className="rounded-xl border border-gray-200 bg-white" aria-labelledby="recommended-heading">
      <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
            <h2 id="recommended-heading" className="text-lg text-gray-900" style={LUSTRIA}>
              Recommended for you
            </h2>
          </div>
          <p className="mt-0.5 text-sm text-gray-600" style={CABIN}>
            Scored against your organization profile and published programs.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/search")}
          className="border-gray-300 text-gray-700 hover:bg-gray-50 shrink-0"
          style={CABIN}
        >
          See all
        </Button>
      </div>

      <ul className="divide-y divide-gray-100">
        {recommendations.map(({ grant, reason, signals }, index) => (
          <motion.li
            key={grant.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
          >
            <div className="p-5 sm:p-6 hover:bg-gray-50/70 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <button onClick={() => navigate(`/grant/${grant.id}`)} className="text-left min-w-0 group">
                  <h3
                    className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-teal-700 transition-colors line-clamp-2"
                    style={CABIN}
                  >
                    {grant.title}
                  </h3>
                </button>
                <div className="shrink-0 text-right">
                  <span className="block text-sm font-semibold text-teal-700 tabular-nums" style={CABIN}>
                    {grant.relevance.toFixed(0)}%
                  </span>
                  <span className="block text-[10px] uppercase tracking-wide text-gray-500" style={CABIN}>
                    match
                  </span>
                </div>
              </div>

              {/* Why this grant */}
              <p className="text-sm text-gray-700 leading-relaxed mb-2.5" style={CABIN}>
                {reason}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {signals.map((signal) => (
                  <span
                    key={signal}
                    className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-[11px] font-medium text-teal-800"
                    style={CABIN}
                  >
                    {signal}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3.5 text-xs text-gray-600" style={CABIN}>
                <span className="font-semibold text-gray-900">Up to {formatAmount(grant.maxAmount)}</span>
                <span className="inline-flex items-center gap-1">
                  <CalendarClock className="w-3.5 h-3.5 text-gray-400" />
                  Closes {grant.closeDate}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  {grant.location}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[11px] font-medium ${
                    DIFFICULTY_CLASSES[grant.difficulty] ?? "bg-gray-50 text-gray-700 border-gray-200"
                  }`}
                >
                  <Gauge className="w-3 h-3" />
                  {grant.difficulty}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => navigate(`/grant/${grant.id}`)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                  style={CABIN}
                >
                  View grant
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate("/eligibility-assessment")}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  style={CABIN}
                >
                  Check eligibility
                </Button>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
