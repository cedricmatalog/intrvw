import React, { useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { RetroColors } from '../../constants/RetroTheme';
import { QuizQuestion } from '../../types/quiz';
import { getCategoryColor, getLevelColor } from '../../utils/uiUtils';
import { CodeBlock } from '../common/CodeBlock';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface QuizCardProps {
  question: QuizQuestion;
  onAnswerSelect?: (questionId: string, selectedAnswer: number, isCorrect: boolean) => void;
}

// Types for parsed question content
type QuestionTextPart = {
  type: 'text';
  content: string;
};

type QuestionCodePart = {
  type: 'code';
  content: string;
  language: string;
};

type QuestionPart = QuestionTextPart | QuestionCodePart;

// Helper function to parse question text and extract code blocks
function parseQuestionContent(questionText: string): QuestionPart[] {
  const codeBlockRegex = /```(\w+)?\n([\s\S]+?)```/g;
  const parts: QuestionPart[] = [];

  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(questionText)) !== null) {
    // Add text before code block
    if (match.index > lastIndex) {
      const textContent = questionText.substring(lastIndex, match.index).trim();
      if (textContent) {
        parts.push({ type: 'text', content: textContent });
      }
    }

    // Add code block
    parts.push({
      type: 'code',
      content: match[2].trim(),
      language: match[1] || 'javascript',
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < questionText.length) {
    const textContent = questionText.substring(lastIndex).trim();
    if (textContent) {
      parts.push({ type: 'text', content: textContent });
    }
  }

  return parts.length > 0 ? parts : [{ type: 'text', content: questionText }];
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswerSelect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const categoryColor = getCategoryColor(question.category);
  const difficultyColor = getLevelColor(question.difficulty);

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowExplanation(true);

      // Notify parent component about the answer selection
      if (onAnswerSelect) {
        const isCorrect = index === question.correctAnswer;
        onAnswerSelect(question.id, index, isCorrect);
      }
    }
  };

  const isCorrectAnswer = selectedAnswer === question.correctAnswer;
  const hasAnswered = selectedAnswer !== null;

  // Parse question content to separate text and code blocks
  const questionParts = parseQuestionContent(question.question);

  return (
    <View style={[styles.container, { height: SCREEN_HEIGHT }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.badges}>
            <View style={[styles.badge, { borderColor: categoryColor }]}>
              <Text style={[styles.badgeText, { color: categoryColor }]}>
                {question.category.toUpperCase().replace('-', ' ')}
              </Text>
            </View>
            <View style={[styles.badge, { borderColor: difficultyColor }]}>
              <Text style={[styles.badgeText, { color: difficultyColor }]}>
                {question.difficulty.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>

        {/* Question */}
        <View style={styles.questionContainer}>
          {questionParts.map((part, index) => {
            if (part.type === 'code') {
              return (
                <CodeBlock
                  key={index}
                  code={part.content}
                  language={part.language}
                />
              );
            }
            return (
              <Text key={index} style={styles.questionText}>
                {part.content}
              </Text>
            );
          })}
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;

            let optionStyle: ViewStyle[] = [styles.option];
            let optionTextColor = RetroColors.text;

            if (hasAnswered) {
              if (isCorrect) {
                optionStyle = [styles.option, styles.optionCorrect];
                optionTextColor = RetroColors.terminal;
              } else if (isSelected && !isCorrect) {
                optionStyle = [styles.option, styles.optionIncorrect];
                optionTextColor = RetroColors.red;
              }
            } else if (isSelected) {
              optionStyle = [styles.option, styles.optionSelected];
              optionTextColor = RetroColors.terminal;
            }

            return (
              <Pressable
                key={index}
                style={optionStyle}
                onPress={() => handleAnswerSelect(index)}
                disabled={hasAnswered}
              >
                <Text style={[styles.optionLetter, { color: optionTextColor }]}>
                  {String.fromCharCode(65 + index)}.
                </Text>
                <Text style={[styles.optionText, { color: optionTextColor }]}>
                  {option}
                </Text>
                {hasAnswered && isCorrect && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
                {hasAnswered && isSelected && !isCorrect && (
                  <Text style={styles.xmark}>✗</Text>
                )}
              </Pressable>
            );
          })}
        </View>

        {/* Result */}
        {hasAnswered && (
          <View style={styles.resultContainer}>
            {isCorrectAnswer ? (
              <>
                <Text style={styles.resultCorrect}>{'> CORRECT!'}</Text>
                <Text style={styles.resultMessage}>Nice work! You got it right.</Text>
              </>
            ) : (
              <>
                <Text style={styles.resultIncorrect}>{'> INCORRECT'}</Text>
                <Text style={styles.resultMessage}>
                  The correct answer was {String.fromCharCode(65 + question.correctAnswer)}.
                </Text>
              </>
            )}
          </View>
        )}

        {/* Explanation */}
        {showExplanation && (
          <View style={styles.explanationContainer}>
            <Text style={styles.sectionLabel}>{'> EXPLANATION'}</Text>
            <Text style={styles.explanationText}>{question.explanation}</Text>
          </View>
        )}

        {/* Tags */}
        {question.tags && question.tags.length > 0 && showExplanation && (
          <View style={styles.tagsContainer}>
            <Text style={styles.sectionLabel}>{'> TAGS'}</Text>
            <View style={styles.tagsRow}>
              {question.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>#{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: RetroColors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    paddingTop: 30,
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    fontFamily: 'monospace',
    fontSize: 11,
    fontWeight: 'bold',
  },
  questionContainer: {
    marginBottom: 32,
  },
  questionText: {
    fontFamily: 'monospace',
    fontSize: 20,
    color: RetroColors.text,
    lineHeight: 30,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
    borderColor: RetroColors.surfaceBorder,
  },
  optionSelected: {
    borderColor: RetroColors.terminal,
  },
  optionCorrect: {
    borderColor: RetroColors.terminal,
    backgroundColor: 'rgba(0, 255, 65, 0.1)',
  },
  optionIncorrect: {
    borderColor: RetroColors.red,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },
  optionLetter: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
  },
  optionText: {
    flex: 1,
    fontFamily: 'monospace',
    fontSize: 15,
    lineHeight: 22,
  },
  checkmark: {
    fontFamily: 'monospace',
    fontSize: 20,
    color: RetroColors.terminal,
    fontWeight: 'bold',
  },
  xmark: {
    fontFamily: 'monospace',
    fontSize: 20,
    color: RetroColors.red,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginBottom: 24,
    padding: 16,
    borderWidth: 2,
  },
  resultCorrect: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resultIncorrect: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: RetroColors.red,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resultMessage: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 20,
  },
  explanationContainer: {
    marginBottom: 24,
  },
  explanationText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 22,
    padding: 16,
    backgroundColor: RetroColors.surface,
    borderLeftWidth: 3,
    borderLeftColor: RetroColors.terminal,
  },
  tagsContainer: {
    marginBottom: 24,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: RetroColors.textDim,
  },
  tagText: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: RetroColors.textDim,
  },
});
