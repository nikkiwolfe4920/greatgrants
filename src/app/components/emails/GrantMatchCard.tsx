import { Banknote, Calendar, Globe } from "lucide-react";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { GetAlertButton } from "./GetAlertButton";
import { SaveButton } from "./SaveButton";
import { GRANT_STATUS_BADGE_CLASS, type EmailGrantMatch } from "@/data/emailAlerts";

interface GrantMatchCardProps {
  match: EmailGrantMatch;
  /** Grant detail link. Defaults to the in-app grant detail route. */
  href?: string;
}

/**
 * One ranked grant match, shared by both alert emails. Built off the same
 * grant card used on /search (see GrantSearch.tsx and Figma node
 * 12988:32410) — photo, title, description, an icon + value metadata row
 * (amount/location/deadline), a status badge, and Save/Get Alert actions —
 * not a stripped-down summary of it. Above `sm` the photo sits in a fixed
 * 164px side column per the original email Figma spec; below `sm` it's a
 * full-width h-48 photo on top with everything else stacked beneath, so a
 * user who already knows the /search card recognizes this one instead of
 * getting a squeezed, inconsistent phone-width layout.
 */
export function GrantMatchCard({ match, href }: GrantMatchCardProps) {
  const detailHref = href ?? `/grant/${match.id}`;

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white sm:flex-row">
      <a
        href={detailHref}
        aria-label={match.title}
        className="block h-48 w-full shrink-0 bg-gray-100 sm:h-auto sm:w-[164px]"
      >
        <ImageWithFallback
          src={match.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </a>
      <div className="flex min-w-0 flex-1 flex-col gap-2 p-5">
        <h3 className="flex gap-2 text-lg font-semibold leading-snug text-gray-900">
          <span className="shrink-0 text-green-600">{match.rank}.</span>
          <a href={detailHref} className="line-clamp-2 min-w-0 flex-1 hover:text-teal-700 hover:underline">
            {match.title}
          </a>
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">{match.summary}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="flex items-center gap-1.5 text-gray-600">
            <Banknote className="size-4 shrink-0" />
            <span className="font-semibold text-gray-900">{match.amountLabel}</span>
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <Globe className="size-4 shrink-0" />
            {match.locationLabel}
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <Calendar className="size-4 shrink-0" />
            {match.deadlineLabel}
          </span>
        </div>
        <div>
          <Badge className={`text-xs ${GRANT_STATUS_BADGE_CLASS[match.status]}`}>{match.status}</Badge>
        </div>
        <div className="mt-1 flex flex-wrap items-center justify-end gap-2">
          <SaveButton grant={{ id: match.id, title: match.title }} />
          <GetAlertButton grant={{ id: match.id, title: match.title }} />
        </div>
      </div>
    </div>
  );
}
