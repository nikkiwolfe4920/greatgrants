import { useEffect, useMemo } from "react";
import { Link, useLocation, useParams } from "react-router";
import { differenceInCalendarDays, format } from "date-fns";
import { ExternalLink } from "lucide-react";
import { ReleaseCard } from "@/app/components/feature-factory/ReleaseCard";
import {
  featureFactoryProjects,
  getFeatureFactoryProject,
  type FeatureFactoryProject,
} from "@/data/featureFactory";
import { buildCycles } from "@/lib/featureFactory";
import { NotFoundPage } from "./NotFoundPage";

function cadenceLabel(days: number) {
  if (days % 7 === 0) return days === 7 ? "Every week" : `Every ${days / 7} weeks`;
  return `Every ${days} days`;
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <p className="text-xs text-gray-400 mb-1 font-medium">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
      {hint && <p className="text-xs text-gray-500 mt-0.5">{hint}</p>}
    </div>
  );
}

function Timeline({ project }: { project: FeatureFactoryProject }) {
  const today = useMemo(() => new Date(), []);
  const cycles = useMemo(() => buildCycles(project, today), [project, today]);
  const { hash } = useLocation();

  // Deep links like /feature-factory#cycle-3 — react-router doesn't scroll to hashes on its own.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  // Cycles are newest-first, so the next release is the last upcoming/in-progress one.
  const next = [...cycles].reverse().find((c) => c.status === "in-progress" || c.status === "planned");
  const shippedCount = project.releases.filter((r) => !r.isTemplate).length;
  const daysToNext = next ? differenceInCalendarDays(next.releaseDate, today) : undefined;

  return (
    <>
      <section className="mb-10">
        <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-3 block">
          {project.name} · Feature Factory
        </span>
        <h1 className="text-5xl text-gray-900 mb-4" style={{ fontFamily: "Lustria, serif" }}>
          Design release timeline
        </h1>
        <p className="text-base text-gray-600 leading-relaxed max-w-2xl mb-2">{project.tagline}</p>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-6">{project.description}</p>

        {(project.links.figma || project.links.designSystem || project.links.storybook || project.links.repository) && (
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8 text-sm font-semibold">
            {project.links.designSystem && (
              <Link to={project.links.designSystem} className="text-teal-700 hover:text-teal-800">
                Design system
              </Link>
            )}
            {(
              [
                ["Figma", project.links.figma],
                ["Storybook", project.links.storybook],
                ["Repository", project.links.repository],
              ] as const
            ).map(
              ([label, href]) =>
                href && (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-800"
                  >
                    {label}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                  </a>
                ),
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-4">
          <Stat label="Cadence" value={cadenceLabel(project.cadenceDays)} hint="One release post at the end of every cycle" />
          <Stat
            label="Next release"
            value={next ? format(next.releaseDate, "EEE, MMM d") : "—"}
            hint={
              next && daysToNext !== undefined
                ? daysToNext > 0
                  ? `Cycle ${next.sprint} · in ${daysToNext} day${daysToNext === 1 ? "" : "s"}`
                  : `Cycle ${next.sprint} · ${daysToNext === 0 ? "today" : "due"}`
                : undefined
            }
          />
          <Stat label="Posts published" value={String(shippedCount)} hint="Newest cycle at the top" />
        </div>
      </section>

      <ol aria-label={`${project.name} release cycles, newest first`}>
        {cycles.map((cycle) => (
          <ReleaseCard key={cycle.sprint} cycle={cycle} today={today} />
        ))}
      </ol>
    </>
  );
}

/**
 * Feature Factory — a release timeline on a fixed cadence. Public and
 * standalone (outside AppLayout), like /design-system. `/feature-factory`
 * shows the default project; `/feature-factory/:projectSlug` shows others.
 * Content lives in `src/data/featureFactory`.
 */
export function FeatureFactoryPage() {
  const { projectSlug } = useParams();
  const project = getFeatureFactoryProject(projectSlug);

  if (!project) return <NotFoundPage />;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Cabin, sans-serif" }}>
      {featureFactoryProjects.length > 1 && (
        <nav aria-label="Projects" className="border-b border-gray-200">
          <div className="max-w-[880px] mx-auto px-6 sm:px-8 flex gap-6 overflow-x-auto">
            {featureFactoryProjects.map((p, i) => {
              const active = p.slug === project.slug;
              return (
                <Link
                  key={p.slug}
                  to={i === 0 ? "/feature-factory" : `/feature-factory/${p.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`py-3 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px ${
                    active ? "text-teal-700 border-teal-600" : "text-gray-500 border-transparent hover:text-gray-800"
                  }`}
                >
                  {p.name}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
      <main className="max-w-[880px] mx-auto px-6 sm:px-8 py-10 sm:py-14">
        <Timeline project={project} />
      </main>
    </div>
  );
}
