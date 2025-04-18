'use client'

import { CopyButton } from "@/components/CopyButton";
import { DownloadButton } from "@/components/DownloadButton";
import { ScriptType } from "@/components/steps/StepScriptType";

interface Props {
  script: string;
  type: ScriptType;
}

export function ScriptPanel({ script, type }: Props) {
  return (
    <aside className="bg-muted border-l border-[var(--border)] px-6 py-8 space-y-6 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2 text-foreground">Live Script</h2>

      <pre className="bg-background text-sm border border-[var(--border)] rounded p-4 overflow-auto whitespace-pre-wrap text-foreground">
        {script || "// Script will appear here once options are selected."}
      </pre>

      <div className="flex flex-col gap-3">
        <CopyButton text={script} />
        <DownloadButton script={script} type={type} />
      </div>
    </aside>
  );
}
