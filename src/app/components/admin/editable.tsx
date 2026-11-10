import { useLayoutEffect, useRef } from "react";
import { Plus, X } from "lucide-react";

/**
 * Inline-editable text primitives for the Private Opportunity editor.
 * Values render as plain text that reveals a border on hover and a teal
 * ring on focus, so the page keeps the Grant Detail look while every
 * attribute stays editable in place.
 */

const FIELD_BASE =
  "block w-full resize-none overflow-hidden bg-transparent rounded-md border border-transparent " +
  "px-2 py-0.5 -mx-2 outline-none transition-colors placeholder:text-gray-400 placeholder:italic " +
  "hover:border-gray-200 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  /** Allow Enter to insert a new line (paragraph breaks). */
  multiline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function EditableText({
  value,
  onChange,
  label,
  placeholder = "Add…",
  multiline = false,
  className = "",
  style,
}: EditableTextProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // Grow with the content so long titles / paragraphs wrap instead of scrolling.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);

  return (
    <textarea
      ref={ref}
      rows={1}
      value={value}
      aria-label={label}
      placeholder={placeholder}
      onChange={(e) => onChange(multiline ? e.target.value : e.target.value.replace(/\n/g, " "))}
      onKeyDown={(e) => {
        if (!multiline && e.key === "Enter") e.preventDefault();
      }}
      className={`${FIELD_BASE} ${className}`}
      style={{ fontFamily: "Cabin, sans-serif", ...style }}
    />
  );
}

interface EditableListProps {
  items: string[];
  onChange: (items: string[]) => void;
  label: string;
  addLabel: string;
  placeholder?: string;
}

/** A list of editable lines with remove buttons and an "add" action. */
export function EditableList({ items, onChange, label, addLabel, placeholder }: EditableListProps) {
  return (
    <div>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="group flex items-start gap-2">
            <span className="text-teal-600 font-bold leading-6 w-3 shrink-0 text-center" aria-hidden>
              •
            </span>
            <div className="flex-1 min-w-0 pl-2">
              <EditableText
                value={item}
                label={`${label} ${i + 1}`}
                placeholder={placeholder ?? "Add item…"}
                onChange={(v) => onChange(items.map((x, j) => (j === i ? v : x)))}
                className="text-gray-700 leading-6"
              />
            </div>
            <button
              type="button"
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              aria-label={`Remove ${label} ${i + 1}`}
              className="mt-1 p-1 rounded text-gray-300 hover:text-red-600 hover:bg-red-50 focus:text-red-600 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-800"
        style={{ fontFamily: "Cabin, sans-serif" }}
      >
        <Plus className="w-3.5 h-3.5" />
        {addLabel}
      </button>
    </div>
  );
}
