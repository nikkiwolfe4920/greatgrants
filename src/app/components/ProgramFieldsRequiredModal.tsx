import svgPaths from "@/imports/svg-i3haojugv5";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";

function NibIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 112 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d={svgPaths.p3ca100} fill="#0e9384" />
      <path d={svgPaths.p3f0115f0} fill="#0e9384" />
    </svg>
  );
}

export interface MissingProgramField {
  key: string;
  label: string;
}

interface ProgramFieldsRequiredModalProps {
  open: boolean;
  /** The specific required fields still missing on the in-progress program. */
  missingFields: MissingProgramField[];
  /** "Enter Required Fields to Save" / close (X) — dismiss and return to the form. */
  onKeepEditing: () => void;
  /** "Leave without Saving" — discard the in-progress program and continue leaving. */
  onLeaveWithoutSaving: () => void;
}

/**
 * Warns the user before they navigate away from the manual "Create/Edit
 * Program" form while required fields are still missing — Figma node
 * 13269:35531 ("Program Fields Required"), adapted to list the exact
 * required fields left incomplete instead of the generic Figma copy.
 */
export function ProgramFieldsRequiredModal({
  open,
  missingFields,
  onKeepEditing,
  onLeaveWithoutSaving,
}: ProgramFieldsRequiredModalProps) {
  return (
    <Dialog open={open} onOpenChange={(next) => !next && onKeepEditing()}>
      <DialogContent className="p-0 gap-0 max-w-[400px] overflow-hidden rounded-2xl" aria-describedby={undefined}>
        <div className="flex flex-col items-start gap-4 pt-6 px-6">
          <NibIcon />
          <DialogTitle className="text-base font-semibold text-gray-900 leading-normal" style={{ fontFamily: "Cabin, sans-serif" }}>
            Program Fields Required
          </DialogTitle>
        </div>

        <div className="flex flex-col gap-3 pt-3 pb-6 px-6">
          <div className="text-xs font-medium text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
            <p>To save this program, complete the following required field{missingFields.length === 1 ? "" : "s"}:</p>
            <ul className="list-disc pl-4 mt-1.5 space-y-0.5">
              {missingFields.map((field) => (
                <li key={field.key}>{field.label}</li>
              ))}
            </ul>
          </div>

          <Button onClick={onKeepEditing} className="w-full bg-[#0e9384] hover:bg-[#0c7d70] text-white mt-1">
            Enter Required Fields to Save
          </Button>
          <Button variant="ghost" onClick={onLeaveWithoutSaving} className="w-full text-gray-500 hover:text-gray-700">
            Leave without Saving
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
