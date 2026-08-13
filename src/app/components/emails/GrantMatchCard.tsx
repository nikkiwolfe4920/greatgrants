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
 * One ranked grant match, shared by both alert emails. Mirrors the Figma
 * card (photo + rank + title + amount/deadline/summary + View Details) but
 * reflows for narrow viewports: the fixed 164px side photo becomes a
 * full-width photo on top below `sm`, so nothing gets clipped or squeezed
 * on a phone-width inbox preview.
 */
export function GrantMatchCard({ match, href }: GrantMatchCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white sm:flex-row">
      <div className="h-40 w-full shrink-0 sm:h-auto sm:w-[164px]">
        <ImageWithFallback
          src={match.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="flex gap-2 text-base font-semibold text-gray-900">
          <span className="shrink-0 text-green-600">{match.rank}.</span>
          <span>{match.title}</span>
        </h3>
        <p className="text-sm leading-5 text-gray-600">{match.summary}</p>
        <p className="text-sm font-bold leading-5 text-gray-900">
          Amount: {match.amountLabel}
          <br />
          Deadline: {match.deadlineLabel}
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
