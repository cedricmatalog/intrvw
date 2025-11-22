import { LearningContent } from '../types/learning';

export const learningContent: LearningContent[] = [
  // JavaScript Guides
  {
    id: 'js-closures',
    title: 'JavaScript Closures Explained',
    category: 'javascript',
    type: 'guide',
    description: 'Master closures with clear examples and common use cases',
    readTime: 8,
    content: {
      sections: [
        {
          title: 'What is a Closure?',
          items: [
            'A closure is a function that has access to variables in its outer scope',
            'Closures are created every time a function is created',
            'They "remember" the environment in which they were created',
            'Inner functions can access outer function variables even after outer function returns',
          ],
        },
        {
          title: 'Common Use Cases',
          items: [
            'Data privacy and encapsulation',
            'Creating function factories',
            'Event handlers and callbacks',
            'Partial application and currying',
            'Module pattern implementation',
          ],
        },
        {
          title: 'Key Points to Remember',
          items: [
            'Closures can cause memory leaks if not managed properly',
            'Variables are shared, not copied, in closures',
            'Use closures to create private variables',
            'Understanding scope chain is essential',
          ],
        },
      ],
    },
    tags: ['closures', 'scope', 'functions', 'advanced'],
  },
  {
    id: 'js-async',
    title: 'Async JavaScript Cheatsheet',
    category: 'javascript',
    type: 'cheatsheet',
    description: 'Quick reference for Promises, async/await, and callbacks',
    readTime: 5,
    content: {
      sections: [
        {
          title: 'Promises',
          items: [
            'States: pending, fulfilled, rejected',
            '.then() for success, .catch() for errors',
            '.finally() runs regardless of outcome',
            'Promise.all() - wait for all promises',
            'Promise.race() - first to settle wins',
            'Promise.allSettled() - wait for all, get all results',
          ],
        },
        {
          title: 'Async/Await',
          items: [
            'async keyword makes function return a Promise',
            'await pauses execution until Promise resolves',
            'Use try/catch for error handling',
            'await can only be used inside async functions',
            'Top-level await available in modules',
          ],
        },
        {
          title: 'Best Practices',
          items: [
            'Prefer async/await over raw Promises for readability',
            'Always handle errors (catch or try/catch)',
            'Avoid mixing callbacks and Promises',
            'Use Promise.all() for parallel operations',
            'Consider Promise.allSettled() when you need all results',
          ],
        },
      ],
    },
    tags: ['async', 'promises', 'callbacks', 'await'],
  },

  // React Guides
  {
    id: 'react-hooks',
    title: 'React Hooks Complete Guide',
    category: 'react',
    type: 'guide',
    description: 'Essential React hooks and when to use them',
    readTime: 10,
    content: {
      sections: [
        {
          title: 'useState',
          items: [
            'Manages local component state',
            'Returns [value, setValue] array',
            'State updates are asynchronous',
            'Functional updates: setValue(prev => prev + 1)',
            'Use multiple useState calls for different values',
          ],
        },
        {
          title: 'useEffect',
          items: [
            'Handles side effects (data fetching, subscriptions)',
            'Runs after render by default',
            'Dependency array controls when it runs',
            'Return cleanup function for subscriptions',
            'Empty deps [] = run once on mount',
          ],
        },
        {
          title: 'useCallback & useMemo',
          items: [
            'useCallback memoizes functions',
            'useMemo memoizes computed values',
            'Use to prevent unnecessary re-renders',
            'Include all dependencies in deps array',
            'Don\'t overuse - has its own overhead',
          ],
        },
        {
          title: 'useRef',
          items: [
            'Persists values across renders',
            'Doesn\'t trigger re-renders when changed',
            'Access DOM elements directly',
            'Store mutable values that don\'t affect UI',
          ],
        },
      ],
    },
    tags: ['react', 'hooks', 'useState', 'useEffect'],
  },
  {
    id: 'react-performance',
    title: 'React Performance Optimization',
    category: 'react',
    type: 'article',
    description: 'Techniques to make your React apps faster',
    readTime: 12,
    content: {
      sections: [
        {
          title: 'Memoization Techniques',
          items: [
            'React.memo() for component memoization',
            'useMemo for expensive calculations',
            'useCallback for function references',
            'Only memoize when necessary',
          ],
        },
        {
          title: 'Code Splitting',
          items: [
            'React.lazy() for dynamic imports',
            'Suspense for loading states',
            'Route-based code splitting',
            'Component-based splitting for large components',
          ],
        },
        {
          title: 'List Optimization',
          items: [
            'Always use unique keys',
            'Virtualize long lists (react-window)',
            'Avoid inline function definitions in map',
            'Pagination for very large datasets',
          ],
        },
        {
          title: 'State Management',
          items: [
            'Keep state as local as possible',
            'Lift state only when necessary',
            'Use context sparingly',
            'Consider state management libraries for complex apps',
          ],
        },
      ],
    },
    tags: ['react', 'performance', 'optimization', 'memoization'],
  },

  // TypeScript
  {
    id: 'ts-fundamentals',
    title: 'TypeScript Fundamentals',
    category: 'typescript',
    type: 'cheatsheet',
    description: 'Essential TypeScript types and concepts',
    readTime: 7,
    content: {
      sections: [
        {
          title: 'Basic Types',
          items: [
            'string, number, boolean - primitives',
            'array: string[] or Array<string>',
            'tuple: [string, number]',
            'enum for named constants',
            'any - avoid when possible',
            'unknown - safer alternative to any',
            'void - for functions with no return',
            'never - for functions that never return',
          ],
        },
        {
          title: 'Advanced Types',
          items: [
            'Union types: string | number',
            'Intersection types: Type1 & Type2',
            'Literal types: "success" | "error"',
            'Type aliases: type Name = string',
            'Generics: <T> for reusable types',
          ],
        },
        {
          title: 'Utility Types',
          items: [
            'Partial<T> - all properties optional',
            'Required<T> - all properties required',
            'Readonly<T> - all properties readonly',
            'Pick<T, K> - select specific properties',
            'Omit<T, K> - exclude specific properties',
            'Record<K, T> - object with specific keys',
          ],
        },
      ],
    },
    tags: ['typescript', 'types', 'generics', 'utility-types'],
  },

  // System Design
  {
    id: 'sd-basics',
    title: 'System Design Basics',
    category: 'system-design',
    type: 'guide',
    description: 'Fundamental concepts for system design interviews',
    readTime: 15,
    content: {
      sections: [
        {
          title: 'Scalability Patterns',
          items: [
            'Horizontal scaling - add more servers',
            'Vertical scaling - add more power',
            'Load balancing - distribute traffic',
            'Caching - reduce database load',
            'Database sharding - partition data',
          ],
        },
        {
          title: 'Common Components',
          items: [
            'Load balancers - distribute requests',
            'CDN - cache static content globally',
            'Message queues - async processing',
            'Cache layers - Redis, Memcached',
            'Database replicas - read scaling',
          ],
        },
        {
          title: 'Key Concepts',
          items: [
            'CAP theorem - Consistency, Availability, Partition tolerance',
            'ACID vs BASE',
            'SQL vs NoSQL trade-offs',
            'Microservices vs Monolith',
            'Stateless vs Stateful services',
          ],
        },
        {
          title: 'Interview Approach',
          items: [
            'Clarify requirements first',
            'Estimate scale (users, QPS, storage)',
            'Start with high-level design',
            'Dive into specific components',
            'Discuss trade-offs',
          ],
        },
      ],
    },
    tags: ['system-design', 'scalability', 'architecture'],
  },

  // Career
  {
    id: 'career-resume',
    title: 'Tech Resume Best Practices',
    category: 'career',
    type: 'article',
    description: 'How to write a resume that gets interviews',
    readTime: 10,
    content: {
      sections: [
        {
          title: 'Resume Structure',
          items: [
            'Keep it to 1-2 pages maximum',
            'Contact info at the top',
            'Clear section headers',
            'Reverse chronological order',
            'Consistent formatting throughout',
          ],
        },
        {
          title: 'Experience Section',
          items: [
            'Use action verbs (Built, Implemented, Designed)',
            'Quantify impact with numbers',
            'Focus on achievements, not responsibilities',
            'Include relevant technologies used',
            'STAR format for complex projects',
          ],
        },
        {
          title: 'Technical Skills',
          items: [
            'Group by category (Languages, Frameworks, Tools)',
            'List proficiency levels honestly',
            'Include years of experience',
            'Highlight most relevant skills first',
            'Remove outdated technologies',
          ],
        },
        {
          title: 'Common Mistakes',
          items: [
            'Generic job descriptions',
            'No metrics or impact',
            'Too much irrelevant information',
            'Typos and grammatical errors',
            'Unprofessional email address',
          ],
        },
      ],
    },
    tags: ['resume', 'career', 'job-search'],
  },

  // Algorithms
  {
    id: 'algo-patterns',
    title: 'Common Algorithm Patterns',
    category: 'algorithms',
    type: 'cheatsheet',
    description: 'Essential patterns for coding interviews',
    readTime: 12,
    content: {
      sections: [
        {
          title: 'Two Pointers',
          items: [
            'Use for array/string problems',
            'Start/end pointers moving towards each other',
            'Fast/slow pointers for cycle detection',
            'Common in sorted array problems',
            'Examples: Pair sum, Remove duplicates',
          ],
        },
        {
          title: 'Sliding Window',
          items: [
            'For contiguous subarray/substring problems',
            'Maintain window with start and end',
            'Expand or shrink based on condition',
            'Often O(n) time complexity',
            'Examples: Max sum subarray, Longest substring',
          ],
        },
        {
          title: 'Binary Search',
          items: [
            'Works on sorted data',
            'O(log n) time complexity',
            'Three variants: find exact, first, last',
            'Watch for integer overflow in mid calculation',
            'Can be applied to answer space',
          ],
        },
        {
          title: 'DFS & BFS',
          items: [
            'DFS: Use recursion or stack',
            'BFS: Use queue (FIFO)',
            'DFS for paths, BFS for shortest path',
            'Tree/graph traversal',
            'Examples: Islands, Level order',
          ],
        },
        {
          title: 'Dynamic Programming',
          items: [
            'Break problem into overlapping subproblems',
            'Memoization (top-down)',
            'Tabulation (bottom-up)',
            'Identify state and recurrence relation',
            'Examples: Fibonacci, Knapsack, LCS',
          ],
        },
      ],
    },
    tags: ['algorithms', 'patterns', 'coding-interview'],
  },

  // Web Fundamentals
  {
    id: 'web-http',
    title: 'HTTP Protocol Deep Dive',
    category: 'web-fundamentals',
    type: 'guide',
    description: 'Understanding HTTP methods, headers, and status codes',
    readTime: 8,
    content: {
      sections: [
        {
          title: 'HTTP Methods',
          items: [
            'GET - retrieve data (idempotent)',
            'POST - create new resource',
            'PUT - update/replace entire resource',
            'PATCH - partial update',
            'DELETE - remove resource',
            'HEAD - like GET but only headers',
            'OPTIONS - check allowed methods',
          ],
        },
        {
          title: 'Status Codes',
          items: [
            '2xx - Success (200 OK, 201 Created)',
            '3xx - Redirect (301 Permanent, 302 Temporary)',
            '4xx - Client Error (400 Bad Request, 404 Not Found)',
            '5xx - Server Error (500 Internal, 503 Unavailable)',
          ],
        },
        {
          title: 'Common Headers',
          items: [
            'Content-Type - format of body',
            'Authorization - credentials',
            'Cache-Control - caching directives',
            'CORS headers - cross-origin requests',
            'Cookie/Set-Cookie - session management',
          ],
        },
        {
          title: 'HTTPS & Security',
          items: [
            'TLS/SSL encryption',
            'Certificate verification',
            'HSTS - force HTTPS',
            'Always use HTTPS in production',
          ],
        },
      ],
    },
    tags: ['http', 'web', 'api', 'rest'],
  },
];
