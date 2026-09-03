import { useMemo, useState } from "react";
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
  Maximize2,
  MonitorPlay,
  PhoneOff,
  Play,
  UserPlus,
} from "lucide-react";
import { Logo } from "../components/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";
import { GrantCardMotif } from "../marketing/GrantCardMotif";
import {
  BODY,
  BODY_LG,
  BODY_MD,
  BODY_SM,
  BTN_ON_DARK,
  BTN_PRIMARY,
  BTN_SECONDARY,
  CONTAINER,
  DARK_BAND,
  DISPLAY,
  EYEBROW,
  H1,
  H2,
  H3_BODY,
  H4_DISPLAY,
  ICON_TILE,
  IMAGE_CORNERS,
  IMAGE_CORNERS_SM,
  LEAD,
  MICROCOPY,
  NAV_LINK,
  NAV_LINK_TEAL,
} from "../marketing/design";
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
 * ── Strategy ──────────────────────────────────────────────────────────────
 *
 * The visitor arriving here is a grant seeker who has been sold to before.
 * Their objection is not "I don't understand what this does", it is "I don't
 * believe it works". A feature list argues with that; a product they can
 * touch, right now, without a form, doesn't have to. So this page is not a
 * pitch with a demo attached — it is a doorway into the real application,
 * with just enough scaffolding that a stranger can find their way.
 *
 * Four moves, in order:
 *   1. Remove the cost of looking. No account, no card, no call, and the
 *      tour's length stated up front.
 *   2. Walk the real product in the product's own order. The seven stops
 *      follow the canonical Great Grants Process, and each names the doubt a
 *      skeptic holds at that exact point and answers it on the spot — the
 *      objection handling is distributed through the tour rather than dumped
 *      in an FAQ nobody reads.
 *   3. Admit what the demo cannot do. Every limit named requires their own
 *      account, so candour and the upsell point the same direction.
 *   4. Close where the interest is. Pricing leads with Free, and the
 *      create-account CTA repeats in the nav, on every stop, on the in-app
 *      demo banner, and at the close.
 *
 * ── Visual language ───────────────────────────────────────────────────────
 *
 * Every colour, type size, line height, radius, letter-spacing and section
 * rhythm on this page comes from the greatgrants.ai homepage in Figma
 * (AJQoDJAJZL2ItawgAfLYh3, node 14075:33275), read through the Figma MCP
 * server and captured in src/app/marketing/design.ts. Notable pieces of that
 * language, because they are the easy ones to lose in a later edit:
 *
 *   • Lustria regular for display, Cabin for everything else. Headings
 *     #101828, body #475467, microcopy #94979c — none of which are the
 *     application's greys.
 *   • Display type runs at a 1.2 line-height ratio: 48/57.6 for H1, 36/43.2
 *     for H2. Body runs at 1.5.
 *   • 0.5px letter-spacing on every short run of Cabin — nav links, button
 *     labels, eyebrows, microcopy — and none on long-form copy.
 *   • The primary button is a #107569 fill inside a #0e9384 hairline, not a
 *     flat teal block.
 *   • Imagery is cornered on the diagonal: 64px on bottom-left and top-right,
 *     square on the other two. It is the homepage's signature and it is
 *     applied here to every product screenshot.
 *   • Sections alternate white and #f9fafb with 96px of top padding, inside a
 *     1200px container with 32px gutters.
 */

/** The cost of looking, answered before we ask for a click. */
const NO_COST_PROOFS = [
  { icon: UserPlus, label: "No account" },
  { icon: CreditCard, label: "No credit card" },
  { icon: PhoneOff, label: "No sales call" },
  { icon: Clock, label: "About 6 minutes" },
];

/** Why we lead with the product instead of a pitch. */
const TRUST_ITEMS = [
  {
    icon: MonitorPlay,
    title: "This Is The Product, Not A Video",
    body:
      "Every screen in this walkthrough is the live application. You'll click the real sidebar, open real grant notices, and read the real coaching output — not a recorded click-through or a series of screenshots.",
  },
  {
    icon: Eye,
    title: "The Data Belongs To A Sample Nonprofit",
    body:
      "So you can see a populated workspace rather than an empty one. The organization, its programs and its applications are fictional; the funding opportunities you'll read are real published notices.",
  },
  {
    icon: Lock,
    title: "Nothing You Do Here Is Saved",
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

/**
 * Pricing, in the homepage's own shape: two cards, the AI tier marked with
 * the AI purple accent and a pill on its top border rather than teal.
 */
const PRICING_TIERS = [
  {
    name: "Unlimited Search & Discovery",
    price: "Free",
    priceNote: "",
    forWho: "For organizations beginning their grant search and building readiness.",
    features: [
      "Unlimited Search",
      "All Federal & State Grants",
      "Federal Grant Readiness Coaching",
      "Weekly Email Alerts",
      "Unlimited Saved Grants",
      "Up to 5 seats",
    ],
    featured: false,
    badge: "",
  },
  {
    name: "AI-Grant Writer Gold",
    price: "Coming Soon",
    priceNote: "Up to 10 Applications Generated per month",
    forWho: "Everything in Unlimited Search \u0026 Discovery\u00a0+",
    features: [
      "10 AI-generated drafts per month",
      "Auto-drafted grant responses in minutes",
      "NOFO requirement analysis",
      "Review, edit, and collaborate",
      "AI-Application Coaching",
    ],
    featured: true,
    badge: "Free For A Limited Time",
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
];

/* ── Imagery ───────────────────────────────────────────────────────────── */

/**
 * A product screenshot under the homepage's corner treatment: radius-5xl on
 * the bottom-left and top-right, square on the other two corners. The
 * clipping container carries the same radii as the image, exactly as the
 * design does it, so the crop and the frame agree.
 */
function ScreenImage({
  src,
  alt,
  onExpand,
  priority = false,
  size = "sm",
}: {
  src: string;
  alt: string;
  onExpand?: () => void;
  priority?: boolean;
  size?: "sm" | "lg";
}) {
  const corners = size === "lg" ? IMAGE_CORNERS : IMAGE_CORNERS_SM;

  const image = (
    <img
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`block w-full ${corners}`}
    />
  );

  if (!onExpand) {
    return <div className={`overflow-hidden bg-[#f9fafb] ${corners}`}>{image}</div>;
  }

  return (
    <button
      type="button"
      onClick={onExpand}
      aria-label={`Enlarge screenshot: ${alt}`}
      className={`group/frame relative block w-full cursor-zoom-in overflow-hidden bg-[#f9fafb] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-2 ${corners}`}
    >
      {image}
      <span
        className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-[8px] bg-white/95 px-2.5 py-1.5 text-[12px] leading-[18px] font-semibold tracking-[0.5px] text-[#475467] opacity-0 shadow-[0px_1px_2px_rgba(16,24,40,0.1)] transition-opacity group-hover/frame:opacity-100"
        style={BODY}
      >
        <Maximize2 size={12} strokeWidth={2.5} />
        Enlarge
      </span>
    </button>
  );
}

/* ── Tour ──────────────────────────────────────────────────────────────── */

function TourStopCard({
  stop,
  visited,
  onOpen,
  onExpand,
}: {
  stop: DemoStop;
  visited: boolean;
  onOpen: (stop: DemoStop) => void;
  onExpand: (stop: DemoStop) => void;
}) {
  const Icon = stop.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35 }}
      className="flex flex-col"
      style={BODY}
    >
      {/* The screen itself, before any prose about it. */}
      <ScreenImage src={stop.image} alt={stop.imageAlt} onExpand={() => onExpand(stop)} />

      <div className="mt-6 flex items-start gap-4">
        <div className={ICON_TILE}>
          <Icon size={24} strokeWidth={1.75} className="text-[#475467]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <p className="text-[12px] leading-[18px] font-semibold uppercase tracking-[0.5px] text-[#94979c]">
              Stop {stop.order} of {DEMO_STOPS.length}
            </p>
            {visited && (
              <span className="inline-flex items-center gap-1 text-[12px] leading-[18px] font-semibold tracking-[0.5px] text-[#0e9384]">
                <CircleCheck size={12} strokeWidth={2.5} />
                Seen
              </span>
            )}
          </div>
          <h3 className={`mt-1 ${H4_DISPLAY}`} style={DISPLAY}>
            {stop.title}
          </h3>
          <p className={`mt-2 ${BODY_MD}`}>{stop.promise}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-[12px] leading-[18px] font-semibold uppercase tracking-[0.5px] text-[#94979c]">
          What to look for
        </p>
        <ul className="space-y-2.5">
          {stop.whatToLookFor.map((tip) => (
            <li key={tip} className="flex items-start gap-3">
              <Check size={16} strokeWidth={2.5} className="mt-1 shrink-0 text-[#0e9384]" />
              <span className={BODY_MD}>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* The doubt a skeptic holds at exactly this point in the arc, answered
          here rather than deferred to an FAQ. */}
      <div className="mt-6 border-l-2 border-[#0e9384] pl-4">
        <p className="text-[16px] leading-[24px] font-semibold text-[#101828]">
          “{stop.objection}”
        </p>
        <p className={`mt-1.5 ${BODY_MD}`}>{stop.answer}</p>
      </div>

      <div className="mt-auto pt-7">
        <button onClick={() => onOpen(stop)} className={BTN_SECONDARY} style={BODY}>
          Open this screen
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>
    </motion.article>
  );
}

/**
 * The whole walkthrough as a jump strip.
 *
 * A stranger deciding whether to start is really asking how long this will
 * take and whether they'll be trapped in it. Listing all seven stops answers
 * both — the tour is visibly finite, it's ordered, and any stop opens
 * directly, so nobody sits through screens they don't care about.
 */
function TourJumpStrip({
  visitedStopIds,
  onOpen,
}: {
  visitedStopIds: string[];
  onOpen: (stop: DemoStop) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2" style={BODY}>
      {DEMO_STOPS.map((stop) => {
        const Icon = stop.icon;
        const seen = visitedStopIds.includes(stop.id);
        return (
          <button
            key={stop.id}
            onClick={() => onOpen(stop)}
            className="group inline-flex items-center gap-2 rounded-[8px] border border-[#d0d5dd] bg-white px-3 py-2 text-[14px] leading-[20px] font-normal tracking-[0.5px] text-[#475467] shadow-[0px_1px_1px_rgba(16,24,40,0.05)] transition-colors hover:border-[#0e9384] hover:text-[#101828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-2"
          >
            {seen ? (
              <CircleCheck size={14} strokeWidth={2.5} className="text-[#0e9384]" />
            ) : (
              <Icon size={14} strokeWidth={2} className="text-[#94979c]" />
            )}
            {stop.order}. {stop.navLabel}
          </button>
        );
      })}
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export function MarketingPage() {
  const navigate = useNavigate();
  const { visitedStopIds, visitedCount, totalStops, startDemo } = useDemoMode();
  const [expandedStop, setExpandedStop] = useState<DemoStop | null>(null);

  /**
   * Where a returning visitor picks up: the first stop they haven't opened.
   * Someone who explored three screens and came back should not be sent to
   * the beginning again.
   */
  const resumeStop = useMemo(
    () => DEMO_STOPS.find((stop) => !visitedStopIds.includes(stop.id)) ?? null,
    [visitedStopIds],
  );

  const hasStarted = visitedCount > 0;

  const openStop = (stop: DemoStop) => {
    startDemo(stop.id);
    navigate(stop.path);
  };

  const startTour = () => openStop(resumeStop ?? FIRST_STOP);
  const exploreFreely = () => {
    startDemo();
    navigate("/");
  };
  const createAccount = () => navigate("/subscribe/create-account");

  const startLabel =
    hasStarted && resumeStop ? `Resume At ${resumeStop.navLabel}` : "Start The Guided Walkthrough";

  return (
    <div className="min-h-screen bg-white" style={BODY}>
      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 h-[80px] backdrop-blur"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(255,255,255) 0%, rgba(255,255,255,0.85) 100%)",
        }}
      >
        <div className={`${CONTAINER} flex h-full items-center justify-between`}>
          <button
            onClick={() => navigate("/marketing")}
            aria-label="Great Grants home"
            className="min-w-0 shrink rounded-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384]"
          >
            <Logo />
          </button>

          <nav className="flex shrink-0 items-center gap-1 sm:gap-2">
            <button onClick={createAccount} className={`hidden md:inline-flex ${NAV_LINK_TEAL}`}>
              Sign Up
            </button>
            <button onClick={() => navigate("/signin")} className={`hidden md:inline-flex ${NAV_LINK}`}>
              Login
            </button>
            {/* The full label is the design's; below the sm breakpoint it and
                the logo cannot both fit a 390px viewport, so it shortens
                rather than colliding. */}
            <button onClick={createAccount} className={BTN_PRIMARY}>
              <span className="hidden sm:inline">Create Your Free Account</span>
              <span className="sm:hidden">Sign Up Free</span>
            </button>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pb-[64px] pt-[48px] sm:pb-[96px] sm:pt-[64px]">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,631px)_minmax(0,505px)] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className={EYEBROW}>Interactive Demo</p>

              <h1 className={`mt-3 ${H1}`} style={DISPLAY}>
                See the whole platform before you give us anything
              </h1>

              <div className="h-6" />

              <p className={`max-w-[560px] ${LEAD}`}>
                Most grant software asks you to book a call and take their word for it. Instead,
                here is the actual product, loaded with a sample nonprofit's workspace. Walk the
                seven screens that take an organization from “we need funding” to a submitted
                application — then decide.
              </p>

              <div className="h-8 sm:h-12" />

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <button onClick={startTour} className={BTN_PRIMARY}>
                  <Play size={16} strokeWidth={2.5} />
                  {startLabel}
                </button>
                <button onClick={exploreFreely} className={BTN_SECONDARY}>
                  Explore On My Own
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              </div>

              <p className={`mt-3 ${MICROCOPY}`}>
                {hasStarted
                  ? `${visitedCount} of ${totalStops} screens seen · No Credit Card Required`
                  : "No Account, No Credit Card Required"}
              </p>

              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {NO_COST_PROOFS.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-[14px] leading-[20px] font-normal tracking-[0.5px] text-[#475467]"
                  >
                    <Icon size={15} strokeWidth={2} className="text-[#0e9384]" />
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="hidden lg:block"
            >
              <GrantCardMotif />
            </motion.div>
          </div>

          {/* The product itself, at the top of the page. A demo walkthrough
              that describes screens without showing one asks a stranger to
              take the first thing on trust. */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-16 sm:mt-20"
          >
            <ScreenImage
              src={FIRST_STOP.image}
              alt={FIRST_STOP.imageAlt}
              size="lg"
              priority
              onExpand={() => setExpandedStop(FIRST_STOP)}
            />
            <p className={`mt-4 text-center ${BODY_SM}`}>
              The dashboard, exactly as the demo opens it. Every screenshot on this page is a
              capture of the running application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Before you start ───────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-[64px] sm:py-[96px]">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className={EYEBROW}>Before You Start</p>
              <h2 className={`mt-3 ${H2}`} style={DISPLAY}>
                Three things worth knowing, so you can trust what you're looking at
              </h2>
              <div className="h-4" />
              <p className={`mt-4 max-w-[536px] ${BODY_LG}`}>
                Nothing on this page is a mockup and nothing here is a trap. Here is exactly what
                you are about to open.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {TRUST_ITEMS.map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-4"
                >
                  <div className={ICON_TILE}>
                    <Icon size={24} strokeWidth={1.75} className="text-[#475467]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className={H3_BODY}>{title}</h3>
                    <p className={`mt-2 ${BODY_MD}`}>{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The walkthrough ────────────────────────────────────────────── */}
      <section className="py-[64px] sm:py-[96px]">
        <div className={CONTAINER}>
          <div className="max-w-[720px]">
            <p className={EYEBROW}>The Walkthrough</p>
            <h2 className={`mt-3 ${H2}`} style={DISPLAY}>
              Seven screens, in the order you'd actually use them
            </h2>
            <div className="h-4" />
            <p className={`mt-4 ${BODY_LG}`}>
              Open any stop below and you're in the live application, with a tour rail across the
              top that tells you where you are and what to try. Wander off it whenever you like —
              the rail keeps your place, and one click brings you back.
            </p>
          </div>

          <div className="mt-8">
            <TourJumpStrip visitedStopIds={visitedStopIds} onOpen={openStop} />
          </div>

          <div className="mt-16 space-y-16 sm:space-y-20">
            {DEMO_PHASES.map((phase, phaseIndex) => (
              <div key={phase.id}>
                <div className="mb-10 border-l-2 border-[#0e9384] pl-5">
                  <p className={EYEBROW}>
                    Phase {phaseIndex + 1} — {phase.label}
                  </p>
                  <p className={`mt-1 ${BODY_LG}`}>{phase.summary}</p>
                </div>

                <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
                  {stopsForPhase(phase.id).map((stop) => (
                    <TourStopCard
                      key={stop.id}
                      stop={stop}
                      visited={visitedStopIds.includes(stop.id)}
                      onOpen={openStop}
                      onExpand={setExpandedStop}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-5 border-t border-[#f2f4f7] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className={H3_BODY}>Rather just start at the beginning?</h3>
              <p className={`mt-1 ${BODY_MD}`}>
                The guided tour opens your dashboard and walks you forward from there.
              </p>
            </div>
            <button onClick={startTour} className={BTN_PRIMARY}>
              <Play size={16} strokeWidth={2.5} />
              {startLabel}
            </button>
          </div>
        </div>
      </section>

      {/* ── Honest limits ─────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-[64px] sm:py-[96px]">
        <div className={CONTAINER}>
          <div className="max-w-[720px]">
            <p className={EYEBROW}>What The Demo Can't Show You</p>
            <h2 className={`mt-3 ${H2}`} style={DISPLAY}>
              Four things that only work once it's your organization
            </h2>
            <div className="h-4" />
            <p className={`mt-4 ${BODY_LG}`}>
              The demo can show you every screen and every interaction. What it can't do is be
              about you — and that difference is most of the value. Here's exactly what changes
              when the profile is yours.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
            {DEMO_LIMITS.map(({ limit, why }) => (
              <motion.div
                key={limit}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35 }}
                className="flex items-start gap-4"
              >
                <div className={ICON_TILE}>
                  <Lock size={24} strokeWidth={1.75} className="text-[#475467]" />
                </div>
                <div className="min-w-0">
                  <h3 className={H3_BODY}>{limit}</h3>
                  <p className={`mt-2 ${BODY_MD}`}>{why}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className={BODY_MD}>
              All four are on the free plan. Setting up takes about twenty minutes, once.
            </p>
            <button onClick={createAccount} className={BTN_PRIMARY}>
              Create Your Free Account
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section className="py-[64px] sm:py-[96px]">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-[720px] text-center">
            <p className={EYEBROW}>Fair Pricing</p>
            <h2 className={`mt-3 ${H2}`} style={DISPLAY}>
              We offer value from your first search all the way to your last application
            </h2>
            <div className="h-4" />
            <p className={`mt-4 ${BODY_LG}`}>
              We combine federal compliance expertise with advanced generative AI to help your
              team secure more funding with less effort.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[860px] grid-cols-1 items-start gap-8 md:grid-cols-2">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-[12px] border bg-white p-8 ${
                  tier.featured ? "border-[#9810fa] md:-mt-6 md:pb-12" : "border-[#e4e7ec]"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block whitespace-nowrap rounded-full bg-[#9810fa] px-3 py-1 text-[11px] leading-[16px] font-semibold tracking-[0.5px] text-white">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className={H4_DISPLAY} style={DISPLAY}>
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-[36px] leading-[43.2px] font-bold text-[#101828]">
                    {tier.price}
                  </p>
                  {tier.priceNote && (
                    <p className="mt-2 text-[14px] leading-[20px] font-semibold text-[#101828]">
                      {tier.priceNote}
                    </p>
                  )}
                  <p className={`mx-auto mt-4 max-w-[280px] ${BODY_SM}`}>{tier.forWho}</p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={16} strokeWidth={2} className="mt-1 shrink-0 text-[#101828]" />
                      <span className={BODY_SM}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={createAccount} className={`mt-8 w-full ${BTN_PRIMARY}`}>
                  Start for Free
                  <ArrowRight size={15} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>

          {/* Dark brand band — the homepage's "need support?" treatment,
              corners mirroring the imagery device. */}
          <div className={`mt-16 overflow-hidden px-8 py-10 sm:px-12 sm:py-12 ${DARK_BAND}`}>
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* The faint circle motif the band carries on the homepage. */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-32 size-[380px] rounded-full bg-white/[0.04]"
              />
              <div className="relative max-w-[360px]">
                <h2
                  className="text-[30px] leading-[36px] font-normal text-white"
                  style={DISPLAY}
                >
                  Need grant writing support?
                </h2>
              </div>
              <div className="relative max-w-[480px]">
                <p className="text-[16px] leading-[24px] font-normal text-[#c7f5ec]">
                  Talk to our team of experienced grant writers who have been awarded hundreds of
                  millions of dollars in federal grants over the last decade. Professional
                  services start at $199 per application.
                </p>
                <button className={`mt-6 ${BTN_ON_DARK}`}>Book A Free Call</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Objections ────────────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-[64px] sm:py-[96px]">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-[768px]">
            <div className="text-center">
              <p className={EYEBROW}>Straight Answers</p>
              <h2 className={`mt-3 ${H2}`} style={DISPLAY}>
                The questions people ask before they sign up
              </h2>
            </div>

            <Accordion type="single" collapsible className="mt-12">
              {FAQS.map(({ q, a }) => (
                <AccordionItem key={q} value={q} className="border-[#e4e7ec]">
                  <AccordionTrigger className="py-5 text-left text-[18px] leading-[27px] font-semibold text-[#101828] hover:no-underline">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className={`pb-6 ${BODY_MD}`}>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Close ─────────────────────────────────────────────────────── */}
      <section className="py-[64px] sm:py-[96px]">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className={H2} style={DISPLAY}>
              You've seen it work. Now see it work on your grants.
            </h2>
            <p className={`mx-auto mt-5 ${BODY_LG}`}>
              Create a free account and the same screens fill with your organization, your
              programs, and opportunities scored against both.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={createAccount} className={BTN_PRIMARY}>
                Create Your Free Account
                <ArrowRight size={16} strokeWidth={2} />
              </button>
              <button onClick={startTour} className={BTN_SECONDARY}>
                {hasStarted && resumeStop ? startLabel : "Take The Tour First"}
              </button>
            </div>
            <p className={`mt-3 ${MICROCOPY}`}>Unlimited Searches, No Credit Card Required</p>
          </div>
        </div>
      </section>

      {/* ── Screenshot lightbox ──────────────────────────────────────── */}
      <Dialog
        open={expandedStop !== null}
        onOpenChange={(open) => !open && setExpandedStop(null)}
      >
        <DialogContent className="max-w-[min(1400px,calc(100vw-3rem))] gap-4 rounded-[12px] border-[#e4e7ec] p-4 sm:max-w-[min(1400px,calc(100vw-4rem))] sm:p-5">
          {expandedStop && (
            <>
              <DialogTitle
                className="pr-8 text-[20px] leading-[24px] font-normal text-[#101828]"
                style={DISPLAY}
              >
                Stop {expandedStop.order} — {expandedStop.title}
              </DialogTitle>
              <div className={`overflow-hidden bg-[#f9fafb] ${IMAGE_CORNERS_SM}`}>
                <img
                  src={expandedStop.image}
                  alt={expandedStop.imageAlt}
                  className={`block max-h-[70vh] w-full object-contain ${IMAGE_CORNERS_SM}`}
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className={`max-w-[720px] ${BODY_MD}`}>{expandedStop.promise}</p>
                <button
                  onClick={() => {
                    const target = expandedStop;
                    setExpandedStop(null);
                    openStop(target);
                  }}
                  className={`shrink-0 ${BTN_PRIMARY}`}
                >
                  Open This Screen Live
                  <ArrowRight size={15} strokeWidth={2} />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#e4e7ec] bg-white">
        <div
          className={`${CONTAINER} flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between`}
        >
          <Logo />
          <p className="max-w-[620px] text-[12px] leading-[18px] font-normal text-[#94979c]">
            Demo environment. The organization, programs and applications shown in this
            walkthrough are sample data for demonstration only. Nothing entered here is saved,
            and no application is submitted to any funder.
          </p>
        </div>
      </footer>
    </div>
  );
}
