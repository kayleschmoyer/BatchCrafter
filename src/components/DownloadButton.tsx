'use client'

import { ScriptType } from "./steps/StepScriptType";
import { downloadScript } from "@/lib/utils";

interface Props {
  script: string;
  type: ScriptType;
}

export function DownloadButton({ script, type }: Props) {
  return (
    <button
      onClick={() => downloadScript(script, type)}
      className="px-6 py-2 rounded-lg bg-yellow-400 text-black font-semibold border border-yellow-600 hover:bg-yellow-300 transition mt-6"
    >
      Download {type === "batch" ? ".bat" : ".ps1"} File
    </button>
  );
}
