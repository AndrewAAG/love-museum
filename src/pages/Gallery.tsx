import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Clock, PartyPopper, BookOpen } from "lucide-react";
import MemoryCard from "@/components/MemoryCard";
import { useBirthday } from "@/contexts/BirthdayContext";
import ohayou from "@/assets/ohayou.jpg";

// Sample memories - you can later make this dynamic
const memories = [
  {
    id: 1,
    title: "Ohayou Ciumbuleuit",
    date: "October 2, 2025",
    image: ohayou,
    description: "That little cafe where everything started.",
    tags: ["milestone", "food"],
  },
  {
    id: 2,
    title: "RUI 琉偉",
    date: "October 5, 2025",
    image: "src/assets/rui.JPG",
    description: "Japanese Restaurant di Jalan Bahureksa. ",
    tags: ["milestone", "food"],
  },
  {
    id: 3,
    title: "Cuanki Serayu",
    date: "October 5, 2025",
    image: "src/assets/cuanki_serayu.webp",
    description: "Best Cuanki in Bandung",
    tags: ["food", "milestone"],
  },
  {
    id: 4,
    title: "Cafe Bali",
    date: "May 10, 2023",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    description: "The pasta was burnt, the kitchen was a mess, but we made the best memories.",
    tags: ["food moments", "funny"],
  },
  {
    id: 5,
    title: "Noisy Matcha",
    date: "July 3, 2023",
    image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&q=80",
    description: "Wrapped in blankets, watching the rain, with nothing but time and each other.",
    tags: ["cozy", "favorite"],
  },
  {
    id: 6,
    title: "Atmosphere",
    date: "August 17, 2023",
    image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80",
    description: "Walking through art galleries, pretending to be sophisticated, stealing kisses when no one looked.",
    tags: ["travel", "favorite"],
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { isBirthdayMode } = useBirthday();

  const allTags = Array.from(new Set(memories.flatMap((m) => m.tags)));
  
  const filteredMemories = selectedTag
    ? memories.filter((m) => m.tags.includes(selectedTag))
    : memories;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          {/* Mobile Header */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="gap-1 text-muted-foreground hover:text-foreground -ml-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-xs">Atrium</span>
              </Button>
              <h1 className="text-lg font-light tracking-wide">
                Gallery
              </h1>
              <div className="w-16" />
            </div>
            <div className="flex gap-1.5 justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/letters")}
                className="gap-1 text-muted-foreground hover:text-foreground text-xs h-8"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Letters</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/timeline")}
                className="gap-1 text-muted-foreground hover:text-foreground text-xs h-8"
              >
                <Clock className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Timeline</span>
              </Button>
              {isBirthdayMode && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/birthday")}
                  className="gap-1 text-accent hover:text-accent/80 text-xs h-8"
                >
                  <PartyPopper className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Birthday</span>
                </Button>
              )}
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrium
            </Button>
            <h1 className="text-2xl font-light tracking-wide text-center flex-1">
              Gallery of Moments
            </h1>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/letters")}
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                <BookOpen className="w-4 h-4" />
                Letters
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/timeline")}
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                <Clock className="w-4 h-4" />
                Timeline
              </Button>
              {isBirthdayMode && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/birthday")}
                  className="gap-2 text-accent hover:text-accent/80"
                >
                  <PartyPopper className="w-4 h-4" />
                  Birthday
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Filter Tags */}
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex md:flex-wrap gap-2 md:justify-center mb-6 md:mb-8 min-w-max md:min-w-0">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
              className="rounded-full text-xs whitespace-nowrap"
            >
              All Exhibits
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className="rounded-full text-xs capitalize whitespace-nowrap"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12 md:pb-16">
          {filteredMemories.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredMemories.length === 0 && (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground/40" />
            <p className="text-muted-foreground">No memories found for this tag</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
