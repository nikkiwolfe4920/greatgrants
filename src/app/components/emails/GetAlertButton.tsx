import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { useGrantAlerts } from "@/hooks/useGrantAlerts";

/**
 * The same "Get Alert" toggle used on grant cards in GrantSearch.tsx /
 * GrantDetailPage.tsx / EligibilityAssessmentPage.tsx — identical styling
 * and behavior, backed by the same useGrantAlerts hook, so subscribing to a
 * grant surfaced in an email digest is the exact same action as subscribing
 * to it from search results.
 */
export function GetAlertButton({ grant }: { grant: { id: string; title: string } }) {
  const { isGrantAlertEnabled, setAlertEnabled } = useGrantAlerts();
  const enabled = isGrantAlertEnabled(grant.id);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setAlertEnabled(grant, !enabled)}
      className={`gap-1.5 ${
        enabled
          ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
          : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
      }`}
    >
      <Bell className={`w-3.5 h-3.5 ${enabled ? "fill-current" : ""}`} />
      {enabled ? "Alert Active" : "Get Alert"}
    </Button>
  );
}
