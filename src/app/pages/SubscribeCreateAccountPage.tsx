import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "@/app/components/Logo";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { ArrowLeft, ChevronDown } from "lucide-react";

interface CreateAccountFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  organizationName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

function FormField({
  id,
  label,
  required,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="flex gap-0.5 text-sm font-medium text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
        {label}
        {required && <span className="text-teal-600">*</span>}
      </Label>
      {children}
      {hint && (
        <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
          {hint}
        </p>
      )}
    </div>
  );
}

export function SubscribeCreateAccountPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CreateAccountFormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    organizationName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (field: keyof CreateAccountFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.email &&
    formData.password.length >= 8 &&
    formData.firstName &&
    formData.lastName &&
    formData.organizationName &&
    formData.streetAddress &&
    formData.city &&
    formData.state &&
    formData.zipCode;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    localStorage.setItem("gg_subscribe_email", formData.email);
    navigate("/subscribe/org");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-[400px]">
        {/* Back button */}
        <button
          onClick={() => navigate("/subscribe-entry")}
          className="flex items-center gap-1.5 mb-4 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <ArrowLeft size={18} strokeWidth={2} />
          Back
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        {/* Heading */}
        <h1
          className="text-4xl font-normal text-gray-900 text-center mb-6 leading-tight tracking-tight"
          style={{ fontFamily: "Lustria, serif", letterSpacing: "-0.72px" }}
        >
          Create your{"\n"}Organization Profile
        </h1>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-6" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField id="email" label="Email Address" required>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="focus-visible:border-teal-600"
            />
          </FormField>

          <FormField
            id="password"
            label="Password"
            required
            hint="Use 8 or more characters, with at least one number or special character."
          >
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              required
              minLength={8}
              className="focus-visible:border-teal-600"
            />
          </FormField>

          <FormField id="firstName" label="First name" required>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              required
              className="focus-visible:border-teal-600"
            />
          </FormField>

          <FormField id="lastName" label="Last name" required>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              required
              className="focus-visible:border-teal-600"
            />
          </FormField>

          <FormField id="organizationName" label="Organization Name" required>
            <Input
              id="organizationName"
              type="text"
              placeholder="My Organization"
              value={formData.organizationName}
              onChange={(e) => handleChange("organizationName", e.target.value)}
              required
              className="focus-visible:border-teal-600"
            />
          </FormField>

          {/* Address section label */}
          <p
            className="text-base font-medium text-gray-700 pt-2"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Organization Legal Address
          </p>

          <FormField id="streetAddress" label="Street Address" required>
            <Input
              id="streetAddress"
              type="text"
              placeholder="Enter street address"
              value={formData.streetAddress}
              onChange={(e) => handleChange("streetAddress", e.target.value)}
              required
              className="focus-visible:border-teal-600"
            />
          </FormField>

          <FormField id="city" label="City" required>
            <Input
              id="city"
              type="text"
              placeholder="Enter city"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              required
              className="focus-visible:border-teal-600"
            />
          </FormField>

          <FormField id="state" label="State" required>
            <div className="relative">
              <select
                id="state"
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                required
                className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-base shadow-[0px_1px_1px_rgba(10,13,18,0.05)] focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600 text-gray-900"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                <option value="" disabled>
                  Select state
                </option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </FormField>

          <FormField id="zipCode" label="Zip Code" required>
            <Input
              id="zipCode"
              type="text"
              placeholder="Enter zip code"
              value={formData.zipCode}
              onChange={(e) => handleChange("zipCode", e.target.value)}
              required
              className="focus-visible:border-teal-600"
            />
          </FormField>

          {/* Terms */}
          <p
            className="text-sm text-center text-gray-500 pt-2"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            By creating an account, you agree to our{" "}
            <a href="#" className="text-green-600 underline hover:text-green-700">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-green-600 underline hover:text-green-700">
              Privacy Policy
            </a>
            .
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isFormValid
                ? "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
