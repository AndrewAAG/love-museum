import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useBirthday } from "@/contexts/BirthdayContext";
import { Sparkles, PartyPopper, ChevronRight, BookOpen } from "lucide-react";
import BirthdayConfetti from "@/components/BirthdayConfetti";

const Index = () => {
  const navigate = useNavigate();
  const { isBirthdayMode, isBirthdayToday, daysUntilBirthday } = useBirthday();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <BirthdayConfetti isActive={isBirthdayMode} intensity="light" />
      
      <div className="max-w-2xl text-center space-y-8">
        {/* Birthday Banner - Only shows if birthday mode is active */}
        {isBirthdayMode && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 border-2 border-accent/50 animate-fade-in-up opacity-0">
            <div className="flex items-center justify-center gap-3 mb-3">
              <PartyPopper className="w-6 h-6 text-accent animate-gentle-float" />
              <Sparkles className="w-5 h-5 text-museum-highlight animate-gentle-float delay-200" />
              <PartyPopper className="w-6 h-6 text-accent animate-gentle-float delay-300" />
            </div>
            <h2 className="text-2xl font-medium text-foreground mb-2">
              🎉 It's Birthday Time! 🎉
            </h2>
            <p className="text-muted-foreground mb-4">
              {isBirthdayToday 
                ? "Today is your special day Dede! Please Visit the Birthday Room for a celebration."
                : "Birthday Mode is active! Explore the special Birthday Room."}
            </p>
            <Button
              onClick={() => navigate("/birthday")}
              className="bg-gradient-to-r from-accent to-museum-highlight hover:from-accent/90 hover:to-museum-highlight/90 text-foreground gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Enter Birthday Room
            </Button>
          </div>
        )}

        {/* Main Title */}
        <div className="space-y-4 animate-fade-in-up opacity-0">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
            Andrew & Van's <br /> Love Museum
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Poetic Text */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-in-up opacity-0 delay-200 max-w-xl mx-auto">
          A digital museum where time stands still,
          <br />
          where every moment is carefully preserved,
          <br />
          and every memory finds its place
          <br />
          in the exhibition of us.
        </p>

        {/* Entry Button */}
        <div className="pt-8 animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => navigate("/gallery")}
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-base font-normal tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-gallery-shadow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Enter the Museum
              <ChevronRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>
          
          <Button
            onClick={() => navigate("/letters")}
            size="lg"
            variant="outline"
            className="px-10 py-6 text-base font-normal tracking-wide gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Reading Room
          </Button>
        </div>

        {/* Birthday Countdown - Only shows when NOT in birthday mode */}
        {!isBirthdayMode && daysUntilBirthday > 0 && (
          <p className="text-sm text-muted-foreground/60 animate-fade-in-up opacity-0 delay-500 pt-4">
            {daysUntilBirthday === 1 
              ? "🎂 Her birthday is tomorrow!" 
              : `🎂 ${daysUntilBirthday} days until her birthday`}
          </p>
        )}

        {/* Subtle Footer Text */}
        <p className="text-sm text-muted-foreground/60 animate-fade-in-up opacity-0 delay-500 pt-12">
          Curated with love, preserved forever
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-8 left-8 w-24 h-24 border border-border/20 rounded-full animate-gentle-float" />
      <div className="fixed bottom-12 right-12 w-32 h-32 border border-border/20 rounded-full animate-gentle-float delay-300" />
    </div>
  );
};

export default Index;
