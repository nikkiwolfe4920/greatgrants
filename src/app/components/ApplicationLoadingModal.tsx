import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  FileText,
  Building2,
  Rocket,
  Zap,
  Target,
  CheckCircle2,
  Loader2,
  Clock,
  ArrowRight
} from "lucide-react";

interface ApplicationLoadingModalProps {
  isOpen: boolean;
  grantTitle: string;
  grantId: string;
}

interface LoadingStep {
  id: number;
  message: string;
  submessage: string;
  icon: any;
  duration: number;
}

const loadingSteps: LoadingStep[] = [
  {
    id: 1,
    message: "Analyzing grant opportunity",
    submessage: "Matching your organization with the perfect grant",
    icon: Target,
    duration: 8000,
  },
  {
    id: 2,
    message: "Reading your profile",
    submessage: "Combing through your organization's profile",
    icon: Building2,
    duration: 8000,
  },
  {
    id: 3,
    message: "Understanding requirements",
    submessage: "Analyzing grant requirements and eligibility criteria",
    icon: Sparkles,
    duration: 8000,
  },
  {
    id: 4,
    message: "Drafting application",
    submessage: "Creating your personalized grant application",
    icon: FileText,
    duration: 8000,
  },
  {
    id: 5,
    message: "Finalizing details",
    submessage: "Jump-starting your funding journey",
    icon: Rocket,
    duration: 8000,
  }
];

export function ApplicationLoadingModal({ 
  isOpen, 
  grantTitle,
  grantId 
}: ApplicationLoadingModalProps) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Reset state when modal opens
    setCurrentStep(0);
    setProgress(0);
    setElapsedTime(0);
    setHasRedirected(false);
    setIsRedirecting(false);

    // Timer for elapsed time
    const timeInterval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);

    // Progress animation - smooth and continuous
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) return 95;
        // Slower progress as we get closer to end
        const increment = prev < 30 ? 1.2 : prev < 60 ? 0.6 : prev < 80 ? 0.3 : 0.15;
        return Math.min(prev + increment, 95);
      });
    }, 100);

    // Step progression
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 8000);

    // Redirect after 30 seconds
    const redirectTimeout = setTimeout(() => {
      if (!hasRedirected) {
        setIsRedirecting(true);
        setHasRedirected(true);
        // Small delay for animation
        setTimeout(() => {
          navigate("/applications?newApplication=pending&grantId=" + grantId);
        }, 1000);
      }
    }, 30000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(redirectTimeout);
    };
  }, [isOpen, navigate, hasRedirected, grantId]);

  if (!isOpen) return null;

  const currentStepData = loadingSteps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Minimal Backdrop - Very clean */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40"
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-xl w-full mx-6"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            
            {/* Minimalist Icon Section */}
            <div className="pt-16 pb-8 px-8">
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ 
                    rotate: isRedirecting ? 0 : 360,
                    scale: isRedirecting ? [1, 1.1, 1] : 1
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: isRedirecting ? 0 : Infinity, ease: "linear" },
                    scale: { duration: 0.6, repeat: isRedirecting ? 2 : 0 }
                  }}
                  className="relative"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {isRedirecting ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <CheckCircle2 className="w-10 h-10 text-white" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="icon"
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 45 }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Pulsing ring effect */}
                  {!isRedirecting && (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500 to-purple-600"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500 to-purple-600"
                      />
                    </>
                  )}
                </motion.div>
              </div>

              {/* Status Text - Clean Typography */}
              <AnimatePresence mode="wait">
                {isRedirecting ? (
                  <motion.div
                    key="redirecting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center"
                  >
                    <h2 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
                      Taking you to your application
                    </h2>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Your application is being prepared in the background
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <h2 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
                      {currentStepData.message}
                    </h2>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {currentStepData.submessage}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Progress Section */}
            <div className="px-8 pb-8">
              {/* Minimal Progress Bar */}
              <div className="mb-6">
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isRedirecting ? "100%" : `${progress}%` }}
                    transition={{ duration: isRedirecting ? 0.8 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-teal-500 to-purple-600 rounded-full relative"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </motion.div>
                </div>
                
                {/* Progress percentage */}
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-400" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {Math.round(isRedirecting ? 100 : progress)}% complete
                  </span>
                  <span className="text-xs text-gray-400" style={{ fontFamily: 'Cabin, sans-serif' }}>
                    {elapsedTime}s
                  </span>
                </div>
              </div>

              {/* Step Dots - Minimal */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {loadingSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    animate={{
                      width: index === currentStep ? 24 : 6,
                      backgroundColor: index <= currentStep 
                        ? 'rgb(139 92 246)' // purple-500
                        : 'rgb(229 231 235)' // gray-200
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="h-1.5 rounded-full"
                  />
                ))}
              </div>

              {/* Grant Title Card - Minimal */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      Creating application for
                    </p>
                    <p className="text-sm font-medium text-gray-900 line-clamp-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      {grantTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Warning if taking too long - More subtle */}
              {elapsedTime > 20 && !isRedirecting && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl"
                >
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-amber-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        This is taking longer than usual
                      </p>
                      <p className="text-xs text-amber-700 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                        We'll redirect you shortly. Your application will continue processing in the background.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Insight - Minimal */}
            <div className="px-8 pb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="p-4 bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl border border-purple-100"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-purple-900 mb-1" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      AI-Powered Applications
                    </p>
                    <p className="text-xs text-purple-700/80 leading-relaxed" style={{ fontFamily: 'Cabin, sans-serif' }}>
                      We're analyzing 50+ data points to create your personalized application
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}