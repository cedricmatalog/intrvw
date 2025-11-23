import { QuizQuestion } from '../../types/quiz';

export const dataStructuresQuizzes: QuizQuestion[] = [
  {
    id: 'ds-1',
    question: 'What is the main difference between a Stack and a Queue?',
    category: 'data-structures',
    difficulty: 'easy',
    options: [
      'Stack is FIFO, Queue is LIFO',
      'Stack is LIFO, Queue is FIFO',
      'They are the same',
      'Stack is faster than Queue',
    ],
    correctAnswer: 1,
    explanation: 'Stack follows LIFO (Last In First Out) - the last element added is the first one removed. Queue follows FIFO (First In First Out) - the first element added is the first one removed, like a line of people.',
    tags: ['stack', 'queue', 'data-structures'],
  },
  {
    id: 'ds-2',
    question: 'What is the average time complexity for searching in a hash table?',
    category: 'data-structures',
    difficulty: 'medium',
    options: [
      'O(n)',
      'O(log n)',
      'O(1)',
      'O(n²)',
    ],
    correctAnswer: 2,
    explanation: 'Hash tables have O(1) average time complexity for search, insert, and delete operations. This is achieved through hashing, which directly computes the index where a value should be stored. Worst case is O(n) when there are many collisions.',
    tags: ['hash-table', 'time-complexity', 'searching'],
  },
];
