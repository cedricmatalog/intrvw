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
    explanation: "**Functions ARE objects** - you can add properties to them!\n\n**Think of functions like Swiss Army knives** - they're tools (callable), but they also have compartments (properties) you can store stuff in!\n\n**What happens:**\n```javascript\nfunction bark() {\n  console.log(\"Woof!\");\n}\n\n// Functions are objects, so this works:\nbark.animal = \"dog\";  // ✅ Totally fine!\n\n// Access the property:\nbark.animal;  // \"dog\"\n\n// Call the function:\nbark();  // \"Woof!\"\n\n// Both work!\n```\n\n**Functions are special objects:**\n```javascript\nfunction greet() {\n  return \"Hello!\";\n}\n\n// Add custom properties:\ngreet.language = \"English\";\ngreet.formal = false;\ngreet.count = 0;\n\n// All work!\ngreet.language;  // \"English\"\ngreet.formal;    // false\n\n// Function is still callable:\ngreet();  // \"Hello!\"\n```\n\n**Practical use case - caching:**\n```javascript\nfunction expensive(n) {\n  // Check cache:\n  if (expensive.cache[n]) {\n    return expensive.cache[n];\n  }\n  \n  // Compute (expensive operation):\n  const result = n * n;\n  \n  // Store in cache:\n  expensive.cache[n] = result;\n  return result;\n}\n\n// Initialize cache property:\nexpensive.cache = {};\n\nexpensive(5);  // Computes: 25\nexpensive(5);  // From cache: 25 (faster!)\n```\n\n**Functions have built-in properties:**\n```javascript\nfunction sum(a, b) {\n  return a + b;\n}\n\n// Built-in properties:\nsum.name;      // \"sum\" (function name)\nsum.length;    // 2 (number of parameters)\nsum.prototype; // {} (for constructor functions)\n\n// Plus your custom properties:\nsum.description = \"Adds two numbers\";\n```\n\n**Memory trick:** Functions = callable objects, can have properties!",
    tags: ["javascript","quiz", "functions-as-objects"],
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
    explanation: "**Object keys are ALWAYS strings** - objects used as keys become \"[object Object]\"!\n\n**Think of object keys like name tags** - everything gets converted to a string label, even other objects (which all get the same generic \"[object Object]\" label)!\n\n**What happens:**\n```javascript\nconst a = {};\nconst b = { key: \"b\" };\nconst c = { key: \"c\" };\n\n// Step 1: a[b] = 123\n// b is an object, converts to string: \"[object Object]\"\na[\"[object Object]\"] = 123;\n\n// Step 2: a[c] = 456\n// c is ALSO an object, ALSO converts to: \"[object Object]\"\na[\"[object Object]\"] = 456;  // Overwrites!\n\n// Step 3: console.log(a[b])\n// b converts to \"[object Object]\"\nconsole.log(a[\"[object Object]\"]);  // 456 ✅\n```\n\n**Why both objects become the same key:**\n```javascript\nString(b);  // \"[object Object]\"\nString(c);  // \"[object Object]\"\n// Same string! Same key!\n\n// Object a now looks like:\n{\n  \"[object Object]\": 456  // Only ONE key!\n}\n```\n\n**Step-by-step timeline:**\n```javascript\nconst a = {};  // {}\n\na[b] = 123;  \n// a = { \"[object Object]\": 123 }\n\na[c] = 456;  \n// a = { \"[object Object]\": 456 }  ← Overwritten!\n\na[b];  // 456 ✅\n// Both b and c stringify to same key\n```\n\n**Proof:**\n```javascript\nconst b = { key: \"b\" };\nconst c = { key: \"c\" };\n\n// Convert to strings:\nString(b);  // \"[object Object]\"\nString(c);  // \"[object Object]\"\n\n// They're the SAME string!\nString(b) === String(c);  // true ✅\n```\n\n**Using Map for object keys:**\n```javascript\nconst a = new Map();  // Use Map instead\nconst b = { key: \"b\" };\nconst c = { key: \"c\" };\n\na.set(b, 123);  // Uses b as key (by reference)\na.set(c, 456);  // Uses c as key (different object!)\n\nconsole.log(a.get(b));  // 123 ✅\nconsole.log(a.get(c));  // 456 ✅\n// Map preserves object identity!\n```\n\n**Memory trick:** Object keys = strings only, objects → \"[object Object]\"!",
    tags: ["javascript","quiz", "object-keys", "type-coercion"],
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
    explanation: "**Dot notation doesn't evaluate expressions** - bracket notation does!\n\n**What's invalid:**\n```javascript\nmouse.bird.size\n// → mouse.bird is undefined (no 'bird' property)\n// → undefined.size throws TypeError! ❌\n// \"Cannot read property 'size' of undefined\"\n```\n\n**What's valid:**\n```javascript\n// Option 2: mouse[bird.size]\nbird.size  // \"small\" (evaluate first)\nmouse[\"small\"]  // true ✅\n\n// Option 3: mouse[bird[\"size\"]]\nbird[\"size\"]  // \"small\" (evaluate first)\nmouse[\"small\"]  // true ✅\n```\n\n**Dot vs bracket notation:**\n```javascript\n// DOT NOTATION - literal property name:\nmouse.bird  // Looks for property named \"bird\"\nmouse.size  // Looks for property named \"size\"\n// NO evaluation!\n\n// BRACKET NOTATION - evaluates expression:\nmouse[bird.size]  // Evaluates bird.size → \"small\"\n//                // Then mouse[\"small\"] → true ✅\n\nmouse[\"name\"]  // Direct string\nmouse.name     // Same as above\n```\n\n**Step-by-step evaluation:**\n```javascript\n// Invalid: mouse.bird.size\nmouse.bird      // undefined (no property \"bird\")\n  .size         // undefined.size → TypeError! ❌\n\n// Valid: mouse[bird.size]\nbird.size       // \"small\"\nmouse[\"small\"]  // true ✅\n\n// Valid: mouse[bird[\"size\"]]\nbird[\"size\"]    // \"small\"\nmouse[\"small\"]  // true ✅\n```\n\n**Why dot notation fails:**\n```javascript\n// Dot notation looks for EXACT property name:\nmouse.bird  // undefined (mouse has no \"bird\" property)\n\n// Can't chain on undefined:\nundefined.size  // TypeError!\n\n// Compare with:\nmouse.name  // \"Mickey\" ✅ (property exists)\nmouse.name.length  // 6 ✅ (can chain)\n```\n\n**Memory trick:** Dot = literal name, brackets = evaluate expression!",
    tags: ["javascript","quiz", "property-access"],
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
    explanation: "**Destructuring expects an object** - passing primitives doesn't match!\n\n**What happens:**\n```javascript\nconst myFunc = ({ x, y, z }) => {\n//              ^^^^^^^^^^^^ Expects ONE object argument\n  console.log(x, y, z);\n};\n\nmyFunc(1, 2, 3);\n//     ^^^^^^^ Passes three separate arguments\n\n// Destructuring attempts:\n// { x, y, z } = 1  (tries to destructure from 1)\n// x = undefined (1 has no property 'x')\n// y = undefined\n// z = undefined\n\n// Output: undefined undefined undefined ✅\n```\n\n**What the function expects:**\n```javascript\n// Correct usage:\nmyFunc({ x: 1, y: 2, z: 3 });\n// Destructures: x=1, y=2, z=3\n// Output: 1 2 3 ✅\n\n// Or with shorthand:\nconst obj = { x: 1, y: 2, z: 3 };\nmyFunc(obj);\n// Output: 1 2 3 ✅\n```\n\n**What actually happens:**\n```javascript\nmyFunc(1, 2, 3);\n\n// Function receives:\n// First parameter: { x, y, z } = 1\n// Tries to destructure from number 1\n// Numbers don't have properties x, y, z\n// So: x = undefined, y = undefined, z = undefined\n\n// The 2 and 3 are ignored (no parameters for them)\n```\n\n**Comparison:**\n```javascript\n// Destructuring parameter:\nconst func1 = ({ x, y, z }) => console.log(x, y, z);\nfunc1({ x: 1, y: 2, z: 3 });  // 1 2 3 ✅\nfunc1(1, 2, 3);               // undefined undefined undefined ❌\n\n// Regular parameters:\nconst func2 = (x, y, z) => console.log(x, y, z);\nfunc2(1, 2, 3);               // 1 2 3 ✅\nfunc2({ x: 1, y: 2, z: 3 });  // {x:1,y:2,z:3} undefined undefined ❌\n```\n\n**Memory trick:** Destructuring = expects object, not separate values!",
    tags: ["javascript","quiz", "destructuring", "parameters"],
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
    explanation: "**Default parameters create NEW objects each time** - but explicit arguments are shared!\n\n**What happens:**\n```javascript\n// Call 1: multiply()\n// No argument → uses default: {...value} (NEW object)\n// x = { number: 10 }\n// x.number *= 2 → 20 ✅\n\n// Call 2: multiply()\n// No argument → uses default: {...value} (NEW object again)\n// x = { number: 10 } (fresh copy!)\n// x.number *= 2 → 20 ✅\n\n// Call 3: multiply(value)\n// Argument provided → uses value object (SAME object)\n// x = value (reference!)\n// value.number = 10\n// x.number *= 2 → 20 ✅\n// value.number is now 20 (modified!)\n\n// Call 4: multiply(value)\n// Argument provided → uses value object (SAME object)\n// x = value (reference!)\n// value.number = 20 (from previous call)\n// x.number *= 2 → 40 ✅\n// value.number is now 40\n\n// Output: 20, 20, 20, 40\n```\n\n**Key insight - default evaluated at call time:**\n```javascript\nconst multiply = (x = { ...value }) => {\n//                    ^^^^^^^^^^^ NEW object each call\n  console.log((x.number *= 2));\n};\n\n// Each call without arguments:\nmultiply();  // Creates { number: 10 }, modifies to 20\nmultiply();  // Creates NEW { number: 10 }, modifies to 20\n// Each gets a fresh copy from ...value\n```\n\n**When argument is passed:**\n```javascript\n// Passing value object:\nmultiply(value);  // x = value (same reference)\nmultiply(value);  // x = value (SAME object again)\n\n// Mutations persist:\nvalue.number;  // 40 (modified by both calls)\n```\n\n**Visual timeline:**\n```javascript\nconst value = { number: 10 };\n\n1. multiply()\n   → x = {...value} = { number: 10 } (new object)\n   → x.number *= 2 → 20\n   → value.number still 10\n\n2. multiply()\n   → x = {...value} = { number: 10 } (new object)\n   → x.number *= 2 → 20\n   → value.number still 10\n\n3. multiply(value)\n   → x = value (same object!)\n   → x.number *= 2 → 20\n   → value.number now 20 ✅\n\n4. multiply(value)\n   → x = value (same object!)\n   → value.number = 20\n   → x.number *= 2 → 40\n   → value.number now 40 ✅\n```\n\n**Memory trick:** Default params = new object each time, passed args = shared reference!",
    tags: ["javascript","quiz", "default-parameters", "spread"],
  },
];
