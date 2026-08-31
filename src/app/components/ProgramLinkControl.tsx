import { useState } from "react";
import { Check, ChevronDown, FolderPlus, Link2, Plus } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

export interface ProgramLinkOption {
  id: string;
  name: string;
  description?: string;
}

interface ProgramLinkControlProps {
  /** Programs available in the org that can be linked. */
  programs: ProgramLinkOption[];
  /** Id of the program currently linked to this grant/opportunity, or null if none. */
  linkedProgramId: string | null;
  /** Link (or switch to) a different program — a grant/opportunity can only have one linked program at a time. */
  onLink: (programId: string) => void;
  /** Remove the current program link. */
  onUnlink: () => void;
  /** Send the user to create a brand-new program (e.g. when none exist yet, or from the switcher). */
  onCreateProgram: () => void;
  size?: "sm" | "default";
  align?: "start" | "end";
  className?: string;
}

/**
 * Shows whether a program is linked to a grant/opportunity and lets the
 * user link, switch, or unlink it. Only one program can ever be linked at a
 * time, so selecting a new one always replaces the current link rather than
 * adding to a list.
 *
 * A linked program is always rendered as a visible name + link icon on the
 * trigger itself — never collapsed down to a bare numeral badge — and the
 * whole control doubles as the "change program" affordance.
 */
export function ProgramLinkControl({
  programs,
  linkedProgramId,
  onLink,
  onUnlink,
  onCreateProgram,
  size = "sm",
  align = "end",
  className = "",
}: ProgramLinkControlProps) {
  const [open, setOpen] = useState(false);
  const linkedProgram = programs.find((p) => p.id === linkedProgramId) ?? null;

  // No programs exist in the org yet — skip the picker and send the user
  // straight to create one.
  if (programs.length === 0) {
    return (
      <Button
        variant="outline"
        size={size}
        className={`gap-1.5 border-teal-200 hover:border-teal-300 hover:bg-teal-50 ${className}`}
        onClick={onCreateProgram}
      >
        <Plus className="w-4 h-4 text-teal-600" />
        <span className="text-gray-700">Add Program</span>
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {linkedProgram ? (
          <Button
            variant="outline"
            size={size}
            className={`gap-1.5 border-teal-200 bg-teal-50 text-teal-700 hover:border-teal-300 hover:bg-teal-100 max-w-[280px] ${className}`}
          >
            <Link2 className="w-4 h-4 shrink-0" />
            <span className="truncate">{linkedProgram.name}</span>
            <ChevronDown className="w-3.5 h-3.5 shrink-0 opacity-70" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size={size}
            className={`gap-1.5 border-teal-200 hover:border-teal-300 hover:bg-teal-50 ${className}`}
          >
            <FolderPlus className="w-4 h-4 text-teal-600" />
            <span className="text-gray-700">Add Program</span>
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-[420px]" align={align}>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: "Cabin, sans-serif" }}>
              {linkedProgram ? "Switch Program" : "Link a Program"}
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
              {linkedProgram
                ? "Only one program can be linked at a time — selecting a different program replaces the current link."
                : "Linking a program makes the application process that much more seamless."}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-3 space-y-2 max-h-64 overflow-y-auto">
            {programs.map((program) => {
              const isSelected = program.id === linkedProgramId;
              return (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => {
                    onLink(program.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-start gap-3 p-3 rounded-lg border text-left transition-all group ${
                    isSelected
                      ? "border-teal-600 bg-teal-50"
                      : "border-gray-200 hover:border-teal-300 hover:bg-teal-50/50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                      isSelected ? "bg-teal-600 border-teal-600" : "border-gray-300 group-hover:border-teal-400"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm mb-0.5 line-clamp-1" style={{ fontFamily: "Cabin, sans-serif" }}>
                      {program.name}
                    </p>
                    {program.description && (
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
                        {program.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border-t border-gray-200 pt-3 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onCreateProgram();
              }}
              className="text-xs font-medium text-teal-700 hover:text-teal-800"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              + Create new program
            </button>
            {linkedProgram && (
              <button
                type="button"
                onClick={() => {
                  onUnlink();
                  setOpen(false);
                }}
                className="text-xs font-medium text-red-600 hover:text-red-700"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Unlink program
              </button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
