import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Question } from '../../types/question';
import { RetroColors } from '../../constants/RetroTheme';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

interface QuestionCardProps {
  question: Question;
}

const typeColors: Record<string, string> = {
  behavioral: RetroColors.terminal,
  technical: RetroColors.blue,
  situational: RetroColors.amber,
  'culture-fit': RetroColors.purple,
};

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{question.category.toUpperCase().replace(/-/g, ' ')}</Text>
          </View>
          <View
            style={[
              styles.typeBadge,
              { borderColor: typeColors[question.type] },
            ]}
          >
            <Text
              style={[
                styles.typeText,
                { color: typeColors[question.type] },
              ]}
            >
              {question.type.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* Question */}
        <Text style={styles.questionTitle}>{question.question}</Text>

        {/* Reveal Answer Button */}
        <Pressable
          style={styles.revealButton}
          onPress={() => setShowAnswer(!showAnswer)}
        >
          <Text style={styles.revealButtonText}>
            {showAnswer ? '[ HIDE ANSWER ]' : '[ TAP TO REVEAL SAMPLE ANSWER ]'}
          </Text>
        </Pressable>

        {/* Sample Answer */}
        {showAnswer && (
          <>
            <View style={styles.answerBox}>
              <Text style={styles.sectionLabel}>{'> SAMPLE ANSWER'}</Text>
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>{question.sampleAnswer}</Text>
              </View>
            </View>

            {/* Key Points */}
            {question.keyPoints && question.keyPoints.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>{'> KEY POINTS'}</Text>
                {question.keyPoints.map((point, index) => (
                  <Text key={index} style={styles.bulletText}>
                    • {point}
                  </Text>
                ))}
              </View>
            )}

            {/* What to Avoid */}
            {question.whatToAvoid && question.whatToAvoid.length > 0 && (
              <View style={styles.section}>
                <Text style={[styles.sectionLabel, { color: RetroColors.red }]}>{'> WHAT TO AVOID'}</Text>
                {question.whatToAvoid.map((item, index) => (
                  <Text key={index} style={[styles.bulletText, { color: RetroColors.red }]}>
                    ✗ {item}
                  </Text>
                ))}
              </View>
            )}

            {/* Tips */}
            {question.tips && question.tips.length > 0 && (
              <View style={styles.section}>
                <Text style={[styles.sectionLabel, { color: RetroColors.amber }]}>{'> PRO TIPS'}</Text>
                {question.tips.map((tip, index) => (
                  <Text key={index} style={[styles.bulletText, { color: RetroColors.amber }]}>
                    ★ {tip}
                  </Text>
                ))}
              </View>
            )}

            {/* Follow-up Questions */}
            {question.followUpQuestions && question.followUpQuestions.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>{'> FOLLOW-UP QUESTIONS'}</Text>
                {question.followUpQuestions.map((q, index) => (
                  <Text key={index} style={styles.bulletText}>
                    ? {q}
                  </Text>
                ))}
              </View>
            )}
          </>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Question #{question.id}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: RetroColors.background,
    borderWidth: 2,
    borderColor: RetroColors.border,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: RetroColors.surface,
    borderWidth: 1,
    borderColor: RetroColors.terminal,
  },
  categoryText: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: RetroColors.terminal,
    fontWeight: 'bold',
  },
  typeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: RetroColors.background,
    borderWidth: 1,
  },
  typeText: {
    fontFamily: 'monospace',
    fontSize: 11,
    fontWeight: 'bold',
  },
  questionTitle: {
    fontFamily: 'monospace',
    fontSize: 24,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 24,
    lineHeight: 32,
  },
  revealButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
    borderColor: RetroColors.terminal,
    alignItems: 'center',
    marginVertical: 20,
  },
  revealButtonText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.terminal,
    fontWeight: 'bold',
  },
  answerBox: {
    marginBottom: 20,
  },
  answerContainer: {
    backgroundColor: RetroColors.surface,
    padding: 16,
    borderWidth: 1,
    borderColor: RetroColors.terminal,
  },
  answerText: {
    fontFamily: 'monospace',
    fontSize: 15,
    color: RetroColors.text,
    lineHeight: 22,
  },
  section: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.amber,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  bulletText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 22,
    marginBottom: 6,
  },
  footer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: RetroColors.surface,
  },
  footerText: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: RetroColors.textDim,
  },
});