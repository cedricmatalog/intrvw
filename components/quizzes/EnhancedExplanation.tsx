import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RetroColors } from '../../constants/RetroTheme';
import { CodeBlock } from '../common/CodeBlock';
import { CollapsibleSection } from '../common/CollapsibleSection';
import {
  parseExplanationSections,
  type MarkdownElement,
  type InlineElement
} from '../../utils/markdownParser';

interface EnhancedExplanationProps {
  explanation: string;
  accentColor?: string;
}

/**
 * Render inline markdown elements (text, bold, code)
 */
const RenderInline: React.FC<{ elements: InlineElement[] }> = ({ elements }) => {
  return (
    <Text style={styles.text}>
      {elements.map((element, index) => {
        switch (element.type) {
          case 'bold':
            return (
              <Text key={index} style={styles.bold}>
                {element.content}
              </Text>
            );
          case 'code':
            return (
              <Text key={index} style={styles.inlineCode}>
                {element.content}
              </Text>
            );
          case 'emoji':
            return (
              <Text key={index} style={styles.emoji}>
                {element.content}
              </Text>
            );
          case 'text':
          default:
            return <Text key={index}>{element.content}</Text>;
        }
      })}
    </Text>
  );
};

/**
 * Render a single markdown element
 */
const RenderMarkdownElement: React.FC<{ element: MarkdownElement }> = ({ element }) => {
  switch (element.type) {
    case 'header':
      return (
        <Text style={[styles.header, element.level === 2 ? styles.header2 : styles.header1]}>
          {element.content}
        </Text>
      );

    case 'paragraph':
      return (
        <View style={styles.paragraph}>
          <RenderInline elements={element.content} />
        </View>
      );

    case 'codeblock':
      return (
        <View style={styles.codeBlockContainer}>
          <CodeBlock code={element.content} language={element.language} />
        </View>
      );

    case 'codetext':
      return (
        <View style={styles.codeTextContainer}>
          <Text style={styles.codeText}>{element.content}</Text>
        </View>
      );

    case 'list':
      return (
        <View style={styles.list}>
          {element.items.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <View style={styles.listItemContent}>
                <RenderInline elements={item} />
              </View>
            </View>
          ))}
        </View>
      );

    default:
      return null;
  }
};

/**
 * Enhanced explanation component with collapsible sections and markdown rendering
 */
export const EnhancedExplanation: React.FC<EnhancedExplanationProps> = ({
  explanation,
  accentColor = RetroColors.terminal
}) => {
  const sections = parseExplanationSections(explanation);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>{'> EXPLANATION'}</Text>

      {sections.map((section, index) => {
        const content = (
          <>
            {section.content.map((element, elementIndex) => (
              <RenderMarkdownElement key={elementIndex} element={element} />
            ))}
          </>
        );

        // Quick Answer is always expanded
        if (section.isQuickAnswer) {
          return (
            <View key={index} style={styles.quickAnswer}>
              <Text style={[styles.quickAnswerLabel, { color: accentColor }]}>
                {section.title}
              </Text>
              {content}
            </View>
          );
        }

        // Other sections are collapsible
        return (
          <CollapsibleSection
            key={index}
            title={section.title}
            defaultExpanded={index === 0}
            accentColor={accentColor}
          >
            {content}
          </CollapsibleSection>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
    marginBottom: 16,
  },
  quickAnswer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
    borderColor: RetroColors.surfaceBorder,
    borderLeftWidth: 4,
  },
  quickAnswerLabel: {
    fontFamily: 'monospace',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  text: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
    color: RetroColors.text,
  },
  inlineCode: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.terminal,
    backgroundColor: 'rgba(0, 255, 65, 0.1)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  emoji: {
    fontSize: 16,
  },
  header: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: RetroColors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  header1: {
    fontSize: 18,
  },
  header2: {
    fontSize: 16,
  },
  paragraph: {
    marginBottom: 12,
  },
  codeBlockContainer: {
    marginVertical: 12,
  },
  codeTextContainer: {
    marginVertical: 8,
    padding: 12,
    backgroundColor: 'rgba(0, 255, 65, 0.05)',
    borderLeftWidth: 3,
    borderLeftColor: RetroColors.terminal,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.text,
    lineHeight: 20,
  },
  list: {
    marginVertical: 8,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.terminal,
    marginRight: 8,
    marginTop: 2,
  },
  listItemContent: {
    flex: 1,
  },
});
