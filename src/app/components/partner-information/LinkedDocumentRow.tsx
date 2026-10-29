import { Download, Eye, File as FileIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface LinkedDocumentRowProps {
  name: string;
  meta: string;
  url: string;
  /** Label for the download button; the primary (teal) style is used when `primaryDownload` is set. */
  downloadLabel?: string;
  primaryDownload?: boolean;
}

/** A document that lives at a URL (e.g. the MOU PDF): file icon, name/meta, Preview and Download. */
export function LinkedDocumentRow({ name, meta, url, downloadLabel = "Download", primaryDownload }: LinkedDocumentRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 px-4 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <FileIcon className="size-10 text-gray-300 shrink-0" strokeWidth={1} aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">{name}</p>
          <p className="text-xs text-gray-500">{meta}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Button variant="outline" size="sm" className="bg-white" asChild>
          <a href={url} target="_blank" rel="noopener" aria-label={`Preview ${name}`}>
            <Eye className="size-4" aria-hidden="true" />
            Preview
          </a>
        </Button>
        <Button
          variant={primaryDownload ? "default" : "outline"}
          size="sm"
          className={primaryDownload ? "bg-teal-600 hover:bg-teal-700 text-white" : "bg-white"}
          asChild
        >
          <a href={url} download={name} aria-label={`Download ${name}`}>
            <Download className="size-4" aria-hidden="true" />
            {downloadLabel}
          </a>
        </Button>
      </div>
    </div>
  );
}
