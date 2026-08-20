import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AlertUpdateList } from "./AlertUpdateList";
import type { AlertDigestSection } from "@/data/emailAlerts";

/**
 * Figma node 13310:9565 — "Weekly Alert Digest" watched-grant card.
 *
 * One bordered card per watched grant that changed this week: its top match
 * doubles as the card's photo/summary/amount/deadline (a "grant" alert
 * watches one specific grant already found, so its best current match IS
 * the thing to show), a "what's changed" feed, and a View Details / Stop
 * watching action row. Grants with no changes this week skip this card
 * entirely and get folded into the digest's single rollup card instead —
 * see NoChangesCard in WeeklyAlertDigestEmail.
 */
export function WatchedGrantCard({ section }: { section: AlertDigestSection }) {
  const topMatch = section.matches[0];

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {topMatch && (
        <div className="h-48 w-full shrink-0 bg-gray-100">
          <ImageWithFallback src={topMatch.image} alt="" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-base font-semibold leading-snug text-gray-900">{section.alertName}</h3>
        {topMatch && (
          <>
            <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">{topMatch.summary}</p>
            <p className="text-sm font-bold text-gray-900">
              Amount: {topMatch.amountLabel} Deadline: {topMatch.deadlineLabel}
            </p>
          </>
        )}

        {section.updates.length > 0 && (
          <div className="mt-2 rounded-xl bg-gray-50 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              What&rsquo;s changed
            </p>
            <AlertUpdateList updates={section.updates} />
          </div>
        )}

        <div className="mt-1 flex items-center justify-between gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={topMatch ? `/grant/${topMatch.id}` : "#"}>View Details</a>
          </Button>
          <a href="#" className="text-xs font-medium text-teal-700 underline hover:text-teal-800">
            Stop watching
          </a>
        </div>
      </div>
    </div>
  );
}
