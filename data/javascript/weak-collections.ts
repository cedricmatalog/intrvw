import { QuizQuestion } from '../../types/quiz';

export const weak_collectionsQuizzes: QuizQuestion[] = [
{
    id: 'js-176',
    question: "🗺️ What's the difference between WeakMap and Map?\n\n```javascript\nconst map = new Map();\nconst weakMap = new WeakMap();\n\nlet obj = { name: 'John' };\nmap.set(obj, 'value1');\nweakMap.set(obj, 'value2');\n\nobj = null;\n```",
    category: 'javascript',
    subcategory: 'weak-collections',
    difficulty: 'hard',
    options: [
      'They are the same',
      'WeakMap keys must be objects and are garbage collected',
      'WeakMap can only store numbers',
      'Map is faster than WeakMap',
    ],
    correctAnswer: 1,
    explanation: "WeakMap keys must be objects (not primitives) and are weakly held. When the object used as a key is garbage collected, the WeakMap entry is automatically removed. This prevents memory leaks. Map holds strong references, so setting `obj = null` doesn't remove it from the Map.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-177',
    question: "📝 What's the output?\n\n```javascript\nconst ws = new WeakSet();\nconst obj1 = {};\nconst obj2 = {};\n\nws.add(obj1);\nws.add(obj2);\nws.add(obj1);\n\nconsole.log(ws.has(obj1));\nconsole.log(ws.size);\n```",
    category: 'javascript',
    subcategory: 'weak-collections',
    difficulty: 'hard',
    options: [
      'true and 2',
      'true and undefined',
      'false and 2',
      'true and 3',
    ],
    correctAnswer: 1,
    explanation: "WeakSet only accepts objects and doesn't have duplicates. `ws.has(obj1)` returns `true`. However, WeakSet doesn't have a `size` property because the objects are weakly referenced and can be garbage collected at any time, making the size unpredictable. Accessing `size` returns `undefined`.",
    tags: ['javascript', 'quiz'],
  },
];
