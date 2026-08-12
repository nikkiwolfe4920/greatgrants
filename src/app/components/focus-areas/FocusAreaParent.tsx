import { ChevronRight } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { FOCUS_AREA_INITIAL_VISIBLE_CHILDREN } from "@/lib/constants/focus-areas";
import { FocusAreaOption } from "./FocusAreaOption";

interface FocusAreaParentProps {
  parent: string;
  /** This parent's leaf values, in taxonomy display order. */
  options: string[];
  /** All currently selected leaf values (across every parent). */
  selectedValues: string[];
  expanded: boolean;
  onToggleExpand: () => void;
  showAll: boolean;
  onShowAll: () => void;
  atCap: boolean;
  onToggleLeaf: (value: string) => void;
}

/**
 * A parent category row. This is a disclosure control ONLY — it is never
 * selectable, never renders a checkbox (no tri-state/indeterminate, no
 * select-all/clear-all here), and only one parent can be expanded at a
 * time (enforced by the caller via `expanded`/`onToggleExpand`).
 */
export function FocusAreaParent({
  parent,
  options,
  selectedValues,
  expanded,
  onToggleExpand,
  showAll,
  onShowAll,
  atCap,
  onToggleLeaf,
}: FocusAreaParentProps) {
  const selectedCount = options.filter((child) => selectedValues.includes(child)).length;
  const visibleChildren = showAll
    ? options
    : options.slice(0, FOCUS_AREA_INITIAL_VISIBLE_CHILDREN);
  const hasMore = !showAll && options.length > visibleChildren.length;

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        type="button"
        onClick={onToggleExpand}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between gap-2 px-2 py-2.5 min-h-[44px] text-left rounded-md hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-900 min-w-0">
          <ChevronRight
            className={cn(
              "w-4 h-4 text-gray-400 shrink-0 transition-transform",
              expanded && "rotate-90",
            )}
          />
          <span className="truncate">{parent}</span>
        </span>
        {selectedCount > 0 && (
          <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full shrink-0">
            {selectedCount} selected
          </span>
        )}
      </button>

      {expanded && (
        <div className="pb-2 pl-2">
          {visibleChildren.map((child) => (
            <FocusAreaOption
              key={child}
              value={child}
              isSelected={selectedValues.includes(child)}
              atCap={atCap}
              onToggle={onToggleLeaf}
            />
          ))}
          {hasMore && (
            <button
              type="button"
              onClick={onShowAll}
              className="w-full text-left px-2 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              Show all {options.length}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
