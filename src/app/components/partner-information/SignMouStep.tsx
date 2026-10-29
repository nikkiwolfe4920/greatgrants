import { useId, useRef, useState } from "react";
import { toast } from "sonner";
import { Download, Eye, File as FileIcon, FileCheck2, FileSignature } from "lucide-react";
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
import { SubmissionConfirmation } from "./SubmissionConfirmation";
import { MOU_ACCEPTED, MOU_DOCUMENT } from "@/data/partnerMou";
import type { PartnerApplication } from "@/data/partnerApplications";

export interface SignMouState {
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

/**
 * Step 4 — Sign MOU. The user downloads the MOU, signs it outside Great
 * Grants, uploads the signed copy (Figma node 16986:35403), and sends it to
 * the lead applicant for final approval.
 */
export function SignMouStep({ app, state, onChange }: SignMouStepProps) {
  const uid = useId();
  const org = app.primeApplicant;
  const { file, sentOn } = state;
  const sent = !!sentOn;

  const [attempted, setAttempted] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const confirmationRef = useRef<HTMLElement>(null);
  const uploadId = `${uid}-mou-upload`;
  const uploadError = attempted && !file ? "Upload the signed MOU before sending." : undefined;

  const steps = [
    { label: "Partnership\nApproved", caption: app.decision && `Decided on\n${app.decision.decidedOn}` },
    { label: "Information\nRequest", caption: app.decision && `Requested:\n${app.decision.decidedOn}` },
    { label: "Sent for\nApproval", caption: `Accepted:\n${MOU_ACCEPTED.acceptedAt}` },
    { label: "Sign\nMOU", caption: `Requested\n${MOU_ACCEPTED.mouRequestedOn}` },
    { label: "Final\nApproval", caption: sentOn && `Sent:\n${sentOn}` },
  ];

  const trySend = () => {
    setAttempted(true);
    if (!file) {
      const target = document.getElementById(uploadId);
      target?.scrollIntoView({ block: "center", behavior: "smooth" });
      target?.focus({ preventScroll: true });
      return;
    }
    setConfirmOpen(true);
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
          {file ? "Ready to send" : "1 required item remaining"}
        </span>
        <ContactSupportButton app={app} />
      </div>
      <p className="text-sm text-gray-600 -mt-2">
        Download the MOU, sign it, then upload the signed copy. MOUs are signed directly between partners, outside Great
        Grants.
      </p>

      <Card
        icon={<FileSignature className="size-5" />}
        title="Download the MOU"
        description={`Review the MOU ${org} shared with you, then sign it.`}
      >
        <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <FileIcon className="size-10 text-gray-300 shrink-0" strokeWidth={1} aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{MOU_DOCUMENT.name}</p>
              <p className="text-xs text-gray-500">{MOU_DOCUMENT.meta}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" className="bg-white" asChild>
              <a href={MOU_DOCUMENT.url} target="_blank" rel="noopener" aria-label={`Preview ${MOU_DOCUMENT.name}`}>
                <Eye className="size-4" aria-hidden="true" />
                Preview
              </a>
            </Button>
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <a href={MOU_DOCUMENT.url} download={MOU_DOCUMENT.name} aria-label={`Download ${MOU_DOCUMENT.name}`}>
                <Download className="size-4" aria-hidden="true" />
                Download MOU
              </a>
            </Button>
          </div>
        </div>
      </Card>

      {/* Figma node 16986:35403 — Card: Upload MOU */}
      <Card
        icon={<FileCheck2 className="size-5" />}
        title="Upload the signed MOU"
        description={`The signed copy goes to ${org} for final approval.`}
      >
        <div className="space-y-1.5">
          <p id={`${uid}-mou-label`} className="text-sm font-medium text-gray-700">
            MOU file
            <span aria-hidden="true" className="text-teal-600">*</span>
            <span className="sr-only"> (required)</span>
          </p>
          <FileDropzone
            id={uploadId}
            label="MOU file"
            multiple={false}
            hint="PDF, DOC, DOCX, XLS, or XLSX · up to 50 MB"
            invalid={!!uploadError}
            describedBy={uploadError ? `${uid}-mou-error` : `${uid}-mou-hint`}
            onFiles={([f]) => onChange((s) => ({ ...s, file: f }))}
          />
          {uploadError && (
            <p id={`${uid}-mou-error`} role="alert" className="text-sm text-red-600">
              {uploadError}
            </p>
          )}
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
      </Card>

      <div className="flex flex-wrap items-center justify-end gap-4 pt-6">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={trySend}>
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
