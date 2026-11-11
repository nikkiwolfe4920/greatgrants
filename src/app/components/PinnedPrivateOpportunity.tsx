import { useEffect, useRef, useState } from "react";
import { BookOpen, Banknote, Building2, Calendar, Globe, Pin } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/**
 * Permanently-pinned private opportunity for /search-private.
 *
 * Figma: Great Grants MVP, node 17516:54036 ("Container:margin").
 *
 * "Pinned" here is a property of the page, not a user preference: there is
 * deliberately no pin / unpin control. It renders above the results list
 * independent of the search query, filters, sort, view mode, loading and
 * empty states, and it is `position: sticky` so it stays in view while the
 * rest of the page scrolls.
 *
 * UX details:
 *  - Once it sticks, it condenses to a single compact row (description and
 *    footer badges collapse) so it never eats a large share of the viewport,
 *    and gains a shadow + blurred backdrop so results scroll cleanly under it.
 *    Collapsing is driven by an IntersectionObserver on a 1px sentinel above
 *    it — no scroll listeners, no layout reads.
 *  - Transitions are disabled under prefers-reduced-motion.
 *  - It's a labelled landmark (`role="region"`) with a visible "Pinned" chip
 *    that explains itself in a tooltip.
 */

/**
 * Hero image from the Figma design. The Figma-hosted asset couldn't be
 * downloaded when this was built (asset host blocked), so drop the exported
 * file in src/assets and import it here — until then a neutral placeholder
 * renders.
 */
const PINNED_IMAGE_SRC: string | undefined = undefined;

const PINNED = {
  title: "Faith-Based Workforce Development and Job Training",
  description:
    "Supporting religious organizations providing job training, vocational education, career counseling, and employment placement services for underserved communities.",
  amount: "$400,000",
  location: "US: National",
  deadline: "Aug 15, 2026",
  status: "Closed",
  type: "Private Opportunity",
};

function Meta({ icon: Icon, children, strong }: { icon: typeof Globe; children: React.ReactNode; strong?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="w-4 h-4 text-gray-500 shrink-0" aria-hidden="true" />
      <span className={`text-sm leading-5 whitespace-nowrap ${strong ? "font-semibold text-gray-900" : "text-gray-700"}`}>
        {children}
      </span>
    </div>
  );
}

function Badge({ children, icon: Icon }: { children: React.ReactNode; icon?: typeof BookOpen }) {
  return (
    <span className="inline-flex items-center gap-0.5 rounded-md border border-[#e9eaeb] bg-[#fafafa] pl-1.5 pr-2 py-0.5 text-xs font-medium leading-[18px] text-[#414651] whitespace-nowrap">
      {Icon && <Icon className="w-3 h-3 mr-0.5" aria-hidden="true" />}
      {children}
    </span>
  );
}

/** Rows that collapse smoothly via the grid 1fr → 0fr trick (no fixed heights). */
function Collapsible({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="overflow-hidden min-h-0">{children}</div>
    </div>
  );
}

export function PinnedPrivateOpportunity() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // The sentinel sits directly above the sticky wrapper; once it scrolls out
    // of view, the wrapper is pinned to the top of the scroll container.
    const io = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-px -mb-px pointer-events-none" />
      <section
        role="region"
        aria-label="Pinned private opportunity"
        className={`sticky top-0 z-20 -mx-2 px-2 pt-3 pb-3 transition-[background-color,box-shadow] duration-200 motion-reduce:transition-none ${
          stuck ? "bg-white/90 backdrop-blur-md shadow-[0_8px_16px_-12px_rgba(16,24,40,0.25)]" : "bg-transparent"
        }`}
      >
        <article
          className={`flex overflow-hidden rounded-xl border bg-white transition-[box-shadow,border-color] duration-200 motion-reduce:transition-none ${
            stuck ? "border-teal-200 shadow-md" : "border-[#e5e7eb] shadow-sm"
          }`}
        >
          {/* Image */}
          <div
            className={`relative shrink-0 self-stretch overflow-hidden bg-[#f3f4f6] transition-[width] duration-200 ease-out motion-reduce:transition-none ${
              stuck ? "w-14" : "w-32"
            }`}
          >
            {PINNED_IMAGE_SRC ? (
              <ImageWithFallback src={PINNED_IMAGE_SRC} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400" aria-hidden="true">
                <Building2 className="w-6 h-6" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className={`flex min-w-0 flex-1 flex-col transition-[padding] duration-200 ease-out motion-reduce:transition-none ${stuck ? "px-4 py-2.5" : "p-5"}`}>
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg font-semibold leading-[24.75px] text-gray-900">{PINNED.title}</h3>
                <Collapsible open={!stuck}>
                  <p className="pt-2 text-sm leading-[22.75px] text-[#4a5565] line-clamp-2">{PINNED.description}</p>
                </Collapsible>
              </div>

              {/* The design's empty right-hand slot: the permanent Pinned indicator. */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    tabIndex={0}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 cursor-default select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    <Pin className="w-3 h-3 fill-teal-600" aria-hidden="true" />
                    Pinned
                  </span>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={6}>
                  Always shown at the top of your results
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Meta */}
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 transition-[padding] duration-200 motion-reduce:transition-none ${stuck ? "pt-1" : "pt-3"}`}>
              <Meta icon={Banknote} strong>{PINNED.amount}</Meta>
              <Meta icon={Globe}>{PINNED.location}</Meta>
              <Meta icon={Calendar}>{PINNED.deadline}</Meta>
            </div>

            {/* Footer badges */}
            <Collapsible open={!stuck}>
              <div className="flex items-center justify-between pt-3">
                <Badge>{PINNED.status}</Badge>
                <Badge icon={BookOpen}>{PINNED.type}</Badge>
              </div>
            </Collapsible>
          </div>
        </article>
      </section>
    </>
  );
}
