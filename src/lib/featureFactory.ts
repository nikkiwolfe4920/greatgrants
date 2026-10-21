import { addDays, differenceInCalendarDays, format, parseISO, startOfDay } from "date-fns";
import type { FeatureFactoryProject, ReleasePost } from "@/data/featureFactory/types";

/**
 * Where a cycle sits relative to today.
 * - `shipped`     — cycle over and a post was published
 * - `in-progress` — today falls inside the cycle
 * - `planned`     — cycle hasn't started
 * - `missed`      — cycle over with no post; shown so a skipped cycle is visible, not silent
 */
export type CycleStatus = "shipped" | "in-progress" | "planned" | "missed";

export interface Cycle {
  sprint: number;
  start: Date;
  end: Date;
  /** The day the post goes out. */
  releaseDate: Date;
  status: CycleStatus;
  post?: ReleasePost;
}

export function buildCycles(project: FeatureFactoryProject, today: Date = new Date()): Cycle[] {
  const start0 = startOfDay(parseISO(project.startDate));
  const now = startOfDay(today);
  const { cadenceDays, releaseOffsetDays, upcomingSlots } = project;

  const postBySprint = new Map(project.releases.map((r) => [r.sprint, r]));
  const currentSprint = Math.max(1, Math.floor(differenceInCalendarDays(now, start0) / cadenceDays) + 1);
  const lastPosted = Math.max(0, ...project.releases.map((r) => r.sprint));
  const lastSprint = Math.max(currentSprint + upcomingSlots, lastPosted);

  const cycles: Cycle[] = [];
  for (let sprint = 1; sprint <= lastSprint; sprint++) {
    const start = addDays(start0, (sprint - 1) * cadenceDays);
    const end = addDays(start, cadenceDays - 1);
    const post = postBySprint.get(sprint);

    let status: CycleStatus;
    if (now < start) status = "planned";
    else if (now <= end) status = "in-progress";
    else status = post ? "shipped" : "missed";

    cycles.push({ sprint, start, end, releaseDate: addDays(start, releaseOffsetDays), status, post });
  }
  // Newest first — a feed, not a plan.
  return cycles.reverse();
}

export function formatRange(start: Date, end: Date): string {
  const sameYear = start.getFullYear() === end.getFullYear();
  return `${format(start, sameYear ? "MMM d" : "MMM d, yyyy")} – ${format(end, "MMM d, yyyy")}`;
}
