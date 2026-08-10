import { useState } from "react";
import { CheckCircle2, Pencil, Plus } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";

const MAX_NARRATIVE_WORDS = 5000;

function wordCount(text: string): number {
  return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
}

interface FilledFieldRowProps {
  label: string;
  value: string;
  onSave: (value: string) => void;
  multiline?: boolean;
}

/**
 * A field pulled in from the org profile that already has a value. Reads
 * as a plain success row (label + value + green check) at rest; hovering
 * reveals a pencil (Figma node 12683:25237) that opens an inline text
 * input in place, so editing never leaves this row. Narrative fields
 * (`multiline`) edit as a textarea with a 0/5000 word counter.
 */
export function FilledFieldRow({ label, value, onSave, multiline = false }: FilledFieldRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const commit = () => {
    onSave(draft.trim());
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-[13px]">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "Cabin, sans-serif" }}>
            {label}
          </p>
          {multiline && (
            <span className="text-xs text-gray-400 shrink-0" style={{ fontFamily: "Cabin, sans-serif" }}>
              {wordCount(draft)}/{MAX_NARRATIVE_WORDS} words
            </span>
          )}
        </div>
        {multiline ? (
          <Textarea
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="bg-white min-h-24"
          />
        ) : (
          <Input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit();
              if (e.key === "Escape") setIsEditing(false);
            }}
            className="h-8 bg-white"
          />
        )}
        <div className="flex justify-end mt-2">
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white" onClick={commit}>
            Save
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-gray-50 border border-gray-100 rounded-lg p-[13px] flex items-start justify-between gap-3">
      <div className="min-w-0 flex-1">
        <p className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
          {label}
        </p>
        <p
          className={`text-sm font-medium text-gray-900 mt-0.5 ${multiline ? "line-clamp-2" : ""}`}
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          {value}
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0 pl-2">
        <CheckCircle2 className="size-5 text-teal-600" />
        <button
          type="button"
          onClick={() => {
            setDraft(value);
            setIsEditing(true);
          }}
          aria-label={`Edit ${label}`}
          className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity text-gray-400 hover:text-gray-600"
        >
          <Pencil className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

interface MissingFieldRowProps {
  label: string;
  onSave: (value: string) => void;
}

/**
 * A field the org profile is missing — the "MISSING DETAILS" module from
 * Figma node 12683:25174, styled in the amber "needs attention" treatment.
 * Per request, the input is entered directly inline in the yellow module
 * rather than opening a separate modal.
 */
export function MissingFieldRow({ label, onSave }: MissingFieldRowProps) {
  const [draft, setDraft] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const commit = () => {
    if (!draft.trim()) return;
    onSave(draft.trim());
    setIsAdding(false);
  };

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-[13px] flex items-center justify-between gap-3">
      <div className="min-w-0 flex-1">
        <p className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
          {label}
        </p>
        {isAdding ? (
          <Input
            autoFocus
            value={draft}
            placeholder={`Enter ${label.toLowerCase()}`}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit();
              if (e.key === "Escape") setIsAdding(false);
            }}
            className="h-7 mt-0.5 bg-white border-amber-300"
          />
        ) : (
          <p className="text-sm font-mono tracking-wide text-gray-400 mt-0.5">——</p>
        )}
      </div>
      {!isAdding && (
        <button
          type="button"
          onClick={() => setIsAdding(true)}
          className="shrink-0 inline-flex items-center gap-1 rounded border border-amber-400 px-2.5 py-1 text-xs font-semibold text-amber-700 hover:bg-amber-100 transition-colors"
        >
          <Plus className="size-3" />
          ADD
        </button>
      )}
    </div>
  );
}
