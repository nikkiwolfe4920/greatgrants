import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router";
import {
  Bookmark,
  Clock,
  Calendar,
  DollarSign,
  MapPin,
  Users,
  Award,
  Star,
  X,
  Sparkles,
  TrendingUp,
  Target,
  Banknote,
  Lightbulb
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
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
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Grant {
  id: string;
  title: string;
  description: string;
  status: "Open" | "Pending" | "Closed";
  maxAmount: number;
  poolAmount?: number;
  location: string;
  locationType: "Federal" | "State" | "National" | "Other";
  who: string;
  difficulty: "D.I.Y." | "Might Need Help" | "Expert Assistance";
  relevance: number;
  category: string;
  openDate?: string;
  closeDate?: string;
  image?: string;
  sectors?: string[];
  savedAt?: number;
  lastViewed?: number;
}

export function SavedGrantsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "saved");
  const [savedGrants, setSavedGrants] = useState<Grant[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Grant[]>([]);
  const [unsaveDialogOpen, setUnsaveDialogOpen] = useState(false);
  const [grantToUnsave, setGrantToUnsave] = useState<Grant | null>(null);

  // Load saved grants and recently viewed from localStorage
  useEffect(() => {
    const loadData = () => {
      const saved = JSON.parse(localStorage.getItem("savedGrants") || "[]");
      const recent = JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]");
      setSavedGrants(saved);
      setRecentlyViewed(recent);
    };

    loadData();

    // Listen for updates
    const handleUpdate = () => loadData();
    window.addEventListener("savedGrantsUpdated", handleUpdate);
    window.addEventListener("recentlyViewedUpdated", handleUpdate);

    return () => {
      window.removeEventListener("savedGrantsUpdated", handleUpdate);
      window.removeEventListener("recentlyViewedUpdated", handleUpdate);
    };
  }, []);

  // Update tab from URL
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleUnsaveGrant = (grant: Grant) => {
    setGrantToUnsave(grant);
    setUnsaveDialogOpen(true);
  };

  const confirmUnsave = () => {
    if (grantToUnsave) {
      const updatedGrants = savedGrants.filter(g => g.id !== grantToUnsave.id);
      setSavedGrants(updatedGrants);
      localStorage.setItem("savedGrants", JSON.stringify(updatedGrants));
      window.dispatchEvent(new Event("savedGrantsUpdated"));
    }
    setUnsaveDialogOpen(false);
    setGrantToUnsave(null);
  };

  const toggleSaveGrant = (e: React.MouseEvent, grant: Grant) => {
    e.stopPropagation();
    const saved = JSON.parse(localStorage.getItem("savedGrants") || "[]");
    const isSaved = saved.some((g: Grant) => g.id === grant.id);

    if (isSaved) {
      // Unsave - show dialog
      handleUnsaveGrant(grant);
    } else {
      // Save
      const grantToSave = {
        ...grant,
        savedAt: Date.now(),
        lastViewed: grant.lastViewed || Date.now()
      };
      const updated = [grantToSave, ...saved];
      localStorage.setItem("savedGrants", JSON.stringify(updated));
      setSavedGrants(updated);
      window.dispatchEvent(new Event("savedGrantsUpdated"));
    }
  };

  const isGrantSaved = (grantId: string) => {
    return savedGrants.some(g => g.id === grantId);
  };

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "D.I.Y.") return "bg-green-50 text-green-700 border-green-200";
    if (difficulty === "Might Need Help") return "bg-yellow-50 text-yellow-700 border-yellow-200";
    return "bg-red-50 text-red-700 border-red-200";
  };

  const renderGrantCard = (grant: Grant, showLastViewed: boolean = false) => (
    <div
      key={grant.id}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer group"
      onClick={() => navigate(`/grant/${grant.id}`)}
    >
      <div className="flex gap-4 p-5">
        {/* Grant Image */}
        <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
          {grant.image ? (
            <ImageWithFallback
              src={grant.image}
              alt={grant.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
              <Award className="w-8 h-8 text-teal-600" />
            </div>
          )}
        </div>

        {/* Grant Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-teal-600 transition-colors line-clamp-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                {grant.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                {grant.description}
              </p>
            </div>

            {/* Status & Relevance */}
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <Badge className={`${
                grant.status === "Open"
                  ? "bg-green-50 text-green-700 border-green-200"
                  : grant.status === "Pending"
                  ? "bg-amber-50 text-amber-700 border-amber-200"
                  : "bg-gray-50 text-gray-700 border-gray-200"
              } border`}>
                {grant.status}
              </Badge>
              {/* Purple percent badge - HIDDEN */}
              {/* <div className="flex items-center gap-1.5 px-2 py-1 bg-purple-50 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-xs font-semibold text-purple-700">{grant.relevance}%</span>
              </div> */}
            </div>
          </div>

          {/* Grant Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1.5">
              <Banknote className="w-4 h-4" />
              <span className="font-semibold text-gray-900">
                ${grant.maxAmount.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{grant.location}</span>
            </div>
            {grant.closeDate && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Closes {grant.closeDate}</span>
              </div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge className={`${getDifficultyColor(grant.difficulty)} border font-medium text-xs`}>
                {grant.difficulty}
              </Badge>
              {grant.sectors && grant.sectors.length > 0 && (
                <div className="flex items-center gap-1.5">
                  {grant.sectors.slice(0, 2).map((sector, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {sector}
                    </span>
                  ))}
                  {grant.sectors.length > 2 && (
                    <span className="text-xs text-gray-500">+{grant.sectors.length - 2}</span>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {showLastViewed && grant.lastViewed && (
                <span className="text-xs text-gray-500">
                  Last viewed {formatTimeAgo(grant.lastViewed)}
                </span>
              )}
              {showLastViewed ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => toggleSaveGrant(e, grant)}
                  className={`gap-1.5 ${
                    isGrantSaved(grant.id)
                      ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
                      : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isGrantSaved(grant.id) ? "fill-current" : ""}`} />
                  {isGrantSaved(grant.id) ? "Unsave" : "Save"}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUnsaveGrant(grant);
                  }}
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                >
                  <Bookmark className="w-4 h-4 mr-1.5 fill-current" />
                  Unsave
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1400px] mx-auto p-6">
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
            <BreadcrumbLink asChild>
              <Link to="/search">Grant Search</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Saved Grants</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-6">
        <div className="mb-3">
          <Bookmark className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
          Saved Grants
        </h1>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
          Access your saved grants and recently viewed opportunities
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-white border-b border-gray-200 w-full justify-start rounded-none p-0 h-auto">
          <TabsTrigger value="saved">
            Saved Grants ({savedGrants.length})
          </TabsTrigger>
          <TabsTrigger value="recent">
            Recently Viewed ({recentlyViewed.length})
          </TabsTrigger>
        </TabsList>

        {/* Saved Grants Tab with Sidebar */}
        <TabsContent value="saved" className="mt-0">
          <div className="flex gap-6">
            {/* Main Content */}
            <div className="flex-1 space-y-4 pt-6">
              {savedGrants.length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-16 flex flex-col items-center justify-center text-center">
                  <Bookmark className="w-16 h-16 text-gray-300 mb-4" />
                  <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    No Saved Grants
                  </h2>
                  <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Save grants from the search results to access them later
                  </p>
                  <Button onClick={() => navigate("/search")} className="bg-teal-600 hover:bg-teal-700 text-white">
                    Browse Grants
                  </Button>
                </div>
              ) : (
                savedGrants.map(grant => renderGrantCard(grant, false))
              )}
            </div>

            {/* Right Sidebar */}
            <aside className="w-80 flex-shrink-0">
              <div className="sticky top-6 pt-6 space-y-4">
                {/* Recently Viewed */}
                {recentlyViewed.length > 0 && (
                  <div className="bg-white rounded-xl p-5 border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-teal-600" />
                      <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>Recently Viewed</h3>
                    </div>
                    <div className="space-y-3">
                      {recentlyViewed.slice(0, 3).map((grant) => (
                        <div
                          key={grant.id}
                          onClick={() => navigate(`/grant/${grant.id}`)}
                          className="p-3 border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50/50 cursor-pointer transition-all group"
                        >
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1.5 group-hover:text-teal-700 transition-colors" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            {grant.title}
                          </h4>
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <div className="flex items-center gap-1 text-gray-600">
                              <DollarSign className="w-3 h-3" />
                              <span className="font-medium">${(grant.maxAmount / 1000).toFixed(0)}K</span>
                            </div>
                            {grant.lastViewed && (
                              <span className="text-gray-500">{formatTimeAgo(grant.lastViewed)}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Saved Designs Module */}
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-teal-600" />
                    <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Saved Designs: Your Grant Workflow, Remembered
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Grant discovery and writing is rarely linear—it's iterative, layered, and often interrupted. Saved Designs give you a structured way to pick up exactly where you left off. Whether you're comparing opportunities, refining narratives, or revisiting past work, everything is organized and accessible—so momentum isn't lost, just paused.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </TabsContent>

        {/* Recently Viewed Tab with Sidebar */}
        <TabsContent value="recent" className="mt-0">
          <div className="flex gap-6">
            {/* Main Content */}
            <div className="flex-1 space-y-4 pt-6">
              {recentlyViewed.length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-16 flex flex-col items-center justify-center text-center">
                  <Clock className="w-16 h-16 text-gray-300 mb-4" />
                  <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    No Recently Viewed Grants
                  </h2>
                  <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Grants you view will appear here for quick access
                  </p>
                  <Button onClick={() => navigate("/search")} className="bg-teal-600 hover:bg-teal-700 text-white">
                    Browse Grants
                  </Button>
                </div>
              ) : (
                recentlyViewed.map(grant => renderGrantCard(grant, true))
              )}
            </div>

            {/* Right Sidebar */}
            <aside className="w-80 flex-shrink-0">
              <div className="sticky top-6 pt-6">
                {/* Saved Designs Module */}
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-teal-600" />
                    <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Saved Designs: Your Grant Workflow, Remembered
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Grant discovery and writing is rarely linear—it's iterative, layered, and often interrupted. Saved Designs give you a structured way to pick up exactly where you left off. Whether you're comparing opportunities, refining narratives, or revisiting past work, everything is organized and accessible—so momentum isn't lost, just paused.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </TabsContent>
      </Tabs>

      {/* Unsave Confirmation Dialog */}
      <Dialog open={unsaveDialogOpen} onOpenChange={setUnsaveDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle style={{ fontFamily: 'Lustria, serif' }}>
              Unsave Grant?
            </DialogTitle>
            <DialogDescription className="text-gray-600 leading-relaxed">
              Are you sure you want to remove this grant from your saved list? You can always save it again later.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setUnsaveDialogOpen(false)}
              className="border-gray-300"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmUnsave}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Unsave Grant
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
