import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Circle, ChevronLeft, ChevronRight, Info, AlertTriangle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

export interface Question {
  id: string;
  question: string;
  tooltip: string;
}

export interface ReadinessCategory {
  id: string;
  title: string;
  questions: Question[];
}

interface ReadinessQuestionnaireProps {
  category: ReadinessCategory;
  answers: Record<string, 'yes' | 'no' | 'unsure' | null>;
  onAnswer: (questionId: string, answer: 'yes' | 'no' | 'unsure') => void;
  onComplete?: () => void;
}

export function ReadinessQuestionnaire({ 
  category, 
  answers, 
  onAnswer,
  onComplete 
}: ReadinessQuestionnaireProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const currentQuestion = category.questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];
  
  const progress = {
    current: currentQuestionIndex + 1,
    total: category.questions.length,
    percentage: ((currentQuestionIndex + 1) / category.questions.length) * 100
  };

  const answeredCount = category.questions.filter(q => answers[q.id]).length;
  const isComplete = answeredCount === category.questions.length;

  // Count No and Unsure answers
  const noCount = category.questions.filter(q => answers[q.id] === 'no').length;
  const unsureCount = category.questions.filter(q => answers[q.id] === 'unsure').length;
  const hasIssues = noCount > 0 || unsureCount > 0;

  const handleAnswer = (answer: 'yes' | 'no' | 'unsure') => {
    onAnswer(currentQuestion.id, answer);
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < category.questions.length - 1) {
        setDirection('right');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else if (onComplete) {
        onComplete();
      }
    }, 300);
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setDirection('left');
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestionIndex < category.questions.length - 1) {
      setDirection('right');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <div className="space-y-4">
      {/* Progress Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">
            Question {progress.current}
          </span>
          {isComplete && (
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
          )}
        </div>
        <span className="text-xs text-gray-500">
          {answeredCount}/{category.questions.length} answered
        </span>
      </div>

      {/* Dynamic Warning Banner for No/Unsure Answers */}
      <AnimatePresence>
        {hasIssues && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-amber-900 mb-1">
                    Needs Attention
                  </p>
                  <p className="text-xs text-amber-700">
                    {noCount > 0 && unsureCount > 0 && (
                      <>
                        <span className="font-semibold">{noCount}</span> {noCount === 1 ? 'question' : 'questions'} marked No, {' '}
                        <span className="font-semibold">{unsureCount}</span> {unsureCount === 1 ? 'question' : 'questions'} marked Unsure
                      </>
                    )}
                    {noCount > 0 && unsureCount === 0 && (
                      <>
                        <span className="font-semibold">{noCount}</span> {noCount === 1 ? 'question' : 'questions'} marked No
                      </>
                    )}
                    {noCount === 0 && unsureCount > 0 && (
                      <>
                        <span className="font-semibold">{unsureCount}</span> {unsureCount === 1 ? 'question' : 'questions'} marked Unsure
                      </>
                    )}
                  </p>
                  <p className="text-xs text-amber-600 mt-1">
                    Review and update to "Yes" to improve your readiness score
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question Card */}
      <div className="relative overflow-hidden min-h-[280px] bg-white rounded-lg border border-gray-200 p-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentQuestion.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="space-y-6"
          >
            {/* Question */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <h4 className="text-base font-medium text-gray-900 leading-relaxed flex-1">
                  {currentQuestion.question}
                </h4>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
                        <Info className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="left" 
                      className="max-w-xs bg-gray-900 text-white text-xs p-3 rounded-lg"
                      sideOffset={5}
                    >
                      <p className="leading-relaxed">{currentQuestion.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-2.5">
              <button
                onClick={() => handleAnswer('yes')}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left group ${
                  currentAnswer === 'yes'
                    ? 'border-teal-600 bg-teal-50 shadow-sm'
                    : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    currentAnswer === 'yes'
                      ? 'border-teal-600 bg-teal-600'
                      : 'border-gray-300 group-hover:border-teal-400'
                  }`}>
                    {currentAnswer === 'yes' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" fill="currentColor" />
                      </motion.div>
                    )}
                  </div>
                  <span className={`font-medium ${
                    currentAnswer === 'yes' ? 'text-teal-900' : 'text-gray-700'
                  }`}>
                    Yes
                  </span>
                </div>
              </button>

              <button
                onClick={() => handleAnswer('no')}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left group ${
                  currentAnswer === 'no'
                    ? 'border-amber-500 bg-amber-50 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    currentAnswer === 'no'
                      ? 'border-amber-500 bg-amber-500'
                      : 'border-gray-300 group-hover:border-gray-400'
                  }`}>
                    {currentAnswer === 'no' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" fill="currentColor" />
                      </motion.div>
                    )}
                  </div>
                  <span className={`font-medium ${
                    currentAnswer === 'no' ? 'text-amber-900' : 'text-gray-700'
                  }`}>
                    No
                  </span>
                </div>
              </button>

              <button
                onClick={() => handleAnswer('unsure')}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left group ${
                  currentAnswer === 'unsure'
                    ? 'border-amber-500 bg-amber-50 shadow-sm'
                    : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    currentAnswer === 'unsure'
                      ? 'border-amber-500 bg-amber-500'
                      : 'border-gray-300 group-hover:border-amber-400'
                  }`}>
                    {currentAnswer === 'unsure' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" fill="currentColor" />
                      </motion.div>
                    )}
                  </div>
                  <span className={`font-medium ${
                    currentAnswer === 'unsure' ? 'text-amber-900' : 'text-gray-700'
                  }`}>
                    Unsure
                  </span>
                </div>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          disabled={currentQuestionIndex === 0}
          className="text-gray-600 hover:text-gray-900 disabled:opacity-0"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>

        <div className="flex gap-1.5">
          {category.questions.map((q, idx) => {
            const answer = answers[q.id];
            const isActive = idx === currentQuestionIndex;
            const needsAttention = answer === 'no' || answer === 'unsure';
            
            return (
              <button
                key={q.id}
                onClick={() => {
                  setDirection(idx > currentQuestionIndex ? 'right' : 'left');
                  setCurrentQuestionIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-teal-600 w-6'
                    : answer === 'yes'
                    ? 'bg-teal-300'
                    : needsAttention
                    ? 'bg-amber-400'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to question ${idx + 1}`}
              />
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          disabled={currentQuestionIndex === category.questions.length - 1}
          className="text-gray-600 hover:text-gray-900 disabled:opacity-0"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}