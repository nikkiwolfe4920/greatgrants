import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { Check, ClipboardCheck, Handshake } from "lucide-react";
import { Button } from "../ui/button";
import { partnershipItems, type PartnershipItem } from "@/data/dashboardData";

/**
 * Partnerships feed (Figma: dashboard right rail). Partner requests that need
 * the user's review, and partners who've finished their part. Each item ends
 * in one CTA that opens the application.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

const STATUS_META = {
  "needs-review": {
    label: "Needs your review",
    icon: Handshake,
    classes: "bg-blue-50 border-blue-200 text-blue-700",
    cta: "Review Application",
  },
  "ready-to-review": {
    label: "Ready to review",
    icon: ClipboardCheck,
    classes: "bg-green-50 border-green-200 text-green-700",
    cta: "View Completed Application",
  },
} as const;

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-gray-900">{children}</span>;
}

export function PartnershipsPanel() {
  const navigate = useNavigate();
  const [items, setItems] = useState<PartnershipItem[]>(partnershipItems);
  const [unreadOnly, setUnreadOnly] = useState(false);

  const unreadCount = useMemo(() => items.filter((n) => !n.read).length, [items]);
  const visible = unreadOnly ? items.filter((n) => !n.read) : items;

  const open = (n: PartnershipItem) => {
    setItems((prev) => prev.map((i) => (i.id === n.id ? { ...i, read: true } : i)));
    navigate(n.to);
  };

  return (
    <section className="rounded-xl border border-gray-200 bg-white flex flex-col" aria-labelledby="partnerships-heading">
      <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 min-w-0">
          <Handshake className="w-4 h-4 text-gray-700 shrink-0" />
          <h2 id="partnerships-heading" className="text-base text-gray-900 truncate" style={LUSTRIA}>
            Partnerships
          </h2>
          {unreadCount > 0 && (
            <span
              className="px-2 py-0.5 rounded-full bg-teal-600 text-white text-[11px] font-semibold tabular-nums shrink-0"
              style={CABIN}
            >
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={() => setItems((prev) => prev.map((i) => ({ ...i, read: true })))}
            className="text-xs font-semibold text-teal-700 hover:underline shrink-0"
            style={CABIN}
          >
            Mark all read
          </button>
        )}
      </div>

      <div className="px-4 py-2.5 border-b border-gray-100">
        <div className="inline-flex items-center gap-1 bg-white border border-gray-200 p-0.5 rounded-lg">
          {([false, true] as const).map((value) => (
            <button
              key={String(value)}
              onClick={() => setUnreadOnly(value)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                unreadOnly === value ? "bg-white text-teal-700 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
              style={CABIN}
            >
              {value ? `Unread${unreadCount ? ` (${unreadCount})` : ""}` : "All"}
            </button>
          ))}
        </div>
      </div>

      <ul className="divide-y divide-gray-100">
        {visible.map((n) => {
          const meta = STATUS_META[n.status];
          const Icon = meta.icon;
          return (
            <li key={n.id} className={`px-4 py-3.5 ${n.read ? "" : "bg-teal-50/30"}`}>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-semibold ${meta.classes}`}
                  style={CABIN}
                >
                  <Icon className="w-3 h-3" aria-hidden />
                  {meta.label}
                </span>
                {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-teal-600" aria-label="Unread" />}
                <span className="ml-auto text-[11px] text-gray-500" style={CABIN}>
                  {n.time}
                </span>
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-gray-800" style={CABIN}>
                {n.status === "needs-review" ? "You've received a request for partnership from " : ""}
                <Strong>{n.partnerName}</Strong> for <Strong>{n.partnerNeed}</Strong> for <Strong>{n.grantName}</Strong>
                {n.status === "ready-to-review"
                  ? ` completed their ${n.itemCount} quick items to complete their part of the application.`
                  : "."}
              </p>
              <Button
                size="sm"
                onClick={() => open(n)}
                className="mt-3 w-full bg-teal-600 hover:bg-teal-700 text-white font-medium"
                style={CABIN}
              >
                {meta.cta}
              </Button>
            </li>
          );
        })}
      </ul>

      {visible.length === 0 && (
        <div className="px-5 py-10 text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-2.5">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm font-semibold text-gray-900" style={CABIN}>
            You're all caught up
          </p>
        </div>
      )}
    </section>
  );
}
