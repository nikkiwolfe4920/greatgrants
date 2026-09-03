import svgPaths from "@/imports/svg-i3haojugv5";

/**
 * The Great Grants nib mark on its own, without the wordmark.
 *
 * These are the same two paths the full Logo renders to the left of "Great
 * Grants" (see Logo.tsx), lifted into a tightly-cropped viewBox so the symbol
 * can stand alone — inside a circle, as an avatar, as a favicon-scale mark.
 * The viewBox is the paths' measured bounding box (109.84 × 128.06 in the
 * logo's coordinate space), so there is no stray padding to centre around.
 *
 * Fills with `currentColor`, so the colour comes from the parent's text
 * colour rather than being hard-coded the way the full logo's black is.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 109.84 128.06"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path d={svgPaths.p3ca100} fill="currentColor" />
      <path d={svgPaths.p3f0115f0} fill="currentColor" />
    </svg>
  );
}
