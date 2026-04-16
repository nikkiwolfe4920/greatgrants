export interface Grant {
  id: string
  title: string
  funder: string
  description: string
  amount: { min: number; max: number }
  deadline: string
  category: string[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  matchScore: number
  saved: boolean
  status: 'open' | 'closing_soon' | 'closed'
  eligibility: string[]
  location: string
}

export interface Application {
  id: string
  grantId: string
  grantTitle: string
  funder: string
  amount: number
  status: 'draft' | 'in_progress' | 'submitted' | 'awarded' | 'rejected'
  deadline: string
  completionPercent: number
  sections: ApplicationSection[]
  createdAt: string
  updatedAt: string
}

export interface ApplicationSection {
  id: string
  title: string
  type: 'narrative' | 'budget' | 'timeline' | 'attachments' | 'contact' | 'org_info' | 'project_desc' | 'evaluation' | 'sustainability'
  content: string
  required: boolean
  completed: boolean
  wordLimit?: number
}

export interface Organization {
  id: string
  name: string
  initials: string
  type: string
  mission: string
  ein: string
  address: string
  website: string
  contactEmail: string
  foundedYear: number
  budget: number
  staff: number
  programs: Program[]
  members: Member[]
}

export interface Program {
  id: string
  title: string
  description: string
  category: string
  budget: number
  startDate: string
  endDate: string
  status: 'active' | 'planning' | 'completed'
  outcomes: string[]
}

export interface Member {
  id: string
  name: string
  email: string
  role: 'admin' | 'member' | 'viewer'
  initials: string
}

export interface SavedAlert {
  id: string
  name: string
  query: string
  frequency: 'daily' | 'weekly' | 'monthly'
  enabled: boolean
  lastTriggered?: string
}

export interface SearchParams {
  query: string
  category?: string
  minAmount?: number
  maxAmount?: number
  deadline?: string
  difficulty?: string
  location?: string
}

export interface ReadinessScore {
  overall: number
  categories: {
    name: string
    score: number
    status: 'strong' | 'moderate' | 'needs_work'
    items: ReadinessItem[]
  }[]
}

export interface ReadinessItem {
  id: string
  label: string
  completed: boolean
  required: boolean
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    perPage: number
    total: number
    totalPages: number
  }
}
