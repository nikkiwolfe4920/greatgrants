/**
 * useDismissedGrants
 *
 * Single source of truth for the "Not Relevant" action — the intuitive,
 * non-destructive way a user tells search "don't show me this" without
 * losing it entirely. Dismissing a grant never deletes it: it's recorded
 * here (localStorage, cross-tab via the "storage" event and cross-component
 * via a custom "dismissedGrantsUpdated" event, same pattern as
 * useGrantAlerts) so callers can sort dismissed grants to the bottom of
 * their results instead of filtering them out — deprioritized, but always
 * obtainable again with one click ("Restore" on the card, or the toast's
 * "Undo" action right after dismissing).
 *
 * A second, opt-in layer lets a user additionally hide an entire category
 * they've decided is never relevant to them (e.g. after dismissing several
 * "Business" grants in a row) — this one DOES remove matching grants from
 * search results, on the theory that "known-ineligible categories"
 * shouldn't keep resurfacing. It's always an explicit, user-initiated
 * action (never inferred/automatic) and just as reversible, surfaced as a
 * removable filter pill wherever it's applied.
 */

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "dismissedGrants";
const UPDATE_EVENT = "dismissedGrantsUpdated";
const CATEGORY_STORAGE_KEY = "dismissedGrantCategories";
const CATEGORY_UPDATE_EVENT = "dismissedGrantCategoriesUpdated";

export type DismissReason = "not-relevant" | "not-eligible" | "already-applied";

export interface DismissedGrantRecord {
  grantId: string;
  title: string;
  category?: string;
  reason: DismissReason;
  dismissedAt: string;
}

interface DismissableGrant {
  id: string;
  title: string;
  category?: string;
}

function readDismissedGrants(): DismissedGrantRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function readDismissedCategories(): string[] {
  try {
    const raw = localStorage.getItem(CATEGORY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useDismissedGrants() {
  const [dismissed, setDismissed] = useState<DismissedGrantRecord[]>(() => readDismissedGrants());
  const [dismissedCategories, setDismissedCategories] = useState<string[]>(() => readDismissedCategories());

  useEffect(() => {
    const syncGrants = () => setDismissed(readDismissedGrants());
    const syncCategories = () => setDismissedCategories(readDismissedCategories());
    window.addEventListener(UPDATE_EVENT, syncGrants);
    window.addEventListener(CATEGORY_UPDATE_EVENT, syncCategories);
    // "storage" only fires in OTHER tabs, not the one making the change —
    // needed alongside the custom events above for cross-tab sync.
    window.addEventListener("storage", syncGrants);
    window.addEventListener("storage", syncCategories);
    return () => {
      window.removeEventListener(UPDATE_EVENT, syncGrants);
      window.removeEventListener(CATEGORY_UPDATE_EVENT, syncCategories);
      window.removeEventListener("storage", syncGrants);
      window.removeEventListener("storage", syncCategories);
    };
  }, []);

  const isGrantDismissed = useCallback(
    (grantId: string) => dismissed.some((d) => d.grantId === grantId),
    [dismissed]
  );

  const isCategoryHidden = useCallback(
    (category?: string) => !!category && dismissedCategories.includes(category),
    [dismissedCategories]
  );

  const restoreGrant = useCallback((grantId: string, options?: { silent?: boolean; grantTitle?: string }) => {
    const current = readDismissedGrants();
    const removed = current.find((d) => d.grantId === grantId);
    const updated = current.filter((d) => d.grantId !== grantId);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setDismissed(updated);
    window.dispatchEvent(new Event(UPDATE_EVENT));

    if (options?.silent) return;

    const title = options?.grantTitle || removed?.title || "This grant";
    toast.success("Restored to your results", {
      description: `"${title}" is back in its normal spot.`,
      duration: 3500,
    });
  }, []);

  const dismissGrant = useCallback(
    (grant: DismissableGrant, reason: DismissReason = "not-relevant", options?: { silent?: boolean }) => {
      const current = readDismissedGrants();
      if (current.some((d) => d.grantId === grant.id)) return;

      const updated: DismissedGrantRecord[] = [
        ...current,
        {
          grantId: grant.id,
          title: grant.title,
          category: grant.category,
          reason,
          dismissedAt: new Date().toISOString(),
        },
      ];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setDismissed(updated);
      window.dispatchEvent(new Event(UPDATE_EVENT));

      if (options?.silent) return;

      toast("Marked as not relevant", {
        description: `We'll move "${grant.title}" down in your results. It's never deleted — undo anytime.`,
        action: {
          label: "Undo",
          onClick: () => restoreGrant(grant.id, { silent: true, grantTitle: grant.title }),
        },
        duration: 6000,
      });
    },
    [restoreGrant]
  );

  const unhideCategory = useCallback((category: string, options?: { silent?: boolean }) => {
    const current = readDismissedCategories();
    const updated = current.filter((c) => c !== category);

    localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(updated));
    setDismissedCategories(updated);
    window.dispatchEvent(new Event(CATEGORY_UPDATE_EVENT));

    if (options?.silent) return;
    toast.success(`Showing "${category}" grants again`, { duration: 3500 });
  }, []);

  const hideCategory = useCallback(
    (category: string) => {
      const current = readDismissedCategories();
      if (current.includes(category)) return;
      const updated = [...current, category];

      localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(updated));
      setDismissedCategories(updated);
      window.dispatchEvent(new Event(CATEGORY_UPDATE_EVENT));

      toast(`Hiding "${category}" grants`, {
        description: "We'll stop showing this category in your search results. Remove the filter pill to undo.",
        action: {
          label: "Undo",
          onClick: () => unhideCategory(category, { silent: true }),
        },
        duration: 6000,
      });
    },
    [unhideCategory]
  );

  return {
    dismissed,
    dismissedCategories,
    isGrantDismissed,
    isCategoryHidden,
    dismissGrant,
    restoreGrant,
    hideCategory,
    unhideCategory,
  };
}
