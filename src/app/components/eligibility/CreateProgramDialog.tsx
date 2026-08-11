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

interface CreateProgramDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
}

/**
 * Confirmation modal shown when a user picks "I would like to create a new
 * program" on Step 1 — Figma node 12827:29300. Explains the redirect to My
 * Programs and lets them continue or cancel.
 */
export function CreateProgramDialog({ open, onOpenChange, onContinue }: CreateProgramDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 gap-0 max-w-[400px] overflow-hidden rounded-2xl">
        <div className="flex flex-col items-start gap-4 pt-6 px-6">
          <NibIcon />
          <div className="flex flex-col gap-0.5 w-full">
            <DialogTitle className="text-base font-semibold text-gray-900 leading-normal" style={{ fontFamily: "Cabin, sans-serif" }}>
              Create Your Program to Continue Your Assessment
            </DialogTitle>
            <div className="text-sm text-gray-500 space-y-3.5 pt-1" style={{ fontFamily: "Cabin, sans-serif" }}>
              <p>You're about to be redirected to My Programs to create a program needed to complete your assessment.</p>
              <p>
                Don't worry — once you finish creating your program, we'll bring you right back here so you can
                continue making progress on your Eligibility Assessment.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-6">
          <Button onClick={onContinue} className="w-full bg-[#0e9384] hover:bg-[#0c7d70] text-white">
            Continue to My Programs
          </Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="w-full text-gray-500">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
