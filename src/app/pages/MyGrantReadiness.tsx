import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  ExternalLink,
  TrendingUp,
  Target,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { ReadinessQuestionnaire, type ReadinessCategory } from "@/app/components/ReadinessQuestionnaire";
import { useReadinessScore } from "@/app/contexts/ReadinessScoreContext";

const readinessCategories: ReadinessCategory[] = [
  {
    id: 'financial',
    title: 'Financial Readiness',
    questions: [
      { 
        id: 'fin_1', 
        question: 'Do you have a documented financial management system?',
        tooltip: 'This includes policies, procedures, and controls for managing organizational finances.'
      },
      { 
        id: 'fin_2', 
        question: 'Can you produce financial statements (balance sheet, income statement) within 30 days?',
        tooltip: 'Funders need timely financial reporting to assess organizational health and compliance.'
      },
      { 
        id: 'fin_3', 
        question: 'Do you have a dedicated accounting system or software (e.g., QuickBooks, Sage)?',
        tooltip: 'Professional accounting software ensures accurate tracking and reporting of financial transactions.'
      },
      { 
        id: 'fin_4', 
        question: 'Are your financial records audited annually by an independent auditor?',
        tooltip: 'Annual audits demonstrate financial accountability and are often required for larger grants.'
      },
      { 
        id: 'fin_5', 
        question: 'Do you have documented procurement policies and procedures?',
        tooltip: 'Clear procurement policies ensure transparent and compliant purchasing processes.'
      },
      { 
        id: 'fin_6', 
        question: 'Can you track expenses by program or grant separately?',
        tooltip: 'Program-specific expense tracking is essential for grant reporting and compliance.'
      },
      { 
        id: 'fin_7', 
        question: 'Do you have established internal controls to prevent fraud and misuse?',
        tooltip: 'Internal controls protect organizational assets and ensure proper use of grant funds.'
      },
      { 
        id: 'fin_8', 
        question: 'Is there a process for regular budget vs. actual reporting?',
        tooltip: 'Regular budget monitoring helps identify variances and ensures fiscal responsibility.'
      },
      { 
        id: 'fin_9', 
        question: 'Do you have a documented indirect cost rate or plan to develop one?',
        tooltip: 'An approved indirect cost rate allows recovery of administrative and overhead costs.'
      },
      { 
        id: 'fin_10', 
        question: 'Can you demonstrate financial sustainability beyond grant funding?',
        tooltip: 'Diverse revenue streams indicate organizational stability and long-term viability.'
      }
    ]
  },
  {
    id: 'programmatic',
    title: 'Programmatic Readiness',
    questions: [
      { 
        id: 'prog_1', 
        question: 'Do you have documented program models or logic models?',
        tooltip: 'Logic models show the relationship between program activities and intended outcomes.'
      },
      { 
        id: 'prog_2', 
        question: 'Can you provide evidence of past program success or outcomes?',
        tooltip: 'Evidence of past success demonstrates capability and increases funder confidence.'
      },
      { 
        id: 'prog_3', 
        question: 'Do you collect participant data systematically?',
        tooltip: 'Systematic data collection enables effective program evaluation and reporting.'
      },
      { 
        id: 'prog_4', 
        question: 'Do you have a system for tracking program outputs (e.g., participants served, services delivered)?',
        tooltip: 'Output tracking demonstrates program reach and activity levels.'
      },
      { 
        id: 'prog_5', 
        question: 'Do you have a system for tracking program outcomes (e.g., behavior change, impact)?',
        tooltip: 'Outcome measurement shows the actual impact and effectiveness of your programs.'
      },
      { 
        id: 'prog_6', 
        question: 'Do you conduct regular program evaluations?',
        tooltip: 'Regular evaluations help improve program quality and demonstrate accountability.'
      },
      { 
        id: 'prog_7', 
        question: 'Do you have documented partnerships or MOUs with key stakeholders?',
        tooltip: 'Formal partnerships demonstrate collaboration and community support for your work.'
      },
      { 
        id: 'prog_8', 
        question: 'Is your staff trained in evidence-based practices relevant to your programs?',
        tooltip: 'Trained staff using proven methods increases program effectiveness and credibility.'
      },
      { 
        id: 'prog_9', 
        question: 'Do you have a continuous quality improvement process?',
        tooltip: 'CQI processes show commitment to ongoing learning and program enhancement.'
      },
      { 
        id: 'prog_10', 
        question: 'Can you demonstrate cultural competency in your program delivery?',
        tooltip: 'Cultural competency ensures programs are accessible and effective for diverse populations.'
      }
    ]
  },
  {
    id: 'policy',
    title: 'Policy Documentation & Compliance',
    questions: [
      { 
        id: 'pol_1', 
        question: 'Do you have a board of directors or governing body?',
        tooltip: 'A governing body provides oversight and demonstrates organizational legitimacy.'
      },
      { 
        id: 'pol_2', 
        question: 'Do you have documented HR policies (hiring, conduct, termination)?',
        tooltip: 'HR policies ensure fair employment practices and legal compliance.'
      },
      { 
        id: 'pol_3', 
        question: 'Do you have a conflict of interest policy?',
        tooltip: 'This policy prevents conflicts and ensures transparent decision-making.'
      },
      { 
        id: 'pol_4', 
        question: 'Are you compliant with federal regulations (e.g., Equal Employment Opportunity)?',
        tooltip: 'Federal compliance is required for organizations receiving government funding.'
      },
      { 
        id: 'pol_5', 
        question: 'Do you have whistleblower protection policies?',
        tooltip: 'Whistleblower policies protect those who report misconduct and demonstrate transparency.'
      },
      { 
        id: 'pol_6', 
        question: 'Do you have a strategic plan (3-5 years)?',
        tooltip: 'Strategic planning shows organizational vision and direction for the future.'
      },
      { 
        id: 'pol_7', 
        question: 'Are board meeting minutes documented and accessible?',
        tooltip: 'Meeting documentation demonstrates governance accountability and transparency.'
      },
      { 
        id: 'pol_8', 
        question: 'Do you have documented risk management procedures?',
        tooltip: 'Risk management processes help identify and mitigate potential organizational threats.'
      },
      { 
        id: 'pol_9', 
        question: 'Do you comply with local, state, and federal reporting requirements?',
        tooltip: 'Compliance with reporting requirements demonstrates accountability to stakeholders.'
      },
      { 
        id: 'pol_10', 
        question: 'Do you have data privacy and protection policies (e.g., FERPA, HIPAA if applicable)?',
        tooltip: 'Data privacy policies protect sensitive information and ensure legal compliance.'
      }
    ]
  }
];

export function MyGrantReadiness() {
  const navigate = useNavigate();
  const { setScore, setRequiredItemsRemaining } = useReadinessScore();
  
  const [readinessAnswers, setReadinessAnswers] = useState<Record<string, 'yes' | 'no' | 'unsure' | null>>(() => {
    const saved = localStorage.getItem('readinessAnswers');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse readiness answers:', e);
      }
    }
    return {};
  });
  
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Save readiness answers to localStorage
  useEffect(() => {
    localStorage.setItem('readinessAnswers', JSON.stringify(readinessAnswers));
  }, [readinessAnswers]);

  const handleReadinessAnswer = (questionId: string, answer: 'yes' | 'no' | 'unsure') => {
    setReadinessAnswers(prev => {
      const newAnswers = { ...prev };
      if (newAnswers[questionId] === answer) {
        newAnswers[questionId] = null;
      } else {
        newAnswers[questionId] = answer;
      }
      return newAnswers;
    });
  };

  // Get category completion
  const getCategoryCompletion = (categoryId: string) => {
    const category = readinessCategories.find(c => c.id === categoryId);
    if (!category) return { answered: 0, total: 0, percentage: 0, yesCount: 0, noCount: 0, unsureCount: 0, hasIssues: false };
    
    const answered = category.questions.filter(q => readinessAnswers[q.id]).length;
    const yesCount = category.questions.filter(q => readinessAnswers[q.id] === 'yes').length;
    const noCount = category.questions.filter(q => readinessAnswers[q.id] === 'no').length;
    const unsureCount = category.questions.filter(q => readinessAnswers[q.id] === 'unsure').length;
    const total = category.questions.length;
    const percentage = total > 0 ? (yesCount / total) * 100 : 0;
    const hasIssues = noCount > 0 || unsureCount > 0;
    
    return { answered, total, percentage, yesCount, noCount, unsureCount, hasIssues };
  };

  // Readiness Scoring System (0-4 scale)
  const getAnswerScore = (answer: 'yes' | 'no' | 'unsure' | null): number => {
    if (answer === 'yes') return 4;
    if (answer === 'unsure') return 2;
    if (answer === 'no') return 0;
    return 0;
  };

  // Section weights
  const sectionWeights: Record<string, number> = {
    financial: 35,
    programmatic: 35,
    policy: 30,
  };

  // Calculate category readiness score (0-100% for that category)
  const getCategoryReadinessScore = (categoryId: string) => {
    const category = readinessCategories.find(c => c.id === categoryId);
    if (!category) return 0;

    const totalQuestions = category.questions.length;
    if (totalQuestions === 0) return 0;

    let totalScore = 0;
    category.questions.forEach(q => {
      const answer = readinessAnswers[q.id];
      const score = getAnswerScore(answer);
      totalScore += (score / 4) * 100;
    });

    return totalScore / totalQuestions;
  };

  // Calculate overall readiness score (weighted across all categories)
  const getOverallReadinessScore = () => {
    let totalScore = 0;
    readinessCategories.forEach(category => {
      const categoryScore = getCategoryReadinessScore(category.id);
      const weight = sectionWeights[category.id] / 100;
      totalScore += categoryScore * weight;
    });
    return Math.round(totalScore);
  };

  // Get readiness level and color
  const getReadinessLevel = (score: number) => {
    if (score >= 90) return { level: 'Ready', color: 'teal', description: 'Fully compliant and strategically aligned with federal standards. Low-risk for funding.' };
    if (score >= 75) return { level: 'Conditionally Ready', color: 'blue', description: 'Capable with moderate oversight; some improvements needed.' };
    if (score >= 65) return { level: 'Developing', color: 'amber', description: 'Foundational systems exist but significant gaps remain. Recommendation for consulting.' };
    return { level: 'Not Ready', color: 'red', description: 'Insufficient readiness; requires foundational capacity building.' };
  };

  const overallReadinessScore = getOverallReadinessScore();
  const readinessLevel = getReadinessLevel(overallReadinessScore);

  // Update global readiness score context
  useEffect(() => {
    setScore(overallReadinessScore);
  }, [overallReadinessScore, setScore]);

  // Calculate required items remaining
  useEffect(() => {
    const totalQuestions = readinessCategories.reduce((sum, cat) => sum + cat.questions.length, 0);
    const answeredQuestions = Object.values(readinessAnswers).filter(a => a !== null).length;
    setRequiredItemsRemaining(totalQuestions - answeredQuestions);
  }, [readinessAnswers, setRequiredItemsRemaining]);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-3">
          <Target 
            className="w-8 h-8" 
            strokeWidth={1.5}
          />
        </div>
        <h1 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}>
          My Grant Readiness
        </h1>
        <p className="text-gray-600 text-sm">
          Complete assessments to improve your grant readiness and increase funding success
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Readiness Score */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            {/* Overall Readiness Score Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Overall Readiness</h2>
                <p className="text-xs text-gray-500">Based on assessments completed</p>
              </div>

              {/* Circular Progress */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke={
                        readinessLevel.color === 'teal' ? '#0D9488' :
                        readinessLevel.color === 'blue' ? '#3B82F6' :
                        readinessLevel.color === 'amber' ? '#F59E0B' :
                        '#EF4444'
                      }
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(overallReadinessScore / 100) * 439.8} 439.8`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {overallReadinessScore}%
                    </span>
                    <span className={`text-sm font-bold mt-1 ${
                      readinessLevel.color === 'teal' ? 'text-teal-700' :
                      readinessLevel.color === 'blue' ? 'text-blue-700' :
                      readinessLevel.color === 'amber' ? 'text-amber-700' :
                      'text-red-700'
                    }`}>
                      {readinessLevel.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className={`px-4 py-3 rounded-lg mb-4 ${
                readinessLevel.color === 'teal' ? 'bg-teal-50' :
                readinessLevel.color === 'blue' ? 'bg-blue-50' :
                readinessLevel.color === 'amber' ? 'bg-amber-50' :
                'bg-red-50'
              }`}>
                <p className={`text-sm leading-relaxed ${
                  readinessLevel.color === 'teal' ? 'text-teal-800' :
                  readinessLevel.color === 'blue' ? 'text-blue-800' :
                  readinessLevel.color === 'amber' ? 'text-amber-800' :
                  'text-red-800'
                }`}>
                  {readinessLevel.description}
                </p>
              </div>

              {/* Category Breakdown */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900">Category Breakdown</h3>
                {readinessCategories.map(category => {
                  const categoryScore = Math.round(getCategoryReadinessScore(category.id));
                  const completion = getCategoryCompletion(category.id);
                  const scoreColor = categoryScore >= 90 ? 'teal' : 
                                    categoryScore >= 75 ? 'blue' : 
                                    categoryScore >= 65 ? 'amber' : 'red';
                  
                  return (
                    <div key={category.id} className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-700 font-medium">{category.title}</span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`font-bold ${
                            scoreColor === 'teal' ? 'text-teal-700' :
                            scoreColor === 'blue' ? 'text-blue-700' :
                            scoreColor === 'amber' ? 'text-amber-700' :
                            'text-red-700'
                          }`}>
                            {categoryScore}%
                          </span>
                          <span className="text-gray-400">
                            ({completion.answered}/{completion.total})
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            scoreColor === 'teal' ? 'bg-teal-600' :
                            scoreColor === 'blue' ? 'bg-blue-500' :
                            scoreColor === 'amber' ? 'bg-amber-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${categoryScore}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Helpful Resources */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-600" />
                Helpful Resources
              </h3>
              
              <div className="space-y-3">
                <a
                  href="https://www.grants.gov/web/grants/learn-grants/grant-readiness.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-gray-900">Grant Readiness Guide</h4>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-teal-600" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Official guide from Grants.gov
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.councilofnonprofits.org/tools-resources/grant-readiness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-gray-900">Capacity Building Tips</h4>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-teal-600" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Strengthen your organization
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Assessments */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
              Readiness Assessments
            </h2>
            <p className="text-sm text-gray-600">
              ~10 minutes to complete • Answer questions to calculate your grant readiness score
            </p>
          </div>

          <div className="space-y-4">
            {readinessCategories.map((category) => {
              const completion = getCategoryCompletion(category.id);
              const categoryScore = Math.round(getCategoryReadinessScore(category.id));
              const isExpanded = expandedCategory === category.id;
              const isComplete = completion.percentage === 100;
              const needsAttention = completion.hasIssues && completion.answered === completion.total;
              
              const scoreColor = categoryScore >= 90 ? 'teal' : 
                                categoryScore >= 75 ? 'blue' : 
                                categoryScore >= 65 ? 'amber' : 'red';
              
              return (
                <div 
                  key={category.id} 
                  className={`rounded-lg border overflow-hidden transition-all ${
                    needsAttention 
                      ? 'bg-amber-50 border-amber-300' 
                      : isComplete 
                      ? 'bg-teal-50 border-teal-200' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                    className="w-full p-6 text-left hover:opacity-90 transition-opacity"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h4 className="text-base font-semibold text-gray-900">{category.title}</h4>
                        {completion.answered === completion.total && (
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            scoreColor === 'teal' ? 'bg-teal-100 text-teal-800' :
                            scoreColor === 'blue' ? 'bg-blue-100 text-blue-800' :
                            scoreColor === 'amber' ? 'bg-amber-100 text-amber-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {categoryScore}%
                          </span>
                        )}
                      </div>
                      {isComplete ? (
                        <CheckCircle2 className="w-5 h-5 text-teal-600" />
                      ) : needsAttention ? (
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                      ) : null}
                    </div>
                    
                    {needsAttention && (
                      <p className="text-xs text-amber-700 mb-3 flex items-center gap-1 font-medium">
                        <span>
                          {completion.noCount > 0 && completion.unsureCount > 0
                            ? `${completion.noCount} No, ${completion.unsureCount} Unsure`
                            : completion.noCount > 0
                            ? `${completion.noCount} ${completion.noCount === 1 ? 'answer' : 'answers'} marked No`
                            : `${completion.unsureCount} ${completion.unsureCount === 1 ? 'answer' : 'answers'} marked Unsure`}
                        </span>
                        · Review to improve readiness
                      </p>
                    )}
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            scoreColor === 'teal' ? 'bg-teal-600' :
                            scoreColor === 'blue' ? 'bg-blue-500' :
                            scoreColor === 'amber' ? 'bg-amber-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${categoryScore}%` }}
                        />
                      </div>
                      <span className={`text-sm font-semibold ${
                        scoreColor === 'teal' ? 'text-teal-700' :
                        scoreColor === 'blue' ? 'text-blue-700' :
                        scoreColor === 'amber' ? 'text-amber-700' :
                        'text-red-700'
                      }`}>
                        {completion.answered}/{completion.total} answered
                      </span>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-6 bg-white">
                          <ReadinessQuestionnaire
                            category={category}
                            answers={readinessAnswers}
                            onAnswer={handleReadinessAnswer}
                            onComplete={() => {
                              // Optional: Auto-collapse when complete
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
