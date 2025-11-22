import { QuizQuestion } from '../types/quiz';
import { javascriptQuizzes } from './javascript-quizzes';

export const quizQuestions: QuizQuestion[] = [
  // JavaScript Questions from javascript-questions.md (Lydia Hallie)
  ...javascriptQuizzes,

  // TypeScript Questions
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

  // React Questions
  {
    id: 'react-1',
    question: 'What is the purpose of useEffect hook in React?',
    category: 'react',
    difficulty: 'easy',
    options: [
      'To create side effects',
      'To handle component lifecycle and side effects',
      'To update state',
      'To create custom hooks',
    ],
    correctAnswer: 1,
    explanation: 'useEffect is used to handle side effects in functional components. It runs after render and can be used for data fetching, subscriptions, DOM manipulation, and more. It combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount.',
    tags: ['hooks', 'useEffect', 'lifecycle'],
  },
  {
    id: 'react-2',
    question: 'What is the Virtual DOM?',
    category: 'react',
    difficulty: 'medium',
    options: [
      'A copy of the browser DOM stored in memory',
      'A lightweight JavaScript representation of the DOM',
      'A testing environment for React',
      'A deprecated React feature',
    ],
    correctAnswer: 1,
    explanation: 'The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to improve performance by calculating the minimal set of changes needed to update the real DOM through a process called "reconciliation".',
    tags: ['virtual-dom', 'reconciliation', 'performance'],
  },
  {
    id: 'react-3',
    question: 'When should you use useMemo hook?',
    category: 'react',
    difficulty: 'medium',
    options: [
      'For all function calls',
      'To memoize expensive calculations',
      'To replace useState',
      'For API calls',
    ],
    correctAnswer: 1,
    explanation: 'useMemo should be used to memoize expensive calculations so they only re-run when dependencies change. It helps optimize performance by avoiding unnecessary recalculations on every render. However, it should not be overused as it has its own overhead.',
    tags: ['hooks', 'useMemo', 'performance', 'optimization'],
  },

  // Node.js Questions
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

  // Algorithms Questions
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

  // Data Structures Questions
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

  // System Design Questions
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

  // Database Questions
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

  // Web Fundamentals Questions
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

  // Git Questions
  {
    id: 'git-1',
    question: 'What is the difference between "git merge" and "git rebase"?',
    category: 'git',
    difficulty: 'medium',
    options: [
      'They do the same thing',
      'Merge creates a merge commit, rebase rewrites history',
      'Rebase is deprecated',
      'Merge is faster than rebase',
    ],
    correctAnswer: 1,
    explanation: 'git merge combines branches by creating a new merge commit, preserving history. git rebase rewrites commit history by moving commits to a new base, creating a linear history. Rebase should not be used on public branches.',
    tags: ['git', 'merge', 'rebase', 'version-control'],
  },
  {
    id: 'git-2',
    question: 'What does "git stash" do?',
    category: 'git',
    difficulty: 'easy',
    options: [
      'Deletes uncommitted changes',
      'Temporarily stores uncommitted changes',
      'Creates a new branch',
      'Pushes changes to remote',
    ],
    correctAnswer: 1,
    explanation: 'git stash temporarily stores uncommitted changes (both staged and unstaged) so you can work on something else. You can later reapply these changes with "git stash pop" or "git stash apply".',
    tags: ['git', 'stash', 'workflow'],
  },
];
