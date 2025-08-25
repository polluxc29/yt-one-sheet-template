"use client";

import { useCallback, useState } from "react";

export function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy", e);
    }
  }, [url]);

  return (
    <button onClick={onCopy} className="text-xs px-3 py-2 rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5">
      {copied ? "Copied" : "Copy link"}
    </button>
  );
}


