import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuizCategory, JavaScriptSubCategory } from '@/types/quiz';

const PROGRESS_KEY = '@quiz_progress';

export interface QuizProgress {
  category: QuizCategory | 'all';
  subcategory?: JavaScriptSubCategory | 'all'; // Optional subcategory for JavaScript
  currentIndex: number;
  answeredQuestions: {
    [questionId: string]: {
      selectedAnswer: number;
      isCorrect: boolean;
      timestamp: number;
    };
  };
  lastUpdated: number;
}

export interface ProgressData {
  [key: string]: QuizProgress; // key format: "category" or "category:subcategory"
}

/**
 * Generate storage key for progress
 */
function getProgressKey(category: QuizCategory | 'all', subcategory?: JavaScriptSubCategory | 'all'): string {
  if (subcategory && subcategory !== 'all') {
    return `${category}:${subcategory}`;
  }
  return category;
}

/**
 * Get progress for a specific category (and optional subcategory)
 */
export async function getProgress(
  category: QuizCategory | 'all',
  subcategory?: JavaScriptSubCategory | 'all'
): Promise<QuizProgress | null> {
  try {
    const data = await AsyncStorage.getItem(PROGRESS_KEY);
    if (!data) return null;

    const allProgress: ProgressData = JSON.parse(data);
    const key = getProgressKey(category, subcategory);
    return allProgress[key] || null;
  } catch (error) {
    console.error('Error getting progress:', error);
    return null;
  }
}

/**
 * Save progress for a specific category (and optional subcategory)
 */
export async function saveProgress(progress: QuizProgress): Promise<void> {
  try {
    const data = await AsyncStorage.getItem(PROGRESS_KEY);
    const allProgress: ProgressData = data ? JSON.parse(data) : {};

    const key = getProgressKey(progress.category, progress.subcategory);
    allProgress[key] = {
      ...progress,
      lastUpdated: Date.now(),
    };

    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

/**
 * Reset progress for a specific category (and optional subcategory)
 */
export async function resetProgress(
  category: QuizCategory | 'all',
  subcategory?: JavaScriptSubCategory | 'all'
): Promise<void> {
  try {
    const data = await AsyncStorage.getItem(PROGRESS_KEY);
    if (!data) return;

    const allProgress: ProgressData = JSON.parse(data);
    const key = getProgressKey(category, subcategory);
    delete allProgress[key];

    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  } catch (error) {
    console.error('Error resetting progress:', error);
  }
}

/**
 * Reset all progress
 */
export async function resetAllProgress(): Promise<void> {
  try {
    await AsyncStorage.removeItem(PROGRESS_KEY);
  } catch (error) {
    console.error('Error resetting all progress:', error);
  }
}

/**
 * Get all progress data
 */
export async function getAllProgress(): Promise<ProgressData> {
  try {
    const data = await AsyncStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error getting all progress:', error);
    return {};
  }
}
