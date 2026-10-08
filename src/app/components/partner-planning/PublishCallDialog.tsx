import { useEffect, useState } from "react";
import { Megaphone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import type { PartnerNeedRecord } from "@/data/partnerPlanning";
import { formatDate, kRange, todayIso } from "./utils";

export interface PublishCallValues {
  closesOn: string;
  notifyRecommended: boolean;
}

interface PublishCallDialogProps {
  need: PartnerNeedRecord | null;
  /** ISO date — a call can't stay open past the NOFO deadline. */
  nofoClosesOn: string;
  recommendedCount: number;
  onOpenChange: (open: boolean) => void;
  onSubmit: (need: PartnerNeedRecord, values: PublishCallValues) => void;
}

const addDaysIso = (iso: string, days: number) => {
  const [y, m, d] = iso.split("-").map(Number);
  const next = new Date(y, m - 1, d + days);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${next.getFullYear()}-${pad(next.getMonth() + 1)}-${pad(next.getDate())}`;
};

/** Publishes — or, when the need already has a call, edits — the public Partner Call for one need. */
export function PublishCallDialog({ need, nofoClosesOn, recommendedCount, onOpenChange, onSubmit }: PublishCallDialogProps) {
  const editing = !!need?.call;
  const minDate = addDaysIso(todayIso(), 1);
  const [closesOn, setClosesOn] = useState("");
  const [notify, setNotify] = useState(true);
  const [touched, setTouched] = useState(false);

  // Re-seed the form each time the dialog opens for a (different) need.
  useEffect(() => {
    if (!need) return;
    const twoWeeks = addDaysIso(todayIso(), 14);
    setClosesOn(need.call?.closesOn ?? (twoWeeks < nofoClosesOn ? twoWeeks : nofoClosesOn));
    setNotify(true);
    setTouched(false);
  }, [need, nofoClosesOn]);

  let error = "";
  if (!closesOn) error = "Choose a closing date.";
  else if (closesOn < minDate) error = "The closing date must be in the future.";
  else if (closesOn > nofoClosesOn) error = `The call can't close after the NOFO deadline (${formatDate(nofoClosesOn)}).`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (error || !need) return;
    onSubmit(need, { closesOn, notifyRecommended: notify });
  };

  return (
    <Dialog open={!!need} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <form onSubmit={submit} noValidate className="space-y-5">
          <DialogHeader>
            <div className="mb-1 flex size-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <Megaphone className="size-5" aria-hidden="true" />
            </div>
            <DialogTitle>{editing ? "Edit Partner Call" : "Publish a Partner Call"}</DialogTitle>
            <DialogDescription>
              {editing
                ? "Update when the call closes. Organizations that already responded keep their responses."
                : "A Partner Call is a public page where organizations can read what you need and express interest. You review every response before anyone is selected."}
            </DialogDescription>
          </DialogHeader>

          {need && (
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm">
              <div className="col-span-2">
                <dt className="text-xs text-gray-500">Partner need</dt>
                <dd className="font-semibold text-gray-900">{need.title}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Partners needed</dt>
                <dd className="font-semibold text-gray-900">{need.needed}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Subaward range</dt>
                <dd className="font-semibold text-gray-900">{kRange(need.minAmount, need.maxAmount)} each</dd>
              </div>
            </dl>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="call-closes-on">Call closes on</Label>
            <Input
              id="call-closes-on"
              type="date"
              value={closesOn}
              min={minDate}
              max={nofoClosesOn}
              onChange={(e) => setClosesOn(e.target.value)}
              onBlur={() => setTouched(true)}
              aria-invalid={touched && !!error}
              aria-describedby="call-closes-on-help"
              className="max-w-[220px]"
            />
            <p
              id="call-closes-on-help"
              role={touched && error ? "alert" : undefined}
              className={`text-xs ${touched && error ? "text-red-600" : "text-gray-500"}`}
            >
              {touched && error ? error : `Must be before the NOFO closes on ${formatDate(nofoClosesOn)}.`}
            </p>
          </div>

          {!editing && recommendedCount > 0 && (
            <div className="flex items-start gap-3">
              <Checkbox
                id="call-notify"
                checked={notify}
                onCheckedChange={(v) => setNotify(v === true)}
                className="mt-0.5"
              />
              <Label htmlFor="call-notify" className="block cursor-pointer font-normal leading-snug">
                <span className="font-medium text-gray-900">
                  Notify {recommendedCount} recommended {recommendedCount === 1 ? "partner" : "partners"}
                </span>
                <span className="block text-gray-600">They'll get a direct invitation to respond to this call.</span>
              </Label>
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700">
              {editing ? "Save changes" : "Publish call"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
