import { CATEGORY_COLORS, LEVEL_COLORS, CATEGORY_LABELS } from '../constants/AppConstants';
import { RetroColors } from '../constants/RetroTheme';

/**
 * Get color for a category or type
 */
export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || RetroColors.terminal;
}

/**
 * Get color for a difficulty or level
 */
export function getLevelColor(level: string): string {
  return LEVEL_COLORS[level] || RetroColors.terminal;
}

/**
 * Get display label for a category
 */
export function getCategoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category.toUpperCase().replace('-', ' ');
}

/**
 * Format read time for display
 */
export function formatReadTime(minutes: number): string {
  if (minutes === 1) {
    return '1 MIN READ';
  }
  return `${minutes} MIN READ`;
}

/**
 * Format lesson progress as percentage
 */
export function formatProgress(current: number, total: number): string {
  const percentage = Math.round((current / total) * 100);
  return `${percentage}% Complete`;
}

/**
 * Format lesson count display
 */
export function formatLessonCount(count: number): string {
  return count === 1 ? '1 LESSON' : `${count} LESSONS`;
}

/**
 * Format question count display
 */
export function formatQuestionCount(count: number): string {
  return count === 1 ? '1 QUESTION' : `${count} QUESTIONS`;
}

/**
 * Get progress percentage
 */
export function getProgressPercentage(current: number, total: number): number {
  return Math.round((current / total) * 100);
}
