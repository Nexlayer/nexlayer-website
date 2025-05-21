"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

const nexlayerTheme = {
  'code[class*="language-"]': {
    background: '#000000',
    color: '#d4d4d4',
    fontFamily: 'Fira Code, monospace',
    fontSize: '0.875rem',
  },
  'pre[class*="language-"]': {
    background: '#000000',
    color: '#d4d4d4',
    fontFamily: 'Fira Code, monospace',
    fontSize: '0.875rem',
  },
  'token.key': { color: '#699edb' }, // Keys
  'token.attr-name': { color: '#699edb' },
  'token.string': { color: '#49de80' }, // Values/Strings
  'token.number': { color: '#f471b5' }, // Numbers
  'token.boolean': { color: '#c084fc' }, // Special values
  'token.constant': { color: '#c084fc' }, // Special values
  'token.class-name': { color: '#c084fc' }, // Special values
  'token.variable': { color: '#d4d4d4' }, // Default text
  'token.punctuation': { color: '#d4d4d4' }, // Default text
  'token.operator': { color: '#d4d4d4' }, // Default text
};

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div className="relative w-full rounded-lg p-4 font-mono text-sm" style={{ background: '#000000' }}>
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex  overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 !py-2 text-xs transition-colors font-sans ${
                  activeTab === index
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex justify-between items-center py-2">
            <div className="text-xs text-zinc-400">{filename}</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
        style={nexlayerTheme}
        customStyle={{
          margin: 0,
          padding: 0,
          background: '#000000',
          fontSize: '0.875rem',
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};