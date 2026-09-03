/**
 * useCreditUsage
 *
 * Single source of truth for subscription-tier credit usage — the numbers
 * behind the cream "credits" module in the left nav (SharedSidebar.tsx) and
 * the matching Plan & Credits card on the Dashboard.
 *
 * Both surfaces read from here so they can never disagree: "# of
 * Applications generated" and "remaining credits" are computed from one
 * record instead of being typed into two components.
 *
 * Follows the same client-only, localStorage-backed, cross-component pattern
 * as useAssessmentUsage and useGrantAlerts: one storage key, a custom window
 * event so every mounted consumer re-syncs the moment one of them writes.
 *
 * Eligibility assessments are deliberately NOT stored here — useAssessmentUsage
 * already owns that counter, so this hook reads its record rather than keeping
 * a second, driftable copy.
 */

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "creditUsage";
const UPDATE_EVENT = "creditUsageUpdated";

/** `null` limit means uncapped on this tier. */
export interface TierAllowance {
  applications: number | null;
  eligibility: number | null;
  coaching: number | null;
}

export interface TierPlan {
  id: TierId;
  /** Name as it appears on the pricing page and the Manage Plan screen. */
  name: string;
  /** One line explaining who the tier is for — used on the upgrade nudge. */
  tagline: string;
  allowance: TierAllowance;
}

export type TierId = "free" | "discovery" | "writer" | "enterprise";

// Tier catalog mirrors the subscription tiers documented in CopyPage.tsx
// ("Free", "Unlimited Search & Discovery", "AI Grant Writer", "Enterprise").
export const TIER_PLANS: Record<TierId, TierPlan> = {
  free: {
    id: "free",
    name: "Free",
    tagline: "Try one AI-drafted application and see how the process feels.",
    allowance: { applications: 1, eligibility: 3, coaching: 3 },
  },
  discovery: {
    id: "discovery",
    name: "Unlimited Search & Discovery",
    tagline: "Search and screen as many grants as you like before you write.",
    allowance: { applications: 1, eligibility: null, coaching: 3 },
  },
  writer: {
    id: "writer",
    name: "AI Grant Writer",
    tagline: "Draft, coach and export multiple applications each period.",
    allowance: { applications: 3, eligibility: null, coaching: null },
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Unlimited applications for teams applying at scale.",
    allowance: { applications: null, eligibility: null, coaching: null },
  },
};

/** The next tier up, used for the "upgrade" call to action. `null` at the top. */
const NEXT_TIER: Record<TierId, TierId | null> = {
  free: "discovery",
  discovery: "writer",
  writer: "enterprise",
  enterprise: null,
};

interface CreditRecord {
  tier: TierId;
  applicationsUsed: number;
  coachingUsed: number;
  /** Human-readable renewal date, e.g. "May 31st". */
  resetDate: string;
}

// Seed state matches what the sidebar module has always shown: an AI Grant
// Writer plan with all 3 application credits spent and a May 31st renewal.
const DEFAULT_RECORD: CreditRecord = {
  tier: "writer",
  applicationsUsed: 3,
  coachingUsed: 1,
  resetDate: "May 31st",
};

function readRecord(): CreditRecord {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return DEFAULT_RECORD;
    return { ...DEFAULT_RECORD, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_RECORD;
  }
}

function readEligibilityUsed(): number {
  try {
    const raw = localStorage.getItem("assessmentUsage");
    if (raw === null) return 0;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}

export interface CreditMeter {
  used: number;
  /** `null` when the tier is uncapped. */
  limit: number | null;
  remaining: number | null;
  isUnlimited: boolean;
  isExhausted: boolean;
  /** 0–100. Uncapped meters report 100 so the bar reads as "always full". */
  percentUsed: number;
}

function buildMeter(used: number, limit: number | null): CreditMeter {
  if (limit === null) {
    return { used, limit: null, remaining: null, isUnlimited: true, isExhausted: false, percentUsed: 100 };
  }
  const remaining = Math.max(0, limit - used);
  return {
    used,
    limit,
    remaining,
    isUnlimited: false,
    isExhausted: remaining === 0,
    percentUsed: limit === 0 ? 100 : Math.min(100, Math.round((used / limit) * 100)),
  };
}

export function useCreditUsage() {
  const [record, setRecord] = useState<CreditRecord>(() => readRecord());
  const [eligibilityUsed, setEligibilityUsed] = useState<number>(() => readEligibilityUsed());

  useEffect(() => {
    const sync = () => {
      setRecord(readRecord());
      setEligibilityUsed(readEligibilityUsed());
    };
    window.addEventListener(UPDATE_EVENT, sync);
    window.addEventListener("assessmentUsageUpdated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(UPDATE_EVENT, sync);
      window.removeEventListener("assessmentUsageUpdated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const write = useCallback((next: Partial<CreditRecord>) => {
    const updated = { ...readRecord(), ...next };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setRecord(updated);
    window.dispatchEvent(new Event(UPDATE_EVENT));
  }, []);

  /** Counts one more AI-generated application against the plan. */
  const recordApplicationGenerated = useCallback(() => {
    write({ applicationsUsed: readRecord().applicationsUsed + 1 });
  }, [write]);

  /** Counts one more AI coaching pass against the plan. */
  const recordCoachingUsed = useCallback(() => {
    write({ coachingUsed: readRecord().coachingUsed + 1 });
  }, [write]);

  const setTier = useCallback((tier: TierId) => write({ tier }), [write]);

  const plan = TIER_PLANS[record.tier];
  const nextTierId = NEXT_TIER[record.tier];

  const applications = useMemo(
    () => buildMeter(record.applicationsUsed, plan.allowance.applications),
    [record.applicationsUsed, plan.allowance.applications],
  );
  const eligibility = useMemo(
    () => buildMeter(eligibilityUsed, plan.allowance.eligibility),
    [eligibilityUsed, plan.allowance.eligibility],
  );
  const coaching = useMemo(
    () => buildMeter(record.coachingUsed, plan.allowance.coaching),
    [record.coachingUsed, plan.allowance.coaching],
  );

  return {
    plan,
    tier: record.tier,
    nextPlan: nextTierId ? TIER_PLANS[nextTierId] : null,
    resetDate: record.resetDate,
    applications,
    eligibility,
    coaching,
    setTier,
    recordApplicationGenerated,
    recordCoachingUsed,
  };
}
