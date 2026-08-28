import { useNavigate } from "react-router";
import svgPaths from "@/imports/svg-i3haojugv5";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Check, ArrowUpRight } from "lucide-react";

function NibIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 112 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d={svgPaths.p3ca100} fill="#0e9384" />
      <path d={svgPaths.p3f0115f0} fill="#0e9384" />
    </svg>
  );
}

const UNLIMITED_FEATURES = [
  "Unlimited Applications",
  "Unlimited Coaching",
  "Unlimited Eligibility Assessments",
];

interface MarkApplicationSubmittedModalProps {
  open: boolean;
  /** Fires on close via the X, backdrop, or Cancel — caller should reset any pending selection. */
  onOpenChange: (open: boolean) => void;
  /** "Mark as Submitted" — caller performs the actual status change. */
  onConfirm: () => void;
}

/**
 * Confirms moving an active application to the Submitted (read-only) tab —
 * the base confirmation dialog combined with the Unlimited AI-Grant Writer
 * upsell from Figma node 13449:9445 ("Unlimted AI-Grant Writer"). Submitting
 * an application is a natural moment to offer unlimited access, since it
 * frees up the applicant to start their next one.
 */
export function MarkApplicationSubmittedModal({
  open,
  onOpenChange,
  onConfirm,
}: MarkApplicationSubmittedModalProps) {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    onOpenChange(false);
    navigate("/subscribe/search?upgrade=1");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 gap-0 max-w-[420px] overflow-hidden rounded-2xl" aria-describedby={undefined}>
        <div className="flex flex-col items-start gap-4 pt-6 px-6">
          <NibIcon />
          <DialogTitle className="text-base font-semibold text-gray-900 leading-normal" style={{ fontFamily: "Cabin, sans-serif" }}>
            Mark application as submitted?
          </DialogTitle>
        </div>

        <div className="flex flex-col gap-4 pt-3 px-6">
          <p className="text-xs font-medium text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
            This application will be moved to the Submitted tab. You will only be able to view it in read-only mode.
          </p>

          {/* Unlimited AI-Grant Writer upsell (Figma node 13449:9445) */}
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <span
                className="inline-flex items-center rounded-md bg-teal-600 px-2.5 py-0.5 text-xs font-semibold text-white"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Unlock
              </span>
              <span className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                <span className="text-lg font-bold text-gray-900">$XX.XX</span>/mo
              </span>
            </div>
            <h3 className="text-base text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
              Unlimited AI-Grant Writer
            </h3>
            <ul className="space-y-1.5 mb-3">
              {UNLIMITED_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check size={14} className="text-teal-600 shrink-0" strokeWidth={2.5} />
                  <span className="text-xs text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleUpgrade}
              className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-teal-600 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-700 transition-colors"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Get Started
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 pb-6 px-6">
          <Button onClick={onConfirm} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
            Mark as Submitted
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full bg-white">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
