'use client'

import { StepScriptType } from "@/components/steps/StepScriptType";
import { StepTaskType } from "@/components/steps/StepTaskType";
import { StepTaskOptions } from "@/components/steps/StepTaskOptions";
import { StepAdvancedOptions } from "@/components/steps/StepAdvancedOptions";
import { StepProMode } from "@/components/steps/StepProMode";
import { ScriptType } from "@/components/steps/StepScriptType";
import { TaskType } from "@/components/steps/StepTaskType";

interface Props {
  stepIndex: number;
  scriptType: ScriptType;
  setScriptType: (v: ScriptType) => void;
  taskType: TaskType;
  setTaskType: (v: TaskType) => void;
  taskOptions: Record<string, string>;
  setTaskOptions: (opts: Record<string, string>) => void;
  advanced: Record<string, boolean>;
  setAdvanced: (opts: Record<string, boolean>) => void;
  proMode: boolean;
  setProMode: (v: boolean) => void;
  proLogic: { type: string; value: string }[];
  setProLogic: (logic: { type: string; value: string }[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepContainer({
  stepIndex,
  scriptType,
  setScriptType,
  taskType,
  setTaskType,
  taskOptions,
  setTaskOptions,
  advanced,
  setAdvanced,
  proMode,
  setProMode,
  proLogic,
  setProLogic,
  onNext,
  onBack,
}: Props) {
  const updateTaskOption = (key: string, value: string) => {
    setTaskOptions({ ...taskOptions, [key]: value });
  };

  const updateAdvanced = (key: string, value: boolean) => {
    setAdvanced({ ...advanced, [key]: value });
  };

  const updateProLogic = (logic: { type: string; value: string }[]) => {
    setProLogic(logic);
  };

  return (
    <section className="p-8 space-y-6">
      {stepIndex === 0 && (
        <StepScriptType selected={scriptType} onChange={setScriptType} />
      )}

      {stepIndex === 1 && (
        <StepTaskType selected={taskType} onChange={setTaskType} />
      )}

      {stepIndex === 2 && (
        <StepTaskOptions
          task={taskType}
          options={taskOptions}
          onChange={updateTaskOption}
        />
      )}

      {stepIndex === 3 && (
        <StepAdvancedOptions options={advanced} onChange={updateAdvanced} />
      )}

      {stepIndex === 4 && (
        <StepProMode
          enabled={proMode}
          toggleEnable={() => setProMode(!proMode)}
          logic={proLogic}
          updateLogic={updateProLogic}
        />
      )}

      <div className="flex justify-between items-center pt-6 border-t border-[var(--border)] mt-10">
        <button
          onClick={onBack}
          disabled={stepIndex === 0}
          className="px-4 py-2 text-sm rounded border border-gray-400 hover:bg-gray-100 transition disabled:opacity-50"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={stepIndex === 4}
          className="px-4 py-2 text-sm bg-yellow-400 text-black font-semibold rounded border border-yellow-600 hover:bg-yellow-300 transition disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
