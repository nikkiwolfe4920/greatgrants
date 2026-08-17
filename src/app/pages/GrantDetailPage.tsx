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
import { StopWatchingDialog } from "../components/StopWatchingDialog";
import { useGrantAlerts } from "@/hooks/useGrantAlerts";
import { grantDetails as mockGrants, type GrantDetail as Grant } from "@/data/grantDetails";

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

  // Watch is the only grant-tracking action on this page — see useGrantAlerts.
  // Same source of truth as the search cards, so state stays consistent
  // whichever surface the user toggles from.
  const { isGrantAlertEnabled, setAlertEnabled, removeAlert } = useGrantAlerts();
  const isAlertOn = grant ? isGrantAlertEnabled(grant.id) : false;

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

      {/* Stop Watching Confirmation */}
      <StopWatchingDialog
        open={stopWatchingDialogOpen}
        onOpenChange={setStopWatchingDialogOpen}
        onConfirm={confirmStopWatching}
      />
    </div>
  );
}
