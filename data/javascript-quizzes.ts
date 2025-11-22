import { QuizQuestion } from '../types/quiz';

// JavaScript Questions - Optimized Learning Path
// Source: https://github.com/lydiahallie/javascript-questions
// Additional questions created to fill curriculum gaps
// Organized in progressive difficulty: Basics → Functions → Objects → Arrays → Advanced

export const javascriptQuizzes: QuizQuestion[] = [
  {
    id: 'js-001',
    question: "🖥️ What's the output?\n\n```javascript\nconsole.log(typeof typeof 1);\n```",
    category: 'javascript',
    subcategory: 'basics',
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
    id: 'js-002',
    question: "🖥️ What's the output?\n\n```javascript\n!!null;\n!!\"\";\n!!1;\n```",
    category: 'javascript',
    subcategory: 'basics',
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

  {
    id: 'js-003',
    question: "🖥️ What's the output?\n\n```javascript\nfunction sum(a, b) {\n  return a + b;\n}\n\nsum(1, \"2\");\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "NaN",
          "TypeError",
          "\"12\"",
          "3"
    ],
    correctAnswer: 2,
    explanation: "JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.\n\nIn this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `\"Hello\" + \"World\"`, so what's happening here is `\"1\" + \"2\"` which returns `\"12\"`.",
    tags: ["javascript","quiz"],
  },

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
    id: 'js-006',
    question: "📝 What's the output?\n\n```javascript\nlet number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "1 1 2",
          "1 2 2",
          "0 2 2",
          "0 1 2"
    ],
    correctAnswer: 2,
    explanation: "The **postfix** unary operator `++`:\n\n1. Returns the value (this returns `0`)\n2. Increments the value (number is now `1`)\n\nThe **prefix** unary operator `++`:\n\n1. Increments the value (number is now `2`)\n2. Returns the value (this returns `2`)\n\nThis returns `0 2 2`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-007',
    question: "📤 What does this return?\n\n```javascript\n[...\"Lydia\"];\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "[\"L\", \"y\", \"d\", \"i\", \"a\"]",
          "[\"Lydia\"]",
          "[[], \"Lydia\"]",
          "[[\"L\", \"y\", \"d\", \"i\", \"a\"]]"
    ],
    correctAnswer: 0,
    explanation: "A string is an iterable. The spread operator maps every character of an iterable to one element.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-008',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(3 + 4 + \"5\");\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "\"345\"",
          "\"75\"",
          "12",
          "\"12\""
    ],
    correctAnswer: 1,
    explanation: "Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.\n\n`3 + 4` gets evaluated first. This results in the number `7`.\n\n`7 + '5'` results in `\"75\"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `\"7\" + \"5\"` results in `\"75\"`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-009',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(\"🥑\" + \"💻\");\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "\"🥑💻\"",
          "257548",
          "A string containing their code points",
          "Error"
    ],
    correctAnswer: 0,
    explanation: "With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `\"🥑\"` with the string `\"💻\"`, resulting in `\"🥑💻\"`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-010',
    question: "📝 What's the output?\n\n```javascript\nlet num = 10;\n\nconst increaseNumber = () => num++;\nconst increasePassedNumber = (number) => number++;\n\nconst num1 = increaseNumber();\nconst num2 = increasePassedNumber(num1);\n\nconsole.log(num1);\nconsole.log(num2);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "10, 10",
          "10, 11",
          "11, 11",
          "11, 12"
    ],
    correctAnswer: 0,
    explanation: "The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterward.\n\n`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`). Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.",
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
    id: 'js-014',
    question: "🖥️ What's the output?\n\n```javascript\nconst user = { name: \"Lydia\", age: 21 };\nconst admin = { admin: true, ...user };\n\nconsole.log(admin);\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "{ admin: true, user: { name: \"Lydia\", age: 21 } }",
          "{ admin: true, name: \"Lydia\", age: 21 }",
          "{ admin: true, user: [\"Lydia\", 21] }",
          "{ admin: true }"
    ],
    correctAnswer: 1,
    explanation: "It's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: \"Lydia\", age: 21 }`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-015',
    question: "📝 What's the output?\n\n```javascript\nconst value = { number: 10 };\n\nconst multiply = (x = { ...value }) => {\n  console.log((x.number *= 2));\n};\n\nmultiply();\nmultiply();\nmultiply(value);\nmultiply(value);\n```",
    category: 'javascript',
    subcategory: 'basics',
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
    id: 'js-018',
    question: "🖥️ What's the value of output?\n\n```javascript\nconst set = new Set();\n\nset.add(1);\nset.add(\"Lydia\");\nset.add({ name: \"Lydia\" });\n\nfor (let item of set) {\n  console.log(item + 2);\n}\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "3, NaN, NaN",
          "3, 7, NaN",
          "3, Lydia2, [object Object]2",
          "\"12\", Lydia2, [object Object]2"
    ],
    correctAnswer: 2,
    explanation: "The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.\n\nThe first one is `1`, which is a numerical value. `1 + 2` returns the number 3.\n\nHowever, the second one is a string `\"Lydia\"`. `\"Lydia\"` is a string and `2` is a number: `2` gets coerced into a string. `\"Lydia\"` and `\"2\"` get concatenated, which results in the string `\"Lydia2\"`.\n\n`{ name: \"Lydia\" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `\"[object Object]\"`. `\"[object Object]\"` concatenated with `\"2\"` becomes `\"[object Object]2\"`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-019',
    question: "🔤 Which of the following options will return `6`?\n\n```javascript\nfunction sumValues(x, y, z) {\n  return x + y + z;\n}\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "sumValues([...1, 2, 3])",
          "sumValues([...[1, 2, 3]])",
          "sumValues(...[1, 2, 3])",
          "sumValues([1, 2, 3])"
    ],
    correctAnswer: 2,
    explanation: "With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-020',
    question: "🖥️ What's the output?\n\n```javascript\nlet randomValue = { name: \"Lydia\" };\nrandomValue = 23;\n\nif (!typeof randomValue === \"string\") {\n  console.log(\"It's not a string!\");\n} else {\n  console.log(\"Yay it's a string!\");\n}\n```",
    category: 'javascript',
    subcategory: 'basics',
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
    id: 'js-021',
    question: "🖥️ What's the output?\n\n```javascript\nlet num = 1;\nconst list = [\"🥳\", \"🤠\", \"🥰\", \"🤪\"];\n\nconsole.log(list[(num += 1)]);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "🤠",
          "🥰",
          "SyntaxError",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "With the `+=` operator, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰.",
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
    id: 'js-024',
    question: "🖥️ What is the output?\n\n```javascript\nconst myLifeSummedUp = [\"☕\", \"💻\", \"🍷\", \"🍫\"];\n\nfor (let item in myLifeSummedUp) {\n  console.log(item);\n}\n\nfor (let item of myLifeSummedUp) {\n  console.log(item);\n}\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "0 1 2 3 and \"☕\" \"💻\" \"🍷\" \"🍫\"",
          "\"☕\" \"💻\" \"🍷\" \"🍫\" and \"☕\" \"💻\" \"🍷\" \"🍫\"",
          "\"☕\" \"💻\" \"🍷\" \"🍫\" and 0 1 2 3",
          "0 1 2 3 and {0: \"☕\", 1: \"💻\", 2: \"🍷\", 3: \"🍫\"}"
    ],
    correctAnswer: 0,
    explanation: "With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the \"keys\" of array elements, which are actually their indexes. You could see an array as:\n\n`{0: \"☕\", 1: \"💻\", 2: \"🍷\", 3: \"🍫\"}`\n\nWhere the keys are the enumerable properties. `0` `1` `2` `3` get logged.\n\nWith a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable \"item\" is equal to the element it's currently iterating over, `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"` get logged.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-025',
    question: "❌ Which of the options result(s) in an error?\n\n```javascript\nconst emojis = [\"🎄\", \"🎅🏼\", \"🎁\", \"⭐\"];\n\n/* 1 */ emojis.push(\"🦌\");\n/* 2 */ emojis.splice(0, 2);\n/* 3 */ emojis = [...emojis, \"🥂\"];\n/* 4 */ emojis.length = 0;\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "1",
          "1 and 2",
          "3 and 4",
          "3"
    ],
    correctAnswer: 3,
    explanation: "The `const` keyword simply means we cannot _redeclare_ the value of that variable, it's _read-only_. However, the value itself isn't immutable. The properties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-026',
    question: "📝 What's the output?\n\n```javascript\nconst arr1 = [1, 2, 3];\nconst arr2 = arr1;\narr2.push(4);\n\nconsole.log(arr1.length);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'easy',
    options: [
          "4",
          "3",
          "undefined",
          "TypeError"
    ],
    correctAnswer: 0,
    explanation: "Arrays are reference types. arr2 = arr1 doesn't copy the array, both variables point to the same array in memory. Modifying arr2 also modifies arr1. To create a copy, use [...arr1] or arr1.slice().",
    tags: ["arrays","reference","mutation"],
  },

  {
    id: 'js-027',
    question: "📚 What's the value of `num`?\n\n```javascript\nconst num = parseInt(\"7*6\", 10);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "42",
          "\"42\"",
          "7",
          "NaN"
    ],
    correctAnswer: 2,
    explanation: "Only the first number in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.\n\n`*` is not a valid number. It only parses `\"7\"` into the decimal `7`. `num` now holds the value of `7`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-028',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia\";\n\nconsole.log(name());\n```",
    category: 'javascript',
    subcategory: 'basics',
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
    id: 'js-029',
    question: "🔤 Is this a pure function?\n\n```javascript\nfunction sum(a, b) {\n  return a + b;\n}\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "Yes",
          "No",
          "Only if a and b are numbers",
          "Only in strict mode"
    ],
    correctAnswer: 0,
    explanation: "A pure function is a function that _always_ returns the same result, if the same arguments are passed.\n\nThe `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-030',
    question: "📝 What is the output?\n\n```javascript\nfunction sayHi(name) {\n  return `Hi there, ${name}`;\n}\n\nconsole.log(sayHi());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "Hi there,",
          "Hi there, undefined",
          "Hi there, null",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.\n\nIn ES6, we can overwrite this default `undefined` value with default parameters. For example:\n\n`function sayHi(name = \"Lydia\") { ... }`\n\nIn this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-031',
    question: "📝 What's the output?\n\n```javascript\nfunction sum(num1, num2 = num1) {\n  console.log(num1 + num2);\n}\n\nsum(10);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "NaN",
          "20",
          "ReferenceError",
          "undefined"
    ],
    correctAnswer: 1,
    explanation: "You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`. `num1 + num2` returns `20`.\n\nIf you're trying to set a default parameter's value equal to a parameter that is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-032',
    question: "📝 What's the output?\n\n```javascript\nfunction nums(a, b) {\n  if (a > b) console.log(\"a is bigger\");\n  else console.log(\"b is bigger\");\n  return;\n  a + b;\n}\n\nconsole.log(nums(4, 2));\nconsole.log(nums(1, 2));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "a is bigger, 6 and b is bigger, 3",
          "a is bigger, undefined and b is bigger, undefined",
          "undefined and undefined",
          "SyntaxError"
    ],
    correctAnswer: 1,
    explanation: "In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc.\n\nHere, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:\n\n```javascript\nreturn;\na + b;\n```\n\nThis means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-033',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(`${((x) => x)(\"I love\")} to program`);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "I love to program",
          "undefined to program",
          "${(x => x)('I love') to program",
          "TypeError"
    ],
    correctAnswer: 0,
    explanation: "Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-034',
    question: "📝 What's the output?\n\n```javascript\nconst add = (x) => (y) => (z) => {\n  console.log(x, y, z);\n  return x + y + z;\n};\n\nadd(4)(5)(6);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "4 5 6",
          "6 5 4",
          "4 function function",
          "undefined undefined 6"
    ],
    correctAnswer: 0,
    explanation: "The `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`.",
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
    id: 'js-036',
    question: "📝 What's the output?\n\n```javascript\nconst add = (x) => x + x;\n\nfunction myFunc(num = 2, value = add(num)) {\n  console.log(num, value);\n}\n\nmyFunc();\nmyFunc(3);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "2 4 and 3 6",
          "2 NaN and 3 NaN",
          "2 Error and 3 6",
          "2 4 and 3 Error"
    ],
    correctAnswer: 0,
    explanation: "First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` is the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.\n\nThen, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-037',
    question: "📝 What's the output?\n\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('World'));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
          "Hello, World!",
          "Hello, ${name}!",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "Template literals (enclosed by backticks) allow embedded expressions using ${expression} syntax. The function parameter 'name' is replaced with 'World', resulting in 'Hello, World!'.",
    tags: ["functions","template-literals","parameters"],
  },

  {
    id: 'js-038',
    question: "📝 What's the output?\n\n```javascript\nconst multiply = (a, b = 2) => a * b;\n\nconsole.log(multiply(5));\nconsole.log(multiply(5, 3));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
          "10 and 15",
          "NaN and 15",
          "5 and 8",
          "undefined and 15"
    ],
    correctAnswer: 0,
    explanation: "Default parameters allow function parameters to have default values if no value or undefined is passed. multiply(5) uses the default b=2, giving 10. multiply(5, 3) uses the passed value 3, giving 15.",
    tags: ["functions","default-parameters","arrow-functions"],
  },

  {
    id: 'js-039',
    question: "📝 What's the output?\n\n```javascript\nconst fn = function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n};\n\nconsole.log(fn(5));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "120",
          "5",
          "ReferenceError",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "Named function expressions can reference themselves by name for recursion. factorial(5) = 5 * 4 * 3 * 2 * 1 = 120. The name 'factorial' is only available inside the function, not outside.",
    tags: ["functions","recursion","function-expressions"],
  },

  {
    id: 'js-040',
    question: "📝 What's the output?\n\n```javascript\nfunction add(a) {\n  return function(b) {\n    return a + b;\n  };\n}\n\nconsole.log(add(2)(3));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "5",
          "23",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "This is currying - transforming a function that takes multiple arguments into a sequence of functions each taking a single argument. add(2) returns a function that adds 2 to its argument, so add(2)(3) = 2 + 3 = 5.",
    tags: ["functions","currying","closures","higher-order"],
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
    id: 'js-042',
    question: "📝 What's the output?\n\n```javascript\nfunction sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = \"Lydia\";\n  let age = 21;\n}\n\nsayHi();\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "Lydia and undefined",
          "Lydia and ReferenceError",
          "ReferenceError and 21",
          "undefined and ReferenceError"
    ],
    correctAnswer: 3,
    explanation: "Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-043',
    question: "📝 What's the output?\n\n```javascript\n(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "1 undefined 2",
          "undefined undefined undefined",
          "1 1 2",
          "1 undefined undefined"
    ],
    correctAnswer: 0,
    explanation: "The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.\n\nLater, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.\n\nOutside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.",
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
    id: 'js-046',
    question: "📝 What's the output?\n\n```javascript\nconst randomValue = 21;\n\nfunction getInfo() {\n  console.log(typeof randomValue);\n  const randomValue = \"Lydia Hallie\";\n}\n\ngetInfo();\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "\"number\"",
          "\"string\"",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 3,
    explanation: "Variables declared with the `const` keyword are not referenceable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-047',
    question: "🔤 What's the difference between function declarations and function expressions?",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "Function declarations are hoisted, expressions are not",
          "Function expressions are hoisted, declarations are not",
          "There is no difference",
          "Expressions cannot be named"
    ],
    correctAnswer: 0,
    explanation: "Function declarations are hoisted to the top of their scope, meaning they can be called before they appear in the code. Function expressions (const fn = function() {}) are not hoisted and must be defined before use.",
    tags: ["functions","hoisting","declarations"],
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
    id: 'js-049',
    question: "🖥️ What's the output?\n\n```javascript\nconst { firstName: myName } = { firstName: \"Lydia\" };\n\nconsole.log(firstName);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "\"Lydia\"",
          "\"myName\"",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 3,
    explanation: "By using [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax we can unpack values from arrays, or properties from objects, into distinct variables:\n\n```javascript\nconst { firstName } = { firstName: \"Lydia\" };\n// ES5 version:\n// var firstName = { firstName: 'Lydia' }.firstName;\n\nconsole.log(firstName); // \"Lydia\"\n```\n\nAlso, a property can be unpacked from an object and assigned to a variable with a different name than the object property:\n\n```javascript\nconst { firstName: myName } = { firstName: \"Lydia\" };\n// ES5 version:\n// var myName = { firstName: 'Lydia' }.firstName;\n\nconsole.log(myName); // \"Lydia\"\nconsole.log(firstName); // Uncaught ReferenceError: firstName is not defined\n```\n\nTherefore, `firstName` does not exist as a variable, thus attempting to access its value will raise a `ReferenceError`.\n\n**Note:** Be aware of the `global scope` properties:\n\n```javascript\nconst { name: myName } = { name: \"Lydia\" };\n\nconsole.log(myName); // \"lydia\"\nconsole.log(name); // \"\" ----- Browser e.g. Chrome\nconsole.log(name); // ReferenceError: name is not defined  ----- NodeJS\n```\n\nWhenever Javascript is unable to find a variable within the _current scope_, it climbs up the [Scope chain](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) and searches for it and if it reaches the top-level scope, aka **Global scope**, and still doesn't find it, it will throw a `ReferenceError`.\n\n- In **Browsers** such as _Chrome_, `name` is a _deprecated global scope property_. In this example, the code is running inside _global scope_ and there is no user-defined local variable for `name`, therefore it searches the predefined _variables/properties_ in the global scope which is in the case of browsers, it searches through `window` object and it will extract the [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) value which is equal to an **empty string**.\n\n- In **NodeJS**, there is no such property on the `global` object, thus attempting to access a non-existent variable will raise a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined).",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-050',
    question: "📝 What's the output?\n\n```javascript\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = outer();\nconsole.log(counter());\nconsole.log(counter());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "1 and 2",
          "0 and 0",
          "1 and 1",
          "undefined and undefined"
    ],
    correctAnswer: 0,
    explanation: "This demonstrates closure. The inner function retains access to the outer function's variables even after outer() has returned. Each call to counter() increments and returns the same 'count' variable, resulting in 1, then 2.",
    tags: ["functions","closures","scope"],
  },

  {
    id: 'js-051',
    question: "📝 What's the output?\n\n```javascript\nconst shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius,\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "20 and 62.83185307179586",
          "20 and NaN",
          "20 and 63",
          "NaN and 63"
    ],
    correctAnswer: 1,
    explanation: "Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.\n\nWith arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n\nSince there is no value `radius` in the scope of the arrow function, `this.radius` returns `undefined` which, when multiplied by `2 * Math.PI`, results in `NaN`.",
    tags: ["javascript","quiz"],
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
    id: 'js-055',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  firstName: \"Lydia\",\n  lastName: \"Hallie\",\n  pet: {\n    name: \"Mara\",\n    breed: \"Dutch Tulip Hound\",\n  },\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n};\n\nconsole.log(person.pet?.name);\nconsole.log(person.pet?.family?.name);\nconsole.log(person.getFullName?.());\nconsole.log(member.getLastName?.());\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "undefined undefined undefined undefined",
          "Mara undefined Lydia Hallie ReferenceError",
          "Mara null Lydia Hallie null",
          "null ReferenceError null ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.\n\n`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`.\n`person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`.\n`person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`.\n`member.getLastName?.()`: variable `member` is non-existent therefore a `ReferenceError` gets thrown!",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-056',
    question: "📝 What's the output?\n\n```javascript\nconst config = {\n  languages: [],\n  set language(lang) {\n    return this.languages.push(lang);\n  },\n};\n\nconsole.log(config.language);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "function language(lang) { this.languages.push(lang }",
          "0",
          "[]",
          "undefined"
    ],
    correctAnswer: 3,
    explanation: "The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-057',
    question: "🖥️ What's the output?\n\n```javascript\nconst user = {\n  email: \"my@email.com\",\n  updateEmail: (email) => {\n    this.email = email;\n  },\n};\n\nuser.updateEmail(\"new@email.com\");\nconsole.log(user.email);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "my@email.com",
          "new@email.com",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "The `updateEmail` function is an arrow function, and is not bound to the `user` object. This means that the `this` keyword is not referring to the `user` object, but refers to the global scope in this case. The value of `email` within the `user` object does not get updated. When logging the value of `user.email`, the original value of `my@email.com` gets returned.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-058',
    question: "📝 What's the output?\n\n```javascript\nconst person = {\n  name: 'John',\n  greet: function() {\n    return () => console.log(this.name);\n  }\n};\n\nconst greetFn = person.greet();\ngreetFn();\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'hard',
    options: [
          "John",
          "undefined",
          "TypeError",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "Arrow functions don't have their own 'this' - they inherit it from the parent scope. The arrow function is created inside greet() where 'this' refers to 'person', so this.name is 'John' even when called later.",
    tags: ["functions","arrow-functions","this","lexical-scope"],
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
    id: 'js-061',
    question: "🤝 What's the value of `sum`?\n\n```javascript\nconst sum = eval(\"10*10+5\");\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "105",
          "\"105\"",
          "TypeError",
          "\"10*10+5\""
    ],
    correctAnswer: 0,
    explanation: "`eval` evaluates code that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.",
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
    id: 'js-064',
    question: "🖥️ When you click the paragraph, what's the logged output?",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
          "p div",
          "div p",
          "p",
          "div"
    ],
    correctAnswer: 0,
    explanation: "If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, targeting, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.",
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
    id: 'js-066',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(String.raw`Hello\\nworld`);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "Hello world!",
          "Hello <br />&nbsp; &nbsp; &nbsp;world",
          "Hello\\nworld",
          "Hello\\n <br /> &nbsp; &nbsp; &nbsp;world"
    ],
    correctAnswer: 2,
    explanation: "`String.raw` returns a string where the escapes (`\\n`, `\\v`, `\\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:\n\n`` const path = `C:\\Documents\\Projects\\table.html` ``\n\nWhich would result in:\n\n`\"C:DocumentsProjects able.html\"`\n\nWith `String.raw`, it would simply ignore the escape and print:\n\n`C:\\Documents\\Projects\\table.html`\n\nIn this case, the string is `Hello\\nworld`, which gets logged.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-067',
    question: "📝 What's its value?\n\n```javascript\nconsole.log(\"❤️\" === \"❤️\");\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "true",
          "false",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "Under the hood, emojis are unicodes. The unicodes for the heart emoji is `\"U+2764 U+FE0F\"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.",
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
    id: 'js-069',
    question: "📝 What does the `setInterval` method return in the browser?\n\n```javascript\nsetInterval(() => console.log(\"Hi\"), 1000);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "a unique id",
          "the amount of milliseconds specified",
          "the passed function",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.",
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
    id: 'js-071',
    question: "🖥️ What's the output?\n\n```javascript\nlet c = { greeting: \"Hey!\" };\nlet d;\n\nd = c;\nc.greeting = \"Hello\";\nconsole.log(d.greeting);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "Hello",
          "Hey!",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "In JavaScript, all objects interact by _reference_ when setting them equal to each other.\n\nFirst, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.\n\nWhen you change one object, you change all of them.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-072',
    question: "📝 What happens when we do this?\n\n```javascript\nfunction bark() {\n  console.log(\"Woof!\");\n}\n\nbark.animal = \"dog\";\n```",
    category: 'javascript',
    subcategory: 'basics',
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
    id: 'js-077',
    question: "🖥️ What's the output?\n\n```javascript\nconst a = {};\nconst b = { key: \"b\" };\nconst c = { key: \"c\" };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);\n```",
    category: 'javascript',
    subcategory: 'basics',
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
    id: 'js-078',
    question: "🖥️ What's the output?\n\n```javascript\n[\n  [0, 1],\n  [2, 3],\n].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },\n  [1, 2]\n);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "[0, 1, 2, 3, 1, 2]",
          "[6, 1, 2]",
          "[1, 2, 0, 1, 2, 3]",
          "[1, 2, 6]"
    ],
    correctAnswer: 2,
    explanation: "`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.\n\nThen, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-079',
    question: "🖥️ What's the output?\n\n```javascript\nfunction getInfo(member, year) {\n  member.name = \"Lydia\";\n  year = \"1998\";\n}\n\nconst person = { name: \"Sarah\" };\nconst birthYear = \"1997\";\n\ngetInfo(person, birthYear);\n\nconsole.log(person, birthYear);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "{ name: \"Lydia\" }, \"1997\"",
          "{ name: \"Sarah\" }, \"1998\"",
          "{ name: \"Lydia\" }, \"1998\"",
          "{ name: \"Sarah\" }, \"1997\""
    ],
    correctAnswer: 0,
    explanation: "Arguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).\n\nThe variable `birthYear` has a reference to the value `\"1997\"`. The argument `year` also has a reference to the value `\"1997\"`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `\"1998\"`, we are only updating the value of `year`. `birthYear` is still equal to `\"1997\"`.\n\nThe value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `\"Lydia\"`",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-080',
    question: "🖥️ What's the output?\n\n```javascript\nfunction greeting() {\n  throw \"Hello world!\";\n}\n\nfunction sayHi() {\n  try {\n    const data = greeting();\n    console.log(\"It worked!\", data);\n  } catch (e) {\n    console.log(\"Oh no an error:\", e);\n  }\n}\n\nsayHi();\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "It worked! Hello world!",
          "Oh no an error: undefined",
          "SyntaxError: can only throw Error objects",
          "Oh no an error: Hello world!"
    ],
    correctAnswer: 3,
    explanation: "With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, a boolean or an object. In this case, our exception is the string `'Hello world!'`.\n\nWith the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world!'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world!'`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-081',
    question: "📝 What's the output?\n\n```javascript\nconst set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);\n```",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'medium',
    options: [
          "[1, 1, 2, 3, 4]",
          "[1, 2, 3, 4]",
          "{1, 1, 2, 3, 4}",
          "{1, 2, 3, 4}"
    ],
    correctAnswer: 3,
    explanation: "The `Set` object is a collection of _unique_ values: a value can only occur once in a set.\n\nWe passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-082',
    question: "📝 What is the output?\n\n```javascript\nconst add = () => {\n  const cache = {};\n  return (num) => {\n    if (num in cache) {\n      return `From cache! ${cache[num]}`;\n    } else {\n      const result = num + 10;\n      cache[num] = result;\n      return `Calculated! ${result}`;\n    }\n  };\n};\n\nconst addFunction = add();\nconsole.log(addFunction(10));\nconsole.log(addFunction(10));\nconsole.log(addFunction(5 * 2));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "Calculated! 20 Calculated! 20 Calculated! 20",
          "Calculated! 20 From cache! 20 Calculated! 20",
          "Calculated! 20 From cache! 20 From cache! 20",
          "Calculated! 20 From cache! 20 Error"
    ],
    correctAnswer: 2,
    explanation: "The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.\n\nIf we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the cache value will be returned, which saves execution time. Otherwise, if it's not cached, it will calculate the value and store it afterward.\n\nWe call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.\n\nThe second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.\n\nThe third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-083',
    question: "🖥️ What is the output?\n\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n};\n\nlet city = person.city;\ncity = \"Amsterdam\";\n\nconsole.log(person);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "{ name: \"Lydia\", age: 21 }",
          "{ name: \"Lydia\", age: 21, city: \"Amsterdam\" }",
          "{ name: \"Lydia\", age: 21, city: undefined }",
          "\"Amsterdam\""
    ],
    correctAnswer: 0,
    explanation: "We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`.\n\nNote that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.\n\nThen, we set `city` equal to the string `\"Amsterdam\"`. This doesn't change the person object: there is no reference to that object.\n\nWhen logging the `person` object, the unmodified object gets returned.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-084',
    question: "✅ Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?\n\n```javascript\nfunction getName(name) {\n  const hasName = //\n}\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "!!name",
          "name",
          "new Boolean(name)",
          "name.length"
    ],
    correctAnswer: 0,
    explanation: "With `!!name`, we determine whether the value of `name` is truthy or falsy. If the name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.\n\nBy setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.\n\n`new Boolean(true)` returns an object wrapper, not the boolean value itself.\n\n`name.length` returns the length of the passed argument, not whether it's `true`.",
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
    id: 'js-089',
    question: "🗺️ Which method(s) will return the value `'Hello world!'`?\n\n```javascript\nconst myMap = new Map();\nconst myFunc = () => \"greeting\";\n\nmyMap.set(myFunc, \"Hello world!\");\n\n//1\nmyMap.get(\"greeting\");\n//2\nmyMap.get(myFunc);\n//3\nmyMap.get(() => \"greeting\");\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "1",
          "2",
          "2 and 3",
          "All of them"
    ],
    correctAnswer: 1,
    explanation: "When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`.\n\n1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.\n3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interacts by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-090',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n};\n\nconst changeAge = (x = { ...person }) => (x.age += 1);\nconst changeAgeAndName = (x = { ...person }) => {\n  x.age += 1;\n  x.name = \"Sarah\";\n};\n\nchangeAge(person);\nchangeAgeAndName();\n\nconsole.log(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "{name: \"Sarah\", age: 22}",
          "{name: \"Sarah\", age: 23}",
          "{name: \"Lydia\", age: 22}",
          "{name: \"Lydia\", age: 23}"
    ],
    correctAnswer: 2,
    explanation: "Both the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object.\n\nFirst, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: \"Lydia\", age: 22 }`.\n\nThen, we invoke the `changeAgeAndName` function, however we don't pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it's a new object, it doesn't affect the values of the properties on the `person` object. `person` is still equal to `{ name: \"Lydia\", age: 22 }`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-091',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia Hallie\";\n\nconsole.log(!typeof name === \"object\");\nconsole.log(!typeof name === \"string\");\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "false true",
          "true false",
          "false false",
          "true true"
    ],
    correctAnswer: 2,
    explanation: "`typeof name` returns `\"string\"`. The string `\"string\"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === \"object\"` and `false === \"string\"` both return`false`.\n\n(If we wanted to check whether the type was (un)equal to a certain type, we should've written `!==` instead of `!typeof`)",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-092',
    question: "📝 What's the output?\n\n```javascript\nconst myFunc = ({ x, y, z }) => {\n  console.log(x, y, z);\n};\n\nmyFunc(1, 2, 3);\n```",
    category: 'javascript',
    subcategory: 'basics',
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
    id: 'js-093',
    question: "🖥️ What's the output?\n\n```javascript\nfunction getFine(speed, amount) {\n  const formattedSpeed = new Intl.NumberFormat(\"en-US\", {\n    style: \"unit\",\n    unit: \"mile-per-hour\",\n  }).format(speed);\n\n  const formattedAmount = new Intl.NumberFormat(\"en-US\", {\n    style: \"currency\",\n    currency: \"USD\",\n  }).format(amount);\n\n  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;\n}\n\nconsole.log(getFine(130, 300));\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "The driver drove 130 and has to pay 300",
          "The driver drove 130 mph and has to pay \\$300.00",
          "The driver drove undefined and has to pay undefined",
          "The driver drove 130.00 and has to pay 300.00"
    ],
    correctAnswer: 1,
    explanation: "With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currency` in `USD` results in `$300.00`.",
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
    id: 'js-095',
    question: "🖥️ What's the output?\n\n```javascript\nconst createMember = ({ email, address = {} }) => {\n  const validEmail = /.+\\@.+\\..+/.test(email);\n  if (!validEmail) throw new Error(\"Valid email pls\");\n\n  return {\n    email,\n    address: address ? address : null,\n  };\n};\n\nconst member = createMember({ email: \"my@email.com\" });\nconsole.log(member);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "{ email: \"my@email.com\", address: null }",
          "{ email: \"my@email.com\" }",
          "{ email: \"my@email.com\", address: {} }",
          "{ email: \"my@email.com\", address: undefined }"
    ],
    correctAnswer: 2,
    explanation: "The default value of `address` is an empty object `{}`. When we set the variable `member` equal to the object returned by the `createMember` function, we didn't pass a value for the address, which means that the value of the address is the default empty object `{}`. An empty object is a truthy value, which means that the condition of the `address ? address : null` conditional returns `true`. The value of the address is the empty object `{}`.",
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
    id: 'js-097',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = { name: \"Lydia\" };\n\nObject.defineProperty(person, \"age\", { value: 21 });\n\nconsole.log(person);\nconsole.log(Object.keys(person));\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "{ name: \"Lydia\", age: 21 }, [\"name\", \"age\"]",
          "{ name: \"Lydia\", age: 21 }, [\"name\"]",
          "{ name: \"Lydia\"}, [\"name\", \"age\"]",
          "{ name: \"Lydia\"}, [\"age\"]"
    ],
    correctAnswer: 1,
    explanation: "With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `\"name\"`.\n\nProperties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-098',
    question: "📝 What's the output?\n\n```javascript\nconst box = { x: 10, y: 20 };\n\nObject.freeze(box);\n\nconst shape = box;\nshape.x = 100;\n\nconsole.log(shape);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "{ x: 100, y: 20 }",
          "{ x: 10, y: 20 }",
          "{ x: 100 }",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).\n\nWhen we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` would return true, since the variable `shape` has a reference to a frozen object.\n\nSince `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-099',
    question: "📦 Which of the following will modify the `person` object?\n\n```javascript\nconst person = { name: \"Lydia Hallie\" };\n\nObject.seal(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "person.name = \"Evan Bacon\"",
          "person.age = 21",
          "delete person.name",
          "Object.assign(person, { age: 21 })"
    ],
    correctAnswer: 0,
    explanation: "With `Object.seal` we can prevent new properties from being _added_, or existing properties to be _removed_.\n\nHowever, you can still modify the value of existing properties.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-100',
    question: "📦 Which of the following will modify the `person` object?\n\n```javascript\nconst person = {\n  name: \"Lydia Hallie\",\n  address: {\n    street: \"100 Main St\",\n  },\n};\n\nObject.freeze(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "person.name = \"Evan Bacon\"",
          "delete person.address",
          "person.address.street = \"101 Main St\"",
          "person.pet = { name: \"Mara\" }"
    ],
    correctAnswer: 2,
    explanation: "The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.\n\nHowever, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-101',
    question: "🖥️ What's the output?\n\n```javascript\nconst user = {\n  email: \"e@mail.com\",\n  password: \"12345\",\n};\n\nconst updateUser = ({ email, password }) => {\n  if (email) {\n    Object.assign(user, { email });\n  }\n\n  if (password) {\n    user.password = password;\n  }\n\n  return user;\n};\n\nconst updatedUser = updateUser({ email: \"new@email.com\" });\n\nconsole.log(updatedUser === user);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "false",
          "true",
          "TypeError",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "The `updateUser` function updates the values of the `email` and `password` properties on user, if their values are passed to the function, after which the function returns the `user` object. The returned value of the `updateUser` function is the `user` object, which means that the value of updatedUser is a reference to the same `user` object that `user` points to. `updatedUser === user` equals `true`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-102',
    question: "📦 All object have prototypes.",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          "true",
          "false",
          "only if created with 'new'",
          "only in ES6+"
    ],
    correctAnswer: 1,
    explanation: "The answer is **false** because `Object.prototype` itself doesn't have a prototype - its prototype is `null`. This is the top of the prototype chain. You can verify this: `Object.getPrototypeOf(Object.prototype) === null` returns `true`. Additionally, you can create objects without prototypes using `Object.create(null)`, which is useful for creating true dictionaries/hash maps without inherited properties.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-103',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(\"I want pizza\"[0]);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "\"\"\"",
          "\"I\"",
          "SyntaxError",
          "undefined"
    ],
    correctAnswer: 1,
    explanation: "In order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character `\"I'`, which gets logged.\n\nNote that this method is not supported in IE7 and below. In that case, use `.charAt()`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-104',
    question: "📝 What's the output?\n\n```javascript\nfunction getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "\"number\"",
          "\"array\"",
          "\"object\"",
          "\"NaN\""
    ],
    correctAnswer: 2,
    explanation: "The rest parameter (`...args`) lets us \"collect\" all remaining arguments into an array. An array is an object, so `typeof args` returns `\"object\"`",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-105',
    question: "🖥️ What's the output?\n\n```javascript\nlet person = { name: \"Lydia\" };\nconst members = [person];\nperson = null;\n\nconsole.log(members);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "null",
          "[null]",
          "[{}]",
          "[{ name: \"Lydia\" }]"
    ],
    correctAnswer: 3,
    explanation: "First, we declare a variable `person` with the value of an object that has a `name` property.\n\nThen, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don't have the _same_ reference!)\n\nThen, we set the variable `person` equal to `null`.\n\nWe are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-106',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "[[1, 2, 3, 4, 5]]",
          "[1, 2, 3, 4, 5]",
          "1",
          "[1]"
    ],
    correctAnswer: 2,
    explanation: "We can unpack values from arrays or properties from objects through destructuring. For example:\n\n```javascript\n[a, b] = [1, 2];\n```\n\nThe value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:\n\n```javascript\n[y] = [1, 2, 3, 4, 5];\n```\n\nThis means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-107',
    question: "🖥️ What's the output?\n\n```javascript\nconst settings = {\n  username: \"lydiahallie\",\n  level: 19,\n  health: 90,\n};\n\nconst data = JSON.stringify(settings, [\"level\", \"health\"]);\nconsole.log(data);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "\"{\"level\":19, \"health\":90}\"",
          "\"{\"username\": \"lydiahallie\"}\"",
          "\"[\"level\", \"health\"]\"",
          "\"{\"username\": \"lydiahallie\", \"level\":19, \"health\":90}\""
    ],
    correctAnswer: 0,
    explanation: "The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.\n\nIf the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `\"level\"` and `\"health\"` are included, `\"username\"` is excluded. `data` is now equal to `\"{\"level\":19, \"health\":90}\"`.\n\nIf the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-108',
    question: "📝 What is the output?\n\n```javascript\nconst list = [1 + 2, 1 * 2, 1 / 2];\nconsole.log(list);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "[\"1 + 2\", \"1 * 2\", \"1 / 2\"]",
          "[\"12\", 2, 0.5]",
          "[3, 2, 0.5]",
          "[1, 1, 1]"
    ],
    correctAnswer: 2,
    explanation: "Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.\n\nThe element will be equal to the returned value. `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-109',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n};\n\nfor (const [x, y] of Object.entries(person)) {\n  console.log(x, y);\n}\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "name Lydia and age 21",
          "[\"name\", \"Lydia\"] and [\"age\", 21]",
          "[\"name\", \"age\"] and undefined",
          "Error"
    ],
    correctAnswer: 0,
    explanation: "`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:\n\n`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`\n\nUsing the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray.\n\nThe first subarray is `[ \"name\", \"Lydia\" ]`, with `x` equal to `\"name\"`, and `y` equal to `\"Lydia\"`, which get logged.\nThe second subarray is `[ \"age\", 21 ]`, with `x` equal to `\"age\"`, and `y` equal to `21`, which get logged.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-110',
    question: "🖥️ What's the output?\n\n```javascript\nconst getList = ([x, ...y]) => [x, y]\nconst getUser = user => { name: user.name, age: user.age }\n\nconst list = [1, 2, 3, 4]\nconst user = { name: \"Lydia\", age: 21 }\n\nconsole.log(getList(list))\nconsole.log(getUser(user))\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "[1, [2, 3, 4]] and SyntaxError",
          "[1, [2, 3, 4]] and { name: \"Lydia\", age: 21 }",
          "[1, 2, 3, 4] and { name: \"Lydia\", age: 21 }",
          "Error and { name: \"Lydia\", age: 21 }"
    ],
    correctAnswer: 0,
    explanation: "The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:\n\n`[x, ...y] = [1, 2, 3, 4]`\n\nWith the rest parameter `...y`, we put all \"remaining\" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.\n\nThe `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to instantly return an _object_ from an arrow function, you have to write it between parentheses, otherwise everything between the two braces will be interpreted as a block statement. In this case the code between the braces is not a valid JavaScript code, so a `SyntaxError` gets thrown.\n\nThe following function would have returned an object:\n\n`const getUser = user => ({ name: user.name, age: user.age })`",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-111',
    question: "🖥️ What's the output?\n\n```javascript\nconst food = [\"🍕\", \"🍫\", \"🥑\", \"🍔\"];\nconst info = { favoriteFood: food[0] };\n\ninfo.favoriteFood = \"🍝\";\n\nconsole.log(food);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "['🍕', '🍫', '🥑', '🍔']",
          "['🍝', '🍫', '🥑', '🍔']",
          "['🍝', '🍕', '🍫', '🥑', '🍔']",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types don't interact by reference.\n\nIn JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)\n\nThen, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-112',
    question: "🔤 What does this method do?\n\n```javascript\nJSON.parse();\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "Parses JSON to a JavaScript value",
          "Parses a JavaScript object to JSON",
          "Parses any JavaScript value to JSON",
          "Parses JSON to a JavaScript object only"
    ],
    correctAnswer: 0,
    explanation: "With the `JSON.parse()` method, we can parse JSON string to a JavaScript value.\n\n```javascript\n// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonNumber = JSON.stringify(4); // '4'\nJSON.parse(jsonNumber); // 4\n\n// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'\nJSON.parse(jsonArray); // [1, 2, 3]\n\n// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray = JSON.stringify({ name: \"Lydia\" }); // '{\"name\":\"Lydia\"}'\nJSON.parse(jsonArray); // { name: 'Lydia' }\n```",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-113',
    question: "🖥️ What's the output?\n\n```javascript\nconst spookyItems = [\"👻\", \"🎃\", \"🕸\"];\n({ item: spookyItems[3] } = { item: \"💀\" });\n\nconsole.log(spookyItems);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "[\"👻\", \"🎃\", \"🕸\"]",
          "[\"👻\", \"🎃\", \"🕸\", \"💀\"]",
          "[\"👻\", \"🎃\", \"🕸\", { item: \"💀\" }]",
          "[\"👻\", \"🎃\", \"🕸\", \"[object Object]\"]"
    ],
    correctAnswer: 1,
    explanation: "By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value \"💀\" to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the \"💀\" to it. When logging `spookyItems`, `[\"👻\", \"🎃\", \"🕸\", \"💀\"]` gets logged.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-114',
    question: "📝 What's the output?\n\n```javascript\nfunction getFruit(fruits) {\n  console.log(fruits?.[1]?.[1]);\n}\n\ngetFruit([[\"🍊\", \"🍌\"], [\"🍍\"]]);\ngetFruit();\ngetFruit([[\"🍍\"], [\"🍊\", \"🍌\"]]);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "null, undefined, 🍌",
          "[], null, 🍌",
          "[], [], 🍌",
          "undefined, undefined, 🍌"
    ],
    correctAnswer: 3,
    explanation: "The `?` allows us to optionally access deeper nested properties within objects. We're trying to log the item on index `1` within the subarray that's on index `1` of the `fruits` array. If the subarray on index `1` in the `fruits` array doesn't exist, it'll simply return `undefined`. If the subarray on index `1` in the `fruits` array exists, but this subarray doesn't have an item on its `1` index, it'll also return `undefined`.\n\nFirst, we're trying to log the second item in the `['🍍']` subarray of `[['🍊', '🍌'], ['🍍']]`. This subarray only contains one item, which means there is no item on index `1`, and returns `undefined`.\n\nThen, we're invoking the `getFruits` function without passing a value as an argument, which means that `fruits` has a value of `undefined` by default. Since we're conditionally chaining the item on index `1` of`fruits`, it returns `undefined` since this item on index `1` does not exist.\n\nLastly, we're trying to log the second item in the `['🍊', '🍌']` subarray of `['🍍'], ['🍊', '🍌']`. The item on index `1` within this subarray is `🍌`, which gets logged.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-115',
    question: "📝 What's the output?\n\n```javascript\nfunction getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = \"Lydia\";\nconst age = 21;\n\ngetPersonInfo`${person} is ${age} years old`;\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "\"Lydia\" 21 [\"\", \" is \", \" years old\"]",
          "[\"\", \" is \", \" years old\"] \"Lydia\" 21",
          "\"Lydia\" [\"\", \" is \", \" years old\"] 21",
          "SyntaxError"
    ],
    correctAnswer: 1,
    explanation: "If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-116',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "[1, 2, 3, null x 7, 11]",
          "[1, 2, 3, 11]",
          "[1, 2, 3, empty x 7, 11]",
          "SyntaxError"
    ],
    correctAnswer: 2,
    explanation: "When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called \"empty slots\". These actually have the value of `undefined`, but you will see something like:\n\n`[1, 2, 3, empty x 7, 11]`\n\ndepending on where you run it (it's different for every browser, node, etc.)",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-117',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia Hallie\";\nconsole.log(name.padStart(13));\nconsole.log(name.padStart(2));\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "\"Lydia Hallie\", \"Lydia Hallie\"",
          "\" Lydia Hallie\", \" Lydia Hallie\" (\"[13x whitespace]Lydia Hallie\", \"[2x whitespace]Lydia Hallie\")",
          "\" Lydia Hallie\", \"Lydia Hallie\" (\"[1x whitespace]Lydia Hallie\", \"Lydia Hallie\")",
          "\"Lydia Hallie\", \"Lyd\","
    ],
    correctAnswer: 2,
    explanation: "With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `\"Lydia Hallie\"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.\n\nIf the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-118',
    question: "🖥️ What's the output?\n\n```javascript\nfunction getItems(fruitList, ...args, favoriteFruit) {\n  return [...fruitList, ...args, favoriteFruit]\n}\n\ngetItems([\"banana\", \"apple\"], \"pear\", \"orange\")\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "[\"banana\", \"apple\", \"pear\", \"orange\"]",
          "[[\"banana\", \"apple\"], \"pear\", \"orange\"]",
          "[\"banana\", \"apple\", [\"pear\"], \"orange\"]",
          "SyntaxError"
    ],
    correctAnswer: 3,
    explanation: "`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.\n\n```javascript\nfunction getItems(fruitList, favoriteFruit, ...args) {\n  return [...fruitList, ...args, favoriteFruit];\n}\n\ngetItems([\"banana\", \"apple\"], \"pear\", \"orange\");\n```\n\nThe above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-119',
    question: "📝 What's the output?\n\n```javascript\nlet count = 0;\nconst nums = [0, 1, 2, 3];\n\nnums.forEach((num) => {\n  if (num) count += 1;\n});\n\nconsole.log(count);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "1",
          "2",
          "3",
          "4"
    ],
    correctAnswer: 2,
    explanation: "The `if` condition within the `forEach` loop checks whether the value of `num` is truthy or falsy. Since the first number in the `nums` array is `0`, a falsy value, the `if` statement's code block won't be executed. `count` only gets incremented for the other 3 numbers in the `nums` array, `1`, `2` and `3`. Since `count` gets incremented by `1` 3 times, the value of `count` is `3`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-120',
    question: "📝 What's the output?\n\n```javascript\nfunction test() {\n  console.log(arguments[0]);\n  console.log(arguments.length);\n}\n\ntest('a', 'b', 'c');\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
          "a and 3",
          "a and 1",
          "undefined and 0",
          "TypeError"
    ],
    correctAnswer: 0,
    explanation: "The 'arguments' object is an array-like object available in all non-arrow functions. It contains all arguments passed to the function. arguments[0] is 'a' and arguments.length is 3.",
    tags: ["functions","arguments","parameters"],
  },

  {
    id: 'js-121',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3];\narr[10] = 99;\n\nconsole.log(arr.length);\nconsole.log(arr[5]);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "11 and undefined",
          "10 and undefined",
          "4 and undefined",
          "11 and null"
    ],
    correctAnswer: 0,
    explanation: "Setting arr[10] = 99 creates empty slots from index 3 to 9. The array length becomes 11 (highest index + 1). Accessing empty slots like arr[5] returns undefined, not the value they don't have.",
    tags: ["arrays","length","sparse-arrays"],
  },

  {
    id: 'js-122',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconst found = arr.find(n => n > 2);\nconst foundIndex = arr.findIndex(n => n > 2);\n\nconsole.log(found, foundIndex);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
          "3 and 2",
          "3 and 3",
          "[3, 4, 5] and 2",
          "true and 2"
    ],
    correctAnswer: 0,
    explanation: "find() returns the first element that satisfies the condition (3). findIndex() returns the index of that element (2). Both stop searching after finding the first match. If no match is found, find() returns undefined and findIndex() returns -1.",
    tags: ["arrays","find","findIndex","search"],
  },

  {
    id: 'js-123',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  name: \"Lydia Hallie\",\n  hobbies: [\"coding\"],\n};\n\nfunction addHobby(hobby, hobbies = person.hobbies) {\n  hobbies.push(hobby);\n  return hobbies;\n}\n\naddHobby(\"running\", []);\naddHobby(\"dancing\");\naddHobby(\"baking\", person.hobbies);\n\nconsole.log(person.hobbies);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "[\"coding\"]",
          "[\"coding\", \"dancing\"]",
          "[\"coding\", \"dancing\", \"baking\"]",
          "[\"coding\", \"running\", \"dancing\", \"baking\"]"
    ],
    correctAnswer: 2,
    explanation: "The `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object.\n\nFirst, we invoke the `addHobby` function, and pass `\"running\"` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `hobbies`, `\"running\"` gets added to this empty array.\n\nThen, we invoke the `addHobby` function, and pass `\"dancing\"` as the value for `hobby`. We didn't pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.\n\nLast, we invoke the `addHobby` function, and pass `\"baking\"` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.\n\nAfter pushing `dancing` and `baking`, the value of `person.hobbies` is `[\"coding\", \"dancing\", \"baking\"]`",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-124',
    question: "📚 What should the value of `method` be to log `{ name: \"Lydia\", age: 22 }`?\n\n```javascript\nconst keys = [\"name\", \"age\"];\nconst values = [\"Lydia\", 22];\n\nconst method =\n  /* ?? */\n  Object[method](\n    keys.map((_, i) => {\n      return [keys[i], values[i]];\n    })\n  ); // { name: \"Lydia\", age: 22 }\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "entries",
          "values",
          "fromEntries",
          "forEach"
    ],
    correctAnswer: 2,
    explanation: "The `fromEntries` method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the `keys` array, which returns an array that the first element is the item on the key array on the current index, and the second element is the item of the values array on the current index.\n\nThis creates an array of subarrays containing the correct keys and values, which results in `{ name: \"Lydia\", age: 22 }`",
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
    id: 'js-127',
    question: "🖥️ What's the output?\n\n```javascript\nfunction addToList(item, list) {\n  return list.push(item);\n}\n\nconst result = addToList(\"apple\", [\"banana\"]);\nconsole.log(result);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "['apple', 'banana']",
          "2",
          "true",
          "undefined"
    ],
    correctAnswer: 1,
    explanation: "The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `\"banana\"`) and had a length of `1`. After adding the string `\"apple\"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.\n\nThe `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-128',
    question: "📝 What's the output?\n\n```javascript\nlet newList = [1, 2, 3].push(4);\n\nconsole.log(newList.push(5));\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "[1, 2, 3, 4, 5]",
          "[1, 2, 3, 5]",
          "[1, 2, 3, 4]",
          "Error"
    ],
    correctAnswer: 3,
    explanation: "The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`.\n\nThen, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-129',
    question: "📚 Which of these methods modifies the original array?\n\n```javascript\nconst emojis = [\"✨\", \"🥑\", \"😍\"];\n\nemojis.map((x) => x + \"✨\");\nemojis.filter((x) => x !== \"🥑\");\nemojis.find((x) => x !== \"🥑\");\nemojis.reduce((acc, cur) => acc + \"✨\");\nemojis.slice(1, 2, \"✨\");\nemojis.splice(1, 2, \"✨\");\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "All of them",
          "map reduce slice splice",
          "map slice splice",
          "splice"
    ],
    correctAnswer: 3,
    explanation: "With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead.\n\n`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-130',
    question: "🖥️ What's the output?\n\n```javascript\nconst emojis = [\"🥑\", [\"✨\", \"✨\", [\"🍕\", \"🍕\"]]];\n\nconsole.log(emojis.flat(1));\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "['🥑', ['✨', '✨', ['🍕', '🍕']]]",
          "['🥑', '✨', '✨', ['🍕', '🍕']]",
          "['🥑', ['✨', '✨', '🍕', '🍕']]",
          "['🥑', '✨', '✨', '🍕', '🍕']"
    ],
    correctAnswer: 1,
    explanation: "With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-131',
    question: "🖥️ What's the output?\n\n```javascript\nconst fruit = [\"🍌\", \"🍊\", \"🍎\"];\n\nfruit.slice(0, 1);\nfruit.splice(0, 1);\nfruit.unshift(\"🍇\");\n\nconsole.log(fruit);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
          "['🍌', '🍊', '🍎']",
          "['🍊', '🍎']",
          "['🍇', '🍊', '🍎']",
          "['🍇', '🍌', '🍊', '🍎']"
    ],
    correctAnswer: 2,
    explanation: "First, we invoke the `slice` method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji.\nThen, we invoke the `splice` method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of `['🍊', '🍎']`.\nAt last, we invoke the `unshift` method on the `fruit` array, which modifies the original array by adding the provided value, ‘🍇’ in this case, as the first element in the array. The fruit array now consists of `['🍇', '🍊', '🍎']`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-132',
    question: "📝 What's the output?\n\n```javascript\nfunction sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "10",
          "1234",
          "[1, 2, 3, 4]",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "The rest parameter (...numbers) collects all arguments into an array. reduce() then sums all elements: 0+1+2+3+4 = 10. The rest parameter must be the last parameter in a function.",
    tags: ["functions","rest-parameters","reduce"],
  },

  {
    id: 'js-133',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.filter(n => n > 2).map(n => n * 2);\n\nconsole.log(result);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'easy',
    options: [
          "[6, 8, 10]",
          "[2, 4, 6, 8, 10]",
          "[3, 4, 5]",
          "[false, false, true, true, true]"
    ],
    correctAnswer: 0,
    explanation: "Method chaining: filter(n => n > 2) creates [3, 4, 5], then map(n => n * 2) doubles each value to create [6, 8, 10]. Filter creates a new array with elements that pass the test, map creates a new array with transformed elements.",
    tags: ["arrays","filter","map","chaining"],
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
    id: 'js-135',
    question: "🔢 Which of these values are falsy?\n\n```javascript\n0;\nnew Number(0);\n(\"\");\n(\" \");\nnew Boolean(false);\nundefined;\n```",
    category: 'javascript',
    subcategory: 'basics',
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
  },

  {
    id: 'js-137',
    question: "🖥️ What's the output?\n\n```javascript\nfunction Car() {\n  this.make = \"Lamborghini\";\n  return { make: \"Maserati\" };\n}\n\nconst myCar = new Car();\nconsole.log(myCar.make);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "\"Lamborghini\"",
          "\"Maserati\"",
          "ReferenceError",
          "TypeError"
    ],
    correctAnswer: 1,
    explanation: "When a constructor function is called with the `new` keyword, it creates an object and sets the `this` keyword to refer to that object. By default, if the constructor function doesn't explicitly return anything, it will return the newly created object.\n\nIn this case, the constructor function `Car` explicitly returns a new object with `make` set to `\"Maserati\"`, which overrides the default behavior. Therefore, when `new Car()` is called, the _returned_ object is assigned to `myCar`, resulting in the output being `\"Maserati\"` when `myCar.make` is accessed.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-138',
    question: "🖥️ What's the output?\n\n```javascript\nclass Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = \"green\" } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: \"purple\" });\nconsole.log(freddie.colorChange(\"orange\"));\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "orange",
          "purple",
          "green",
          "TypeError"
    ],
    correctAnswer: 3,
    explanation: "The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since `freddie` is an instance of class Chameleon, the function cannot be called upon it. A `TypeError` is thrown.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-139',
    question: "🖥️ What's the output?\n\n```javascript\nfunction Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person(\"Lydia\", \"Hallie\");\nPerson.getFullName = function () {\n  return `${this.firstName} ${this.lastName}`;\n};\n\nconsole.log(member.getFullName());\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          "TypeError",
          "SyntaxError",
          "Lydia Hallie",
          "undefined undefined"
    ],
    correctAnswer: 0,
    explanation: "In JavaScript, functions are objects, and therefore, the method `getFullName` gets added to the constructor function object itself. For that reason, we can call `Person.getFullName()`, but `member.getFullName` throws a `TypeError`.\n\nIf you want a method to be available to all object instances, you have to add it to the prototype property:\n\n```js\nPerson.prototype.getFullName = function () {\n  return `${this.firstName} ${this.lastName}`;\n};\n```",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-140',
    question: "🖥️ What's the output?\n\n```javascript\nString.prototype.giveLydiaPizza = () => {\n  return \"Just give Lydia pizza already!\";\n};\n\nconst name = \"Lydia\";\n\nconsole.log(name.giveLydiaPizza());\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
          "\"Just give Lydia pizza already!\"",
          "TypeError: not a function",
          "SyntaxError",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "`String` is a built-in constructor, that we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-141',
    question: "📝 What's the output?\n\n```javascript\nclass Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nDog.prototype.bark = function () {\n  console.log(`Woof I am ${this.name}`);\n};\n\nconst pet = new Dog(\"Mara\");\n\npet.bark();\n\ndelete Dog.prototype.bark;\n\npet.bark();\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          "\"Woof I am Mara\", TypeError",
          "\"Woof I am Mara\", \"Woof I am Mara\"",
          "\"Woof I am Mara\", undefined",
          "TypeError, TypeError"
    ],
    correctAnswer: 0,
    explanation: "We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.\n\nWhen we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-142',
    question: "🏛️ With which constructor can we successfully extend the `Dog` class?\n\n```javascript\nclass Dog {\n  constructor(name) {\n    this.name = name;\n  }\n};\n\nclass Labrador extends Dog {\n  // 1\n  constructor(name, size) {\n    this.size = size;\n  }\n  // 2\n  constructor(name, size) {\n    super(name);\n    this.size = size;\n  }\n  // 3\n  constructor(size) {\n    super(name);\n    this.size = size;\n  }\n  // 4\n  constructor(name, size) {\n    this.name = name;\n    this.size = size;\n  }\n\n};\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "1",
          "2",
          "3",
          "4"
    ],
    correctAnswer: 1,
    explanation: "In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.\n\nWith the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`.\n\nThe `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly using constructor 2.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-143',
    question: "🖥️ What's the output?\n\n```javascript\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst member = new Person(\"John\");\nconsole.log(typeof member);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "\"class\"",
          "\"function\"",
          "\"object\"",
          "\"string\""
    ],
    correctAnswer: 2,
    explanation: "Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:\n\n```javascript\nfunction Person(name) {\n  this.name = name;\n}\n```\n\nCalling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `\"object\"` for an instance. `typeof member` returns `\"object\"`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-144',
    question: "🖥️ What's the output?\n\n```javascript\nfunction giveLydiaPizza() {\n  return \"Here is pizza!\";\n}\n\nconst giveLydiaChocolate = () =>\n  \"Here's chocolate... now go hit the gym already.\";\n\nconsole.log(giveLydiaPizza.prototype);\nconsole.log(giveLydiaChocolate.prototype);\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          "{ constructor: ...} { constructor: ...}",
          "{} { constructor: ...}",
          "{ constructor: ...} {}",
          "{ constructor: ...} undefined"
    ],
    correctAnswer: 3,
    explanation: "Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-145',
    question: "🖥️ What's the output?\n\n```javascript\nclass Person {\n  constructor() {\n    this.name = \"Lydia\";\n  }\n}\n\nPerson = class AnotherPerson {\n  constructor() {\n    this.name = \"Sarah\";\n  }\n};\n\nconst member = new Person();\nconsole.log(member.name);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "\"Lydia\"",
          "\"Sarah\"",
          "Error: cannot redeclare Person",
          "SyntaxError"
    ],
    correctAnswer: 1,
    explanation: "We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `\"Sarah\"`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-146',
    question: "📝 What's the output?\n\n```javascript\nclass Counter {\n  constructor() {\n    this.count = 0;\n  }\n\n  increment() {\n    this.count++;\n  }\n}\n\nconst counterOne = new Counter();\ncounterOne.increment();\ncounterOne.increment();\n\nconst counterTwo = counterOne;\ncounterTwo.increment();\n\nconsole.log(counterOne.count);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "0",
          "1",
          "2",
          "3"
    ],
    correctAnswer: 3,
    explanation: "`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.\n\nThen, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.\n\nWe invoke `counterTwo.increment()`, which sets `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-147',
    question: "📝 What's the output?\n\n```javascript\nclass Counter {\n  #number = 10;\n\n  increment() {\n    this.#number++;\n  }\n\n  getNum() {\n    return this.#number;\n  }\n}\n\nconst counter = new Counter();\ncounter.increment();\n\nconsole.log(counter.#number);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "10",
          "11",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 3,
    explanation: "In ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot access it outside the `Counter` class!",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-148',
    question: "📝 What's the output?\n\n```javascript\nclass Bird {\n  constructor() {\n    console.log(\"I'm a bird. 🦢\");\n  }\n}\n\nclass Flamingo extends Bird {\n  constructor() {\n    console.log(\"I'm pink. 🌸\");\n    super();\n  }\n}\n\nconst pet = new Flamingo();\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "I'm pink. 🌸",
          "I'm pink. 🌸 I'm a bird. 🦢",
          "I'm a bird. 🦢 I'm pink. 🌸",
          "Nothing, we didn't call any method"
    ],
    correctAnswer: 1,
    explanation: "We create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `\"I'm pink. 🌸\"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. The constructor in `Bird` gets called, and logs `\"I'm a bird. 🦢\"`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-149',
    question: "📝 What's the output?\n\n```javascript\nclass Calc {\n  constructor() {\n    this.count = 0;\n  }\n\n  increase() {\n    this.count++;\n  }\n}\n\nconst calc = new Calc();\nnew Calc().increase();\n\nconsole.log(calc.count);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "0",
          "1",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "We set the variable `calc` equal to a new instance of the `Calc` class. Then, we instantiate a new instance of `Calc`, and invoke the `increase` method on this instance. Since the count property is within the constructor of the `Calc` class, the count property is not shared on the prototype of `Calc`. This means that the value of count has not been updated for the instance calc points to, count is still `0`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-150',
    question: "📝 What's the output?\n\n```javascript\nconst foo = () => console.log(\"First\");\nconst bar = () => setTimeout(() => console.log(\"Second\"));\nconst baz = () => console.log(\"Third\");\n\nbar();\nfoo();\nbaz();\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'medium',
    options: [
          "First Second Third",
          "First Third Second",
          "Second First Third",
          "Second Third First"
    ],
    correctAnswer: 1,
    explanation: "We have a `setTimeout` function and invoked it first. Yet, it was logged last.\n\nThis is because in browsers, we don't just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM.\n\nAfter the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack.\n\nNow, `foo` gets invoked, and `\"First\"` is being logged.\n\n`foo` is popped off the stack, and `baz` gets invoked. `\"Third\"` gets logged.\n\nThe WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the _queue_.\n\nThis is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.\n\n`bar` gets invoked, `\"Second\"` gets logged, and it's popped off the stack.",
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
  },

  {
    id: 'js-152',
    question: "🖥️ What is the output?\n\n```javascript\nvar status = \"😎\";\n\nsetTimeout(() => {\n  const status = \"😍\";\n\n  const data = {\n    status: \"🥑\",\n    getStatus() {\n      return this.status;\n    },\n  };\n\n  console.log(data.getStatus());\n  console.log(data.getStatus.call(this));\n}, 0);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "\"🥑\" and \"😍\"",
          "\"🥑\" and \"😎\"",
          "\"😍\" and \"😎\"",
          "\"😎\" and \"😎\""
    ],
    correctAnswer: 1,
    explanation: "The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `\"🥑\"`.\n\nWith the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `\"😎\"`. When logging `this.status`, `\"😎\"` gets logged.",
    tags: ["javascript","quiz"],
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
    id: 'js-161',
    question: "✅ Which one is true?\n\n```javascript\nconst bird = {\n  size: \"small\",\n};\n\nconst mouse = {\n  name: \"Mickey\",\n  small: true,\n};\n```",
    category: 'javascript',
    subcategory: 'basics',
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
    id: 'js-162',
    question: "🖥️ What's the output?\n\n```javascript\nconst obj = { 1: \"a\", 2: \"b\", 3: \"c\" };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty(\"1\");\nobj.hasOwnProperty(1);\nset.has(\"1\");\nset.has(1);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "false true false true",
          "false true true true",
          "true true false true",
          "true true true true"
    ],
    correctAnswer: 2,
    explanation: "All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.\n\nIt doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-163',
    question: "📝 What's the output?\n\n```javascript\nfunction sayHi() {\n  return (() => 0)();\n}\n\nconsole.log(typeof sayHi());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "\"object\"",
          "\"number\"",
          "\"function\"",
          "\"undefined\""
    ],
    correctAnswer: 1,
    explanation: "The `sayHi` function returns the returned value of the immediately invoked function expression (IIFE). This function returned `0`, which is type `\"number\"`.\nFYI: `typeof` can return the following list of values: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` and `object`. Note that `typeof null` returns `\"object\"`.",
    tags: ["javascript","quiz"],
  },

  {
    id: 'js-164',
    question: "📤 Everything in JavaScript is either a...",
    category: 'javascript',
    subcategory: 'basics',
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
  },

  {
    id: 'js-167',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(Number(2) === Number(2));\nconsole.log(Boolean(false) === Boolean(false));\nconsole.log(Symbol(\"foo\") === Symbol(\"foo\"));\n```",
    category: 'javascript',
    subcategory: 'symbols',
    difficulty: 'medium',
    options: [
          "true, true, false",
          "false, true, false",
          "true, false, true",
          "true, true, true"
    ],
    correctAnswer: 0,
    explanation: "Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`.",
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
    id: 'js-169',
    question: "🖥️ What's the output?\n\n```javascript\nconst info = {\n  [Symbol(\"a\")]: \"b\",\n};\n\nconsole.log(info);\nconsole.log(Object.keys(info));\n```",
    category: 'javascript',
    subcategory: 'symbols',
    difficulty: 'medium',
    options: [
          "{Symbol('a'): 'b'} and [\"{Symbol('a')\"]",
          "{} and []",
          "{ a: \"b\" } and [\"a\"]",
          "{Symbol('a'): 'b'} and []"
    ],
    correctAnswer: 3,
    explanation: "A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.\n\nThis is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also \"hide\" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).",
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
    id: 'js-171',
    question: "📝 What's the output?\n\n```javascript\nconst handler = {\n  set: () => console.log(\"Added a new property!\"),\n  get: () => console.log(\"Accessed a property!\"),\n};\n\nconst person = new Proxy({}, handler);\n\nperson.name = \"Lydia\";\nperson.name;\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
          "Added a new property!",
          "Accessed a property!",
          "Added a new property! Accessed a property!",
          "Nothing gets logged"
    ],
    correctAnswer: 2,
    explanation: "With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In this case, we pass the `handler` object which contains two properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, and `get` gets invoked whenever we _get_ (access) property values.\n\nThe first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.\n\nFirst, we added a new property `name` to the proxy object (`person.name = \"Lydia\"`). `set` gets invoked, and logs `\"Added a new property!\"`.\n\nThen, we access a property value on the proxy object, and the `get` property on the handler object is invoked. `\"Accessed a property!\"` gets logged.",
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
    id: 'js-174',
    question: "📝 What's the output?\n\n```javascript\nconst double = n => n * 2;\nconst square = n => n * n;\nconst compose = (f, g) => x => f(g(x));\n\nconst doubleThenSquare = compose(square, double);\nconsole.log(doubleThenSquare(3));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'hard',
    options: [
          "36",
          "18",
          "12",
          "9"
    ],
    correctAnswer: 0,
    explanation: "Function composition applies functions from right to left. doubleThenSquare(3) first doubles 3 (= 6), then squares the result (6 * 6 = 36). Compose is a higher-order function that returns a new function.",
    tags: ["functions","composition","higher-order","functional-programming"],
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
  },

  // New questions for missing concepts (WeakMap/WeakSet, Nullish Coalescing, Array methods, Closures, etc.)
  {
    id: 'js-176',
    question: "🗺️ What's the difference between WeakMap and Map?\n\n```javascript\nconst map = new Map();\nconst weakMap = new WeakMap();\n\nlet obj = { name: 'John' };\nmap.set(obj, 'value1');\nweakMap.set(obj, 'value2');\n\nobj = null;\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'hard',
    options: [
      'They are the same',
      'WeakMap keys must be objects and are garbage collected',
      'WeakMap can only store numbers',
      'Map is faster than WeakMap',
    ],
    correctAnswer: 1,
    explanation: "WeakMap keys must be objects (not primitives) and are weakly held. When the object used as a key is garbage collected, the WeakMap entry is automatically removed. This prevents memory leaks. Map holds strong references, so setting `obj = null` doesn't remove it from the Map.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-177',
    question: "📝 What's the output?\n\n```javascript\nconst ws = new WeakSet();\nconst obj1 = {};\nconst obj2 = {};\n\nws.add(obj1);\nws.add(obj2);\nws.add(obj1);\n\nconsole.log(ws.has(obj1));\nconsole.log(ws.size);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'hard',
    options: [
      'true and 2',
      'true and undefined',
      'false and 2',
      'true and 3',
    ],
    correctAnswer: 1,
    explanation: "WeakSet only accepts objects and doesn't have duplicates. `ws.has(obj1)` returns `true`. However, WeakSet doesn't have a `size` property because the objects are weakly referenced and can be garbage collected at any time, making the size unpredictable. Accessing `size` returns `undefined`.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-178',
    question: "📝 What's the output?\n\n```javascript\nconst foo = null ?? 'default';\nconst bar = 0 ?? 'default';\nconst baz = '' ?? 'default';\n\nconsole.log(foo, bar, baz);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
      'default default default',
      'default 0 empty-string',
      'null 0 empty-string',
      'default default empty-string',
    ],
    correctAnswer: 1,
    explanation: "The nullish coalescing operator (??) returns the right operand only when the left operand is `null` or `undefined`. Unlike ||, it doesn't treat 0, '', false as falsy values. So `null ?? 'default'` returns 'default', but `0 ?? 'default'` returns 0, and `'' ?? 'default'` returns ''.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-179',
    question: "📝 What's the difference between ?? and ||?\n\n```javascript\nconst a = 0 || 'fallback';\nconst b = 0 ?? 'fallback';\n\nconsole.log(a);\nconsole.log(b);\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
      'fallback and fallback',
      'fallback and 0',
      '0 and fallback',
      '0 and 0',
    ],
    correctAnswer: 1,
    explanation: "The || operator returns the right operand for any falsy value (0, '', false, null, undefined, NaN). The ?? operator only returns the right operand for null or undefined. Since 0 is falsy but not nullish, `0 || 'fallback'` returns 'fallback', while `0 ?? 'fallback'` returns 0.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-180',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\n\nconsole.log(numbers.some(n => n > 3));\nconsole.log(numbers.every(n => n > 0));\nconsole.log(numbers.every(n => n > 3));\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'easy',
    options: [
      'true true true',
      'true true false',
      'false true false',
      'true false false',
    ],
    correctAnswer: 1,
    explanation: "`some()` returns true if at least one element passes the test (4 and 5 are > 3). `every()` returns true only if ALL elements pass the test. All numbers are > 0, so second returns true. But not all are > 3, so third returns false.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-181',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, [2, [3, [4]]]];\n\nconsole.log(arr.flat());\nconsole.log(arr.flat(2));\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
      '[1, 2, 3, 4] and [1, 2, 3, 4]',
      '[1, 2, [3, [4]]] and [1, 2, 3, [4]]',
      '[1, 2, 3, [4]] and [1, 2, 3, 4]',
      'Error',
    ],
    correctAnswer: 1,
    explanation: "`flat()` with no argument flattens 1 level deep by default, giving `[1, 2, [3, [4]]]`. `flat(2)` flattens 2 levels deep, giving `[1, 2, 3, [4]]`. To flatten all levels, use `flat(Infinity)`.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-182',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(Array.isArray([]));\nconsole.log(Array.isArray({}));\nconsole.log(typeof []);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'easy',
    options: [
      'true false array',
      'true false object',
      'false false object',
      'true true object',
    ],
    correctAnswer: 1,
    explanation: "`Array.isArray([])` returns true because [] is an array. `Array.isArray({})` returns false because {} is an object. `typeof []` returns 'object' because arrays are objects in JavaScript. This is why `Array.isArray()` is needed to properly check for arrays.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-183',
    question: "📝 What's the output?\n\n```javascript\nconst str = 'hello';\nconst arr = Array.from(str);\nconst arr2 = Array.from([1, 2, 3], x => x * 2);\n\nconsole.log(arr);\nconsole.log(arr2);\n```",
    category: 'javascript',
    subcategory: 'arrays',
    difficulty: 'medium',
    options: [
      "['hello'] and [1, 2, 3]",
      "['h', 'e', 'l', 'l', 'o'] and [2, 4, 6]",
      "['hello'] and [2, 4, 6]",
      "Error",
    ],
    correctAnswer: 1,
    explanation: "`Array.from()` creates a new array from an array-like or iterable object. It converts the string 'hello' into `['h', 'e', 'l', 'l', 'o']`. The second parameter is a map function, so `Array.from([1, 2, 3], x => x * 2)` returns `[2, 4, 6]`.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-184',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\n\nconsole.log(arr.includes(3));\nconsole.log(arr.includes(6));\nconsole.log(arr.includes(3, 3));\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'easy',
    options: [
      'true false true',
      'true false false',
      'true true false',
      'false false false',
    ],
    correctAnswer: 1,
    explanation: "`includes()` checks if an array contains a value. `arr.includes(3)` is true. `arr.includes(6)` is false. The second parameter is the starting index. `arr.includes(3, 3)` starts searching from index 3, so it doesn't find 3 (which is at index 2), returning false.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-185',
    question: "📝 What's the output?\n\n```javascript\nconst str = 'hello';\n\nconsole.log(str.startsWith('hel'));\nconsole.log(str.endsWith('lo'));\nconsole.log(str.startsWith('llo', 2));\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'easy',
    options: [
      'true true true',
      'true true false',
      'true false true',
      'false true true',
    ],
    correctAnswer: 0,
    explanation: "`startsWith('hel')` checks if the string starts with 'hel', which is true. `endsWith('lo')` checks if it ends with 'lo', which is true. `startsWith('llo', 2)` checks if the string starting from index 2 ('llo') starts with 'llo', which is also true.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-186',
    question: "📝 What's the output?\n\n```javascript\nconst str = '  hello  ';\n\nconsole.log(str.trim());\nconsole.log(str.trimStart());\nconsole.log(str.trimEnd());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
      "'hello' 'hello  ' '  hello'",
      "'hello' 'hello' 'hello'",
      "'  hello  ' '  hello  ' '  hello  '",
      "'hello' '  hello' 'hello  '",
    ],
    correctAnswer: 0,
    explanation: "`trim()` removes whitespace from both ends, returning 'hello'. `trimStart()` (or `trimLeft()`) removes whitespace only from the start, returning 'hello  '. `trimEnd()` (or `trimRight()`) removes whitespace only from the end, returning '  hello'.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-187',
    question: "📝 What's the output?\n\n```javascript\nconst str = 'ha';\n\nconsole.log(str.repeat(3));\nconsole.log(str.repeat(0));\nconsole.log(str.repeat(1));\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'easy',
    options: [
      "'hahaha' '' 'ha'",
      "'ha ha ha' 'ha' 'ha'",
      "'hahaha' 'ha' 'ha'",
      "Error",
    ],
    correctAnswer: 0,
    explanation: "`repeat(n)` returns a new string with n copies of the original string. `'ha'.repeat(3)` returns 'hahaha'. `repeat(0)` returns an empty string ''. `repeat(1)` returns 'ha' (the original string once).",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-188',
    question: "📝 What's the output?\n\n```javascript\nconst num = 5;\n\nconsole.log(num.toString().padStart(3, '0'));\nconsole.log('Hello'.padEnd(10, '!'));\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
      "'005' 'Hello!!!!!'",
      "'500' 'Hello!!!!!'",
      "'005' 'Hello!'",
      "'5' 'Hello'",
    ],
    correctAnswer: 0,
    explanation: "`padStart(length, fillString)` pads the string from the start until it reaches the specified length. '5'.padStart(3, '0') returns '005'. `padEnd(length, fillString)` pads from the end. 'Hello'.padEnd(10, '!') returns 'Hello!!!!!' (5 exclamation marks to reach length 10).",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-189',
    question: "📝 What's the output?\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter1 = createCounter();\nconst counter2 = createCounter();\n\nconsole.log(counter1());\nconsole.log(counter1());\nconsole.log(counter2());\n```",
    category: 'javascript',
    subcategory: 'basics',
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
  },

  {
    id: 'js-190',
    question: "📝 What will be logged?\n\n```javascript\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'hard',
    options: [
      '0 1 2 then 0 1 2',
      '3 3 3 then 0 1 2',
      '0 1 2 then 3 3 3',
      '3 3 3 then 3 3 3',
    ],
    correctAnswer: 1,
    explanation: "With `var`, there's only one `i` variable shared across all iterations. By the time the timeouts execute, the loop has finished and `i` is 3, so it logs '3 3 3'. With `let`, each iteration creates a new block-scoped `j`, so each timeout has its own closure over that iteration's value, logging '0 1 2'.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-191',
    question: "📝 What's the output?\n\n```javascript\nconst user = {\n  name: 'John',\n  address: {\n    street: 'Main St'\n  }\n};\n\nconsole.log(user.address?.street);\nconsole.log(user.phone?.number);\nconsole.log(user.getInfo?.());\n```",
    category: 'javascript',
    subcategory: 'basics',
    difficulty: 'medium',
    options: [
      "'Main St' undefined undefined",
      "'Main St' null null",
      "'Main St' Error Error",
      "Error",
    ],
    correctAnswer: 0,
    explanation: "Optional chaining (?.) safely accesses nested properties. `user.address?.street` returns 'Main St'. `user.phone?.number` returns undefined (not an error) because phone doesn't exist. `user.getInfo?.()` returns undefined because getInfo doesn't exist, avoiding a 'not a function' error.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-192',
    question: "📝 What's the output?\n\n```javascript\nconst person = {\n  greet() {\n    return 'Hello';\n  }\n};\n\nconst john = Object.create(person);\njohn.name = 'John';\n\nconsole.log(john.name);\nconsole.log(john.greet());\nconsole.log(john.hasOwnProperty('greet'));\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
      "'John' 'Hello' true",
      "'John' 'Hello' false",
      "'John' undefined false",
      "Error",
    ],
    correctAnswer: 1,
    explanation: "`Object.create(person)` creates a new object with `person` as its prototype. `john.name` is 'John' (own property). `john.greet()` returns 'Hello' (inherited from prototype). `hasOwnProperty('greet')` returns false because `greet` is on the prototype, not john's own property.",
    tags: ['javascript', 'quiz'],
  },

  // Additional iterators questions
  {
    id: 'js-193',
    question: "📝 What's the output?\n\n```javascript\nconst obj = {\n  [Symbol.iterator]() {\n    let count = 0;\n    return {\n      next() {\n        count++;\n        if (count <= 3) {\n          return { value: count, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n};\n\nconsole.log([...obj]);\n```",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'hard',
    options: [
      "[1, 2, 3]",
      "[0, 1, 2]",
      "Error",
      "[]",
    ],
    correctAnswer: 0,
    explanation: "By implementing `Symbol.iterator`, we make the object iterable. The spread operator `...` uses the iterator protocol, calling `next()` until `done` is true. The iterator returns values 1, 2, 3, resulting in the array `[1, 2, 3]`.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-194',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [10, 20, 30];\nconst iterator = arr[Symbol.iterator]();\n\nconsole.log(iterator.next().value);\nconsole.log(iterator.next().value);\nconsole.log(iterator.next());\n```",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'medium',
    options: [
      "10 20 {value: 30, done: false}",
      "10 20 {value: 30, done: true}",
      "10 20 30",
      "10 20 {value: undefined, done: true}",
    ],
    correctAnswer: 0,
    explanation: "Arrays have a built-in iterator. Calling `next()` returns an object with `value` and `done`. The first two calls return 10 and 20. The third call returns `{value: 30, done: false}` because there's still one value left. It's not done until we call next() again after the last element.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-195',
    question: "📦 What makes an object iterable in JavaScript?",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'medium',
    options: [
      "Having a length property",
      "Implementing the Symbol.iterator method",
      "Being an instance of Array",
      "Having numeric keys",
    ],
    correctAnswer: 1,
    explanation: "An object is iterable if it implements the `Symbol.iterator` method that returns an iterator object. The iterator must have a `next()` method that returns objects with `value` and `done` properties. Arrays, strings, Maps, and Sets are built-in iterables.",
    tags: ['javascript', 'quiz'],
  },

  // Additional event-loop questions
  {
    id: 'js-196',
    question: "📝 What's the output?\n\n```javascript\nconsole.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nPromise.resolve().then(() => console.log('3'));\n\nconsole.log('4');\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'hard',
    options: [
      "1 4 2 3",
      "1 4 3 2",
      "1 2 3 4",
      "1 3 4 2",
    ],
    correctAnswer: 1,
    explanation: "Synchronous code runs first: '1' and '4'. Then microtasks (Promises) run before macrotasks (setTimeout). Promise callbacks go in the microtask queue, setTimeout goes in the macrotask queue. So the order is: 1, 4, 3 (microtask), 2 (macrotask).",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-197',
    question: "📝 What's the order of execution?\n\n```javascript\nsetTimeout(() => console.log('A'), 0);\n\nPromise.resolve()\n  .then(() => console.log('B'))\n  .then(() => console.log('C'));\n\nsetTimeout(() => console.log('D'), 0);\n\nconsole.log('E');\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'hard',
    options: [
      "E B C A D",
      "A B C D E",
      "E A D B C",
      "E A B C D",
    ],
    correctAnswer: 0,
    explanation: "Execution order: 1) Synchronous code runs first ('E'). 2) Microtasks (Promise callbacks) run next ('B', then 'C'). 3) Macrotasks (setTimeout callbacks) run last ('A', then 'D'). The event loop prioritizes microtasks over macrotasks.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-198',
    question: "📝 What happens when you have nested setTimeout calls?\n\n```javascript\nsetTimeout(() => {\n  console.log('1');\n  setTimeout(() => console.log('2'), 0);\n}, 0);\n\nsetTimeout(() => console.log('3'), 0);\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'medium',
    options: [
      "1 2 3",
      "1 3 2",
      "3 1 2",
      "Order is unpredictable",
    ],
    correctAnswer: 1,
    explanation: "The first two setTimeout callbacks are added to the macrotask queue together. '1' executes first, logging '1'. Then '3' executes (from the second setTimeout). Finally, the nested setTimeout callback (logging '2') is added to the queue and executes last.",
    tags: ['javascript', 'quiz'],
  },

  // Additional symbols questions
  {
    id: 'js-199',
    question: "📝 What's the output?\n\n```javascript\nconst sym1 = Symbol('foo');\nconst sym2 = Symbol('foo');\n\nconsole.log(sym1 === sym2);\nconsole.log(Symbol.for('bar') === Symbol.for('bar'));\n```",
    category: 'javascript',
    subcategory: 'symbols',
    difficulty: 'medium',
    options: [
      "true true",
      "false true",
      "true false",
      "false false",
    ],
    correctAnswer: 1,
    explanation: "Each `Symbol()` call creates a unique symbol, even with the same description, so `sym1 !== sym2`. However, `Symbol.for()` creates/retrieves symbols from a global registry, so calling `Symbol.for('bar')` twice returns the same symbol.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-200',
    question: "📝 What's the output?\n\n```javascript\nconst id = Symbol('id');\nconst obj = {\n  [id]: 123,\n  name: 'John'\n};\n\nconsole.log(Object.keys(obj));\nconsole.log(obj[id]);\n```",
    category: 'javascript',
    subcategory: 'symbols',
    difficulty: 'medium',
    options: [
      "['Symbol(id)', 'name'] 123",
      "['name'] 123",
      "['id', 'name'] 123",
      "['name'] undefined",
    ],
    correctAnswer: 1,
    explanation: "Symbol properties are not enumerated by `Object.keys()`, `for...in`, or `JSON.stringify()`. Only 'name' appears in the keys. However, the symbol property still exists and can be accessed directly using `obj[id]`, which returns 123.",
    tags: ['javascript', 'quiz'],
  },

  // Additional proxy-reflect questions
  {
    id: 'js-201',
    question: "📝 What's the output?\n\n```javascript\nconst target = { name: 'John' };\nconst handler = {\n  get(target, prop) {\n    return prop in target ? target[prop] : 'Not found';\n  }\n};\n\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.name);\nconsole.log(proxy.age);\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
      "'John' undefined",
      "'John' 'Not found'",
      "Error",
      "'John' null",
    ],
    correctAnswer: 1,
    explanation: "The Proxy intercepts property access. The `get` trap checks if the property exists in the target. `proxy.name` returns 'John' from the target. `proxy.age` doesn't exist in the target, so the trap returns 'Not found'.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-202',
    question: "❌ What happens here?\n\n```javascript\nconst obj = { count: 0 };\nconst handler = {\n  set(target, prop, value) {\n    if (prop === 'count' && typeof value !== 'number') {\n      throw new TypeError('Count must be a number');\n    }\n    target[prop] = value;\n    return true;\n  }\n};\n\nconst proxy = new Proxy(obj, handler);\nproxy.count = '5';\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
      "Sets count to '5'",
      "Sets count to 5",
      "Throws TypeError",
      "Returns false",
    ],
    correctAnswer: 2,
    explanation: "The Proxy's `set` trap validates the value before setting. When we try to set `count` to '5' (a string), the trap checks if it's a number. Since it's not, it throws a TypeError. Proxies allow you to add validation and custom behavior to property setting.",
    tags: ['javascript', 'quiz'],
  },

  // Additional modules questions
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
  },

  // Additional this questions
  {
    id: 'js-205',
    question: "📝 What's the output?\n\n```javascript\nconst obj = {\n  name: 'Object',\n  getName: function() { return this.name; },\n  getNameArrow: () => this.name\n};\n\nconsole.log(obj.getName());\nconsole.log(obj.getNameArrow());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
      "'Object' 'Object'",
      "'Object' undefined",
      "undefined undefined",
      "'Object' 'Window'",
    ],
    correctAnswer: 1,
    explanation: "Regular functions have their own `this` context. When called as `obj.getName()`, `this` refers to `obj`, so it returns 'Object'. Arrow functions don't have their own `this`; they inherit it from the enclosing scope. `getNameArrow` inherits `this` from the global scope, where `name` is undefined.",
    tags: ['javascript', 'quiz'],
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
  },

  // Additional prototypes questions
  {
    id: 'js-207',
    question: "📝 What's the output?\n\n```javascript\nfunction Animal(name) {\n  this.name = name;\n}\n\nAnimal.prototype.speak = function() {\n  return `${this.name} makes a sound`;\n};\n\nconst dog = new Animal('Dog');\nconsole.log(dog.speak());\nconsole.log(dog.hasOwnProperty('speak'));\nconsole.log(dog.hasOwnProperty('name'));\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
      "'Dog makes a sound' true true",
      "'Dog makes a sound' false true",
      "'Dog makes a sound' true false",
      "Error",
    ],
    correctAnswer: 1,
    explanation: "`speak()` works because it's found on the prototype chain. `hasOwnProperty('speak')` returns false because `speak` is on the prototype, not directly on `dog`. `hasOwnProperty('name')` returns true because `name` is set directly on the instance by the constructor.",
    tags: ['javascript', 'quiz'],
  },

  {
    id: 'js-208',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3];\nconsole.log(arr.__proto__ === Array.prototype);\nconsole.log(Array.prototype.__proto__ === Object.prototype);\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
      "true true",
      "true false",
      "false true",
      "false false",
    ],
    correctAnswer: 0,
    explanation: "Arrays inherit from `Array.prototype`, so `arr.__proto__ === Array.prototype` is true. `Array.prototype` itself is an object that inherits from `Object.prototype`, so the second comparison is also true. This is the prototype chain: arr → Array.prototype → Object.prototype → null.",
    tags: ['javascript', 'quiz'],
  },

];
