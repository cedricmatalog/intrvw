export type QuizCategory =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'node'
  | 'algorithms'
  | 'data-structures'
  | 'system-design'
  | 'databases'
  | 'web-fundamentals'
  | 'git';

export type JavaScriptSubCategory =
  | 'basics'
  | 'operators'
  | 'functions'
  | 'objects'
  | 'arrays'
  | 'classes'
  | 'async'
  | 'promises'
  | 'closures'
  | 'scope'
  | 'this'
  | 'prototypes'
  | 'modules'
  | 'generators'
  | 'proxy-reflect'
  | 'symbols'
  | 'regex'
  | 'iterators'
  | 'type-coercion'
  | 'event-loop';

export interface QuizQuestion {
  id: string;
  question: string;
  category: QuizCategory;
  subcategory?: JavaScriptSubCategory; // Optional: for filtering JavaScript questions by topic
  difficulty: 'easy' | 'medium' | 'hard';
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  tags?: string[];
}