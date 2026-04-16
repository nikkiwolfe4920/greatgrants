import { FileText } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export interface Application {
  id: string;
  name: string;
}

interface ApplicationsListProps {
  applications: Application[];
}

export function ApplicationsList({ applications }: ApplicationsListProps) {
  const handleViewApplication = (applicationId: string) => {
    // TODO: Navigate to application detail page
    console.log('Navigating to application:', applicationId);
  };

  return (
    <div className="space-y-0">
      {applications.map((application) => (
        <div 
          key={application.id}
          className="flex items-center justify-between py-4 px-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-700">{application.name}</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9"
            onClick={() => handleViewApplication(application.id)}
          >
            View
          </Button>
        </div>
      ))}
    </div>
  );
}