import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useParams, Link as RouterLink } from "react-router";
import { ChevronLeft, Upload, X, FileText, FileSpreadsheet, AlertCircle, Info, Type, Link, Image, Sparkles, Check, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Plus, UserPlus, UserMinus, MessageSquare, Send, ChevronDown, ChevronUp, Undo2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { DocumentsSectionV2 } from "../components/DocumentsSectionV2";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "../components/ui/breadcrumb";

interface UploadedFile {
  id: string;
  name: string;
  type: "pdf" | "excel";
  size: string;
  uploadedAt: string;
}

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: Date;
  type: 'comment' | 'status-change' | 'ai-accepted' | 'section-edited';
  statusFrom?: string;
  statusTo?: string;
}

type SectionStatus = 'incomplete' | 'complete' | 'revisit' | 'flagged';

export function ApplicationSectionPage() {
  const navigate = useNavigate();
  const { applicationId, sectionId } = useParams<{ applicationId: string; sectionId: string }>();
  
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [missionVisionText, setMissionVisionText] = useState(`Mission
Our mission is to expand equitable access to assistive technology by providing flexible, affordable financing options that empower individuals with disabilities to live independently, participate fully in their communities, and achieve economic self-sufficiency. Through inclusive lending practices, financial education, and strategic partnerships, we aim to remove systemic financial barriers that prevent individuals from acquiring the tools and technologies essential to daily living, employment, and overall well-being.
Vision
We envision a future where all individuals—regardless of disability, income, or background—have timely access to the assistive technology they need to thrive. In this future, financial constraints no longer limit independence or opportunity, and communities are strengthened by the full participation of people with disabilities. By building a sustainable, community-centered financing ecosystem, we strive to create lasting pathways to inclusion, autonomy, and dignity for those we serve.`);
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([]);
  const [programDetailsText, setProgramDetailsText] = useState("");
  const [performanceMetricsText, setPerformanceMetricsText] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [narrativeText, setNarrativeText] = useState("");
  const [complianceChecked, setComplianceChecked] = useState(false);
  const [eligibilitySelection, setEligibilitySelection] = useState<string>("");
  const [sectionCompletions, setSectionCompletions] = useState<Record<string, boolean>>({});
  const [isMarkedComplete, setIsMarkedComplete] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Status & Comments states
  const [sectionStatus, setSectionStatus] = useState<SectionStatus>('incomplete');
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  
  // Mission & Vision AI states
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [aiAccepted, setAiAccepted] = useState(false);
  const [isAcceptingAI, setIsAcceptingAI] = useState(false);
  const [teamMembersModalOpen, setTeamMembersModalOpen] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    { id: "1", name: "Allison M.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { id: "2", name: "John D.", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" }
  ]);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");
  
  // Edit tracking and undo states
  const [contentEditedAfterAI, setContentEditedAfterAI] = useState(false);
  const [lastSavedContent, setLastSavedContent] = useState("");
  const [showUndoButton, setShowUndoButton] = useState(false);
  const [lastEditTime, setLastEditTime] = useState<Date | null>(null);
  const [showAIBadge, setShowAIBadge] = useState(true);

  const aiGeneratedText = `We need another and a wiser and perhaps a more mystical concept of animals. Remote from universal nature, and living by complicated artifice, man in civilization surveys the creature through the glass of his knowledge and sees thereby a feather magnified and the whole image in distortion.

We patronize them for their incompleteness, for their tragic fate of having taken form so far below ourselves. And therein we err, and greatly err. For the animal shall not be measured by man.

In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear. They are not brethren, they are not underlings; they are other nations, caught with ourselves in the net of life and time, fellow prisoners of the splendour and travail of the earth.`;

  // Auto-typing effect - DISABLED
  // useEffect(() => {
  //   if (sectionId === "s1" && !aiAccepted && missionVisionText === "") {
  //     setIsTyping(true);
  //     let currentIndex = 0;
  //
  //     const typingInterval = setInterval(() => {
  //       if (currentIndex < aiGeneratedText.length) {
  //         setTypedText(aiGeneratedText.substring(0, currentIndex + 1));
  //         currentIndex++;
  //       } else {
  //         setIsTyping(false);
  //         clearInterval(typingInterval);
  //       }
  //     }, 10); // Typing speed - faster now (was 20ms)

  //     return () => clearInterval(typingInterval);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sectionId, aiAccepted, missionVisionText]);

  const handleAcceptAI = () => {
    setIsAcceptingAI(true);
    
    // Show loader for 1.5 seconds
    setTimeout(() => {
      setAiAccepted(true);
      setMissionVisionText(aiGeneratedText);
      setLastSavedContent(aiGeneratedText);
      setIsAcceptingAI(false);
      setShowAIBadge(false); // Hide AI badge when accepted
      
      // Add AI accepted comment to feed
      const aiAcceptedComment: Comment = {
        id: Math.random().toString(36).substr(2, 9),
        author: 'Allison M.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        content: 'accepted AI recommendation',
        timestamp: new Date(),
        type: 'ai-accepted'
      };
      
      const updatedComments = [...comments, aiAcceptedComment];
      setComments(updatedComments);
      
      // Save to localStorage
      const storageKey = `app-${applicationId}-section-${sectionId}-comments`;
      localStorage.setItem(storageKey, JSON.stringify(updatedComments));
    }, 1500);
  };

  // Handle textarea change - detect if user edited AI content
  const handleMissionVisionChange = (value: string) => {
    setAiAccepted(true);
    setMissionVisionText(value);
    
    // If the content has been edited after AI acceptance and differs from AI generated text
    if (aiAccepted && value !== aiGeneratedText && !contentEditedAfterAI) {
      setContentEditedAfterAI(true);
      setShowAIBadge(false); // Hide AI badge when user starts editing
    }
  };

  // Handle textarea blur - auto-save
  const handleMissionVisionBlur = () => {
    if (missionVisionText !== lastSavedContent && missionVisionText.length > 0) {
      // Save the previous content for undo
      setLastSavedContent(missionVisionText);
      setLastEditTime(new Date());
      setShowUndoButton(true);
      
      // Add edit activity to comments feed
      const editComment: Comment = {
        id: Math.random().toString(36).substr(2, 9),
        author: 'Allison M.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        content: 'edited Mission & Vision',
        timestamp: new Date(),
        type: 'section-edited'
      };
      
      const updatedComments = [...comments, editComment];
      setComments(updatedComments);
      
      // Save to localStorage
      const storageKey = `app-${applicationId}-section-${sectionId}-comments`;
      localStorage.setItem(storageKey, JSON.stringify(updatedComments));
      
      // Hide undo button after 10 seconds
      setTimeout(() => {
        setShowUndoButton(false);
      }, 10000);
    }
  };

  // Handle undo
  const handleUndo = () => {
    // Find the last saved content before the current change
    const storageKey = `app-${applicationId}-section-${sectionId}-previousContent`;
    const previousContent = localStorage.getItem(storageKey);
    
    if (previousContent) {
      setMissionVisionText(previousContent);
      setShowUndoButton(false);
      
      // Remove the last edit comment
      const updatedComments = comments.filter((c, idx) => {
        if (idx === comments.length - 1 && c.type === 'section-edited') {
          return false;
        }
        return true;
      });
      setComments(updatedComments);
      
      // Save to localStorage
      const commentsKey = `app-${applicationId}-section-${sectionId}-comments`;
      localStorage.setItem(commentsKey, JSON.stringify(updatedComments));
    }
  };

  // Store previous content before save for undo
  useEffect(() => {
    if (missionVisionText && lastSavedContent !== missionVisionText) {
      const storageKey = `app-${applicationId}-section-${sectionId}-previousContent`;
      localStorage.setItem(storageKey, lastSavedContent);
    }
  }, [lastSavedContent, missionVisionText, applicationId, sectionId]);

  const handleAddTeamMember = () => {
    if (newMemberName && newMemberEmail) {
      const newMember = {
        id: Math.random().toString(36).substr(2, 9),
        name: newMemberName,
        avatar: `https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1599566150163-29194dcaad36' : '1535713875002-d1d0cf377fde'}?w=100&h=100&fit=crop`
      };
      setTeamMembers([...teamMembers, newMember]);
      setNewMemberName("");
      setNewMemberEmail("");
    }
  };

  const handleRemoveTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter(m => m.id !== id));
  };

  // Section mapping
  const sections = [
    { id: "s1", name: "Mission & Vision" },
    { id: "s2", name: "Focus Area" },
    { id: "s3", name: "Program Details" },
    { id: "s4", name: "Performance Metrics" },
    { id: "s5", name: "Budget" },
    { id: "s6", name: "Narrative" },
    { id: "s7", name: "Documents" },
    { id: "s8", name: "Compliance" },
    { id: "s9", name: "Eligibility" },
  ];

  // Application mapping (matching the data structure from other components)
  const applications = [
    { id: "1", title: "Administration for Community Living (ACL) - Assistive Technology Alternative Financing Program" },
    { id: "2", title: "FY26 National Network Cooperative Agreement" },
  ];

  const currentApplication = applications.find(app => app.id === applicationId);
  const currentSectionIndex = sections.findIndex(s => s.id === sectionId);
  const currentSection = sections[currentSectionIndex];
  const previousSection = currentSectionIndex > 0 ? sections[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < sections.length - 1 ? sections[currentSectionIndex + 1] : null;

  // Load files from localStorage on mount
  useEffect(() => {
    const storageKey = `app-${applicationId}-section-${sectionId}-files`;
    const savedFiles = localStorage.getItem(storageKey);
    if (savedFiles) {
      setUploadedFiles(JSON.parse(savedFiles));
    }
  }, [applicationId, sectionId]);

  // Save files to localStorage whenever they change
  useEffect(() => {
    if (uploadedFiles.length > 0 || uploadedFiles.length === 0) {
      const storageKey = `app-${applicationId}-section-${sectionId}-files`;
      localStorage.setItem(storageKey, JSON.stringify(uploadedFiles));
    }
  }, [uploadedFiles, applicationId, sectionId]);

  // Load section completions from localStorage
  useEffect(() => {
    const storageKey = `app-${applicationId}-completions`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const completions = JSON.parse(saved);
      setSectionCompletions(completions);
      setIsMarkedComplete(completions[sectionId || ""] || false);
    }
  }, [applicationId, sectionId]);

  // Save section completions to localStorage
  useEffect(() => {
    if (applicationId && Object.keys(sectionCompletions).length > 0) {
      const storageKey = `app-${applicationId}-completions`;
      console.log(`Saving to localStorage - key: ${storageKey}, value:`, sectionCompletions);
      localStorage.setItem(storageKey, JSON.stringify(sectionCompletions));
    }
  }, [sectionCompletions, applicationId]);

  // Check if required documents are uploaded
  const hasSF424 = uploadedFiles.some(f => f.name.toLowerCase().includes("sf-424"));
  const hasSF424A = uploadedFiles.some(f => f.name.toLowerCase().includes("sf-424a"));
  const hasRequiredDocs = hasSF424 || hasSF424A;
  
  const pdfFiles = uploadedFiles.filter(f => f.type === "pdf");
  const excelFiles = uploadedFiles.filter(f => f.type === "excel");

  // File upload handlers
  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    
    const newFiles: UploadedFile[] = Array.from(files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.name.endsWith('.pdf') ? 'pdf' : 'excel',
      size: `${(file.size / 1024).toFixed(0)} KB`,
      uploadedAt: new Date().toISOString()
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const sectionHasContent = () => {
    if (sectionId === "s1") return missionVisionText.length > 0;
    if (sectionId === "s2") return selectedFocusAreas.length > 0;
    if (sectionId === "s3") return programDetailsText.length > 0;
    if (sectionId === "s4") return performanceMetricsText.length > 0;
    if (sectionId === "s5") return budgetAmount.length > 0;
    if (sectionId === "s6") return narrativeText.length > 0;
    if (sectionId === "s7") return uploadedFiles.length > 0;
    if (sectionId === "s8") return complianceChecked;
    if (sectionId === "s9") return eligibilitySelection.length > 0;
    return false;
  };

  const handleMarkComplete = (checked: boolean) => {
    if (!sectionId) return;
    
    setIsMarkedComplete(checked);
    const updatedCompletions = {
      ...sectionCompletions,
      [sectionId]: checked
    };
    console.log(`Marking section ${sectionId} as ${checked ? 'complete' : 'incomplete'}`);
    console.log('Updated completions:', updatedCompletions);
    setSectionCompletions(updatedCompletions);
  };

  // Navigation handlers
  const handleSaveContinue = () => {
    if (nextSection) {
      navigate(`/application/${applicationId}/s/${nextSection.id}`);
      // Scroll to top smoothly
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // Last section, go back to applications
      navigate("/applications");
    }
  };

  const handleSaveProgress = () => {
    console.log("Progress saved");
  };

  const handleBack = () => {
    if (previousSection) {
      navigate(`/application/${applicationId}/s/${previousSection.id}`);
      // Scroll to top smoothly
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // Status and Comment handlers
  const handleStatusChange = (newStatus: SectionStatus) => {
    const oldStatus = sectionStatus;
    setSectionStatus(newStatus);
    
    // Add status change to comments feed
    if (oldStatus !== newStatus) {
      const statusUpdate: Comment = {
        id: Math.random().toString(36).substr(2, 9),
        author: 'Allison M.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        content: '',
        timestamp: new Date(),
        type: 'status-change',
        statusFrom: oldStatus,
        statusTo: newStatus
      };
      setComments(prev => [...prev, statusUpdate]);
      
      // Save to localStorage
      const storageKey = `app-${applicationId}-section-${sectionId}-comments`;
      localStorage.setItem(storageKey, JSON.stringify([...comments, statusUpdate]));
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      author: 'Allison M.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: newComment,
      timestamp: new Date(),
      type: 'comment'
    };
    
    setComments(prev => [...prev, comment]);
    setNewComment('');
    
    // Save to localStorage
    const storageKey = `app-${applicationId}-section-${sectionId}-comments`;
    localStorage.setItem(storageKey, JSON.stringify([...comments, comment]));
  };

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return new Date(date).toLocaleDateString();
  };

  const getStatusBadgeStyles = (status: SectionStatus) => {
    switch (status) {
      case 'complete':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'revisit':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'flagged':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusLabel = (status: SectionStatus) => {
    switch (status) {
      case 'complete':
        return 'Complete';
      case 'revisit':
        return 'Revisit';
      case 'flagged':
        return 'Flagged for Errors';
      default:
        return 'Incomplete';
    }
  };

  // Load status and comments from localStorage
  useEffect(() => {
    if (applicationId && sectionId) {
      const statusKey = `app-${applicationId}-section-${sectionId}-status`;
      const commentsKey = `app-${applicationId}-section-${sectionId}-comments`;
      
      const savedStatus = localStorage.getItem(statusKey);
      const savedComments = localStorage.getItem(commentsKey);
      
      if (savedStatus) {
        setSectionStatus(savedStatus as SectionStatus);
      }
      
      if (savedComments) {
        const parsed = JSON.parse(savedComments);
        // Convert timestamp strings back to Date objects
        const commentsWithDates = parsed.map((c: any) => ({
          ...c,
          timestamp: new Date(c.timestamp)
        }));
        setComments(commentsWithDates);
      }
    }
  }, [applicationId, sectionId]);

  // Save status to localStorage whenever it changes
  useEffect(() => {
    if (applicationId && sectionId) {
      const statusKey = `app-${applicationId}-section-${sectionId}-status`;
      localStorage.setItem(statusKey, sectionStatus);
    }
  }, [sectionStatus, applicationId, sectionId]);

  // Render Documents Section (s7)
  if (sectionId === "s7") {
    return (
      <div className="h-screen flex flex-col bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white px-8 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <RouterLink to="/">
                    <BreadcrumbHome />
                  </RouterLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Applications</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-6xl mx-auto px-8 py-8">
            {/* Application Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
              {currentApplication?.title || 'Application'}
            </h1>

            {/* Section Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Documents
            </h3>

            {/* Enhanced Documents Component */}
            <DocumentsSectionV2 applicationId={applicationId || '1'} />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-gray-200 bg-white px-8 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              onClick={handleSaveContinue}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white"
            >
              Next
              <ChevronLeft className="w-4 h-4 rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Default section (Mission/Vision) - for other sections
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white px-8 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <RouterLink to="/">
                  <BreadcrumbHome />
                </RouterLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Applications</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 py-8">
          {/* Application Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Lustria, serif' }}>
            {currentApplication?.title || 'Application'}
          </h1>

          {sectionId === "s1" ? (
            <div>
              {/* Section Header with Team Members and Badges */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-base text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Mission & Vision
                  </h3>
                  {showAIBadge && (
                    <Badge className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-300 hover:bg-purple-50">
                      <Sparkles className="w-3.5 h-3.5 mr-1" />
                      AI Enhanced
                    </Badge>
                  )}
                </div>
                
                {/* Team Members - HIDDEN */}
                {/* <div className="flex items-center gap-2">
                  {teamMembers.slice(0, 3).map((member) => (
                    <div
                      key={member.id}
                      className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm"
                      title={member.name}
                    >
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <button
                    onClick={() => setTeamMembersModalOpen(true)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div> */}
              </div>

              {/* Last Edited Info - HIDDEN */}
              {/* <div className="flex items-center gap-2 mb-6">
                <span className="text-sm text-gray-500">
                  Last Edited: Allison M. - {lastEditTime ? formatTimeAgo(lastEditTime) : '2 hours ago'}
                </span>
                <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Allison M."
                    className="w-full h-full object-cover"
                  />
                </div>
              </div> */}

              {/* White Box Container */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                {/* Toolbar */}
                <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 flex items-center gap-4">
                  {/* Font Selector */}
                  <select 
                    className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    <option>Inter</option>
                    <option>Arial</option>
                    <option>Helvetica</option>
                  </select>

                  {/* Font Size */}
                  <select 
                    className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    <option>16px</option>
                    <option>14px</option>
                    <option>18px</option>
                    <option>20px</option>
                  </select>

                  <div className="w-px h-6 bg-gray-300" />

                  {/* Text Formatting */}
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Bold">
                    <Bold className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Italic">
                    <Italic className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Underline">
                    <Underline className="w-4 h-4 text-gray-700" />
                  </button>

                  <div className="w-px h-6 bg-gray-300" />

                  {/* Color Indicator */}
                  <button className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-gray-200 rounded transition-colors">
                    <div className="w-4 h-4 rounded-full bg-gray-900 border border-gray-300" />
                  </button>

                  <div className="w-px h-6 bg-gray-300" />

                  {/* Alignment */}
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Align Left">
                    <AlignLeft className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Align Center">
                    <AlignCenter className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Align Right">
                    <AlignRight className="w-4 h-4 text-gray-700" />
                  </button>

                  <div className="w-px h-6 bg-gray-300" />

                  {/* Lists */}
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Bullet List">
                    <List className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Numbered List">
                    <ListOrdered className="w-4 h-4 text-gray-700" />
                  </button>

                  <div className="w-px h-6 bg-gray-300" />

                  {/* Link and Image */}
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Insert Link">
                    <Link className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Insert Image">
                    <Image className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                {/* Text Area with AI Typing Effect */}
                <div className="relative">
                  {isTyping && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 pointer-events-none z-10 animate-pulse" />
                  )}
                  {isAcceptingAI && (
                    <div className="absolute inset-0 bg-white flex items-center justify-center z-20">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
                        <span className="text-sm font-medium text-purple-700">Accepting AI recommendation...</span>
                      </div>
                    </div>
                  )}
                  <textarea
                    value={aiAccepted || missionVisionText ? missionVisionText : typedText}
                    onChange={(e) => {
                      handleMissionVisionChange(e.target.value);
                    }}
                    placeholder="Enter your mission and vision..."
                    className="w-full min-h-[300px] p-6 rounded-b-lg focus:outline-none resize-none border-2 border-[#8B5CF6] focus:ring-2 focus:ring-purple-500 focus:border-[#8B5CF6]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.8' }}
                    maxLength={2000}
                    readOnly={isTyping || isAcceptingAI}
                    onBlur={handleMissionVisionBlur}
                  />
                  {isTyping && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-purple-100 px-3 py-1.5 rounded-full">
                      <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
                      <span className="text-xs font-medium text-purple-700">AI is typing...</span>
                    </div>
                  )}
                </div>

                {/* Footer with Character Count and Accept AI Recommendation */}
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {2000 - (aiAccepted || missionVisionText ? missionVisionText.length : typedText.length)} characters left
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleAcceptAI();
                          }
                        }}
                        className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-purple-500"
                        style={{ '--bg-brand': '#5925DC', '--border-brand': '#5925DC' } as React.CSSProperties}
                      />
                      <span className="text-sm text-[#8B5CF6] font-medium" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        Accept AI Recommendation
                      </span>
                    </label>
                  </div>
                  {showUndoButton && lastEditTime && (
                    <button
                      onClick={handleUndo}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors text-sm font-medium"
                      style={{ fontFamily: 'Cabin, sans-serif' }}
                    >
                      <Undo2 className="w-3.5 h-3.5" />
                      Undo
                    </button>
                  )}
                </div>
              </div>

              {/* Team Members Modal */}
              <Dialog open={teamMembersModalOpen} onOpenChange={setTeamMembersModalOpen}>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Manage Team Members</DialogTitle>
                    <DialogDescription>
                      Add or remove team members who can collaborate on this section.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    {/* Current Team Members */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900">Current Members</h4>
                      {teamMembers.map((member) => (
                        <div key={member.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                          <div className="flex items-center gap-3">
                            <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full" />
                            <span className="text-sm font-medium text-gray-900">{member.name}</span>
                          </div>
                          <button
                            onClick={() => handleRemoveTeamMember(member.id)}
                            className="p-1 hover:bg-red-50 rounded transition-colors text-red-600"
                          >
                            <UserMinus className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Add New Member */}
                    <div className="border-t pt-4 space-y-3">
                      <h4 className="text-sm font-medium text-gray-900">Invite New Member</h4>
                      <input
                        type="text"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                        placeholder="Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <input
                        type="email"
                        value={newMemberEmail}
                        onChange={(e) => setNewMemberEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <Button
                        onClick={handleAddTeamMember}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                        disabled={!newMemberName || !newMemberEmail}
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Invite Member
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ) : sectionId === "s2" ? (
            <div>
              <h3 className="text-base text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Focus Area <span className="text-gray-600">(20 points)</span> <span className="text-teal-600">*</span>
              </h3>

              {/* White Box Container */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  {['Education', 'Health', 'Environment', 'Community Development'].map((area) => (
                    <label key={area} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedFocusAreas.includes(area)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFocusAreas([...selectedFocusAreas, area]);
                          } else {
                            setSelectedFocusAreas(selectedFocusAreas.filter(a => a !== area));
                          }
                        }}
                        className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500 cursor-pointer"
                      />
                      <span className="text-base text-gray-700 group-hover:text-gray-900 transition-colors" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        {area}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : sectionId === "s3" ? (
            <div>
              <h3 className="text-base text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Program Details <span className="text-gray-600">(20 points)</span> <span className="text-teal-600">*</span>
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <textarea
                  value={programDetailsText}
                  onChange={(e) => setProgramDetailsText(e.target.value)}
                  placeholder="Describe the program details..."
                  className="w-full min-h-[200px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                  style={{ fontFamily: 'Cabin, sans-serif', fontSize: '14px', lineHeight: '1.6' }}
                  maxLength={2000}
                />
                <div className="mt-3 text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {2000 - programDetailsText.length} characters left
                </div>
              </div>
            </div>
          ) : sectionId === "s4" ? (
            <div>
              <h3 className="text-base text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Performance Metrics <span className="text-gray-600">(30 points)</span> <span className="text-red-600">*</span>
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <textarea
                  value={performanceMetricsText}
                  onChange={(e) => setPerformanceMetricsText(e.target.value)}
                  placeholder="Describe the performance metrics..."
                  className="w-full min-h-[200px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                  style={{ fontFamily: 'Cabin, sans-serif', fontSize: '14px', lineHeight: '1.6' }}
                  maxLength={2000}
                />
                <div className="mt-3 text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {2000 - performanceMetricsText.length} characters left
                </div>
              </div>
            </div>
          ) : sectionId === "s5" ? (
            <div>
              <h3 className="text-base text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Budget <span className="text-gray-600">(20 points)</span>
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <input
                  type="text"
                  value={budgetAmount}
                  onChange={(e) => setBudgetAmount(e.target.value)}
                  placeholder="Enter budget amount..."
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  style={{ fontFamily: 'Cabin, sans-serif', fontSize: '14px' }}
                />
              </div>
            </div>
          ) : sectionId === "s6" ? (
            <div>
              <h3 className="text-base text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Narrative <span className="text-gray-600">(30 points)</span>
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <textarea
                  value={narrativeText}
                  onChange={(e) => setNarrativeText(e.target.value)}
                  placeholder="Write your narrative..."
                  className="w-full min-h-[200px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                  style={{ fontFamily: 'Cabin, sans-serif', fontSize: '14px', lineHeight: '1.6' }}
                  maxLength={3000}
                />
                <div className="mt-3 text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {3000 - narrativeText.length} characters left
                </div>
              </div>
            </div>
          ) : sectionId === "s8" ? (
            <div>
              <h3 className="text-base text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Compliance <span className="text-red-600">*</span>
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={complianceChecked}
                    onChange={(e) => setComplianceChecked(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500"
                  />
                  <span className="text-base text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    I certify that all information provided is accurate and complete
                  </span>
                </label>
              </div>
            </div>
          ) : sectionId === "s9" ? (
            <div>
              <h3 className="text-base text-gray-900 mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Eligibility <span className="text-red-600">*</span>
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-3">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="eligibility"
                        value={option}
                        checked={eligibilitySelection === option}
                        onChange={(e) => setEligibilitySelection(e.target.value)}
                        className="w-5 h-5 border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-base text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-base text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Select a section to view and edit
              </p>
            </div>
          )}

          {/* Section Status & Comments - HIDDEN */}
          {/* <div className="mt-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Section Status
                  </label>
                  <select
                    value={sectionStatus}
                    onChange={(e) => handleStatusChange(e.target.value as SectionStatus)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  >
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                    <option value="revisit">Revisit</option>
                    <option value="flagged">Flagged for Errors</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => setShowComments(!showComments)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Comments & Activity
                  </span>
                  {comments.length > 0 && (
                    <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                      {comments.length}
                    </span>
                  )}
                </div>
                {showComments ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {showComments && (
                <div className="p-4 bg-gray-50">
                  {comments.length > 0 ? (
                    <div className="space-y-4 mb-4">
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3">
                          <img
                            src={comment.avatar}
                            alt={comment.author}
                            className="w-8 h-8 rounded-full flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="bg-white border border-gray-200 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                  {comment.author}
                                </span>
                                <span className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                  {formatTimeAgo(comment.timestamp)}
                                </span>
                              </div>
                              {comment.type === 'status-change' ? (
                                <div className="flex items-center gap-2 text-sm">
                                  <span className="text-gray-600">changed status from</span>
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusBadgeStyles(comment.statusFrom as SectionStatus)}`}>
                                    {getStatusLabel(comment.statusFrom as SectionStatus)}
                                  </span>
                                  <span className="text-gray-600">to</span>
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusBadgeStyles(comment.statusTo as SectionStatus)}`}>
                                    {getStatusLabel(comment.statusTo as SectionStatus)}
                                  </span>
                                </div>
                              ) : (
                                <p className="text-sm text-gray-700 whitespace-pre-wrap" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                  {comment.content}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        No comments yet. Be the first to add one!
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                      alt="Me"
                      className="w-8 h-8 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAddComment();
                          }
                        }}
                        placeholder="Add a comment..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        style={{ fontFamily: 'Cabin, sans-serif' }}
                      />
                      <button
                        onClick={handleAddComment}
                        disabled={!newComment.trim()}
                        className="px-4 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="border-t border-gray-200 bg-white px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleSaveContinue}
            className="flex items-center gap-2 px-6 py-2 text-sm text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            Save & Continue
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}