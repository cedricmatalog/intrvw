import { QuizQuestion } from '../../types/quiz';

export const functionsQuizzes: QuizQuestion[] = [
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
  }
];
