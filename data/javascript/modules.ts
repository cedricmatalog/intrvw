import { QuizQuestion } from '../../types/quiz';

export const modulesQuizzes: QuizQuestion[] = [
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
    explanation: "**ES modules are hoisted** - imported modules run FIRST, before the importing file!\n\n**Think of imports like movie credits** - they roll BEFORE the movie starts, not when you see the \"starring\" line in the script!\n\n**What happens:**\n```javascript\n// index.js\nconsole.log(\"running index.js\");  // Line 1\nimport { sum } from \"./sum.js\";    // Line 2 (hoisted!)\nconsole.log(sum(1, 2));            // Line 3\n\n// Execution order:\n// 1. import is hoisted → sum.js runs FIRST\n// 2. Then index.js code runs top-to-bottom\n```\n\n**Step-by-step execution:**\n```javascript\n// Phase 1: Module resolution (hoisting)\n// All imports are processed first:\nimport { sum } from \"./sum.js\";  // Loads and runs sum.js\n\n// sum.js executes:\nconsole.log(\"running sum.js\");  // Output: \"running sum.js\" ✅\nexport const sum = (a, b) => a + b;\n\n// Phase 2: index.js code executes:\nconsole.log(\"running index.js\");  // Output: \"running index.js\" ✅\nconsole.log(sum(1, 2));           // Output: 3 ✅\n\n// Final output:\n// \"running sum.js\"\n// \"running index.js\"\n// 3\n```\n\n**Why imports are hoisted:**\n```javascript\n// This works even though import is at bottom:\nconst result = sum(5, 10);  // ✅ Works!\n\nimport { sum } from \"./sum.js\";  // Hoisted to top!\n// Module loads before any code runs\n```\n\n**Compare with require() (CommonJS):**\n```javascript\n// require() runs synchronously at the call site:\nconsole.log(\"running index.js\");  // First\nconst { sum } = require(\"./sum.js\");  // Loads now\nconsole.log(sum(1, 2));\n\n// Output:\n// \"running index.js\"  ← index.js runs first!\n// \"running sum.js\"   ← sum.js loaded when require() called\n// 3\n```\n\n**Multiple imports:**\n```javascript\n// a.js\nconsole.log('A');\nexport const a = 1;\n\n// b.js  \nconsole.log('B');\nexport const b = 2;\n\n// main.js\nconsole.log('Main start');\nimport { a } from './a.js';\nimport { b } from './b.js';\nconsole.log('Main end');\n\n// Output:\n// A       ← a.js runs first\n// B       ← b.js runs second\n// Main start  ← Then main.js code\n// Main end\n```\n\n**Memory trick:** ES imports = hoisted to top, run before any code!",
    tags: ["javascript","quiz", "modules", "hoisting"],
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
    explanation: "**import * creates a namespace object** - default export becomes the `default` property!\n\n**Think of import * like a package box** - everything goes in labeled compartments, even the \"default\" item gets a \"default\" label!\n\n**What happens:**\n```javascript\n// sum.js\nexport default function sum(x) {\n  return x + x;\n}\n\n// index.js\nimport * as sum from \"./sum\";\n\n// sum is now an object:\n// { default: function sum(x) { return x + x; } }\n\n// Access the default export:\nsum.default(4);  // 8 ✅\n```\n\n**Why not sum(4)?**\n```javascript\nimport * as sum from \"./sum\";\n\n// sum is an OBJECT, not a function:\ntypeof sum;  // \"object\" ✅\n\nsum(4);  // TypeError: sum is not a function ❌\nsum.default(4);  // 8 ✅ Works!\n```\n\n**Complete example with mixed exports:**\n```javascript\n// info.js\nexport const name = \"Lydia\";\nexport const age = 21;\nexport default \"I love JavaScript\";\n\n// index.js\nimport * as info from \"./info\";\n\nconsole.log(info);\n// {\n//   default: \"I love JavaScript\",  ← default export\n//   name: \"Lydia\",                  ← named export\n//   age: 21                         ← named export\n// }\n\ninfo.default;  // \"I love JavaScript\" ✅\ninfo.name;     // \"Lydia\" ✅\ninfo.age;      // 21 ✅\n```\n\n**Different import styles:**\n```javascript\n// sum.js\nexport default function sum(x) { return x + x; }\n\n// Style 1: Default import (can name anything)\nimport mySum from \"./sum\";\nmySum(4);  // 8 ✅\n\n// Style 2: Namespace import\nimport * as math from \"./sum\";\nmath.default(4);  // 8 ✅\n\n// Style 3: Rename default explicitly\nimport { default as sum } from \"./sum\";\nsum(4);  // 8 ✅\n```\n\n**Mixed imports:**\n```javascript\n// utils.js\nexport const PI = 3.14;\nexport const E = 2.71;\nexport default function calc() { }\n\n// main.js - all in one line:\nimport calc, { PI, E } from \"./utils\";\n//     ^^^^ default    ^^^^^^^^ named\n\ncalc();  // ✅ Default export\nPI;      // 3.14 ✅ Named export\nE;       // 2.71 ✅ Named export\n```\n\n**Memory trick:** import * = namespace object, default → .default property!",
    tags: ["javascript","quiz", "modules", "default-export"],
  },

{
    id: 'js-065',
    question: "🖥️ What's the output?\n\n```javascript\n// counter.js\nlet counter = 10;\nexport default counter;\n\n// index.js\nimport myCounter from \"./counter\";\nmyCounter++;\nconsole.log(myCounter);\n```",
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
    explanation: "**Imported bindings are read-only** - you cannot modify them in the importing module!\n\n**Think of imports like library books** - you can read them, but you can't write in them or rip out pages!\n\n**What happens:**\n```javascript\n// counter.js\nlet counter = 10;\nexport default counter;\n\n// index.js\nimport myCounter from \"./counter\";\n\nmyCounter++;  // TypeError! ❌\n// \"Assignment to constant variable\"\n// OR \"Cannot assign to read only property\"\n\nconsole.log(myCounter);  // Never reached\n```\n\n**Why imports are read-only:**\n```javascript\n// The imported binding is like a const:\nimport myCounter from \"./counter\";\n\n// These all fail:\nmyCounter = 20;    // Error ❌\nmyCounter++;       // Error ❌\nmyCounter += 5;    // Error ❌\n\n// Read-only access only:\nconsole.log(myCounter);  // 10 ✅\nconst doubled = myCounter * 2;  // ✅\n```\n\n**Only the exporting module can modify:**\n```javascript\n// counter.js\nlet counter = 10;\n\nexport function increment() {\n  counter++;  // ✅ Works! Module can modify its own\n}\n\nexport function getCounter() {\n  return counter;\n}\n\n// index.js\nimport { increment, getCounter } from \"./counter\";\n\nconsole.log(getCounter());  // 10\nincrement();\nconsole.log(getCounter());  // 11 ✅\n```\n\n**Exporting objects (shallow read-only):**\n```javascript\n// data.js\nexport const config = {\n  setting: 'value'\n};\n\n// main.js\nimport { config } from './data';\n\n// Can't reassign:\nconfig = {};  // Error ❌\n\n// But CAN mutate properties:\nconfig.setting = 'new value';  // ✅ Works (shallow)\n// Only the binding is read-only, not the object itself!\n```\n\n**Compare with normal variables:**\n```javascript\n// Regular variable - mutable:\nlet counter = 10;\ncounter++;  // 11 ✅\n\n// Imported binding - read-only:\nimport counter from './module';\ncounter++;  // Error ❌\n```\n\n**Memory trick:** Imports = read-only bindings, only exporter can modify!",
    tags: ["javascript","quiz", "modules", "read-only"],
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
    explanation: "**import * bundles ALL exports into a namespace object** - default and named exports together!\n\n**Think of import * like packing a moving box** - everything gets packed: the \"main item\" (default) and the \"extras\" (named exports)!\n\n**What happens:**\n```javascript\n// module.js\nexport default () => \"Hello world\";  // Default export (function)\nexport const name = \"Lydia\";         // Named export\n\n// index.js\nimport * as data from \"./module\";\n\n// data is an object containing ALL exports:\nconsole.log(data);\n// {\n//   default: [Function],  ← The arrow function\n//   name: \"Lydia\"        ← Named export\n// } ✅\n```\n\n**Using the imports:**\n```javascript\nimport * as data from \"./module\";\n\n// Access default export (the function):\ndata.default();  // \"Hello world\" ✅\n\n// Access named export:\ndata.name;  // \"Lydia\" ✅\n```\n\n**Why not \"Hello world\" in default?**\n```javascript\n// The default export is a FUNCTION, not its return value:\nexport default () => \"Hello world\";\n//             ^^^^^^^^^^^^^^^^^^^^^ This is the function itself\n\n// So data.default is:\ndata.default;  // [Function] ✅ (not \"Hello world\")\ndata.default();  // \"Hello world\" ✅ (calling it)\n```\n\n**Compare different export combinations:**\n```javascript\n// Case 1: Only default\nexport default 42;\nimport * as data from './module';\n// { default: 42 }\n\n// Case 2: Only named\nexport const x = 1, y = 2;\nimport * as data from './module';\n// { x: 1, y: 2 }\n\n// Case 3: Both (like our example)\nexport default () => \"Hi\";\nexport const name = \"Lydia\";\nimport * as data from './module';\n// { default: [Function], name: \"Lydia\" } ✅\n```\n\n**Alternative import styles:**\n```javascript\n// module.js\nexport default () => \"Hello world\";\nexport const name = \"Lydia\";\n\n// Style 1: Namespace import\nimport * as data from \"./module\";\ndata.default();  // \"Hello world\"\ndata.name;       // \"Lydia\"\n\n// Style 2: Mixed import\nimport greet, { name } from \"./module\";\ngreet();  // \"Hello world\"\nname;     // \"Lydia\"\n\n// Style 3: Separate imports\nimport greet from \"./module\";\nimport { name } from \"./module\";\ngreet();  // \"Hello world\"\nname;     // \"Lydia\"\n```\n\n**Memory trick:** import * = object with default + named exports!",
    tags: ["javascript","quiz", "modules", "namespace-import"],
  },

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
    explanation: "**Default exports can be renamed on import, named exports must match (or use aliasing)!**\n\n**Think of default export like \"the main dish\"** - call it whatever you want when you order. Named exports are like ingredients - you need to ask for them by name (or specify \"aka\")!\n\n**Default export flexibility:**\n```javascript\n// file1.js\nexport default function() { }\n\n// Import with ANY name:\nimport anything from './file1';      // ✅\nimport myFunc from './file1';        // ✅\nimport whatever from './file1';      // ✅\nimport banana from './file1';        // ✅\n// All work! Name doesn't matter\n```\n\n**Named export strictness:**\n```javascript\n// file2.js\nexport function myFunc() { }\n\n// Must use exact name:\nimport { myFunc } from './file2';    // ✅ Correct\nimport { whatever } from './file2';  // ❌ Error!\n\n// OR use aliasing:\nimport { myFunc as whatever } from './file2';  // ✅\n```\n\n**Key differences:**\n```javascript\n// DEFAULT EXPORT:\n// - One per file\n// - Import with any name\n// - No curly braces\n\nexport default function calc() {}\nimport anyName from './module';  // ✅\n\n// NAMED EXPORT:\n// - Multiple per file\n// - Import with exact name (or alias)\n// - Requires curly braces\n\nexport function add() {}\nexport function subtract() {}\nimport { add, subtract } from './module';  // ✅\nimport { add as plus } from './module';    // ✅ Alias\nimport { sum } from './module';            // ❌ No 'sum'\n```\n\n**Complete example:**\n```javascript\n// utils.js - Can have both!\nexport default function main() {  // Default\n  return 'main';\n}\n\nexport function helper1() {  // Named\n  return 'helper1';\n}\n\nexport function helper2() {  // Named\n  return 'helper2';\n}\n\n// Import combinations:\nimport utils from './utils';  // Default only\nimport { helper1 } from './utils';  // Named only\nimport utils, { helper1, helper2 } from './utils';  // Both!\nimport anything, { helper1 as h1 } from './utils';  // Rename!\n```\n\n**Quantity limits:**\n```javascript\n// ✅ One default per file:\nexport default function a() {}\nexport default function b() {}  // ❌ Error! Only one default\n\n// ✅ Multiple named per file:\nexport function a() {}\nexport function b() {}\nexport function c() {}  // ✅ No limit!\n```\n\n**Memory trick:** Default = flexible name, Named = exact name (or alias)!",
    tags: ['javascript', 'quiz', 'modules', 'default-vs-named'],
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
    explanation: "**Namespace imports group all exports under one object** - clean and organized!\n\n**Think of namespace import like a toolbox** - all tools (exports) organized in one container with labeled compartments!\n\n**What happens:**\n```javascript\n// math.js\nexport const PI = 3.14;\nexport function double(x) { return x * 2; }\n\n// main.js\nimport * as math from './math.js';\n\n// math is now an object:\n// {\n//   PI: 3.14,\n//   double: [Function: double]\n// }\n\nconsole.log(math.PI);        // 3.14 ✅\nconsole.log(math.double(5)); // 10 ✅\n```\n\n**Why namespace imports are useful:**\n```javascript\n// Without namespace - imports pollute scope:\nimport { PI, E, square, cube, sqrt } from './math';\n// 5 variables in current scope\n\nPI;      // 3.14\nsquare(2);  // 4\n\n// With namespace - cleaner:\nimport * as math from './math';\n// 1 variable in current scope\n\nmath.PI;      // 3.14\nmath.square(2);  // 4\n// Clear what comes from math module!\n```\n\n**Complete namespace example:**\n```javascript\n// colors.js\nexport const RED = '#FF0000';\nexport const GREEN = '#00FF00';\nexport const BLUE = '#0000FF';\nexport function hexToRgb(hex) { /* ... */ }\nexport function rgbToHex(r, g, b) { /* ... */ }\n\n// app.js\nimport * as colors from './colors';\n\nconsole.log(colors.RED);       // '#FF0000'\nconsole.log(colors.GREEN);     // '#00FF00'\ncolors.hexToRgb('#FF0000');    // Function call\ncolors.rgbToHex(255, 0, 0);    // Function call\n\n// All color utilities under one namespace!\n```\n\n**Accessing namespace properties:**\n```javascript\nimport * as math from './math';\n\n// Direct access:\nmath.PI;  // 3.14\n\n// Can't destructure later:\nconst { PI } = math;  // ✅ Works\nPI;  // 3.14\n\n// Can iterate:\nfor (const key in math) {\n  console.log(key, math[key]);\n}\n// PI 3.14\n// double [Function: double]\n```\n\n**Memory trick:** import * as name = all exports under one namespace object!",
    tags: ['javascript', 'quiz', 'modules', 'namespace'],
  }
];
