import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { RetroColors } from '../../constants/RetroTheme';
import { LEARNING_PATH_DESCRIPTIONS, CATEGORY_LABELS } from '../../constants/AppConstants';
import { getCategoryColor } from '../../utils/uiUtils';
import { lessons } from '../../data/lessons';
import { LearningCategory } from '../../types/learning';

interface LearningPathProps {
  category: LearningCategory;
  title: string;
  description: string;
  color: string;
  lessonCount: number;
  onPress: () => void;
}

const LearningPath: React.FC<LearningPathProps> = ({
  category,
  title,
  description,
  color,
  lessonCount,
  onPress,
}) => {
  // Get lesson counts by level
  const categoryLessons = lessons.filter((l) => l.category === category);
  const beginnerCount = categoryLessons.filter((l) => l.level === 'beginner').length;
  const intermediateCount = categoryLessons.filter((l) => l.level === 'intermediate').length;
  const advancedCount = categoryLessons.filter((l) => l.level === 'advanced').length;

  return (
    <Pressable style={[styles.pathCard, { borderColor: color }]} onPress={onPress}>
      <View style={styles.pathHeader}>
        <Text style={[styles.pathTitle, { color }]}>{title}</Text>
        <Text style={[styles.pathCount, { color }]}>
          {lessonCount} LESSONS
        </Text>
      </View>
      <Text style={styles.pathDescription}>{description}</Text>

      <View style={styles.levelsContainer}>
        {beginnerCount > 0 && (
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>
              {beginnerCount} Beginner
            </Text>
          </View>
        )}
        {intermediateCount > 0 && (
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>
              {intermediateCount} Intermediate
            </Text>
          </View>
        )}
        {advancedCount > 0 && (
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>
              {advancedCount} Advanced
            </Text>
          </View>
        )}
      </View>

      <Text style={[styles.pathAction, { color }]}>
        {'> START LEARNING'}
      </Text>
    </Pressable>
  );
};

export const LearnPage: React.FC = () => {
  const router = useRouter();

  const handlePathPress = (category: LearningCategory) => {
    router.push({
      pathname: '/learn/path',
      params: { category },
    });
  };

  // Count lessons per category
  const lessonCounts: Record<string, number> = {};
  lessons.forEach((lesson) => {
    lessonCounts[lesson.category] = (lessonCounts[lesson.category] || 0) + 1;
  });

  const allCategories: LearningCategory[] = [
    'javascript',
    'typescript',
    'react',
    'node',
    'algorithms',
    'data-structures',
    'web-fundamentals',
    'system-design',
    'career',
  ];

  const learningPaths = allCategories
    .map((category) => ({
      category,
      title: CATEGORY_LABELS[category],
      description: LEARNING_PATH_DESCRIPTIONS[category],
      color: getCategoryColor(category),
      lessonCount: lessonCounts[category] || 0,
    }))
    .filter((path) => path.lessonCount > 0); // Only show paths with lessons

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>learn</Text>
          <Text style={styles.tagline}>TikTok-Style Learning</Text>
        </View>

        {/* Info Box */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{'> LEARNING_SYSTEM_READY'}</Text>
          <Text style={styles.infoText}>
            {`> ${lessons.length}_BITE_SIZED_LESSONS`}
          </Text>
          <Text style={styles.infoText}>{'> SCROLL_TO_LEARN'}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Choose a learning path and scroll through bite-sized lessons. Each
          swipe teaches you something new - from beginner to advanced!
        </Text>

        {/* Learning Paths */}
        <Text style={styles.sectionTitle}>{'> LEARNING_PATHS'}</Text>
        <View style={styles.pathsContainer}>
          {learningPaths.map((path) => (
            <LearningPath
              key={path.category}
              category={path.category}
              title={path.title}
              description={path.description}
              color={path.color}
              lessonCount={path.lessonCount}
              onPress={() => handlePathPress(path.category)}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Swipe up through lessons • Learn progressively
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RetroColors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
    paddingTop: 20,
  },
  logo: {
    fontFamily: 'monospace',
    fontSize: 48,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: RetroColors.amber,
    marginBottom: 24,
  },
  infoContainer: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: RetroColors.surface,
    borderWidth: 1,
    borderColor: RetroColors.terminal,
    gap: 4,
  },
  infoText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.terminal,
    lineHeight: 18,
  },
  description: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 22,
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  pathsContainer: {
    gap: 16,
    marginBottom: 32,
  },
  pathCard: {
    padding: 20,
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
  },
  pathHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  pathTitle: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pathCount: {
    fontFamily: 'monospace',
    fontSize: 11,
    fontWeight: 'bold',
  },
  pathDescription: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  levelsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: RetroColors.textDim,
  },
  levelText: {
    fontFamily: 'monospace',
    fontSize: 10,
    color: RetroColors.textDim,
  },
  pathAction: {
    fontFamily: 'monospace',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: RetroColors.surface,
  },
  footerText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
    textAlign: 'center',
  },
});
