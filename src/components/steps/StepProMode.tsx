'use client'

import { useState } from "react";

interface Props {
  enabled: boolean;
  logic: {
    type: string;
    value: string;
  }[];
  toggleEnable: () => void;
  updateLogic: (logic: { type: string; value: string }[]) => void;
}

const logicOptions = [
  {
    label: "IF condition",
    value: "if",
    description: "Only run the command if a file or folder exists.",
    placeholder: "%TEMP%\\trigger.txt",
  },
  {
    label: "FOR loop",
    value: "for",
    description: "Loop through files or items in a folder.",
    placeholder: "*.txt",
  },
];

export function StepProMode({ enabled, logic, toggleEnable, updateLogic }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (password.trim().toLowerCase() === "craft") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const updateLogicEntry = (type: string, value: string) => {
    const updated = logic.map((entry) =>
      entry.type === type ? { ...entry, value } : entry
    );
    updateLogic(updated);
  };

  const toggleLogic = (type: string) => {
    if (logic.find((l) => l.type === type)) {
      updateLogic(logic.filter((l) => l.type !== type));
    } else {
      updateLogic([...logic, { type, value: "" }]);
    }
  };

  // Reset logic if Pro Mode is disabled
  if (!enabled && logic.length > 0) {
    updateLogic([]);
  }

  return (
    <div className="mt-10 space-y-4 border-t pt-6">
      <h2 className="text-xl font-semibold flex justify-between items-center">
        Step 5: Pro Mode <span className="text-xs text-yellow-500">(Advanced)</span>
      </h2>

      {!unlocked ? (
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter Pro Mode Password</label>
          <div className="flex items-center gap-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-1 rounded border border-gray-400 bg-background"
              placeholder="••••••"
            />
            <button
              onClick={handleUnlock}
              className="px-4 py-1 text-sm rounded bg-yellow-400 text-black font-semibold border border-yellow-600 hover:bg-yellow-300 transition"
            >
              Unlock
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-600 font-semibold mt-1">
              ❌ Incorrect password. Please try again.
            </p>
          )}
          {unlocked && (
            <p className="text-sm text-green-600 font-medium mt-1">
              ✅ Access Granted — proceed with caution.
            </p>
          )}
        </div>
      ) : (
        <>
          <label className="flex items-center gap-2 font-medium">
            <input type="checkbox" checked={enabled} onChange={toggleEnable} />
            Enable Pro Mode (⚠️ use with caution)
          </label>

          {enabled && (
            <>
              <div className="bg-yellow-100 border border-yellow-500 text-yellow-800 text-sm p-3 rounded-md mt-2">
                <strong>⚠️ Pro Mode is active.</strong> Use conditional logic and loops responsibly — mistakes may cause unwanted file deletion or changes.
              </div>

              <div className="space-y-4 mt-4">
                {logicOptions.map((logicBlock) => {
                  const isEnabled = logic.find((l) => l.type === logicBlock.value);
                  return (
                    <div
                      key={logicBlock.value}
                      className="border p-4 rounded-md bg-background border-[var(--border)] space-y-2"
                    >
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="checkbox"
                          checked={!!isEnabled}
                          onChange={() => toggleLogic(logicBlock.value)}
                        />
                        {logicBlock.label}
                      </label>
                      <p className="text-sm text-muted-foreground">{logicBlock.description}</p>
                      {isEnabled && (
                        <input
                          type="text"
                          className="w-full px-3 py-1 border rounded bg-background"
                          placeholder={logicBlock.placeholder}
                          value={isEnabled.value}
                          onChange={(e) =>
                            updateLogicEntry(logicBlock.value, e.target.value)
                          }
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
