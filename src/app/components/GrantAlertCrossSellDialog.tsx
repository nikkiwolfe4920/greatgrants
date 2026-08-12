import { Bell, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

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
 * Optional cross-sell shown right after a user takes ONE of the two
 * independent actions on a grant — Save or Get Alert — offering the other.
 *
 * Visual spec: Figma node 13002:6772
 * (https://www.figma.com/design/AJQoDJAJZL2ItawgAfLYh3/Great-Grants-MVP?node-id=13002-6772)
 * — featured icon + title/description header, close X, then a full-width
 * solid primary button stacked above a plain-text secondary button.
 *
 * Save and Get Alert are independent booleans (see useSavedGrants /
 * useGrantAlerts). Declining here must never change the action the user
 * already took, and accepting here must never be the only way to reach the
 * other state — both remain reachable directly from their own button at any
 * time. Shared by search cards (list + grid), the grant detail page, and the
 * eligibility-assessment detail page so the copy and behavior never drift
 * between surfaces.
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
      <DialogContent
        className="p-0 gap-0 border-0 rounded-2xl overflow-hidden sm:max-w-[400px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)]"
      >
        {/* Header */}
        <div className="flex flex-col items-start gap-4 pt-6 px-6 pb-5">
          {isOfferingAlert ? (
            <Bell className="w-7 h-7 text-gray-900" strokeWidth={1.75} />
          ) : (
            <Bookmark className="w-7 h-7 text-gray-900" strokeWidth={1.75} />
          )}
          <div className="flex flex-col gap-0.5 w-full">
            <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
              {isOfferingAlert ? "Also get alerts for this grant?" : "Also save this grant?"}
            </DialogTitle>
            <DialogDescription className="text-sm leading-5 text-gray-600">
              {isOfferingAlert ? (
                <>
                  You saved <span className="font-medium text-gray-900">"{grantTitle}"</span>. Get Alert
                  is a separate, optional subscription — turn it on and we'll notify you about updates to
                  this grant. Saving it doesn't require alerts, and you can skip this.
                </>
              ) : (
                <>
                  You turned on alerts for <span className="font-medium text-gray-900">"{grantTitle}"</span>.
                  Saving is separate and optional — it just keeps this grant in your Saved Grants list.
                  Alerts don't require saving, and you can skip this.
                </>
              )}
            </DialogDescription>
          </div>
        </div>

        {/* Actions — full-width primary stacked above a plain-text secondary */}
        <div className="flex flex-col gap-3 pt-8 px-6 pb-6">
          <Button
            className="w-full justify-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold"
            onClick={() => handleClose(true)}
          >
            {isOfferingAlert ? (
              <>
                <Bell className="w-4 h-4" />
                Get Alert
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                Save Grant
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-semibold"
            onClick={() => handleClose(false)}
          >
            No thanks
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
