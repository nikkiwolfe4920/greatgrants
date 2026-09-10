import { Building2, FileSearch, Search, type LucideIcon } from "lucide-react";

/**
 * The locked-demo mini-tour shown in DemoOnlyBar's center — a "Step X of 6"
 * stepper linking the locked walkthrough pages in a fixed order, ported
 * from three Figma step-card designs
 * (https://www.figma.com/design/AJQoDJAJZL2ItawgAfLYh3/Great-Grants-MVP,
 * nodes 14101:13562, 14101:13625, 14101:13675). Those three cards share
 * their title/description copy verbatim with the "organization", "search"
 * and "grant-detail" stops in demoTour.ts's public /marketing walkthrough —
 * same product story, told here as a locked sequence instead of a
 * freely-clickable one — but carry their own step numbering (1-3 of an
 * eventual 6), so this is a separate list rather than a re-export.
 *
 * Only 3 of the eventual 6 steps exist yet. That's fine: getPreviousTourStep
 * / getNextTourStep return null past either end of this array, and
 * DemoOnlyBar disables whichever arrow gets a null — so /organization-demo
 * (step 1) has no back, and today's last step has no forward, with zero
 * special-casing. Appending steps 4-6 here is all a future page needs to
 * join the tour.
 */
export interface LockedDemoTourStep {
  /** The locked route this step lives on — see lockedDemoRoutes.ts. */
  path: string;
  stepNumber: number;
  totalSteps: number;
  title: string;
  /** Shown as a hover tooltip on the compact bar card — see DemoOnlyBar. */
  description: string;
  icon: LucideIcon;
}

export const LOCKED_DEMO_TOUR: LockedDemoTourStep[] = [
  {
    path: "/organization-demo",
    stepNumber: 1,
    totalSteps: 6,
    title: "Your organization profile",
    description:
      "Your EIN, budget, leadership, service area and boilerplate narratives, entered once and reused on every application after that.",
    icon: Building2,
  },
  {
    path: "/search-demo",
    stepNumber: 2,
    totalSteps: 6,
    title: "Curated grant search",
    description:
      "Federal, state and foundation opportunities filtered by what you've already told us — not a keyword box on a government website.",
    icon: Search,
  },
  {
    path: "/org-detail-demo",
    stepNumber: 3,
    totalSteps: 6,
    title: "A grant, in full",
    description:
      "Everything a funder published, read for you: award range, eligibility, deadlines, required attachments and how hard this one really is.",
    icon: FileSearch,
  },
];

export function getLockedDemoTourStep(pathname: string): LockedDemoTourStep | null {
  return LOCKED_DEMO_TOUR.find((step) => step.path === pathname) ?? null;
}

export function getPreviousTourStep(pathname: string): LockedDemoTourStep | null {
  const index = LOCKED_DEMO_TOUR.findIndex((step) => step.path === pathname);
  if (index <= 0) return null;
  return LOCKED_DEMO_TOUR[index - 1];
}

export function getNextTourStep(pathname: string): LockedDemoTourStep | null {
  const index = LOCKED_DEMO_TOUR.findIndex((step) => step.path === pathname);
  if (index === -1) return null;
  return LOCKED_DEMO_TOUR[index + 1] ?? null;
}
