import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TranslationProvider } from "@/hooks/useTranslation";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import Index from "./pages/Index";
import RulesAndTerms from "./pages/RulesAndTerms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to track route changes with Google Analytics
const GoogleAnalyticsTracker = () => {
  useGoogleAnalytics();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalyticsTracker />
        <TranslationProvider>
          <Routes>
            {/* Redirect root to default locale */}
            <Route path="/" element={<Navigate to="/ca" replace />} />
            
            {/* Locale-based routes */}
            <Route path="/:locale" element={<Index />} />
            <Route path="/:locale/rules" element={<RulesAndTerms />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TranslationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
