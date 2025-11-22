export type LearningCategory =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'node'
  | 'web-fundamentals'
  | 'system-design'
  | 'algorithms'
  | 'data-structures'
  | 'career';

export type LessonLevel = 'beginner' | 'intermediate' | 'advanced';

export type ContentType = 'guide' | 'cheatsheet' | 'article';

export interface Lesson {
  id: string;
  category: LearningCategory;
  level: LessonLevel;
  order: number; // Order in the learning path
  title: string;
  concept: string; // Main concept being taught
  explanation: string;
  example?: string; // Code example or practical example
  keyPoints: string[];
  tryIt?: string; // Challenge or exercise
  nextUp?: string; // Preview of next lesson
}

export interface LearningContent {
  id: string;
  title: string;
  category: LearningCategory;
  type: ContentType;
  description: string;
  readTime: number;
  content: {
    sections: Array<{
      title: string;
      items: string[];
    }>;
  };
  tags: string[];
}
