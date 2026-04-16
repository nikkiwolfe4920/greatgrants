import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Building2, CheckCircle2, Sparkles, Globe, FileText, Zap, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";
import { motion, AnimatePresence } from "motion/react";

type OnboardingStep = 'choice' | 'input' | 'complete';
type OnboardingMethod = 'uei' | 'ein' | 'previous-grant' | 'website';

export function OnboardingPage2() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('choice');
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

  const handleMethodSelect = (method: OnboardingMethod) => {
    setSelectedMethod(method);
    setCurrentStep('input');
  };

  const handleComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    navigate("/");
  };

  const canContinue = () => {
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
      iconColor: 'text-white',
      iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600',
      title: 'I have a UEI Number',
      description: 'The fastest way to get started with full automation',
      setupTime: '30 seconds',
      automation: '95%',
      features: [
        'Instant profile completion',
        'Pre-filled applications',
        'Accurate grant matching',
        'Zero manual entry'
      ],
      recommended: true
    },
    {
      id: 'ein' as OnboardingMethod,
      icon: Building2,
      iconColor: 'text-white',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      title: 'I have an EIN Number',
      description: 'Quick setup with organization verification',
      setupTime: '2 minutes',
      automation: '70%',
      features: [
        'Organization verification',
        'Basic auto-fill',
        'Some manual input',
        'Good matching accuracy'
      ],
      recommended: false
    },
    {
      id: 'previous-grant' as OnboardingMethod,
      icon: FileText,
      iconColor: 'text-white',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      title: 'I have a Previous Grant',
      description: 'Best for similar program applications',
      setupTime: '3 minutes',
      automation: '50%',
      features: [
        'Similar grant recommendations',
        'Content extraction',
        'Program-specific setup',
        'Moderate automation'
      ],
      recommended: false
    },
    {
      id: 'website' as OnboardingMethod,
      icon: Globe,
      iconColor: 'text-white',
      iconBg: 'bg-gradient-to-br from-gray-500 to-gray-600',
      title: 'I only have a Website',
      description: 'Manual setup with basic information',
      setupTime: '5-10 minutes',
      automation: '30%',
      features: [
        'Basic info extraction',
        'Manual completion needed',
        'Most setup required',
        'Standard accuracy'
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm px-8 py-4">
        <img src={logoImg} alt="Great Grants" className="h-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            {currentStep === 'choice' && (
              <motion.div
                key="choice"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Welcome Section */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 mb-6 shadow-lg">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Lustria, serif' }}>
                    Let's Set Up Your Profile
                  </h1>
                  <p className="text-xl text-gray-600 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    What information do you have available?
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    Choose the option that best describes what you have right now
                  </p>
                </div>

                {/* Method Cards */}
                <div className="space-y-4 max-w-3xl mx-auto">
                  {methods.map((method) => {
                    const Icon = method.icon;

                    return (
                      <button
                        key={method.id}
                        onClick={() => handleMethodSelect(method.id)}
                        className="relative w-full p-6 rounded-2xl border-2 border-gray-200 bg-white hover:border-teal-500 hover:shadow-xl transition-all text-left group"
                      >
                        {method.recommended && (
                          <div className="absolute -top-3 right-6">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md">
                              ⭐ Best Choice
                            </span>
                          </div>
                        )}

                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${method.iconBg} flex items-center justify-center shadow-lg`}>
                            <Icon className={`w-8 h-8 ${method.iconColor}`} />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                  {method.title}
                                </h3>
                                <p className="text-sm text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                  {method.description}
                                </p>
                              </div>
                              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-teal-600 transition-colors" />
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-6 mt-4 mb-4">
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Setup Time</p>
                                <p className="text-sm font-semibold text-gray-900">{method.setupTime}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Automation</p>
                                <div className="flex items-center gap-2">
                                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                                      style={{ width: method.automation }}
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-gray-900">{method.automation}</span>
                                </div>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                              {method.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                                  <span className="text-xs text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 'input' && selectedMethod && (
              <motion.div
                key="input"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back Button */}
                <button
                  onClick={() => setCurrentStep('choice')}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-sm font-medium">Choose a different option</span>
                </button>

                {/* Input Section */}
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 mb-6">
                      {selectedMethod === 'uei' && <Zap className="w-8 h-8 text-white" />}
                      {selectedMethod === 'ein' && <Building2 className="w-8 h-8 text-white" />}
                      {selectedMethod === 'previous-grant' && <FileText className="w-8 h-8 text-white" />}
                      {selectedMethod === 'website' && <Globe className="w-8 h-8 text-white" />}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Lustria, serif' }}>
                      {selectedMethod === 'uei' && 'Enter Your UEI Number'}
                      {selectedMethod === 'ein' && 'Enter Your EIN Number'}
                      {selectedMethod === 'previous-grant' && 'Upload Your Previous Grant'}
                      {selectedMethod === 'website' && 'Enter Your Website'}
                    </h2>
                    <p className="text-gray-600" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {selectedMethod === 'uei' && "We'll automatically pull your organization details and set everything up"}
                      {selectedMethod === 'ein' && "We'll verify your organization and fill in basic information"}
                      {selectedMethod === 'previous-grant' && "We'll analyze your grant to find similar opportunities"}
                      {selectedMethod === 'website' && "We'll extract basic information from your site"}
                    </p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                    {selectedMethod === 'uei' && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          UEI Number (12 digits)
                        </label>
                        <input
                          type="text"
                          value={ueiValue}
                          onChange={(e) => handleUEIChange(e.target.value)}
                          placeholder="123456789012"
                          maxLength={12}
                          className={`w-full px-6 py-4 border-2 rounded-xl text-xl font-mono focus:outline-none transition-all ${
                            ueiVerificationStatus === 'verified'
                              ? 'border-green-500 bg-green-50'
                              : ueiVerificationStatus === 'failed'
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-300 focus:border-teal-500'
                          }`}
                        />
                        {ueiVerificationStatus === 'verifying' && (
                          <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                            <p className="text-sm text-blue-700 flex items-center gap-2">
                              <span className="inline-block w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                              Verifying your organization...
                            </p>
                          </div>
                        )}
                        {ueiVerificationStatus === 'verified' && (
                          <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                            <p className="text-sm text-green-700 flex items-center gap-2 font-semibold mb-2">
                              <CheckCircle2 className="w-5 h-5" />
                              Organization Verified!
                            </p>
                            <p className="text-xs text-green-600">
                              We've loaded your organization profile and you're ready to start finding grants.
                            </p>
                          </div>
                        )}
                        {ueiVerificationStatus === 'failed' && (
                          <p className="text-sm text-red-600 mt-3">
                            Unable to verify UEI. Please check the number and try again.
                          </p>
                        )}
                      </div>
                    )}

                    {selectedMethod === 'ein' && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          EIN Number (XX-XXXXXXX)
                        </label>
                        <input
                          type="text"
                          value={einValue}
                          onChange={(e) => handleEINChange(e.target.value)}
                          placeholder="12-3456789"
                          className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-xl font-mono focus:outline-none focus:border-teal-500"
                        />
                        <p className="text-xs text-gray-500 mt-3">
                          Your Employer Identification Number from the IRS
                        </p>
                      </div>
                    )}

                    {selectedMethod === 'previous-grant' && (
                      <div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          onChange={handleFileUpload}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full px-6 py-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all"
                        >
                          {uploadedFile ? (
                            <div className="flex items-center justify-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-green-600" />
                              </div>
                              <div className="text-left">
                                <p className="text-base font-semibold text-gray-900">{uploadedFile.name}</p>
                                <p className="text-sm text-green-600">File uploaded successfully</p>
                              </div>
                              <CheckCircle2 className="w-6 h-6 text-green-600 ml-auto" />
                            </div>
                          ) : (
                            <div className="text-center">
                              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                              <p className="text-base font-semibold text-gray-900 mb-1">Click to upload your grant application</p>
                              <p className="text-sm text-gray-500">PDF, DOC, or DOCX • Max 10MB</p>
                            </div>
                          )}
                        </button>
                        {uploadedFile && (
                          <div className="mt-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                            <p className="text-sm text-purple-700 flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              Analyzing your grant for similar opportunities...
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {selectedMethod === 'website' && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Cabin, sans-serif' }}>
                          Organization Website URL
                        </label>
                        <input
                          type="url"
                          value={websiteValue}
                          onChange={(e) => setWebsiteValue(e.target.value)}
                          placeholder="https://yourorganization.org"
                          className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-xl focus:outline-none focus:border-teal-500"
                        />
                        <p className="text-xs text-gray-500 mt-3">
                          We'll extract basic information about your organization from your website
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={handleComplete}
                      disabled={!canContinue()}
                      className="px-10 py-6 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-xl disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
                      style={{ fontFamily: 'Cabin, sans-serif' }}
                    >
                      Complete Setup & Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
