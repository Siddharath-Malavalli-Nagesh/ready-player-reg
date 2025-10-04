import { CheckCircle, Sparkles, Trophy, Mail } from "lucide-react";
import { FormData } from "../RegistrationForm";

interface SuccessStepProps {
  formData: FormData;
}

export const SuccessStep = ({ formData }: SuccessStepProps) => {
  return (
    <div className="text-center space-y-8 py-8 animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <CheckCircle className="w-24 h-24 text-primary glow-cyan animate-pulse-glow" />
          <Sparkles className="w-8 h-8 text-accent absolute -top-2 -right-2 animate-bounce" />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gradient uppercase tracking-wider">
          Mission Accepted!
        </h1>
        <p className="text-xl text-secondary font-mono">
          REGISTRATION SUCCESSFUL
        </p>
      </div>

      <div className="max-w-lg mx-auto space-y-6">
        <div className="p-6 border border-primary/30 rounded-lg bg-card/50 text-left">
          <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wide">Player Profile</h3>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">NAME:</span>
              <span className="text-foreground font-bold">{formData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">EMAIL:</span>
              <span className="text-foreground">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">UNIVERSITY:</span>
              <span className="text-foreground">{formData.university}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">TEAM:</span>
              <span className="text-foreground font-bold">{formData.teamName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">MEMBERS:</span>
              <span className="text-foreground">{formData.teamSize}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 border border-secondary/30 rounded-lg bg-secondary/5">
            <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
            <p className="text-sm text-muted-foreground text-left font-mono">
              Check your email for confirmation and next steps
            </p>
          </div>

          <div className="flex items-center gap-3 p-4 border border-accent/30 rounded-lg bg-accent/5">
            <Trophy className="w-5 h-5 text-accent flex-shrink-0" />
            <p className="text-sm text-muted-foreground text-left font-mono">
              Join our Discord server to connect with other players
            </p>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-lg text-gradient font-bold uppercase tracking-wide animate-pulse">
            See you at the hackathon!
          </p>
          <p className="text-sm text-muted-foreground font-mono mt-2">
            {">"} Game starts March 15, 2025
          </p>
        </div>
      </div>
    </div>
  );
};
