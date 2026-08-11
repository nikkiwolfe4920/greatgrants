import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Banknote,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Bookmark,
  Share2,
  FolderPlus,
  CheckCircle2,
  FileText,
  Download,
  ChevronDown,
  ChevronUp,
  Check,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";
import { Button } from "@/app/components/ui/button";
import { EligibilityWorkflowPanel } from "@/app/components/eligibility/EligibilityWorkflowPanel";
import { ApplicationLoadingModal } from "@/app/components/ApplicationLoadingModal";

const GRANT_ID = "dfop0017890-child-protection";
const GRANT_TITLE = "Advancing Global Health — Child Development, Care, and Protection Addendum";

const ELIGIBLE_ACTIVITIES = [
  "Strengthening national and sub-national child protection systems and workforce",
  "Expanding family-based care and reducing reliance on residential institutions",
  "Improving early childhood development outcomes in vulnerable settings",
];

const WHO_CAN_APPLY = ["Domestic and foreign", "Government and private", "For-profit", "Not-for-profit"];

const MAIN_CRITERIA = [
  "Quality of Program Idea — a clear, feasible concept that addresses a documented child protection, care, or protection gap.",
  "Organizational Capacity and Record on Previous Grants — demonstrated ability to manage awards of similar size and complexity.",
  "Program Planning / Ability to Achieve Objectives — a realistic implementation plan with measurable outcomes and a credible MEL framework.",
  "Strategic alignment with U.S. foreign assistance priorities — explicit alignment with the America First Global Health Strategy's pillars of self-reliance, health systems strengthening, efficiency, and American safety.",
];

const GRANT_DETAILS: { label: string; value: string }[] = [
  { label: "Opportunity Number", value: "DFOP0017890" },
  { label: "Funding Agency", value: "U.S. Department of State — Bureau of Global Health Security and Diplomacy" },
  { label: "Assistance Listing (CFDA)", value: "19.029" },
  { label: "Award Ceiling / Floor", value: "$500,000 – $250,000,000" },
  { label: "Total Funding Pool", value: "Up to $52.65M (Child Protection Addendum)" },
  { label: "Expected Number of Awards", value: "Up to 5 awards (Child Protection Addendum)" },
  { label: "Key Deadline", value: "SOI due May 31, 2026, 11:59 pm EST" },
  { label: "Applicable to Churches?", value: "Yes" },
  { label: "Funding Instrument", value: "Grant or cooperative agreement; cooperative agreements carry substantial federal involvement" },
  { label: "Project Period", value: "Up to 5 years" },
  { label: "Phase at Hand", value: "Phase 1 only: Statement of Interest (SOI), not a full application" },
  { label: "Eligible Applicants", value: "U.S. and foreign organizations, including nonprofits, for-profits, and government entities" },
  { label: "Match / Cost Share", value: "Not required and will not be scored" },
  { label: "Closing Info", value: "Child Protection Addendum: Statement of Interest (SOI) due May 31, 2026, 11:59 pm EST" },
];

const RESTRICTIONS = [
  "Direct cash transfers or stipends to individual beneficiaries.",
  "Construction, renovation, or other major capital improvements to facilities.",
  "Lobbying, political party activities, or advocacy for specific legislation.",
  "General institutional operating support that is not tied to Child Protection Addendum program activities.",
  "Programs that duplicate an existing, actively funded GHSD award without demonstrating clear additionality.",
];

const DOCUMENTS = [
  { name: "Notice of Funding Opportunity (APS)", type: "PDF Document", size: "2.4 MB" },
  { name: "Funding Opportunity Announcement Addendum", type: "PDF Document", size: "1.1 MB" },
];

const ON_THIS_PAGE = [
  { id: "overview", label: "Overview" },
  { id: "eligible-activities", label: "Eligible Activities" },
  { id: "eligibility-assessment", label: "Eligibility Assessment" },
  { id: "who-can-apply", label: "Who Can Apply" },
  { id: "assessment-criteria", label: "Assessment Criteria" },
  { id: "restrictions", label: "Restrictions" },
  { id: "grant-details", label: "Grant Details" },
];

function formatTimeAgo(date: Date | null): string {
  if (!date) return "";
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return date.toLocaleDateString();
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
        {children}
      </h2>
      <div className="w-16 h-1 bg-teal-500 rounded-full" />
    </div>
  );
}

function EligibleActivitiesSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-[33px]">
      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
        Eligible Activities
      </h3>
      <p className="text-base text-gray-700 mt-2" style={{ fontFamily: "Cabin, sans-serif" }}>
        Eligible projects must address a priority of the Child Development, Care, and Protection addendum, which
        includes:
      </p>
      <ul className="mt-3 pl-6 space-y-1 list-disc text-base text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
        {ELIGIBLE_ACTIVITIES.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
      <p className="text-base text-gray-700 mt-4" style={{ fontFamily: "Cabin, sans-serif" }}>
        Please refer to the Annual Program Statement for the complete list of eligible activities.
      </p>
    </div>
  );
}

function CheckYourEligibilityCard({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      key="default"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-xl border border-gray-200 p-6"
    >
      <div className="rounded-xl bg-purple-50 p-6">
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
            <ShieldCheck className="size-6 text-[#9810fa]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
              Check Your Eligibility
            </h4>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
              Answer a few questions and we&apos;ll automatically verify what we already know about your
              organization — then give you a personalized eligibility score and GO / NO-GO recommendation.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <Button onClick={onStart} className="bg-[#9810fa] hover:bg-[#8710e0] text-white gap-2">
            <Sparkles className="size-4" />
            Start Eligibility Assessment
            <ArrowRight className="size-4" />
          </Button>
          <span className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
            ~5 minutes • 5 steps
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * /eligibility-assessment — the full grant/opportunity detail page for the
 * "Advancing Global Health" NOFO's Child Development, Care, and Protection
 * addendum (Figma node 12683:22351), with the interactive "Eligibility
 * Activities & Assessment" section (12791:40283 / 12683:25848) at its
 * center.
 */
export function EligibilityAssessmentPage() {
  const [isAssessing, setIsAssessing] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [docsExpanded, setDocsExpanded] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [programLinked, setProgramLinked] = useState(false);
  const [reportGeneratedAt, setReportGeneratedAt] = useState<number | null>(null);
  const [showApplicationLoading, setShowApplicationLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector("main");
    if (!scrollContainer) return;
    const handleScroll = () => {
      if (triggerRef.current) {
        setIsSticky(triggerRef.current.getBoundingClientRect().bottom <= 0);
      }
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ON_THIS_PAGE.map((s) => s.id);
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { rootMargin: "-10% 0px -70% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    const scrollContainer = document.querySelector("main");
    if (el && scrollContainer) {
      const offset = isSticky ? 80 : 24;
      const top = el.getBoundingClientRect().top + scrollContainer.scrollTop - offset;
      scrollContainer.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleStartApplication = () => setShowApplicationLoading(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <ApplicationLoadingModal isOpen={showApplicationLoading} grantTitle={GRANT_TITLE} grantId={GRANT_ID} />

      {/* Sticky condensed header — offset past the global sidebar (lg:w-60 / xl:w-64)
          so it never draws over SharedSidebar while scrolling. */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ y: -80, opacity: 0, transition: { duration: 0.24, ease: [0.4, 0, 1, 1] } }}
            className="fixed top-0 left-0 lg:left-60 xl:left-64 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-gray-200/80 shadow-[0_1px_12px_rgba(0,0,0,0.07)]"
          >
            <div className="max-w-6xl mx-auto px-6 py-2.5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p-1 -ml-1 rounded-md hover:bg-gray-100"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-semibold text-gray-900 truncate leading-tight" style={{ fontFamily: "Cabin, sans-serif" }}>
                      {GRANT_TITLE}
                    </h2>
                    <div className="flex items-center gap-3 mt-0.5">
                      <Badge className="text-[10px] px-1.5 py-0 h-4 bg-green-50 text-green-700 border-green-200">
                        Applications Open
                      </Badge>
                      <span className="text-[11px] text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Closes May 31, 2026
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSaved((v) => !v)}
                    className={`gap-1.5 h-8 text-xs ${isSaved ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100" : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"}`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-current" : ""}`} />
                    {isSaved ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:bg-gray-50 h-8 text-xs" onClick={handleShare}>
                    {linkCopied ? <Check className="w-3.5 h-3.5 mr-1.5 text-teal-600" /> : <Share2 className="w-3.5 h-3.5 mr-1.5" />}
                    {linkCopied ? "Copied" : "Share"}
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

      {/* Header */}
      <div className="bg-white" ref={triggerRef}>
        <div className="max-w-6xl mx-auto px-6 pt-5 pb-6">
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
                <BreadcrumbPage>Advancing Global Health — Child Development, Care, and Protection</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-[2.25rem] leading-tight text-gray-900" style={{ fontFamily: "Lustria, serif", fontWeight: 400 }}>
                {GRANT_TITLE}
              </h1>
              <p className="text-base text-gray-500 mt-2" style={{ fontFamily: "Cabin, sans-serif" }}>
                U.S. Department of State, Bureau of Global Health Security and Diplomacy (GHSD)
              </p>

              <div className="flex items-center gap-4 flex-wrap mt-4">
                <Badge className="text-sm px-3 py-1 bg-green-50 text-green-700 border-green-200 font-medium">
                  Applications Open
                </Badge>
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Closes May 31, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <Banknote className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold text-gray-700">$500,000 – $250,000,000 per award</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 shrink-0">
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={() => setIsSaved((v) => !v)} className={`gap-1.5 ${isSaved ? "border-teal-200 bg-teal-50 text-teal-700" : ""}`}>
                  <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                  {isSaved ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" onClick={handleShare} className="gap-1.5">
                  {linkCopied ? <Check className="w-4 h-4 text-teal-600" /> : <Share2 className="w-4 h-4" />}
                  {linkCopied ? "Copied" : "Share"}
                </Button>
                <Button onClick={handleStartApplication} className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5">
                  Start Application
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <Button variant="outline" size="sm" className="h-8 gap-1.5 border-teal-200 text-gray-700 hover:bg-teal-50">
                <FolderPlus className="w-4 h-4 text-gray-500" />
                Add Programs
                {programLinked && (
                  <span className="inline-flex size-5 items-center justify-center rounded-md bg-teal-600 text-xs font-medium text-white">
                    1
                  </span>
                )}
              </Button>

              {reportGeneratedAt && (
                <div className="flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-green-700">Eligibility Checked</span>
                  <span className="text-gray-400">· Updated {formatTimeAgo(new Date(reportGeneratedAt))}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200" />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* LEFT Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">
              {/* On This Page */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: "Cabin, sans-serif" }}>
                  On This Page
                </h3>
                <nav className="space-y-0.5">
                  {ON_THIS_PAGE.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-150 group flex items-center gap-2 ${
                        activeSection === section.id ? "text-teal-700 font-medium bg-teal-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                      style={{ fontFamily: "Cabin, sans-serif" }}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                          activeSection === section.id ? "bg-teal-500" : "bg-gray-300 group-hover:bg-gray-400"
                        }`}
                      />
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => setDocsExpanded((v) => !v)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                      Documents <span className="font-normal text-gray-500">({DOCUMENTS.length})</span>
                    </span>
                  </div>
                  {docsExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                <AnimatePresence initial={false}>
                  {docsExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-3 py-3 space-y-2">
                        {DOCUMENTS.map((doc) => (
                          <div key={doc.name} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#fef2f2" }}>
                              <FileText className="w-5 h-5 text-red-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-gray-900 truncate" style={{ fontFamily: "Cabin, sans-serif" }}>{doc.name}</div>
                              <div className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>{doc.type} · {doc.size}</div>
                            </div>
                            <Download className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-4" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Location</span>
                    <span className="text-sm font-medium text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>US</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Region</span>
                    <span className="text-sm font-medium text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>International</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Status</span>
                    <Badge className="text-xs px-2 py-0.5 bg-green-50 text-green-700 border-green-200">Open</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Opening Date</span>
                    <span className="text-sm font-medium text-gray-900 text-right" style={{ fontFamily: "Cabin, sans-serif" }}>
                      March 5, 12:00 am ET
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Closing Date</span>
                    <span className="text-sm font-medium text-gray-900 text-right" style={{ fontFamily: "Cabin, sans-serif" }}>
                      May 31, 11:59 pm ET
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Recipients</span>
                    <span className="text-sm font-medium text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Total Pool</span>
                    <span className="text-sm font-medium text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>$53M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview */}
            <section id="overview" className="scroll-mt-8">
              <SectionHeading>Overview</SectionHeading>
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
                <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
                  This Annual Program Statement addendum supports the Child Development, Care, and Protection
                  priorities within the U.S. Department of State's America First Global Health Strategy. The Child
                  Protection Addendum focuses on three core priorities: strengthening national and sub-national child
                  protection systems and workforce, expanding family-based care alternatives to residential
                  institutions, and improving early childhood development outcomes in vulnerable settings.
                </p>
                <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
                  The APS overall has a total funding pool of up to $52.65 million, supporting up to 5 awards under
                  this addendum. This is a two-phase process: Phase 1 requires a 5-page Statement of Interest (SOI),
                  and only the strongest concepts are invited to submit a full Phase 2 application.
                </p>
              </div>
            </section>

            {/* Eligible Activities */}
            <section id="eligible-activities" className="scroll-mt-8">
              <SectionHeading>Eligible Activities</SectionHeading>
              <EligibleActivitiesSection />
            </section>

            {/* Eligibility Assessment — slides open into the eligibility workflow.
                overflowAnchor is disabled here because this section's content
                height changes drastically (step form -> loader -> report) the
                instant Check My Eligibility is clicked; without it Chrome's
                scroll anchoring can silently fight the JS-driven scroll back
                up to this heading. */}
            <section id="eligibility-assessment" className="scroll-mt-8" style={{ overflowAnchor: "none" }}>
              <SectionHeading>Eligibility Assessment</SectionHeading>

              <AnimatePresence mode="wait">
                {isAssessing ? (
                  <motion.div
                    key="workflow"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <EligibilityWorkflowPanel
                      onExit={() => setIsAssessing(false)}
                      onProgramLinked={setProgramLinked}
                      onReportGenerated={setReportGeneratedAt}
                      onStartApplication={handleStartApplication}
                      onAnchorScroll={() => scrollToSection("eligibility-assessment")}
                    />
                  </motion.div>
                ) : (
                  <CheckYourEligibilityCard onStart={() => setIsAssessing(true)} />
                )}
              </AnimatePresence>
            </section>

            {/* Who Can Apply */}
            <section id="who-can-apply" className="scroll-mt-8">
              <SectionHeading>Who Can Apply?</SectionHeading>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-base text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Eligible applicants include organizations of every type:
                </p>
                <ul className="mt-3 pl-6 space-y-1 list-disc text-base text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
                  {WHO_CAN_APPLY.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-base text-gray-700 mt-4" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Proposers must demonstrate direct child protection, family-based care, or early childhood
                  development programming experience. Organizations without prior U.S. federal award experience are
                  eligible but should review the readiness guidance in the Financial Info and Policy Info steps of
                  the eligibility assessment before applying.
                </p>
                <p className="text-base text-gray-700 mt-4" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Please refer to the Annual Program Statement for the complete eligibility requirements.
                </p>
              </div>
            </section>

            {/* Main Assessment Criteria */}
            <section id="assessment-criteria" className="scroll-mt-8">
              <SectionHeading>Main Assessment Criteria</SectionHeading>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-base text-gray-700 mb-4" style={{ fontFamily: "Cabin, sans-serif" }}>
                  The main assessment criteria include:
                </p>
                <div className="space-y-4">
                  {MAIN_CRITERIA.map((criterion, index) => {
                    const [title, ...rest] = criterion.split(" — ");
                    return (
                      <div key={criterion} className="flex items-start gap-3">
                        <div className="size-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 text-teal-700 text-sm font-semibold" style={{ fontFamily: "Cabin, sans-serif" }}>
                          {index + 1}
                        </div>
                        <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
                          <span className="font-semibold text-gray-900">{title}</span>
                          {rest.length > 0 ? ` — ${rest.join(" — ")}` : ""}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-gray-500 mt-5" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Please refer to the Notice of Funding Opportunity for the complete scoring rubric.
                </p>
              </div>
            </section>

            {/* Restrictions */}
            <section id="restrictions" className="scroll-mt-8">
              <SectionHeading>Restrictions</SectionHeading>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-base text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
                  The following are ineligible for funding:
                </p>
                <ul className="mt-3 pl-6 space-y-1 list-disc text-base text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
                  {RESTRICTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Grant Details */}
            <section id="grant-details" className="scroll-mt-8">
              <SectionHeading>Grant Details</SectionHeading>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {GRANT_DETAILS.map((field) => (
                    <div key={field.label}>
                      <p className="text-sm font-medium text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>{field.label}</p>
                      <p className="text-base text-gray-900 mt-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>{field.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: "Cabin, sans-serif" }}>Contact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Program Admin</p>
                      <p className="text-base text-gray-900 mt-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>GHSD Program Office</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Email</p>
                      <p className="text-base text-gray-900 mt-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>GHSDGrants@state.gov</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>Website</p>
                      <a href="https://www.state.gov/ghsd" className="text-base text-teal-700 hover:underline mt-0.5 block" style={{ fontFamily: "Cabin, sans-serif" }}>
                        Visit program website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
