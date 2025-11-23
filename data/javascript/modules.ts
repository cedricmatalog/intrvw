import { QuizQuestion } from '../../types/quiz';

export const modulesQuizzes: QuizQuestion[] = [
{
    id: 'js-023',
    question: "📝 What's the output?\n\n```javascript\n// index.js\nconsole.log(\"running index.js\");\nimport { sum } from \"./sum.js\";\nconsole.log(sum(1, 2));\n\n// sum.js\nconsole.log(\"running sum.js\");\nexport const sum = (a, b) => a + b;\n```",
    category: 'javascript',
    subcategory: 'modules',
    difficulty: 'medium',
    options: [
          "running index.js, running sum.js, 3",
          "running sum.js, running index.js, 3",
          "running sum.js, 3, running index.js",
          "running index.js, undefined, running sum.js"
    ],
    correctAnswer: 1,
    explanation: "With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, and the code in the file that imports the module gets executed _after_.\n\nThis is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we had used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-035',
    question: "⚡ How can we invoke `sum` in `sum.js` from `index.js?`?\n\n```javascript\n// sum.js\nexport default function sum(x) {\n  return x + x;\n}\n\n// index.js\nimport * as sum from \"./sum\";\n```",
    category: 'javascript',
    subcategory: 'modules',
    difficulty: 'medium',
    options: [
          "sum(4)",
          "sum.sum(4)",
          "sum.default(4)",
          "Default aren't imported with *, only named exports"
    ],
    correctAnswer: 2,
    explanation: "With the asterisk `*`, we import all exported values from that file, both default and named. If we had the following file:\n\n```javascript\n// info.js\nexport const name = \"Lydia\";\nexport const age = 21;\nexport default \"I love JavaScript\";\n\n// index.js\nimport * as info from \"./info\";\nconsole.log(info);\n```\n\nThe following would get logged:\n\n```javascript\n{\n  default: \"I love JavaScript\",\n  name: \"Lydia\",\n  age: 21\n}\n```\n\nFor the `sum` example, it means that the imported value `sum` looks like this:\n\n```javascript\n{ default: function sum(x) { return x + x } }\n```\n\nWe can invoke this function, by calling `sum.default`",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-065',
    question: "🖥️ What's the output?\n\n```javascript\n// counter.js\nlet counter = 10;\nexport default counter;\n```",
    category: 'javascript',
    subcategory: 'modules',
    difficulty: 'medium',
    options: [
          "10",
          "11",
          "Error",
          "NaN"
    ],
    correctAnswer: 2,
    explanation: "An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.\n\nWhen we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-085',
    question: "🖥️ What's the output?\n\n```javascript\n// module.js\nexport default () => \"Hello world\";\nexport const name = \"Lydia\";\n\n// index.js\nimport * as data from \"./module\";\n\nconsole.log(data);\n```",
    category: 'javascript',
    subcategory: 'modules',
    difficulty: 'medium',
    options: [
          "{ default: function default(), name: \"Lydia\" }",
          "{ default: function default() }",
          "{ default: \"Hello world\", name: \"Lydia\" }",
          "Global object of module.js"
    ],
    correctAnswer: 0,
    explanation: "With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function that returns the string `\"Hello World\"`, and the named export is a variable called `name` which has the value of the string `\"Lydia\"`.\n\nThe `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-203',
    question: "🪞 What's the difference between these exports?\n\n```javascript\n// File 1\nexport default function() { }\n\n// File 2\nexport function myFunc() { }\n```",
    category: 'javascript',
    subcategory: 'modules',
    difficulty: 'easy',
    options: [
      "No difference",
      "Default export can have any name on import, named export must use the same name",
      "Default export is faster",
      "Named export can only be used once per file",
    ],
    correctAnswer: 1,
    explanation: "Default exports can be imported with any name: `import anything from './file1'`. Named exports must be imported with the same name or use aliasing: `import { myFunc } from './file2'` or `import { myFunc as other } from './file2'`. A file can have one default export but multiple named exports.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-204',
    question: "📝 What's the output?\n\n```javascript\n// math.js\nexport const PI = 3.14;\nexport function double(x) { return x * 2; }\n\n// main.js\nimport * as math from './math.js';\nconsole.log(math.PI);\nconsole.log(math.double(5));\n```",
    category: 'javascript',
    subcategory: 'modules',
    difficulty: 'easy',
    options: [
      "3.14 10",
      "undefined undefined",
      "Error",
      "3.14 undefined",
    ],
    correctAnswer: 0,
    explanation: "`import * as math` imports all named exports into a namespace object. `math.PI` accesses the exported constant (3.14), and `math.double(5)` calls the exported function (returns 10). This pattern is useful when you want to group all exports under a single namespace.",
    tags: ['javascript', 'quiz'],
  }
];
