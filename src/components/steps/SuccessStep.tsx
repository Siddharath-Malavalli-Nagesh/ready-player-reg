import { useEffect, useState } from 'react';
import { CheckCircle, Sparkles, Trophy, Mail, Loader2 } from "lucide-react";
import { FormData } from "../RegistrationForm";
import { saveRegistrationData } from "/Users/siddharath-malavalli-nagesh/ready-player-reg/database.ts";

interface SuccessStepProps {
  formData: FormData;
}

export const SuccessStep = ({ formData }: SuccessStepProps) => {
  const [saving, setSaving] = useState(true);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saveData = async () => {
      try {
        setSaving(true);
        await saveRegistrationData(formData);
        setSaved(true);
        setError(null);
      } catch (err) {
        console.error('Error saving registration:', err);
        setError('Failed to save registration. Please contact support.');
      } finally {
        setSaving(false);
      }
    };

    saveData();
  }, [formData]);

  if (saving) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Loader2 className="h-16 w-16 text-accent animate-spin" />
        </div>
        <div>
          <h2 className="text-3xl font-mono font-bold text-accent mb-4">
            SAVING REGISTRATION
          </h2>
          <p className="text-muted-foreground">
            Please wait while we process your registration...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <span className="text-red-500 text-2xl">⚠️</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-mono font-bold text-red-500 mb-4">
            REGISTRATION ERROR
          </h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <p className="text-sm text-muted-foreground">
            Registration ID: {Date.now()} - Please include this when contacting support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      
      <div>
        <h2 className="text-3xl font-mono font-bold text-green-500 mb-4">
          REGISTRATION SUCCESSFUL
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Welcome to Ready Player One, {formData.name}!</p>
          <div className="bg-muted/20 p-4 rounded-lg space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              Check your email for confirmation and next steps
            </p>
            <p className="flex items-center justify-center gap-2">
              <Trophy className="h-4 w-4" />
              Join our Discord server to connect with other players
            </p>
          </div>
          <p className="font-mono text-accent">
            {"> Game starts March 15, 2025"}
          </p>
        </div>
      </div>
    </div>
  );
};
