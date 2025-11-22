import { QuizQuestion } from '../types/quiz';

// Additional questions to fill curriculum gaps
export const additionalQuestions: QuizQuestion[] = [
  // FUNCTIONS & SCOPE (15 questions)
  {
    id: 'js-add-001',
    question: "What's the output?\n\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('World'));\n```",
    category: 'javascript',
    difficulty: 'easy',
    options: [
      "Hello, World!",
      "Hello, ${name}!",
      "undefined",
      "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "Template literals (enclosed by backticks) allow embedded expressions using ${expression} syntax. The function parameter 'name' is replaced with 'World', resulting in 'Hello, World!'.",
    tags: ['functions', 'template-literals', 'parameters'],
  },

  {
    id: 'js-add-002',
    question: "What's the difference between function declarations and function expressions?",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "Function declarations are hoisted, expressions are not",
      "Function expressions are hoisted, declarations are not",
      "There is no difference",
      "Expressions cannot be named"
    ],
    correctAnswer: 0,
    explanation: "Function declarations are hoisted to the top of their scope, meaning they can be called before they appear in the code. Function expressions (const fn = function() {}) are not hoisted and must be defined before use.",
    tags: ['functions', 'hoisting', 'declarations'],
  },

  {
    id: 'js-add-003',
    question: "What's the output?\n\n```javascript\nconst multiply = (a, b = 2) => a * b;\n\nconsole.log(multiply(5));\nconsole.log(multiply(5, 3));\n```",
    category: 'javascript',
    difficulty: 'easy',
    options: [
      "10 and 15",
      "NaN and 15",
      "5 and 8",
      "undefined and 15"
    ],
    correctAnswer: 0,
    explanation: "Default parameters allow function parameters to have default values if no value or undefined is passed. multiply(5) uses the default b=2, giving 10. multiply(5, 3) uses the passed value 3, giving 15.",
    tags: ['functions', 'default-parameters', 'arrow-functions'],
  },

  {
    id: 'js-add-004',
    question: "What's the output?\n\n```javascript\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = outer();\nconsole.log(counter());\nconsole.log(counter());\n```",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "1 and 2",
      "0 and 0",
      "1 and 1",
      "undefined and undefined"
    ],
    correctAnswer: 0,
    explanation: "This demonstrates closure. The inner function retains access to the outer function's variables even after outer() has returned. Each call to counter() increments and returns the same 'count' variable, resulting in 1, then 2.",
    tags: ['functions', 'closures', 'scope'],
  },

  {
    id: 'js-add-005',
    question: "What's the output?\n\n```javascript\nfunction sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4));\n```",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "10",
      "1234",
      "[1, 2, 3, 4]",
      "undefined"
    ],
    correctAnswer: 0,
    explanation: "The rest parameter (...numbers) collects all arguments into an array. reduce() then sums all elements: 0+1+2+3+4 = 10. The rest parameter must be the last parameter in a function.",
    tags: ['functions', 'rest-parameters', 'reduce'],
  },

  {
    id: 'js-add-006',
    question: "What's the output?\n\n```javascript\nconst fn = function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n};\n\nconsole.log(fn(5));\n```",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "120",
      "5",
      "ReferenceError",
      "undefined"
    ],
    correctAnswer: 0,
    explanation: "Named function expressions can reference themselves by name for recursion. factorial(5) = 5 * 4 * 3 * 2 * 1 = 120. The name 'factorial' is only available inside the function, not outside.",
    tags: ['functions', 'recursion', 'function-expressions'],
  },

  {
    id: 'js-add-007',
    question: "What's the output?\n\n```javascript\nlet x = 10;\n\nfunction test() {\n  console.log(x);\n  let x = 20;\n}\n\ntest();\n```",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "ReferenceError",
      "10",
      "20",
      "undefined"
    ],
    correctAnswer: 0,
    explanation: "This demonstrates the temporal dead zone (TDZ). The 'let x = 20' inside the function creates a block-scoped variable that shadows the outer x. Accessing x before its declaration in the block throws a ReferenceError.",
    tags: ['functions', 'scope', 'tdz', 'let'],
  },

  {
    id: 'js-add-008',
    question: "What's the output?\n\n```javascript\nconst person = {\n  name: 'John',\n  greet: function() {\n    return () => console.log(this.name);\n  }\n};\n\nconst greetFn = person.greet();\ngreetFn();\n```",
    category: 'javascript',
    difficulty: 'hard',
    options: [
      "John",
      "undefined",
      "TypeError",
      "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "Arrow functions don't have their own 'this' - they inherit it from the parent scope. The arrow function is created inside greet() where 'this' refers to 'person', so this.name is 'John' even when called later.",
    tags: ['functions', 'arrow-functions', 'this', 'lexical-scope'],
  },

  {
    id: 'js-add-009',
    question: "What's the output?\n\n```javascript\nfunction createFunctions() {\n  const funcs = [];\n  for (var i = 0; i < 3; i++) {\n    funcs.push(() => i);\n  }\n  return funcs;\n}\n\nconst fns = createFunctions();\nconsole.log(fns[0]());\nconsole.log(fns[1]());\n```",
    category: 'javascript',
    difficulty: 'hard',
    options: [
      "3 and 3",
      "0 and 1",
      "undefined and undefined",
      "0 and 0"
    ],
    correctAnswer: 0,
    explanation: "All arrow functions share the same 'i' variable due to 'var' having function scope. By the time any function runs, the loop has finished and i equals 3. Using 'let' instead of 'var' would create a new 'i' for each iteration.",
    tags: ['functions', 'closures', 'var', 'scope'],
  },

  {
    id: 'js-add-010',
    question: "What's the output?\n\n```javascript\nfunction add(a) {\n  return function(b) {\n    return a + b;\n  };\n}\n\nconsole.log(add(2)(3));\n```",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "5",
      "23",
      "undefined",
      "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "This is currying - transforming a function that takes multiple arguments into a sequence of functions each taking a single argument. add(2) returns a function that adds 2 to its argument, so add(2)(3) = 2 + 3 = 5.",
    tags: ['functions', 'currying', 'closures', 'higher-order'],
  },

  {
    id: 'js-add-011',
    question: "What is the purpose of the 'use strict' directive?",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "Enables strict mode, catching common coding errors",
      "Makes code run faster",
      "Enables ES6 features",
      "Disables all warnings"
    ],
    correctAnswer: 0,
    explanation: "'use strict' enables strict mode which catches common mistakes (like using undeclared variables), prevents certain actions, and throws more exceptions. It helps write more secure and optimized code.",
    tags: ['functions', 'strict-mode', 'best-practices'],
  },

  {
    id: 'js-add-012',
    question: "What's the output?\n\n```javascript\nfunction test() {\n  console.log(arguments[0]);\n  console.log(arguments.length);\n}\n\ntest('a', 'b', 'c');\n```",
    category: 'javascript',
    difficulty: 'easy',
    options: [
      "a and 3",
      "a and 1",
      "undefined and 0",
      "TypeError"
    ],
    correctAnswer: 0,
    explanation: "The 'arguments' object is an array-like object available in all non-arrow functions. It contains all arguments passed to the function. arguments[0] is 'a' and arguments.length is 3.",
    tags: ['functions', 'arguments', 'parameters'],
  },

  {
    id: 'js-add-013',
    question: "What's the output?\n\n```javascript\nconst double = n => n * 2;\nconst square = n => n * n;\nconst compose = (f, g) => x => f(g(x));\n\nconst doubleThenSquare = compose(square, double);\nconsole.log(doubleThenSquare(3));\n```",
    category: 'javascript',
    difficulty: 'hard',
    options: [
      "36",
      "18",
      "12",
      "9"
    ],
    correctAnswer: 0,
    explanation: "Function composition applies functions from right to left. doubleThenSquare(3) first doubles 3 (= 6), then squares the result (6 * 6 = 36). Compose is a higher-order function that returns a new function.",
    tags: ['functions', 'composition', 'higher-order', 'functional-programming'],
  },

  {
    id: 'js-add-014',
    question: "What's the output?\n\n```javascript\nfunction* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst gen = generator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n```",
    category: 'javascript',
    difficulty: 'hard',
    options: [
      "1 and 2",
      "1 and 1",
      "undefined and undefined",
      "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "Generator functions (function*) can pause execution with 'yield'. Each call to next() resumes execution until the next yield, returning an object with value and done properties. First next() returns 1, second returns 2.",
    tags: ['functions', 'generators', 'iterators', 'yield'],
  },

  {
    id: 'js-add-015',
    question: "What's the output?\n\n```javascript\nconst obj = {\n  value: 42,\n  getValue: function() {\n    return this.value;\n  }\n};\n\nconst getValue = obj.getValue;\nconsole.log(getValue());\n```",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "undefined",
      "42",
      "ReferenceError",
      "TypeError"
    ],
    correctAnswer: 0,
    explanation: "When a method is extracted from an object and called independently, it loses its context. 'this' no longer refers to 'obj' but to the global object (or undefined in strict mode), so this.value is undefined. Use bind(), arrow functions, or call the method on the object to preserve context.",
    tags: ['functions', 'this', 'context', 'methods'],
  },

  // ARRAYS (5 questions)
  {
    id: 'js-add-016',
    question: "What's the output?\n\n```javascript\nconst arr = [1, 2, 3];\narr[10] = 99;\n\nconsole.log(arr.length);\nconsole.log(arr[5]);\n```",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "11 and undefined",
      "10 and undefined",
      "4 and undefined",
      "11 and null"
    ],
    correctAnswer: 0,
    explanation: "Setting arr[10] = 99 creates empty slots from index 3 to 9. The array length becomes 11 (highest index + 1). Accessing empty slots like arr[5] returns undefined, not the value they don't have.",
    tags: ['arrays', 'length', 'sparse-arrays'],
  },

  {
    id: 'js-add-017',
    question: "What's the output?\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.filter(n => n > 2).map(n => n * 2);\n\nconsole.log(result);\n```",
    category: 'javascript',
    difficulty: 'easy',
    options: [
      "[6, 8, 10]",
      "[2, 4, 6, 8, 10]",
      "[3, 4, 5]",
      "[false, false, true, true, true]"
    ],
    correctAnswer: 0,
    explanation: "Method chaining: filter(n => n > 2) creates [3, 4, 5], then map(n => n * 2) doubles each value to create [6, 8, 10]. Filter creates a new array with elements that pass the test, map creates a new array with transformed elements.",
    tags: ['arrays', 'filter', 'map', 'chaining'],
  },

  {
    id: 'js-add-018',
    question: "What's the output?\n\n```javascript\nconst arr1 = [1, 2, 3];\nconst arr2 = arr1;\narr2.push(4);\n\nconsole.log(arr1.length);\n```",
    category: 'javascript',
    difficulty: 'easy',
    options: [
      "4",
      "3",
      "undefined",
      "TypeError"
    ],
    correctAnswer: 0,
    explanation: "Arrays are reference types. arr2 = arr1 doesn't copy the array, both variables point to the same array in memory. Modifying arr2 also modifies arr1. To create a copy, use [...arr1] or arr1.slice().",
    tags: ['arrays', 'reference', 'mutation'],
  },

  {
    id: 'js-add-019',
    question: "What's the output?\n\n```javascript\nconst arr = [1, [2, [3, [4]]]];\nconst flat = arr.flat(2);\n\nconsole.log(flat);\n```",
    category: 'javascript',
    difficulty: 'medium',
    options: [
      "[1, 2, 3, [4]]",
      "[1, 2, 3, 4]",
      "[1, [2, [3, [4]]]]",
      "[1, 2, [3, [4]]]"
    ],
    correctAnswer: 0,
    explanation: "flat(depth) flattens nested arrays up to the specified depth. flat(2) flattens 2 levels: [1, [2, [3, [4]]]] becomes [1, 2, [3, [4]]], then [1, 2, 3, [4]]. Use flat(Infinity) to flatten all levels.",
    tags: ['arrays', 'flat', 'nested-arrays'],
  },

  {
    id: 'js-add-020',
    question: "What's the output?\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconst found = arr.find(n => n > 2);\nconst foundIndex = arr.findIndex(n => n > 2);\n\nconsole.log(found, foundIndex);\n```",
    category: 'javascript',
    difficulty: 'easy',
    options: [
      "3 and 2",
      "3 and 3",
      "[3, 4, 5] and 2",
      "true and 2"
    ],
    correctAnswer: 0,
    explanation: "find() returns the first element that satisfies the condition (3). findIndex() returns the index of that element (2). Both stop searching after finding the first match. If no match is found, find() returns undefined and findIndex() returns -1.",
    tags: ['arrays', 'find', 'findIndex', 'search'],
  },
];
