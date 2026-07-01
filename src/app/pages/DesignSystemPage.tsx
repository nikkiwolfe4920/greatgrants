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
  // Navigation & UI Controls
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  Home,
  MoreVertical,
  MoreHorizontal,
  X,
  Plus,
  // Status & Feedback
  Circle,
  // File & Document
  FileText,
  FileSpreadsheet,
  Upload,
  File,
  Image,
  // User & Organization
  User,
  UserCircle2,
  UserPlus,
  UserMinus,
  Building2,
  Users,
  // Actions & Settings
  Settings,
  Trash2,
  Lock,
  Mail,
  Bell,
  Camera,
  Globe,
  Shield,
  Bookmark,
  Edit2,
  Archive,
  // Grants & Financial
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  Target,
  Briefcase,
  Search,
  Star,
  // Content Editing
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  MessageSquare,
  Send,
  Undo2,
  // UI Elements
  FolderOpen,
  FileCheck,
  Sparkles,
  LogOut,
  Zap,
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
  { id: "right-nav", label: "Right Nav" },
  { id: "search", label: "Search" },
  { id: "iconography", label: "Iconography" },
];

// ─── Iconography Data ────────────────────────────────────────────────────────

const iconGroups = [
  {
    category: "Navigation & UI Controls",
    description: "Used for directional navigation, menus, and layout controls.",
    icons: [
      { name: "ChevronRight", component: ChevronRight, usage: "Next, expand, breadcrumb" },
      { name: "ChevronLeft", component: ChevronLeft, usage: "Back, collapse" },
      { name: "ChevronDown", component: ChevronDown, usage: "Dropdown trigger, accordion" },
      { name: "ChevronUp", component: ChevronUp, usage: "Collapse, scroll up" },
      { name: "ArrowLeft", component: ArrowLeft, usage: "Page back navigation" },
      { name: "ArrowRight", component: ArrowRight, usage: "Page forward, continue" },
      { name: "Home", component: Home, usage: "Home / dashboard link" },
      { name: "MoreVertical", component: MoreVertical, usage: "Overflow / kebab menu" },
      { name: "MoreHorizontal", component: MoreHorizontal, usage: "Overflow / ellipsis menu" },
      { name: "X", component: X, usage: "Close, dismiss, remove tag" },
      { name: "Plus", component: Plus, usage: "Add, create new item" },
    ],
  },
  {
    category: "Status & Feedback",
    description: "Communicate success, errors, warnings, and neutral information.",
    icons: [
      { name: "CheckCircle2", component: CheckCircle2, usage: "Success, completed state" },
      { name: "Check", component: Check, usage: "Checkbox selected, confirmed" },
      { name: "AlertCircle", component: AlertCircle, usage: "Error, critical alert" },
      { name: "AlertTriangle", component: AlertTriangle, usage: "Warning, caution" },
      { name: "Info", component: Info, usage: "Informational tooltip or alert" },
      { name: "Circle", component: Circle, usage: "Radio button, step indicator" },
    ],
  },
  {
    category: "File & Document",
    description: "Represent documents, uploads, and file types.",
    icons: [
      { name: "FileText", component: FileText, usage: "Text documents, applications" },
      { name: "FileSpreadsheet", component: FileSpreadsheet, usage: "Spreadsheet / CSV uploads" },
      { name: "FileCheck", component: FileCheck, usage: "Reviewed / approved document" },
      { name: "File", component: File, usage: "Generic file attachment" },
      { name: "Image", component: Image, usage: "Image upload, logo" },
      { name: "Upload", component: Upload, usage: "File upload action" },
      { name: "FolderOpen", component: FolderOpen, usage: "Open folder / project" },
      { name: "Archive", component: Archive, usage: "Archive application or record" },
    ],
  },
  {
    category: "User & Organization",
    description: "Represent people, teams, and organizations.",
    icons: [
      { name: "User", component: User, usage: "Individual user profile" },
      { name: "UserCircle2", component: UserCircle2, usage: "Avatar placeholder" },
      { name: "UserPlus", component: UserPlus, usage: "Invite / add member" },
      { name: "UserMinus", component: UserMinus, usage: "Remove member" },
      { name: "Users", component: Users, usage: "Team, member list" },
      { name: "Building2", component: Building2, usage: "Organization, company" },
    ],
  },
  {
    category: "Actions & Settings",
    description: "Common actions and account management controls.",
    icons: [
      { name: "Settings", component: Settings, usage: "Account / app settings" },
      { name: "Trash2", component: Trash2, usage: "Delete, remove" },
      { name: "Edit2", component: Edit2, usage: "Edit in place" },
      { name: "Bookmark", component: Bookmark, usage: "Save / bookmark a grant" },
      { name: "Lock", component: Lock, usage: "Locked / secure state" },
      { name: "Shield", component: Shield, usage: "Security, permissions" },
      { name: "Mail", component: Mail, usage: "Email address, contact" },
      { name: "Bell", component: Bell, usage: "Notifications" },
      { name: "Camera", component: Camera, usage: "Photo / avatar upload" },
      { name: "Globe", component: Globe, usage: "Website URL, public scope" },
      { name: "LogOut", component: LogOut, usage: "Sign out action" },
    ],
  },
  {
    category: "Grants & Financial",
    description: "Domain-specific icons for grants, funding, and applications.",
    icons: [
      { name: "DollarSign", component: DollarSign, usage: "Funding amount, financial" },
      { name: "Calendar", component: Calendar, usage: "Deadline, application date" },
      { name: "Clock", component: Clock, usage: "Time remaining, duration" },
      { name: "MapPin", component: MapPin, usage: "Location, geographic eligibility" },
      { name: "Target", component: Target, usage: "Goals, focus area" },
      { name: "Briefcase", component: Briefcase, usage: "Business, grant purpose" },
      { name: "Search", component: Search, usage: "Grant search" },
      { name: "Star", component: Star, usage: "Featured grant, rating" },
      { name: "Zap", component: Zap, usage: "AI-assisted, fast-track" },
      { name: "Sparkles", component: Sparkles, usage: "AI generation, magic action" },
    ],
  },
  {
    category: "Rich Text & Content Editing",
    description: "Icons used within the application editor and document tools.",
    icons: [
      { name: "Type", component: Type, usage: "Text type / heading" },
      { name: "Bold", component: Bold, usage: "Bold text formatting" },
      { name: "Italic", component: Italic, usage: "Italic text formatting" },
      { name: "Underline", component: Underline, usage: "Underline text" },
      { name: "AlignLeft", component: AlignLeft, usage: "Left-align text" },
      { name: "AlignCenter", component: AlignCenter, usage: "Center-align text" },
      { name: "AlignRight", component: AlignRight, usage: "Right-align text" },
      { name: "List", component: List, usage: "Unordered list" },
      { name: "ListOrdered", component: ListOrdered, usage: "Ordered list" },
      { name: "Link", component: Link, usage: "Insert hyperlink" },
      { name: "MessageSquare", component: MessageSquare, usage: "Comment, discussion" },
      { name: "Send", component: Send, usage: "Submit, send application" },
      { name: "Undo2", component: Undo2, usage: "Undo action" },
    ],
  },
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
            description="User and organization identity. radius-full. Gray-200 background with gray-700 text for initials fallback."
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
                          className={`bg-gray-200 text-gray-700 font-semibold ${a.text}`}
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
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Variant</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback
                      className="bg-gray-200 text-gray-700 text-sm font-semibold"
                      style={{ fontFamily: "Cabin, sans-serif" }}
                    >
                      AB
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-gray-500">bg-gray-200 · text-gray-700 — the only supported variant</span>
                </div>
              </div>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";

// With image — falls back to gray initials
<Avatar className="h-10 w-10">
  <AvatarImage src="/user.jpg" alt="Jane Doe" />
  <AvatarFallback className="bg-gray-200 text-gray-700 font-semibold text-sm">
    JD
  </AvatarFallback>
</Avatar>

// Initials only (gray variant)
<Avatar className="h-10 w-10">
  <AvatarFallback className="bg-gray-200 text-gray-700 font-semibold text-sm">
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
            description="Section navigation. Tab list background is white with a bottom border. Active tab shows a teal-600 underline with teal-600 text. Inactive tabs are gray-600."
          />
          <div className="flex flex-wrap gap-2 mb-4">
            <ShadcnChip name="Tabs" />
            <ShadcnChip name="TabsList" />
            <ShadcnChip name="TabsTrigger" />
            <ShadcnChip name="TabsContent" />
          </div>

          <PreviewBox>
            <Tabs defaultValue="overview">
              <TabsList className="bg-white border-b border-gray-200 p-0 h-auto w-full justify-start rounded-none inline-flex">
                {["Overview", "Requirements", "Budget", "Timeline"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab.toLowerCase()}
                    className="rounded-none border-0 border-b-[2px] border-transparent data-[state=active]:border-b-teal-600 data-[state=active]:text-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 bg-transparent text-gray-600 hover:text-gray-900 shadow-none"
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

// Default: white background with bottom-border underline style
<Tabs defaultValue="overview">
  <TabsList className="bg-white border-b border-gray-200 p-0 h-auto w-full justify-start rounded-none inline-flex">
    <TabsTrigger
      value="overview"
      className="rounded-none border-0 border-b-[2px] border-transparent data-[state=active]:border-b-teal-600 data-[state=active]:text-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 bg-transparent text-gray-600 hover:text-gray-900 shadow-none"
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

        {/* ── Right Nav ────────────────────────────────────────── */}
        <section id="right-nav" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Right Nav"
            description="A 320px collapsible right rail that provides contextual guidance, progress checklists, and quick-jump navigation. Used on detail/editor pages (e.g. Organization Profile) to surface actionable items without leaving the page."
          />

          {/* Anatomy callout */}
          <div className="flex items-start gap-3 p-4 rounded-xl border border-teal-200 bg-teal-50 mb-8">
            <Info size={18} className="text-teal-600 mt-0.5 shrink-0" />
            <div className="text-sm text-teal-700 space-y-1">
              <p className="font-semibold text-teal-800">Anatomy</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>320 px wide — fixed, not resizable</li>
                <li>Background: <code className="font-mono text-xs bg-teal-100 px-1 py-0.5 rounded">bg-gray-50 (#F9FAFB)</code></li>
                <li>Left edge: <code className="font-mono text-xs bg-teal-100 px-1 py-0.5 rounded">border-l border-gray-200</code></li>
                <li>Floating collapse button: absolute at <code className="font-mono text-xs bg-teal-100 px-1 py-0.5 rounded">-left-4</code>, white circle with border, <code className="font-mono text-xs bg-teal-100 px-1 py-0.5 rounded">ChevronRight / ChevronLeft</code> icon</li>
                <li>Animates open/close via <code className="font-mono text-xs bg-teal-100 px-1 py-0.5 rounded">AnimatePresence</code> — width 0 → 320, opacity 0 → 1</li>
              </ul>
            </div>
          </div>

          {/* Checklist item states */}
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Checklist Item States</h3>
          <PreviewBox className="mb-6">
            <div className="flex flex-col gap-2 w-72">
              {/* Completed */}
              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-[#aaf0c4] bg-[#edfcf2] text-left">
                <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                <span className="text-sm font-medium text-gray-800">Organization Name</span>
                <span className="ml-auto text-xs text-teal-600 font-medium">Done</span>
              </button>
              {/* Active */}
              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-teal-600 bg-white text-left">
                <Circle size={16} className="text-teal-600 shrink-0" />
                <span className="text-sm font-medium text-gray-800">Mission Statement</span>
                <span className="ml-auto text-xs text-teal-600 font-medium">Active</span>
              </button>
              {/* Default */}
              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white text-left hover:border-teal-400">
                <Circle size={16} className="text-gray-300 shrink-0" />
                <span className="text-sm font-medium text-gray-500">Contact Information</span>
              </button>
            </div>
          </PreviewBox>

          <CodeSnippet
            language="tsx"
            code={`{/* Right rail wrapper — animated open/close */}
<AnimatePresence>
  {showRightRail && (
    <motion.aside
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 320, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="relative shrink-0 bg-[#F9FAFB] border-l border-gray-200 overflow-hidden"
    >
      {/* Collapse toggle */}
      <button
        onClick={() => setShowRightRail(false)}
        className="absolute -left-4 top-6 z-10 flex h-8 w-8 items-center justify-center
                   rounded-full border border-gray-200 bg-white shadow-sm"
      >
        <ChevronRight size={14} className="text-gray-500" />
      </button>

      {/* Checklist item */}
      {/* State: completed  → border-[#aaf0c4] bg-[#edfcf2]  + CheckCircle2 teal */}
      {/* State: active     → border-teal-600 bg-white */}
      {/* State: default    → border-gray-200 bg-white hover:border-teal-400 */}
      <button
        onClick={() => handleRailItemClick(item)}
        className={\`flex items-center gap-3 p-3 rounded-lg border text-left w-full
          \${item.completed
            ? "border-[#aaf0c4] bg-[#edfcf2]"
            : item.active
              ? "border-teal-600 bg-white"
              : "border-gray-200 bg-white hover:border-teal-400"}\`}
      >
        {item.completed
          ? <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
          : <Circle size={16} className="text-gray-300 shrink-0" />}
        <span className="text-sm font-medium text-gray-800">{item.label}</span>
      </button>
    </motion.aside>
  )}
</AnimatePresence>`}
          />

          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mt-8 mb-3">Interaction Rules</h3>
          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside mb-6">
            <li>Clicking a checklist item navigates to the relevant tab and scrolls to the associated field using a <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">data-field="fieldName"</code> attribute.</li>
            <li>The collapse button sits outside the rail at <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">-left-4</code> so it remains clickable when the rail is open.</li>
            <li>Rail visibility is toggled via a toolbar button or top-right icon; re-opening restores the last scroll position.</li>
            <li>Progress badge color scales with completion: low → gray, mid → amber, high → teal/green.</li>
          </ul>
        </section>

        {/* ── Search ────────────────────────────────────────────── */}
        <section id="search" className="mb-20 scroll-mt-8">
          <SectionHeader
            title="Search"
            description="The search surface combines a structured grant-search bar with an AI-powered natural-language mode. A sticky right rail provides contextual insights alongside results."
          />

          {/* Search bar anatomy */}
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Search Bar</h3>
          <PreviewBox className="mb-6">
            <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center gap-0">
                {/* Programs selector */}
                <button className="flex items-center gap-1.5 px-3 py-2.5 border-r border-gray-200 text-sm text-gray-600 whitespace-nowrap hover:bg-gray-50">
                  <FolderOpen size={15} className="text-teal-600" />
                  <span>All Programs</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
                {/* Search input */}
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search size={16} className="text-gray-400 shrink-0" />
                  <input
                    readOnly
                    placeholder="Search grants…"
                    className="flex-1 text-sm outline-none bg-transparent text-gray-500 py-2.5"
                  />
                  <Sparkles size={16} style={{ color: "#9810FA" }} className="shrink-0" />
                </div>
              </div>
            </div>
          </PreviewBox>

          {/* AI search active state */}
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">AI Search Active State</h3>
          <PreviewBox className="mb-6">
            <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-teal-50/30 shadow-sm overflow-hidden">
              <div className="flex items-center gap-0">
                <button className="flex items-center gap-1.5 px-3 py-2.5 border-r border-gray-200 text-sm text-gray-600 whitespace-nowrap">
                  <FolderOpen size={15} className="text-teal-600" />
                  <span>All Programs</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search size={16} className="text-teal-600 shrink-0" />
                  <span className="flex-1 text-sm text-gray-800 py-2.5">environmental grants for small nonprofits</span>
                  <Sparkles size={16} style={{ color: "#9810FA" }} className="shrink-0" />
                </div>
              </div>
              {/* AI examples */}
              <div className="flex flex-wrap gap-2 px-4 pb-3 pt-1">
                <span className="text-xs text-gray-500 mr-1">Try:</span>
                {["Youth arts funding", "Housing grants under $50k"].map(ex => (
                  <button key={ex} className="text-xs px-2.5 py-1 rounded-full border border-[#9810FA] text-[#9810FA] hover:bg-purple-50">
                    {ex}
                  </button>
                ))}
              </div>
            </div>
          </PreviewBox>

          {/* Filter pills */}
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Filter Pills</h3>
          <PreviewBox className="mb-6">
            <div className="flex flex-wrap gap-2">
              {["Status: Open", "Amount: $10k–$50k", "Deadline: This Month"].map(f => (
                <span key={f} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">
                  {f}
                  <X size={12} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                </span>
              ))}
            </div>
          </PreviewBox>

          <CodeSnippet
            language="tsx"
            code={`{/* Search bar — default */}
<div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
  <div className="flex items-center">
    {/* Programs selector */}
    <button className="flex items-center gap-1.5 px-3 py-2.5 border-r border-gray-200 text-sm text-gray-600">
      <FolderOpen size={15} className="text-teal-600" />
      All Programs
      <ChevronDown size={14} className="text-gray-400" />
    </button>

    {/* Text input */}
    <div className="flex-1 flex items-center gap-2 px-3">
      {/* Search icon turns teal-600 when query is active */}
      <Search size={16} className={query ? "text-teal-600" : "text-gray-400"} />
      <input className="flex-1 text-sm outline-none bg-transparent" placeholder="Search grants…" />
      {/* AI indicator — always purple #9810FA */}
      <Sparkles size={16} style={{ color: "#9810FA" }} />
    </div>
  </div>

  {/* AI mode: wrapper shifts to bg-teal-50/30, show example prompts */}
  {query && (
    <div className="flex flex-wrap gap-2 px-4 pb-3 pt-1">
      <span className="text-xs text-gray-500">Try:</span>
      {examples.map(ex => (
        <button key={ex}
          className="text-xs px-2.5 py-1 rounded-full border border-[#9810FA] text-[#9810FA]">
          {ex}
        </button>
      ))}
    </div>
  )}
</div>

{/* Filter pills */}
<div className="flex flex-wrap gap-2 mt-3">
  {activeFilters.map(f => (
    <span key={f} className="flex items-center gap-1.5 text-xs px-3 py-1.5
                              rounded-full border border-gray-200 bg-gray-50 text-gray-700">
      {f} <X size={12} className="cursor-pointer" />
    </span>
  ))}
</div>`}
          />

          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mt-8 mb-3">Search Right Rail</h3>
          <PreviewBox className="mb-6">
            <div className="w-72 flex flex-col gap-3">
              {/* Insights card */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm font-semibold text-gray-800 mb-3">Search Insights</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[{ label: "Total Funding", val: "$2.4M" }, { label: "Avg Grant", val: "$18k" }, { label: "Open Now", val: "34" }].map(s => (
                    <div key={s.label}>
                      <p className="text-base font-bold text-teal-700">{s.val}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Tips card */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="text-sm font-semibold text-gray-800 mb-2">Pro Tips</p>
                <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                  <li>Narrow by deadline to surface urgent opportunities</li>
                  <li>Use AI search for natural-language queries</li>
                </ul>
              </div>
            </div>
          </PreviewBox>

          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Search right rail cards use <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">bg-white rounded-xl p-5 border border-gray-200</code>.</li>
            <li>Cards: Search Insights (stats grid), Pro Tips (bullet list), Recently Viewed (conditional on history).</li>
            <li>Rail is sticky, 320 px, no collapse control — always visible alongside results.</li>
          </ul>
        </section>

        {/* ── Iconography ─────────────────────────────────────── */}
        <section id="iconography" className="scroll-mt-8">
          <SectionHeader
            title="Iconography"
            description="All icons come from Lucide React — a single, consistent open-source icon set. Icons are rendered at 16px (sm), 20px (default), or 24px (lg) and inherit the current text color."
          />

          {/* Library callout */}
          <div className="flex items-start gap-3 p-4 rounded-xl border border-teal-200 bg-teal-50 mb-8">
            <Info size={18} className="text-teal-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-teal-800 mb-0.5">Library: <code className="font-mono font-normal">lucide-react</code></p>
              <p className="text-sm text-teal-700">
                Import icons individually from <code className="font-mono text-xs bg-teal-100 px-1 py-0.5 rounded">lucide-react</code>.
                All icons are SVG-based and scale cleanly via the <code className="font-mono text-xs bg-teal-100 px-1 py-0.5 rounded">size</code> prop.
                Default size is <strong>20px</strong>; use <strong>16px</strong> for inline / compact UI and <strong>24px</strong> for empty states.
              </p>
            </div>
          </div>

          {/* Size & color usage */}
          <PreviewBox>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Size scale</p>
                <div className="flex items-end gap-8">
                  {[
                    { size: 16, label: "16px — sm\nInline, compact UI" },
                    { size: 20, label: "20px — default\nButtons, labels" },
                    { size: 24, label: "24px — lg\nEmpty states, nav" },
                  ].map(({ size, label }) => (
                    <div key={size} className="flex flex-col items-center gap-2">
                      <Search size={size} className="text-gray-700" />
                      <span className="text-xs text-gray-500 text-center whitespace-pre-line">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Separator className="bg-gray-200" />
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Color usage</p>
                <div className="flex items-center gap-8 flex-wrap">
                  {[
                    { color: "text-gray-500", label: "gray-500\nDefault / secondary", bg: "" },
                    { color: "text-gray-700", label: "gray-700\nPrimary / emphasis", bg: "" },
                    { color: "text-teal-600", label: "teal-600\nBrand action", bg: "" },
                    { color: "text-green-600", label: "green-600\nSuccess", bg: "" },
                    { color: "text-red-600", label: "red-600\nError / destructive", bg: "" },
                    { color: "text-orange-500", label: "orange-500\nWarning", bg: "" },
                  ].map(({ color, label }) => (
                    <div key={color} className="flex flex-col items-center gap-2">
                      <Bookmark size={20} className={color} />
                      <span className="text-xs text-gray-500 text-center whitespace-pre-line">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PreviewBox>

          <CodeSnippet
            code={`import { Search, Bookmark } from "lucide-react";

// Default (20px, inherits text color)
<Search />

// Sized
<Search size={16} />   // compact / inline
<Search size={20} />   // default
<Search size={24} />   // empty states, nav

// Colored (via Tailwind text color)
<Bookmark className="text-teal-600" />
<Bookmark className="text-gray-500" />
<Bookmark className="text-red-600" />`}
          />

          {/* Icon groups */}
          <div className="mt-10 space-y-10">
            {iconGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{group.category}</h3>
                <p className="text-sm text-gray-500 mb-4">{group.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {group.icons.map(({ name, component: Icon, usage }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50 transition-colors group"
                    >
                      <Icon size={24} className="text-gray-700 group-hover:text-teal-600 transition-colors" />
                      <code className="text-xs font-mono text-gray-800 text-center leading-tight">{name}</code>
                      <span className="text-xs text-gray-400 text-center leading-tight">{usage}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CodeSnippet
              code={`// Import pattern — only import what you use
import {
  CheckCircle2,   // success states
  AlertCircle,    // error states
  AlertTriangle,  // warnings
  Info,           // informational
  DollarSign,     // funding amounts
  Calendar,       // deadlines
  Search,         // grant search
  Bookmark,       // save grant
  FileText,       // documents / applications
  Building2,      // organization
  ChevronRight,   // navigation / expand
  X,              // close / dismiss
  Plus,           // add / create
} from "lucide-react";`}
            />
          </div>
        </section>

        {/* Bottom padding */}
        <div className="h-20" />
      </main>
    </div>
  );
}
