import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, Bell, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
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
import { Link } from "react-router";
import { useGrantAlerts } from "@/hooks/useGrantAlerts";

/**
 * The Watch List — every grant a user has turned "Watch" on for, from
 * /search, a grant detail page, or /eligibility-assessment (see
 * useGrantAlerts). Older localStorage records without a `grantId` may still
 * exist from the removed saved-search/program-level alerts, so they're
 * filtered out here rather than assuming the array is already clean.
 *
 * Two distinct actions per row, both backed by useGrantAlerts:
 * - The switch pauses/resumes email alerts (setAlertEnabled) without taking
 *   the grant off the Watch List.
 * - The trash icon removes the grant from the Watch List entirely
 *   (removeAlert) — destructive, so it's confirmed via StopWatchingDialog,
 *   the same dialog shown when unwatching from the Watch button elsewhere.
 */
export function WatchListPage() {
  const navigate = useNavigate();
  const { alerts, setAlertEnabled, removeAlert } = useGrantAlerts();
  const [stopWatchingDialogOpen, setStopWatchingDialogOpen] = useState(false);
  const [alertToRemove, setAlertToRemove] = useState<any | null>(null);

  const watchedGrants = alerts.filter((alert) => !!alert.grantId);

  const handleToggle = (alert: any) => {
    setAlertEnabled({ id: alert.grantId, title: alert.name.replace(/ Alert$/, "") }, !alert.enabled, {
      silent: true,
    });
  };

  const handleDeleteClick = (alert: any) => {
    setAlertToRemove(alert);
    setStopWatchingDialogOpen(true);
  };

  const confirmRemove = () => {
    if (alertToRemove) {
      removeAlert(alertToRemove.grantId, { grantTitle: alertToRemove.name.replace(/ Alert$/, "") });
    }
    setStopWatchingDialogOpen(false);
    setAlertToRemove(null);
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
        <h1 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
          Watch List
        </h1>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
          Manage your items that you've added to your watch list.
        </p>
      </div>

      {/* Grant Opportunity Alerts */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="w-5 h-5 text-teal-600" />
          <h2 className="text-base font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Grant Opportunity Alerts
          </h2>
        </div>

        {watchedGrants.length === 0 ? (
          <div className="text-center py-16">
            <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Nothing on your watch list yet
            </h3>
            <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Select "Watch" on a grant from search results or its opportunity page to track it here.
            </p>
            <Button onClick={() => navigate("/search")} className="bg-teal-600 hover:bg-teal-700 text-white">
              Browse Grants
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {watchedGrants.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start justify-between gap-4 p-5 border border-gray-200 rounded-lg"
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="text-base font-semibold text-gray-900">{alert.name}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {alert.alertsSent} alerts sent
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {alert.email} • {alert.frequency} emails
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
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
            ))}
          </div>
        )}
      </div>

      {/* Stop Watching Confirmation */}
      <StopWatchingDialog
        open={stopWatchingDialogOpen}
        onOpenChange={setStopWatchingDialogOpen}
        onConfirm={confirmRemove}
      />
    </div>
  );
}

