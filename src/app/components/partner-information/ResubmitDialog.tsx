import { Pencil, X } from "lucide-react";
import svgPaths from "@/imports/svg-i3haojugv5";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";

interface ResubmitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  org: string;
  onResubmit: () => void;
}

/**
 * "Resubmit information to {org}?" confirmation (Figma node 17116:51551): Great
 * Grants nib, title, one sentence on what happens, a full-width primary
 * "Resubmit information" and a quiet "Keep Editing" with a pencil.
 */
export function ResubmitDialog({ open, onOpenChange, org, onResubmit }: ResubmitDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="gap-0 overflow-hidden rounded-2xl border-0 bg-white p-0 shadow-xl sm:max-w-[400px]">
        <div className="relative px-6 pt-6">
          <svg width="28" height="32" viewBox="0 16 128 128" fill="none" aria-hidden="true" className="mb-4 block">
            <path d={svgPaths.p3ca100} fill="black" transform="translate(0,16)" />
            <path d={svgPaths.p3f0115f0} fill="black" transform="translate(0,16)" />
          </svg>
          <AlertDialogTitle className="text-base font-semibold leading-6 text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            Resubmit information to {org}?
          </AlertDialogTitle>
          <AlertDialogCancel
            aria-label="Close"
            className="absolute right-3 top-3 size-11 rounded-lg border-0 bg-transparent p-0 text-gray-400 shadow-none hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="size-6" aria-hidden="true" />
          </AlertDialogCancel>
        </div>
        <div className="flex flex-col gap-3 px-6 pb-6 pt-4">
          <AlertDialogDescription className="text-sm leading-5 text-gray-900">
            {org} will review your updated information again. The request moves back to Sent for Approval.
          </AlertDialogDescription>
          <AlertDialogAction onClick={onResubmit} className="w-full bg-teal-600 text-white hover:bg-teal-700">
            Resubmit information
          </AlertDialogAction>
          <AlertDialogCancel className="w-full border-0 bg-transparent font-semibold text-gray-600 shadow-none hover:bg-gray-100">
            <Pencil className="size-5" aria-hidden="true" />
            Keep Editing
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
