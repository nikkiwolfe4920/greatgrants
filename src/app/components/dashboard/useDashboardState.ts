import { useEffect, useMemo, useState } from "react";
import { useReadinessScore } from "@/app/contexts/ReadinessScoreContext";
import { mockApplications } from "@/data/applications";
import { PROCESS_STEPS } from "@/data/greatGrantsProcess";
import type { StepStatus } from "./GreatGrantsProcess";

/**
 * Derives everything the Dashboard needs from the app's real client-side
 * state, in one place.
 *
 * The Great Grants Process rail, the feature summary tiles, and the welcome
 * header all describe the same underlying progress, so they read it from a
 * single derivation rather than each re-deriving "has this user created a
 * program?" slightly differently.
 *
 * State sources are the ones the rest of the app already writes to:
 *  - `onboardingComplete`        — OnboardingPage*.tsx
 *  - `orgProfileItemsRemaining`  — ReadinessScoreContext
 *  - `publishedProjectsCount`    — ProjectDetailsPage.tsx
 *  - `recentlyViewedGrants`      — GrantSearch.tsx / GrantDetailPage.tsx
 *  - `grantAlerts`               — useGrantAlerts (the Watch feature)
 *  - `assessmentUsage`           — useAssessmentUsage
 */

function readCount(key: string): number {
  try {
    return parseInt(localStorage.getItem(key) || "0", 10) || 0;
  } catch {
    return 0;
  }
}

function readArrayLength(key: string, filter?: (item: any) => boolean): number {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    if (!Array.isArray(parsed)) return 0;
    return filter ? parsed.filter(filter).length : parsed.length;
  } catch {
    return 0;
  }
}

export function useDashboardState() {
  const { score, orgProfileItemsRemaining } = useReadinessScore();

  const [publishedProgramsCount, setPublishedProgramsCount] = useState(0);
  const [watchListCount, setWatchListCount] = useState(0);
  const [recentlyViewedCount, setRecentlyViewedCount] = useState(0);
  const [assessmentsUsed, setAssessmentsUsed] = useState(0);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    const sync = () => {
      setPublishedProgramsCount(readCount("publishedProjectsCount"));
      setWatchListCount(readArrayLength("grantAlerts", (a) => !!a?.grantId));
      setRecentlyViewedCount(readArrayLength("recentlyViewedGrants"));
      setAssessmentsUsed(readArrayLength("assessmentUsage"));
      setOnboardingComplete(localStorage.getItem("onboardingComplete") === "true");
    };
    sync();
    // Mirror the event names the writing surfaces already dispatch, so the
    // dashboard updates without a reload when work happens in another tab.
    const events = ["projectsUpdated", "grantAlertsUpdated", "assessmentUsageUpdated", "storage"];
    events.forEach((e) => window.addEventListener(e, sync));
    return () => events.forEach((e) => window.removeEventListener(e, sync));
  }, []);

  const activeApplications = useMemo(
    () => mockApplications.filter((a) => a.applicationStatus === "active"),
    [],
  );
  const submittedApplications = useMemo(
    () => mockApplications.filter((a) => a.applicationStatus === "submitted"),
    [],
  );

  const hasDraft = mockApplications.length > 0;
  const hasCompletedApplication = activeApplications.some((app) =>
    app.sections.every((s) => s.status === "complete"),
  );
  const hasSubmitted = submittedApplications.length > 0;
  // A section that's been touched is evidence the user has actually worked
  // with coaching, rather than just generating a draft and walking away.
  const hasUsedCoaching = mockApplications.some((app) =>
    app.sections.some((s) => s.status === "in-progress" || s.aiEnhanced),
  );

  const sectionsRemaining = activeApplications.reduce(
    (acc, app) => acc + app.sections.filter((s) => s.status !== "complete").length,
    0,
  );

  const nearestDeadline = useMemo(() => {
    const upcoming = activeApplications
      .filter((a) => a.daysLeft > 0)
      .sort((a, b) => a.daysLeft - b.daysLeft);
    return upcoming[0] ?? null;
  }, [activeApplications]);

  /** Completion per process step, derived from the state above. */
  const statusByStep = useMemo<Record<string, StepStatus>>(() => {
    const done: Record<string, boolean> = {
      onboarding: onboardingComplete,
      "org-profile": orgProfileItemsRemaining === 0,
      program: publishedProgramsCount > 0,
      search: recentlyViewedCount > 0,
      "perfect-fit": watchListCount > 0 || assessmentsUsed > 0,
      "ai-draft": hasDraft,
      "ai-coaching": hasUsedCoaching,
      export: hasCompletedApplication,
      submit: hasSubmitted,
    };

    // The "current" step is the first one that isn't done. Everything after it
    // stays "upcoming" even if it happens to be individually satisfied, so the
    // rail reads as a path rather than a scattered checklist.
    const firstIncomplete = PROCESS_STEPS.find((step) => !done[step.id]);
    const result: Record<string, StepStatus> = {};
    for (const step of PROCESS_STEPS) {
      result[step.id] = done[step.id]
        ? "complete"
        : step.id === firstIncomplete?.id
        ? "current"
        : "upcoming";
    }
    return result;
  }, [
    onboardingComplete,
    orgProfileItemsRemaining,
    publishedProgramsCount,
    recentlyViewedCount,
    watchListCount,
    assessmentsUsed,
    hasDraft,
    hasUsedCoaching,
    hasCompletedApplication,
    hasSubmitted,
  ]);

  const currentStepId =
    PROCESS_STEPS.find((s) => statusByStep[s.id] === "current")?.id ??
    PROCESS_STEPS[PROCESS_STEPS.length - 1].id;

  const completedStepCount = PROCESS_STEPS.filter((s) => statusByStep[s.id] === "complete").length;

  return {
    readinessScore: score,
    orgProfileItemsRemaining,
    isOrgProfileComplete: orgProfileItemsRemaining === 0,
    publishedProgramsCount,
    watchListCount,
    recentlyViewedCount,
    assessmentsUsed,
    onboardingComplete,
    activeApplications,
    submittedApplications,
    sectionsRemaining,
    nearestDeadline,
    statusByStep,
    currentStepId,
    completedStepCount,
    totalStepCount: PROCESS_STEPS.length,
  };
}
