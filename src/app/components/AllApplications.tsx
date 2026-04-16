import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Building2,
  CheckCircle2,
  Circle,
  PlayCircle,
  MoreVertical,
  Plus,
  ArrowRight,
  FolderOpen,
  Check,
  FileDown,
  Eye
} from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

interface ApplicationSection {
  id: string;
  name: string;
  status: "not-started" | "in-progress" | "completed";
  steps: number;
  completedSteps: number;
}

interface Application {
  id: string;
  title: string;
  status: "not-started" | "in-progress" | "submitted" | "approved";
  organization: string;
  deadline: string;
  overallProgress: number;
  sections: ApplicationSection[];
  lastUpdated: string;
}

const mockApplications: Application[] = [
  {
    id: "1",
    title: "Administration for Community Living (ACL) - Assistive Technology Alternative Financing Program",
    status: "in-progress",
    organization: "Organization Name",
    deadline: "2026-03-15",
    overallProgress: 30,
    lastUpdated: "2 hours ago",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "in-progress", steps: 4, completedSteps: 2 },
      { id: "s2", name: "Focus Area", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s3", name: "Program Details", status: "in-progress", steps: 4, completedSteps: 1 },
      { id: "s4", name: "Performance Metrics", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s5", name: "Budget", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s6", name: "Narrative", status: "in-progress", steps: 4, completedSteps: 3 },
      { id: "s7", name: "Documents", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s8", name: "Compliance", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s9", name: "Eligibility", status: "not-started", steps: 4, completedSteps: 0 },
    ]
  },
  {
    id: "2",
    title: "FY26 National Network Cooperative Agreement to the National Railroad Passenger Corporation",
    status: "in-progress",
    organization: "Organization Name",
    deadline: "2026-04-30",
    overallProgress: 20,
    lastUpdated: "1 day ago",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "in-progress", steps: 4, completedSteps: 1 },
      { id: "s2", name: "Focus Area", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s3", name: "Program Details", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s4", name: "Performance Metrics", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s5", name: "Budget", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s6", name: "Narrative", status: "in-progress", steps: 4, completedSteps: 1 },
      { id: "s7", name: "Documents", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s8", name: "Compliance", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s9", name: "Eligibility", status: "not-started", steps: 4, completedSteps: 0 },
    ]
  },
  {
    id: "3",
    title: "Community Development Block Grant - Infrastructure Improvement Initiative",
    status: "not-started",
    organization: "Second Organization",
    deadline: "2026-05-20",
    overallProgress: 0,
    lastUpdated: "Never",
    sections: [
      { id: "s1", name: "Mission & Vision", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s2", name: "Focus Area", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s3", name: "Program Details", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s4", name: "Performance Metrics", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s5", name: "Budget", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s6", name: "Narrative", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s7", name: "Documents", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s8", name: "Compliance", status: "not-started", steps: 4, completedSteps: 0 },
      { id: "s9", name: "Eligibility", status: "not-started", steps: 4, completedSteps: 0 },
    ]
  }
];

interface Program {
  id: string;
  title: string;
  summary: string;
}

export function AllApplications() {
  const navigate = useNavigate();
  const [expandedApps, setExpandedApps] = useState<string[]>(["1"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [publishedPrograms, setPublishedPrograms] = useState<Program[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<Record<string, string[]>>({});
  
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

  const toggleExpand = (appId: string) => {
    setExpandedApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "not-started":
        return <Badge variant="outline" className="border-gray-300 text-gray-700 bg-gray-50">Not Started</Badge>;
      case "in-progress":
        return <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50">In Progress</Badge>;
      case "submitted":
        return <Badge variant="outline" className="border-purple-300 text-purple-700 bg-purple-50">Submitted</Badge>;
      case "approved":
        return <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">Approved</Badge>;
      default:
        return null;
    }
  };

  const getSectionIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "in-progress":
        return <PlayCircle className="w-5 h-5 text-blue-600" />;
      default:
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDeadlineColor = (days: number) => {
    if (days < 7) return "text-red-600";
    if (days < 30) return "text-orange-600";
    return "text-gray-600";
  };

  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.organization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/25">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12h6M9 16h6M12 3v2M8 3h8M5 7h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">All Applications</h1>
              <p className="text-gray-600 text-sm mt-0.5">Track and manage your grant applications</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="text-2xl font-semibold text-gray-900">3</div>
            <div className="text-sm text-gray-600 mt-1">Total Applications</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="text-2xl font-semibold text-blue-600">2</div>
            <div className="text-sm text-gray-600 mt-1">In Progress</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="text-2xl font-semibold text-green-600">0</div>
            <div className="text-sm text-gray-600 mt-1">Submitted</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="text-2xl font-semibold text-orange-600">1</div>
            <div className="text-sm text-gray-600 mt-1">Not Started</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search applications by name or organization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="not-started">Not Started</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="submitted">Submitted</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-teal-600 hover:bg-teal-700 gap-2">
              <Plus className="w-4 h-4" />
              New Application
            </Button>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((app) => {
            const isExpanded = expandedApps.includes(app.id);
            const daysUntilDeadline = getDaysUntilDeadline(app.deadline);
            const deadlineColor = getDeadlineColor(daysUntilDeadline);

            return (
              <div 
                key={app.id} 
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                {/* Application Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold text-gray-900 flex-1">{app.title}</h2>
                        {getStatusBadge(app.status)}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{app.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className={deadlineColor}>
                            Due {new Date(app.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            {daysUntilDeadline >= 0 && ` (${daysUntilDeadline} days left)`}
                          </span>
                        </div>
                        <div className="text-gray-500">
                          Last updated: {app.lastUpdated}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-700 font-medium">Overall Progress</span>
                          <span className="text-gray-900 font-semibold">{app.overallProgress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500"
                            style={{ width: `${app.overallProgress}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>
                            {app.sections.filter(s => s.status === "completed").length} of {app.sections.length} sections completed
                          </span>
                          <span>
                            {app.sections.reduce((acc, s) => acc + s.completedSteps, 0)} of {app.sections.reduce((acc, s) => acc + s.steps, 0)} steps
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Add Programs Feature */}
                      {publishedPrograms.length > 0 ? (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="gap-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50"
                            >
                              <FolderOpen className="w-4 h-4 text-teal-600" />
                              <span className="text-gray-700">Add Programs</span>
                              {selectedPrograms[app.id]?.length > 0 && (
                                <Badge className="ml-1 bg-teal-600 hover:bg-teal-700 text-white">
                                  {selectedPrograms[app.id].length}
                                </Badge>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-96" align="end">
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
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                                          isSelected 
                                            ? 'bg-teal-600 border-teal-600' 
                                            : 'border-gray-300 group-hover:border-teal-400'
                                        }`}>
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
                          className="gap-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50"
                          onClick={() => navigate('/project-details')}
                        >
                          <Plus className="w-4 h-4 text-teal-600" />
                          <span className="text-gray-700">Add Program</span>
                        </Button>
                      )}
                      
                      {/* Preview Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Preview
                      </Button>
                      
                      {/* Export Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <FileDown className="w-4 h-4" />
                        Export
                      </Button>
                      
                      <Button
                        onClick={() => toggleExpand(app.id)}
                        variant="ghost"
                        size="sm"
                        className="gap-2"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Collapse
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            Expand
                          </>
                        )}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Export PDF</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                {/* Expanded Sections */}
                {isExpanded && (
                  <div className="border-t border-gray-200 bg-gray-50 p-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Application Sections</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {app.sections.map((section) => {
                        const progress = (section.completedSteps / section.steps) * 100;
                        
                        return (
                          <div 
                            key={section.id}
                            className="bg-white rounded-lg border border-gray-200 p-4 hover:border-teal-300 hover:shadow-sm transition-all group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 flex-1">
                                {getSectionIcon(section.status)}
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-medium text-gray-900">{section.name}</h4>
                                    {section.status === "in-progress" && (
                                      <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50 text-xs">
                                        In Progress
                                      </Badge>
                                    )}
                                    {section.status === "not-started" && (
                                      <Badge variant="outline" className="border-orange-300 text-orange-700 bg-orange-50 text-xs">
                                        Not Started
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="flex-1 max-w-xs">
                                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div 
                                          className={`h-full rounded-full transition-all ${
                                            section.status === "completed" 
                                              ? "bg-green-500" 
                                              : section.status === "in-progress"
                                              ? "bg-blue-500"
                                              : "bg-gray-300"
                                          }`}
                                          style={{ width: `${progress}%` }}
                                        />
                                      </div>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                      {section.completedSteps} / {section.steps} steps
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <Button 
                                size="sm"
                                variant={section.status === "not-started" ? "outline" : "default"}
                                className={section.status === "not-started" 
                                  ? "" 
                                  : "bg-teal-600 hover:bg-teal-700"
                                }
                                onClick={() => navigate(`/application/${app.id}/s/${section.id}`)}
                              >
                                {section.status === "not-started" ? "Start" : "Continue"}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredApplications.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setFilterStatus("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}