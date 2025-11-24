import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BirthdayProvider } from "@/contexts/BirthdayContext";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Timeline from "./pages/Timeline";
import Birthday from "./pages/Birthday";
import MemoryDetail from "./pages/MemoryDetail";
import Letters from "./pages/Letters";
import LetterDetail from "./pages/LetterDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const basename = "/love-museum";
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BirthdayProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/memory/:id" element={<MemoryDetail />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/letters/:id" element={<LetterDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </BirthdayProvider>
  </QueryClientProvider>
);

export default App;
