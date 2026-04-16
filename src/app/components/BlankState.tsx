import { FileText } from "lucide-react";

export function BlankState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
        <FileText className="w-8 h-8 text-teal-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-gray-900 font-medium">No applications yet</h3>
    </div>
  );
}