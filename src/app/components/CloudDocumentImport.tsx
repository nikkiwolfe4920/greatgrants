import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Search,
  Check,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  FileText,
  FileSpreadsheet,
  Image as ImageIcon,
  ChevronRight,
  ShieldCheck,
  FolderOpen,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { MicrosoftIcon, GoogleIcon } from "./BrandIcons";

export type CloudProvider = "microsoft" | "google";

export interface ImportedCloudFile {
  id: string;
  fileName: string;
  fileSize: string;
  uploadedAt: number;
  source: CloudProvider;
}

type ConnectionState = { status: "disconnected" } | { status: "connected"; email: string } | { status: "error" };
type AuthStage = "requesting" | "consent" | "success" | "error";
type FileKind = "doc" | "sheet" | "pdf" | "image";

interface MockCloudFile {
  id: string;
  name: string;
  kind: FileKind;
  location: string;
  modified: string;
  sizeLabel: string;
}

const MOCK_ACCOUNT_EMAIL = "nikki.wolfe@servant.io";
const MOCK_ACCOUNT_NAME = "Nikki Wolfe";

const PROVIDER_LABEL: Record<CloudProvider, string> = {
  microsoft: "Microsoft",
  google: "Google",
};

const PROVIDER_SERVICE_LABEL: Record<CloudProvider, string> = {
  microsoft: "OneDrive & SharePoint",
  google: "Google Drive",
};

const MICROSOFT_FILES: MockCloudFile[] = [
  { id: "ms-1", name: "FY24 Program Impact Report.docx", kind: "doc", location: "OneDrive > Documents", modified: "Edited 2d ago", sizeLabel: "1.2 MB" },
  { id: "ms-2", name: "Grant Budget Template.xlsx", kind: "sheet", location: "OneDrive > Finance", modified: "Edited 1w ago", sizeLabel: "480 KB" },
  { id: "ms-3", name: "Board Meeting Minutes.pdf", kind: "pdf", location: "SharePoint > Governance", modified: "Edited 3w ago", sizeLabel: "210 KB" },
  { id: "ms-4", name: "Community Survey Results.xlsx", kind: "sheet", location: "OneDrive > Data", modified: "Edited 4d ago", sizeLabel: "760 KB" },
  { id: "ms-5", name: "Program Fact Sheet.docx", kind: "doc", location: "SharePoint > Marketing", modified: "Edited 5d ago", sizeLabel: "340 KB" },
  { id: "ms-6", name: "Strategic Plan 2024-2026.pdf", kind: "pdf", location: "OneDrive > Documents", modified: "Edited 2mo ago", sizeLabel: "2.4 MB" },
  { id: "ms-7", name: "Site Photos - Outreach Event.jpg", kind: "image", location: "OneDrive > Photos", modified: "Edited 6d ago", sizeLabel: "3.1 MB" },
];

const GOOGLE_FILES: MockCloudFile[] = [
  { id: "gd-1", name: "Annual Report 2024", kind: "doc", location: "My Drive", modified: "Edited 1d ago", sizeLabel: "Google Doc" },
  { id: "gd-2", name: "Program Budget FY25", kind: "sheet", location: "My Drive > Finance", modified: "Edited 3d ago", sizeLabel: "Google Sheet" },
  { id: "gd-3", name: "Grant Proposal Draft", kind: "doc", location: "Shared with me", modified: "Edited 2w ago", sizeLabel: "Google Doc" },
  { id: "gd-4", name: "IRS Form 990.pdf", kind: "pdf", location: "My Drive > Compliance", modified: "Edited 1mo ago", sizeLabel: "1.8 MB" },
  { id: "gd-5", name: "Community Program Fact Sheet.pdf", kind: "pdf", location: "My Drive", modified: "Edited 5d ago", sizeLabel: "410 KB" },
  { id: "gd-6", name: "Logic Model Diagram.png", kind: "image", location: "My Drive > Planning", modified: "Edited 2mo ago", sizeLabel: "890 KB" },
];

function FileKindIcon({ kind }: { kind: FileKind }) {
  switch (kind) {
    case "doc":
      return <FileText className="w-4 h-4 text-blue-600" />;
    case "sheet":
      return <FileSpreadsheet className="w-4 h-4 text-green-600" />;
    case "image":
      return <ImageIcon className="w-4 h-4 text-purple-600" />;
    case "pdf":
    default:
      return <FileText className="w-4 h-4 text-red-500" />;
  }
}

export function ProviderBadgeIcon({ provider, className = "w-3.5 h-3.5" }: { provider: CloudProvider; className?: string }) {
  return provider === "microsoft" ? <MicrosoftIcon className={className} /> : <GoogleIcon className={className} />;
}

interface CloudDocumentImportProps {
  onImport: (files: ImportedCloudFile[]) => void;
}

export function CloudDocumentImport({ onImport }: CloudDocumentImportProps) {
  const [connections, setConnections] = useState<Record<CloudProvider, ConnectionState>>({
    microsoft: { status: "disconnected" },
    google: { status: "disconnected" },
  });
  const [authModal, setAuthModal] = useState<{ provider: CloudProvider; stage: AuthStage } | null>(null);
  const [browserProvider, setBrowserProvider] = useState<CloudProvider | null>(null);
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isImporting, setIsImporting] = useState(false);

  // Simulate the redirect hop to the provider's real sign-in surface before
  // showing the (mocked) consent screen.
  useEffect(() => {
    if (authModal?.stage === "requesting") {
      const provider = authModal.provider;
      const timer = window.setTimeout(() => {
        setAuthModal((current) =>
          current && current.provider === provider && current.stage === "requesting"
            ? { provider, stage: "consent" }
            : current
        );
      }, 900);
      return () => window.clearTimeout(timer);
    }
  }, [authModal]);

  const openAuth = (provider: CloudProvider) => {
    setAuthModal({ provider, stage: "requesting" });
  };

  const handleAllow = () => {
    if (!authModal) return;
    const { provider } = authModal;
    setConnections((prev) => ({ ...prev, [provider]: { status: "connected", email: MOCK_ACCOUNT_EMAIL } }));
    setAuthModal({ provider, stage: "success" });
  };

  const handleDeny = () => {
    if (!authModal) return;
    setConnections((prev) => ({ ...prev, [authModal.provider]: { status: "error" } }));
    setAuthModal({ provider: authModal.provider, stage: "error" });
  };

  const closeAuth = () => setAuthModal(null);

  const openBrowser = (provider: CloudProvider) => {
    setQuery("");
    setSelectedIds(new Set());
    setBrowserProvider(provider);
  };

  const continueToBrowser = () => {
    if (!authModal) return;
    const provider = authModal.provider;
    setAuthModal(null);
    openBrowser(provider);
  };

  const closeBrowser = () => setBrowserProvider(null);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleConfirmImport = () => {
    if (!browserProvider || selectedIds.size === 0) return;
    const provider = browserProvider;
    const catalog = provider === "microsoft" ? MICROSOFT_FILES : GOOGLE_FILES;
    const chosen = catalog.filter((f) => selectedIds.has(f.id));
    setBrowserProvider(null);
    setIsImporting(true);
    window.setTimeout(() => {
      const now = Date.now();
      const files: ImportedCloudFile[] = chosen.map((f, index) => ({
        id: `${provider}-${now}-${index}`,
        fileName: f.name,
        fileSize: f.sizeLabel,
        uploadedAt: now,
        source: provider,
      }));
      setIsImporting(false);
      onImport(files);
    }, 700);
  };

  const visibleProviders = (["microsoft", "google"] as CloudProvider[]).filter((provider) => {
    const other: CloudProvider = provider === "microsoft" ? "google" : "microsoft";
    return connections[other].status !== "connected";
  });

  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Or import from the cloud</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div className={visibleProviders.length > 1 ? "grid sm:grid-cols-2 gap-3" : "grid gap-3"}>
        {visibleProviders.map((provider) => (
          <CloudProviderRow
            key={provider}
            provider={provider}
            connection={connections[provider]}
            onConnect={() => openAuth(provider)}
            onBrowse={() => openBrowser(provider)}
          />
        ))}
      </div>

      {isImporting && (
        <div className="mt-4 flex items-center gap-2.5 p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
          <Loader2 className="w-4 h-4 text-teal-600 animate-spin" />
          <p className="text-sm text-gray-700">Importing files…</p>
        </div>
      )}

      {/* OAuth connect / consent modal */}
      <Dialog open={!!authModal} onOpenChange={(open) => !open && closeAuth()}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden gap-0">
          {authModal && (
            <CloudAuthModalBody
              provider={authModal.provider}
              stage={authModal.stage}
              onAllow={handleAllow}
              onDeny={handleDeny}
              onRetry={() => openAuth(authModal.provider)}
              onCancel={closeAuth}
              onContinue={continueToBrowser}
              onClose={closeAuth}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Cloud file browser modal */}
      <Dialog open={!!browserProvider} onOpenChange={(open) => !open && closeBrowser()}>
        <DialogContent className="sm:max-w-2xl p-0 overflow-hidden gap-0">
          {browserProvider && (
            <CloudFileBrowserBody
              provider={browserProvider}
              query={query}
              onQueryChange={setQuery}
              selectedIds={selectedIds}
              onToggle={toggleSelect}
              onCancel={closeBrowser}
              onConfirm={handleConfirmImport}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CloudProviderRow({
  provider,
  connection,
  onConnect,
  onBrowse,
}: {
  provider: CloudProvider;
  connection: ConnectionState;
  onConnect: () => void;
  onBrowse: () => void;
}) {
  const label = provider === "microsoft" ? "Microsoft OneDrive / SharePoint" : "Google Drive";

  if (connection.status === "connected") {
    return (
      <div className="flex items-center justify-between gap-3 p-3.5 border border-teal-200 bg-teal-50 rounded-lg">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-md bg-white border border-teal-200 flex items-center justify-center flex-shrink-0">
            <ProviderBadgeIcon provider={provider} className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <p className="text-xs font-semibold text-teal-800">Connected</p>
            </div>
            <p className="text-xs text-gray-600">
              You are connected to {connection.email}. Manage your MS and Google in{" "}
              <Link to="/settings" className="text-teal-700 hover:underline">
                Account Settings
              </Link>
              .
            </p>
          </div>
        </div>
        <Button size="sm" onClick={onBrowse} className="bg-teal-600 hover:bg-teal-700 text-white flex-shrink-0">
          Browse files
        </Button>
      </div>
    );
  }

  if (connection.status === "error") {
    return (
      <div className="flex items-center justify-between gap-3 p-3.5 border border-red-200 bg-red-50 rounded-lg">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-md bg-white border border-red-200 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-4 h-4 text-red-500" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-red-700">Connection failed</p>
            <p className="text-xs text-gray-600 truncate">Couldn't connect to {label}</p>
          </div>
        </div>
        <Button size="sm" variant="outline" onClick={onConnect} className="border-red-300 text-red-700 hover:bg-red-100 flex-shrink-0">
          Try again
        </Button>
      </div>
    );
  }

  return (
    <button
      onClick={onConnect}
      className="flex items-center justify-between gap-3 p-3.5 border border-gray-200 bg-white rounded-lg hover:border-teal-400 hover:bg-teal-50/30 transition-colors text-left"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-8 h-8 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
          <ProviderBadgeIcon provider={provider} className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            Connect {provider === "microsoft" ? "Microsoft" : "Google"}
          </p>
          <p className="text-xs text-gray-500 truncate">{label}</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
    </button>
  );
}

function CloudAuthModalBody({
  provider,
  stage,
  onAllow,
  onDeny,
  onRetry,
  onCancel,
  onContinue,
  onClose,
}: {
  provider: CloudProvider;
  stage: AuthStage;
  onAllow: () => void;
  onDeny: () => void;
  onRetry: () => void;
  onCancel: () => void;
  onContinue: () => void;
  onClose: () => void;
}) {
  const providerName = PROVIDER_LABEL[provider];
  const serviceLabel = PROVIDER_SERVICE_LABEL[provider];
  const accentColor = provider === "microsoft" ? "#0067b8" : "#1a73e8";

  if (stage === "requesting") {
    return (
      <div className="p-10 flex flex-col items-center text-center gap-4">
        <DialogTitle className="sr-only">Connecting to {providerName}</DialogTitle>
        <DialogDescription className="sr-only">
          Redirecting to the {providerName} sign-in window to continue connecting your account.
        </DialogDescription>
        <Loader2 className="w-6 h-6 animate-spin" style={{ color: accentColor }} />
        <div>
          <p className="text-sm font-medium text-gray-900">Redirecting to {providerName}…</p>
          <p className="text-xs text-gray-500 mt-1">Opening the {providerName} sign-in window</p>
        </div>
      </div>
    );
  }

  if (stage === "consent") {
    return (
      <div>
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
          <ProviderBadgeIcon provider={provider} className="w-5 h-5" />
          <DialogTitle className="text-sm font-medium text-gray-700">
            {provider === "microsoft" ? "Sign in with Microsoft" : "Sign in with Google"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Review and allow the permissions Great Grants is requesting for your {providerName} account.
          </DialogDescription>
        </div>
        <div className="px-6 py-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-md bg-teal-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
              GG
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900">Great Grants wants to access your account</p>
              <p className="text-xs text-gray-500 truncate">{MOCK_ACCOUNT_EMAIL}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 flex-shrink-0">
              NW
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900">{MOCK_ACCOUNT_NAME}</p>
              <p className="text-xs text-gray-500 truncate">{MOCK_ACCOUNT_EMAIL}</p>
            </div>
          </div>

          <p className="text-xs font-medium text-gray-700 mb-2">This will allow Great Grants to:</p>
          <ul className="space-y-2 mb-1">
            <li className="flex items-start gap-2 text-xs text-gray-600">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span>View your basic profile info (name, email)</span>
            </li>
            <li className="flex items-start gap-2 text-xs text-gray-600">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span>Read files you select in {serviceLabel}</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50">
          <Button variant="outline" onClick={onDeny}>
            Cancel
          </Button>
          <Button onClick={onAllow} style={{ backgroundColor: accentColor }} className="text-white hover:opacity-90">
            Allow
          </Button>
        </div>
      </div>
    );
  }

  if (stage === "success") {
    return (
      <div className="p-8 flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <DialogTitle className="text-base">You're connected</DialogTitle>
          <DialogDescription className="mt-1">
            Great Grants can now access files you select from {serviceLabel}.
          </DialogDescription>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={onContinue} className="bg-teal-600 hover:bg-teal-700 text-white">
            Browse files
          </Button>
        </div>
      </div>
    );
  }

  // error
  return (
    <div className="p-8 flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
        <AlertTriangle className="w-6 h-6 text-red-500" />
      </div>
      <div>
        <DialogTitle className="text-base">We couldn't connect your {providerName} account</DialogTitle>
        <DialogDescription className="mt-1">
          The sign-in request was cancelled before access was granted.
        </DialogDescription>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onRetry} className="bg-teal-600 hover:bg-teal-700 text-white">
          Try again
        </Button>
      </div>
    </div>
  );
}

function CloudFileBrowserBody({
  provider,
  query,
  onQueryChange,
  selectedIds,
  onToggle,
  onCancel,
  onConfirm,
}: {
  provider: CloudProvider;
  query: string;
  onQueryChange: (value: string) => void;
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const catalog = provider === "microsoft" ? MICROSOFT_FILES : GOOGLE_FILES;
  const filtered = catalog.filter((f) => f.name.toLowerCase().includes(query.trim().toLowerCase()));
  const navItems = provider === "microsoft"
    ? ["OneDrive", "SharePoint sites", "Shared", "Recent"]
    : ["Recent", "My Drive", "Shared with me", "Starred"];

  return (
    <div>
      <DialogHeader className="px-6 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <ProviderBadgeIcon provider={provider} className="w-5 h-5" />
          <DialogTitle className="text-base">
            Select files from {PROVIDER_SERVICE_LABEL[provider]}
          </DialogTitle>
        </div>
        <DialogDescription>
          Choose one or more files to add to this program. Each file becomes its own document.
        </DialogDescription>
      </DialogHeader>

      <div className="flex" style={{ minHeight: 360 }}>
        {/* Provider-style side navigation (visual parity with OneDrive Picker v8 / Google Picker) */}
        <div className="w-36 border-r border-gray-100 py-3 px-2 flex-shrink-0 hidden sm:block">
          {navItems.map((item, index) => (
            <div
              key={item}
              className={`text-xs px-2.5 py-2 rounded-md mb-0.5 ${
                index === 0 ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-500"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder={`Search ${PROVIDER_SERVICE_LABEL[provider]}`}
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                  <FolderOpen className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-900">No files found</p>
                <p className="text-xs text-gray-500 mt-1 max-w-xs">
                  {query.trim()
                    ? `We couldn't find any files matching "${query.trim()}".`
                    : "This location doesn't have any files yet."}
                </p>
                {query.trim() && (
                  <Button variant="outline" size="sm" className="mt-4" onClick={() => onQueryChange("")}>
                    Clear search
                  </Button>
                )}
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filtered.map((file) => {
                  const isSelected = selectedIds.has(file.id);
                  return (
                    <label
                      key={file.id}
                      className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${
                        isSelected ? "bg-teal-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <Checkbox checked={isSelected} onCheckedChange={() => onToggle(file.id)} />
                      <FileKindIcon kind={file.kind} />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500 truncate">
                          {file.location} • {file.modified}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0">{file.sizeLabel}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
        <p className="text-xs text-gray-500">
          {selectedIds.size} file{selectedIds.size !== 1 ? "s" : ""} selected
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={selectedIds.size === 0}
            className="bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-600 gap-1.5"
          >
            <Check className="w-4 h-4" />
            Select {selectedIds.size > 0 ? `(${selectedIds.size})` : ""}
          </Button>
        </div>
      </div>
    </div>
  );
}
