import { useState } from "react";
import { toast } from "sonner";
import {
  AlertCircle,
  Archive,
  ArchiveRestore,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MoreVertical,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { PartnershipPageShell, PartnerDetailsStrip } from "@/app/components/partner-information/PartnershipPageShell";
import {
  InformationRequestForm,
  EMPTY_INFORMATION_REQUEST,
  type InformationRequestState,
} from "@/app/components/partner-information/InformationRequestForm";
import {
  mockPartnerApplications,
  type PartnerApplication,
} from "@/data/partnerApplications";

/**
 * /partnership-applications — applications this org has been invited into as
 * a partner/sub-recipient, moved through Active → In Review → Partner
 * Decision (→ Archived), mirroring the status-toggle pattern on
 * /applications. Decisions the user hasn't opened yet show a green dot on the
 * "Partner Decision" toggle.
 */
export function PartnershipApplicationsPage() {
  // Opens on the accepted NEA partnership (the Figma state), already read.
  const [applications, setApplications] = useState<PartnerApplication[]>(() =>
    mockPartnerApplications.map((a) => (a.id === "p4" && a.decision ? { ...a, decision: { ...a.decision, read: true } } : a)),
  );
  const [expandedId, setExpandedId] = useState<string>("p4");
  const [infoRequests, setInfoRequests] = useState<Record<string, InformationRequestState>>({});

  const visible = applications.filter((a) => a.status !== "archived");

  const update = (id: string, patch: (a: PartnerApplication) => PartnerApplication) =>
    setApplications((apps) => apps.map((a) => (a.id === id ? patch(a) : a)));

  const markRead = (id: string) =>
    update(id, (a) => (a.decision && !a.decision.read ? { ...a, decision: { ...a.decision, read: true } } : a));

  const toggleExpanded = (app: PartnerApplication) => {
    const opening = expandedId !== app.id;
    setExpandedId(opening ? app.id : "");
    // Opening a decision is what counts as "reading" it.
    if (opening && app.status === "decision") markRead(app.id);
  };

  const archive = (app: PartnerApplication) => {
    update(app.id, (a) => ({ ...a, status: "archived" }));
    if (expandedId === app.id) setExpandedId("");
    toast("Application archived", {
      action: { label: "Undo", onClick: () => update(app.id, (a) => ({ ...a, status: app.status })) },
    });
  };

  const unarchive = (app: PartnerApplication) =>
    update(app.id, (a) => ({ ...a, status: a.decision ? "decision" : a.submittedOn ? "in-review" : "active" }));

  return (
    <PartnershipPageShell>
        {visible.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No partnership applications</h3>
            <p className="text-gray-600 text-sm">Applications you're invited to partner on will appear here.</p>
          </div>
        ) : (
          visible.map((app) => {
            const isExpanded = expandedId === app.id;
            const isUnread = !!app.decision && !app.decision.read;
            const detailsId = `partner-details-${app.id}`;

            return (
              <div
                key={app.id}
                className={`bg-white rounded-lg border ${isUnread ? "border-green-300" : "border-gray-200"}`}
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-gray-900">{app.programName}</h3>
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50">{app.roleBadge}</Badge>
                        <StatusBadge app={app} />
                        {app.decision?.outcome === "accepted" &&
                          (infoRequests[app.id]?.sentOn ? (
                            <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50">Sent for approval</Badge>
                          ) : (
                            // Action required: stronger fill, border and weight than the informational badges.
                            <Badge className="bg-amber-100 text-amber-800 border-amber-300 font-semibold hover:bg-amber-100">
                              <AlertCircle aria-hidden="true" />
                              Request Needed
                            </Badge>
                          ))}
                        {isUnread && (
                          <Badge className="bg-green-600 text-white hover:bg-green-600">New</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {(app.status === "decision" || app.status === "archived") && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" aria-label={`More actions for ${app.programName}`}>
                              <MoreVertical className="w-5 h-5 text-gray-500" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            {app.status === "archived" ? (
                              <DropdownMenuItem onClick={() => unarchive(app)} className="gap-3 py-2.5">
                                <ArchiveRestore className="w-4 h-4" />
                                <span>Unarchive</span>
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem onClick={() => archive(app)} className="gap-3 py-2.5 text-gray-700">
                                <Archive className="w-4 h-4" />
                                <span>Archive</span>
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                      <button
                        onClick={() => toggleExpanded(app)}
                        className="p-1 rounded hover:bg-gray-100"
                        aria-expanded={isExpanded}
                        aria-controls={detailsId}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${app.programName}`}
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-600">
                    <div>Lead applicant: {app.primeApplicant}</div>
                    {app.decision && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Decided on {app.decision.decidedOn}</span>
                      </div>
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div id={detailsId} className="p-6 space-y-5">
                    {app.decision && <DecisionPanel app={app} />}
                    <PartnerDetails
                      app={app}
                      infoRequest={infoRequests[app.id] ?? EMPTY_INFORMATION_REQUEST}
                      onInfoRequestChange={(patch) =>
                        setInfoRequests((m) => ({ ...m, [app.id]: patch(m[app.id] ?? EMPTY_INFORMATION_REQUEST) }))
                      }
                    />
                  </div>
                )}
              </div>
            );
          })
        )}
    </PartnershipPageShell>
  );
}

function StatusBadge({ app }: { app: PartnerApplication }) {
  if (app.decision) {
    return app.decision.outcome === "accepted" ? (
      <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">Accepted</Badge>
    ) : (
      <Badge className="bg-red-50 text-red-700 border-red-200 hover:bg-red-50">Not accepted</Badge>
    );
  }
  if (app.status === "in-review") {
    return <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50">In review</Badge>;
  }
  const stage = app.stages.find((s) => s.id === app.currentStage);
  if (!stage) return null;
  return stage.id === "committed" ? (
    <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">{stage.label}</Badge>
  ) : (
    <Badge className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100">{stage.label}</Badge>
  );
}

function DecisionPanel({ app }: { app: PartnerApplication }) {
  const decision = app.decision!;
  const accepted = decision.outcome === "accepted";
  const Icon = accepted ? CheckCircle2 : XCircle;
  return (
    <div
      role="status"
      className={`rounded-xl border p-5 flex gap-3 ${accepted ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
    >
      <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${accepted ? "text-green-700" : "text-red-700"}`} aria-hidden="true" />
      <div>
        <h4 className={`font-semibold mb-1.5 ${accepted ? "text-green-800" : "text-red-800"}`}>
          {accepted ? "Partnership accepted" : "Partnership not accepted"}
        </h4>
        <p className="text-sm text-gray-700">{decision.message}</p>
      </div>
    </div>
  );
}

function PartnerDetails({
  app,
  infoRequest,
  onInfoRequestChange,
}: {
  app: PartnerApplication;
  infoRequest: InformationRequestState;
  onInfoRequestChange: (patch: (s: InformationRequestState) => InformationRequestState) => void;
}) {
  const readOnly = app.status !== "active";
  const accepted = app.decision?.outcome === "accepted";
  return (
    <div className="space-y-6">
      <PartnerDetailsStrip app={app} />

      <hr className="border-gray-200" />

      {accepted ? (
        <InformationRequestForm app={app} state={infoRequest} onChange={onInfoRequestChange} />
      ) : (
        <div className="space-y-4">
          {!app.decision && (
            <div className="border border-gray-200 rounded-xl p-5">
              <h4 className="font-semibold text-gray-900 mb-4">Partnership status</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {app.stages.map((stage) => {
                  const isCurrent = stage.id === app.currentStage;
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
              {app.mouNote && <p className="text-[13px] text-gray-600 mt-4">{app.mouNote}</p>}
            </div>
          )}

          <div className="border border-gray-200 rounded-xl p-5">
            <h4 className="font-semibold text-gray-900 mb-2">Application access</h4>
            <p className="text-sm text-gray-600 mb-4">
              You can read the application narrative and your own partnership details. Other partners' details and amounts
              aren't shown. Sections assigned to you:
            </p>
            <div className="space-y-3">
              {app.assignedSections.map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{section.name}</p>
                    <p className="text-xs text-gray-500">
                      Assigned by {section.assignedBy} · Due {section.dueDate}
                    </p>
                  </div>
                  <SectionBadge status={section.status} />
                  <Button variant="outline" size="sm" className="bg-white shrink-0">
                    {readOnly ? "View section" : "Open section"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionBadge({ status }: { status: "assigned" | "in-progress" | "complete" }) {
  if (status === "complete") {
    return <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">Complete</Badge>;
  }
  if (status === "in-progress") {
    return <Badge className="bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-50">In Progress</Badge>;
  }
  return <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50">Assigned</Badge>;
}
