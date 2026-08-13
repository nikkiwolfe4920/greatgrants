import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import { useGrantAlerts } from "@/hooks/useGrantAlerts";

/**
 * The same "Watch" toggle used on grant cards in GrantSearch.tsx /
 * GrantDetailPage.tsx / EligibilityAssessmentPage.tsx — identical styling
 * and behavior, backed by the same useGrantAlerts hook, so watching a grant
 * surfaced in an email digest is the exact same action as watching it from
 * search results. Turning watch off from here is instant — the destructive
 * confirmation (see StopWatchingDialog) only applies to the app surfaces
 * where that's expected; this mockup button mirrors the base toggle.
 */
export function GetAlertButton({ grant }: { grant: { id: string; title: string } }) {
  const { isGrantAlertEnabled, setAlertEnabled, removeAlert } = useGrantAlerts();
  const enabled = isGrantAlertEnabled(grant.id);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => (enabled ? removeAlert(grant.id, { grantTitle: grant.title }) : setAlertEnabled(grant, true))}
      className={`gap-1.5 ${
        enabled
          ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
          : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
      }`}
    >
      <Eye className="w-3.5 h-3.5" />
      {enabled ? "Watching" : "Watch"}
    </Button>
  );
}
