import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Building2, CheckCircle2, Sparkles, Globe, FileText, Zap, Clock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";

type OnboardingMethod = 'uei' | 'ein' | 'previous-grant' | 'website';

export function OnboardingPage1() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<OnboardingMethod | null>(null);
  const [ueiValue, setUeiValue] = useState("");
  const [einValue, setEinValue] = useState("");
  const [websiteValue, setWebsiteValue] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [ueiVerificationStatus, setUeiVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');
  const verificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUEIChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 12);
    setUeiValue(cleaned);
    setUeiVerificationStatus('idle');

    if (verificationTimeoutRef.current) {
      clearTimeout(verificationTimeoutRef.current);
    }

    if (cleaned.length === 12) {
      setUeiVerificationStatus('verifying');
      verificationTimeoutRef.current = setTimeout(() => {
        if (cleaned === '123456789012') {
          setUeiVerificationStatus('verified');
        } else {
          setUeiVerificationStatus('failed');
        }
      }, 1500);
    }
  };

  const handleEINChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 9);
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`;
    }
    setEinValue(formatted);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    navigate("/");
  };

  const canComplete = () => {
    if (selectedMethod === 'uei') return ueiVerificationStatus === 'verified';
    if (selectedMethod === 'ein') return einValue.length === 10;
    if (selectedMethod === 'previous-grant') return uploadedFile !== null;
    if (selectedMethod === 'website') return websiteValue.length > 0;
    return false;
  };

  const methods = [
    {
      id: 'uei' as OnboardingMethod,
      icon: Zap,
      iconColor: 'text-teal-600',
      iconBg: 'bg-teal-50',
      title: 'UEI Number',
      subtitle: 'Fastest & Most Complete',
      impact: 'Highest Impact',
      impactColor: 'bg-teal-600',
      setupTime: '30 seconds',
      description: 'Automatic profile setup with comprehensive organization data',
      benefits: [
        'Instant profile completion',
        'Pre-filled grant applications',
        'Accurate matching algorithms',
        'No manual data entry needed'
      ],
      badge: 'Recommended',
      badgeColor: 'bg-teal-600 text-white'
    },
    {
      id: 'ein' as OnboardingMethod,
      icon: Building2,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      title: 'EIN Number',
      subtitle: 'Quick & Reliable',
      impact: 'Good Impact',
      impactColor: 'bg-blue-500',
      setupTime: '2 minutes',
      description: 'Basic organization verification with some auto-fill',
      benefits: [
        'Organization verification',
        'Basic profile auto-fill',
        'Some manual input needed',
        'Standard matching accuracy'
      ],
      badge: null,
      badgeColor: ''
    },
    {
      id: 'previous-grant' as OnboardingMethod,
      icon: FileText,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50',
      title: 'Previous Grant',
      subtitle: 'Context-Specific',
      impact: 'Moderate Impact',
      impactColor: 'bg-purple-500',
      setupTime: '3 minutes',
      description: 'Upload a past grant for targeted setup',
      benefits: [
        'Similar grant recommendations',
        'Reusable content extraction',
        'Only helpful for similar programs',
        'Some manual setup required'
      ],
      badge: null,
      badgeColor: ''
    },
    {
      id: 'website' as OnboardingMethod,
      icon: Globe,
      iconColor: 'text-gray-600',
      iconBg: 'bg-gray-50',
      title: 'Website URL',
      subtitle: 'Manual Setup',
      impact: 'Basic Impact',
      impactColor: 'bg-gray-400',
      setupTime: '5-10 minutes',
      description: 'Start with your website and fill in details manually',
      benefits: [
        'Basic organization info',
        'Manual profile completion',
        'Most setup work required',
        'Lower matching accuracy'
      ],
      badge: null,
      badgeColor: ''
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-8 py-4">
        <img src={logoImg} alt="Great Grants" className="h-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          {/* Welcome Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Lustria, serif' }}>
              Welcome to Great Grants
            </h1>
            <p className="text-xl text-gray-600 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Choose how you'd like to set up your profile
            </p>
            <p className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
              The more information we have, the better we can match you with grants
            </p>
          </div>

          {/* Method Cards */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {methods.map((method) => {
              const Icon = method.icon;
              const isSelected = selectedMethod === method.id;

              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`relative p-6 rounded-2xl border-2 transition-all text-left ${
                    isSelected
                      ? 'border-teal-500 bg-teal-50 shadow-lg shadow-teal-100'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  {method.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${method.badgeColor}`}>
                        {method.badge}
                      </span>
                    </div>
                  )}

                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${method.iconBg} mb-4`}>
                    <Icon className={`w-6 h-6 ${method.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {method.subtitle}
                  </p>

                  {/* Impact Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`h-1.5 w-full rounded-full bg-gray-100`}>
                      <div className={`h-full rounded-full ${method.impactColor}`} style={{
                        width: method.id === 'uei' ? '100%' : method.id === 'ein' ? '70%' : method.id === 'previous-grant' ? '50%' : '30%'
                      }} />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 mb-3">{method.impact}</p>

                  {/* Setup Time */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{method.setupTime}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {method.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-1.5">
                    {method.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-teal-600' : 'text-gray-400'}`} />
                        <span className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Input Form based on selection */}
          {selectedMethod && (
            <div className="bg-white border-2 border-teal-500 rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Lustria, serif' }}>
                {selectedMethod === 'uei' && 'Enter Your UEI Number'}
                {selectedMethod === 'ein' && 'Enter Your EIN Number'}
                {selectedMethod === 'previous-grant' && 'Upload a Previous Grant Application'}
                {selectedMethod === 'website' && 'Enter Your Organization Website'}
              </h2>

              {selectedMethod === 'uei' && (
                <div className="max-w-md">
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    UEI Number
                  </label>
                  <input
                    type="text"
                    value={ueiValue}
                    onChange={(e) => handleUEIChange(e.target.value)}
                    placeholder="123456789012"
                    maxLength={12}
                    className={`w-full px-4 py-3 border-2 rounded-lg text-lg focus:outline-none transition-all ${
                      ueiVerificationStatus === 'verified'
                        ? 'border-green-500 bg-green-50'
                        : ueiVerificationStatus === 'failed'
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  />
                  {ueiVerificationStatus === 'verifying' && (
                    <p className="text-sm text-blue-600 mt-2 flex items-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      Verifying...
                    </p>
                  )}
                  {ueiVerificationStatus === 'verified' && (
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Verified! Organization data loaded.
                    </p>
                  )}
                  {ueiVerificationStatus === 'failed' && (
                    <p className="text-sm text-red-600 mt-2">
                      Unable to verify UEI. Please check the number and try again.
                    </p>
                  )}
                </div>
              )}

              {selectedMethod === 'ein' && (
                <div className="max-w-md">
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    EIN Number
                  </label>
                  <input
                    type="text"
                    value={einValue}
                    onChange={(e) => handleEINChange(e.target.value)}
                    placeholder="12-3456789"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-teal-500"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  />
                  <p className="text-xs text-gray-500 mt-2">Format: XX-XXXXXXX</p>
                </div>
              )}

              {selectedMethod === 'previous-grant' && (
                <div className="max-w-md">
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-6 py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all"
                  >
                    {uploadedFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <FileText className="w-5 h-5 text-teal-600" />
                        <span className="text-sm font-medium text-gray-900">{uploadedFile.name}</span>
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="text-center">
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Click to upload grant application</p>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX</p>
                      </div>
                    )}
                  </button>
                  {uploadedFile && (
                    <p className="text-sm text-green-600 mt-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Analyzing document for similar grant opportunities...
                    </p>
                  )}
                </div>
              )}

              {selectedMethod === 'website' && (
                <div className="max-w-md">
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Organization Website
                  </label>
                  <input
                    type="url"
                    value={websiteValue}
                    onChange={(e) => setWebsiteValue(e.target.value)}
                    placeholder="https://yourorganization.org"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-teal-500"
                    style={{ fontFamily: 'Cabin, sans-serif' }}
                  />
                  <p className="text-xs text-gray-500 mt-2">We'll extract basic information from your website</p>
                </div>
              )}
            </div>
          )}

          {/* Action Button */}
          {selectedMethod && (
            <div className="flex justify-center">
              <Button
                onClick={handleComplete}
                disabled={!canComplete()}
                className="px-8 py-6 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-xl disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: 'Cabin, sans-serif' }}
              >
                Complete Setup & Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
