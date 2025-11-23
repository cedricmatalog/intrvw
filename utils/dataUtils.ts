import { quizQuestions } from '../data/quizzes';
import { QuizCategory, JavaScriptSubCategory } from '../types/quiz';

/**
 * Get count of quizzes by category
 */
export function getQuizCountByCategory(category: QuizCategory | 'all'): number {
  if (category === 'all') {
    return quizQuestions.length;
  }
  return quizQuestions.filter((q) => q.category === category).length;
}

/**
 * Get counts of all quiz categories
 */
export function getAllQuizCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {
    all: quizQuestions.length,
  };

  quizQuestions.forEach((q) => {
    counts[q.category] = (counts[q.category] || 0) + 1;
  });

  return counts;
}

/**
 * Filter quizzes by category
 */
export function filterQuizzesByCategory(category: QuizCategory | 'all') {
  if (category === 'all') {
    return quizQuestions;
  }
  return quizQuestions.filter((q) => q.category === category);
}

/**
 * Get quiz by ID
 */
export function getQuizById(id: string) {
  return quizQuestions.find((q) => q.id === id);
}

/**
 * Filter JavaScript quizzes by subcategory
 */
export function filterJavaScriptQuizzesBySubcategory(subcategory: JavaScriptSubCategory | 'all') {
  const jsQuizzes = quizQuestions.filter((q) => q.category === 'javascript');

  if (subcategory === 'all') {
    return jsQuizzes;
  }

  return jsQuizzes.filter((q) => q.subcategory === subcategory);
}

/**
 * Get count of JavaScript quizzes by subcategory
 */
export function getJavaScriptQuizCountBySubcategory(subcategory: JavaScriptSubCategory | 'all'): number {
  return filterJavaScriptQuizzesBySubcategory(subcategory).length;
}

/**
 * Get counts of all JavaScript subcategories
 */
export function getAllJavaScriptSubcategoryCounts(): Record<string, number> {
  const jsQuizzes = quizQuestions.filter((q) => q.category === 'javascript');
  const counts: Record<string, number> = {
    all: jsQuizzes.length,
  };

  jsQuizzes.forEach((q) => {
    if (q.subcategory) {
      counts[q.subcategory] = (counts[q.subcategory] || 0) + 1;
    }
  });

  return counts;
}
