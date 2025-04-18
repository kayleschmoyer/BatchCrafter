'use client'

import { useState } from "react";
import { StepSidebar } from "@/components/layout/StepSidebar";
import { StepContainer } from "@/components/layout/StepContainer";
import { ScriptPanel } from "@/components/layout/ScriptPanel";
import { ScriptType } from "@/components/steps/StepScriptType";
import { TaskType } from "@/components/steps/StepTaskType";
import { buildScript } from "@/logic/builder";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [scriptType, setScriptType] = useState<ScriptType>("batch");
  const [taskType, setTaskType] = useState<TaskType>("run-program");
  const [taskOptions, setTaskOptions] = useState<Record<string, string>>({});
  const [advanced, setAdvanced] = useState<Record<string, boolean>>({
    silent: true,
    showConsole: false,
    logging: true,
  });
  const [proMode, setProMode] = useState(false);
  const [proLogic, setProLogic] = useState<{ type: string; value: string }[]>([]);

  const script = buildScript(scriptType, taskType, taskOptions, advanced, proLogic);

  return (
    <main className="grid grid-cols-[240px_1fr_420px] h-screen bg-background text-foreground overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className="h-full overflow-y-auto border-r border-border bg-sidebar px-4 py-6">
        <StepSidebar
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          proUnlocked={proMode}
        />
      </aside>

      {/* Form Steps */}
      <section className="h-full overflow-y-auto px-6 py-8 bg-background">
        <StepContainer
          stepIndex={currentStep}
          scriptType={scriptType}
          setScriptType={setScriptType}
          taskType={taskType}
          setTaskType={setTaskType}
          taskOptions={taskOptions}
          setTaskOptions={setTaskOptions}
          advanced={advanced}
          setAdvanced={setAdvanced}
          proMode={proMode}
          setProMode={setProMode}
          proLogic={proLogic}
          setProLogic={setProLogic}
          onNext={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}
          onBack={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
        />
      </section>

      {/* Script Preview */}
      <aside className="h-full overflow-y-auto border-l border-border px-6 py-8 bg-card shadow-inner">
        <ScriptPanel script={script} type={scriptType} />
      </aside>

    </main>
  );
}
