import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import type { PartnerNeedRecord } from "@/data/partnerPlanning";

export interface NeedValues {
  title: string;
  description: string;
  needed: number;
  minAmount: number;
  maxAmount: number;
}

interface NeedDialogProps {
  open: boolean;
  /** The need being edited, or null when adding a new one. */
  need: PartnerNeedRecord | null;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: NeedValues) => void;
}

/** Adds a partner need to this application, or edits an existing one. Changes apply to this application only. */
export function NeedDialog({ open, need, onOpenChange, onSubmit }: NeedDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [needed, setNeeded] = useState("1");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!open) return;
    setTitle(need?.title ?? "");
    setDescription(need?.description ?? "");
    setNeeded(String(need?.needed ?? 1));
    setMin(need ? String(need.minAmount) : "");
    setMax(need ? String(need.maxAmount) : "");
    setTouched(false);
  }, [open, need]);

  const neededN = Number(needed);
  const minN = Number(min);
  const maxN = Number(max);
  const errors = {
    title: title.trim() ? "" : "Name the partner role you need.",
    needed: Number.isInteger(neededN) && neededN >= 1 ? "" : "Enter a whole number of at least 1.",
    min: min !== "" && minN > 0 ? "" : "Enter a minimum amount.",
    max: max !== "" && maxN >= minN && maxN > 0 ? "" : "The maximum can't be below the minimum.",
  };
  const invalid = Object.values(errors).some(Boolean);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (invalid) return;
    onSubmit({ title: title.trim(), description: description.trim(), needed: neededN, minAmount: minN, maxAmount: maxN });
  };

  const fieldError = (key: keyof typeof errors) =>
    touched && errors[key] ? (
      <p id={`need-${key}-error`} role="alert" className="text-xs text-red-600">
        {errors[key]}
      </p>
    ) : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <form onSubmit={submit} noValidate className="space-y-4">
          <DialogHeader>
            <DialogTitle>{need ? "Edit partner need" : "Add a partner need"}</DialogTitle>
            <DialogDescription>
              Partner needs start from your program. Changes here apply to this application only.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-1.5">
            <Label htmlFor="need-title">Partner role</Label>
            <Input
              id="need-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Community outreach partner"
              aria-invalid={touched && !!errors.title}
              aria-describedby={touched && errors.title ? "need-title-error" : undefined}
            />
            {fieldError("title")}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="need-description">What they'll do</Label>
            <Textarea
              id="need-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="need-count">Partners needed</Label>
              <Input
                id="need-count"
                type="number"
                min={1}
                value={needed}
                onChange={(e) => setNeeded(e.target.value)}
                aria-invalid={touched && !!errors.needed}
                aria-describedby={touched && errors.needed ? "need-needed-error" : undefined}
              />
              {fieldError("needed")}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="need-min">Min. each ($)</Label>
              <Input
                id="need-min"
                type="number"
                min={0}
                step={1000}
                value={min}
                onChange={(e) => setMin(e.target.value)}
                aria-invalid={touched && !!errors.min}
                aria-describedby={touched && errors.min ? "need-min-error" : undefined}
              />
              {fieldError("min")}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="need-max">Max. each ($)</Label>
              <Input
                id="need-max"
                type="number"
                min={0}
                step={1000}
                value={max}
                onChange={(e) => setMax(e.target.value)}
                aria-invalid={touched && !!errors.max}
                aria-describedby={touched && errors.max ? "need-max-error" : undefined}
              />
              {fieldError("max")}
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700">
              {need ? "Save changes" : "Add need"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
