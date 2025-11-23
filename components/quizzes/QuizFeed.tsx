import React, { useRef, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  Modal,
  Pressable,
} from 'react-native';
import { QuizCard } from './QuizCard';
import { QuizQuestion, QuizCategory, JavaScriptSubCategory } from '../../types/quiz';
import { RetroColors } from '../../constants/RetroTheme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuizStore } from '../../store/quizStore';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface QuizFeedProps {
  questions: QuizQuestion[];
}

export const QuizFeed: React.FC<QuizFeedProps> = ({ questions }) => {
  const router = useRouter();
  const { category, subcategory } = useLocalSearchParams<{
    category?: QuizCategory | 'all';
    subcategory?: JavaScriptSubCategory | 'all';
  }>();
  const currentCategory = category || 'all';
  const currentSubcategory = subcategory;

  // Zustand store
  const {
    currentIndex,
    answeredQuestions,
    isInitialized,
    showResumeDialog,
    showCompletionDialog,
    savedProgress,
    setCurrentIndex,
    addAnswer,
    loadProgress,
    saveCurrentProgress,
    completeQuiz,
    startOver,
    continueQuiz,
    setShowResumeDialog,
    setShowCompletionDialog,
    resetQuiz,
  } = useQuizStore();

  const flatListRef = useRef<FlatList>(null);
  const hasScrolledToSaved = useRef(false);

  // Load saved progress on mount
  useEffect(() => {
    loadProgress(currentCategory, currentSubcategory, questions.length);
    return () => {
      // Cleanup on unmount
      resetQuiz();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory, currentSubcategory]);

  // Save progress when index or answeredQuestions changes
  useEffect(() => {
    if (isInitialized && questions.length > 0) {
      saveCurrentProgress(currentCategory, currentSubcategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, answeredQuestions, isInitialized]);

  // Scroll to saved position after initialization
  useEffect(() => {
    if (isInitialized && !hasScrolledToSaved.current && currentIndex > 0) {
      hasScrolledToSaved.current = true;
      // Small delay to ensure FlatList is fully rendered
      const timer = setTimeout(() => {
        try {
          flatListRef.current?.scrollToIndex({
            index: currentIndex,
            animated: false,
          });
        } catch {
          // Fallback to scrollToOffset if scrollToIndex fails
          console.log('Scroll to index failed, using offset');
          flatListRef.current?.scrollToOffset({
            offset: currentIndex * SCREEN_HEIGHT,
            animated: false,
          });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInitialized, currentIndex]);

  const handleAnswerSelect = async (questionId: string, selectedAnswer: number, isCorrect: boolean) => {
    // Add answer to store
    addAnswer(questionId, {
      selectedAnswer,
      isCorrect,
      timestamp: Date.now(),
    });

    // Check if all questions have been answered
    const updatedCount = Object.keys(answeredQuestions).length + 1;
    if (updatedCount === questions.length) {
      await completeQuiz(currentCategory, currentSubcategory, questions.length);
    }
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / SCREEN_HEIGHT);
    if (index !== currentIndex && index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  if (questions.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{'> NO_QUIZZES_FOUND'}</Text>
        <Text style={styles.emptySubtext}>
          No quiz questions available for this category
        </Text>
      </View>
    );
  }

  return (
    <>
      {/* Progress Indicator */}
      {isInitialized && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${((currentIndex + 1) / questions.length) * 100}%` }
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {currentIndex + 1} / {questions.length}
          </Text>
        </View>
      )}

      <FlatList
        ref={flatListRef}
        data={questions}
        renderItem={({ item }) => (
          <QuizCard
            question={item}
            onAnswerSelect={handleAnswerSelect}
            previousAnswer={answeredQuestions[item.id]}
          />
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={SCREEN_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        getItemLayout={(data, index) => ({
          length: SCREEN_HEIGHT,
          offset: SCREEN_HEIGHT * index,
          index,
        })}
        style={styles.container}
      />

      {/* Resume Dialog */}
      <Modal
        visible={showResumeDialog}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowResumeDialog(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{'> CONTINUE_LEARNING?'}</Text>
            <Text style={styles.modalMessage}>
              You were on question {savedProgress ? savedProgress.currentIndex + 1 : 1} of {questions.length}.
            </Text>
            <Text style={styles.modalSubtext}>
              Would you like to continue where you left off or start over?
            </Text>

            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={continueQuiz}
              >
                <Text style={styles.modalButtonTextPrimary}>CONTINUE</Text>
              </Pressable>

              <Pressable
                style={[styles.modalButton, styles.modalButtonSecondary]}
                onPress={() => startOver(currentCategory, currentSubcategory)}
              >
                <Text style={styles.modalButtonTextSecondary}>START OVER</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Completion Dialog */}
      <Modal
        visible={showCompletionDialog}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCompletionDialog(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{'> QUIZ_COMPLETED!'}</Text>
            <Text style={styles.modalMessage}>
              Congratulations! You&apos;ve completed all {questions.length} questions.
            </Text>

            {(() => {
              const correctCount = Object.values(answeredQuestions).filter(a => a.isCorrect).length;
              const percentage = Math.round((correctCount / questions.length) * 100);
              return (
                <>
                  <Text style={[styles.modalScore, { color: percentage >= 70 ? RetroColors.terminal : percentage >= 50 ? RetroColors.amber : RetroColors.red }]}>
                    SCORE: {correctCount} / {questions.length} ({percentage}%)
                  </Text>
                  <Text style={styles.modalSubtext}>
                    {percentage >= 90 ? 'Outstanding work!' : percentage >= 70 ? 'Great job!' : percentage >= 50 ? 'Good effort!' : 'Keep practicing!'}
                  </Text>
                </>
              );
            })()}

            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={() => {
                  setShowCompletionDialog(false);
                  router.back();
                }}
              >
                <Text style={styles.modalButtonTextPrimary}>BACK TO CATEGORIES</Text>
              </Pressable>

              <Pressable
                style={[styles.modalButton, styles.modalButtonSecondary]}
                onPress={async () => {
                  await startOver(currentCategory, currentSubcategory);
                  setShowCompletionDialog(false);
                  flatListRef.current?.scrollToIndex({ index: 0, animated: false });
                }}
              >
                <Text style={styles.modalButtonTextSecondary}>TRY AGAIN</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RetroColors.background,
  },
  progressContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: RetroColors.background,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: RetroColors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: RetroColors.surface,
    borderWidth: 1,
    borderColor: RetroColors.border,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: RetroColors.terminal,
  },
  progressText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    minWidth: 60,
    textAlign: 'right',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RetroColors.background,
    padding: 20,
  },
  emptyText: {
    fontFamily: 'monospace',
    fontSize: 18,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  emptySubtext: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
    borderColor: RetroColors.terminal,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontFamily: 'monospace',
    fontSize: 18,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalMessage: {
    fontFamily: 'monospace',
    fontSize: 15,
    color: RetroColors.text,
    marginBottom: 8,
    lineHeight: 22,
  },
  modalSubtext: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.textDim,
    marginBottom: 24,
    lineHeight: 20,
  },
  modalButtons: {
    gap: 12,
  },
  modalButton: {
    padding: 16,
    borderWidth: 2,
    alignItems: 'center',
  },
  modalButtonPrimary: {
    backgroundColor: RetroColors.terminal,
    borderColor: RetroColors.terminal,
  },
  modalButtonSecondary: {
    backgroundColor: 'transparent',
    borderColor: RetroColors.textDim,
  },
  modalButtonTextPrimary: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.background,
    fontWeight: 'bold',
  },
  modalButtonTextSecondary: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.textDim,
    fontWeight: 'bold',
  },
  modalScore: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
});
