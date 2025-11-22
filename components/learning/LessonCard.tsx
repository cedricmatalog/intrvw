import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Lesson } from '../../types/learning';
import { RetroColors } from '../../constants/RetroTheme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface LessonCardProps {
  lesson: Lesson;
  currentIndex: number;
  totalLessons: number;
}

const levelColors: Record<string, string> = {
  beginner: RetroColors.terminal,
  intermediate: RetroColors.amber,
  advanced: RetroColors.red,
};

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  currentIndex,
  totalLessons,
}) => {
  const levelColor = levelColors[lesson.level];

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
            <View style={[styles.badge, { borderColor: levelColor }]}>
              <Text style={[styles.badgeText, { color: levelColor }]}>
                {lesson.level.toUpperCase()}
              </Text>
            </View>
            <View style={[styles.badge, { borderColor: RetroColors.textDim }]}>
              <Text style={[styles.badgeText, { color: RetroColors.textDim }]}>
                LESSON {currentIndex + 1}/{totalLessons}
              </Text>
            </View>
          </View>
        </View>

        {/* Title & Concept */}
        <View style={styles.titleContainer}>
          <Text style={styles.conceptLabel}>{'> CONCEPT'}</Text>
          <Text style={[styles.concept, { color: levelColor }]}>
            {lesson.concept}
          </Text>
          <Text style={styles.title}>{lesson.title}</Text>
        </View>

        {/* Explanation */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>{'> EXPLANATION'}</Text>
          <Text style={styles.explanationText}>{lesson.explanation}</Text>
        </View>

        {/* Example */}
        {lesson.example && (
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>{'> EXAMPLE'}</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>{lesson.example}</Text>
            </View>
          </View>
        )}

        {/* Key Points */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>{'> KEY_POINTS'}</Text>
          <View style={styles.pointsContainer}>
            {lesson.keyPoints.map((point, index) => (
              <View key={index} style={styles.pointRow}>
                <Text style={[styles.pointBullet, { color: levelColor }]}>▸</Text>
                <Text style={styles.pointText}>{point}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Try It */}
        {lesson.tryIt && (
          <View style={[styles.tryItContainer, { borderColor: levelColor }]}>
            <Text style={[styles.tryItLabel, { color: levelColor }]}>
              {'💡 TRY_IT'}
            </Text>
            <Text style={styles.tryItText}>{lesson.tryIt}</Text>
          </View>
        )}

        {/* Next Up */}
        {lesson.nextUp && (
          <View style={styles.nextUpContainer}>
            <Text style={styles.nextUpLabel}>{'> NEXT_UP'}</Text>
            <Text style={styles.nextUpText}>{lesson.nextUp}</Text>
            <Text style={styles.swipeHint}>{'↑ Swipe up to continue'}</Text>
          </View>
        )}

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${((currentIndex + 1) / totalLessons) * 100}%`,
                  backgroundColor: levelColor,
                },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round(((currentIndex + 1) / totalLessons) * 100)}% Complete
          </Text>
        </View>
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
    paddingTop: 60,
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
    fontSize: 10,
    fontWeight: 'bold',
  },
  titleContainer: {
    marginBottom: 32,
  },
  conceptLabel: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
    marginBottom: 8,
  },
  concept: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 28,
    color: RetroColors.text,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  section: {
    marginBottom: 32,
  },
  sectionLabel: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.terminal,
    marginBottom: 12,
  },
  explanationText: {
    fontFamily: 'monospace',
    fontSize: 15,
    color: RetroColors.text,
    lineHeight: 24,
  },
  codeBlock: {
    backgroundColor: RetroColors.surface,
    padding: 16,
    borderLeftWidth: 3,
    borderLeftColor: RetroColors.terminal,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.terminal,
    lineHeight: 20,
  },
  pointsContainer: {
    gap: 12,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  pointBullet: {
    fontFamily: 'monospace',
    fontSize: 16,
    marginRight: 12,
    marginTop: 3,
  },
  pointText: {
    flex: 1,
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 22,
  },
  tryItContainer: {
    borderWidth: 2,
    padding: 16,
    marginBottom: 32,
    backgroundColor: 'rgba(0, 255, 65, 0.05)',
  },
  tryItLabel: {
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tryItText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 22,
  },
  nextUpContainer: {
    marginBottom: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: RetroColors.surface,
  },
  nextUpLabel: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
    marginBottom: 8,
  },
  nextUpText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.textSecondary,
    lineHeight: 22,
    marginBottom: 12,
  },
  swipeHint: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.terminal,
    textAlign: 'center',
    marginTop: 8,
  },
  progressContainer: {
    marginTop: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: RetroColors.surface,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
  },
  progressText: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: RetroColors.textDim,
    textAlign: 'center',
  },
});
