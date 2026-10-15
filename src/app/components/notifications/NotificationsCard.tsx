import { useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bell, Check, type LucideIcon } from "lucide-react";

/**
 * Shared shell for the role-specific notification modules (sub-recipient and
 * primary applicant). Same card, header, All/Unread filter and empty state as
 * the dashboard's NotificationsPanel — only the rows differ. Unlike the
 * dashboard feed, a row here isn't one big link: it carries its own CTAs, so
 * the row is a plain container and the buttons inside do the navigating.
 */

export const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
export const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

export type NotificationTone = "teal" | "amber" | "red" | "blue" | "green";

const TONE_CLASSES: Record<NotificationTone, { icon: string; chip: string }> = {
  teal: { icon: "bg-teal-50 text-teal-700", chip: "bg-teal-50 text-teal-700 border-teal-200" },
  amber: { icon: "bg-amber-50 text-amber-700", chip: "bg-amber-50 text-amber-700 border-amber-200" },
  red: { icon: "bg-red-50 text-red-600", chip: "bg-red-50 text-red-700 border-red-200" },
  blue: { icon: "bg-blue-50 text-blue-600", chip: "bg-blue-50 text-blue-700 border-blue-200" },
  green: { icon: "bg-green-50 text-green-600", chip: "bg-green-50 text-green-700 border-green-200" },
};

/** Bold entity name inside a notification sentence (partner need, grant, org). */
export function Entity({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-gray-900">{children}</span>;
}

interface NotificationsCardProps<T extends { id: string; read: boolean }> {
  /** Unique per module so two cards can share a page. */
  id: string;
  title: string;
  items: T[];
  onMarkAllRead: () => void;
  emptyTitle: string;
  emptyBody: string;
  renderItem: (item: T) => ReactNode;
}

export function NotificationsCard<T extends { id: string; read: boolean }>({
  id,
  title,
  items,
  onMarkAllRead,
  emptyTitle,
  emptyBody,
  renderItem,
}: NotificationsCardProps<T>) {
  const [unreadOnly, setUnreadOnly] = useState(false);
  const unreadCount = useMemo(() => items.filter((n) => !n.read).length, [items]);
  const visible = unreadOnly ? items.filter((n) => !n.read) : items;
  const headingId = `${id}-heading`;

  return (
    <section
      className="rounded-xl border border-gray-200 bg-white flex flex-col"
      aria-labelledby={headingId}
    >
      <div className="flex items-center justify-between gap-3 px-5 pt-5 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 min-w-0">
          <Bell className="w-4 h-4 text-gray-700 shrink-0" aria-hidden />
          <h3 id={headingId} className="text-base text-gray-900 truncate" style={LUSTRIA}>
            {title}
          </h3>
          {unreadCount > 0 && (
            <span
              className="px-2 py-0.5 rounded-full bg-teal-600 text-white text-[11px] font-semibold tabular-nums shrink-0"
              style={CABIN}
            >
              {unreadCount}
              <span className="sr-only"> unread</span>
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={onMarkAllRead}
            className="text-xs font-semibold text-teal-700 hover:underline shrink-0 rounded focus-visible:outline-2 focus-visible:outline-teal-600"
            style={CABIN}
          >
            Mark all read
          </button>
        )}
      </div>

      <div className="px-5 py-2.5 border-b border-gray-100">
        <div
          className="inline-flex items-center gap-1 bg-white border border-gray-200 p-0.5 rounded-lg"
          role="group"
          aria-label="Filter notifications"
        >
          {([false, true] as const).map((value) => (
            <button
              key={String(value)}
              onClick={() => setUnreadOnly(value)}
              aria-pressed={unreadOnly === value}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                unreadOnly === value
                  ? "bg-white text-teal-700 shadow-sm"
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
          {visible.map((item) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {renderItem(item)}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {visible.length === 0 && (
        <div className="px-5 py-10 text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-2.5">
            <Check className="w-5 h-5 text-green-600" aria-hidden />
          </div>
          <p className="text-sm font-semibold text-gray-900" style={CABIN}>
            {emptyTitle}
          </p>
          <p className="text-xs text-gray-600 mt-0.5" style={CABIN}>
            {emptyBody}
          </p>
        </div>
      )}
    </section>
  );
}

interface NotificationRowProps {
  icon: LucideIcon;
  tone: NotificationTone;
  /** Short status label — color is never the only signal of state. */
  statusLabel: string;
  read: boolean;
  time: string;
  /** The notification sentence. */
  children: ReactNode;
  /** Optional block under the sentence (e.g. progress). */
  detail?: ReactNode;
  /** CTAs. Primary first. */
  actions: ReactNode;
}

export function NotificationRow({
  icon: Icon,
  tone,
  statusLabel,
  read,
  time,
  children,
  detail,
  actions,
}: NotificationRowProps) {
  const tones = TONE_CLASSES[tone];
  return (
    <div className={`px-5 py-4 flex gap-3 ${read ? "" : "bg-teal-50/30"}`}>
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${tones.icon}`}
        aria-hidden
      >
        <Icon className="w-4 h-4" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[11px] font-semibold ${tones.chip}`}
            style={CABIN}
          >
            {statusLabel}
          </span>
          {!read && (
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0">
              <span className="sr-only">Unread</span>
            </span>
          )}
          <span className="text-[11px] text-gray-500 ml-auto shrink-0" style={CABIN}>
            {time}
          </span>
        </div>
        <p
          className={`text-sm leading-relaxed ${read ? "text-gray-700" : "text-gray-800"}`}
          style={CABIN}
        >
          {children}
        </p>
        {detail}
        <div className="mt-3 flex flex-wrap items-center gap-2">{actions}</div>
      </div>
    </div>
  );
}
