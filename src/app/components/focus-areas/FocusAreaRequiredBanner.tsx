import { AlertTriangle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { FOCUS_AREA_MIN_SELECTIONS } from "@/lib/constants/focus-areas";

export interface FocusAreaRequiredBannerProps {
  /** Current number of focus areas selected — drives the copy below. */
  count: number;
  /** Jumps to and highlights the Focus Areas field on the Legal Info tab. */
  onAddFocusAreas: () => void;
}

/**
 * Forces existing organizations that pre-date the Focus Areas requirement to
 * fill it in. Focus Areas now requires at least FOCUS_AREA_MIN_SELECTIONS
 * selections — this organization's profile doesn't meet that yet, so
 * surface it up top (not just as a checklist item) until it does.
 *
 * Amber "action needed" styling distinguishes this from the neutral teal
 * info banners elsewhere on this page (e.g. ReadinessScoringBanner) — this
 * one represents missing required data, not just guidance.
 */
export function FocusAreaRequiredBanner({ count, onAddFocusAreas }: FocusAreaRequiredBannerProps) {
  const remaining = FOCUS_AREA_MIN_SELECTIONS - count;
  const statusCopy =
    count === 0
      ? "Your profile doesn't have any selected yet."
      : `Your profile only has ${count} selected.`;

  return (
    <div
      role="alert"
      data-figma-component="Alert"
      data-figma-variant="Warning"
      className="mb-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4"
    >
      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-amber-900 mb-1">Focus Areas required</p>
        <p className="text-sm text-amber-800 leading-relaxed">
          Focus Areas now requires at least {FOCUS_AREA_MIN_SELECTIONS} selections on every
          organization profile — it powers grant matching when no program is selected and helps us
          report on the communities our nonprofits serve. {statusCopy} Please add{" "}
          {remaining} more to keep your profile complete.
        </p>
      </div>
      <Button
        size="sm"
        onClick={onAddFocusAreas}
        className="bg-amber-600 hover:bg-amber-700 text-white flex-shrink-0"
      >
        Add Focus Areas
      </Button>
    </div>
  );
}
