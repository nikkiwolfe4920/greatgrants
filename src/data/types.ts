/**
 * Type Definitions for Application Data
 * API-ready data structures
 */

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'admin' | 'member' | 'consultant' | 'viewer';

// Organization Types
export interface Organization {
  id: string;
  name: string;
  legalName: string;
  ein?: string;
  type: OrganizationType;
  status: OrganizationStatus;
  website?: string;
  email?: string;
  phone?: string;
  address: Address;
  foundedYear?: number;
  annualBudget?: number;
  employees?: number;
  focusAreas: string[];
  description?: string;
  logo?: string;
  createdAt: string;
  updatedAt: string;
}

export type OrganizationType = 
  | '501c3'
  | '501c4'
  | '501c6'
  | 'government'
  | 'educational'
  | 'for-profit'
  | 'other';

export type OrganizationStatus = 'active' | 'inactive' | 'pending';

export interface Address {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

// Grant Types
export interface Grant {
  id: string;
  title: string;
  funder: string;
  amount: {
    min?: number;
    max?: number;
    average?: number;
  };
  deadline: string;
  eligibility: string[];
  focusAreas: string[];
  geographicFocus: string[];
  type: GrantType;
  status: GrantStatus;
  url?: string;
  description: string;
  requirements: string[];
  matchScore?: number;
  saved: boolean;
  createdAt: string;
  updatedAt: string;
}

export type GrantType = 
  | 'project'
  | 'operating'
  | 'capital'
  | 'program'
  | 'research'
  | 'scholarship';

export type GrantStatus = 
  | 'open'
  | 'upcoming'
  | 'closed'
  | 'rolling';

// Grant Application Types
export interface GrantApplication {
  id: string;
  grantId: string;
  organizationId: string;
  title: string;
  status: ApplicationStatus;
  stage: ApplicationStage;
  amountRequested: number;
  deadline: string;
  assignedTo: string[];
  sections: ApplicationSection[];
  completionPercentage: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  submittedAt?: string;
}

export type ApplicationStatus = 
  | 'draft'
  | 'in-progress'
  | 'review'
  | 'submitted'
  | 'awarded'
  | 'declined';

export type ApplicationStage = 
  | 'not-started'
  | 'in-progress'
  | 'complete'
  | 'submitted';

export interface ApplicationSection {
  id: string;
  name: string;
  order: number;
  status: 'not-started' | 'in-progress' | 'complete';
  fields: ApplicationField[];
  lastUpdated?: string;
  updatedBy?: string;
}

export interface ApplicationField {
  id: string;
  name: string;
  type: FieldType;
  value: any;
  required: boolean;
  helpText?: string;
}

export type FieldType = 
  | 'text'
  | 'textarea'
  | 'number'
  | 'date'
  | 'select'
  | 'multiselect'
  | 'file'
  | 'checkbox'
  | 'radio';

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: string;
}

export type NotificationType = 
  | 'grant-match'
  | 'deadline'
  | 'application-update'
  | 'team-invite'
  | 'comment'
  | 'system';

// Team Member Types
export interface TeamMember {
  id: string;
  userId: string;
  organizationId: string;
  role: UserRole;
  permissions: Permission[];
  joinedAt: string;
}

export type Permission = 
  | 'view-applications'
  | 'edit-applications'
  | 'submit-applications'
  | 'manage-team'
  | 'manage-organization'
  | 'view-grants'
  | 'save-grants';

// Grant Alert Types
export interface GrantAlert {
  id: string;
  userId: string;
  name: string;
  enabled: boolean;
  frequency: AlertFrequency;
  email: string;
  searchQuery?: string;
  filters: GrantFilter[];
  programs: string[];
  alertsSent: number;
  createdAt: string;
  lastSent?: string;
}

export type AlertFrequency = 'weekly' | 'bi-weekly' | 'monthly';

export interface GrantFilter {
  id: string;
  type: FilterType;
  value: string;
  label: string;
}

export type FilterType = 
  | 'focus-area'
  | 'location'
  | 'amount'
  | 'type'
  | 'deadline';

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// Search Types
export interface SearchParams {
  query?: string;
  filters?: Record<string, any>;
  sort?: SortOption;
  page?: number;
  pageSize?: number;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}
