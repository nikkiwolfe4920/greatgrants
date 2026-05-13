import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "@/app/components/Logo";
import { Search, Building2, LogOut, Check } from "lucide-react";

type Tab = "profile" | "security" | "subscription";

export function SubscribeAccountPage() {
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem("gg_subscribe_email") || "";
  const [activeTab, setActiveTab] = useState<Tab>("subscription");
  const [billingEmail, setBillingEmail] = useState(storedEmail);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 h-screen flex flex-col shrink-0">
        <div className="px-5 py-4 border-b border-gray-200">
          <Logo />
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          <button
            onClick={() => navigate("/subscribe/search")}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <Search size={16} strokeWidth={1.75} />
            All Available Grants
          </button>
          <button
            onClick={() => navigate("/subscribe/org")}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 transition-colors text-left"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <Building2 size={16} strokeWidth={1.75} />
            My Organizations
          </button>
        </nav>
        <div className="px-3 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-300 shrink-0" />
            <div className="min-w-0 flex-1">
              <p
                className="text-sm font-medium text-gray-900 truncate"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Your Account
              </p>
              <p className="text-xs text-gray-500 truncate" style={{ fontFamily: "Cabin, sans-serif" }}>
                {storedEmail || "subscriber"}
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-y-auto px-10 py-10">
        <h1
          className="text-3xl font-normal text-gray-900 mb-6"
          style={{ fontFamily: "Lustria, serif" }}
        >
          Account settings
        </h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {(["profile", "security", "subscription"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px focus:outline-none ${
                activeTab === tab
                  ? "border-teal-600 text-teal-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "profile" && (
          <div className="max-w-lg">
            <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
              Update your personal profile information.
            </p>
          </div>
        )}

        {activeTab === "security" && (
          <div className="max-w-lg">
            <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
              Manage your password and security settings.
            </p>
          </div>
        )}

        {activeTab === "subscription" && (
          <div className="max-w-xl">
            {/* Plan badge */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                <Check size={13} strokeWidth={2.5} />
                Unlimited Search &amp; Discovery — Active
              </span>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p
                    className="text-base font-semibold text-gray-900 mb-0.5"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Unlimited Search &amp; Discovery
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                    $49.99 / month · Renews monthly
                  </p>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors underline underline-offset-2"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Manage Subscription
                </a>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <label
                  className="flex gap-0.5 text-sm font-medium text-gray-700 mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Billing Email
                  <span className="text-teal-600">*</span>
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={billingEmail}
                    onChange={(e) => setBillingEmail(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  />
                  <button
                    onClick={handleSave}
                    className="shrink-0 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    {saved ? "Saved!" : "Save"}
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-gray-400" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Invoices and billing notifications are sent to this address.
                </p>
              </div>
            </div>

            {/* Invoice history placeholder */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <p
                className="text-sm font-semibold text-gray-900 mb-1"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Invoice History
              </p>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                Your first invoice will appear here after your subscription renews.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
