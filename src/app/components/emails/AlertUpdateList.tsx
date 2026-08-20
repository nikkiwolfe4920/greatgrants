import { Badge } from "../ui/badge";
import { ALERT_UPDATE_META, type AlertUpdateEvent } from "@/data/emailAlerts";

/**
 * The "what's changed" feed inside a watched grant's card (Figma node
 * 13310:9565) — one row per update event (date change, amendment,
 * status/opening change, agency/sponsor change, or NOFO section edit),
 * each tagged with a neutral badge naming the trigger.
 *
 * Every list renders inside a single grant's own card now, so unlike the
 * previous design there's no icon avatar or repeated grant title per row —
 * just the trigger badge and its plain-language detail.
 */
export function AlertUpdateList({ updates }: { updates: AlertUpdateEvent[] }) {
  if (updates.length === 0) return null;

  return (
    <ul className="flex flex-col gap-3">
      {updates.map((update) => {
        const meta = ALERT_UPDATE_META[update.type];
        return (
          <li key={update.id}>
            <Badge variant="outline" className="border-gray-400 bg-gray-100 text-[11px] text-gray-600">
              {meta.label}
            </Badge>
            <p className="mt-0.5 text-sm leading-5 text-gray-600">{update.detail}</p>
          </li>
        );
      })}
    </ul>
  );
}
