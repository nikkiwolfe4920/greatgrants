/**
 * Focus Areas taxonomy — organization-level, source of truth for the
 * `focusAreas: string[]` field on the Organization record (see
 * `src/data/types.ts`).
 *
 * This taxonomy previously lived inline in `OrganizationProfileForm.tsx`
 * as `focusAreaCategories`. It has been moved here unchanged (same parent
 * categories, same leaf values, same order) so it can be shared between the
 * compact Focus Areas field on the Details/Legal Info tab and anywhere else
 * that needs to render or look up the taxonomy.
 *
 * Rules that apply to everything in this file:
 *   - Only leaf/subcategory values are ever selected or stored. Parents are
 *     a display/grouping structure derived from this object — they are
 *     never written to `focusAreas`.
 *   - Do not add, remove, rename, or reorder leaf values here. Existing
 *     organizations already have `focusAreas` selections that reference
 *     these exact strings; changing them would silently invalidate saved
 *     data.
 */
export const FOCUS_AREA_TAXONOMY: Record<string, string[]> = {
  "Agriculture & Food Systems": [
    "Food Banks & Pantries",
    "Community Gardens",
    "Urban Agriculture",
    "Farm to Table Programs",
    "Food Security Initiatives",
    "Nutrition Education",
    "Sustainable Farming",
    "Agricultural Research",
    "Farmers Markets",
    "Food Waste Reduction",
    "Rural Agricultural Development",
    "Aquaculture & Fisheries",
    "School Meal Programs",
    "Food Justice & Access",
    "Agricultural Training",
  ],
  Education: [
    "Early Childhood Education",
    "K-12 Education",
    "Higher Education",
    "Adult Education & Literacy",
    "Special Education",
    "STEM Education",
    "Arts Education",
    "Vocational Training",
    "Educational Technology",
    "Teacher Development",
    "Scholarships & Financial Aid",
    "After-School Programs",
    "English as Second Language",
    "College Access Programs",
    "Educational Equity",
  ],
  "Health & Human Services": [
    "Primary Care",
    "Mental Health Services",
    "Substance Abuse Treatment",
    "Public Health",
    "Maternal & Child Health",
    "Senior Health Services",
    "Disability Services",
    "Preventive Care",
    "Health Education",
    "Access to Healthcare",
    "Community Health Centers",
    "Telemedicine",
    "Chronic Disease Management",
    "Reproductive Health",
    "Health Insurance Navigation",
  ],
  "Housing & Homelessness": [
    "Affordable Housing Development",
    "Homeless Services",
    "Emergency Shelter",
    "Transitional Housing",
    "Housing Counseling",
    "Fair Housing Advocacy",
    "Permanent Supportive Housing",
    "Rental Assistance",
    "Homeownership Programs",
    "Housing Rehabilitation",
    "Eviction Prevention",
    "Housing Navigation",
    "Rapid Rehousing",
    "Youth Homelessness",
    "Family Housing",
  ],
  "Community & Economic Development": [
    "Job Creation & Training",
    "Small Business Development",
    "Workforce Development",
    "Financial Literacy",
    "Microfinance & Lending",
    "Entrepreneurship Programs",
    "Community Planning",
    "Neighborhood Revitalization",
    "Business Incubators",
    "Economic Empowerment",
    "Main Street Revitalization",
    "Cooperative Development",
    "Rural Economic Development",
    "Trade & Commerce",
    "Technology & Innovation Hubs",
  ],
  "Public Safety & Justice": [
    "Crime Prevention",
    "Community Policing",
    "Victim Services",
    "Violence Prevention",
    "Youth Intervention",
    "Criminal Justice Reform",
    "Legal Aid Services",
    "Reentry Programs",
    "Restorative Justice",
    "Gang Prevention",
    "Domestic Violence Services",
    "Civil Rights Advocacy",
    "Police-Community Relations",
    "Juvenile Justice",
    "Court-Appointed Advocacy",
  ],
  "Environment & Climate": [
    "Climate Action",
    "Conservation & Preservation",
    "Renewable Energy",
    "Recycling & Waste Reduction",
    "Water Quality & Conservation",
    "Air Quality Improvement",
    "Wildlife Protection",
    "Sustainable Practices",
    "Green Infrastructure",
    "Environmental Education",
    "Pollution Prevention",
    "Ecosystem Restoration",
    "Clean Energy Transition",
    "Climate Resilience",
    "Environmental Justice",
  ],
  "Technology & Digital Innovation": [
    "Digital Literacy",
    "Technology Access",
    "Broadband Expansion",
    "Coding & Programming Education",
    "Cybersecurity",
    "Digital Inclusion",
    "Tech Training & Certification",
    "Innovation Labs",
    "Data Science & Analytics",
    "Artificial Intelligence",
    "Assistive Technology",
    "Smart City Initiatives",
    "Digital Health Solutions",
    "EdTech Programs",
    "Tech Entrepreneurship",
  ],
  "Arts, Culture & Humanities": [
    "Visual Arts",
    "Performing Arts",
    "Music Programs",
    "Theater & Drama",
    "Dance",
    "Literary Arts",
    "Cultural Heritage Preservation",
    "Museums & Galleries",
    "Arts Education",
    "Community Arts",
    "Public Art",
    "Arts Access & Equity",
    "Cultural Festivals",
    "Historic Preservation",
    "Creative Placemaking",
  ],
  "Faith-Based & Community Organizations": [
    "Congregational Support",
    "Faith-Based Social Services",
    "Interfaith Initiatives",
    "Religious Education",
    "Community Outreach",
    "Pastoral Care",
    "Mission & Ministry Programs",
    "Faith & Justice Advocacy",
    "Spiritual Development",
    "Religious Cultural Programs",
    "Faith-Based Youth Programs",
    "Community Chaplaincy",
    "Faith & Health Integration",
    "Religious Literacy",
    "Clergy Development",
  ],
  "Transportation & Infrastructure": [
    "Public Transit",
    "Transportation Access",
    "Infrastructure Development",
    "Road Safety",
    "Bike & Pedestrian Programs",
    "Transit-Oriented Development",
    "Transportation Equity",
    "Rural Transportation",
    "Accessible Transportation",
    "Electric Vehicle Infrastructure",
    "Complete Streets",
    "Freight & Logistics",
    "Transportation Planning",
    "Bridge & Road Maintenance",
    "Multimodal Transportation",
  ],
  "Science & Research": [
    "Medical Research",
    "Scientific Innovation",
    "Research Institutions",
    "Laboratory Services",
    "Clinical Trials",
    "Data Collection & Analysis",
    "Research Grants",
    "Scientific Education",
    "Technology Transfer",
    "Biomedical Research",
    "Environmental Research",
    "Social Science Research",
    "STEM Research",
    "Research Ethics",
    "Science Communication",
  ],
  "Veterans & Military Programs": [
    "Veteran Employment",
    "Veteran Housing",
    "Veteran Healthcare",
    "Military Family Support",
    "Transition Assistance",
    "PTSD & Mental Health",
    "Disability Benefits",
    "Education Benefits",
    "Veteran Entrepreneurship",
    "Homeless Veteran Services",
    "Military Spouse Programs",
    "Veteran Legal Services",
    "Peer Support Programs",
    "Adaptive Sports",
    "Memorial & Recognition",
  ],
  "Disaster Relief & Emergency Management": [
    "Emergency Response",
    "Disaster Preparedness",
    "Emergency Shelter",
    "Disaster Recovery",
    "Crisis Management",
    "Emergency Food & Water",
    "Search & Rescue",
    "Medical Emergency Response",
    "Community Resilience",
    "Hazard Mitigation",
    "Emergency Communications",
    "Disaster Mental Health",
    "Rebuilding Programs",
    "Emergency Planning",
    "First Responder Support",
  ],
  "International Development & Humanitarian Aid": [
    "Global Health Programs",
    "International Education",
    "Humanitarian Relief",
    "Global Poverty Alleviation",
    "International Agriculture",
    "Clean Water Access",
    "Refugee Services",
    "Global Human Rights",
    "International Development",
    "Microfinance Abroad",
    "Global Environmental Programs",
    "International Peacebuilding",
    "Global Disaster Response",
    "Cross-Cultural Exchange",
    "International Advocacy",
  ],
};

/**
 * Parent category display order.
 *
 * TODO(TP-1526): once usage-based ordering for Focus Areas parents is
 * available in this codebase, source this list from that data instead of
 * object-insertion order. There is no usage-tracking data to read yet, so
 * this intentionally falls back to a deterministic order (the taxonomy's
 * declaration order above) rather than inventing fake usage numbers. Swap
 * the implementation here — callers (`FocusAreasDropdown`, etc.) already
 * read parent order exclusively through this export.
 */
export const FOCUS_AREA_PARENT_ORDER: string[] = Object.keys(FOCUS_AREA_TAXONOMY);

/** Hard product cap on how many leaf values an organization can select. */
export const FOCUS_AREA_MAX_SELECTIONS = 10;

/** Selection count at which the field starts warning the user they're approaching the cap. */
export const FOCUS_AREA_WARNING_THRESHOLD = 9;

/**
 * Number of children shown under an expanded parent before the user has to
 * click "Show all". Same TODO(TP-1526) applies to *which* children these
 * are — until usage ordering exists, this is just the first N in taxonomy
 * order.
 */
export const FOCUS_AREA_INITIAL_VISIBLE_CHILDREN = 7;

export interface FocusAreaLeaf {
  value: string;
  parent: string;
}

let leafToParent: Map<string, string> | null = null;

function getLeafToParentMap(): Map<string, string> {
  if (!leafToParent) {
    leafToParent = new Map();
    for (const parent of FOCUS_AREA_PARENT_ORDER) {
      for (const leaf of FOCUS_AREA_TAXONOMY[parent]) {
        leafToParent.set(leaf, parent);
      }
    }
  }
  return leafToParent;
}

/**
 * Every leaf belongs to exactly one parent, so the parent is always
 * derivable from a leaf value — orgs never select or store a parent
 * directly. This is the lookup both the Grants.gov/NTEE crosswalk and the
 * HubSpot "derived parent" property (see note below) should use once there
 * is infrastructure in this codebase to wire them into.
 */
export function getFocusAreaParent(leaf: string): string | undefined {
  return getLeafToParentMap().get(leaf);
}

/** Flat list of every leaf value, each paired with its parent, in display order. */
export function getAllFocusAreaLeaves(): FocusAreaLeaf[] {
  return FOCUS_AREA_PARENT_ORDER.flatMap((parent) =>
    FOCUS_AREA_TAXONOMY[parent].map((value) => ({ value, parent })),
  );
}

// ---------------------------------------------------------------------------
// Engineering additions (non-user-facing) — not implemented here
// ---------------------------------------------------------------------------
// The product spec for this feature calls for two backend-only derivations
// once real integrations exist:
//
//   1. A taxonomy crosswalk mapping each parent category to a Grants.gov
//      funding-activity category and an NTEE major group, for federal/funder
//      matching only — never surfaced to nonprofit users.
//   2. A HubSpot "derived parent" property computed server-side from an
//      org's selected leaves via getFocusAreaParent() above, following the
//      calculated-property pattern from TP-1338/TP-1339.
//
// This repo is a front-end-only prototype — there is no server action layer,
// no CRM sync, and no calculated-property pipeline to hook either of these
// into, so neither is implemented here. getFocusAreaParent() is the lookup
// both would use; build the crosswalk table and the HubSpot sync call
// against it rather than re-deriving parent lookup logic elsewhere.
