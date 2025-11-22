import React, { useState, useRef, useEffect } from 'react';
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
import { QuizQuestion } from '../../types/quiz';
import { RetroColors } from '../../constants/RetroTheme';
import { useLocalSearchParams } from 'expo-router';
import { QuizCategory, JavaScriptSubCategory } from '../../types/quiz';
import { getProgress, saveProgress, resetProgress, QuizProgress } from '../../utils/progressStorage';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface QuizFeedProps {
  questions: QuizQuestion[];
}

export const QuizFeed: React.FC<QuizFeedProps> = ({ questions }) => {
  const { category, subcategory } = useLocalSearchParams<{
    category?: QuizCategory | 'all';
    subcategory?: JavaScriptSubCategory | 'all';
  }>();
  const currentCategory = category || 'all';
  const currentSubcategory = subcategory;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [savedProgress, setSavedProgress] = useState<QuizProgress | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<{
    [questionId: string]: {
      selectedAnswer: number;
      isCorrect: boolean;
      timestamp: number;
    };
  }>({});
  const flatListRef = useRef<FlatList>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const hasScrolledToSaved = useRef(false);

  // Load saved progress on mount
  useEffect(() => {
    loadProgress();
  }, [currentCategory, currentSubcategory]);

  // Save progress when index or answeredQuestions changes
  useEffect(() => {
    if (isInitialized && questions.length > 0) {
      saveCurrentProgress();
    }
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
        } catch (error) {
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

  const loadProgress = async () => {
    const progress = await getProgress(currentCategory, currentSubcategory);
    if (progress) {
      setAnsweredQuestions(progress.answeredQuestions || {});
      if (progress.currentIndex > 0 && progress.currentIndex < questions.length) {
        setSavedProgress(progress);
        setShowResumeDialog(true);
        return;
      }
    }
    setIsInitialized(true);
  };

  const saveCurrentProgress = async () => {
    const progress: QuizProgress = {
      category: currentCategory,
      subcategory: currentSubcategory,
      currentIndex,
      answeredQuestions,
      lastUpdated: Date.now(),
    };
    await saveProgress(progress);
  };

  const handleAnswerSelect = (questionId: string, selectedAnswer: number, isCorrect: boolean) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [questionId]: {
        selectedAnswer,
        isCorrect,
        timestamp: Date.now(),
      },
    }));
  };

  const handleContinue = () => {
    if (savedProgress) {
      setCurrentIndex(savedProgress.currentIndex);
    }
    setShowResumeDialog(false);
    setIsInitialized(true);
  };

  const handleStartOver = async () => {
    await resetProgress(currentCategory, currentSubcategory);
    setCurrentIndex(0);
    setAnsweredQuestions({});
    setShowResumeDialog(false);
    setIsInitialized(true);
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
                onPress={handleContinue}
              >
                <Text style={styles.modalButtonTextPrimary}>CONTINUE</Text>
              </Pressable>

              <Pressable
                style={[styles.modalButton, styles.modalButtonSecondary]}
                onPress={handleStartOver}
              >
                <Text style={styles.modalButtonTextSecondary}>START OVER</Text>
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
});
