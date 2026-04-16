import { useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";
import {
  Home,
  Search,
  FolderOpen,
  Building2,
  ChevronDown,
  ChevronRight,
  FileText,
  DollarSign,
  Calendar,
  BarChart3,
  CheckSquare,
  Settings,
  HelpCircle,
  LogOut,
  TrendingUp,
  CheckCircle2,
  Loader2,
  Plus,
  Users,
  Target,
  Sparkles,
  Info,
  AlertCircle,
  Bookmark
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

const organizations = [
  { id: "1", name: "Great Grants Foundation", initials: "GG" },
  { id: "2", name: "Community Impact Fund", initials: "CI" },
  { id: "3", name: "Tech for Good Alliance", initials: "TG" },
];

export function SharedSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOrg, setSelectedOrg] = useState("UptownArts Coalition");
  const [showApplications, setShowApplications] = useState(false);
  const { score: readinessScore, requiredItemsRemaining, orgProfileItemsRemaining } = useReadinessScore();
  const [expandedApp, setExpandedApp] = useState<string>("1");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isLoadingOrganization, setIsLoadingOrganization] = useState(false);
  const [publishedProjectsCount, setPublishedProjectsCount] = useState(0);

  const isActive = (path: string) => location.pathname === path;
  const isApplicationsPage = location.pathname === "/applications";
  const isApplicationSectionPage = location.pathname.startsWith("/application/");
  const isGrantDetailPage = location.pathname.startsWith("/grant/");
  const isSavedGrantsPage = location.pathname === "/saved-grants";

  // Check if organization profile is complete
  const isOrgProfileComplete = orgProfileItemsRemaining === 0;
  
  // Check if any programs are published
  const hasPublishedPrograms = publishedProjectsCount >= 1;

  // Listen for project updates
  useEffect(() => {
    const updateProjectCount = () => {
      const count = parseInt(localStorage.getItem("publishedProjectsCount") || "0", 10);
      setPublishedProjectsCount(count);
    };
    
    updateProjectCount();
    window.addEventListener("projectsUpdated", updateProjectCount);
    
    return () => window.removeEventListener("projectsUpdated", updateProjectCount);
  }, []);

  // Calculate readiness level based on score
  const getReadinessLevel = (score: number) => {
    if (score >= 90) return { level: 'Ready', color: 'teal', borderColor: 'border-teal-500' };
    if (score >= 75) return { level: 'Conditionally Ready', color: 'blue', borderColor: 'border-blue-500' };
    if (score >= 65) return { level: 'Developing', color: 'amber', borderColor: 'border-amber-500' };
    return { level: 'Not Ready', color: 'red', borderColor: 'border-red-500' };
  };

  const readinessInfo = getReadinessLevel(readinessScore);

  const handleOrganizationSwitch = (orgName: string) => {
    setIsLoadingOrganization(true);
    setSelectedOrg(orgName);
    
    setTimeout(() => {
      setIsLoadingOrganization(false);
    }, 1200);
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Switching Organization
              </h3>
              <p className="text-sm text-gray-600">
                Loading {selectedOrg}...
              </p>
            </div>
          </div>
        </div>
      )}

    <aside className="w-64 border-r border-gray-200 flex flex-col bg-white">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 flex flex-col">
        <ul className="space-y-1 flex-1">
          {/* All Applications */}
          <li>
            <button
              onClick={() => navigate("/applications")}
              className={`flex items-center gap-2 px-3 py-2 w-full text-left rounded-md transition-colors ${
                isActive("/applications")
                  ? "bg-gray-100 text-gray-900" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/applications") ? 600 : 400, fontSize: '14px' }}
            >
              <FileText className="w-4 h-4" />
              All Applications
            </button>
            
            {/* Nested Application List - Show when on Applications page or Application Section page */}
            {(isApplicationsPage || isApplicationSectionPage || showApplications) && (
              <ul className="ml-3 mt-1 space-y-1">
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
                        <ChevronDown className="w-3 h-3 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-3 h-3 flex-shrink-0" />
                      )}
                      <span className="truncate text-xs font-medium">
                        {app.title}
                      </span>
                    </button>
                    
                    {/* Sections */}
                    {expandedApp === app.id && (
                      <ul className="ml-5 mt-1 space-y-0.5">
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
                                {/* Active indicator dot */}
                                {isActiveSection && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                                )}
                                <span className={isActiveSection ? "" : "ml-3.5"}>
                                  {section.name}
                                </span>
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
              <Search className="w-4 h-4" />
              Grant Search
            </button>
          </li>

          {/* Saved Grants */}
          <li>
            <button
              onClick={() => navigate("/saved-grants")}
              className={`flex items-center gap-2 px-3 py-2 w-full text-left rounded-md transition-colors ${
                isSavedGrantsPage
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isSavedGrantsPage ? 600 : 400, fontSize: '14px' }}
            >
              <Bookmark className="w-4 h-4" />
              Saved Grants
            </button>
          </li>
          
          {/* Organization Profile - Compact when complete (positioned after Grant Search) */}
          {isOrgProfileComplete && (
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
                <Building2 className="w-4 h-4" />
                Organization Profile
              </button>
            </li>
          )}

          {/* My Programs - Compact when published (positioned after Org Profile or Grant Search) */}
          {hasPublishedPrograms && (
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
                <FolderOpen className="w-4 h-4" />
                <span className="flex-1">My Programs</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                  {publishedProjectsCount}
                </span>
              </button>
            </li>
          )}
          
          {/* Divider - Only show if there are incomplete items below */}
          {(!isOrgProfileComplete || !hasPublishedPrograms) && (
            <li className="my-3">
              <div className="border-t border-gray-200" />
            </li>
          )}
          
          {/* Organization Profile - Expanded when incomplete */}
          {!isOrgProfileComplete && (
            <li>
              <button
                onClick={() => navigate("/organization")}
                className={`w-full text-left rounded-lg transition-colors ${
                  isActive("/organization") 
                    ? "bg-gray-100" 
                    : "hover:bg-gray-50"
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <Building2 className="w-4 h-4 text-gray-700" />
                  <span className="flex-1 text-sm text-gray-900" style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/organization") ? 600 : 400, fontSize: '14px' }}>
                    Organization Profile
                  </span>
                  {/* Show required items count badge */}
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-semibold">
                    <AlertCircle className="w-3 h-3" />
                    <span>{orgProfileItemsRemaining}</span>
                  </div>
                </div>
                
                {/* Dynamic Subcopy */}
                <div className="px-3 pb-2 pt-1">
                  <div className="flex items-start gap-2">
                    <AlertCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                      isActive("/organization") ? "text-gray-700" : "text-gray-500"
                    }`} />
                    <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Required items remaining to complete your profile
                    </p>
                  </div>
                </div>
              </button>
            </li>
          )}

          {/* My Programs - Expanded when no programs published */}
          {!hasPublishedPrograms && (
            <li>
              <button
                onClick={() => navigate("/project-details")}
                className={`w-full text-left rounded-md transition-colors ${
                  isActive("/project-details") 
                    ? "bg-gray-100 text-gray-900" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2 px-3 py-2">
                  <FolderOpen className="w-4 h-4" />
                  <span className="flex-1 text-sm" style={{ fontFamily: 'Cabin, sans-serif', fontWeight: isActive("/project-details") ? 600 : 400, fontSize: '14px' }}>
                    My Programs
                  </span>
                </div>
                
                {/* Subcopy */}
                <div className="px-3 pb-2 pt-1">
                  <div className="flex items-start gap-2">
                    <Sparkles className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                      isActive("/project-details") ? "text-gray-700" : "text-gray-500"
                    }`} />
                    <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Adding programs helps improve search and AI-drafting capabilities
                    </p>
                  </div>
                </div>
              </button>
            </li>
          )}
        </ul>

        {/* My Grant Readiness - Removed per user request */}
        <div className="mt-auto pt-3 pb-3">
          {/* Removed */}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 w-full hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#E9EAEB] flex items-center justify-center">
                <span className="text-[#181D27] text-xs font-semibold">OR</span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
                <div className="text-xs text-gray-500 truncate">{selectedOrg}</div>
              </div>
              <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-0">
            {/* Switch Organizations Section */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Switch organizations</h3>
              <div className="space-y-2">
                {organizations.map((org) => (
                  <button
                    key={org.id}
                    onClick={() => handleOrganizationSwitch(org.name)}
                    className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-gray-600">{org.initials}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 flex-1 text-left">{org.name}</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      selectedOrg === org.name
                        ? "border-teal-600 bg-teal-600"
                        : "border-gray-300 group-hover:border-gray-400"
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

            {/* Account Settings */}
            <DropdownMenuItem onClick={() => navigate("/settings")} className="gap-3 py-3 mx-2 rounded-lg">
              <Settings className="w-4 h-4 text-gray-500" />
              <div className="flex-1 text-sm font-medium">Account settings</div>
              <span className="text-xs text-gray-400 font-mono">⌘S</span>
            </DropdownMenuItem>

            {/* Organizations & Roles */}
            <DropdownMenuItem onClick={() => navigate("/organizations")} className="gap-3 py-3 mx-2 rounded-lg">
              <Building2 className="w-4 h-4 text-gray-500" />
              <div className="flex-1 text-sm font-medium">Organizations & Roles</div>
            </DropdownMenuItem>

            {/* Sign Out */}
            <DropdownMenuItem onClick={() => navigate("/signin")} className="gap-3 py-3 mx-2 mb-2 rounded-lg bg-gray-50">
              <LogOut className="w-4 h-4 text-gray-500" />
              <div className="flex-1 text-sm font-medium">Sign out</div>
              <span className="text-xs text-gray-400 font-mono">⇧⌘Q</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
    </>
  );
}