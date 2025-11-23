import { QuizQuestion } from '../../types/quiz';

export const symbolsQuizzes: QuizQuestion[] = [
{
    id: 'js-167',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(Number(2) === Number(2));\nconsole.log(Boolean(false) === Boolean(false));\nconsole.log(Symbol(\"foo\") === Symbol(\"foo\"));\n```",
    category: 'javascript',
    subcategory: 'symbols',
    difficulty: 'medium',
    options: [
          "true, true, false",
          "false, true, false",
          "true, false, true",
          "true, true, true"
    ],
    correctAnswer: 0,
    explanation: "Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-169',
    question: "🖥️ What's the output?\n\n```javascript\nconst info = {\n  [Symbol(\"a\")]: \"b\",\n};\n\nconsole.log(info);\nconsole.log(Object.keys(info));\n```",
    category: 'javascript',
    subcategory: 'symbols',
    difficulty: 'medium',
    options: [
          "{Symbol('a'): 'b'} and [\"{Symbol('a')\"]",
          "{} and []",
          "{ a: \"b\" } and [\"a\"]",
          "{Symbol('a'): 'b'} and []"
    ],
    correctAnswer: 3,
    explanation: "A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.\n\nThis is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also \"hide\" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-199',
    question: "📝 What's the output?\n\n```javascript\nconst sym1 = Symbol('foo');\nconst sym2 = Symbol('foo');\n\nconsole.log(sym1 === sym2);\nconsole.log(Symbol.for('bar') === Symbol.for('bar'));\n```",
    category: 'javascript',
    subcategory: 'symbols',
    difficulty: 'medium',
    options: [
      "true true",
      "false true",
      "true false",
      "false false",
    ],
    correctAnswer: 1,
    explanation: "Each `Symbol()` call creates a unique symbol, even with the same description, so `sym1 !== sym2`. However, `Symbol.for()` creates/retrieves symbols from a global registry, so calling `Symbol.for('bar')` twice returns the same symbol.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-200',
    question: "📝 What's the output?\n\n```javascript\nconst id = Symbol('id');\nconst obj = {\n  [id]: 123,\n  name: 'John'\n};\n\nconsole.log(Object.keys(obj));\nconsole.log(obj[id]);\n```",
    category: 'javascript',
    subcategory: 'symbols',
    difficulty: 'medium',
    options: [
      "['Symbol(id)', 'name'] 123",
      "['name'] 123",
      "['id', 'name'] 123",
      "['name'] undefined",
    ],
    correctAnswer: 1,
    explanation: "Symbol properties are not enumerated by `Object.keys()`, `for...in`, or `JSON.stringify()`. Only 'name' appears in the keys. However, the symbol property still exists and can be accessed directly using `obj[id]`, which returns 123.",
    tags: ['javascript', 'quiz'],
  }
];
