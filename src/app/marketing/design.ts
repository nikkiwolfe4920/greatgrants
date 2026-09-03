/**
 * Marketing surface design language.
 *
 * Extracted from the greatgrants.ai homepage in Figma
 * (file AJQoDJAJZL2ItawgAfLYh3, node 14075:33275) via the Figma MCP server.
 * Every value below is a resolved Figma variable or a literal from that
 * node's design context — not an approximation.
 *
 * Why this lives apart from src/styles/design-tokens.css: the marketing site
 * and the application resolve *different* values for the same semantic roles.
 * Headings are #101828 here and #181d27 in the app; body copy is #475467 here
 * and #535862 in the app. Folding one into the other would silently restyle
 * every product screen, so the marketing language is kept as its own layer and
 * only /marketing reads it.
 *
 * The class presets are written as literal Tailwind strings so the Tailwind v4
 * source scan (`@source '../**\/*.{js,ts,jsx,tsx}'` in src/styles/tailwind.css)
 * picks them up. Do not build them by interpolation — Tailwind cannot see
 * dynamically composed class names.
 *
 * Figma variable → value map, for reference:
 *   Font family/font-family-display ....... Lustria
 *   Font family/font-family-body .......... Cabin
 *   Font size/display-lg .................. 48   (line-height 57.6, ratio 1.2)
 *   Font size/display-md .................. 36   (line-height 43.2)
 *   Font size/display-sm .................. 30
 *   Font size/display-xs .................. 24
 *   Font size/text-xl ..................... 20   (Line height/text-xl 30)
 *   Font size/text-lg ..................... 18   (line-height 27)
 *   Font size/text-md ..................... 16   (Line height/text-md 24)
 *   Font size/text-sm ..................... 14
 *   Font size/text-xs ..................... 12   (Line height/text-xs 18)
 *   Colors/Foreground/fg-brand-primary .... #0e9384
 *   Component colors/…/utility-brand-700 .. #107569  (primary button fill)
 *   Component colors/…/utility-brand-800 .. #125d56  (dark brand band)
 *   Component colors/…/utility-brand-50 ... #f0fdf9
 *   Component colors/…/utility-gray-600 ... #94979c  (microcopy)
 *   Colors/Border/border-brand_alt ........ #0e9384  (button hairline)
 *   utility-ai-purple-500 ................. #9810fa  (AI tier only)
 *   container-padding-desktop ............. 32
 *   container-padding-mobile .............. 16
 *   spacing-9xl ........................... 96   (section top padding)
 *   radius-md / lg / xl / 2xl ............. 8 / 10 / 12 / 16
 *   radius-5xl ............................ 64   (imagery corner device)
 */

/** Inline font stacks, matching the convention used across the app's pages. */
export const DISPLAY = { fontFamily: "Lustria, serif" } as const;
export const BODY = { fontFamily: "Cabin, sans-serif" } as const;

/**
 * Raw palette. Exported for the few places a colour has to reach inline
 * styles (gradients, SVG fills) rather than a Tailwind arbitrary value.
 */
export const COLOR = {
  /** Headings and any text that carries emphasis. */
  heading: "#101828",
  /** Body copy, nav links, secondary text. */
  body: "#475467",
  /** Microcopy under CTAs, captions, de-emphasised meta. */
  muted: "#94979c",
  /** Brand accent — eyebrows, links, icon accents. */
  brand: "#0e9384",
  /** Primary button fill. */
  brandButton: "#107569",
  /** Dark brand band background. */
  brandDark: "#125d56",
  /** Tinted brand background. */
  brandTint: "#f0fdf9",
  /** Alternating section background. */
  sectionAlt: "#f9fafb",
  /** Hairline borders on cards and icon tiles. */
  border: "#d0d5dd",
  /** Lighter hairline — dividers, the hero's concentric circles. */
  borderSubtle: "#f2f4f7",
  /** AI-only accent. Never substitutes for brand teal. */
  aiPurple: "#9810fa",
} as const;

/**
 * The homepage sets 0.5px of tracking on nav links, button labels, eyebrows
 * and microcopy — every short, UI-ish run of Cabin. Long-form body copy gets
 * none. It is subtle and it is the single easiest thing to lose, so it has its
 * own token.
 */
export const TRACKING = "tracking-[0.5px]";

/* ── Type presets ──────────────────────────────────────────────────────── */

/** display-lg — page H1. 48/57.6, Lustria regular. */
export const H1 = "text-[36px] leading-[43.2px] sm:text-[48px] sm:leading-[57.6px] font-normal text-[#101828]";

/** display-md — section H2. 36/43.2. */
export const H2 = "text-[30px] leading-[36px] sm:text-[36px] sm:leading-[43.2px] font-normal text-[#101828]";

/** display-sm — sub-section heading. 30/36. */
export const H3_DISPLAY = "text-[24px] leading-[28.8px] sm:text-[30px] sm:leading-[36px] font-normal text-[#101828]";

/** display-xs — card title. 24/28.8. */
export const H4_DISPLAY = "text-[20px] leading-[24px] sm:text-[24px] sm:leading-[28.8px] font-normal text-[#101828]";

/** Feature-row heading — Cabin SemiBold 18/27. */
export const H3_BODY = "text-[18px] leading-[27px] font-semibold text-[#101828]";

/** Hero subhead — Cabin 20/30. */
export const LEAD = "text-[18px] leading-[27px] sm:text-[20px] sm:leading-[30px] font-normal text-[#475467]";

/** Section body copy — Cabin 18/27. */
export const BODY_LG = "text-[18px] leading-[27px] font-normal text-[#475467]";

/** Default body copy — Cabin 16/24. */
export const BODY_MD = "text-[16px] leading-[24px] font-normal text-[#475467]";

/** Small copy — Cabin 14/20. */
export const BODY_SM = "text-[14px] leading-[20px] font-normal text-[#475467]";

/** Section eyebrow — Cabin SemiBold 16/24, teal, uppercase, 0.5px tracking. */
export const EYEBROW =
  "text-[16px] leading-[24px] font-semibold uppercase tracking-[0.5px] text-[#0e9384]";

/** Microcopy beneath a CTA — Cabin SemiBold 16/24 in muted gray. */
export const MICROCOPY =
  "text-[16px] leading-[24px] font-semibold tracking-[0.5px] text-[#94979c]";

/* ── Components ────────────────────────────────────────────────────────── */

/**
 * Primary button. Note the hairline: the fill is utility-brand-700 (#107569)
 * with a 1px #0e9384 border, which reads as a slightly lifted edge rather
 * than a flat block. 18px/10px padding, 8px radius, 0.5px tracking.
 */
export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] border border-[#0e9384] bg-[#107569] px-[18px] py-[10px] text-[16px] leading-[24px] font-normal tracking-[0.5px] text-white shadow-[0px_1px_1px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#0e9384] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-2";

/** Secondary button — same geometry, white fill, gray hairline. */
export const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] border border-[#d0d5dd] bg-white px-[18px] py-[10px] text-[16px] leading-[24px] font-normal tracking-[0.5px] text-[#344054] shadow-[0px_1px_1px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#f9fafb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384] focus-visible:ring-offset-2";

/** Button sitting on the dark brand band — white fill, dark label. */
export const BTN_ON_DARK =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] border border-white bg-white px-[18px] py-[10px] text-[16px] leading-[24px] font-normal tracking-[0.5px] text-[#101828] shadow-[0px_1px_1px_rgba(16,24,40,0.05)] transition-colors hover:bg-[#f0fdf9] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#125d56]";

/** Nav link — Cabin 16px, body gray, 0.5px tracking, 16px of side padding. */
export const NAV_LINK =
  "rounded-[8px] px-[16px] py-[11px] text-[16px] leading-[19.2px] font-normal tracking-[0.5px] text-[#475467] transition-colors hover:text-[#101828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384]";

/**
 * "Sign Up" in the homepage nav is a teal *text* link, not a button — the
 * nav carries no filled control at all. This page keeps one filled CTA
 * because it is a conversion surface, but the surrounding links follow the
 * design exactly.
 */
export const NAV_LINK_TEAL =
  "rounded-[8px] px-[16px] py-[11px] text-[16px] leading-[19.2px] font-normal tracking-[0.5px] text-[#0e9384] transition-colors hover:text-[#107569] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e9384]";

/**
 * 48px icon tile. The doubled shadow is deliberate and comes straight from
 * the design: an outer drop shadow plus an inset shadow along the bottom
 * edge, which gives the tile a slightly pressed, physical look.
 */
export const ICON_TILE =
  "flex size-[48px] shrink-0 items-center justify-center rounded-[10px] border border-[#d0d5dd] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.1),inset_0px_-4px_2px_0px_rgba(0,0,0,0.2)]";

/**
 * Page container. 1200px with 32px of desktop gutter, 16px on mobile —
 * container-padding-desktop / container-padding-mobile.
 */
export const CONTAINER = "mx-auto w-full max-w-[1200px] px-[16px] sm:px-[32px]";

/**
 * The imagery corner device: radius-5xl (64px) on the bottom-left and
 * top-right only, the other two corners square. It is the most recognisable
 * thing about the homepage's photography and it is applied to the image and
 * its clipping container alike.
 *
 * `IMAGE_CORNERS` is the full-size treatment for a wide, hero-scale image.
 * `IMAGE_CORNERS_SM` scales the radius down for card-width thumbnails, where
 * a literal 64px would swallow a third of the frame.
 */
export const IMAGE_CORNERS = "rounded-bl-[40px] rounded-tr-[40px] sm:rounded-bl-[64px] sm:rounded-tr-[64px]";
export const IMAGE_CORNERS_SM = "rounded-bl-[24px] rounded-tr-[24px] sm:rounded-bl-[32px] sm:rounded-tr-[32px]";

/** The dark brand band, mirroring the imagery corners. */
export const DARK_BAND =
  "bg-[#125d56] rounded-tl-[40px] rounded-br-[40px] sm:rounded-tl-[64px] sm:rounded-br-[64px]";
