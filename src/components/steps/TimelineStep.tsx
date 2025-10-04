import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Clock } from "lucide-react";

interface TimelineStepProps {
  onNext: () => void;
  onBack: () => void;
}

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "09:00 AM",
    title: "Check-in & Registration",
    description: "Get your badge and swag bag",
    color: "primary"
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome speech & challenge reveal",
    color: "secondary"
  },
  {
    time: "11:00 AM",
    title: "Hacking Begins",
    description: "Start building your project",
    color: "accent"
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Fuel up with food & networking",
    color: "primary"
  },
  {
    time: "06:00 PM",
    title: "Workshop Session",
    description: "Learn from industry experts",
    color: "secondary"
  },
  {
    time: "12:00 AM",
    title: "Midnight Snacks",
    description: "Keep that energy up!",
    color: "accent"
  },
  {
    time: "10:00 AM",
    title: "Submissions Due",
    description: "Final deadline for all projects",
    color: "primary"
  },
  {
    time: "02:00 PM",
    title: "Judging & Demos",
    description: "Show off your creation",
    color: "secondary"
  },
  {
    time: "04:00 PM",
    title: "Closing Ceremony",
    description: "Winners announced!",
    color: "accent"
  }
];

export const TimelineStep = ({ onNext, onBack }: TimelineStepProps) => {
  const getColorClasses = (color: TimelineEvent["color"]) => {
    switch (color) {
      case "primary":
        return "border-primary text-primary";
      case "secondary":
        return "border-secondary text-secondary";
      case "accent":
        return "border-accent text-accent";
    }
  };

  return (
    <div className="space-y-8 animate-slide-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gradient uppercase tracking-wide">
          Event Timeline
        </h2>
        <p className="text-muted-foreground font-mono">{">"} SCHEDULE OF OPERATIONS</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative space-y-6 before:absolute before:left-8 before:top-0 before:bottom-0 before:w-px before:bg-primary/30">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-20 group">
              <div className={`absolute left-5 top-3 w-6 h-6 rounded-full border-2 ${getColorClasses(event.color)} bg-background flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                <Clock className="w-3 h-3" />
              </div>
              <div className="p-4 border border-muted/30 rounded-lg bg-card/30 hover:border-primary/50 transition-all duration-300 hover:glow-cyan">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                  <span className={`text-sm font-mono font-bold ${getColorClasses(event.color)}`}>
                    {event.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button onClick={onBack} variant="outline" size="lg">
          <ChevronLeft className="w-5 h-5" />
          BACK
        </Button>
        <Button onClick={onNext} variant="cyber" size="lg">
          REGISTER NOW
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
