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
    explanation: "The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const`, or `let` keywords cannot be deleted using the `delete` operator.\n\nThe `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.",
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
    explanation: "With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.\n\nYou cannot do this with `let` or `const` since they're block-scoped and therefore can't be redeclared.",
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
    explanation: "Variables with the `const` and `let` keywords are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.",
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
    explanation: "This demonstrates the temporal dead zone (TDZ). The 'let x = 20' inside the function creates a block-scoped variable that shadows the outer x. Accessing x before its declaration in the block throws a ReferenceError.",
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
    explanation: "It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as:\n\n1. `global.greetign = {}` in Node.js\n2. `window.greetign = {}`, `frames.greetign = {}` and `self.greetign` in browsers.\n3. `self.greetign` in web workers.\n4. `globalThis.greetign` in all environments.\n\nIn order to avoid this, we can use `\"use strict\"`. This makes sure that you have declared a variable before setting it equal to anything.",
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
