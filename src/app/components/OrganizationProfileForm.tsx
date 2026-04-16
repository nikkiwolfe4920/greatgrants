import { useState, useEffect, useRef } from "react";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";
import {
  Building2,
  ArrowLeft,
  Clock,
  Save,
  Plus,
  Trash2,
  User,
  Users,
  X,
  Check,
  Minus,
  HardDrive,
  Flame,
  Loader2,
  CheckCircle2,
  Circle,
  ExternalLink,
  FileText,
  AlertTriangle,
  Info
} from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Badge } from "@/app/components/ui/badge";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Switch } from "@/app/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";
import { ReadinessQuestionnaire, type ReadinessCategory } from "@/app/components/ReadinessQuestionnaire";
import { useReadinessScore } from "@/app/contexts/ReadinessScoreContext";

interface Leader {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  isPrimaryContact: boolean;
}

interface BoardMember {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  isPrimaryContact: boolean;
}

interface OrganizationProfileFormProps {
  onBack: () => void;
  onNavigate?: (view: "home" | "grants" | "organizations") => void;
}

export function OrganizationProfileForm({ onBack, onNavigate }: OrganizationProfileFormProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setScore, setOrgProfileItemsRemaining } = useReadinessScore();
  
  const [activeTab, setActiveTab] = useState('legal-info');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const hasUnsavedChangesRef = useRef(false);
  const [readinessEnabled, setReadinessEnabled] = useState(true);
  const [showRightRail, setShowRightRail] = useState(true);
  const [samGovComplete, setSamGovComplete] = useState(false);
  
  // Readiness questionnaire state
  const [readinessAnswers, setReadinessAnswers] = useState<Record<string, 'yes' | 'no' | 'unsure' | null>>({});
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredRequiredItem, setHoveredRequiredItem] = useState<'ein' | 'uei' | 'legalInfo' | null>(null);
  
  // UEI Verification state
  const [ueiVerificationStatus, setUeiVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');
  const [verifiedUEI, setVerifiedUEI] = useState<string>('');
  const verificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Keep ref in sync with state
  useEffect(() => {
    hasUnsavedChangesRef.current = hasUnsavedChanges;
  }, [hasUnsavedChanges]);

  // Cleanup verification timeout on unmount
  useEffect(() => {
    return () => {
      if (verificationTimeoutRef.current) {
        clearTimeout(verificationTimeoutRef.current);
      }
    };
  }, []);

  // Readiness Categories Data
  const readinessCategories: ReadinessCategory[] = [
    {
      id: 'financial',
      title: 'Financial Readiness',
      questions: [
        {
          id: 'fin-1',
          question: 'Is the Organization compliant with 2 CFR 200 audit requirements (including a Single Audit)?',
          tooltip: 'Organizations spending $750,000+ in federal funds per fiscal year must complete a Single Audit reviewing financial statements and program compliance. Below that threshold, you still need sound financial practices and documentation of fund usage. Compliant means you understand these thresholds, have completed any required audits, and have addressed (or are addressing) any findings.'
        },
        {
          id: 'fin-2',
          question: 'Does your organization maintain separate accounting records for each federal grant?',
          tooltip: 'Federal regulations require organizations to track expenses for each grant separately to ensure funds are used appropriately and to facilitate audits. This includes maintaining detailed documentation of how grant funds are allocated and spent.'
        },
        {
          id: 'fin-3',
          question: 'Does your organization have a documented indirect cost rate or use the de minimis rate?',
          tooltip: 'An indirect cost rate allows you to charge overhead expenses (like utilities, rent, administrative salaries) to federal grants. Organizations can negotiate a rate with a federal agency or use the de minimis rate of 10% of modified total direct costs.'
        },
        {
          id: 'fin-4',
          question: 'Are your financial statements audited by an independent CPA annually?',
          tooltip: 'Annual independent audits provide assurance that your financial statements are accurate and that your organization follows proper accounting practices. Many federal grants require recent audited financial statements as part of the application.'
        },
        {
          id: 'fin-5',
          question: 'Does your organization have adequate internal controls to prevent fraud and misuse of funds?',
          tooltip: 'Internal controls include policies and procedures that safeguard assets, ensure accurate financial reporting, and promote compliance with laws and regulations. Examples include segregation of duties, approval processes, and regular account reconciliations.'
        },
        {
          id: 'fin-6',
          question: 'Can your organization provide the required cost-share or matching funds if needed?',
          tooltip: 'Many federal grants require recipients to contribute a portion of project costs through cash or in-kind contributions. Before applying, ensure your organization has the financial capacity to meet any matching requirements specified in the grant announcement.'
        }
      ]
    },
    {
      id: 'programmatic',
      title: 'Programmatic Readiness',
      questions: [
        {
          id: 'prog-1',
          question: 'Does your organization have experience managing programs similar to those funded by federal grants?',
          tooltip: 'Federal agencies prefer funding organizations with a proven track record of successfully implementing similar programs. Document your relevant experience, outcomes achieved, and lessons learned from past initiatives to demonstrate your capability.'
        },
        {
          id: 'prog-2',
          question: 'Can your organization collect, track, and report program performance data and outcomes?',
          tooltip: 'Federal grants require regular reporting on program activities, outputs, and outcomes. Your organization must have systems in place to collect accurate data, monitor progress toward goals, and prepare comprehensive performance reports for funders.'
        }
      ]
    },
    {
      id: 'policy',
      title: 'Policy Documentation & Compliance',
      questions: [
        {
          id: 'pol-1',
          question: 'Does your organization have written procurement policies that comply with federal standards?',
          tooltip: 'Federal regulations (2 CFR 200.318-200.327) require specific procurement procedures when using grant funds to purchase goods or services. Your policies should address competitive bidding, conflict of interest, and record-keeping requirements.'
        },
        {
          id: 'pol-2',
          question: 'Are personnel policies documented, including hiring, compensation, and time/effort reporting?',
          tooltip: 'When charging staff salaries to federal grants, you must document how time is allocated across different funding sources. Personnel policies should outline hiring practices, compensation structures, and methods for tracking and certifying employee time.'
        },
        {
          id: 'pol-3',
          question: 'Does your organization have a conflict of interest policy covering board, staff, and consultants?',
          tooltip: 'Federal grants prohibit conflicts of interest that could bias decision-making or create unfair advantages. Your policy should require disclosure of potential conflicts, establish procedures for handling them, and apply to all individuals involved in grant activities.'
        },
        {
          id: 'pol-4',
          question: 'Are travel, equipment, and property management policies aligned with federal regulations?',
          tooltip: 'Federal grants have specific rules governing allowable travel costs, equipment purchases, and property management. Your policies should address topics like travel reimbursement rates, equipment inventory and disposal, and property insurance requirements.'
        }
      ]
    }
  ];

  // Legal Info state
  const [legalInfo, setLegalInfo] = useState({
    legalOrgName: "",
    dbaName: "",
    ein: "",
    uei: "",
    website: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    county: "",
    congressionalDistrict: "",
  });

  // Details state
  const [details, setDetails] = useState({
    yearFounded: "",
    annualBudget: "",
    numStaff: "",
    numVolunteers: "",
    annualVolunteerHours: "",
    lastAuditDate: "",
    fiscalYearEnd: "",
    indirectCostRate: "",
    religiousDenomination: "",
    missionStatement: "",
    visionStatement: "",
  });

  // Financial Info state
  const [financialInfo, setFinancialInfo] = useState({
    orgRegistrationType: "",
    cfr200Compliant: null as 'yes' | 'no' | 'unsure' | null,
    financialSystemTracking: null as 'yes' | 'no' | 'unsure' | null,
    timeEffortReporting: null as 'yes' | 'no' | 'unsure' | null,
    indirectCostAgreement: "",
    costShareLiquidity: null as 'yes' | 'no' | 'unsure' | null,
  });

  // Policies & Compliance state
  const [policiesCompliance, setPoliciesCompliance] = useState({
    complianceTrackingSoftware: null as 'yes' | 'no' | 'unsure' | null,
    federalDataTracking: null as 'yes' | 'no' | 'unsure' | null,
    demographicDataCollection: null as 'yes' | 'no' | 'unsure' | null,
    internalControlsDocs: null as 'yes' | 'no' | 'unsure' | null,
    procurementPolicies: null as 'yes' | 'no' | 'unsure' | null,
    timeEffortPolicies: null as 'yes' | 'no' | 'unsure' | null,
    conflictOfInterestPolicies: null as 'yes' | 'no' | 'unsure' | null,
  });

  // Field highlighting state for right rail navigation
  const [highlightedField, setHighlightedField] = useState<string | null>(null);
  const [highlightedFields, setHighlightedFields] = useState<string[]>([]);
  
  // State for tracking hovered/clicked requirement in right rail
  const [activeRequirement, setActiveRequirement] = useState<string | null>(null);

  // Focus Areas state
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<Record<string, string[]>>({});

  // Focus area categories with sub-options (max 15 each)
  const focusAreaCategories = {
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
      "Agricultural Training"
    ],
    "Education": [
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
      "Educational Equity"
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
      "Health Insurance Navigation"
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
      "Family Housing"
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
      "Technology & Innovation Hubs"
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
      "Court-Appointed Advocacy"
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
      "Environmental Justice"
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
      "Tech Entrepreneurship"
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
      "Creative Placemaking"
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
      "Clergy Development"
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
      "Multimodal Transportation"
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
      "Science Communication"
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
      "Memorial & Recognition"
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
      "First Responder Support"
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
      "International Advocacy"
    ]
  };

  // Toggle individual focus area option
  const toggleFocusAreaOption = (category: string, option: string) => {
    setSelectedFocusAreas(prev => {
      const categorySelections = prev[category] || [];
      const newSelections = categorySelections.includes(option)
        ? categorySelections.filter(o => o !== option)
        : [...categorySelections, option];
      
      if (newSelections.length === 0) {
        const { [category]: _, ...rest } = prev;
        return rest;
      }
      
      return { ...prev, [category]: newSelections };
    });
    setHasUnsavedChanges(true);
  };

  // Toggle all options in a category
  const toggleAllInCategory = (category: string) => {
    const allOptions = focusAreaCategories[category as keyof typeof focusAreaCategories];
    const currentSelections = selectedFocusAreas[category] || [];
    
    setSelectedFocusAreas(prev => {
      if (currentSelections.length === allOptions.length) {
        // Deselect all
        const { [category]: _, ...rest } = prev;
        return rest;
      } else {
        // Select all
        return { ...prev, [category]: allOptions };
      }
    });
    setHasUnsavedChanges(true);
  };

  // Clear all selections
  const clearAllSelections = () => {
    setSelectedFocusAreas({});
    setHasUnsavedChanges(true);
  };

  // Get total selection count
  const getTotalSelections = () => {
    return Object.values(selectedFocusAreas).reduce((sum, arr) => sum + arr.length, 0);
  };

  // Get category selection status
  const getCategoryStatus = (category: string) => {
    const allOptions = focusAreaCategories[category as keyof typeof focusAreaCategories];
    const selected = selectedFocusAreas[category] || [];
    
    if (selected.length === 0) return "none";
    if (selected.length === allOptions.length) return "all";
    return "partial";
  };

  // Key Contacts state
  const [leaders, setLeaders] = useState<Leader[]>([
    { id: "1", fullName: "Nikki Wolfe", email: "nikki@org.com", phone: "+1 (770) 314-2385", bio: "Nikki's bio...", isPrimaryContact: true }
  ]);

  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([
    { id: "1", fullName: "", email: "", phone: "", bio: "", isPrimaryContact: false }
  ]);

  // Calculate completion percentage
  const calculateCompletion = () => {
    let completed = 0;
    let total = 0;

    // Legal Info (11 fields, 7 required)
    const legalFields = Object.entries(legalInfo);
    const requiredLegalFields = ['legalOrgName', 'ein', 'uei', 'streetAddress', 'city', 'state', 'zipCode'];
    legalFields.forEach(([key, value]) => {
      if (requiredLegalFields.includes(key)) {
        total++;
        if (value.trim()) completed++;
      }
    });

    // Details (11 fields, 1 required)
    if (details.annualBudget.trim()) completed++;
    total++;

    // Leaders (at least 1 complete)
    const completeLeader = leaders.some(l => l.fullName && l.email && l.phone && l.bio);
    if (completeLeader) completed++;
    total++;

    // Board Members (at least 1 complete)
    const completeBoardMember = boardMembers.some(b => b.fullName && b.email && b.phone && b.bio);
    if (completeBoardMember) completed++;
    total++;

    return Math.round((completed / total) * 100);
  };

  const completionPercentage = calculateCompletion();

  // Auto-save functionality
  useEffect(() => {
    if (hasUnsavedChanges) {
      const timer = setTimeout(() => {
        handleAutoSave();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [legalInfo, details, financialInfo, policiesCompliance, leaders, boardMembers, hasUnsavedChanges]);

  const handleAutoSave = () => {
    setIsAutoSaving(true);
    // Simulate API call
    setTimeout(() => {
      setLastSaved(new Date());
      setIsAutoSaving(false);
      setHasUnsavedChanges(false);
    }, 500);
  };

  const handleUndo = () => {
    // TODO: Implement undo functionality with history
    console.log("Undo last change");
  };

  const handleLegalInfoChange = (field: string, value: string) => {
    setLegalInfo(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
    
    // Handle UEI verification
    if (field === 'uei') {
      // Clear any existing verification timeout
      if (verificationTimeoutRef.current) {
        clearTimeout(verificationTimeoutRef.current);
      }
      
      // Reset verification status when user modifies the UEI
      if (value !== verifiedUEI) {
        setUeiVerificationStatus('idle');
      }
      
      // Only trigger verification if the value is exactly 12 digits
      if (value.length === 12 && /^\d{12}$/.test(value)) {
        setUeiVerificationStatus('verifying');
        
        // Simulate API call with delay
        verificationTimeoutRef.current = setTimeout(() => {
          if (value === '123456789012') {
            setUeiVerificationStatus('verified');
            setVerifiedUEI(value);
          } else {
            setUeiVerificationStatus('failed');
            setVerifiedUEI('');
          }
        }, 1500); // 1.5 second delay for realistic verification
      } else {
        // Reset if not 12 digits
        setUeiVerificationStatus('idle');
        setVerifiedUEI('');
      }
    }
  };

  const handleDetailsChange = (field: string, value: string) => {
    setDetails(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleAddLeader = () => {
    const newId = (leaders.length + 1).toString();
    setLeaders([...leaders, { id: newId, fullName: "", email: "", phone: "", bio: "", isPrimaryContact: false }]);
    setHasUnsavedChanges(true);
  };

  const handleRemoveLeader = (id: string) => {
    if (leaders.length > 1) {
      setLeaders(leaders.filter(l => l.id !== id));
      setHasUnsavedChanges(true);
    }
  };

  const handleLeaderChange = (id: string, field: keyof Leader, value: string | boolean) => {
    setLeaders(leaders.map(l => l.id === id ? { ...l, [field]: value } : l));
    setHasUnsavedChanges(true);
  };
  
  const toggleLeaderPrimaryContact = (id: string) => {
    setLeaders(leaders.map(l => ({ 
      ...l, 
      isPrimaryContact: l.id === id ? !l.isPrimaryContact : false 
    })));
    // Also deselect any primary contact in board members
    setBoardMembers(boardMembers.map(b => ({ 
      ...b, 
      isPrimaryContact: false 
    })));
    setHasUnsavedChanges(true);
  };

  const handleAddBoardMember = () => {
    const newId = (boardMembers.length + 1).toString();
    setBoardMembers([...boardMembers, { id: newId, fullName: "", email: "", phone: "", bio: "", isPrimaryContact: false }]);
    setHasUnsavedChanges(true);
  };

  const handleRemoveBoardMember = (id: string) => {
    if (boardMembers.length > 1) {
      setBoardMembers(boardMembers.filter(b => b.id !== id));
      setHasUnsavedChanges(true);
    }
  };

  const handleBoardMemberChange = (id: string, field: keyof BoardMember, value: string | boolean) => {
    setBoardMembers(boardMembers.map(b => b.id === id ? { ...b, [field]: value } : b));
    setHasUnsavedChanges(true);
  };

  const toggleBoardMemberPrimaryContact = (id: string) => {
    setBoardMembers(boardMembers.map(b => ({ 
      ...b, 
      isPrimaryContact: b.id === id ? !b.isPrimaryContact : false 
    })));
    // Also deselect any primary contact in leaders
    setLeaders(leaders.map(l => ({ 
      ...l, 
      isPrimaryContact: false 
    })));
    setHasUnsavedChanges(true);
  };

  const formatTimeAgo = (date: Date | null) => {
    if (!date) return "";
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };

  const usStates = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  // Block navigation when there are unsaved changes
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  // Warn before leaving the page with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChangesRef.current) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleNavigateAway = (path: string) => {
    if (hasUnsavedChanges) {
      setPendingNavigation(path);
      setShowUnsavedDialog(true);
    } else {
      if (path === 'home') navigate('/');
      else if (path === 'grants') navigate('/applications');
      else onNavigate?.(path as any);
    }
  };

  const handleDiscardChanges = () => {
    setShowUnsavedDialog(false);
    setHasUnsavedChanges(false);
    
    // Handle pending navigation
    if (pendingNavigation) {
      setTimeout(() => {
        if (pendingNavigation === 'home') navigate('/');
        else if (pendingNavigation === 'grants') navigate('/applications');
        else onNavigate?.(pendingNavigation as any);
        setPendingNavigation(null);
      }, 0);
    }
  };

  const handleKeepEditing = () => {
    setShowUnsavedDialog(false);
    setPendingNavigation(null);
  };

  // Validation functions for checklist
  const validateEIN = () => {
    // EIN is 9 digits (format: XX-XXXXXXX or XXXXXXXXX)
    const ein = legalInfo.ein.replace(/-/g, '').trim();
    return ein.length === 9 && /^\d{9}$/.test(ein);
  };

  const validateDUNS = () => {
    // UEI/DUNS - Must be verified
    return ueiVerificationStatus === 'verified' && verifiedUEI === legalInfo.uei;
  };

  const validateSAMGov = () => {
    // SAM.gov is manually marked complete by user
    return samGovComplete;
  };

  const validateLegalInfo = () => {
    // Check if required legal info fields are filled (excluding EIN and UEI as they have separate checks)
    return (
      legalInfo.legalOrgName.trim() !== '' &&
      legalInfo.streetAddress.trim() !== '' &&
      legalInfo.city.trim() !== '' &&
      legalInfo.state.trim() !== '' &&
      legalInfo.zipCode.trim() !== ''
    );
  };

  // Check completion status for each checklist item
  const getChecklistItems = () => {
    return [
      {
        id: 'org-name',
        label: 'Organization Name',
        completed: legalInfo.legalOrgName.trim() !== '',
      },
      {
        id: 'org-address',
        label: 'Organization Address',
        completed: legalInfo.streetAddress.trim() !== '' && legalInfo.city.trim() !== '' && legalInfo.state.trim() !== '' && legalInfo.zipCode.trim() !== '',
      },
      {
        id: 'ein',
        label: 'EIN Number',
        completed: validateEIN(),
      },
      {
        id: 'uei',
        label: 'UEI Number',
        completed: validateDUNS(),
      },
      {
        id: 'mission-statement',
        label: 'Mission Statement',
        completed: details.missionStatement.trim() !== '',
      },
      {
        id: 'vision-statement',
        label: 'Vision Statement',
        completed: details.visionStatement.trim() !== '',
      },
      {
        id: 'financial-readiness',
        label: 'Financial Readiness Questions',
        completed: financialInfo.orgRegistrationType !== '' &&
          financialInfo.cfr200Compliant === 'yes' &&
          financialInfo.financialSystemTracking === 'yes' &&
          financialInfo.timeEffortReporting === 'yes' &&
          financialInfo.indirectCostAgreement.trim() !== '' &&
          financialInfo.costShareLiquidity === 'yes',
      },
      {
        id: 'policies-compliance',
        label: 'Policies & Compliance Questions',
        completed: policiesCompliance.complianceTrackingSoftware === 'yes' &&
          policiesCompliance.federalDataTracking === 'yes' &&
          policiesCompliance.demographicDataCollection === 'yes' &&
          policiesCompliance.internalControlsDocs === 'yes' &&
          policiesCompliance.procurementPolicies === 'yes' &&
          policiesCompliance.timeEffortPolicies === 'yes' &&
          policiesCompliance.conflictOfInterestPolicies === 'yes',
      },
    ];
  };

  // Get checklist completion count
  const getChecklistCompletion = () => {
    const items = getChecklistItems();
    const completed = items.filter(item => item.completed).length;
    return { completed, total: items.length };
  };

  const checklistData = getChecklistCompletion();

  // Get missing required items for collapsed tab
  const getMissingRequiredItems = () => {
    const missing = [];
    if (!validateEIN()) missing.push('EIN');
    if (!validateSAMGov()) missing.push('SAM.gov');
    if (!validateDUNS()) missing.push('UEI');
    if (!validateLegalInfo()) missing.push('Legal Info');
    return missing;
  };

  const missingItems = getMissingRequiredItems();

  // Get category completion
  const getCategoryCompletion = (categoryId: string) => {
    const category = readinessCategories.find(c => c.id === categoryId);
    if (!category) return { answered: 0, total: 0, percentage: 0, yesCount: 0, noCount: 0, unsureCount: 0, hasIssues: false };
    
    const answered = category.questions.filter(q => readinessAnswers[q.id]).length;
    const yesCount = category.questions.filter(q => readinessAnswers[q.id] === 'yes').length;
    const noCount = category.questions.filter(q => readinessAnswers[q.id] === 'no').length;
    const unsureCount = category.questions.filter(q => readinessAnswers[q.id] === 'unsure').length;
    const total = category.questions.length;
    const percentage = total > 0 ? (yesCount / total) * 100 : 0; // Only "Yes" counts toward completion
    const hasIssues = noCount > 0 || unsureCount > 0;
    
    return { answered, total, percentage, yesCount, noCount, unsureCount, hasIssues };
  };

  // Readiness Scoring System (0-4 scale)
  const getAnswerScore = (answer: 'yes' | 'no' | 'unsure' | null): number => {
    if (answer === 'yes') return 4; // Fully Developed
    if (answer === 'unsure') return 2; // Emerging/Developing
    if (answer === 'no') return 0; // Not Present
    return 0; // No answer yet
  };

  // Section weights - total must equal 100%
  const sectionWeights: Record<string, number> = {
    financial: 35, // Financial Readiness - most critical
    programmatic: 35, // Programmatic Readiness - equally critical
    policy: 30, // Policy Documentation & Compliance
  };

  // Calculate category readiness score (0-100% for that category)
  const getCategoryReadinessScore = (categoryId: string) => {
    const category = readinessCategories.find(c => c.id === categoryId);
    if (!category) return 0;

    const totalQuestions = category.questions.length;
    if (totalQuestions === 0) return 0;

    // Calculate average score for this category (0-100%)
    let totalScore = 0;
    category.questions.forEach(q => {
      const answer = readinessAnswers[q.id];
      const score = getAnswerScore(answer); // 0, 2, or 4
      totalScore += (score / 4) * 100; // Convert to percentage
    });

    return totalScore / totalQuestions;
  };

  // Calculate overall readiness score (weighted across all categories)
  const getOverallReadinessScore = () => {
    let totalScore = 0;
    readinessCategories.forEach(category => {
      const categoryScore = getCategoryReadinessScore(category.id);
      const weight = sectionWeights[category.id] / 100;
      totalScore += categoryScore * weight;
    });
    return Math.round(totalScore);
  };

  // Get readiness level and color
  const getReadinessLevel = (score: number) => {
    if (score >= 90) return { level: 'Ready', color: 'teal', description: 'Fully compliant and strategically aligned with federal standards. Low-risk for funding.' };
    if (score >= 75) return { level: 'Conditionally Ready', color: 'blue', description: 'Capable with moderate oversight; some improvements needed.' };
    if (score >= 65) return { level: 'Developing', color: 'amber', description: 'Foundational systems exist but significant gaps remain. Recommendation for consulting.' };
    return { level: 'Not Ready', color: 'red', description: 'Insufficient readiness; requires foundational capacity building.' };
  };

  const overallReadinessScore = getOverallReadinessScore();
  const readinessLevel = getReadinessLevel(overallReadinessScore);

  // Update global readiness score context whenever it changes
  useEffect(() => {
    setScore(overallReadinessScore);
  }, [overallReadinessScore, setScore]);

  // Update required items remaining count
  useEffect(() => {
    const { completed, total } = getChecklistCompletion();
    const remaining = total - completed;
    setOrgProfileItemsRemaining(remaining);
  }, [legalInfo, details, financialInfo, policiesCompliance, samGovComplete, ueiVerificationStatus, verifiedUEI, setOrgProfileItemsRemaining]);

  // Handle readiness answer
  const handleReadinessAnswer = (questionId: string, answer: 'yes' | 'no' | 'unsure') => {
    setReadinessAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Handle right rail navigation
  const handleRailItemClick = (itemId: string) => {
    // Navigate to the tab first
    if (itemId === 'org-address') {
      setActiveTab('legal-info');
      
      // Highlight all address fields
      const fields = ['streetAddress', 'city', 'state', 'zipCode'];
      setHighlightedFields(fields);
      
      // Scroll to the first field
      setTimeout(() => {
        const element = document.querySelector(`[data-field="streetAddress"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
      // Clear highlights after 3 seconds
      setTimeout(() => {
        setHighlightedFields([]);
      }, 3000);
    } else {
      // Map items to tabs and fields
      const navigationMap: Record<string, { tab: string; field: string }> = {
        'org-name': { tab: 'legal-info', field: 'legalOrgName' },
        'ein': { tab: 'legal-info', field: 'ein' },
        'uei': { tab: 'legal-info', field: 'uei' },
        'mission-statement': { tab: 'details', field: 'missionStatement' },
        'vision-statement': { tab: 'details', field: 'visionStatement' },
        'financial-readiness': { tab: 'financial-info', field: 'orgRegistrationType' },
        'policies-compliance': { tab: 'policies-compliance', field: 'complianceTrackingSoftware' },
      };

      const navItem = navigationMap[itemId];
      if (navItem) {
        // Navigate to the tab
        setActiveTab(navItem.tab);
        
        // Highlight the field
        setHighlightedField(navItem.field);
        
        // Scroll to the field after a brief delay
        setTimeout(() => {
          const element = document.querySelector(`[data-field="${navItem.field}"]`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        
        // Clear highlight after 3 seconds
        setTimeout(() => {
          setHighlightedField(null);
        }, 3000);
      }
    }
  };

  const checklistItems = getChecklistItems();

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-gray-200 flex flex-col bg-white">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <img src={logoImg} alt="Great Grants" className="h-6" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          <ul className="space-y-1">
            <li>
              <button 
                onClick={() => handleNavigateAway('home')}
                className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M2 6L8 2L14 6V13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigateAway('grants')}
                className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3333 2H2.66667C1.93029 2 1.33333 2.59695 1.33333 3.33333V12.6667C1.33333 13.403 1.93029 14 2.66667 14H13.3333C14.0697 14 14.6667 13.403 14.6667 12.6667V3.33333C14.6667 2.59695 14.0697 2 13.3333 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                All Applications (2)
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 bg-gray-100 rounded-md font-medium">
                <Building2 className="w-4 h-4" />
                Organization Profile
              </button>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-300 flex items-center justify-center relative">
              <span className="text-white text-xs font-semibold">OR</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
              <div className="text-xs text-gray-500 truncate">olivia@untitledui.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area (including right rail) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className={`${showRightRail ? 'w-full' : 'max-w-5xl mx-auto'} p-8`}>
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
                <BreadcrumbLink asChild>
                  <Link to="/settings">Settings</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Organization</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="mb-3">
                <Building2
                  className="w-8 h-8"
                  strokeWidth={1.5}
                />
              </div>
              <h1 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>Organization Profile</h1>
              <p className="text-gray-600">The more you fill out, the faster applications get filled, and the smarter your grant matches become.</p>
            </div>
            
            {/* Save Progress Button - Upper Right */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                {isAutoSaving ? (
                  <span>Saving...</span>
                ) : lastSaved ? (
                  <span>Last saved {formatTimeAgo(lastSaved)}</span>
                ) : (
                  <span>No changes yet</span>
                )}
              </div>
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={handleAutoSave}
                disabled={isAutoSaving}
              >
                {isAutoSaving ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <HardDrive className="w-4 h-4 mr-2" />
                )}
                Save Progress
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="!bg-white !border-b !border-gray-200 !p-0 !h-auto !w-full !justify-start !rounded-none !inline-flex">
              <TabsTrigger 
                value="legal-info" 
                className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none"
              >
                Legal Info
              </TabsTrigger>
              <TabsTrigger 
                value="details"
                className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none"
              >
                Details
              </TabsTrigger>
              <TabsTrigger 
                value="focus-areas"
                className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none"
              >
                Focus Areas
              </TabsTrigger>
              <TabsTrigger 
                value="key-contacts"
                className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none"
              >
                Key Contacts
              </TabsTrigger>
              <TabsTrigger 
                value="financial-info"
                className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none"
              >
                Financial Info
              </TabsTrigger>
              <TabsTrigger 
                value="policies-compliance"
                className="gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none"
              >
                Policies & Compliance
              </TabsTrigger>
            </TabsList>

            {/* Legal Info Tab */}
            <TabsContent value="legal-info" className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 space-y-1.5" data-field="legalOrgName">
                    <Label htmlFor="legalOrgName">
                      Legal Organization Name <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="legalOrgName"
                      value={legalInfo.legalOrgName}
                      onChange={(e) => handleLegalInfoChange('legalOrgName', e.target.value)}
                      placeholder="Enter legal organization name"
                      className={highlightedField === 'legalOrgName' ? 'ring-2 ring-teal-600 border-teal-600' : ''}
                    />
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="dbaName">
                      DBA Name (if applicable)
                    </Label>
                    <Input 
                      id="dbaName"
                      value={legalInfo.dbaName}
                      onChange={(e) => handleLegalInfoChange('dbaName', e.target.value)}
                      placeholder="Enter DBA name"
                    />
                  </div>

                  <div className="space-y-1.5" data-field="ein">
                    <Label htmlFor="ein">
                      EIN (Employer Identification Number) <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="ein"
                      value={legalInfo.ein}
                      onChange={(e) => handleLegalInfoChange('ein', e.target.value)}
                      placeholder="XX-XXXXXXX"
                      className={highlightedField === 'ein' ? 'ring-2 ring-teal-600 border-teal-600' : ''}
                    />
                  </div>

                  <div className="space-y-1.5" data-field="uei">
                    <div className="flex items-center gap-2">
                      {verifiedUEI ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-1 cursor-help">
                              <Label htmlFor="uei">
                                UEI <span className="text-red-500">*</span>
                              </Label>
                              <Info className="w-3 h-3 text-teal-600" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="bg-gray-900 text-white">
                            <p className="text-xs">Verified: {verifiedUEI}</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <Label htmlFor="uei">
                          UEI <span className="text-red-500">*</span>
                        </Label>
                      )}
                      {ueiVerificationStatus === 'verifying' && (
                        <div className="flex items-center gap-1.5 ml-auto">
                          <Loader2 className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                          <span className="text-xs text-blue-600 font-medium">Verifying...</span>
                        </div>
                      )}
                      {ueiVerificationStatus === 'verified' && (
                        <Badge className="ml-auto bg-teal-600 text-white text-xs flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Verified
                        </Badge>
                      )}
                      {ueiVerificationStatus === 'failed' && (
                        <Badge variant="destructive" className="ml-auto text-xs flex items-center gap-1">
                          <X className="w-3 h-3" />
                          Failed Verification
                        </Badge>
                      )}
                    </div>
                    <div className="relative">
                      <Input 
                        id="uei"
                        value={legalInfo.uei}
                        onChange={(e) => handleLegalInfoChange('uei', e.target.value)}
                        placeholder="Enter 12-digit UEI"
                        maxLength={12}
                        className={`${highlightedField === 'uei' ? 'ring-2 ring-teal-600 border-teal-600' : ''} ${hoveredRequiredItem === 'uei' ? 'border-teal-600' : ''} ${
                          ueiVerificationStatus === 'verified' ? 'border-teal-500 bg-teal-50' : 
                          ueiVerificationStatus === 'failed' ? 'border-red-500 bg-red-50' : ''
                        }`}
                      />
                    </div>
                    {ueiVerificationStatus === 'failed' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-3 mt-2"
                      >
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-red-900 mb-1">
                              UEI Verification Failed
                            </p>
                            <p className="text-xs text-red-700 mb-2">
                              The UEI you entered could not be verified. Please check the following:
                            </p>
                            <ul className="text-xs text-red-700 space-y-1 ml-4 list-disc">
                              <li>Double-check your UEI to ensure it's correct</li>
                              <li>Your UEI should be exactly 12 digits</li>
                              <li>Find your UEI in your SAM.gov account under "Entity Registration"</li>
                            </ul>
                            <div className="mt-2 pt-2 border-t border-red-200">
                              <p className="text-xs text-red-700 mb-1">
                                Don't have a UEI?
                              </p>
                              <a 
                                href="https://sam.gov" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-red-900 hover:text-red-700 underline"
                              >
                                Register on SAM.gov
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="website">
                      Organization Website
                    </Label>
                    <Input 
                      id="website"
                      type="url"
                      value={legalInfo.website}
                      onChange={(e) => handleLegalInfoChange('website', e.target.value)}
                      placeholder="https://www.example.org"
                    />
                  </div>

                  <div className="col-span-2 space-y-1.5" data-field="streetAddress">
                    <Label htmlFor="streetAddress">
                      Street Address <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="streetAddress"
                      value={legalInfo.streetAddress}
                      onChange={(e) => handleLegalInfoChange('streetAddress', e.target.value)}
                      placeholder="Enter street address"
                      className={highlightedField === 'streetAddress' || highlightedFields.includes('streetAddress') ? 'ring-2 ring-teal-600 border-teal-600' : ''}
                    />
                  </div>

                  <div className="space-y-1.5" data-field="city">
                    <Label htmlFor="city">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="city"
                      value={legalInfo.city}
                      onChange={(e) => handleLegalInfoChange('city', e.target.value)}
                      placeholder="Enter city"
                      className={`${highlightedField === 'city' || highlightedFields.includes('city') ? 'ring-2 ring-teal-600 border-teal-600' : ''} ${hoveredRequiredItem === 'legalInfo' ? 'border-teal-600' : ''}`}
                    />
                  </div>

                  <div className="space-y-1.5" data-field="state">
                    <Label htmlFor="state">
                      State <span className="text-red-500">*</span>
                    </Label>
                    <Select value={legalInfo.state} onValueChange={(value) => handleLegalInfoChange('state', value)}>
                      <SelectTrigger id="state" className={`border-gray-300 bg-white ${highlightedField === 'state' || highlightedFields.includes('state') ? 'ring-2 ring-teal-600 border-teal-600' : ''} ${hoveredRequiredItem === 'legalInfo' ? 'border-teal-600' : ''}`}>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {usStates.map(state => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5" data-field="zipCode">
                    <Label htmlFor="zipCode">
                      ZIP Code <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="zipCode"
                      value={legalInfo.zipCode}
                      onChange={(e) => handleLegalInfoChange('zipCode', e.target.value)}
                      placeholder="XXXXX"
                      maxLength={5}
                      className={`${highlightedField === 'zipCode' || highlightedFields.includes('zipCode') ? 'ring-2 ring-teal-600 border-teal-600' : ''} ${hoveredRequiredItem === 'legalInfo' ? 'border-teal-600' : ''}`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="county">
                      County
                    </Label>
                    <Input 
                      id="county"
                      value={legalInfo.county}
                      onChange={(e) => handleLegalInfoChange('county', e.target.value)}
                      placeholder="Enter county"
                    />
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="congressionalDistrict">
                      Congressional District
                    </Label>
                    <Input 
                      id="congressionalDistrict"
                      value={legalInfo.congressionalDistrict}
                      onChange={(e) => handleLegalInfoChange('congressionalDistrict', e.target.value)}
                      placeholder="Enter congressional district"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Details Tab */}
            <TabsContent value="details" className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Organization Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <Label htmlFor="yearFounded">
                      Year Founded
                    </Label>
                    <Input 
                      id="yearFounded"
                      type="number"
                      value={details.yearFounded}
                      onChange={(e) => handleDetailsChange('yearFounded', e.target.value)}
                      placeholder="YYYY"
                      maxLength={4}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="annualBudget">
                      Annual Budget <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="annualBudget"
                      type="number"
                      value={details.annualBudget}
                      onChange={(e) => handleDetailsChange('annualBudget', e.target.value)}
                      placeholder="$0.00"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="numStaff">
                      Number of Staff
                    </Label>
                    <Input 
                      id="numStaff"
                      type="number"
                      value={details.numStaff}
                      onChange={(e) => handleDetailsChange('numStaff', e.target.value)}
                      placeholder="0"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="numVolunteers">
                      Number of Volunteers
                    </Label>
                    <Input 
                      id="numVolunteers"
                      type="number"
                      value={details.numVolunteers}
                      onChange={(e) => handleDetailsChange('numVolunteers', e.target.value)}
                      placeholder="0"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="annualVolunteerHours">
                      Annual Volunteer Hours
                    </Label>
                    <Input 
                      id="annualVolunteerHours"
                      type="number"
                      value={details.annualVolunteerHours}
                      onChange={(e) => handleDetailsChange('annualVolunteerHours', e.target.value)}
                      placeholder="0"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="lastAuditDate">
                      Last Audit Date
                    </Label>
                    <Input 
                      id="lastAuditDate"
                      type="date"
                      value={details.lastAuditDate}
                      onChange={(e) => handleDetailsChange('lastAuditDate', e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="fiscalYearEnd">
                      Fiscal Year End
                    </Label>
                    <Input 
                      id="fiscalYearEnd"
                      type="date"
                      value={details.fiscalYearEnd}
                      onChange={(e) => handleDetailsChange('fiscalYearEnd', e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="indirectCostRate">
                      Indirect Cost Rate (%)
                    </Label>
                    <Input 
                      id="indirectCostRate"
                      type="number"
                      value={details.indirectCostRate}
                      onChange={(e) => handleDetailsChange('indirectCostRate', e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="religiousDenomination">
                      Religious Denomination (if applicable)
                    </Label>
                    <Input 
                      id="religiousDenomination"
                      value={details.religiousDenomination}
                      onChange={(e) => handleDetailsChange('religiousDenomination', e.target.value)}
                      placeholder="Enter religious denomination"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Narrative Fields</h3>
                <div className="space-y-6">
                  <div className="space-y-1.5" data-field="missionStatement">
                    <Label htmlFor="missionStatement">
                      Mission Statement
                    </Label>
                    <Textarea 
                      id="missionStatement"
                      value={details.missionStatement}
                      onChange={(e) => handleDetailsChange('missionStatement', e.target.value)}
                      placeholder="Describe your organization's mission..."
                      rows={4}
                      className={highlightedField === 'missionStatement' ? 'ring-2 ring-teal-600 border-teal-600' : ''}
                    />
                  </div>

                  <div className="space-y-1.5" data-field="visionStatement">
                    <Label htmlFor="visionStatement">
                      Vision Statement
                    </Label>
                    <Textarea 
                      id="visionStatement"
                      value={details.visionStatement}
                      onChange={(e) => handleDetailsChange('visionStatement', e.target.value)}
                      placeholder="Describe your organization's vision..."
                      rows={4}
                      className={highlightedField === 'visionStatement' ? 'ring-2 ring-teal-600 border-teal-600' : ''}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Focus Areas Tab */}
            <TabsContent value="focus-areas" className="space-y-6">
              {/* Summary Card */}
              {getTotalSelections() > 0 && (
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-teal-600" />
                      <span className="text-sm font-medium text-teal-900">
                        {getTotalSelections()} focus area{getTotalSelections() > 1 ? 's' : ''} selected across {Object.keys(selectedFocusAreas).length} categor{Object.keys(selectedFocusAreas).length > 1 ? 'ies' : 'y'}
                      </span>
                    </div>
                    <Button
                      onClick={clearAllSelections}
                      variant="ghost"
                      size="sm"
                      className="text-teal-700 hover:text-teal-800 hover:bg-teal-100"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Clear all
                    </Button>
                  </div>
                  
                  {/* Selected items preview */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {Object.entries(selectedFocusAreas).map(([category, options]) => {
                      const allOptions = focusAreaCategories[category as keyof typeof focusAreaCategories];
                      const isFullySelected = options.length === allOptions.length;
                      
                      if (isFullySelected) {
                        // Show category name with "All" indicator when fully selected
                        return (
                          <Badge
                            key={category}
                            variant="secondary"
                            className="bg-teal-600 border-teal-600 text-white hover:bg-teal-700"
                          >
                            <span className="font-semibold">{category}</span>
                            <span className="ml-1.5 opacity-90">(All)</span>
                            <button
                              onClick={() => toggleAllInCategory(category)}
                              className="ml-2 hover:bg-teal-500 rounded-full p-0.5"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        );
                      } else {
                        // Show individual items when partially selected
                        return options.map(option => (
                          <Badge
                            key={`${category}-${option}`}
                            variant="secondary"
                            className="bg-white border-teal-300 text-teal-700 hover:bg-teal-50"
                          >
                            {option}
                            <button
                              onClick={() => toggleFocusAreaOption(category, option)}
                              className="ml-1 hover:bg-teal-200 rounded-full p-0.5"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ));
                      }
                    })}
                  </div>
                </div>
              )}

              {/* Categories Accordion */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-semibold text-gray-900">Select Focus Areas</h3>
                    {getTotalSelections() > 0 && (
                      <div className="flex items-center gap-2">
                        <Badge className="bg-teal-600 text-white text-sm px-3 py-1">
                          {getTotalSelections()} selected
                        </Badge>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    Choose the primary areas your organization focuses on. Expand each category to see all available options.
                  </p>
                </div>

                <Accordion type="multiple" className="w-full">
                  {Object.entries(focusAreaCategories).map(([category, options]) => {
                    const selectedCount = selectedFocusAreas[category]?.length || 0;
                    const totalCount = options.length;
                    const status = getCategoryStatus(category);

                    return (
                      <AccordionItem key={category} value={category} className="border-gray-200">
                        <AccordionTrigger className={`px-6 hover:bg-gray-50 data-[state=open]:bg-gray-50 transition-colors ${
                          status === "all" ? "bg-teal-50" : ""
                        }`}>
                          <div className="flex items-center justify-between w-full pr-4">
                            <div className="flex items-center gap-3">
                              {/* Category checkbox indicator */}
                              <div
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                  status === "all"
                                    ? "bg-teal-600 border-teal-600"
                                    : status === "partial"
                                    ? "bg-teal-600 border-teal-600"
                                    : "border-gray-300 bg-white"
                                }`}
                              >
                                {status === "all" && <Check className="w-3.5 h-3.5 text-white" />}
                                {status === "partial" && <Minus className="w-3.5 h-3.5 text-white" />}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-sm font-medium ${
                                  status === "all" ? "text-teal-900 font-semibold" : "text-gray-900"
                                }`}>
                                  {category}
                                </span>
                                {status === "all" && (
                                  <span className="text-xs font-medium text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                                    All selected
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <Badge 
                              variant={selectedCount > 0 ? "default" : "outline"}
                              className={`${
                                status === "all" 
                                  ? "bg-teal-600 text-white font-semibold" 
                                  : selectedCount > 0 
                                  ? "bg-teal-600" 
                                  : ""
                              }`}
                            >
                              {selectedCount} of {totalCount}
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          {/* Select All toggle */}
                          <div className="mb-4 pb-4 border-b border-gray-200">
                            <button
                              onClick={() => toggleAllInCategory(category)}
                              className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                            >
                              {status === "all" ? (
                                <>
                                  <Minus className="w-4 h-4" />
                                  Deselect all
                                </>
                              ) : (
                                <>
                                  <Check className="w-4 h-4" />
                                  Select all
                                </>
                              )}
                            </button>
                          </div>

                          {/* Options grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {options.map(option => {
                              const isSelected = selectedFocusAreas[category]?.includes(option);
                              
                              return (
                                <label
                                  key={option}
                                  className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                    isSelected
                                      ? "border-teal-600 bg-teal-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`}
                                >
                                  <Checkbox
                                    checked={isSelected}
                                    onCheckedChange={() => toggleFocusAreaOption(category, option)}
                                    className="mt-0.5"
                                  />
                                  <span className="text-sm text-gray-700 leading-tight flex-1">
                                    {option}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </TabsContent>

            {/* Key Contacts Tab */}
            <TabsContent value="key-contacts" className="space-y-6">
              {/* Leaders Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-teal-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Leaders</h3>
                  </div>
                  <Button
                    onClick={handleAddLeader}
                    variant="outline"
                    size="sm"
                    className="border-gray-300"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Leader
                  </Button>
                </div>

                <div className="space-y-4">
                  {leaders.map((leader, index) => (
                    <div key={leader.id} className="p-5 border border-gray-200 rounded-lg bg-white">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-sm font-semibold text-gray-700">Leader {index + 1}</h4>
                        <div className="flex items-center gap-3">
                          {leader.isPrimaryContact && (
                            <Badge className="bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-50">
                              Primary Contact
                            </Badge>
                          )}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                              checked={leader.isPrimaryContact}
                              onCheckedChange={() => toggleLeaderPrimaryContact(leader.id)}
                              className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                            />
                            <span className="text-xs text-gray-600">Primary Contact</span>
                          </label>
                          {leaders.length > 1 && (
                            <button
                              onClick={() => handleRemoveLeader(leader.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <Label htmlFor={`leader-name-${leader.id}`} className="text-xs text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id={`leader-name-${leader.id}`}
                            value={leader.fullName}
                            onChange={(e) => handleLeaderChange(leader.id, 'fullName', e.target.value)}
                            placeholder="Enter full name"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`leader-email-${leader.id}`} className="text-xs text-gray-700">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id={`leader-email-${leader.id}`}
                            type="email"
                            value={leader.email}
                            onChange={(e) => handleLeaderChange(leader.id, 'email', e.target.value)}
                            placeholder="email@example.org"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`leader-phone-${leader.id}`} className="text-xs text-gray-700">
                            Phone <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id={`leader-phone-${leader.id}`}
                            type="tel"
                            value={leader.phone}
                            onChange={(e) => handleLeaderChange(leader.id, 'phone', e.target.value)}
                            placeholder="+1 (555) 173-4567"
                            className="mt-1"
                          />
                        </div>

                        <div className="col-span-2">
                          <Label htmlFor={`leader-bio-${leader.id}`} className="text-xs text-gray-700">
                            Bio <span className="text-red-500">*</span>
                          </Label>
                          <Textarea 
                            id={`leader-bio-${leader.id}`}
                            value={leader.bio}
                            onChange={(e) => handleLeaderChange(leader.id, 'bio', e.target.value)}
                            placeholder="This is my bio..."
                            rows={3}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Board Members Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-teal-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Board Members</h3>
                  </div>
                  <Button
                    onClick={handleAddBoardMember}
                    variant="outline"
                    size="sm"
                    className="border-gray-300"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Board Member
                  </Button>
                </div>

                <div className="space-y-4">
                  {boardMembers.map((member, index) => (
                    <div key={member.id} className="p-5 border border-gray-200 rounded-lg bg-white">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-sm font-semibold text-gray-700">Board Member {index + 1}</h4>
                        <div className="flex items-center gap-3">
                          {member.isPrimaryContact && (
                            <Badge className="bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-50">
                              Primary Contact
                            </Badge>
                          )}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                              checked={member.isPrimaryContact}
                              onCheckedChange={() => toggleBoardMemberPrimaryContact(member.id)}
                              className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                            />
                            <span className="text-xs text-gray-600">Primary Contact</span>
                          </label>
                          {boardMembers.length > 1 && (
                            <button
                              onClick={() => handleRemoveBoardMember(member.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <Label htmlFor={`board-name-${member.id}`} className="text-xs text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id={`board-name-${member.id}`}
                            value={member.fullName}
                            onChange={(e) => handleBoardMemberChange(member.id, 'fullName', e.target.value)}
                            placeholder="Enter full name"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`board-email-${member.id}`} className="text-xs text-gray-700">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id={`board-email-${member.id}`}
                            type="email"
                            value={member.email}
                            onChange={(e) => handleBoardMemberChange(member.id, 'email', e.target.value)}
                            placeholder="email@example.org"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`board-phone-${member.id}`} className="text-xs text-gray-700">
                            Phone <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id={`board-phone-${member.id}`}
                            type="tel"
                            value={member.phone}
                            onChange={(e) => handleBoardMemberChange(member.id, 'phone', e.target.value)}
                            placeholder="+1 (555) 173-4567"
                            className="mt-1"
                          />
                        </div>

                        <div className="col-span-2">
                          <Label htmlFor={`board-bio-${member.id}`} className="text-xs text-gray-700">
                            Bio <span className="text-red-500">*</span>
                          </Label>
                          <Textarea 
                            id={`board-bio-${member.id}`}
                            value={member.bio}
                            onChange={(e) => handleBoardMemberChange(member.id, 'bio', e.target.value)}
                            placeholder="This is my bio..."
                            rows={3}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Financial Info Tab */}
            <TabsContent value="financial-info" className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>Financial Readiness</h3>
                  <p className="text-sm text-gray-600">Please answer the following questions to help us assess your financial readiness for applying for grants.</p>
                </div>

                <div className="space-y-6">
                  {/* Organization Registration Type */}
                  <div data-field="orgRegistrationType" className={`transition-all duration-300 ${highlightedField === 'orgRegistrationType' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      How is the organization registered? <span className="text-red-500">*</span>
                    </Label>
                    <Select value={financialInfo.orgRegistrationType} onValueChange={(value) => setFinancialInfo({ ...financialInfo, orgRegistrationType: value })}>
                      <SelectTrigger className="w-full border-gray-300 bg-white">
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="501c3-church">501(c)(3): Church</SelectItem>
                        <SelectItem value="501c3-nonprofit">501(c)(3): Non-Profit (and not a church)</SelectItem>
                        <SelectItem value="other-nonprofit">Other Recognized Non-Profit Status</SelectItem>
                        <SelectItem value="for-profit">For-Profit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* CFR 200 Audit Compliance */}
                  <div data-field="cfr200Compliant" className={`transition-all duration-300 ${highlightedField === 'cfr200Compliant' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Is the organization compliant with a 2 CFR 200 audit requirement (including a Single Audit)? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFinancialInfo({ ...financialInfo, cfr200Compliant: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            financialInfo.cfr200Compliant === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              financialInfo.cfr200Compliant === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {financialInfo.cfr200Compliant === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Financial System Tracking */}
                  <div data-field="financialSystemTracking" className={`transition-all duration-300 ${highlightedField === 'financialSystemTracking' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Can the organization's financial system track expenses by individual grant and manage federal drawdowns? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFinancialInfo({ ...financialInfo, financialSystemTracking: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            financialInfo.financialSystemTracking === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              financialInfo.financialSystemTracking === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {financialInfo.financialSystemTracking === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time and Effort Reporting */}
                  <div data-field="timeEffortReporting" className={`transition-all duration-300 ${highlightedField === 'timeEffortReporting' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Can the organization's financial system support time and effort reporting? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFinancialInfo({ ...financialInfo, timeEffortReporting: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            financialInfo.timeEffortReporting === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              financialInfo.timeEffortReporting === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {financialInfo.timeEffortReporting === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Indirect Cost Agreement */}
                  <div data-field="indirectCostAgreement" className={`transition-all duration-300 ${highlightedField === 'indirectCostAgreement' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label htmlFor="indirectCostAgreement" className="text-sm font-medium text-gray-900 mb-2 block">
                      Does the organization have a Negotiated Indirect Cost Rate Agreement (NICRA), or will it use the 15% de minimis rate? <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="indirectCostAgreement"
                      value={financialInfo.indirectCostAgreement}
                      onChange={(e) => setFinancialInfo({ ...financialInfo, indirectCostAgreement: e.target.value })}
                      placeholder="e.g., NICRA at 25% or De minimis 15%"
                    />
                  </div>

                  {/* Cost Share Liquidity */}
                  <div data-field="costShareLiquidity" className={`transition-all duration-300 ${highlightedField === 'costShareLiquidity' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Does the organization have liquidity or committed financial resources to meet cost-share/matching requirements? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFinancialInfo({ ...financialInfo, costShareLiquidity: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            financialInfo.costShareLiquidity === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              financialInfo.costShareLiquidity === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {financialInfo.costShareLiquidity === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Policies & Compliance Tab */}
            <TabsContent value="policies-compliance" className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>Policies & Compliance Readiness</h3>
                  <p className="text-sm text-gray-600">Please answer the following questions to help us assess policy and compliance.</p>
                </div>

                <div className="space-y-6">
                  {/* Compliance Tracking Software */}
                  <div data-field="complianceTrackingSoftware" className={`transition-all duration-300 ${highlightedField === 'complianceTrackingSoftware' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Does the organization have software or a financial system to track deadlines, reporting, and compliance? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setPoliciesCompliance({ ...policiesCompliance, complianceTrackingSoftware: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            policiesCompliance.complianceTrackingSoftware === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              policiesCompliance.complianceTrackingSoftware === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {policiesCompliance.complianceTrackingSoftware === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Federal Data Tracking */}
                  <div data-field="federalDataTracking" className={`transition-all duration-300 ${highlightedField === 'federalDataTracking' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Can the organization track record-collecting data aligned with federal measures (e.g., GPRA)? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setPoliciesCompliance({ ...policiesCompliance, federalDataTracking: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            policiesCompliance.federalDataTracking === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              policiesCompliance.federalDataTracking === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {policiesCompliance.federalDataTracking === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Demographic Data Collection */}
                  <div data-field="demographicDataCollection" className={`transition-all duration-300 ${highlightedField === 'demographicDataCollection' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Does the organization collect disaggregated demographic data? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setPoliciesCompliance({ ...policiesCompliance, demographicDataCollection: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            policiesCompliance.demographicDataCollection === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              policiesCompliance.demographicDataCollection === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {policiesCompliance.demographicDataCollection === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Internal Controls Documentation */}
                  <div data-field="internalControlsDocs" className={`transition-all duration-300 ${highlightedField === 'internalControlsDocs' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Does the organization have documented internal controls for federal compliance? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setPoliciesCompliance({ ...policiesCompliance, internalControlsDocs: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            policiesCompliance.internalControlsDocs === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              policiesCompliance.internalControlsDocs === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {policiesCompliance.internalControlsDocs === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Procurement Policies */}
                  <div data-field="procurementPolicies" className={`transition-all duration-300 ${highlightedField === 'procurementPolicies' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Does the organization have documented policies for procurement and subrecipient monitoring? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setPoliciesCompliance({ ...policiesCompliance, procurementPolicies: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            policiesCompliance.procurementPolicies === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              policiesCompliance.procurementPolicies === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {policiesCompliance.procurementPolicies === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time and Effort Policies */}
                  <div data-field="timeEffortPolicies" className={`transition-all duration-300 ${highlightedField === 'timeEffortPolicies' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Does the organization have documented policies for time and effort reporting (personnel)? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setPoliciesCompliance({ ...policiesCompliance, timeEffortPolicies: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            policiesCompliance.timeEffortPolicies === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              policiesCompliance.timeEffortPolicies === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {policiesCompliance.timeEffortPolicies === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conflict of Interest Policies */}
                  <div data-field="conflictOfInterestPolicies" className={`transition-all duration-300 ${highlightedField === 'conflictOfInterestPolicies' ? 'ring-2 ring-teal-600 bg-teal-50/50 rounded-lg p-4 -m-2' : ''}`}>
                    <Label className="text-sm font-medium text-gray-900 mb-3 block">
                      Does the organization have documented policies for conflict of interest and record retention? <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'yes', label: 'Yes', color: 'teal' },
                        { value: 'no', label: 'No', color: 'orange' },
                        { value: 'unsure', label: 'Unsure', color: 'orange' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setPoliciesCompliance({ ...policiesCompliance, conflictOfInterestPolicies: option.value as 'yes' | 'no' | 'unsure' })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            policiesCompliance.conflictOfInterestPolicies === option.value
                              ? option.color === 'teal'
                                ? 'border-teal-600 bg-teal-50 text-gray-900'
                                : 'border-amber-500 bg-amber-50 text-gray-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              policiesCompliance.conflictOfInterestPolicies === option.value
                                ? option.color === 'teal'
                                  ? 'border-teal-600 bg-teal-600'
                                  : 'border-amber-500 bg-amber-500'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {policiesCompliance.conflictOfInterestPolicies === option.value && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Save Progress Button - Lower Right */}
          <div className="flex items-center justify-end gap-3 mt-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {isAutoSaving ? (
                <span>Saving...</span>
              ) : lastSaved ? (
                <span>Last saved {formatTimeAgo(lastSaved)}</span>
              ) : (
                <span>No changes yet</span>
              )}
            </div>
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={handleAutoSave}
              disabled={isAutoSaving}
            >
              {isAutoSaving ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <HardDrive className="w-4 h-4 mr-2" />
              )}
              Save Progress
            </Button>
          </div>

          {/* Readiness Toggle */}
          <div className="flex items-center justify-end gap-3 mt-6 pb-8">
            <label htmlFor="readiness-toggle" className="text-sm font-medium text-gray-700">
              Rail Rail
            </label>
            <Switch
              id="readiness-toggle"
              checked={readinessEnabled}
              onCheckedChange={(checked) => {
                setReadinessEnabled(checked);
                if (checked) {
                  setShowRightRail(true); // Open the rail when enabling
                } else {
                  setShowRightRail(false); // Close the rail when disabling
                }
              }}
            />
          </div>

        </div>
      </main>

      {/* Right Rail */}
      <AnimatePresence mode="wait">
        {readinessEnabled && showRightRail && (
          <motion.aside 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="bg-[#F9FAFB] border-l border-gray-200 overflow-hidden flex-shrink-0 relative"
          >
            {/* Collapse Button */}
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              onClick={() => setShowRightRail(false)}
              className="absolute top-6 -left-4 z-10 w-8 h-8 bg-white rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center transition-all group"
              style={{
                borderColor: '#e5e7eb'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#717BBC';
                e.currentTarget.style.backgroundColor = '#f0f1f9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
              title="Hide readiness checklist"
            >
              <motion.div
                whileHover={{ x: -2 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-4 h-4 text-gray-600 group-hover:text-[#717BBC]" />
              </motion.div>
            </motion.button>

            <div className="overflow-y-auto h-full">
              <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Required Items
                </h2>
                {(() => {
                  const completedCount = checklistItems.filter(item => item.completed).length;
                  const totalCount = checklistItems.length;
                  
                  // Determine badge styling based on completion count
                  let badgeStyle = {};
                  let iconElement = null;
                  
                  if (completedCount >= 0 && completedCount <= 2) {
                    // Warning: Orange gradient
                    badgeStyle = { background: 'linear-gradient(to left, #f59e0b, #d97706)' };
                    iconElement = (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 11">
                        <path d="M5.88169 4.00207V6.00207M5.88169 8.00207H5.88669M5.18935 1.44793L1.07691 8.55124C0.848807 8.94524 0.734755 9.14223 0.751612 9.30392C0.766315 9.44494 0.8402 9.57309 0.954879 9.65647C1.08636 9.75207 1.31399 9.75207 1.76925 9.75207H9.99414C10.4494 9.75207 10.677 9.75207 10.8085 9.65647C10.9232 9.57309 10.9971 9.44494 11.0118 9.30392C11.0286 9.14223 10.9146 8.94524 10.6865 8.55124L6.57403 1.44793C6.34675 1.05535 6.23311 0.859057 6.08484 0.79313C5.95551 0.735623 5.80787 0.735623 5.67854 0.79313C5.53028 0.859057 5.41664 1.05535 5.18935 1.44793Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    );
                  } else if (completedCount >= 3 && completedCount <= 7) {
                    // Progress: Blue gradient
                    badgeStyle = { background: 'linear-gradient(to left, #717bbc, #3e4784)' };
                    iconElement = (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 11">
                        <path d="M5.88169 4.00207V6.00207M5.88169 8.00207H5.88669M5.18935 1.44793L1.07691 8.55124C0.848807 8.94524 0.734755 9.14223 0.751612 9.30392C0.766315 9.44494 0.8402 9.57309 0.954879 9.65647C1.08636 9.75207 1.31399 9.75207 1.76925 9.75207H9.99414C10.4494 9.75207 10.677 9.75207 10.8085 9.65647C10.9232 9.57309 10.9971 9.44494 11.0118 9.30392C11.0286 9.14223 10.9146 8.94524 10.6865 8.55124L6.57403 1.44793C6.34675 1.05535 6.23311 0.859057 6.08484 0.79313C5.95551 0.735623 5.80787 0.735623 5.67854 0.79313C5.53028 0.859057 5.41664 1.05535 5.18935 1.44793Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    );
                  } else {
                    // Complete: Green gradient
                    badgeStyle = { background: 'linear-gradient(to left, #3ccb7f, #087443)' };
                    iconElement = (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 19 19">
                        <path d="M17.6667 8.57144V9.3381C17.6656 11.1351 17.0838 12.8837 16.0078 14.323C14.9318 15.7623 13.4194 16.8152 11.6961 17.3247C9.97286 17.8342 8.13105 17.773 6.44539 17.1503C4.75974 16.5275 3.32055 15.3765 2.34247 13.869C1.36439 12.3615 0.899827 10.5782 1.01806 8.78503C1.1363 6.99191 1.83101 5.28504 2.99857 3.919C4.16613 2.55295 5.74399 1.60092 7.49683 1.20489C9.24966 0.808862 11.0836 0.990051 12.725 1.72144M17.6667 2.66667L9.33333 11.0083L6.83333 8.50833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    );
                  }
                  
                  return (
                    <div 
                      className="flex items-center gap-1 px-2 py-1 rounded-full"
                      style={badgeStyle}
                    >
                      {iconElement}
                      <span className="text-white text-xs font-semibold" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        {completedCount}/{totalCount} Done
                      </span>
                    </div>
                  );
                })()}
              </div>
              <p className="text-sm text-gray-600">
                Complete these items to be ready for federal grants
              </p>
            </div>

            {/* Legal Info Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Legal Info
                </h3>
                <span className="text-xs text-gray-500">~5 minutes to complete</span>
              </div>
              
              <div className="space-y-3">
                {/* EIN */}
                <button
                  onClick={() => {
                    handleRailItemClick('ein');
                    setActiveRequirement('ein');
                  }}
                  onMouseEnter={() => setActiveRequirement('ein')}
                  onMouseLeave={() => setActiveRequirement(null)}
                  className={`w-full text-left group p-3 border rounded-lg transition-colors ${
                    activeRequirement === 'ein' ? 'border-teal-600 bg-white' : 'border-gray-200 hover:border-teal-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checklistItems.find(item => item.id === 'ein')?.completed
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300 bg-white group-hover:border-teal-500'
                    }`}>
                      {checklistItems.find(item => item.id === 'ein')?.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-0.5">EIN</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Enter your 9-digit Employer Identification Number
                      </div>
                    </div>
                  </div>
                </button>

                {/* UEI */}
                <button
                  onClick={() => {
                    handleRailItemClick('uei');
                    setActiveRequirement('uei');
                  }}
                  onMouseEnter={() => setActiveRequirement('uei')}
                  onMouseLeave={() => setActiveRequirement(null)}
                  className={`w-full text-left group p-3 border rounded-lg transition-colors ${
                    activeRequirement === 'uei' ? 'border-teal-600 bg-white' : 'border-gray-200 hover:border-teal-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checklistItems.find(item => item.id === 'uei')?.completed
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300 bg-white group-hover:border-teal-500'
                    }`}>
                      {checklistItems.find(item => item.id === 'uei')?.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-0.5">UEI</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Enter your 12-character Unique Entity Identifier from SAM.gov or{' '}
                        <a 
                          href="https://sam.gov" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-teal-600 hover:text-teal-700 underline inline-flex items-center gap-0.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          register on SAM.gov to get a UEI
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Organization Name */}
                <button
                  onClick={() => {
                    handleRailItemClick('org-name');
                    setActiveRequirement('org-name');
                  }}
                  onMouseEnter={() => setActiveRequirement('org-name')}
                  onMouseLeave={() => setActiveRequirement(null)}
                  className={`w-full text-left group p-3 border rounded-lg transition-colors ${
                    activeRequirement === 'org-name' ? 'border-teal-600 bg-white' : 'border-gray-200 hover:border-teal-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checklistItems.find(item => item.id === 'org-name')?.completed
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300 bg-white group-hover:border-teal-500'
                    }`}>
                      {checklistItems.find(item => item.id === 'org-name')?.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-0.5">Organization Name</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Complete your organization's legal name
                      </div>
                    </div>
                  </div>
                </button>

                {/* Organization Address */}
                <button
                  onClick={() => {
                    handleRailItemClick('org-address');
                    setActiveRequirement('org-address');
                  }}
                  onMouseEnter={() => setActiveRequirement('org-address')}
                  onMouseLeave={() => setActiveRequirement(null)}
                  className={`w-full text-left group p-3 border rounded-lg transition-colors ${
                    activeRequirement === 'org-address' ? 'border-teal-600 bg-white' : 'border-gray-200 hover:border-teal-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checklistItems.find(item => item.id === 'org-address')?.completed
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300 bg-white group-hover:border-teal-500'
                    }`}>
                      {checklistItems.find(item => item.id === 'org-address')?.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-0.5">Organization Address</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Complete your organization's legal address
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Details
                </h3>
                <span className="text-xs text-gray-500">~10 minutes to complete</span>
              </div>
              
              <div className="space-y-3">
                {/* Mission Statement */}
                <button
                  onClick={() => {
                    handleRailItemClick('mission-statement');
                    setActiveRequirement('mission-statement');
                  }}
                  onMouseEnter={() => setActiveRequirement('mission-statement')}
                  onMouseLeave={() => setActiveRequirement(null)}
                  className={`w-full text-left group p-3 border rounded-lg transition-colors ${
                    activeRequirement === 'mission-statement' ? 'border-teal-600 bg-white' : 'border-gray-200 hover:border-teal-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checklistItems.find(item => item.id === 'mission-statement')?.completed
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300 bg-white group-hover:border-teal-500'
                    }`}>
                      {checklistItems.find(item => item.id === 'mission-statement')?.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-0.5">Mission Statement</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Complete your mission statement
                      </div>
                    </div>
                  </div>
                </button>

                {/* Vision Statement */}
                <button
                  onClick={() => {
                    handleRailItemClick('vision-statement');
                    setActiveRequirement('vision-statement');
                  }}
                  onMouseEnter={() => setActiveRequirement('vision-statement')}
                  onMouseLeave={() => setActiveRequirement(null)}
                  className={`w-full text-left group p-3 border rounded-lg transition-colors ${
                    activeRequirement === 'vision-statement' ? 'border-teal-600 bg-white' : 'border-gray-200 hover:border-teal-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checklistItems.find(item => item.id === 'vision-statement')?.completed
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300 bg-white group-hover:border-teal-500'
                    }`}>
                      {checklistItems.find(item => item.id === 'vision-statement')?.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-0.5">Vision Statement</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Complete vision statement
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Financial Info Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Financial Info
                </h3>
                <span className="text-xs text-gray-500">~15 minutes to complete</span>
              </div>
              
              <div className="space-y-3">
                {/* Financial Readiness Questions */}
                <button
                  onClick={() => {
                    handleRailItemClick('financial-readiness');
                    setActiveRequirement('financial-readiness');
                  }}
                  onMouseEnter={() => setActiveRequirement('financial-readiness')}
                  onMouseLeave={() => setActiveRequirement(null)}
                  className={`w-full text-left group p-3 border rounded-lg transition-colors ${
                    activeRequirement === 'financial-readiness' ? 'border-teal-600 bg-white' : 'border-gray-200 hover:border-teal-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checklistItems.find(item => item.id === 'financial-readiness')?.completed
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300 bg-white group-hover:border-teal-500'
                    }`}>
                      {checklistItems.find(item => item.id === 'financial-readiness')?.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-0.5">Financial Readiness Questions</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        {(() => {
                          const completedCount = [
                            financialInfo.orgRegistrationType !== '',
                            financialInfo.cfr200Compliant === 'yes',
                            financialInfo.financialSystemTracking === 'yes',
                            financialInfo.timeEffortReporting === 'yes',
                            financialInfo.indirectCostAgreement.trim() !== '',
                            financialInfo.costShareLiquidity === 'yes',
                          ].filter(Boolean).length;
                          return `${completedCount} of 6 Completed`;
                        })()}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Programs & Policies Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Programs & Policies
                </h3>
                <span className="text-xs text-gray-500">~20 minutes to complete</span>
              </div>
              
              <div className="space-y-3">
                {/* Policies & Compliance Questions */}
                <button
                  onClick={() => {
                    handleRailItemClick('policies-compliance');
                    setActiveRequirement('policies-compliance');
                  }}
                  onMouseEnter={() => setActiveRequirement('policies-compliance')}
                  onMouseLeave={() => setActiveRequirement(null)}
                  className={`w-full text-left group p-3 border rounded-lg transition-colors ${
                    activeRequirement === 'policies-compliance' ? 'border-teal-600 bg-white' : 'border-gray-200 hover:border-teal-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checklistItems.find(item => item.id === 'policies-compliance')?.completed
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300 bg-white group-hover:border-teal-500'
                    }`}>
                      {checklistItems.find(item => item.id === 'policies-compliance')?.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-0.5">Policies & Compliance Questions</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        {(() => {
                          const completedCount = [
                            policiesCompliance.complianceTrackingSoftware === 'yes',
                            policiesCompliance.federalDataTracking === 'yes',
                            policiesCompliance.demographicDataCollection === 'yes',
                            policiesCompliance.internalControlsDocs === 'yes',
                            policiesCompliance.procurementPolicies === 'yes',
                            policiesCompliance.timeEffortPolicies === 'yes',
                            policiesCompliance.conflictOfInterestPolicies === 'yes',
                          ].filter(Boolean).length;
                          return `${completedCount} of 7 Completed`;
                        })()}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Required Items Checklist */}
            <div className="space-y-3" style={{ display: 'none' }}>
              {/* Old content hidden */}
            </div>

              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Floating Expand Button - Shows when rail is hidden */}
      <AnimatePresence>
        {readinessEnabled && !showRightRail && (() => {
          const completedCount = checklistItems.filter(item => item.completed).length;
          const totalCount = checklistItems.length;
          
          // Determine styling based on completion count
          let bgGradient = '';
          let icon = null;
          let label = '';
          
          if (completedCount >= 0 && completedCount <= 2) {
            // Warning: Orange gradient
            bgGradient = 'linear-gradient(to left, #f59e0b, #d97706)';
            icon = <AlertTriangle className="w-5 h-5" />;
            label = 'REQUIRED';
          } else if (completedCount >= 3 && completedCount <= 7) {
            // Progress: Blue gradient
            bgGradient = 'linear-gradient(to left, #717bbc, #3e4784)';
            icon = <AlertTriangle className="w-5 h-5" />;
            label = 'REQUIRED';
          } else {
            // Complete: Green gradient
            bgGradient = 'linear-gradient(to left, #3ccb7f, #087443)';
            icon = (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d="M17.6667 8.57144V9.3381C17.6656 11.1351 17.0838 12.8837 16.0078 14.323C14.9318 15.7623 13.4194 16.8152 11.6961 17.3247C9.97286 17.8342 8.13105 17.773 6.44539 17.1503C4.75974 16.5275 3.32055 15.3765 2.34247 13.869C1.36439 12.3615 0.899827 10.5782 1.01806 8.78503C1.1363 6.99191 1.83101 5.28504 2.99857 3.919C4.16613 2.55295 5.74399 1.60092 7.49683 1.20489C9.24966 0.808862 11.0836 0.990051 12.725 1.72144M17.6667 2.66667L9.33333 11.0083L6.83333 8.50833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            );
            label = 'REQUIRED';
          }
          
          return (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              onClick={() => setShowRightRail(true)}
              className="fixed right-0 top-1/3 z-20 text-white px-3 py-4 rounded-l-xl shadow-xl hover:shadow-2xl transition-all group"
              style={{ background: bgGradient }}
              title={`${completedCount}/${totalCount} requirements complete`}
            >
              <motion.div
                className="flex flex-col items-center gap-2"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
                <div className="writing-mode-vertical text-xs font-semibold tracking-wider" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {label}
                </div>
                
                {/* Completion badge */}
                <div className="bg-white/20 rounded px-2 py-1.5 mt-2">
                  <div className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {completedCount} / {totalCount}
                    <br />
                    Done
                  </div>
                </div>
              </motion.div>
            </motion.button>
          );
        })()}
      </AnimatePresence>
      </div>

      {/* Unsaved Changes Dialog */}
      <AnimatePresence>
        {showUnsavedDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/50"
              onClick={() => setShowUnsavedDialog(false)}
            />
            
            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Unsaved Changes
                </h3>
                <p className="text-sm text-gray-600">
                  You have unsaved changes. Do you want to discard them or keep editing?
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={handleDiscardChanges}
                  variant="outline"
                  className="flex-1"
                >
                  Discard Changes
                </Button>
                <Button
                  onClick={handleKeepEditing}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Keep Editing
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}