export function downloadScript(content: string, type: "batch" | "powershell") {
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });
  
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = type === "batch" ? "script.bat" : "script.ps1";
    a.click();
    URL.revokeObjectURL(a.href);
  }
  