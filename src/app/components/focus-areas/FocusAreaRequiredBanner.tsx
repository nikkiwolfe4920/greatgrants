import { AlertTriangle } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export interface FocusAreaRequiredBannerProps {
  /** Jumps to and highlights the Focus Areas field on the Legal Info tab. */
  onAddFocusAreas: () => void;
}

/**
 * Forces existing organizations that pre-date the Focus Areas requirement to
 * fill it in. Focus Areas is now a required field — this organization's
 * profile doesn't have any selected yet, so surface it up top (not just as
 * a checklist item) until at least one is added.
 *
 * Amber "action needed" styling distinguishes this from the neutral teal
 * info banners elsewhere on this page (e.g. ReadinessScoringBanner) — this
 * one represents missing required data, not just guidance.
 */
export function FocusAreaRequiredBanner({ onAddFocusAreas }: FocusAreaRequiredBannerProps) {
  return (
    <div
      role="alert"
      className="mb-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4"
    >
      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-amber-900 mb-1">Focus Areas required</p>
        <p className="text-sm text-amber-800 leading-relaxed">
          Focus Areas is now a required field on every organization profile — it powers grant
          matching when no program is selected and helps us report on the communities our
          nonprofits serve. Your profile doesn't have any selected yet. Please add at least one to
          keep your profile complete.
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
