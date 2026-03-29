'use client';

import React from 'react';
import { useEffect, useRef, useState } from 'react';

import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

interface EntryWysiwygProps {
  html?: string;
}

interface ParsedObjectType {
  type: string;
  innerHTML: string;
}

// わたされたHTML文字列をオブジェクトの形式にパースする関数
function parseHtml(html: string): ParsedObjectType[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const body = doc.body;

  const result: ParsedObjectType[] = [];

  Array.from(body.children).forEach((el) => {
    result.push({
      type: el.tagName.toLowerCase(),
      innerHTML: el.innerHTML ?? ''
    });
  });

  return result;
}

// highlight.js を実行できるようにするためにコードブロックのみ独自の形式でかえす
function CodeBlock({ code }: { code: string }) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <pre>
      <code ref={codeRef} dangerouslySetInnerHTML={{ __html: code || '' }} />
    </pre>
  );
}

export function EntryWysiwyg({ html }: EntryWysiwygProps) {
  // DOMparserはクライアントサイトでのみ実行できるため useState/useEffect を使用する
  const [parsed, setParsed] = useState<ParsedObjectType[]>([]);
  useEffect(() => {
    if (html) {
      const parsedResult = parseHtml(html);
      // パーサで要素が得られない（空配列）場合は、元の HTML をそのまま div でラップして返す
      if (!parsedResult || parsedResult.length === 0) {
        setParsed([{ type: 'div', innerHTML: html }]);
      } else {
        setParsed(parsedResult);
      }
    }
  }, [html]);

  return (
    <div className="mb-4 text-xs leading-[1.8] custom-wysiwyg">
      {/* パースした結果をもとに JSX を生成 */}
      {parsed.map((element, i) => {
        // コードブロックで highlight.js を実行するために、パースしたオブジェクトをもとに改めてJSXを返す
        if (element.type === 'pre') {
          return (
            <CodeBlock
              key={i}
              code={element.innerHTML?.replace(/<(\/?)code>/, '') ?? ''}
            />
          );
        } else if (element.innerHTML !== '') {
          return React.createElement(element.type, {
            key: i,
            dangerouslySetInnerHTML: { __html: element.innerHTML || '' }
          });
        } else {
          return React.createElement(element.type, {
            key: i
          });
        }
      })}
    </div>
  );
}
