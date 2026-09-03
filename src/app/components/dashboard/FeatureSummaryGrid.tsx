import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Building2,
  FolderOpen,
  Search,
  Eye,
  FileText,
  ClipboardCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { useCreditUsage } from "@/hooks/useCreditUsage";
import { useDashboardState } from "./useDashboardState";

/**
 * Feature summaries — one tile per major area of the product, each showing the
 * state of that area rather than just its name.
 *
 * The rule for every tile: a number the user cares about, one line explaining
 * what the number means, and a click that lands somewhere useful. A tile that
 * would only read "Grant Search →" isn't earning its place, so each one carries
 * live state even when that state is zero.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

type Tone = "brand" | "neutral" | "warning" | "success";

const TONE_CLASSES: Record<Tone, { icon: string; metric: string }> = {
  brand: { icon: "bg-teal-50 text-teal-700", metric: "text-gray-900" },
  neutral: { icon: "bg-gray-100 text-gray-600", metric: "text-gray-900" },
  warning: { icon: "bg-orange-50 text-orange-700", metric: "text-orange-700" },
  success: { icon: "bg-green-50 text-green-700", metric: "text-green-700" },
};

interface Tile {
  id: string;
  label: string;
  metric: string;
  caption: string;
  to: string;
  icon: LucideIcon;
  tone: Tone;
}

export function FeatureSummaryGrid() {
  const navigate = useNavigate();
  const state = useDashboardState();
  const { eligibility, coaching } = useCreditUsage();

  const tiles: Tile[] = [
    {
      id: "organization",
      label: "Organization Profile",
      metric: state.isOrgProfileComplete ? "Complete" : `${state.orgProfileItemsRemaining} left`,
      caption: state.isOrgProfileComplete
        ? "Every required field is filled in and reusable."
        : "Required items still blocking autofill on your applications.",
      to: "/organization",
      icon: Building2,
      tone: state.isOrgProfileComplete ? "success" : "warning",
    },
    {
      id: "programs",
      label: "My Programs",
      metric: String(state.publishedProgramsCount),
      caption:
        state.publishedProgramsCount === 0
          ? "Add a program to sharpen matching and AI drafts."
          : "Programs available to match and write against.",
      to: "/project-details",
      icon: FolderOpen,
      tone: state.publishedProgramsCount === 0 ? "warning" : "brand",
    },
    {
      id: "search",
      label: "Grant Search",
      metric: state.recentlyViewedCount > 0 ? `${state.recentlyViewedCount} viewed` : "Start here",
      caption: "Curated opportunities scored against your profile.",
      to: "/search",
      icon: Search,
      tone: "neutral",
    },
    {
      id: "watch-list",
      label: "Watch List",
      metric: String(state.watchListCount),
      caption:
        state.watchListCount === 0
          ? "Watch a grant to get alerts when its details change."
          : "Grants you're tracking for deadline and detail changes.",
      to: "/watch-list",
      icon: Eye,
      tone: "neutral",
    },
    {
      id: "eligibility",
      label: "Eligibility Assessments",
      metric: eligibility.isUnlimited
        ? `${eligibility.used} run`
        : `${eligibility.remaining ?? 0} left`,
      caption: eligibility.isUnlimited
        ? "Unlimited on your plan — screen any grant before you write."
        : "Assessments included in your plan this period.",
      to: "/eligibility-assessment",
      icon: ClipboardCheck,
      tone: eligibility.isExhausted ? "warning" : "brand",
    },
    {
      id: "applications",
      label: "Applications",
      metric: `${state.activeApplications.length} active`,
      caption:
        state.sectionsRemaining > 0
          ? `${state.sectionsRemaining} sections still to finish across your drafts.`
          : "Every section on your active drafts is complete.",
      to: "/applications",
      icon: FileText,
      tone: state.sectionsRemaining > 0 ? "brand" : "success",
    },
  ];

  return (
    <section aria-labelledby="features-heading">
      <div className="mb-3">
        <h2 id="features-heading" className="text-lg text-gray-900" style={LUSTRIA}>
          Your workspace at a glance
        </h2>
        <p className="mt-0.5 text-sm text-gray-600" style={CABIN}>
          Where each part of Great Grants stands right now.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {tiles.map((tile, index) => {
          const Icon = tile.icon;
          const tone = TONE_CLASSES[tile.tone];
          return (
            <motion.button
              key={tile.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: index * 0.04 }}
              onClick={() => navigate(tile.to)}
              className="group text-left rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-2.5">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${tone.icon}`}>
                  <Icon className="w-4 h-4" />
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-teal-600 transition-colors shrink-0" />
              </div>
              <span className={`block text-xl font-semibold leading-none mb-1 ${tone.metric}`} style={CABIN}>
                {tile.metric}
              </span>
              <span className="block text-[13px] font-semibold text-gray-900 mb-1" style={CABIN}>
                {tile.label}
              </span>
              <span className="block text-xs text-gray-600 leading-relaxed" style={CABIN}>
                {tile.caption}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Coaching is a cross-cutting capability rather than a destination, so it
          gets a full-width strip instead of competing as a seventh tile. */}
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.28 }}
        onClick={() => navigate("/applications")}
        className="group mt-3 w-full text-left rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 via-white to-white p-4 hover:border-purple-300 hover:shadow-sm transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
            <ClipboardCheck className="w-4 h-4" />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block text-[13px] font-semibold text-gray-900" style={CABIN}>
              AI Coaching
            </span>
            <span className="block text-xs text-gray-600 leading-relaxed" style={CABIN}>
              {coaching.isUnlimited
                ? "Unlimited coaching on your plan — every section reviewed against the funder's requirements."
                : `${coaching.remaining ?? 0} coaching ${
                    (coaching.remaining ?? 0) === 1 ? "pass" : "passes"
                  } left this period.`}
            </span>
          </span>
          <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-purple-600 transition-colors shrink-0" />
        </div>
      </motion.button>
    </section>
  );
}
