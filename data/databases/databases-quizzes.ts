import { QuizQuestion } from '../../types/quiz';

export const databasesQuizzes: QuizQuestion[] = [
  {
    id: 'db-1',
    question: 'What is the difference between SQL and NoSQL databases?',
    category: 'databases',
    difficulty: 'easy',
    options: [
      'SQL is faster than NoSQL',
      'SQL is relational with schema, NoSQL is non-relational',
      'NoSQL cannot handle large data',
      'They are the same',
    ],
    correctAnswer: 1,
    explanation: 'SQL databases are relational, table-based, and use structured schemas with ACID properties. NoSQL databases are non-relational, can be document-based, key-value, graph, or column-based, and offer more flexibility with schema-less designs.',
    tags: ['sql', 'nosql', 'databases'],
  },
  {
    id: 'db-2',
    question: 'What does ACID stand for in database transactions?',
    category: 'databases',
    difficulty: 'medium',
    options: [
      'Async, Consistent, Isolated, Durable',
      'Atomicity, Consistency, Isolation, Durability',
      'Atomic, Cached, Indexed, Distributed',
      'All, Complete, Independent, Data',
    ],
    correctAnswer: 1,
    explanation: 'ACID stands for Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don\'t interfere), and Durability (committed changes persist). These properties ensure reliable database transactions.',
    tags: ['acid', 'transactions', 'databases'],
  },
];
