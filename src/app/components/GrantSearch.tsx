import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import {
  Search,
  Sparkles,
  Filter,
  Star,
  Download,
  LayoutGrid,
  List,
  X,
  ChevronDown,
  Globe,
  Calendar,
  Users,
  Banknote,
  TrendingUp,
  Zap,
  ArrowUpDown,
  Target,
  Clock,
  Award,
  ChevronRight,
  Plus,
  Loader2,
  SearchX,
  FolderOpen,
  Bell,
  CheckCircle2,
  Bookmark,
  DollarSign
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "./ui/breadcrumb";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Grant {
  id: string;
  title: string;
  description: string;
  status: "Open" | "Pending" | "Closed";
  maxAmount: number;
  poolAmount?: number;
  location: string;
  locationType: "Federal" | "State" | "National" | "Other";
  who: string;
  difficulty: "D.I.Y." | "Might Need Help" | "Expert Assistance";
  relevance: number;
  category: "Business" | "Community" | "Government" | "Individual";
  openDate?: string;
  closeDate?: string;
  image?: string;
  sectors?: string[];
  favoriteCount: number;
}

const mockGrants: Grant[] = [
  {
    id: "1",
    title: "Faith-Based Community Development Grants",
    description: "This program supports faith-based organizations in providing community services, including food banks, homeless shelters, youth mentorship programs, and community health initiatives.",
    status: "Open",
    maxAmount: 500000,
    poolAmount: 25000000,
    location: "US: National",
    locationType: "Federal",
    who: "Faith-Based Organizations, Nonprofits",
    difficulty: "Might Need Help",
    relevance: 95.10,
    category: "Community",
    openDate: "Jan 15, 2026",
    closeDate: "Jun 30, 2026",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW50b3JpbmclMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzE5NDQwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Community Development", "Social Services"],
    favoriteCount: 5
  },
  {
    id: "2",
    title: "Religious Organizations Mission Trip Support Program",
    description: "Funding for religious organizations conducting international mission trips focused on humanitarian aid, education, healthcare services, and community building in underserved regions.",
    status: "Open",
    maxAmount: 75000,
    poolAmount: 5000000,
    location: "US: National",
    locationType: "Federal",
    who: "Churches, Religious Nonprofits",
    difficulty: "D.I.Y.",
    relevance: 92.50,
    category: "Community",
    openDate: "Feb 1, 2026",
    closeDate: "Apr 15, 2026",
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MTkxNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "International Aid", "Humanitarian"],
    favoriteCount: 3
  },
  {
    id: "3",
    title: "Church-Based Small Business Development Fund",
    description: "Supporting churches and faith-based organizations in developing sustainable business ventures, including thrift stores, bookstores, coffee shops, and other revenue-generating activities.",
    status: "Pending",
    maxAmount: 150000,
    poolAmount: 10000000,
    location: "US: National",
    locationType: "Federal",
    who: "Faith-Based Organizations",
    difficulty: "Might Need Help",
    relevance: 89.75,
    category: "Business",
    openDate: "Mar 1, 2026",
    closeDate: "May 31, 2026",
    image: "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzcxODYzODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Small Business", "Social Enterprise"],
    favoriteCount: 4
  },
  {
    id: "4",
    title: "Faith-Based Youth Ministry and Education Programs",
    description: "Grants for faith-based organizations providing youth programs including after-school tutoring, summer camps, sports leagues, character education, and college prep assistance.",
    status: "Open",
    maxAmount: 200000,
    poolAmount: 15000000,
    location: "US: National",
    locationType: "Federal",
    who: "Churches, Religious Schools, Youth Organizations",
    difficulty: "D.I.Y.",
    relevance: 94.20,
    category: "Community",
    openDate: "Jan 10, 2026",
    closeDate: "Jul 15, 2026",
    image: "https://images.unsplash.com/photo-1765109384317-592bf3852007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21lbiUyMHRlYW13b3JrfGVufDF8fHx8MTc3MTk0NDAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Youth Development", "Education"],
    favoriteCount: 6
  },
  {
    id: "5",
    title: "Religious Nonprofit Community Outreach Grants",
    description: "Supporting religious nonprofits in expanding community outreach including addiction recovery programs, job training, financial literacy workshops, and family counseling services.",
    status: "Open",
    maxAmount: 300000,
    poolAmount: 20000000,
    location: "US: National",
    locationType: "Federal",
    who: "Religious Nonprofits, 501(c)(3) Churches",
    difficulty: "Might Need Help",
    relevance: 91.80,
    category: "Community",
    openDate: "Feb 15, 2026",
    closeDate: "Aug 30, 2026",
    image: "https://images.unsplash.com/photo-1634872583967-6417a8638a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc3MTg1NTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Community Outreach", "Social Services"],
    favoriteCount: 4
  },
  {
    id: "6",
    title: "Faith-Based Affordable Housing Initiative",
    description: "Grants for religious organizations developing affordable housing projects, transitional housing for families in need, and supportive housing with wraparound services.",
    status: "Pending",
    maxAmount: 1000000,
    poolAmount: 50000000,
    location: "US: National",
    locationType: "Federal",
    who: "Faith-Based CDCs, Religious Housing Nonprofits",
    difficulty: "Expert Assistance",
    relevance: 88.30,
    category: "Community",
    openDate: "Jan 5, 2026",
    closeDate: "Sep 15, 2026",
    image: "https://images.unsplash.com/photo-1766846573044-f1107ca5418b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwY3VsdHVyZSUyMGNvbW11bml0eSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzcxOTQ0MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Affordable Housing", "Community Development"],
    favoriteCount: 7
  },
  {
    id: "7",
    title: "Small Business Grants for Faith Community Entrepreneurs",
    description: "Supporting entrepreneurs from faith communities in launching or expanding small businesses with focus on values-driven business practices and community impact.",
    status: "Open",
    maxAmount: 50000,
    poolAmount: 8000000,
    location: "US: National",
    locationType: "Federal",
    who: "Faith-Based Entrepreneurs, Small Business Owners",
    difficulty: "D.I.Y.",
    relevance: 87.60,
    category: "Business",
    openDate: "Feb 1, 2026",
    closeDate: "Jun 15, 2026",
    image: "https://images.unsplash.com/photo-1760033444489-462f148d598b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGJ1c2luZXNzJTIwZmFybSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3MTk0NDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Small Business", "Entrepreneurship"],
    favoriteCount: 2
  },
  {
    id: "8",
    title: "Government Partnerships with Faith-Based Organizations",
    description: "Federal program facilitating partnerships between government agencies and faith-based organizations for delivering social services, disaster relief, and community development programs.",
    status: "Open",
    maxAmount: 750000,
    poolAmount: 100000000,
    location: "US: National",
    locationType: "Federal",
    who: "Faith-Based Nonprofits, Government Partners",
    difficulty: "Expert Assistance",
    relevance: 90.40,
    category: "Government",
    openDate: "Jan 1, 2026",
    closeDate: "Dec 31, 2026",
    image: "https://images.unsplash.com/photo-1758936381780-8092bc60e153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzcxOTQ0MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Government Partnership", "Social Services"],
    favoriteCount: 5
  },
  {
    id: "9",
    title: "Christian Education Program Development Grants",
    description: "Funding for Christian schools and ministries developing innovative education programs, curriculum development, teacher training, and educational technology integration.",
    status: "Pending",
    maxAmount: 125000,
    poolAmount: 12000000,
    location: "US: National",
    locationType: "Federal",
    who: "Christian Schools, Education Ministries",
    difficulty: "Might Need Help",
    relevance: 93.10,
    category: "Community",
    openDate: "Mar 1, 2026",
    closeDate: "Jul 31, 2026",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW50b3JpbmclMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzE5NDQwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Education", "Christian Ministry"],
    favoriteCount: 3
  },
  {
    id: "10",
    title: "Faith-Based Workforce Development and Job Training",
    description: "Supporting religious organizations providing job training, vocational education, career counseling, and employment placement services for underserved communities.",
    status: "Open",
    maxAmount: 400000,
    poolAmount: 30000000,
    location: "US: National",
    locationType: "Federal",
    who: "Churches, Faith-Based Workforce Programs",
    difficulty: "Might Need Help",
    relevance: 86.90,
    category: "Business",
    openDate: "Feb 10, 2026",
    closeDate: "Aug 15, 2026",
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MTkxNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Workforce Development", "Job Training"],
    favoriteCount: 4
  },
  {
    id: "11",
    title: "Religious Heritage Preservation and Restoration Grants",
    description: "Federal funding for preserving and restoring historic religious buildings, churches, synagogues, and other faith-based landmarks with architectural and cultural significance.",
    status: "Open",
    maxAmount: 500000,
    poolAmount: 20000000,
    location: "US: National",
    locationType: "Federal",
    who: "Historic Religious Sites, Preservation Societies",
    difficulty: "Expert Assistance",
    relevance: 82.40,
    category: "Government",
    openDate: "Jan 20, 2026",
    closeDate: "Oct 30, 2026",
    image: "https://images.unsplash.com/photo-1766846573044-f1107ca5418b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwY3VsdHVyZSUyMGNvbW11bml0eSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzcxOTQ0MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Historic Preservation", "Cultural Heritage"],
    favoriteCount: 2
  },
  {
    id: "12",
    title: "Faith-Based Disaster Relief and Emergency Response",
    description: "Supporting religious organizations in building capacity for disaster response, emergency shelters, food distribution, and long-term recovery assistance for affected communities.",
    status: "Pending",
    maxAmount: 600000,
    poolAmount: 35000000,
    location: "US: National",
    locationType: "Federal",
    who: "Faith-Based Disaster Relief Organizations",
    difficulty: "Might Need Help",
    relevance: 88.70,
    category: "Government",
    openDate: "Jan 15, 2026",
    closeDate: "Dec 15, 2026",
    image: "https://images.unsplash.com/photo-1758936381780-8092bc60e153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzcxOTQ0MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    sectors: ["Faith-Based", "Disaster Relief", "Emergency Services"],
    favoriteCount: 6
  }
];

const searchExamples = [
  "faith-based community development grants",
  "mission trip funding under $50k",
  "Christian education program grants"
];

// Multi-tier filter structure
interface FilterOption {
  id: string;
  label: string;
  subcategories?: FilterOption[];
}

const filterCategories: FilterOption[] = [
  {
    id: "category",
    label: "Category",
    subcategories: [
      { id: "category-business", label: "Business" },
      { id: "category-community", label: "Community" },
      { id: "category-government", label: "Government" },
      { id: "category-individual", label: "Individual" }
    ]
  },
  {
    id: "status",
    label: "Status",
    subcategories: [
      { id: "status-open", label: "Open" },
      { id: "status-pending", label: "Pending" },
      { id: "status-closed", label: "Closed" }
    ]
  },
  {
    id: "difficulty",
    label: "Difficulty",
    subcategories: [
      { id: "difficulty-diy", label: "D.I.Y." },
      { id: "difficulty-help", label: "Might Need Help" },
      { id: "difficulty-expert", label: "Expert Assistance" }
    ]
  },
  {
    id: "scope",
    label: "Scope",
    subcategories: [
      { id: "scope-federal", label: "Federal" },
      { id: "scope-state", label: "State" },
      { id: "scope-national", label: "National" },
      { id: "scope-other", label: "Other" }
    ]
  },
  {
    id: "focus-area",
    label: "Focus Area",
    subcategories: [
      {
        id: "education",
        label: "Education",
        subcategories: [
          { id: "literacy", label: "Literacy" },
          { id: "scholarships", label: "Scholarships" },
          { id: "stem", label: "STEM Programs" },
          { id: "vocational", label: "Vocational Training" }
        ]
      },
      {
        id: "health",
        label: "Health",
        subcategories: [
          { id: "medical", label: "Medical Research" },
          { id: "mental-health", label: "Mental Health" },
          { id: "public-health", label: "Public Health" },
          { id: "wellness", label: "Wellness Programs" }
        ]
      },
      {
        id: "community",
        label: "Community Development",
        subcategories: [
          { id: "housing", label: "Affordable Housing" },
          { id: "infrastructure", label: "Infrastructure" },
          { id: "economic", label: "Economic Development" },
          { id: "safety", label: "Public Safety" }
        ]
      }
    ]
  },
  {
    id: "location",
    label: "Location",
    subcategories: [
      {
        id: "us-regions",
        label: "US Regions",
        subcategories: [
          { id: "northeast", label: "Northeast" },
          { id: "southeast", label: "Southeast" },
          { id: "midwest", label: "Midwest" },
          { id: "southwest", label: "Southwest" },
          { id: "west", label: "West" }
        ]
      },
      {
        id: "states",
        label: "States",
        subcategories: [
          { id: "california", label: "California" },
          { id: "texas", label: "Texas" },
          { id: "new-york", label: "New York" },
          { id: "florida", label: "Florida" }
        ]
      },
      {
        id: "international",
        label: "International",
        subcategories: [
          { id: "canada", label: "Canada" },
          { id: "europe", label: "Europe" },
          { id: "latin-america", label: "Latin America" },
          { id: "global", label: "Global" }
        ]
      }
    ]
  },
  {
    id: "activity",
    label: "Activity",
    subcategories: [
      {
        id: "research",
        label: "Research & Development",
        subcategories: [
          { id: "basic-research", label: "Basic Research" },
          { id: "applied-research", label: "Applied Research" },
          { id: "clinical-trials", label: "Clinical Trials" }
        ]
      },
      {
        id: "programs",
        label: "Programs & Services",
        subcategories: [
          { id: "direct-services", label: "Direct Services" },
          { id: "capacity-building", label: "Capacity Building" },
          { id: "advocacy", label: "Advocacy" }
        ]
      }
    ]
  },
  {
    id: "industry",
    label: "Industry",
    subcategories: [
      {
        id: "tech",
        label: "Technology",
        subcategories: [
          { id: "software", label: "Software" },
          { id: "hardware", label: "Hardware" },
          { id: "ai-ml", label: "AI & Machine Learning" }
        ]
      },
      {
        id: "agriculture",
        label: "Agriculture",
        subcategories: [
          { id: "sustainable-farming", label: "Sustainable Farming" },
          { id: "food-security", label: "Food Security" },
          { id: "agtech", label: "AgTech" }
        ]
      }
    ]
  },
  {
    id: "sector",
    label: "Sector",
    subcategories: [
      {
        id: "nonprofit",
        label: "Nonprofit",
        subcategories: [
          { id: "501c3", label: "501(c)(3)" },
          { id: "501c4", label: "501(c)(4)" },
          { id: "foundation", label: "Foundation" },
          { id: "faith-based", label: "Faith-based Organizations" }
        ]
      },
      {
        id: "forprofit",
        label: "For-Profit",
        subcategories: [
          { id: "startup", label: "Startup" },
          { id: "small-business", label: "Small Business" },
          { id: "enterprise", label: "Enterprise" }
        ]
      },
      {
        id: "government",
        label: "Government",
        subcategories: [
          { id: "federal", label: "Federal" },
          { id: "state", label: "State" },
          { id: "municipal", label: "Municipal" }
        ]
      }
    ]
  },
  {
    id: "timing",
    label: "Timing",
    subcategories: [
      { id: "open-now", label: "Open Now" },
      { id: "opening-soon", label: "Opening Soon" },
      { id: "rolling", label: "Rolling Deadline" }
    ]
  },
  {
    id: "deadline",
    label: "Deadline",
    subcategories: [
      { id: "this-month", label: "This Month" },
      { id: "next-month", label: "Next Month" },
      { id: "this-quarter", label: "This Quarter" },
      { id: "custom", label: "Custom Date Range" }
    ]
  },
  {
    id: "funding-type",
    label: "Funding Type",
    subcategories: [
      { id: "project", label: "Project Grant" },
      { id: "operating", label: "Operating Grant" },
      { id: "capital", label: "Capital Grant" },
      { id: "challenge", label: "Challenge Grant" },
      { id: "matching", label: "Matching Grant" }
    ]
  },
  {
    id: "funding-source",
    label: "Funding Source",
    subcategories: [
      {
        id: "government-source",
        label: "Government",
        subcategories: [
          { id: "federal-gov", label: "Federal Government" },
          { id: "state-gov", label: "State Government" },
          { id: "local-gov", label: "Local Government" }
        ]
      },
      {
        id: "private-source",
        label: "Private",
        subcategories: [
          { id: "corporate", label: "Corporate Foundation" },
          { id: "family", label: "Family Foundation" },
          { id: "community", label: "Community Foundation" }
        ]
      }
    ]
  },
  {
    id: "funding-amount",
    label: "Funding Amount",
    subcategories: [
      { id: "under-25k", label: "Under $25,000" },
      { id: "25k-100k", label: "$25,000 - $100,000" },
      { id: "100k-500k", label: "$100,000 - $500,000" },
      { id: "500k-1m", label: "$500,000 - $1,000,000" },
      { id: "over-1m", label: "Over $1,000,000" }
    ]
  }
];

export function GrantSearch() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"relevance" | "amount" | "deadline" | "recent">("relevance");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>("all-projects");
  const [publishedProjects, setPublishedProjects] = useState<Array<{ id: string; title: string }>>([]);
  const [savedGrants, setSavedGrants] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Grant[]>([]);
  
  // Unified filter states with default filters
  const [advancedFilters, setAdvancedFilters] = useState<Array<{ id: string; label: string; category: string }>>([
    { id: "category-community", label: "Community", category: "Category" },
    { id: "scope-national", label: "National", category: "Scope" },
    { id: "scope-federal", label: "Federal", category: "Scope" }
  ]);
  const [isFilterPopoverOpen, setIsFilterPopoverOpen] = useState(false);
  const [filterNavigationStack, setFilterNavigationStack] = useState<FilterOption[]>([]);
  
  // Save Alert Modal State
  const [isSaveAlertModalOpen, setIsSaveAlertModalOpen] = useState(false);
  const [alertName, setAlertName] = useState("");
  const [alertFrequency, setAlertFrequency] = useState("Weekly");
  const [isCreatingAlert, setIsCreatingAlert] = useState(false);

  // Unsave Dialog State
  const [unsaveDialogOpen, setUnsaveDialogOpen] = useState(false);
  const [grantToUnsave, setGrantToUnsave] = useState<Grant | null>(null);

  // Load published projects and saved grants from localStorage
  useEffect(() => {
    const loadPublishedProjects = () => {
      try {
        const projectsData = localStorage.getItem("projects");
        if (projectsData) {
          const allProjects = JSON.parse(projectsData);
          const published = allProjects
            .filter((p: any) => p.status === "published")
            .map((p: any) => ({ id: p.id, title: p.title }));
          setPublishedProjects(published);
        }
      } catch (error) {
        console.error("Failed to load projects", error);
      }
    };

    const loadSavedGrants = () => {
      const saved = JSON.parse(localStorage.getItem("savedGrants") || "[]");
      const savedIds = saved.map((g: Grant) => g.id);
      setSavedGrants(savedIds);
    };

    const loadRecentlyViewed = () => {
      const recent = JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]");
      setRecentlyViewed(recent.slice(0, 3)); // Only show top 3
    };

    loadPublishedProjects();
    loadSavedGrants();
    loadRecentlyViewed();

    // Listen for project and saved grants updates
    const handleProjectsUpdate = () => loadPublishedProjects();
    const handleSavedGrantsUpdate = () => loadSavedGrants();
    const handleRecentlyViewedUpdate = () => loadRecentlyViewed();

    window.addEventListener("projectsUpdated", handleProjectsUpdate);
    window.addEventListener("savedGrantsUpdated", handleSavedGrantsUpdate);
    window.addEventListener("recentlyViewedUpdated", handleRecentlyViewedUpdate);

    return () => {
      window.removeEventListener("projectsUpdated", handleProjectsUpdate);
      window.removeEventListener("savedGrantsUpdated", handleSavedGrantsUpdate);
      window.removeEventListener("recentlyViewedUpdated", handleRecentlyViewedUpdate);
    };
  }, []);

  // Loading state when filters or search changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [searchQuery, advancedFilters, selectedProject]);

  // Helper function to get match label and color based on relevance score
  const getMatchLabel = (relevance: number): { label: string; color: string } => {
    if (relevance >= 85) {
      return { label: "Excellent Match", color: "bg-teal-600 text-white border-teal-600" };
    } else if (relevance >= 70) {
      return { label: "Great Match", color: "bg-teal-500 text-white border-teal-500" };
    } else if (relevance >= 55) {
      return { label: "Good Match", color: "bg-blue-500 text-white border-blue-500" };
    } else {
      return { label: "Fair Match", color: "bg-gray-500 text-white border-gray-500" };
    }
  };

  // Helper function to calculate Project Fit and Word Match percentages
  const getMatchBreakdown = (grantId: string, relevance: number): { projectFit: number; wordMatch: number } => {
    // Use grant ID to generate consistent but varied percentages
    const seed = parseInt(grantId) || 1;
    const variance1 = ((seed * 37) % 11) - 5; // -5 to +5
    const variance2 = ((seed * 73) % 11) - 5; // -5 to +5
    
    const projectFit = Math.min(100, Math.max(50, relevance + variance1));
    const wordMatch = Math.min(100, Math.max(50, relevance + variance2));
    
    return { projectFit, wordMatch };
  };

  const toggleFavorite = (grantId: string) => {
    setFavorites(prev =>
      prev.includes(grantId)
        ? prev.filter(id => id !== grantId)
        : [...prev, grantId]
    );
  };

  const toggleSaveGrant = (e: React.MouseEvent, grant: Grant) => {
    e.stopPropagation();
    const saved = JSON.parse(localStorage.getItem("savedGrants") || "[]");
    const recent = JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]");
    const isSaved = saved.some((g: Grant) => g.id === grant.id);

    if (isSaved) {
      // Show unsave dialog
      setGrantToUnsave(grant);
      setUnsaveDialogOpen(true);
    } else {
      // Save - get lastViewed from recently viewed if exists
      const recentGrant = recent.find((g: Grant) => g.id === grant.id);
      const grantToSave = {
        ...grant,
        savedAt: Date.now(),
        lastViewed: recentGrant?.lastViewed || Date.now()
      };
      const updated = [grantToSave, ...saved];
      localStorage.setItem("savedGrants", JSON.stringify(updated));
      setSavedGrants(updated.map((g: Grant) => g.id));
      window.dispatchEvent(new Event("savedGrantsUpdated"));
    }
  };

  const confirmUnsave = () => {
    if (grantToUnsave) {
      const saved = JSON.parse(localStorage.getItem("savedGrants") || "[]");
      const updated = saved.filter((g: Grant) => g.id !== grantToUnsave.id);
      localStorage.setItem("savedGrants", JSON.stringify(updated));
      setSavedGrants(updated.map((g: Grant) => g.id));
      window.dispatchEvent(new Event("savedGrantsUpdated"));
    }
    setUnsaveDialogOpen(false);
    setGrantToUnsave(null);
  };

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  // Multi-tier filter handlers
  const handleFilterNavigation = (option: FilterOption) => {
    if (option.subcategories && option.subcategories.length > 0) {
      // Navigate deeper
      setFilterNavigationStack([...filterNavigationStack, option]);
    } else {
      // Leaf node - add filter
      const parentCategory = filterNavigationStack.length > 0 
        ? filterNavigationStack[filterNavigationStack.length - 1].label
        : "Other";
      
      const newFilter = {
        id: option.id,
        label: option.label,
        category: parentCategory
      };
      
      if (!advancedFilters.find(f => f.id === option.id)) {
        setAdvancedFilters([...advancedFilters, newFilter]);
      }
      
      // Close popover after selection
      setIsFilterPopoverOpen(false);
      setFilterNavigationStack([]);
    }
  };

  const handleFilterBack = () => {
    setFilterNavigationStack(filterNavigationStack.slice(0, -1));
  };

  const removeAdvancedFilter = (filterId: string) => {
    setAdvancedFilters(advancedFilters.filter(f => f.id !== filterId));
  };

  const getCurrentFilterOptions = (): FilterOption[] => {
    if (filterNavigationStack.length === 0) {
      return filterCategories;
    }
    const current = filterNavigationStack[filterNavigationStack.length - 1];
    return current.subcategories || [];
  };

  // Get color for filter pills - all grey style
  const getFilterPillColor = (filterId: string): string => {
    return 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100';
  };

  const filteredGrants = mockGrants
    .filter(grant => {
      // Apply advanced filters
      if (advancedFilters.length > 0) {
        const hasCategory = advancedFilters.filter(f => f.id.startsWith('category-'));
        if (hasCategory.length > 0 && !hasCategory.some(f => f.label === grant.category)) {
          return false;
        }
        
        const hasStatus = advancedFilters.filter(f => f.id.startsWith('status-'));
        if (hasStatus.length > 0 && !hasStatus.some(f => f.label === grant.status)) {
          return false;
        }
        
        const hasDifficulty = advancedFilters.filter(f => f.id.startsWith('difficulty-'));
        if (hasDifficulty.length > 0 && !hasDifficulty.some(f => f.label === grant.difficulty)) {
          return false;
        }
        
        const hasScope = advancedFilters.filter(f => f.id.startsWith('scope-'));
        if (hasScope.length > 0 && !hasScope.some(f => f.label === grant.locationType)) {
          return false;
        }
      }
      
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          grant.title.toLowerCase().includes(query) ||
          grant.description.toLowerCase().includes(query) ||
          grant.sectors?.some(s => s.toLowerCase().includes(query))
        );
      }
      return true;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "relevance":
          comparison = b.relevance - a.relevance;
          break;
        case "amount":
          comparison = b.maxAmount - a.maxAmount;
          break;
        case "deadline":
          // Sort by close date
          if (a.closeDate && b.closeDate) {
            comparison = new Date(a.closeDate).getTime() - new Date(b.closeDate).getTime();
          }
          break;
        case "recent":
          // Sort by open date
          if (a.openDate && b.openDate) {
            comparison = new Date(b.openDate).getTime() - new Date(a.openDate).getTime();
          }
          break;
      }
      return sortDirection === "asc" ? -comparison : comparison;
    });

  const activeFilterCount = advancedFilters.length;
  const totalFunding = filteredGrants.reduce((sum, g) => sum + (g.poolAmount || g.maxAmount), 0);

  return (
    <div className="max-w-[1400px] mx-auto p-6">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">
                <BreadcrumbHome />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Grant Search</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Compact Header with Search */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl text-gray-900" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>Grant Search</h1>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>Discover funding opportunities tailored to your needs</p>
          </div>
          
          {/* Quick Examples */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Try:</span>
            {searchExamples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setSearchQuery(example)}
                className="px-2.5 py-1 bg-white text-[#9810FA] rounded-md text-xs font-medium hover:bg-purple-50 border border-[#9810FA] transition-all hover:shadow-sm"
              >
                {example.split(' ').slice(0, 3).join(' ')}...
              </button>
            ))}
          </div>
        </div>

        {/* Connected Search & Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Search Input with Programs Dropdown */}
          <div className="relative flex items-center">
            {/* Programs Dropdown/CTA on the left */}
            <div className="flex-shrink-0 border-r border-gray-200">
              {publishedProjects.length === 0 ? (
                // Call to Action when no programs
                <button
                  onClick={() => navigate("/project-details")}
                  className="h-[52px] border-0 rounded-none pl-4 pr-3 min-w-[200px] flex items-center gap-2 hover:bg-teal-50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4 text-teal-600" />
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-gray-900">Add Program</span>
                      <span className="text-[10px] text-teal-600 font-medium">+80% match accuracy</span>
                    </div>
                  </div>
                </button>
              ) : (
                // Regular Programs Dropdown
                <Select 
                  value={selectedProject} 
                  onValueChange={setSelectedProject}
                >
                  <SelectTrigger className="h-[52px] border-0 rounded-none pl-4 pr-3 gap-2 focus:ring-0 font-medium min-w-[200px] text-gray-700 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-teal-600" />
                      {selectedProject === "all-projects" ? (
                        <span className="text-sm">All Programs</span>
                      ) : (
                        <span className="text-sm truncate max-w-[140px]">
                          {publishedProjects.find(p => p.id === selectedProject)?.title || "All Programs"}
                        </span>
                      )}
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-projects">
                      <div className="flex items-center justify-between w-full gap-3">
                        <span className="font-medium">All Programs</span>
                        {selectedProject === "all-projects" && (
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                        )}
                      </div>
                    </SelectItem>
                    {publishedProjects.length > 0 && (
                      <>
                        <div className="h-px bg-gray-200 my-1"></div>
                        <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Select a Program
                        </div>
                        {publishedProjects.map((project) => (
                          <SelectItem key={project.id} value={project.id}>
                            <div className="flex items-center justify-between w-full gap-3">
                              <span className="text-sm">{project.title}</span>
                              {selectedProject === project.id && (
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                              )}
                            </div>
                          </SelectItem>
                        ))}
                      </>
                    )}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <Search className={`w-5 h-5 transition-colors ${searchQuery ? 'text-teal-600' : 'text-gray-400'}`} />
                <Sparkles className="w-4 h-4" style={{ color: '#9810FA' }} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tell us about your project that needs funding"
                className={`w-full pl-20 pr-12 py-3.5 text-base focus:outline-none transition-all ${searchQuery ? 'bg-teal-50/30' : 'bg-white'}`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>


        </div>
      </div>

      {/* Results Section with Right Rail */}
      <div className="flex gap-6">
        {/* Main Results */}
        <div className="flex-1">
          {/* Advanced Filters & Results Header */}
          <div className="mb-3">
            {/* Advanced Filter Pills & Add Filters Button */}
            <div className="flex items-center gap-2 flex-wrap mb-3">
              {/* Advanced Filter Pills */}
              {advancedFilters.map(filter => (
                <Badge key={filter.id} className={`gap-1.5 pr-1 py-1.5 text-sm ${getFilterPillColor(filter.id)}`}>
                  <span className="font-medium">{filter.label}</span>
                  <button
                    onClick={() => removeAdvancedFilter(filter.id)}
                    className="hover:bg-black/10 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </Badge>
              ))}

              {/* Add Filters Popover */}
              <Popover open={isFilterPopoverOpen} onOpenChange={setIsFilterPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-700 font-semibold"
                  >
                    <Plus className="w-4 h-4" />
                    Add Filters
                    <ChevronDown className={`w-4 h-4 transition-transform ${isFilterPopoverOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-96 p-0" 
                  align="start"
                  onOpenAutoFocus={(e) => e.preventDefault()}
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    {/* Navigation Header */}
                    {filterNavigationStack.length > 0 ? (
                      <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-50 to-white border-b border-teal-100">
                        <button
                          onClick={handleFilterBack}
                          className="p-1.5 hover:bg-teal-100 rounded-lg transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 text-teal-600 rotate-180" />
                        </button>
                        <div className="flex-1">
                          <p className="text-sm text-teal-600 font-semibold">
                            {filterNavigationStack[filterNavigationStack.length - 1].label}
                          </p>
                          <p className="text-xs text-teal-600/70">
                            Select an option
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 border-b border-teal-700">
                        <p className="text-sm text-white font-semibold">Add Filters</p>
                        <p className="text-xs text-teal-100">
                          Refine your grant search
                        </p>
                      </div>
                    )}

                    {/* Filter Options List */}
                    <div className="max-h-[32rem] overflow-y-auto">
                      {getCurrentFilterOptions().length > 0 ? (
                        <>
                          {/* Quick Filters Section (Only on root level) */}
                          {filterNavigationStack.length === 0 && (
                            <>
                              <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Quick Filters</p>
                              </div>
                              <div className="py-1 border-b border-gray-200">
                                {getCurrentFilterOptions().slice(0, 4).map((option) => (
                                  <button
                                    key={option.id}
                                    onClick={() => handleFilterNavigation(option)}
                                    className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-teal-50 transition-colors group"
                                  >
                                    <span className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                                      {option.label}
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                                  </button>
                                ))}
                              </div>
                              <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Advanced Filters</p>
                              </div>
                            </>
                          )}
                          
                          {/* All Options or Subcategory Options */}
                          <div className="py-1">
                            {(filterNavigationStack.length === 0 ? getCurrentFilterOptions().slice(4) : getCurrentFilterOptions()).map((option) => (
                              <button
                                key={option.id}
                                onClick={() => handleFilterNavigation(option)}
                                className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-teal-50 transition-colors group"
                              >
                                <span className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                                  {option.label}
                                </span>
                                {option.subcategories && option.subcategories.length > 0 && (
                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                                )}
                              </button>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="px-4 py-8 text-center text-sm text-gray-500">
                          No options available
                        </div>
                      )}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Clear all advanced filters */}
              {advancedFilters.length > 0 && (
                <button
                  onClick={() => setAdvancedFilters([])}
                  className="text-xs text-gray-600 hover:text-gray-900 font-medium underline ml-1"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Results Count & Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold text-gray-900">
                  {filteredGrants.length} <span className="text-gray-500 font-normal">grants</span>
                </h2>
                {searchQuery && (
                  <Badge className="bg-teal-600 text-white gap-1.5 py-1">
                    <Target className="w-3 h-3" />
                    "{searchQuery}"
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-2">
              {/* Save as Alert Button */}
              <Button 
                variant="default" 
                size="sm" 
                className="gap-2 bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => setIsSaveAlertModalOpen(true)}
              >
                <Bell className="w-3.5 h-3.5" />
                Save as Alert
              </Button>

              {/* View Toggle */}
              <div className="flex items-center bg-white border border-gray-200 rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded transition-colors ${
                    viewMode === "list" ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded transition-colors ${
                    viewMode === "grid" ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ArrowUpDown className="w-3.5 h-3.5" />
                    <span className="text-sm">
                      {sortBy === "relevance" ? "Relevance" : sortBy === "amount" ? "Amount" : sortBy === "deadline" ? "Deadline" : "Recent"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuItem onClick={() => setSortBy("relevance")}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Relevance
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("amount")}>
                    <Banknote className="w-4 h-4 mr-2" />
                    Funding Amount
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("deadline")}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Deadline
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("recent")}>
                    <Clock className="w-4 h-4 mr-2" />
                    Recently Added
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-3.5 h-3.5" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Grant Cards */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
              <p className="text-gray-600 font-medium">Searching for grants...</p>
            </div>
          </div>
        ) : filteredGrants.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <div className="max-w-lg text-center">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-50 to-gray-100">
                <SearchX className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Lustria, serif' }}>
                No Grants Found
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We couldn't find any grants matching your current filters{searchQuery && ` and search for "${searchQuery}"`}. Try adjusting your criteria or removing some filters to see more results.
              </p>
              <div className="flex items-center justify-center gap-3">
                {searchQuery && (
                  <Button
                    onClick={() => setSearchQuery("")}
                    variant="outline"
                    className="gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear Search
                  </Button>
                )}
                {advancedFilters.length > 0 && (
                  <Button
                    onClick={() => setAdvancedFilters([])}
                    variant="outline"
                    className="gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-2 gap-4" : "space-y-3"}>
            {filteredGrants.map((grant) => {
              const matchInfo = getMatchLabel(grant.relevance);
              const matchBreakdown = getMatchBreakdown(grant.id, grant.relevance);
              // Merge with recently viewed data if exists
              const recentGrant = recentlyViewed.find(g => g.id === grant.id);
              const grantWithTimestamp = recentGrant ? { ...grant, lastViewed: recentGrant.lastViewed } : grant;
              return (
                <div
                  key={grant.id}
                  onClick={() => navigate(`/grant/${grant.id}`)}
                  className={`bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all group overflow-hidden cursor-pointer ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  {/* Grant Image */}
                  {grant.image && (
                    <div className={`relative overflow-hidden bg-gray-100 flex-shrink-0 ${
                      viewMode === "grid" 
                        ? "h-48 w-full" 
                        : "w-32 self-stretch"
                    }`}>
                      <ImageWithFallback 
                        src={grant.image} 
                        alt={grant.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Match Badge Overlay - Only in Grid View */}
                      {viewMode === "grid" && (
                        <div className="absolute top-3 right-3">
                          <Badge className={`text-xs font-semibold shadow-lg ${matchInfo.color}`}>
                            <Target className="w-3 h-3 mr-1" />
                            {matchInfo.label}
                          </Badge>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="p-5 flex-1">
                    {/* Header */}
                    <div className="mb-3">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-teal-700 transition-colors mb-2">
                            {grant.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                            {grant.description}
                          </p>
                        </div>
                        
                        {/* Match Badge and Breakdown Gauges - Only in List View */}
                        {viewMode === "list" && (
                          <div className="flex-shrink-0 w-48">
                            <Badge className={`text-xs font-semibold mb-2 ${matchInfo.color}`}>
                              <Target className="w-3 h-3 mr-1" />
                              {matchInfo.label}
                            </Badge>
                            <div className="space-y-1">
                              {/* Project Fit */}
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-gray-500 w-16">Project Fit</span>
                                <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500"
                                    style={{ width: `${matchBreakdown.projectFit}%` }}
                                  />
                                </div>
                                <span className="text-[10px] font-semibold text-gray-900 w-7 text-right">
                                  {matchBreakdown.projectFit}%
                                </span>
                              </div>
                              {/* Word Match */}
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-gray-500 w-16">Word Match</span>
                                <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500"
                                    style={{ width: `${matchBreakdown.wordMatch}%` }}
                                  />
                                </div>
                                <span className="text-[10px] font-semibold text-gray-900 w-7 text-right">
                                  {matchBreakdown.wordMatch}%
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Banknote className="w-4 h-4" />
                        <span className="font-semibold text-gray-900">
                          ${grant.maxAmount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Globe className="w-4 h-4" />
                        <span className="text-gray-700">{grant.location}</span>
                      </div>
                      {grant.closeDate && (
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-gray-700">{grant.closeDate}</span>
                        </div>
                      )}
                    </div>

                    {/* Tags and Actions */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          className={`text-xs ${
                            grant.status === "Open"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : grant.status === "Pending"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-gray-100 text-gray-600 border-gray-200"
                          }`}
                        >
                          {grant.status}
                        </Badge>
                        <Badge className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                          {grant.difficulty}
                        </Badge>
                        <Badge className="text-xs bg-teal-50 text-teal-700 border-teal-200">
                          {grant.category}
                        </Badge>
                      </div>

                      {/* Save/Unsave Section */}
                      <div className={`flex items-center gap-2 ${viewMode === "grid" ? "flex-col items-end" : ""}`}>
                        {savedGrants.includes(grant.id) && grantWithTimestamp.lastViewed && (
                          <span className="text-xs text-gray-500">
                            Last viewed {formatTimeAgo(grantWithTimestamp.lastViewed)}
                          </span>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => toggleSaveGrant(e, grantWithTimestamp)}
                          className={`gap-1.5 ${
                            savedGrants.includes(grant.id)
                              ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
                              : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
                          }`}
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${savedGrants.includes(grant.id) ? "fill-current" : ""}`} />
                          {savedGrants.includes(grant.id) ? "Unsave" : "Save"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Right Rail */}
      <aside className="w-80 flex-shrink-0">
        <div className="sticky top-6 space-y-4">
          {/* Search Insights */}
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-teal-600" />
              <h3 className="font-semibold text-gray-900">Search Insights</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Funding</span>
                <span className="text-lg font-bold text-gray-900">
                  ${(totalFunding / 1000000).toFixed(1)}M
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg. Grant Size</span>
                <span className="font-semibold text-gray-900">
                  {filteredGrants.length > 0 ? `$${Math.round(totalFunding / filteredGrants.length / 1000)}K` : '--'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Open Now</span>
                <span className="font-semibold text-gray-900">
                  {filteredGrants.filter(g => g.status === "Open").length}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-teal-600" />
              <h3 className="font-semibold text-gray-900">Pro Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Be specific about location and funding range</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Mention your organization type for better matches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span>Use natural language like you're talking to a colleague</span>
              </li>
            </ul>
          </div>

          {/* Recently Viewed - Only show on Grant Search page, not on Saved Grants page */}
          {recentlyViewed.length > 0 && (
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <h3 className="font-semibold text-gray-900">Recently Viewed</h3>
                </div>
                <Link
                  to="/saved-grants?tab=recent"
                  className="text-xs text-teal-600 hover:text-teal-700 font-medium"
                >
                  More
                </Link>
              </div>
              <div className="space-y-3">
                {recentlyViewed.map((grant) => (
                  <div
                    key={grant.id}
                    onClick={() => navigate(`/grant/${grant.id}`)}
                    className="p-3 border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50/50 cursor-pointer transition-all group"
                  >
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1.5 group-hover:text-teal-700 transition-colors">
                      {grant.title}
                    </h4>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-1 text-gray-600">
                        <DollarSign className="w-3 h-3" />
                        <span className="font-medium">${(grant.maxAmount / 1000).toFixed(0)}K</span>
                      </div>
                      {grant.lastViewed && (
                        <span className="text-gray-500">{formatTimeAgo(grant.lastViewed)}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>

    {/* Save Search as Alert Modal */}
    <Dialog open={isSaveAlertModalOpen} onOpenChange={setIsSaveAlertModalOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl" style={{ fontFamily: 'Lustria, serif' }}>
            Save Search as Alert
          </DialogTitle>
          <DialogDescription>
            Get notified when new grants match your current search criteria
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Search Criteria Display */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100">
            <div className="flex items-start gap-2 mb-3">
              <Bell className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-teal-900 mb-1">Your Search Criteria</h4>
                <p className="text-xs text-teal-700">You'll be notified about grants matching:</p>
              </div>
            </div>

            {/* Programs Selected */}
            {publishedProjects.length > 0 && selectedProject !== "all-projects" && (
              <div className="mb-3">
                <p className="text-xs font-medium text-teal-900 mb-1.5">Program(s)</p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge className="bg-white text-teal-700 border border-teal-200 text-xs px-2 py-0.5">
                    {publishedProjects.find(p => p.id === selectedProject)?.title || "Selected Program"}
                  </Badge>
                </div>
              </div>
            )}

            {/* Search Prompt */}
            {searchQuery && (
              <div className="mb-3">
                <p className="text-xs font-medium text-teal-900 mb-1.5">Search Prompt</p>
                <p className="text-xs text-teal-700 bg-white rounded px-2 py-1.5 border border-teal-100">
                  "{searchQuery}"
                </p>
              </div>
            )}

            {/* Filter Tags */}
            {advancedFilters.length > 0 && (
              <div>
                <p className="text-xs font-medium text-teal-900 mb-1.5">Filters</p>
                <div className="flex flex-wrap gap-1.5">
                  {advancedFilters.map(filter => (
                    <Badge key={filter.id} className="bg-white text-teal-700 border border-teal-200 text-xs px-2 py-0.5">
                      {filter.label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Alert Name */}
          <div className="space-y-2">
            <Label htmlFor="alertName" className="text-sm font-medium text-gray-900">
              Alert Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="alertName"
              value={alertName}
              onChange={(e) => setAlertName(e.target.value)}
              placeholder="My Grant Alert"
              className="w-full"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email Address
            </Label>
            <Input
              id="email"
              value="olivia@untitledu.com"
              disabled
              className="w-full bg-gray-50 cursor-not-allowed"
            />
          </div>

          {/* Notification Frequency */}
          <div className="space-y-2">
            <Label htmlFor="frequency" className="text-sm font-medium text-gray-900">
              Notification Frequency
            </Label>
            <Select value={alertFrequency} onValueChange={setAlertFrequency}>
              <SelectTrigger id="frequency" className="w-full border-gray-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Weekly">Weekly</SelectItem>
                <SelectItem value="Bi-Weekly">Bi-Weekly</SelectItem>
                <SelectItem value="Monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Info Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
            <div className="text-blue-600 flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 12C7.4 12 7 11.6 7 11C7 10.4 7.4 10 8 10C8.6 10 9 10.4 9 11C9 11.6 8.6 12 8 12ZM9 9H7V4H9V9Z" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-xs text-blue-700 leading-relaxed">
              We'll email you once a week with new grants. You can manage or delete this alert anytime in{" "}
              <button 
                className="font-semibold underline hover:text-blue-800"
                onClick={() => {
                  setIsSaveAlertModalOpen(false);
                  navigate("/settings");
                }}
              >
                Settings
              </button>.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              setIsSaveAlertModalOpen(false);
              setAlertName("");
            }}
          >
            Cancel
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            disabled={!alertName.trim() || isCreatingAlert}
            onClick={async () => {
              setIsCreatingAlert(true);
              
              // Save the alert to localStorage
              const newAlert = {
                id: `alert-${Date.now()}`,
                name: alertName,
                frequency: alertFrequency,
                email: "olivia@untitledu.com",
                searchQuery: searchQuery,
                filters: advancedFilters,
                programs: selectedProject !== "all-projects" 
                  ? [publishedProjects.find(p => p.id === selectedProject)?.title || ""]
                  : [],
                alertsSent: 0,
                enabled: true,
                createdAt: new Date().toISOString(),
              };

              const existingAlerts = JSON.parse(localStorage.getItem("grantAlerts") || "[]");
              localStorage.setItem("grantAlerts", JSON.stringify([...existingAlerts, newAlert]));

              // Show success toast with elegant styling
              toast.success("Alert created successfully!", {
                description: `You'll receive ${alertFrequency.toLowerCase()} updates for "${alertName}"`,
                duration: 4000,
              });

              // Wait a moment to show the success state
              await new Promise(resolve => setTimeout(resolve, 600));

              // Close modal and reset state
              setIsSaveAlertModalOpen(false);
              setAlertName("");
              setIsCreatingAlert(false);
            }}
          >
            {isCreatingAlert ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2 animate-in fade-in zoom-in" />
                Created!
              </>
            ) : (
              "Create Alert"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    {/* Unsave Confirmation Dialog */}
    <Dialog open={unsaveDialogOpen} onOpenChange={setUnsaveDialogOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: 'Lustria, serif' }}>
            Unsave Grant?
          </DialogTitle>
          <DialogDescription className="text-gray-600 leading-relaxed">
            Are you sure you want to remove this grant from your saved list? You can always save it again later.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => setUnsaveDialogOpen(false)}
            className="border-gray-300"
          >
            Cancel
          </Button>
          <Button
            onClick={confirmUnsave}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Unsave Grant
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  );
}