import { QuizQuestion } from '../../types/quiz';

export const iteratorsQuizzes: QuizQuestion[] = [
{
    id: 'js-081',
    question: "📝 What's the output?\n\n```javascript\nconst set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);\n```",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'medium',
    options: [
          "[1, 1, 2, 3, 4]",
          "[1, 2, 3, 4]",
          "{1, 1, 2, 3, 4}",
          "{1, 2, 3, 4}"
    ],
    correctAnswer: 3,
    explanation: "The `Set` object is a collection of _unique_ values: a value can only occur once in a set.\n\nWe passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-193',
    question: "📝 What's the output?\n\n```javascript\nconst obj = {\n  [Symbol.iterator]() {\n    let count = 0;\n    return {\n      next() {\n        count++;\n        if (count <= 3) {\n          return { value: count, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n};\n\nconsole.log([...obj]);\n```",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'hard',
    options: [
      "[1, 2, 3]",
      "[0, 1, 2]",
      "Error",
      "[]",
    ],
    correctAnswer: 0,
    explanation: "By implementing `Symbol.iterator`, we make the object iterable. The spread operator `...` uses the iterator protocol, calling `next()` until `done` is true. The iterator returns values 1, 2, 3, resulting in the array `[1, 2, 3]`.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-194',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [10, 20, 30];\nconst iterator = arr[Symbol.iterator]();\n\nconsole.log(iterator.next().value);\nconsole.log(iterator.next().value);\nconsole.log(iterator.next());\n```",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'medium',
    options: [
      "10 20 {value: 30, done: false}",
      "10 20 {value: 30, done: true}",
      "10 20 30",
      "10 20 {value: undefined, done: true}",
    ],
    correctAnswer: 0,
    explanation: "Arrays have a built-in iterator. Calling `next()` returns an object with `value` and `done`. The first two calls return 10 and 20. The third call returns `{value: 30, done: false}` because there's still one value left. It's not done until we call next() again after the last element.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-195',
    question: "📦 What makes an object iterable in JavaScript?",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'medium',
    options: [
      "Having a length property",
      "Implementing the Symbol.iterator method",
      "Being an instance of Array",
      "Having numeric keys",
    ],
    correctAnswer: 1,
    explanation: "An object is iterable if it implements the `Symbol.iterator` method that returns an iterator object. The iterator must have a `next()` method that returns objects with `value` and `done` properties. Arrays, strings, Maps, and Sets are built-in iterables.",
    tags: ['javascript', 'quiz'],
  }
];
