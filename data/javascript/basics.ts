import { QuizQuestion } from '../../types/quiz';

export const basicsQuizzes: QuizQuestion[] = [
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
  }
];
