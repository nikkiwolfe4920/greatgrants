import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";

interface StopWatchingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

/**
 * Confirmation shown before a grant alert is turned off / removed from the
 * Watch List — whether triggered from the Watch button on a grant card
 * (search, grant detail, eligibility assessment) or the delete icon on the
 * Watch List page itself. Shared so the copy and styling never drift
 * between surfaces. See useGrantAlerts.setAlertEnabled for the actual
 * state change, which only runs after the user confirms here.
 */
export function StopWatchingDialog({ open, onOpenChange, onConfirm }: StopWatchingDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[462px]">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "Lustria, serif" }}>Stop Watching?</DialogTitle>
          <DialogDescription className="text-gray-600 leading-relaxed">
            You're about to delete this alert. You will no longer receive email notifications for
            grants matching this criteria. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-gray-300">
            Cancel
          </Button>
          <Button onClick={handleConfirm} className="bg-red-600 hover:bg-red-700 text-white">
            Stop Watching
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
