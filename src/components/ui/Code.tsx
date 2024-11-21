import React, { useState } from 'react';
import { FaChevronRight, FaClipboard } from 'react-icons/fa'; 

interface Props {
  code: string;
  codeClass?: string;
}

const Code: React.FC<Props> = ({ code, codeClass = '' }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 2000);
    });
  };

  return (
    <div
      data-code-block
      className={`inline-flex bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none rounded-lg p-px w-fit`}
    >
      <div className={`inline-flex items-center gap-2 bg-neutral-100/90 text-neutral-500 rounded-lg p-3 ${codeClass}`}>
        <FaChevronRight className="w-4 h-4" /> 
        <code data-code className="text-[0.70rem] sm:text-sm">
          {code}
        </code>
        <div className="relative flex items-center">
          <button
            data-copy-button
            onClick={handleCopy}
            className="hover:text-neutral-700 transition duration-300"
            title="Copy code"
          >
            <FaClipboard className="w-5 h-5" /> 
          </button>
          <span
            data-tooltip
            className={`absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 inline-block bg-neutral-100/50 text-neutral-700 text-sm px-2 py-1 opacity-0 ${tooltipVisible ? 'opacity-100' : ''} transition duration-300`}
            data-visible={tooltipVisible ? 'true' : 'false'}
            aria-hidden={tooltipVisible ? 'false' : 'true'}
          >
            Copied!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Code;