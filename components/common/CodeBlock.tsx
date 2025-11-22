import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { RetroColors } from '@/constants/RetroTheme';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  // Ensure code is a string and trim it
  const codeString = typeof code === 'string' ? code.trim() : String(code || '').trim();

  // If empty, don't render
  if (!codeString) {
    return null;
  }

  // Simple syntax highlighting for common JavaScript and HTML tokens
  const highlightCode = (code: string) => {
    const lines = code.split('\n');
    const isHTML = language === 'html';

    return lines.map((line, lineIndex) => {
      const parts: Array<{ text: string; style: any }> = [];

      // HTML specific patterns
      const htmlTags = /<\/?[\w\s="/.':;#-\/]+>/g;
      const htmlAttributes = /\s([\w-]+)=/g;

      // JavaScript Keywords regex
      const keywords = /\b(function|const|let|var|return|if|else|for|while|class|new|this|typeof|async|await|import|export|from|default|case|switch|break|continue|try|catch|finally|throw)\b/g;
      // Strings regex
      const strings = /(["'`])((?:\\.|(?!\1)[^\\])*)\1/g;
      // Numbers regex
      const numbers = /\b(\d+\.?\d*)\b/g;
      // Comments regex
      const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/g;

      let lastIndex = 0;
      const tokens: Array<{ start: number; end: number; type: string; text: string }> = [];

      // Find all tokens
      let match;

      if (isHTML) {
        // HTML highlighting
        while ((match = htmlTags.exec(line)) !== null) {
          tokens.push({ start: match.index, end: match.index + match[0].length, type: 'htmlTag', text: match[0] });
        }
      } else {
        // JavaScript highlighting
        while ((match = keywords.exec(line)) !== null) {
          tokens.push({ start: match.index, end: match.index + match[0].length, type: 'keyword', text: match[0] });
        }
        while ((match = comments.exec(line)) !== null) {
          tokens.push({ start: match.index, end: match.index + match[0].length, type: 'comment', text: match[0] });
        }
      }

      // Strings and numbers work for both
      while ((match = strings.exec(line)) !== null) {
        tokens.push({ start: match.index, end: match.index + match[0].length, type: 'string', text: match[0] });
      }
      while ((match = numbers.exec(line)) !== null) {
        tokens.push({ start: match.index, end: match.index + match[0].length, type: 'number', text: match[0] });
      }

      // Sort tokens by position
      tokens.sort((a, b) => a.start - b.start);

      // Build parts array
      tokens.forEach((token, i) => {
        // Add text before token
        if (token.start > lastIndex) {
          parts.push({ text: line.substring(lastIndex, token.start), style: styles.codeDefault });
        }

        // Add token with style
        const tokenStyle = token.type === 'keyword' ? styles.codeKeyword :
                          token.type === 'string' ? styles.codeString :
                          token.type === 'number' ? styles.codeNumber :
                          token.type === 'comment' ? styles.codeComment :
                          token.type === 'htmlTag' ? styles.codeHtmlTag :
                          styles.codeDefault;
        parts.push({ text: token.text, style: tokenStyle });
        lastIndex = token.end;
      });

      // Add remaining text
      if (lastIndex < line.length) {
        parts.push({ text: line.substring(lastIndex), style: styles.codeDefault });
      }

      // If no parts, add the whole line
      if (parts.length === 0) {
        parts.push({ text: line, style: styles.codeDefault });
      }

      return (
        <View key={lineIndex} style={styles.codeLine}>
          <Text style={styles.lineNumber}>{String(lineIndex + 1).padStart(3, ' ')}</Text>
          <Text style={styles.codeLineText}>
            {parts.map((part, partIndex) => (
              <Text key={partIndex} style={part.style}>
                {part.text}
              </Text>
            ))}
          </Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.codeContainer}>
          {highlightCode(codeString)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: RetroColors.border,
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 8,
    backgroundColor: '#0a0a0a',
  },
  scrollContent: {
    padding: 12,
  },
  codeContainer: {
    flexDirection: 'column',
  },
  codeLine: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  lineNumber: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#555555',
    marginRight: 12,
    userSelect: 'none',
  },
  codeLineText: {
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 18,
  },
  codeDefault: {
    color: RetroColors.text,
  },
  codeKeyword: {
    color: RetroColors.purple,
    fontWeight: 'bold',
  },
  codeString: {
    color: RetroColors.green,
  },
  codeNumber: {
    color: RetroColors.cyan,
  },
  codeComment: {
    color: '#666666',
    fontStyle: 'italic',
  },
  codeHtmlTag: {
    color: RetroColors.cyan,
  },
});
