import { QuizQuestion } from '../../types/quiz';

export const generatorsQuizzes: QuizQuestion[] = [
{
    id: 'js-165',
    question: "📝 What's the output?\n\n```javascript\nfunction* generator(i) {\n  yield i;\n  yield i * 2;\n}\n\nconst gen = generator(10);\n\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          "[0, 10], [10, 20]",
          "20, 20",
          "10, 20",
          "0, 10 and 10, 20"
    ],
    correctAnswer: 2,
    explanation: "Regular functions cannot be stopped mid-way after invocation. However, a generator function can be \"stopped\" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.\n\nFirst, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now \"paused\", and `10` gets logged.\n\nThen, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-168',
    question: "📝 How can we log the values that are commented out after the console.log statement?\n\n```javascript\nfunction* startGame() {\n  const answer = yield \"Do you love JavaScript?\";\n  if (answer !== \"Yes\") {\n    return \"Oh wow... Guess we're done here\";\n  }\n  return \"JavaScript loves you back ❤️\";\n}\n\nconst game = startGame();\nconsole.log(/* 1 */); // Do you love JavaScript?\nconsole.log(/* 2 */); // JavaScript loves you back ❤️\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          "game.next(\"Yes\").value and game.next().value",
          "game.next.value(\"Yes\") and game.next.value()",
          "game.next().value and game.next(\"Yes\").value",
          "game.next.value() and game.next.value(\"Yes\")"
    ],
    correctAnswer: 2,
    explanation: "A generator function \"pauses\" its execution when it sees the `yield` keyword. First, we have to let the function yield the string \"Do you love JavaScript?\", which can be done by calling `game.next().value`.\n\nEvery line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_\n\nWhen we call `game.next(\"Yes\").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `\"Yes\"` in this case. The value of the variable `answer` is now equal to `\"Yes\"`. The condition of the if-statement returns `false`, and `JavaScript loves you back ❤️` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-170',
    question: "🖥️ What's the output?\n\n```javascript\nfunction* generatorOne() {\n  yield [\"a\", \"b\", \"c\"];\n}\n\nfunction* generatorTwo() {\n  yield* [\"a\", \"b\", \"c\"];\n}\n\nconst one = generatorOne();\nconst two = generatorTwo();\n\nconsole.log(one.next().value);\nconsole.log(two.next().value);\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          "a and a",
          "a and undefined",
          "['a', 'b', 'c'] and a",
          "a and ['a', 'b', 'c']"
    ],
    correctAnswer: 2,
    explanation: "With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).\n\nIn `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.\n\n```javascript\nconsole.log(one.next().value); // ['a', 'b', 'c']\nconsole.log(one.next().value); // undefined\n```\n\nIn `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned.\n\n```javascript\nconsole.log(two.next().value); // 'a'\nconsole.log(two.next().value); // 'b'\nconsole.log(two.next().value); // 'c'\nconsole.log(two.next().value); // undefined\n```",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-172',
    question: "🪞 What's missing?\n\n```javascript\nconst teams = [\n  { name: \"Team 1\", members: [\"Paul\", \"Lisa\"] },\n  { name: \"Team 2\", members: [\"Laura\", \"Tim\"] },\n];\n\nfunction* getMembers(members) {\n  for (let i = 0; i < members.length; i++) {\n    yield members[i];\n  }\n}\n\nfunction* getTeams(teams) {\n  for (let i = 0; i < teams.length; i++) {\n    // ✨ SOMETHING IS MISSING HERE ✨\n  }\n}\n\nconst obj = getTeams(teams);\nobj.next(); // { value: \"Paul\", done: false }\nobj.next(); // { value: \"Lisa\", done: false }\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          "yield getMembers(teams[i].members)",
          "yield* getMembers(teams[i].members)",
          "return getMembers(teams[i].members)",
          "return yield getMembers(teams[i].members)"
    ],
    correctAnswer: 1,
    explanation: "In order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.\n\nIf we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-173',
    question: "📦 What do we need to add to the `person` object to get `[\"Lydia Hallie\", 21]` as the output of `[...person]`?\n\n```javascript\nconst person = {\n  name: \"Lydia Hallie\",\n  age: 21\n}\n\n[...person] // [\"Lydia Hallie\", 21]\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          "Nothing, object are iterable by default",
          "*[Symbol.iterator]() { for (let x in this) yield* this[x] }",
          "*[Symbol.iterator]() { yield* Object.values(this) }",
          "*[Symbol.iterator]() { for (let x in this) yield this }"
    ],
    correctAnswer: 2,
    explanation: "Objects aren't iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `[\"Lydia Hallie\", 21]`: `yield* Object.values(this)`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-175',
    question: "📝 What's the output?\n\n```javascript\nfunction* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst gen = generator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'hard',
    options: [
          "1 and 2",
          "1 and 1",
          "undefined and undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "Generator functions (function*) can pause execution with 'yield'. Each call to next() resumes execution until the next yield, returning an object with value and done properties. First next() returns 1, second returns 2.",
    tags: ["functions","generators","iterators","yield"],
  }
];
