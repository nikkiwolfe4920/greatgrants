import { Calendar, FileEdit, DoorOpen, Building2, FileText } from "lucide-react";
import { Badge } from "../ui/badge";
import { ALERT_UPDATE_META, type AlertUpdateEvent, type AlertUpdateType } from "@/data/emailAlerts";

const ALERT_UPDATE_ICON: Record<AlertUpdateType, typeof Calendar> = {
  "date-change": Calendar,
  amendment: FileEdit,
  "status-change": DoorOpen,
  "sponsor-change": Building2,
  "nofo-section": FileText,
};

/**
 * The "what changed" half of the weekly digest — one row per update event
 * (date change, amendment, status/opening change, agency/sponsor change, or
 * NOFO section edit), each tagged with its type so a user skimming on their
 * phone can tell at a glance which of their five alert triggers fired
 * without reading every sentence.
 */
export function AlertUpdateList({ updates }: { updates: AlertUpdateEvent[] }) {
  if (updates.length === 0) return null;

  return (
    <ul className="flex flex-col gap-3">
      {updates.map((update) => {
        const meta = ALERT_UPDATE_META[update.type];
        const Icon = ALERT_UPDATE_ICON[update.type];
        return (
          <li key={update.id} className="flex gap-3">
            <span
              className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border ${meta.colorClass}`}
            >
              <Icon className="size-3.5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-sm font-semibold text-gray-900">{update.grantTitle}</span>
                <Badge variant="outline" className={`text-[11px] ${meta.colorClass}`}>
                  {meta.label}
                </Badge>
              </div>
              <p className="mt-0.5 text-sm leading-5 text-gray-600">{update.detail}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
