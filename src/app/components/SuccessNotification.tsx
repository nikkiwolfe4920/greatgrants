import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface SuccessNotificationProps {
  message: string;
  description?: string;
  onClose: () => void;
}

export function SuccessNotification({ message, description, onClose }: SuccessNotificationProps) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-start gap-3">
        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{message}</p>
          {description && (
            <p className="text-sm text-gray-600 mt-0.5">{description}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
