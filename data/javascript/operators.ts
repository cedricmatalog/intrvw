import { QuizQuestion } from '../../types/quiz';

export const operatorsQuizzes: QuizQuestion[] = [
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
    explanation: "**Postfix (x++) returns THEN increments, prefix (++x) increments THEN returns!**\n\n**Think of postfix like a vending machine** - you get the product (old value), THEN it prepares for next customer (increments). Prefix is like fast-forward - skip ahead (increment), THEN show the new scene (return new value)!\n\n**Step-by-step execution:**\n```javascript\nlet number = 0;\n\n// Postfix: number++ (return, then increment)\nconsole.log(number++);\n// 1. Return current value: 0 ✅\n// 2. Increment: number becomes 1\n// Output: 0\n\n// Prefix: ++number (increment, then return)\nconsole.log(++number);\n// 1. Increment: number becomes 2\n// 2. Return new value: 2 ✅\n// Output: 2\n\n// Current value\nconsole.log(number);\n// Output: 2 ✅\n```\n\n**Visual timeline:**\n```javascript\nnumber = 0\n         ↓\nnumber++  → Returns 0, number becomes 1\n         ↓\nnumber = 1\n         ↓\n++number  → number becomes 2, returns 2\n         ↓\nnumber = 2\n```\n\n**Side-by-side comparison:**\n```javascript\nlet a = 5;\nlet b = 5;\n\nconst x = a++;  // x = 5, a = 6 (return then increment)\nconst y = ++b;  // y = 6, b = 6 (increment then return)\n\nconsole.log(x);  // 5\nconsole.log(a);  // 6\nconsole.log(y);  // 6\nconsole.log(b);  // 6\n```\n\n**In expressions:**\n```javascript\nlet count = 10;\nconsole.log(count++ + count++);  // 10 + 11 = 21\n// First count++: returns 10, count becomes 11\n// Second count++: returns 11, count becomes 12\n// 10 + 11 = 21, count is now 12\n\nlet num = 10;\nconsole.log(++num + ++num);  // 11 + 12 = 23\n// First ++num: num becomes 11, returns 11\n// Second ++num: num becomes 12, returns 12\n// 11 + 12 = 23, num is now 12\n```\n\n**Memory trick:** Post-fix = post (after) the return, Pre-fix = pre (before) the return!",
    tags: ["javascript","quiz", "operators", "increment"],
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
    explanation: "**Spread operator splits strings into individual characters** - strings are iterables!\n\n**Think of spread like unzipping a jacket** - each character (tooth) becomes a separate element!\n\n**What happens:**\n```javascript\n[...\"Lydia\"]\n// Spread operator iterates through string:\n// 'L' → 'y' → 'd' → 'i' → 'a'\n// Places each character in array:\n// ['L', 'y', 'd', 'i', 'a'] ✅\n```\n\n**Step-by-step:**\n```javascript\nconst str = \"Lydia\";\n\n// Spread expands string into characters:\nconst arr = [...str];\n// Equivalent to:\nconst arr = [str[0], str[1], str[2], str[3], str[4]];\n// ['L', 'y', 'd', 'i', 'a']\n```\n\n**Why strings are iterable:**\n```javascript\nconst str = \"Hi\";\n\n// All these work because strings implement Symbol.iterator:\n[...str];              // ['H', 'i']\nArray.from(str);       // ['H', 'i']\nfor (const char of str) {}  // Loops through 'H', 'i'\n```\n\n**Other spread uses:**\n```javascript\n// Combine with other elements:\n['Start', ...\"Hi\", 'End'];  // ['Start', 'H', 'i', 'End']\n\n// Convert string to array:\nconst chars = [...\"Hello\"];  // ['H', 'e', 'l', 'l', 'o']\n\n// Works with emojis (careful!):\n[...\"👋🏼\"];  // ['👋', '🏼'] (skin tone is separate character)\n```\n\n**Memory trick:** Spread string = array of characters!",
    tags: ["javascript","quiz", "spread", "strings"],
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
    explanation: "**Addition is left-to-right** - numbers add, then string concatenates!\n\n**Think of + like a shape-shifter** - with two numbers, it adds. With a string, it glues!\n\n**Step-by-step execution:**\n```javascript\n3 + 4 + \"5\"\n\n// Step 1: Evaluate left to right\n// First operation: 3 + 4\n// Both are numbers → addition\n7 + \"5\"\n\n// Step 2: 7 + \"5\"\n// One is string → coercion + concatenation\n// Number 7 becomes string \"7\"\n\"7\" + \"5\"\n\n// Step 3: String concatenation\n\"75\" ✅\n```\n\n**Why left-to-right matters:**\n```javascript\n// Left-to-right:\n3 + 4 + \"5\"    // (3 + 4) + \"5\" → 7 + \"5\" → \"75\" ✅\n\n// With parentheses (different order):\n3 + (4 + \"5\") // 3 + \"45\" → \"345\" ❌\n```\n\n**Reverse order:**\n```javascript\n\"5\" + 3 + 4\n// \"5\" + 3 → \"53\" (string + number = concat)\n// \"53\" + 4 → \"534\" (string + number = concat)\n// Result: \"534\" ✅\n```\n\n**Visual representation:**\n```javascript\n3 + 4 + \"5\"\n↓\n(3 + 4) + \"5\"  ← Left associativity\n   ↓\n   7 + \"5\"     ← Number + String\n      ↓\n    \"7\" + \"5\"  ← Coercion\n        ↓\n      \"75\"      ✅\n```\n\n**The rule:**\n```javascript\n// number + number = addition\n3 + 4           // 7\n\n// string + anything = concatenation (coerce to string)\n\"3\" + 4         // \"34\"\n3 + \"4\"         // \"34\"\n\"3\" + \"4\"       // \"34\"\n\n// Left to right:\n1 + 2 + \"3\"     // \"33\" (1+2=3, then \"3\"+\"3\")\n\"1\" + 2 + 3     // \"123\" (\"1\"+2=\"12\", then \"12\"+3)\n```\n\n**Memory trick:** + evaluates left-to-right, number+number adds, anything+string concatenates!",
    tags: ["javascript","quiz", "operators", "type-coercion"],
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
    explanation: "**Object spread copies properties into the target object** - it unpacks key-value pairs!\n\n**Think of spread like unpacking a suitcase** - you don't put the whole suitcase in the closet, you take out each item!\n\n**What happens:**\n```javascript\nconst user = { name: \"Lydia\", age: 21 };\n\nconst admin = { admin: true, ...user };\n// ...user unpacks to: name: \"Lydia\", age: 21\n// Result: { admin: true, name: \"Lydia\", age: 21 } ✅\n```\n\n**Step-by-step:**\n```javascript\n// Step 1: Start with admin: true\n{ admin: true }\n\n// Step 2: Spread user properties\n{ admin: true, ...{ name: \"Lydia\", age: 21 } }\n\n// Step 3: Unpack spreads each property\n{ admin: true, name: \"Lydia\", age: 21 } ✅\n```\n\n**Not nested:**\n```javascript\n// ❌ This would be nesting (NOT what happens):\nconst wrong = { admin: true, user: { name: \"Lydia\", age: 21 } };\n\n// ✅ This is what spread does:\nconst right = { admin: true, name: \"Lydia\", age: 21 };\n```\n\n**Spread vs assign:**\n```javascript\nconst user = { name: \"Lydia\" };\n\n// Spread - copies properties:\nconst a = { ...user };  // { name: \"Lydia\" }\na.name = \"Sarah\";\nuser.name;  // \"Lydia\" (unchanged, shallow copy)\n\n// Direct property - nests object:\nconst b = { user: user };  // { user: { name: \"Lydia\" } }\nb.user.name = \"Sarah\";\nuser.name;  // \"Sarah\" (changed, same reference)\n```\n\n**Order matters with spread:**\n```javascript\nconst user = { name: \"Lydia\", age: 21 };\n\n// Spread first, then override:\nconst obj1 = { ...user, name: \"Sarah\" };\n// { name: \"Sarah\", age: 21 } ← name overridden\n\n// Property first, then spread overwrites:\nconst obj2 = { name: \"Sarah\", ...user };\n// { name: \"Lydia\", age: 21 } ← spread overwrites name\n```\n\n**Memory trick:** Spread unpacks properties, doesn't nest the object!",
    tags: ["javascript","quiz", "spread", "objects"],
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
    explanation: "**Spread in function calls unpacks array into separate arguments!**\n\n**Think of spread like opening a box of chocolates** - instead of passing the box, you hand out each chocolate individually!\n\n**Correct answer:**\n```javascript\nsumValues(...[1, 2, 3])\n// Spread unpacks: 1, 2, 3\n// Function receives: x=1, y=2, z=3\n// Returns: 1 + 2 + 3 = 6 ✅\n```\n\n**Why others are wrong:**\n\n**Option 1: `[...1, 2, 3]`**\n```javascript\nsumValues([...1, 2, 3])\n// ERROR! ❌ Can't spread a number\n// Numbers are not iterable\n// TypeError: 1 is not iterable\n```\n\n**Option 2: `[...[1, 2, 3]]`**\n```javascript\nsumValues([...[1, 2, 3]])\n// Creates array: [1, 2, 3]\n// Passes ONE argument (the array)\n// Function receives: x=[1,2,3], y=undefined, z=undefined\n// Returns: [1,2,3] + undefined + undefined = NaN ❌\n```\n\n**Option 4: `[1, 2, 3]`**\n```javascript\nsumValues([1, 2, 3])\n// Passes ONE argument (the array)\n// Function receives: x=[1,2,3], y=undefined, z=undefined  \n// Returns: [1,2,3] + undefined + undefined = NaN ❌\n```\n\n**Spread in function calls:**\n```javascript\nconst arr = [1, 2, 3];\n\n// Without spread - passes array as single argument:\nsumValues(arr);  // x=[1,2,3], y=undefined, z=undefined\n\n// With spread - unpacks array into arguments:\nsumValues(...arr);  // x=1, y=2, z=3 ✅\n// Equivalent to:\nsumValues(arr[0], arr[1], arr[2]);\nsumValues(1, 2, 3);\n```\n\n**Visual representation:**\n```javascript\n...arr unpacks:  [1, 2, 3] → 1, 2, 3\n                  ↓         ↓  ↓  ↓\nFunction args:   (x, y, z) = (1, 2, 3)\n```\n\n**Memory trick:** Spread in call = unpack array into separate arguments!",
    tags: ["javascript","quiz", "spread", "function-calls"],
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
    explanation: "**Rest parameter creates an array, and arrays are objects!**\n\n**Think of rest parameter like a shopping bag** - it collects all remaining items into one container, and that container is an object (array)!\n\n**What happens:**\n```javascript\nfunction getAge(...args) {\n  // args is an array: [21]\n  console.log(typeof args);  // \"object\" ✅\n}\n\ngetAge(21);\n```\n\n**Why \"object\" not \"array\":**\n```javascript\n// JavaScript quirk: typeof array is \"object\"\ntypeof [];           // \"object\" ✅\ntypeof [1, 2, 3];    // \"object\" ✅\ntypeof {};           // \"object\" ✅\n\n// To check if it's actually an array:\nArray.isArray([]);   // true ✅\nArray.isArray({});   // false\n```\n\n**Rest parameter behavior:**\n```javascript\nfunction test(...args) {\n  console.log(args);              // Array\n  console.log(typeof args);       // \"object\"\n  console.log(Array.isArray(args)); // true\n}\n\ntest(1, 2, 3);\n// args = [1, 2, 3]\n// typeof = \"object\"\n// isArray = true\n```\n\n**Rest collects into array:**\n```javascript\nfunction collect(...items) {\n  console.log(items);  // Array of all arguments\n}\n\ncollect(1);           // [1]\ncollect(1, 2);        // [1, 2]\ncollect(1, 2, 3);     // [1, 2, 3]\ncollect();            // [] (empty array)\n```\n\n**Compare with arguments object:**\n```javascript\nfunction oldWay() {\n  console.log(arguments);        // Array-like object\n  console.log(typeof arguments); // \"object\"\n  console.log(Array.isArray(arguments)); // false ❌\n}\n\nfunction newWay(...args) {\n  console.log(args);             // Real array\n  console.log(typeof args);      // \"object\"\n  console.log(Array.isArray(args)); // true ✅\n}\n```\n\n**Memory trick:** Rest parameter = array, typeof array = \"object\"!",
    tags: ["javascript","quiz", "rest-parameters", "typeof"],
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
    explanation: "**Rest parameter MUST be the last parameter** - it can't come before other parameters!\n\n**Think of rest parameter like a vacuum cleaner** - it sucks up everything remaining. You can't have items AFTER the vacuum!\n\n**Why this fails:**\n```javascript\nfunction getItems(fruitList, ...args, favoriteFruit) {\n//                           ^^^^^^  ^^^^^^^^^^^^^^\n//                           Rest    Can't have this after rest!\n  return [...fruitList, ...args, favoriteFruit]\n}\n\n// SyntaxError ❌\n// \"Rest parameter must be last formal parameter\"\n```\n\n**How rest works:**\n```javascript\n// Rest collects ALL remaining arguments:\nfunction test(first, ...rest) {\n  console.log(first);  // First argument\n  console.log(rest);   // Array of remaining arguments\n}\n\ntest(1, 2, 3, 4);\n// first = 1\n// rest = [2, 3, 4] ← Collects everything left\n```\n\n**The fixed version:**\n```javascript\n// Move rest parameter to END:\nfunction getItems(fruitList, favoriteFruit, ...args) {\n//                                           ^^^^^^\n//                                           Now it's last! ✅\n  return [...fruitList, ...args, favoriteFruit];\n}\n\ngetItems([\"banana\", \"apple\"], \"pear\", \"orange\");\n// fruitList = [\"banana\", \"apple\"]\n// favoriteFruit = \"pear\"\n// args = [\"orange\"]\n// Returns: [\"banana\", \"apple\", \"orange\", \"pear\"]\n```\n\n**Valid rest patterns:**\n```javascript\n// ✅ Rest is last:\nfunction a(x, y, ...rest) {}\n\n// ✅ Rest is only parameter:\nfunction b(...rest) {}\n\n// ✅ Rest after all named:\nfunction c(first, second, third, ...rest) {}\n\n// ❌ Rest is NOT last:\nfunction d(...rest, x) {}  // SyntaxError!\nfunction e(x, ...rest, y) {}  // SyntaxError!\n```\n\n**Why rest must be last:**\n```javascript\n// If rest could be in middle, how would JS know where to stop?\nfunction bad(a, ...rest, b) {}\nbad(1, 2, 3, 4, 5);\n// a = 1\n// rest = [2, 3, 4]?  or [2, 3]?  or [2]?\n// b = 5? or 4? or 3?\n// Ambiguous! ❌\n```\n\n**Memory trick:** Rest parameter = greedy vacuum, must be last!",
    tags: ["javascript","quiz", "rest-parameters", "syntax"],
  }
];
