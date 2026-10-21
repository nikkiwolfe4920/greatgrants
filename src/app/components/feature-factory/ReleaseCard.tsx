import { differenceInCalendarDays, format } from "date-fns";
import { Calendar, Check, Minus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { formatRange, type Cycle, type CycleStatus } from "@/lib/featureFactory";
import { ChangesList, DocList, ShippedList } from "./ReleaseDocs";

const statusBadge: Record<CycleStatus, { label: string; className: string }> = {
  shipped: { label: "Shipped", className: "bg-green-50 text-green-700 border-green-200" },
  "in-progress": { label: "In progress", className: "bg-teal-50 text-teal-700 border-teal-200" },
  planned: { label: "Planned", className: "bg-gray-100 text-gray-600 border-gray-200" },
  missed: { label: "No post", className: "bg-gray-100 text-gray-600 border-gray-200" },
};

/** Rail node — same three-state grammar as the Great Grants Process rail. */
export function TimelineNode({ status }: { status: CycleStatus }) {
  const base = "relative w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2";
  if (status === "shipped") {
    return (
      <span className={`${base} bg-teal-600 border-teal-600`}>
        <Check className="w-4 h-4 text-white" aria-hidden />
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span className={`${base} bg-white border-teal-600`}>
        <span className="absolute inset-0 rounded-full border-2 border-teal-600 motion-safe:animate-ping opacity-30" aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full bg-teal-600" aria-hidden />
      </span>
    );
  }
  if (status === "missed") {
    return (
      <span className={`${base} bg-white border-gray-300 border-dashed`}>
        <Minus className="w-3.5 h-3.5 text-gray-400" aria-hidden />
      </span>
    );
  }
  return <span className={`${base} bg-white border-gray-300`} />;
}

function CardHeader({ cycle }: { cycle: Cycle }) {
  const badge = statusBadge[cycle.status];
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-1">
      <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Cycle {cycle.sprint}</span>
      <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${badge.className}`}>
        {badge.label}
      </span>
      {cycle.post?.isTemplate && (
        <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium bg-[#fffaeb] text-[#b54708] border-[#fedf89]">
          Template content
        </span>
      )}
      <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
        <Calendar className="w-3.5 h-3.5" aria-hidden />
        {formatRange(cycle.start, cycle.end)}
      </span>
    </div>
  );
}

function ReleaseBody({ cycle }: { cycle: Cycle }) {
  const post = cycle.post!;
  return (
    <>
      <h3 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
        {post.title}
      </h3>
      <p className="text-base text-gray-600 leading-relaxed mb-6">{post.summary}</p>

      <Tabs defaultValue="shipped">
        <TabsList className="justify-start gap-6 overflow-x-auto">
          <TabsTrigger value="shipped" className="flex-none">
            What shipped <Count n={post.shipped.length} />
          </TabsTrigger>
          <TabsTrigger value="changes" className="flex-none">
            What changed <Count n={post.changes.length} />
          </TabsTrigger>
          <TabsTrigger value="design" className="flex-none">
            Design docs <Count n={post.designDocs.length} />
          </TabsTrigger>
          <TabsTrigger value="engineering" className="flex-none">
            Engineering docs <Count n={post.engineeringDocs.length} />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="shipped" className="mt-5">
          <ShippedList items={post.shipped} />
        </TabsContent>
        <TabsContent value="changes" className="mt-5">
          <ChangesList items={post.changes} />
        </TabsContent>
        <TabsContent value="design" className="mt-5">
          <DocList docs={post.designDocs} emptyText="No design documentation for this cycle." />
        </TabsContent>
        <TabsContent value="engineering" className="mt-5">
          <DocList docs={post.engineeringDocs} emptyText="No engineering documentation for this cycle." />
        </TabsContent>
      </Tabs>

      {post.contributors && post.contributors.length > 0 && (
        <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
          <span className="font-semibold text-gray-700">Shipped by </span>
          {post.contributors.join(", ")}
        </p>
      )}
    </>
  );
}

function Count({ n }: { n: number }) {
  return (
    <span className="bg-gray-100 text-gray-600 text-xs font-semibold rounded-full px-2 py-0.5">{n}</span>
  );
}

function Placeholder({ cycle, today }: { cycle: Cycle; today: Date }) {
  const daysToRelease = differenceInCalendarDays(cycle.releaseDate, today);
  const releaseLabel = format(cycle.releaseDate, "EEEE, MMM d");

  if (cycle.status === "missed") {
    return (
      <p className="text-sm text-gray-500">
        No release post was published for this cycle. If work shipped, add a post for cycle {cycle.sprint} so the
        record is complete.
      </p>
    );
  }
  if (cycle.status === "planned") {
    return <p className="text-sm text-gray-500">Release post planned for {releaseLabel}.</p>;
  }
  return (
    <p className="text-sm text-gray-600">
      Release post goes out <span className="font-semibold text-gray-900">{releaseLabel}</span>
      {daysToRelease > 0 ? ` — ${daysToRelease} day${daysToRelease === 1 ? "" : "s"} from now.` : daysToRelease === 0 ? " — today." : " — it's due."}
    </p>
  );
}

export function ReleaseCard({ cycle, today }: { cycle: Cycle; today: Date }) {
  const hasPost = !!cycle.post;
  const emphasis =
    cycle.status === "in-progress"
      ? "border-teal-200 bg-white"
      : hasPost
        ? "border-gray-200 bg-white"
        : "border-dashed border-gray-300 bg-gray-50";

  return (
    <li id={`cycle-${cycle.sprint}`} className="group relative flex gap-4 sm:gap-6 scroll-mt-8">
      {/* Rail: line runs from each node to the next, omitted on the last item */}
      <div className="flex flex-col items-center">
        <TimelineNode status={cycle.status} />
        <span className="flex-1 w-px bg-gray-200 my-2 group-last:hidden" aria-hidden />
      </div>
      <div className={`flex-1 min-w-0 rounded-xl border p-5 sm:p-6 mb-6 group-last:mb-0 ${emphasis}`}>
        <span className="sr-only">
          Cycle {cycle.sprint}, {statusBadge[cycle.status].label}.
        </span>
        <CardHeader cycle={cycle} />
        {hasPost ? (
          <div className="mt-3">
            <ReleaseBody cycle={cycle} />
          </div>
        ) : (
          <div className="mt-2">
            <Placeholder cycle={cycle} today={today} />
          </div>
        )}
      </div>
    </li>
  );
}
