export interface MemberProfile {
  name: string;
  initials: string;
  orgName: string;
  ueiOnFile: boolean;
  contactName: string;
  contactEmail: string;
}

export interface MemberProgram {
  id: string;
  name: string;
  focusAreas: string;
  budget: number;
  peopleServed: number;
  serviceArea: string;
  description: string;
  relevantExperience: string;
  isBestMatch?: boolean;
}

/** The signed-in sub-recipient viewing /publicpartner-open-member. */
export const MEMBER_PROFILE: MemberProfile = {
  name: "Maya Chen",
  initials: "MC",
  orgName: "Eastside Literacy Project",
  ueiOnFile: true,
  contactName: "Maya Chen",
  contactEmail: "maya@eastsideliteracy.org",
};

/**
 * This member's existing programs, offered in the "Program to propose"
 * select. Only the best-match program has a full description and service
 * area on file in this preview — the others still carry real budget/reach
 * numbers (shown in the dropdown) but leave the descriptive fields for the
 * member to fill in if they pick one of them.
 */
export const MEMBER_PROGRAMS: MemberProgram[] = [
  {
    id: "community-nutrition-classes",
    name: "Community Nutrition Classes",
    focusAreas: "Food Security, Health Access",
    budget: 140000,
    peopleServed: 1200,
    serviceArea: "Gresham, Fairview and Troutdale, OR",
    description:
      "Community Nutrition Classes offers 6-week cooking and nutrition courses and monthly demonstrations at food pantries in east Multnomah County, taught by bilingual community health workers.",
    relevantExperience: "SNAP-Ed subgrantee 2022–2025 through Oregon State University Extension.",
    isBestMatch: true,
  },
  {
    id: "family-literacy-nights",
    name: "Family Literacy Nights",
    focusAreas: "Youth Education",
    budget: 85000,
    peopleServed: 600,
    serviceArea: "",
    description: "",
    relevantExperience: "",
  },
  {
    id: "summer-reading-bridge",
    name: "Summer Reading Bridge",
    focusAreas: "Youth Education",
    budget: 60000,
    peopleServed: 350,
    serviceArea: "",
    description: "",
    relevantExperience: "",
  },
];
