import React, { useState, useEffect } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Switch } from "../components/ui/switch";
import { Checkbox } from "../components/ui/checkbox";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Progress } from "../components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  CheckCircle2,
  AlertCircle,
  Info,
  AlertTriangle,
  Copy,
  Check,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const brandColors = [
  { label: "50", hex: "#f0fdf9", dark: true },
  { label: "200", hex: "#99f6e0", dark: true },
  { label: "500", hex: "#15b79e", dark: false },
  { label: "600", hex: "#0e9384", dark: false, primary: true },
  { label: "700", hex: "#107569", dark: false },
  { label: "900", hex: "#134e48", dark: false },
];

const grayColors = [
  { label: "25", hex: "#fafafa", dark: true },
  { label: "50", hex: "#f9fafb", dark: true },
  { label: "100", hex: "#f2f4f7", dark: true },
  { label: "200", hex: "#e9eaeb", dark: true },
  { label: "300", hex: "#d0d5dd", dark: true },
  { label: "400", hex: "#98a2b3", dark: true },
  { label: "500", hex: "#717680", dark: false },
  { label: "600", hex: "#535862", dark: false },
  { label: "700", hex: "#414651", dark: false },
  { label: "800", hex: "#252b37", dark: false },
  { label: "900", hex: "#181d27", dark: false },
  { label: "950", hex: "#0d121c", dark: false },
];

const semanticGroups = [
  {
    name: "Success",
    swatches: [
      { label: "50", hex: "#ecfdf3", dark: true },
      { label: "200", hex: "#abefc6", dark: true },
      { label: "600", hex: "#079455", dark: false },
      { label: "700", hex: "#067647", dark: false },
    ],
  },
  {
    name: "Error",
    swatches: [
      { label: "50", hex: "#fef3f2", dark: true },
      { label: "200", hex: "#fecdca", dark: true },
      { label: "600", hex: "#d92d20", dark: false },
      { label: "700", hex: "#b42318", dark: false },
    ],
  },
  {
    name: "Warning",
    swatches: [
      { label: "50", hex: "#fffaeb", dark: true },
      { label: "200", hex: "#fedf89", dark: true },
      { label: "600", hex: "#dc6803", dark: false },
      { label: "700", hex: "#b54708", dark: false },
    ],
  },
  {
    name: "Blue",
    swatches: [
      { label: "50", hex: "#eff8ff", dark: true },
      { label: "200", hex: "#b2ddff", dark: true },
      { label: "600", hex: "#1570ef", dark: false },
      { label: "700", hex: "#175cd3", dark: false },
    ],
  },
];

const typeScale = [
  { token: "text-xs", size: "12px", lh: "18px", usage: "Labels, captions, metadata" },
  { token: "text-sm", size: "14px", lh: "20px", usage: "UI labels, secondary body text" },
  { token: "text-base", size: "16px", lh: "24px", usage: "Primary body text" },
  { token: "text-lg", size: "18px", lh: "28px", usage: "Large body, intro text" },
  { token: "text-xl", size: "20px", lh: "30px", usage: "Sub-section headings" },
  { token: "text-2xl", size: "24px", lh: "32px", usage: "H3, card titles" },
  { token: "text-3xl", size: "30px", lh: "38px", usage: "H2, page sub-titles" },
  { token: "text-4xl", size: "36px", lh: "44px", usage: "H1 large" },
  { token: "text-5xl", size: "48px", lh: "60px", usage: "Display headings" },
  { token: "text-6xl", size: "60px", lh: "72px", usage: "Hero H1 (Lustria)" },
];

const spacingScale = [
  { token: "spacing-2", value: "2px", px: 2, usage: "Hairline / micro gaps" },
  { token: "spacing-4", value: "4px", px: 4, usage: "Icon padding" },
  { token: "spacing-6", value: "6px", px: 6, usage: "Tight spacing" },
  { token: "spacing-8", value: "8px", px: 8, usage: "Base unit" },
  { token: "spacing-12", value: "12px", px: 12, usage: "Small component padding" },
  { token: "spacing-16", value: "16px", px: 16, usage: "Standard padding" },
  { token: "spacing-20", value: "20px", px: 20, usage: "Medium padding" },
  { token: "spacing-24", value: "24px", px: 24, usage: "Card padding" },
  { token: "spacing-32", value: "32px", px: 32, usage: "Section gaps" },
  { token: "spacing-40", value: "40px", px: 40, usage: "Large sections" },
  { token: "spacing-48", value: "48px", px: 48, usage: "Page sections" },
  { token: "spacing-64", value: "64px", px: 64, usage: "Major layout gaps" },
];

const radiusScale = [
  { token: "radius-xs", value: "2px", usage: "Subtle rounding" },
  { token: "radius-sm", value: "6px", usage: "Standard — buttons, inputs, badges", standard: true },
  { token: "radius-md", value: "6px", usage: "Medium components" },
  { token: "radius-lg", value: "8px", usage: "Cards, modals", standard: true },
  { token: "radius-xl", value: "12px", usage: "Large cards" },
  { token: "radius-2xl", value: "16px", usage: "Hero sections" },
  { token: "radius-3xl", value: "20px", usage: "Extra large containers" },
  { token: "radius-full", value: "9999px", usage: "Pills, avatar circles" },
];

const shadowScale = [
  {
    token: "shadow-xs",
    css: "0px 1px 2px rgba(16,24,40,0.05)",
    usage: "Subtle depth",
  },
  {
    token: "shadow-sm",
    css: "0px 1px 2px rgba(16,24,40,0.06), 0px 1px 3px rgba(16,24,40,0.1)",
    usage: "Small components",
  },
  {
    token: "shadow-md",
    css: "0px 2px 4px -2px rgba(16,24,40,0.06), 0px 4px 6px -1px rgba(16,24,40,0.1)",
    usage: "Cards, dropdowns",
  },
  {
    token: "shadow-lg",
    css: "0px 2px 2px -1px rgba(16,24,40,0.03), 0px 4px 6px -2px rgba(16,24,40,0.05), 0px 12px 16px -4px rgba(16,24,40,0.08)",
    usage: "Modals, major surfaces",
  },
  {
    token: "shadow-xl",
    css: "0px 8px 8px -4px rgba(16,24,40,0.03), 0px 20px 24px -4px rgba(16,24,40,0.08)",
    usage: "Floating panels",
  },
  {
    token: "shadow-2xl",
    css: "0px 24px 48px -12px rgba(16,24,40,0.18)",
    usage: "Maximum elevation",
  },
];

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "radius", label: "Border Radius" },
  { id: "shadows", label: "Shadows" },
  { id: "buttons", label: "Buttons" },
  { id: "badges", label: "Badges" },
  { id: "inputs", label: "Inputs" },
  { id: "cards", label: "Cards" },
  { id: "alerts", label: "Alerts" },
  { id: "avatars", label: "Avatars" },
  { id: "form-controls", label: "Form Controls" },
  { id: "tabs", label: "Tabs" },
  { id: "selects", label: "Selects" },
  { id: "progress", label: "Progress" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h2
        className="text-2xl font-semibold text-gray-900 mb-1"
        style={{ fontFamily: "Lustria, serif" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="text-sm text-gray-500 mb-4"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          {description}
        </p>
      )}
      <Separator className="bg-gray-200" />
    </div>
  );
}

function ShadcnChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-xs font-mono text-teal-700 font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
      {name}
    </span>
  );
}

function CodeSnippet({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group rounded-xl overflow-hidden border border-gray-800">
      <pre className="bg-gray-950 text-gray-200 text-xs font-mono px-5 py-4 overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-800 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
        title="Copy"
      >
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </button>
    </div>
  );
}

function PreviewBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-xl bg-gray-50 p-8 mb-4">
      {children}
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export function DesignSystemPage() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const els = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className="flex min-h-screen bg-white"
      style={{ fontFamily: "Cabin, sans-serif" }}
    >
      {/* ── Sticky page nav ── */}
      <aside className="w-52 shrink-0 sticky top-0 self-start h-screen overflow-y-auto border-r border-gray-200 py-8 px-3 hidden lg:block">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
          Contents
        </p>
        <nav className="space-y-0.5">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                active === id
                  ? "bg-teal-50 text-teal-700 font-semibold"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Content ── */}
      <main className="flex-1 min-w-0 px-10 py-10 max-w-4xl">

        {/* ══ OVERVIEW ══ */}
        <section id="overview" className="mb-20 scroll-mt-8">
          <span
            className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Great Grants · v2.0
          </span>
          <h1
            className="text-5xl text-gray-900 mb-4"
            style={{ fontFamily: "Lustria, serif" }}
          >
            Design System
          </h1>
          <p
            className="text-base text-gray-600 leading-relaxed max-w-2xl mb-8"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            A token-based design system built on Untitled UI foundations. Implemented
            using CSS custom properties and Tailwind CSS, with ShadCN/Radix UI as the
            component layer. Teal as the primary brand color, Cabin for all UI text,
            Lustria exclusively for H1 display headings.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <p className="text-xs text-gray-400 mb-2 font-medium">Primary Brand</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-600 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Teal 600</p>
                  <p className="font-mono text-xs text-gray-500">#0e9384</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <p className="text-xs text-gray-400 mb-2 font-medium">Body Font</p>
              <p className="font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                Cabin
              </p>
              <p className="text-xs text-gray-500 mt-0.5">400 · 500 · 600 · 700</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <p className="text-xs text-gray-400 mb-2 font-medium">Display Font</p>
              <p className="font-semibold text-gray-900" style={{ fontFamily: "Lustria, serif" }}>
                Lustria
              </p>
              <p className="text-xs text-gray-500 mt-0.5">H1 titles only · serif</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Token-based", desc: "CSS custom properties" },
              { label: "8px Grid", desc: "Consistent spacing scale" },
              { label: "6px Radius", desc: "Standard for buttons/inputs" },
              { label: "Semantic Colors", desc: "Success · Error · Warning" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ COLORS ══ */}
        <section id="colors" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Colors"
            description="All colors defined as CSS custom properties. Hover any swatch to reveal the hex value."
          />

          {/* Brand */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Brand — Teal
            </p>
            <div className="flex rounded-2xl overflow-hidden border border-gray-200 h-24">
              {brandColors.map((c) => (
                <div
                  key={c.label}
                  className="flex-1 relative flex flex-col justify-between p-2.5 group cursor-default"
                  style={{ backgroundColor: c.hex }}
                >
                  {c.primary && (
                    <span className="absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-black/20 text-white leading-none">
                      PRIMARY
                    </span>
                  )}
                  <span
                    className={`text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity ${c.dark ? "text-gray-700" : "text-white"}`}
                  >
                    {c.hex}
                  </span>
                  <span
                    className={`text-[11px] font-semibold ${c.dark ? "text-gray-700" : "text-white/80"}`}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-gray-500">
              <span><strong className="text-gray-700">600</strong> — Primary CTA, active states, links</span>
              <span><strong className="text-gray-700">500</strong> — Hover states</span>
              <span><strong className="text-gray-700">700</strong> — Pressed states, emphasis</span>
            </div>
          </div>

          {/* Gray */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Gray Scale
            </p>
            <div className="flex rounded-2xl overflow-hidden border border-gray-200 h-24">
              {grayColors.map((c) => (
                <div
                  key={c.label}
                  className="flex-1 flex flex-col justify-between p-2 group cursor-default"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className={`text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity ${c.dark ? "text-gray-600" : "text-white/80"}`}
                  >
                    {c.hex}
                  </span>
                  <span className={`text-[10px] font-semibold ${c.dark ? "text-gray-600" : "text-white/70"}`}>
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Semantic */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Semantic
            </p>
            <div className="grid grid-cols-4 gap-4">
              {semanticGroups.map((group) => (
                <div key={group.name}>
                  <p className="text-xs font-medium text-gray-500 mb-2">{group.name}</p>
                  <div className="flex rounded-xl overflow-hidden border border-gray-200 h-14">
                    {group.swatches.map((s) => (
                      <div
                        key={s.label}
                        className="flex-1 group cursor-default relative"
                        style={{ backgroundColor: s.hex }}
                        title={`${s.hex}`}
                      >
                        <span
                          className={`absolute inset-0 flex items-end justify-center pb-1.5 text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity ${s.dark ? "text-gray-700" : "text-white"}`}
                        >
                          {s.hex}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-1 flex justify-between px-0.5 text-[10px] text-gray-400">
                    {group.swatches.map((s) => <span key={s.label}>{s.label}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Semantic token table */}
          <div className="mt-8 rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Semantic Token Mappings
              </p>
            </div>
            <table className="w-full text-xs">
              <tbody>
                {[
                  { token: "--text-primary", value: "gray-900 · #181d27", usage: "Main body, headlines" },
                  { token: "--text-secondary", value: "gray-700 · #414651", usage: "Secondary text, labels" },
                  { token: "--text-tertiary", value: "gray-600 · #535862", usage: "Captions, tertiary" },
                  { token: "--text-placeholder", value: "gray-500 · #717680", usage: "Input placeholders" },
                  { token: "--text-brand", value: "brand-600 · #0e9384", usage: "Brand-colored text" },
                  { token: "--bg-primary", value: "#ffffff", usage: "Primary surface" },
                  { token: "--bg-brand-primary", value: "brand-50 · #f0fdf9", usage: "Light brand background" },
                  { token: "--border-primary", value: "#d5d7da", usage: "Default borders, dividers" },
                  { token: "--fg-brand-primary", value: "brand-600 · #0e9384", usage: "Brand icons, fg elements" },
                ].map((row) => (
                  <tr key={row.token} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-2.5 font-mono text-teal-700 w-52">{row.token}</td>
                    <td className="px-4 py-2.5 text-gray-600 w-44">{row.value}</td>
                    <td className="px-4 py-2.5 text-gray-400">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ══ TYPOGRAPHY ══ */}
        <section id="typography" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Typography"
            description="Two-tier font system. Cabin handles all UI and body copy. Lustria (serif) is reserved exclusively for H1 display titles."
          />

          {/* Font families */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Body & UI — Cabin
              </p>
              <p
                className="text-5xl text-gray-900 mb-3"
                style={{ fontFamily: "Cabin, sans-serif", fontWeight: 600 }}
              >
                Cabin
              </p>
              <p
                className="text-sm text-gray-500 leading-relaxed mb-4"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789 !@#$%^&*()
              </p>
              <code className="text-[11px] bg-gray-100 px-2.5 py-1 rounded-md text-gray-600 font-mono">
                --font-body: 'Cabin', sans-serif
              </code>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Display — Lustria · H1 only
              </p>
              <p
                className="text-5xl text-gray-900 mb-3"
                style={{ fontFamily: "Lustria, serif", fontWeight: 400 }}
              >
                Lustria
              </p>
              <p
                className="text-sm text-gray-500 leading-relaxed mb-4"
                style={{ fontFamily: "Lustria, serif" }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789 !@#$%^&*()
              </p>
              <code className="text-[11px] bg-gray-100 px-2.5 py-1 rounded-md text-gray-600 font-mono">
                --font-display: 'Lustria', serif
              </code>
            </div>
          </div>

          {/* Type scale */}
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 grid grid-cols-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span>Token</span>
              <span>Size</span>
              <span>Line Height</span>
              <span>Usage</span>
              <span>Preview</span>
            </div>
            {typeScale.map((row, i) => (
              <div
                key={row.token}
                className={`px-4 py-3 grid grid-cols-5 items-center border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
              >
                <span className="font-mono text-xs text-teal-700">{row.token}</span>
                <span className="text-xs text-gray-700">{row.size}</span>
                <span className="text-xs text-gray-500">{row.lh}</span>
                <span className="text-xs text-gray-400 pr-4">{row.usage}</span>
                <span
                  className="text-gray-900 font-medium leading-none"
                  style={{
                    fontSize: row.size,
                    fontFamily: "Cabin, sans-serif",
                  }}
                >
                  Aa
                </span>
              </div>
            ))}
          </div>

          {/* Font weights */}
          <div className="mt-6 grid grid-cols-4 gap-3">
            {[
              { weight: 400, label: "Regular", usage: "Body text" },
              { weight: 500, label: "Medium", usage: "Labels, UI elements" },
              { weight: 600, label: "Semibold", usage: "Headers, emphasis" },
              { weight: 700, label: "Bold", usage: "Strong emphasis" },
            ].map((w) => (
              <div key={w.weight} className="border border-gray-200 rounded-xl p-4 bg-white">
                <p
                  className="text-2xl text-gray-900 mb-1"
                  style={{ fontFamily: "Cabin, sans-serif", fontWeight: w.weight }}
                >
                  Ag
                </p>
                <p className="text-xs font-semibold text-gray-700">{w.label} · {w.weight}</p>
                <p className="text-xs text-gray-400 mt-0.5">{w.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SPACING ══ */}
        <section id="spacing" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Spacing"
            description="8px base grid. All spacing uses multiples of 8px — with 2px, 4px, 6px available for fine-tuning."
          />
          <div className="space-y-2.5">
            {spacingScale.map((row) => (
              <div key={row.token} className="flex items-center gap-4">
                <span className="font-mono text-xs text-teal-700 w-28 shrink-0">
                  {row.token}
                </span>
                <span className="text-xs text-gray-400 w-9 shrink-0">{row.value}</span>
                <div
                  className="bg-teal-500 rounded h-5 shrink-0"
                  style={{ width: Math.min(row.px * 2, 300) + "px" }}
                />
                <span className="text-xs text-gray-400">{row.usage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ BORDER RADIUS ══ */}
        <section id="radius" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Border Radius"
            description="Standard is 6px (radius-sm) for buttons, inputs, and badges. 8px (radius-lg) for cards and modals."
          />
          <div className="flex flex-wrap gap-6">
            {radiusScale.map((r) => (
              <div key={r.token} className="flex flex-col items-center gap-3">
                <div
                  className={`w-16 h-16 bg-teal-100 ${r.standard ? "border-2 border-teal-500" : "border border-teal-300"}`}
                  style={{ borderRadius: r.value }}
                />
                <div className="text-center">
                  <p className="font-mono text-xs text-teal-700">{r.token}</p>
                  <p className="text-xs text-gray-500">{r.value}</p>
                  {r.standard && (
                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wide">
                      Standard
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SHADOWS ══ */}
        <section id="shadows" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Shadows"
            description="Use shadow-md for cards and elevated components. Use shadow-lg for modals and major UI surfaces."
          />
          <div className="grid grid-cols-3 gap-6">
            {shadowScale.map((s) => (
              <div key={s.token} className="flex flex-col items-center p-6">
                <div
                  className="w-20 h-20 bg-white rounded-2xl mb-4"
                  style={{ boxShadow: s.css }}
                />
                <p className="font-mono text-xs text-teal-700 mb-1">{s.token}</p>
                <p className="text-xs text-gray-500 text-center">{s.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ BUTTONS ══ */}
        <section id="buttons" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Buttons"
            description="Primary uses teal-600. Standard border radius 6px. Cabin Medium 500 for all button text."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Button" />
            <code className="text-[11px] bg-gray-100 border border-gray-200 rounded-md px-2.5 py-1 text-gray-500 font-mono">
              @/app/components/ui/button
            </code>
          </div>

          <PreviewBox>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Variants
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Primary
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:bg-gray-100"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Ghost
                  </Button>
                  <Button
                    variant="destructive"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Destructive
                  </Button>
                  <Button
                    variant="link"
                    className="text-teal-600 hover:text-teal-700"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Link
                  </Button>
                  <Button
                    disabled
                    className="bg-teal-600 text-white opacity-40 cursor-not-allowed"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Disabled
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Sizes
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Small
                  </Button>
                  <Button
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Default
                  </Button>
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Large
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Outline Variants
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button
                    variant="outline"
                    className="border-teal-300 text-teal-700 hover:bg-teal-50"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Brand Outline
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Gray Outline
                  </Button>
                </div>
              </div>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Button } from "@/app/components/ui/button";

// Primary (teal-600)
<Button className="bg-teal-600 hover:bg-teal-700 text-white">
  Primary
</Button>

// Secondary
<Button variant="outline" className="border-gray-300 text-gray-700">
  Secondary
</Button>

// Ghost
<Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
  Ghost
</Button>

// Sizes: sm | default | lg | icon
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>`}
          />
        </section>

        {/* ══ BADGES ══ */}
        <section id="badges" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Badges"
            description="Status and label indicators using semantic utility color tokens. 6px border radius standard."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Badge" />
            <code className="text-[11px] bg-gray-100 border border-gray-200 rounded-md px-2.5 py-1 text-gray-500 font-mono">
              @/app/components/ui/badge
            </code>
          </div>

          <PreviewBox>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Semantic Status
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge className="bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100">
                    Brand
                  </Badge>
                  <Badge className="bg-green-50 text-green-700 border border-green-200 hover:bg-green-100">
                    Success
                  </Badge>
                  <Badge className="bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
                    Error
                  </Badge>
                  <Badge className="bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100">
                    Warning
                  </Badge>
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100">
                    Info
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200">
                    Neutral
                  </Badge>
                  <Badge className="bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100">
                    Purple
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Variants
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge className="bg-teal-600 text-white border-0">Filled</Badge>
                  <Badge variant="outline" className="border-teal-400 text-teal-700">Outline</Badge>
                  <Badge className="bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-3">Pill</Badge>
                </div>
              </div>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Badge } from "@/app/components/ui/badge";

// Semantic badges (utility color tokens)
<Badge className="bg-teal-50 text-teal-700 border border-teal-200">Brand</Badge>
<Badge className="bg-green-50 text-green-700 border border-green-200">Success</Badge>
<Badge className="bg-red-50 text-red-700 border border-red-200">Error</Badge>
<Badge className="bg-orange-50 text-orange-700 border border-orange-200">Warning</Badge>
<Badge className="bg-gray-100 text-gray-700 border border-gray-200">Neutral</Badge>

// Filled
<Badge className="bg-teal-600 text-white border-0">Active</Badge>

// Outline
<Badge variant="outline" className="border-teal-400 text-teal-700">Outline</Badge>`}
          />
        </section>

        {/* ══ INPUTS ══ */}
        <section id="inputs" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Inputs"
            description="All inputs use 6px radius, border-gray-300, teal-600 focus ring. Placeholder color: gray-500."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Input" />
            <ShadcnChip name="Label" />
            <ShadcnChip name="Textarea" />
            <ShadcnChip name="Select" />
          </div>

          <PreviewBox>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label
                  className="text-sm font-medium text-gray-700 block mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Default
                </Label>
                <Input
                  placeholder="Enter text..."
                  className="border-gray-300 focus-visible:ring-teal-500"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                />
              </div>
              <div>
                <Label
                  className="text-sm font-medium text-gray-700 block mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  With hint
                </Label>
                <Input
                  placeholder="organization@example.com"
                  className="border-gray-300 focus-visible:ring-teal-500"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                />
                <p className="text-xs text-gray-500 mt-1.5" style={{ fontFamily: "Cabin, sans-serif" }}>
                  We'll use this to contact you.
                </p>
              </div>
              <div>
                <Label
                  className="text-sm font-medium text-gray-700 block mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Error state
                </Label>
                <Input
                  value="invalid-email"
                  className="border-red-400 focus-visible:ring-red-400 text-red-700"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                  readOnly
                />
                <p className="text-xs text-red-600 mt-1.5" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Please enter a valid email address.
                </p>
              </div>
              <div>
                <Label
                  className="text-sm font-medium text-gray-400 block mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Disabled
                </Label>
                <Input
                  placeholder="Disabled field"
                  disabled
                  className="border-gray-200 bg-gray-100"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                />
              </div>
              <div className="col-span-2">
                <Label
                  className="text-sm font-medium text-gray-700 block mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Textarea
                </Label>
                <Textarea
                  placeholder="Describe your organization's mission and how this grant aligns..."
                  className="border-gray-300 resize-none focus-visible:ring-teal-500"
                  rows={3}
                  style={{ fontFamily: "Cabin, sans-serif" }}
                />
              </div>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";

// Standard labeled input
<div>
  <Label className="text-sm font-medium text-gray-700 block mb-1.5">
    Field Label
  </Label>
  <Input
    placeholder="Enter value..."
    className="border-gray-300 focus-visible:ring-teal-500"
  />
</div>

// Error state
<Input className="border-red-400 focus-visible:ring-red-400 text-red-700" />
<p className="text-xs text-red-600 mt-1.5">Error message here.</p>

// Textarea
<Textarea
  placeholder="Description..."
  className="border-gray-300 resize-none"
  rows={3}
/>`}
          />
        </section>

        {/* ══ CARDS ══ */}
        <section id="cards" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Cards"
            description="Primary container surface. shadow-md for elevation, radius-lg (8px), border-gray-200."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Card" />
            <ShadcnChip name="CardHeader" />
            <ShadcnChip name="CardTitle" />
            <ShadcnChip name="CardDescription" />
            <ShadcnChip name="CardContent" />
            <ShadcnChip name="CardFooter" />
          </div>

          <PreviewBox>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-gray-200 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle
                    className="text-gray-900 text-base font-semibold"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    USDA Rural Development Grant
                  </CardTitle>
                  <CardDescription
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Federal · Up to $50,000
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Supporting rural nonprofits focused on community infrastructure and
                    environmental initiatives.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs">
                      92% Match
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-600 border border-gray-200 text-xs">
                      Due Jun 30
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-200 shadow-md bg-teal-50">
                <CardHeader className="pb-3">
                  <CardTitle
                    className="text-teal-900 text-base font-semibold"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Brand Card
                  </CardTitle>
                  <CardDescription
                    className="text-teal-600 text-sm"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Highlight variant · bg-teal-50
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-sm text-teal-800 leading-relaxed"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Use for featured grants, callout cards, or highlighted readiness scores.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 col-span-2 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle
                    className="text-gray-900 text-sm font-semibold"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Compact / List Card
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
                      Used in lists, table rows, or summary views.
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-300 text-gray-600 shrink-0"
                      style={{ fontFamily: "Cabin, sans-serif" }}
                    >
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter
} from "@/app/components/ui/card";

// Standard card
<Card className="border-gray-200 shadow-md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Subtitle or meta</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-gray-600">Body content.</p>
  </CardContent>
</Card>

// Brand card
<Card className="border-teal-200 shadow-md bg-teal-50">
  …
</Card>`}
          />
        </section>

        {/* ══ ALERTS ══ */}
        <section id="alerts" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Alerts"
            description="Inline status messages using semantic background and border tokens."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Alert" />
            <ShadcnChip name="AlertTitle" />
            <ShadcnChip name="AlertDescription" />
          </div>

          <PreviewBox>
            <div className="space-y-3">
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle
                  className="text-green-900 font-semibold"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Success
                </AlertTitle>
                <AlertDescription
                  className="text-green-700 text-sm"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Your application was submitted successfully.
                </AlertDescription>
              </Alert>

              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertTitle
                  className="text-red-900 font-semibold"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Error
                </AlertTitle>
                <AlertDescription
                  className="text-red-700 text-sm"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Something went wrong. Please try again later.
                </AlertDescription>
              </Alert>

              <Alert className="border-orange-200 bg-orange-50">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertTitle
                  className="text-orange-900 font-semibold"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Warning
                </AlertTitle>
                <AlertDescription
                  className="text-orange-700 text-sm"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Application deadline is in 3 days. Complete required sections now.
                </AlertDescription>
              </Alert>

              <Alert className="border-blue-200 bg-blue-50">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle
                  className="text-blue-900 font-semibold"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Info
                </AlertTitle>
                <AlertDescription
                  className="text-blue-700 text-sm"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Review all eligibility requirements before beginning your application.
                </AlertDescription>
              </Alert>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Alert, AlertTitle, AlertDescription } from "@/app/components/ui/alert";
import { CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react";

// Success
<Alert className="border-green-200 bg-green-50">
  <CheckCircle2 className="h-4 w-4 text-green-600" />
  <AlertTitle className="text-green-900 font-semibold">Success</AlertTitle>
  <AlertDescription className="text-green-700">Application submitted.</AlertDescription>
</Alert>

// Error   → border-red-200 bg-red-50      · text-red-*
// Warning → border-orange-200 bg-orange-50 · text-orange-*
// Info    → border-blue-200 bg-blue-50     · text-blue-*`}
          />
        </section>

        {/* ══ AVATARS ══ */}
        <section id="avatars" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Avatars"
            description="User and organization identity. radius-full. Teal-600 fallback for initials."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Avatar" />
            <ShadcnChip name="AvatarImage" />
            <ShadcnChip name="AvatarFallback" />
          </div>

          <PreviewBox>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Sizes</p>
                <div className="flex flex-wrap gap-4 items-center">
                  {[
                    { size: "h-6 w-6", text: "text-[10px]", label: "XS" },
                    { size: "h-8 w-8", text: "text-xs", label: "SM" },
                    { size: "h-10 w-10", text: "text-sm", label: "MD" },
                    { size: "h-12 w-12", text: "text-base", label: "LG" },
                    { size: "h-16 w-16", text: "text-lg", label: "XL" },
                  ].map((a) => (
                    <div key={a.label} className="flex flex-col items-center gap-1.5">
                      <Avatar className={a.size}>
                        <AvatarFallback
                          className={`bg-teal-600 text-white font-semibold ${a.text}`}
                          style={{ fontFamily: "Cabin, sans-serif" }}
                        >
                          GG
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[10px] text-gray-400">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Variants</p>
                <div className="flex flex-wrap gap-3 items-center">
                  {[
                    { bg: "bg-teal-600", text: "text-white", initials: "JD" },
                    { bg: "bg-teal-50", text: "text-teal-700", initials: "NK" },
                    { bg: "bg-gray-200", text: "text-gray-700", initials: "AB" },
                    { bg: "bg-green-100", text: "text-green-700", initials: "MK" },
                    { bg: "bg-blue-100", text: "text-blue-700", initials: "RS" },
                    { bg: "bg-purple-100", text: "text-purple-700", initials: "TL" },
                  ].map((a) => (
                    <Avatar key={a.initials} className="h-10 w-10">
                      <AvatarFallback
                        className={`${a.bg} ${a.text} text-sm font-semibold`}
                        style={{ fontFamily: "Cabin, sans-serif" }}
                      >
                        {a.initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";

// With image
<Avatar className="h-10 w-10">
  <AvatarImage src="/user.jpg" alt="Jane Doe" />
  <AvatarFallback className="bg-teal-600 text-white font-semibold text-sm">
    JD
  </AvatarFallback>
</Avatar>

// Initials only (teal default)
<Avatar className="h-10 w-10">
  <AvatarFallback className="bg-teal-600 text-white font-semibold text-sm">
    GG
  </AvatarFallback>
</Avatar>`}
          />
        </section>

        {/* ══ FORM CONTROLS ══ */}
        <section id="form-controls" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Form Controls"
            description="Checkbox, Switch, and RadioGroup all use teal-600 as the active/checked indicator color."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Checkbox" />
            <ShadcnChip name="Switch" />
            <ShadcnChip name="RadioGroup" />
            <ShadcnChip name="RadioGroupItem" />
          </div>

          <PreviewBox>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Checkbox
                </p>
                <div className="space-y-3">
                  {[
                    { id: "cb1", label: "Checked", checked: true, disabled: false },
                    { id: "cb2", label: "Unchecked", checked: false, disabled: false },
                    { id: "cb3", label: "Disabled", checked: false, disabled: true },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-2.5">
                      <Checkbox
                        id={item.id}
                        defaultChecked={item.checked}
                        disabled={item.disabled}
                        className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                      />
                      <Label
                        htmlFor={item.id}
                        className={`text-sm ${item.disabled ? "text-gray-400" : "text-gray-700"}`}
                        style={{ fontFamily: "Cabin, sans-serif" }}
                      >
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Switch
                </p>
                <div className="space-y-3">
                  {[
                    { id: "sw1", label: "Enabled (on)", checked: true, disabled: false },
                    { id: "sw2", label: "Enabled (off)", checked: false, disabled: false },
                    { id: "sw3", label: "Disabled", checked: false, disabled: true },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-2.5">
                      <Switch
                        id={item.id}
                        defaultChecked={item.checked}
                        disabled={item.disabled}
                        className="data-[state=checked]:bg-teal-600"
                      />
                      <Label
                        htmlFor={item.id}
                        className={`text-sm ${item.disabled ? "text-gray-400" : "text-gray-700"}`}
                        style={{ fontFamily: "Cabin, sans-serif" }}
                      >
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Radio Group
                </p>
                <RadioGroup defaultValue="opt1" className="space-y-3">
                  {[
                    { value: "opt1", label: "Option one", disabled: false },
                    { value: "opt2", label: "Option two", disabled: false },
                    { value: "opt3", label: "Disabled", disabled: true },
                  ].map((item) => (
                    <div key={item.value} className="flex items-center gap-2.5">
                      <RadioGroupItem
                        value={item.value}
                        id={item.value}
                        disabled={item.disabled}
                        className="border-gray-300 text-teal-600"
                      />
                      <Label
                        htmlFor={item.value}
                        className={`text-sm ${item.disabled ? "text-gray-400" : "text-gray-700"}`}
                        style={{ fontFamily: "Cabin, sans-serif" }}
                      >
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Checkbox } from "@/app/components/ui/checkbox";
import { Switch } from "@/app/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";

// Checkbox — teal active color
<Checkbox
  id="terms"
  className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
/>

// Switch — teal checked
<Switch className="data-[state=checked]:bg-teal-600" />

// Radio Group
<RadioGroup defaultValue="opt1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="opt1" id="opt1" className="text-teal-600" />
    <Label htmlFor="opt1">Option 1</Label>
  </div>
</RadioGroup>`}
          />
        </section>

        {/* ══ TABS ══ */}
        <section id="tabs" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Tabs"
            description="Section navigation. Active tab uses teal-700 text with white bg and shadow lift."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Tabs" />
            <ShadcnChip name="TabsList" />
            <ShadcnChip name="TabsTrigger" />
            <ShadcnChip name="TabsContent" />
          </div>

          <PreviewBox>
            <Tabs defaultValue="overview">
              <TabsList className="bg-gray-100 border border-gray-200 p-1">
                {["Overview", "Requirements", "Budget", "Timeline"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab.toLowerCase()}
                    className="data-[state=active]:bg-white data-[state=active]:text-teal-700 data-[state=active]:shadow-sm text-gray-600"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="overview" className="mt-5">
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Grant overview content — purpose, funding scope, and eligibility summary.
                </p>
              </TabsContent>
              <TabsContent value="requirements" className="mt-5">
                <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Eligibility criteria and required documentation.
                </p>
              </TabsContent>
              <TabsContent value="budget" className="mt-5">
                <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Budget guidelines and allowable expenses.
                </p>
              </TabsContent>
              <TabsContent value="timeline" className="mt-5">
                <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Key dates: LOI deadline, full application, award announcement.
                </p>
              </TabsContent>
            </Tabs>
          </PreviewBox>

          <CodeSnippet
            code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";

<Tabs defaultValue="overview">
  <TabsList className="bg-gray-100 border border-gray-200 p-1">
    <TabsTrigger
      value="overview"
      className="data-[state=active]:bg-white data-[state=active]:text-teal-700 data-[state=active]:shadow-sm text-gray-600"
    >
      Overview
    </TabsTrigger>
    <TabsTrigger value="requirements" …>Requirements</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">…</TabsContent>
</Tabs>`}
          />
        </section>

        {/* ══ SELECTS ══ */}
        <section id="selects" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Selects"
            description="Dropdown selects use solid white background, border-gray-300, shadow-md on open. No transparency."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Select" />
            <ShadcnChip name="SelectTrigger" />
            <ShadcnChip name="SelectContent" />
            <ShadcnChip name="SelectItem" />
            <ShadcnChip name="SelectValue" />
          </div>

          <PreviewBox>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label
                  className="text-sm font-medium text-gray-700 block mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Grant Type
                </Label>
                <Select>
                  <SelectTrigger
                    className="border-gray-300 focus:ring-teal-500 bg-white"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    <SelectValue placeholder="Select type..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-md">
                    {["Federal", "State", "Foundation", "Corporate", "Local"].map(
                      (opt) => (
                        <SelectItem
                          key={opt}
                          value={opt.toLowerCase()}
                          className="focus:bg-teal-50 focus:text-teal-700"
                          style={{ fontFamily: "Cabin, sans-serif" }}
                        >
                          {opt}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  className="text-sm font-medium text-gray-700 block mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Award Range
                </Label>
                <Select>
                  <SelectTrigger
                    className="border-gray-300 focus:ring-teal-500 bg-white"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    <SelectValue placeholder="Select range..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-md">
                    {[
                      "Under $10k",
                      "$10k – $50k",
                      "$50k – $100k",
                      "Over $100k",
                    ].map((opt) => (
                      <SelectItem
                        key={opt}
                        value={opt}
                        className="focus:bg-teal-50 focus:text-teal-700"
                        style={{ fontFamily: "Cabin, sans-serif" }}
                      >
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import {
  Select, SelectTrigger, SelectContent,
  SelectItem, SelectValue
} from "@/app/components/ui/select";

// Note: SelectContent uses solid white bg (no transparency per design principles)
<Select>
  <SelectTrigger className="border-gray-300 focus:ring-teal-500 bg-white">
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent className="bg-white border-gray-200 shadow-md">
    <SelectItem
      value="federal"
      className="focus:bg-teal-50 focus:text-teal-700"
    >
      Federal
    </SelectItem>
  </SelectContent>
</Select>`}
          />
        </section>

        {/* ══ PROGRESS ══ */}
        <section id="progress" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Progress"
            description="Linear progress indicators using teal-600 fill on gray-200 track. Used for application completeness and grant readiness scores."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Progress" />
          </div>

          <PreviewBox>
            <div className="space-y-5">
              {[
                { label: "Application Complete", value: 75, color: "bg-teal-600" },
                { label: "Grant Readiness Score", value: 58, color: "bg-teal-600" },
                { label: "Documents Uploaded", value: 90, color: "bg-green-500" },
                { label: "Eligibility Match", value: 32, color: "bg-orange-500" },
                { label: "Sections Reviewed", value: 10, color: "bg-red-500" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: "Cabin, sans-serif" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm text-gray-500 tabular-nums"
                      style={{ fontFamily: "Cabin, sans-serif" }}
                    >
                      {item.value}%
                    </span>
                  </div>
                  <Progress
                    value={item.value}
                    className={`h-2 bg-gray-200 [&>div]:${item.color}`}
                  />
                </div>
              ))}
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Progress } from "@/app/components/ui/progress";

// Default (teal-600 fill)
<Progress value={75} className="h-2 bg-gray-200 [&>div]:bg-teal-600" />

// With label row
<div>
  <div className="flex justify-between mb-1.5">
    <span className="text-sm font-medium text-gray-700">Application Complete</span>
    <span className="text-sm text-gray-500">75%</span>
  </div>
  <Progress value={75} className="h-2 bg-gray-200 [&>div]:bg-teal-600" />
</div>

// Semantic variants
// Success → [&>div]:bg-green-500
// Warning → [&>div]:bg-orange-500
// Error   → [&>div]:bg-red-500`}
          />
        </section>

        {/* Bottom padding */}
        <div className="h-20" />
      </main>
    </div>
  );
}
