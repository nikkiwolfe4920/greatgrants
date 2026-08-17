/**
 * useGrantAlerts
 *
 * Single source of truth for the per-grant "Watch" feature — the only
 * grant-tracking action in the product (the earlier, separate "Save Grant"
 * feature has been removed and merged into this one). Turned on from a
 * grant list item on /search, a grant's own detail page, or
 * /eligibility-assessment, linked via `grantId` (the `GrantAlert` shape in
 * `@/data/types`) in the `grantAlerts` localStorage record. The Watch List
 * page (/watch-list) reads this same record, filtered to `grantId`-linked
 * entries, as the list of Grant Opportunity Alerts a user is watching.
 */

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "grantAlerts";
const UPDATE_EVENT = "grantAlertsUpdated";

interface AlertableGrant {
  id: string;
  title: string;
  description?: string;
  status?: "Open" | "Pending" | "Closed";
  maxAmount?: number;
  location?: string;
  closeDate?: string;
  difficulty?: string;
  sectors?: string[];
  image?: string;
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

  // Whether this grant is on the user's Watch List at all — i.e. a record
  // exists, regardless of its `enabled` flag. A watched grant can be
  // "paused" (enabled: false, e.g. via the switch on /watch-list) without
  // being removed from the list — the switch just mutes the email alert,
  // it isn't the same as unwatching. Only removeAlert takes it off the list.
  const isGrantAlertEnabled = useCallback(
    (grantId: string) => !!getGrantAlert(grantId),
    [getGrantAlert]
  );

  const setAlertEnabled = useCallback(
    (grant: AlertableGrant, enabled: boolean, options?: { silent?: boolean }) => {
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
              // Snapshot of the grant's own display fields (title, description,
              // amount, location, etc.) so the Watch List can render the full
              // grant card design without needing to re-look up the grant from
              // whatever mock dataset it originally came from.
              grant: {
                id: grant.id,
                title: grant.title,
                description: grant.description,
                status: grant.status,
                maxAmount: grant.maxAmount,
                location: grant.location,
                closeDate: grant.closeDate,
                difficulty: grant.difficulty,
                sectors: grant.sectors,
                image: grant.image,
              },
              alertsSent: 0,
              enabled,
              createdAt: new Date().toISOString(),
            },
          ];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setAlerts(updated);
      window.dispatchEvent(new Event(UPDATE_EVENT));

      if (options?.silent) return;

      if (!existing) {
        toast.success("Now watching this grant", {
          description: `You'll be notified about updates to "${grant.title}". Manage everything you're watching from Watch List in the sidebar.`,
          duration: 4000,
        });
      } else if (!enabled) {
        toast("Alerts paused", {
          description: `You won't receive emails for "${grant.title}" until you turn it back on from Watch List.`,
          duration: 4000,
        });
      } else {
        toast.success("Alerts resumed", {
          description: `You'll get emails about updates to "${grant.title}" again.`,
          duration: 4000,
        });
      }
    },
    []
  );

  // Fully removes the grant from the Watch List (as opposed to pausing it
  // via setAlertEnabled). This is the destructive action confirmed by
  // StopWatchingDialog — call it only after the user confirms.
  const removeAlert = useCallback((grantId: string, options?: { silent?: boolean; grantTitle?: string }) => {
    const current = readGrantAlerts();
    const removed = current.find((a: any) => a.grantId === grantId);
    const updated = current.filter((a: any) => a.grantId !== grantId);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setAlerts(updated);
    window.dispatchEvent(new Event(UPDATE_EVENT));

    if (options?.silent) return;

    const title = options?.grantTitle || removed?.name?.replace(/ Alert$/, "") || "this grant";
    toast("Stopped watching this grant", {
      description: `You won't receive alerts for "${title}" until you watch it again.`,
      duration: 4000,
    });
  }, []);

  return { alerts, isGrantAlertEnabled, setAlertEnabled, removeAlert };
}
