import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, BookOpen, Heart, Clock, Lock, Unlock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const letters = [
  {
    id: 1,
    title: "Read This When You Feel Tired",
    type: "love letter",
    date: "November 26, 2025",
    content: `Hi Dede,
    
    You really mean the world to me and i can't explain how proud i am of you.
    
    You are a hardworking girl and you always find a way to solve your problem. No matter how hard your problem are right now, i know you will be able to solve it.
    
    Always believe in yourself, you are a smart girl dede. I know you can do it!
    
    I love you <3`,
    isProtected: false,
  },
  {
    id: 2,
    title: "3 Larangan, 2 Permintaan, 1 Pesan",
    type: "Reminder",
    date: "November 20, 2025",
    content: `From Bubub to Dede
    
    3 Larangan:
    - Jangan mendem perasaan / something. Always cerita ke i
    - Jangan pernah mikir hal hal buruk lagi, jangan mikir kalo dede itu not appreciated, jangan mikir dede itu ga disayang, jangan mikir dede itu ga cantik, etc
    - Jangan nutup nutupin sesuatu ke i, apapun itu komunikasiin aja
    
    2 Permintaan:
    - Don't ever change, i love the way you are now (tapi kalo jadi lebih baik bagus)
    - Have faith in me, trust me kalo i will do the best for you
    
    1 Pesan:
    - Find your purpose in life, do the best to achieve it, and don't ever doubt yourself (I will always support you in the process)
    
    
    From Dede to Bubub
    
    3 Larangan:
    - Don't smoke bubub, bau + later jadi mang" punk
    - Jangan terlalu sering tidur malemm ga sehatt
    - Jangan flirty with other girls ya
    
    2 Permintaan:
    - Bubub always happy and prioritize himself. Jangan kecapean and jaga kesehatan
    - Bubbb always sayang ama i yaaa don't be bored pls HEHEHEHEHE
    
    1 Pesan:
    - Bubub i love you and im grateful i was able to meet youuu. I bakal sering minta reassurance so jangan bete yaa and be happy bububbb and jangan overwork yourself klo cape butuh istirahat let me knowwww`,
    isProtected: false,
  },
];

const LetterDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [isLocked, setIsLocked] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const letter = letters.find((l) => l.id === Number(id));

  if (!letter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Letter not found</p>
          <Button onClick={() => navigate("/letters")}>
            Return to Reading Room
          </Button>
        </div>
      </div>
    );
  }

  const handleUnlock = () => {
    if (passwordInput === letter.password) {
      setIsLocked(false);
      setShowPasswordDialog(false);
      setPasswordInput("");
      toast({
        title: "Letter unlocked",
        description: "Enjoy your private moment.",
      });
    } else {
      toast({
        title: "Incorrect password",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCardClick = () => {
    if (letter.isProtected && isLocked) {
      setShowPasswordDialog(true);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "love letter":
        return <Heart className="w-5 h-5" />;
      case "journal entry":
        return <BookOpen className="w-5 h-5" />;
      case "future note":
        return <Clock className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/letters")}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Reading Room
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <div className="space-y-8">
          {/* Letter Header */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 text-accent">
              {getTypeIcon(letter.type)}
              <Badge variant="outline" className="capitalize">
                {letter.type}
              </Badge>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              {letter.title}
            </h1>

            <time className="text-sm text-muted-foreground block">
              {letter.date}
            </time>
          </div>

          {/* Letter Content */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
            onClick={handleCardClick}
          >
            {letter.isProtected && isLocked ? (
              <div className="bg-card border border-border rounded-lg p-12 min-h-[400px] flex flex-col items-center justify-center gap-6 cursor-pointer hover:border-accent transition-colors">
                <Lock className="w-16 h-16 text-muted-foreground" />
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-medium text-foreground">
                    This letter is protected
                  </h3>
                  <p className="text-muted-foreground">
                    Enter the password to read this intimate message
                  </p>
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPasswordDialog(true);
                  }}
                  className="gap-2"
                >
                  <Unlock className="w-4 h-4" />
                  Unlock Letter
                </Button>
              </div>
            ) : (
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="bg-card/30 rounded-lg p-8 md:p-12 border border-border/50">
                  <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-line font-serif">
                    {letter.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              Enter Password
            </DialogTitle>
            <DialogDescription>
              This letter contains intimate thoughts meant for your eyes only.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUnlock();
                }
              }}
              autoFocus
            />
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowPasswordDialog(false);
                  setPasswordInput("");
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleUnlock} className="gap-2">
                <Unlock className="w-4 h-4" />
                Unlock
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LetterDetail;
