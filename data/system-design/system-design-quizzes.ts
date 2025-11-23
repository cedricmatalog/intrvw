import { QuizQuestion } from '../../types/quiz';

export const systemDesignQuizzes: QuizQuestion[] = [
  {
    id: 'sd-1',
    question: 'What is horizontal scaling?',
    category: 'system-design',
    difficulty: 'medium',
    options: [
      'Adding more power to existing servers',
      'Adding more servers to distribute load',
      'Optimizing code performance',
      'Increasing database size',
    ],
    correctAnswer: 1,
    explanation: 'Horizontal scaling (scaling out) means adding more servers to distribute the load. This is different from vertical scaling (scaling up) which means adding more power (CPU, RAM) to existing servers. Horizontal scaling is often preferred for better fault tolerance.',
    tags: ['scaling', 'distributed-systems', 'architecture'],
  },
  {
    id: 'sd-2',
    question: 'What is the purpose of a load balancer?',
    category: 'system-design',
    difficulty: 'easy',
    options: [
      'To store user sessions',
      'To distribute traffic across multiple servers',
      'To cache static files',
      'To compile code',
    ],
    correctAnswer: 1,
    explanation: 'A load balancer distributes incoming network traffic across multiple servers. This ensures no single server bears too much load, improves availability, and allows for better resource utilization.',
    tags: ['load-balancer', 'distributed-systems', 'scalability'],
  },
];
