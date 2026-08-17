import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { cn } from "@/app/components/ui/utils";
import {
  FOCUS_AREA_MAX_SELECTIONS,
  FOCUS_AREA_MIN_SELECTIONS,
  FOCUS_AREA_WARNING_THRESHOLD,
} from "@/lib/constants/focus-areas";
import { FocusAreasDropdown } from "./FocusAreasDropdown";
import { SelectedFocusAreaTags } from "./SelectedFocusAreaTags";

export interface FocusAreasFieldProps {
  /** Selected leaf/subcategory values only — parents are never part of this array. */
  value: string[];
  /**
   * Called with the full next selection immediately on every add/remove.
   * The caller is expected to persist this right away (no debounce, no
   * Save/Cancel) via the existing auto-save path, same as other
   * selection-type fields on this profile.
   */
  onChange: (next: string[]) => void;
  /** Matches the highlight styling other Legal Info fields use for deep-link/rail navigation. */
  highlighted?: boolean;
}

/**
 * Compact, auto-saving multi-select for organization-level Focus Areas.
 * Replaces the old full-page Focus Areas tab and the Congressional
 * District field on Legal Info — see FocusAreasDropdown for the taxonomy
 * browsing/search UI and SelectedFocusAreaTags for the chip preview below.
 */
export function FocusAreasField({ value, onChange, highlighted }: FocusAreasFieldProps) {
  const [open, setOpen] = useState(false);
  const atCap = value.length >= FOCUS_AREA_MAX_SELECTIONS;
  const nearCap = value.length >= FOCUS_AREA_WARNING_THRESHOLD && !atCap;
  const belowMinimum = value.length < FOCUS_AREA_MIN_SELECTIONS;

  const handleToggle = (leaf: string) => {
    const isSelected = value.includes(leaf);
    if (!isSelected && value.length >= FOCUS_AREA_MAX_SELECTIONS) {
      // The dropdown already disables + explains unselected options at the
      // cap; this is just a safety net against any stray call, not the
      // primary way the cap is communicated.
      return;
    }
    onChange(isSelected ? value.filter((v) => v !== leaf) : [...value, leaf]);
  };

  const handleRemoveTag = (leaf: string) => {
    onChange(value.filter((v) => v !== leaf));
  };

  return (
    <div className="col-span-2 space-y-1.5" data-field="focusAreas">
      <Label htmlFor="focusAreas">
        Focus Areas <span className="text-red-500">*</span>
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="focusAreas"
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between border-gray-300 bg-white font-normal",
              belowMinimum && !highlighted && "border-amber-300",
              highlighted && "ring-2 ring-teal-600 border-teal-600",
            )}
          >
            <span className={value.length === 0 ? "text-gray-500" : "text-gray-900"}>
              {value.length === 0
                ? "Select focus areas"
                : `${value.length} of ${FOCUS_AREA_MAX_SELECTIONS} selected`}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-gray-500 shrink-0 transition-transform",
                open && "rotate-180",
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[min(92vw,380px)] p-0">
          <FocusAreasDropdown value={value} onToggle={handleToggle} atCap={atCap} />
        </PopoverContent>
      </Popover>

      <p className="text-xs text-gray-600 leading-relaxed">
        Focus Areas help guide grant matching when you don't have a program selected. If a
        specific program is selected, that program's own focus areas are used for search instead.
      </p>

      {belowMinimum && (
        <p className="text-xs font-medium text-amber-700">
          Required — select at least {FOCUS_AREA_MIN_SELECTIONS} focus areas
          {value.length === 1 ? " (1 more needed)." : "."}
        </p>
      )}
      {nearCap && (
        <p className="text-xs font-medium text-amber-700">
          {value.length} of {FOCUS_AREA_MAX_SELECTIONS} selected — approaching the limit.
        </p>
      )}
      {atCap && (
        <p className="text-xs font-medium text-amber-700">
          You've selected the maximum of {FOCUS_AREA_MAX_SELECTIONS} focus areas. Remove one to
          select another.
        </p>
      )}

      <SelectedFocusAreaTags value={value} onRemove={handleRemoveTag} />
    </div>
  );
}
