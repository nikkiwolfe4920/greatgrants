import { X } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { FOCUS_AREA_PARENT_ORDER, getFocusAreaParent } from "@/lib/constants/focus-areas";

interface SelectedFocusAreaTagsProps {
  /** Selected leaf values, in selection order. */
  value: string[];
  onRemove: (leaf: string) => void;
}

/**
 * Removable tag/chip preview of the selected Focus Areas, grouped by parent
 * category so cross-category selections stay readable at both 1-2 and 10
 * selections. Removing a tag calls onRemove directly — there is no separate
 * save step here, the caller wires this straight into the auto-save.
 */
export function SelectedFocusAreaTags({ value, onRemove }: SelectedFocusAreaTagsProps) {
  if (value.length === 0) return null;

  const byParent = new Map<string, string[]>();
  for (const leaf of value) {
    const parent = getFocusAreaParent(leaf) ?? "Other";
    const existing = byParent.get(parent);
    if (existing) {
      existing.push(leaf);
    } else {
      byParent.set(parent, [leaf]);
    }
  }

  // Render groups in taxonomy order (not selection order) so the grouping
  // stays stable as the user adds/removes tags.
  const orderedParents = FOCUS_AREA_PARENT_ORDER.filter((parent) => byParent.has(parent));
  if (byParent.has("Other")) orderedParents.push("Other");

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1" role="list" aria-label="Selected Focus Areas">
      {orderedParents.map((parent) => (
        <div key={parent} className="flex flex-wrap items-start gap-1.5 max-w-full">
          <span className="text-xs font-medium text-gray-500 mt-1 shrink-0">{parent}:</span>
          <div className="flex flex-wrap gap-1.5 min-w-0">
            {byParent.get(parent)!.map((leaf) => (
              <Badge
                key={leaf}
                variant="secondary"
                className="bg-white border border-teal-300 text-teal-700 hover:bg-teal-50 max-w-[240px]"
              >
                <span className="truncate">{leaf}</span>
                <button
                  type="button"
                  onClick={() => onRemove(leaf)}
                  aria-label={`Remove ${leaf}`}
                  className="ml-1 hover:bg-teal-200 rounded-full p-0.5 shrink-0"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
