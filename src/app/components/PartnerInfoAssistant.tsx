import { useEffect, useRef, useState, type DragEvent, type KeyboardEvent } from "react";
import { toast } from "sonner";
import {
  CheckCircle2,
  Download,
  FileText,
  FileSignature,
  Mail,
  Paperclip,
  PartyPopper,
  SendHorizontal,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import type { PartnerApplication, PartnerRequest } from "@/data/partnerApplications";

export interface AssistantAnswer {
  text?: string;
  fileNames?: string[];
}

export interface AssistantState {
  answers: Record<string, AssistantAnswer>;
  /** Chronological log of replies — drives the transcript. */
  history: { qid: string; kind: "answer" | "defer" }[];
}

export const EMPTY_ASSISTANT_STATE: AssistantState = { answers: {}, history: [] };

/** Next question to ask: unanswered + not deferred first, then deferred ones in the order they were put off. */
function nextRequest(requests: PartnerRequest[], state: AssistantState): PartnerRequest | undefined {
  const open = requests.filter((r) => !state.answers[r.id]);
  const deferred = [...new Set(state.history.filter((h) => h.kind === "defer").map((h) => h.qid))];
  const fresh = open.filter((r) => !deferred.includes(r.id));
  if (fresh.length) return fresh[0];
  return deferred.map((id) => open.find((r) => r.id === id)).find(Boolean);
}

const THINKING_MS = 650;

/**
 * Chat-style assistant that collects the information a prime applicant needs
 * from a sub-recipient partner. Works for any number of requests (5, 30, 50…):
 * progress is answered ÷ total. At 100% it swaps the composer for a
 * completion state.
 */
export function PartnerInfoAssistant({
  app,
  state,
  onChange,
}: {
  app: PartnerApplication;
  state: AssistantState;
  onChange: (next: AssistantState) => void;
}) {
  const requests = app.requests ?? [];
  const total = requests.length;
  const answeredCount = requests.filter((r) => state.answers[r.id]).length;
  const percent = total === 0 ? 0 : Math.round((answeredCount / total) * 100);
  const complete = total > 0 && answeredCount === total;
  const current = nextRequest(requests, state);
  const remaining = total - answeredCount;

  const [draft, setDraft] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [thinking, setThinking] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [mouDownloaded, setMouDownloaded] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const thinkingTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(thinkingTimer.current), []);

  // Keep the newest message in view — scroll the log itself, never the page.
  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight, behavior: "smooth" });
  }, [state.history.length, thinking, complete]);

  const byId = (id: string) => requests.find((r) => r.id === id)!;
  const needsFile = current?.kind === "upload" || current?.kind === "mou";
  const canSend = !!current && !thinking && (needsFile ? files.length > 0 : draft.trim().length > 0);

  const reveal = () => {
    setThinking(true);
    clearTimeout(thinkingTimer.current);
    thinkingTimer.current = setTimeout(() => setThinking(false), THINKING_MS);
  };

  const submit = (override?: string) => {
    if (!current || thinking) return;
    const text = (override ?? draft).trim();
    if (!override && !canSend) return;
    const answer: AssistantAnswer = { text: text || undefined, fileNames: files.length ? files.map((f) => f.name) : undefined };
    onChange({
      answers: { ...state.answers, [current.id]: answer },
      history: [...state.history, { qid: current.id, kind: "answer" }],
    });
    setDraft("");
    setFiles([]);
    if (answeredCount + 1 === total) {
      toast.success("All information submitted", {
        description: `${app.primeApplicant} will update you as things progress.`,
      });
    } else {
      reveal();
    }
  };

  const defer = () => {
    if (!current) return;
    onChange({ ...state, history: [...state.history, { qid: current.id, kind: "defer" }] });
    setDraft("");
    setFiles([]);
    reveal();
  };

  const addFiles = (list: FileList | File[] | null) => {
    if (!list) return;
    const incoming = Array.from(list);
    // Single-document questions keep only the latest file; others accumulate.
    setFiles((prev) => (current?.kind === "mou" ? incoming.slice(-1) : [...prev, ...incoming]));
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const downloadMou = () => {
    const body = [
      "MEMORANDUM OF UNDERSTANDING (SAMPLE)",
      "",
      `Program: ${app.programName}`,
      `Prime applicant: ${app.primeApplicant}`,
      `Sub-recipient: ${app.contact?.organization ?? "Your organization"}`,
      `Role: ${app.need}`,
      `Amount: ${app.mouAmount}`,
      `Period: ${app.period}`,
      "",
      "Signature: ______________________   Date: ____________",
    ].join("\n");
    const url = URL.createObjectURL(new Blob([body], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `MOU - ${app.programName}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setMouDownloaded(true);
    toast("MOU downloaded", { description: "Sign it, then upload the signed copy here." });
  };

  return (
    <section
      aria-label="Partner information requests"
      className={`rounded-xl border bg-white overflow-hidden transition-colors ${complete ? "border-green-300" : "border-gray-200"}`}
    >
      {/* Progress */}
      <div className={`p-5 border-b transition-colors ${complete ? "bg-green-50 border-green-200" : "border-gray-200"}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              {complete ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" aria-hidden="true" />
              ) : (
                <Sparkles className="w-5 h-5 text-teal-600" aria-hidden="true" />
              )}
              {complete ? "Everything's in — you're done!" : `Information for ${app.primeApplicant}`}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {complete
                ? `${app.primeApplicant} will update you as things progress.`
                : answeredCount === 0
                  ? `${total} quick items to complete your part of the application.`
                  : `${remaining} ${remaining === 1 ? "item" : "items"} to go${remaining <= 2 ? " — almost there" : ""}.`}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className={`text-2xl font-semibold tabular-nums ${complete ? "text-green-700" : "text-gray-900"}`}>{percent}%</p>
            <p className="text-xs text-gray-500">
              {answeredCount} of {total} complete
            </p>
          </div>
        </div>
        <div
          role="progressbar"
          aria-label="Partner information completion"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          className="mt-4 h-2.5 w-full rounded-full bg-gray-100 overflow-hidden"
        >
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out ${complete ? "bg-green-500" : "bg-teal-600"}`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Transcript */}
      <div
        ref={log}
        role="log"
        aria-live="polite"
        aria-label="Conversation with the Great Grants assistant"
        className="max-h-[440px] overflow-y-auto px-5 py-5 space-y-4 bg-gray-50/60"
      >
        <AssistantBubble>
          Hi! I'm the Great Grants assistant. {app.primeApplicant} needs a few details from you for the{" "}
          <span className="font-medium">{app.programName}</span> application. Answer in your own words, attach documents with the
          paperclip, or tap “Ask me later” to come back to a question.
        </AssistantBubble>

        {state.history.map((h, i) => {
          const q = byId(h.qid);
          const a = state.answers[h.qid];
          return (
            <div key={`${h.qid}-${i}`} className="space-y-4">
              <QuestionBubble request={q} />
              {h.kind === "defer" ? (
                <UserBubble muted>Ask me later</UserBubble>
              ) : (
                <UserBubble>
                  {a?.text && <p>{a.text}</p>}
                  {a?.fileNames?.map((n) => (
                    <FileChip key={n} name={n} tone="onDark" />
                  ))}
                </UserBubble>
              )}
            </div>
          );
        })}

        {thinking && (
          <AssistantBubble>
            <span className="sr-only">Assistant is typing</span>
            <span aria-hidden="true" className="flex items-center gap-1 h-5">
              {[0, 150, 300].map((d) => (
                <span key={d} className="size-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: `${d}ms` }} />
              ))}
            </span>
          </AssistantBubble>
        )}

        {!thinking && current && (
          <div className="space-y-3">
            <QuestionBubble request={current} />
            {current.kind === "choice" && (
              <div className="pl-11 flex flex-wrap gap-2">
                {current.options?.map((o) => (
                  <button
                    key={o}
                    onClick={() => submit(o)}
                    className="rounded-full border border-teal-200 bg-white px-3.5 py-1.5 text-sm text-teal-800 hover:bg-teal-50 hover:border-teal-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}
            {current.kind === "mou" && (
              <div className="ml-11 rounded-lg border border-gray-200 bg-white p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <FileSignature className="w-5 h-5 text-teal-700" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900 truncate">Memorandum of Understanding</p>
                    <p className="text-xs text-gray-500">
                      {app.mouAmount} · {app.period}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white shrink-0" onClick={downloadMou}>
                    <Download className="w-4 h-4 mr-1.5" />
                    Download MOU
                  </Button>
                </div>
                <ol className="text-xs text-gray-600 space-y-1 list-decimal list-inside">
                  <li className={mouDownloaded ? "text-green-700" : ""}>Download and review the MOU</li>
                  <li>Sign it (print-and-scan or e-sign)</li>
                  <li>Upload the signed copy below</li>
                </ol>
              </div>
            )}
          </div>
        )}

        {complete && (
          <div role="status" className="rounded-xl border border-green-200 bg-white p-5 text-center">
            <div className="mx-auto mb-3 size-12 rounded-full bg-green-100 flex items-center justify-center">
              <PartyPopper className="w-6 h-6 text-green-700" aria-hidden="true" />
            </div>
            <p className="font-semibold text-gray-900">You're all set</p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">{app.primeApplicant}</span> will update you as things progress. You don't need to do
              anything else right now.
            </p>
            {app.contact && (
              <a
                href={`mailto:${app.contact.email}?subject=${encodeURIComponent(app.programName)}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800 underline-offset-2 hover:underline"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Questions? {app.contact.email}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Composer */}
      {!complete && current && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={`border-t p-4 transition-colors ${dragging ? "bg-teal-50 border-teal-300" : "bg-white border-gray-200"}`}
        >
          {files.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {files.map((f, i) => (
                <FileChip key={`${f.name}-${i}`} name={f.name} onRemove={() => setFiles((p) => p.filter((_, j) => j !== i))} />
              ))}
            </div>
          )}
          {needsFile && files.length === 0 && (
            <button
              onClick={() => fileInput.current?.click()}
              className="mb-3 w-full rounded-lg border-2 border-dashed border-gray-300 hover:border-teal-400 hover:bg-teal-50/50 transition-colors px-4 py-4 flex flex-col items-center gap-1 text-sm text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Upload className="w-5 h-5 text-teal-600" aria-hidden="true" />
              <span>
                <span className="font-medium text-teal-700">{current.kind === "mou" ? "Upload signed MOU" : "Choose a file"}</span> or drag
                it here
              </span>
              <span className="text-xs text-gray-500">PDF, Word, or image</span>
            </button>
          )}
          <div className="flex items-end gap-2">
            <input
              ref={fileInput}
              type="file"
              multiple={current.kind !== "mou"}
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
              onChange={(e) => {
                addFiles(e.target.files);
                e.target.value = "";
              }}
            />
            <button
              onClick={() => fileInput.current?.click()}
              aria-label="Attach a file"
              className="size-10 shrink-0 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              aria-label="Your reply"
              disabled={thinking}
              placeholder={
                current.kind === "choice"
                  ? "Pick an option above or type your own answer…"
                  : needsFile
                    ? "Add a note (optional)…"
                    : (current.placeholder ?? "Type your answer…")
              }
              className="flex-1 resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm min-h-10 max-h-32 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:bg-gray-50"
            />
            <Button
              onClick={() => submit()}
              disabled={!canSend && !(current.kind === "choice" && draft.trim())}
              aria-label="Send reply"
              className="h-10 bg-teal-600 hover:bg-teal-700 text-white shrink-0"
            >
              <SendHorizontal className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
            <span>Enter to send · Shift+Enter for a new line</span>
            {current.kind !== "mou" && remaining > 1 && (
              <button onClick={defer} className="font-medium text-gray-600 hover:text-gray-900 underline-offset-2 hover:underline">
                Ask me later
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function AssistantBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="size-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
        <Sparkles className="w-4 h-4 text-teal-600" aria-hidden="true" />
      </div>
      <div className="rounded-2xl rounded-tl-sm border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 max-w-[85%] shadow-sm">
        {children}
      </div>
    </div>
  );
}

function QuestionBubble({ request }: { request: PartnerRequest }) {
  return (
    <AssistantBubble>
      <p>{request.prompt}</p>
      {request.why && <p className="mt-1 text-xs text-gray-500">{request.why}</p>}
    </AssistantBubble>
  );
}

function UserBubble({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <div className="flex justify-end">
      <div
        className={`rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm max-w-[80%] space-y-1.5 ${
          muted ? "bg-gray-200 text-gray-600 italic" : "bg-teal-600 text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function FileChip({ name, onRemove, tone }: { name: string; onRemove?: () => void; tone?: "onDark" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs max-w-full ${
        tone === "onDark" ? "bg-teal-700 text-white" : "bg-gray-100 text-gray-700 border border-gray-200"
      }`}
    >
      <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span className="truncate">{name}</span>
      {onRemove && (
        <button onClick={onRemove} aria-label={`Remove ${name}`} className="shrink-0 hover:text-gray-900">
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </span>
  );
}
