import { useNavigate, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  FolderOpen,
  Building2,
  ChevronDown,
  ChevronRight,
  FileText,
  Settings,
  LogOut,
  Plus,
  Sparkles,
  AlertCircle,
  Bookmark,
  Clock,
  Loader2,
  Menu,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Logo } from "./Logo";
import { useReadinessScore } from "../contexts/ReadinessScoreContext";

interface Section {
  id: string;
  name: string;
}

interface Application {
  id: string;
  title: string;
  sections: Section[];
}

const mockApplications: Application[] = [
  {
    id: "1",
    title: "Administration for Community L...",
    sections: [
      { id: "s1", name: "Mission & Vision" },
      { id: "s2", name: "Focus Area" },
      { id: "s3", name: "Program Details" },
      { id: "s4", name: "Performance Metrics" },
      { id: "s5", name: "Budget" },
      { id: "s6", name: "Narrative" },
      { id: "s7", name: "Documents" },
      { id: "s8", name: "Compliance" },
      { id: "s9", name: "Eligibility" },
    ]
  },
  {
    id: "2",
    title: "FY26 National Network Cooperat...",
    sections: [
      { id: "s1", name: "Mission & Vision" },
      { id: "s2", name: "Focus Area" },
      { id: "s3", name: "Program Details" },
      { id: "s4", name: "Performance Metrics" },
      { id: "s5", name: "Budget" },
      { id: "s6", name: "Narrative" },
      { id: "s7", name: "Documents" },
      { id: "s8", name: "Compliance" },
      { id: "s9", name: "Eligibility" },
    ]
  }
];

const activeApplicationsCount = mockApplications.length;

const organizations = [
  { id: "1", name: "Great Grants Foundation", initials: "GG" },
  { id: "2", name: "Community Impact Fund", initials: "CI" },
  { id: "3", name: "Tech for Good Alliance", initials: "TG" },
];

export function SharedSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOrg, setSelectedOrg] = useState("UptownArts Coalition");
  const [applicationsExpanded, setApplicationsExpanded] = useState(false);
  const { orgProfileItemsRemaining } = useReadinessScore();
  const [expandedApp, setExpandedApp] = useState<string>("1");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isLoadingOrganization, setIsLoadingOrganization] = useState(false);
  const [publishedProjectsCount, setPublishedProjectsCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isApplicationsPage = location.pathname === "/applications";
  const isApplicationSectionPage = location.pathname.startsWith("/application/");
  const isGrantDetailPage = location.pathname.startsWith("/grant/");
  const isSavedGrantsPage = location.pathname === "/saved-grants";

  const isOrgProfileComplete = orgProfileItemsRemaining === 0;
  const hasPublishedPrograms = publishedProjectsCount >= 1;

  // Auto-expand applications when on related pages
  useEffect(() => {
    if (isApplicationsPage || isApplicationSectionPage) {
      setApplicationsExpanded(true);
    }
  }, [isApplicationsPage, isApplicationSectionPage]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateProjectCount = () => {
      const count = parseInt(localStorage.getItem("publishedProjectsCount") || "0", 10);
      setPublishedProjectsCount(count);
    };
    updateProjectCount();
    window.addEventListener("projectsUpdated", updateProjectCount);
    return () => window.removeEventListener("projectsUpdated", updateProjectCount);
  }, []);

  const handleOrganizationSwitch = (orgName: string) => {
    setIsLoadingOrganization(true);
    setSelectedOrg(orgName);
    setTimeout(() => setIsLoadingOrganization(false), 1200);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('applicationId')) {
      setExpandedApp(params.get('applicationId') || "1");
    }
    if (params.get('sectionId')) {
      setSelectedSection(params.get('sectionId') || null);
    }
  }, [location.search]);

  // Close mobile sidebar on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  const isAllApplicationsActive = isApplicationsPage || isApplicationSectionPage;

  const sidebarContent = (
    <aside
      ref={sidebarRef}
      className="flex flex-col bg-white h-full w-full border-r border-gray-200"
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shrink-0">
        <Logo />
        {/* Close button on tablet/mobile overlay */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Close navigation"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 flex flex-col min-h-0">
        <ul className="space-y-0.5 flex-1">

          {/* 1. Organization Profile */}
          {isOrgProfileComplete ? (
            <li>
              <button
                onClick={() => navigate("/organization")}
                className={`flex items-center gap-2 px-3 py-2 w-full text-left rounded-md transition-colors ${
                  isActive("/organization")
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/organization") ? 600 : 400, fontSize: '14px' }}
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <span className="flex-1 truncate">Organization Profile</span>
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => navigate("/organization")}
                className={`w-full text-left rounded-lg transition-colors ${
                  isActive("/organization") ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2 px-3 py-2">
                  <Building2 className="w-4 h-4 text-gray-700 shrink-0" />
                  <span className="flex-1 truncate text-gray-900" style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/organization") ? 600 : 400, fontSize: '14px' }}>
                    Organization Profile
                  </span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-semibold shrink-0">
                    <AlertCircle className="w-3 h-3" />
                    <span>{orgProfileItemsRemaining}</span>
                  </div>
                </div>
                <div className="px-3 pb-2 pt-0.5">
                  <div className="flex items-start gap-2">
                    <AlertCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isActive("/organization") ? "text-gray-700" : "text-gray-500"}`} />
                    <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Required items remaining to complete your profile
                    </p>
                  </div>
                </div>
              </button>
            </li>
          )}

          {/* 2. My Programs */}
          {hasPublishedPrograms ? (
            <li>
              <button
                onClick={() => navigate("/project-details")}
                className={`flex items-center gap-2 px-3 py-2 w-full text-left rounded-md transition-colors ${
                  isActive("/project-details")
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/project-details") ? 600 : 400, fontSize: '14px' }}
              >
                <FolderOpen className="w-4 h-4 shrink-0" />
                <span className="flex-1 truncate">My Programs</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full shrink-0">
                  {publishedProjectsCount}
                </span>
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => navigate("/project-details")}
                className={`w-full text-left rounded-md transition-colors ${
                  isActive("/project-details") ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2 px-3 py-2">
                  <FolderOpen className="w-4 h-4 shrink-0" />
                  <span className="flex-1 truncate" style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/project-details") ? 600 : 400, fontSize: '14px' }}>
                    My Programs
                  </span>
                </div>
                <div className="px-3 pb-2 pt-0.5">
                  <div className="flex items-start gap-2">
                    <Sparkles className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isActive("/project-details") ? "text-gray-700" : "text-gray-500"}`} />
                    <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Adding programs helps improve search and AI-drafting capabilities
                    </p>
                  </div>
                </div>
              </button>
            </li>
          )}

          {/* 3. Saved Grants */}
          <li>
            <button
              onClick={() => navigate("/saved-grants")}
              className={`flex items-center gap-2 px-3 py-2 w-full text-left rounded-md transition-colors ${
                isSavedGrantsPage ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isSavedGrantsPage ? 600 : 400, fontSize: '14px' }}
            >
              <Bookmark className="w-4 h-4 shrink-0" />
              <span className="flex-1 truncate">Saved Grants</span>
            </button>
          </li>

          {/* Divider */}
          <li className="py-1.5">
            <div className="border-t border-gray-100" />
          </li>

          {/* Grant Search */}
          <li>
            <button
              onClick={() => navigate("/search")}
              className={`flex items-center gap-2 px-3 py-2 w-full text-left rounded-md transition-colors ${
                isActive("/search") || isGrantDetailPage
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/search") || isGrantDetailPage ? 600 : 400, fontSize: '14px' }}
            >
              <Search className="w-4 h-4 shrink-0" />
              <span className="flex-1 truncate">Grant Search</span>
            </button>
          </li>

          {/* All Applications — collapsible with count badge + caret */}
          <li>
            <div
              className={`flex items-center gap-2 px-3 py-2 w-full rounded-md transition-colors ${
                isAllApplicationsActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {/* Navigate label area */}
              <button
                onClick={() => navigate("/applications")}
                className="flex items-center gap-2 flex-1 min-w-0 text-left"
                style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isAllApplicationsActive ? 600 : 400, fontSize: '14px' }}
                aria-label="Go to All Applications"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span className="flex-1 truncate">All Applications</span>
              </button>

              {/* Active count badge */}
              <span
                className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full shrink-0 select-none"
                title={`${activeApplicationsCount} active application${activeApplicationsCount !== 1 ? 's' : ''}`}
              >
                {activeApplicationsCount}
              </span>

              {/* Chevron toggle */}
              <button
                onClick={() => setApplicationsExpanded(prev => !prev)}
                className="p-0.5 rounded hover:bg-gray-200 transition-colors shrink-0"
                aria-label={applicationsExpanded ? "Collapse applications" : "Expand applications"}
                aria-expanded={applicationsExpanded}
              >
                {applicationsExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 transition-transform duration-200" />
                )}
              </button>
            </div>

            {/* Nested application list */}
            {applicationsExpanded && (
              <ul className="ml-3 mt-1 space-y-0.5">
                {mockApplications.map((app) => (
                  <li key={app.id}>
                    <button
                      onClick={() => setExpandedApp(expandedApp === app.id ? "" : app.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 w-full text-left text-sm rounded-md group ${
                        location.search.includes(`applicationId=${app.id}`)
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {expandedApp === app.id ? (
                        <ChevronDown className="w-3 h-3 shrink-0" />
                      ) : (
                        <ChevronRight className="w-3 h-3 shrink-0" />
                      )}
                      <span className="truncate text-xs font-medium">{app.title}</span>
                    </button>

                    {expandedApp === app.id && (
                      <ul className="ml-5 mt-0.5 space-y-0.5">
                        {app.sections.map((section) => {
                          const isActiveSection = location.pathname === `/application/${app.id}/s/${section.id}`;
                          return (
                            <li key={section.id}>
                              <button
                                onClick={() => navigate(`/application/${app.id}/s/${section.id}`)}
                                className={`flex items-center gap-2 px-3 py-1.5 w-full text-left text-xs rounded-md transition-colors ${
                                  isActiveSection
                                    ? "bg-gray-100 text-gray-900 font-medium"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                {isActiveSection && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                                )}
                                <span className={isActiveSection ? "" : "ml-3.5"}>{section.name}</span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

        </ul>

        <div className="mt-auto pt-3 pb-1" />
      </nav>

      {/* Credits Usage Widget */}
      <div className="px-3 pb-3 shrink-0">
        <div className="bg-[#fffefa] rounded-lg p-3 w-full">
          <div className="flex items-center gap-1.5 mb-2">
            <FileText className="w-3.5 h-3.5 text-[#101828] shrink-0" />
            <span className="text-[12px] font-semibold text-[#101828] leading-4 truncate" style={{ fontFamily: 'Cabin, sans-serif' }}>
              3 Applications Generated
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#fef7c3] mb-2">
            <div className="h-1.5 rounded-full bg-[#ca8504]" style={{ width: '31%' }} />
          </div>
          <p className="text-[12px] font-semibold text-[#181d27] leading-4 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
            0 remaining credits
          </p>
          <div className="border-t border-[#feee95] pt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#4a5565] shrink-0" />
              <span className="text-[12px] text-[#4a5565] leading-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Resets May 31st
              </span>
            </div>
            <button className="text-[12px] font-semibold text-[#00786f] leading-4 hover:underline shrink-0" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Manage Plan
            </button>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="px-3 pb-4 border-t border-gray-200 pt-3 shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2.5 w-full hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#E9EAEB] flex items-center justify-center shrink-0">
                <span className="text-[#181D27] text-xs font-semibold">OR</span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="text-sm font-medium text-gray-900 truncate">Olivia Rhye</div>
                <div className="text-xs text-gray-500 truncate">{selectedOrg}</div>
              </div>
              <Plus className="w-4 h-4 text-gray-400 shrink-0" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-0">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Switch organizations</h3>
              <div className="space-y-2">
                {organizations.map((org) => (
                  <button
                    key={org.id}
                    onClick={() => handleOrganizationSwitch(org.name)}
                    className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-gray-600">{org.initials}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 flex-1 text-left">{org.name}</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      selectedOrg === org.name ? "border-teal-600 bg-teal-600" : "border-gray-300 group-hover:border-gray-400"
                    }`}>
                      {selectedOrg === org.name && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/settings")} className="gap-3 py-3 mx-2 rounded-lg">
              <Settings className="w-4 h-4 text-gray-500" />
              <div className="flex-1 text-sm font-medium">Account settings</div>
              <span className="text-xs text-gray-400 font-mono">⌘S</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/organizations")} className="gap-3 py-3 mx-2 rounded-lg">
              <Building2 className="w-4 h-4 text-gray-500" />
              <div className="flex-1 text-sm font-medium">Organizations & Roles</div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/signin")} className="gap-3 py-3 mx-2 mb-2 rounded-lg bg-gray-50">
              <LogOut className="w-4 h-4 text-gray-500" />
              <div className="flex-1 text-sm font-medium">Sign out</div>
              <span className="text-xs text-gray-400 font-mono">⇧⌘Q</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );

  return (
    <>
      {/* Loading Overlay */}
      {isLoadingOrganization && (
        <div className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                <Loader2 className="w-8 h-8 text-teal-600 animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Switching Organization</h3>
              <p className="text-sm text-gray-600">Loading {selectedOrg}...</p>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar — visible lg+ */}
      <div className="hidden lg:flex lg:flex-col lg:w-60 xl:w-64 shrink-0 h-screen sticky top-0">
        {sidebarContent}
      </div>

      {/* Tablet/mobile: hamburger button + overlay drawer */}
      <div className="lg:hidden">
        {/* Hamburger toggle — fixed top-left */}
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-3 left-3 z-40 p-2 rounded-md bg-white border border-gray-200 shadow-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          aria-label="Open navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-[1px] transition-opacity"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Slide-in drawer */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-250 ease-in-out ${
            mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
          }`}
        >
          {sidebarContent}
        </div>
      </div>
    </>
  );
}
