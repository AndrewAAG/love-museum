import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  phase: string;
}

interface TimelineMarkerProps {
  event: TimelineEvent;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const TimelineMarker = ({ event, index, isActive, onHover, onLeave }: TimelineMarkerProps) => {
  const isEven = index % 2 === 0;
  const Icon = event.icon;

  return (
    <div 
      className="relative animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-center">
        {/* Left Side Content (for even indices) */}
        {isEven && (
          <>
            <div className="text-right pr-8">
              <Card className={`transition-all duration-500 ${
                isActive 
                  ? 'border-accent shadow-lg shadow-gallery-shadow transform scale-105' 
                  : 'border-border/50 hover:border-accent/50'
              }`}>
                <CardContent className="p-6 space-y-3">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {event.phase}
                  </Badge>
                  <h3 className="text-2xl font-medium text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Center Marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} backdrop-blur-sm border-4 border-background flex items-center justify-center transition-all duration-500 ${
                isActive ? 'scale-125 shadow-xl' : 'scale-100'
              }`}>
                <Icon className={`w-7 h-7 transition-all duration-500 ${
                  isActive ? 'text-accent' : 'text-foreground/70'
                }`} />
              </div>
            </div>
            
            {/* Empty right side */}
            <div />
          </>
        )}

        {/* Right Side Content (for odd indices) */}
        {!isEven && (
          <>
            <div /> {/* Empty left side */}
            
            {/* Center Marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} backdrop-blur-sm border-4 border-background flex items-center justify-center transition-all duration-500 ${
                isActive ? 'scale-125 shadow-xl' : 'scale-100'
              }`}>
                <Icon className={`w-7 h-7 transition-all duration-500 ${
                  isActive ? 'text-accent' : 'text-foreground/70'
                }`} />
              </div>
            </div>
            
            <div className="pl-8">
              <Card className={`transition-all duration-500 ${
                isActive 
                  ? 'border-accent shadow-lg shadow-gallery-shadow transform scale-105' 
                  : 'border-border/50 hover:border-accent/50'
              }`}>
                <CardContent className="p-6 space-y-3">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {event.phase}
                  </Badge>
                  <h3 className="text-2xl font-medium text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-6 items-start">
        {/* Left Marker */}
        <div className="flex-shrink-0 pt-1">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} backdrop-blur-sm border-4 border-background flex items-center justify-center transition-all duration-500 ${
            isActive ? 'scale-110 shadow-lg' : 'scale-100'
          }`}>
            <Icon className={`w-5 h-5 transition-all duration-500 ${
              isActive ? 'text-accent' : 'text-foreground/70'
            }`} />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 pb-2">
          <Card className={`transition-all duration-500 ${
            isActive 
              ? 'border-accent shadow-lg shadow-gallery-shadow' 
              : 'border-border/50'
          }`}>
            <CardContent className="p-5 space-y-3">
              <Badge variant="secondary" className="text-xs font-normal">
                {event.phase}
              </Badge>
              <h3 className="text-xl font-medium text-foreground">
                {event.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {event.date}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TimelineMarker;
