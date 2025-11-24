import React, { useState, useEffect } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router, useFocusEffect, Stack } from 'expo-router';
import { RetroColors } from '@/constants/RetroTheme';
import { JavaScriptSubCategory } from '@/types/quiz';
import {
  JS_SUBCATEGORY_LABELS,
  JS_SUBCATEGORY_DESCRIPTIONS,
} from '@/constants/AppConstants';
import { getAllJavaScriptSubcategoryCounts } from '@/utils/dataUtils';
import { getAllProgress, QuizProgress, resetProgress } from '@/utils/progressStorage';
import { isEnhancedSubcategory } from '@/constants/enhancedCategories';

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

  // Ordered from beginner to advanced for progressive learning
  const subcategories: (JavaScriptSubCategory | 'all')[] = [
    'all',

    // BEGINNER - Fundamentals (Start here)
    'type-system',
    'operators',
    'string-methods',
    'array-operations',
    'arrays',
    'functions',
    'object-fundamentals',
    'objects',
    'object-methods',
    'type-coercion',
    'references',
    'error-handling',
    'destructuring',

    // INTERMEDIATE - Core Concepts
    'scope',
    'closures',
    'this',
    'prototypes',
    'classes',
    'modules',
    'promises',
    'async-await',
    'map-set',
    'regex',
    'miscellaneous',

    // ADVANCED - Complex Topics
    'advanced-operators',
    'event-loop',
    'generators',
    'iterators',
    'symbols',
    'weak-collections',
    'proxy-reflect',
    'internationalization',
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
    <>
      <Stack.Screen
        options={{
          title: 'JAVASCRIPT QUIZZES',
          headerShown: true,
          headerStyle: {
            backgroundColor: RetroColors.background,
          },
          headerTintColor: RetroColors.terminal,
          headerTitleStyle: {
            fontFamily: 'monospace',
            fontWeight: 'bold',
            fontSize: 16,
          },
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            fontFamily: 'monospace',
          },
        }}
      />
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

            // Section headers
            let sectionHeader = null;
            if (subcategory === 'type-system') {
              sectionHeader = (
                <View key="beginner-header" style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>{'> BEGINNER - FUNDAMENTALS'}</Text>
                  <Text style={styles.sectionSubtitle}>Start here if you&apos;re new to JavaScript</Text>
                </View>
              );
            } else if (subcategory === 'scope') {
              sectionHeader = (
                <View key="intermediate-header" style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>{'> INTERMEDIATE - CORE CONCEPTS'}</Text>
                  <Text style={styles.sectionSubtitle}>Build deeper understanding</Text>
                </View>
              );
            } else if (subcategory === 'advanced-operators') {
              sectionHeader = (
                <View key="advanced-header" style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>{'> ADVANCED - COMPLEX TOPICS'}</Text>
                  <Text style={styles.sectionSubtitle}>Master JavaScript&apos;s advanced features</Text>
                </View>
              );
            }

            // Get progress for this subcategory
            const progressKey = subcategory === 'all' ? 'javascript' : `javascript:${subcategory}`;
            const progress = progressData[progressKey];
            const isCompleted = progress?.completed;
            const hasProgress = progress && Object.keys(progress.answeredQuestions).length > 0 && !isCompleted;
            const answeredCount = hasProgress ? Object.keys(progress.answeredQuestions).length : 0;
            const progressPercent = count > 0 ? Math.round((answeredCount / count) * 100) : 0;
            const isEnhanced = subcategory !== 'all' && isEnhancedSubcategory(subcategory as JavaScriptSubCategory);

            return (
              <React.Fragment key={subcategory}>
                {sectionHeader}
                <Pressable
                  style={({ pressed }) => [
                    styles.categoryCard,
                    pressed && styles.categoryCardPressed,
                  ]}
                  onPress={() => handleSelectSubcategory(subcategory)}
                >
                <View style={styles.categoryHeader}>
                  <View style={styles.categoryTitleRow}>
                    <Text style={styles.categoryLabel}>{label}</Text>
                    {isEnhanced && (
                      <View style={styles.enhancedBadge}>
                        <Text style={styles.enhancedBadgeText}>✨ ENHANCED</Text>
                      </View>
                    )}
                  </View>
                  <View style={styles.countBadge}>
                    <Text style={styles.countText}>{count}</Text>
                  </View>
                </View>

                {isCompleted && progress.finalScore && (
                  <View style={styles.completionContainer}>
                    <View style={styles.completionBadge}>
                      <Text style={styles.completionBadgeText}>✓ COMPLETED</Text>
                    </View>
                    <View style={styles.scoreRow}>
                      <Text style={[styles.scoreText, { color: RetroColors.amber }]}>
                        Score: {progress.finalScore.correct}/{progress.finalScore.total} ({progress.finalScore.percentage}%)
                      </Text>
                      <Pressable
                        style={styles.resetButton}
                        onPress={(e) => handleResetProgress(subcategory, e)}
                      >
                        <Text style={styles.resetButtonText}>RESET</Text>
                      </Pressable>
                    </View>
                  </View>
                )}

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
                  {isCompleted ? '> RETAKE QUIZ' : hasProgress ? '> CONTINUE PRACTICING' : '> START PRACTICING'}
                </Text>
              </Pressable>
              </React.Fragment>
            );
          })}
        </View>
      </ScrollView>
    </View>
    </>
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
  sectionHeader: {
    marginTop: 24,
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: RetroColors.surfaceBorder,
  },
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    color: RetroColors.terminal,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
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
  categoryTitleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  categoryLabel: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    color: RetroColors.text,
  },
  enhancedBadge: {
    backgroundColor: 'rgba(0, 255, 65, 0.15)',
    borderWidth: 1,
    borderColor: RetroColors.terminal,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  enhancedBadgeText: {
    fontFamily: 'monospace',
    fontSize: 9,
    fontWeight: 'bold',
    color: RetroColors.terminal,
    letterSpacing: 0.5,
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
    alignItems: 'flex-start',
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
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  resetButtonText: {
    fontFamily: 'monospace',
    fontSize: 10,
    color: RetroColors.red,
    fontWeight: 'bold',
  },
  completionContainer: {
    marginVertical: 12,
  },
  completionBadge: {
    backgroundColor: RetroColors.terminal,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  completionBadgeText: {
    fontFamily: 'monospace',
    fontSize: 10,
    color: RetroColors.background,
    fontWeight: 'bold',
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scoreText: {
    fontFamily: 'monospace',
    fontSize: 11,
    fontWeight: 'bold',
    flex: 1,
  },
});
