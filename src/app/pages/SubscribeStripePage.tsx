import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "@/app/components/Logo";
import { ArrowLeft, Lock, Check } from "lucide-react";

export function SubscribeStripePage() {
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem("gg_subscribe_email") || "";

  const [email, setEmail] = useState(storedEmail);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [country, setCountry] = useState("United States");
  const [zip, setZip] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const isValid = email && cardNumber && expiry && cvc && nameOnCard && zip;

  const formatCardNumber = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + " / " + digits.slice(2);
    return digits;
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setIsProcessing(true);
    localStorage.setItem("gg_subscribe_email", email);
    setTimeout(() => {
      navigate("/subscribe/account");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Back
        </button>
      </header>

      <div className="flex flex-1 max-w-4xl mx-auto w-full gap-8 px-6 py-12">
        {/* Left: Order summary */}
        <div className="w-72 shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="mb-5 flex justify-center">
              <Logo />
            </div>
            <p
              className="text-base font-semibold text-gray-900 mb-1 text-center"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Subscribe to Great Grants
            </p>
            <p className="text-sm text-gray-500 mb-5 text-center" style={{ fontFamily: "Cabin, sans-serif" }}>
              Billed monthly
            </p>

            <div className="border-t border-gray-100 pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Unlimited Search &amp; Discovery
                  </p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                    Monthly subscription
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                  $49.99
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span style={{ fontFamily: "Cabin, sans-serif" }}>Subtotal</span>
                <span style={{ fontFamily: "Cabin, sans-serif" }}>$49.99</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span style={{ fontFamily: "Cabin, sans-serif" }}>Tax</span>
                <span style={{ fontFamily: "Cabin, sans-serif" }}>$0.00</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-gray-900 pt-1 border-t border-gray-100">
                <span style={{ fontFamily: "Cabin, sans-serif" }}>Total due today</span>
                <span style={{ fontFamily: "Cabin, sans-serif" }}>$49.99</span>
              </div>
            </div>

            {/* Features */}
            <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
              {["Unlimited grant searches", "Unlimited saved grants", "Unlimited seats"].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <Check size={13} className="text-teal-600 shrink-0" strokeWidth={2.5} />
                  <span className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Payment form */}
        <div className="flex-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-xl font-normal text-gray-900"
                style={{ fontFamily: "Lustria, serif" }}
              >
                Pay with card
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Lock size={12} />
                <span style={{ fontFamily: "Cabin, sans-serif" }}>Secured by Stripe</span>
              </div>
            </div>

            <form onSubmit={handlePay} className="space-y-4">
              {/* Email */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                />
              </div>

              {/* Card number */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Card number
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                />
              </div>

              {/* Expiry + CVC */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Expiration date
                  </label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    placeholder="MM / YY"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  >
                    Security code
                  </label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    placeholder="CVC"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                    style={{ fontFamily: "Cabin, sans-serif" }}
                  />
                </div>
              </div>

              {/* Name on card */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Name on card
                </label>
                <input
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  placeholder="Full name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                />
              </div>

              {/* Billing address */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600 bg-white"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  ZIP code
                </label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                  placeholder="12345"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                />
              </div>

              {/* Save info */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Save my info for faster checkout
                </span>
              </label>

              {/* Pay button */}
              <button
                type="submit"
                disabled={!isValid || isProcessing}
                className={`w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isValid && !isProcessing
                    ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                    : "bg-blue-300 cursor-not-allowed"
                }`}
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                {isProcessing ? "Processing…" : "Pay $49.99"}
              </button>

              <p className="text-xs text-center text-gray-400" style={{ fontFamily: "Cabin, sans-serif" }}>
                By confirming, you agree to our{" "}
                <a href="#" className="underline hover:text-gray-600">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
