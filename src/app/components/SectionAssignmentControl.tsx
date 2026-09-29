import { Check, ChevronDown, Clock } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { CURRENT_USER_ID, getOrgMember, orgMembers } from "@/data/orgMembers";
import { formatRelativeTime, REVIEW_STATUS_LABEL, type SectionReviewStatus } from "@/lib/sectionAssignments";

const STATUS_TRIGGER_CLASSES: Record<SectionReviewStatus, string> = {
  "in-progress": "border-gray-200 bg-white text-gray-700",
  approved: "border-green-200 bg-green-50 text-green-700",
};

interface SectionAssignmentControlProps {
  assigneeId: string;
  /** null renders no status control at all — used on /applications for sections that haven't been started yet. */
  reviewStatus: SectionReviewStatus | null;
  lastSavedAt?: string | null;
  onAssign: (memberId: string) => void;
  onReviewStatusChange: (status: SectionReviewStatus) => void;
  /** "default" for the full section header on the section-editing page, "compact" for list rows on /applications. */
  size?: "default" | "compact";
  showLastSaved?: boolean;
  className?: string;
}

export function SectionAssignmentControl({
  assigneeId,
  reviewStatus,
  lastSavedAt,
  onAssign,
  onReviewStatusChange,
  size = "default",
  showLastSaved = true,
  className,
}: SectionAssignmentControlProps) {
  const assignee = getOrgMember(assigneeId);
  const compact = size === "compact";

  const lastSaved = showLastSaved && (
    <div className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap">
      <Clock className="w-3 h-3" />
      Last saved {formatRelativeTime(lastSavedAt)}
    </div>
  );

  const controlsRow = (
    <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className={cn(
                "flex items-center gap-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors",
                compact ? "pl-1 pr-2 py-0.5" : "pl-1.5 pr-2.5 py-1",
              )}
              title={`Assigned to ${assignee.name}`}
            >
              <Avatar className={compact ? "size-5" : "size-6"}>
                <AvatarFallback
                  style={{ backgroundColor: assignee.avatarColor }}
                  className={cn("font-semibold text-gray-700", compact ? "text-[9px]" : "text-[10px]")}
                >
                  {assignee.initials}
                </AvatarFallback>
              </Avatar>
              <span className={cn("font-medium text-gray-700 whitespace-nowrap", compact ? "text-xs" : "text-sm")}>
                {assignee.name}
              </span>
              <ChevronDown className={cn("text-gray-400 shrink-0", compact ? "w-3 h-3" : "w-3.5 h-3.5")} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel>Assign to</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {orgMembers.map((member) => (
              <DropdownMenuItem
                key={member.id}
                onClick={() => onAssign(member.id)}
                className="gap-2.5 py-2"
              >
                <Avatar className="size-6 shrink-0">
                  <AvatarFallback
                    style={{ backgroundColor: member.avatarColor }}
                    className="text-[10px] font-semibold text-gray-700"
                  >
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="truncate">
                    {member.name}
                    {member.id === CURRENT_USER_ID && <span className="text-gray-400"> (you)</span>}
                  </div>
                  <div className="text-xs text-gray-400">{member.role}</div>
                </div>
                {member.id === assigneeId && <Check className="w-4 h-4 text-gray-900 shrink-0" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {reviewStatus !== null && (
          <Select value={reviewStatus} onValueChange={(value) => onReviewStatusChange(value as SectionReviewStatus)}>
            <SelectTrigger
              size="sm"
              className={cn(
                "font-medium",
                compact ? "h-7 w-[124px] text-xs" : "h-8 w-[136px] text-xs",
                STATUS_TRIGGER_CLASSES[reviewStatus],
              )}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              {(Object.keys(REVIEW_STATUS_LABEL) as SectionReviewStatus[]).map((status) => (
                <SelectItem key={status} value={status}>
                  {REVIEW_STATUS_LABEL[status]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
    </div>
  );

  return (
    <div className={cn("flex flex-col items-end gap-1.5 shrink-0", className)}>
      {/* On the full section header (/application/:id/s/:id) the last-saved
          timestamp sits above the assign/status controls; the compact list
          rows on /applications keep it below, under the row it annotates. */}
      {size === "default" ? (
        <>
          {lastSaved}
          {controlsRow}
        </>
      ) : (
        <>
          {controlsRow}
          {lastSaved}
        </>
      )}
    </div>
  );
}
