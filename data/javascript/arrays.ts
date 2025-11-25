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
    explanation: "**Compound assignment inside array access** - the operation happens first, then the result is used as the index!\n\n**Step-by-step:**\n```javascript\nlet num = 1;\nconst list = [\"🥳\", \"🤠\", \"🥰\", \"🤪\"];\n\nconsole.log(list[(num += 1)]);\n```\n\n**What happens:**\n```\n1. Evaluate (num += 1)\n   num = 1\n   num += 1  →  num = num + 1  →  num = 2\n   ↓\n2. Use result as index\n   list[2]\n   ↓\n3. Get element at index 2\n   list[2] = \"🥰\"\n   ↓\n4. Output: 🥰\n```\n\n**Key insight: += is an expression that returns the new value**\n```javascript\nlet x = 5;\nconsole.log(x += 3);  // 8 (returns the new value)\nconsole.log(x);       // 8 (variable is now 8)\n\n// Same as:\nlet x = 5;\nx = x + 3;            // Assignment returns 8\nconsole.log(x);       // 8\n```\n\n**Using it in array access:**\n```javascript\nlet i = 0;\nconst arr = ['a', 'b', 'c'];\n\n// These are equivalent:\nconsole.log(arr[(i += 1)]);  // 'b' (i becomes 1, access arr[1])\n\ni = 0;  // Reset\ni = i + 1;\nconsole.log(arr[i]);  // 'b'\n```\n\n**Real-world example:**\n```javascript\nconst scores = [10, 20, 30, 40];\nlet index = 0;\n\n// Get next score\nconsole.log(scores[(index += 1)]);  // 20 (index is now 1)\nconsole.log(scores[(index += 1)]);  // 30 (index is now 2)\nconsole.log(scores[(index += 1)]);  // 40 (index is now 3)\n```\n\n**Memory trick:** Compound operators in brackets = calculate first, then use result as index.",
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
    explanation: "**for...in vs for...of** - two loops, totally different purposes! Like asking \"which floors?\" vs \"what's inside?\"\n\n**Think of an array as a building:**\n- for...in = Floor numbers (indexes: 0, 1, 2, 3)\n- for...of = What's on each floor (values: ☕, 💻, 🍷, 🍫)\n\n**Step-by-step execution:**\n\n**for...in loop (iterates over KEYS/INDEXES):**\n```javascript\nfor (let item in myLifeSummedUp) {\n  console.log(item);\n}\n// Logs: 0, 1, 2, 3 (the indexes!)\n```\n\n**Why?** Arrays are objects under the hood:\n```javascript\n// Array is internally like:\n{\n  0: \"☕\",\n  1: \"💻\",\n  2: \"🍷\",\n  3: \"🍫\",\n  length: 4\n}\n// for...in iterates over enumerable properties (the keys)\n```\n\n**for...of loop (iterates over VALUES):**\n```javascript\nfor (let item of myLifeSummedUp) {\n  console.log(item);\n}\n// Logs: ☕, 💻, 🍷, 🍫 (the values!)\n```\n\n**Why?** for...of uses the array's iterator protocol, giving you values directly.\n\n**Visual comparison:**\n```javascript\nconst arr = ['a', 'b', 'c'];\n\n// for...in = asking for keys\nfor (let key in arr) {\n  console.log(key);        // Logs: 0, 1, 2\n  console.log(arr[key]);   // Logs: 'a', 'b', 'c'\n}\n\n// for...of = getting values directly\nfor (let value of arr) {\n  console.log(value);      // Logs: 'a', 'b', 'c'\n}\n```\n\n**Real-world usage:**\n```javascript\nconst users = ['Alice', 'Bob', 'Charlie'];\n\n// ❌ for...in with arrays (usually wrong!)\nfor (let i in users) {\n  console.log(`User ${i}`);  // User 0, User 1, User 2 (indexes)\n}\n\n// ✅ for...of with arrays (correct!)\nfor (let user of users) {\n  console.log(`User ${user}`);  // User Alice, User Bob, User Charlie\n}\n\n// ✅ for...in with objects (correct!)\nconst person = { name: 'Alice', age: 25 };\nfor (let key in person) {\n  console.log(key);  // 'name', 'age'\n}\n```\n\n**When to use each:**\n\n**Use for...in:**\n- ✅ Iterating over object keys/properties\n- ❌ Avoid with arrays (iterates over indexes, not values)\n\n**Use for...of:**\n- ✅ Iterating over array values\n- ✅ Iterating over strings, Maps, Sets\n- ❌ Cannot use with plain objects (not iterable)\n\n**Common gotcha with for...in:**\n```javascript\nconst arr = ['a', 'b', 'c'];\narr.custom = 'extra';\n\n// for...in includes custom properties!\nfor (let key in arr) {\n  console.log(key);  // 0, 1, 2, custom (includes non-index properties!)\n}\n\n// for...of only iterates values\nfor (let val of arr) {\n  console.log(val);  // a, b, c (ignores custom property)\n}\n```\n\n**Memory trick:**\n- for...IN = **IN**dexes/keys (\"which box?\")\n- for...OF = values **OF** array (\"what's inside?\")\n- Arrays: Use for...of for values, avoid for...in\n- Objects: Use for...in for keys",
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
    explanation: "**const with arrays = can't reassign, but CAN mutate!** Like a locked box you can still put things in.\n\n**Think of const like a locked pointer:**\n- The pointer is locked (can't reassign to new array)\n- But what it points to can still change (can modify array contents)\n\n**What happens with each operation:**\n\n**/* 1 */ emojis.push(\"🦌\") ✅ Works!**\n```javascript\nconst emojis = [\"🎄\", \"🎅🏼\", \"🎁\", \"⭐\"];\nemojis.push(\"🦌\");  // ✅ Modifying contents is allowed\n// emojis is now [\"🎄\", \"🎅🏼\", \"🎁\", \"⭐\", \"🦌\"]\n```\n\n**/* 2 */ emojis.splice(0, 2) ✅ Works!**\n```javascript\nemojis.splice(0, 2);  // ✅ Removing elements is allowed\n// emojis is now [\"🎁\", \"⭐\", \"🦌\"]\n```\n\n**/* 3 */ emojis = [...emojis, \"🥂\"] ❌ Error!**\n```javascript\nemojis = [...emojis, \"🥂\"];  // ❌ TypeError: Assignment to constant variable\n// You're trying to REASSIGN the entire variable!\n```\n\n**/* 4 */ emojis.length = 0 ✅ Works!**\n```javascript\nemojis.length = 0;  // ✅ Modifying length property is allowed\n// emojis is now []\n```\n\n**The rule: const prevents reassignment, not mutation**\n\n```javascript\nconst arr = [1, 2, 3];\n\n// ✅ All these MODIFY the array (allowed):\narr.push(4);           // [1, 2, 3, 4]\narr.pop();             // [1, 2, 3]\narr[0] = 99;           // [99, 2, 3]\narr.splice(1, 1);      // [99, 3]\narr.length = 0;        // []\narr.sort();            // Modifies in place\narr.reverse();         // Modifies in place\n\n// ❌ These REASSIGN the variable (not allowed):\narr = [4, 5, 6];       // Error!\narr = [...arr, 4];     // Error!\narr = arr.concat(4);   // Error!\n```\n\n**Visual explanation:**\n```javascript\n// Memory visualization:\nconst emojis = [\"🎄\", \"🎅🏼\"];  // emojis → [Memory Address: 0x123]\n\n// Mutation (changing what's at 0x123) ✅\nemojis.push(\"🎁\");              // emojis → [Memory Address: 0x123]\n                                 // Still pointing to same address!\n\n// Reassignment (pointing to new address) ❌\nemojis = [\"🎄\", \"🎅🏼\", \"🎁\"];  // Error! Can't change pointer\n                                 // Trying to point to new address: 0x456\n```\n\n**Real-world analogy:**\n```javascript\n// const = House address is fixed\nconst myHouse = { rooms: 3, color: 'blue' };\n\n// ✅ Can renovate house (mutation)\nmyHouse.rooms = 4;       // Change rooms\nmyHouse.color = 'red';   // Repaint\n\n// ❌ Can't move to new house (reassignment)\nmyHouse = { rooms: 5 };  // Error! Address is constant\n```\n\n**How to make array immutable:**\n```javascript\n// Option 1: Object.freeze() (shallow freeze)\nconst arr = Object.freeze([1, 2, 3]);\narr.push(4);    // TypeError in strict mode, silently fails otherwise\narr[0] = 99;    // TypeError in strict mode, silently fails otherwise\n\n// Option 2: Create new arrays instead\nconst original = [1, 2, 3];\nconst added = [...original, 4];     // New array [1, 2, 3, 4]\nconst removed = original.slice(1);  // New array [2, 3]\n```\n\n**Common gotcha - nested objects:**\n```javascript\nconst arr = [{ name: 'Alice' }];\n\n// ✅ Can mutate nested objects!\narr[0].name = 'Bob';     // Works! (nested mutation)\narr.push({ name: 'Charlie' });  // Works! (array mutation)\n\n// ❌ Can't reassign array itself\narr = [];  // Error!\n```\n\n**Interview question pattern:**\n```javascript\nconst items = [1, 2, 3];\n\n// Which throws error?\nitems.push(4);        // ✅ Works\nitems[0] = 0;         // ✅ Works\nitems = items.map(x => x * 2);  // ❌ Error! (reassignment)\n\n// Correct way to \"reassign\":\nconst doubled = items.map(x => x * 2);  // New variable\n```\n\n**Memory trick:**\n- const = **CONSTANT POINTER**, not constant value\n- Can change the house, can't change the address\n- Mutation = ✅ (push, pop, splice, length = 0)\n- Reassignment = ❌ (= operator on the variable itself)",
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
    explanation: "**Arrays are reference types** - assignment copies the pointer, not the array!\n\n**Think of it like a shared document:**\n- arr1 = Link to document\n- arr2 = arr1 = Copy of the same link\n- Both links point to the same document!\n\n**What happens:**\n```javascript\nconst arr1 = [1, 2, 3];     // arr1 → [Memory: 0x123]\nconst arr2 = arr1;          // arr2 → [Memory: 0x123] (same address!)\narr2.push(4);               // Modifies memory at 0x123\n\nconsole.log(arr1.length);   // 4 (both see the change!)\nconsole.log(arr2.length);   // 4\n```\n\n**Visual representation:**\n```\nMemory:\n0x123: [1, 2, 3, 4]\n       ↑       ↑\n     arr1    arr2  (both point here)\n```\n\n**How to actually copy:**\n```javascript\n// ✅ Spread operator (shallow copy)\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1];\narr2.push(4);\nconsole.log(arr1);  // [1, 2, 3] (unchanged)\nconsole.log(arr2);  // [1, 2, 3, 4]\n\n// ✅ slice() (shallow copy)\nconst arr3 = arr1.slice();\n\n// ✅ Array.from() (shallow copy)\nconst arr4 = Array.from(arr1);\n\n// ✅ concat() (shallow copy)\nconst arr5 = arr1.concat();\n```\n\n**Common gotcha with nested arrays:**\n```javascript\nconst original = [[1, 2], [3, 4]];\nconst copy = [...original];  // Shallow copy!\n\ncopy[0].push(99);\nconsole.log(original);  // [[1, 2, 99], [3, 4]] - Changed!\n// Inner arrays are still shared!\n```\n\n**Memory trick:** arr2 = arr1 copies the address, not the house. Both variables have keys to the same house!",
    tags: ["arrays","reference","mutation"],
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
    explanation: "**Optional chaining with nested arrays** - safely access deep properties without errors!\n\n**What `?.` does:**\n- If value exists → continue accessing\n- If value is null/undefined → return undefined (no error!)\n\n**Breaking down `fruits?.[1]?.[1]`:**\n```javascript\nfruits?.[1]?.[1]\n   ↓      ↓    ↓\n   1      2    3\n```\n1. Check if `fruits` exists, get `fruits[1]`\n2. Check if that exists, get `[1]` from it  \n3. Return the result\n\n**Call 1: getFruit([[\"🍊\", \"🍌\"], [\"🍍\"]])**\n```javascript\nfruits = [[\"🍊\", \"🍌\"], [\"🍍\"]]\nfruits[1] = [\"🍍\"]         // ✅ Exists\nfruits[1][1] = undefined   // ❌ No second element\n// Output: undefined\n```\n\n**Call 2: getFruit()**\n```javascript\nfruits = undefined\nfruits?.[1] = undefined    // ✅ Optional chaining stops here\nfruits?.[1]?.[1] = undefined\n// Output: undefined\n```\n\n**Call 3: getFruit([[\"🍍\"], [\"🍊\", \"🍌\"]])**\n```javascript\nfruits = [[\"🍍\"], [\"🍊\", \"🍌\"]]\nfruits[1] = [\"🍊\", \"🍌\"]   // ✅ Exists\nfruits[1][1] = \"🍌\"        // ✅ Exists!\n// Output: 🍌\n```\n\n**Without optional chaining (errors!):**\n```javascript\nfunction getFruit(fruits) {\n  console.log(fruits[1][1]);  // No ?.\n}\n\ngetFruit();  // TypeError: Cannot read property '1' of undefined\n```\n\n**Memory trick:** `?.` = \"If it's there, keep going. If not, just return undefined - no drama!\"",
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
    explanation: "**Truthy check in forEach** - 0 is falsy, so it doesn't count!\n\n**What happens:**\n```javascript\nlet count = 0;\nconst nums = [0, 1, 2, 3];\n\nnums.forEach((num) => {\n  if (num) count += 1;  // Only truthy values increment\n});\n```\n\n**Step-by-step:**\n```\nIteration 1: num = 0\n  if (0) → false → count stays 0\n\nIteration 2: num = 1\n  if (1) → true → count = 1\n\nIteration 3: num = 2\n  if (2) → true → count = 2\n\nIteration 4: num = 3\n  if (3) → true → count = 3\n\nFinal: count = 3\n```\n\n**Why 0 is falsy:**\n```javascript\nif (0) console.log('runs');        // Doesn't run\nif (1) console.log('runs');        // Runs!\nif (2) console.log('runs');        // Runs!\n\n// All falsy values:\nif (0) → false\nif ('') → false\nif (null) → false\nif (undefined) → false\nif (NaN) → false\nif (false) → false\n```\n\n**Common pattern:**\n```javascript\nconst arr = [0, 1, 2, 3, 4, 5];\n\n// Count truthy values\nconst truthyCount = arr.filter(x => x).length;  // 5 (excludes 0)\n\n// Count all values\nconst allCount = arr.length;  // 6 (includes 0)\n```\n\n**Memory trick:** 0 in if statement = falsy, skips the block!",
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
    explanation: "**Default parameters with reference types** - the default references the original object!\n\n**Function signature:**\n```javascript\nfunction addHobby(hobby, hobbies = person.hobbies) {\n  hobbies.push(hobby);\n  return hobbies;\n}\n```\n\n**Call 1: addHobby(\"running\", [])**\n```javascript\n// Explicitly passed empty array\nhobbies = []  // NOT person.hobbies\n[].push(\"running\")  // Modifies temporary array\nperson.hobbies = [\"coding\"]  // Unchanged ✅\n```\n\n**Call 2: addHobby(\"dancing\")**\n```javascript\n// No second argument → uses default\nhobbies = person.hobbies  // Reference to person.hobbies!\nperson.hobbies.push(\"dancing\")  // Modifies person.hobbies\nperson.hobbies = [\"coding\", \"dancing\"]  // Modified! ⚠️\n```\n\n**Call 3: addHobby(\"baking\", person.hobbies)**\n```javascript\n// Explicitly passed person.hobbies\nhobbies = person.hobbies\nperson.hobbies.push(\"baking\")\nperson.hobbies = [\"coding\", \"dancing\", \"baking\"]  // Modified! ⚠️\n```\n\n**Final result:**\n```javascript\nconsole.log(person.hobbies);  // [\"coding\", \"dancing\", \"baking\"]\n```\n\n**Why this happens:**\n```javascript\n// Default parameter is evaluated when function is defined\nconst obj = { items: [1, 2] };\n\nfunction add(item, arr = obj.items) {\n  arr.push(item);  // Modifies obj.items if no arr passed!\n}\n\nadd(3);              // obj.items = [1, 2, 3]\nadd(4, []);          // obj.items = [1, 2, 3] (different array)\nadd(5);              // obj.items = [1, 2, 3, 5]\n```\n\n**Memory trick:** Default parameter = reference to the original, not a copy!",
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
    explanation: "**push() returns the NEW LENGTH, not the array!** This trips up almost everyone at first!\n\n**Think of push() like a ticket dispenser:**\n- You add something → It gives you a number (the count)\n- Not the list itself, just how many items now\n\n**What happens:**\n```javascript\nfunction addToList(item, list) {\n  return list.push(item);  // Returns LENGTH!\n}\n\nconst result = addToList(\"apple\", [\"banana\"]);\nconsole.log(result);  // 2 (not ['banana', 'apple'])\n```\n\n**Step-by-step:**\n```\n1. list = ['banana']           // Length: 1\n2. list.push('apple')          // Adds 'apple', returns 2\n3. list is now ['banana', 'apple']  // Length: 2\n4. Function returns 2          // Not the array!\n5. result = 2\n```\n\n**Why this happens:**\n```javascript\nconst arr = ['a', 'b'];\nconst length = arr.push('c');\n\nconsole.log(length);  // 3 (the new length)\nconsole.log(arr);     // ['a', 'b', 'c'] (the modified array)\n```\n\n**Common mistake patterns:**\n```javascript\n// ❌ Expecting array back\nconst newArr = [1, 2].push(3);\nconsole.log(newArr);  // 3 (not [1, 2, 3]!)\n\n// ❌ Chaining won't work as expected\nconst result = [1].push(2).push(3);  // Error! Can't call push on a number\n\n// ✅ Correct ways:\nconst arr = [1, 2];\narr.push(3);\nconsole.log(arr);  // [1, 2, 3]\n\n// Or return the array explicitly:\nfunction addItem(item, list) {\n  list.push(item);\n  return list;  // Return the array, not push's return value\n}\n```\n\n**Array methods and their return values:**\n```javascript\nconst arr = [1, 2, 3];\n\n// Returns LENGTH:\narr.push(4);      // Returns 4 (new length)\narr.unshift(0);   // Returns 5 (new length)\n\n// Returns the REMOVED element(s):\narr.pop();        // Returns 3 (removed element)\narr.shift();      // Returns 0 (removed element)\narr.splice(1, 1); // Returns [2] (array of removed elements)\n\n// Returns NEW array:\narr.map(x => x * 2);     // Returns new array\narr.filter(x => x > 1);  // Returns new array\narr.slice(0, 2);         // Returns new array\narr.concat([4, 5]);      // Returns new array\n\n// Returns MODIFIED array:\narr.sort();       // Returns arr (modified in place)\narr.reverse();    // Returns arr (modified in place)\n\n// Returns VALUE:\narr.indexOf(2);   // Returns index or -1\narr.includes(2);  // Returns boolean\narr.find(x => x > 1);  // Returns element or undefined\n```\n\n**Real-world gotcha:**\n```javascript\n// Building an array - which works?\n\n// ❌ This won't work:\nlet items = [];\nitems = items.push('a');  // items is now 1 (the length!)\nitems = items.push('b');  // Error! Can't call push on number\n\n// ✅ This works:\nlet items = [];\nitems.push('a');  // Don't use return value\nitems.push('b');\nconsole.log(items);  // ['a', 'b']\n\n// ✅ Or use concat/spread:\nlet items = [];\nitems = [...items, 'a'];\nitems = [...items, 'b'];\nconsole.log(items);  // ['a', 'b']\n```\n\n**The correct function:**\n```javascript\n// If you want to return the array:\nfunction addToList(item, list) {\n  list.push(item);\n  return list;  // Return the array itself\n}\n\nconst result = addToList(\"apple\", [\"banana\"]);\nconsole.log(result);  // ['banana', 'apple'] ✅\n\n// Or use a more functional approach:\nfunction addToList(item, list) {\n  return [...list, item];  // Return new array\n}\n```\n\n**Memory trick:**\n- push() = \"I pushed it, here's the new count\" (returns length)\n- pop() = \"I popped it, here's what came out\" (returns element)\n- If you want the array, just reference the array itself!",
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
    explanation: "**Double gotcha: push() returns length, then try to push on a number!**\n\n**Step-by-step breakdown:**\n\n**Line 1: What does newList equal?**\n```javascript\nlet newList = [1, 2, 3].push(4);\n↓\n[1, 2, 3].push(4)  // Returns 4 (the new length)\n↓\nnewList = 4  // newList is a NUMBER, not an array!\n```\n\n**Line 2: Try to call push on a number**\n```javascript\nconsole.log(newList.push(5));\n↓\nconsole.log(4.push(5));  // Error! Numbers don't have push method\n↓\nTypeError: newList.push is not a function\n```\n\n**Why this fails:**\n```javascript\n// What you might think:\nlet newList = [1, 2, 3].push(4);  // Think: [1, 2, 3, 4]\nnewList.push(5);                  // Think: [1, 2, 3, 4, 5]\n\n// What actually happens:\nlet newList = 4;  // push() returned length!\n4.push(5);        // TypeError!\n```\n\n**Visual execution:**\n```\nStep 1: [1, 2, 3].push(4)\n        ↓\n        Array is modified: [1, 2, 3, 4]\n        push() returns: 4\n        ↓\n        newList = 4\n\nStep 2: newList.push(5)\n        ↓\n        4.push(5)\n        ↓\n        TypeError: newList.push is not a function\n```\n\n**Common mistakes with push():**\n```javascript\n// ❌ Mistake 1: Assigning push's return value\nlet arr = [1, 2, 3].push(4);  // arr = 4 (not [1,2,3,4]!)\n\n// ❌ Mistake 2: Chaining push\nlet arr = [].push(1).push(2);  // Error! Can't chain\n\n// ❌ Mistake 3: Returning push directly\nfunction addItem(arr, item) {\n  return arr.push(item);  // Returns length, not array!\n}\nconst result = addItem([1, 2], 3);\nconsole.log(result);  // 3 (not [1, 2, 3])\n\n// ✅ Correct way 1: Don't use push's return value\nlet arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr);  // [1, 2, 3, 4]\n\n// ✅ Correct way 2: Use spread/concat\nlet arr = [...[1, 2, 3], 4];  // [1, 2, 3, 4]\n\n// ✅ Correct way 3: Build array properly\nlet arr = [1, 2, 3];\narr.push(4);\narr.push(5);\nconsole.log(arr);  // [1, 2, 3, 4, 5]\n```\n\n**What push() actually does:**\n```javascript\nconst arr = ['a', 'b'];\nconst returnValue = arr.push('c');\n\nconsole.log(arr);          // ['a', 'b', 'c'] (array is modified)\nconsole.log(returnValue);  // 3 (new length is returned)\n```\n\n**Comparison with other mutating methods:**\n```javascript\nconst arr = [1, 2, 3];\n\n// push() returns new length\nconst a = arr.push(4);     // a = 4 (length)\n\n// pop() returns removed element\nconst b = arr.pop();       // b = 4 (element)\n\n// shift() returns removed element\nconst c = arr.shift();     // c = 1 (element)\n\n// unshift() returns new length\nconst d = arr.unshift(0);  // d = 3 (length)\n\n// splice() returns array of removed elements\nconst e = arr.splice(1, 1);  // e = [2] (array)\n\nconsole.log(arr);  // [0, 3] (after all operations)\n```\n\n**Real-world debugging:**\n```javascript\n// Bug: Why isn't this working?\nfunction buildArray(items) {\n  let result = [];\n  items.forEach(item => {\n    result = result.push(item);  // ❌ result becomes a number!\n  });\n  return result;\n}\n\nbuildArray(['a', 'b', 'c']);  // Returns 3, not ['a', 'b', 'c']\n\n// Fix:\nfunction buildArray(items) {\n  let result = [];\n  items.forEach(item => {\n    result.push(item);  // ✅ Just push, don't assign\n  });\n  return result;\n}\n\nbuildArray(['a', 'b', 'c']);  // ['a', 'b', 'c'] ✅\n```\n\n**Memory trick:**\n- push() gives you a receipt (length), not the groceries (array)\n- Never assign push's return value unless you want the length\n- Want the array? Just use the array variable itself!",
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
    explanation: "**Only splice() mutates the original array!** All others return new values without modifying the original.\n\n**Think of array methods like restaurants:**\n- **Mutating methods** = In-store dining (eat at the table, change what's on it)\n- **Non-mutating methods** = Takeout (get a copy, original stays the same)\n\n**Let's test each method:**\n\n```javascript\nconst emojis = [\"✨\", \"🥑\", \"😍\"];\n\n// 1. map() - Returns NEW array\nconst mapped = emojis.map((x) => x + \"✨\");\nconsole.log(mapped);  // [\"✨✨\", \"🥑✨\", \"😍✨\"] (new array)\nconsole.log(emojis);  // [\"✨\", \"🥑\", \"😍\"] (original unchanged) ✅\n\n// 2. filter() - Returns NEW array\nconst filtered = emojis.filter((x) => x !== \"🥑\");\nconsole.log(filtered);  // [\"✨\", \"😍\"] (new array)\nconsole.log(emojis);    // [\"✨\", \"🥑\", \"😍\"] (original unchanged) ✅\n\n// 3. find() - Returns ELEMENT\nconst found = emojis.find((x) => x !== \"🥑\");\nconsole.log(found);   // \"✨\" (element)\nconsole.log(emojis);  // [\"✨\", \"🥑\", \"😍\"] (original unchanged) ✅\n\n// 4. reduce() - Returns SINGLE VALUE\nconst reduced = emojis.reduce((acc, cur) => acc + \"✨\");\nconsole.log(reduced);  // \"✨✨✨\" (string)\nconsole.log(emojis);   // [\"✨\", \"🥑\", \"😍\"] (original unchanged) ✅\n\n// 5. slice() - Returns NEW array\nconst sliced = emojis.slice(1, 2, \"✨\");  // Extra args ignored!\nconsole.log(sliced);  // [\"🥑\"] (new array)\nconsole.log(emojis);  // [\"✨\", \"🥑\", \"😍\"] (original unchanged) ✅\n\n// 6. splice() - MUTATES original array! ❌\nconst spliced = emojis.splice(1, 2, \"✨\");\nconsole.log(spliced);  // [\"🥑\", \"😍\"] (removed elements)\nconsole.log(emojis);   // [\"✨\", \"✨\"] (ORIGINAL CHANGED!) ⚠️\n```\n\n**The mutating vs non-mutating breakdown:**\n\n**❌ Mutating methods (modify original array):**\n```javascript\nconst arr = [1, 2, 3];\n\narr.push(4);       // [1, 2, 3, 4] - Adds to end\narr.pop();         // [1, 2, 3] - Removes from end\narr.shift();       // [2, 3] - Removes from start\narr.unshift(0);    // [0, 2, 3] - Adds to start\narr.splice(1, 1);  // [0, 3] - Removes/adds at position\narr.reverse();     // [3, 0] - Reverses in place\narr.sort();        // [0, 3] - Sorts in place\narr.fill(9);       // [9, 9] - Fills with value\narr.copyWithin();  // Copies within array\n```\n\n**✅ Non-mutating methods (return new values):**\n```javascript\nconst arr = [1, 2, 3];\n\narr.map(x => x * 2);        // [2, 4, 6] - New array\narr.filter(x => x > 1);     // [2, 3] - New array\narr.slice(0, 2);            // [1, 2] - New array\narr.concat([4, 5]);         // [1, 2, 3, 4, 5] - New array\narr.flat();                 // Flattens - New array\narr.flatMap();              // Maps + flattens - New array\narr.toSorted();             // ES2023 - New sorted array\narr.toReversed();           // ES2023 - New reversed array\narr.toSpliced();            // ES2023 - New spliced array\n\n// Return single values:\narr.find(x => x > 1);       // 2 - Element\narr.findIndex(x => x > 1);  // 1 - Index\narr.indexOf(2);             // 1 - Index\narr.includes(2);            // true - Boolean\narr.some(x => x > 2);       // true - Boolean\narr.every(x => x > 0);      // true - Boolean\narr.reduce((a, b) => a + b);  // 6 - Single value\narr.join(',');              // \"1,2,3\" - String\n\nconsole.log(arr);  // [1, 2, 3] - Original unchanged!\n```\n\n**Confusing pairs - splice vs slice:**\n\n```javascript\nconst arr1 = ['a', 'b', 'c', 'd'];\nconst arr2 = ['a', 'b', 'c', 'd'];\n\n// slice(start, end) - NON-mutating\nconst sliced = arr1.slice(1, 3);\nconsole.log(sliced);  // ['b', 'c'] (copy of portion)\nconsole.log(arr1);    // ['a', 'b', 'c', 'd'] (unchanged) ✅\n\n// splice(start, deleteCount, ...items) - MUTATING\nconst spliced = arr2.splice(1, 2, 'x', 'y');\nconsole.log(spliced);  // ['b', 'c'] (removed elements)\nconsole.log(arr2);     // ['a', 'x', 'y', 'd'] (modified!) ⚠️\n```\n\n**Real-world example - Why this matters:**\n```javascript\n// Shared state problem\nconst originalData = [1, 2, 3, 4, 5];\n\nfunction processData(data) {\n  // ❌ Using mutating method\n  data.sort();  // Modifies originalData!\n  return data;\n}\n\nconst processed = processData(originalData);\nconsole.log(originalData);  // [1, 2, 3, 4, 5] - Changed! Bug!\n\n// ✅ Using non-mutating method\nfunction processDataSafe(data) {\n  return [...data].sort();  // Copy first, then sort\n  // Or: data.slice().sort()\n  // Or: data.toSorted()  // ES2023\n}\n\nconst processed = processDataSafe(originalData);\nconsole.log(originalData);  // [1, 2, 3, 4, 5] - Unchanged! ✅\n```\n\n**Common interview pattern:**\n```javascript\n// Which methods mutate?\nconst arr = [3, 1, 4, 1, 5];\n\narr.push(9);          // ❌ Mutates\narr.map(x => x * 2);  // ✅ Doesn't mutate\narr.sort();           // ❌ Mutates\narr.slice(1);         // ✅ Doesn't mutate\narr.splice(1, 2);     // ❌ Mutates\narr.filter(x => x > 2);  // ✅ Doesn't mutate\narr.reverse();        // ❌ Mutates\n\n// Safe versions of mutating methods:\nconst sorted = [...arr].sort();      // Copy then mutate copy\nconst reversed = [...arr].reverse(); // Copy then mutate copy\nconst pushed = [...arr, 9];          // Spread syntax\n```\n\n**ES2023 Non-mutating alternatives:**\n```javascript\nconst arr = [3, 1, 4, 1, 5];\n\n// Old (mutating)          // New (non-mutating)\narr.sort()                 arr.toSorted()\narr.reverse()              arr.toReversed()\narr.splice(1, 2, 'x')      arr.toSpliced(1, 2, 'x')\narr[0] = 99                arr.with(0, 99)\n```\n\n**Memory trick:**\n- **splice** with a 'p' = **P**ermanently changes (mutates)\n- **slice** = **S**afe copy (non-mutating)\n- Map/filter/reduce = New values, leave original alone\n- Push/pop/shift/unshift/splice/sort/reverse = Changes original",
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
    explanation: "**slice vs splice vs unshift** - know which ones mutate!\n\n**Step-by-step execution:**\n\n**1. fruit.slice(0, 1) - Non-mutating**\n```javascript\nconst fruit = [\"🍌\", \"🍊\", \"🍎\"];\nfruit.slice(0, 1);  // Returns [\"🍌\"] but doesn't modify fruit\n// fruit is still [\"🍌\", \"🍊\", \"🍎\"] ✅\n```\n\n**2. fruit.splice(0, 1) - Mutates!**\n```javascript\nfruit.splice(0, 1);  // Removes 1 item at index 0\n// Returns [\"🍌\"] (removed item)\n// fruit is now [\"🍊\", \"🍎\"] ⚠️\n```\n\n**3. fruit.unshift(\"🍇\") - Mutates!**\n```javascript\nfruit.unshift(\"🍇\");  // Adds to start\n// Returns 3 (new length)\n// fruit is now [\"🍇\", \"🍊\", \"🍎\"] ⚠️\n```\n\n**Final output:**\n```javascript\nconsole.log(fruit);  // [\"🍇\", \"🍊\", \"🍎\"]\n```\n\n**Key differences:**\n```javascript\nconst arr = [1, 2, 3, 4, 5];\n\n// slice(start, end) - COPY (non-mutating)\nconst sliced = arr.slice(1, 3);\nconsole.log(sliced);  // [2, 3]\nconsole.log(arr);     // [1, 2, 3, 4, 5] (unchanged)\n\n// splice(start, deleteCount, ...items) - MODIFY (mutating)\nconst spliced = arr.splice(1, 2, 'x');\nconsole.log(spliced);  // [2, 3] (removed)\nconsole.log(arr);      // [1, 'x', 4, 5] (modified!)\n\n// unshift(...items) - ADD TO START (mutating)\narr.unshift(0);\nconsole.log(arr);  // [0, 1, 'x', 4, 5]\n```\n\n**Memory trick:**\n- slice = safe copy (non-mutating)\n- splice = permanent change (mutating)\n- unshift = shift items right, add to start (mutating)",
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
    explanation: "**Array.from() with map function** - create and transform in one step!\n\n**What happens:**\n```javascript\n// First call: Convert string to array\nconst str = 'hello';\nconst arr = Array.from(str);\nconsole.log(arr);  // ['h', 'e', 'l', 'l', 'o']\n\n// Second call: Convert and transform\nconst arr2 = Array.from([1, 2, 3], x => x * 2);\nconsole.log(arr2);  // [2, 4, 6]\n```\n\n**Array.from() syntax:**\n```javascript\nArray.from(iterable, mapFunction)\n          ↓              ↓\n     What to convert   Transform each item\n```\n\n**Examples:**\n```javascript\n// Without map function\nArray.from('abc')           // ['a', 'b', 'c']\nArray.from([1, 2, 3])       // [1, 2, 3]\n\n// With map function (transform while creating)\nArray.from('123', x => Number(x))     // [1, 2, 3]\nArray.from([1, 2, 3], x => x * 10)    // [10, 20, 30]\n\n// Equivalent to:\n[...str].map(mapFn)  // But Array.from is more efficient!\n```\n\n**Real-world usage:**\n```javascript\n// Create array of length 5 with indexes\nArray.from({ length: 5 }, (_, i) => i)  // [0, 1, 2, 3, 4]\n\n// Convert NodeList to array and map\nconst divs = Array.from(\n  document.querySelectorAll('div'),\n  div => div.textContent\n);\n```\n\n**Memory trick:** Array.from(source, transform) = create + map in one!",
    tags: ['javascript', 'quiz'],
  }
];
