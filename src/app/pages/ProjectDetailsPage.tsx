import { useState, useEffect } from "react";
import { FolderOpen, Plus, MapPin, Users, Upload, X, FileText, Edit2, Trash2, ChevronDown, ChevronUp, AlertCircle, FileCheck, Archive, Clock, Send, ArrowRight, DollarSign, Target, Briefcase, Shield, UserCircle2, Check } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "../components/ui/breadcrumb";

interface DocumentationItem {
  id: string;
  title: string;
  type: "Past Documentation" | "Future Planning Materials";
  category: string; // "Impact & Results", "Financial History", "Organizational Docs", "Compliance" for Past; "Program Plan", "Budget & Funding", "Impact Goals", "Execution Plan" for Future
  description: string;
  fileName?: string;
}

interface Location {
  id: string;
  name: string;
  type: "City" | "State" | "Region" | "Country";
  country: string;
  notes?: string;
}

interface PopulationCategory {
  id: string;
  name: string;
  isCustom?: boolean;
}

interface Project {
  id: string;
  title: string;
  summary: string;
  documentation: DocumentationItem[];
  locations: Location[];
  selectedPopulations: PopulationCategory[];
  allPopulations: PopulationCategory[];
  estimatedServed: string;
  status: "published";
  publishedAt?: number;
  lastUpdatedAt: number;
  createdAt: number;
  selectedApplications?: string[];
}

interface Application {
  id: string;
  title: string;
  status: string;
  applicationStatus: "active" | "submitted" | "archived";
}

const predefinedPopulations: PopulationCategory[] = [
  { id: "children-youth", name: "Children / Youth" },
  { id: "homeless", name: "Homeless Individuals" },
  { id: "seniors", name: "Seniors / Elderly" },
  { id: "disabilities", name: "People with Disabilities" },
  { id: "immigrants", name: "Immigrants / Refugees" },
  { id: "veterans", name: "Veterans" },
  { id: "low-income", name: "Low-Income Families" },
  { id: "indigenous", name: "Indigenous Communities" },
];

// Helper to format timestamps
const formatTimestamp = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  
  return new Date(timestamp).toLocaleDateString();
};

export function ProjectDetailsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);

  // Current project being edited
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({
    title: "",
    summary: "",
    documentation: [],
    locations: [],
    selectedPopulations: [],
    allPopulations: predefinedPopulations,
    estimatedServed: "",
    status: "published",
    selectedApplications: [],
  });

  // Modal states
  const [showDocumentationModal, setShowDocumentationModal] = useState(false);
  const [documentationType, setDocumentationType] = useState<"Past Documentation" | "Future Planning Materials">("Past Documentation");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  // Editing states for items within project
  const [editingDocId, setEditingDocId] = useState<string | null>(null);
  const [editingLocationId, setEditingLocationId] = useState<string | null>(null);

  // Form states
  const [docForm, setDocForm] = useState({
    title: "",
    description: "",
    category: "",
    fileName: "",
  });

  const [locationForm, setLocationForm] = useState({
    name: "",
    type: "City" as "City" | "State" | "Region" | "Country",
    country: "USA",
    notes: "",
  });

  const [customCategory, setCustomCategory] = useState("");

  // Sync published count to localStorage for nav
  useEffect(() => {
    const publishedCount = projects.filter(p => p.status === "published").length;
    localStorage.setItem("publishedProjectsCount", publishedCount.toString());
    localStorage.setItem("projects", JSON.stringify(projects));
    window.dispatchEvent(new Event("projectsUpdated"));
  }, [projects]);

  // Load active and submitted applications (mock data that matches ApplicationsPage)
  useEffect(() => {
    // In a real app, this would come from a shared state or API
    // For now, we'll use mock data that represents active applications
    const mockApps: Application[] = [
      {
        id: "1",
        title: "Administration for Community Living (ACL) - Assistive Technology Alternative Financing Program",
        status: "In Progress",
        applicationStatus: "active"
      },
      {
        id: "2",
        title: "FY26 National Network Cooperative Agreement to the National Railroad Passenger Corporation",
        status: "In Progress",
        applicationStatus: "active"
      },
      {
        id: "3",
        title: "Community Development Block Grant - Disaster Recovery",
        status: "Submitted",
        applicationStatus: "submitted"
      },
      {
        id: "4",
        title: "Environmental Protection Agency - Environmental Justice Grant",
        status: "Submitted",
        applicationStatus: "submitted"
      }
    ];
    setApplications(mockApps.filter(app => app.applicationStatus === "active" || app.applicationStatus === "submitted"));
  }, []);

  // Toggle application selection
  const toggleApplicationSelection = (applicationId: string) => {
    const selected = currentProject.selectedApplications || [];
    if (selected.includes(applicationId)) {
      setCurrentProject({
        ...currentProject,
        selectedApplications: selected.filter(id => id !== applicationId)
      });
    } else {
      setCurrentProject({
        ...currentProject,
        selectedApplications: [...selected, applicationId]
      });
    }
  };

  const handleStartNewProject = () => {
    setIsCreatingProject(true);
    setEditingProjectId(null);
    setCurrentProject({
      title: "",
      summary: "",
      documentation: [],
      locations: [],
      selectedPopulations: [],
      allPopulations: predefinedPopulations,
      estimatedServed: "",
      status: "published",
      selectedApplications: [],
    });
  };

  const handleEditProject = (project: Project) => {
    setEditingProjectId(project.id);
    setIsCreatingProject(true);
    setCurrentProject({ ...project });
  };

  const handleSaveDraft = () => {
    if (!currentProject.title || !currentProject.summary) {
      alert("Please enter a program title and summary before saving.");
      return;
    }

    const now = Date.now();
    
    if (editingProjectId) {
      // Update existing project
      setProjects(projects.map(p => 
        p.id === editingProjectId 
          ? { ...p, ...currentProject, lastUpdatedAt: now } as Project
          : p
      ));
    } else {
      // Create new draft
      const newProject: Project = {
        id: now.toString(),
        title: currentProject.title!,
        summary: currentProject.summary!,
        documentation: currentProject.documentation || [],
        locations: currentProject.locations || [],
        selectedPopulations: currentProject.selectedPopulations || [],
        allPopulations: currentProject.allPopulations || predefinedPopulations,
        estimatedServed: currentProject.estimatedServed || "",
        status: "published",
        lastUpdatedAt: now,
        createdAt: now,
      };
      setProjects([...projects, newProject]);
    }
    
    // Close the creation form and show the draft in the list
    setIsCreatingProject(false);
    setEditingProjectId(null);
  };

  const handlePublishProject = () => {
    if (!currentProject.title || !currentProject.summary) {
      alert("Please enter a program title and summary before publishing.");
      return;
    }

    const now = Date.now();
    
    if (editingProjectId) {
      // Publish existing project
      setProjects(projects.map(p => 
        p.id === editingProjectId 
          ? { 
              ...p, 
              ...currentProject, 
              status: "published" as const,
              publishedAt: p.status === "published" ? p.publishedAt : now,
              lastUpdatedAt: now 
            } as Project
          : p
      ));
    } else {
      // Create and publish new project
      const newProject: Project = {
        id: now.toString(),
        title: currentProject.title!,
        summary: currentProject.summary!,
        documentation: currentProject.documentation || [],
        locations: currentProject.locations || [],
        selectedPopulations: currentProject.selectedPopulations || [],
        allPopulations: currentProject.allPopulations || predefinedPopulations,
        estimatedServed: currentProject.estimatedServed || "",
        status: "published",
        publishedAt: now,
        lastUpdatedAt: now,
        createdAt: now,
      };
      setProjects([...projects, newProject]);
    }
    
    setIsCreatingProject(false);
    setEditingProjectId(null);
  };

  const handleCancelEdit = () => {
    setIsCreatingProject(false);
    setEditingProjectId(null);
    setCurrentProject({
      title: "",
      summary: "",
      documentation: [],
      locations: [],
      selectedPopulations: [],
      allPopulations: predefinedPopulations,
      estimatedServed: "",
      status: "published",
      selectedApplications: [],
    });
  };

  const handleDeleteProject = (projectId: string) => {
    setProjectToDelete(projectId);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteProject = () => {
    if (projectToDelete) {
      setProjects(projects.filter(p => p.id !== projectToDelete));
      setProjectToDelete(null);
      setShowDeleteConfirm(false);
    }
  };

  // Documentation handlers
  const handleEditDoc = (doc: DocumentationItem) => {
    setEditingDocId(doc.id);
    setDocForm({
      title: doc.title,
      description: doc.description,
      category: doc.category,
      fileName: doc.fileName || "",
    });
    setDocumentationType(doc.type);
    setShowDocumentationModal(true);
  };

  const handleAddDocumentation = () => {
    if (docForm.title && docForm.description) {
      const now = Date.now();
      if (editingDocId) {
        setCurrentProject({
          ...currentProject,
          documentation: currentProject.documentation?.map(d =>
            d.id === editingDocId ? { ...d, ...docForm, type: documentationType } : d
          ),
        });
        setEditingDocId(null);
      } else {
        setCurrentProject({
          ...currentProject,
          documentation: [
            ...(currentProject.documentation || []),
            { id: now.toString(), ...docForm, type: documentationType },
          ],
        });
      }
      setDocForm({ title: "", description: "", category: "", fileName: "" });
      setShowDocumentationModal(false);
    }
  };

  const handleAddAndContinue = () => {
    if (docForm.title && docForm.description) {
      const now = Date.now();
      setCurrentProject({
        ...currentProject,
        documentation: [
          ...(currentProject.documentation || []),
          { id: now.toString(), ...docForm, type: documentationType },
        ],
      });
      setDocForm({ title: "", description: "", category: "", fileName: "" });
      // Keep modal open
    }
  };

  const handleRemoveDoc = (docId: string) => {
    setCurrentProject({
      ...currentProject,
      documentation: currentProject.documentation?.filter(d => d.id !== docId),
    });
  };

  // Location handlers
  const handleEditLocation = (location: Location) => {
    setEditingLocationId(location.id);
    setLocationForm({
      name: location.name,
      type: location.type,
      country: location.country,
      notes: location.notes || "",
    });
    setShowLocationModal(true);
  };

  const handleAddLocation = () => {
    if (locationForm.name) {
      const now = Date.now();
      if (editingLocationId) {
        setCurrentProject({
          ...currentProject,
          locations: currentProject.locations?.map(l =>
            l.id === editingLocationId ? { ...l, ...locationForm } : l
          ),
        });
        setEditingLocationId(null);
      } else {
        setCurrentProject({
          ...currentProject,
          locations: [
            ...(currentProject.locations || []),
            { id: now.toString(), ...locationForm },
          ],
        });
      }
      setLocationForm({ name: "", type: "City", country: "USA", notes: "" });
      setShowLocationModal(false);
    }
  };

  const handleRemoveLocation = (locationId: string) => {
    setCurrentProject({
      ...currentProject,
      locations: currentProject.locations?.filter(l => l.id !== locationId),
    });
  };

  // Population handlers
  const handleTogglePopulation = (population: PopulationCategory) => {
    const selected = currentProject.selectedPopulations || [];
    if (selected.find(p => p.id === population.id)) {
      setCurrentProject({
        ...currentProject,
        selectedPopulations: selected.filter(p => p.id !== population.id),
      });
    } else {
      setCurrentProject({
        ...currentProject,
        selectedPopulations: [...selected, population],
      });
    }
  };

  const handleRemovePopulation = (id: string) => {
    setCurrentProject({
      ...currentProject,
      selectedPopulations: currentProject.selectedPopulations?.filter(p => p.id !== id),
    });
  };

  const handleAddCustomCategory = () => {
    if (customCategory.trim()) {
      const newCategory = {
        id: `custom-${Date.now()}`,
        name: customCategory.trim(),
        isCustom: true,
      };
      setCurrentProject({
        ...currentProject,
        allPopulations: [...(currentProject.allPopulations || predefinedPopulations), newCategory],
        selectedPopulations: [...(currentProject.selectedPopulations || []), newCategory],
      });
      setCustomCategory("");
      setShowCategoryModal(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setDocForm({ ...docForm, fileName: file.name });
    }
  };

  const publishedProjects = projects.filter(p => p.status === "published").sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));
  const draftProjects = projects.filter(p => p.status === "draft");

  // Check if required fields are filled
  const isPublishDisabled = !currentProject.title?.trim() || !currentProject.summary?.trim();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-8">
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
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-8">
          <FolderOpen className="w-10 h-10 text-gray-900 mb-4" strokeWidth={1.5} />
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
                My Programs
              </h1>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "Cabin, sans-serif" }}>
                Build and publish program profiles to enhance AI grant writing and search results
              </p>
            </div>
            {!isCreatingProject && (
              <Button onClick={handleStartNewProject} className="bg-teal-600 hover:bg-teal-700 text-white gap-2">
                <Plus className="w-4 h-4" />
                Create New Program
              </Button>
            )}
          </div>
        </div>

        {/* Project Creation/Editing Form */}
        {isCreatingProject && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                  {editingProjectId ? "Edit Program" : "Create New Program"}
                </h2>
                {editingProjectId && (
                  <p className="text-sm text-gray-500 mt-1">
                    Last updated {formatTimestamp(currentProject.lastUpdatedAt || Date.now())}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
                
                {/* Add Applications Feature */}
                {applications.length > 0 ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="gap-1.5 border-teal-200 hover:border-teal-300 hover:bg-teal-50"
                      >
                        <FileText className="w-4 h-4 text-teal-600" />
                        <span className="text-gray-700">Add Applications</span>
                        {currentProject.selectedApplications && currentProject.selectedApplications.length > 0 && (
                          <Badge className="ml-1 bg-teal-600 hover:bg-teal-700 text-white text-xs px-1.5">
                            {currentProject.selectedApplications.length}
                          </Badge>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[420px]" align="end">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            Add Applications to Program
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            Applying programs to your application makes the application process that much more seamless.
                          </p>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-3">
                          <p className="text-xs font-medium text-gray-700 mb-3 uppercase tracking-wide" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            Select Applications
                          </p>
                          <div className="space-y-2 max-h-64 overflow-y-auto">
                            {applications.map((app) => {
                              const isSelected = currentProject.selectedApplications?.includes(app.id) || false;
                              
                              return (
                                <div
                                  key={app.id}
                                  onClick={() => toggleApplicationSelection(app.id)}
                                  className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50/50 cursor-pointer transition-all group"
                                >
                                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${isSelected ? 'bg-teal-600 border-teal-600' : 'border-gray-300 group-hover:border-teal-400'}`}>
                                    {isSelected && <Check className="w-3 h-3 text-white" />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 text-sm mb-1 line-clamp-2 leading-snug" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                      {app.title}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                      <span className={`px-1.5 py-0.5 rounded ${app.applicationStatus === 'active' ? 'bg-teal-50 text-teal-700' : 'bg-green-50 text-green-700'}`}>
                                        {app.status}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        {currentProject.selectedApplications && currentProject.selectedApplications.length > 0 && (
                          <div className="border-t border-gray-200 pt-3">
                            <p className="text-xs text-teal-700 bg-teal-50 rounded-lg p-2 border border-teal-200" style={{ fontFamily: 'Cabin, sans-serif' }}>
                              ✓ {currentProject.selectedApplications.length} {currentProject.selectedApplications.length === 1 ? 'application' : 'applications'} selected
                            </p>
                          </div>
                        )}
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : null}
                
                <Button 
                  onClick={handlePublishProject} 
                  disabled={isPublishDisabled}
                  className="bg-teal-600 hover:bg-teal-700 text-white gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-600"
                >
                  <Upload className="w-4 h-4" />
                  {editingProjectId ? "Update Program" : "Publish Program"}
                </Button>
              </div>
            </div>

            {/* Program Title & Summary */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Program Title <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="e.g., Community Food Security Program"
                  value={currentProject.title || ""}
                  onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                  className="text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Program Summary <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Provide a brief overview of your program, its goals, and impact..."
                  value={currentProject.summary || ""}
                  onChange={(e) => setCurrentProject({ ...currentProject, summary: e.target.value })}
                  rows={4}
                  className="text-base"
                />
                <p className="text-xs text-gray-500 mt-1">
                  This summary helps AI understand your program for grant writing and matching.
                </p>
              </div>
            </div>

            {/* Documentation & Materials Section */}
            {/* Past Documentation Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                      Past Documentation
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Upload or describe past program documents</p>
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    setDocumentationType("Past Documentation");
                    setShowDocumentationModal(true);
                  }} 
                  variant="outline" 
                  className="gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Past Documentation
                </Button>
              </div>

              {currentProject.documentation && currentProject.documentation.filter(doc => doc.type === "Past Documentation").length > 0 ? (
                <div className="space-y-2">
                  {currentProject.documentation.filter(doc => doc.type === "Past Documentation").map((doc) => (
                    <div key={doc.id} className="p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900 text-sm">{doc.title}</h4>
                            {doc.category && (
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                                {doc.category}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{doc.description}</p>
                          {doc.fileName && (
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-gray-500">📎 {doc.fileName}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleEditDoc(doc)}
                            className="text-gray-400 hover:text-teal-600 transition-colors p-1"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleRemoveDoc(doc.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">No past documentation added yet</p>
              )}
            </div>

            {/* Future Planning Materials Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                      Future Planning Materials
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Upload or describe future planning documents</p>
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    setDocumentationType("Future Planning Materials");
                    setShowDocumentationModal(true);
                  }} 
                  variant="outline" 
                  className="gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Future Planning Materials
                </Button>
              </div>

              {currentProject.documentation && currentProject.documentation.filter(doc => doc.type === "Future Planning Materials").length > 0 ? (
                <div className="space-y-2">
                  {currentProject.documentation.filter(doc => doc.type === "Future Planning Materials").map((doc) => (
                    <div key={doc.id} className="p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900 text-sm">{doc.title}</h4>
                            {doc.category && (
                              <span className="px-2 py-0.5 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">
                                {doc.category}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{doc.description}</p>
                          {doc.fileName && (
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-gray-500">📎 {doc.fileName}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleEditDoc(doc)}
                            className="text-gray-400 hover:text-teal-600 transition-colors p-1"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleRemoveDoc(doc.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">No future planning materials added yet</p>
              )}
            </div>

            {/* Locations Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                      Locations
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Where does your program operate?</p>
                  </div>
                </div>
                <Button onClick={() => setShowLocationModal(true)} variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Location
                </Button>
              </div>

              {currentProject.locations && currentProject.locations.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {currentProject.locations.map((location) => (
                    <div key={location.id} className="p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{location.name}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                            <span className="px-1.5 py-0.5 bg-gray-100 rounded">{location.type}</span>
                            <span>•</span>
                            <span>{location.country}</span>
                          </div>
                          {location.notes && (
                            <p className="text-xs text-gray-600 mt-2 italic">{location.notes}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleEditLocation(location)}
                            className="text-gray-400 hover:text-teal-600 transition-colors p-1"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleRemoveLocation(location.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">No locations added yet</p>
              )}
            </div>

            {/* People Served Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    People Served
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Select populations your program supports</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {(currentProject.allPopulations || predefinedPopulations).map((population) => {
                  const isSelected = currentProject.selectedPopulations?.find(p => p.id === population.id);
                  return (
                    <button
                      key={population.id}
                      onClick={() => handleTogglePopulation(population)}
                      className={`p-2.5 rounded-lg border text-left transition-all text-sm ${
                        isSelected
                          ? "bg-teal-50 border-teal-600 text-teal-900"
                          : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                            isSelected ? "bg-teal-600 border-teal-600" : "border-gray-300"
                          }`}
                        >
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="font-medium">{population.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Button onClick={() => setShowCategoryModal(true)} variant="outline" size="sm" className="gap-2">
                  <Plus className="w-3.5 h-3.5" />
                  Add Custom Category
                </Button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated number served annually (optional)
                </label>
                <Input
                  type="text"
                  placeholder="e.g., 500"
                  value={currentProject.estimatedServed || ""}
                  onChange={(e) => setCurrentProject({ ...currentProject, estimatedServed: e.target.value })}
                  className="max-w-xs"
                />
              </div>
            </div>
          </div>
        )}

        {/* Published Programs */}
        {!isCreatingProject && publishedProjects.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "Cabin, sans-serif" }}>
              Published Programs ({publishedProjects.length})
            </h2>
            <div className="space-y-3">
              {publishedProjects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-teal-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        <span className="px-2.5 py-0.5 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                          Published
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{project.summary}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Published {formatTimestamp(project.publishedAt!)}</span>
                        <span>•</span>
                        <span>Last updated {formatTimestamp(project.lastUpdatedAt)}</span>
                        {project.documentation.length > 0 && (
                          <>
                            <span>•</span>
                            <span>{project.documentation.length} document{project.documentation.length !== 1 ? 's' : ''}</span>
                          </>
                        )}
                        {project.locations.length > 0 && (
                          <>
                            <span>•</span>
                            <span>{project.locations.length} location{project.locations.length !== 1 ? 's' : ''}</span>
                          </>
                        )}
                        {project.selectedPopulations.length > 0 && (
                          <>
                            <span>•</span>
                            <span>{project.selectedPopulations.length} population{project.selectedPopulations.length !== 1 ? 's' : ''}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => setExpandedProjectId(expandedProjectId === project.id ? null : project.id)}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        {expandedProjectId === project.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        {expandedProjectId === project.id ? "Hide" : "View"} Details
                      </Button>
                      <Button
                        onClick={() => handleEditProject(project)}
                        variant="outline"
                        size="sm"
                        className="p-2"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDeleteProject(project.id)}
                        variant="outline"
                        size="sm"
                        className="p-2 text-red-600 hover:bg-red-50 hover:border-red-300"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedProjectId === project.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                      {/* Application History Section */}
                      <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-5 border border-teal-100">
                        <div className="flex items-start gap-3 mb-4">
                          <FileCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Application History</h4>
                            <p className="text-sm text-gray-600">
                              This program has been tied to <span className="font-semibold text-gray-900">4 applications</span> over the last <span className="font-semibold text-gray-900">4 years</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {/* Archive */}
                          <div className="flex items-center gap-2 text-sm">
                            <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">Archive</span>
                            <span className="text-gray-500">-</span>
                            <span className="font-medium text-gray-900">Community Impact Initiative 2021</span>
                          </div>
                          
                          {/* In Progress */}
                          <div className="flex items-center gap-2 text-sm">
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">In Progress</span>
                            <span className="text-gray-500">-</span>
                            <span className="font-medium text-gray-900">Youth Education Expansion Grant</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">In Progress</span>
                            <span className="text-gray-500">-</span>
                            <span className="font-medium text-gray-900">Food Security Enhancement Program</span>
                          </div>
                          
                          {/* Submitted */}
                          <div className="flex items-center gap-2 text-sm">
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Submitted</span>
                            <span className="text-gray-500">-</span>
                            <span className="font-medium text-gray-900">Community Health & Wellness Initiative</span>
                          </div>
                        </div>
                      </div>

                      {project.documentation.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Documentation & Materials</h4>
                          <div className="space-y-2">
                            {project.documentation.map(doc => (
                              <div key={doc.id} className="p-3 bg-gray-50 rounded-lg text-sm">
                                <div className="flex items-center gap-2">
                                  <div className="font-medium text-gray-900">{doc.title}</div>
                                  {doc.category && (
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                      doc.type === "Past Documentation" 
                                        ? "bg-blue-50 text-blue-700" 
                                        : "bg-teal-50 text-teal-700"
                                    }`}>
                                      {doc.category}
                                    </span>
                                  )}
                                </div>
                                <div className="text-gray-600 mt-1">{doc.description}</div>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                                    doc.type === "Past Documentation" 
                                      ? "bg-blue-100 text-blue-800" 
                                      : "bg-teal-100 text-teal-800"
                                  }`}>
                                    {doc.type}
                                  </span>
                                  {doc.fileName && <span className="text-xs text-gray-500">📎 {doc.fileName}</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.locations.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Locations</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.locations.map(loc => (
                              <div key={loc.id} className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm">
                                <span className="font-medium text-gray-900">{loc.name}</span>
                                <span className="text-gray-500 ml-2">({loc.type})</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.selectedPopulations.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">People Served</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.selectedPopulations.map(pop => (
                              <div key={pop.id} className="px-3 py-1.5 bg-teal-50 border border-teal-200 rounded-lg text-sm font-medium text-teal-900">
                                {pop.name}
                              </div>
                            ))}
                          </div>
                          {project.estimatedServed && (
                            <div className="mt-2 text-sm text-gray-600">
                              Estimated served annually: <span className="font-medium">{project.estimatedServed}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Draft Projects */}
        {!isCreatingProject && draftProjects.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "Cabin, sans-serif" }}>
              Drafts ({draftProjects.length})
            </h2>
            <div className="space-y-3">
              {draftProjects.map((project) => (
                <div key={project.id} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        <span className="px-2.5 py-0.5 bg-gray-200 text-gray-600 text-xs font-medium rounded-full">
                          Draft
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{project.summary}</p>
                      <span className="text-xs text-gray-500">Last updated {formatTimestamp(project.lastUpdatedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => handleEditProject(project)}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Edit2 className="w-4 h-4" />
                        Continue Editing
                      </Button>
                      <Button
                        onClick={() => handleDeleteProject(project.id)}
                        variant="outline"
                        size="sm"
                        className="gap-2 text-red-600 hover:bg-red-50 hover:border-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isCreatingProject && projects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-4">
              <FolderOpen className="w-10 h-10 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs yet</h3>
            <p className="text-sm text-gray-600 max-w-md mb-6">
              Create your first program to build a comprehensive profile that enhances AI grant writing and improves grant matching.
            </p>
            <Button onClick={handleStartNewProject} variant="outline" className="gap-2">
              <Plus className="w-4 h-4" />
              Create Your First Program
            </Button>
          </div>
        )}
      </div>

      {/* Add Documentation Modal */}
      <Dialog open={showDocumentationModal} onOpenChange={() => {
        setShowDocumentationModal(false);
        setEditingDocId(null);
        setDocForm({ title: "", description: "", category: "", fileName: "" });
      }}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingDocId 
                ? `Edit ${documentationType}` 
                : `Add ${documentationType}`}
            </DialogTitle>
            <DialogDescription>
              {documentationType === "Past Documentation" 
                ? "Upload documents that demonstrate your track record and past success (e.g., Impact Reports, Case Studies, Grant Proposals, Financial Reports, Org Overview, Board List, 501(c)(3) Certificate, IRS Forms)"
                : "Upload documents that share your goals and upcoming plans (e.g., Project Plans, Logic Models, Proposed Budget, Funding Strategy, Outcome KPIs, Needs Assessments, Partnerships, Staffing Plans)"}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="e.g., 2024 Annual Report"
                value={docForm.title}
                onChange={(e) => setDocForm({ ...docForm, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Brief summary of the document..."
                value={docForm.description}
                onChange={(e) => setDocForm({ ...docForm, description: e.target.value })}
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <Select
                value={docForm.category}
                onValueChange={(value: string) => setDocForm({ ...docForm, category: value })}
              >
                <SelectTrigger className="border border-gray-300">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {documentationType === "Past Documentation" && (
                    <>
                      <SelectItem value="Impact & Results">Impact & Results</SelectItem>
                      <SelectItem value="Financial History">Financial History</SelectItem>
                      <SelectItem value="Organizational Docs">Organizational Docs</SelectItem>
                      <SelectItem value="Compliance">Compliance</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </>
                  )}
                  {documentationType === "Future Planning Materials" && (
                    <>
                      <SelectItem value="Program Plan">Program Plan</SelectItem>
                      <SelectItem value="Budget & Funding">Budget & Funding</SelectItem>
                      <SelectItem value="Impact Goals">Impact Goals</SelectItem>
                      <SelectItem value="Execution Plan">Execution Plan</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">File Upload (Optional)</label>
              <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-400 transition-colors cursor-pointer block">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                {docForm.fileName ? (
                  <>
                    <p className="text-sm text-teal-600 font-medium">✓ {docForm.fileName}</p>
                    <p className="text-xs text-gray-500 mt-1">Click to change file</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-teal-600 font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                  </>
                )}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Button variant="outline" onClick={() => {
              setShowDocumentationModal(false);
              setEditingDocId(null);
              setDocForm({ title: "", description: "", category: "", fileName: "" });
            }}>
              Cancel
            </Button>
            <div className="flex gap-3">
              {!editingDocId && (
                <Button 
                  onClick={handleAddAndContinue} 
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  disabled={!docForm.title.trim() || !docForm.description.trim()}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add & Add Another
                </Button>
              )}
              <Button 
                onClick={handleAddDocumentation} 
                className="bg-teal-600 hover:bg-teal-700 text-white"
                disabled={!docForm.title.trim() || !docForm.description.trim()}
              >
                {editingDocId ? "Save Changes" : `Add ${documentationType}`}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Location Modal */}
      <Dialog open={showLocationModal} onOpenChange={() => {
        setShowLocationModal(false);
        setEditingLocationId(null);
        setLocationForm({ name: "", type: "City", country: "USA", notes: "" });
      }}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{editingLocationId ? "Edit Location" : "Add Location"}</DialogTitle>
            <DialogDescription>Define a geographic region where your program operates.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location Name</label>
              <Input
                placeholder="e.g., Austin, Texas, Pacific Northwest"
                value={locationForm.name}
                onChange={(e) => setLocationForm({ ...locationForm, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location Type</label>
              <Select
                value={locationForm.type}
                onValueChange={(value: "City" | "State" | "Region" | "Country") =>
                  setLocationForm({ ...locationForm, type: value })
                }
              >
                <SelectTrigger className="border border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="City">City</SelectItem>
                  <SelectItem value="State">State</SelectItem>
                  <SelectItem value="Region">Region</SelectItem>
                  <SelectItem value="Country">Country</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <Input
                placeholder="USA"
                value={locationForm.country}
                onChange={(e) => setLocationForm({ ...locationForm, country: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
              <Textarea
                placeholder="Additional context about this location..."
                value={locationForm.notes}
                onChange={(e) => setLocationForm({ ...locationForm, notes: e.target.value })}
                rows={3}
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => {
              setShowLocationModal(false);
              setEditingLocationId(null);
              setLocationForm({ name: "", type: "City", country: "USA", notes: "" });
            }}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddLocation} 
              className="bg-teal-600 hover:bg-teal-700 text-white"
              disabled={!locationForm.name.trim()}
            >
              {editingLocationId ? "Save Changes" : "Add Location"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Custom Category Modal */}
      <Dialog open={showCategoryModal} onOpenChange={setShowCategoryModal}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle>Add Custom Category</DialogTitle>
            <DialogDescription>Add a custom population category for your project.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
              <Input
                placeholder="e.g., Single Parents"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setShowCategoryModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddCustomCategory} className="bg-teal-600 hover:bg-teal-700 text-white">
              Add Category
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              Remove Program?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. Your program will be permanently removed.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4 space-y-3">
            <p className="text-gray-700 font-medium">
              Are you sure you want to remove this program?
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>Warning:</strong> Removing this program could impact:
              </p>
              <ul className="mt-2 text-sm text-amber-800 space-y-1 ml-4">
                <li>• Grant search results and matching accuracy</li>
                <li>• AI writing capability in your grant applications</li>
                <li>• Historical program data and context</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              This action cannot be undone.
            </p>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </Button>
            <Button 
              onClick={confirmDeleteProject} 
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Remove Program
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}