import { useState, useEffect } from "react";
import { FolderOpen, Plus, MapPin, Users, Upload, X, FileText, Edit2, Trash2, ChevronDown, ChevronUp, AlertCircle, FileCheck, Clock, DollarSign, UserCircle2, Check, Info, Globe } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { CloudDocumentImport, ProviderBadgeIcon, type ImportedCloudFile } from "../components/CloudDocumentImport";
import { CreateProgramFromDocumentModal, type FastTrackDocumentFile } from "../components/CreateProgramFromDocumentModal";

interface DocumentationFile {
  id: string;
  fileName: string;
  fileSize: string;
  uploadedAt: number;
  source?: "local" | "microsoft" | "google";
}

interface GeoLocation {
  id: string;
  country: string;
  state: string;
  name: string;
}

interface Partnership {
  id: string;
  name: string;
}

interface UrlEntry {
  id: string;
  value: string;
}

interface PrimaryContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
  documentFiles: DocumentationFile[];
  geoLocations: GeoLocation[];
  isNationalProgram: boolean;
  programDurationMonths: number | null;
  partnerships: Partnership[];
  primaryContact: PrimaryContact | null;
  urls: UrlEntry[];
  selectedPopulations: PopulationCategory[];
  allPopulations: PopulationCategory[];
  estimatedServed: string;
  status: "published";
  publishedAt?: number;
  lastUpdatedAt: number;
  createdAt: number;
  selectedApplications?: string[];
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

const usStates: string[] = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
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

const formatFileSize = (bytes: number): string => {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
};

const isValidUrlValue = (value: string): boolean => {
  if (!value.trim()) return false;
  const pattern = /^(https?:\/\/)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?#]\S*)?$/;
  return pattern.test(value.trim());
};

// Small confirm/add button shared by the Geographic Focus, Program Duration,
// Partnerships, Primary Point of Contact, and Add URL sections.
function ConfirmButton({
  enabled,
  onClick,
  title,
}: {
  enabled: boolean;
  onClick: () => void;
  title?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!enabled}
      title={title}
      className={`flex items-center justify-center w-9 h-9 rounded-md border transition-colors flex-shrink-0 ${
        enabled
          ? "bg-teal-600 border-teal-600 text-white hover:bg-teal-700"
          : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
      }`}
    >
      <Check className="w-4 h-4" />
    </button>
  );
}

export function ProjectDetailsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  // Current project being edited
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({
    title: "",
    summary: "",
    documentFiles: [],
    geoLocations: [],
    isNationalProgram: false,
    programDurationMonths: null,
    partnerships: [],
    primaryContact: null,
    urls: [],
    selectedPopulations: [],
    allPopulations: predefinedPopulations,
    estimatedServed: "",
    status: "published",
    selectedApplications: [],
  });

  // Modal states
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [showCreateFromDocumentModal, setShowCreateFromDocumentModal] = useState(false);

  // Form states for the inline "add" rows
  const [geoForm, setGeoForm] = useState({ country: "USA", state: "", name: "" });
  const [durationInput, setDurationInput] = useState("");
  const [partnershipInput, setPartnershipInput] = useState("");
  const [contactForm, setContactForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [urlInput, setUrlInput] = useState("");
  const [urlTouched, setUrlTouched] = useState(false);

  const [customCategory, setCustomCategory] = useState("");

  // Sync published count to localStorage for nav
  useEffect(() => {
    const publishedCount = projects.filter(p => p.status === "published").length;
    localStorage.setItem("publishedProjectsCount", publishedCount.toString());
    localStorage.setItem("projects", JSON.stringify(projects));
    window.dispatchEvent(new Event("projectsUpdated"));
  }, [projects]);

  const emptyProject: Partial<Project> = {
    title: "",
    summary: "",
    documentFiles: [],
    geoLocations: [],
    isNationalProgram: false,
    programDurationMonths: null,
    partnerships: [],
    primaryContact: null,
    urls: [],
    selectedPopulations: [],
    allPopulations: predefinedPopulations,
    estimatedServed: "",
    status: "published",
    selectedApplications: [],
  };

  const handleStartNewProject = () => {
    setIsCreatingProject(true);
    setEditingProjectId(null);
    setCurrentProject({ ...emptyProject });
    resetInlineForms();
  };

  const handleCreateProgramFromDocument = (files: FastTrackDocumentFile[]) => {
    setIsCreatingProject(true);
    setEditingProjectId(null);
    setCurrentProject({ ...emptyProject, documentFiles: files });
    resetInlineForms();
    setShowCreateFromDocumentModal(false);
  };

  const handleEditProject = (project: Project) => {
    setEditingProjectId(project.id);
    setIsCreatingProject(true);
    setCurrentProject({ ...project });
    resetInlineForms();
  };

  const resetInlineForms = () => {
    setGeoForm({ country: "USA", state: "", name: "" });
    setDurationInput("");
    setPartnershipInput("");
    setContactForm({ firstName: "", lastName: "", email: "", phone: "" });
    setUrlInput("");
    setUrlTouched(false);
  };

  const buildProjectRecord = (now: number): Project => ({
    id: now.toString(),
    title: currentProject.title!,
    summary: currentProject.summary!,
    documentFiles: currentProject.documentFiles || [],
    geoLocations: currentProject.geoLocations || [],
    isNationalProgram: currentProject.isNationalProgram ?? false,
    programDurationMonths: currentProject.programDurationMonths ?? null,
    partnerships: currentProject.partnerships || [],
    primaryContact: currentProject.primaryContact ?? null,
    urls: currentProject.urls || [],
    selectedPopulations: currentProject.selectedPopulations || [],
    allPopulations: currentProject.allPopulations || predefinedPopulations,
    estimatedServed: currentProject.estimatedServed || "",
    status: "published",
    lastUpdatedAt: now,
    createdAt: now,
  });

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
      setProjects([...projects, buildProjectRecord(now)]);
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
      setProjects([...projects, { ...buildProjectRecord(now), publishedAt: now }]);
    }

    setIsCreatingProject(false);
    setEditingProjectId(null);
  };

  const handleCancelEdit = () => {
    setIsCreatingProject(false);
    setEditingProjectId(null);
    setCurrentProject({ ...emptyProject });
    resetInlineForms();
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

  // Add Documentation handlers
  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const now = Date.now();
    const newFiles: DocumentationFile[] = Array.from(files).map((file, index) => ({
      id: `${now}-${index}`,
      fileName: file.name,
      fileSize: formatFileSize(file.size),
      uploadedAt: now,
      source: "local",
    }));
    setCurrentProject({
      ...currentProject,
      documentFiles: [...(currentProject.documentFiles || []), ...newFiles],
    });
  };

  const handleCloudImport = (files: ImportedCloudFile[]) => {
    const newFiles: DocumentationFile[] = files.map((file) => ({
      id: file.id,
      fileName: file.fileName,
      fileSize: file.fileSize,
      uploadedAt: file.uploadedAt,
      source: file.source,
    }));
    setCurrentProject((prev) => ({
      ...prev,
      documentFiles: [...(prev.documentFiles || []), ...newFiles],
    }));
  };

  const handleDocInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(event.target.files);
    event.target.value = "";
  };

  const handleDocDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    handleFileSelect(event.dataTransfer.files);
  };

  const handleRemoveDocFile = (id: string) => {
    setCurrentProject({
      ...currentProject,
      documentFiles: currentProject.documentFiles?.filter(f => f.id !== id),
    });
  };

  // Geographic Focus handlers
  const handleAddGeoLocation = () => {
    if (!geoForm.state || !geoForm.name.trim()) return;
    const now = Date.now();
    setCurrentProject({
      ...currentProject,
      geoLocations: [...(currentProject.geoLocations || []), { id: now.toString(), ...geoForm }],
    });
    setGeoForm({ country: "USA", state: "", name: "" });
  };

  const handleRemoveGeoLocation = (id: string) => {
    setCurrentProject({
      ...currentProject,
      geoLocations: currentProject.geoLocations?.filter(l => l.id !== id),
    });
  };

  // Program Duration handlers
  const handleConfirmDuration = () => {
    const value = parseInt(durationInput, 10);
    if (!value || value <= 0) return;
    setCurrentProject({ ...currentProject, programDurationMonths: value });
    setDurationInput("");
  };

  const handleRemoveDuration = () => {
    setCurrentProject({ ...currentProject, programDurationMonths: null });
  };

  // Partnerships handlers
  const handleAddPartnership = () => {
    if (!partnershipInput.trim()) return;
    const now = Date.now();
    setCurrentProject({
      ...currentProject,
      partnerships: [...(currentProject.partnerships || []), { id: now.toString(), name: partnershipInput.trim() }],
    });
    setPartnershipInput("");
  };

  const handleRemovePartnership = (id: string) => {
    setCurrentProject({
      ...currentProject,
      partnerships: currentProject.partnerships?.filter(p => p.id !== id),
    });
  };

  // Primary Point of Contact handlers
  const isContactFormValid = Boolean(
    contactForm.firstName.trim() &&
    contactForm.lastName.trim() &&
    /\S+@\S+\.\S+/.test(contactForm.email.trim()) &&
    contactForm.phone.trim().length >= 7
  );

  const handleConfirmContact = () => {
    if (!isContactFormValid) return;
    setCurrentProject({ ...currentProject, primaryContact: { ...contactForm } });
    setContactForm({ firstName: "", lastName: "", email: "", phone: "" });
  };

  const handleRemoveContact = () => {
    setCurrentProject({ ...currentProject, primaryContact: null });
  };

  // Add URL handlers
  const handleAddUrl = () => {
    if (!isValidUrlValue(urlInput)) return;
    const now = Date.now();
    setCurrentProject({
      ...currentProject,
      urls: [...(currentProject.urls || []), { id: now.toString(), value: urlInput.trim() }],
    });
    setUrlInput("");
    setUrlTouched(false);
  };

  const handleRemoveUrl = (id: string) => {
    setCurrentProject({
      ...currentProject,
      urls: currentProject.urls?.filter(u => u.id !== id),
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

  const publishedProjects = projects.filter(p => p.status === "published").sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));
  const draftProjects: Project[] = [];

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white gap-2">
                    <Plus className="w-4 h-4" />
                    Create New Program
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[398px] p-3 rounded-lg">
                  <div className="px-1 pb-3">
                    <p className="text-sm font-semibold text-gray-900">Create New Program</p>
                    <p className="text-xs text-gray-600 mt-0.5">Choose how you'd like to create your program profile</p>
                  </div>
                  <DropdownMenuItem
                    onSelect={() => setShowCreateFromDocumentModal(true)}
                    className="flex-col items-start gap-0 p-[18px] rounded-lg border-2 border-gray-200 hover:border-teal-400 hover:bg-teal-50/30 focus:bg-teal-50/30 focus:border-teal-400 cursor-pointer mb-2"
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Upload className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-gray-900">Create Program from Document</span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide bg-[#f3e8ff] text-[#8200db]">
                            Fast Track
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 whitespace-normal">
                          Let AI auto-fill program details from documents like:{" "}
                          <span className="italic">
                            Program Descriptions/Brochures, Past Grant Proposals, Strategic Plans, Annual Reports, IRS Form 990
                          </span>
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={handleStartNewProject}
                    className="flex-col items-start gap-0 p-[18px] rounded-lg border-2 border-gray-200 hover:border-teal-400 hover:bg-teal-50/30 focus:bg-teal-50/30 focus:border-teal-400 cursor-pointer"
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm font-semibold text-gray-900">Create Program Manually</span>
                        <p className="text-xs text-gray-600 mt-1">Fill out the program details step-by-step in a guided form</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
            </div>

            {/* Add Documentation Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-3 mb-5">
                <FileText className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Add Documentation
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Upload or describe past program documents</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                  <h4 className="text-sm font-semibold text-blue-900">Recommended Documentation</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-7 text-xs text-blue-800">
                  <p>• <span className="font-bold">Grant Proposals</span> - Contains mission, goals, locations, & populations served</p>
                  <p>• <span className="font-bold">Strategic Plans</span> - Outlines mission, vision, & program objectives</p>
                  <p>• <span className="font-bold">Annual Reports</span> - Includes impact data, program descriptions, & service areas</p>
                  <p>• <span className="font-bold">IRS Form 990</span> - Contains organizational mission & program descriptions</p>
                  <p>• <span className="font-bold">Program Descriptions/Brochures</span> - Detailed overview of services & target populations</p>
                  <p>• <span className="font-bold">Program Fact Sheets</span> - Summarizes key program details & impact</p>
                </div>
              </div>

              <label
                className="border-2 border-dashed border-gray-300 rounded-lg py-4 text-center hover:border-teal-400 transition-colors cursor-pointer block mb-4"
                onDrop={handleDocDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-1.5">
                  <Upload className="w-4 h-4 text-teal-600" />
                </div>
                <p className="text-sm text-teal-600 font-medium">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  multiple
                  className="hidden"
                  onChange={handleDocInputChange}
                />
              </label>

              <CloudDocumentImport onImport={handleCloudImport} />

              {currentProject.documentFiles && currentProject.documentFiles.length > 0 && (
                <div className="space-y-2 mt-4">
                  {currentProject.documentFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-[10px]">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-[10px] bg-red-50 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-red-500" />
                          {(file.source === "microsoft" || file.source === "google") && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                              <ProviderBadgeIcon provider={file.source} className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{file.fileName}</p>
                          <p className="text-xs text-gray-500">
                            {file.fileSize} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                            {file.source === "microsoft" && " • Imported from Microsoft"}
                            {file.source === "google" && " • Imported from Google Drive"}
                          </p>
                        </div>
                      </div>
                      <button onClick={() => handleRemoveDocFile(file.id)} className="text-red-500 hover:text-red-600 transition-colors p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Program Description */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-3 mb-5">
                <FileText className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Add Program Description <span className="text-red-500">*</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Add a brief summary of your program.</p>
                </div>
              </div>
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

            {/* Geographic Focus Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Geographic Focus <span className="text-red-500">*</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Add at least one location where your program operates</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                <div>
                  <label htmlFor="national-program-toggle" className="font-medium text-gray-900 cursor-pointer">
                    National Program
                  </label>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Selecting this option will default your searches to national options. Specific cities and regions of focus can still be entered below.
                  </p>
                </div>
                <Switch
                  id="national-program-toggle"
                  checked={!!currentProject.isNationalProgram}
                  onCheckedChange={(checked) => setCurrentProject({ ...currentProject, isNationalProgram: checked })}
                  className="flex-shrink-0"
                />
              </div>

              {currentProject.geoLocations && currentProject.geoLocations.length > 0 && (
                <div className="space-y-2 mb-4">
                  {currentProject.geoLocations.map((loc) => (
                    <div key={loc.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                      <div className="grid grid-cols-3 gap-6 flex-1">
                        <div>
                          <p className="text-xs text-gray-500">Location Name</p>
                          <p className="text-sm font-medium text-gray-900 mt-1">{loc.name}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Country</p>
                          <p className="text-sm font-medium text-gray-900 mt-1">{loc.country}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">State</p>
                          <p className="text-sm font-medium text-gray-900 mt-1">{loc.state}</p>
                        </div>
                      </div>
                      <button onClick={() => handleRemoveGeoLocation(loc.id)} className="text-red-500 hover:text-red-600 transition-colors p-1 ml-3 flex-shrink-0">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-end gap-3 p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <Select value={geoForm.country} onValueChange={(value) => setGeoForm({ ...geoForm, country: value })}>
                    <SelectTrigger className="border border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USA">USA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <Select value={geoForm.state} onValueChange={(value) => setGeoForm({ ...geoForm, state: value })}>
                    <SelectTrigger className="border border-gray-300">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent className="max-h-64">
                      {usStates.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="e.g., Austin, Texas"
                    value={geoForm.name}
                    onChange={(e) => setGeoForm({ ...geoForm, name: e.target.value })}
                  />
                </div>
                <ConfirmButton
                  enabled={!!geoForm.state && !!geoForm.name.trim()}
                  onClick={handleAddGeoLocation}
                  title="Add location"
                />
              </div>
            </div>

            {/* Program Duration Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Program Duration <span className="text-red-500">*</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Add the program duration in months.</p>
                </div>
              </div>

              {currentProject.programDurationMonths ? (
                <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">{currentProject.programDurationMonths} Months</p>
                  <button onClick={handleRemoveDuration} className="text-red-500 hover:text-red-600 transition-colors p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Input
                    type="number"
                    min="1"
                    placeholder="#"
                    value={durationInput}
                    onChange={(e) => setDurationInput(e.target.value)}
                    className="max-w-[100px]"
                  />
                  <span className="text-lg text-gray-900">Months</span>
                  <ConfirmButton
                    enabled={!!parseInt(durationInput, 10) && parseInt(durationInput, 10) > 0}
                    onClick={handleConfirmDuration}
                    title="Confirm duration"
                  />
                </div>
              )}
            </div>

            {/* Estimated Total Budget */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Estimated Total Budget <span className="text-red-500">*</span>
              </label>
              <div className="relative max-w-xs">
                <DollarSign className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                  placeholder="e.g., $150,000"
                  value={currentProject.estimatedServed || ""}
                  onChange={(e) => setCurrentProject({ ...currentProject, estimatedServed: e.target.value })}
                  className="pl-9"
                />
              </div>
            </div>

            {/* People Served Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
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

            {/* Partnerships Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Partnership(s)
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Add at least one partner for initiatives.</p>
                </div>
              </div>

              {currentProject.partnerships && currentProject.partnerships.length > 0 && (
                <div className="space-y-2 mb-4">
                  {currentProject.partnerships.map((partner) => (
                    <div key={partner.id} className="flex items-center justify-between p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">{partner.name}</p>
                      <button onClick={() => handleRemovePartnership(partner.id)} className="text-red-500 hover:text-red-600 transition-colors p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3">
                <Input
                  placeholder="Enter Partner"
                  value={partnershipInput}
                  onChange={(e) => setPartnershipInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddPartnership();
                    }
                  }}
                  className="flex-1"
                />
                <ConfirmButton
                  enabled={!!partnershipInput.trim()}
                  onClick={handleAddPartnership}
                  title="Add partner"
                />
              </div>
            </div>

            {/* Primary Point of Contact Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCircle2 className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Primary Point of Contact <span className="text-red-500">*</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Add primary point of contact for initiatives.</p>
                </div>
              </div>

              {currentProject.primaryContact ? (
                <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="grid grid-cols-3 gap-6 flex-1">
                    <div>
                      <p className="text-xs text-gray-500">Name</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {currentProject.primaryContact.firstName} {currentProject.primaryContact.lastName}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email Address</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{currentProject.primaryContact.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone Number</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{currentProject.primaryContact.phone}</p>
                    </div>
                  </div>
                  <button onClick={handleRemoveContact} className="text-red-500 hover:text-red-600 transition-colors p-1 ml-3 flex-shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-4 gap-3 items-start">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Enter First Name"
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Enter Last Name"
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="e.g., email@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <Input
                          placeholder="e.g., (+1) 123-456-8901"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                        <ConfirmButton
                          enabled={isContactFormValid}
                          onClick={handleConfirmContact}
                          title="Add contact"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Only one primary contact can be added.</p>
                </>
              )}
            </div>

            {/* Add URL Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Add URL
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Insert a webpage address that describes your initiatives</p>
                </div>
              </div>

              {currentProject.urls && currentProject.urls.length > 0 && (
                <div className="space-y-2 mb-4">
                  {currentProject.urls.map((url) => (
                    <div key={url.id} className="flex items-center justify-between p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <p className="text-sm font-medium text-gray-900">{url.value}</p>
                      </div>
                      <button onClick={() => handleRemoveUrl(url.id)} className="text-red-500 hover:text-red-600 transition-colors p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3">
                <div
                  className={`flex-1 flex items-center gap-2 px-3.5 py-2.5 rounded-md border transition-colors ${
                    urlTouched && isValidUrlValue(urlInput)
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <Globe className={`w-5 h-5 ${urlTouched && isValidUrlValue(urlInput) ? "text-teal-600" : "text-gray-400"}`} />
                  <input
                    type="text"
                    placeholder="Enter URL"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    onBlur={() => setUrlTouched(true)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddUrl();
                      }
                    }}
                    className="flex-1 outline-none text-sm bg-transparent text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <ConfirmButton
                  enabled={isValidUrlValue(urlInput)}
                  onClick={handleAddUrl}
                  title="Add URL"
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
                        {project.documentFiles.length > 0 && (
                          <>
                            <span>•</span>
                            <span>{project.documentFiles.length} document{project.documentFiles.length !== 1 ? 's' : ''}</span>
                          </>
                        )}
                        {project.geoLocations.length > 0 && (
                          <>
                            <span>•</span>
                            <span>{project.geoLocations.length} location{project.geoLocations.length !== 1 ? 's' : ''}</span>
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

                      {project.documentFiles.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Documentation</h4>
                          <div className="space-y-2">
                            {project.documentFiles.map(file => (
                              <div key={file.id} className="p-3 bg-gray-50 rounded-lg text-sm">
                                <div className="font-medium text-gray-900">{file.fileName}</div>
                                <div className="text-gray-600 mt-1">{file.fileSize} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.geoLocations.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Geographic Focus</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.geoLocations.map(loc => (
                              <div key={loc.id} className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm">
                                <span className="font-medium text-gray-900">{loc.name}</span>
                                <span className="text-gray-500 ml-2">({loc.state}, {loc.country})</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.programDurationMonths && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Program Duration</h4>
                          <p className="text-sm text-gray-600">{project.programDurationMonths} Months</p>
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
                      {project.partnerships.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Partnership(s)</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.partnerships.map(partner => (
                              <div key={partner.id} className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm font-medium text-gray-900">
                                {partner.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.primaryContact && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Primary Point of Contact</h4>
                          <p className="text-sm text-gray-600">
                            {project.primaryContact.firstName} {project.primaryContact.lastName} • {project.primaryContact.email} • {project.primaryContact.phone}
                          </p>
                        </div>
                      )}
                      {project.urls.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">URLs</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.urls.map(url => (
                              <div key={url.id} className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-900">
                                {url.value}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
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
            <p className="text-sm text-gray-600 max-w-md">
              Programs enhances AI grant writing and improve grant matching.
            </p>
          </div>
        )}
      </div>

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

      {/* Create Program from Document Modal */}
      <CreateProgramFromDocumentModal
        open={showCreateFromDocumentModal}
        onOpenChange={setShowCreateFromDocumentModal}
        onProcessDocument={handleCreateProgramFromDocument}
      />
    </div>
  );
}
