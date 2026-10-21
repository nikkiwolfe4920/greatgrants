import { useEffect, useState } from "react";

export interface PublishedProgram {
  id: string;
  title: string;
}

function readPublishedPrograms(): PublishedProgram[] {
  try {
    const raw = localStorage.getItem("projects");
    if (!raw) return [];
    return (JSON.parse(raw) as Array<{ id: string; title?: string; status?: string }>)
      .filter((p) => p.status === "published" && p.title?.trim())
      .map((p) => ({ id: p.id, title: p.title!.trim() }));
  } catch {
    return [];
  }
}

/**
 * The user's published programs, read from the same `projects` localStorage
 * key ProjectDetailsPage writes, and re-synced when it dispatches
 * `projectsUpdated` (or another tab changes storage).
 */
export function usePublishedPrograms(): PublishedProgram[] {
  const [programs, setPrograms] = useState<PublishedProgram[]>(readPublishedPrograms);

  useEffect(() => {
    const sync = () => setPrograms(readPublishedPrograms());
    window.addEventListener("projectsUpdated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("projectsUpdated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return programs;
}
