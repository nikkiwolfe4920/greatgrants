import { Link } from "react-router";
import { AlertCircle } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Lustria, serif' }}>
          404
        </h1>
        <p className="text-gray-600 mb-6">Page not found</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          style={{ fontFamily: 'Cabin, sans-serif' }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}