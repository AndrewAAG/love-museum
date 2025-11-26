import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Sparkles, Gift, Cake, PartyPopper } from "lucide-react";
import { useBirthday } from "@/contexts/BirthdayContext";
import BirthdayConfetti from "@/components/BirthdayConfetti";

const Birthday = () => {
  const navigate = useNavigate();
  const { isBirthdayMode } = useBirthday();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-background">
      <BirthdayConfetti isActive={isBirthdayMode} intensity="medium" />
      
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
            <h1 className="text-2xl font-light tracking-wide text-center flex-1">
              Birthday Room
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Birthday Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Main Birthday Greeting */}
        <div className="text-center mb-16 space-y-6 animate-fade-in-up opacity-0">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cake className="w-8 h-8 text-accent animate-gentle-float" />
            <Sparkles className="w-6 h-6 text-museum-highlight animate-gentle-float delay-200" />
            <PartyPopper className="w-8 h-8 text-accent animate-gentle-float delay-300" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-foreground">
            Happy Birthday, Dede
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This is for you Dede — the person who fills my day with light, 
            laughter, and love. This is your special room in our museum, 
            dedicated to the extraordinary person you are. 
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <Heart className="w-6 h-6 text-destructive animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-r from-accent via-accent to-transparent" />
          </div>
        </div>

        {/* Birthday Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Letter Section */}
          <Card className="group hover:shadow-xl hover:shadow-gallery-shadow transition-all duration-500 border-accent/50 animate-fade-in-up opacity-0 delay-200 bg-gradient-to-br from-card to-pink-50/20">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-medium">A Letter to You</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi Dede, Happy 21th Birthdayy!!!
                </p>
                <p>
                  I'm so happy and excited karena ini pertama kali kita ngerayain birthday dede as a couple.
                  I want to say thankyou for being an amazing girl and a perfect girlfriend. I enjoy every moment with you de,
                  your cheerfulness, your smile, bener bener bikin gw happy. Thankyou for being the way you are, you really changed my life and you make my
                  life much meaningful. Don't change dede, tetep jadi cheerful and happy girl okay? Keep spreading your positivity to me and to others. 
                </p>
                <p>
                  Andd enjoy your special day today. Enjoy today with orang orang yang dede sayangg yaa, your family, your friends, my family, and your boyfriend hehe. Always remember kalo banyak
                  banget yang sayang sama dede! Your fam loves u, your friends loves u, my family loves u, and I loves you soooo muchhhhhhh. Lupain dulu semua tugas dan jangan mikirin yang pusing pusing hari ini. Jangan lupa bersyukur dan berdoa ke Tuhan yaa, and hopefully all of your wishes comes true. 
                  This is the first birthday we've celebrated together, and I hope it's the first of many more to com.
                </p>
                <p className="font-medium text-foreground pt-4">
                  Once again, Happy birthday dede, my girlfriend,  my sweet Vanessa, my sound of rain, my complimentary
                  side of the color wheel, and my everything.
                </p>
                <p className="text-right italic">
                  I love you so much ❤️ - Bubub
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Wishes Section */}
          <Card className="group hover:shadow-xl hover:shadow-gallery-shadow transition-all duration-500 border-museum-highlight/50 animate-fade-in-up opacity-0 delay-300 bg-gradient-to-br from-card to-purple-50/20">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-museum-highlight/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-museum-highlight" />
                </div>
                <h2 className="text-2xl font-medium">Birthday Wishes</h2>
              </div>
              
              <div className="space-y-3">
                {[
                  "Semoga nilai kuliah dede bagus dan cepet lulus",
                  "Dede makin rajin and makin pinter",
                  "Dede makin cantik, meskipun skrg udah cantikk bangettttt",
                  "Makin deket sama Tuhan, selalu rajin berdoa, bersyukur, dan sering ke Gereja",
                  "Your relationship with your family getting better",
                  "Makin sayang sama I, jangan bosen sama I",
                  "Dede punya temen temen yang baik, yang supportive",
                  "Dede selalu dilindunginn dari orang yang jahat, dari bad things",
                  "Harus selalu happy! Harus positive thinking! Gaboleh mikir yang jelek jelek lagi ya",
                  "Jaga kesehatan, makin rajin workoutt",
                  "Your career and wealth getting better, ngajar mandarinnya lancar, and bisnis bakingnya semoga lancar",
                ].map((wish, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
                    <p className="text-muted-foreground">{wish}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video/Media Section */}
        <Card className="mb-12 border-accent/50 animate-fade-in-up opacity-0 delay-400 overflow-hidden bg-gradient-to-br from-card to-background">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <Gift className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-medium">Your Birthday Montage</h2>
            </div>
            
            {/* Placeholder for video/images montage */}
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center space-y-4 p-8">
                <PartyPopper className="w-16 h-16 mx-auto text-accent animate-gentle-float" />
                <p className="text-muted-foreground max-w-md">
                  This is where your special birthday video montage or photo slideshow 
                  will appear—filled with our favorite memories and moments.
                </p>
                <p className="text-sm text-muted-foreground/70">
                  You can add a video URL, embed a slideshow, or upload photos here
                </p>
              </div>
            </div>

            {/* Fun facts or memory highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {[
                { label: "Days Together", value: "245+", icon: Heart },
                { label: "Memories Made", value: "∞", icon: Sparkles },
                { label: "Smiles Shared", value: "Countless", icon: Cake },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-background/50 to-muted/30 border border-border/50"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-2xl font-medium text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom Message */}
        <div className="text-center space-y-6 animate-fade-in-up opacity-0 delay-500">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 animate-gentle-float">
            <Heart className="w-10 h-10 text-accent" />
          </div>
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "In a museum of moments, you are the masterpiece. 
            Happy birthday to the art of my life."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
