interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-muted-foreground font-mono">PROGRESS</span>
        <span className="text-sm text-primary font-mono font-bold">{Math.round(progress)}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden border border-white/20">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500 ease-out glow-red"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
              index <= currentStep ? "bg-primary border-white glow-red scale-125" : "bg-muted border-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
