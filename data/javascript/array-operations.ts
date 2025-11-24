import { QuizQuestion } from '../../types/quiz';

export const array_operationsQuizzes: QuizQuestion[] = [
{
    id: 'js-106',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
          "[[1, 2, 3, 4, 5]]",
          "[1, 2, 3, 4, 5]",
          "1",
          "[1]"
    ],
    correctAnswer: 2,
    explanation: "Think of **array destructuring** like unpacking a suitcase - you take items out one by one.\n\n**The pattern:**\n```javascript\nconst [first, second, third] = [1, 2, 3];\n// first = 1, second = 2, third = 3\n```\n\nJavaScript matches positions: first variable gets first value, second variable gets second value, etc.\n\n**In our question:**\n```javascript\nconst [y] = [1, 2, 3, 4, 5];\n//     ↑    ↑\n//  variable  array\n```\n\nWe're creating ONE variable `y` and unpacking ONLY the first item from the array.\n- Position 0: `y = 1` ✓\n- Positions 1-4: We don't care about these (not destructured)\n\nSo `y` is just `1`, not `[1]` or the whole array.\n\n**More examples:**\n```javascript\nconst [a] = [10, 20, 30];        // a = 10\nconst [x, y] = [10, 20, 30];     // x = 10, y = 20\nconst [, , z] = [10, 20, 30];    // z = 30 (skip first two with commas!)\nconst [first, ...rest] = [1, 2, 3, 4];  // first = 1, rest = [2, 3, 4]\n```\n\n**Real-world use:**\n```javascript\n// Getting coordinates\nconst [x, y] = getMousePosition();  // Returns [150, 200]\n\n// React hooks (you've seen this!)\nconst [count, setCount] = useState(0);\n\n// Swapping variables without temp variable\n[a, b] = [b, a];  // Swap!\n```\n\n**Memory trick:** Square brackets `[ ]` on the LEFT = unpacking. On the RIGHT = creating array.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-108',
    question: "📝 What is the output?\n\n```javascript\nconst list = [1 + 2, 1 * 2, 1 / 2];\nconsole.log(list);\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
          "[\"1 + 2\", \"1 * 2\", \"1 / 2\"]",
          "[\"12\", 2, 0.5]",
          "[3, 2, 0.5]",
          "[1, 1, 1]"
    ],
    correctAnswer: 2,
    explanation: "Arrays don't store the CODE - they store the RESULT of the code.\n\n**Think of it like a calculator:**\nWhen you type `1 + 2 =`, the calculator shows `3`, not the text \"1 + 2\".\n\n**JavaScript evaluates expressions BEFORE storing them:**\n```javascript\nconst list = [1 + 2, 1 * 2, 1 / 2];\n//            ↓      ↓      ↓\n//            3      2      0.5\n```\n\nStep-by-step:\n1. JavaScript sees `1 + 2` → calculates it → gets `3`\n2. JavaScript sees `1 * 2` → calculates it → gets `2`\n3. JavaScript sees `1 / 2` → calculates it → gets `0.5`\n4. Stores `[3, 2, 0.5]` in memory\n\n**Arrays can hold ANY value:**\n```javascript\nconst mixed = [\n  5 + 5,              // 10 (calculation result)\n  'hello',            // string\n  true,               // boolean\n  { name: 'John' },   // object\n  [1, 2, 3],          // another array\n  () => 'function',   // function\n  new Date(),         // date object\n  null,               // null\n  undefined           // undefined\n];\n```\n\n**Common beginner mistake:**\n```javascript\n// ❌ Thinking this stores strings:\nconst arr = [1 + 1, 2 + 2];\n// They expect: ['1 + 1', '2 + 2']\n// Actually:    [2, 4]\n\n// ✅ To store the expression as text:\nconst arr = ['1 + 1', '2 + 2'];  // Now it's strings!\n```\n\n**Real-world example:**\n```javascript\nconst config = [\n  10 * 60 * 1000,        // 10 minutes in milliseconds\n  window.innerWidth / 2,  // Half screen width\n  users.length > 0        // Boolean: has users?\n];\n```\n\n**Rule:** Anything to the RIGHT of `=` gets evaluated (calculated) first, THEN stored.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-116',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
          "[1, 2, 3, null x 7, 11]",
          "[1, 2, 3, 11]",
          "[1, 2, 3, empty x 7, 11]",
          "SyntaxError"
    ],
    correctAnswer: 2,
    explanation: "Imagine an apartment building with rooms numbered 0, 1, 2. You decide to put furniture in room 10, skipping rooms 3-9. Those rooms become **empty slots**.\n\n**What happens step-by-step:**\n```javascript\nconst numbers = [1, 2, 3];\n// Array looks like: [1, 2, 3]\n// Indexes:           0  1  2\n// Length: 3\n\nnumbers[10] = 11;\n// Now JavaScript needs to make room for index 10!\n// It creates empty slots for indexes 3-9\n```\n\n**The result:**\n```\n[1, 2, 3, empty × 7, 11]\n ↑  ↑  ↑  ↑          ↑\n 0  1  2  3-9        10\n```\n\n**Empty slots vs undefined:**\nThis is a tricky gotcha! Empty slots are NOT the same as `undefined`:\n\n```javascript\nconst arr1 = [1, , , 4];           // Has empty slots\nconst arr2 = [1, undefined, undefined, 4];  // Has actual undefined values\n\narr1.map(x => x * 2);  // [2, empty × 2, 8] - skips empty!\narr2.map(x => x * 2);  // [2, NaN, NaN, 8]  - processes undefined!\n```\n\n**How it displays:**\nDepending on where you run it:\n- Chrome DevTools: `[1, 2, 3, empty × 7, 11]`\n- Node.js: `[1, 2, 3, <7 empty items>, 11]`\n- Firefox: `Array(11) [ 1, 2, 3, <7 empty slots>, 11 ]`\n\n**Real-world gotcha:**\n```javascript\nconst users = [];\nusers[999] = 'Alice';  // Creates array with 1000 elements!\nconsole.log(users.length);  // 1000 (not 1!)\n\n// Most methods SKIP empty slots:\nusers.forEach(user => console.log(user));  // Only logs 'Alice'\n\n// But length doesn't lie:\nusers.length;  // 1000 (wastes memory!)\n```\n\n**Best practice:** Use `push()` to add to arrays instead of skipping indexes:\n```javascript\nconst arr = [1, 2, 3];\narr.push(4);  // ✓ No gaps: [1, 2, 3, 4]\n```",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-121',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3];\narr[10] = 99;\n\nconsole.log(arr.length);\nconsole.log(arr[5]);\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
          "11 and undefined",
          "10 and undefined",
          "4 and undefined",
          "11 and null"
    ],
    correctAnswer: 0,
    explanation: "This builds on the previous question about sparse arrays. Let's trace what happens:\n\n**Starting point:**\n```javascript\nconst arr = [1, 2, 3];\n// Length: 3\n// Indexes: 0, 1, 2\n```\n\n**After `arr[10] = 99`:**\n```\nIndex:  0  1  2  3-9 (empty)  10\nValue:  1  2  3  (empty × 7)  99\n```\n\n**Question 1: What is `arr.length`?**\nArray length = highest index + 1\n- Highest index: 10\n- Length: 10 + 1 = **11** ✓\n\n**Question 2: What is `arr[5]`?**\nIndex 5 was never assigned a value, so it's an empty slot.\n- Accessing an empty slot returns **undefined** ✓\n\n**The key insight:**\n```javascript\narr.length;  // 11 (counts all positions, even empty ones)\narr[5];      // undefined (empty slot)\narr[10];     // 99 (actually assigned)\n```\n\n**Visual representation:**\n```javascript\nconst arr = [1, 2, 3];\narr[10] = 99;\n\n// What JavaScript stores internally:\n[\n  0: 1,\n  1: 2,\n  2: 3,\n  // 3-9: nothing (empty slots)\n  10: 99\n]\n\n// Length calculation:\nlength = highest_index + 1 = 10 + 1 = 11\n```\n\n**Accessing different indexes:**\n```javascript\narr[0];   // 1 (exists)\narr[2];   // 3 (exists)\narr[3];   // undefined (empty slot)\narr[5];   // undefined (empty slot)\narr[9];   // undefined (empty slot)\narr[10];  // 99 (exists)\narr[11];  // undefined (out of bounds)\n```\n\n**Common confusion:**\n❌ \"Empty slots should be null\" - Nope, they're `undefined`\n❌ \"Length should be 4\" - Nope, it's based on highest index, not count of values\n\n**Real-world analogy:**\nThink of a hotel with 11 floors (0-10). You only have guests on floors 0, 1, 2, and 10.\n- Hotel height: 11 floors (length)\n- Floor 5: Empty, but if you go there it's just vacant (undefined), not non-existent\n\n**Memory tip:** Array length = MAX index + 1, always!",
    tags: ["arrays","length","sparse-arrays"],
  },

{
    id: 'js-180',
    question: "📝 What's the output?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\n\nconsole.log(numbers.some(n => n > 3));\nconsole.log(numbers.every(n => n > 0));\nconsole.log(numbers.every(n => n > 3));\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'easy',
    options: [
      'true true true',
      'true true false',
      'false true false',
      'true false false',
    ],
    correctAnswer: 1,
    explanation: "Think of `some()` and `every()` as asking questions about your array:\n- **`some()`** = \"Is there AT LEAST ONE?\"\n- **`every()`** = \"Are ALL of them?\"\n\nLike asking friends: \"Does SOMEONE like pizza?\" vs \"Does EVERYONE like pizza?\"\n\n**Let's trace through each line:**\n\n**Line 1: `numbers.some(n => n > 3)`** → **true**\n```\nArray: [1, 2, 3, 4, 5]\nQuestion: \"Is there at least one number > 3?\"\n\nChecking:\n- 1 > 3? No\n- 2 > 3? No\n- 3 > 3? No\n- 4 > 3? YES! ✓ Stop here, return true\n\n(some() stops as soon as it finds ONE match)\n```\n\n**Line 2: `numbers.every(n => n > 0)`** → **true**\n```\nArray: [1, 2, 3, 4, 5]\nQuestion: \"Are ALL numbers > 0?\"\n\nChecking:\n- 1 > 0? Yes ✓\n- 2 > 0? Yes ✓\n- 3 > 0? Yes ✓\n- 4 > 0? Yes ✓\n- 5 > 0? Yes ✓\n\nAll passed! Return true\n```\n\n**Line 3: `numbers.every(n => n > 3)`** → **false**\n```\nArray: [1, 2, 3, 4, 5]\nQuestion: \"Are ALL numbers > 3?\"\n\nChecking:\n- 1 > 3? NO! ✗ Stop here, return false\n\n(every() stops as soon as it finds ONE failure)\n```\n\n**The key difference:**\n```javascript\n// some() = optimistic (looks for success)\nsome(test)  → stops at FIRST true  → returns true\n            → if none pass         → returns false\n\n// every() = strict (looks for failure)\nevery(test) → stops at FIRST false → returns false\n            → if all pass          → returns true\n```\n\n**Real-world examples:**\n```javascript\nconst users = [\n  { age: 15, name: 'Alice' },\n  { age: 22, name: 'Bob' },\n  { age: 30, name: 'Carol' }\n];\n\n// Check if ANY user is an adult\nusers.some(u => u.age >= 18);   // true (Bob and Carol)\n\n// Check if ALL users are adults\nusers.every(u => u.age >= 18);  // false (Alice is 15)\n\n// Check if SOMEONE is named Bob\nusers.some(u => u.name === 'Bob');  // true\n\n// Form validation: ALL fields filled?\nformFields.every(field => field.value.length > 0);\n\n// Shopping cart: ANY items on sale?\ncartItems.some(item => item.onSale);\n```\n\n**Memory tricks:**\n- `some()` = \"**S**omeone\" (just need one)\n- `every()` = \"**E**veryone\" (need all)\n\n**Performance note:**\nBoth methods are smart - they **short-circuit** (stop early):\n- `some()` stops when it finds the first `true`\n- `every()` stops when it finds the first `false`",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-181',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, [2, [3, [4]]]];\n\nconsole.log(arr.flat());\nconsole.log(arr.flat(2));\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'medium',
    options: [
      '[1, 2, 3, 4] and [1, 2, 3, 4]',
      '[1, 2, [3, [4]]] and [1, 2, 3, [4]]',
      '[1, 2, 3, [4]] and [1, 2, 3, 4]',
      'Error',
    ],
    correctAnswer: 1,
    explanation: "Think of `flat()` like unpacking nested boxes - the number tells you HOW MANY layers of boxes to unwrap.\n\n**Our nested array visualized:**\n```javascript\nconst arr = [1, [2, [3, [4]]]];\n\n// Visual representation:\n[\n  1,          // Not nested\n  [           // Layer 1\n    2,\n    [         // Layer 2\n      3,\n      [       // Layer 3\n        4\n      ]\n    ]\n  ]\n]\n```\n\n**Line 1: `arr.flat()`** (no argument = 1 level)\n```javascript\n// Unwrap 1 layer of boxes:\n[1, [2, [3, [4]]]]\n ↓\n[1, 2, [3, [4]]]  // Removed outer brackets around [2, ...]\n```\n\n**Line 2: `arr.flat(2)`** (2 levels)\n```javascript\n// Unwrap 2 layers of boxes:\n[1, [2, [3, [4]]]]\n ↓ First layer\n[1, 2, [3, [4]]]\n ↓ Second layer\n[1, 2, 3, [4]]    // Still one layer left!\n```\n\n**The pattern:**\n```javascript\nconst nested = [1, [2, [3, [4]]]];\n\nnested.flat();       // [1, 2, [3, [4]]]    - 1 level (default)\nnested.flat(1);      // [1, 2, [3, [4]]]    - 1 level (same)\nnested.flat(2);      // [1, 2, 3, [4]]      - 2 levels\nnested.flat(3);      // [1, 2, 3, 4]        - 3 levels\nnested.flat(Infinity); // [1, 2, 3, 4]      - ALL levels! ✨\n```\n\n**Common use cases:**\n\n**1. Flattening API responses:**\n```javascript\nconst data = [\n  ['user1', 'user2'],\n  ['user3', 'user4'],\n  ['user5']\n];\n\ndata.flat();  // ['user1', 'user2', 'user3', 'user4', 'user5']\n```\n\n**2. Removing empty slots AND flattening:**\n```javascript\nconst messy = [1, , 2, [3, , 4]];\nmessy.flat();  // [1, 2, 3, 4]  - Removes empty slots too!\n```\n\n**3. Combined with map (flatMap):**\n```javascript\nconst sentences = ['hello world', 'foo bar'];\n\n// Get all words:\nsentences.map(s => s.split(' '))  // [['hello', 'world'], ['foo', 'bar']]\n         .flat();                  // ['hello', 'world', 'foo', 'bar']\n\n// Better: use flatMap!\nsentences.flatMap(s => s.split(' ')); // Same result, more efficient\n```\n\n**Gotcha - doesn't work on objects:**\n```javascript\nconst arr = [1, [2, { nested: [3, 4] }]];\narr.flat(Infinity);  // [1, 2, { nested: [3, 4] }]\n// Objects are NOT flattened, only arrays!\n```\n\n**Memory trick:**\n- `flat()` = default 1 layer\n- `flat(2)` = 2 layers\n- `flat(Infinity)` = all the way down! (use this when you don't know depth)\n\n**When to use `Infinity`:**\n```javascript\n// Unknown nesting depth from API:\nconst apiData = await fetch('/data').then(r => r.json());\nconst flattened = apiData.flat(Infinity);  // Safety!\n```",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-184',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\n\nconsole.log(arr.includes(3));\nconsole.log(arr.includes(6));\nconsole.log(arr.includes(3, 3));\n```",
    category: 'javascript',
    subcategory: 'array-operations',
    difficulty: 'easy',
    options: [
      'true false true',
      'true false false',
      'true true false',
      'false false false',
    ],
    correctAnswer: 1,
    explanation: "Think of `includes()` as asking \"Is this item in my shopping cart?\" with an optional \"Start looking from item #X\".\n\n**The syntax:**\n```javascript\narray.includes(searchValue, fromIndex)\n//              ↑            ↑\n//          What to find   Where to start (optional)\n```\n\n**Let's trace each line:**\n\n**Line 1: `arr.includes(3)`** → **true**\n```javascript\nArray: [1, 2, 3, 4, 5]\nIndex:  0  1  2  3  4\n\nSearching for: 3\nStarting from: index 0 (default)\n\n0: 1 === 3? No\n1: 2 === 3? No\n2: 3 === 3? YES! ✓ Return true\n```\n\n**Line 2: `arr.includes(6)`** → **false**\n```javascript\nArray: [1, 2, 3, 4, 5]\n\nSearching for: 6\nStarting from: index 0 (default)\n\n0: 1 === 6? No\n1: 2 === 6? No\n2: 3 === 6? No\n3: 4 === 6? No\n4: 5 === 6? No\n\nNot found! ✗ Return false\n```\n\n**Line 3: `arr.includes(3, 3)`** → **false**\n```javascript\nArray: [1, 2, 3, 4, 5]\nIndex:  0  1  2  3  4\n              ↑  Start here!\n\nSearching for: 3\nStarting from: index 3 (skip 0, 1, 2)\n\n// Already skipped: 1, 2, 3\n3: 4 === 3? No\n4: 5 === 3? No\n\nNot found! ✗ Return false\n// Note: 3 exists at index 2, but we started looking at index 3!\n```\n\n**The gotcha:**\nThe value `3` IS in the array at index 2, but we told JavaScript \"start looking from index 3\", so it missed it!\n\n**More examples with fromIndex:**\n```javascript\nconst arr = [1, 2, 3, 4, 5];\n\narr.includes(4);      // true  (found at index 3)\narr.includes(4, 4);   // false (start at 4, but 4 is at index 3)\narr.includes(5, 4);   // true  (start at 4, found at index 4)\n\n// Negative index = count from end!\narr.includes(5, -1);  // true  (start at last element)\narr.includes(4, -1);  // false (only checks last element)\narr.includes(3, -3);  // true  (start 3 from end = index 2)\n```\n\n**Real-world uses:**\n\n**1. Simple membership check:**\n```javascript\nconst validRoles = ['admin', 'editor', 'viewer'];\n\nif (validRoles.includes(userRole)) {\n  // User has a valid role\n}\n```\n\n**2. Filtering out duplicates:**\n```javascript\nconst unique = [];\nfor (const item of items) {\n  if (!unique.includes(item)) {\n    unique.push(item);\n  }\n}\n```\n\n**3. Checking for forbidden values:**\n```javascript\nconst forbiddenChars = ['<', '>', '&', '\"'];\nconst userInput = '<script>';\n\nconst hasForbidden = forbiddenChars.some(char => \n  userInput.includes(char)\n);\n```\n\n**includes() vs indexOf():**\n```javascript\nconst arr = [1, 2, NaN, 4];\n\n// includes() can find NaN! ✓\narr.includes(NaN);  // true\n\n// indexOf() cannot! ✗\narr.indexOf(NaN);   // -1 (not found)\n\n// includes() returns boolean\narr.includes(2);    // true/false\n\n// indexOf() returns index (or -1)\narr.indexOf(2);     // 1 (the index)\n```\n\n**Memory trick:**\n- `includes(value)` = \"Is it there?\" (boolean)\n- `includes(value, start)` = \"Is it there, starting from position X?\"\n- Negative `start` = count from the end",
    tags: ['javascript', 'quiz'],
  },
];
