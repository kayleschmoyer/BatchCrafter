'use client'

interface Props {
  options: Record<string, boolean>;
  onChange: (key: string, value: boolean) => void;
}

export function StepAdvancedOptions({ options, onChange }: Props) {
  const toggle = (key: string) => {
    if (key === "silent" && !options.silent) {
      // User is enabling silent → disable showConsole
      onChange("silent", true);
      onChange("showConsole", false);
    } else if (key === "showConsole" && !options.showConsole) {
      // User is enabling showConsole → disable silent
      onChange("showConsole", true);
      onChange("silent", false);
    } else {
      onChange(key, !options[key]);
    }
  };

  return (
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Step 4: Advanced Options</h2>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.silent || false}
            onChange={() => toggle("silent")}
          />
          Run silently (no window)
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.showConsole || false}
            onChange={() => toggle("showConsole")}
          />
          Show console output
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.logging || false}
            onChange={() => toggle("logging")}
          />
          Enable logging to file
        </label>
      </div>
    </div>
  );
}
