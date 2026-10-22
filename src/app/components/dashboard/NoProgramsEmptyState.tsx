import { useNavigate } from "react-router";
import { ArrowRight, FileText, FolderPlus, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

/**
 * Zero-programs empty state — one module that replaces BOTH "Pick up where you
 * left off" and "Recommended for you" when the org has no programs, since
 * grant matches and applications both come from programs. The welcome header
 * still renders above it.
 *
 * Destinations (annotated):
 *   - "Create a program" (the only primary CTA) → /project-details
 *     (the same program-creation destination as step 1 of the Great Grants
 *     Process, src/data/greatGrantsProcess.ts)
 *
 * The preview tiles are inert: they only hint at what appears once a program
 * exists. Programs-but-no-matches is a different state, owned by
 * RecommendedGrants ("No strong matches yet").
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

const PREVIEWS = [
  {
    icon: Sparkles,
    title: "Recommended for you",
    body: "Grants ranked by how well they fit each of your programs.",
  },
  {
    icon: FileText,
    title: "Pick up where you left off",
    body: "AI-drafted applications you can jump back into, section by section.",
  },
] as const;

export function NoProgramsEmptyState() {
  const navigate = useNavigate();

  return (
    <section
      className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8"
      aria-labelledby="no-programs-heading"
    >
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto mb-4 w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center">
          <FolderPlus className="w-6 h-6 text-white" aria-hidden />
        </span>
        <h2 id="no-programs-heading" className="text-xl text-gray-900" style={LUSTRIA}>
          Create your first program
        </h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed" style={CABIN}>
          Programs are how Great Grants finds your funding. Once you describe one, we match it to
          grants that fit and draft your applications with AI.
        </p>
        <Button
          onClick={() => navigate("/project-details")}
          className="mt-5 bg-teal-600 hover:bg-teal-700 text-white font-semibold"
          style={CABIN}
        >
          Create a program
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <p
          className="mb-3 text-center text-[11px] font-semibold uppercase tracking-wide text-gray-500"
          style={CABIN}
        >
          What you'll see here
        </p>
        <ul aria-hidden className="grid grid-cols-1 sm:grid-cols-2 gap-4 select-none">
          {PREVIEWS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-semibold text-gray-700" style={CABIN}>
                  {title}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-gray-500 leading-relaxed" style={CABIN}>
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
