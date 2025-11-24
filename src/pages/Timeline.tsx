import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Calendar, MapPin, Coffee, Plane, Home, Star, Sparkles, BookOpen, Phone, MessageSquareText, Church, Cake, HomeIcon } from "lucide-react";
import TimelineMarker from "@/components/TimelineMarker";

const timelineEvents = [
  {
    id: 1,
    date: "September 26, 2025",
    title: "The Beginning",
    description: "Our first chat. I text you on instagram asking about learning Mandarin. Little did we know this would be the start of everything.",
    icon: MessageSquareText,
    color: "from-accent/20 to-accent/40",
    phase: "The First Chapter",
  },
  {
    id: 2,
    date: "October 2, 2025",
    title: "First Meet",
    description: "We meet for this first time in front of UNPAR Library. Then we go to Ohayo for lunch. I was so nervous at that time hahahahah.",
    icon: Coffee,
    color: "from-museum-highlight/20 to-museum-highlight/40",
    phase: "The First Chapter",
  },
  {
    id: 3,
    date: "October 5, 2025",
    title: "First Date",
    description: "Our first date. We go to church together, eat cuanki serayu, eat RUI, and go to Paskal 23 to buy boneka bebek for your friend.",
    icon: Church,
    color: "from-accent/20 to-accent/40",
    phase: "The First Chapter",
  },
  {
    id: 4,
    date: "October 12, 2025",
    title: "Second Date",
    description: "This is when my feeling to you grows deeper. We go to cafe bali, noisy matcha, badminton, and atmosphere. Do you remember when we walk to the sport center under an umbrella? That's exactly when my feeling grows deeper ",
    icon: Heart,
    color: "from-museum-highlight/20 to-museum-highlight/40",
    phase: "Deeper",
  },
  {
    id: 5,
    date: "October 19, 2025",
    title: "Andrew 20th Birthday",
    description: "You accompanied me throughout the day, and i love it. From here, i started to think about when should i confess to you.",
    icon: Cake,
    color: "from-museum-highlight/20 to-museum-highlight/40",
    phase: "Deeper",
  },
  {
    id: 6,
    date: "November 2, 2025",
    title: "Home Baking",
    description: "You bake banana bread and blueberry creamcheese bread for me and my fam. This is the moment when I was sure that I want you to be my girlfriend ",
    icon: HomeIcon,
    color: "from-accent/20 to-accent/40",
    phase: "Deeper",
  },
  {
    id: 7,
    date: "November 9, 2025",
    title: "The Day You Become My Girlfriend",
    description: "Suddenly, the lights went out in Dakken. Dinner changed into candlelight dinner. Finally i confessed my feeling to you and asked you to be my girlfriend. I'm so happy that you accept it. I promise that it will be the best decision you have ever made. ",
    icon: Heart,
    color: "from-destructive/20 to-destructive/40",
    phase: "Together",
  },
  {
    id: 8,
    date: "Present",
    title: "Our Story Continues",
    description: "Every day with you is a new page in our story. Here's to all the chapters yet to come.",
    icon: Star,
    color: "from-accent/30 to-accent/50",
    phase: "Forever",
  },
];

const Timeline = () => {
  const navigate = useNavigate();
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/gallery")}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Gallery
            </Button>
            <h1 className="text-2xl font-light tracking-wide text-center flex-1">
              Timeline Path
            </h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/letters")}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <BookOpen className="w-4 h-4" />
              Letters
            </Button>
          </div>
        </div>
      </header>

      {/* Timeline Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Introduction */}
        <div className="text-center mb-20 space-y-4 animate-fade-in-up opacity-0">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            The Path We've Walked Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every milestone, every moment, carefully preserved along the timeline of us.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-accent/30 to-border transform -translate-x-1/2 hidden md:block" />
          
          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-border via-accent/30 to-border md:hidden" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineMarker
                key={event.id}
                event={event}
                index={index}
                isActive={activeMarker === event.id}
                onHover={() => setActiveMarker(event.id)}
                onLeave={() => setActiveMarker(null)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 animate-gentle-float">
            <Heart className="w-8 h-8 text-accent" />
          </div>
          <p className="mt-6 text-muted-foreground text-sm">
            And the story continues...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
