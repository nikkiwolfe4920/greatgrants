import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import {
  AlertCircle,
  Archive,
  ArchiveRestore,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  MoreVertical,
  Send,
  Undo2,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";
import {
  InformationRequestForm,
  EMPTY_INFORMATION_REQUEST,
  type InformationRequestState,
} from "@/app/components/partner-information/InformationRequestForm";
import {
  mockPartnerApplications,
  type PartnerApplication,
  type PartnerApplicationStatus,
} from "@/data/partnerApplications";

const todayLabel = () => new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });

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
  const [pendingSubmitId, setPendingSubmitId] = useState<string | null>(null);

  const byStatus = (status: PartnerApplicationStatus) => applications.filter((a) => a.status === status);
  // One list now that the status toggle is gone: decisions first, then work still in progress.
  const STATUS_ORDER: PartnerApplicationStatus[] = ["decision", "active", "in-review"];
  const visible = applications
    .filter((a) => a.status !== "archived")
    .sort((a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status));
  const pendingSubmit = applications.find((a) => a.id === pendingSubmitId);

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

  const submitApplication = () => {
    if (!pendingSubmit) return;
    const { id, programName, primeApplicant } = pendingSubmit;
    update(id, (a) => ({ ...a, status: "in-review", submittedOn: todayLabel() }));
    setPendingSubmitId(null);
    toast.success("Application submitted", {
      description: `${programName} moved to In Review. ${primeApplicant} has been notified.`,
      action: { label: "Undo", onClick: () => update(id, (a) => ({ ...a, status: "active", submittedOn: undefined })) },
    });
  };

  const withdraw = (app: PartnerApplication) => {
    update(app.id, (a) => ({ ...a, status: "active", submittedOn: undefined }));
    toast(`${app.programName} moved back to Active`);
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
    <div className="max-w-[1400px] mx-auto p-8">
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
            <BreadcrumbPage>Partnership Applications</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
          <div>
            <div className="mb-3">
              <Users className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl text-gray-900" style={{ fontFamily: "Lustria, serif", fontWeight: 600 }}>
              Partnership Applications
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">Manage the applications you're partnering on.</p>
        </div>
      </div>

      <section aria-label="Partnership applications" className="space-y-4">
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
            const nextDue = app.assignedSections[0];
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
                    {app.status === "active" && nextDue && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Due {nextDue.dueDate}</span>
                      </div>
                    )}
                    {app.status === "in-review" && app.submittedOn && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Submitted on {app.submittedOn}</span>
                      </div>
                    )}
                    {app.decision && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Decided on {app.decision.decidedOn}</span>
                      </div>
                    )}
                  </div>

                  {app.status === "active" && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-end">
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={() => setPendingSubmitId(app.id)}>
                        <Send className="w-4 h-4 mr-2" />
                        Submit application
                      </Button>
                    </div>
                  )}

                  {app.status === "in-review" && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-end">
                      <Button variant="outline" className="bg-white" onClick={() => withdraw(app)}>
                        <Undo2 className="w-4 h-4 mr-2" />
                        Move back to Active
                      </Button>
                    </div>
                  )}
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
      </section>

      <AlertDialog open={pendingSubmitId !== null} onOpenChange={(open) => !open && setPendingSubmitId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit this application?</AlertDialogTitle>
            <AlertDialogDescription>
              Your assigned sections for {pendingSubmit?.programName} will be sent to {pendingSubmit?.primeApplicant} and
              the application will move to In Review. You can move it back to Active while it's under review.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={submitApplication} className="bg-teal-600 hover:bg-teal-700 text-white">
              Submit application
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
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
  const details: [string, string | undefined][] = [
    ["Partner request", app.need],
    ["Estimated subaward", app.subawardRange ? `${app.subawardRange} (estimate)` : app.mouAmount],
    ["Period of performance", app.period],
    ["NOFO deadline", app.nofoDeadline],
    ["Information due", app.informationDue],
  ];

  return (
    <div className="space-y-6">
      <dl className="flex flex-wrap gap-x-8 gap-y-3">
        {details
          .filter(([, value]) => value)
          .map(([label, value]) => (
            <div key={label} className="flex flex-col gap-0.5">
              <dt className="text-xs text-gray-500">{label}</dt>
              <dd className="text-sm font-semibold text-gray-900">{value}</dd>
            </div>
          ))}
      </dl>

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
