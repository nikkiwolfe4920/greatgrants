import { useState } from "react";
import { toast } from "sonner";
import { BookOpen, Download, LayoutGrid, List, Pencil, Plus, Trash2, ArrowUpDown } from "lucide-react";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { SopOpportunityForm } from "../components/admin/SopOpportunityForm";
import { GrantResultCard } from "../components/GrantResultCard";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import {
  SOP_SEED,
  emptyOpportunity,
  nextOpportunityId,
  parseSopDate,
  toCardGrant,
  type SopOpportunity,
} from "@/data/sopOpportunities";

/* ─────────────────────────────────────────────────────────────────
   /super-admin-sop — Private Opportunities (Super Admin) intake & publishing

   List follows the Figma "Super Admin: Private Opportunities List" frame.
   "New Opportunity" opens the intake form; published records appear in the
   list, where each card can be edited or deleted.
   Records live in page state for now (no backend yet).
───────────────────────────────────────────────────────────────── */

type SortKey = "relevance" | "amount" | "deadline" | "recent";
const SORT_LABELS: Record<SortKey, string> = {
  relevance: "Relevance",
  amount: "Funding Amount",
  deadline: "Deadline",
  recent: "Recently Added",
};

type View = { kind: "list" } | { kind: "new"; id: string } | { kind: "edit"; id: string };

function IconAction({
  label,
  onClick,
  danger,
  children,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={label}
          onClick={onClick}
          className={`size-8 flex items-center justify-center rounded-md border border-transparent text-gray-500 transition-colors ${
            danger ? "hover:bg-red-50 hover:text-red-700 hover:border-red-200" : "hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={4}>
        <p className="text-sm">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function SuperAdminSopPage() {
  const [records, setRecords] = useState<SopOpportunity[]>(SOP_SEED);
  const [view, setView] = useState<View>({ kind: "list" });
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [sortBy, setSortBy] = useState<SortKey>("relevance");
  const [pendingDelete, setPendingDelete] = useState<SopOpportunity | null>(null);

  // "Recently Added" = newest first; records are appended, so reverse source order.
  const sorted = [...records].sort((a, b) => {
    if (sortBy === "amount") return Number(b.awardMax) - Number(a.awardMax);
    if (sortBy === "deadline") {
      const t = (o: SopOpportunity) => (o.deadlineType === "date" ? parseSopDate(o.deadline)?.getTime() ?? Infinity : Infinity);
      return t(a) - t(b);
    }
    return 0;
  });
  const results = sortBy === "recent" ? [...records].reverse() : sorted;

  function publish(record: SopOpportunity) {
    const exists = records.some((r) => r.id === record.id);
    setRecords((prev) => (exists ? prev.map((r) => (r.id === record.id ? record : r)) : [...prev, record]));
    setView({ kind: "list" });
    toast.success(exists ? "Changes published" : "Opportunity published");
  }

  function closeEarly(id: string) {
    setRecords((prev) => prev.map((r) => (r.id === id ? { ...r, closedEarly: true } : r)));
    setView({ kind: "list" });
    toast.success("Opportunity closed");
  }

  function confirmDelete() {
    if (!pendingDelete) return;
    setRecords((prev) => prev.filter((r) => r.id !== pendingDelete.id));
    toast.success("Opportunity deleted");
    setPendingDelete(null);
  }

  const formRecord =
    view.kind === "edit"
      ? records.find((r) => r.id === view.id)
      : view.kind === "new"
      ? emptyOpportunity(view.id)
      : undefined;

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-white">
        <AdminSidebar />

        <main className="flex-1 min-w-0 overflow-y-auto">
          <div className="w-full p-6">
            {formRecord && view.kind !== "list" ? (
              <SopOpportunityForm
                key={`${view.kind}-${view.id}`}
                mode={view.kind === "edit" ? "edit" : "new"}
                initial={formRecord}
                onCancel={() => setView({ kind: "list" })}
                onPublish={publish}
                onCloseEarly={closeEarly}
              />
            ) : (
              <>
                <div className="flex items-start justify-between">
                  <h1 className="text-2xl text-gray-900 leading-8" style={{ fontFamily: "Lustria, serif" }}>
                    Private Opportunities
                  </h1>
                  <Button
                    onClick={() => setView({ kind: "new", id: nextOpportunityId() })}
                    className="gap-2 bg-teal-600 text-white hover:bg-teal-700 px-5"
                  >
                    <Plus className="size-4" />
                    New Opportunity
                  </Button>
                </div>

                <section className="mt-4" aria-live="polite">
                  <div className="flex items-center justify-between pt-3 mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {results.length} <span className="text-gray-500 font-normal">grants</span>
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-white border border-gray-200 rounded-lg p-0.5">
                        {(
                          [
                            ["list", "List view", List],
                            ["grid", "Grid view", LayoutGrid],
                          ] as const
                        ).map(([mode, label, Icon]) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setViewMode(mode)}
                            aria-label={label}
                            aria-pressed={viewMode === mode}
                            className={`p-1.5 rounded transition-colors ${
                              viewMode === mode ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-700"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </button>
                        ))}
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-2">
                            <ArrowUpDown className="w-3.5 h-3.5" />
                            <span className="text-sm">{SORT_LABELS[sortBy]}</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-44">
                          {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                            <DropdownMenuItem key={key} onClick={() => setSortBy(key)}>
                              {SORT_LABELS[key]}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="w-3.5 h-3.5" />
                        Export
                      </Button>
                    </div>
                  </div>

                  {results.length === 0 ? (
                    <div className="border border-gray-200 rounded-xl py-12 text-center">
                      <p className="text-sm font-semibold text-gray-700">No private opportunities yet</p>
                      <p className="text-xs text-gray-400 mt-1">Select New Opportunity to add the first one.</p>
                    </div>
                  ) : (
                    <div className={viewMode === "grid" ? "grid grid-cols-1 xl:grid-cols-2 gap-4" : "space-y-3"}>
                      {results.map((o) => (
                        <GrantResultCard
                          key={o.id}
                          grant={toCardGrant(o)}
                          onOpen={() => setView({ kind: "edit", id: o.id })}
                          actions={
                            <>
                              <IconAction label={`Edit ${o.title}`} onClick={() => setView({ kind: "edit", id: o.id })}>
                                <Pencil className="size-4" />
                              </IconAction>
                              <IconAction label={`Delete ${o.title}`} danger onClick={() => setPendingDelete(o)}>
                                <Trash2 className="size-4" />
                              </IconAction>
                              <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200 ml-2">
                                <BookOpen className="size-3" />
                                Private Opportunity
                              </Badge>
                            </>
                          }
                        />
                      ))}
                    </div>
                  )}
                </section>
              </>
            )}
          </div>
        </main>
      </div>

      <AlertDialog open={pendingDelete !== null} onOpenChange={(open) => !open && setPendingDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this opportunity?</AlertDialogTitle>
            <AlertDialogDescription>
              “{pendingDelete?.title}” will be removed and no longer shown to nonprofits. This can't be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700" onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </TooltipProvider>
  );
}
