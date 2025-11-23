import { QuizQuestion } from '../../types/quiz';

export const type_systemQuizzes: QuizQuestion[] = [
{
    id: 'js-001',
    question: "🖥️ What's the output?\n\n```javascript\nconsole.log(typeof typeof 1);\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "\"number\"",
          "\"string\"",
          "\"object\"",
          "\"undefined\""
    ],
    correctAnswer: 1,
    explanation: "`typeof 1` returns `\"number\"`.\n`typeof \"number\"` returns `\"string\"`",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-020',
    question: "🖥️ What's the output?\n\n```javascript\nlet randomValue = { name: \"Lydia\" };\nrandomValue = 23;\n\nif (!typeof randomValue === \"string\") {\n  console.log(\"It's not a string!\");\n} else {\n  console.log(\"Yay it's a string!\");\n}\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "It's not a string!",
          "Yay it's a string!",
          "TypeError",
          "undefined"
    ],
    correctAnswer: 1,
    explanation: "The condition within the `if` statement checks whether the value of `!typeof randomValue` is equal to `\"string\"`. The `!` operator converts the value to a boolean value. If the value is truthy, the returned value will be `false`, if the value is falsy, the returned value will be `true`. In this case, the returned value of `typeof randomValue` is the truthy value `\"number\"`, meaning that the value of `!typeof randomValue` is the boolean value `false`.\n\n`!typeof randomValue === \"string\"` always returns false, since we're actually checking `false === \"string\"`. Since the condition returned `false`, the code block of the `else` statement gets run, and `Yay it's a string!` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-028',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia\";\n\nconsole.log(name());\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "SyntaxError",
          "ReferenceError",
          "TypeError",
          "undefined"
    ],
    correctAnswer: 2,
    explanation: "The variable `name` holds the value of a string, which is not a function, and thus cannot be invoked.\n\nTypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!\n\nSyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`.\nReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-135',
    question: "🔢 Which of these values are falsy?\n\n```javascript\n0;\nnew Number(0);\n(\"\");\n(\" \");\nnew Boolean(false);\nundefined;\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "0, '', undefined",
          "0, new Number(0), '', new Boolean(false), undefined",
          "0, '', new Boolean(false), undefined",
          "All of them are falsy"
    ],
    correctAnswer: 0,
    explanation: "There are 8 falsy values:\n\n- `undefined`\n- `null`\n- `NaN`\n- `false`\n- `''` (empty string)\n- `0`\n- `-0`\n- `0n` (BigInt(0))\n\nFunction constructors, like `new Number` and `new Boolean` are truthy.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-164',
    question: "📤 Everything in JavaScript is either a...",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "primitive or object",
          "function or object",
          "trick question! only objects",
          "number or object"
    ],
    correctAnswer: 0,
    explanation: "JavaScript only has primitive types and objects.\n\nPrimitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.\n\nWhat differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behavior.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-002',
    question: "🖥️ What's the output?\n\n```javascript\n!!null;\n!!\"\";\n!!1;\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "false true false",
          "false false true",
          "false true true",
          "true true false"
    ],
    correctAnswer: 1,
    explanation: "`null` is falsy. `!null` returns `true`. `!true` returns `false`.\n\n`\"\"` is falsy. `!\"\"` returns `true`. `!true` returns `false`.\n\n`1` is truthy. `!1` returns `false`. `!false` returns `true`.",
    tags: ["javascript","quiz"],
  },
];
