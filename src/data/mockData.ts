/**
 * Mock Data for Development
 * API-ready data structures
 */

import {
  User,
  Organization,
  Grant,
  GrantApplication,
  GrantAlert,
  Notification,
  TeamMember,
} from './types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'olivia@untitledui.com',
    firstName: 'Olivia',
    lastName: 'Rhye',
    phone: '+1 (555) 123-4567',
    avatar: undefined,
    role: 'admin',
    organizationId: 'org-1',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-04-01T14:30:00Z',
  },
  {
    id: 'user-2',
    email: 'phoenix@untitledui.com',
    firstName: 'Phoenix',
    lastName: 'Baker',
    phone: '+1 (555) 987-6543',
    role: 'member',
    organizationId: 'org-1',
    createdAt: '2024-02-20T09:00:00Z',
    updatedAt: '2024-04-02T11:00:00Z',
  },
];

// Mock Organizations
export const mockOrganizations: Organization[] = [
  {
    id: 'org-1',
    name: 'Untitled UI',
    legalName: 'Untitled UI Foundation Inc.',
    ein: '12-3456789',
    type: '501c3',
    status: 'active',
    website: 'https://untitledui.com',
    email: 'info@untitledui.com',
    phone: '+1 (555) 000-0000',
    address: {
      street1: '123 Design Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'United States',
    },
    foundedYear: 2020,
    annualBudget: 500000,
    employees: 15,
    focusAreas: ['Education', 'Technology', 'Community Development'],
    description: 'A nonprofit organization focused on design education and community development.',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-04-01T10:00:00Z',
  },
];

// Mock Grants
export const mockGrants: Grant[] = [
  {
    id: 'grant-1',
    title: 'Community Education Technology Grant',
    funder: 'Gates Foundation',
    amount: {
      min: 50000,
      max: 250000,
      average: 125000,
    },
    deadline: '2026-06-15T23:59:59Z',
    eligibility: ['501(c)(3)', 'Education Focus', 'Technology Innovation'],
    focusAreas: ['Education', 'Technology'],
    geographicFocus: ['United States', 'California'],
    type: 'project',
    status: 'open',
    url: 'https://gatesfoundation.org/grants/education-tech',
    description: 'Funding for innovative educational technology projects that serve underrepresented communities.',
    requirements: [
      'Detailed project proposal',
      'Budget breakdown',
      'Letters of support',
      'Impact measurement plan',
    ],
    matchScore: 92,
    saved: true,
    createdAt: '2024-03-01T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z',
  },
  {
    id: 'grant-2',
    title: 'Arts & Culture Operating Support',
    funder: 'National Endowment for the Arts',
    amount: {
      min: 10000,
      max: 100000,
      average: 45000,
    },
    deadline: '2026-05-30T23:59:59Z',
    eligibility: ['501(c)(3)', 'Arts & Culture'],
    focusAreas: ['Arts', 'Culture', 'Community'],
    geographicFocus: ['United States'],
    type: 'operating',
    status: 'open',
    description: 'General operating support for arts and cultural organizations.',
    requirements: [
      'Organizational budget',
      'Program descriptions',
      'Board list',
      'IRS determination letter',
    ],
    matchScore: 78,
    saved: false,
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-20T10:00:00Z',
  },
  {
    id: 'grant-3',
    title: 'Youth Development Initiative',
    funder: 'W.K. Kellogg Foundation',
    amount: {
      min: 75000,
      max: 500000,
      average: 200000,
    },
    deadline: '2026-07-01T23:59:59Z',
    eligibility: ['501(c)(3)', 'Youth Focus', 'Community Based'],
    focusAreas: ['Youth', 'Education', 'Community Development'],
    geographicFocus: ['United States', 'Rural Communities'],
    type: 'program',
    status: 'open',
    description: 'Support for comprehensive youth development programs in rural and underserved communities.',
    requirements: [
      'Program model description',
      'Community needs assessment',
      'Evaluation plan',
      'Sustainability strategy',
    ],
    matchScore: 85,
    saved: true,
    createdAt: '2024-03-05T10:00:00Z',
    updatedAt: '2024-03-18T10:00:00Z',
  },
];

// Mock Grant Applications
export const mockApplications: GrantApplication[] = [
  {
    id: 'app-1',
    grantId: 'grant-1',
    organizationId: 'org-1',
    title: 'Digital Literacy Program for Seniors',
    status: 'in-progress',
    stage: 'in-progress',
    amountRequested: 125000,
    deadline: '2026-06-15T23:59:59Z',
    assignedTo: ['user-1', 'user-2'],
    sections: [
      {
        id: 'section-1',
        name: 'Project Overview',
        order: 1,
        status: 'complete',
        fields: [],
        lastUpdated: '2024-03-20T15:30:00Z',
        updatedBy: 'user-1',
      },
      {
        id: 'section-2',
        name: 'Budget',
        order: 2,
        status: 'in-progress',
        fields: [],
        lastUpdated: '2024-03-25T10:00:00Z',
        updatedBy: 'user-2',
      },
      {
        id: 'section-3',
        name: 'Impact & Evaluation',
        order: 3,
        status: 'not-started',
        fields: [],
      },
    ],
    completionPercentage: 45,
    createdBy: 'user-1',
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-25T14:30:00Z',
  },
];

// Mock Grant Alerts
export const mockAlerts: GrantAlert[] = [
  {
    id: 'alert-1',
    userId: 'user-1',
    name: 'Education Technology Grants',
    enabled: true,
    frequency: 'weekly',
    email: 'olivia@untitledui.com',
    searchQuery: 'education technology innovation',
    filters: [
      {
        id: 'filter-1',
        type: 'focus-area',
        value: 'Education',
        label: 'Education',
      },
      {
        id: 'filter-2',
        type: 'focus-area',
        value: 'Technology',
        label: 'Technology',
      },
      {
        id: 'filter-3',
        type: 'amount',
        value: '50000-250000',
        label: '$50K - $250K',
      },
    ],
    programs: ['Gates Foundation', 'Google.org'],
    alertsSent: 12,
    createdAt: '2024-02-01T10:00:00Z',
    lastSent: '2024-03-30T08:00:00Z',
  },
  {
    id: 'alert-2',
    userId: 'user-1',
    name: 'Community Development Opportunities',
    enabled: true,
    frequency: 'bi-weekly',
    email: 'olivia@untitledui.com',
    searchQuery: 'community development rural',
    filters: [
      {
        id: 'filter-4',
        type: 'focus-area',
        value: 'Community Development',
        label: 'Community Development',
      },
      {
        id: 'filter-5',
        type: 'location',
        value: 'California',
        label: 'California',
      },
    ],
    programs: [],
    alertsSent: 6,
    createdAt: '2024-02-15T10:00:00Z',
    lastSent: '2024-03-28T08:00:00Z',
  },
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    userId: 'user-1',
    type: 'grant-match',
    title: 'New grant matches your criteria',
    message: '3 new grants matching "education technology" are now available',
    read: false,
    actionUrl: '/grants',
    createdAt: '2026-04-05T10:00:00Z',
  },
  {
    id: 'notif-2',
    userId: 'user-1',
    type: 'deadline',
    title: 'Application deadline approaching',
    message: 'Digital Literacy Program application is due in 7 days',
    read: false,
    actionUrl: '/applications/app-1',
    createdAt: '2026-04-04T09:00:00Z',
  },
  {
    id: 'notif-3',
    userId: 'user-1',
    type: 'team-invite',
    title: 'Phoenix Baker joined your team',
    message: 'Phoenix Baker has accepted the invitation to join Untitled UI',
    read: true,
    actionUrl: '/organization/team',
    createdAt: '2026-04-03T14:30:00Z',
  },
];

// Mock Team Members
export const mockTeamMembers: TeamMember[] = [
  {
    id: 'member-1',
    userId: 'user-1',
    organizationId: 'org-1',
    role: 'admin',
    permissions: [
      'view-applications',
      'edit-applications',
      'submit-applications',
      'manage-team',
      'manage-organization',
      'view-grants',
      'save-grants',
    ],
    joinedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 'member-2',
    userId: 'user-2',
    organizationId: 'org-1',
    role: 'member',
    permissions: [
      'view-applications',
      'edit-applications',
      'view-grants',
      'save-grants',
    ],
    joinedAt: '2024-02-20T09:00:00Z',
  },
];

// Export all mock data
export const mockData = {
  users: mockUsers,
  organizations: mockOrganizations,
  grants: mockGrants,
  applications: mockApplications,
  alerts: mockAlerts,
  notifications: mockNotifications,
  teamMembers: mockTeamMembers,
};

export default mockData;
