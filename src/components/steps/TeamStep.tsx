import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, ChevronLeft, Users, Shield, UserPlus } from "lucide-react";
import { FormData, TeamMember } from "../RegistrationForm";

interface TeamStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const TeamStep = ({ formData, updateFormData, onNext, onBack }: TeamStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // If they need help, allow submission without team details
    if (formData.needTeamHelp) {
      onNext();
      return;
    }
    
    // Validate team details
    if (!formData.teamName || !formData.teamSize) {
      return;
    }
    
    // Validate team members (excluding the main registrant)
    const requiredMembers = parseInt(formData.teamSize) - 1;
    if (requiredMembers > 0) {
      const validMembers = formData.teamMembers.filter(m => m.name && m.university).length;
      if (validMembers < requiredMembers) {
        return;
      }
    }
    
    onNext();
  };

  const handleTeamSizeChange = (size: string) => {
    const newSize = parseInt(size);
    const currentMembers = formData.teamMembers || [];
    
    // Adjust team members array based on size (excluding main registrant)
    const requiredMembers = newSize - 1;
    let newMembers = [...currentMembers];
    
    if (requiredMembers > currentMembers.length) {
      // Add empty members
      for (let i = currentMembers.length; i < requiredMembers; i++) {
        newMembers.push({ name: "", university: "" });
      }
    } else if (requiredMembers < currentMembers.length) {
      // Remove excess members
      newMembers = newMembers.slice(0, requiredMembers);
    }
    
    updateFormData({ teamSize: size, teamMembers: newMembers });
  };

  const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...(formData.teamMembers || [])];
    newMembers[index] = { ...newMembers[index], [field]: value };
    updateFormData({ teamMembers: newMembers });
  };

  const teamSizes = ["1", "2", "3", "4"];
  const teamSize = parseInt(formData.teamSize) || 1;
  const needsTeamMembers = teamSize > 1 && !formData.needTeamHelp;

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-slide-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gradient uppercase tracking-wide">
          Squad Formation
        </h2>
        <p className="text-muted-foreground font-mono">{">"} ASSEMBLE YOUR TEAM</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Help Find Team Checkbox */}
        <div className="p-6 border-2 border-accent/30 rounded-lg bg-card/30">
          <div className="flex items-start gap-4">
            <Checkbox
              id="needTeamHelp"
              checked={formData.needTeamHelp}
              onCheckedChange={(checked) => updateFormData({ needTeamHelp: checked as boolean })}
              className="mt-1"
            />
            <div className="space-y-2">
              <label
                htmlFor="needTeamHelp"
                className="text-sm font-mono text-accent uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                Help me find a team
              </label>
              <p className="text-xs text-muted-foreground font-mono">
                {">"} Check this if you don't have a team yet and want us to help match you with other solo hackers
              </p>
            </div>
          </div>
        </div>

        {!formData.needTeamHelp && (
          <>
            {/* Team Name */}
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

            {/* Team Size */}
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
                    onClick={() => handleTeamSizeChange(size)}
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
              <p className="text-xs text-muted-foreground font-mono">{">"} Select total team members (1-4)</p>
            </div>

            {/* Team Members Details */}
            {needsTeamMembers && (
              <div className="space-y-4 p-6 border-2 border-primary/30 rounded-lg bg-card/40">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wide flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Team Members Info
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-4">
                  {">"} You're registering for the entire team. Add details for all members below:
                </p>
                
                {/* Main Registrant (You) */}
                <div className="p-4 border-2 border-secondary/40 rounded-lg bg-background/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-secondary font-bold">MEMBER 1 (YOU)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-muted-foreground uppercase">Name</label>
                      <Input
                        type="text"
                        value={formData.name}
                        disabled
                        className="text-sm bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-muted-foreground uppercase">University</label>
                      <Input
                        type="text"
                        value={formData.university}
                        disabled
                        className="text-sm bg-muted/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Other Team Members */}
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="p-4 border-2 border-accent/30 rounded-lg bg-background/30">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-accent font-bold">MEMBER {index + 2}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-muted-foreground uppercase">Name *</label>
                        <Input
                          type="text"
                          value={member.name}
                          onChange={(e) => updateTeamMember(index, "name", e.target.value)}
                          placeholder={`Team member ${index + 2} name`}
                          required
                          className="text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-muted-foreground uppercase">University *</label>
                        <Input
                          type="text"
                          value={member.university}
                          onChange={(e) => updateTeamMember(index, "university", e.target.value)}
                          placeholder={`University name`}
                          required
                          className="text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Team Guidelines */}
            <div className="space-y-3 p-6 border-2 border-accent/30 rounded-lg bg-card/30">
              <h3 className="text-sm font-bold text-accent uppercase tracking-wide flex items-center gap-2">
                <Users className="w-4 h-4" />
                Team Guidelines
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-accent">▸</span> One person registers for the entire team
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">▸</span> Add all team member names and universities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">▸</span> Solo hackers are welcome!
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">▸</span> Max 4 members per team
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between pt-6">
        <Button onClick={onBack} type="button" variant="outline" size="lg">
          <ChevronLeft className="w-5 h-5" />
          BACK
        </Button>
        <Button 
          type="submit" 
          variant="neon" 
          size="lg" 
          disabled={
            !formData.needTeamHelp && 
            (!formData.teamName || 
             !formData.teamSize || 
             (needsTeamMembers && formData.teamMembers.some(m => !m.name || !m.university)))
          }
        >
          SUBMIT
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
};
