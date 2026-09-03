import { useMemo } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  CircleCheck,
  Clock,
  CreditCard,
  Eye,
  Lock,
  MonitorPlay,
  PhoneOff,
  Play,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { Logo } from "../components/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useDemoMode } from "@/app/demo/useDemoMode";
import {
  DEMO_PHASES,
  DEMO_STOPS,
  FIRST_STOP,
  stopsForPhase,
  type DemoStop,
} from "@/app/demo/demoTour";

/**
 * /marketing — the shareable interactive demo walkthrough.
 *
 * The strategy, because the layout only makes sense alongside it:
 *
 * The visitor arriving here is a grant seeker who has been sold to before.
 * Their objection is not "I don't understand what this does", it is "I don't
 * believe it works". A feature list argues with that; a product they can
 * touch, right now, without a form, doesn't have to. So this page is not a
 * pitch with a demo attached — it is a *doorway into the real application*,
 * with just enough scaffolding around it that a stranger can find their way.
 *
 * Four moves, in order:
 *
 *   1. **Remove the cost of looking.** No account, no card, no call, and the
 *      tour's length is stated up front. Every reason to leave is answered
 *      before the first CTA.
 *   2. **Walk the real product, in the product's own order.** The seven stops
 *      follow the canonical Great Grants Process, so the demo teaches the
 *      workflow rather than a tour of screens. Each stop names the doubt a
 *      skeptic holds at that exact point and answers it on the spot — the
 *      objection handling is distributed through the tour instead of dumped
 *      in an FAQ nobody reads.
 *   3. **Admit what the demo cannot do.** The honest-limits section is the
 *      highest-converting block on the page precisely because it doesn't sell:
 *      every limit named is a thing that requires their own account, so
 *      candor and the upsell point the same direction.
 *   4. **Close where the interest is.** Pricing leads with Free, and the
 *      create-account CTA is repeated in the nav, at every stop, on the demo
 *      banner inside the app, and at the close — so the decision is never
 *      more than one click from wherever conviction lands.
 *
 * Visual language is the marketing surface's, matched to the pricing page
 * (SubscribeEntryPage): Lustria for display headlines, Cabin for everything
 * else, teal-600 for every call to action, Untitled UI grays, 12px cards on
 * white. See DESIGN.md.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

/** The cost of looking, stated before we ask for anything. */
const NO_COST_PROOFS = [
  { icon: UserPlus, label: "No account" },
  { icon: CreditCard, label: "No credit card" },
  { icon: PhoneOff, label: "No sales call" },
  { icon: Clock, label: "About 6 minutes" },
];

/** Why we lead with the product instead of a pitch. */
const TRUST_CARDS = [
  {
    icon: MonitorPlay,
    title: "This is the product, not a video",
    body:
      "Every screen in this walkthrough is the live application. You'll click the real sidebar, open real grant notices, and read the real coaching output — not a recorded click-through or a series of screenshots.",
  },
  {
    icon: Eye,
    title: "The data belongs to a sample nonprofit",
    body:
      "So you can see a populated workspace rather than an empty one. The organization, its programs and its applications are fictional; the funding opportunities you'll read are real published notices.",
  },
  {
    icon: Lock,
    title: "Nothing you do here is saved",
    body:
      "You can type, toggle, filter and generate freely. There's no account behind the demo, nothing is submitted to a funder, and closing the tab ends it. We don't ask for your email to let you in.",
  },
];

/** What genuinely requires an account — the limits, stated plainly. */
const DEMO_LIMITS = [
  {
    limit: "Matches scored against your organization",
    why:
      "Relevance in the demo is computed for the sample nonprofit. Yours is computed from your EIN, budget, service area, focus areas and programs — which is the entire point of the search.",
  },
  {
    limit: "An eligibility verdict on grants you're actually chasing",
    why:
      "The assessment reads your facts against a funder's stated requirements. Without your facts it can only demonstrate the format, not give you an answer you can act on.",
  },
  {
    limit: "AI drafts written from your own narratives",
    why:
      "Drafting pulls from your stored mission, program details and past awards. That's why the output isn't generic — and why it needs your profile to be worth anything.",
  },
  {
    limit: "Deadline alerts and funder change notifications",
    why:
      "Watching an opportunity means we tell you when the funder edits the notice or the deadline moves. That needs somewhere to send it.",
  },
];

const PRICING_TIERS = [
  {
    name: "Free",
    price: "Free",
    priceSuffix: "",
    forWho: "For organizations beginning their grant search and building readiness.",
    features: [
      "5 free searches per month",
      "5 saved grants",
      "Readiness coaching",
      "Up to 5 seats",
    ],
    cta: "Create an account",
    recommended: false,
    disabled: false,
  },
  {
    name: "Unlimited Search & Discovery",
    price: "$49.99",
    priceSuffix: "/mo",
    forWho: "For teams actively searching, saving, and prioritizing grant opportunities.",
    features: [
      "Everything in Free",
      "Unlimited grant searches",
      "Unlimited saved grants",
      "Unlimited seats",
      "AI Grant Writer included for a limited time",
    ],
    cta: "Create an account",
    recommended: true,
    disabled: false,
  },
  {
    name: "AI Grant Writer",
    price: "Coming Soon",
    priceSuffix: "",
    forWho:
      "For organizations ready to generate and manage grant applications with AI-powered writing support.",
    features: [
      "Everything in Unlimited Search & Discovery",
      "Up to 10 active applications",
      "AI-assisted grant drafting",
      "Application workspace",
      "Submission-readiness support",
    ],
    cta: "Coming Soon",
    recommended: false,
    disabled: true,
  },
];

const FAQS = [
  {
    q: "Do I need to create an account to see the demo?",
    a: "No. Everything on this walkthrough is open. We ask for nothing — not an email, not a company name — because the fastest way to answer whether this is worth your time is to let you look.",
  },
  {
    q: "Is the grant data real?",
    a: "The funding opportunities are real published notices, including federal solicitations you can go verify yourself. The organization browsing them is fictional, so the relevance and eligibility scores you see are illustrative of the format rather than a verdict about any real nonprofit.",
  },
  {
    q: "Can I break anything?",
    a: "No. There's no account behind the demo and nothing writes to a real record. Type in the drafts, run the filters, generate whatever you like — closing the tab resets it.",
  },
  {
    q: "Will AI write my application for me?",
    a: "It writes a complete first draft from your organization profile and program details, structured the way the funder asked for it, and then coaches you section by section against the funder's stated requirements. You edit it and you sign it. The blank page is what we remove, not your judgment.",
  },
  {
    q: "What happens to the work if I start on the free plan?",
    a: "It stays yours. The free plan is a smaller allowance of the same product, not a trial that expires and locks your data. Your organization profile, saved grants and drafts carry forward if you upgrade.",
  },
  {
    q: "We already have a grant writer. Why would we need this?",
    a: "Most of what a grant writer's time goes to isn't writing — it's screening opportunities, chasing eligibility rules and re-typing the same forty organizational facts. This hands those hours back so the writing gets the attention it deserves.",
  },
  {
    q: "Can someone walk us through it instead?",
    a: "Yes. A free 15-minute evaluation call covers grant fit and application strategy for your specific organization. Professional services start at $199 per application if you'd rather have help on a submission.",
  },
];

function TourStopCard({
  stop,
  visited,
  onOpen,
}: {
  stop: DemoStop;
  visited: boolean;
  onOpen: (stop: DemoStop) => void;
}) {
  const Icon = stop.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35 }}
      className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-teal-700">
            <Icon size={18} strokeWidth={2} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500" style={CABIN}>
              Stop {stop.order} of {DEMO_STOPS.length}
            </p>
            <h3 className="text-lg text-gray-900" style={LUSTRIA}>
              {stop.title}
            </h3>
          </div>
        </div>

        {visited && (
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700"
            style={CABIN}
          >
            <CircleCheck size={12} strokeWidth={2.5} />
            Seen
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600" style={CABIN}>
        {stop.promise}
      </p>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500" style={CABIN}>
          What to look for
        </p>
        <ul className="space-y-2">
          {stop.whatToLookFor.map((tip) => (
            <li key={tip} className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-600" />
              <span className="text-sm text-gray-600" style={CABIN}>
                {tip}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* The doubt a skeptic holds at exactly this point in the arc, answered
          here rather than deferred to an FAQ. */}
      <div className="mt-5 mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p className="text-sm font-semibold text-gray-900" style={CABIN}>
          “{stop.objection}”
        </p>
        <p className="mt-1.5 text-sm text-gray-600" style={CABIN}>
          {stop.answer}
        </p>
      </div>

      <button
        onClick={() => onOpen(stop)}
        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-600 bg-white px-4 py-2.5 pt-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        style={CABIN}
      >
        Open this screen
        <ArrowRight size={16} strokeWidth={2} />
      </button>
    </motion.article>
  );
}

/**
 * The whole walkthrough, listed in the hero.
 *
 * A stranger deciding whether to click "start" is really asking how long this
 * will take and whether they'll be trapped in it. Showing all seven stops up
 * front answers both — the tour is visibly finite, it's ordered, and any stop
 * can be opened directly, so nobody has to sit through screens they don't
 * care about to reach the one they do.
 */
function TourManifest({
  visitedStopIds,
  onOpen,
  onStart,
  startLabel,
}: {
  visitedStopIds: string[];
  onOpen: (stop: DemoStop) => void;
  onStart: () => void;
  startLabel: string;
}) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.12 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
    >
      <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-gray-100 pb-4">
        <p className="text-lg text-gray-900" style={LUSTRIA}>
          The walkthrough
        </p>
        <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-500">
          {DEMO_STOPS.length} screens · ~6 min
        </p>
      </div>

      <div className="space-y-5">
        {DEMO_PHASES.map((phase) => (
          <div key={phase.id}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
              {phase.label}
            </p>
            <ul className="space-y-1">
              {stopsForPhase(phase.id).map((stop) => {
                const Icon = stop.icon;
                const seen = visitedStopIds.includes(stop.id);
                return (
                  <li key={stop.id}>
                    <button
                      onClick={() => onOpen(stop)}
                      className="group flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-500 transition-colors group-hover:border-teal-200 group-hover:bg-white group-hover:text-teal-700">
                        <Icon size={14} strokeWidth={2} />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-800">
                        {stop.order}. {stop.navLabel}
                      </span>
                      {seen ? (
                        <CircleCheck
                          size={14}
                          strokeWidth={2.5}
                          className="shrink-0 text-teal-600"
                        />
                      ) : (
                        <ArrowRight
                          size={14}
                          strokeWidth={2}
                          className="shrink-0 text-gray-300 transition-colors group-hover:text-teal-600"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        <Play size={15} strokeWidth={2.5} />
        {startLabel}
      </button>
    </motion.aside>
  );
}

export function MarketingPage() {
  const navigate = useNavigate();
  const { visitedStopIds, visitedCount, totalStops, startDemo } = useDemoMode();

  /**
   * Where a returning visitor should pick up: the first stop they haven't
   * opened yet. Someone who explored three screens and came back should not
   * be sent to the beginning again.
   */
  const resumeStop = useMemo(() => {
    const unseen = DEMO_STOPS.find((stop) => !visitedStopIds.includes(stop.id));
    return unseen ?? null;
  }, [visitedStopIds]);

  const hasStarted = visitedCount > 0;

  const openStop = (stop: DemoStop) => {
    startDemo(stop.id);
    navigate(stop.path);
  };

  const startTour = () => {
    const target = resumeStop ?? FIRST_STOP;
    openStop(target);
  };

  // A returning visitor is offered their place back rather than the top.
  const startLabel =
    hasStarted && resumeStop
      ? `Resume at ${resumeStop.navLabel}`
      : "Start the guided walkthrough";

  const exploreFreely = () => {
    startDemo();
    navigate("/");
  };

  const createAccount = () => navigate("/subscribe/create-account");

  return (
    <div className="min-h-screen bg-white" style={CABIN}>
      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/signin")}
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:inline-flex"
            >
              Sign in
            </button>
            <button
              onClick={createAccount}
              className="rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Create free account
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-teal-50/60 to-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-700">
              <Sparkles size={13} strokeWidth={2.5} />
              Interactive demo
            </span>

            <h1
              className="text-4xl leading-tight text-gray-900 sm:text-5xl"
              style={LUSTRIA}
            >
              See the whole platform before you give us anything.
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-gray-600">
              Most grant software asks you to book a call and take their word for it. Instead,
              here is the actual product, loaded with a sample nonprofit's workspace. Walk the
              seven screens that take an organization from “we need funding” to a submitted
              application — then decide.
            </p>

            {/* Cost of looking, answered before we ask for a click. */}
            <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              {NO_COST_PROOFS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Icon size={15} strokeWidth={2} className="text-teal-600" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={startTour}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <Play size={17} strokeWidth={2.5} />
                {startLabel}
              </button>
              <button
                onClick={exploreFreely}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Skip the tour, explore freely
                <ArrowRight size={17} strokeWidth={2} />
              </button>
            </div>

            {hasStarted && (
              <p className="mt-4 text-sm text-gray-500">
                You've seen {visitedCount} of {totalStops} screens so far.
              </p>
            )}

            {/* The one thing a visitor needs to know at the instant they
                click, placed where they're already looking: the workspace is
                a stand-in, the funding notices are not. Left unsaid, a
                populated workspace reads as either fake or as somebody
                else's private data — and both cost the click. */}
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-gray-200 bg-white/70 p-4">
              <Eye size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-teal-600" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Before you click:</span> the
                organization inside the demo is fictional, so you'll see a workspace already in
                motion instead of an empty one. The funding opportunities in it are real
                published notices.
              </p>
            </div>
          </motion.div>

          <TourManifest
            visitedStopIds={visitedStopIds}
            onOpen={openStop}
            onStart={startTour}
            startLabel={startLabel}
          />
        </div>
      </section>

      {/* ── Why we lead with the product ───────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 inline-block text-sm font-semibold text-teal-600">
            Before you start
          </span>
          <h2 className="text-3xl text-gray-900" style={LUSTRIA}>
            Three things worth knowing, so you can trust what you're looking at
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TRUST_CARDS.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-teal-700">
                <Icon size={18} strokeWidth={2} />
              </span>
              <h3 className="mb-2 text-base font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── The walkthrough ────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block text-sm font-semibold text-teal-600">
              The walkthrough
            </span>
            <h2 className="text-3xl text-gray-900 sm:text-4xl" style={LUSTRIA}>
              Seven screens, in the order you'd actually use them
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Open any stop below and you're in the live application, with a tour rail across the
              top that tells you where you are and what to try. Wander off it whenever you like —
              the rail keeps your place, and one click brings you back.
            </p>
          </div>

          <div className="space-y-14">
            {DEMO_PHASES.map((phase, phaseIndex) => {
              const stops = stopsForPhase(phase.id);
              return (
                <div key={phase.id}>
                  <div className="mb-6 flex flex-col gap-1 border-l-2 border-teal-600 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                      Phase {phaseIndex + 1} — {phase.label}
                    </p>
                    <p className="text-base text-gray-700">{phase.summary}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {stops.map((stop) => (
                      <TourStopCard
                        key={stop.id}
                        stop={stop}
                        visited={visitedStopIds.includes(stop.id)}
                        onOpen={openStop}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-xl border border-teal-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-gray-900">
                Rather just start at the beginning?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                The guided tour opens {FIRST_STOP.title.toLowerCase()} and walks you forward from
                there.
              </p>
            </div>
            <button
              onClick={startTour}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <Play size={15} strokeWidth={2.5} />
              {startLabel}
            </button>
          </div>
        </div>
      </section>

      {/* ── Honest limits ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 inline-block text-sm font-semibold text-teal-600">
            What the demo can't show you
          </span>
          <h2 className="text-3xl text-gray-900 sm:text-4xl" style={LUSTRIA}>
            Four things that only work once it's your organization
          </h2>
          <p className="mt-4 text-base text-gray-600">
            The demo can show you every screen and every interaction. What it can't do is be about
            you — and that difference is most of the value. Here's exactly what changes when the
            profile is yours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DEMO_LIMITS.map(({ limit, why }) => (
            <motion.div
              key={limit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Lock size={12} strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{limit}</h3>
                  <p className="mt-1.5 text-sm text-gray-600">{why}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            All four are on the free plan. Setting up takes about twenty minutes, once.
          </p>
          <button
            onClick={createAccount}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Create your free account
            <ArrowRight size={15} strokeWidth={2} />
          </button>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block text-sm font-semibold text-teal-600">Pricing</span>
            <h2 className="text-3xl text-gray-900 sm:text-4xl" style={LUSTRIA}>
              Start free. Upgrade only when the searching outgrows it.
            </h2>
            <p className="mt-4 text-base text-gray-600">
              The free plan is the same product with a smaller allowance — not a countdown that
              locks your work when it runs out.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl bg-white p-6 shadow-sm ${
                  tier.recommended
                    ? "border-2 border-teal-600"
                    : "border border-gray-200"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Recommended
                    </span>
                  </div>
                )}

                <div className={`mb-6 ${tier.recommended ? "mt-2" : ""}`}>
                  <p className="mb-1 text-sm font-medium text-gray-500">{tier.name}</p>
                  <p className="mb-3 text-4xl font-normal text-gray-900" style={LUSTRIA}>
                    {tier.price}
                    {tier.priceSuffix && (
                      <span className="text-base font-normal text-gray-500">
                        {tier.priceSuffix}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">{tier.forWho}</p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 shrink-0 text-teal-600"
                        size={16}
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={tier.disabled ? undefined : createAccount}
                  disabled={tier.disabled}
                  className={
                    tier.disabled
                      ? "w-full cursor-not-allowed rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-400"
                      : "w-full rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  }
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Prefer to talk it through? A free 15-minute evaluation call covers grant fit and
            application strategy for your organization. Professional services start at $199 per
            application.
          </p>
        </div>
      </section>

      {/* ── Objections ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8">
          <span className="mb-3 inline-block text-sm font-semibold text-teal-600">
            Straight answers
          </span>
          <h2 className="text-3xl text-gray-900 sm:text-4xl" style={LUSTRIA}>
            The questions people ask before they sign up
          </h2>
        </div>

        <Accordion type="single" collapsible className="rounded-xl border border-gray-200 bg-white px-5">
          {FAQS.map(({ q, a }) => (
            <AccordionItem key={q} value={q} className="border-gray-200">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── Close ─────────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-white to-teal-50/70">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-3xl leading-tight text-gray-900 sm:text-4xl" style={LUSTRIA}>
            You've seen it work. Now see it work on your grants.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Create a free account and the same screens fill with your organization, your programs,
            and opportunities scored against both. No card, and nothing to cancel.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={createAccount}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Create your free account
              <ArrowRight size={17} strokeWidth={2} />
            </button>
            <button
              onClick={startTour}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              {hasStarted && resumeStop ? `Resume at ${resumeStop.navLabel}` : "Take the tour first"}
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Logo />
          <p className="max-w-xl text-xs text-gray-500">
            Demo environment. The organization, programs and applications shown in this
            walkthrough are sample data for demonstration only. Nothing entered here is saved,
            and no application is submitted to any funder.
          </p>
        </div>
      </footer>
    </div>
  );
}
