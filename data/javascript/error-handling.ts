import { QuizQuestion } from '../../types/quiz';

export const error_handlingQuizzes: QuizQuestion[] = [
{
    id: 'js-043',
    question: "📝 What's the output?\n\n```javascript\n(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();\n```",
    category: 'javascript',
    subcategory: 'error-handling',
    difficulty: 'medium',
    options: [
          '1 undefined 2',
          'undefined undefined undefined',
          '1 1 2',
          '1 undefined undefined'
    ],
    correctAnswer: 0,
    explanation: "**catch parameter creates a new block-scoped variable** - it shadows the outer variable!\n\n**Think of catch like a room within a room** - what happens in the inner room doesn't affect the outer room!\n\n**Step-by-step execution:**\n```javascript\n(() => {\n  let x, y;  // Outer scope: x = undefined, y = undefined\n  \n  try {\n    throw new Error();\n  } catch (x) {  // NEW block-scoped 'x' (shadows outer x)\n    (x = 1), (y = 2);\n    // Inner x = 1 (catch parameter)\n    // Outer y = 2 (no y in catch scope, modifies outer)\n    \n    console.log(x);  // 1 (inner x) ✅\n  }\n  \n  console.log(x);  // undefined (outer x unchanged) ✅\n  console.log(y);  // 2 (outer y was modified) ✅\n})();\n```\n\n**Variable scope breakdown:**\n```javascript\nlet x, y;  // Outer: x = undefined, y = undefined\n\ncatch (x) {  // Creates NEW x in catch block\n  // This 'x' shadows the outer 'x'\n  x = 1;     // Modifies catch-scoped x only\n  y = 2;     // No local y, modifies outer y\n}\n\n// After catch:\n// Outer x: still undefined (catch x is separate)\n// Outer y: now 2 (was modified from inside catch)\n```\n\n**Visual scope:**\n```javascript\n// Outer scope\nlet x = undefined;  ──┐\nlet y = undefined;    │\n                      │\ncatch (x) {  ─────────┼─ New scope!\n  let x = Error;  ────┤ (shadows outer x)\n  x = 1;  ────────────┤ (local to catch)\n  y = 2;  ────────────┘ (modifies outer y)\n}\n\n// After catch:\n// Outer x: undefined ✅\n// Outer y: 2 ✅\n```\n\n**Compare with normal block:**\n```javascript\n// Same behavior with regular block:\nlet x, y;\n{\n  let x = 1;  // New block-scoped x\n  y = 2;      // Modifies outer y\n  console.log(x);  // 1\n}\nconsole.log(x);  // undefined\nconsole.log(y);  // 2\n```\n\n**Memory trick:** catch parameter = new variable in catch scope, doesn't touch outer variable with same name!",
    tags: ['javascript', 'quiz', 'error-handling', 'scope', 'catch'],
  },

{
    id: 'js-080',
    question: "🖥️ What's the output?\n\n```javascript\nfunction greeting() {\n  throw \"Hello world!\";\n}\n\nfunction sayHi() {\n  try {\n    const data = greeting();\n    console.log(\"It worked!\", data);\n  } catch (e) {\n    console.log(\"Oh no an error:\", e);\n  }\n}\n\nsayHi();\n```",
    category: 'javascript',
    subcategory: 'error-handling',
    difficulty: 'medium',
    options: [
          'It worked! Hello world!',
          'Oh no an error: undefined',
          'SyntaxError: can only throw Error objects',
          'Oh no an error: Hello world!'
    ],
    correctAnswer: 3,
    explanation: "**You can throw ANY value in JavaScript** - not just Error objects!\n\n**Think of throw like tossing a ball** - you can throw any ball, not just official baseballs!\n\n**What happens:**\n```javascript\nfunction greeting() {\n  throw \"Hello world!\";  // Throws a STRING\n}\n\nfunction sayHi() {\n  try {\n    const data = greeting();  // This line throws\n    console.log(\"It worked!\", data);  // ❌ Never executes\n  } catch (e) {\n    console.log(\"Oh no an error:\", e);  // ✅ Executes\n    // e = \"Hello world!\" (the thrown string)\n  }\n}\n\nsayHi();  // \"Oh no an error: Hello world!\"\n```\n\n**Step-by-step:**\n```\n1. sayHi() is called\n2. Enter try block\n3. Call greeting()\n4. greeting() throws \"Hello world!\" (string)\n5. Execution jumps to catch block\n6. e = \"Hello world!\"\n7. Logs: \"Oh no an error: Hello world!\"\n```\n\n**You can throw different types:**\n```javascript\n// Throw string\nthrow \"Error message\";  // ✅ Works\n\n// Throw number\nthrow 404;  // ✅ Works\n\n// Throw boolean\nthrow true;  // ✅ Works\n\n// Throw object\nthrow { code: 500, msg: \"Server error\" };  // ✅ Works\n\n// Throw Error (best practice)\nthrow new Error(\"Something went wrong\");  // ✅ Best practice\n\n// Throw null/undefined\nthrow null;  // ✅ Works (but not recommended)\n```\n\n**Why Error objects are better:**\n```javascript\n// ❌ Throwing string: No stack trace\ntry {\n  throw \"Oops!\";\n} catch (e) {\n  console.log(e);  // \"Oops!\"\n  console.log(e.stack);  // undefined\n}\n\n// ✅ Throwing Error: Has stack trace\ntry {\n  throw new Error(\"Oops!\");\n} catch (e) {\n  console.log(e.message);  // \"Oops!\"\n  console.log(e.stack);  // Full stack trace ✅\n}\n```\n\n**Memory trick:** throw works with any value, but Error objects give you debugging info!",
    tags: ['javascript', 'quiz', 'error-handling', 'throw', 'try-catch'],
  },
];
