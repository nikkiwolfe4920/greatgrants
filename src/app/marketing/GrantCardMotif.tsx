import { DISPLAY, BODY } from "./design";

/**
 * The homepage hero's motif: concentric circles with dark "grant cards"
 * floating around a portrait.
 *
 * Rebuilt in code rather than shipped as the Figma PNG exports, for two
 * reasons. The exported asset URLs live for about seven days, so committing a
 * reference to one would leave a broken hero behind; and figma.com is blocked
 * by this environment's egress policy, so the bytes cannot be downloaded and
 * vendored either. Built in DOM the cards are crisp at any pixel density,
 * they carry real opportunities out of src/data/grantDetails.ts instead of
 * flattened placeholder text, and they restyle with the tokens.
 *
 * Geometry follows the design: three stacked circles (926px hairline
 * #f2f4f7, 614px #f9fafb fill, 318px #f2f4f7 fill) with cards at the four
 * diagonals, a couple of them greyed back to suggest depth. Positions are
 * expressed as percentages of the motif box so the arrangement survives the
 * responsive collapse, where absolute pixel offsets would not.
 *
 * Dark-card colours are the file's own: bg-brand-section #13161b for the
 * fill, text-primary #f7f7f7 for the amount, text-tertiary #94979c for the
 * agency line.
 */

interface FloatingCard {
  amount: string;
  title: string;
  agency: string;
  /** Gradient stops for the card's right-hand accent edge. */
  edge: [string, string];
  /** Position and scale within the motif box. */
  style: React.CSSProperties;
}

/** Real opportunities, matching the grants the demo itself shows. */
const CARDS: FloatingCard[] = [
  {
    amount: "$26,000,000",
    title: "Research Opportunities in Space and Earth Sciences",
    agency: "National Aeronautics and Space Administration",
    edge: ["#f97066", "#fdb022"],
    style: { top: "4%", right: "-2%", width: "58%" },
  },
  {
    amount: "$500,000",
    title: "Faith-Based Community Development Grants",
    agency: "U.S. Department of Health and Human Services",
    edge: ["#5fe9d0", "#15b79e"],
    style: { top: "46%", left: "-6%", width: "42%" },
  },
  {
    amount: "$200,000",
    title: "Fellowship Programs at Independent Research Institutions",
    agency: "National Endowment for the Humanities",
    edge: ["#b692f6", "#f670c7"],
    style: { bottom: "2%", right: "8%", width: "47%" },
  },
];

/** Greyed-back cards that only read as silhouettes. */
const GHOSTS: React.CSSProperties[] = [
  { top: "0%", left: "6%", width: "34%" },
  { top: "30%", right: "6%", width: "28%" },
  { bottom: "18%", left: "-2%", width: "30%" },
];

function Ghost({ style }: { style: React.CSSProperties }) {
  return (
    <div
      aria-hidden
      style={style}
      className="absolute rounded-[8px] border border-[#f2f4f7] bg-white/70 p-3 shadow-[0px_1px_2px_rgba(16,24,40,0.04)]"
    >
      <div className="h-2 w-12 rounded-full bg-[#f2f4f7]" />
      <div className="mt-2 h-1.5 w-full rounded-full bg-[#f2f4f7]" />
      <div className="mt-1 h-1.5 w-2/3 rounded-full bg-[#f2f4f7]" />
    </div>
  );
}

function Card({ card }: { card: FloatingCard }) {
  return (
    <div
      style={card.style}
      className="absolute overflow-hidden rounded-[8px] bg-[#13161b] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]"
    >
      {/* Accent edge — the colour band down the card's right side. */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[6px]"
        style={{ backgroundImage: `linear-gradient(180deg, ${card.edge[0]}, ${card.edge[1]})` }}
      />
      <div className="px-3 py-2.5 pr-4">
        <p
          className="text-[13px] leading-[18px] font-normal text-[#f7f7f7]"
          style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
        >
          {card.amount}
        </p>
        <p
          className="mt-1.5 line-clamp-2 text-[11px] leading-[15px] font-medium text-[#f7f7f7]"
          style={BODY}
        >
          {card.title}
        </p>
        <p className="mt-2 truncate text-[9px] leading-[12px] text-[#94979c]" style={BODY}>
          {card.agency}
        </p>
      </div>
    </div>
  );
}

export function GrantCardMotif() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Concentric circles, largest first. */}
      <div className="absolute inset-0 rounded-full border border-[#f2f4f7]" />
      <div className="absolute inset-[16%] rounded-full bg-[#f9fafb]" />
      <div className="absolute inset-[32%] rounded-full bg-[#f2f4f7]" />

      {/* Centre mark. The homepage puts a portrait here; a monogram keeps the
          composition without shipping a stock photo of a person who has
          nothing to do with this product. */}
      <div className="absolute inset-[38%] flex items-center justify-center rounded-full bg-[#125d56] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.12)]">
        <span className="text-[clamp(20px,4.2vw,34px)] leading-none text-white" style={DISPLAY}>
          GG
        </span>
      </div>

      {GHOSTS.map((style, i) => (
        <Ghost key={i} style={style} />
      ))}
      {CARDS.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </div>
  );
}
