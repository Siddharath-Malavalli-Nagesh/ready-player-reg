import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, MapPin, Calendar, Users } from "lucide-react";

interface EventDetailsStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const EventDetailsStep = ({ onNext, onBack }: EventDetailsStepProps) => {
  return (
    <div className="space-y-8 animate-slide-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gradient uppercase tracking-wide">
          Event Details
        </h2>
        <p className="text-muted-foreground font-mono">{">"} MISSION BRIEFING</p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="p-6 border-2 border-primary rounded-lg bg-card/80 hover:border-primary transition-all duration-300 glow-red">
          <div className="flex items-start gap-4">
            <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">When</h3>
              <p className="text-white font-mono font-bold">November 3-4, 2025</p>
              <p className="text-muted-foreground text-sm mt-1">48 hours of non-stop hacking</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-2 border-secondary rounded-lg bg-card/80 hover:border-secondary transition-all duration-300 glow-purple">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Where</h3>
              <p className="text-white font-mono font-bold">BITS PILANI DUBAI CAMPUS</p>
              <p className="text-muted-foreground text-sm mt-1">ACADEMIC CITY, DUBAI</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-2 border-accent rounded-lg bg-card/80 hover:border-accent transition-all duration-300 glow-cyan">
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Who</h3>
              <p className="text-white font-mono font-bold">250+ Developers</p>
              <p className="text-muted-foreground text-sm mt-1">Teams of 1-4 members</p>
            </div>
          </div>
        </div>

        <div className="p-6 border border-primary/20 rounded-lg bg-muted/30">
          <h3 className="text-lg font-bold text-primary mb-3">What to Expect</h3>
          <ul className="space-y-2 text-sm text-muted-foreground font-mono">
            <li className="flex items-center gap-2">
              <span className="text-primary">▸</span> Workshops from industry leaders
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">▸</span> Mentorship sessions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">▸</span> Free food & swag
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">▸</span> Networking opportunities
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button onClick={onBack} variant="outline" size="lg">
          <ChevronLeft className="w-5 h-5" />
          BACK
        </Button>
        <Button onClick={onNext} variant="cyber" size="lg">
          CONTINUE
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
