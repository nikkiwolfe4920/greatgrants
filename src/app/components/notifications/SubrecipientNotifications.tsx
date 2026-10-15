import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import {
  SUBRECIPIENT_ITEM_COUNT,
  subrecipientNotifications,
  type SubrecipientNotification,
} from "@/data/partnershipNotifications";
import { CABIN, Entity, NotificationRow, NotificationsCard } from "./NotificationsCard";

/**
 * Notifications for the sub-recipient: the life of their request to join
 * someone else's application. Every state ends in one obvious next step —
 * once approved, that step is the teal button; before and after, it's a
 * quiet "View Application".
 */

const PRIMARY_CTA = "bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-600/30";

export function SubrecipientNotifications() {
  const [items, setItems] = useState<SubrecipientNotification[]>(subrecipientNotifications);

  const markRead = (id: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, read: true } : i)));

  return (
    <NotificationsCard
      id="subrecipient-notifications"
      title="Partnership notifications"
      items={items}
      onMarkAllRead={() => setItems((prev) => prev.map((i) => ({ ...i, read: true })))}
      emptyTitle="You're all caught up"
      emptyBody="We'll let you know when a primary applicant responds to your partnership interest."
      renderItem={(n) => <SubrecipientRow n={n} onOpen={() => markRead(n.id)} />}
    />
  );
}

function SubrecipientRow({ n, onOpen }: { n: SubrecipientNotification; onOpen: () => void }) {
  const navigate = useNavigate();
  const go = () => {
    onOpen();
    navigate(n.to);
  };

  switch (n.status) {
    case "in-review":
      return (
        <NotificationRow
          icon={Clock}
          tone="amber"
          statusLabel="In review"
          read={n.read}
          time={n.time}
          actions={
            <Button size="sm" variant="outline" onClick={go}>
              View Application
            </Button>
          }
        >
          You've applied for partnership interest to support <Entity>{n.partnerNeed}</Entity> for{" "}
          <Entity>{n.grantName}</Entity> and it's currently in review with{" "}
          <Entity>{n.primaryName}</Entity>.
        </NotificationRow>
      );

    case "approved": {
      const percent = Math.round((n.completedItems / SUBRECIPIENT_ITEM_COUNT) * 100);
      const started = n.completedItems > 0;
      return (
        <NotificationRow
          icon={CheckCircle2}
          tone="teal"
          statusLabel="Approved"
          read={n.read}
          time={n.time}
          detail={
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-1" style={CABIN}>
                <span>
                  {n.completedItems} of {SUBRECIPIENT_ITEM_COUNT} items complete
                </span>
                <span className="font-semibold tabular-nums text-gray-900">{percent}%</span>
              </div>
              <Progress
                value={percent}
                aria-label={`${n.partnerNeed} application progress`}
                className="h-1.5 bg-gray-100 [&>div]:bg-teal-600"
              />
            </div>
          }
          actions={
            <Button size="sm" className={PRIMARY_CTA} onClick={go}>
              {started ? "Continue Progress" : "Get Started"}
            </Button>
          }
        >
          You've been approved for partnership to support <Entity>{n.partnerNeed}</Entity> for{" "}
          <Entity>{n.grantName}</Entity>.{" "}
          {started
            ? `${SUBRECIPIENT_ITEM_COUNT - n.completedItems} quick things left to complete your part of the application.`
            : `We need ${SUBRECIPIENT_ITEM_COUNT} quick things to complete your part of the application.`}
        </NotificationRow>
      );
    }

    case "not-approved":
      return (
        <NotificationRow
          icon={XCircle}
          tone="red"
          statusLabel="Not approved"
          read={n.read}
          time={n.time}
          actions={
            <Button size="sm" variant="outline" onClick={go}>
              View Application
            </Button>
          }
        >
          Unfortunately you've been marked as not approved for your application for partnership to
          support <Entity>{n.partnerNeed}</Entity> for <Entity>{n.grantName}</Entity>. The review
          might include important notes from <Entity>{n.primaryName}</Entity> to support this
          decision.
        </NotificationRow>
      );
  }
}
