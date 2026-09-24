/**
 * Persistence + formatting helpers for the section assignment feature (see
 * useSectionAssignments and SectionAssignmentControl). Assignment state
 * (who a section is assigned to, its review status, and when it was last
 * saved) is stored client-side in localStorage, keyed by application, so it
 * survives navigation between /applications and /application/:id/s/:id in
 * the same way other prototype state does (see e.g. the per-section file
 * uploads in ApplicationsPage).
 */

import { CURRENT_USER_ID } from "@/data/orgMembers";

export type SectionReviewStatus = "editing" | "in-review" | "approved";

export interface SectionAssignmentRecord {
  assigneeId: string;
  reviewStatus: SectionReviewStatus;
  /** ISO timestamp of the last save, or null if the section has never been saved. */
  lastSavedAt: string | null;
}

export type ApplicationAssignments = Record<string, SectionAssignmentRecord>;
export type AllAssignments = Record<string, ApplicationAssignments>;

const STORAGE_KEY = "ggrants:section-assignments";

export function defaultAssignmentRecord(seedLastSaved?: string | null): SectionAssignmentRecord {
  return {
    assigneeId: CURRENT_USER_ID,
    reviewStatus: "editing",
    lastSavedAt: seedLastSaved ?? null,
  };
}

export function loadAllAssignments(): AllAssignments {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AllAssignments) : {};
  } catch {
    return {};
  }
}

export function saveAllAssignments(all: AllAssignments): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    // Best-effort — storage may be full or unavailable (private browsing).
  }
}

export const REVIEW_STATUS_LABEL: Record<SectionReviewStatus, string> = {
  editing: "Editing",
  "in-review": "In Review",
  approved: "Approved",
};

/**
 * Formats a "last saved" label. Accepts either an ISO timestamp (set when
 * the user actually saves something during this session) or a pre-formatted
 * display string seeded from the mock data (e.g. "2 hours ago"), which is
 * returned as-is.
 */
export function formatRelativeTime(iso: string | null | undefined): string {
  if (!iso) return "Not yet saved";

  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return iso;

  const diffMs = Date.now() - then;
  const diffMinutes = Math.round(diffMs / 60000);

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes === 1 ? "" : "s"} ago`;

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;

  const diffDays = Math.round(diffHours / 24);
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;

  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}
