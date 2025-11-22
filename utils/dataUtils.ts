import { questions } from '../data/questions';
import { quizQuestions } from '../data/quizzes';
import { lessons } from '../data/lessons';
import { QuestionType } from '../types/question';
import { QuizCategory, JavaScriptSubCategory } from '../types/quiz';
import { LearningCategory, LessonLevel } from '../types/learning';

/**
 * Get count of questions by type
 */
export function getQuestionCountByType(type: QuestionType | 'all'): number {
  if (type === 'all') {
    return questions.length;
  }
  return questions.filter((q) => q.type === type).length;
}

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
 * Get count of lessons by category
 */
export function getLessonCountByCategory(category: LearningCategory): number {
  return lessons.filter((l) => l.category === category).length;
}

/**
 * Get count of lessons by level within a category
 */
export function getLessonCountByLevel(
  category: LearningCategory,
  level: LessonLevel
): number {
  return lessons.filter((l) => l.category === category && l.level === level).length;
}

/**
 * Get counts of all lesson categories
 */
export function getAllLessonCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};

  lessons.forEach((lesson) => {
    counts[lesson.category] = (counts[lesson.category] || 0) + 1;
  });

  return counts;
}

/**
 * Get lesson counts by level for a category
 */
export function getLessonLevelBreakdown(category: LearningCategory): {
  beginner: number;
  intermediate: number;
  advanced: number;
} {
  const categoryLessons = lessons.filter((l) => l.category === category);

  return {
    beginner: categoryLessons.filter((l) => l.level === 'beginner').length,
    intermediate: categoryLessons.filter((l) => l.level === 'intermediate').length,
    advanced: categoryLessons.filter((l) => l.level === 'advanced').length,
  };
}

/**
 * Get total count of all content in the app
 */
export function getTotalContentCount(): {
  questions: number;
  quizzes: number;
  lessons: number;
  total: number;
} {
  return {
    questions: questions.length,
    quizzes: quizQuestions.length,
    lessons: lessons.length,
    total: questions.length + quizQuestions.length + lessons.length,
  };
}

/**
 * Filter questions by type
 */
export function filterQuestionsByType(type: QuestionType | 'all') {
  if (type === 'all') {
    return questions;
  }
  return questions.filter((q) => q.type === type);
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
 * Filter and sort lessons by category
 */
export function getLessonsByCategory(category: LearningCategory) {
  return lessons
    .filter((l) => l.category === category)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get lesson by ID
 */
export function getLessonById(id: string) {
  return lessons.find((l) => l.id === id);
}

/**
 * Get quiz by ID
 */
export function getQuizById(id: string) {
  return quizQuestions.find((q) => q.id === id);
}

/**
 * Get question by ID
 */
export function getQuestionById(id: string) {
  return questions.find((q) => q.id === id);
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
