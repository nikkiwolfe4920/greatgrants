import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Logo } from "@/app/components/Logo";
import {
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Upload,
  X,
  FileText,
  Lightbulb,
  HelpCircle
} from "lucide-react";

interface OnboardingData {
  ein: string;
  uei: string;
  website: string;
  previousApplications: File[];
}

export function OnboardingPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<OnboardingData>({
    ein: "",
    uei: "",
    website: "",
    previousApplications: []
  });

  // UEI Verification state
  const [ueiVerificationStatus, setUeiVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');
  const [verifiedUEI, setVerifiedUEI] = useState<string>('');
  const verificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup verification timeout on unmount
  useEffect(() => {
    return () => {
      if (verificationTimeoutRef.current) {
        clearTimeout(verificationTimeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = (field: keyof OnboardingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Handle UEI verification
    if (field === 'uei') {
      // Clear any existing verification timeout
      if (verificationTimeoutRef.current) {
        clearTimeout(verificationTimeoutRef.current);
      }

      // Reset verification status when user modifies the UEI
      if (value !== verifiedUEI) {
        setUeiVerificationStatus('idle');
      }

      // Only trigger verification if the value is exactly 12 digits
      if (value.length === 12 && /^\d{12}$/.test(value)) {
        setUeiVerificationStatus('verifying');

        // Simulate API call with delay
        verificationTimeoutRef.current = setTimeout(() => {
          if (value === '123456789012') {
            setUeiVerificationStatus('verified');
            setVerifiedUEI(value);
          } else {
            setUeiVerificationStatus('failed');
            setVerifiedUEI('');
          }
        }, 1500); // 1.5 second delay for realistic verification
      } else {
        // Reset if not 12 digits
        setUeiVerificationStatus('idle');
        setVerifiedUEI('');
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).filter(file => {
        const sizeInMB = file.size / (1024 * 1024);
        return sizeInMB <= 10 && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type);
      });

      setFormData(prev => ({
        ...prev,
        previousApplications: [...prev.previousApplications, ...newFiles]
      }));
    }
  };

  const handleRemoveFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      previousApplications: prev.previousApplications.filter((_, i) => i !== index)
    }));
  };

  const handleBrowseFiles = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  const isFormValid = () => {
    // All fields are optional - user can complete onboarding with any amount of data
    return true;
  };

  const handleCompleteSetup = () => {
    // Store onboarding data in localStorage
    localStorage.setItem('onboardingComplete', 'true');

    // Only store fields that have values
    if (formData.ein) {
      localStorage.setItem('organizationEIN', formData.ein);
    }
    if (formData.uei) {
      localStorage.setItem('organizationUEI', formData.uei);
    }
    if (formData.website) {
      localStorage.setItem('organizationWebsite', formData.website);
    }

    // Navigate to dashboard
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Logo />
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span>Need Help?</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Setup Progress
          </div>
          <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Step 1 of 1
          </div>
        </div>
        <div className="h-1 bg-gray-200">
          <div className="h-full bg-gradient-to-r from-teal-600 to-teal-500" style={{ width: '100%' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Welcome Message */}
          <div className="flex flex-col">
            <h1
              className="text-3xl text-gray-900 mb-4"
              style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}
            >
              Welcome to Great Grants
            </h1>
            <p className="text-gray-600 text-base mb-8 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Let's get you set up in just a few minutes. We'll need some basic information to help you start applying for grants immediately.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Quick Setup
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Complete your profile in under 5 minutes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    AI-Powered Assistance
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Our AI learns from your previous applications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Start Applying Today
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Begin your grant applications immediately
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Organization Information
            </h2>

            <div className="space-y-6">
              {/* EIN Field */}
              <div className="space-y-1.5">
                <Label htmlFor="ein">
                  Employer Identification Number (EIN)
                </Label>
                <Input
                  id="ein"
                  value={formData.ein}
                  onChange={(e) => handleInputChange('ein', e.target.value)}
                  placeholder="XX-XXXXXXX"
                  className="focus-visible:ring-2 focus-visible:ring-teal-500"
                />
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Your organization's federal tax identification number
                </p>
              </div>

              {/* UEI Field */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  {verifiedUEI ? (
                    <>
                      <div className="flex items-center gap-2 flex-1">
                        <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <Label htmlFor="uei">
                          Unique Entity Identifier (UEI)
                        </Label>
                      </div>
                      <p className="text-xs text-teal-600 font-medium">Verified: {verifiedUEI}</p>
                    </>
                  ) : (
                    <>
                      <Label htmlFor="uei">
                        Unique Entity Identifier (UEI)
                      </Label>
                      {ueiVerificationStatus === 'verifying' && (
                        <div className="flex items-center gap-1.5">
                          <Loader2 className="w-3 h-3 text-teal-600 animate-spin" />
                          <span className="text-xs text-teal-600">Verifying...</span>
                        </div>
                      )}
                      {ueiVerificationStatus === 'verified' && (
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-teal-600" />
                          <span className="text-xs text-teal-600 font-medium">Verified</span>
                        </div>
                      )}
                      {ueiVerificationStatus === 'failed' && (
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3 h-3 text-red-600" />
                          <span className="text-xs text-red-600 font-medium">Verification Failed</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <Input
                  id="uei"
                  value={formData.uei}
                  onChange={(e) => handleInputChange('uei', e.target.value)}
                  placeholder="Enter 12-digit UEI"
                  maxLength={12}
                  className={`focus-visible:ring-2 focus-visible:ring-teal-500 ${
                    ueiVerificationStatus === 'verified' ? 'border-teal-500 bg-teal-50' :
                    ueiVerificationStatus === 'failed' ? 'border-red-500 bg-red-50' : ''
                  }`}
                />
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Required for federal grant applications (formerly DUNS number)
                </p>

                {ueiVerificationStatus === 'failed' && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-red-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          UEI Verification Failed
                        </p>
                        <p className="text-xs text-red-700 leading-relaxed mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          The UEI you entered could not be verified. Please check the following:
                        </p>
                        <ul className="text-xs text-red-700 space-y-1 list-disc list-inside" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          <li>Double-check your UEI to ensure it's correct</li>
                          <li>Your UEI should be exactly 12 digits</li>
                          <li>Find your UEI in your SAM.gov account under "Entity Registration"</li>
                        </ul>
                        <div className="mt-3 pt-2 border-t border-red-200">
                          <p className="text-xs font-medium text-red-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                            Don't have a UEI?
                          </p>
                          <a
                            href="https://sam.gov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-red-700 underline hover:text-red-800"
                            style={{ fontFamily: 'Cabin, sans-serif' }}
                          >
                            Register at SAM.gov →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Website Field */}
              <div className="space-y-1.5">
                <Label htmlFor="website">
                  Organization Website
                </Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://www.yourorganization.org"
                  className="focus-visible:ring-2 focus-visible:ring-teal-500"
                />
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Your organization's official website URL
                </p>
              </div>

              {/* Previous Applications - Optional */}
              <div className="space-y-1.5">
                <Label htmlFor="previousApplications">
                  Previous Grant Applications <span className="text-gray-400">(Optional)</span>
                </Label>
                <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  Upload past applications to help our AI understand your writing style and improve suggestions
                </p>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-400 transition-colors">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Upload className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={handleBrowseFiles}
                        className="text-sm font-medium text-teal-600 hover:text-teal-700"
                        style={{ fontFamily: 'Cabin, sans-serif' }}
                      >
                        Click to upload
                      </button>
                      <span className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        {' '}or drag and drop
                      </span>
                    </div>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      PDF, DOC, DOCX up to 10MB each
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {/* Uploaded Files List */}
                {formData.previousApplications.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {formData.previousApplications.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <FileText className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 truncate" style={{ fontFamily: 'Cabin, sans-serif' }}>
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Security Notice */}
                <div className="flex items-start gap-2 mt-3 p-3 bg-gray-50 rounded-lg">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Your documents are encrypted and secure. We analyze them to provide better AI assistance but never share them with third parties.
                  </p>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="mt-6 p-4 bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Pro Tip
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Uploading previous grant applications helps our AI learn your organization's voice and priorities, resulting in better grant recommendations and writing assistance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Complete Setup Button */}
              <Button
                onClick={handleCompleteSetup}
                className="w-full text-sm font-medium transition-colors mt-6 bg-teal-600 hover:bg-teal-700 text-white"
              >
                Complete Setup & Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-center gap-1">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Your information is encrypted and secure
          </p>
        </div>
      </div>
    </div>
  );
}
