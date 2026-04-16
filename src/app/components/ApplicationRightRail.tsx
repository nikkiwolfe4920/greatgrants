import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  MessageSquare,
  Send,
  AlertCircle,
  Users,
  TrendingUp,
  CheckCircle2,
  FileText,
  Target,
  BarChart3,
  Clock,
  Award,
  ChevronRight,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: Date;
  type: 'comment' | 'status-change';
}

interface Section {
  id: string;
  name: string;
  status: string;
}

interface Application {
  id: string;
  title: string;
  status: string;
  sections: Section[];
}

interface ApplicationRightRailProps {
  applicationId: string;
  applicationTitle: string;
  activeSection: Section | null;
  isExpanded: boolean;
  sections: Section[];
  allApplications?: Application[];
}

type ApplicationStatus = 'in-progress' | 'ready-for-review' | 'in-review' | 'approved';

const STATUS_OPTIONS = [
  { value: 'in-progress', label: 'In Progress', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { value: 'ready-for-review', label: 'Ready for Review', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { value: 'in-review', label: 'In Review', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { value: 'approved', label: 'Approved', color: 'bg-teal-50 text-teal-700 border-teal-200' },
];

const CONTENT_GAPS = [
  {
    id: 'religious',
    title: 'Religious Challenges',
    description: 'Address faith-based considerations and community religious dynamics',
    icon: Users,
    importance: 'high'
  },
  {
    id: 'practices',
    title: 'Best Practices',
    description: 'Include industry standards and proven methodologies',
    icon: Target,
    importance: 'medium'
  },
  {
    id: 'data',
    title: 'Supporting Data',
    description: 'Add statistical evidence and research findings',
    icon: BarChart3,
    importance: 'high'
  }
];

export function ApplicationRightRail({
  applicationId,
  applicationTitle,
  activeSection,
  isExpanded,
  sections,
  allApplications = []
}: ApplicationRightRailProps) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<ApplicationStatus>('in-progress');
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [completedGaps, setCompletedGaps] = useState<string[]>([]);
  const [showRightRail, setShowRightRail] = useState(true);

  // Load comments and status for active section
  useEffect(() => {
    if (applicationId && activeSection) {
      const commentsKey = `app-${applicationId}-section-${activeSection.id}-rail-comments`;
      const statusKey = `app-${applicationId}-section-${activeSection.id}-rail-status`;
      const gapsKey = `app-${applicationId}-section-${activeSection.id}-gaps`;

      const savedComments = localStorage.getItem(commentsKey);
      const savedStatus = localStorage.getItem(statusKey);
      const savedGaps = localStorage.getItem(gapsKey);

      if (savedComments) {
        const parsed = JSON.parse(savedComments);
        const commentsWithDates = parsed.map((c: any) => ({
          ...c,
          timestamp: new Date(c.timestamp)
        }));
        setComments(commentsWithDates);
      } else {
        setComments([]);
      }

      if (savedStatus) {
        setStatus(savedStatus as ApplicationStatus);
      } else {
        setStatus('in-progress');
      }

      if (savedGaps) {
        setCompletedGaps(JSON.parse(savedGaps));
      } else {
        setCompletedGaps([]);
      }
    }
  }, [applicationId, activeSection?.id]);

  const handleStatusChange = (newStatus: ApplicationStatus) => {
    const oldStatus = status;
    setStatus(newStatus);

    if (applicationId && activeSection && oldStatus !== newStatus) {
      const statusUpdate: Comment = {
        id: Math.random().toString(36).substr(2, 9),
        author: 'Allison M.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        content: `Changed status from ${STATUS_OPTIONS.find(s => s.value === oldStatus)?.label} to ${STATUS_OPTIONS.find(s => s.value === newStatus)?.label}`,
        timestamp: new Date(),
        type: 'status-change'
      };

      const updatedComments = [...comments, statusUpdate];
      setComments(updatedComments);

      const commentsKey = `app-${applicationId}-section-${activeSection.id}-rail-comments`;
      const statusKey = `app-${applicationId}-section-${activeSection.id}-rail-status`;

      localStorage.setItem(commentsKey, JSON.stringify(updatedComments));
      localStorage.setItem(statusKey, newStatus);
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim() || !applicationId || !activeSection) return;

    const comment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      author: 'Allison M.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: newComment,
      timestamp: new Date(),
      type: 'comment'
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    setNewComment('');

    const commentsKey = `app-${applicationId}-section-${activeSection.id}-rail-comments`;
    localStorage.setItem(commentsKey, JSON.stringify(updatedComments));
  };

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return new Date(date).toLocaleDateString();
  };

  const toggleGapCompletion = (gapId: string) => {
    const updated = completedGaps.includes(gapId)
      ? completedGaps.filter(id => id !== gapId)
      : [...completedGaps, gapId];

    setCompletedGaps(updated);

    if (applicationId && activeSection) {
      const gapsKey = `app-${applicationId}-section-${activeSection.id}-gaps`;
      localStorage.setItem(gapsKey, JSON.stringify(updated));
    }
  };

  const currentStatus = STATUS_OPTIONS.find(s => s.value === status);

  // Calculate completion stats for expand button
  const completedSections = sections.filter(s => s.status === 'complete').length;
  const totalSections = sections.length;
  const completionPercentage = Math.round((completedSections / totalSections) * 100);

  // Determine gradient and icon based on completion
  let bgGradient = '';
  let icon = null;
  let label = '';

  if (completionPercentage === 0) {
    // Not started: Orange/amber gradient
    bgGradient = 'linear-gradient(to left, #fb923c, #f97316)';
    icon = (
      <AlertCircle className="w-5 h-5" />
    );
    label = 'PROGRESS';
  } else if (completionPercentage < 100) {
    // In progress: Teal gradient
    bgGradient = 'linear-gradient(to left, #14b8a6, #0d9488)';
    icon = (
      <TrendingUp className="w-5 h-5" />
    );
    label = 'PROGRESS';
  } else {
    // Complete: Green gradient
    bgGradient = 'linear-gradient(to left, #3ccb7f, #087443)';
    icon = (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
        <path d="M17.6667 8.57144V9.3381C17.6656 11.1351 17.0838 12.8837 16.0078 14.323C14.9318 15.7623 13.4194 16.8152 11.6961 17.3247C9.97286 17.8342 8.13105 17.773 6.44539 17.1503C4.75974 16.5275 3.32055 15.3765 2.34247 13.869C1.36439 12.3615 0.899827 10.5782 1.01806 8.78503C1.1363 6.99191 1.83101 5.28504 2.99857 3.919C4.16613 2.55295 5.74399 1.60092 7.49683 1.20489C9.24966 0.808862 11.0836 0.990051 12.725 1.72144M17.6667 2.66667L9.33333 11.0083L6.83333 8.50833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    label = 'PROGRESS';
  }

  // Expand button (when rail is collapsed)
  if (!showRightRail) {
    return (
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        onClick={() => setShowRightRail(true)}
        className="fixed right-0 top-1/3 z-20 text-white px-3 py-4 rounded-l-xl shadow-xl hover:shadow-2xl transition-all group"
        style={{ background: bgGradient }}
        title={`${completedSections}/${totalSections} sections complete`}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
          <div className="writing-mode-vertical text-xs font-semibold tracking-wider" style={{ fontFamily: 'Cabin, sans-serif' }}>
            {label}
          </div>
        </motion.div>
      </motion.button>
    );
  }

  // Summary view (when accordion is collapsed) - Show grant-level overview
  if (!isExpanded) {
    return (
      <AnimatePresence mode="wait">
        <motion.aside
          key="summary"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 320, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="bg-[#F9FAFB] border-l border-gray-200 overflow-hidden flex-shrink-0 relative sticky top-0 h-screen"
        >
          {/* Collapse Button */}
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            onClick={() => setShowRightRail(false)}
            className="absolute top-6 -left-4 z-10 w-8 h-8 bg-white rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center transition-all group"
            style={{
              borderColor: '#e5e7eb'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#717BBC';
              e.currentTarget.style.backgroundColor = '#f0f1f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
            title="Hide application progress"
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-4 h-4 text-gray-600 group-hover:text-[#717BBC]" />
            </motion.div>
          </motion.button>

          <div className="overflow-y-auto h-full">
            <div className="p-6">
              <div className="space-y-4">
              {/* Active Grants Overview */}
              <motion.div
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                layout
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-teal-600" />
                    <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Active Grants
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Click to expand and view details
                  </p>
                </div>

                <div className="p-4 space-y-3">
                  {allApplications.length > 0 ? (
                    allApplications.map((app) => (
                      <div
                        key={app.id}
                        className="p-3 border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50/50 transition-all"
                      >
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          {app.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">
                            {app.sections.filter(s => s.status === 'complete').length}/{app.sections.length} sections
                          </span>
                          <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-xs">
                            {app.status}
                          </Badge>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 text-center py-4">No active grants</p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
          </div>
        </motion.aside>
      </AnimatePresence>
    );
  }

  // Full detail view (when accordion is expanded)
  if (!activeSection) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        key="detail"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 320, opacity: 1 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="bg-[#F9FAFB] border-l border-gray-200 overflow-hidden flex-shrink-0 relative sticky top-0 h-screen"
      >
        {/* Collapse Button */}
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          onClick={() => setShowRightRail(false)}
          className="absolute top-6 -left-4 z-10 w-8 h-8 bg-white rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center transition-all group"
          style={{
            borderColor: '#e5e7eb'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#717BBC';
            e.currentTarget.style.backgroundColor = '#f0f1f9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
          title="Hide application progress"
        >
          <motion.div
            whileHover={{ x: -2 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-4 h-4 text-gray-600 group-hover:text-[#717BBC]" />
          </motion.div>
        </motion.button>

        <div className="overflow-y-auto h-full">
          <div className="p-6">
            <div className="space-y-4">
          {/* Grant Title & Section Status Card - Hidden for now */}
          {/* <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            layout
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-teal-600" />
                <h3 className="text-xs font-semibold text-gray-900 line-clamp-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {applicationTitle}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {activeSection.name}
                </h4>
              </div>
            </div>

            <div className="p-4">
              <p className="text-xs text-gray-600 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>Section Status</p>
              <select
                value={status}
                onChange={(e) => handleStatusChange(e.target.value as ApplicationStatus)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
                style={{
                  fontFamily: 'Cabin, sans-serif',
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                {STATUS_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div> */}

          {/* Comments & Activity Card - Hidden for now */}
          {/* <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            layout
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-teal-50/50 to-blue-50/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-teal-600" />
                  <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Comments & Activity
                  </h3>
                </div>
                {comments.length > 0 && (
                  <Badge className="bg-teal-100 text-teal-700 text-xs">
                    {comments.length}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                {activeSection.name}
              </p>
            </div>

            <div className="p-4 bg-gray-50 max-h-80 overflow-y-auto">
              {comments.length > 0 ? (
                <div className="space-y-3 mb-4">
                  <AnimatePresence>
                    {comments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-2"
                      >
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-7 h-7 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="bg-white border border-gray-200 rounded-lg p-2.5">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                {comment.author}
                              </span>
                              <span className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                {formatTimeAgo(comment.timestamp)}
                              </span>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap" style={{ fontFamily: 'Cabin, sans-serif' }}>
                              {comment.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="text-center py-6">
                  <MessageSquare className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    No comments yet
                  </p>
                </div>
              )}

              <div className="flex gap-2">
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
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  style={{ fontFamily: 'Cabin, sans-serif' }}
                />
                <button
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                  className="px-3 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div> */}

          {/* Content Gaps Card */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            layout
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Content Gaps to Address
                </h3>
              </div>
              <p className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Key areas that strengthen your application
              </p>
            </div>

            <div className="p-4 space-y-3">
              {CONTENT_GAPS.map((gap) => {
                const GapIcon = gap.icon;
                const isCompleted = completedGaps.includes(gap.id);

                return (
                  <motion.div
                    key={gap.id}
                    layout
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      isCompleted
                        ? 'border-teal-200 bg-teal-50/50'
                        : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/30'
                    }`}
                    onClick={() => toggleGapCompletion(gap.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                        isCompleted ? 'bg-teal-600 border-teal-600' : 'border-gray-300'
                      }`}>
                        {isCompleted && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <GapIcon className={`w-4 h-4 ${isCompleted ? 'text-teal-600' : 'text-gray-600'}`} />
                          <h4 className={`text-xs font-semibold ${isCompleted ? 'text-teal-900 line-through' : 'text-gray-900'}`} style={{ fontFamily: 'Cabin, sans-serif' }}>
                            {gap.title}
                          </h4>
                          {gap.importance === 'high' && !isCompleted && (
                            <Badge className="bg-red-50 text-red-700 border-red-200 text-xs px-1.5 py-0">
                              High
                            </Badge>
                          )}
                        </div>
                        <p className={`text-xs leading-relaxed ${isCompleted ? 'text-teal-700' : 'text-gray-600'}`} style={{ fontFamily: 'Cabin, sans-serif' }}>
                          {gap.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Need Expert Help Card - Same style as Content Gaps */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            layout
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Need Expert Help?
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                Our certified grant consultants can help strengthen this section
              </p>
            </div>

            <div className="p-4 space-y-3">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Expert Review Service
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Get personalized feedback from experienced grant writers who've helped secure over $500M in funding
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>Section-by-section review</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>Best practice recommendations</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>48-hour turnaround</span>
                  </li>
                </ul>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-gray-600">Starting at</span>
                    <div>
                      <span className="text-lg font-bold text-gray-900">$199</span>
                      <span className="text-gray-500"> /section</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => navigate('/consultants')}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white text-xs"
                    size="sm"
                  >
                    Connect with Expert
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
      </motion.aside>
    </AnimatePresence>
  );
}
