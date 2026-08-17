/**
 * Grant detail records — the fuller grant shape (overview, eligible
 * activities, contact, documents, etc.) shown on GrantDetailPage.tsx
 * (/grant/:id), keyed by the same grant IDs that GrantSearch.tsx's search
 * results and useGrantAlerts' Watch feature both link to.
 *
 * Pulled out of GrantDetailPage.tsx into its own module so it's a single
 * source of truth other pages can read from too — the Watch List
 * (WatchListPage.tsx) falls back to this when a watched grant's own
 * localStorage snapshot (see useGrantAlerts.ts) is missing display fields,
 * which happens for any alert created before that snapshot existed.
 *
 * Only 3 of the 12 grants in GrantSearch.tsx's search-results mock data
 * have a full detail record here today ("nasa-roses", "1", "2") — the rest
 * 404 on their own /grant/:id page. That's a pre-existing gap in the mock
 * data, not something introduced by this file.
 */

export interface GrantDocument {
  name: string;
  type: string;
  size: string;
}

export interface GrantContact {
  role?: string;
  organization?: string;
  phone?: string;
  email?: string;
  website?: string;
}

export interface GrantDetail {
  id: string;
  title: string;
  description: string;
  status: "Open" | "Pending" | "Closed";
  maxAmount: number;
  minAmount?: number;
  poolAmount?: number;
  location: string;
  locationType: "Federal" | "State" | "National" | "Other";
  region?: string;
  who: string;
  difficulty: "D.I.Y." | "Might Need Help" | "Expert Assistance";
  relevance: number;
  category: "Business" | "Community" | "Government" | "Individual";
  openDate?: string;
  closeDate?: string;
  closingInfo?: string;
  image?: string;
  sectors?: string[];
  favoriteCount: number;
  recipients?: number;
  competitive?: boolean;
  gender?: string;
  age?: string;
  applicableToChurches?: boolean;
  organizationTypes?: string[];
  sectorSubsector?: string;
  communityServices?: string;
  health?: string;
  multicultural?: string;
  activities?: string;
  eventsGovActivities?: string;
  industries?: string;
  overview?: string;
  eligibleActivities?: string[];
  whoCanApply?: string[];
  mainCriteria?: string[];
  opportunityNumber?: string;
  fundingAgency?: string;
  assistanceListing?: string;
  awardCeilingFloor?: string;
  totalFundingPool?: string;
  expectedAwards?: string;
  keyDeadline?: string;
  fundingInstrument?: string;
  projectPeriod?: string;
  phaseAtHand?: string;
  eligibleApplicantsText?: string;
  closingInfoText?: string;
  matchCostShare?: string;
  contact?: GrantContact;
  documents?: GrantDocument[];
  hasNewInfo?: boolean;
}

export const grantDetails: GrantDetail[] = [
  {
    id: "nasa-roses",
    title: "National Aeronautics and Space Administration (NASA) – Research Opportunities in Space and Earth Sciences (ROSES): Solar System Science",
    description: "This program aims to provide funding for research, data analysis, data preservation, and tools that support investigations to help ascertain the content, origin, and evolution of the Solar System and the search for life's origin, evolution, distribution, and future in the universe.",
    status: "Open",
    maxAmount: 26000000,
    minAmount: 0,
    poolAmount: 26000000,
    location: "US",
    locationType: "Federal",
    region: "National",
    who: "Domestic and foreign organizations of every type",
    difficulty: "Expert Assistance",
    relevance: 98.5,
    category: "Government",
    openDate: "Jan 1, 2026",
    closeDate: "Aug 1, 2026",
    closingInfo: "Proposals may be submitted at any time through 1 August 2026, but will be reviewed a few times a year: Summer (On/before 31 March 2026) and Winter (On/before 1 August 2026).",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    sectors: ["Space Science", "Planetary Science", "Astrobiology"],
    favoriteCount: 12,
    recipients: 100,
    competitive: true,
    gender: "Any",
    age: "Any",
    applicableToChurches: false,
    organizationTypes: ["Domestic organizations", "Foreign organizations", "Government entities", "Private entities", "For-profit organizations", "Not-for-profit organizations"],
    sectorSubsector: "Space & Earth Sciences",
    communityServices: "Research & Development",
    health: "N/A",
    multicultural: "Any",
    activities: "Research, Data Analysis, Data Preservation",
    eventsGovActivities: "Scientific Research",
    industries: "Aerospace & Space Exploration",
    overview: "This program aims to provide funding for research, data analysis, data preservation, and tools that support investigations to help ascertain the content, origin, and evolution of the Solar System and the search for life's origin, evolution, distribution, and future in the universe.\n\nA wide range of award sizes is expected, depending on the nature and scope of the work proposed. Grants available up to:\n\n• Less than $150,000 per year for the small category\n• $150,000 and $250,000 for the medium category\n• More than $250,000 for the large category\n\nIt is anticipated that most funded awards will be of the small to medium size, and only a few awards of the largest size may be funded.\n\nThe maximum duration of an award is four years. However, proposals for one- to two-year pilot studies, to demonstrate or develop a new technique or a new application of an established technique, are encouraged.\n\nA total funding pool of $26 million is available to fund up to 100 awards.\n\nProposals may be submitted at any time through 1 August 2026, but will be reviewed a few times a year:\n\n• Summer: On/before 31 March 2026\n• Winter: On/before 1 August 2026",
    eligibleActivities: [
      "Lunar science",
      "Mars science",
      "Astrobiology",
      "Please refer to the Program Solicitation for the complete list of the eligible projects."
    ],
    whoCanApply: [
      "Domestic and foreign",
      "Government and private",
      "For-profit",
      "Not-for-profit",
      "---",
      "Proposers must be affiliated with an institution at nspires.nasaprs.com/ and, in general, NASA provides funding only to U.S. institutions.",
      "Organizations outside the U.S. that propose on the basis of a policy of no-exchange-of-funds; consult the NASA Grant and Cooperative Agreement Manual (GCAM) for specific details.",
      "Some NRAs may be issued jointly with a non-U.S. organization, e.g., those concerning guest observing programs for jointly sponsored space science programs, that will contain additional special guidelines for non-U.S. participants.",
      "Please refer to the Summary of Solicitation for the complete eligibility requirements."
    ],
    mainCriteria: [
      "The merit of the proposed project, including, but not limited to, the scientific rationale and the expected significance and/or impact of the proposed work (50%).",
      "Overall technical merit of the proposed work, including, but not limited to, the merit of the management plan and project timeline for carrying out the work and the effectiveness and resilience of the proposed experimental designs, methods, techniques, and approaches for achieving the proposed goals and/or objectives (30%).",
      "The extent to which the proposal demonstrates alignment with PSD priorities (20%)."
    ],
    opportunityNumber: "NNH26ZDA001N-SSS",
    fundingAgency: "National Aeronautics and Space Administration (NASA), Science Mission Directorate",
    assistanceListing: "43.001",
    awardCeilingFloor: "$0 – $26,000,000",
    totalFundingPool: "Up to $26M",
    expectedAwards: "Up to 100 awards",
    keyDeadline: "Summer: On/before 31 March 2026; Winter: On/before 1 August 2026",
    fundingInstrument: "Grant; Cooperative agreement",
    projectPeriod: "Up to 4 years",
    phaseAtHand: "Open solicitation; proposals reviewed on a rolling basis",
    eligibleApplicantsText: "Domestic and foreign organizations of every type, including universities, non-profit organizations, NASA Centers, JPL, and other government agencies. Proposers must be affiliated with a registered institution at nspires.nasaprs.com.",
    closingInfoText: "Proposals may be submitted at any time through 1 August 2026. Submit via NSPIRES at nspires.nasaprs.com. Do not email, fax, or courier proposals.",
    matchCostShare: "Not required",
    hasNewInfo: true,
    contact: {
      role: "Program Officer",
      organization: "NASA Science Mission Directorate, Planetary Science Division",
      phone: "202-358-0000",
      email: "sara@nasa.gov",
      website: "https://roses.nasa.gov"
    },
    documents: [
      { name: "Program Solicitation (ROSES-2026)", type: "PDF Document", size: "4.8 MB" },
      { name: "Summary of Solicitation", type: "PDF Document", size: "1.2 MB" }
    ]
  },
  {
    id: "1",
    title: "Faith-Based Community Development Grants",
    description: "This program supports faith-based organizations in providing community services, including food banks, homeless shelters, youth mentorship programs, and community health initiatives.",
    status: "Open",
    maxAmount: 500000,
    minAmount: 100000,
    poolAmount: 25000000,
    location: "US: National",
    locationType: "Federal",
    region: "Any",
    who: "Faith-Based Organizations, Nonprofits",
    difficulty: "Might Need Help",
    relevance: 95.10,
    category: "Community",
    openDate: "Jan 15, 2026",
    closeDate: "Jun 30, 2026",
    closingInfo: "This program is currently open to applications. The next funding round is expected to open on June 30, 2026.",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW50b3JpbmclMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzE5NDQwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Community Development", "Social Services"],
    favoriteCount: 5,
    recipients: 50,
    competitive: true,
    gender: "Any",
    age: "Any",
    applicableToChurches: true,
    organizationTypes: ["Organizations", "(c)(3) State governments", "(c)(6) Public and State controlled institutions of higher education", "(c)(7) Private institutions of higher education", "(c)(11) Native American tribal governments", "(c)(12) Nonprofits having a 501(c)(3) status with the IRS", "(c)(13) Nonprofits that do not have a 501(c)(3) status with the IRS"],
    sectorSubsector: "Other",
    communityServices: "Other",
    health: "Disabilities",
    multicultural: "Indigenous",
    activities: "General Operations",
    eventsGovActivities: "Community Services and Development",
    industries: "General - Non-Industry Specific",
    overview: "This program aims to support programs that provide for the acquisition of Assistive Technology (AT) devices and services, such as a low-interest loan fund, an interest buy-down program, a revolving loan fund, a loan guarantee, an insurance program, or additional activities that result in the acquisition of AT devices and services.\n\nThe program will assist individuals with disabilities of any age to obtain services, financial assistance, and additional activities for the acquisition of AT devices and services.\n\nApplicants must establish or expand one or more of the following types of AFPs:\n\nTo be considered for funding, an applicant must identify the type or types of AFP to be supported by the grant.\n\nGrants between $100,000 and $700,000 are available. The expected number of awards is three.\n\nApplicants are not required to provide matching or cost sharing.\n\nA total funding pool of $1.97 million is available.\n\nThe length of project period is 12 months.\n\nApplications for supplementation of existing projects are eligible to compete with applications for new awards.\n\nApplicants are requested, but not required, to submit a letter of intent to apply 35 days from publication of this funding opportunity notice. This is in planning for the application independent review process.",
    eligibleActivities: [
      "A low-interest loan fund.",
      "An interest buy-down program.",
      "A revolving loan fund.",
      "A loan guarantee or insurance program.",
      "A program operated for the purchase, lease, or other acquisition of assistive technology devices or assistive technology services.",
      "Another mechanism that provides financing and is approved by the Secretary.",
      "Incorporate credit-building activities in their programs, including financial education and information about other possible funding sources.",
      "Emphasize consumer choice and control and build programs that will provide financing and acquisition for the full array of AT devices and services and ensure that all people with disabilities, regardless of type of disability or health condition, age, level of income, and residence, have access to the program."
    ],
    whoCanApply: [
      "Domestic public or private non-profit entities including State and local governments",
      "Indian tribal governments and organizations (American Indian/Alaskan Native/Native American)",
      "Faith-based organizations",
      "Community-based organizations",
      "Hospitals",
      "Institutions of higher education.",
      "State agencies and community-based disability organizations that are directed by and operated for individuals with disabilities"
    ],
    mainCriteria: [
      "Special target populations and organizations (10 points)",
      "Project personnel (10 points)",
      "Proposed intervention (35 points)",
      "Problem statement (10 points)",
      "Organizational capacity (10 points)",
      "Project management (10 points)",
      "Project evaluation (5 points)"
    ]
  },
  {
    id: "2",
    title: "Religious Organizations Mission Trip Support Program",
    description: "Funding for religious organizations conducting international mission trips focused on humanitarian aid, education, healthcare services, and community building in underserved regions.",
    status: "Open",
    maxAmount: 75000,
    minAmount: 25000,
    poolAmount: 5000000,
    location: "US: National",
    locationType: "Federal",
    region: "Any",
    who: "Churches, Religious Nonprofits",
    difficulty: "D.I.Y.",
    relevance: 92.50,
    category: "Community",
    openDate: "Feb 1, 2026",
    closeDate: "Apr 15, 2026",
    closingInfo: "Applications are accepted on a rolling basis until funding is depleted.",
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MTkxNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "International Aid", "Humanitarian"],
    favoriteCount: 3,
    recipients: 35,
    competitive: true,
    gender: "Any",
    age: "Any",
    applicableToChurches: true,
    organizationTypes: ["Churches", "Religious Nonprofits", "Faith-Based Organizations"],
    sectorSubsector: "Faith-Based",
    communityServices: "International Aid",
    health: "Healthcare Services",
    multicultural: "Global",
    activities: "Mission Trips",
    eventsGovActivities: "Humanitarian Aid and Development",
    industries: "Faith-Based Services"
  }
];
