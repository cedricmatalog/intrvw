import { QuizQuestion } from '../../types/quiz';

export const closuresQuizzes: QuizQuestion[] = [
{
    id: 'js-004',
    question: "🖥️ What's the output?\n\n```javascript\nconst groceries = [\"banana\", \"apple\", \"peanuts\"];\n\nif (groceries.indexOf(\"banana\")) {\n  console.log(\"We have to buy bananas!\");\n} else {\n  console.log(`We don't have to buy bananas!`);\n}\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "We have to buy bananas!",
          "We don't have to buy bananas",
          "undefined",
          "1"
    ],
    correctAnswer: 1,
    explanation: "We passed the condition `groceries.indexOf(\"banana\")` to the if-statement. `groceries.indexOf(\"banana\")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don't have to buy bananas!` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-062',
    question: "🔤 How long is cool_secret accessible?\n\n```javascript\nsessionStorage.setItem(\"cool_secret\", 123);\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "Forever, the data doesn't get lost.",
          "When the user closes the tab.",
          "When the user closes the entire browser, not only the tab.",
          "When the user shuts off their computer."
    ],
    correctAnswer: 1,
    explanation: "The data stored in `sessionStorage` is removed after closing the _tab_.\n\nIf you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-063',
    question: "🔒 What is the event.target when clicking the button?",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "Outer div",
          "Inner div",
          "button",
          "An array of all nested elements."
    ],
    correctAnswer: 2,
    explanation: "The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-074',
    question: "🖥️ What's the output?\n\n```javascript\nfunction getAge() {\n  \"use strict\";\n  age = 21;\n  console.log(age);\n}\n\ngetAge();\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "21",
          "undefined",
          "ReferenceError",
          "TypeError"
    ],
    correctAnswer: 2,
    explanation: "With `\"use strict\"`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `\"use strict\"`, it will throw a reference error. If we didn't use `\"use strict\"`, it would have worked, since the property `age` would have gotten added to the global object.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-075',
    question: "🖥️ What's the output?\n\n```javascript\nconst obj = { a: \"one\", b: \"two\", a: \"three\" };\nconsole.log(obj);\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "{ a: \"one\", b: \"two\" }",
          "{ b: \"two\", a: \"three\" }",
          "{ a: \"three\", b: \"two\" }",
          "SyntaxError"
    ],
    correctAnswer: 2,
    explanation: "If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-087',
    question: "✅ What's its value?\n\n```javascript\nconst colorConfig = {\n  red: true,\n  blue: false,\n  green: true,\n  black: true,\n  yellow: false,\n};\n\nconst colors = [\"pink\", \"red\", \"blue\"];\n\nconsole.log(colorConfig.colors[1]);\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "true",
          "false",
          "undefined",
          "TypeError"
    ],
    correctAnswer: 3,
    explanation: "In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig[\"colors\"]`).\n\nWith dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-189',
    question: "📝 What's the output?\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter1 = createCounter();\nconst counter2 = createCounter();\n\nconsole.log(counter1());\nconsole.log(counter1());\nconsole.log(counter2());\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
      '1 2 3',
      '1 2 1',
      '1 1 1',
      '0 1 0',
    ],
    correctAnswer: 1,
    explanation: "Each call to `createCounter()` creates a new closure with its own `count` variable. `counter1` has its own `count` that increments: 1, then 2. `counter2` has a separate `count` that starts at 0, so it returns 1. Closures maintain independent state.",
    tags: ['javascript', 'quiz'],
  }
];
