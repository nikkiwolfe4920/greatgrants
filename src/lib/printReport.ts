/**
 * Exports a piece of the page as a PDF via the browser's print dialog
 * ("Save as PDF"). The element is cloned into a clean window together with
 * the page's stylesheets so the PDF matches what's on screen without the
 * surrounding modal chrome. Anything marked `data-print-hide` is dropped and
 * every <details> is expanded so collapsed sections are included.
 */
export function printReport(source: HTMLElement | null | undefined, title: string): boolean {
  if (!source) return false;
  const win = window.open("", "_blank", "width=900,height=1000");
  if (!win) return false;

  const clone = source.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("[data-print-hide]").forEach((el) => el.remove());
  clone.querySelectorAll("details").forEach((el) => el.setAttribute("open", ""));

  const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
    .map((el) => el.outerHTML)
    .join("\n");

  const safeTitle = title.replace(/[<>&]/g, "");
  win.document.write(
    `<!doctype html><html><head><meta charset="utf-8"><title>${safeTitle}</title>${styles}` +
      `<style>body{background:#fff;padding:24px;-webkit-print-color-adjust:exact;print-color-adjust:exact}</style>` +
      `</head><body>${clone.outerHTML}</body></html>`,
  );
  win.document.close();

  const print = () => {
    win.focus();
    win.print();
  };
  // Give linked stylesheets a moment to load before the print dialog opens.
  win.addEventListener("load", () => setTimeout(print, 300));
  return true;
}
