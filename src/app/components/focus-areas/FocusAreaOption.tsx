import { CommandItem } from "@/app/components/ui/command";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { cn } from "@/app/components/ui/utils";
import { FOCUS_AREA_MAX_SELECTIONS } from "@/lib/constants/focus-areas";

interface FocusAreaOptionProps {
  /** Leaf/subcategory value — the only thing that ever gets selected or stored. */
  value: string;
  /** Parent category, shown as context under the label. Used in search results, where the option isn't already grouped under its parent's header. */
  parentContext?: string;
  isSelected: boolean;
  /** True once the 10-selection cap has been reached (affects unselected options only). */
  atCap: boolean;
  onToggle: (value: string) => void;
}

/** A single selectable leaf/subcategory row. Parents are never rendered with this component — they're disclosure-only (see FocusAreaParent). */
export function FocusAreaOption({
  value,
  parentContext,
  isSelected,
  atCap,
  onToggle,
}: FocusAreaOptionProps) {
  const disabled = atCap && !isSelected;

  const item = (
    <CommandItem
      value={value}
      disabled={disabled}
      onSelect={() => {
        if (disabled) return;
        onToggle(value);
      }}
      className={cn(
        "flex items-start gap-2.5 px-2 py-2.5 rounded-md cursor-pointer min-h-[40px]",
        "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
      )}
    >
      <Checkbox
        checked={isSelected}
        disabled={disabled}
        tabIndex={-1}
        className="mt-0.5 pointer-events-none shrink-0"
      />
      <span className="flex-1 min-w-0">
        <span className="block text-sm text-gray-900 leading-snug">{value}</span>
        {parentContext && (
          <span className="block text-xs text-gray-500 mt-0.5">{parentContext}</span>
        )}
      </span>
    </CommandItem>
  );

  // The disabled explanation is always visible elsewhere in the field (the
  // cap banner + helper text) — this tooltip is a supplemental, hover-only
  // affordance for desktop, not the only place the reason is explained.
  if (!disabled) return item;

  // CommandItem's own `data-[disabled=true]:pointer-events-none` (from the
  // shared ui/command.tsx styles) makes it transparent to hover, so the
  // TooltipTrigger has to sit on a plain wrapper around it rather than on
  // the CommandItem itself, or the tooltip would never fire.
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="block">{item}</span>
      </TooltipTrigger>
      <TooltipContent side="right">
        You've selected the maximum of {FOCUS_AREA_MAX_SELECTIONS} focus areas. Remove one to select another.
      </TooltipContent>
    </Tooltip>
  );
}
