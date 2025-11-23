import { QuizQuestion } from '../../types/quiz';

export const promisesQuizzes: QuizQuestion[] = [
{
    id: 'js-060',
    question: "👈 What are the three phases of event propagation?",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "Target > Capturing > Bubbling",
          "Bubbling > Target > Capturing",
          "Target > Bubbling > Capturing",
          "Capturing > Target > Bubbling"
    ],
    correctAnswer: 3,
    explanation: "During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-070',
    question: "⚡ What kind of information would get logged?\n\n```javascript\nfetch(\"https://www.website.com/api/user/1\")\n  .then((res) => res.json())\n  .then((res) => console.log(res));\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "The result of the fetch method.",
          "The result of the second invocation of the fetch method.",
          "The result of the callback in the previous .then().",
          "It would always be undefined."
    ],
    correctAnswer: 2,
    explanation: "The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-096',
    question: "⚡ What is the purpose of the 'use strict' directive?",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "Enables strict mode, catching common coding errors",
          "Makes code run faster",
          "Enables ES6 features",
          "Disables all warnings"
    ],
    correctAnswer: 0,
    explanation: "'use strict' enables strict mode which catches common mistakes (like using undeclared variables), prevents certain actions, and throws more exceptions. It helps write more secure and optimized code.",
    tags: ["functions","strict-mode","best-practices"],
  },

{
    id: 'js-134',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, [2, [3, [4]]]];\nconst flat = arr.flat(2);\n\nconsole.log(flat);\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "[1, 2, 3, [4]]",
          "[1, 2, 3, 4]",
          "[1, [2, [3, [4]]]]",
          "[1, 2, [3, [4]]]"
    ],
    correctAnswer: 0,
    explanation: "flat(depth) flattens nested arrays up to the specified depth. flat(2) flattens 2 levels: [1, [2, [3, [4]]]] becomes [1, 2, [3, [4]]], then [1, 2, 3, [4]]. Use flat(Infinity) to flatten all levels.",
    tags: ["arrays","flat","nested-arrays"],
  },

{
    id: 'js-153',
    question: "🤝 What does this return?\n\n```javascript\nconst firstPromise = new Promise((res, rej) => {\n  setTimeout(res, 500, \"one\");\n});\n\nconst secondPromise = new Promise((res, rej) => {\n  setTimeout(res, 100, \"two\");\n});\n\nPromise.race([firstPromise, secondPromise]).then((res) => console.log(res));\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "\"one\"",
          "\"two\"",
          "\"two\" \"one\"",
          "\"one\" \"two\""
    ],
    correctAnswer: 1,
    explanation: "When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-154',
    question: "🖥️ What's the output?\n\n```javascript\nasync function getData() {\n  return await Promise.resolve(\"I made it!\");\n}\n\nconst data = getData();\nconsole.log(data);\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "\"I made it!\"",
          "Promise {<resolved>: \"I made it!\"}",
          "Promise {<pending>}",
          "undefined"
    ],
    correctAnswer: 2,
    explanation: "An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.\n\nIf we wanted to get access to the resolved value `\"I made it\"`, we could have used the `.then()` method on `data`:\n\n`data.then(res => console.log(res))`\n\nThis would've logged `\"I made it!\"`",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-155',
    question: "🖥️ What's the value of output?\n\n```javascript\nconst myPromise = () => Promise.resolve(\"I have resolved!\");\n\nfunction firstFunction() {\n  myPromise().then((res) => console.log(res));\n  console.log(\"second\");\n}\n\nasync function secondFunction() {\n  console.log(await myPromise());\n  console.log(\"second\");\n}\n\nfirstFunction();\nsecondFunction();\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "I have resolved!, second and I have resolved!, second",
          "second, I have resolved! and second, I have resolved!",
          "I have resolved!, second and second, I have resolved!",
          "second, I have resolved! and I have resolved!, second"
    ],
    correctAnswer: 3,
    explanation: "With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._\n\nWe can get this value with both `.then` and the `await` keywords in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently.\n\nIn the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty.\n\nWith the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line.\n\nThis means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-156',
    question: "🤝 What's its value?\n\n```javascript\nPromise.resolve(5);\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "5",
          "Promise {<pending>: 5}",
          "Promise {<fulfilled>: 5}",
          "Error"
    ],
    correctAnswer: 2,
    explanation: "We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value (``). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.\n\nIn this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-157',
    question: "📝 What's the output?\n\n```javascript\nasync function* range(start, end) {\n  for (let i = start; i <= end; i++) {\n    yield Promise.resolve(i);\n  }\n}\n\n(async () => {\n  const gen = range(1, 3);\n  for await (const item of gen) {\n    console.log(item);\n  }\n})();\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "Promise {1} Promise {2} Promise {3}",
          "Promise {<pending>} Promise {<pending>} Promise {<pending>}",
          "1 2 3",
          "undefined undefined undefined"
    ],
    correctAnswer: 2,
    explanation: "The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promise, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-158',
    question: "🖥️ What's the output?\n\n```javascript\nconst myPromise = Promise.resolve(\"Woah some cool data\");\n\n(async () => {\n  try {\n    console.log(await myPromise);\n  } catch {\n    throw new Error(`Oops didn't work`);\n  } finally {\n    console.log(\"Oh finally!\");\n  }\n})();\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "Woah some cool data",
          "Oh finally!",
          "Woah some cool data Oh finally!",
          "Oops didn't work Oh finally!"
    ],
    correctAnswer: 2,
    explanation: "In the `try` block, we're logging the awaited value of the `myPromise` variable: `\"Woah some cool data\"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn't run. The code in the `finally` block _always_ runs, `\"Oh finally!\"` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-159',
    question: "🖥️ What's the output?\n\n```javascript\nconst myPromise = Promise.resolve(Promise.resolve(\"Promise\"));\n\nfunction funcOne() {\n  setTimeout(() => console.log(\"Timeout 1!\"), 0);\n  myPromise.then((res) => res).then((res) => console.log(`${res} 1!`));\n  console.log(\"Last line 1!\");\n}\n\nasync function funcTwo() {\n  const res = await myPromise;\n  console.log(`${res} 2!`);\n  setTimeout(() => console.log(\"Timeout 2!\"), 0);\n  console.log(\"Last line 2!\");\n}\n\nfuncOne();\nfuncTwo();\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!",
          "Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2!",
          "Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!",
          "Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!"
    ],
    correctAnswer: 2,
    explanation: "First, we invoke `funcOne`. On the first line of `funcOne`, we call the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop here.)\n\nThen we call the `myPromise` promise, which is an _asynchronous_ operation. Pay attention, that now only the first then clause was added to the microtask queue.\n\nBoth the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line 1!` gets logged first, since this is not an asynchonous operation.\n\nSince the callstack is not empty yet, the `setTimeout` function and promise in `funcOne` cannot get added to the callstack yet.\n\nIn `funcTwo`, the variable `res` gets `Promise` because `Promise.resolve(Promise.resolve('Promise'))` is equivalent to `Promise.resolve('Promise')` since resolving a promise just resolves it's value. The `await` in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so `Promise 2!` and then `Last line 2!` are logged and the `setTimeout` is sent to the Web API. If the first then clause in `funcOne` had its own log statement, it would be printed before `Promise 2!`. Howewer, it executed silently and put the second then clause in microtask queue. So, the second clause will be printed after `Promise 2!`.\n\nThen the call stack is empty. Promises are _microtasks_ so they are resolved first when the call stack is empty so `Promise 1!` gets to be logged.\n\nNow, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log(\"Timeout 1!\")` from `funcOne`, and `() => console.log(\"Timeout 2!\")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout 1!`, and gets popped off the stack. Then, the second callback logs `Timeout 2!`, and gets popped off the stack.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-160',
    question: "🖥️ What's the output?\n\n```javascript\nconst promise1 = Promise.resolve(\"First\");\nconst promise2 = Promise.resolve(\"Second\");\nconst promise3 = Promise.reject(\"Third\");\nconst promise4 = Promise.resolve(\"Fourth\");\n\nconst runPromises = async () => {\n  const res1 = await Promise.all([promise1, promise2]);\n  const res2 = await Promise.all([promise3, promise4]);\n  return [res1, res2];\n};\n\nrunPromises()\n  .then((res) => console.log(res))\n  .catch((err) => console.log(err));\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "[['First', 'Second'], ['Fourth']]",
          "[['First', 'Second'], ['Third', 'Fourth']]",
          "[['First', 'Second']]",
          "'Third'"
    ],
    correctAnswer: 3,
    explanation: "The `Promise.all` method runs the passed promises in parallel. If one promise fails, the `Promise.all` method _rejects_ with the value of the rejected promise. In this case, `promise3` is rejected with the value `\"Third\"`. We’re catching the rejected value in the chained `catch` method on the `runPromises` invocation to catch any errors within the `runPromises` function. Only `\"Third\"` gets logged, since `promise3` is rejected with this value.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-166',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n};\n\nfor (const item in person) {\n  console.log(item);\n}\n```",
    category: 'javascript',
    subcategory: 'promises',
    difficulty: 'medium',
    options: [
          "{ name: \"Lydia\" }, { age: 21 }",
          "\"name\", \"age\"",
          "\"Lydia\", 21",
          "[\"name\", \"Lydia\"], [\"age\", 21]"
    ],
    correctAnswer: 1,
    explanation: "With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.",
    tags: ["javascript","quiz"],
  }
];
