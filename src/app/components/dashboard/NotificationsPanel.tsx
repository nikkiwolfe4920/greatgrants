import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Bell,
  CalendarClock,
  Sparkles,
  MessageSquareQuote,
  Users,
  CreditCard,
  Check,
  type LucideIcon,
} from "lucide-react";
import {
  dashboardNotifications,
  type DashboardNotification,
  type NotificationKind,
} from "@/data/dashboardData";

/**
 * Notifications feed.
 *
 * Two rules keep this from becoming noise: unread items are filterable in one
 * click, and every notification is a link to the place where the thing it's
 * telling you about can actually be dealt with. A notification you can't act
 * on doesn't belong here.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

const KIND_META: Record<NotificationKind, { icon: LucideIcon; classes: string }> = {
  deadline: { icon: CalendarClock, classes: "bg-red-50 text-red-600" },
  match: { icon: Sparkles, classes: "bg-teal-50 text-teal-700" },
  coaching: { icon: MessageSquareQuote, classes: "bg-purple-50 text-purple-600" },
  team: { icon: Users, classes: "bg-blue-50 text-blue-600" },
  plan: { icon: CreditCard, classes: "bg-amber-50 text-amber-700" },
};

export function NotificationsPanel() {
  const navigate = useNavigate();
  const [items, setItems] = useState<DashboardNotification[]>(dashboardNotifications);
  const [unreadOnly, setUnreadOnly] = useState(false);

  const unreadCount = useMemo(() => items.filter((n) => !n.read).length, [items]);
  const visible = unreadOnly ? items.filter((n) => !n.read) : items;

  const open = (n: DashboardNotification) => {
    setItems((prev) => prev.map((i) => (i.id === n.id ? { ...i, read: true } : i)));
    navigate(n.to);
  };

  const markAllRead = () => setItems((prev) => prev.map((i) => ({ ...i, read: true })));

  return (
    <section className="rounded-xl border border-gray-200 bg-white flex flex-col" aria-labelledby="notifications-heading">
      <div className="flex items-center justify-between gap-3 px-5 pt-5 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 min-w-0">
          <Bell className="w-4 h-4 text-gray-700 shrink-0" />
          <h2 id="notifications-heading" className="text-base text-gray-900 truncate" style={LUSTRIA}>
            Notifications
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
            onClick={markAllRead}
            className="text-xs font-semibold text-teal-700 hover:underline shrink-0"
            style={CABIN}
          >
            Mark all read
          </button>
        )}
      </div>

      <div className="px-5 py-2.5 border-b border-gray-100">
        <div className="inline-flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg">
          {([false, true] as const).map((value) => (
            <button
              key={String(value)}
              onClick={() => setUnreadOnly(value)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                unreadOnly === value
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              style={CABIN}
            >
              {value ? `Unread${unreadCount ? ` (${unreadCount})` : ""}` : "All"}
            </button>
          ))}
        </div>
      </div>

      <ul className="divide-y divide-gray-100 flex-1">
        <AnimatePresence initial={false}>
          {visible.map((n) => {
            const meta = KIND_META[n.kind];
            const Icon = meta.icon;
            return (
              <motion.li
                key={n.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => open(n)}
                  className={`w-full text-left px-5 py-3.5 flex gap-3 hover:bg-gray-50 transition-colors ${
                    n.read ? "" : "bg-teal-50/30"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${meta.classes}`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-start gap-2">
                      <span
                        className={`text-sm leading-snug ${
                          n.read ? "text-gray-700 font-medium" : "text-gray-900 font-semibold"
                        }`}
                        style={CABIN}
                      >
                        {n.title}
                      </span>
                      {!n.read && (
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0"
                          aria-label="Unread"
                        />
                      )}
                    </span>
                    <span className="block text-xs text-gray-600 mt-0.5 leading-relaxed" style={CABIN}>
                      {n.body}
                    </span>
                    <span className="block text-[11px] text-gray-400 mt-1" style={CABIN}>
                      {n.time}
                    </span>
                  </span>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>

      {visible.length === 0 && (
        <div className="px-5 py-10 text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-2.5">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm font-semibold text-gray-900" style={CABIN}>
            You're all caught up
          </p>
          <p className="text-xs text-gray-600 mt-0.5" style={CABIN}>
            We'll let you know the moment a deadline moves or a new match appears.
          </p>
        </div>
      )}
    </section>
  );
}
