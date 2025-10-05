import { Button } from "@/components/ui/button";
import { Gamepad2, Zap, Trophy } from "lucide-react";

interface WelcomeStepProps {
  onNext: () => void;
}

export const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  return (
    <div className="text-center space-y-8 py-8">
      <div className="flex justify-center mb-6">
        <div className="relative">
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-fade-in uppercase tracking-wider">
          Ready Player One
        </h1>
        <p className="text-xl md:text-2xl text-secondary font-mono">
          NOVEMBER 23-24, 2025 | AT BITS PILANI DUBAI CAMPUS
        </p>
      </div>

      <div className="space-y-3 text-muted-foreground max-w-2xl mx-auto">
        <p className="text-lg">
          Welcome.. to Ready Player One
        <br/>
         a first of its kind Agentic AI gamified hackathon.
        </p>
        <p className="text-base font-mono">
          {">"} Level up your skills<br />
          {">"} Compete for glory<br />
          {">"} Build the future
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 pt-6">
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-primary rounded-lg bg-primary/10 glow-red">
          <Trophy className="w-5 h-5 text-white" />
          <span className="text-sm font-mono text-white font-bold">AED5K Prize Pool</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-secondary rounded-lg bg-secondary/10 glow-purple">
          <Zap className="w-5 h-5 text-white" />
          <span className="text-sm font-mono text-white font-bold">48 Hours</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-accent rounded-lg bg-accent/10 glow-cyan">
          <Gamepad2 className="w-5 h-5 text-white" />
          <span className="text-sm font-mono text-white font-bold">Epic Challenges</span>
        </div>
      </div>

      <Button
        onClick={onNext}
        size="lg"
        variant="cyber"
        className="mt-8 group"
      >
        START MISSION
        <Zap className="w-5 h-5 group-hover:animate-bounce" />
      </Button>
    </div>
  );
};
