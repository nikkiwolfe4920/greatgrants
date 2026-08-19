import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { GetAlertButton } from "./GetAlertButton";
import type { EmailGrantMatch } from "@/data/emailAlerts";

interface GrantMatchCardProps {
  match: EmailGrantMatch;
  /** Grant detail link. Defaults to the in-app grant detail route. */
  href?: string;
}

/**
 * One ranked grant match, shared by both alert emails.
 *
 * Figma node 13238:6290 — always a full-width h-48 top photo (never the
 * side-by-side layout the card used before) with rank + title, a
 * 2-line-clamped description, and a single bold "Amount: … Deadline: …"
 * line in place of separate icon rows, so the layout is identical at any
 * inbox width instead of reflowing between desktop and mobile shapes.
 */
export function GrantMatchCard({ match, href }: GrantMatchCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="h-48 w-full shrink-0 bg-gray-100">
        <ImageWithFallback
          src={match.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 min-w-0">
        <h3 className="flex gap-2 text-base font-semibold leading-snug text-gray-900">
          <span className="shrink-0 text-green-600">{match.rank}.</span>
          <span className="line-clamp-2">{match.title}</span>
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">{match.summary}</p>
        <p className="text-sm font-bold text-gray-900">
          Amount: {match.amountLabel} Deadline: {match.deadlineLabel}
        </p>
        <div className="mt-1 flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={href ?? `/grant/${match.id}`}>View Details</a>
          </Button>
          <GetAlertButton grant={{ id: match.id, title: match.title }} />
        </div>
      </div>
    </div>
  );
}
