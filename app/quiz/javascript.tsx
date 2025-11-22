import React, { useState, useEffect } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { RetroColors } from '@/constants/RetroTheme';
import { JavaScriptSubCategory } from '@/types/quiz';
import {
  JS_SUBCATEGORY_LABELS,
  JS_SUBCATEGORY_DESCRIPTIONS,
} from '@/constants/AppConstants';
import { getAllJavaScriptSubcategoryCounts } from '@/utils/dataUtils';
import { getAllProgress, QuizProgress, resetProgress } from '@/utils/progressStorage';

export default function JavaScriptQuizSelection() {
  const subcategoryCounts = getAllJavaScriptSubcategoryCounts();
  const [progressData, setProgressData] = useState<{ [key: string]: QuizProgress }>({});

  const loadAllProgress = async () => {
    const allProgress = await getAllProgress();
    setProgressData(allProgress);
  };

  // Load progress on mount
  useEffect(() => {
    loadAllProgress();
  }, []);

  // Reload progress when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      loadAllProgress();
    }, [])
  );

  const subcategories: (JavaScriptSubCategory | 'all')[] = [
    'all',
    'basics',
    'type-coercion',
    'operators',
    'functions',
    'scope',
    'closures',
    'this',
    'objects',
    'arrays',
    'classes',
    'prototypes',
    'promises',
    'async',
    'event-loop',
    'modules',
    'generators',
    'iterators',
    'proxy-reflect',
    'symbols',
    'regex',
  ];

  const handleSelectSubcategory = (subcategory: JavaScriptSubCategory | 'all') => {
    router.push({
      pathname: '/quiz',
      params: {
        category: 'javascript',
        subcategory: subcategory,
      },
    });
  };

  const handleResetProgress = async (subcategory: JavaScriptSubCategory | 'all', event: any) => {
    // Prevent the card press event from firing
    event.stopPropagation();

    await resetProgress('javascript', subcategory);
    await loadAllProgress();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{'> JAVASCRIPT QUIZZES'}</Text>
          <Text style={styles.subtitle}>
            Choose a topic to practice specific concepts
          </Text>
        </View>

        {/* Subcategories */}
        <View style={styles.categoriesContainer}>
          {subcategories.map((subcategory) => {
            const count = subcategoryCounts[subcategory] || 0;
            const label = subcategory === 'all'
              ? 'ALL TOPICS'
              : JS_SUBCATEGORY_LABELS[subcategory as JavaScriptSubCategory];
            const description = subcategory === 'all'
              ? 'Practice all JavaScript questions'
              : JS_SUBCATEGORY_DESCRIPTIONS[subcategory as JavaScriptSubCategory];

            // Skip categories with no questions
            if (count === 0 && subcategory !== 'all') return null;

            // Get progress for this subcategory
            const progressKey = subcategory === 'all' ? 'javascript' : `javascript:${subcategory}`;
            const progress = progressData[progressKey];
            const hasProgress = progress && Object.keys(progress.answeredQuestions).length > 0;
            const answeredCount = hasProgress ? Object.keys(progress.answeredQuestions).length : 0;
            const progressPercent = count > 0 ? Math.round((answeredCount / count) * 100) : 0;

            return (
              <Pressable
                key={subcategory}
                style={({ pressed }) => [
                  styles.categoryCard,
                  pressed && styles.categoryCardPressed,
                ]}
                onPress={() => handleSelectSubcategory(subcategory)}
              >
                <View style={styles.categoryHeader}>
                  <Text style={styles.categoryLabel}>{label}</Text>
                  <View style={styles.countBadge}>
                    <Text style={styles.countText}>{count}</Text>
                  </View>
                </View>

                {hasProgress && (
                  <View style={styles.progressContainer}>
                    <View style={styles.progressBarContainer}>
                      <View style={styles.progressBar}>
                        <View
                          style={[
                            styles.progressFill,
                            { width: `${progressPercent}%`, backgroundColor: RetroColors.amber }
                          ]}
                        />
                      </View>
                      <Text style={[styles.progressText, { color: RetroColors.amber }]}>
                        {answeredCount} / {count} ({progressPercent}%)
                      </Text>
                    </View>
                    <Pressable
                      style={styles.resetButton}
                      onPress={(e) => handleResetProgress(subcategory, e)}
                    >
                      <Text style={styles.resetButtonText}>RESET</Text>
                    </Pressable>
                  </View>
                )}

                <Text style={styles.categoryDescription}>{description}</Text>
                <Text style={[styles.categoryAction, { color: RetroColors.amber }]}>
                  {hasProgress ? '> CONTINUE PRACTICING' : '> START PRACTICING'}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 32,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
    color: RetroColors.amber,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.textDim,
    lineHeight: 20,
  },
  categoriesContainer: {
    gap: 16,
  },
  categoryCard: {
    padding: 20,
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
    borderColor: RetroColors.surfaceBorder,
  },
  categoryCardPressed: {
    borderColor: RetroColors.amber,
    backgroundColor: 'rgba(255, 176, 0, 0.05)',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryLabel: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    color: RetroColors.text,
  },
  countBadge: {
    backgroundColor: RetroColors.amber,
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 40,
    alignItems: 'center',
  },
  countText: {
    fontFamily: 'monospace',
    fontSize: 12,
    fontWeight: 'bold',
    color: RetroColors.background,
  },
  categoryDescription: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.textDim,
    lineHeight: 18,
    marginBottom: 8,
  },
  categoryAction: {
    fontFamily: 'monospace',
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBarContainer: {
    flex: 1,
  },
  progressBar: {
    height: 6,
    backgroundColor: RetroColors.surface,
    borderWidth: 1,
    borderColor: RetroColors.surfaceBorder,
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
  },
  progressText: {
    fontFamily: 'monospace',
    fontSize: 11,
  },
  resetButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: RetroColors.red,
    backgroundColor: 'transparent',
  },
  resetButtonText: {
    fontFamily: 'monospace',
    fontSize: 10,
    color: RetroColors.red,
    fontWeight: 'bold',
  },
});
