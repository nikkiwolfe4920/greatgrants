import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Card } from "./InformationRequestForm";

/** NOFO deadline as shown in the UI ("Nov 20, 2026"), counted down to the end of that day. */
const deadlineOf = (label: string) => new Date(`${label} 23:59:59`);

function remaining(deadline: Date, now: number) {
  const total = Math.max(0, deadline.getTime() - now);
  const s = Math.floor(total / 1000);
  return { total, days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
}

/**
 * Countdown to the NOFO deadline. Uses the same Card container, teal icon,
 * Cabin heading and grey-50 tiles as the other partnership step cards. Turns
 * amber in the last week and reads "Deadline passed" once it's over.
 */
export function NofoCountdown({ deadlineLabel }: { deadlineLabel: string }) {
  const deadline = deadlineOf(deadlineLabel);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const { total, days, hours, minutes, seconds } = remaining(deadline, now);
  const over = total === 0;
  const urgent = !over && days < 7;
  const units = [
    ["Days", days],
    ["Hours", hours],
    ["Minutes", minutes],
    ["Seconds", seconds],
  ] as const;

  return (
    <Card
      icon={<Clock className="size-5" />}
      title="Time until the NOFO deadline"
      description={over ? `The deadline was ${deadlineLabel}.` : `The lead applicant submits the application by ${deadlineLabel}.`}
    >
      {over ? (
        <p className="rounded-lg bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">Deadline passed</p>
      ) : (
        <div role="timer" aria-label={`${days} days left until the NOFO deadline on ${deadlineLabel}`} className="grid grid-cols-4 gap-3">
          {units.map(([label, value]) => (
            <div
              key={label}
              className={`rounded-lg px-2 py-3 text-center ${urgent ? "bg-amber-50 border border-amber-200" : "bg-gray-50"}`}
            >
              <p
                className={`text-2xl font-semibold tabular-nums ${urgent ? "text-amber-800" : "text-gray-900"}`}
                style={{ fontFamily: "Cabin, sans-serif" }}
                aria-hidden="true"
              >
                {String(value).padStart(2, "0")}
              </p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
