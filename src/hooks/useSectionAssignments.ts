import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { CURRENT_USER_ID, getOrgMember } from "@/data/orgMembers";
import type { Section } from "@/data/applications";
import {
  type AllAssignments,
  type SectionAssignmentRecord,
  type SectionReviewStatus,
  defaultAssignmentRecord,
  loadAllAssignments,
  saveAllAssignments,
} from "@/lib/sectionAssignments";

interface AssignableApplication {
  id: string;
  sections: Section[];
}

/**
 * Owns per-section "assigned to" + review status + last-saved state for one
 * or more applications, persisted to localStorage (see sectionAssignments.ts)
 * so it's shared between /applications and /application/:id/s/:id.
 *
 * Business rule: reassigning a section away from the current user
 * (Olivia Rhye) automatically moves it into "In Review" — see assignSection.
 * Reassigning it back doesn't force a status change, so an "Approved" status
 * set by the reviewer survives the handoff back to its owner.
 */
export function useSectionAssignments(applications: AssignableApplication[]) {
  const [all, setAll] = useState<AllAssignments>(() => loadAllAssignments());

  // Seed defaults for any (application, section) pair that doesn't have a
  // stored record yet — new applications/sections should show up already
  // assigned to Olivia Rhye rather than crashing on a missing lookup.
  useEffect(() => {
    setAll((prev) => {
      let changed = false;
      const next: AllAssignments = { ...prev };

      for (const app of applications) {
        const existingApp = next[app.id] ?? {};
        let appChanged = false;
        const nextApp = { ...existingApp };

        for (const section of app.sections) {
          if (!nextApp[section.id]) {
            nextApp[section.id] = defaultAssignmentRecord(section.lastEditedTime ?? null);
            appChanged = true;
          }
        }

        if (appChanged) {
          next[app.id] = nextApp;
          changed = true;
        }
      }

      return changed ? next : prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applications.map((a) => `${a.id}:${a.sections.map((s) => s.id).join(",")}`).join("|")]);

  useEffect(() => {
    saveAllAssignments(all);
  }, [all]);

  const getAssignment = useCallback(
    (applicationId: string, sectionId: string): SectionAssignmentRecord => {
      return all[applicationId]?.[sectionId] ?? defaultAssignmentRecord();
    },
    [all],
  );

  const updateRecord = useCallback(
    (applicationId: string, sectionId: string, updater: (prev: SectionAssignmentRecord) => SectionAssignmentRecord) => {
      setAll((prev) => {
        const prevRecord = prev[applicationId]?.[sectionId] ?? defaultAssignmentRecord();
        return {
          ...prev,
          [applicationId]: {
            ...prev[applicationId],
            [sectionId]: updater(prevRecord),
          },
        };
      });
    },
    [],
  );

  const assignSection = useCallback(
    (applicationId: string, sectionId: string, memberId: string) => {
      updateRecord(applicationId, sectionId, (prev) => ({
        ...prev,
        assigneeId: memberId,
        // Reassigning away from the owner kicks off a review cycle;
        // reassigning back to the owner leaves the status alone so an
        // "Approved" verdict survives the handoff.
        reviewStatus: memberId === CURRENT_USER_ID ? prev.reviewStatus : "in-review",
      }));

      const member = getOrgMember(memberId);
      if (memberId === CURRENT_USER_ID) {
        toast.success(`Assigned back to ${member.name}`);
      } else {
        toast.success(`Assigned to ${member.name}`, {
          description: `${member.name} will be notified to review this section.`,
        });
      }
    },
    [updateRecord],
  );

  const setReviewStatus = useCallback(
    (applicationId: string, sectionId: string, status: SectionReviewStatus) => {
      updateRecord(applicationId, sectionId, (prev) => ({ ...prev, reviewStatus: status }));
      if (status === "approved") {
        toast.success("Section approved", {
          description: "You can assign it back to the owner when you're ready.",
        });
      }
    },
    [updateRecord],
  );

  const markSaved = useCallback(
    (applicationId: string, sectionId: string) => {
      updateRecord(applicationId, sectionId, (prev) => ({ ...prev, lastSavedAt: new Date().toISOString() }));
    },
    [updateRecord],
  );

  return { getAssignment, assignSection, setReviewStatus, markSaved };
}
