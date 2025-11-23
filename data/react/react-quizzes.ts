import { QuizQuestion } from '../../types/quiz';

export const reactQuizzes: QuizQuestion[] = [
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
];
