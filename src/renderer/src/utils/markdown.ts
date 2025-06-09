import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';
import katex from 'katex';

// Initialize Markdown parser
const md = new MarkdownIt({
  html: true,
  breaks: false,
  linkify: true,
});

// DOMPurify configuration
const DOMPURIFY_OPTIONS = {
  ADD_TAGS: [
    'math',
    'mrow',
    'annotation',
    'semantics',
    'mi',
    'mo',
    'mn',
    'msqrt',
    'mfrac',
  ],
  ADD_ATTR: ['class', 'style', 'aria-hidden'],
};

// Hyperlink: add blue color to all <a>
interface MarkdownItToken {
  attrIndex(name: string): number;
  attrPush(attr: [string, string]): void;
  attrs?: [string, string][];
}

interface MarkdownItRenderer {
  renderToken(tokens: MarkdownItToken[], idx: number, options: unknown): string;
}

type MarkdownItRule = (
  tokens: MarkdownItToken[],
  idx: number,
  options: unknown,
  env: unknown,
  self: MarkdownItRenderer
) => string;

const defaultRender: MarkdownItRule =
  md.renderer.rules.link_open ||
  function (
    tokens: MarkdownItToken[],
    idx: number,
    options: unknown,
    _: unknown,
    self: MarkdownItRenderer
  ): string {
    return self.renderToken(tokens, idx, options);
  };
interface MarkdownItTokenWithAttrs extends MarkdownItToken {
  attrs?: [string, string][];
}

md.renderer.rules.link_open = function (
  tokens: MarkdownItTokenWithAttrs[],
  idx: number,
  options: unknown,
  env: unknown,
  self: MarkdownItRenderer
): string {
  // add class
  const aIndex = tokens[idx].attrIndex('class');
  if (aIndex < 0) {
    tokens[idx].attrPush(['class', 'text-blue-600']); // add class
  } else {
    tokens[idx].attrs![aIndex][1] += ' text-blue-600'; // add class
  }
  return defaultRender(tokens, idx, options, env, self);
};

// Markdown rendering with KaTeX support
export function renderMarkdown(content: string): string {
  // Preprocess content to handle line breaks in LaTeX blocks
  content = content.replace(/\\\[\s*\n+/g, '\\[').replace(/\n+\s*\\\]/g, '\\]');

  // Inline formula handling ($...$ and \(...\))
  content = content.replace(
    /(?:\\?[$])([^$]*)(?:\\?[$])|\\\((.*?)\\\)/g,
    (match, inline, inlineBlock) => {
      const tex = inline || inlineBlock;
      try {
        return katex.renderToString(tex, {
          throwOnError: false,
          displayMode: false,
        });
      } catch (e) {
        console.error('KaTeX inline render error:', e);
        return match;
      }
    }
  );

  // Block formula handling ($$...$$, \[...\], and [text])
  content = content.replace(
    /(?:\\?[$][$])([^$]*)(?:\\?[$][$])|\\\[(.*?)\\\]|^\s*\[(.*?)\]\s*$/gm,
    (match, block, blockBracket, blockSquare) => {
      const tex = block || blockBracket || blockSquare;
      try {
        return katex.renderToString(tex.trim(), {
          throwOnError: false,
          displayMode: true,
        });
      } catch (e) {
        console.error('KaTeX block render error:', e);
        return match;
      }
    }
  );

  // Render and sanitize HTML output
  const html = md.render(content);
  return DOMPurify.sanitize(html, DOMPURIFY_OPTIONS);
}
