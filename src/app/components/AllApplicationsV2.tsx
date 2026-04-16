import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";
import { 
  Calendar,
  ChevronRight,
  ChevronDown,
  Home,
  FileText,
  Building2,
  ChevronUp,
  Settings,
  LogOut,
  MoreVertical,
  Archive,
  Printer,
  ArchiveRestore,
  Trash2,
  Search
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/app/components/ui/dropdown-menu";

interface Section {
  id: string;
  name: string;
  status: "complete" | "not-started" | "in-progress";
  points: number;
}

interface Application {
  id: string;
  title: string;
  status: string;
  dueDate: string;
  daysLeft: number;
  lastUpdated: string;
  sections: Section[];
}

const mockApplications: Application[] = [
  {
    id: "1",
    title: "Administration for Community Living (ACL) - Assistive Technology Alternative Financing Program",
    status: "In Progress",
    dueDate: "Mar 14, 2026",
    daysLeft: 47,
    lastUpdated: "2 hours ago",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10 },
      { id: "s2", name: "Focus Area", status: "not-started", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "not-started", points: 30 },
      { id: "s5", name: "Budget", status: "not-started", points: 20 },
      { id: "s6", name: "Narrative", status: "in-progress", points: 10 },
      { id: "s7", name: "Documents", status: "not-started", points: 0 },
      { id: "s8", name: "Compliance", status: "not-started", points: 10 },
      { id: "s9", name: "Eligibility", status: "not-started", points: 5 },
    ]
  },
  {
    id: "2",
    title: "FY26 National Network Cooperative Agreement to the National Railroad Passenger Corporation",
    status: "In Progress",
    dueDate: "Mar 14, 2026",
    daysLeft: 47,
    lastUpdated: "Jan 26, 2026",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "not-started", points: 10 },
      { id: "s2", name: "Focus Area", status: "not-started", points: 20 },
      { id: "s3", name: "Program Details", status: "not-started", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "not-started", points: 30 },
      { id: "s5", name: "Budget", status: "not-started", points: 20 },
      { id: "s6", name: "Narrative", status: "not-started", points: 10 },
      { id: "s7", name: "Documents", status: "not-started", points: 0 },
      { id: "s8", name: "Compliance", status: "not-started", points: 10 },
      { id: "s9", name: "Eligibility", status: "not-started", points: 5 },
    ]
  }
];

interface AllApplicationsV2Props {
  onNavigateToSettings?: () => void;
  onNavigate?: (view: "home" | "grants" | "grantSearch" | "organizations" | "settings") => void;
  onSignOut?: () => void;
}

export function AllApplicationsV2({ onNavigateToSettings, onNavigate, onSignOut }: AllApplicationsV2Props) {
  const navigate = useNavigate();
  const [expandedApp, setExpandedApp] = useState<string>("1");
  const [expandedInNav, setExpandedInNav] = useState<string>("1");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<"active" | "archive">("active");
  const [archivedApps, setArchivedApps] = useState<string[]>([]);
  const [sectionCompletions, setSectionCompletions] = useState<Record<string, Record<string, boolean>>>({});
  
  // Load section completions from localStorage
  useEffect(() => {
    const loadCompletions = () => {
      const completions: Record<string, Record<string, boolean>> = {};
      mockApplications.forEach(app => {
        const storageKey = `app-${app.id}-completions`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          completions[app.id] = JSON.parse(saved);
        }
      });
      setSectionCompletions(completions);
    };
    
    loadCompletions();
    
    // Set up an interval to check for updates
    const interval = setInterval(loadCompletions, 1000);
    return () => clearInterval(interval);
  }, []);
  
  // Get section status based on completion state
  const getSectionStatus = (appId: string, sectionId: string, defaultStatus: string): "complete" | "in-progress" | "not-started" => {
    const isComplete = sectionCompletions[appId]?.[sectionId];
    console.log(`getSectionStatus - appId: ${appId}, sectionId: ${sectionId}, isComplete: ${isComplete}, defaultStatus: ${defaultStatus}`);
    if (isComplete) return "complete";
    return defaultStatus as "complete" | "in-progress" | "not-started";
  };
  
  // Filter applications based on current view
  const activeApplications = mockApplications.filter(app => !archivedApps.includes(app.id));
  const archivedApplications = mockApplications.filter(app => archivedApps.includes(app.id));
  
  const handleArchive = (appId: string) => {
    setArchivedApps([...archivedApps, appId]);
    if (expandedApp === appId) {
      setExpandedApp("");
    }
  };
  
  const handleUnarchive = (appId: string) => {
    setArchivedApps(archivedApps.filter(id => id !== appId));
  };
  
  const handleDelete = (appId: string) => {
    // In a real app, this would call an API
    console.log("Delete application:", appId);
    setArchivedApps(archivedApps.filter(id => id !== appId));
  };
  
  const handlePrint = (appId: string) => {
    // In a real app, this would trigger a print dialog
    console.log("Print application:", appId);
    window.print();
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return (
          <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
            Complete
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-50">
            In Progress
          </Badge>
        );
      case "not-started":
        return (
          <Badge className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-50">
            Not Started
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Navigation */}
      <aside className="w-64 border-r border-gray-200 flex flex-col bg-white">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <img src={logoImg} alt="Great Grants" className="h-6" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => onNavigate?.("home")}
                className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 bg-gray-100 rounded-md font-medium">
                <FileText className="w-4 h-4" />
                All Applications
              </button>
              
              {/* Nested Application List */}
              <ul className="ml-3 mt-1 space-y-1">
                {mockApplications.map((app) => (
                  <li key={app.id}>
                    <button
                      onClick={() => setExpandedInNav(expandedInNav === app.id ? "" : app.id)}
                      className="flex items-center gap-2 px-3 py-1.5 w-full text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md group"
                    >
                      {expandedInNav === app.id ? (
                        <ChevronDown className="w-3 h-3 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-3 h-3 flex-shrink-0" />
                      )}
                      <span className="truncate text-xs">
                        {app.title.length > 30 ? app.title.substring(0, 30) + "..." : app.title}
                      </span>
                    </button>
                    
                    {/* Sections */}
                    {expandedInNav === app.id && (
                      <ul className="ml-5 mt-1 space-y-0.5">
                        {app.sections.map((section) => (
                          <li key={section.id}>
                            <button
                              onClick={() => setSelectedSection(section.id)}
                              className={`px-3 py-1.5 w-full text-left text-xs rounded-md transition-colors ${
                                selectedSection === section.id
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-600 hover:bg-gray-50"
                              }`}
                            >
                              {section.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <button
                onClick={() => onNavigate?.("grantSearch")}
                className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Search className="w-4 h-4" />
                Grant Search
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate?.("organizations")}
                className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Building2 className="w-4 h-4" />
                Organization Profile
              </button>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 w-full hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-300 flex items-center justify-center relative">
                  <span className="text-white text-xs font-semibold">OR</span>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
                  <div className="text-xs text-gray-500 truncate">olivia@untitledui.com</div>
                </div>
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2.66666V8M8 8V13.3333M8 8H13.3333M8 8H2.66666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={onNavigateToSettings} className="gap-3 py-3">
                <Settings className="w-4 h-4" />
                <div className="flex-1">Account settings</div>
                <span className="text-xs text-gray-400">⌘S</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onSignOut} className="gap-3 py-3">
                <LogOut className="w-4 h-4" />
                <div className="flex-1">Sign out</div>
                <span className="text-xs text-gray-400">⇧⌘Q</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12h6M9 16h6M12 3v2M8 3h8M5 7h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {currentView === "active" ? "All Applications" : "Archived Applications"}
                  </h1>
                </div>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentView("active")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === "active"
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Active
                  {activeApplications.length > 0 && (
                    <Badge className="ml-2 bg-teal-600 text-white">
                      {activeApplications.length}
                    </Badge>
                  )}
                </button>
                <button
                  onClick={() => setCurrentView("archive")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === "archive"
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Archive className="w-4 h-4 inline mr-1.5" />
                  Archive
                  {archivedApplications.length > 0 && (
                    <Badge className="ml-2 bg-gray-600 text-white">
                      {archivedApplications.length}
                    </Badge>
                  )}
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              {currentView === "active" 
                ? "Manage your active grant applications" 
                : "View and manage archived applications"}
            </p>
          </div>

          {/* Applications */}
          <div className="space-y-4">
            {(currentView === "active" ? activeApplications : archivedApplications).length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  {currentView === "active" ? (
                    <FileText className="w-8 h-8 text-gray-400" />
                  ) : (
                    <Archive className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentView === "active" ? "No active applications" : "No archived applications"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {currentView === "active" 
                    ? "All your grant applications have been archived." 
                    : "Archived applications will appear here."}
                </p>
                {currentView === "active" && archivedApplications.length > 0 && (
                  <Button 
                    onClick={() => setCurrentView("archive")}
                    variant="outline"
                    className="mt-4"
                  >
                    <Archive className="w-4 h-4 mr-2" />
                    View archived applications
                  </Button>
                )}
              </div>
            ) : (
              (currentView === "active" ? activeApplications : archivedApplications).map((app) => {
                const isExpanded = expandedApp === app.id;
                
                return (
                  <div key={app.id} className="bg-white rounded-lg border border-gray-200">
                    {/* Application Header */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="text-lg font-semibold text-gray-900 flex-1">
                          {app.title}
                        </h2>
                        <div className="flex items-center gap-2">
                          {/* More Menu */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                <MoreVertical className="w-5 h-5 text-gray-500" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              {currentView === "active" ? (
                                <>
                                  <DropdownMenuItem onClick={() => handlePrint(app.id)} className="gap-3 py-2.5">
                                    <Printer className="w-4 h-4" />
                                    <span>Print</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem 
                                    onClick={() => handleArchive(app.id)} 
                                    className="gap-3 py-2.5 text-gray-700"
                                  >
                                    <Archive className="w-4 h-4" />
                                    <span>Archive</span>
                                  </DropdownMenuItem>
                                </>
                              ) : (
                                <>
                                  <DropdownMenuItem onClick={() => handleUnarchive(app.id)} className="gap-3 py-2.5">
                                    <ArchiveRestore className="w-4 h-4" />
                                    <span>Unarchive</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem 
                                    onClick={() => handleDelete(app.id)} 
                                    className="gap-3 py-2.5 text-red-600 focus:text-red-600"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                    <span>Delete</span>
                                  </DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                          
                          {/* Expand/Collapse Button */}
                          <button
                            onClick={() => setExpandedApp(isExpanded ? "" : app.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Due {app.dueDate} ({app.daysLeft} days left)</span>
                        </div>
                        <div>
                          Last updated: {app.lastUpdated}
                        </div>
                      </div>
                    </div>

                    {/* Sections */}
                    {isExpanded && (
                      <div className="p-6">
                        <div className="space-y-4">
                          {app.sections.map((section) => {
                            const actualStatus = getSectionStatus(app.id, section.id, section.status);
                            return (
                              <div 
                                key={section.id}
                                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-1">
                                    <h3 className="font-medium text-gray-900">{section.name}</h3>
                                    {getStatusBadge(actualStatus)}
                                  </div>
                                  {section.points > 0 && (
                                    <p className="text-sm text-gray-500">{section.points} points</p>
                                  )}
                                </div>
                              
                                <div className="flex items-center gap-2">
                                  {actualStatus === "complete" || actualStatus === "in-progress" ? (
                                    <Button 
                                      onClick={() => navigate(`/application/${app.id}/s/${section.id}`)}
                                      className="bg-teal-600 hover:bg-teal-700 text-white"
                                    >
                                      Continue
                                    </Button>
                                  ) : (
                                    <Button 
                                      onClick={() => navigate(`/application/${app.id}/s/${section.id}`)}
                                      variant="outline" 
                                      className="bg-white"
                                    >
                                      Start
                                    </Button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}