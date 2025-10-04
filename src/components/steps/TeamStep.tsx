import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronLeft, Users, Shield } from "lucide-react";
import { FormData } from "../RegistrationForm";

interface TeamStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const TeamStep = ({ formData, updateFormData, onNext, onBack }: TeamStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.teamName && formData.teamSize) {
      onNext();
    }
  };

  const teamSizes = ["1", "2", "3", "4"];

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-slide-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gradient uppercase tracking-wide">
          Squad Formation
        </h2>
        <p className="text-muted-foreground font-mono">{">"} ASSEMBLE YOUR TEAM</p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-mono text-accent uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Team Name *
          </label>
          <Input
            type="text"
            value={formData.teamName}
            onChange={(e) => updateFormData({ teamName: e.target.value })}
            placeholder="Choose an epic team name"
            required
            className="text-base"
          />
          <p className="text-xs text-muted-foreground font-mono">{">"} Make it memorable and unique</p>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-mono text-accent uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4" />
            Team Size *
          </label>
          <div className="grid grid-cols-4 gap-3">
            {teamSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => updateFormData({ teamSize: size })}
                className={`p-4 border-2 rounded-lg font-mono font-bold text-lg transition-all duration-300 ${
                  formData.teamSize === size
                    ? "border-accent bg-accent/20 text-accent glow-pink scale-105"
                    : "border-muted text-muted-foreground hover:border-accent/50 hover:bg-accent/5"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-mono">{">"} Select number of members (1-4)</p>
        </div>

        <div className="space-y-3 p-6 border border-accent/30 rounded-lg bg-card/30">
          <h3 className="text-sm font-bold text-accent uppercase tracking-wide flex items-center gap-2">
            <Users className="w-4 h-4" />
            Team Guidelines
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground font-mono">
            <li className="flex items-center gap-2">
              <span className="text-accent">▸</span> All members must register separately
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">▸</span> Use the same team name
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">▸</span> Solo hackers welcome!
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">▸</span> Max 4 members per team
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button onClick={onBack} type="button" variant="outline" size="lg">
          <ChevronLeft className="w-5 h-5" />
          BACK
        </Button>
        <Button type="submit" variant="neon" size="lg" disabled={!formData.teamName || !formData.teamSize}>
          SUBMIT
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
};
