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

export interface QuizQuestion {
  id: string;
  question: string;
  category: QuizCategory;
  difficulty: 'easy' | 'medium' | 'hard';
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  tags?: string[];
}