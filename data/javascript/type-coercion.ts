import { QuizQuestion } from '../../types/quiz';

export const type_coercionQuizzes: QuizQuestion[] = [
{
    id: 'js-005',
    question: "🖥️ What's the output?\n\n```javascript\n+true;\n!\"Lydia\";\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "1 and false",
          "false and NaN",
          "false and false",
          "1 and true"
    ],
    correctAnswer: 0,
    explanation: "The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.\n\nThe string `'Lydia'` is a truthy value. What we're actually asking, is \"Is this truthy value falsy?\". This returns `false`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-011',
    question: "📝 What's the output?\n\n```javascript\nfor (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "1 2",
          "1 2 3",
          "1 2 4",
          "1 3 4"
    ],
    correctAnswer: 2,
    explanation: "The `continue` statement skips an iteration if a certain condition returns `true`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-016',
    question: "🖥️ What's the value of output?\n\n```javascript\n// 🎉✨ This is my 100th question! ✨🎉\n\nconst output = `${[] && \"Im\"}possible!\nYou should${\"\" && `n't`} see a therapist after so much JavaScript lol`;\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "possible! You should see a therapist after so much JavaScript lol",
          "Impossible! You should see a therapist after so much JavaScript lol",
          "possible! You shouldn't see a therapist after so much JavaScript lol",
          "Impossible! You shouldn't see a therapist after so much JavaScript lol"
    ],
    correctAnswer: 1,
    explanation: "`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `\"Im'` gets returned.\n\n`\"\"` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-017',
    question: "🖥️ What's the value of output?\n\n```javascript\nconst one = false || {} || null;\nconst two = null || false || \"\";\nconst three = [] || 0 || true;\n\nconsole.log(one, two, three);\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "false null []",
          "null \"\" true",
          "{} \"\" []",
          "null null true"
    ],
    correctAnswer: 2,
    explanation: "With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.\n\n`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.\n\n`(null || false || \"\")`: all operands are falsy values. This means that the last operand, `\"\"` gets returned. `two` is equal to `\"\"`.\n\n`([] || 0 || \"\")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-068',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia Hallie\";\nconst age = 21;\n\nconsole.log(Number.isNaN(name));\nconsole.log(Number.isNaN(age));\n\nconsole.log(isNaN(name));\nconsole.log(isNaN(age));\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "true false true false",
          "true false false false",
          "false false true false",
          "false true false true"
    ],
    correctAnswer: 2,
    explanation: "With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.\n\nWith the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-073',
    question: "📝 What's the output?\n\n```javascript\nfunction checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log(\"You are an adult!\");\n  } else if (data == { age: 18 }) {\n    console.log(\"You are still an adult.\");\n  } else {\n    console.log(`Hmm.. You don't have an age I guess`);\n  }\n}\n\ncheckAge({ age: 18 });\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "You are an adult!",
          "You are still an adult.",
          "Hmm.. You don't have an age I guess",
          "TypeError"
    ],
    correctAnswer: 2,
    explanation: "When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.\n\nThe two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.\n\nThis is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-086',
    question: "📝 What's its value?\n\n```javascript\nfunction compareMembers(person1, person2 = person) {\n  if (person1 !== person2) {\n    console.log(\"Not the same!\");\n  } else {\n    console.log(\"They are the same!\");\n  }\n}\n\nconst person = { name: \"Lydia\" };\n\ncompareMembers(person);\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "Not the same!",
          "They are the same!",
          "ReferenceError",
          "SyntaxError"
    ],
    correctAnswer: 1,
    explanation: "Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references.\n\nWe set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.\n\nThis means that both values have a reference to the same spot in memory, thus they are equal.\n\nThe code block in the `else` statement gets run, and `They are the same!` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-125',
    question: "🖥️ What's the output?\n\n```javascript\n[1, 2, 3].map((num) => {\n  if (typeof num === \"number\") return;\n  return num * 2;\n});\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "[]",
          "[null, null, null]",
          "[undefined, undefined, undefined]",
          "[ 3 x empty ]"
    ],
    correctAnswer: 2,
    explanation: "When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === \"number\"` returns `true`. The map function creates a new array and inserts the values returned from the function.\n\nHowever, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-136',
    question: "📝 What's the output?\n\n```javascript\nlet a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "true false true",
          "false false true",
          "true false false",
          "false true true"
    ],
    correctAnswer: 2,
    explanation: "`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.\n\nWhen we use the `==` operator (Equality operator), it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.\n\nHowever, when we use the `===` operator (Strict equality operator), both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`",
    tags: ["javascript","quiz"],
  }
];
