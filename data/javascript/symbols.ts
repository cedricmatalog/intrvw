import { QuizQuestion } from '../../types/quiz';

export const symbolsQuizzes: QuizQuestion[] = [
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
    explanation: "**Every Symbol() call creates a UNIQUE symbol** - even with identical descriptions!\n\n**Think of Symbols like snowflakes** - even if they look the same (description), no two are ever identical!\n\n**What happens:**\n```javascript\n// Numbers - same value = equal\nNumber(2) === Number(2);  // true ✅\n// Both are primitive value 2\n\n// Booleans - same value = equal\nBoolean(false) === Boolean(false);  // true ✅\n// Both are primitive value false\n\n// Symbols - ALWAYS unique!\nSymbol(\"foo\") === Symbol(\"foo\");  // false ✅\n//        ^^^ Each call creates NEW unique symbol\n```\n\n**Why Symbols are unique:**\n```javascript\nconst sym1 = Symbol(\"foo\");\nconst sym2 = Symbol(\"foo\");\n\nsym1 === sym2;  // false ❌\n// Even same description, different symbols!\n\n// The description is just a label, like:\nconst person1 = { name: \"John\" };  // John #1\nconst person2 = { name: \"John\" };  // John #2\nperson1 === person2;  // false (different objects)\n```\n\n**Symbol purpose - guaranteed uniqueness:**\n```javascript\n// Use case: private object properties\nconst id = Symbol(\"id\");\nconst obj = {\n  [id]: \"secret\",\n  name: \"public\"\n};\n\nconst anotherId = Symbol(\"id\");\nobj[anotherId];  // undefined (different symbol!)\nobj[id];         // \"secret\" (correct symbol)\n```\n\n**Compare with primitives:**\n```javascript\n// Primitives: value equality\n2 === 2;              // true\n\"foo\" === \"foo\";      // true\ntrue === true;        // true\n\n// Symbols: identity equality (always unique)\nSymbol() === Symbol();          // false\nSymbol(\"x\") === Symbol(\"x\");    // false\nSymbol.for(\"x\") === Symbol.for(\"x\");  // true (exception!)\n```\n\n**Memory trick:** Symbol() = guaranteed unique, description is just a label!",
    tags: ["javascript","quiz", "symbols", "uniqueness"],
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
    explanation: "**Symbol properties are NOT enumerable** - they're hidden from Object.keys(), for...in, and JSON.stringify()!\n\n**Think of Symbol properties like secret compartments** - you can see the object (console.log), but opening the drawer (Object.keys) won't reveal the secret compartment!\n\n**What happens:**\n```javascript\nconst info = {\n  [Symbol(\"a\")]: \"b\",\n};\n\n// Console.log shows ALL properties (even symbols):\nconsole.log(info);  // {Symbol('a'): 'b'} ✅\n// Console can see everything\n\n// Object.keys only shows enumerable (non-symbol) keys:\nconsole.log(Object.keys(info));  // [] ✅\n// Symbols are not enumerable!\n```\n\n**Why symbols are hidden:**\n```javascript\nconst id = Symbol(\"id\");\nconst user = {\n  name: \"John\",\n  age: 30,\n  [id]: \"secret123\"\n};\n\n// These methods ignore symbols:\nObject.keys(user);         // ['name', 'age'] ← No symbol!\nfor (let key in user) {}   // Only 'name' and 'age'\nJSON.stringify(user);      // {\"name\":\"John\",\"age\":30}\n\n// But symbol is still there:\nuser[id];  // \"secret123\" ✅\n```\n\n**How to access symbol properties:**\n```javascript\nconst sym = Symbol(\"test\");\nconst obj = {\n  regular: \"visible\",\n  [sym]: \"hidden\"\n};\n\n// Get only symbols:\nObject.getOwnPropertySymbols(obj);  // [Symbol(test)] ✅\n\n// Get all keys (strings + symbols):\nReflect.ownKeys(obj);  // ['regular', Symbol(test)] ✅\n```\n\n**Symbol use case - avoid name collision:**\n```javascript\n// Library A adds property:\nconst obj = { id: \"A's id\" };\n\n// Library B wants to add id too:\n// ❌ String key - collision!\nobj.id = \"B's id\";  // Overwrites A's id!\n\n// ✅ Symbol key - no collision!\nconst idB = Symbol(\"id\");\nobj[idB] = \"B's id\";  // Safe!\nobj.id;    // \"B's id\" (A's id was overwritten)\nobj[idB];  // \"B's id\" (B's id is separate)\n```\n\n**Memory trick:** Symbols = hidden from enumeration, visible in console!",
    tags: ["javascript","quiz", "symbols", "enumeration"],
  },

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
    explanation: "**Symbol() creates unique symbols, Symbol.for() uses a global registry** - one makes snowflakes, the other looks up a shared catalog!\n\n**Think of Symbol() like generating random IDs** - always unique. Symbol.for() is like a phone book - same name, same number!\n\n**What happens:**\n```javascript\n// Symbol() - always creates NEW unique symbol:\nconst sym1 = Symbol('foo');\nconst sym2 = Symbol('foo');\nsym1 === sym2;  // false ✅\n// Different symbols, description is just a label\n\n// Symbol.for() - looks up/creates in GLOBAL registry:\nSymbol.for('bar') === Symbol.for('bar');  // true ✅\n// Both calls return THE SAME symbol from registry\n```\n\n**Symbol.for() global registry:**\n```javascript\n// First call - creates symbol in registry:\nconst s1 = Symbol.for('myApp');\n\n// Second call - finds existing symbol:\nconst s2 = Symbol.for('myApp');\n\ns1 === s2;  // true ✅ Same symbol!\n\n// Get the key back:\nSymbol.keyFor(s1);  // 'myApp'\nSymbol.keyFor(s2);  // 'myApp'\n```\n\n**Compare the two:**\n```javascript\n// Symbol() - local, unique:\nconst local1 = Symbol('test');\nconst local2 = Symbol('test');\nlocal1 === local2;  // false ❌\nSymbol.keyFor(local1);  // undefined (not in registry)\n\n// Symbol.for() - global, shared:\nconst global1 = Symbol.for('test');\nconst global2 = Symbol.for('test');\nglobal1 === global2;  // true ✅\nSymbol.keyFor(global1);  // 'test'\n```\n\n**When to use each:**\n```javascript\n// Use Symbol() for private/unique keys:\nconst privateId = Symbol('id');\nobj[privateId] = 'secret';  // Won't conflict with anything\n\n// Use Symbol.for() for cross-realm sharing:\n// Module A:\nconst LOG_LEVEL = Symbol.for('app.logLevel');\n\n// Module B (different file):\nconst LOG_LEVEL = Symbol.for('app.logLevel');\n// Same symbol! Can use for communication\n```\n\n**Visual representation:**\n```javascript\n// Symbol() - new every time:\nSymbol('x') → Unique-ID-1\nSymbol('x') → Unique-ID-2 (different!)\nSymbol('x') → Unique-ID-3 (different!)\n\n// Symbol.for() - registry lookup:\nSymbol.for('x') → Checks registry → Not found → Create & store → Return\nSymbol.for('x') → Checks registry → Found! → Return same\nSymbol.for('x') → Checks registry → Found! → Return same\n```\n\n**Memory trick:** Symbol() = always unique, Symbol.for() = global singleton!",
    tags: ['javascript', 'quiz', 'symbols', 'Symbol.for'],
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
    explanation: "**Symbol properties are invisible to Object.keys()** - but still accessible directly!\n\n**Think of symbol properties like invisible ink** - Object.keys() can't see them, but you can read them if you know where to look (have the symbol)!\n\n**What happens:**\n```javascript\nconst id = Symbol('id');\nconst obj = {\n  [id]: 123,        // Symbol property\n  name: 'John'      // Regular property\n};\n\n// Object.keys() skips symbols:\nObject.keys(obj);  // ['name'] ✅\n// Only string keys are enumerable\n\n// But direct access works:\nobj[id];  // 123 ✅\n// Symbol property exists and is accessible\n```\n\n**Why symbols are skipped:**\n```javascript\nconst sym = Symbol('test');\nconst obj = {\n  regular: 'visible',\n  [sym]: 'hidden'\n};\n\n// All these skip symbols:\nObject.keys(obj);              // ['regular']\nObject.values(obj);            // ['visible']\nObject.entries(obj);           // [['regular', 'visible']]\nfor (let key in obj) {}        // Only 'regular'\nJSON.stringify(obj);           // {\"regular\":\"visible\"}\n\n// But symbol is there:\nobj[sym];  // 'hidden' ✅\n```\n\n**How to find symbol properties:**\n```javascript\nconst id = Symbol('id');\nconst user = {\n  name: 'John',\n  [id]: 123\n};\n\n// Get only symbol keys:\nObject.getOwnPropertySymbols(user);  // [Symbol(id)] ✅\n\n// Get ALL keys (strings + symbols):\nReflect.ownKeys(user);  // ['name', Symbol(id)] ✅\n```\n\n**Accessing symbol properties:**\n```javascript\nconst id = Symbol('id');\nconst obj = { [id]: 'value' };\n\n// ✅ Access with symbol variable:\nobj[id];  // 'value'\n\n// ❌ Can't access with string:\nobj['id'];  // undefined\nobj['Symbol(id)'];  // undefined\n\n// ❌ Lost reference = lost access:\nconst obj2 = { [Symbol('id')]: 'value' };\n// Can't access anymore! Symbol was not saved\n```\n\n**Use case - truly private properties:**\n```javascript\n// Module A:\nconst privateKey = Symbol('private');\n\nexport const createUser = (name) => ({\n  name,\n  [privateKey]: 'secret data'\n});\n\nconst user = createUser('John');\nObject.keys(user);  // ['name'] (privateKey hidden)\nJSON.stringify(user);  // {\"name\":\"John\"} (secret not leaked!)\n\n// Can't access without the symbol:\nuser.private;  // undefined\nuser['private'];  // undefined\n// Only code with access to 'privateKey' can read it\n```\n\n**Memory trick:** Object.keys() = blind to symbols, direct access = works!",
    tags: ['javascript', 'quiz', 'symbols', 'Object.keys'],
  }
];
