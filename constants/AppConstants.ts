import { RetroColors } from './RetroTheme';
import { QuestionType } from '../types/question';
import { QuizCategory, JavaScriptSubCategory } from '../types/quiz';
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
 * JavaScript subcategory labels and descriptions
 */
export const JS_SUBCATEGORY_LABELS: Record<JavaScriptSubCategory, string> = {
  'basics': 'BASICS',
  'operators': 'OPERATORS',
  'functions': 'FUNCTIONS',
  'objects': 'OBJECTS',
  'arrays': 'ARRAYS',
  'classes': 'CLASSES',
  'async': 'ASYNC/AWAIT',
  'promises': 'PROMISES',
  'closures': 'CLOSURES',
  'scope': 'SCOPE',
  'this': 'THIS KEYWORD',
  'prototypes': 'PROTOTYPES',
  'modules': 'MODULES',
  'generators': 'GENERATORS',
  'proxy-reflect': 'PROXY & REFLECT',
  'symbols': 'SYMBOLS',
  'regex': 'REGEX',
  'iterators': 'ITERATORS',
  'type-coercion': 'TYPE COERCION',
  'event-loop': 'EVENT LOOP',
};

export const JS_SUBCATEGORY_DESCRIPTIONS: Record<JavaScriptSubCategory, string> = {
  'basics': 'Variables, types, typeof, and fundamentals',
  'operators': 'Arithmetic, logical, comparison, and more',
  'functions': 'Function declarations, expressions, and arrow functions',
  'objects': 'Object creation, properties, and methods',
  'arrays': 'Array methods, iteration, and manipulation',
  'classes': 'ES6 classes, constructors, and inheritance',
  'async': 'Async/await syntax and patterns',
  'promises': 'Promise creation, chaining, and error handling',
  'closures': 'Lexical scope and function closures',
  'scope': 'Variable scope, hoisting, and the scope chain',
  'this': 'Context binding and this keyword behavior',
  'prototypes': 'Prototype chain and inheritance',
  'modules': 'ES6 modules, import/export',
  'generators': 'Generator functions and yield',
  'proxy-reflect': 'Proxy objects and Reflect API',
  'symbols': 'Symbol primitive and use cases',
  'regex': 'Regular expressions and pattern matching',
  'iterators': 'Iterators and iterable protocol',
  'type-coercion': 'Implicit and explicit type conversion',
  'event-loop': 'Event loop, microtasks, and macrotasks',
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
