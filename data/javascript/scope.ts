import { QuizQuestion } from '../../types/quiz';

export const scopeQuizzes: QuizQuestion[] = [
{
    id: 'js-012',
    question: "📝 What's the output?\n\n```javascript\n(() => {\n  let x = (y = 10);\n})();\n\nconsole.log(typeof x);\nconsole.log(typeof y);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "\"undefined\", \"number\"",
          "\"number\", \"number\"",
          "\"object\", \"number\"",
          "\"number\", \"undefined\""
    ],
    correctAnswer: 0,
    explanation: "`let x = (y = 10);` is actually shorthand for:\n\n```javascript\ny = 10;\nlet x = y;\n```\n\nWhen we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in the browser, `global` in Node). In a browser, `window.y` is now equal to `10`.\n\nThen, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they're declared in; the immediately invoked function expression (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it's declared in. This means that `x` is not defined. Values who haven't been assigned a value or declared are of type `\"undefined\"`. `console.log(typeof x)` returns `\"undefined\"`.\n\nHowever, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `\"number\"`. `console.log(typeof y)` returns `\"number\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-013',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia\";\nage = 21;\n\nconsole.log(delete name);\nconsole.log(delete age);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "false, true",
          "\"Lydia\", 21",
          "true, true",
          "undefined, undefined"
    ],
    correctAnswer: 0,
    explanation: "The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const`, or `let` keywords cannot be deleted using the `delete` operator.\n\nThe `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-022',
    question: "📝 What's the output?\n\n```javascript\nfunction createFunctions() {\n  const funcs = [];\n  for (var i = 0; i < 3; i++) {\n    funcs.push(() => i);\n  }\n  return funcs;\n}\n\nconst fns = createFunctions();\nconsole.log(fns[0]());\nconsole.log(fns[1]());\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'hard',
    options: [
          "3 and 3",
          "0 and 1",
          "undefined and undefined",
          "0 and 0"
    ],
    correctAnswer: 0,
    explanation: "All arrow functions share the same 'i' variable due to 'var' having function scope. By the time any function runs, the loop has finished and i equals 3. Using 'let' instead of 'var' would create a new 'i' for each iteration.",
    tags: ["functions","closures","var","scope"],
  },

{
    id: 'js-041',
    question: "📝 What's the output?\n\n```javascript\nvar num = 8;\nvar num = 10;\n\nconsole.log(num);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "8",
          "10",
          "SyntaxError",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.\n\nYou cannot do this with `let` or `const` since they're block-scoped and therefore can't be redeclared.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-044',
    question: "🖥️ What is the output?\n\n```javascript\nfunction checkAge(age) {\n  if (age < 18) {\n    const message = \"Sorry, you're too young.\";\n  } else {\n    const message = \"Yay! You're old enough!\";\n  }\n\n  return message;\n}\n\nconsole.log(checkAge(21));\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "\"Sorry, you're too young.\"",
          "\"Yay! You're old enough!\"",
          "ReferenceError",
          "undefined"
    ],
    correctAnswer: 2,
    explanation: "Variables with the `const` and `let` keywords are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-045',
    question: "🖥️ What's the output?\n\n```javascript\nlet name = \"Lydia\";\n\nfunction getName() {\n  console.log(name);\n  let name = \"Sarah\";\n}\n\ngetName();\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "Lydia",
          "Sarah",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 3,
    explanation: "Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.\n\nIf we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`.\n\n```javascript\nlet name = \"Lydia\";\n\nfunction getName() {\n  console.log(name);\n}\n\ngetName(); // Lydia\n```",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-048',
    question: "📝 What's the output?\n\n```javascript\nlet x = 10;\n\nfunction test() {\n  console.log(x);\n  let x = 20;\n}\n\ntest();\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "ReferenceError",
          "10",
          "20",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "This demonstrates the temporal dead zone (TDZ). The 'let x = 20' inside the function creates a block-scoped variable that shadows the outer x. Accessing x before its declaration in the block throws a ReferenceError.",
    tags: ["functions","scope","tdz","let"],
  },

{
    id: 'js-052',
    question: "📝 What's the output?\n\n```javascript\nlet greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "{}",
          "ReferenceError: greetign is not defined",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as:\n\n1. `global.greetign = {}` in Node.js\n2. `window.greetign = {}`, `frames.greetign = {}` and `self.greetign` in browsers.\n3. `self.greetign` in web workers.\n4. `globalThis.greetign` in all environments.\n\nIn order to avoid this, we can use `\"use strict\"`. This makes sure that you have declared a variable before setting it equal to anything.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-053',
    question: "🖥️ What's the output?\n\n```javascript\nfunction Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person(\"Lydia\", \"Hallie\");\nconst sarah = Person(\"Sarah\", \"Smith\");\n\nconsole.log(lydia);\nconsole.log(sarah);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and undefined",
          "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and Person {firstName: \"Sarah\", lastName: \"Smith\"}",
          "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and {}",
          "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "For `sarah`, we didn't use the `new` keyword. When using `new`, `this` refers to the new empty object we create. However, if you don't add `new`, `this` refers to the **global object**!\n\nWe said that `this.firstName` equals `\"Sarah\"` and `this.lastName` equals `\"Smith\"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-076',
    question: "📦 The JavaScript global execution context creates two things for you: the global object, and the \"this\" keyword.",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "true",
          "false",
          "it depends",
          "only in strict mode"
    ],
    correctAnswer: 0,
    explanation: "The base execution context is the global execution context: it's what's accessible everywhere in your code.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-151',
    question: "📝 What's the output?\n\n```javascript\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "0 1 2 and 0 1 2",
          "0 1 2 and 3 3 3",
          "3 3 3 and 0 1 2",
          "3 3 3 and 3 3 3"
    ],
    correctAnswer: 2,
    explanation: "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.",
    tags: ["javascript","quiz"],
  }
];
