import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Chat from "./pages/Chat";

// Lazy load pages for better performance
const NotFound = lazy(() => import("./pages/NotFound"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const DocsPage = lazy(() => import("./pages/DocsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const ThemeManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Only apply dark mode for non-chat routes
    // Chat page manages its own theme
    if (location.pathname !== '/chat') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ThemeManager />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
