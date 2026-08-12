/**
 * useSavedGrants
 *
 * Single source of truth for the "Save Grant" feature. Centralizes the
 * `savedGrants` localStorage record (the existing `saved_grants` data model)
 * so GrantSearch (list + grid cards), GrantDetailPage, and SavedGrantsPage no
 * longer each carry their own copy of the same read/write/toast logic.
 *
 * Save is intentionally independent from Get Alert (see useGrantAlerts). Do
 * not add alert side-effects here — toggling Save must never change alert
 * state, and vice versa.
 */

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "savedGrants";
const UPDATE_EVENT = "savedGrantsUpdated";

interface SavableGrant {
  id: string;
  title: string;
  [key: string]: any;
}

function readSavedGrants(): any[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function useSavedGrants() {
  const [savedGrants, setSavedGrants] = useState<any[]>(() => readSavedGrants());

  useEffect(() => {
    const sync = () => setSavedGrants(readSavedGrants());
    window.addEventListener(UPDATE_EVENT, sync);
    return () => window.removeEventListener(UPDATE_EVENT, sync);
  }, []);

  const isGrantSaved = useCallback(
    (grantId: string) => savedGrants.some((g) => g.id === grantId),
    [savedGrants]
  );

  const saveGrant = useCallback((grant: SavableGrant, options?: { silent?: boolean }) => {
    const current = readSavedGrants();
    if (current.some((g: any) => g.id === grant.id)) return;

    // TODO(product decision): there is no free-tier save limit enforced today.
    // If one is introduced, this is the single choke point to gate it —
    // return early here (and optionally toast an "upgrade" message) before
    // the grant is persisted. Do NOT gate useGrantAlerts.setAlertEnabled from
    // this same limit unless Product explicitly decides Get Alert should be
    // blocked by the save limit (see useGrantAlerts.ts for the mirrored note).
    const recent = JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]");
    const recentGrant = recent.find((g: any) => g.id === grant.id);
    const grantToSave = {
      ...grant,
      savedAt: Date.now(),
      lastViewed: recentGrant?.lastViewed || Date.now(),
    };
    const updated = [grantToSave, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedGrants(updated);
    window.dispatchEvent(new Event(UPDATE_EVENT));

    if (!options?.silent) {
      toast.success("Grant saved", {
        description: `"${grant.title}" was added to your saved grants.`,
        duration: 4000,
      });
    }
  }, []);

  const unsaveGrant = useCallback((grant: SavableGrant, options?: { silent?: boolean }) => {
    const current = readSavedGrants();
    const updated = current.filter((g: any) => g.id !== grant.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedGrants(updated);
    window.dispatchEvent(new Event(UPDATE_EVENT));

    if (!options?.silent) {
      toast("Grant removed from saved grants", {
        description: `"${grant.title}" was removed from your saved grants.`,
        duration: 4000,
      });
    }
  }, []);

  return { savedGrants, isGrantSaved, saveGrant, unsaveGrant };
}
