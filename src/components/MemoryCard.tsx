import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Memory {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
}

interface MemoryCardProps {
  memory: Memory;
  index: number;
}

const MemoryCard = ({ memory, index }: MemoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group overflow-hidden border-border/50 hover:border-accent transition-all duration-500 hover:shadow-xl hover:shadow-gallery-shadow animate-fade-in-up opacity-0 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => navigate(`/memory/${memory.id}`)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={memory.image}
          alt={memory.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-background font-medium text-xl mb-1">{memory.title}</h3>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6 space-y-4">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <time>{memory.date}</time>
        </div>

        {/* Title - visible when not hovering */}
        <h3 className="text-xl font-medium group-hover:text-accent transition-colors duration-300">
          {memory.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {memory.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {memory.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs capitalize font-normal bg-muted/50 hover:bg-accent/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MemoryCard;
