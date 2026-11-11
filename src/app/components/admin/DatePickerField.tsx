import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

/**
 * Click-to-pick date field for the Private Opportunity editor.
 *
 * Value stays the same human-readable string the page already stores
 * ("May 31, 2026"), so nothing downstream changes. Built on the shared
 * Popover + Calendar (react-day-picker), which provides arrow-key day
 * navigation, PageUp/PageDown for months, and Esc to close; this adds
 * month/year dropdowns for far-away dates, Today / Clear shortcuts, focus
 * return to the trigger, and a descriptive accessible name.
 */

const FORMAT: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", FORMAT);
}

/** Parses the stored string; null for empty or free-text values we can't read as a date. */
export function parseDate(value: string): Date | null {
  if (!value.trim()) return null;
  const ts = Date.parse(value);
  return Number.isNaN(ts) ? null : new Date(ts);
}

interface DatePickerFieldProps {
  value: string;
  onChange: (value: string) => void;
  /** Accessible name, e.g. "Close date". */
  label: string;
  placeholder?: string;
  className?: string;
}

export function DatePickerField({ value, onChange, label, placeholder = "Select date", className = "" }: DatePickerFieldProps) {
  const [open, setOpen] = useState(false);
  const selected = parseDate(value);
  const thisYear = new Date().getFullYear();

  const choose = (date: Date) => {
    onChange(formatDate(date));
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={value ? `${label}: ${value}. Change date` : `${label}. Choose a date`}
          aria-haspopup="dialog"
          className={`group inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 -mr-2 py-0.5 text-left outline-none transition-colors hover:border-gray-200 focus-visible:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-100 data-[state=open]:border-teal-500 data-[state=open]:ring-2 data-[state=open]:ring-teal-100 ${className}`}
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <span className={value ? "" : "text-gray-400 italic font-normal"}>{value || placeholder}</span>
          <CalendarDays className="w-3.5 h-3.5 text-gray-400 group-hover:text-teal-600 shrink-0" aria-hidden />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0" aria-label={`${label} calendar`}>
        <Calendar
          mode="single"
          required
          selected={selected ?? undefined}
          defaultMonth={selected ?? new Date()}
          onSelect={(date) => date && choose(date)}
          captionLayout="dropdown-buttons"
          fromYear={thisYear - 5}
          toYear={thisYear + 15}
          initialFocus
          classNames={{
            caption: "flex justify-center pt-1 relative items-center w-full px-9",
            caption_label: "hidden",
            caption_dropdowns: "flex items-center gap-1.5",
            dropdown_month: "relative",
            dropdown_year: "relative",
            dropdown:
              "h-8 rounded-md border border-gray-300 bg-white px-2 text-sm font-medium text-gray-900 outline-none focus-visible:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-100",
            vhidden: "sr-only",
            day_selected:
              "bg-teal-600 text-white hover:bg-teal-600 hover:text-white focus:bg-teal-600 focus:text-white",
            day_today: "border border-teal-600 text-teal-700",
          }}
        />
        <div className="flex items-center justify-between border-t border-gray-100 px-3 py-2">
          <Button type="button" variant="ghost" size="sm" className="h-7 text-xs text-gray-600" onClick={() => choose(new Date())}>
            Today
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 text-xs text-gray-600"
            disabled={!value}
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            Clear
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
