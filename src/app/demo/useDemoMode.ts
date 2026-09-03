/**
 * useDemoMode
 *
 * Single source of truth for "this visitor is walking through the public
 * demo". Set when someone opens a tour stop from /marketing, read by the
 * demo banner that rides on top of every app page
 * (src/app/components/demo/DemoBanner.tsx).
 *
 * Why it persists rather than living in a query string: the whole point of
 * the walkthrough is that the visitor explores the *real* product, clicking
 * the real sidebar and the real cards. A `?demo=1` param would be lost on the
 * first in-app navigation and the "demo only" framing would vanish with it —
 * which is precisely when a prospect starts wondering whether the data in
 * front of them is somebody's actual grant portfolio.
 *
 * Follows the same client-only, localStorage-backed, cross-component pattern
 * as useCreditUsage and useGrantAlerts: one storage key, a custom window
 * event so every mounted consumer re-syncs the moment one of them writes.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { DEMO_STOPS } from "./demoTour";
import { seedDemoWorkspace } from "./demoSeed";

const STORAGE_KEY = "demoMode";
const UPDATE_EVENT = "demoModeUpdated";

interface DemoRecord {
  active: boolean;
  /** Stop ids the visitor has opened, so the tour can show real progress. */
  visitedStopIds: string[];
}

const DEFAULT_RECORD: DemoRecord = { active: false, visitedStopIds: [] };

function readRecord(): DemoRecord {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return DEFAULT_RECORD;
    const parsed = JSON.parse(raw);
    return {
      active: !!parsed?.active,
      visitedStopIds: Array.isArray(parsed?.visitedStopIds) ? parsed.visitedStopIds : [],
    };
  } catch {
    return DEFAULT_RECORD;
  }
}

function writeRecord(next: DemoRecord) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Private browsing with storage disabled: the banner simply won't
    // persist across navigations. Nothing else in the app depends on it.
  }
  window.dispatchEvent(new Event(UPDATE_EVENT));
}

/**
 * Turns demo mode on and records the stop being opened. Safe to call from an
 * event handler immediately before navigating — the banner reads the same
 * record on mount, so it is already correct when the app page paints.
 */
export function enterDemoMode(stopId?: string) {
  // Populate the sample workspace before the app page mounts, so no tour stop
  // greets a prospect with an empty state. See demoSeed.ts.
  seedDemoWorkspace();

  const current = readRecord();
  const visited = stopId && !current.visitedStopIds.includes(stopId)
    ? [...current.visitedStopIds, stopId]
    : current.visitedStopIds;
  writeRecord({ active: true, visitedStopIds: visited });
}

export function exitDemoMode() {
  writeRecord({ active: false, visitedStopIds: [] });
}

export function useDemoMode() {
  const [record, setRecord] = useState<DemoRecord>(() => readRecord());

  useEffect(() => {
    const sync = () => setRecord(readRecord());
    window.addEventListener(UPDATE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(UPDATE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const markStopVisited = useCallback((stopId: string) => {
    const current = readRecord();
    if (!current.active || current.visitedStopIds.includes(stopId)) return;
    writeRecord({ ...current, visitedStopIds: [...current.visitedStopIds, stopId] });
  }, []);

  const startDemo = useCallback((stopId?: string) => enterDemoMode(stopId), []);
  const endDemo = useCallback(() => exitDemoMode(), []);

  const progressPercent = useMemo(() => {
    if (DEMO_STOPS.length === 0) return 0;
    const seen = record.visitedStopIds.filter((id) =>
      DEMO_STOPS.some((stop) => stop.id === id),
    ).length;
    return Math.round((seen / DEMO_STOPS.length) * 100);
  }, [record.visitedStopIds]);

  return {
    isDemo: record.active,
    visitedStopIds: record.visitedStopIds,
    visitedCount: record.visitedStopIds.length,
    totalStops: DEMO_STOPS.length,
    progressPercent,
    startDemo,
    endDemo,
    markStopVisited,
  };
}
