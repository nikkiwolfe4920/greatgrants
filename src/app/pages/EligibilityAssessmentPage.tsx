import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Clock, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";
import { Button } from "@/app/components/ui/button";
import { EligibilityWorkflowPanel } from "@/app/components/eligibility/EligibilityWorkflowPanel";

const GRANT_TITLE = "Advancing Global Health — Child Development, Care, and Protection Addendum";

const ELIGIBLE_ACTIVITIES = [
  "Strengthening national and sub-national child protection systems and workforce",
  "Expanding family-based care and reducing reliance on residential institutions",
  "Improving early childhood development outcomes in vulnerable settings",
];

function DefaultEligibilitySection({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      key="default"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-gray-200 rounded-xl p-[33px]"
    >
      <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
        Eligible Activities
      </h3>
      <p className="text-base text-gray-700 mt-2" style={{ fontFamily: "Cabin, sans-serif" }}>
        Eligible projects must address a priority of the Child Development, Care, and Protection addendum, which
        includes:
      </p>
      <ul className="mt-3 pl-6 space-y-1 list-disc text-base text-gray-700" style={{ fontFamily: "Cabin, sans-serif" }}>
        {ELIGIBLE_ACTIVITIES.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
      <p className="text-base text-gray-700 mt-4" style={{ fontFamily: "Cabin, sans-serif" }}>
        Please refer to the Annual Program Statement for the complete list of eligible activities.
      </p>

      <div className="pt-6 mt-2 border-t border-gray-100">
        <Button onClick={onStart} className="bg-teal-600 hover:bg-teal-700 text-white gap-2 mt-6">
          <ShieldCheck className="size-4" />
          Start Eligibility Assessment
        </Button>
      </div>
    </motion.div>
  );
}

/**
 * /eligibility-assessment — the grant/opportunity detail page for the
 * "Advancing Global Health" NOFO's Child Development, Care, and
 * Protection addendum, focused on the "Eligibility Activities &
 * Assessment" section (Figma node 12683:22351 / 12791:40283).
 */
export function EligibilityAssessmentPage() {
  const [isAssessing, setIsAssessing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-5 pb-6">
          <Breadcrumb className="mb-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">
                    <BreadcrumbHome />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Advancing Global Health — Child Development, Care, and Protection</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-[2rem] leading-tight text-gray-900" style={{ fontFamily: "Lustria, serif", fontWeight: 600 }}>
            {GRANT_TITLE}
          </h1>
          <p className="text-sm text-gray-500 mt-3" style={{ fontFamily: "Cabin, sans-serif" }}>
            U.S. Department of State — Bureau of Global Health Security and Diplomacy (GHSD)
          </p>

          <div className="flex items-center gap-4 flex-wrap mt-3">
            <Badge className="text-xs px-2.5 py-1 bg-green-50 text-green-700 border-green-200">Open</Badge>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>
                Phase 1 SOI due <span className="font-medium text-gray-800">May 31</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <DollarSign className="w-4 h-4 text-gray-400" />
              <span>
                <span className="font-medium text-gray-800">$52.65M</span> across up to 5 awards
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
            Eligibility Activities &amp; Assessment
          </h2>
          <div className="w-16 h-1 bg-teal-500 rounded-full" />
        </div>

        <AnimatePresence mode="wait">
          {isAssessing ? (
            <motion.div
              key="workflow"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <EligibilityWorkflowPanel onExit={() => setIsAssessing(false)} />
            </motion.div>
          ) : (
            <DefaultEligibilitySection onStart={() => setIsAssessing(true)} />
          )}
        </AnimatePresence>

        {!isAssessing && (
          <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5" style={{ fontFamily: "Cabin, sans-serif" }}>
            Assessing your fit takes about 5 minutes.
            <ArrowRight className="size-3" />
          </p>
        )}
      </div>
    </div>
  );
}
