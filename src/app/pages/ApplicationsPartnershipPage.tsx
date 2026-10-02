import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import {
  Calendar,
  ChevronUp,
  ChevronDown,
  MoreVertical,
  Archive,
  ArchiveRestore,
  Trash2,
  FileText,
  Download,
  Loader2,
  Sparkles,
  Check,
  Users,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/app/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
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
import { MarkApplicationSubmittedModal } from "@/app/components/MarkApplicationSubmittedModal";
import { SectionAssignmentControl } from "@/app/components/SectionAssignmentControl";

import { mockApplications, type Application, type Section } from "@/data/applications";
import { mockPartnerApplications, type PartnerApplication, type PartnershipStageId } from "@/data/partnerApplications";
import { useSectionAssignments } from "@/hooks/useSectionAssignments";
import { CURRENT_USER_ID, getOrgMember, orgMembers } from "@/data/orgMembers";

/**
 * /applications-partnership — same accordion-list hierarchy and filters as
 * /applications, but split into two clearly headed groups so grant work and
 * partner commitments never get confused for one another: "My Active
 * Grants" (this org's own applications, identical to /applications) and
 * "Active Partner Applications" (applications this org has been invited
 * into as a sub-recipient/partner — see partnerApplications.ts, modeled on
 * the Figma "Partner view" detail screen). The grouped-sections pattern is
 * intentionally generic so a third application type can join the same page
 * later without changing the layout.
 */
export function ApplicationsPartnershipPage() {
  const navigate = useNavigate();
  const [expandedApp, setExpandedApp] = useState<string>("1");
  const [expandedPartnerApp, setExpandedPartnerApp] = useState<string>("p1");
  const [currentView, setCurrentView] = useState<"active" | "submitted" | "archive">("active");
  const [archivedApps, setArchivedApps] = useState<string[]>([]);
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [selectedAppForExport, setSelectedAppForExport] = useState<Application | null>(null);
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [submittingAppId, setSubmittingAppId] = useState<string | null>(null);
  const [pendingSubmitAppId, setPendingSubmitAppId] = useState<string | null>(null);
  const [movingToActiveAppId, setMovingToActiveAppId] = useState<string | null>(null);
  const [archivingAppId, setArchivingAppId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  // "View By" filter — only narrows which sections show inside each grant
  // accordion (see visibleSections); partner applications aren't assigned
  // to individual org members the same way, so they're unaffected by it.
  const [viewByMemberId, setViewByMemberId] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const { getAssignment, assignSection, setReviewStatus } = useSectionAssignments(applications);

  // Intersection Observer for tracking active section during scroll
  useEffect(() => {
    if (!expandedApp) return;

    const observer = new IntersectionObserver(
      (entries) => {
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

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [expandedApp]);

  const setSectionRef = useCallback((sectionId: string) => {
    return (el: HTMLDivElement | null) => {
      sectionRefs.current[sectionId] = el;
    };
  }, []);

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

  const isSectionStarted = (appId: string, sectionId: string): boolean => {
    return localStorage.getItem(`app-${appId}-section-${sectionId}-started`) === "true";
  };

  const markSectionStarted = (appId: string, sectionId: string) => {
    localStorage.setItem(`app-${appId}-section-${sectionId}-started`, "true");
  };

  const getSectionStatus = (section: Section, appId: string): "complete" | "not-started" | "in-progress" => {
    if (section.id === "s7") {
      const fileCount = getUploadedFileCount(appId, section.id);
      if (fileCount > 0) {
        return "in-progress";
      }
    }
    if (section.status === "not-started" && isSectionStarted(appId, section.id)) {
      return "in-progress";
    }
    return section.status;
  };

  const visibleSections = (app: Application): Section[] => {
    if (!viewByMemberId) return app.sections;
    return app.sections.filter((section) => getAssignment(app.id, section.id).assigneeId === viewByMemberId);
  };

  const activeApplications = applications.filter(app => app.applicationStatus === "active" && !archivedApps.includes(app.id));
  const submittedApplications = applications.filter(app => app.applicationStatus === "submitted" && !archivedApps.includes(app.id));
  const archivedApplications = applications.filter(app => archivedApps.includes(app.id));

  const handleArchive = (appId: string) => {
    setArchivingAppId(appId);
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

  const handleMarkAsSubmitted = (appId: string) => {
    setSubmittingAppId(appId);
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

  // Partnership-stage badge — the current stage is highlighted green (an
  // MOU-committed partnership), every other stage reads as a neutral pill.
  const getStageBadge = (stageId: PartnershipStageId, label: string) => {
    if (stageId === "committed") {
      return (
        <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
          {label}
        </Badge>
      );
    }
    return (
      <Badge className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100">
        {label}
      </Badge>
    );
  };

  const getAssignedSectionBadge = (status: "assigned" | "in-progress" | "complete") => {
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
      default:
        return (
          <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50">
            Assigned
          </Badge>
        );
    }
  };

  const currentExpandedApp = applications.find(app => app.id === expandedApp);

  const currentApplications = currentView === "active" ? activeApplications : currentView === "submitted" ? submittedApplications : archivedApplications;
  // Partner applications don't yet model submitted/archived states (see
  // partnerApplications.ts) — the "Active Partner Applications" group only
  // shows on the Active tab, same scope as the Figma reference screen.
  const activePartnerApplications = currentView === "active" ? mockPartnerApplications : [];

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
                <BreadcrumbPage>Applications & Partnerships</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header — two rows, each split left/right, so the subtitle lines
              up horizontally with the "View By" filter beneath the tabs. */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <div className="mb-3">
                  <FileText className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h1 className="text-2xl text-gray-900" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
                  Applications & Partnerships
                </h1>
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
                  {(activeApplications.length + activePartnerApplications.length) > 0 && (
                    <Badge className="ml-2 bg-teal-600 text-white">
                      {activeApplications.length + activePartnerApplications.length}
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

            <div className="flex items-center justify-between gap-4">
              <p className="text-gray-600 text-sm">
                {currentView === "active"
                  ? "Manage your active grant applications and partner commitments"
                  : currentView === "submitted"
                  ? "View grant applications submitted for review"
                  : "View and manage archived applications"}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">View By:</span>
                <ViewByFilter value={viewByMemberId} onChange={setViewByMemberId} />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            {/* ------------------------------------------------------------ */}
            {/* My Active Grants / Submitted / Archived — this org's own    */}
            {/* applications, identical accordion behavior to /applications. */}
            {/* ------------------------------------------------------------ */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentView === "active" ? "My Active Grants" : currentView === "submitted" ? "Submitted Grants" : "Archived Grants"}
                </h2>
                <p className="text-sm text-gray-500">
                  {currentView === "active"
                    ? "Applications your organization is preparing as the prime applicant."
                    : currentView === "submitted"
                    ? "Applications your organization has submitted for review."
                    : "Applications your organization has archived."}
                </p>
              </div>

              {currentApplications.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    {currentView === "active" ? (
                      <FileText className="w-8 h-8 text-gray-400" />
                    ) : (
                      <Archive className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {currentView === "active" ? "No active grants" : currentView === "submitted" ? "No submitted grants" : "No archived grants"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {currentView === "active"
                      ? "All your grant applications have been archived."
                      : currentView === "submitted"
                      ? "Applications you submit will appear here."
                      : "Archived applications will appear here."}
                  </p>
                  {currentView === "active" && archivedApplications.length > 0 && (
                    <Button onClick={() => setCurrentView("archive")} variant="outline" className="mt-4">
                      <Archive className="w-4 h-4 mr-2" />
                      View archived applications
                    </Button>
                  )}
                </div>
              ) : (
                currentApplications.map((app) => {
                  const isExpanded = expandedApp === app.id;

                  return (
                    <div key={app.id} className="bg-white rounded-lg border border-gray-200 relative">
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
                              <h3 className="text-lg font-semibold text-gray-900">{app.title}</h3>
                              {app.applicationStatus === "submitted" && (
                                <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
                                  Submitted
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                  <MoreVertical className="w-5 h-5 text-gray-500" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-48">
                                {currentView === "active" ? (
                                  <DropdownMenuItem onClick={() => handleArchive(app.id)} className="gap-3 py-2.5 text-gray-700">
                                    <Archive className="w-4 h-4" />
                                    <span>Archive</span>
                                  </DropdownMenuItem>
                                ) : (
                                  <>
                                    <DropdownMenuItem onClick={() => handleUnarchive(app.id)} className="gap-3 py-2.5">
                                      <ArchiveRestore className="w-4 h-4" />
                                      <span>Unarchive</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => handleDelete(app.id)} className="gap-3 py-2.5 text-red-600 focus:text-red-600">
                                      <Trash2 className="w-4 h-4" />
                                      <span>Delete</span>
                                    </DropdownMenuItem>
                                  </>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>

                            <button
                              onClick={() => setExpandedApp(isExpanded ? "" : app.id)}
                              className="p-1 rounded hover:bg-gray-100"
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
                              <div>Original deadline: {app.dueDate}</div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Due {app.dueDate} ({app.daysLeft} days left)</span>
                              </div>
                              <div>Last updated: {app.lastUpdated}</div>
                            </>
                          )}
                        </div>

                        {currentView === "active" && app.applicationStatus === "active" && (
                          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                            <Link to="/project-details" className="text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline">
                              {app.programName}
                            </Link>

                            <div className="flex items-center gap-6">
                              {submittingAppId === app.id ? (
                                <div className="flex items-center gap-2 text-sm text-teal-700">
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  <span className="font-medium">Marking as submitted...</span>
                                </div>
                              ) : (
                                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
                                  <input
                                    type="checkbox"
                                    checked={false}
                                    onChange={() => setPendingSubmitAppId(app.id)}
                                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer"
                                  />
                                  <span className="font-medium">Mark as submitted</span>
                                </label>
                              )}

                              <Button
                                onClick={() => {
                                  setSelectedAppForExport(app);
                                  setExportDialogOpen(true);
                                }}
                                variant="outline"
                                size="sm"
                                className="bg-white"
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
                          {visibleSections(app).length === 0 ? (
                            <p className="text-sm text-gray-500 text-center py-6">
                              No sections assigned to {getOrgMember(viewByMemberId).name}.
                            </p>
                          ) : (
                            <div className="space-y-4">
                              {visibleSections(app).map((section) => {
                                const actualStatus = getSectionStatus(section, app.id);
                                const fileCount = section.id === "s7" ? getUploadedFileCount(app.id, section.id) : 0;
                                const assignment = getAssignment(app.id, section.id);

                                return (
                                  <div
                                    key={section.id}
                                    ref={setSectionRef(`${app.id}-${section.id}`)}
                                    data-section-id={section.id}
                                    data-section-name={section.name}
                                    data-section-status={actualStatus}
                                    className="py-3 border-b border-gray-100 last:border-b-0 scroll-mt-24"
                                  >
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                                          <h4 className="font-medium text-gray-900">{section.name}</h4>
                                          {section.aiEnhanced && (
                                            <Badge className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-300 hover:bg-purple-50">
                                              <Sparkles className="w-3.5 h-3.5 mr-1" />
                                              AI Enhanced
                                            </Badge>
                                          )}
                                          {getStatusBadge(actualStatus)}
                                          {section.id === "s7" && fileCount > 0 && (
                                            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200">
                                              <FileText className="w-3.5 h-3.5 text-teal-600" />
                                              <span className="text-xs font-semibold text-teal-700">{fileCount}</span>
                                            </div>
                                          )}
                                        </div>
                                        {section.points > 0 && (
                                          <p className="text-sm text-gray-500">{section.points} points</p>
                                        )}
                                      </div>

                                      <SectionAssignmentControl
                                        size="compact"
                                        assigneeId={assignment.assigneeId}
                                        reviewStatus={actualStatus === "not-started" ? null : assignment.reviewStatus}
                                        lastSavedAt={assignment.lastSavedAt}
                                        onAssign={(memberId) => assignSection(app.id, section.id, memberId)}
                                        onReviewStatusChange={(status) => setReviewStatus(app.id, section.id, status)}
                                      />
                                    </div>

                                    <div className="flex items-center justify-end gap-2 mt-3">
                                      {currentView === "archive" || app.applicationStatus === "submitted" ? (
                                        <Button variant="outline" className="bg-white">
                                          View
                                        </Button>
                                      ) : actualStatus === "complete" || actualStatus === "in-progress" ? (
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
                                            markSectionStarted(app.id, section.id);
                                            navigate(`/application/${app.id}/s/${section.id}`);
                                          }}
                                        >
                                          Start
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* ------------------------------------------------------------ */}
            {/* Active Partner Applications — applications this org has been */}
            {/* invited into as a partner/sub-recipient. Same accordion      */}
            {/* summary→expand pattern as the grants list above, with        */}
            {/* expanded content modeled on the Figma "Partner view"        */}
            {/* detail screen (Partnership status, Application access, Your  */}
            {/* role). Kept visually distinct via its own header so it's    */}
            {/* never mistaken for this org's own grant applications.       */}
            {/* ------------------------------------------------------------ */}
            {currentView === "active" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <h2 className="text-lg font-semibold text-gray-900">Active Partner Applications</h2>
                </div>
                <p className="text-sm text-gray-500 -mt-3">
                  Applications where your organization is a partner, not the prime applicant.
                </p>

                {activePartnerApplications.length === 0 ? (
                  <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                      <Users className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No partner applications</h3>
                    <p className="text-gray-600 text-sm">
                      Applications you're invited to partner on will appear here.
                    </p>
                  </div>
                ) : (
                  activePartnerApplications.map((partnerApp) => {
                    const isExpanded = expandedPartnerApp === partnerApp.id;
                    const currentStage = partnerApp.stages.find((s) => s.id === partnerApp.currentStage);
                    const nextDue = partnerApp.assignedSections[0];

                    return (
                      <div key={partnerApp.id} className="bg-white rounded-lg border border-gray-200">
                        {/* Partner Application Header */}
                        <div className="p-6 border-b border-gray-200">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <h3 className="text-lg font-semibold text-gray-900">{partnerApp.programName}</h3>
                                <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50">
                                  {partnerApp.roleBadge}
                                </Badge>
                                {currentStage && getStageBadge(currentStage.id, currentStage.label)}
                              </div>
                            </div>
                            <button
                              onClick={() => setExpandedPartnerApp(isExpanded ? "" : partnerApp.id)}
                              className="p-1 rounded hover:bg-gray-100"
                            >
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </button>
                          </div>

                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div>Prime applicant: {partnerApp.primeApplicant}</div>
                            {nextDue && (
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Due {nextDue.dueDate}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Expanded details — mirrors the Figma partner detail
                            screen's two-column layout (status + access on the
                            left, role summary on the right) inside the
                            accordion instead of on its own page. */}
                        {isExpanded && (
                          <div className="p-6 flex flex-col lg:flex-row gap-5 items-start">
                            <div className="flex-1 min-w-0 w-full space-y-4">
                              {/* Partnership status */}
                              <div className="border border-gray-200 rounded-xl p-5">
                                <h4 className="font-semibold text-gray-900 mb-4">Partnership status</h4>
                                <div className="grid grid-cols-4 gap-2">
                                  {partnerApp.stages.map((stage) => {
                                    const isCurrent = stage.id === partnerApp.currentStage;
                                    return (
                                      <div
                                        key={stage.id}
                                        className={`min-w-0 rounded-lg border px-2.5 py-2.5 ${
                                          isCurrent ? "bg-green-50 border-green-300" : "bg-gray-50 border-gray-200"
                                        }`}
                                      >
                                        <p className={`text-[13px] font-semibold truncate ${isCurrent ? "text-green-700" : "text-gray-700"}`}>
                                          {stage.label}
                                        </p>
                                        <p className="text-xs text-gray-500">{stage.date ?? "—"}</p>
                                      </div>
                                    );
                                  })}
                                </div>
                                {partnerApp.mouNote && (
                                  <p className="text-[13px] text-gray-600 mt-4">{partnerApp.mouNote}</p>
                                )}
                              </div>

                              {/* Application access */}
                              <div className="border border-gray-200 rounded-xl p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">Application access</h4>
                                <p className="text-sm text-gray-600 mb-4">
                                  You can read the application narrative and your own partnership details. Other
                                  partners' details and amounts aren't shown. Sections assigned to you:
                                </p>
                                <div className="space-y-3">
                                  {partnerApp.assignedSections.map((section) => (
                                    <div
                                      key={section.id}
                                      className="border border-gray-200 rounded-lg p-3 flex items-center gap-3"
                                    >
                                      <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-gray-900 text-sm">{section.name}</p>
                                        <p className="text-xs text-gray-500">
                                          Assigned by {section.assignedBy} · Due {section.dueDate}
                                        </p>
                                      </div>
                                      {getAssignedSectionBadge(section.status)}
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-white shrink-0"
                                        onClick={() => console.log("Open partner section:", partnerApp.id, section.id)}
                                      >
                                        Open section
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Your role */}
                            <div className="w-full lg:w-80 shrink-0 border border-gray-200 rounded-xl p-5 space-y-4">
                              <h4 className="font-semibold text-gray-900">Your role</h4>
                              <div>
                                <p className="text-xs text-gray-500">Need</p>
                                <p className="text-sm font-semibold text-gray-900">{partnerApp.need}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">MOU amount (set by {partnerApp.primeApplicant})</p>
                                <p className="text-sm font-semibold text-gray-900">{partnerApp.mouAmount}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Period</p>
                                <p className="text-sm font-semibold text-gray-900">{partnerApp.period}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Prime applicant</p>
                                <p className="text-sm font-semibold text-gray-900">{partnerApp.primeApplicant}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">NOFO deadline</p>
                                <p className="text-sm font-semibold text-gray-900">{partnerApp.nofoDeadline}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Rail — reflects the grants list only; partner applications
            have their own "Your role"/"Application access" summary inline. */}
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

      {/* Mark as Submitted Confirmation + Unlimited Upsell */}
      <MarkApplicationSubmittedModal
        open={pendingSubmitAppId !== null}
        onOpenChange={(next) => {
          if (!next) setPendingSubmitAppId(null);
        }}
        onConfirm={() => {
          if (pendingSubmitAppId) handleMarkAsSubmitted(pendingSubmitAppId);
          setPendingSubmitAppId(null);
        }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// "View By" filter — identical to the one on /applications, filtering which
// sections show inside each expanded grant accordion (see visibleSections).
// ---------------------------------------------------------------------------

function ViewByFilter({ value, onChange }: { value: string | null; onChange: (memberId: string | null) => void }) {
  const selectedMember = value ? getOrgMember(value) : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-white pl-1.5 pr-3 py-1 hover:bg-gray-50 hover:border-gray-300 transition-colors"
        >
          {selectedMember ? (
            <Avatar className="size-6">
              <AvatarFallback
                style={{ backgroundColor: selectedMember.avatarColor }}
                className="text-[10px] font-semibold text-gray-700"
              >
                {selectedMember.initials}
              </AvatarFallback>
            </Avatar>
          ) : (
            <span className="flex items-center justify-center size-6 rounded-full bg-gray-100 text-[9px] font-semibold text-gray-500 shrink-0">
              ALL
            </span>
          )}
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            {selectedMember ? selectedMember.name : "All Members"}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>Assigned to</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onChange(null)} className="gap-2.5 py-2">
          <span className="flex items-center justify-center size-6 rounded-full bg-gray-100 text-[9px] font-semibold text-gray-500 shrink-0">
            ALL
          </span>
          <span className="flex-1">All Members</span>
          {!value && <Check className="w-4 h-4 text-gray-900 shrink-0" />}
        </DropdownMenuItem>
        {orgMembers.map((member) => (
          <DropdownMenuItem key={member.id} onClick={() => onChange(member.id)} className="gap-2.5 py-2">
            <Avatar className="size-6 shrink-0">
              <AvatarFallback
                style={{ backgroundColor: member.avatarColor }}
                className="text-[10px] font-semibold text-gray-700"
              >
                {member.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="truncate">
                {member.name}
                {member.id === CURRENT_USER_ID && <span className="text-gray-400"> (you)</span>}
              </div>
              <div className="text-xs text-gray-400">{member.role}</div>
            </div>
            {value === member.id && <Check className="w-4 h-4 text-gray-900 shrink-0" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
