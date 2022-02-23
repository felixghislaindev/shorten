import React, { useState, useEffect } from "react";
import { AiFillCopy } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const ShortenUrlClipboard = ({ shortenUrl }: { shortenUrl: string }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className={`rounded-md ${copied ? "copied " : "bg-btn"}`}>
      <div className="text-wite py-4 px-4 w-80">
        {shortenUrl && (
          <div className="flex items-center justify-center">
            <p className="mr-2 text-xl font-medium" data-testid="short-url">
              {shortenUrl}
            </p>
            <CopyToClipboard text={shortenUrl} onCopy={() => setCopied(true)}>
              <AiFillCopy size={25} className="cursor-pointer" />
            </CopyToClipboard>
          </div>
        )}
      </div>
    </div>
  );
};
