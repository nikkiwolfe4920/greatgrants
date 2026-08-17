import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router";
import { Eye, Bell, Trash2, Clock, Calendar, MapPin, Banknote, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { StopWatchingDialog } from "../components/StopWatchingDialog";
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
import { useGrantAlerts } from "@/hooks/useGrantAlerts";
import { grantDetails } from "@/data/grantDetails";

const TAB_TRIGGER_CLASS =
  "gap-2 !rounded-none !border-0 border-b-[3px] border-transparent data-[state=active]:!border-0 data-[state=active]:border-b-[3px] data-[state=active]:!border-b-teal-600 data-[state=active]:!text-teal-600 data-[state=active]:!bg-transparent data-[state=active]:!shadow-none !px-4 !pt-3 !pb-3 !bg-transparent !text-gray-600 hover:!text-gray-900 !shadow-none !flex-none";

interface WatchedGrantData {
  id: string;
  title: string;
  description?: string;
  status?: "Open" | "Pending" | "Closed";
  maxAmount?: number;
  location?: string;
  closeDate?: string;
  difficulty?: string;
  sectors?: string[];
  image?: string;
  lastViewed?: number;
}

const grantDetailsById = new Map(grantDetails.map((g) => [g.id, g]));

// Alerts created before useGrantAlerts started snapshotting the grant's own
// display fields (title, description, amount, location, etc.) only have
// `grantId` — no `.grant` data — so their card would otherwise render with
// no thumbnail and no description. Backfill any missing fields here from the
// grant detail catalog (the same data GrantDetailPage.tsx reads from) rather
// than trusting the snapshot alone.
const enrichGrant = (grant: WatchedGrantData): WatchedGrantData => {
  const catalogEntry = grantDetailsById.get(grant.id);
  if (!catalogEntry) return grant;
  return {
    ...grant,
    description: grant.description ?? catalogEntry.description,
    status: grant.status ?? catalogEntry.status,
    maxAmount: grant.maxAmount ?? catalogEntry.maxAmount,
    location: grant.location ?? catalogEntry.location,
    closeDate: grant.closeDate ?? catalogEntry.closeDate,
    difficulty: grant.difficulty ?? catalogEntry.difficulty,
    sectors: grant.sectors ?? catalogEntry.sectors,
    image: grant.image ?? catalogEntry.image,
  };
};

/**
 * The Watch List — every grant a user has turned "Watch" on for, from
 * /search, a grant detail page, or /eligibility-assessment (see
 * useGrantAlerts), plus the grants they've recently viewed regardless of
 * watch status. The earlier, separate Saved Grants page/feature has been
 * removed and fully merged into this one — Watch is now the only
 * grant-tracking action anywhere in the app.
 *
 * Two tabs, styled like the ones on /organization:
 * - "Grant Opportunity Alerts" (default) — the watch list itself, rendered
 *   with the same grant card design Saved Grants used to use (thumbnail,
 *   status, title, description, $, location, close date, tags, hover
 *   state). No "Grant Opportunity Alerts" title on the card itself — the
 *   tab it lives under already says that. Two distinct actions per row,
 *   both backed by useGrantAlerts: the switch pauses/resumes email alerts
 *   (setAlertEnabled) without taking the grant off the list, and the trash
 *   icon removes it entirely (removeAlert) — destructive, so it's confirmed
 *   via StopWatchingDialog.
 * - "Recently Viewed" — grants viewed on their detail page (see
 *   GrantDetailPage), independent of whether they're being watched. Same
 *   card design, with a "last viewed" timestamp and the same Watch/Watching
 *   toggle used everywhere else instead of alert controls.
 */
export function WatchListPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "alerts");
  const { alerts, isGrantAlertEnabled, setAlertEnabled, removeAlert } = useGrantAlerts();
  const [recentlyViewed, setRecentlyViewed] = useState<WatchedGrantData[]>([]);
  const [stopWatchingDialogOpen, setStopWatchingDialogOpen] = useState(false);
  const [watchTargetToRemove, setWatchTargetToRemove] = useState<{ grantId: string; title: string } | null>(null);

  const watchedGrants = alerts.filter((alert) => !!alert.grantId);

  // Load recently viewed grants from localStorage
  useEffect(() => {
    const loadRecentlyViewed = () => {
      setRecentlyViewed(JSON.parse(localStorage.getItem("recentlyViewedGrants") || "[]"));
    };
    loadRecentlyViewed();
    window.addEventListener("recentlyViewedUpdated", loadRecentlyViewed);
    return () => window.removeEventListener("recentlyViewedUpdated", loadRecentlyViewed);
  }, []);

  // Update tab from URL
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const handleToggle = (alert: any) => {
    setAlertEnabled({ id: alert.grantId, title: alert.name.replace(/ Alert$/, "") }, !alert.enabled, {
      silent: true,
    });
  };

  const handleDeleteClick = (alert: any) => {
    setWatchTargetToRemove({ grantId: alert.grantId, title: alert.name.replace(/ Alert$/, "") });
    setStopWatchingDialogOpen(true);
  };

  const handleWatchToggle = (grant: WatchedGrantData) => {
    if (isGrantAlertEnabled(grant.id)) {
      // Turning Watch off is destructive (deletes the alert) — confirm first.
      setWatchTargetToRemove({ grantId: grant.id, title: grant.title });
      setStopWatchingDialogOpen(true);
      return;
    }
    // Turning Watch on is instant — no modal, just a toast (see useGrantAlerts).
    setAlertEnabled(grant, true);
  };

  const confirmRemove = () => {
    if (watchTargetToRemove) {
      removeAlert(watchTargetToRemove.grantId, { grantTitle: watchTargetToRemove.title });
    }
    setStopWatchingDialogOpen(false);
    setWatchTargetToRemove(null);
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

  const getDifficultyColor = (difficulty?: string) => {
    if (difficulty === "D.I.Y.") return "bg-green-50 text-green-700 border-green-200";
    if (difficulty === "Might Need Help") return "bg-yellow-50 text-yellow-700 border-yellow-200";
    if (difficulty === "Expert Assistance") return "bg-red-50 text-red-700 border-red-200";
    return "bg-gray-50 text-gray-700 border-gray-200";
  };

  const getStatusColor = (status?: string) => {
    if (status === "Open") return "bg-green-50 text-green-700 border-green-200";
    if (status === "Pending") return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-gray-50 text-gray-700 border-gray-200";
  };

  const renderThumbnail = (grant: WatchedGrantData) => (
    <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
      {grant.image ? (
        <ImageWithFallback src={grant.image} alt={grant.title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
          <Award className="w-8 h-8 text-teal-600" />
        </div>
      )}
    </div>
  );

  const renderMeta = (grant: WatchedGrantData) => (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
      {typeof grant.maxAmount === "number" && (
        <div className="flex items-center gap-1.5">
          <Banknote className="w-4 h-4" />
          <span className="font-semibold text-gray-900">${grant.maxAmount.toLocaleString()}</span>
        </div>
      )}
      {grant.location && (
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>{grant.location}</span>
        </div>
      )}
      {grant.closeDate && (
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>Closes {grant.closeDate}</span>
        </div>
      )}
    </div>
  );

  const renderTags = (grant: WatchedGrantData) => (
    <div className="flex items-center gap-3 flex-wrap">
      {grant.difficulty && (
        <Badge className={`${getDifficultyColor(grant.difficulty)} border font-medium text-xs`}>
          {grant.difficulty}
        </Badge>
      )}
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
  );

  const renderAlertCard = (alert: any) => {
    const rawGrant: WatchedGrantData = alert.grant || { id: alert.grantId, title: alert.name.replace(/ Alert$/, "") };
    const grant = enrichGrant(rawGrant);
    return (
      <div
        key={alert.id}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer group"
        onClick={() => navigate(`/grant/${alert.grantId}`)}
      >
        <div className="flex gap-4 p-5">
          {renderThumbnail(grant)}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <h3
                  className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-teal-600 transition-colors line-clamp-2"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {grant.title}
                </h3>
                {grant.description && (
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {grant.description}
                  </p>
                )}
              </div>
              <Badge className={`${getStatusColor(grant.status)} border shrink-0`}>{grant.status || "Open"}</Badge>
            </div>

            {renderMeta(grant)}
            {renderTags(grant)}

            {/* Alert controls — email, frequency, on/off, remove */}
            <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600 min-w-0">
                <Bell className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="truncate">
                  {alert.email} • {alert.frequency} emails
                </span>
                <span className="text-xs text-gray-400 shrink-0 whitespace-nowrap">{alert.alertsSent} sent</span>
              </div>
              <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                <Switch checked={alert.enabled} onCheckedChange={() => handleToggle(alert)} />
                <button
                  className="text-gray-400 hover:text-red-600 transition-colors p-1"
                  onClick={() => handleDeleteClick(alert)}
                  title="Stop watching"
                  aria-label="Stop watching"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderRecentCard = (rawGrant: WatchedGrantData) => {
    const grant = enrichGrant(rawGrant);
    const watching = isGrantAlertEnabled(grant.id);
    return (
      <div
        key={grant.id}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer group"
        onClick={() => navigate(`/grant/${grant.id}`)}
      >
        <div className="flex gap-4 p-5">
          {renderThumbnail(grant)}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <h3
                  className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-teal-600 transition-colors line-clamp-2"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {grant.title}
                </h3>
                {grant.description && (
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {grant.description}
                  </p>
                )}
              </div>
              <Badge className={`${getStatusColor(grant.status)} border shrink-0`}>{grant.status || "Open"}</Badge>
            </div>

            {renderMeta(grant)}

            <div className="flex items-center justify-between gap-3 flex-wrap">
              {renderTags(grant)}
              <div className="flex items-center gap-3">
                {grant.lastViewed && (
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    Last viewed {formatTimeAgo(grant.lastViewed)}
                  </span>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWatchToggle(grant);
                  }}
                  className={`gap-1.5 ${
                    watching
                      ? "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
                      : "border-gray-200 hover:border-teal-200 hover:bg-teal-50"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  {watching ? "Watching" : "Watch"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
            <BreadcrumbPage>Watch List</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-6">
        <div className="mb-3">
          <Eye className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif", fontWeight: 600 }}>
          Watch List
        </h1>
        <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
          Manage the grants you're watching and revisit what you've recently viewed.
        </p>
      </div>

      {/* Tabs — same underlined style used on /organization */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="!bg-white !border-b !border-gray-200 !p-0 !h-auto !w-full !justify-start !rounded-none !inline-flex">
          <TabsTrigger value="alerts" className={TAB_TRIGGER_CLASS}>
            Grant Opportunity Alerts ({watchedGrants.length})
          </TabsTrigger>
          <TabsTrigger value="recent" className={TAB_TRIGGER_CLASS}>
            Recently Viewed ({recentlyViewed.length})
          </TabsTrigger>
        </TabsList>

        {/* Grant Opportunity Alerts Tab */}
        <TabsContent value="alerts" className="mt-0">
          <div className="space-y-4 pt-6">
            {watchedGrants.length === 0 ? (
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-16 flex flex-col items-center justify-center text-center">
                <Eye className="w-16 h-16 text-gray-300 mb-4" strokeWidth={1.5} />
                <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Nothing on your watch list yet
                </h2>
                <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Select "Watch" on a grant from search results or its opportunity page to track it here.
                </p>
                <Button onClick={() => navigate("/search")} className="bg-teal-600 hover:bg-teal-700 text-white">
                  Browse Grants
                </Button>
              </div>
            ) : (
              watchedGrants.map(renderAlertCard)
            )}
          </div>
        </TabsContent>

        {/* Recently Viewed Tab */}
        <TabsContent value="recent" className="mt-0">
          <div className="space-y-4 pt-6">
            {recentlyViewed.length === 0 ? (
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-16 flex flex-col items-center justify-center text-center">
                <Clock className="w-16 h-16 text-gray-300 mb-4" />
                <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Cabin, sans-serif" }}>
                  No Recently Viewed Grants
                </h2>
                <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Grants you view will appear here for quick access
                </p>
                <Button onClick={() => navigate("/search")} className="bg-teal-600 hover:bg-teal-700 text-white">
                  Browse Grants
                </Button>
              </div>
            ) : (
              recentlyViewed.map(renderRecentCard)
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Stop Watching Confirmation — shared by the trash icon (alerts tab)
          and the Watch → off toggle (recently viewed tab) */}
      <StopWatchingDialog
        open={stopWatchingDialogOpen}
        onOpenChange={setStopWatchingDialogOpen}
        onConfirm={confirmRemove}
      />
    </div>
  );
}
