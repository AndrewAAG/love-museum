import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// This would typically come from a shared data file or API
const memories = [
  {
    id: 1,
    title: "Ohayou Ciumbuleuit",
    date: "October 2, 2025",
    images: [
      "../src/assets/ohayou.jpg",
    ],
    description: "That little cafe where everything started.",
    fullStory: "Cafe depan UNPAR yang jadi tempat pertama kali kita hangout. Kita mam kaya toast and rice bowl. Dede makan rice bowlnya ga abis terus dikasih ke I karena porsinya gede. ",
    tags: ["milestone", "food"],
  },
  {
    id: 2,
    title: "RUI 琉偉",
    date: "October 5, 2025",
    images: [
      "../src/assets/rui.jpg",
      "../src/assets/rui_3.avif",
      "https://images.unsplash.com/photo-1472791108553-c9405341e398?w=1200&q=80",
    ],
    description: "Japanese Restaurant di Jalan Bahureksa.",
    fullStory: "Tempat pertama kali First Date. Restorannya fancy, tempatnya enak. Kita pesen mam yang beef hamburg diatas charcoal sama edamame. Rasa makanannya enak and beefnya juicy. Parkirannya juga cukup oke, bisa parkir di lahan RUI nya, atau di sebrang sebrangnya juga bisa parkir. Harganya yaa oke la, medium price, around 100rban ++ per orang. ",
    tags: ["milestone", "food"],
  },
  {
    id: 3,
    title: "Cuanki Serayu",
    date: "October 5, 2025",
    images: [
      "../src/assets/cuanki_serayu.webp",
    ],
    description: "Best Cuanki in Bandung",
    fullStory: "Tempat pertama first date. Dede baru pertama kali makan Cuanki terus dibawa kesini dan katanya enak banget, sampe pengen kesini lagi. Lokasinya di jalan Cihapit, tempat utamanya kaya di yang gambar. Tapi ternyata di deket situnya (maju dikit terus belok kiri) itu ada tempat keduanya juga. Jadi kalo di yang main nya penuh, bisa makan disitu. Harga cheap. ",
    tags: ["food", "milestone"],
  },
  {
    id: 4,
    title: "Cafe Bali",
    date: "May 10, 2023",
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
    ],
    description: "The pasta was burnt, the kitchen was a mess, but we made the best memories.",
    fullStory: "Our ambitious plan to cook a five-course Italian dinner quickly devolved into beautiful chaos. The pasta sauce somehow ended up on the ceiling (we're still not sure how), the garlic bread was more 'charcoal' than 'golden,' and we may have set off the smoke alarm twice. But as we sat on the kitchen floor, surrounded by flour and failed attempts at tiramisu, eating takeout pizza and laughing at our culinary disasters, I realized this was more perfect than any fancy dinner could have been. We learned that day that it's not about the perfect meal—it's about the laughter, the teamwork, and the memories we create together, even in failure.",
    tags: ["food moments", "funny"],
  },
  {
    id: 5,
    title: "Noisy Matcha",
    date: "July 3, 2023",
    images: [
      "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=1200&q=80",
      "https://images.unsplash.com/photo-1481653125770-b78c206c59d4?w=1200&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80",
    ],
    description: "Wrapped in blankets, watching the rain, with nothing but time and each other.",
    fullStory: "The storm rolled in unexpectedly, canceling all our outdoor plans. Instead of disappointment, we embraced it. We built a fort of blankets and pillows in the living room, made hot chocolate with way too many marshmallows, and spent the entire day in our cozy cocoon. We watched old movies, read passages from our favorite books to each other, and listened to the rhythmic drumming of rain against the windows. There was something magical about being cut off from the world, just the two of us in our little sanctuary. No phones, no distractions—just us, the rain, and the comfortable silence that only comes when you're with someone who feels like home.",
    tags: ["cozy", "favorite"],
  },
  {
    id: 6,
    title: "Atmosphere",
    date: "August 17, 2023",
    images: [
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=1200&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80",
      "https://images.unsplash.com/photo-1566127444979-b3d2b34f45b4?w=1200&q=80",
    ],
    description: "Walking through art galleries, pretending to be sophisticated, stealing kisses when no one looked.",
    fullStory: "We spent the afternoon wandering through the contemporary art museum, trying to look cultured and sophisticated. You made up elaborate backstories for abstract paintings, each more ridiculous than the last, while I tried not to laugh too loudly in the quiet galleries. In front of a massive sculpture, when the guard wasn't looking, you pulled me close for a quick kiss. We debated the meaning of installations, pretended to understand modern art, and took far too many photos trying to recreate famous poses. As we left, you said it was one of your favorite dates, not because of the art, but because we could be silly together while surrounded by serious faces. That's when I knew—you make every ordinary moment extraordinary.",
    tags: ["travel", "favorite"],
  },
];

const MemoryDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const memory = memories.find((m) => m.id === Number(id));

  if (!memory) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Memory not found</p>
          <Button onClick={() => navigate("/gallery")}>
            Return to Gallery
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/gallery")}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Image Carousel */}
        <div className="mb-12 animate-fade-in">
          <Carousel className="w-full">
            <CarouselContent>
              {memory.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${memory.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Memory Details */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <time>{memory.date}</time>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            {memory.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {memory.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs capitalize font-normal bg-muted/50"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Full Story */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
              {memory.fullStory}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryDetail;
