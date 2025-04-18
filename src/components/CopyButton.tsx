'use client'

import { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react";

interface Props {
  text: string;
}

export function CopyButton({ text }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 transition"
    >
      {copied ? <Check size={18} /> : <ClipboardCopy size={18} />}
      {copied ? "Copied!" : "Copy to Clipboard"}
    </button>
  );
}
