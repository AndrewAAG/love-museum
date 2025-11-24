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
    title: "To My Dearest Love",
    type: "love letter",
    date: "March 20, 2023",
    content: `From the moment I met you, my world changed in ways I never imagined possible. You walked into my life like sunlight breaking through clouds, and suddenly everything felt warmer, brighter, more alive.

I find myself thinking about you in the quiet moments—when I'm making coffee in the morning, when a song comes on that reminds me of you, when I'm falling asleep at night. You've become woven into every part of my day, every corner of my thoughts.

There's something magical about the way you see the world. Your laugh is my favorite sound. Your smile is the first thing I want to see each day. The way you scrunch your nose when you're concentrating, the way you hum when you're happy, the way you reach for my hand without even thinking—these little things have become my most treasured moments.

I want you to know that loving you is the easiest thing I've ever done. It's as natural as breathing, as inevitable as the sunrise. You make me want to be better, to see beauty in everything, to live fully in each moment.

Thank you for being you. Thank you for letting me love you. Thank you for choosing me.

Forever yours,
With all my heart`,
    isProtected: false,
  },
  {
    id: 2,
    title: "Our First Year Together",
    type: "journal entry",
    date: "March 15, 2024",
    content: `A year has passed, and I find myself reflecting on all the little moments that made us "us." They say the first year reveals everything—the beauty and the challenges, the laughter and the tears, the moments of perfect harmony and the times we had to learn to understand each other better.

We've shared so many firsts: our first trip together, our first argument and reconciliation, the first time we said "I love you," the first time we cooked together (and failed spectacularly). Each moment taught us something new about ourselves and about each other.

I've learned that you need quiet time in the mornings, that you stress-clean when you're anxious, that you cry at both happy and sad movies, and that you always forget where you put your keys. I've learned that when you're upset, sometimes you just need space, and when you're happy, you light up the whole room.

You've learned my quirks too—my terrible jokes, my need for routine, my love for organizing things, my tendency to overthink. And somehow, knowing all these things about each other has only made us closer.

This year has shown me that love isn't just about the grand gestures or the perfect moments. It's about choosing each other every day, about growing together, about building a life where we both feel at home.

Here's to many more years of growth, laughter, and love.`,
    isProtected: false,
  },
  {
    id: 3,
    title: "For Our Future Selves",
    type: "future note",
    date: "December 31, 2023",
    content: `Dear Future Us,

If you're reading this, I hope you're exactly where we dreamed we'd be. Or maybe somewhere even better that we couldn't have imagined. Either way, I hope you're happy, healthy, and still madly in love with each other.

Remember this moment—sitting together on New Year's Eve, talking about our dreams for the future. We wondered where we'd be in five years, ten years, twenty years. We made promises to each other, set goals, imagined the life we wanted to build together.

I hope you've traveled to some of those places on our list. I hope you've taken chances and embraced adventures. I hope you've supported each other through challenges and celebrated each other's victories.

Most importantly, I hope you still laugh together the way we do now. I hope you still hold hands. I hope you still find new things to love about each other. I hope the spark we feel today has grown into a steady, warm flame that lights your way.

Don't forget to keep writing letters. Don't forget to take photos. Don't forget to tell each other "I love you" even when it feels redundant. Don't forget that some of the best moments are the quiet, ordinary ones.

If things have been hard lately, remember why you started this journey together. Look back at your old photos. Read your old letters. Remember that you've overcome challenges before and you can do it again.

We believe in you. We believe in us.

With hope and love,
Your Past Selves`,
    isProtected: false,
  },
  {
    id: 4,
    title: "The Things I Never Said",
    type: "love letter",
    date: "June 12, 2023",
    content: `There are words that feel too big for conversation, feelings that need the quiet of written pages to be expressed properly. So here, in this private space, I want to tell you everything I keep locked in my heart.

I love you in ways I didn't know were possible. Not just the obvious ways—your beauty, your kindness, your laugh—but in the small, intricate ways that make you uniquely you. I love the way you think, the way your mind works through problems. I love your vulnerability when you let your guard down with me. I love your strength when you face the world.

Sometimes when you're sleeping beside me, I watch you and feel overwhelmed by the trust you place in me. You let me see you at your most vulnerable, and I don't take that lightly. You've given me pieces of yourself that you protect from everyone else, and I treasure every single one.

I want you to know that when I say I'm here for you, I mean it in every possible way. In your joy and your sorrow, in your successes and your struggles, in your certainty and your doubt. I'm here, always, choosing you.

There are moments when I'm struck by how lucky I am. How did I get so fortunate to find you in this vast world? What did I do to deserve someone who sees me—really sees me—and loves me anyway?

You make me want to be the best version of myself, not because you demand it, but because you inspire it. You make me believe in love stories and happy endings and the kind of deep connection that transforms lives.

I love you. Not just today, not just in this moment, but in every moment yet to come. I love you in ways that words can't quite capture, but I'll keep trying to express it anyway.

You are my favorite person, my best decision, my greatest adventure.

Always and forever,
Yours`,
    isProtected: true,
    password: "forever",
  },
  {
    id: 5,
    title: "On Rainy Days",
    type: "journal entry",
    date: "July 5, 2023",
    content: `Some of my favorite memories are the quiet ones—rainy afternoons wrapped in blankets, nowhere to be, nothing to do but be together. There's something about being cozy indoors while the world is wet and grey outside that makes everything feel more intimate, more precious.

Today was one of those days. We canceled our plans, made tea, and spent hours just talking. The conversation wandered everywhere—from childhood memories to dreams for the future, from silly hypotheticals to serious reflections about life and love.

These are the moments I want to remember when I'm old. Not necessarily the grand adventures or special occasions, but these simple afternoons where time seems to slow down and nothing matters except the comfort of being with you.

We played old board games and you won every single time. We made grilled cheese sandwiches for lunch and burnt them slightly, but they were perfect anyway. We watched the rain through the window and counted the seconds between lightning and thunder.

You fell asleep on my shoulder while we were watching a movie, and I stayed perfectly still for an hour, not wanting to wake you. Your peaceful breathing, the weight of your head against me, the trust implicit in that simple act—it felt like everything.

I hope we have a thousand more rainy days like this. I hope we never lose appreciation for the ordinary moments that make up a life together. I hope we always find magic in the mundane, comfort in the simple, joy in just being.

Love doesn't always have to be dramatic or extraordinary. Sometimes it's just two people choosing to spend a rainy afternoon together, and that's more than enough.`,
    isProtected: false,
  },
  {
    id: 6,
    title: "My Deepest Promise",
    type: "love letter",
    date: "August 1, 2023",
    content: `This letter contains my most intimate thoughts and promises for our future together. These are words I've carried in my heart, waiting for the right moment to express them fully.

I promise to love you not just in the easy moments, but in the difficult ones too. When life gets hard, when we're tired and stressed and not at our best, I promise to remember why we started this journey together. I promise to fight for us, not with you.

I promise to listen, really listen, when you speak. Not just to respond, but to understand. To hear the words you're not saying, to see the emotions you're trying to hide. I promise to create a space where you always feel safe being vulnerable.

I promise to grow with you, not apart from you. To embrace change together, to support your dreams even when they scare me, to celebrate your growth even when it means you're becoming someone slightly different than who you were when we met. I promise to fall in love with every version of you.

I promise to never take you for granted. To remember that every day with you is a gift, not a guarantee. To show appreciation for the little things you do, the sacrifices you make, the love you give so freely.

I promise to be your safe harbor in storms, your biggest cheerleader in victories, your steady presence in uncertainty. I promise to be honest, even when it's hard. To communicate, even when I'd rather shut down. To work through problems instead of avoiding them.

I promise to keep romance alive—to write you letters, to surprise you with small gestures, to never stop dating you just because we're together. I promise to make you laugh, to hold your hand, to kiss you goodnight even after decades together.

Most importantly, I promise to choose you. Every day, in every way, for as long as you'll have me. You are my person, my home, my future.

This is my promise to you, written in ink but carved in my heart.

Forever and always,
With every part of me`,
    isProtected: true,
    password: "always",
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
