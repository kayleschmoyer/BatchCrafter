import type { ScriptType } from "@/components/steps/StepScriptType";
import type { TaskType } from "@/components/steps/StepTaskType";

interface ProLogicEntry {
  type: string;
  value: string;
}

export function buildScript(
  type: ScriptType,
  task: TaskType,
  options: Record<string, string>,
  advanced: Record<string, boolean>,
  proLogic: ProLogicEntry[]
): string {
  const scriptLines: string[] = [];

  const logLine = advanced.logging
    ? type === "batch"
      ? ` >> "%TEMP%\\batchcrafter.log" 2>&1`
      : ` | Out-File "$env:TEMP\\batchcrafter.log" -Append`
    : "";

  // Extract Pro Logic values
  const forValue = proLogic.find((l) => l.type === "for")?.value;
  const ifCondition = proLogic.find((l) => l.type === "if")?.value;

  // ===== BATCH SCRIPT GENERATION =====
  if (type === "batch") {
    // Silent and Console
    if (advanced.silent) scriptLines.push("@echo off");
    if (advanced.showConsole) scriptLines.push(`echo Running task: ${task}`);

    // Pro Logic: FOR Loop
    if (forValue) {
      scriptLines.push(`FOR %%G IN (${forValue}) DO echo Processing %%G`);
    }

    // Pro Logic: IF Condition
    if (ifCondition) {
      scriptLines.push(`IF EXIST "${ifCondition}" (`);
    }

    // Main task
    switch (task) {
      case "run-program":
        scriptLines.push(`start "" "${options.programPath || 'C:\\Path\\To\\App.exe'}"${logLine}`);
        break;
      case "copy-files":
        scriptLines.push(`xcopy "${options.sourcePath || 'C:\\source\\*'}" "${options.destinationPath || 'D:\\destination'}" /s /e /y${logLine}`);
        break;
      case "delete-folder":
        scriptLines.push(`rmdir /s /q "${options.folderPath || 'C:\\Path\\To\\Delete'}"${logLine}`);
        break;
    }

    // Close IF
    if (ifCondition) {
      scriptLines.push(")");
    }

    return scriptLines.join("\n");
  }

  // ===== POWERSHELL SCRIPT GENERATION =====
  if (type === "powershell") {
    switch (task) {
      case "run-program":
        return `Start-Process "${options.programPath || 'C:\\Path\\To\\App.exe'}"${logLine}`;
      case "copy-files":
        return `Copy-Item -Path "${options.sourcePath || 'C:\\source\\*'}" -Destination "${options.destinationPath || 'D:\\destination'}" -Recurse -Force${logLine}`;
      case "delete-folder":
        return `Remove-Item -Path "${options.folderPath || 'C:\\Path\\To\\Delete'}" -Recurse -Force${logLine}`;
    }
  }

  return "// Unsupported script configuration";
}
