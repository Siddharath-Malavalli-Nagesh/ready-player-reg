import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronLeft, GraduationCap } from "lucide-react";
import { FormData } from "../RegistrationForm";

interface UniversityStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const UniversityStep = ({ formData, updateFormData, onNext, onBack }: UniversityStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.university) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-slide-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gradient uppercase tracking-wide">
          Academic Base
        </h2>
        <p className="text-muted-foreground font-mono">{">"} YOUR HOME INSTITUTION</p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-mono text-secondary uppercase tracking-wider flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            University/College Name *
          </label>
          <Input
            type="text"
            value={formData.university}
            onChange={(e) => updateFormData({ university: e.target.value })}
            placeholder="Enter your institution name"
            required
            className="text-base"
          />
          <p className="text-xs text-muted-foreground font-mono">{">"} Full official name preferred</p>
        </div>

        <div className="space-y-4 p-6 border border-secondary/30 rounded-lg bg-card/30">
          <h3 className="text-sm font-bold text-secondary uppercase tracking-wide">University Perks</h3>
          <ul className="space-y-2 text-sm text-muted-foreground font-mono">
            <li className="flex items-center gap-2">
              <span className="text-secondary">▸</span> Exclusive workshops
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">▸</span> Alumni networking
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">▸</span> University-specific prizes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">▸</span> Recruitment opportunities
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button onClick={onBack} type="button" variant="outline" size="lg">
          <ChevronLeft className="w-5 h-5" />
          BACK
        </Button>
        <Button type="submit" variant="cyber" size="lg" disabled={!formData.university}>
          CONTINUE
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
};
