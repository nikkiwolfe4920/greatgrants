import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import logoMark from "figma:asset/13e1a83af014d5259eb6cef7298fecb2bcd3b937.png";

export function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    // Mock Google sign in - in production this would use OAuth
    console.log("Google sign in");

    // Check if user has completed onboarding
    const onboardingComplete = localStorage.getItem('onboardingComplete');

    if (onboardingComplete === 'true') {
      // Existing user - go to dashboard
      navigate("/");
    } else {
      // New user - go to onboarding
      navigate("/onboarding");
    }
  };

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock email sign in - in production this would authenticate
    console.log("Email sign in", { email, password });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[440px]">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={logoMark} alt="Great Grants" className="h-8 w-auto" />
          <span className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Great Grants
          </span>
        </div>

        {/* Heading */}
        <h1 
          className="text-2xl text-gray-900 mb-6 text-center" 
          style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}
        >
          Log in to your account
        </h1>

        {/* Google Sign In Button */}
        <Button
          onClick={handleGoogleSignIn}
          variant="outline"
          className="w-full gap-2 mb-6 bg-white hover:bg-gray-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-sm font-medium text-gray-700">Continue with Google</span>
        </Button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-1.5">
            <Label htmlFor="email">
              Email Address<span className="text-teal-600">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="focus-visible:border-teal-600"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <Label htmlFor="password">
              Password<span className="text-teal-600">*</span>
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="focus-visible:border-teal-600"
            />
          </div>

          {/* Continue Button */}
          <Button
            type="submit"
            disabled={!email || !password}
            className={`w-full text-sm font-medium transition-colors ${
              email && password
                ? "bg-teal-600 hover:bg-teal-700 text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
            }`}
          >
            Continue with Email
          </Button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-right mt-4">
          <button className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
            Forgot password?
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <button 
            onClick={() => console.log("Navigate to sign up")}
            className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}