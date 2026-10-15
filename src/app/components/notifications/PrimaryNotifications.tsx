import { useState } from "react";
import { useNavigate } from "react-router";
import { ClipboardCheck, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import {
  SUBRECIPIENT_ITEM_COUNT,
  primaryNotifications,
  type PartnershipDecision,
  type PrimaryNotification,
} from "@/data/partnershipNotifications";
import { CABIN, Entity, NotificationRow, NotificationsCard } from "./NotificationsCard";

/**
 * Notifications for the primary applicant: requests waiting on a decision, and
 * partners who've finished their part. Approving or declining notifies the
 * sub-recipient, so both go through a confirmation that says so — and the row
 * then settles into its outcome instead of leaving two live buttons behind.
 */

const PRIMARY_CTA = "bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-600/30";

type RequestNotification = Extract<PrimaryNotification, { status: "request-received" }>;

export function PrimaryNotifications() {
  const [items, setItems] = useState<PrimaryNotification[]>(primaryNotifications);

  const markRead = (id: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, read: true } : i)));

  const decide = (id: string, decision: PartnershipDecision) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.status === "request-received" ? { ...i, decision, read: true } : i,
      ),
    );

  return (
    <NotificationsCard
      id="primary-notifications"
      title="Partnership notifications"
      items={items}
      onMarkAllRead={() => setItems((prev) => prev.map((i) => ({ ...i, read: true })))}
      emptyTitle="You're all caught up"
      emptyBody="We'll let you know when an organization asks to partner on your application."
      renderItem={(n) =>
        n.status === "request-received" ? (
          <RequestRow n={n} onOpen={() => markRead(n.id)} onDecide={(d) => decide(n.id, d)} />
        ) : (
          <CompletedRow n={n} onOpen={() => markRead(n.id)} />
        )
      }
    />
  );
}

function RequestRow({
  n,
  onOpen,
  onDecide,
}: {
  n: RequestNotification;
  onOpen: () => void;
  onDecide: (decision: PartnershipDecision) => void;
}) {
  const navigate = useNavigate();
  const [pending, setPending] = useState<PartnershipDecision | null>(null);
  const [note, setNote] = useState("");

  const review = () => {
    onOpen();
    navigate(n.to);
  };

  const decided = n.decision;

  return (
    <>
      <NotificationRow
        icon={UserPlus}
        tone={decided === "approved" ? "green" : decided === "declined" ? "red" : "blue"}
        statusLabel={
          decided === "approved" ? "Approved" : decided === "declined" ? "Declined" : "Needs your review"
        }
        read={n.read}
        time={n.time}
        actions={
          <>
            <Button size="sm" className={decided ? undefined : PRIMARY_CTA} variant={decided ? "outline" : "default"} onClick={review}>
              Review Application
            </Button>
            {decided ? (
              <span role="status" className="text-xs text-gray-600" style={CABIN}>
                {decided === "approved"
                  ? "You approved this request."
                  : "You declined this request."}
              </span>
            ) : (
              <div className="flex items-center gap-1.5" role="group" aria-label="Mark request as">
                <span className="text-xs text-gray-600" style={CABIN}>
                  Mark:
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-800"
                  onClick={() => setPending("approved")}
                >
                  Approve
                </Button>
                <Button size="sm" variant="outline" onClick={() => setPending("declined")}>
                  Decline
                </Button>
              </div>
            )}
          </>
        }
      >
        You've received a request for partnership from <Entity>{n.subrecipientName}</Entity> for{" "}
        <Entity>{n.partnerNeed}</Entity> for <Entity>{n.grantName}</Entity>.
      </NotificationRow>

      <AlertDialog
        open={pending !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPending(null);
            setNote("");
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {pending === "approved" ? "Approve" : "Decline"} {n.subrecipientName}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              {pending === "approved"
                ? `They'll be notified and asked to complete ${SUBRECIPIENT_ITEM_COUNT} quick items for your ${n.partnerNeed.toLowerCase()} role.`
                : `They'll be notified that they weren't approved for your ${n.partnerNeed.toLowerCase()} role. Notes you add are shared with them.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          {pending === "declined" && (
            <div>
              <label htmlFor={`decline-note-${n.id}`} className="block text-sm font-medium text-gray-900 mb-1.5">
                Note for {n.subrecipientName} <span className="font-normal text-gray-500">(optional)</span>
              </label>
              <Textarea
                id={`decline-note-${n.id}`}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Share context that helps them understand the decision"
                rows={3}
              />
            </div>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={pending === "approved" ? PRIMARY_CTA : undefined}
              onClick={() => pending && onDecide(pending)}
            >
              {pending === "approved" ? "Approve partner" : "Decline request"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function CompletedRow({
  n,
  onOpen,
}: {
  n: Extract<PrimaryNotification, { status: "items-completed" }>;
  onOpen: () => void;
}) {
  const navigate = useNavigate();
  return (
    <NotificationRow
      icon={ClipboardCheck}
      tone="green"
      statusLabel="Ready to review"
      read={n.read}
      time={n.time}
      actions={
        <Button
          size="sm"
          className={PRIMARY_CTA}
          onClick={() => {
            onOpen();
            navigate(n.to);
          }}
        >
          View Completed Application
        </Button>
      }
    >
      <Entity>{n.subrecipientName}</Entity> for <Entity>{n.partnerNeed}</Entity> for{" "}
      <Entity>{n.grantName}</Entity> completed their {SUBRECIPIENT_ITEM_COUNT} quick items to
      complete their part of the application.
    </NotificationRow>
  );
}
