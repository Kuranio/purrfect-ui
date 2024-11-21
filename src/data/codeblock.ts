export const importCode = `import { CodeBlock } from "@purrfect-ui/components";`;

export const basicUsageCode = 
`import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  frame?: 'none' | 'code' | 'terminal' | 'auto'
  lang?: string
  title?: string
  code: string
}

const CodeBlock: React.FC<Props> = ({ frame = 'auto', lang = '', title, code }) => {
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

export default CodeBlock;`;

export const UsageCode = 
`import React from "react";
import { CodeBlock } from "@purrfect-ui/components";

export function CodeBlockDemo() {
  return (
    <CodeBlock lang="typescript" code="import React from 'react';"/>
  );
}

export default CodeBlockDemo;`;

export const viteConfig = 
`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-syntax-highlighter", "lowlight"], // Include dependencies
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Allows transforming mixed modules (CommonJS/ESM)
    },
  },
});`;