import { QuizQuestion } from '../../types/quiz';

export const array_operationsQuizzes: QuizQuestion[] = [
{
    id: 'js-106',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
          "[[1, 2, 3, 4, 5]]",
          "[1, 2, 3, 4, 5]",
          "1",
          "[1]"
    ],
    correctAnswer: 2,
    explanation: "We can unpack values from arrays or properties from objects through destructuring. For example:\n\n```javascript\n[a, b] = [1, 2];\n```\n\nThe value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:\n\n```javascript\n[y] = [1, 2, 3, 4, 5];\n```\n\nThis means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-108',
    question: "📝 What is the output?\n\n```javascript\nconst list = [1 + 2, 1 * 2, 1 / 2];\nconsole.log(list);\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
          "[\"1 + 2\", \"1 * 2\", \"1 / 2\"]",
          "[\"12\", 2, 0.5]",
          "[3, 2, 0.5]",
          "[1, 1, 1]"
    ],
    correctAnswer: 2,
    explanation: "Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.\n\nThe element will be equal to the returned value. `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-116',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
          "[1, 2, 3, null x 7, 11]",
          "[1, 2, 3, 11]",
          "[1, 2, 3, empty x 7, 11]",
          "SyntaxError"
    ],
    correctAnswer: 2,
    explanation: "When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called \"empty slots\". These actually have the value of `undefined`, but you will see something like:\n\n`[1, 2, 3, empty x 7, 11]`\n\ndepending on where you run it (it's different for every browser, node, etc.)",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-121',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3];\narr[10] = 99;\n\nconsole.log(arr.length);\nconsole.log(arr[5]);\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
          "11 and undefined",
          "10 and undefined",
          "4 and undefined",
          "11 and null"
    ],
    correctAnswer: 0,
    explanation: "Setting arr[10] = 99 creates empty slots from index 3 to 9. The array length becomes 11 (highest index + 1). Accessing empty slots like arr[5] returns undefined, not the value they don't have.",
    tags: ["arrays","length","sparse-arrays"],
  },

{
    id: 'js-180',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\n\nconsole.log(numbers.some(n => n > 3));\nconsole.log(numbers.every(n => n > 0));\nconsole.log(numbers.every(n => n > 3));\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'easy',
    options: [
      'true true true',
      'true true false',
      'false true false',
      'true false false',
    ],
    correctAnswer: 1,
    explanation: "`some()` returns true if at least one element passes the test (4 and 5 are > 3). `every()` returns true only if ALL elements pass the test. All numbers are > 0, so second returns true. But not all are > 3, so third returns false.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-181',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, [2, [3, [4]]]];\n\nconsole.log(arr.flat());\nconsole.log(arr.flat(2));\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
      '[1, 2, 3, 4] and [1, 2, 3, 4]',
      '[1, 2, [3, [4]]] and [1, 2, 3, [4]]',
      '[1, 2, 3, [4]] and [1, 2, 3, 4]',
      'Error',
    ],
    correctAnswer: 1,
    explanation: "`flat()` with no argument flattens 1 level deep by default, giving `[1, 2, [3, [4]]]`. `flat(2)` flattens 2 levels deep, giving `[1, 2, 3, [4]]`. To flatten all levels, use `flat(Infinity)`.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-184',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\n\nconsole.log(arr.includes(3));\nconsole.log(arr.includes(6));\nconsole.log(arr.includes(3, 3));\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'easy',
    options: [
      'true false true',
      'true false false',
      'true true false',
      'false false false',
    ],
    correctAnswer: 1,
    explanation: "`includes()` checks if an array contains a value. `arr.includes(3)` is true. `arr.includes(6)` is false. The second parameter is the starting index. `arr.includes(3, 3)` starts searching from index 3, so it doesn't find 3 (which is at index 2), returning false.",
    tags: ['javascript', 'quiz'],
  },
];
