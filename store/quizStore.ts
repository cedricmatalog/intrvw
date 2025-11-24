import { create } from 'zustand';
import { QuizCategory, JavaScriptSubCategory } from '@/types/quiz';
import { getProgress, saveProgress, resetProgress, QuizProgress } from '@/utils/progressStorage';

interface AnsweredQuestion {
  selectedAnswer: number;
  isCorrect: boolean;
  timestamp: number;
}

interface QuizState {
  // Current quiz state
  currentIndex: number;
  answeredQuestions: { [questionId: string]: AnsweredQuestion };
  isInitialized: boolean;
  isCompleted: boolean;

  // Dialog states
  showResumeDialog: boolean;
  showCompletionDialog: boolean;
  savedProgress: QuizProgress | null;

  // Actions
  setCurrentIndex: (index: number) => void;
  addAnswer: (questionId: string, answer: AnsweredQuestion) => void;
  setIsInitialized: (initialized: boolean) => void;
  setShowResumeDialog: (show: boolean) => void;
  setShowCompletionDialog: (show: boolean) => void;

  // Async actions
  loadProgress: (category: QuizCategory | 'all', subcategory: JavaScriptSubCategory | 'all' | undefined, totalQuestions: number) => Promise<void>;
  saveCurrentProgress: (category: QuizCategory | 'all', subcategory: JavaScriptSubCategory | 'all' | undefined) => Promise<void>;
  completeQuiz: (category: QuizCategory | 'all', subcategory: JavaScriptSubCategory | 'all' | undefined, totalQuestions: number) => Promise<void>;
  startOver: (category: QuizCategory | 'all', subcategory: JavaScriptSubCategory | 'all' | undefined) => Promise<void>;
  continueQuiz: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  // Initial state
  currentIndex: 0,
  answeredQuestions: {},
  isInitialized: false,
  isCompleted: false,
  showResumeDialog: false,
  showCompletionDialog: false,
  savedProgress: null,

  // Simple setters
  setCurrentIndex: (index) => set({ currentIndex: index }),

  addAnswer: (questionId, answer) => {
    const state = get();
    set({
      answeredQuestions: {
        ...state.answeredQuestions,
        [questionId]: answer,
      },
    });
  },

  setIsInitialized: (initialized) => set({ isInitialized: initialized }),
  setShowResumeDialog: (show) => set({ showResumeDialog: show }),
  setShowCompletionDialog: (show) => set({ showCompletionDialog: show }),

  // Load progress from storage
  loadProgress: async (category, subcategory, totalQuestions) => {
    const progress = await getProgress(category, subcategory);

    if (progress) {
      // Only show resume dialog if quiz is in progress (not completed)
      if (!progress.completed && progress.currentIndex > 0 && progress.currentIndex < (totalQuestions || 0)) {
        set({
          answeredQuestions: progress.answeredQuestions || {},
          savedProgress: progress,
          showResumeDialog: true,
        });
        return;
      }

      // If completed, start fresh (but keep completion data for display on category page)
      if (progress.completed) {
        set({
          answeredQuestions: {},
          currentIndex: 0,
          isCompleted: false,
        });
      }
    }

    set({ isInitialized: true });
  },

  // Save current progress
  saveCurrentProgress: async (category, subcategory) => {
    const state = get();

    // Don't save if quiz is completed
    if (state.isCompleted) {
      return;
    }

    const progress: QuizProgress = {
      category,
      subcategory,
      currentIndex: state.currentIndex,
      answeredQuestions: state.answeredQuestions,
      lastUpdated: Date.now(),
    };

    await saveProgress(progress);
  },

  // Complete the quiz
  completeQuiz: async (category, subcategory, totalQuestions) => {
    const state = get();

    // Mark as completed
    set({ isCompleted: true });

    // Calculate final score
    const correctCount = Object.values(state.answeredQuestions).filter(a => a.isCorrect).length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    // Save completion data
    const completionProgress: QuizProgress = {
      category,
      subcategory,
      currentIndex: state.currentIndex,
      answeredQuestions: state.answeredQuestions,
      lastUpdated: Date.now(),
      completed: true,
      completedAt: Date.now(),
      finalScore: {
        correct: correctCount,
        total: totalQuestions,
        percentage,
      },
    };

    await saveProgress(completionProgress);

    // Don't show completion dialog automatically - let user trigger it by scrolling
  },

  // Start over (reset progress)
  startOver: async (category, subcategory) => {
    await resetProgress(category, subcategory);
    set({
      currentIndex: 0,
      answeredQuestions: {},
      isCompleted: false,
      showResumeDialog: false,
      isInitialized: true,
    });
  },

  // Continue from saved progress
  continueQuiz: () => {
    const state = get();
    if (state.savedProgress) {
      set({
        currentIndex: state.savedProgress.currentIndex,
        showResumeDialog: false,
        isInitialized: true,
      });
    }
  },

  // Reset quiz state (for unmounting/cleanup)
  resetQuiz: () => {
    set({
      currentIndex: 0,
      answeredQuestions: {},
      isInitialized: false,
      isCompleted: false,
      showResumeDialog: false,
      showCompletionDialog: false,
      savedProgress: null,
    });
  },
}));
