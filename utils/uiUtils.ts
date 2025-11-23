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
