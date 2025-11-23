import { QuizQuestion } from '../../types/quiz';

export const thisQuizzes: QuizQuestion[] = [
{
    id: 'js-054',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = { name: \"Lydia\" };\n\nfunction sayHi(age) {\n  return `${this.name} is ${age}`;\n}\n\nconsole.log(sayHi.call(person, 21));\nconsole.log(sayHi.bind(person, 21));\n```",
    category: 'javascript',
    subcategory: 'this',
    difficulty: 'medium',
    options: [
          "undefined is 21 Lydia is 21",
          "function function",
          "Lydia is 21 Lydia is 21",
          "Lydia is 21 function"
    ],
    correctAnswer: 3,
    explanation: "With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!\n\n`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-059',
    question: "📝 What's the output?\n\n```javascript\nconst obj = {\n  value: 42,\n  getValue: function() {\n    return this.value;\n  }\n};\n\nconst getValue = obj.getValue;\nconsole.log(getValue());\n```",
    category: 'javascript',
    subcategory: 'this',
    difficulty: 'medium',
    options: [
          "undefined",
          "42",
          "ReferenceError",
          "TypeError"
    ],
    correctAnswer: 0,
    explanation: "When a method is extracted from an object and called independently, it loses its context. 'this' no longer refers to 'obj' but to the global object (or undefined in strict mode), so this.value is undefined. Use bind(), arrow functions, or call the method on the object to preserve context.",
    tags: ["functions","this","context","methods"],
  },

{
    id: 'js-088',
    question: "📝 What will happen?\n\n```javascript\nlet config = {\n  alert: setInterval(() => {\n    console.log(\"Alert!\");\n  }, 1000),\n};\n\nconfig = null;\n```",
    category: 'javascript',
    subcategory: 'this',
    difficulty: 'medium',
    options: [
          "The setInterval callback won't be invoked",
          "The setInterval callback gets invoked once",
          "The setInterval callback will still be called every second",
          "We never invoked config.alert(), config is null"
    ],
    correctAnswer: 2,
    explanation: "Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object.\nAs long as there is a reference, the object won't get garbage collected.\nSince this is an interval, setting `config` to `null` or `delete`-ing `config.alert` won't garbage-collect the interval, so the interval will still be called.\nIt should be cleared with `clearInterval(config.alert)` to remove it from memory.\nSince it was not cleared, the `setInterval` callback function will still get invoked every 1000ms (1s).",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-094',
    question: "🖥️ What's the output?\n\n```javascript\nconst animals = {};\nlet dog = { emoji: \"🐶\" };\nlet cat = { emoji: \"🐈\" };\n\nanimals[dog] = { ...dog, name: \"Mara\" };\nanimals[cat] = { ...cat, name: \"Sara\" };\n\nconsole.log(animals[dog]);\n```",
    category: 'javascript',
    subcategory: 'this',
    difficulty: 'medium',
    options: [
          "{ emoji: \"🐶\", name: \"Mara\" }",
          "{ emoji: \"🐈\", name: \"Sara\" }",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "Object keys are converted to strings.\n\nSince the value of `dog` is an object, `animals[dog]` actually means that we’re creating a new property called `\"[object Object]\"` equal to the new object. `animals[\"[object Object]\"]` is now equal to `{ emoji: \"🐶\", name: \"Mara\"}`.\n\n`cat` is also an object, which means that `animals[cat]` actually means that we’re overwriting the value of `animals[\"[object Object]\"]` with the new cat properties.\n\nLogging `animals[dog]`, or actually `animals[\"[object Object]\"]` since converting the `dog` object to a string results `\"[object Object]\"`, returns the `{ emoji: \"🐈\", name: \"Sara\" }`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-126',
    question: "📝 What's the output?\n\n```javascript\n[1, 2, 3, 4].reduce((x, y) => console.log(x, y));\n```",
    category: 'javascript',
    subcategory: 'this',
    difficulty: 'medium',
    options: [
          "1 2 and 3 3 and 6 4",
          "1 2 and 2 3 and 3 4",
          "1 undefined and 2 undefined and 3 undefined and 4 undefined",
          "1 2 and undefined 3 and undefined 4"
    ],
    correctAnswer: 3,
    explanation: "The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.\n\nIn this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.\n\nThe value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.\n\nOn the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator, and the current values: `1` and `2` get logged.\n\nIf you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged.\n\nOn the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-206',
    question: "📝 What's the output?\n\n```javascript\nfunction Person(name) {\n  this.name = name;\n  this.sayHi = function() {\n    setTimeout(function() {\n      console.log(this.name);\n    }, 100);\n  };\n}\n\nconst person = new Person('John');\nperson.sayHi();\n```",
    category: 'javascript',
    subcategory: 'this',
    difficulty: 'hard',
    options: [
      "'John'",
      "undefined",
      "Error",
      "null",
    ],
    correctAnswer: 1,
    explanation: "The function inside `setTimeout` is not an arrow function, so it has its own `this` context. When called by setTimeout, `this` refers to the global object (or undefined in strict mode), not the Person instance. To fix this, use an arrow function or `.bind(this)`.",
    tags: ['javascript', 'quiz'],
  }
];
