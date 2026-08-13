import { useParams, Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Globe,
  Users,
  Award,
  FileText,
  Download,
  ExternalLink,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Share2,
  Sparkles,
  Building2,
  ArrowRight,
  Shield,
  Bookmark,
  Eye,
  ChevronDown,
  ChevronUp,
  X
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "../components/ui/breadcrumb";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ApplicationLoadingModal } from "../components/ApplicationLoadingModal";
import { ShareGrantModal } from "../components/ShareGrantModal";
import { GrantAlertCrossSellDialog, CrossSellDirection } from "../components/GrantAlertCrossSellDialog";
import { StopWatchingDialog } from "../components/StopWatchingDialog";
import { useSavedGrants } from "@/hooks/useSavedGrants";
import { useGrantAlerts } from "@/hooks/useGrantAlerts";

interface GrantDocument {
  name: string;
  type: string;
  size: string;
}

interface GrantContact {
  role?: string;
  organization?: string;
  phone?: string;
  email?: string;
  website?: string;
}

interface Grant {
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

const mockGrants: Grant[] = [
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

const renderOverview = (text: string) => {
  if (!text) return null;
  const paragraphs = text.split('\n\n');
  return paragraphs.map((para, i) => {
    const lines = para.split('\n');
    const hasBullets = lines.some(l => l.startsWith('•'));
    if (hasBullets) {
      return (
        <ul key={i} className="space-y-1.5 mb-4 ml-1">
          {lines.filter(l => l.startsWith('•')).map((line, j) => (
            <li key={j} className="flex items-start gap-2.5">
              <span className="text-teal-600 mt-0.5 flex-shrink-0 font-bold">•</span>
              <span className="text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>{line.slice(1).trim()}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>{para}</p>;
  });
};

export function GrantDetailPage() {
  const { id } = useParams();
  const grant = mockGrants.find(g => g.id === id);
  const [isSticky, setIsSticky] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [docsExpanded, setDocsExpanded] = useState(true);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Save Grant and Watch are independent booleans backed by their own
  // data models — saved_grants (useSavedGrants) and grant_alerts
  // (useGrantAlerts). Same source of truth as the search cards, so state
  // stays consistent whichever surface the user toggles from.
  const { isGrantSaved, saveGrant, unsaveGrant } = useSavedGrants();
  const { isGrantAlertEnabled, setAlertEnabled, removeAlert } = useGrantAlerts();
  const isSaved = grant ? isGrantSaved(grant.id) : false;
  const isAlertOn = grant ? isGrantAlertEnabled(grant.id) : false;

  // Save → Watch Cross-Sell Dialog State — see GrantAlertCrossSellDialog.
  // Watch itself never triggers this — turning Watch on only shows a toast.
  const [crossSellOpen, setCrossSellOpen] = useState(false);
  const [crossSellDirection, setCrossSellDirection] = useState<CrossSellDirection>("save-to-alert");

  // Stop Watching Dialog State — confirmation shown before turning off Watch.
  const [stopWatchingDialogOpen, setStopWatchingDialogOpen] = useState(false);

  useEffect(() => {
    if (grant) {
      const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]");
      const filtered = recentlyViewed.filter((g: any) => g.id !== grant.id);
      const updated = [{ ...grant, lastViewed: Date.now() }, ...filtered].slice(0, 10);
      localStorage.setItem("recentlyViewedGrants", JSON.stringify(updated));
      window.dispatchEvent(new Event("recentlyViewedUpdated"));
    }
  }, [grant]);

  const handleStartApplication = () => setShowLoadingModal(true);
  const handleShareGrant = () => setShowShareModal(true);

  const toggleSaveGrant = () => {
    if (!grant) return;
    if (isSaved) {
      unsaveGrant(grant);
      return;
    }
    saveGrant(grant);
    // Save → Alert cross-sell: optional, declinable, never mutates alert state.
    if (!isAlertOn) {
      setCrossSellDirection("save-to-alert");
      setCrossSellOpen(true);
    }
  };

  const toggleWatch = () => {
    if (!grant) return;

    if (isAlertOn) {
      // Turning Watch off is destructive (deletes the alert) — confirm first.
      setStopWatchingDialogOpen(true);
      return;
    }

    // Turning Watch on is instant — no modal, just a toast (see useGrantAlerts).
    setAlertEnabled(grant, true);
  };

  const confirmStopWatching = () => {
    if (grant) {
      removeAlert(grant.id, { grantTitle: grant.title });
    }
    setStopWatchingDialogOpen(false);
  };

  useEffect(() => {
    const scrollContainer = document.querySelector('main');
    if (!scrollContainer) return;
    const handleScroll = () => {
      if (triggerRef.current) {
        setIsSticky(triggerRef.current.getBoundingClientRect().bottom <= 0);
      }
    };
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['overview', 'who-can-apply', 'eligible-activities', 'assessment-criteria', 'grant-details'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(sectionId); },
        { rootMargin: '-10% 0px -70% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [grant]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    const scrollContainer = document.querySelector('main');
    if (el && scrollContainer) {
      const offset = isSticky ? 80 : 24;
      const top = el.getBoundingClientRect().top + scrollContainer.scrollTop - offset;
      scrollContainer.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (!grant) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center py-20">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
            Grant Not Found
          </h2>
          <p className="text-gray-600 mb-6">The grant you're looking for doesn't exist.</p>
          <Link to="/search">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Grant Search
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Sticky Header */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ y: -80, opacity: 0, transition: { duration: 0.24, ease: [0.4, 0, 1, 1] } }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-gray-200/80 shadow-[0_1px_12px_rgba(0,0,0,0.07)]"
          >
            <div className="max-w-7xl mx-auto px-6 py-2.5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Link
                    to="/search"
                    className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p-1 -ml-1 rounded-md hover:bg-gray-100"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-semibold text-gray-900 truncate leading-tight" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.title}
                    </h2>
                    <div className="flex items-center gap-3 mt-0.5">
                      <Badge className={`text-[10px] px-1.5 py-0 h-4 ${
                        grant.status === "Open" ? "bg-green-50 text-green-700 border-green-200"
                          : grant.status === "Pending" ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-gray-100 text-gray-600 border-gray-200"
                      }`}>
                        {grant.status}
                      </Badge>
                      {grant.closeDate && (
                        <span className="text-[11px] text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Closes {grant.closeDate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 flex-wrap justify-end">
                  <Button variant="outline" size="sm" onClick={toggleSaveGrant}
                    className={`gap-1.5 h-8 text-xs ${isSaved ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100" : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"}`}>
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-current" : ""}`} />
                    {isSaved ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={toggleWatch}
                    className={`gap-1.5 h-8 text-xs ${isAlertOn ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100" : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"}`}>
                    <Eye className="w-3.5 h-3.5" />
                    {isAlertOn ? "Watching" : "Watch"}
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:bg-gray-50 h-8 text-xs" onClick={handleShareGrant}>
                    <Share2 className="w-3.5 h-3.5 mr-1.5" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200 text-gray-600 hover:bg-gray-50 h-8 text-xs px-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    + Add Programs
                  </Button>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold h-8 text-xs px-4" onClick={handleStartApplication}>
                    Start Application
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Teal Info Banner */}
      {grant.hasNewInfo && !bannerDismissed && (
        <div className="flex items-center justify-between px-6 py-3" style={{ backgroundColor: '#4a9fd4' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <AlertCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-5" style={{ fontFamily: 'Cabin, sans-serif' }}>
                New information available
              </p>
              <p className="text-xs text-white/90 leading-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                This grant was updated 2 days ago • Review changes that may affect your application
              </p>
            </div>
          </div>
          <button
            onClick={() => setBannerDismissed(true)}
            className="text-white/70 hover:text-white transition-colors flex-shrink-0 p-1"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* White Header Area */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-5 pb-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-5">
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
                <BreadcrumbPage>
                  {grant.title.length > 30 ? grant.title.substring(0, 30) + "..." : grant.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div ref={triggerRef}>
            <div className="flex items-start justify-between gap-6 mb-3 flex-wrap">
              <h1 className="text-[2rem] leading-tight text-gray-900 flex-1 min-w-0" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
                {grant.title}
              </h1>
              <div className="flex flex-col items-end gap-2 flex-shrink-0 pt-1">
                <div className="flex items-center gap-2.5 flex-wrap justify-end">
                  <Button
                    variant="outline"
                    onClick={toggleSaveGrant}
                    className={`gap-1.5 ${isSaved ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100" : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"}`}
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                    {isSaved ? "Saved" : "Save"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={toggleWatch}
                    className={`gap-1.5 ${isAlertOn ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100" : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"}`}
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    <Eye className="w-4 h-4" />
                    {isAlertOn ? "Watching" : "Watch"}
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium" style={{ fontFamily: 'Cabin, sans-serif' }} onClick={handleShareGrant}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6" style={{ fontFamily: 'Cabin, sans-serif' }} onClick={handleStartApplication}>
                    Start Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="border-gray-200 text-gray-600 hover:bg-gray-50 text-xs h-7 px-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  + Add Programs
                </Button>
              </div>
            </div>

            {grant.fundingAgency && (
              <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                {grant.fundingAgency}
              </p>
            )}

            <div className="flex items-center gap-4 flex-wrap">
              <Badge className={`text-xs px-2.5 py-1 ${
                grant.status === "Open" ? "bg-green-50 text-green-700 border-green-200"
                  : grant.status === "Pending" ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-gray-100 text-gray-600 border-gray-200"
              }`}>
                {grant.status}
              </Badge>
              {grant.closeDate && (
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Closes <span className="font-medium text-gray-800">{grant.closeDate}</span></span>
                </div>
              )}
              {grant.awardCeilingFloor ? (
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-800">{grant.awardCeilingFloor} per award</span>
                </div>
              ) : grant.poolAmount ? (
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span><span className="font-medium text-gray-800">${grant.poolAmount.toLocaleString()}</span> funding pool</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* HR separator between white header and grey content */}
        <div className="border-t border-gray-200" />
      </div>

      {/* Main Content — grey background */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* LEFT Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">

              {/* On This Page Navigation */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  On This Page
                </h3>
                <nav className="space-y-0.5">
                  {[
                    { id: 'overview', label: 'Overview' },
                    ...(grant.whoCanApply && grant.whoCanApply.length > 0 ? [{ id: 'who-can-apply', label: 'Who Can Apply?' }] : []),
                    ...(grant.eligibleActivities && grant.eligibleActivities.length > 0 ? [{ id: 'eligible-activities', label: 'Eligible Activities' }] : []),
                    ...(grant.mainCriteria && grant.mainCriteria.length > 0 ? [{ id: 'assessment-criteria', label: 'Assessment Criteria' }] : []),
                    { id: 'grant-details', label: 'Grant Details' },
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-150 group flex items-center gap-2 ${
                        activeSection === section.id
                          ? 'text-teal-700 font-medium bg-teal-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: 'Cabin, sans-serif' }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                        activeSection === section.id ? 'bg-teal-500' : 'bg-gray-300 group-hover:bg-gray-400'
                      }`} />
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>Location</span>
                    <span className="text-sm font-medium text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.region || grant.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>Status</span>
                    <Badge className={`text-xs px-2 py-0.5 ${
                      grant.status === "Open" ? "bg-green-50 text-green-700 border-green-200"
                        : grant.status === "Pending" ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-gray-100 text-gray-600 border-gray-200"
                    }`}>
                      {grant.status}
                    </Badge>
                  </div>
                  {grant.closeDate && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>Closing Date</span>
                      <span className="text-sm font-medium text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        {grant.closeDate}
                      </span>
                    </div>
                  )}
                  {grant.recipients && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>Recipients</span>
                      <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.recipients}</span>
                    </div>
                  )}
                  {grant.poolAmount && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>Total Pool</span>
                      <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        ${(grant.poolAmount / 1000000).toFixed(0)}M
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Documents — collapsible */}
              {grant.documents && grant.documents.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setDocsExpanded(v => !v)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Documents{' '}
                        <span className="font-normal text-gray-500">({grant.documents.length})</span>
                      </span>
                    </div>
                    {docsExpanded
                      ? <ChevronUp className="w-4 h-4 text-gray-400" />
                      : <ChevronDown className="w-4 h-4 text-gray-400" />
                    }
                  </button>
                  <AnimatePresence initial={false}>
                    {docsExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 px-3 py-3 space-y-2">
                          {grant.documents.map((doc, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#fef2f2' }}>
                                <FileText className="w-5 h-5 text-red-500" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-gray-900 truncate" style={{ fontFamily: 'Cabin, sans-serif' }}>{doc.name}</div>
                                <div className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>{doc.type} · {doc.size}</div>
                              </div>
                              <Download className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT Main Content */}
          <div className="lg:col-span-3 space-y-6">

            {/* Overview */}
            <section id="overview" className="scroll-mt-8">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
                  Overview
                </h2>
                <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                {grant.image && (
                  <div className="float-right ml-6 mb-4 rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{ width: '240px' }}>
                    <ImageWithFallback
                      src={grant.image}
                      alt={grant.title}
                      className="w-full object-cover"
                      style={{ height: '160px' }}
                    />
                  </div>
                )}
                {renderOverview(grant.overview || grant.description)}
                <div className="clear-both" />
              </div>
              </div>
            </section>


            {/* Who Can Apply? */}
            {grant.whoCanApply && grant.whoCanApply.length > 0 && (
              <section id="who-can-apply" className="scroll-mt-8">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
                    Who Can Apply?
                  </h2>
                  <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  {(() => {
                    const sepIdx = grant.whoCanApply!.indexOf('---');
                    const bullets = sepIdx === -1 ? grant.whoCanApply! : grant.whoCanApply!.slice(0, sepIdx);
                    const paragraphs = sepIdx === -1 ? [] : grant.whoCanApply!.slice(sepIdx + 1);
                    return (
                      <>
                        <p className="text-gray-700 mb-3 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Eligible applicants include organizations of every type:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          {bullets.map((item, i) => (
                            <li key={i} className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>{item}</li>
                          ))}
                        </ul>
                        {paragraphs.map((para, i) => (
                          <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            {para}
                          </p>
                        ))}
                      </>
                    );
                  })()}
                </div>
              </section>
            )}

            {/* Eligible Activities */}
            {grant.eligibleActivities && grant.eligibleActivities.length > 0 && (
              <section id="eligible-activities" className="scroll-mt-8">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
                    Eligible Activities
                  </h2>
                  <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  {(() => {
                    const lastItem = grant.eligibleActivities![grant.eligibleActivities!.length - 1];
                    const isLastFooter = lastItem.toLowerCase().startsWith('please refer');
                    const bullets = isLastFooter ? grant.eligibleActivities!.slice(0, -1) : grant.eligibleActivities!;
                    return (
                      <>
                        <p className="text-gray-700 mb-3 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Eligible projects must address a priority of the Planetary Science Division, which includes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          {bullets.map((item, i) => (
                            <li key={i} className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>{item}</li>
                          ))}
                        </ul>
                        {isLastFooter && (
                          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>{lastItem}</p>
                        )}
                      </>
                    );
                  })()}
                </div>
              </section>
            )}

            {/* Assessment Criteria */}
            {grant.mainCriteria && grant.mainCriteria.length > 0 && (
              <section id="assessment-criteria" className="scroll-mt-8">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
                    Main Assessment Criteria
                  </h2>
                  <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-gray-700 mb-5 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  The main assessment criteria include:
                </p>
                <ul className="space-y-3 mb-5">
                  {grant.mainCriteria.map((criteria, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-white"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#cbfbf1' }}>
                        <Award className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-900 leading-relaxed text-base font-medium" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        {criteria}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic border-t border-gray-100 pt-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Please refer to the Program Solicitation for the complete list of the assessment criteria.
                </p>
                </div>
              </section>
            )}

            {/* Grant Details */}
            <section id="grant-details" className="scroll-mt-8">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
                  Grant Details
                </h2>
                <div className="w-10 h-[3px] bg-teal-500 rounded-full" />
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                {grant.opportunityNumber && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Opportunity Number</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.opportunityNumber}</div>
                  </div>
                )}
                {grant.fundingInstrument && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Funding Instrument</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.fundingInstrument}</div>
                  </div>
                )}
                {grant.fundingAgency && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Department Name</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.fundingAgency}</div>
                  </div>
                )}
                {grant.projectPeriod && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Project Period</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.projectPeriod}</div>
                  </div>
                )}
                {grant.assistanceListing && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Assistance Listing (CFDA)</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.assistanceListing}</div>
                  </div>
                )}
                {grant.phaseAtHand && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Phase at Hand</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.phaseAtHand}</div>
                  </div>
                )}
                {grant.awardCeilingFloor && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Award Ceiling / Floor</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.awardCeilingFloor}</div>
                  </div>
                )}
                {grant.eligibleApplicantsText && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Eligible Applicants</div>
                    <div className="text-sm text-gray-800 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.eligibleApplicantsText}</div>
                  </div>
                )}
                {grant.totalFundingPool && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Total Funding Pool</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.totalFundingPool}</div>
                  </div>
                )}
                {grant.closingInfoText && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Closing Info</div>
                    <div className="text-sm text-gray-800 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.closingInfoText}</div>
                  </div>
                )}
                {grant.expectedAwards && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Expected Number of Awards</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.expectedAwards}</div>
                  </div>
                )}
                {grant.matchCostShare && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Match / Cost Share</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.matchCostShare}</div>
                  </div>
                )}
                {grant.keyDeadline && (
                  <div className="col-span-2">
                    <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>Key Deadline</div>
                    <div className="text-sm text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.keyDeadline}</div>
                  </div>
                )}
              </div>

              {/* Contact */}
              {grant.contact && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="text-xs text-gray-400 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>Contact</div>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                    <div>
                      {grant.contact.role && (
                        <div className="text-sm font-medium text-gray-800" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.contact.role}</div>
                      )}
                      {grant.contact.organization && (
                        <div className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.contact.organization}</div>
                      )}
                      {grant.contact.phone && (
                        <div className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Cabin, sans-serif' }}>{grant.contact.phone}</div>
                      )}
                    </div>
                    <div className="space-y-2">
                      {grant.contact.email && (
                        <div>
                          <div className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: 'Cabin, sans-serif' }}>Email</div>
                          <a href={`mailto:${grant.contact.email}`} className="text-sm text-teal-600 hover:underline" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            {grant.contact.email}
                          </a>
                        </div>
                      )}
                      {grant.contact.website && (
                        <div>
                          <div className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: 'Cabin, sans-serif' }}>Website</div>
                          <a href={grant.contact.website} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-600 hover:underline flex items-center gap-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            Visit program website
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              </div>
            </section>
          </div>
        </div>
      </div>

      {showLoadingModal && (
        <ApplicationLoadingModal
          isOpen={showLoadingModal}
          grantTitle={grant.title}
          grantId={grant.id}
        />
      )}
      <ShareGrantModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        grant={grant}
      />

      {/* Save → Watch Cross-Sell */}
      <GrantAlertCrossSellDialog
        open={crossSellOpen}
        onOpenChange={setCrossSellOpen}
        direction={crossSellDirection}
        grantTitle={grant.title}
        onAccept={() => setAlertEnabled(grant, true)}
        onDecline={() => {
          // Intentionally a no-op: declining leaves Save on and Watch off,
          // untouched — see GrantAlertCrossSellDialog.
        }}
      />

      {/* Stop Watching Confirmation */}
      <StopWatchingDialog
        open={stopWatchingDialogOpen}
        onOpenChange={setStopWatchingDialogOpen}
        onConfirm={confirmStopWatching}
      />
    </div>
  );
}
