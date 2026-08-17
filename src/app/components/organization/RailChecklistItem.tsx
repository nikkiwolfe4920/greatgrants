import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

export interface RailChecklistItemProps {
  title: string;
  /** Plain copy in most cases; a node when it embeds a link (e.g. UEI's "register on SAM.gov" link). */
  description: ReactNode;
  completed: boolean;
  /** True while this item is hovered or was just clicked — drives the teal "focused" outline. */
  active: boolean;
  onSelect: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

/**
 * One row in the "Profile Completion" right rail. Extracted from
 * OrganizationProfileForm, which previously repeated this exact markup 11
 * times (EIN, UEI, Organization Name, Organization Address, Organization
 * Website, Focus Areas, Annual Budget, Mission Statement, Vision Statement,
 * Financial Readiness Questions, Policies & Compliance Questions).
 *
 * Maps to the repeated checklist "Button" card in the Figma right sidebar
 * (e.g. node 13186:6182 "EIN").
 */
export function RailChecklistItem({
  title,
  description,
  completed,
  active,
  onSelect,
  onHoverStart,
  onHoverEnd,
}: RailChecklistItemProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      data-figma-component="ChecklistItem"
      data-figma-state={completed ? "complete" : active ? "active" : "default"}
      className={`w-full text-left group p-3 border rounded-[var(--radius-checklist-card)] transition-colors ${
        completed
          ? "border-[var(--success-tint-border)] bg-[var(--success-tint-bg)]"
          : active
            ? "border-teal-600 bg-white"
            : "border-gray-200 hover:border-teal-400 bg-white"
      }`}
    >
      <div className="flex items-start gap-3">
        {completed ? (
          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white group-hover:border-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors" />
        )}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-900 mb-0.5">{title}</div>
          <div className="text-xs text-gray-600 leading-relaxed">{description}</div>
        </div>
      </div>
    </button>
  );
}
