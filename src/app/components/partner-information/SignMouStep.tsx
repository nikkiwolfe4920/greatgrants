import { useId, useRef, useState } from "react";
import { toast } from "sonner";
import { Check, Lock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";
import { StepperHeader } from "@/app/components/eligibility/StepperHeader";
import { Card, ContactSupportButton, DocumentRow } from "./InformationRequestForm";
import { FileDropzone, type UploadedFile } from "./FileDropzone";
import { LinkedDocumentRow } from "./LinkedDocumentRow";
import { SubmissionConfirmation } from "./SubmissionConfirmation";
import { MOU_ACCEPTED, MOU_DOCUMENT } from "@/data/partnerMou";
import type { PartnerApplication } from "@/data/partnerApplications";

export interface SignMouState {
  /** True once the user has downloaded the MOU — this unlocks the upload step. */
  downloaded?: boolean;
  /** The signed copy the user uploaded. */
  file?: UploadedFile;
  /** "Oct 29, 4:10 PM" — set once the signed MOU is sent for final approval. */
  sentOn?: string;
}

export const EMPTY_SIGN_MOU: SignMouState = {};

const nowStamp = () =>
  `${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;

interface SignMouStepProps {
  app: PartnerApplication;
  state: SignMouState;
  onChange: (patch: (s: SignMouState) => SignMouState) => void;
}

/** Numbered circle used as the card icon so the two steps read as a sequence; a check once done. */
function StepMarker({ n, done }: { n: number; done?: boolean }) {
  return (
    <span
      className={`flex size-6 items-center justify-center rounded-full text-xs font-semibold ${
        done ? "bg-teal-600 text-white" : "bg-teal-50 text-teal-700 border border-teal-200"
      }`}
    >
      {done ? <Check className="size-3.5" aria-label="Done" /> : n}
    </span>
  );
}

/**
 * Step 4 — Download & Sign MOU, as a strict two-step flow: (1) download the
 * MOU, then (2) upload the signed copy (Figma node 16986:35403). Step 2 stays
 * locked until the MOU has been downloaded, and sending stays disabled until
 * a signed file is attached. The MOU is signed outside Great Grants.
 */
export function SignMouStep({ app, state, onChange }: SignMouStepProps) {
  const uid = useId();
  const org = app.primeApplicant;
  const { file, sentOn, downloaded } = state;
  const sent = !!sentOn;

  const [confirmOpen, setConfirmOpen] = useState(false);
  const confirmationRef = useRef<HTMLElement>(null);
  const uploadId = `${uid}-mou-upload`;

  const steps = [
    { label: "Partnership\nUnder Condition", caption: app.decision && `Decided on\n${app.decision.decidedOn}` },
    { label: "Information\nRequest", caption: app.decision && `Requested:\n${app.decision.decidedOn}` },
    { label: "Sent for\nApproval", caption: `Accepted:\n${MOU_ACCEPTED.acceptedAt}` },
    { label: "Download &\nSign MOU", caption: `Requested\n${MOU_ACCEPTED.mouRequestedOn}` },
    { label: "Final\nApproval", caption: sentOn && `Sent:\n${sentOn}` },
  ];

  const trySend = () => {
    if (file) setConfirmOpen(true);
  };

  const send = () => {
    setConfirmOpen(false);
    onChange((s) => ({ ...s, sentOn: nowStamp() }));
    toast.success(`Signed MOU sent to ${org}`);
    setTimeout(() => {
      confirmationRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      confirmationRef.current?.focus({ preventScroll: true });
    }, 50);
  };

  if (sent) {
    return (
      <div className="space-y-4">
        <StepperHeader steps={steps} currentStep={5} />
        <SubmissionConfirmation
          ref={confirmationRef}
          title={`Signed MOU sent to ${org}`}
          sentOn={sentOn}
          body={`Your signed MOU was successfully sent for final approval. ${org} will now review it.`}
          nextSteps={[
            `${org} reviews your signed MOU.`,
            "If approved, you'll get a notification confirming final partnership approval.",
          ]}
          actions={<ContactSupportButton app={app} />}
        />
        <h3 className="pt-2 font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          Signed MOU you sent
        </h3>
        <ul>{file && <DocumentRow doc={file} disabled onRemove={() => {}} />}</ul>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <StepperHeader steps={steps} currentStep={4} />

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <h3 className="font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          Next steps
        </h3>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600" aria-live="polite">
          {file ? "Ready to send" : downloaded ? "Step 2 of 2: upload the signed MOU" : "Step 1 of 2: download the MOU"}
        </span>
        <ContactSupportButton app={app} />
      </div>
      <p className="text-sm text-gray-600 -mt-2">
        Two steps: download the MOU, then upload your signed copy. MOUs are signed directly between partners, outside
        Great Grants.
      </p>

      <Card
        icon={<StepMarker n={1} done={!!downloaded} />}
        title="Download the MOU"
        description={`Review the MOU ${org} shared with you, then sign it.`}
      >
        <LinkedDocumentRow
          name={MOU_DOCUMENT.name}
          meta={MOU_DOCUMENT.meta}
          url={MOU_DOCUMENT.url}
          downloadLabel={downloaded ? "Download again" : "Download MOU"}
          primaryDownload={!downloaded}
          onDownload={() => {
            if (!downloaded) toast.success("MOU downloaded. You can now upload your signed copy.");
            onChange((s) => ({ ...s, downloaded: true }));
          }}
        />
      </Card>

      {/* Figma node 16986:35403 — Card: Upload MOU. Locked until the MOU is downloaded. */}
      <div className={downloaded ? undefined : "opacity-60"}>
        <Card
          icon={<StepMarker n={2} />}
          title="Upload the signed MOU"
          description={
            downloaded ? `The signed copy goes to ${org} for final approval.` : "Download the MOU first to unlock this step."
          }
        >
          {!downloaded ? (
            <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
              <Lock className="size-4 shrink-0 text-gray-400" aria-hidden="true" />
              Step 1 isn&apos;t done yet. Download the MOU, sign it, then come back to upload it.
            </div>
          ) : (
            <>
              <div className="space-y-1.5">
                <p id={`${uid}-mou-label`} className="text-sm font-medium text-gray-700">
                  Signed MOU file
                  <span aria-hidden="true" className="text-teal-600">*</span>
                  <span className="sr-only"> (required)</span>
                </p>
                <FileDropzone
                  id={uploadId}
                  label="Signed MOU file"
                  multiple={false}
                  hint="PDF, DOC, DOCX, XLS, or XLSX · up to 50 MB"
                  describedBy={`${uid}-mou-hint`}
                  onFiles={([f]) => onChange((s) => ({ ...s, file: f }))}
                />
              </div>
              {file && (
                <ul aria-labelledby={`${uid}-mou-label`}>
                  <DocumentRow
                    doc={file}
                    onRemove={() => {
                      onChange((s) => ({ ...s, file: undefined }));
                      toast(`${file.name} removed`);
                    }}
                  />
                </ul>
              )}
              <p id={`${uid}-mou-hint`} className="text-xs text-gray-500">
                The file shows who uploaded it. Members of UptownArts Coalition can upload.
              </p>
            </>
          )}
        </Card>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-4 pt-6">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={trySend} disabled={!file}>
          Send signed MOU to {org}
        </Button>
      </div>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Send signed MOU to {org}?</AlertDialogTitle>
            <AlertDialogDescription>
              {org} will review {file?.name} and give final approval. You won&apos;t be able to change the file after
              sending.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep editing</AlertDialogCancel>
            <AlertDialogAction onClick={send} className="bg-teal-600 hover:bg-teal-700 text-white">
              Send signed MOU
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
