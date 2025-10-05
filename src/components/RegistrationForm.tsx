import { useState } from "react";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WelcomeStep } from "./steps/WelcomeStep";
import { EventDetailsStep } from "./steps/EventDetailsStep";
import { TimelineStep } from "./steps/TimelineStep";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { UniversityStep } from "./steps/UniversityStep";
import { TeamStep } from "./steps/TeamStep";
import { SuccessStep } from "./steps/SuccessStep";
import { ProgressBar } from "./ProgressBar";

export interface TeamMember {
  name: string;
  university?: string;
  email?: string;
}


export interface FormData {
  name: string;
  email: string;
  university: string;
  teamName: string;
  teamSize: string;
  teamMembers: TeamMember[];
  needTeamHelp: boolean;
}


export interface FirestoreFormData {
  "Full Name": string;
  "Email Address": string;
  "University / College Name": string;
  "Team Name": string;
  "Team Size": number;
  "Member 2 Name"?: string;
  "Member 2 Email"?: string;
  "Member 3 Name"?: string;
  "Member 3 Email"?: string;
  "Member 4 Name"?: string;
  "Member 4 Email"?: string;
}
const TOTAL_STEPS = 7;

export const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    university: "",
    teamName: "",
    teamSize: "1",
    teamMembers: [],
    needTeamHelp: false,
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onNext={nextStep} />;
      case 1:
        return <EventDetailsStep onNext={nextStep} onBack={prevStep} />;
      case 2:
        return <TimelineStep onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />;
      case 4:
        return <UniversityStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />;
      case 5:
        return <TeamStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />;
      case 6:
        return <SuccessStep formData={formData} />;
      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {currentStep > 0 && currentStep < TOTAL_STEPS - 1 && (
          <ProgressBar currentStep={currentStep - 1} totalSteps={TOTAL_STEPS - 2} />
        )}
        <Card className="border-glow bg-card/80 backdrop-blur-sm animate-fade-in">
          <div className="p-8 md:p-12">
            {renderStep()}
          </div>
        </Card>
      </div>
    </div>
  );
};
