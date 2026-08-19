/**
 * useAssessmentUsage
 *
 * Tracks how many of the user's plan-included eligibility assessments have
 * been used, so /eligibility-assessment (and any other surface that runs the
 * eligibility workflow) can make the subscription limit clear before,
 * during, and after a run. Every full run of EligibilityWorkflowPanel that
 * reaches "Check My Eligibility" counts as one used assessment, regardless
 * of which grant it was run against — the limit is per subscription, not
 * per grant.
 *
 * Follows the same client-only, localStorage-backed, cross-component
 * pattern as useGrantAlerts: a single storage key, a custom window event so
 * every mounted consumer re-syncs the moment one of them writes, and a
 * toast confirming what just happened.
 */

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "assessmentUsage";
const UPDATE_EVENT = "assessmentUsageUpdated";

/** Total eligibility assessments included per billing period, across every grant. */
export const ASSESSMENT_LIMIT = 3;

export interface AssessmentCompletionRecord {
  id: string;
  grantId: string;
  grantTitle: string;
  completedAt: string;
}

function readAssessmentUsage(): AssessmentCompletionRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function useAssessmentUsage() {
  const [records, setRecords] = useState<AssessmentCompletionRecord[]>(() => readAssessmentUsage());

  useEffect(() => {
    const sync = () => setRecords(readAssessmentUsage());
    window.addEventListener(UPDATE_EVENT, sync);
    return () => window.removeEventListener(UPDATE_EVENT, sync);
  }, []);

  const usedCount = records.length;
  const remaining = Math.max(0, ASSESSMENT_LIMIT - usedCount);
  const isExhausted = remaining === 0;

  // Marks one assessment as used. EligibilityWorkflowPanel calls this
  // exactly once per completed run (on the false→true showReport
  // transition), so retaking the flow from scratch — not just viewing an
  // already-generated report — is what consumes another one.
  const recordCompletion = useCallback((grantId: string, grantTitle: string) => {
    const current = readAssessmentUsage();
    const updated: AssessmentCompletionRecord[] = [
      ...current,
      { id: `assessment-${Date.now()}`, grantId, grantTitle, completedAt: new Date().toISOString() },
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setRecords(updated);
    window.dispatchEvent(new Event(UPDATE_EVENT));

    const remainingAfter = Math.max(0, ASSESSMENT_LIMIT - updated.length);
    if (remainingAfter === 0) {
      toast("Assessment limit reached", {
        description: `You've now used all ${ASSESSMENT_LIMIT} eligibility assessments included in your plan this period. Upgrade to run more.`,
        duration: 5000,
      });
    } else {
      toast.success("Assessment marked as used", {
        description: `${updated.length} of ${ASSESSMENT_LIMIT} assessments used this period — ${remainingAfter} remaining.`,
        duration: 4000,
      });
    }
  }, []);

  return { records, usedCount, limit: ASSESSMENT_LIMIT, remaining, isExhausted, recordCompletion };
}
