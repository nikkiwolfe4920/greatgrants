import { Eye, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";

export type CrossSellDirection = "save-to-alert" | "alert-to-save";

interface GrantAlertCrossSellDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  direction: CrossSellDirection;
  grantTitle: string;
  onAccept: () => void;
  onDecline: () => void;
}

/**
 * Optional cross-sell shown right after a user Saves a grant, offering to
 * also Watch it. ("alert-to-save" is kept on the CrossSellDirection type
 * for backward compatibility but is no longer triggered anywhere — turning
 * Watch on never opens a modal, only a toast. See useGrantAlerts.)
 *
 * Save and Watch are independent booleans (see useSavedGrants /
 * useGrantAlerts). Declining here must never change the action the user
 * already took, and accepting here must never be the only way to reach the
 * other state — both remain reachable directly from their own button at any
 * time. Shared by search cards (list + grid) and the grant detail page so
 * the copy and behavior never drift between surfaces.
 */
export function GrantAlertCrossSellDialog({
  open,
  onOpenChange,
  direction,
  grantTitle,
  onAccept,
  onDecline,
}: GrantAlertCrossSellDialogProps) {
  const isOfferingAlert = direction === "save-to-alert";

  const handleClose = (accepted: boolean) => {
    if (accepted) {
      onAccept();
    } else {
      onDecline();
    }
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) handleClose(false);
      }}
    >
      <DialogContent className="sm:max-w-[440px]">
        <DialogHeader>
          <div className="w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center mb-1">
            {isOfferingAlert ? (
              <Eye className="w-5 h-5 text-teal-600" />
            ) : (
              <Bookmark className="w-5 h-5 text-teal-600" />
            )}
          </div>
          <DialogTitle style={{ fontFamily: "Lustria, serif" }}>
            {isOfferingAlert ? "Also watch this grant?" : "Also save this grant?"}
          </DialogTitle>
          <DialogDescription className="text-gray-600 leading-relaxed">
            {isOfferingAlert ? (
              <>
                You saved <span className="font-medium text-gray-900">"{grantTitle}"</span>. Watch
                is a separate, optional subscription — turn it on and we'll notify you about updates to
                this grant. Saving it doesn't require watching, and you can skip this.
              </>
            ) : (
              <>
                You started watching <span className="font-medium text-gray-900">"{grantTitle}"</span>.
                Saving is separate and optional — it just keeps this grant in your Saved Grants list.
                Watching doesn't require saving, and you can skip this.
              </>
            )}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2 sm:gap-2">
          <Button variant="outline" onClick={() => handleClose(false)}>
            No thanks
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5"
            onClick={() => handleClose(true)}
          >
            {isOfferingAlert ? (
              <>
                <Eye className="w-3.5 h-3.5" />
                Watch
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5" />
                Save Grant
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
