/**
 * useGrantAlerts
 *
 * Single source of truth for the per-grant "Get Alert" feature — the only
 * grant-alert entry point in the product. Turned on from a grant list item
 * on /search or from a grant's own detail page, linked via `grantId` (the
 * `GrantAlert` shape in `@/data/types`) in the `grantAlerts` localStorage
 * record. Account Settings → Emails reads this same record, filtered to
 * `grantId`-linked entries, as the list of Grant Opportunity Alerts.
 *
 * Get Alert is intentionally independent from Save Grant (see
 * useSavedGrants). Do not add save side-effects here.
 */

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "grantAlerts";
const UPDATE_EVENT = "grantAlertsUpdated";

interface AlertableGrant {
  id: string;
  title: string;
}

function readGrantAlerts(): any[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function useGrantAlerts() {
  const [alerts, setAlerts] = useState<any[]>(() => readGrantAlerts());

  useEffect(() => {
    const sync = () => setAlerts(readGrantAlerts());
    window.addEventListener(UPDATE_EVENT, sync);
    return () => window.removeEventListener(UPDATE_EVENT, sync);
  }, []);

  const getGrantAlert = useCallback(
    (grantId: string) => alerts.find((a) => a.grantId === grantId),
    [alerts]
  );

  const isGrantAlertEnabled = useCallback(
    (grantId: string) => getGrantAlert(grantId)?.enabled === true,
    [getGrantAlert]
  );

  const setAlertEnabled = useCallback(
    (grant: AlertableGrant, enabled: boolean, options?: { silent?: boolean }) => {
      // TODO(product decision): the free-tier save limit (see useSavedGrants.ts)
      // has no bearing here today — Get Alert succeeds independently of Save
      // state or any save-limit gate (Option A). If Product decides reaching
      // the save limit should also block enabling alerts (Option B), the check
      // belongs here, before the record is persisted. Do not infer that
      // decision from Save state in the UI layer.
      const current = readGrantAlerts();
      const existing = current.find((a: any) => a.grantId === grant.id);

      const updated = existing
        ? current.map((a: any) => (a.id === existing.id ? { ...a, enabled } : a))
        : [
            ...current,
            {
              id: `alert-${Date.now()}`,
              name: `${grant.title} Alert`,
              frequency: "Weekly",
              email: "olivia@untitledu.com",
              searchQuery: "",
              filters: [],
              programs: [],
              grantId: grant.id,
              alertsSent: 0,
              enabled,
              createdAt: new Date().toISOString(),
            },
          ];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setAlerts(updated);
      window.dispatchEvent(new Event(UPDATE_EVENT));

      if (options?.silent) return;

      if (enabled) {
        toast.success("Grant alerts enabled", {
          description: `You'll be notified about updates to "${grant.title}".`,
          duration: 4000,
        });
      } else {
        toast("Grant alerts disabled", {
          description: `You won't receive alerts for "${grant.title}" until you turn it back on.`,
          duration: 4000,
        });
      }
    },
    []
  );

  return { alerts, isGrantAlertEnabled, setAlertEnabled };
}
