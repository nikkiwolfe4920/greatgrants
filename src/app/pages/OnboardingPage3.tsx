import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Building2, CheckCircle2, Sparkles, Globe, FileText, Zap, ArrowRight, X, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import logoImg from "figma:asset/80f16235e4f02631f57c6cf6e509cba581c33eb4.png";

type OnboardingMethod = 'uei' | 'ein' | 'previous-grant' | 'website';

export function OnboardingPage3() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<OnboardingMethod | null>(null);
  const [showComparison, setShowComparison] = useState(true);
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

  const comparisonFeatures = [
    { name: 'Profile Auto-Fill', uei: 'full', ein: 'partial', grant: 'none', website: 'none' },
    { name: 'Grant Matching Accuracy', uei: 'highest', ein: 'high', grant: 'moderate', website: 'basic' },
    { name: 'Application Pre-Fill', uei: 'full', ein: 'partial', grant: 'partial', website: 'none' },
    { name: 'Similar Grant Discovery', uei: 'full', ein: 'full', grant: 'full', website: 'basic' },
    { name: 'Manual Data Entry', uei: 'none', ein: 'some', grant: 'moderate', website: 'extensive' },
    { name: 'Setup Time', uei: '30 sec', ein: '2 min', grant: '3 min', website: '5-10 min' },
  ];

  const getFeatureIcon = (value: string) => {
    if (value === 'full' || value === 'highest' || value === 'none' && value.includes('Manual')) {
      return <Check className="w-5 h-5 text-green-600" />;
    } else if (value === 'partial' || value === 'high' || value === 'some') {
      return <Check className="w-5 h-5 text-blue-600" />;
    } else if (value === 'moderate' || value === 'basic') {
      return <Check className="w-5 h-5 text-gray-400" />;
    } else if (value === 'extensive') {
      return <X className="w-5 h-5 text-red-500" />;
    }
    return null;
  };

  const getFeatureText = (value: string) => {
    const isTimeField = value.includes('sec') || value.includes('min');
    const isManualEntry = value === 'none' || value === 'some' || value === 'moderate' || value === 'extensive';

    if (value === 'full') return 'Complete';
    if (value === 'partial') return 'Partial';
    if (value === 'highest') return 'Highest';
    if (value === 'high') return 'High';
    if (value === 'moderate') return 'Moderate';
    if (value === 'basic') return 'Basic';
    if (value === 'none' && !isManualEntry) return 'None';
    if (isTimeField) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const getFeatureColor = (value: string, isManualEntry: boolean) => {
    if (isManualEntry) {
      if (value === 'none') return 'text-green-700 font-semibold';
      if (value === 'some') return 'text-blue-700 font-medium';
      if (value === 'moderate') return 'text-gray-700';
      if (value === 'extensive') return 'text-red-700 font-semibold';
    }
    if (value === 'full' || value === 'highest') return 'text-green-700 font-semibold';
    if (value === 'partial' || value === 'high') return 'text-blue-700 font-medium';
    if (value === 'moderate' || value === 'basic') return 'text-gray-600';
    if (value === 'none') return 'text-gray-400';
    return 'text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-8 py-4">
        <img src={logoImg} alt="Great Grants" className="h-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Lustria, serif' }}>
              Choose Your Setup Method
            </h1>
            <p className="text-xl text-gray-600 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Compare what each option provides and choose what works best for you
            </p>
          </div>

          {showComparison && !selectedMethod && (
            <div className="mb-12">
              {/* Comparison Table */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
                {/* Header Row */}
                <div className="grid grid-cols-5 border-b-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                  <div className="p-6">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Features</p>
                  </div>
                  <div className="p-6 border-l border-gray-200 bg-gradient-to-br from-teal-50 to-teal-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-teal-600" />
                      <p className="font-bold text-gray-900">UEI Number</p>
                    </div>
                    <span className="inline-block px-2 py-0.5 bg-teal-600 text-white text-xs font-semibold rounded-full">
                      Recommended
                    </span>
                  </div>
                  <div className="p-6 border-l border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      <p className="font-bold text-gray-900">EIN Number</p>
                    </div>
                  </div>
                  <div className="p-6 border-l border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      <p className="font-bold text-gray-900">Previous Grant</p>
                    </div>
                  </div>
                  <div className="p-6 border-l border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-gray-600" />
                      <p className="font-bold text-gray-900">Website URL</p>
                    </div>
                  </div>
                </div>

                {/* Feature Rows */}
                {comparisonFeatures.map((feature, idx) => {
                  const isManualEntry = feature.name === 'Manual Data Entry';

                  return (
                    <div key={idx} className={`grid grid-cols-5 ${idx !== comparisonFeatures.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <div className="p-6 flex items-center">
                        <p className="text-sm font-medium text-gray-900">{feature.name}</p>
                      </div>
                      <div className="p-6 border-l border-gray-200 bg-teal-50/30">
                        <div className="flex items-center gap-3">
                          {getFeatureIcon(feature.uei)}
                          <span className={`text-sm ${getFeatureColor(feature.uei, isManualEntry)}`}>
                            {getFeatureText(feature.uei)}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 border-l border-gray-200">
                        <div className="flex items-center gap-3">
                          {getFeatureIcon(feature.ein)}
                          <span className={`text-sm ${getFeatureColor(feature.ein, isManualEntry)}`}>
                            {getFeatureText(feature.ein)}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 border-l border-gray-200">
                        <div className="flex items-center gap-3">
                          {getFeatureIcon(feature.grant)}
                          <span className={`text-sm ${getFeatureColor(feature.grant, isManualEntry)}`}>
                            {getFeatureText(feature.grant)}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 border-l border-gray-200">
                        <div className="flex items-center gap-3">
                          {getFeatureIcon(feature.website)}
                          <span className={`text-sm ${getFeatureColor(feature.website, isManualEntry)}`}>
                            {getFeatureText(feature.website)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Action Row */}
                <div className="grid grid-cols-5 bg-gray-50 border-t-2 border-gray-200">
                  <div className="p-6" />
                  <div className="p-6 border-l border-gray-200 bg-teal-50/50">
                    <Button
                      onClick={() => {
                        setSelectedMethod('uei');
                        setShowComparison(false);
                      }}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                    >
                      Choose UEI
                    </Button>
                  </div>
                  <div className="p-6 border-l border-gray-200">
                    <Button
                      onClick={() => {
                        setSelectedMethod('ein');
                        setShowComparison(false);
                      }}
                      variant="outline"
                      className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
                    >
                      Choose EIN
                    </Button>
                  </div>
                  <div className="p-6 border-l border-gray-200">
                    <Button
                      onClick={() => {
                        setSelectedMethod('previous-grant');
                        setShowComparison(false);
                      }}
                      variant="outline"
                      className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold"
                    >
                      Choose Grant
                    </Button>
                  </div>
                  <div className="p-6 border-l border-gray-200">
                    <Button
                      onClick={() => {
                        setSelectedMethod('website');
                        setShowComparison(false);
                      }}
                      variant="outline"
                      className="w-full border-2 border-gray-600 text-gray-600 hover:bg-gray-50 font-semibold"
                    >
                      Choose Website
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Input Form */}
          {selectedMethod && (
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => {
                  setSelectedMethod(null);
                  setShowComparison(true);
                }}
                className="text-sm text-gray-600 hover:text-gray-900 mb-8 flex items-center gap-2"
              >
                ← Back to comparison
              </button>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 mb-4">
                    {selectedMethod === 'uei' && <Zap className="w-8 h-8 text-white" />}
                    {selectedMethod === 'ein' && <Building2 className="w-8 h-8 text-white" />}
                    {selectedMethod === 'previous-grant' && <FileText className="w-8 h-8 text-white" />}
                    {selectedMethod === 'website' && <Globe className="w-8 h-8 text-white" />}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
                    {selectedMethod === 'uei' && 'Enter Your UEI Number'}
                    {selectedMethod === 'ein' && 'Enter Your EIN Number'}
                    {selectedMethod === 'previous-grant' && 'Upload Your Grant'}
                    {selectedMethod === 'website' && 'Enter Your Website'}
                  </h2>
                </div>

                {selectedMethod === 'uei' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">UEI Number</label>
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">EIN Number</label>
                    <input
                      type="text"
                      value={einValue}
                      onChange={(e) => handleEINChange(e.target.value)}
                      placeholder="12-3456789"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-teal-500"
                    />
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
                          <p className="text-sm font-medium text-gray-700">Click to upload</p>
                        </div>
                      )}
                    </button>
                  </div>
                )}

                {selectedMethod === 'website' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                    <input
                      type="url"
                      value={websiteValue}
                      onChange={(e) => setWebsiteValue(e.target.value)}
                      placeholder="https://yourorganization.org"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-teal-500"
                    />
                  </div>
                )}

                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={handleComplete}
                    disabled={!canComplete()}
                    className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-xl disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Complete Setup & Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
