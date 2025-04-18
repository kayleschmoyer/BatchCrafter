'use client'

import { TaskType } from "./StepTaskType";

interface Props {
  task: TaskType;
  options: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function StepTaskOptions({ task, options, onChange }: Props) {
  const renderInput = (label: string, field: string, placeholder: string) => (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type="text"
        value={options[field] || ""}
        onChange={(e) => onChange(field, e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md bg-background border-[var(--border)] text-foreground"
      />
    </div>
  );

  return (
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Step 3: Enter Task Details</h2>

      {task === "run-program" && (
        <>
          {renderInput("Program Path", "programPath", "C:\\Path\\To\\YourApp.exe")}
        </>
      )}

      {task === "copy-files" && (
        <>
          {renderInput("Source Folder", "sourcePath", "C:\\source")}
          {renderInput("Destination Folder", "destinationPath", "D:\\destination")}
        </>
      )}

      {task === "delete-folder" && (
        <>
          {renderInput("Folder Path to Delete", "folderPath", "C:\\Path\\To\\Delete")}
        </>
      )}
    </div>
  );
}
