import { QuizQuestion } from '../../types/quiz';

export const algorithmsQuizzes: QuizQuestion[] = [
  {
    id: 'algo-1',
    question: 'What is the time complexity of binary search?',
    category: 'algorithms',
    difficulty: 'easy',
    options: [
      'O(n)',
      'O(log n)',
      'O(n²)',
      'O(1)',
    ],
    correctAnswer: 1,
    explanation: 'Binary search has O(log n) time complexity because it divides the search space in half with each iteration. This makes it very efficient for searching sorted arrays.',
    tags: ['binary-search', 'time-complexity', 'searching'],
  },
  {
    id: 'algo-2',
    question: 'Which sorting algorithm has the best average-case time complexity?',
    category: 'algorithms',
    difficulty: 'medium',
    options: [
      'Bubble Sort - O(n²)',
      'Quick Sort - O(n log n)',
      'Selection Sort - O(n²)',
      'Insertion Sort - O(n²)',
    ],
    correctAnswer: 1,
    explanation: 'Quick Sort has an average-case time complexity of O(n log n), which is optimal for comparison-based sorting. While its worst case is O(n²), this is rare with good pivot selection. Merge Sort also has O(n log n) but Quick Sort is often faster in practice.',
    tags: ['sorting', 'time-complexity', 'quick-sort'],
  },
];
