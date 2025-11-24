import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Clock, PartyPopper, BookOpen } from "lucide-react";
import MemoryCard from "@/components/MemoryCard";
import { useBirthday } from "@/contexts/BirthdayContext";
import ohayou from "@/assets/ohayou.jpg";
import rui from "@/assets/rui.jpg";
import cserayu from "@/assets/cuanki_serayu.webp";
import cbali from "@/assets/cafe-bali_.webp";
import noisy from "@/assets/noisymatcha.jpg";
import atmo from "@/assets/atmo.jpg";
import gorm1 from "@/assets/gourmet_bday_andrew.jpg";
import sgn from "@/assets/siagian.jpg";
import bake1 from "@/assets/baking_6.jpg";


// Sample memories - you can later make this dynamic
const memories = [
  {
    id: 1,
    title: "Ohayou Ciumbuleuit",
    date: "October 2, 2025",
    image: ohayou,
    description: "That little cafe where everything started.",
    tags: ["food & drink"],
  },
  {
    id: 2,
    title: "RUI 琉偉",
    date: "October 5, 2025",
    image: rui,
    description: "Japanese Restaurant di Jalan Bahureksa. ",
    tags: ["food & drink"],
  },
  {
    id: 3,
    title: "Cuanki Serayu",
    date: "October 5, 2025",
    image: cserayu,
    description: "Best Cuanki in Bandung",
    tags: ["food & drink"],
  },
  {
    id: 4,
    title: "Cafe Bali",
    date: "October 12, 2025",
    image: cbali,
    description: "Cafe Bali - Indonesian Restaurant di Jalan Riau",
    tags: ["food & drink"],
  },
  {
    id: 5,
    title: "Noisy Matcha",
    date: "October 12, 2025",
    image: noisy,
    description: "Noisy Matcha - New Matcha Store in Bandung",
    tags: ["food & drink"],
  },
  {
    id: 6,
    title: "Atmosphere",
    date: "October 12, 2025",
    image: atmo,
    description: "Great restaurant for dining, good place, and good vibes.",
    tags: ["food & drink"],
  },
  {
    id: 7,
    title: "Gormeteria",
    date: "October 19, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
  },
  {
    id: 8,
    title: "Lapo Siagian",
    date: "November 2, 2025",
    image: sgn,
    description: "One of the best babi in Bandung",
    tags: ["food & drink"],
  },
  {
    id: 9,
    title: "Baking at Dede's House!",
    date: "November 2, 2025",
    image: bake1,
    description: "The best bread and my favorite bread. Made by the most beautiful girl.",
    tags: ["food & drink", "activity"],
  },
  {
    id: 10,
    title: "Bumus",
    date: "November 9, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
  },
  {
    id: 11,
    title: "Dakken",
    date: "November 9, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
  },
  {
    id: 12,
    title: "Justus",
    date: "November 15, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
  },
  {
    id: 13,
    title: "Parents Are Watching",
    date: "November 15, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
  },
  {
    id: 14,
    title: "Pottery",
    date: "November 16, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
  },
  {
    id: 15,
    title: "Nasgor Pak Ikin",
    date: "November 16, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
  },
  {
    id: 16,
    title: "Queen",
    date: "November 17, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
  },
  {
    id: 17,
    title: "Nasgor Toyib",
    date: "November 23, 2025",
    image: gorm1,
    description: "Great restaurant. Special day with special person.",
    tags: ["food & drink"],
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
