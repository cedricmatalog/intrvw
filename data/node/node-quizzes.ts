import { QuizQuestion } from '../../types/quiz';

export const nodeQuizzes: QuizQuestion[] = [
  {
    id: 'node-1',
    question: 'What is the event loop in Node.js?',
    category: 'node',
    difficulty: 'hard',
    options: [
      'A loop that processes events synchronously',
      'A mechanism that handles async operations using callbacks',
      'A for loop for iterating events',
      'A debugging tool',
    ],
    correctAnswer: 1,
    explanation: 'The event loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It offloads operations to the system kernel whenever possible and handles callbacks when operations complete.',
    tags: ['event-loop', 'async', 'concurrency'],
  },
  {
    id: 'node-2',
    question: 'What is the purpose of package.json?',
    category: 'node',
    difficulty: 'easy',
    options: [
      'To store application data',
      'To manage project metadata and dependencies',
      'To configure the web server',
      'To define routes',
    ],
    correctAnswer: 1,
    explanation: 'package.json is the manifest file for Node.js projects. It contains metadata about the project (name, version, description) and manages dependencies, scripts, and configuration for various tools.',
    tags: ['package-json', 'npm', 'dependencies'],
  },
];
