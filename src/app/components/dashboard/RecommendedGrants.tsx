import { useNavigate } from "react-router";
import { useState } from "react";
import { Sparkles, ArrowRight, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { GrantResultCard } from "../GrantResultCard";
import { StopWatchingDialog } from "../StopWatchingDialog";
import { getRecommendedGrants } from "@/data/dashboardData";
import { usePublishedPrograms } from "@/hooks/usePublishedPrograms";
import { useGrantAlerts } from "@/hooks/useGrantAlerts";
import { useDismissedGrants } from "@/hooks/useDismissedGrants";

/**
 * Recommended for you — a short mixed feed of the best grant matches across
 * all of the user's programs, so they can find funding without searching.
 *
 * DEV ANNOTATION
 * - Threshold: a grant appears only if its Project Fit is >= 60%
 *   (enforced in getRecommendedGrants).
 * - Cards are the shared GrantResultCard used by Grant Search, with Project Fit only
 *   (Word Match isn't relevant here) and a teal program link.
 * - Show 3–6 cards. "See more" → Grant Search (/search).
 * - States: Full (3–6), Partial (1–2), No results (has programs, none >= 60%),
 *   Loading (skeleton).
 * - Open: per-program vs. single org-level score (how the program tag is
 *   assigned); sort order (score vs. closing date).
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

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

function lastViewedLabel(grantId: string): string | undefined {
  try {
    const recent = JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]") as Array<{
      id: string;
      lastViewed?: number;
    }>;
    const ts = recent.find((g) => g.id === grantId)?.lastViewed;
    if (!ts) return undefined;
    const diff = Date.now() - ts;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
  } catch {
    return undefined;
  }
}

export function RecommendedGrants({ isLoading = false }: { isLoading?: boolean }) {
  const navigate = useNavigate();
  const recommendations = isLoading ? [] : getRecommendedGrants();
  const publishedPrograms = usePublishedPrograms();
  const { isGrantAlertEnabled, setAlertEnabled, removeAlert } = useGrantAlerts();
  const { isGrantDismissed, dismissGrant, restoreGrant } = useDismissedGrants();
  const [grantToStopWatching, setGrantToStopWatching] = useState<{ id: string; title: string } | null>(null);

  // Program name for the card's program link: the published program matching
  // the card's program, else a published program in rotation (placeholder
  // until Grant Guru returns a program per grant). No published programs →
  // no link.
  const forProgram = (program: string, index: number): string | null => {
    if (publishedPrograms.length === 0) return null;
    const match = publishedPrograms.find((p) => p.title.toLowerCase() === program.toLowerCase());
    return (match ?? publishedPrograms[index % publishedPrograms.length]).title;
  };

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
        <ul className="space-y-3 p-5 sm:p-6">
          {recommendations.map(({ grant, program, projectFit }, index) => {
            const programName = forProgram(program, index);
            const dismissed = isGrantDismissed(grant.id);
            return (
              <li key={grant.id}>
                <GrantResultCard
                  grant={grant}
                  projectFit={projectFit}
                  titleMaxChars={106}
                  dismissed={dismissed}
                  watched={isGrantAlertEnabled(grant.id)}
                  lastViewedLabel={lastViewedLabel(grant.id)}
                  onOpen={() => navigate(`/grant/${grant.id}`)}
                  tagsExtra={
                    programName && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/project-details");
                        }}
                        className="text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline"
                        style={CABIN}
                      >
                        {programName}
                      </button>
                    )
                  }
                  onToggleDismiss={(e) => {
                    e.stopPropagation();
                    if (dismissed) restoreGrant(grant.id, { grantTitle: grant.title });
                    else dismissGrant(grant, "not-relevant");
                  }}
                  onToggleWatch={(e) => {
                    e.stopPropagation();
                    if (isGrantAlertEnabled(grant.id)) setGrantToStopWatching(grant);
                    else setAlertEnabled(grant, true);
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}

      <StopWatchingDialog
        open={grantToStopWatching !== null}
        onOpenChange={(open) => !open && setGrantToStopWatching(null)}
        onConfirm={() => {
          if (grantToStopWatching) removeAlert(grantToStopWatching.id, { grantTitle: grantToStopWatching.title });
          setGrantToStopWatching(null);
        }}
      />
    </section>
  );
}
