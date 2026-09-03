import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Sparkles, SendHorizonal, ArrowRight, RotateCcw } from "lucide-react";
import { suggestedQuestions, type SuggestedQuestion } from "@/data/dashboardData";

/**
 * Ask Great Grants — the dashboard's AI help module.
 *
 * Design intent: an empty chat box is an intimidating way to offer help, so the
 * module opens with the four questions users actually have on day one. Picking
 * one is a single click; typing your own is always available underneath.
 *
 * Answers are resolved through the optional `onAsk` prop. When it isn't
 * supplied the module answers from the curated set in dashboardData.ts, which
 * is what the prototype does today — wiring a real assistant means passing one
 * prop, not rewriting this component.
 */

const CABIN = { fontFamily: "Cabin, sans-serif" } as const;
const LUSTRIA = { fontFamily: "Lustria, serif" } as const;

interface Exchange {
  id: string;
  question: string;
  answer: string | null;
  action?: SuggestedQuestion["action"];
}

interface AskGreatGrantsProps {
  /** Resolves a free-text question to an answer. Defaults to the curated set. */
  onAsk?: (question: string) => Promise<Pick<SuggestedQuestion, "answer" | "action">>;
}

const FALLBACK_ANSWER: Pick<SuggestedQuestion, "answer" | "action"> = {
  answer:
    "I don't have a grounded answer for that one yet. In the meantime, the fastest way to get unstuck is usually your Organization Profile — the more of it that's filled in, the better every recommendation and draft gets. You can also ask me about deadlines, eligibility, coaching notes, or your plan credits.",
  action: { label: "Open your profile", to: "/organization" },
};

/** Matches a typed question against the curated set on overlapping keywords. */
function resolveLocally(question: string): Pick<SuggestedQuestion, "answer" | "action"> {
  const asked = question.toLowerCase();
  const words = asked.split(/\W+/).filter((w) => w.length > 3);

  let best: { score: number; item: SuggestedQuestion } | null = null;
  for (const item of suggestedQuestions) {
    const target = item.question.toLowerCase();
    const score = words.reduce((acc, w) => (target.includes(w) ? acc + 1 : acc), 0);
    if (score > 0 && (!best || score > best.score)) best = { score, item };
  }
  return best ? { answer: best.item.answer, action: best.item.action } : FALLBACK_ANSWER;
}

export function AskGreatGrants({ onAsk }: AskGreatGrantsProps) {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [draft, setDraft] = useState("");
  const [thread, setThread] = useState<Exchange[]>([]);
  const [pending, setPending] = useState(false);
  const threadEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (thread.length > 0) {
      threadEndRef.current?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }, [thread, pending, prefersReducedMotion]);

  const ask = async (question: string, known?: SuggestedQuestion) => {
    const trimmed = question.trim();
    if (!trimmed || pending) return;

    const id = `ex-${Date.now()}`;
    setThread((prev) => [...prev, { id, question: trimmed, answer: null }]);
    setDraft("");
    setPending(true);

    try {
      const result = known
        ? { answer: known.answer, action: known.action }
        : onAsk
        ? await onAsk(trimmed)
        : await new Promise<Pick<SuggestedQuestion, "answer" | "action">>((resolve) =>
            // Deliberate short delay so the thinking state is visible — an
            // instant answer reads as canned rather than considered.
            setTimeout(() => resolve(resolveLocally(trimmed)), 700),
          );
      setThread((prev) =>
        prev.map((e) => (e.id === id ? { ...e, answer: result.answer, action: result.action } : e)),
      );
    } finally {
      setPending(false);
    }
  };

  const unasked = suggestedQuestions.filter(
    (q) => !thread.some((e) => e.question === q.question),
  );

  return (
    <section
      className="rounded-xl border border-gray-200 bg-white flex flex-col overflow-hidden"
      aria-labelledby="ask-heading"
    >
      <div className="px-5 pt-5 pb-4 border-b border-gray-100 bg-gradient-to-br from-[#f6fefb] to-white">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </span>
            <h2 id="ask-heading" className="text-base text-gray-900 truncate" style={LUSTRIA}>
              Ask Great Grants
            </h2>
          </div>
          {thread.length > 0 && (
            <button
              onClick={() => setThread([])}
              className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 shrink-0"
              style={CABIN}
            >
              <RotateCcw className="w-3 h-3" />
              Clear
            </button>
          )}
        </div>
        <p className="mt-1.5 text-xs text-gray-600 leading-relaxed" style={CABIN}>
          Questions about your applications, eligibility, deadlines, or how any of this works —
          answered against your own data.
        </p>
      </div>

      {/* Thread */}
      <div className="flex-1 px-5 py-4 space-y-4 max-h-[380px] overflow-y-auto">
        {thread.length === 0 && (
          <p className="text-xs text-gray-500 leading-relaxed" style={CABIN}>
            Start with one of these, or type your own question below.
          </p>
        )}

        <AnimatePresence initial={false}>
          {thread.map((exchange) => (
            <motion.div
              key={exchange.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2.5"
            >
              <div className="flex justify-end">
                <p
                  className="max-w-[85%] rounded-2xl rounded-br-sm bg-gray-900 text-white px-3.5 py-2 text-sm leading-relaxed"
                  style={CABIN}
                >
                  {exchange.question}
                </p>
              </div>

              {exchange.answer === null ? (
                <div className="flex items-center gap-1.5 pl-1" aria-live="polite">
                  <span className="sr-only">Thinking</span>
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-teal-500"
                      animate={prefersReducedMotion ? undefined : { opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl rounded-bl-sm bg-gray-50 border border-gray-200 px-3.5 py-3">
                  <p className="text-sm text-gray-700 leading-relaxed" style={CABIN}>
                    {exchange.answer}
                  </p>
                  {exchange.action && (
                    <button
                      onClick={() => navigate(exchange.action!.to)}
                      className="mt-2.5 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:underline"
                      style={CABIN}
                    >
                      {exchange.action.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={threadEndRef} />
      </div>

      {/* Suggested questions */}
      {unasked.length > 0 && (
        <div className="px-5 pb-3 flex flex-wrap gap-1.5">
          {unasked.slice(0, 4).map((q) => (
            <button
              key={q.id}
              onClick={() => ask(q.question, q)}
              disabled={pending}
              className="px-2.5 py-1.5 rounded-full border border-gray-300 text-xs text-gray-700 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800 transition-colors disabled:opacity-50"
              style={CABIN}
            >
              {q.question}
            </button>
          ))}
        </div>
      )}

      {/* Composer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(draft);
        }}
        className="px-5 pb-5 pt-1"
      >
        <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 transition-colors">
          <label htmlFor="ask-input" className="sr-only">
            Ask a question about your grants
          </label>
          <input
            id="ask-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ask anything about your grants…"
            disabled={pending}
            className="flex-1 min-w-0 text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-transparent disabled:opacity-60"
            style={CABIN}
          />
          <button
            type="submit"
            disabled={!draft.trim() || pending}
            className="w-7 h-7 rounded-md bg-teal-600 text-white flex items-center justify-center shrink-0 hover:bg-teal-700 transition-colors disabled:bg-gray-200 disabled:text-gray-400"
            aria-label="Send question"
          >
            <SendHorizonal className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </section>
  );
}
