import { Banknote, Calendar } from "lucide-react";
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
 * One ranked grant match, shared by both alert emails. Above `sm` this
 * keeps the Figma card's fixed 164px side photo; below `sm` it switches to
 * the same "photo on top, text beneath" shape as the /search grid-view
 * cards (GrantSearch.tsx) — h-48 full-width photo, rounded-xl corners,
 * 2-line-clamped title/description, and an icon + value metadata row —
 * so a user who already knows that card pattern from search recognizes it
 * here instead of getting a squeezed, inconsistent phone-width layout.
 */
export function GrantMatchCard({ match, href }: GrantMatchCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white sm:flex-row">
      <div className="h-48 w-full shrink-0 bg-gray-100 sm:h-auto sm:w-[164px]">
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
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="flex items-center gap-1.5 text-gray-600">
            <Banknote className="size-4 shrink-0" />
            <span className="font-semibold text-gray-900">{match.amountLabel}</span>
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <Calendar className="size-4 shrink-0" />
            <span className="text-gray-700">{match.deadlineLabel}</span>
          </span>
        </div>
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
