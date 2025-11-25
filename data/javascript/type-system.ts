import { QuizQuestion } from '../../types/quiz';

export const type_systemQuizzes: QuizQuestion[] = [
{
    id: 'js-001',
    question: "🖥️ What's the output?\n\n```javascript\nconsole.log(typeof typeof 1);\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "\"number\"",
          "\"string\"",
          "\"object\"",
          "\"undefined\""
    ],
    correctAnswer: 1,
    explanation: "**typeof always returns a string** - even when checking the type of a type!\n\n**Think of typeof like a label maker** - it always produces a string label, never the actual thing!\n\n**Step-by-step:**\n```javascript\n// Inner typeof:\ntypeof 1  // \"number\" (string)\n\n// Outer typeof:\ntypeof \"number\"  // \"string\" ✅\n// Because \"number\" is a string!\n\nconsole.log(typeof typeof 1);  // \"string\"\n```\n\n**Why it's a string:**\n```javascript\n// typeof ALWAYS returns a string:\ntypeof 1         // \"number\" ← string\ntypeof \"hello\"   // \"string\" ← string\ntypeof true      // \"boolean\" ← string\ntypeof {}        // \"object\" ← string\ntypeof []        // \"object\" ← string\ntypeof null      // \"object\" ← string (quirk!)\n\n// So typeof of typeof is always \"string\":\ntypeof typeof anything  // \"string\" ✅\n```\n\n**Visual breakdown:**\n```javascript\ntypeof typeof 1\n       ^^^^^^^^\n       Step 1: typeof 1 → \"number\"\n       \ntypeof \"number\"\n^^^^^^^^^^^^^^^^\nStep 2: typeof \"number\" → \"string\" ✅\n```\n\n**This pattern:**\n```javascript\ntypeof typeof 1        // \"string\"\ntypeof typeof \"hi\"     // \"string\"\ntypeof typeof true     // \"string\"\ntypeof typeof {}       // \"string\"\ntypeof typeof null     // \"string\"\n\n// ALL return \"string\" because typeof returns strings!\n```\n\n**Memory trick:** typeof returns strings, so typeof typeof = \"string\"!",
    tags: ["javascript","quiz", "typeof"],
  },

{
    id: 'js-020',
    question: "🖥️ What's the output?\n\n```javascript\nlet randomValue = { name: \"Lydia\" };\nrandomValue = 23;\n\nif (!typeof randomValue === \"string\") {\n  console.log(\"It's not a string!\");\n} else {\n  console.log(\"Yay it's a string!\");\n}\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "It's not a string!",
          "Yay it's a string!",
          "TypeError",
          "undefined"
    ],
    correctAnswer: 1,
    explanation: "**Operator precedence gotcha!** The ! operator runs BEFORE === comparison!\n\n**Think of this like PEMDAS** - NOT (!) comes before comparison (===), just like multiplication before addition!\n\n**What happens:**\n```javascript\nrandomValue = 23;\n\n// The condition:\nif (!typeof randomValue === \"string\") {\n//  ^^^^^^^^^^^^^^^^^^^\n//  This evaluates FIRST!\n\n// Step 1: typeof randomValue\ntypeof 23  // \"number\"\n\n// Step 2: !\"number\" (NOT operator)\n!\"number\"  // false (non-empty string is truthy, ! makes it false)\n\n// Step 3: false === \"string\"\nfalse === \"string\"  // false ✅\n\n// Condition is false, so else block runs:\n\"Yay it's a string!\" ✅\n```\n\n**Operator precedence:**\n```javascript\n!typeof randomValue === \"string\"\n// Parsed as:\n(!typeof randomValue) === \"string\"\n//  ^^^^^^^^^^^^^^^^^\n//  Evaluated first!\n\n// NOT as (what you might expect):\n!(typeof randomValue === \"string\")  ❌\n```\n\n**Step-by-step breakdown:**\n```javascript\n// 1. typeof randomValue\n23 → \"number\"\n\n// 2. ! operator (negation)\n!\"number\" → false\n// Any non-empty string is truthy\n// !truthy = false\n\n// 3. Comparison\nfalse === \"string\" → false\n\n// 4. Result\nif (false) → else block runs ✅\n```\n\n**The correct way:**\n```javascript\n// If you want to check if it's NOT a string:\nif (typeof randomValue !== \"string\") {\n  console.log(\"It's not a string!\");  // ✅ This would run\n}\n\n// Or with parentheses:\nif (!(typeof randomValue === \"string\")) {\n  console.log(\"It's not a string!\");  // ✅ This would run\n}\n```\n\n**Why the original is always false:**\n```javascript\n!typeof anything === \"string\"  // Always false!\n\n// Because:\ntypeof anything  // Always a string (\"number\", \"string\", etc.)\n!\"any string\"    // Always false (strings are truthy)\nfalse === \"string\"  // Always false\n```\n\n**Memory trick:** ! runs before ===, so !typeof x === \"string\" is always false!",
    tags: ["javascript","quiz", "operator-precedence", "typeof"],
  },

{
    id: 'js-028',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia\";\n\nconsole.log(name());\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "SyntaxError",
          "ReferenceError",
          "TypeError",
          "undefined"
    ],
    correctAnswer: 2,
    explanation: "**TypeError: trying to use a value as the wrong type** - strings aren't callable!\n\n**Think of error types like medical diagnoses** - TypeError = using wrong tool for job, ReferenceError = can't find it, SyntaxError = gibberish!\n\n**What happens:**\n```javascript\nconst name = \"Lydia\";  // String, not a function\n\nname();  // TypeError! ❌\n// \"name is not a function\"\n```\n\n**JavaScript error types:**\n```javascript\n// TypeError - wrong type for operation:\nconst str = \"hello\";\nstr();  // TypeError: str is not a function\nconst num = 5;\nnum.toUpperCase();  // TypeError: not a function\n\n// ReferenceError - variable doesn't exist:\nconsole.log(doesNotExist);  // ReferenceError\n\n// SyntaxError - invalid JavaScript:\nconst x = ;  // SyntaxError: Unexpected token\nretrun 5;    // SyntaxError: Unexpected identifier\n```\n\n**Why TypeError specifically:**\n```javascript\n// Variable exists and is accessible:\nconst name = \"Lydia\";  // ✅ Defined\n\n// Problem: trying to CALL it (wrong type!):\nname()  // TypeError ❌\n// JavaScript expected: function\n// Got: string\n```\n\n**Error type guide:**\n```javascript\n// TYPEERROR - value exists, wrong type:\n\"string\"()           // TypeError\n5.toUpperCase()      // TypeError\nnull.property        // TypeError\n\n// REFERENCEERROR - value doesn't exist:\nnotDefined           // ReferenceError\nconsole.log(x);      // ReferenceError (if x not declared)\n\n// SYNTAXERROR - invalid code:\nconst x = ;          // SyntaxError\nif (true { }         // SyntaxError (missing )\nretrun 5;            // SyntaxError (typo)\n```\n\n**Complete example:**\n```javascript\nconst greeting = \"Hello\";\n\n// These throw TypeError:\ngreeting();              // Not a function\ngreeting.push('!');      // Not an array\nnew greeting();          // Not a constructor\n\n// These work:\ngreeting.toUpperCase();  // String method ✅\ngreeting.length;         // String property ✅\ngreeting[0];             // String indexing ✅\n```\n\n**Memory trick:** TypeError = exists but wrong type, ReferenceError = doesn't exist, SyntaxError = invalid code!",
    tags: ["javascript","quiz", "TypeError", "errors"],
  },

{
    id: 'js-135',
    question: "🔢 Which of these values are falsy?\n\n```javascript\n0;\nnew Number(0);\n(\"\");\n(\" \");\nnew Boolean(false);\nundefined;\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "0, '', undefined",
          "0, new Number(0), '', new Boolean(false), undefined",
          "0, '', new Boolean(false), undefined",
          "All of them are falsy"
    ],
    correctAnswer: 0,
    explanation: "**Only 8 values are falsy** - object wrappers are ALWAYS truthy!\n\n**Think of falsy values like the \"empty\" club** - only 8 members allowed, and objects aren't invited (even if they wrap falsy primitives)!\n\n**The complete falsy list:**\n```javascript\n// The 8 falsy values:\nfalse        // Boolean false\n0            // Number zero ✅\n-0           // Negative zero\n0n           // BigInt zero\n\"\"           // Empty string ✅\nnull         // Null\nundefined    // Undefined ✅\nNaN          // Not a Number\n\n// EVERYTHING ELSE is truthy!\n```\n\n**Why object wrappers are truthy:**\n```javascript\n// Primitives (can be falsy):\n0              // falsy ✅\nfalse          // falsy ✅\n\"\"             // falsy ✅\n\n// Object wrappers (ALWAYS truthy!):\nnew Number(0)        // truthy! ❌\nnew Boolean(false)   // truthy! ❌\nnew String(\"\")       // truthy! ❌\n\n// Because they're OBJECTS, and objects are truthy!\ntypeof new Number(0)  // \"object\" (not \"number\")\n```\n\n**Testing from the question:**\n```javascript\n0                    // falsy ✅\nnew Number(0)        // truthy (it's an object!)\n\"\"                   // falsy ✅\n\" \"                  // truthy (non-empty string!)\nnew Boolean(false)   // truthy (it's an object!)\nundefined            // falsy ✅\n\n// Answer: 0, \"\", undefined\n```\n\n**The space string trap:**\n```javascript\n\"\"   // falsy ✅ (empty)\n\" \"  // truthy ✅ (has a space character!)\n\"  \" // truthy (any non-empty string)\n\nif (\" \") {\n  console.log(\"Truthy!\");  // This runs!\n}\n```\n\n**Object wrapper behavior:**\n```javascript\n// Even wrapping falsy values:\nconst wrappedFalse = new Boolean(false);\nconst wrappedZero = new Number(0);\nconst wrappedEmpty = new String(\"\");\n\nif (wrappedFalse) {\n  console.log(\"Truthy!\");  // Runs! ✅\n}\n\nif (wrappedZero) {\n  console.log(\"Truthy!\");  // Runs! ✅\n}\n\n// Because typeof all of them is \"object\"\n// And objects are truthy!\n```\n\n**Checking truthiness:**\n```javascript\n// Convert to boolean:\nBoolean(0)                  // false\nBoolean(new Number(0))      // true!\nBoolean(\"\")                 // false\nBoolean(\" \")                // true\nBoolean(new Boolean(false)) // true!\nBoolean(undefined)          // false\n\n// Using !!:\n!!0                    // false\n!!new Number(0)        // true\n!!\"\"                   // false\n!!\" \"                  // true\n!!new Boolean(false)   // true\n!!undefined            // false\n```\n\n**Memory trick:** Only 8 falsy values (false, 0, -0, 0n, \"\", null, undefined, NaN), objects always truthy!",
    tags: ["javascript","quiz", "falsy", "truthy", "type-coercion"],
  },

{
    id: 'js-164',
    question: "📤 Everything in JavaScript is either a...",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "primitive or object",
          "function or object",
          "trick question! only objects",
          "number or object"
    ],
    correctAnswer: 0,
    explanation: "**JavaScript has exactly two categories: primitives and objects** - that's it!\n\n**Think of JavaScript types like matter** - solid/liquid/gas vs plasma. Primitives (7 types) vs objects (everything else)!\n\n**The 7 primitive types:**\n```javascript\n// Primitives:\n1. string        // \"hello\"\n2. number        // 42, 3.14\n3. bigint        // 123n\n4. boolean       // true, false\n5. undefined     // undefined\n6. null          // null\n7. symbol        // Symbol(\"id\")\n\n// Everything else is an OBJECT:\nObject, Array, Function, Date, RegExp, Map, Set, etc.\n```\n\n**Key differences:**\n```javascript\n// PRIMITIVES:\n// - Immutable (can't be changed)\n// - Passed by value\n// - No methods (but can borrow via wrapper)\n\nlet str = \"hello\";\nstr[0] = \"H\";  // Doesn't work (immutable)\nstr;  // Still \"hello\"\n\n// OBJECTS:\n// - Mutable (can be changed)\n// - Passed by reference\n// - Have methods and properties\n\nlet obj = { name: \"John\" };\nobj.name = \"Jane\";  // Works! (mutable)\nobj.name;  // \"Jane\"\n```\n\n**The wrapper magic:**\n```javascript\n// Primitives don't have methods...\nconst str = \"hello\";\n// But this works?!\nstr.toUpperCase();  // \"HELLO\" ✅\n\n// Behind the scenes:\n// 1. JavaScript wraps: new String(\"hello\")\n// 2. Calls method: wrapper.toUpperCase()\n// 3. Discards wrapper immediately\n\n// Same for numbers:\nconst num = 42;\nnum.toString();  // \"42\"\n// Wrapped as: new Number(42).toString()\n```\n\n**Functions are objects:**\n```javascript\nfunction greet() {\n  return \"Hello\";\n}\n\n// Functions are callable objects:\ntypeof greet;  // \"function\" (special case)\ngreet instanceof Object;  // true ✅\n\n// Can have properties like objects:\ngreet.language = \"English\";\ngreet.language;  // \"English\"\n```\n\n**Primitives vs wrapper objects:**\n```javascript\n// Primitive:\nconst str1 = \"hello\";\ntypeof str1;  // \"string\" (primitive)\n\n// Wrapper object:\nconst str2 = new String(\"hello\");\ntypeof str2;  // \"object\" ❌\n\nstr1 === str2;  // false (different types!)\nstr1 == str2;   // true (coercion)\n```\n\n**null and undefined exceptions:**\n```javascript\n// null and undefined have NO wrapper:\n// So they can't borrow methods:\n\nnull.toString();       // TypeError!\nundefined.toString();  // TypeError!\n\n// All other primitives can:\n\"hi\".toUpperCase();    // ✅\n(42).toString();       // ✅\ntrue.toString();       // ✅\nSymbol().toString();   // ✅\n```\n\n**Memory trick:** 7 primitives (string, number, bigint, boolean, undefined, null, symbol), everything else = objects!",
    tags: ["javascript","quiz", "primitives", "objects", "type-system"],
  },

{
    id: 'js-002',
    question: "🖥️ What's the output?\n\n```javascript\n!!null;\n!!\"\";\n!!1;\n```",
    category: 'javascript',
    subcategory: 'type-system',
    difficulty: 'medium',
    options: [
          "false true false",
          "false false true",
          "false true true",
          "true true false"
    ],
    correctAnswer: 1,
    explanation: "**Double negation (!!) converts to boolean** - falsy becomes false, truthy becomes true!\n\n**Think of !! like a truth detector** - first ! flips it, second ! flips it back, converting to boolean in the process!\n\n**What happens:**\n```javascript\n// !!null\nnull      // falsy\n!null     // true (first ! converts to boolean and flips)\n!!null    // false ✅ (second ! flips back)\n\n// !!\"\"\n\"\"        // falsy (empty string)\n!\"\"       // true\n!!\"\"      // false ✅\n\n// !!1\n1         // truthy\n!1        // false\n!!1       // true ✅\n\n// Output: false false true\n```\n\n**Step-by-step breakdown:**\n```javascript\n// First !: converts to boolean and negates\n!null     // true (falsy → true)\n!\"\"       // true (falsy → true)\n!1        // false (truthy → false)\n\n// Second !: negates again (= original truthiness)\n!!null    // false (true → false)\n!!\"\"      // false (true → false)\n!!1       // true (false → true)\n```\n\n**Why !! is useful:**\n```javascript\n// Explicit conversion to boolean:\nconst value = \"hello\";\nBoolean(value);  // true ✅\n!!value;         // true ✅ (shorter!)\n\n// Real-world usage:\nconst hasName = !!user.name;  // Convert to boolean\nconst isActive = !!status;    // Convert to boolean\n```\n\n**Testing different values:**\n```javascript\n// Falsy values → false:\n!!0           // false\n!!\"\"          // false\n!!null        // false\n!!undefined   // false\n!!false       // false\n!!NaN         // false\n\n// Truthy values → true:\n!!1           // true\n!!\"hello\"     // true\n!!{}          // true\n!![]          // true\n!!true        // true\n!!' '         // true (non-empty string!)\n```\n\n**How it works:**\n```javascript\n// Single !: converts to boolean and flips\n!value → Boolean(value) negated\n\n// Double !!: converts to boolean\n!!value → Boolean(value)\n\n// Examples:\n!\"hello\"  // false (truthy → true → flip → false)\n!!\"hello\" // true (truthy → true → flip → flip → true)\n\n!0        // true (falsy → false → flip → true)\n!!0       // false (falsy → false → flip → flip → false)\n```\n\n**Memory trick:** !! = quick boolean conversion (same as Boolean())!",
    tags: ["javascript","quiz", "boolean-conversion", "truthy-falsy"],
  },
];
