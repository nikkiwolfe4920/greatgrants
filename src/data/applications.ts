/**
 * Grant application records — the working-application shape rendered by
 * ApplicationsPage.tsx (/applications), the "Pick up where you left off"
 * module on the Dashboard, and the left nav's application tree.
 *
 * Pulled out of ApplicationsPage.tsx into its own module so it's a single
 * source of truth: the Dashboard's status cards and the Applications page
 * are guaranteed to show the same titles, deadlines, and section progress
 * instead of drifting apart across two hand-maintained copies.
 */


export interface Section {
  id: string;
  name: string;
  status: "complete" | "not-started" | "in-progress";
  points: number;
  aiEnhanced?: boolean;
  lastEditedBy?: string;
  lastEditedTime?: string;
}

export interface Application {
  id: string;
  title: string;
  status: string;
  dueDate: string;
  daysLeft: number;
  lastUpdated: string;
  sections: Section[];
  applicationStatus: "active" | "submitted" | "archived";
  submittedDate?: string;
}

export interface Program {
  id: string;
  title: string;
  summary: string;
}

export const mockApplications: Application[] = [
  {
    id: "1",
    title: "Administration for Community Living (ACL) - Assistive Technology Alternative Financing Program",
    status: "In Progress",
    dueDate: "Mar 14, 2026",
    daysLeft: 47,
    lastUpdated: "2 hours ago",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10, aiEnhanced: true, lastEditedBy: "Allison M.", lastEditedTime: "2 hours ago" },
      { id: "s2", name: "Focus Area", status: "not-started", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "not-started", points: 30 },
      { id: "s5", name: "Budget", status: "not-started", points: 20 },
      { id: "s6", name: "Narrative", status: "in-progress", points: 10 },
      { id: "s7", name: "Documents", status: "not-started", points: 0 },
      { id: "s8", name: "Compliance", status: "not-started", points: 10 },
      { id: "s9", name: "Eligibility", status: "not-started", points: 5 },
    ],
    applicationStatus: "active"
  },
  {
    id: "2",
    title: "FY26 National Network Cooperative Agreement to the National Railroad Passenger Corporation",
    status: "In Progress",
    dueDate: "Mar 14, 2026",
    daysLeft: 47,
    lastUpdated: "Jan 26, 2026",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10, aiEnhanced: true, lastEditedBy: "Allison M.", lastEditedTime: "Jan 26, 2026" },
      { id: "s2", name: "Focus Area", status: "complete", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "complete", points: 30 },
      { id: "s5", name: "Budget", status: "complete", points: 20 },
      { id: "s6", name: "Narrative", status: "complete", points: 10 },
      { id: "s7", name: "Documents", status: "complete", points: 0 },
      { id: "s8", name: "Compliance", status: "complete", points: 10 },
      { id: "s9", name: "Eligibility", status: "complete", points: 5 },
    ],
    applicationStatus: "active"
  },
  {
    id: "3",
    title: "Community Development Block Grant - Disaster Recovery",
    status: "Submitted",
    dueDate: "Jan 15, 2026",
    daysLeft: 0,
    lastUpdated: "Jan 12, 2026",
    submittedDate: "Jan 12, 2026",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10, aiEnhanced: true, lastEditedBy: "Allison M.", lastEditedTime: "Jan 10, 2026" },
      { id: "s2", name: "Focus Area", status: "complete", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "complete", points: 30 },
      { id: "s5", name: "Budget", status: "complete", points: 20 },
      { id: "s6", name: "Narrative", status: "complete", points: 10 },
      { id: "s7", name: "Documents", status: "complete", points: 0 },
      { id: "s8", name: "Compliance", status: "complete", points: 10 },
      { id: "s9", name: "Eligibility", status: "complete", points: 5 },
    ],
    applicationStatus: "submitted"
  },
  {
    id: "4",
    title: "Environmental Protection Agency - Environmental Justice Grant",
    status: "Submitted",
    dueDate: "Dec 20, 2025",
    daysLeft: 0,
    lastUpdated: "Dec 18, 2025",
    submittedDate: "Dec 18, 2025",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10, aiEnhanced: true, lastEditedBy: "Allison M.", lastEditedTime: "Dec 15, 2025" },
      { id: "s2", name: "Focus Area", status: "complete", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "complete", points: 30 },
      { id: "s5", name: "Budget", status: "complete", points: 20 },
      { id: "s6", name: "Narrative", status: "complete", points: 10 },
      { id: "s7", name: "Documents", status: "complete", points: 0 },
      { id: "s8", name: "Compliance", status: "complete", points: 10 },
      { id: "s9", name: "Eligibility", status: "complete", points: 5 },
    ],
    applicationStatus: "submitted"
  }
];
