import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Heart, Clock, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useBirthday } from "@/contexts/BirthdayContext";

const letters = [
  {
    id: 1,
    title: "To My Dearest Love",
    type: "love letter",
    date: "March 20, 2023",
    preview: "From the moment I met you, my world changed in ways I never imagined possible...",
    isProtected: false,
  },
  {
    id: 2,
    title: "Our First Year Together",
    type: "journal entry",
    date: "March 15, 2024",
    preview: "A year has passed, and I find myself reflecting on all the little moments that made us 'us'...",
    isProtected: false,
  },
  {
    id: 3,
    title: "For Our Future Selves",
    type: "future note",
    date: "December 31, 2023",
    preview: "When you read this, I hope we're exactly where we dreamed we'd be. Remember this moment...",
    isProtected: false,
  },
  {
    id: 4,
    title: "The Things I Never Said",
    type: "love letter",
    date: "June 12, 2023",
    preview: "There are words that feel too big for conversation, feelings that need the quiet of written pages...",
    isProtected: true,
    password: "forever",
  },
  {
    id: 5,
    title: "On Rainy Days",
    type: "journal entry",
    date: "July 5, 2023",
    preview: "Some of my favorite memories are the quiet ones—rainy afternoons wrapped in blankets...",
    isProtected: false,
  },
  {
    id: 6,
    title: "My Deepest Promise",
    type: "love letter",
    date: "August 1, 2023",
    preview: "This letter contains my most intimate thoughts and promises for our future together...",
    isProtected: true,
    password: "always",
  },
];

const Letters = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { isBirthdayMode } = useBirthday();

  const allTypes = Array.from(new Set(letters.map((l) => l.type)));
  
  const filteredLetters = selectedType
    ? letters.filter((l) => l.type === selectedType)
    : letters;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "love letter":
        return <Heart className="w-4 h-4" />;
      case "journal entry":
        return <BookOpen className="w-4 h-4" />;
      case "future note":
        return <Clock className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrium
            </Button>
            <h1 className="text-2xl font-light tracking-wide text-center flex-1 font-serif">
              The Reading Room
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Introduction */}
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <BookOpen className="w-12 h-12 mx-auto text-accent" />
          <p className="text-muted-foreground leading-relaxed">
            A space for letters, thoughts, and promises written in moments of reflection.
            <br /><br/>
            Specially designed for dede who often overthink and needs reassurance. Every time you feel bad, come here and read some letter to make you feel better. 
          </p>
        </div>

        {/* Filter by Type */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <Button
            variant={selectedType === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedType(null)}
            className="rounded-full text-xs"
          >
            All Letters
          </Button>
          {allTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(type)}
              className="rounded-full text-xs capitalize gap-2"
            >
              {getTypeIcon(type)}
              {type}
            </Button>
          ))}
        </div>

        {/* Letters Grid */}
        <div className="space-y-6 pb-16">
          {filteredLetters.map((letter, index) => (
            <Card
              key={letter.id}
              className="group overflow-hidden border-border/50 hover:border-accent transition-all duration-500 hover:shadow-xl cursor-pointer animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/letters/${letter.id}`)}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    {letter.isProtected ? (
                      <Lock className="w-5 h-5" />
                    ) : (
                      getTypeIcon(letter.type)
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-serif text-foreground group-hover:text-accent transition-colors">
                        {letter.title}
                      </h3>
                      {letter.isProtected && (
                        <Badge variant="secondary" className="text-xs gap-1">
                          <Lock className="w-3 h-3" />
                          Protected
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="outline" className="capitalize text-xs">
                        {letter.type}
                      </Badge>
                      <time>{letter.date}</time>
                    </div>

                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {letter.preview}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredLetters.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground/40" />
            <p className="text-muted-foreground">No letters found for this type</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Letters;
