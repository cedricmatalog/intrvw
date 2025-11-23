import { QuizQuestion } from '../../types/quiz';

export const arraysQuizzes: QuizQuestion[] = [
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
  }
];
