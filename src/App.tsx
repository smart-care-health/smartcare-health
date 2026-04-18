import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import SmartcareLabs from "./pages/SmartcareLabs";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DataProtection from "./pages/DataProtection";
import PilotLanding from "./pages/pilot/PilotLanding";
import HowItWorks from "./pages/pilot/HowItWorks";
import Participants from "./pages/pilot/Participants";
import Partners from "./pages/pilot/Partners";
import PilotUpdates from "./pages/pilot/PilotUpdates";
import PilotPrivacy from "./pages/pilot/PilotPrivacy";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions/smartcare-labs" element={<SmartcareLabs />} />
            <Route path="/auth" element={<Auth />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/data-protection" element={<DataProtection />} />
            <Route path="/higo-pilot" element={<PilotLanding />} />
            <Route path="/higo-pilot/how-it-works" element={<HowItWorks />} />
            <Route path="/higo-pilot/participants" element={<Participants />} />
            <Route path="/higo-pilot/partners" element={<Partners />} />
            <Route path="/higo-pilot/updates" element={<PilotUpdates />} />
            <Route path="/higo-pilot/privacy" element={<PilotPrivacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
