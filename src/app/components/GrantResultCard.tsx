import { Banknote, Calendar, Eye, EyeOff, Globe, MinusCircle, PlusCircle, Target } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/**
 * Grant result card (list layout) — the single card used by Grant Search's
 * list view and the dashboard's "Recommended for you", so the two can't drift.
 *
 * Callers decide which match metrics apply: Project Fit always, Word Match
 * only where there's a search query to match against (omit `wordMatch` to
 * hide it), and the "Great Match" label only if `matchLabel` is passed.
 */

export interface GrantResultCardGrant {
  id: string;
  title: string;
  description: string;
  status: "Open" | "Pending" | "Closed";
  maxAmount: number;
  location: string;
  closeDate?: string;
  image?: string;
}

interface GrantResultCardProps {
  grant: GrantResultCardGrant;
  projectFit: number;
  wordMatch?: number;
  matchLabel?: { label: string; color: string };
  dismissed: boolean;
  watched: boolean;
  /** Pre-formatted, e.g. "2d ago". */
  lastViewedLabel?: string;
  locked?: boolean;
  /** Slot rendered in the tags row after the status badge (e.g. program link). */
  tagsExtra?: React.ReactNode;
  onOpen: () => void;
  onToggleDismiss: (e: React.MouseEvent) => void;
  onToggleWatch: (e: React.MouseEvent) => void;
}

function MatchBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[10px] text-gray-500 w-16">{label}</span>
      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-[10px] font-semibold text-gray-900 w-7 text-right">{value}%</span>
    </div>
  );
}

export function GrantResultCard({
  grant,
  projectFit,
  wordMatch,
  matchLabel,
  dismissed,
  watched,
  lastViewedLabel,
  locked = false,
  tagsExtra,
  onOpen,
  onToggleDismiss,
  onToggleWatch,
}: GrantResultCardProps) {
  return (
    <div
      onClick={onOpen}
      className={`bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all group overflow-hidden flex ${
        locked ? "cursor-not-allowed" : "cursor-pointer"
      } ${dismissed ? "opacity-60 hover:opacity-100" : ""}`}
      {...(locked ? { "aria-disabled": true } : {})}
    >
      {grant.image && (
        <div className="relative overflow-hidden bg-gray-100 flex-shrink-0 w-32 self-stretch">
          <ImageWithFallback
            src={grant.image}
            alt={grant.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-5 flex-1 min-w-0">
        <div className="mb-3">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1 min-w-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className="font-semibold text-gray-900 leading-snug group-hover:text-teal-700 transition-colors mb-2 truncate w-full">
                    {grant.title}
                  </h3>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={4} className="max-w-md z-50">
                  <p className="text-sm leading-relaxed">{grant.title}</p>
                </TooltipContent>
              </Tooltip>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{grant.description}</p>
            </div>

            <div className="flex-shrink-0 w-48">
              {matchLabel && (
                <Badge className={`text-xs font-semibold mb-2 ${matchLabel.color}`}>
                  <Target className="w-3 h-3 mr-1" />
                  {matchLabel.label}
                </Badge>
              )}
              <div className="space-y-1">
                <MatchBar label="Project Fit" value={projectFit} />
                {wordMatch !== undefined && <MatchBar label="Word Match" value={wordMatch} />}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Banknote className="w-4 h-4" />
            <span className="font-semibold text-gray-900">${grant.maxAmount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Globe className="w-4 h-4" />
            <span className="text-gray-700">{grant.location}</span>
          </div>
          {grant.closeDate && (
            <div className="flex items-center gap-1.5 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-gray-700">{grant.closeDate}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge
              className={`text-xs ${
                grant.status === "Open"
                  ? "bg-green-50 text-green-700 border-green-200"
                  : grant.status === "Pending"
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-gray-100 text-gray-600 border-gray-200"
              }`}
            >
              {grant.status}
            </Badge>
            {dismissed && (
              <Badge className="text-xs bg-gray-100 text-gray-600 border-gray-200">
                <MinusCircle className="w-3 h-3 mr-1" />
                Excluded
              </Badge>
            )}
            {tagsExtra}
          </div>

          <div className="flex gap-1.5 items-center">
            {lastViewedLabel && <span className="text-xs text-gray-500">Last viewed {lastViewedLabel}</span>}
            <div className="flex items-center gap-2 flex-wrap justify-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onToggleDismiss}
                    className={`gap-1.5 ${
                      dismissed
                        ? "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
                        : "border-gray-200 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                    }`}
                    aria-label={
                      dismissed
                        ? "Include — restore this grant to your results"
                        : "Exclude — move this grant down in results"
                    }
                  >
                    {dismissed ? <PlusCircle className="w-3.5 h-3.5" /> : <MinusCircle className="w-3.5 h-3.5" />}
                    {dismissed ? "Include" : "Exclude"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={4}>
                  <p className="text-sm">
                    {dismissed
                      ? "Bring this grant back into your normal results."
                      : "We'll move this down in your results. It's never deleted."}
                  </p>
                </TooltipContent>
              </Tooltip>
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleWatch}
                className="gap-1.5 border-gray-200 hover:border-teal-200 hover:bg-teal-50"
                aria-label={
                  watched ? "Unwatch — stop getting alerts for this grant" : "Watch — get alerts about this grant"
                }
              >
                {watched ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {watched ? "Unwatch" : "Watch"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
