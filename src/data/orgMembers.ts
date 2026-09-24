/**
 * Organization member roster used by the section assignment feature (see
 * SectionAssignmentControl) on /application/:id/s/:id and /applications.
 * A stand-in for a real "org members" API — enough identities to make the
 * "Assign to" picker feel real in the prototype.
 */

export interface OrgMember {
  id: string;
  name: string;
  initials: string;
  /** Background color for the avatar fallback. */
  avatarColor: string;
}

export const orgMembers: OrgMember[] = [
  { id: "olivia-rhye", name: "Olivia Rhye", initials: "OR", avatarColor: "#FEF3C7" },
  { id: "phoenix-baker", name: "Phoenix Baker", initials: "PB", avatarColor: "#DBEAFE" },
  { id: "lana-steiner", name: "Lana Steiner", initials: "LS", avatarColor: "#FCE7F3" },
  { id: "demi-wilkinson", name: "Demi Wilkinson", initials: "DW", avatarColor: "#E0E7FF" },
  { id: "candice-wu", name: "Candice Wu", initials: "CW", avatarColor: "#D1FAE5" },
  { id: "drew-cano", name: "Drew Cano", initials: "DC", avatarColor: "#FFE4E6" },
];

/**
 * The signed-in user for this prototype — matches the "Olivia Rhye" avatar
 * shown everywhere else in the app (nav, account settings, dashboard
 * greeting). Every section is pre-assigned to her by default.
 */
export const CURRENT_USER_ID = "olivia-rhye";

export function getOrgMember(id: string | undefined | null): OrgMember {
  return orgMembers.find((member) => member.id === id) ?? orgMembers[0];
}
