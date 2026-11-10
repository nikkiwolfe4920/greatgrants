import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PrivateOpportunityDetail } from "@/data/privateOpportunities";

/**
 * Editing state for one private opportunity (/super-admin-op).
 *
 *  - `draft` is what the admin is editing; every change is auto-saved to
 *    localStorage (debounced) and stamps `lastSavedAt`.
 *  - `published` is the live version. `dirty` (draft ≠ published) is what
 *    enables "Publish Changes"; publishing copies draft → published and
 *    stamps `lastPublishedAt`.
 *  - `discardDraft` throws unpublished edits away (used when the admin
 *    confirms leaving the page).
 *  - Open ⇄ Closed is applied to BOTH draft and published immediately — it
 *    isn't an edit to content, so it neither needs Publish nor counts as
 *    unpublished changes. `closedAt` records when it was closed.
 *
 * Mock persistence only (localStorage) — swap `load`/`persist` for the API.
 */

const AUTOSAVE_DELAY_MS = 600;
/** Seed "last published" stamp for opportunities that have never been edited. */
const SEED_PUBLISHED_AT = new Date("2026-11-03T15:30:00").getTime();

interface Stored {
  published: PrivateOpportunityDetail;
  draft: PrivateOpportunityDetail;
  lastPublishedAt: number;
  lastSavedAt: number | null;
}

const storageKey = (id: string) => `privateOpportunity:v1:${id}`;

function load(seed: PrivateOpportunityDetail): Stored {
  try {
    const raw = localStorage.getItem(storageKey(seed.id));
    if (raw) {
      const parsed = JSON.parse(raw) as Stored;
      if (parsed?.published && parsed?.draft) return parsed;
    }
  } catch {
    /* fall through to seed */
  }
  return { published: seed, draft: seed, lastPublishedAt: SEED_PUBLISHED_AT, lastSavedAt: null };
}

function persist(id: string, data: Stored) {
  try {
    localStorage.setItem(storageKey(id), JSON.stringify(data));
  } catch {
    /* storage unavailable — editing still works in memory */
  }
}

export type SaveState = "idle" | "saving" | "saved";

export function usePrivateOpportunityEditor(seed: PrivateOpportunityDetail) {
  const id = seed.id;
  const [initial] = useState(() => load(seed));
  const [draft, setDraft] = useState(initial.draft);
  const [published, setPublished] = useState(initial.published);
  const [lastPublishedAt, setLastPublishedAt] = useState(initial.lastPublishedAt);
  const [lastSavedAt, setLastSavedAt] = useState<number | null>(initial.lastSavedAt);
  const [saveState, setSaveState] = useState<SaveState>(initial.lastSavedAt ? "saved" : "idle");

  // Latest values for callbacks / timers that must not close over stale state.
  const latest = useRef({ draft, published, lastPublishedAt, lastSavedAt });
  latest.current = { draft, published, lastPublishedAt, lastSavedAt };

  const dirty = useMemo(() => JSON.stringify(draft) !== JSON.stringify(published), [draft, published]);
  const restoredDraft = useRef(JSON.stringify(initial.draft) !== JSON.stringify(initial.published)).current;

  // Auto-save: debounce after each change to the draft.
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setSaveState("saving");
    const timer = window.setTimeout(() => {
      const now = Date.now();
      persist(id, { ...latest.current, lastSavedAt: now });
      setLastSavedAt(now);
      setSaveState("saved");
    }, AUTOSAVE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [draft, id]);

  const update = useCallback((fn: (d: PrivateOpportunityDetail) => PrivateOpportunityDetail) => {
    setDraft(fn);
  }, []);

  const publish = useCallback(() => {
    const now = Date.now();
    const { draft: d } = latest.current;
    setPublished(d);
    setLastPublishedAt(now);
    persist(id, { published: d, draft: d, lastPublishedAt: now, lastSavedAt: latest.current.lastSavedAt });
    return now;
  }, [id]);

  const discardDraft = useCallback(() => {
    const { published: p, lastPublishedAt: lp } = latest.current;
    setDraft(p);
    persist(id, { published: p, draft: p, lastPublishedAt: lp, lastSavedAt: null });
  }, [id]);

  const setStatus = useCallback(
    (status: "Open" | "Closed") => {
      const closedAt = status === "Closed" ? Date.now() : null;
      const apply = (d: PrivateOpportunityDetail) => ({ ...d, status, closedAt });
      setDraft(apply);
      setPublished(apply);
      // Persist right away: closing must stick even if the page is left before autosave fires.
      const { draft: d, published: p, lastPublishedAt: lp } = latest.current;
      persist(id, { published: apply(p), draft: apply(d), lastPublishedAt: lp, lastSavedAt: Date.now() });
    },
    [id],
  );

  return { draft, published, dirty, restoredDraft, lastPublishedAt, lastSavedAt, saveState, update, publish, discardDraft, setStatus };
}
