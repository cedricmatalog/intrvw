import { QuizQuestion } from '../../types/quiz';

export const typescriptQuizzes: QuizQuestion[] = [
  {
    id: 'ts-1',
    question: 'What is the difference between "interface" and "type" in TypeScript?',
    category: 'typescript',
    difficulty: 'medium',
    options: [
      'They are exactly the same',
      'Interface can be extended, type cannot',
      'Interface can be merged, type uses intersection',
      'Type is deprecated',
    ],
    correctAnswer: 2,
    explanation: 'Interfaces can be merged (declaration merging) and are always object types. Types use intersections (&) for combining and can represent primitives, unions, and tuples. Both can be extended, but interfaces use "extends" while types use "&".',
    tags: ['types', 'interfaces', 'type-system'],
  },
  {
    id: 'ts-2',
    question: 'What does the "readonly" modifier do in TypeScript?',
    category: 'typescript',
    difficulty: 'easy',
    options: [
      'Makes properties read-only at compile time',
      'Makes properties read-only at runtime',
      'Creates immutable objects',
      'Prevents object deletion',
    ],
    correctAnswer: 0,
    explanation: 'The "readonly" modifier makes properties read-only at compile time only. TypeScript will show an error if you try to reassign a readonly property, but this is only a compile-time check - JavaScript runtime is not affected.',
    tags: ['readonly', 'modifiers', 'type-safety'],
  },
];
