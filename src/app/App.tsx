import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";

// Main App Component
export default function App() {
  // Initialize default organization on app load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const validOrganizations = ["Great Grants Foundation", "Community Impact Fund", "Tech for Good Alliance"];
      const stored = localStorage.getItem('selectedOrganization');
      
      console.log('=== APP INIT ===');
      console.log('Current stored organization:', stored);
      console.log('Valid organizations:', validOrganizations);
      console.log('Is stored valid?', stored && validOrganizations.includes(stored));
      
      // If stored value is not one of the valid organizations, reset to default
      if (!stored || !validOrganizations.includes(stored)) {
        console.log('CLEARING AND RESETTING to Great Grants Foundation');
        localStorage.removeItem('selectedOrganization');
        localStorage.setItem('selectedOrganization', 'Great Grants Foundation');
        console.log('New value:', localStorage.getItem('selectedOrganization'));
        
        // Force a state update by dispatching a storage event
        window.dispatchEvent(new Event('storage'));
      } else {
        console.log('Found valid stored organization:', stored);
      }
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}