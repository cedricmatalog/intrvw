import { QuizQuestion } from '../../types/quiz';

export const scopeQuizzes: QuizQuestion[] = [
{
    id: 'js-012',
    question: "📝 What's the output?\n\n```javascript\n(() => {\n  let x = (y = 10);\n})();\n\nconsole.log(typeof x);\nconsole.log(typeof y);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "\"undefined\", \"number\"",
          "\"number\", \"number\"",
          "\"object\", \"number\"",
          "\"number\", \"undefined\""
    ],
    correctAnswer: 0,
    explanation: "Accidental global variables are like **throwing trash out your apartment window** - it doesn't stay in your room, it ends up on the street where everyone can see it!\n\n**Think of it like this:**\n- `let x = value` → Variable stays in the room (local scope)\n- `y = value` → Variable escapes to the street (global scope)\n\n**The key rule: Variables without `let`/`const`/`var` become global, even inside functions!**\n\n**What's happening:**\n\n```javascript\n(() => {\n  let x = (y = 10);\n})();\n\nconsole.log(typeof x);\nconsole.log(typeof y);\n```\n\n**Step 1: Understanding the assignment**\n\n`let x = (y = 10)` is actually TWO operations:\n\n```javascript\n// First: y = 10 (no let/const/var!)\ny = 10;  // Accidentally creates global variable!\n\n// Second: let x = y\nlet x = y;  // Creates local variable x\n```\n\n**Step 2: What happens to `y`?**\n\n```javascript\ny = 10;  // No declaration keyword!\n↓\nJavaScript looks: \"Where should I put y?\"\n↓\nNo 'let', 'const', or 'var'\n↓\n\"I'll make it global!\"\n↓\nCreates: window.y = 10 (browser) or global.y = 10 (Node)\n```\n\n**Step 3: What happens to `x`?**\n\n```javascript\nlet x = y;  // y is now 10\n↓\nCreates local variable x = 10\n↓\nBUT x is block-scoped to the IIFE\n↓\nCan't access x outside the IIFE!\n```\n\n**Step 4: Check typeof outside IIFE**\n\n```javascript\nconsole.log(typeof x);\n↓\nLooking for x outside the IIFE\n↓\nx doesn't exist here (block-scoped!)\n↓\nLogs: \"undefined\"\n\nconsole.log(typeof y);\n↓\nLooking for y\n↓\ny is global (window.y or global.y)\n↓\ny = 10 (a number)\n↓\nLogs: \"number\"\n```\n\n**Final output:**\n```\n\"undefined\"\n\"number\"\n```\n\n**Visual representation:**\n\n```javascript\n// Global scope:\n// y = 10 (accidentally global!)\n\n(() => {\n  // IIFE scope:\n  // x = 10 (local, block-scoped)\n  let x = (y = 10);\n  //        ↑ Creates global y\n  //   ↑ Creates local x\n})();\n\n// Back to global scope:\nconsole.log(typeof x);  // Can't see x → \"undefined\"\nconsole.log(typeof y);  // Can see y → \"number\"\n```\n\n**How assignment operators work:**\n\nAssignment returns the assigned value:\n\n```javascript\nlet a = (b = 5);\n↓\n1. b = 5  (evaluates to 5, creates global b)\n2. let a = 5  (creates local a)\n\n// Same as:\nb = 5;        // Global!\nlet a = b;    // Local\n```\n\n**Why this is dangerous:**\n\n```javascript\nfunction updateScore() {\n  score = 100;  // Oops! No 'let'\n}\n\nupdateScore();\nconsole.log(window.score);  // 100 (global pollution!)\n\n// Later, somewhere else:\nlet score = 0;  // Thought this was the only score\nupdate Score();\nconsole.log(score);  // Still 0 (different variable!)\nconsole.log(window.score);  // 100 (the global one)\n```\n\n**Block scope vs function scope vs global scope:**\n\n```javascript\n// Global scope\nlet global = 'global';\n\nfunction myFunc() {\n  // Function scope\n  var funcScoped = 'func';\n  \n  {\n    // Block scope\n    let blockScoped = 'block';\n    const alsoBlock = 'block2';\n    accidental = 'global!';  // No keyword → global!\n  }\n  \n  console.log(funcScoped);     // 'func' ✓\n  console.log(blockScoped);    // ReferenceError ✗\n}\n\nconsole.log(global);      // 'global' ✓\nconsole.log(funcScoped);  // ReferenceError ✗\nconsole.log(accidental);  // 'global!' ✓ (accidentally global)\n```\n\n**How strict mode prevents this:**\n\n```javascript\n'use strict';\n\n(() => {\n  let x = (y = 10);  // ReferenceError: y is not defined\n})();\n\n// Strict mode requires all variables to be declared!\n```\n\n**The right way:**\n\n```javascript\n// ✅ Correct: Both variables are local\n(() => {\n  let y = 10;\n  let x = y;\n  console.log(x);  // 10\n})();\n\nconsole.log(typeof x);  // \"undefined\" ✓\nconsole.log(typeof y);  // \"undefined\" ✓\n// Both are local and don't leak!\n```\n\n**Real-world example:**\n\n```javascript\nfunction calculateTotal(items) {\n  // ❌ Wrong:\n  total = 0;  // Accidentally global!\n  for (i = 0; i < items.length; i++) {  // i is also global!\n    total += items[i];\n  }\n  return total;\n}\n\ncalculateTotal([1, 2, 3]);  // 6\nconsole.log(total);  // 6 (leaked to global!)\nconsole.log(i);      // 3 (leaked to global!)\n\n// ✅ Correct:\nfunction calculateTotal(items) {\n  let total = 0;  // Local\n  for (let i = 0; i < items.length; i++) {  // Local\n    total += items[i];\n  }\n  return total;\n}\n\ncalculateTotal([1, 2, 3]);  // 6\nconsole.log(typeof total);  // \"undefined\" ✓\nconsole.log(typeof i);      // \"undefined\" ✓\n```\n\n**Common patterns that create accidental globals:**\n\n```javascript\n// Pattern 1: Chained assignment\nfunction bad1() {\n  let a = b = c = 10;  // Only 'a' is local!\n  // Same as:\n  // c = 10;      (global)\n  // b = c;       (global)\n  // let a = b;   (local)\n}\n\n// Pattern 2: Typo\nfunction bad2() {\n  let myVariable = 5;\n  myVaraible = 10;  // Typo creates global!\n}\n\n// Pattern 3: Missing keyword in loop\nfunction bad3() {\n  for (i = 0; i < 10; i++) {  // i is global!\n    console.log(i);\n  }\n}\n\n// ✅ All correct:\nfunction good() {\n  let a = 10, b = 10, c = 10;  // All local\n  for (let i = 0; i < 10; i++) {  // i is local\n    let value = i;  // value is local\n  }\n}\n```\n\n**Memory tricks:**\n- No `let`/`const`/`var` = accidental global (danger!)\n- `let`/`const` = block-scoped (stays in `{ }`)\n- `var` = function-scoped (stays in function)\n- Always use strict mode: `'use strict';`\n- Assignment operator returns value: `a = (b = 5)` means `b` is global\n- Use a linter to catch accidental globals!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-013',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia\";\nage = 21;\n\nconsole.log(delete name);\nconsole.log(delete age);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "false, true",
          "\"Lydia\", 21",
          "true, true",
          "undefined, undefined"
    ],
    correctAnswer: 0,
    explanation: "**`delete` is for object properties, not declared variables** - like you can erase writing from a whiteboard, but not tear down the wall!\n\n**What happens:**\n```javascript\nconst name = \"Lydia\";  // Declared variable (permanent)\nage = 21;              // Accidental global property (erasable)\n\ndelete name  // false - can't delete declared variables\ndelete age   // true - CAN delete global properties\n```\n\n**The rules:**\n```javascript\n// ❌ Cannot delete declared variables\nvar x = 1;\nlet y = 2;\nconst z = 3;\n\ndelete x;  // false\ndelete y;  // false\ndelete z;  // false\n\n// ✅ CAN delete object properties\nconst obj = { name: 'Lydia' };\ndelete obj.name;  // true\n\n// ✅ CAN delete accidental globals (they're really properties on window/global)\naccidentalGlobal = 42;\ndelete accidentalGlobal;  // true\n```\n\n**Why the difference?**\n```javascript\n// Declared variables have special protection\nvar x = 1;           // Protected variable\n↓\nwindow.x = 1         // Has DontDelete flag\n↓\ndelete window.x      // false (protected)\n\n// Accidental globals are just properties\ny = 2;               // Forgot var/let/const!\n↓\nwindow.y = 2         // Regular property (no protection)\n↓\ndelete window.y      // true (unprotected)\n```\n\n**Common gotcha:**\n```javascript\n// This looks like it should work, but doesn't\nfunction test() {\n  var temp = 'value';\n  delete temp;  // false - variables are protected\n  console.log(temp);  // 'value' - still there!\n}\n```\n\n**Memory trick:** \n- Declared = Permanent resident (can't evict)\n- Property = Temporary tenant (can evict)\n- `delete` only works on the temporary tenants!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-022',
    question: "📝 What's the output?\n\n```javascript\nfunction createFunctions() {\n  const funcs = [];\n  for (var i = 0; i < 3; i++) {\n    funcs.push(() => i);\n  }\n  return funcs;\n}\n\nconst fns = createFunctions();\nconsole.log(fns[0]());\nconsole.log(fns[1]());\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'hard',
    options: [
          "3 and 3",
          "0 and 1",
          "undefined and undefined",
          "0 and 0"
    ],
    correctAnswer: 0,
    explanation: "`var` in loops is like **everyone sharing one whiteboard** - by the time anyone reads it, it shows whatever was written last. `let` gives **each person their own sticky note** - they keep their original value!\n\n**Think of it like writing phone numbers:**\n- `var`: Everyone gets the same piece of paper → whoever writes last wins\n- `let`: Everyone gets their own paper → each keeps their number\n\n**The key rule: `var` is function-scoped (one variable), `let` is block-scoped (new variable per iteration)**\n\n**What's happening:**\n\n```javascript\nfunction createFunctions() {\n  const funcs = [];\n  for (var i = 0; i < 3; i++) {\n    funcs.push(() => i);  // All functions share same 'i'!\n  }\n  return funcs;\n}\n\nconst fns = createFunctions();\nconsole.log(fns[0]());  // 3\nconsole.log(fns[1]());  // 3\n```\n\n**Step-by-step with `var`:**\n\n**Iteration 0:**\n```javascript\ni = 0  // One shared 'i' variable\nfuncs.push(() => i)  // Function references the shared 'i'\n↓\nfuncs = [() => i]  // Not () => 0, but () => i\n```\n\n**Iteration 1:**\n```javascript\ni = 1  // Same 'i' variable, now 1\nfuncs.push(() => i)  // Another function referencing same 'i'\n↓\nfuncs = [() => i, () => i]  // Both reference same 'i'\n```\n\n**Iteration 2:**\n```javascript\ni = 2  // Same 'i' variable, now 2\nfuncs.push(() => i)  // Third function referencing same 'i'\n↓\nfuncs = [() => i, () => i, () => i]  // All three reference same 'i'\n```\n\n**Loop ends:**\n```javascript\ni = 3  // Loop increments i one more time\n// Now ALL functions see i = 3!\n```\n\n**When functions run:**\n```javascript\nfns[0]()  // Looks up 'i' → i is 3 → returns 3\nfns[1]()  // Looks up 'i' → i is 3 → returns 3\nfns[2]()  // Looks up 'i' → i is 3 → returns 3\n```\n\n**Visual representation:**\n\n```javascript\n// With var: ONE shared variable\nvar i;  // Function-scoped\n\nfor (i = 0; i < 3; i++) {\n  funcs.push(() => i);\n}\n//         ALL point to same 'i' ↑\n\n// After loop: i = 3\n// All functions return 3\n```\n\n**How `let` fixes this:**\n\n```javascript\nfunction createFunctions() {\n  const funcs = [];\n  for (let i = 0; i < 3; i++) {  // let instead of var!\n    funcs.push(() => i);\n  }\n  return funcs;\n}\n\nconst fns = createFunctions();\nconsole.log(fns[0]());  // 0 ✓\nconsole.log(fns[1]());  // 1 ✓\nconsole.log(fns[2]());  // 2 ✓\n```\n\n**With `let`: Each iteration gets NEW variable**\n\n```javascript\n// Iteration 0: NEW i₀ = 0\nlet i₀ = 0;\nfuncs.push(() => i₀);  // Captures i₀ (0)\n\n// Iteration 1: NEW i₁ = 1\nlet i₁ = 1;\nfuncs.push(() => i₁);  // Captures i₁ (1)\n\n// Iteration 2: NEW i₂ = 2\nlet i₂ = 2;\nfuncs.push(() => i₂);  // Captures i₂ (2)\n\n// Each function has its own 'i'!\n```\n\n**Real-world example - Event listeners:**\n\n```javascript\n// ❌ Wrong: var\nfor (var i = 0; i < buttons.length; i++) {\n  buttons[i].addEventListener('click', () => {\n    console.log('Button', i, 'clicked');\n  });\n}\n// Clicking ANY button logs: \"Button 3 clicked\"\n// All listeners see the final value of i!\n\n// ✅ Correct: let\nfor (let i = 0; i < buttons.length; i++) {\n  buttons[i].addEventListener('click', () => {\n    console.log('Button', i, 'clicked');\n  });\n}\n// Button 0: \"Button 0 clicked\"\n// Button 1: \"Button 1 clicked\"\n// Button 2: \"Button 2 clicked\"\n```\n\n**Workaround with var (old way):**\n\n**Solution 1: IIFE (Immediately Invoked Function Expression)**\n```javascript\nfor (var i = 0; i < 3; i++) {\n  (function(index) {  // Create new scope\n    funcs.push(() => index);  // Capture 'index'\n  })(i);  // Pass current i\n}\n// Each IIFE creates new scope with its own 'index'\n```\n\n**Solution 2: forEach with var**\n```javascript\n[0, 1, 2].forEach(function(i) {\n  funcs.push(() => i);  // Each iteration is new function scope\n});\n```\n\n**Why `let` works - block scoping:**\n\n```javascript\nfor (let i = 0; i < 3; i++) {\n  // Each iteration creates a NEW block scope\n  // 'i' is re-created for each iteration\n  funcs.push(() => i);\n}\n\n// Behind the scenes (conceptually):\n// { let i = 0; funcs.push(() => i); }\n// { let i = 1; funcs.push(() => i); }\n// { let i = 2; funcs.push(() => i); }\n```\n\n**Comparison table:**\n\n| Keyword | Scope | Shared? | Result |\n|---------|-------|---------|--------|\n| `var` | Function | ✓ Yes | All see 3 |\n| `let` | Block | ✗ No | Each sees own value (0, 1, 2) |\n| IIFE + `var` | Function | ✗ No | Each sees own value (0, 1, 2) |\n\n**Another example - setTimeout:**\n\n```javascript\n// ❌ var: prints 3, 3, 3\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n// After 100ms: 3, 3, 3\n// By the time setTimeout fires, i = 3\n\n// ✅ let: prints 0, 1, 2\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n// After 100ms: 0, 1, 2\n// Each setTimeout has its own 'i'\n\n// ❌ var with IIFE fix:\nfor (var i = 0; i < 3; i++) {\n  (function(index) {\n    setTimeout(() => console.log(index), 100);\n  })(i);\n}\n// After 100ms: 0, 1, 2\n```\n\n**Why this is confusing:**\n\nThe arrow function **doesn't execute until later**, but it **captures variables by reference**:\n\n```javascript\nfor (var i = 0; i < 3; i++) {\n  funcs.push(() => i);  // Captures REFERENCE to 'i'\n}\n// Not: funcs.push(() => 0), funcs.push(() => 1), funcs.push(() => 2)\n// But: funcs.push(() => i), funcs.push(() => i), funcs.push(() => i)\n\n// When called later, all look up current value of 'i' → 3\n```\n\n**How to capture by value with var:**\n\n```javascript\n// Pass as parameter (creates copy)\nfor (var i = 0; i < 3; i++) {\n  funcs.push((function(value) {\n    return () => value;  // Captures 'value' (a copy of i)\n  })(i));\n}\n\n// Or use default parameter:\nfor (var i = 0; i < 3; i++) {\n  funcs.push((j = i) => j);\n}\n```\n\n**Modern best practice:**\n\n```javascript\n// Just use let!\nfor (let i = 0; i < 3; i++) {\n  funcs.push(() => i);\n}\n\n// Or const for forEach/map:\n[0, 1, 2].forEach(i => {\n  funcs.push(() => i);\n});\n```\n\n**Memory tricks:**\n- `var` in loops = one shared whiteboard (everyone sees last value)\n- `let` in loops = individual sticky notes (each keeps their value)\n- Arrow functions capture variables by **reference**, not value\n- Loop finishes BEFORE callbacks run\n- Always use `let` or `const` in modern JavaScript\n- `let` creates new binding per iteration (magic!)",
    tags: ["functions","closures","var","scope"],
  },

{
    id: 'js-041',
    question: "📝 What's the output?\n\n```javascript\nvar num = 8;\nvar num = 10;\n\nconsole.log(num);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "8",
          "10",
          "SyntaxError",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "`var` is the forgiving one - you can redeclare it multiple times and it just keeps the latest value. `let` and `const` are strict - redeclaration throws an error.\n\n**What happens:**\n```javascript\nvar num = 8;   // First declaration\nvar num = 10;  // Redeclaration - allowed with var!\nconsole.log(num);  // 10 (latest value wins)\n```\n\n**Comparison:**\n```javascript\n// ✅ var: Redeclaration allowed\nvar x = 1;\nvar x = 2;  // No error, x = 2\n\n// ❌ let: Redeclaration not allowed\nlet y = 1;\nlet y = 2;  // SyntaxError: Identifier 'y' has already been declared\n\n// ❌ const: Redeclaration not allowed\nconst z = 1;\nconst z = 2;  // SyntaxError: Identifier 'z' has already been declared\n```\n\n**Why var allows this:**\n`var` is function-scoped and hoisted, so redeclaration is treated as reassignment:\n```javascript\nvar num = 8;\nvar num = 10;\n\n// JavaScript treats it like:\nvar num;\nnum = 8;\nnum = 10;  // Just reassignment\n```\n\n**Reassignment vs Redeclaration:**\n```javascript\n// ✅ Reassignment (allowed for all)\nlet x = 1;\nx = 2;  // Works!\n\n// ❌ Redeclaration (only var allows)\nlet x = 1;\nlet x = 2;  // Error!\n```\n\n**Memory trick:** `var` = variable old-school (forgiving, allows redeclaration). `let`/`const` = modern (strict, no redeclaration).",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-044',
    question: "🖥️ What is the output?\n\n```javascript\nfunction checkAge(age) {\n  if (age < 18) {\n    const message = \"Sorry, you're too young.\";\n  } else {\n    const message = \"Yay! You're old enough!\";\n  }\n\n  return message;\n}\n\nconsole.log(checkAge(21));\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "\"Sorry, you're too young.\"",
          "\"Yay! You're old enough!\"",
          "ReferenceError",
          "undefined"
    ],
    correctAnswer: 2,
    explanation: "This is a classic **block scope** mistake! The variable is trapped inside the block and can't escape.\n\n**Quick Answer:** `ReferenceError`\n- `message` is declared inside the if/else blocks\n- Cannot access it outside those blocks\n\n**Think of block scope like hotel rooms:**\n- `let`/`const` = Variable stays in the room (can't leave)\n- `var` = Variable roams the whole hotel floor (function)\n- Trying to access from hallway → \"Sorry, that's private!\"\n\n**Understanding the code:**\n```javascript\nfunction checkAge(age) {\n  if (age < 18) {\n    const message = \"Sorry, you're too young.\";  // Block 1\n  } else {\n    const message = \"Yay! You're old enough!\";   // Block 2\n  }\n\n  return message;  // ❌ Trying to access from outside both blocks!\n}\n\nconsole.log(checkAge(21));\n```\n\n**Step-by-step execution:**\n\n**Step 1: Function called with age = 21**\n```javascript\ncheckAge(21)\n↓\nage = 21\n```\n\n**Step 2: Check condition**\n```javascript\nif (age < 18)  // 21 < 18?\n↓\nfalse → go to else block\n```\n\n**Step 3: Execute else block**\n```javascript\n{ \n  const message = \"Yay! You're old enough!\";\n  // 'message' exists ONLY in this block!\n}\n↓\nBlock ends → 'message' is destroyed!\n```\n\n**Step 4: Try to return message**\n```javascript\nreturn message;\n↓\nLooking for 'message' in function scope\n↓\nNot found! (it was block-scoped)\n↓\nReferenceError: message is not defined\n```\n\n**Visualizing scope boundaries:**\n```javascript\nfunction checkAge(age) {  // Function scope starts\n  \n  if (age < 18) {         // Block scope 1 starts\n    const message = \"Sorry, you're too young.\";\n  }                       // Block scope 1 ends → message₁ dies!\n  \n  else {                  // Block scope 2 starts\n    const message = \"Yay! You're old enough!\";\n  }                       // Block scope 2 ends → message₂ dies!\n\n  return message;         // ❌ No 'message' here!\n}                         // Function scope ends\n```\n\n**What are blocks?**\nBlocks are created by curly braces `{ }`:\n```javascript\n// if/else statements\nif (condition) { /* block */ }\nelse { /* block */ }\n\n// for loops\nfor (let i = 0; i < 10; i++) { /* block */ }\n\n// while loops\nwhile (condition) { /* block */ }\n\n// try/catch\ntry { /* block */ }\ncatch (e) { /* block */ }\n\n// just braces\n{ /* block */ }\n\n// Functions (function scope, not block scope for var)\nfunction name() { /* function scope */ }\n```\n\n**The fix - Declare outside blocks:**\n```javascript\n// ✅ Solution 1: Declare in function scope\nfunction checkAge(age) {\n  let message;  // Declared in function scope!\n  \n  if (age < 18) {\n    message = \"Sorry, you're too young.\";  // Assign (not declare)\n  } else {\n    message = \"Yay! You're old enough!\";   // Assign (not declare)\n  }\n\n  return message;  // ✓ Works! message exists in function scope\n}\n\nconsole.log(checkAge(21));  // \"Yay! You're old enough!\"\n```\n\n```javascript\n// ✅ Solution 2: Return directly\nfunction checkAge(age) {\n  if (age < 18) {\n    return \"Sorry, you're too young.\";\n  } else {\n    return \"Yay! You're old enough!\";\n  }\n}\n\nconsole.log(checkAge(21));  // \"Yay! You're old enough!\"\n```\n\n```javascript\n// ✅ Solution 3: Ternary operator\nfunction checkAge(age) {\n  const message = age < 18\n    ? \"Sorry, you're too young.\"\n    : \"Yay! You're old enough!\";\n  return message;\n}\n\nconsole.log(checkAge(21));  // \"Yay! You're old enough!\"\n```\n\n**Comparison: `let`/`const` vs `var`**\n```javascript\n// With let/const (block-scoped) - ❌ Error\nfunction test1() {\n  if (true) {\n    const x = 10;\n  }\n  console.log(x);  // ReferenceError!\n}\n\n// With var (function-scoped) - ✓ Works\nfunction test2() {\n  if (true) {\n    var x = 10;\n  }\n  console.log(x);  // 10 (var ignores block scope)\n}\n```\n\n**Why block scope is good:**\n```javascript\n// Variables don't leak outside their intended scope\nfunction calculate() {\n  if (condition) {\n    let temp = doExpensiveCalculation();\n    // temp is automatically cleaned up after block\n  }\n  // temp doesn't exist here (good!)\n  // Less chance of variable name conflicts\n}\n\n// With var, temp would leak:\nfunction badCalculate() {\n  if (condition) {\n    var temp = doExpensiveCalculation();\n  }\n  console.log(temp);  // Still accessible (potential for bugs!)\n}\n```\n\n**Real-world gotcha:**\n```javascript\n// ❌ Common mistake in loops\nfor (let i = 0; i < 5; i++) {\n  // i exists here\n}\nconsole.log(i);  // ReferenceError! (i is block-scoped to loop)\n\n// ❌ Common mistake with switch\nswitch (value) {\n  case 1:\n    let result = 'one';\n    break;\n  case 2:\n    let result = 'two';  // SyntaxError! 'result' already declared\n    break;\n}\n\n// ✅ Fix: Use blocks in switch\nswitch (value) {\n  case 1: {\n    let result = 'one';\n    break;\n  }\n  case 2: {\n    let result = 'two';  // OK! Different block\n    break;\n  }\n}\n```\n\n**Scope hierarchy:**\n```javascript\n// Global scope\nlet global = 'global';\n\nfunction myFunc() {\n  // Function scope\n  let func = 'function';\n  \n  if (true) {\n    // Block scope\n    let block = 'block';\n    \n    console.log(global);  // ✓ Accessible\n    console.log(func);    // ✓ Accessible\n    console.log(block);   // ✓ Accessible\n  }\n  \n  console.log(global);  // ✓ Accessible\n  console.log(func);    // ✓ Accessible\n  console.log(block);   // ❌ ReferenceError!\n}\n\nconsole.log(global);  // ✓ Accessible\nconsole.log(func);    // ❌ ReferenceError!\n```\n\n**Memory trick:**\n- **Block scope** = \"What happens in the block, stays in the block\"\n- `let`/`const` = Locked in the room (block)\n- `var` = Roams the hotel floor (function)\n- Can see OUT of blocks, can't see IN to blocks",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-045',
    question: "🖥️ What's the output?\n\n```javascript\nlet name = \"Lydia\";\n\nfunction getName() {\n  console.log(name);\n  let name = \"Sarah\";\n}\n\ngetName();\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "Lydia",
          "Sarah",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 3,
    explanation: "Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.\n\nIf we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`.\n\n```javascript\nlet name = \"Lydia\";\n\nfunction getName() {\n  console.log(name);\n}\n\ngetName(); // Lydia\n```",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-048',
    question: "📝 What's the output?\n\n```javascript\nlet x = 10;\n\nfunction test() {\n  console.log(x);\n  let x = 20;\n}\n\ntest();\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "ReferenceError",
          "10",
          "20",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "This is the **Temporal Dead Zone (TDZ)** - trying to use a variable before it's ready!\n\n**Quick Answer:** `ReferenceError`\n- `let x = 20` inside the function shadows the outer `x`\n- Accessing `x` before its declaration line = TDZ violation\n\n**Think of TDZ like a restricted area at a concert:**\n- Variable exists (ticket is sold)\n- But you can't enter yet (gates not open)\n- Try to enter early → Security stops you (ReferenceError)\n- After declaration line → Gates open, you can enter\n\n**Understanding the code:**\n```javascript\nlet x = 10;  // Outer x\n\nfunction test() {\n  console.log(x);  // ❌ Which x? The inner one isn't ready yet!\n  let x = 20;      // Inner x declared HERE\n}\n\ntest();\n```\n\n**Step-by-step execution:**\n\n**Step 1: Hoisting happens (before execution)**\n```javascript\n// JavaScript \"sees\" the code like this:\nlet x = 10;  // Outer scope\n\nfunction test() {\n  // let x;  ← JavaScript knows 'x' will exist here\n  // But it's in TDZ until the actual declaration!\n  \n  console.log(x);  // Try to access x\n  let x = 20;      // x becomes accessible HERE\n}\n```\n\n**Step 2: Call test()**\n```javascript\ntest()\n↓\nEnter function scope\n↓\nJavaScript knows: \"There's a let x here, so ignore outer x\"\n```\n\n**Step 3: Try to access x**\n```javascript\nconsole.log(x);\n↓\nLooking for x in current scope\n↓\nFound: \"let x = 20\" exists in this scope\n↓\nBUT: We haven't reached that line yet!\n↓\nx is in Temporal Dead Zone\n↓\nReferenceError: Cannot access 'x' before initialization\n```\n\n**Visualizing the TDZ:**\n```javascript\nlet x = 10;  // ← Outer x (accessible)\n\nfunction test() {\n  // ⚠️ TDZ for inner x starts here\n  // Inner x exists but is \"dead\" (can't use)\n  \n  console.log(x);  // ❌ TDZ! ReferenceError\n  \n  // ⚠️ TDZ for inner x ends here ↓\n  let x = 20;      // ✓ Inner x is born! Now accessible\n  \n  console.log(x);  // ✓ Would work! (20)\n}\n```\n\n**Why does JavaScript ignore outer x?**\n```javascript\n// JavaScript scans function BEFORE executing:\nfunction test() {\n  console.log(x);  // JS thinks: \"Is 'x' declared anywhere here?\"\n  let x = 20;      // JS finds: \"Yes! There's 'let x' below\"\n}\n\n// So JavaScript decides:\n// \"I'll use the local x, not the outer one\"\n// \"But local x isn't ready yet... ReferenceError!\"\n```\n\n**Comparison with `var` (no TDZ):**\n```javascript\n// With var - No TDZ (gets hoisted and initialized to undefined)\nlet x = 10;\n\nfunction test() {\n  console.log(x);  // undefined (not ReferenceError!)\n  var x = 20;      // var is hoisted and set to undefined\n  console.log(x);  // 20\n}\n\ntest();  // Logs: undefined, 20\n\n// Why? var hoisting:\nfunction test() {\n  var x;           // Hoisted to top, initialized to undefined\n  console.log(x);  // undefined\n  x = 20;          // Assignment stays in place\n  console.log(x);  // 20\n}\n```\n\n**The difference:**\n```javascript\n// let/const: Hoisted but NOT initialized (TDZ)\n{\n  // ⚠️ TDZ starts\n  console.log(x);  // ReferenceError\n  let x = 10;      // TDZ ends\n  // ✓ x is accessible\n}\n\n// var: Hoisted AND initialized to undefined\n{\n  console.log(x);  // undefined (no error)\n  var x = 10;\n  console.log(x);  // 10\n}\n```\n\n**What if there was no inner x?**\n```javascript\nlet x = 10;  // Outer x\n\nfunction test() {\n  console.log(x);  // 10 ✓ (uses outer x)\n  // No inner x declared\n}\n\ntest();  // 10\n```\n\n**Real-world TDZ examples:**\n```javascript\n// ❌ Example 1: Using in default parameter\nfunction test(a = b, b = 2) {\n  // TDZ! 'b' isn't ready when evaluating 'a'\n}\ntest();  // ReferenceError\n\n// ✅ Fix: Reverse order\nfunction test(b = 2, a = b) {\n  // OK! 'b' is ready when evaluating 'a'\n}\n\n// ❌ Example 2: Class property initialization\nclass MyClass {\n  a = this.b;  // TDZ! 'b' isn't ready yet\n  b = 10;\n}\n\n// ❌ Example 3: Destructuring\nlet { x = y, y = 2 } = {};  // ReferenceError: y is not defined\n\n// ✅ Fix:\nlet { y = 2, x = y } = {};  // OK\n```\n\n**typeof in TDZ:**\n```javascript\n// Surprising behavior:\nconsole.log(typeof x);  // \"undefined\" (x never declared)\n\n// But:\n{\n  console.log(typeof x);  // ReferenceError! (x in TDZ)\n  let x = 10;\n}\n\n// Before let/const: typeof was \"safe\"\n// After let/const: typeof can throw in TDZ!\n```\n\n**How to avoid TDZ issues:**\n```javascript\n// ✅ Best practice: Declare variables at the top\nfunction good() {\n  let x = 10;  // Declare first\n  let y = 20;\n  \n  console.log(x);  // ✓ Works\n  console.log(y);  // ✓ Works\n}\n\n// ❌ Bad: Declarations scattered\nfunction bad() {\n  console.log(x);  // ❌ TDZ\n  doSomething();\n  let x = 10;\n}\n\n// ✅ Use outer scope if needed\nlet x = 10;\n\nfunction good() {\n  console.log(x);  // ✓ Uses outer x\n  // Don't declare inner x if you need outer one!\n}\n```\n\n**Why TDZ exists:**\nThe TDZ helps catch bugs! It makes `const` work correctly:\n\n```javascript\n// Without TDZ, this would be weird:\nconst x = 10;\n\nfunction test() {\n  console.log(x);  // What should this be?\n  const x = 20;    // const can't change!\n  // If it printed 10, then changed to 20, const wouldn't be constant!\n}\n\n// With TDZ:\n// Error! Forces you to think about which x you want\n```\n\n**Complete scope chain example:**\n```javascript\nlet x = 'global';  // Global x\n\nfunction outer() {\n  let x = 'outer';  // Outer x\n  \n  function inner() {\n    console.log(x);  // Which x?\n    let x = 'inner'; // Inner x\n  }\n  \n  inner();  // ReferenceError! (TDZ for inner x)\n}\n\n// Fix:\nfunction outer() {\n  let x = 'outer';\n  \n  function inner() {\n    let x = 'inner';  // Declare first\n    console.log(x);   // 'inner' ✓\n  }\n  \n  inner();  // Works!\n}\n```\n\n**Memory trick:**\n- **TDZ** = \"Time zone of Death\" - variable exists but can't be used\n- `let`/`const` are hoisted but **not initialized** (dead until declaration line)\n- `var` is hoisted **and initialized** to `undefined` (no TDZ)\n- Always declare variables at the **top** of their scope\n- If inner variable has same name, it **shadows** outer one (even before declaration line)",
    tags: ["functions","scope","tdz","let"],
  },

{
    id: 'js-052',
    question: "📝 What's the output?\n\n```javascript\nlet greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "{}",
          "ReferenceError: greetign is not defined",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "**Typo creates an accidental global** - like writing on the wrong notebook!\n\n**What happens:**\n```javascript\nlet greeting;      // Declared (but unused)\ngreetign = {};     // Typo! Creates NEW global variable\nconsole.log(greetign);  // {} (the accidental global)\n```\n\n**Step-by-step:**\n```javascript\nlet greeting;           // Local variable declared\n↓\ngreetign = {};          // JavaScript sees: \"No 'greetign' declared... must be global!\"\n↓\nwindow.greetign = {};   // (Browser) or global.greetign = {} (Node)\n↓\nconsole.log(greetign);  // {} (found on global object)\n```\n\n**Why it's dangerous:**\n```javascript\n// File 1\nfunction setUser() {\n  usre = { name: 'Alice' };  // Typo! Creates global\n}\n\n// File 2 (somewhere else in your code)\nfunction getUser() {\n  return user;  // Different variable, but global 'usre' exists!\n}\n\nsetUser();\ngetUser();  // undefined (but global.usre exists - pollution!)\n```\n\n**The fix - Use strict mode:**\n```javascript\n\"use strict\";\n\nlet greeting;\ngreetign = {};  // ReferenceError: greetign is not defined\n// ↑ Caught early!\n```\n\n**Comparison:**\n```javascript\n// ❌ Without strict mode\nlet name = 'Alice';\nnam = 'Bob';  // Typo creates global.nam = 'Bob'\nconsole.log(name);  // 'Alice' (original unchanged)\nconsole.log(nam);   // 'Bob' (accidental global)\n\n// ✅ With strict mode\n\"use strict\";\nlet name = 'Alice';\nnam = 'Bob';  // ReferenceError: nam is not defined\n```\n\n**Memory trick:** Assignment without declaration = accidental global. Use `\"use strict\"` to catch typos before they pollute the global scope!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-053',
    question: "🖥️ What's the output?\n\n```javascript\nfunction Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person(\"Lydia\", \"Hallie\");\nconst sarah = Person(\"Sarah\", \"Smith\");\n\nconsole.log(lydia);\nconsole.log(sarah);\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and undefined",
          "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and Person {firstName: \"Sarah\", lastName: \"Smith\"}",
          "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and {}",
          "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "For `sarah`, we didn't use the `new` keyword. When using `new`, `this` refers to the new empty object we create. However, if you don't add `new`, `this` refers to the **global object**!\n\nWe said that `this.firstName` equals `\"Sarah\"` and `this.lastName` equals `\"Smith\"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-076',
    question: "📦 The JavaScript global execution context creates two things for you: the global object, and the \"this\" keyword.",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "true",
          "false",
          "it depends",
          "only in strict mode"
    ],
    correctAnswer: 0,
    explanation: "The base execution context is the global execution context: it's what's accessible everywhere in your code.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-151',
    question: "📝 What's the output?\n\n```javascript\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n```",
    category: 'javascript',
    subcategory: 'scope',
    difficulty: 'medium',
    options: [
          "0 1 2 and 0 1 2",
          "0 1 2 and 3 3 3",
          "3 3 3 and 0 1 2",
          "3 3 3 and 3 3 3"
    ],
    correctAnswer: 2,
    explanation: "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-042',
    question: "📝 What's the output?\n\n```javascript\nfunction sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = \"Lydia\";\n  let age = 21;\n}\n\nsayHi();\n```",
    category: 'javascript',
    subcategory: 'scope',
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
    id: 'js-046',
    question: "📝 What's the output?\n\n```javascript\nconst randomValue = 21;\n\nfunction getInfo() {\n  console.log(typeof randomValue);\n  const randomValue = \"Lydia Hallie\";\n}\n\ngetInfo();\n```",
    category: 'javascript',
    subcategory: 'scope',
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
    id: 'js-190',
    question: "📝 What will be logged?\n\n```javascript\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 0);\n}\n```",
    category: 'javascript',
    subcategory: 'scope',
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
  }
];
