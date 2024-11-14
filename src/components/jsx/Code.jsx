import React, { useState } from 'react';
import { FaChevronRight, FaClipboard } from 'react-icons/fa'; // Usa los iconos que necesitas

const Code = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="inline-flex bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none rounded-lg p-px">
      <div className="inline-flex items-center gap-2 bg-neutral-100/90 text-neutral-500 rounded-lg p-3">
        <FaChevronRight className="w-4 h-4" />
        <code className="text-sm">{code}</code>
        <div className="relative flex items-center">
          <button
            onClick={handleCopy}
            className="hover:text-neutral-700 transition duration-300"
            title="Copy code"
          >
            <FaClipboard className="w-5 h-5" />
          </button>
          {isCopied && (
            <span
              className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 inline-block bg-neutral-100/50 text-neutral-700 text-sm px-2 py-1 opacity-100 rounded transition duration-300"
              aria-hidden="true"
            >
              Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Code;
