import { forwardRef, useRef, useState, type DragEvent } from "react";
import { UploadCloud } from "lucide-react";

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  uploadedOn: string;
  /** Present for files chosen in this session — powers preview/download. */
  file?: File;
}

const ACCEPTED_EXTENSIONS = ["pdf", "doc", "docx", "xls", "xlsx"];
const MAX_BYTES = 50 * 1024 * 1024;

export const ACCEPTED_FORMATS_LABEL = "PDF, DOC, DOCX, XLS, or XLSX · up to 50 MB each";

export function formatFileSize(bytes: number) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1).replace(/\.0$/, "")} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export const fileExtension = (name: string) => name.split(".").pop()?.toUpperCase() ?? "";

const todayLong = () => new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

interface FileDropzoneProps {
  id: string;
  /** Accessible name — the visible label sits above the dropzone. */
  label: string;
  onFiles: (files: UploadedFile[]) => void;
  disabled?: boolean;
  invalid?: boolean;
  describedBy?: string;
}

/**
 * Drag-and-drop / click-to-upload target (Figma "_File upload base"). The
 * "Click to upload" text is a real button so the control is keyboard and
 * screen-reader reachable; rejected files surface an inline alert rather than
 * silently disappearing.
 */
export const FileDropzone = forwardRef<HTMLButtonElement, FileDropzoneProps>(function FileDropzone(
  { id, label, onFiles, disabled, invalid, describedBy },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const accept = (list: FileList | null) => {
    if (!list || list.length === 0) return;
    const ok: UploadedFile[] = [];
    const rejected: string[] = [];
    Array.from(list).forEach((file) => {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!ACCEPTED_EXTENSIONS.includes(ext)) rejected.push(`${file.name} isn't a supported format`);
      else if (file.size > MAX_BYTES) rejected.push(`${file.name} is over 50 MB`);
      else
        ok.push({
          id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
          name: file.name,
          size: file.size,
          uploadedOn: todayLong(),
          file,
        });
    });
    setError(rejected.length ? `${rejected.join("; ")}. Use PDF, DOC, DOCX, XLS, or XLSX up to 50 MB.` : null);
    if (ok.length) onFiles(ok);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (!disabled) accept(e.dataTransfer.files);
  };

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`flex flex-col items-center gap-3 rounded-xl border px-6 py-4 transition-colors ${
          dragging ? "border-teal-500 bg-teal-50" : invalid ? "border-red-400 bg-white" : "border-gray-200 bg-white"
        } ${disabled ? "opacity-60" : ""}`}
      >
        <div className="size-10 rounded-lg border border-gray-300 bg-white shadow-xs flex items-center justify-center">
          <UploadCloud className="size-5 text-gray-700" aria-hidden="true" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
            <button
              ref={ref}
              id={id}
              type="button"
              disabled={disabled}
              onClick={() => inputRef.current?.click()}
              aria-label={`${label}: click to upload`}
              aria-describedby={describedBy}
              aria-invalid={invalid || undefined}
              className="font-semibold text-teal-700 hover:text-teal-800 hover:underline underline-offset-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:pointer-events-none"
            >
              Click to upload
            </button>{" "}
            or drag and drop
          </p>
          <p className="text-xs text-gray-600 text-center">{ACCEPTED_FORMATS_LABEL}</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple
          tabIndex={-1}
          className="sr-only"
          aria-hidden="true"
          accept={ACCEPTED_EXTENSIONS.map((e) => `.${e}`).join(",")}
          onChange={(e) => accept(e.target.files)}
        />
      </div>
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});
