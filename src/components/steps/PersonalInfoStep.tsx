import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronLeft, User, Mail } from "lucide-react";
import { FormData } from "../RegistrationForm";

interface PersonalInfoStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const PersonalInfoStep = ({ formData, updateFormData, onNext, onBack }: PersonalInfoStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-slide-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gradient uppercase tracking-wide">
          Player Identity
        </h2>
        <p className="text-muted-foreground font-mono">{">"} ENTER YOUR CREDENTIALS</p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-mono text-primary uppercase tracking-wider flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name *
          </label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            placeholder="Enter your name"
            required
            className="text-base"
          />
          <p className="text-xs text-muted-foreground font-mono">{">"} As it appears on official documents</p>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-mono text-primary uppercase tracking-wider flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email Address *
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            placeholder="your.email@example.com"
            required
            className="text-base"
          />
          <p className="text-xs text-muted-foreground font-mono">{">"} We'll send important updates here</p>
        </div>

        <div className="p-4 border border-accent/30 rounded-lg bg-accent/5">
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-accent font-bold">⚡ PRO TIP:</span> Use your university email for verification benefits
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button onClick={onBack} type="button" variant="outline" size="lg">
          <ChevronLeft className="w-5 h-5" />
          BACK
        </Button>
        <Button type="submit" variant="cyber" size="lg" disabled={!formData.name || !formData.email}>
          CONTINUE
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
};
