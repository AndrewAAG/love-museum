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
import bumus from "@/assets/bumus.jpeg";
import dakken from "@/assets/dakken.png";
import pot2 from "@/assets/pottery_2.jpg";
import pot4 from "@/assets/pottery_4.png";
import pot from "@/assets/pottery.jpg";
import toyib_1 from "@/assets/toyib_1.jpg";
import toyib_2 from "@/assets/toyib_2.jpg";
import toyib_3 from "@/assets/toyib_3.jpg";
import queen1 from "@/assets/queen_ultah_oma.jpg";
import queen2 from "@/assets/queen_ultah_oma_2.jpg";
import ikin1 from "@/assets/ikin_1.jpg";
import ikin2 from "@/assets/ikin_2.jpg";
import ikin3 from "@/assets/ikin_3.jpg";
import justus1 from "@/assets/justus1.jpg";
import justus2 from "@/assets/justus2.jpg";
import justus3 from "@/assets/justus3.jpg";
import paw1 from "@/assets/paw1.jpg";
import paw2 from "@/assets/paw2.jpg";
import paw3 from "@/assets/paw3.jpg";
import paw4 from "@/assets/paw4.jpg";

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
  {
    id: 10,
    title: "Bumus",
    date: "November 9, 2025",
    images: [
      bumus,
    ],
    description: "Favorite Restaurant! Makanan paling enak di bumi",
    fullStory: "Ini my favorite restaurant in the world! Makanannya enak banget hampir semua menu. Dede juga suka kannnn. Makanan yang enak: ayam goreng, kembung balado, ikan tauco, ayam pop, rendang, nasi rames, semuanya enak pokonya.",
    tags: ["food & drink"],
  },
  {
    id: 11,
    title: "Dakken",
    date: "November 9, 2025",
    images: [
      dakken,
    ],
    description: "Special Restaurant. Good foods and Good Place. The place that you become my girlfriend.",
    fullStory: "Very special restaurant karena ini tempat i confess and asked you to be my girlfriend. Makanannya enak banget, gw suka nachosnya, terus salmonnya enak, steaknya enak. Dede makan mac and cheese porsinya gede terus ga abis. Definitely the most memorable restaurant.",
    tags: ["food & drink"],
  },
  {
    id: 12,
    title: "Justus",
    date: "November 15, 2025",
    images: [
      justus1, justus2, justus3
    ],
    description: "One of the best steak resto",
    fullStory: "Kita kesini ngerayain my grandma birthdayy. Steak di justus enak banget, fav i yang sirlion",
    tags: ["food & drink"],
  },
  {
    id: 13,
    title: "Parents Are Watching",
    date: "November 15, 2025",
    images: [
      paw4, paw1, paw2, paw3
    ],
    description: "Aesthetic Cafe, Great Dessert",
    fullStory: "Cafenya estetik, designnya bagus. Tiramisu sama eskrimnya juga enak banget n harganya oke. Tapi parkir dipinggir jalan and nyari pintu masuknya awalnya susah. Terus isi tempatnya the nuruls semua and photoboothnya rusakkk.",
    tags: ["food & drink"],
  },
  {
    id: 14,
    title: "Pottery",
    date: "November 16, 2025",
    images: [
      pot2, pot4, pot
    ],
    description: "SUPER FUN ACTIVITY! Had a lot of fun doing this",
    fullStory: "Ini seruu bangetttt. Masuk ke gang kecil di jalan Astana Anyar, jauh juga jalannya. Terus ikut class dari jam 9 - 12. I bikin vas bunga bebek buat dede and dede bikinin polaroid photo holderr. Kita diajarin sama Mas Lucky.",
    tags: ["activity"],
  },
  {
    id: 15,
    title: "Nasgor Pak Ikin",
    date: "November 16, 2025",
    images: [
      ikin1, ikin2, ikin3
    ],
    description: "Nasgor Gerobakan in Asia Afrikaa. Recommended by Dede.",
    fullStory: "Nasgor Gerobakan di Jalan Homan, Belok dikit dari jalan Asia Afrika di gang kecil. Rasanya enak banget terus menunya juga banyak. I pesen yang ayam sama kambing. Porsinya juga okay, tapi buat dede kebanyakan. Harganya juga cheap. Parkirnya agak susah tapi soalnya gang nya kecil.",
    tags: ["food & drink"],
  },
  {
    id: 16,
    title: "Queen",
    date: "November 17, 2025",
    images: [
      queen1, queen2
    ],
    description: "Best chinese restaurant in Bandung. Makanannya bikin kalap n gabisa berenti makan.",
    fullStory: "First time dede meet my big family. Dede ikut ke acara ultah my grandma (68th birthday). Di queen makannya enak banget, semua menunya enak. Ada babi hong, nasi goreng, telor kepiting, ayam rebus. Pokonya semuanya enak deh.",
    tags: ["food & drink"],
  },
  {
    id: 17,
    title: "Nasgor Toyib",
    date: "November 23, 2025",
    images: [
      toyib_1, toyib_2, toyib_3
    ],
    description: "Great nasgor gerobakan in Batununggal. Loved by my fam and dede love it too..",
    fullStory: "Nasi Goreng kedua terenak di Bandung (for me), and lokasinya deket banget dari rumah I. Dede juga bilang ini enak banget bahkan lebih enak dari ikin. Porsinya buat dede kebanyakan, dede cuma abis setengah. Harganya juga cheap. Bakal sering bawa dede makan ini.",
    tags: ["food & drink"],
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
