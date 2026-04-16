import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import {
  Calendar,
  ChevronUp,
  ChevronDown,
  MoreVertical,
  Archive,
  Printer,
  ArchiveRestore,
  Trash2,
  FileText,
  Download,
  Loader2,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FolderOpen,
  Check,
  Plus
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";
import { ExportApplicationDialog } from "@/app/components/ExportApplicationDialog";
import { ApplicationRightRail } from "@/app/components/ApplicationRightRail";

interface Section {
  id: string;
  name: string;
  status: "complete" | "not-started" | "in-progress";
  points: number;
  aiEnhanced?: boolean;
  lastEditedBy?: string;
  lastEditedTime?: string;
}

interface Application {
  id: string;
  title: string;
  status: string;
  dueDate: string;
  daysLeft: number;
  lastUpdated: string;
  sections: Section[];
  applicationStatus: "active" | "submitted" | "archived";
  submittedDate?: string;
}

interface Program {
  id: string;
  title: string;
  summary: string;
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
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10, aiEnhanced: true, lastEditedBy: "Allison M.", lastEditedTime: "2 hours ago" },
      { id: "s2", name: "Focus Area", status: "not-started", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "not-started", points: 30 },
      { id: "s5", name: "Budget", status: "not-started", points: 20 },
      { id: "s6", name: "Narrative", status: "in-progress", points: 10 },
      { id: "s7", name: "Documents", status: "not-started", points: 0 },
      { id: "s8", name: "Compliance", status: "not-started", points: 10 },
      { id: "s9", name: "Eligibility", status: "not-started", points: 5 },
    ],
    applicationStatus: "active"
  },
  {
    id: "2",
    title: "FY26 National Network Cooperative Agreement to the National Railroad Passenger Corporation",
    status: "In Progress",
    dueDate: "Mar 14, 2026",
    daysLeft: 47,
    lastUpdated: "Jan 26, 2026",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10, aiEnhanced: true, lastEditedBy: "Allison M.", lastEditedTime: "Jan 26, 2026" },
      { id: "s2", name: "Focus Area", status: "complete", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "complete", points: 30 },
      { id: "s5", name: "Budget", status: "complete", points: 20 },
      { id: "s6", name: "Narrative", status: "complete", points: 10 },
      { id: "s7", name: "Documents", status: "complete", points: 0 },
      { id: "s8", name: "Compliance", status: "complete", points: 10 },
      { id: "s9", name: "Eligibility", status: "complete", points: 5 },
    ],
    applicationStatus: "active"
  },
  {
    id: "3",
    title: "Community Development Block Grant - Disaster Recovery",
    status: "Submitted",
    dueDate: "Jan 15, 2026",
    daysLeft: 0,
    lastUpdated: "Jan 12, 2026",
    submittedDate: "Jan 12, 2026",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10, aiEnhanced: true, lastEditedBy: "Allison M.", lastEditedTime: "Jan 10, 2026" },
      { id: "s2", name: "Focus Area", status: "complete", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "complete", points: 30 },
      { id: "s5", name: "Budget", status: "complete", points: 20 },
      { id: "s6", name: "Narrative", status: "complete", points: 10 },
      { id: "s7", name: "Documents", status: "complete", points: 0 },
      { id: "s8", name: "Compliance", status: "complete", points: 10 },
      { id: "s9", name: "Eligibility", status: "complete", points: 5 },
    ],
    applicationStatus: "submitted"
  },
  {
    id: "4",
    title: "Environmental Protection Agency - Environmental Justice Grant",
    status: "Submitted",
    dueDate: "Dec 20, 2025",
    daysLeft: 0,
    lastUpdated: "Dec 18, 2025",
    submittedDate: "Dec 18, 2025",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "complete", points: 10, aiEnhanced: true, lastEditedBy: "Allison M.", lastEditedTime: "Dec 15, 2025" },
      { id: "s2", name: "Focus Area", status: "complete", points: 20 },
      { id: "s3", name: "Program Details", status: "complete", points: 20 },
      { id: "s4", name: "Performance Metrics", status: "complete", points: 30 },
      { id: "s5", name: "Budget", status: "complete", points: 20 },
      { id: "s6", name: "Narrative", status: "complete", points: 10 },
      { id: "s7", name: "Documents", status: "complete", points: 0 },
      { id: "s8", name: "Compliance", status: "complete", points: 10 },
      { id: "s9", name: "Eligibility", status: "complete", points: 5 },
    ],
    applicationStatus: "submitted"
  }
];

export function ApplicationsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [expandedApp, setExpandedApp] = useState<string>("1");
  const [currentView, setCurrentView] = useState<"active" | "submitted" | "archive">("active");
  const [archivedApps, setArchivedApps] = useState<string[]>([]);
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [selectedAppForExport, setSelectedAppForExport] = useState<Application | null>(null);
  const [pendingAppProgress, setPendingAppProgress] = useState(0);
  const [pendingAppReady, setPendingAppReady] = useState(false);
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [submittingAppId, setSubmittingAppId] = useState<string | null>(null);
  const [movingToActiveAppId, setMovingToActiveAppId] = useState<string | null>(null);
  const [archivingAppId, setArchivingAppId] = useState<string | null>(null);
  const [publishedPrograms, setPublishedPrograms] = useState<Program[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<Record<string, string[]>>({});
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  const newApplicationPending = searchParams.get("newApplication") === "pending";
  const pendingGrantId = searchParams.get("grantId");
  
  // Load published programs from localStorage
  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem("projects");
      if (storedProjects) {
        const projects = JSON.parse(storedProjects);
        const published = projects
          .filter((p: any) => p.status === "published")
          .map((p: any) => ({
            id: p.id,
            title: p.title,
            summary: p.summary || "",
          }));
        setPublishedPrograms(published);
      }
    } catch (error) {
      console.error("Failed to load programs:", error);
    }
  }, []);

  // Intersection Observer for tracking active section during scroll
  useEffect(() => {
    if (!expandedApp) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible entry
        let mostVisibleEntry = entries[0];
        let maxVisibility = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio;
            mostVisibleEntry = entry;
          }
        });

        if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
          const sectionId = mostVisibleEntry.target.getAttribute('data-section-id');
          const sectionName = mostVisibleEntry.target.getAttribute('data-section-name');
          const sectionStatus = mostVisibleEntry.target.getAttribute('data-section-status');

          if (sectionId && sectionName && sectionStatus) {
            setActiveSection({
              id: sectionId,
              name: sectionName,
              status: sectionStatus
            });
          }
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    // Observe all section elements
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [expandedApp]);

  // Callback ref for sections
  const setSectionRef = useCallback((sectionId: string) => {
    return (el: HTMLDivElement | null) => {
      sectionRefs.current[sectionId] = el;
    };
  }, []);
  
  // Toggle program selection for an application
  const toggleProgramSelection = (appId: string, programId: string) => {
    setSelectedPrograms(prev => {
      const current = prev[appId] || [];
      const isSelected = current.includes(programId);
      
      return {
        ...prev,
        [appId]: isSelected
          ? current.filter(id => id !== programId)
          : [...current, programId]
      };
    });
  };

  // Helper function to get uploaded file count from localStorage
  const getUploadedFileCount = (appId: string, sectionId: string): number => {
    const storageKey = `app-${appId}-section-${sectionId}-files`;
    const savedFiles = localStorage.getItem(storageKey);
    if (savedFiles) {
      try {
        const files = JSON.parse(savedFiles);
        return Array.isArray(files) ? files.length : 0;
      } catch {
        return 0;
      }
    }
    return 0;
  };

  // Helper function to get section status based on uploaded files
  const getSectionStatus = (section: Section, appId: string): "complete" | "not-started" | "in-progress" => {
    if (section.id === "s7") {
      const fileCount = getUploadedFileCount(appId, section.id);
      if (fileCount > 0) {
        return "in-progress";
      }
    }
    return section.status;
  };

  // Simulate progress for pending application
  useEffect(() => {
    if (!newApplicationPending) return;
    
    setExpandedApp("pending");
    
    // Simulate AI generation progress
    const progressInterval = setInterval(() => {
      setPendingAppProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          // After reaching 95%, mark as ready after a delay
          setTimeout(() => {
            setPendingAppReady(true);
          }, 2000);
          return 95;
        }
        // Gradual progress
        const increment = prev < 30 ? 3 : prev < 60 ? 2 : prev < 80 ? 1 : 0.5;
        return Math.min(prev + increment, 95);
      });
    }, 500);
    
    return () => clearInterval(progressInterval);
  }, [newApplicationPending]);

  const activeApplications = applications.filter(app => app.applicationStatus === "active" && !archivedApps.includes(app.id));
  const submittedApplications = applications.filter(app => app.applicationStatus === "submitted" && !archivedApps.includes(app.id));
  const archivedApplications = applications.filter(app => archivedApps.includes(app.id));
  
  const handleArchive = (appId: string) => {
    setArchivingAppId(appId);
    // Delay the archive action to show the loader
    setTimeout(() => {
      setArchivedApps([...archivedApps, appId]);
      if (expandedApp === appId) {
        setExpandedApp("");
      }
      setArchivingAppId(null);
    }, 1500);
  };
  
  const handleUnarchive = (appId: string) => {
    setArchivedApps(archivedApps.filter(id => id !== appId));
  };
  
  const handleDelete = (appId: string) => {
    console.log("Delete application:", appId);
    setArchivedApps(archivedApps.filter(id => id !== appId));
  };
  
  const handlePrint = (appId: string) => {
    console.log("Print application:", appId);
    window.print();
  };
  
  const handleMarkAsSubmitted = (appId: string) => {
    setSubmittingAppId(appId);
    // Delay the state update to show the loader
    setTimeout(() => {
      setApplications(applications.map(app => {
        if (app.id === appId) {
          return {
            ...app,
            applicationStatus: "submitted" as const,
            status: "Submitted",
            submittedDate: "Mar 3, 2026",
            sections: app.sections.map(section => ({
              ...section,
              status: "complete" as const
            }))
          };
        }
        return app;
      }));
      setSubmittingAppId(null);
    }, 1500);
  };
  
  const handleMoveToActive = (appId: string) => {
    setMovingToActiveAppId(appId);
    // Delay the state update to show the loader
    setTimeout(() => {
      setApplications(applications.map(app => {
        if (app.id === appId) {
          const { submittedDate, ...rest } = app;
          return {
            ...rest,
            applicationStatus: "active" as const,
            status: "In Progress",
          };
        }
        return app;
      }));
      setMovingToActiveAppId(null);
    }, 1500);
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return (
          <Badge className="bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-50">
            In Progress
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

  // Get current application for right rail
  const currentExpandedApp = applications.find(app => app.id === expandedApp);

  return (
    <div className="max-w-[1400px] mx-auto p-8">
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
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
            <BreadcrumbPage>Applications</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="mb-3">
              <FileText
                className="w-8 h-8"
                strokeWidth={1.5}
              />
            </div>
            <h1 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
              {currentView === "active" ? "All Applications" : currentView === "submitted" ? "Submitted Applications" : "Archived Applications"}
            </h1>
            <p className="text-gray-600 text-sm">
              {currentView === "active"
                ? "Manage your active grant applications"
                : currentView === "submitted"
                ? "View applications submitted for review"
                : "View and manage archived applications"}
            </p>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setCurrentView("active")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === "active"
                  ? "bg-white text-gray-900 shadow-sm"
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
              onClick={() => setCurrentView("submitted")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === "submitted"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Submitted
              {submittedApplications.length > 0 && (
                <Badge className="ml-2 bg-gray-600 text-white">
                  {submittedApplications.length}
                </Badge>
              )}
            </button>
            <button
              onClick={() => setCurrentView("archive")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === "archive"
                  ? "bg-white text-gray-900 shadow-sm"
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
      </div>

      {/* Applications */}
      <div className="space-y-4">
        {/* Pending AI Application Card */}
        {newApplicationPending && currentView === "active" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-purple-50 via-white to-teal-50 rounded-lg border-2 border-purple-200 overflow-hidden"
          >
            {/* Application Header */}
            <div className="p-6 border-b border-purple-200 bg-white">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Faith-Based Community Development Grants
                    </h2>
                    {pendingAppReady ? (
                      <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50 animate-pulse">
                        <Zap className="w-3 h-3 mr-1" />
                        Ready!
                      </Badge>
                    ) : (
                      <Badge className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-50">
                        <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                        Generating
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setExpandedApp(expandedApp === "pending" ? "" : "pending")}
                    className="p-1 hover:bg-purple-100 rounded transition-colors"
                  >
                    {expandedApp === "pending" ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-600" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Due Jun 30, 2026 (120 days left)</span>
                </div>
                <div>
                  {pendingAppReady ? "Ready to start" : "AI drafting in progress..."}
                </div>
              </div>

              {/* Progress Bar */}
              {!pendingAppReady && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-purple-700">Creating your application</span>
                    <span className="text-xs font-semibold text-purple-600">{Math.round(pendingAppProgress)}%</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pendingAppProgress}%` }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-gradient-to-r from-purple-600 to-teal-600 rounded-full relative"
                    >
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>

            {/* Sections */}
            {expandedApp === "pending" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-white"
              >
                {pendingAppReady ? (
                  <div className="mb-6 p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-200">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-10 h-10 text-green-600 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-900 mb-2">Your Application is Ready!</h3>
                        <p className="text-sm text-green-700 leading-relaxed mb-4">
                          We've analyzed your organization profile and drafted a personalized application. Review the sections below and start filling in the details.
                        </p>
                        <Button 
                          onClick={() => {
                            // Convert the pending application to an active application
                            setPendingAppReady(false);
                            setPendingAppProgress(0);
                            setExpandedApp("3");
                            // Remove the URL parameter to hide the pending card
                            window.history.replaceState({}, '', '/applications');
                          }}
                          className="bg-teal-600 hover:bg-teal-700 text-white"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="flex items-start gap-4">
                      <Loader2 className="w-10 h-10 text-purple-600 flex-shrink-0 animate-spin" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-purple-900 mb-2">AI is Creating Your Application</h3>
                        <p className="text-sm text-purple-700 leading-relaxed">
                          We're analyzing your organization's profile, grant requirements, and generating personalized content. This typically takes 2-3 minutes. You can check back anytime!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="space-y-4">
                  {[
                    { name: "Mission & Vision", points: 10 },
                    { name: "Focus Area", points: 15 },
                    { name: "Program Details", points: 20 },
                    { name: "Performance Metrics", points: 15 },
                    { name: "Budget", points: 20 },
                    { name: "Narrative", points: 25 },
                    { name: "Documents", points: 10 },
                    { name: "Compliance", points: 15 },
                    { name: "Eligibility", points: 10 }
                  ].map((section, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 opacity-50"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-medium text-gray-900">{section.name}</h3>
                          <Badge className="bg-gray-100 text-gray-500 border-gray-200">
                            Pending
                          </Badge>
                        </div>
                        {section.points > 0 && (
                          <p className="text-sm text-gray-500">{section.points} points</p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          className="bg-white cursor-not-allowed" 
                          disabled
                        >
                          {pendingAppReady ? "Start" : "Locked"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {(currentView === "active" ? activeApplications : currentView === "submitted" ? submittedApplications : archivedApplications).length === 0 && !newApplicationPending ? (
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
          (currentView === "active" ? activeApplications : currentView === "submitted" ? submittedApplications : archivedApplications).map((app) => {
            const isExpanded = expandedApp === app.id;
            
            return (
              <div key={app.id} className="bg-white rounded-lg border border-gray-200 relative">
                {/* Archive Loading Overlay */}
                {archivingAppId === app.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-white z-10 rounded-lg flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="w-8 h-8 text-gray-600 animate-spin" />
                      <div className="text-center">
                        <p className="text-sm font-semibold text-gray-900">Archiving Application</p>
                        <p className="text-xs text-gray-600 mt-1">Moving to archive...</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Application Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-lg font-semibold text-gray-900">
                          {app.title}
                        </h2>
                        {app.applicationStatus === "submitted" && (
                          <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
                            Submitted
                          </Badge>
                        )}
                      </div>
                    </div>
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
                    {app.applicationStatus === "submitted" ? (
                      <>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Submitted on {app.submittedDate}</span>
                        </div>
                        <div>
                          Original deadline: {app.dueDate}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Due {app.dueDate} ({app.daysLeft} days left)</span>
                        </div>
                        <div>
                          Last updated: {app.lastUpdated}
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Status Change Checkbox */}
                  {currentView === "active" && app.applicationStatus === "active" && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        {submittingAppId === app.id ? (
                          <div className="flex items-center gap-2 text-sm text-teal-700">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="font-medium">Marking as submitted...</span>
                          </div>
                        ) : (
                          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
                            <input
                              type="checkbox"
                              onChange={() => handleMarkAsSubmitted(app.id)}
                              className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer"
                            />
                            <span className="font-medium">Mark as submitted</span>
                          </label>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-6">
                        {/* Add Programs Feature */}
                        {publishedPrograms.length > 0 ? (
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="gap-1.5 border-teal-200 hover:border-teal-300 hover:bg-teal-50"
                              >
                                <FolderOpen className="w-4 h-4 text-teal-600" />
                                <span className="text-gray-700">Add Programs</span>
                                {selectedPrograms[app.id]?.length > 0 && (
                                  <Badge className="ml-1 bg-teal-600 hover:bg-teal-700 text-white text-xs px-1.5">
                                    {selectedPrograms[app.id].length}
                                  </Badge>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[420px]" align="end">
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    Add Programs to Application
                                  </h4>
                                  <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    Applying programs to your application makes the application process that much more seamless.
                                  </p>
                                </div>
                                
                                <div className="border-t border-gray-200 pt-3">
                                  <p className="text-xs font-medium text-gray-700 mb-3 uppercase tracking-wide" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    Select Programs
                                  </p>
                                  <div className="space-y-2 max-h-64 overflow-y-auto">
                                    {publishedPrograms.map((program) => {
                                      const isSelected = selectedPrograms[app.id]?.includes(program.id) || false;
                                      
                                      return (
                                        <div
                                          key={program.id}
                                          onClick={() => toggleProgramSelection(app.id, program.id)}
                                          className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50/50 cursor-pointer transition-all group"
                                        >
                                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${isSelected ? 'bg-teal-600 border-teal-600' : 'border-gray-300 group-hover:border-teal-400'}`}>
                                            {isSelected && <Check className="w-3 h-3 text-white" />}
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 text-sm mb-1 line-clamp-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                              {program.title}
                                            </p>
                                            {program.summary && (
                                              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                                {program.summary}
                                              </p>
                                            )}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                                
                                {selectedPrograms[app.id]?.length > 0 && (
                                  <div className="border-t border-gray-200 pt-3">
                                    <p className="text-xs text-teal-700 bg-teal-50 rounded-lg p-2 border border-teal-200" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                      ✓ {selectedPrograms[app.id].length} {selectedPrograms[app.id].length === 1 ? 'program' : 'programs'} selected
                                    </p>
                                  </div>
                                )}
                              </div>
                            </PopoverContent>
                          </Popover>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1.5 border-teal-200 hover:border-teal-300 hover:bg-teal-50"
                            onClick={() => navigate('/project-details')}
                          >
                            <Plus className="w-4 h-4 text-teal-600" />
                            <span className="text-gray-700">Add Program</span>
                          </Button>
                        )}
                        
                        {/* Export Button aligned to the right */}
                        <Button
                          onClick={() => {
                            setSelectedAppForExport(app);
                            setExportDialogOpen(true);
                          }}
                          variant={app.id === "2" ? "default" : "outline"}
                          size="sm"
                          className={app.id === "2" ? "bg-teal-600 hover:bg-teal-700 text-white" : "bg-white"}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Preview / Export
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {currentView === "submitted" && app.applicationStatus === "submitted" && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      {movingToActiveAppId === app.id ? (
                        <div className="flex items-center gap-2 text-sm text-teal-700">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="font-medium">Moving to active...</span>
                        </div>
                      ) : (
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
                          <input
                            type="checkbox"
                            onChange={() => handleMoveToActive(app.id)}
                            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer"
                          />
                          <span className="font-medium">Move to Active</span>
                        </label>
                      )}
                    </div>
                  )}
                </div>

                {/* Sections */}
                {isExpanded && (
                  <div className="p-6">
                    <div className="space-y-4">
                      {app.sections.map((section) => {
                        const actualStatus = getSectionStatus(section, app.id);
                        const fileCount = section.id === "s7" ? getUploadedFileCount(app.id, section.id) : 0;
                        
                        return (
                          <div
                            key={section.id}
                            ref={setSectionRef(`${app.id}-${section.id}`)}
                            data-section-id={section.id}
                            data-section-name={section.name}
                            data-section-status={actualStatus}
                            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 scroll-mt-24"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h3 className="font-medium text-gray-900">{section.name}</h3>
                                {section.aiEnhanced && (
                                  <Badge className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-300 hover:bg-purple-50">
                                    <Sparkles className="w-3.5 h-3.5 mr-1" />
                                    AI Enhanced
                                  </Badge>
                                )}
                                {getStatusBadge(actualStatus)}
                                {section.id === "s7" && fileCount > 0 && (
                                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200">
                                    <svg className="w-3.5 h-3.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <FileText className="w-3.5 h-3.5 text-teal-600" />
                                    <span className="text-xs font-semibold text-teal-700">{fileCount}</span>
                                  </div>
                                )}
                              </div>
                              <div className="flex items-center gap-6">
                                {section.points > 0 && (
                                  <p className="text-sm text-gray-500">{section.points} points</p>
                                )}
                                {/* Last Edited Info - HIDDEN */}
                                {/* {section.lastEditedBy && section.lastEditedTime && (
                                  <>
                                    {section.points > 0 && <span className="text-gray-300">|</span>}
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm text-gray-500">Last Edited: {section.lastEditedBy} - {section.lastEditedTime}</span>
                                      <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                                        <img
                                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                                          alt={section.lastEditedBy}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    </div>
                                  </>
                                )} */}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {currentView === "archive" || app.applicationStatus === "submitted" ? (
                                <Button variant="outline" className="bg-white">
                                  View
                                </Button>
                              ) : (
                                actualStatus === "complete" || actualStatus === "in-progress" ? (
                                  <Button 
                                    className="bg-teal-600 hover:bg-teal-700 text-white"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      navigate(`/application/${app.id}/s/${section.id}`);
                                    }}
                                  >
                                    Continue
                                  </Button>
                                ) : (
                                  <Button 
                                    variant="outline" 
                                    className="bg-white"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      navigate(`/application/${app.id}/s/${section.id}`);
                                    }}
                                  >
                                    Start
                                  </Button>
                                )
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

        {/* Right Rail */}
        {currentView === "active" && activeApplications.length > 0 && (
          <ApplicationRightRail
            applicationId={expandedApp || activeApplications[0].id}
            applicationTitle={currentExpandedApp?.title || activeApplications[0].title}
            activeSection={activeSection || (expandedApp && currentExpandedApp ? currentExpandedApp.sections[0] : activeApplications[0].sections[0])}
            isExpanded={!!expandedApp}
            sections={currentExpandedApp?.sections || activeApplications[0].sections}
            allApplications={activeApplications}
          />
        )}
      </div>

      {/* Export Application Dialog */}
      {selectedAppForExport && (
        <ExportApplicationDialog
          isOpen={exportDialogOpen}
          onClose={() => {
            setExportDialogOpen(false);
            setSelectedAppForExport(null);
          }}
          applicationTitle={selectedAppForExport.title}
          applicationId={selectedAppForExport.id}
        />
      )}
    </div>
  );
}