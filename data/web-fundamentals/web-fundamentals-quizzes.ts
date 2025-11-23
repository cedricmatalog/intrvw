import { QuizQuestion } from '../../types/quiz';

export const webFundamentalsQuizzes: QuizQuestion[] = [
  {
    id: 'web-1',
    question: 'What HTTP status code indicates a successful request?',
    category: 'web-fundamentals',
    difficulty: 'easy',
    options: [
      '404',
      '500',
      '200',
      '301',
    ],
    correctAnswer: 2,
    explanation: '200 OK indicates that the request has succeeded. Other common codes: 404 (Not Found), 500 (Internal Server Error), 301 (Moved Permanently), 400 (Bad Request).',
    tags: ['http', 'status-codes', 'web'],
  },
  {
    id: 'web-2',
    question: 'What is CORS?',
    category: 'web-fundamentals',
    difficulty: 'medium',
    options: [
      'A CSS framework',
      'Cross-Origin Resource Sharing security mechanism',
      'A JavaScript library',
      'A database technology',
    ],
    correctAnswer: 1,
    explanation: 'CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts resources on a web page to be requested from another domain. It prevents malicious websites from making unauthorized requests to your API.',
    tags: ['cors', 'security', 'http'],
  },
];
