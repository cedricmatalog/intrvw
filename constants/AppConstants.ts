import { RetroColors } from './RetroTheme';
import { QuizCategory, JavaScriptSubCategory } from '../types/quiz';

/**
 * Category color mappings used throughout the app
 */
export const CATEGORY_COLORS: Record<string, string> = {
  // Quiz categories
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
};

/**
 * Difficulty/level color mappings
 */
export const LEVEL_COLORS: Record<string, string> = {
  easy: RetroColors.terminal,
  medium: RetroColors.amber,
  hard: RetroColors.red,
};

/**
 * Category display names
 */
export const CATEGORY_LABELS: Record<string, string> = {
  // Quiz categories
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
 * App-wide UI constants
 */
export const UI_CONSTANTS = {
  SCREEN_PADDING: 20,
  CARD_SPACING: 16,
  BORDER_WIDTH: 2,
  BADGE_PADDING_HORIZONTAL: 12,
  BADGE_PADDING_VERTICAL: 6,
} as const;
