export type QuestionType = 'behavioral' | 'technical' | 'situational' | 'culture-fit';

export type Category =
  | 'behavioral'
  | 'technical-discussion'
  | 'leadership'
  | 'problem-solving'
  | 'teamwork'
  | 'career-goals'
  | 'conflict-resolution'
  | 'projects'
  | 'strengths-weaknesses'
  | 'company-specific';

export interface Question {
  id: string;
  question: string;
  category: Category;
  type: QuestionType;
  sampleAnswer: string;
  tips?: string[];
  keyPoints?: string[];
  whatToAvoid?: string[];
  followUpQuestions?: string[];
}