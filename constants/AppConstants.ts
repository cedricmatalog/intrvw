import { RetroColors } from './RetroTheme';
import { QuestionType } from '../types/question';
import { QuizCategory } from '../types/quiz';
import { LearningCategory, LessonLevel } from '../types/learning';

/**
 * Category color mappings used throughout the app
 */
export const CATEGORY_COLORS: Record<string, string> = {
  // Question types
  behavioral: RetroColors.terminal,
  technical: RetroColors.blue,
  situational: RetroColors.amber,
  'culture-fit': RetroColors.purple,

  // Quiz/Learning categories
  javascript: RetroColors.amber,
  typescript: RetroColors.blue,
  react: RetroColors.cyan,
  node: RetroColors.green,
  'web-fundamentals': RetroColors.purple,
  'system-design': RetroColors.orange,
  algorithms: RetroColors.purple,
  'data-structures': RetroColors.magenta,
  databases: RetroColors.red,
  git: RetroColors.pink,
  career: RetroColors.terminal,
};

/**
 * Difficulty/level color mappings
 */
export const LEVEL_COLORS: Record<string, string> = {
  easy: RetroColors.terminal,
  medium: RetroColors.amber,
  hard: RetroColors.red,
  beginner: RetroColors.terminal,
  intermediate: RetroColors.amber,
  advanced: RetroColors.red,
};

/**
 * Content type labels for display
 */
export const CONTENT_TYPE_LABELS: Record<string, string> = {
  guide: 'GUIDE',
  cheatsheet: 'CHEATSHEET',
  cheat: 'CHEAT',
  article: 'ARTICLE',
};

/**
 * Category display names
 */
export const CATEGORY_LABELS: Record<string, string> = {
  // Question types
  behavioral: 'BEHAVIORAL',
  technical: 'TECHNICAL',
  situational: 'SITUATIONAL',
  'culture-fit': 'CULTURE FIT',

  // Quiz/Learning categories
  javascript: 'JAVASCRIPT',
  typescript: 'TYPESCRIPT',
  react: 'REACT',
  node: 'NODE.JS',
  'web-fundamentals': 'WEB FUNDAMENTALS',
  'system-design': 'SYSTEM DESIGN',
  algorithms: 'ALGORITHMS',
  'data-structures': 'DATA STRUCTURES',
  databases: 'DATABASES',
  git: 'GIT',
  career: 'CAREER',
};

/**
 * Category descriptions for learning paths
 */
export const LEARNING_PATH_DESCRIPTIONS: Record<LearningCategory, string> = {
  javascript: 'Learn JavaScript from basics to advanced concepts - variables, functions, async, and more',
  typescript: 'Master TypeScript types, interfaces, generics, and type safety',
  react: 'Build modern UIs with React hooks, components, and state management',
  node: 'Backend development with Node.js, APIs, and server-side JavaScript',
  'web-fundamentals': 'HTTP, APIs, browsers, and core web technologies',
  'system-design': 'Scalability, architecture, and system design patterns',
  algorithms: 'Common algorithm patterns, sorting, searching, and problem-solving',
  'data-structures': 'Arrays, trees, graphs, hash tables, and when to use each',
  career: 'Resume tips, interview strategies, and career advice',
};

/**
 * Quiz category descriptions
 */
export const QUIZ_CATEGORY_DESCRIPTIONS: Record<QuizCategory, string> = {
  javascript: 'JS fundamentals, closures, async, and more',
  typescript: 'Type system, interfaces, generics',
  react: 'Hooks, lifecycle, virtual DOM',
  node: 'Event loop, npm, backend concepts',
  algorithms: 'Big O, sorting, searching',
  'data-structures': 'Arrays, trees, graphs, hash tables',
  'system-design': 'Scalability, architecture patterns',
  databases: 'SQL, NoSQL, ACID, transactions',
  'web-fundamentals': 'HTTP, APIs, CORS, security',
  git: 'Version control, branching, workflows',
};

/**
 * Question type descriptions
 */
export const QUESTION_TYPE_DESCRIPTIONS: Record<QuestionType | 'all', string> = {
  all: 'Practice all interview questions in one feed',
  behavioral: 'Tell me about yourself, strengths, weaknesses',
  technical: 'Project discussions, problem-solving approaches',
  situational: 'Conflict resolution, real-world scenarios',
  'culture-fit': 'Company-specific, why you want to work here',
};

/**
 * App-wide UI constants
 */
export const UI_CONSTANTS = {
  SCREEN_PADDING: 20,
  CARD_SPACING: 16,
  BORDER_WIDTH: 2,
  BADGE_PADDING_HORIZONTAL: 12,
  BADGE_PADDING_VERTICAL: 6,
} as const;
