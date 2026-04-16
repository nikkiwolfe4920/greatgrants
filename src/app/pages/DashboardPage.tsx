import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full mx-auto"
      >
        {/* Coming Soon Box */}
        <div className="bg-white border border-gray-200 rounded-xl p-12 shadow-sm text-center">
          {/* Heading */}
          <h1 
            className="text-3xl text-gray-900 mb-4" 
            style={{ fontFamily: 'Lustria, serif', fontWeight: 600 }}
          >
            Dashboard
          </h1>

          {/* Description */}
          <p 
            className="text-gray-600 mb-8 leading-relaxed"
            style={{ fontFamily: 'Cabin, sans-serif' }}
          >
            We're building a comprehensive dashboard to help you track your grant applications, 
            monitor progress, and visualize your success. Stay tuned!
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={() => navigate("/applications")}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8"
              style={{ fontFamily: 'Cabin, sans-serif' }}
            >
              View Applications
            </Button>
            <Button
              onClick={() => navigate("/search")}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6"
              style={{ fontFamily: 'Cabin, sans-serif' }}
            >
              Search Grants
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}