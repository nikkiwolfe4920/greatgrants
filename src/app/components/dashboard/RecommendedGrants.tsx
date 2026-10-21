import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, MapPin, CalendarClock, Gauge, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { getRecommendedGrants } from "@/data/dashboardData";

/**
 * Recommended for you — a short mixed feed of the best grant matches across
 * all of the user's programs, so they can find funding without searching.
 *
 * DEV ANNOTATION
 * - Threshold: a grant appears only if its Grant Guru match score is >= 60%
 *   (enforced in getRecommendedGrants).
 * - The score is HIDDEN. It gates and orders the feed but is never rendered,
 *   and the header copy must not imply a visible score.
 * - Show 3–6 cards. "See more" → Grant Search (/search).
 * - States: Full (3–6), Partial (1–2), No results (has programs, none >= 60%),
 *   Loading (skeleton).
 * - Open: per-program vs. single org-level score (how the program tag is
 *   assigned); sort order (score vs. closing date).
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

function RecommendedSkeleton() {
  return (
    <ul className="divide-y divide-gray-100" aria-busy="true" aria-label="Loading recommended grants">
      {[0, 1, 2].map((i) => (
        <li key={i} className="p-5 sm:p-6 space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-8 w-28" />
        </li>
      ))}
    </ul>
  );
}

export function RecommendedGrants({ isLoading = false }: { isLoading?: boolean }) {
  const navigate = useNavigate();
  const recommendations = isLoading ? [] : getRecommendedGrants();

  return (
    <section className="rounded-xl border border-gray-200 bg-white" aria-labelledby="recommended-heading">
      <div className="flex items-center justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2 min-w-0">
          <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
          <h2 id="recommended-heading" className="text-lg text-gray-900" style={LUSTRIA}>
            Recommended for you
          </h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/search")}
          className="border-gray-300 text-gray-700 hover:bg-gray-50 shrink-0"
          style={CABIN}
        >
          See more
        </Button>
      </div>

      {isLoading && <RecommendedSkeleton />}

      {!isLoading && recommendations.length === 0 && (
        <div className="px-5 sm:px-6 py-10 text-center">
          <span className="mx-auto mb-3 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Search className="w-4 h-4 text-gray-500" />
          </span>
          <h3 className="text-[15px] font-semibold text-gray-900" style={CABIN}>
            No strong matches yet
          </h3>
          <p className="mt-1 text-sm text-gray-600 max-w-sm mx-auto" style={CABIN}>
            We don't see a close fit for your programs right now. Search all grants to explore on your own.
          </p>
          <Button
            size="sm"
            onClick={() => navigate("/search")}
            className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold"
            style={CABIN}
          >
            Search grants
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      )}

      {!isLoading && recommendations.length > 0 && (
        <ul className="divide-y divide-gray-100">
          {recommendations.map(({ grant, reason, signals, program }, index) => (
            <motion.li
              key={grant.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              <div className="p-5 sm:p-6 hover:bg-gray-50/70 transition-colors">
                <span
                  className="inline-block mb-2 px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-medium text-gray-700"
                  style={CABIN}
                >
                  {program}
                </span>

                <button onClick={() => navigate(`/grant/${grant.id}`)} className="text-left min-w-0 group block mb-2">
                  <h3
                    className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-teal-700 transition-colors line-clamp-2"
                    style={CABIN}
                  >
                    {grant.title}
                  </h3>
                </button>

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
      )}
    </section>
  );
}
