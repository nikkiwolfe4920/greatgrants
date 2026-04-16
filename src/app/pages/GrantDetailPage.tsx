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
  Zap,
  TrendingUp,
  Shield,
  Target,
  Eye,
  Lock,
  Bookmark
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
}

// Mock data - same as in GrantSearch
const mockGrants: Grant[] = [
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

export function GrantDetailPage() {
  const { id } = useParams();
  const grant = mockGrants.find(g => g.id === id);
  const [isSticky, setIsSticky] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isPublicView, setIsPublicView] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Track grant as recently viewed
  useEffect(() => {
    if (grant) {
      const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]");

      // Remove if already exists to avoid duplicates
      const filtered = recentlyViewed.filter((g: any) => g.id !== grant.id);

      // Add to the beginning with timestamp
      const updated = [{ ...grant, lastViewed: Date.now() }, ...filtered].slice(0, 10); // Keep max 10

      localStorage.setItem("recentlyViewedGrants", JSON.stringify(updated));
      window.dispatchEvent(new Event("recentlyViewedUpdated"));
    }
  }, [grant]);

  // Check if grant is saved
  useEffect(() => {
    if (grant) {
      const saved = JSON.parse(localStorage.getItem("savedGrants") || "[]");
      const isGrantSaved = saved.some((g: any) => g.id === grant.id);
      setIsSaved(isGrantSaved);
    }
  }, [grant]);

  // Listen for saved grants updates
  useEffect(() => {
    const handleSavedGrantsUpdate = () => {
      if (grant) {
        const saved = JSON.parse(localStorage.getItem("savedGrants") || "[]");
        const isGrantSaved = saved.some((g: any) => g.id === grant.id);
        setIsSaved(isGrantSaved);
      }
    };

    window.addEventListener("savedGrantsUpdated", handleSavedGrantsUpdate);
    return () => {
      window.removeEventListener("savedGrantsUpdated", handleSavedGrantsUpdate);
    };
  }, [grant]);

  const handleStartApplication = () => {
    setShowLoadingModal(true);
  };

  const handleShareGrant = () => {
    setShowShareModal(true);
  };

  const toggleSaveGrant = () => {
    if (!grant) return;

    const saved = JSON.parse(localStorage.getItem("savedGrants") || "[]");
    const recent = JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]");
    const isGrantSaved = saved.some((g: any) => g.id === grant.id);

    if (isGrantSaved) {
      // Unsave
      const updated = saved.filter((g: any) => g.id !== grant.id);
      localStorage.setItem("savedGrants", JSON.stringify(updated));
      setIsSaved(false);
    } else {
      // Save - get lastViewed from recently viewed if exists
      const recentGrant = recent.find((g: any) => g.id === grant.id);
      const grantToSave = {
        ...grant,
        savedAt: Date.now(),
        lastViewed: recentGrant?.lastViewed || Date.now()
      };
      const updated = [grantToSave, ...saved];
      localStorage.setItem("savedGrants", JSON.stringify(updated));
      setIsSaved(true);
    }
    window.dispatchEvent(new Event("savedGrantsUpdated"));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef.current) {
        const triggerBottom = triggerRef.current.getBoundingClientRect().bottom;
        // Sticky activates when the horizontal rule (trigger) scrolls past the top
        setIsSticky(triggerBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="max-w-7xl mx-auto p-6 relative">
      {/* Sticky Header */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <Link 
                    to="/search"
                    className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <h2 
                      className="text-lg text-gray-900 font-semibold truncate" 
                      style={{ fontFamily: 'Cabin, sans-serif' }}
                    >
                      {grant.title}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-6 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSaveGrant}
                    className={`gap-1.5 ${
                      isSaved
                        ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
                        : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                    {isSaved ? "Unsave" : "Save"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                    onClick={handleShareGrant}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  {isPublicView ? (
                    <Button
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6"
                      style={{ fontFamily: 'Cabin, sans-serif' }}
                    >
                      Get Started
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6"
                      style={{ fontFamily: 'Cabin, sans-serif' }}
                      onClick={handleStartApplication}
                    >
                      Start Application
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <BreadcrumbPage>
              {grant.title.length > 30 ? grant.title.substring(0, 30) + "..." : grant.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h1 className="text-3xl text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
            {grant.title}
          </h1>
        </div>
        <div className="ml-6 flex items-center gap-3">
          <Button
            variant="outline"
            onClick={toggleSaveGrant}
            className={`gap-1.5 ${
              isSaved
                ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
                : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
            {isSaved ? "Unsave" : "Save"}
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6"
            style={{ fontFamily: 'Cabin, sans-serif' }}
            onClick={handleShareGrant}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          {isPublicView ? (
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8"
              style={{ fontFamily: 'Cabin, sans-serif' }}
            >
              Get Started
            </Button>
          ) : (
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8"
              style={{ fontFamily: 'Cabin, sans-serif' }}
              onClick={handleStartApplication}
            >
              Start Application
            </Button>
          )}
        </div>
      </div>

      {/* Jump to Navigation */}
      <div 
        ref={triggerRef}
        className="flex items-center gap-6 mb-6 text-sm pb-4 border-b border-gray-200"
      >
        <span className="text-gray-500 font-medium">Jump to</span>
        <a href="#who-can-apply" className="text-teal-600 hover:text-teal-700 font-medium">
          Who can Apply
        </a>
        <a href="#main-criteria" className="text-teal-600 hover:text-teal-700 font-medium">
          Main Assessment Criteria
        </a>
        <a href="#dates" className="text-teal-600 hover:text-teal-700 font-medium">
          Dates
        </a>
        <a href="#downloads" className="text-teal-600 hover:text-teal-700 font-medium">
          Downloads[?]
        </a>
        <a href="#contact" className="text-teal-600 hover:text-teal-700 font-medium">
          Contact
        </a>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Overview
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
              <p>{grant.overview || grant.description}</p>
            </div>
          </section>

          {/* Public View: Sign Up CTA */}
          {isPublicView && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Lustria, serif' }}>
                  Ready to Apply for This Grant?
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Join Great Grants to unlock AI-powered application assistance, track deadlines, and manage all your grants in one place—completely free.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      AI-Powered Drafting
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Get instant, personalized application content tailored to your organization
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Progress Tracking
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Never miss a deadline with smart notifications and milestone tracking
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Smart Matching
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Discover grants perfectly aligned with your mission and impact
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      10,000+
                    </div>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Organizations
                    </p>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      $500M+
                    </div>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Secured in Funding
                    </p>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      45,000+
                    </div>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Applications Submitted
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <Button 
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                  style={{ fontFamily: 'Cabin, sans-serif' }}
                >
                  Create Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white font-semibold border-gray-300"
                  style={{ fontFamily: 'Cabin, sans-serif' }}
                >
                  Sign In
                </Button>
              </div>
            </div>
          )}

          {/* Eligible Activities */}
          {grant.eligibleActivities && grant.eligibleActivities.length > 0 && (
            <section>
              <h3 className="text-base font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Eligible Activities
              </h3>
              <p className="text-gray-700 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Eligible projects must:
              </p>
              <ul className="space-y-2">
                {grant.eligibleActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#9810FA] mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Who Can Apply */}
          {grant.whoCanApply && grant.whoCanApply.length > 0 && (
            <section id="who-can-apply">
              <h2 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Who Can Apply ?
              </h2>
              <p className="text-gray-700 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Eligible applicants include:
              </p>
              <ul className="space-y-2">
                {grant.whoCanApply.map((who, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#9810FA] mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {who}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Main Assessment Criteria */}
          {grant.mainCriteria && grant.mainCriteria.length > 0 && (
            <section id="main-criteria">
              <h2 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Main Assessment Criteria
              </h2>
              <p className="text-gray-700 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                The main assessment criteria include:
              </p>
              <ul className="space-y-2">
                {grant.mainCriteria.map((criteria, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#9810FA] mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {criteria}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-4">
            {/* Grant Image */}
            {grant.image && (
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <ImageWithFallback 
                  src={grant.image} 
                  alt={grant.title}
                  className="w-full h-56 object-cover"
                />
              </div>
            )}

            {/* Grant Details Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="space-y-4">
                {/* Category */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Category
                  </span>
                  <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {grant.category}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Location
                  </span>
                  <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {grant.location}
                  </span>
                </div>

                {/* Region */}
                {grant.region && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Region
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.region}
                    </span>
                  </div>
                )}

                {/* Max Funding */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Max Funding
                  </span>
                  <span className="text-sm text-gray-900 text-right font-semibold" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    ${grant.maxAmount.toLocaleString()}
                  </span>
                </div>

                {/* Min Funding */}
                {grant.minAmount && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Min Funding
                    </span>
                    <span className="text-sm text-gray-900 text-right font-semibold" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      ${grant.minAmount.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* No. of recipients */}
                {grant.recipients && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      No. of recipients
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.recipients}
                    </span>
                  </div>
                )}

                {/* Status */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Status
                  </span>
                  <Badge
                    className={`text-xs ${
                      grant.status === "Open"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : grant.status === "Pending"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-gray-100 text-gray-600 border-gray-200"
                    }`}
                  >
                    {grant.status === "Open" ? "Opening" : grant.status}
                  </Badge>
                </div>

                {/* Opening Date */}
                {grant.openDate && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Opening Date
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.openDate} <span className="text-gray-500">3 weeks</span>
                    </span>
                  </div>
                )}

                {/* Closing Date */}
                {grant.closeDate && (
                  <div className="flex items-start justify-between" id="dates">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Closing Date
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.closeDate} <span className="text-gray-500">3 months</span>
                    </span>
                  </div>
                )}

                {/* Closing Info */}
                {grant.closingInfo && (
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-600 block mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Closing Info
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.closingInfo}
                    </p>
                  </div>
                )}

                {/* Total Funding Pool */}
                {grant.poolAmount && (
                  <div className="flex items-start justify-between pt-2 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Total Funding Pool
                    </span>
                    <span className="text-sm text-gray-900 text-right font-semibold" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      ${(grant.poolAmount / 1000000).toFixed(0)}M
                    </span>
                  </div>
                )}

                {/* Competitive */}
                {grant.competitive !== undefined && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Competitive
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.competitive ? "Yes" : "No"}
                    </span>
                  </div>
                )}

                {/* Gender */}
                {grant.gender && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Gender
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.gender}
                    </span>
                  </div>
                )}

                {/* Age */}
                {grant.age && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Age
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.age}
                    </span>
                  </div>
                )}

                {/* Applicable to churches? */}
                {grant.applicableToChurches !== undefined && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Applicable to churches?
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.applicableToChurches ? "Yes" : "No"}
                    </span>
                  </div>
                )}

                {/* Eligible organization type(s) */}
                {grant.organizationTypes && grant.organizationTypes.length > 0 && (
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-600 block mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Eligible organization type(s)
                    </span>
                    <div className="text-sm text-gray-700 leading-relaxed space-y-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.organizationTypes.map((type, idx) => (
                        <div key={idx}>{type}</div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sector/Subsector */}
                {grant.sectorSubsector && (
                  <div className="flex items-start justify-between pt-2 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Sector/Subsector
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.sectorSubsector}
                    </span>
                  </div>
                )}

                {/* Community/Services */}
                {grant.communityServices && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Community/Services
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.communityServices}
                    </span>
                  </div>
                )}

                {/* Health */}
                {grant.health && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Health
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.health}
                    </span>
                  </div>
                )}

                {/* Multicultural */}
                {grant.multicultural && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Multicultural
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.multicultural}
                    </span>
                  </div>
                )}

                {/* Activities */}
                {grant.activities && (
                  <div className="flex items-start justify-between pt-2 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Activities
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.activities}
                    </span>
                  </div>
                )}

                {/* events.gov Activities */}
                {grant.eventsGovActivities && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      events.gov Activities
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.eventsGovActivities}
                    </span>
                  </div>
                )}

                {/* Industries */}
                {grant.industries && (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Industries
                    </span>
                    <span className="text-sm text-gray-900 text-right" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grant.industries}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Mode Toggle - Developer Tool */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Preview Mode:
          </span>
          <button
            onClick={() => setIsPublicView(false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !isPublicView
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            <Lock className="w-4 h-4 inline-block mr-1.5" />
            Authenticated View
          </button>
          <button
            onClick={() => setIsPublicView(true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isPublicView
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            <Eye className="w-4 h-4 inline-block mr-1.5" />
            Public View
          </button>
        </div>
      </div>

      {showLoadingModal && <ApplicationLoadingModal 
        isOpen={showLoadingModal}
        grantTitle={grant.title}
        grantId={grant.id}
      />}
      <ShareGrantModal 
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        grant={grant}
      />
    </div>
  );
}