'use client'

export type ScriptType = "batch" | "powershell";

interface Props {
  selected: ScriptType;
  onChange: (type: ScriptType) => void;
}

export function StepScriptType({ selected, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 1: Choose Script Type</h2>
      <div className="flex gap-4">
        <button
          onClick={() => onChange("batch")}
          className={`px-6 py-4 rounded-xl text-sm font-medium border transition 
            ${selected === "batch"
              ? "bg-yellow-400 text-black border-yellow-600 shadow-lg"
              : "bg-transparent border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
        >
          Batch File (.bat)
        </button>
        <button
          onClick={() => onChange("powershell")}
          className={`px-6 py-4 rounded-xl text-sm font-medium border transition 
            ${selected === "powershell"
              ? "bg-yellow-400 text-black border-yellow-600 shadow-lg"
              : "bg-transparent border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
        >
          PowerShell Script (.ps1)
        </button>
      </div>
    </div>
  );
}
