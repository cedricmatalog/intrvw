/**
 * Simple markdown parser for quiz explanations
 * Supports: **bold**, `code`, code blocks, headers, bullet points
 */

export type MarkdownElement =
  | { type: 'header'; level: number; content: string }
  | { type: 'paragraph'; content: InlineElement[] }
  | { type: 'codeblock'; language: string; content: string }
  | { type: 'list'; items: InlineElement[][] }
  | { type: 'codetext'; content: string };

export type InlineElement =
  | { type: 'text'; content: string }
  | { type: 'bold'; content: string }
  | { type: 'code'; content: string }
  | { type: 'emoji'; content: string };

/**
 * Parse inline markdown elements (bold, code, etc.)
 */
function parseInline(text: string): InlineElement[] {
  const elements: InlineElement[] = [];
  let current = '';
  let i = 0;

  while (i < text.length) {
    // Bold text **text**
    if (text.slice(i, i + 2) === '**') {
      if (current) {
        elements.push({ type: 'text', content: current });
        current = '';
      }
      i += 2;
      const end = text.indexOf('**', i);
      if (end !== -1) {
        elements.push({ type: 'bold', content: text.slice(i, end) });
        i = end + 2;
      } else {
        current += '**';
      }
    }
    // Inline code `code`
    else if (text[i] === '`') {
      if (current) {
        elements.push({ type: 'text', content: current });
        current = '';
      }
      i++;
      const end = text.indexOf('`', i);
      if (end !== -1) {
        elements.push({ type: 'code', content: text.slice(i, end) });
        i = end + 1;
      } else {
        current += '`';
      }
    }
    // Emoji detection (basic)
    else if (/[\u{1F300}-\u{1F9FF}]/u.test(text[i])) {
      if (current) {
        elements.push({ type: 'text', content: current });
        current = '';
      }
      elements.push({ type: 'emoji', content: text[i] });
      i++;
    }
    else {
      current += text[i];
      i++;
    }
  }

  if (current) {
    elements.push({ type: 'text', content: current });
  }

  return elements;
}

/**
 * Parse markdown text into structured elements
 */
export function parseMarkdown(markdown: string): MarkdownElement[] {
  const elements: MarkdownElement[] = [];
  const lines = markdown.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // Code blocks ```language
    if (trimmed.startsWith('```')) {
      const language = trimmed.slice(3).trim() || 'javascript';
      i++;
      let code = '';

      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        code += lines[i] + '\n';
        i++;
      }

      elements.push({
        type: 'codeblock',
        language,
        content: code.trim()
      });
      i++; // Skip closing ```
    }
    // Headers **Header:**
    else if (/^\*\*[^*]+:\*\*/.test(trimmed)) {
      const content = trimmed.replace(/^\*\*([^*]+):\*\*/, '$1');
      elements.push({
        type: 'header',
        level: 2,
        content
      });
      i++;
    }
    // Bullet points -
    else if (trimmed.startsWith('- ')) {
      const items: InlineElement[][] = [];

      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        const itemText = lines[i].trim().slice(2);
        items.push(parseInline(itemText));
        i++;
      }

      elements.push({ type: 'list', items });
    }
    // Code-like text (indented or starts with special chars)
    else if (line.startsWith('  ') || /^[\[\{]/.test(trimmed)) {
      let codeText = line + '\n';
      i++;

      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].trim() === '')) {
        codeText += lines[i] + '\n';
        i++;
        if (lines[i - 1].trim() === '' && (!lines[i] || !lines[i].startsWith('  '))) {
          break;
        }
      }

      elements.push({
        type: 'codetext',
        content: codeText.trim()
      });
    }
    // Regular paragraph
    else {
      let paragraph = trimmed;
      i++;

      // Combine consecutive non-special lines
      while (i < lines.length &&
             lines[i].trim() &&
             !lines[i].trim().startsWith('```') &&
             !lines[i].trim().startsWith('- ') &&
             !/^\*\*[^*]+:\*\*/.test(lines[i].trim()) &&
             !lines[i].startsWith('  ')) {
        paragraph += ' ' + lines[i].trim();
        i++;
      }

      elements.push({
        type: 'paragraph',
        content: parseInline(paragraph)
      });
    }
  }

  return elements;
}

/**
 * Detect sections in explanation based on headers
 */
export interface ExplanationSection {
  title: string;
  content: MarkdownElement[];
  isQuickAnswer?: boolean;
}

export function parseExplanationSections(markdown: string): ExplanationSection[] {
  const elements = parseMarkdown(markdown);
  const sections: ExplanationSection[] = [];
  let currentSection: ExplanationSection | null = null;

  // First paragraph is always the "Quick Answer"
  let firstParagraphFound = false;

  for (const element of elements) {
    // Detect section headers
    if (element.type === 'header') {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: element.content,
        content: []
      };
    }
    // First paragraph becomes "Quick Answer"
    else if (!firstParagraphFound && element.type === 'paragraph') {
      sections.push({
        title: 'Quick Answer',
        content: [element],
        isQuickAnswer: true
      });
      firstParagraphFound = true;
    }
    // Add to current section
    else {
      if (currentSection) {
        currentSection.content.push(element);
      } else {
        // No section yet, create a default one
        if (!currentSection) {
          currentSection = {
            title: 'Explanation',
            content: [element]
          };
        }
      }
    }
  }

  // Push last section
  if (currentSection && currentSection.content.length > 0) {
    sections.push(currentSection);
  }

  return sections;
}
