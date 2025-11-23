import { QuizQuestion } from '../../types/quiz';

export const object_fundamentalsQuizzes: QuizQuestion[] = [
{
    id: 'js-072',
    question: "📝 What happens when we do this?\n\n```javascript\nfunction bark() {\n  console.log(\"Woof!\");\n}\n\nbark.animal = \"dog\";\n```",
    category: 'javascript',
    subcategory: 'object-fundamentals',
    difficulty: 'medium',
    options: [
          "Nothing, this is totally fine!",
          "SyntaxError. You cannot add properties to a function this way.",
          "\"Woof\" gets logged.",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)\n\nA function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-077',
    question: "🖥️ What's the output?\n\n```javascript\nconst a = {};\nconst b = { key: \"b\" };\nconst c = { key: \"c\" };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);\n```",
    category: 'javascript',
    subcategory: 'object-fundamentals',
    difficulty: 'medium',
    options: [
          "123",
          "456",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.\n\nHowever, when we stringify an object, it becomes `\"[object Object]\"`. So what we are saying here, is that `a[\"[object Object]\"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a[\"[object Object]\"] = 456`.\n\nThen, we log `a[b]`, which is actually `a[\"[object Object]\"]`. We just set that to `456`, so it returns `456`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-161',
    question: "✅ Which one is true?\n\n```javascript\nconst bird = {\n  size: \"small\",\n};\n\nconst mouse = {\n  name: \"Mickey\",\n  small: true,\n};\n```",
    category: 'javascript',
    subcategory: 'object-fundamentals',
    difficulty: 'medium',
    options: [
          "mouse.bird.size is not valid",
          "mouse[bird.size] is not valid",
          "mouse[bird[\"size\"]] is not valid",
          "All of them are valid"
    ],
    correctAnswer: 0,
    explanation: "In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.\n\n`mouse[bird.size]`: First it evaluates `bird.size`, which is `\"small\"`. `mouse[\"small\"]` returns `true`\n\nHowever, with dot notation, this doesn't happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we're actually asking `undefined.size`. This isn't valid, and will throw an error similar to `Cannot read property \"size\" of undefined`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-092',
    question: "📝 What's the output?\n\n```javascript\nconst myFunc = ({ x, y, z }) => {\n  console.log(x, y, z);\n};\n\nmyFunc(1, 2, 3);\n```",
    category: 'javascript',
    subcategory: 'object-fundamentals',
    difficulty: 'medium',
    options: [
          "1 2 3",
          "{1: 1} {2: 2} {3: 3}",
          "{ 1: undefined } undefined undefined",
          "undefined undefined undefined"
    ],
    correctAnswer: 3,
    explanation: "`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-015',
    question: "📝 What's the output?\n\n```javascript\nconst value = { number: 10 };\n\nconst multiply = (x = { ...value }) => {\n  console.log((x.number *= 2));\n};\n\nmultiply();\nmultiply();\nmultiply(value);\nmultiply(value);\n```",
    category: 'javascript',
    subcategory: 'object-fundamentals',
    difficulty: 'medium',
    options: [
          "20, 40, 80, 160",
          "20, 40, 20, 40",
          "20, 20, 20, 40",
          "NaN, NaN, 20, 40"
    ],
    correctAnswer: 2,
    explanation: "In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `\"undefined\"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.\n\nThe default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.\n\nThe third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`.\n\nThe fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`.",
    tags: ["javascript","quiz"],
  },
];
