import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  lang?: string
  code: string
}

const CodeBlock: React.FC<Props> = ({ lang = '', code }) => {
  return (
    <div className="bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none rounded-lg p-px">
      <SyntaxHighlighter
        language={lang}
        style={a11yDark}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          background: 'rgba(var(--ac-color-100), 0.9)',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;