'use client';

import { Check, Lock, Unlock } from "lucide-react";

interface Props {
  currentStep: number;
  setCurrentStep: (index: number) => void;
  proUnlocked: boolean;
}

const steps = [
  { title: "Script Type" },
  { title: "Task" },
  { title: "Options" },
  { title: "Advanced" },
  { title: "Pro Mode", proOnly: true },
];

export function StepSidebar({ currentStep, setCurrentStep, proUnlocked }: Props) {
  return (
    <aside className="h-full w-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border px-4 py-6 shadow-inner">
      <h2 className="text-xl font-bold tracking-tight mb-4">Steps</h2>

      <div className="space-y-2">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isLocked = step.proOnly && !proUnlocked;

          return (
            <button
              key={index}
              disabled={isLocked}
              onClick={() => setCurrentStep(index)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all
                ${isLocked ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50' : ''}
                ${isCurrent ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow' : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'}
              `}
            >
              <span>{step.title}</span>
              {isLocked ? (
                <Lock size={16} className="opacity-70" />
              ) : isCompleted ? (
                <Check size={16} className="text-green-400" />
              ) : isCurrent ? (
                <Unlock size={16} className="opacity-90" />
              ) : null}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
