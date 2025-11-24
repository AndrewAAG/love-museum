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
import ohayou from "@/assets/ohayou.jpg";
import rui from "@/assets/rui.jpg";
import rui2 from "@/assets/rui_3.avif";
import cserayu from "@/assets/cuanki_serayu.webp";
import cbali from "@/assets/cafe-bali_.webp";
import noisy from "@/assets/noisymatcha.jpg";
import nm2 from "@/assets/nm2.webp";
import atmo from "@/assets/atmo.jpg";
import atmo2 from "@/assets/atmosphere.jpg";
import gorm1 from "@/assets/gourmet_bday_andrew.jpg";
import gorm2 from "@/assets/gormet.webp";
import sgn from "@/assets/siagian.jpg";
import bake1 from "@/assets/baking_6.jpg";
import bake2 from "@/assets/baking_2.jpg";
import bake3 from "@/assets/baking_5.jpg";

// This would typically come from a shared data file or API
const memories = [
  {
    id: 1,
    title: "Ohayou Ciumbuleuit",
    date: "October 2, 2025",
    images: [
      ohayou,
    ],
    description: "That little cafe where everything started.",
    fullStory: "Cafe depan UNPAR yang jadi tempat pertama kali kita hangout. Kita mam kaya toast and rice bowl. Dede makan rice bowlnya ga abis terus dikasih ke I karena porsinya gede. ",
    tags: ["food & drink"],
  },
  {
    id: 2,
    title: "RUI 琉偉",
    date: "October 5, 2025",
    images: [
      rui,
      rui2,
    ],
    description: "Japanese Restaurant di Jalan Bahureksa.",
    fullStory: "Tempat pertama kali First Date. Restorannya fancy, tempatnya enak. Kita pesen mam yang beef hamburg diatas charcoal sama edamame. Rasa makanannya enak and beefnya juicy. Parkirannya juga cukup oke, bisa parkir di lahan RUI nya, atau di sebrang sebrangnya juga bisa parkir. Harganya yaa oke la, medium price, around 100rban ++ per orang. ",
    tags: ["food & drink"],
  },
  {
    id: 3,
    title: "Cuanki Serayu",
    date: "October 5, 2025",
    images: [
      cserayu,
    ],
    description: "Best Cuanki in Bandung",
    fullStory: "Tempat pertama first date. Dede baru pertama kali makan Cuanki terus dibawa kesini dan katanya enak banget, sampe pengen kesini lagi. Lokasinya di jalan Cihapit, tempat utamanya kaya di yang gambar. Tapi ternyata di deket situnya (maju dikit terus belok kiri) itu ada tempat keduanya juga. Jadi kalo di yang main nya penuh, bisa makan disitu. Harga cheap. ",
    tags: ["food & drink"],
  },
  {
    id: 4,
    title: "Cafe Bali",
    date: "October 12, 2025",
    images: [
      cbali,
    ],
    description: "Cafe Bali - Indonesian Restaurant di Jalan Riau",
    fullStory: "Mam di Cafe Bali sebelum badminton. Dede makan ayam yang warna kuning. I makan bistik sapi. Dede suka makanannya and harganya juga okay medium.",
    tags: ["food & drink"],
  },
  {
    id: 5,
    title: "Noisy Matcha",
    date: "October 12, 2025",
    images: [
      noisy,
      nm2
    ],
    description: "Noisy Matcha - New Matcha Store in Bandung",
    fullStory: "Grand opening Noisy Matcha di jalan Soka, deket Cafe Bali. I beli yang banana pudding, dede beli yang ada strawberrynya. Enak banget rasanya. Terus juga lucu disini pertama kali kita bikin story IG bareng WKWKWKWKWK, sampe banyak temen temen i reply. Harganya around 60k.",
    tags: ["food & drink"],
  },
  {
    id: 6,
    title: "Atmosphere",
    date: "October 12, 2025",
    images: [
      atmo,
      atmo2,
    ],
    description: "Great restaurant for dining, good place, and good vibes.",
    fullStory: "First time dede mam bareng my family, and meet my grandparents. Makanannya enakk, i makan steak terus dede makan nasi apa ya lupa. Tempatnya juga nice banget, ada musicnya. Very good restaurant and romantic for dinner.",
    tags: ["food & drink"],
  },
  {
    id: 7,
    title: "Gormeteria",
    date: "October 19, 2025",
    images: [
      gorm1,
      gorm2,
    ],
    description: "Great restaurant. Special day with special person.",
    fullStory: "My birthday dinner. Great restaurant. Makanannya enak enak, banyak pilihannya. Placenya juga enak and price masuk akal, medium price. Disini juga dede pertama kali ketemu my cousins, uncle, and aunt. ",
    tags: ["food & drink"],
  },
  {
    id: 8,
    title: "Lapo Siagian",
    date: "November 2, 2025",
    images: [
      sgn,
    ],
    description: "One of the best babi in Bandung",
    fullStory: "Ngajakin dede eat siagian for the first time, and she said enak bangettt. Kita kalap makannya, dede sampe makan 1.5 porsi, terus i makan 2.5 porsi daging + 2 nasi. Kuahnya enak banget. Real hidden gem. ",
    tags: ["food & drink"],
  },
  {
    id: 9,
    title: "Baking at Dede's House!",
    date: "November 2, 2025",
    images: [
      bake1, bake2, bake3,
    ],
    description: "The best bread and my favorite bread. Made by the most beautiful girl.",
    fullStory: "Very fun momentttt. I like this moment a lot. Gw suka ngeliatin lu bakingg, lu keliatan happy banget and enjoy baking. Terus banana bread lu and blueberry creamcheese bread nya SUPER ENAKKKK. Keluarga gw juga suka. Pengen lagi somedayy ya dede HEHEHEHHEE. Hopefully you will have your own bakery someday.",
    tags: ["food & drink", "activity"],
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
