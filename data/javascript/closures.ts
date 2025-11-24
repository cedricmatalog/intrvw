import { QuizQuestion } from '../../types/quiz';

export const closuresQuizzes: QuizQuestion[] = [
{
    id: 'js-004',
    question: "🖥️ What's the output?\n\n```javascript\nconst groceries = [\"banana\", \"apple\", \"peanuts\"];\n\nif (groceries.indexOf(\"banana\")) {\n  console.log(\"We have to buy bananas!\");\n} else {\n  console.log(`We don't have to buy bananas!`);\n}\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "We have to buy bananas!",
          "We don't have to buy bananas",
          "undefined",
          "1"
    ],
    correctAnswer: 1,
    explanation: "**`indexOf` returns 0 for first item, and 0 is falsy!** - A classic gotcha!\n\n**What happens:**\n```javascript\ngroceries.indexOf(\"banana\")  // Returns 0 (found at index 0)\n↓\nif (0)  // 0 is FALSY!\n↓\nelse block runs → \"We don't have to buy bananas!\"\n```\n\n**The trap:**\n```javascript\nconst groceries = [\"banana\", \"apple\", \"peanuts\"];\n//                  ↑ index 0\n\ngroceries.indexOf(\"banana\")  // 0 (not falsy in meaning, but falsy in boolean context)\n↓\nif (0) → false → else block\n```\n\n**The fix:**\n```javascript\n// ❌ Wrong: Treats 0 as falsy\nif (groceries.indexOf(\"banana\")) { }\n\n// ✅ Correct: Check for \"not found\" (-1)\nif (groceries.indexOf(\"banana\") !== -1) { }\n\n// ✅ Correct: Modern approach\nif (groceries.includes(\"banana\")) { }\n\n// ✅ Correct: Check if greater than -1\nif (groceries.indexOf(\"banana\") > -1) { }\n```\n\n**Why it matters:**\n```javascript\nconst items = ['first', 'second', 'third'];\n\n// Position 0 (found!)\nitems.indexOf('first')     // 0 → if(0) → false ❌\nitems.includes('first')    // true → if(true) → true ✅\n\n// Position 1 (found!)\nitems.indexOf('second')    // 1 → if(1) → true ✅\n\n// Not found\nitems.indexOf('fourth')    // -1 → if(-1) → true ⚠️ Wrong!\n```\n\n**Memory trick:** `indexOf` returns **position**, not boolean. Position `0` = found but falsy! Use `includes()` or check `!== -1`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-074',
    question: "🖥️ What's the output?\n\n```javascript\nfunction getAge() {\n  \"use strict\";\n  age = 21;\n  console.log(age);\n}\n\ngetAge();\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "21",
          "undefined",
          "ReferenceError",
          "TypeError"
    ],
    correctAnswer: 2,
    explanation: "**`\"use strict\"` catches accidental globals** - like having a spell-checker that stops you from making typos!\n\n**What happens:**\n```javascript\nfunction getAge() {\n  \"use strict\";\n  age = 21;  // ❌ Forgot var/let/const!\n  ↓\n  ReferenceError: age is not defined\n}\n```\n\n**Without strict mode:**\n```javascript\n// ❌ Without strict mode (sloppy mode)\nfunction getAge() {\n  age = 21;  // Creates global variable accidentally!\n  console.log(age);\n}\n\ngetAge();  // 21\nconsole.log(window.age);  // 21 (leaked to global!)\n```\n\n**With strict mode:**\n```javascript\n// ✅ With strict mode (safe mode)\nfunction getAge() {\n  \"use strict\";\n  age = 21;  // ReferenceError: Must declare first!\n}\n\ngetAge();  // Error caught early!\n```\n\n**The fix:**\n```javascript\nfunction getAge() {\n  \"use strict\";\n  const age = 21;  // ✓ Properly declared\n  console.log(age);\n}\n\ngetAge();  // 21 (no global pollution!)\n```\n\n**Why strict mode is helpful:**\n```javascript\n// Catches common mistakes:\n\"use strict\";\n\n// 1. Accidental globals\nfunciton typo() { }  // SyntaxError (would be silent otherwise)\n\n// 2. Assignment to read-only\nconst obj = {};\nObject.defineProperty(obj, 'x', { value: 1, writable: false });\nobj.x = 2;  // TypeError (would be silent otherwise)\n\n// 3. Deleting undeletable\ndelete Object.prototype;  // TypeError (would be silent otherwise)\n```\n\n**Memory trick:** `\"use strict\"` = Training wheels for safer JavaScript. It catches mistakes that would otherwise silently create bugs!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-075',
    question: "🖥️ What's the output?\n\n```javascript\nconst obj = { a: \"one\", b: \"two\", a: \"three\" };\nconsole.log(obj);\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "{ a: \"one\", b: \"two\" }",
          "{ b: \"two\", a: \"three\" }",
          "{ a: \"three\", b: \"two\" }",
          "SyntaxError"
    ],
    correctAnswer: 2,
    explanation: "If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-087',
    question: "✅ What's its value?\n\n```javascript\nconst colorConfig = {\n  red: true,\n  blue: false,\n  green: true,\n  black: true,\n  yellow: false,\n};\n\nconst colors = [\"pink\", \"red\", \"blue\"];\n\nconsole.log(colorConfig.colors[1]);\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
          "true",
          "false",
          "undefined",
          "TypeError"
    ],
    correctAnswer: 3,
    explanation: "In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig[\"colors\"]`).\n\nWith dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-189',
    question: "📝 What's the output?\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter1 = createCounter();\nconst counter2 = createCounter();\n\nconsole.log(counter1());\nconsole.log(counter1());\nconsole.log(counter2());\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
      '1 2 3',
      '1 2 1',
      '1 1 1',
      '0 1 0',
    ],
    correctAnswer: 1,
    explanation: "Closures are like **backpacks** - when a function is created, it packs up all the variables it needs and carries them wherever it goes!\n\n**Think of it this way:**\n- `createCounter()` is a factory that makes counters\n- Each counter gets its OWN backpack with its OWN `count` variable\n- The backpack stays with the function forever, even after the factory closes\n\n**What's happening step-by-step:**\n\n```javascript\nfunction createCounter() {\n  let count = 0;  // This variable is \"packed\" into the closure's backpack\n  return function() {\n    count++;\n    return count;\n  };\n}\n```\n\n**Creating counter1:**\n```javascript\nconst counter1 = createCounter();\n// Creates a NEW backpack with:\n// - count = 0\n// Returns a function that can access this backpack\n```\n\n**Creating counter2:**\n```javascript\nconst counter2 = createCounter();\n// Creates ANOTHER NEW backpack with:\n// - count = 0 (separate from counter1's backpack!)\n// Returns a different function with its own backpack\n```\n\n**Now let's execute:**\n\n**Line 1: `counter1()`** → **1**\n```javascript\ncounter1()\n↓\n\"Open counter1's backpack\"\n↓\ncount = 0\ncount++ → count = 1\nReturn 1 ✓\n\n// counter1's backpack now has: count = 1\n// counter2's backpack still has: count = 0\n```\n\n**Line 2: `counter1()`** → **2**\n```javascript\ncounter1()\n↓\n\"Open counter1's backpack (same backpack!)\"\n↓\ncount = 1 (remembers from last time!)\ncount++ → count = 2\nReturn 2 ✓\n\n// counter1's backpack now has: count = 2\n// counter2's backpack still has: count = 0\n```\n\n**Line 3: `counter2()`** → **1**\n```javascript\ncounter2()\n↓\n\"Open counter2's backpack (different backpack!)\"\n↓\ncount = 0 (fresh start!)\ncount++ → count = 1\nReturn 1 ✓\n\n// counter1's backpack: count = 2 (unchanged)\n// counter2's backpack: count = 1\n```\n\n**The magic of closures:**\n\n1. **Private variables**: `count` can't be accessed directly from outside\n```javascript\ncounter1.count  // undefined (can't peek into the backpack!)\n```\n\n2. **Persistent state**: The backpack stays with the function\n```javascript\ncounter1();  // 1\ncounter1();  // 2\ncounter1();  // 3  (keeps counting!)\n```\n\n3. **Independent instances**: Each closure has its own backpack\n```javascript\nconst c1 = createCounter();\nconst c2 = createCounter();\nconst c3 = createCounter();\n// Three separate backpacks, three independent counts!\n```\n\n**Real-world analogy:**\nImagine a vending machine factory:\n- The factory (createCounter) builds vending machines\n- Each vending machine has its own coin counter inside\n- You can't reach inside to change the counter (private!)\n- Each machine tracks its own coins independently\n- The counter persists even after the factory closes\n\n**Real-world uses:**\n\n**1. Data privacy (encapsulation):**\n```javascript\nfunction createBankAccount(initialBalance) {\n  let balance = initialBalance;  // Private!\n  \n  return {\n    deposit(amount) {\n      balance += amount;\n      return balance;\n    },\n    withdraw(amount) {\n      if (amount <= balance) {\n        balance -= amount;\n        return balance;\n      }\n      return 'Insufficient funds';\n    },\n    getBalance() {\n      return balance;\n    }\n  };\n}\n\nconst myAccount = createBankAccount(1000);\nmyAccount.deposit(500);   // 1500\nmyAccount.balance;        // undefined (can't access directly!)\nmyAccount.balance = 9999; // Doesn't work! (protected)\n```\n\n**2. Event handlers with state:**\n```javascript\nfunction setupButton(id) {\n  let clickCount = 0;  // Remembers across clicks!\n  \n  document.getElementById(id).addEventListener('click', function() {\n    clickCount++;\n    console.log(`Button clicked ${clickCount} times`);\n  });\n}\n\nsetupButton('btn1');  // btn1 has its own counter\nsetupButton('btn2');  // btn2 has its own counter\n```\n\n**3. Module pattern:**\n```javascript\nconst gameModule = (function() {\n  let score = 0;      // Private\n  let lives = 3;      // Private\n  \n  return {\n    addPoints(points) {\n      score += points;\n    },\n    loseLife() {\n      lives--;\n      return lives > 0;\n    },\n    getScore() {\n      return score;\n    }\n  };\n})();\n\ngameModule.addPoints(100);\ngameModule.score;  // undefined (private!)\n```\n\n**Common gotcha - loop closures:**\n```javascript\n// ❌ Classic mistake:\nfor (var i = 0; i < 3; i++) {\n  setTimeout(function() {\n    console.log(i);  // Logs: 3, 3, 3 (all share same i!)\n  }, 100);\n}\n\n// ✅ Fix with let (block scope creates new closure each time):\nfor (let i = 0; i < 3; i++) {\n  setTimeout(function() {\n    console.log(i);  // Logs: 0, 1, 2 (each has own i!)\n  }, 100);\n}\n\n// ✅ Or create closure manually:\nfor (var i = 0; i < 3; i++) {\n  (function(j) {  // New backpack for each iteration\n    setTimeout(function() {\n      console.log(j);  // Logs: 0, 1, 2\n    }, 100);\n  })(i);\n}\n```\n\n**Memory tricks:**\n- Closure = Function + Backpack of variables\n- Inner function can access outer function's variables (even after outer finishes)\n- Each function call creates a NEW backpack (separate state)\n- The backpack never disappears as long as the function exists\n\n**Technical definition:**\nA closure is created when:\n1. A function is defined inside another function\n2. The inner function references variables from the outer function\n3. The inner function is returned or passed somewhere\n4. The inner function can still access those variables later\n\n**Why it works:**\nWhen `createCounter()` returns the inner function, JavaScript \"closes over\" (captures) the `count` variable, keeping it alive in memory. Each call to `createCounter()` creates a new execution context with its own `count`, so each returned function has its own private variable.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-194',
    question: "📝 What's the output?\n\n```javascript\nfunction outer() {\n  let x = 10;\n  \n  function inner() {\n    console.log(x);\n  }\n  \n  x = 20;\n  return inner;\n}\n\nconst fn = outer();\nfn();\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'medium',
    options: [
      '10',
      '20',
      'undefined',
      'ReferenceError',
    ],
    correctAnswer: 1,
    explanation: "Closures capture variables by **reference**, not by value! Think of it like giving someone your home address vs giving them a photocopy of your house.\n\n**The key concept: Reference vs Value**\n- Closure doesn't take a \"snapshot\" of the variable's value\n- It keeps a **live connection** to the variable itself\n- Any changes to the variable are reflected when the closure runs\n\n**What's happening step-by-step:**\n\n```javascript\nfunction outer() {\n  let x = 10;          // Step 1: Create x with value 10\n  \n  function inner() {\n    console.log(x);     // Step 2: inner remembers WHERE x lives (reference)\n  }\n  \n  x = 20;              // Step 3: Change x to 20 (same location, new value)\n  return inner;\n}\n```\n\n**Execution flow:**\n```javascript\nconst fn = outer();\n↓\n1. Create x = 10\n2. Define inner() with reference to x\n3. Change x to 20  ← Important: This happens BEFORE inner is returned!\n4. Return inner (it still references the SAME x, which is now 20)\n\nfn();\n↓\n\"What's the current value of x?\"\n↓\n20 ✓\n```\n\n**Visual analogy:**\nImagine `x` is a whiteboard:\n1. Write \"10\" on whiteboard\n2. Give `inner()` the address of the whiteboard (not a photo!)\n3. Erase \"10\" and write \"20\" on the same whiteboard\n4. Later, `inner()` looks at the whiteboard → sees \"20\"\n\n**More examples to solidify this:**\n\n**Example 1: Multiple updates**\n```javascript\nfunction makeCounter() {\n  let count = 0;\n  \n  function increment() {\n    console.log(count);\n  }\n  \n  count = 5;    // Changed before return\n  count = 10;   // Changed again\n  \n  return increment;\n}\n\nconst counter = makeCounter();\ncounter();  // 10 (sees the latest value)\n```\n\n**Example 2: Updating after return**\n```javascript\nfunction outer() {\n  let message = 'Hello';\n  \n  function inner() {\n    console.log(message);\n  }\n  \n  message = 'Hi';  // Changed BEFORE return\n  \n  setTimeout(() => {\n    message = 'Bye';  // This won't affect inner (it already ran)\n  }, 100);\n  \n  return inner;\n}\n\nconst fn = outer();\nfn();  // 'Hi' (last value before inner was returned)\n```\n\n**Example 3: The classic loop problem**\n```javascript\nconst functions = [];\n\n// Using var (function scope):\nfor (var i = 0; i < 3; i++) {\n  functions.push(function() {\n    console.log(i);  // Captures reference to i\n  });\n}\n\n// After loop, i = 3\nfunctions[0]();  // 3 (not 0!)\nfunctions[1]();  // 3 (not 1!)\nfunctions[2]();  // 3 (not 2!)\n// All share the SAME i, which is now 3\n\n// Using let (block scope):\nfor (let j = 0; j < 3; j++) {\n  functions.push(function() {\n    console.log(j);  // Each iteration creates NEW j\n  });\n}\n\nfunctions[0]();  // 0 ✓\nfunctions[1]();  // 1 ✓\nfunctions[2]();  // 2 ✓\n// Each function has its own j!\n```\n\n**Real-world gotcha:**\n```javascript\n// Setting up event handlers in a loop:\nconst buttons = document.querySelectorAll('button');\n\n// ❌ Wrong:\nfor (var i = 0; i < buttons.length; i++) {\n  buttons[i].addEventListener('click', function() {\n    console.log('Button', i, 'clicked');\n    // All buttons log the same i! (final value)\n  });\n}\n\n// ✅ Fixed with let:\nfor (let i = 0; i < buttons.length; i++) {\n  buttons[i].addEventListener('click', function() {\n    console.log('Button', i, 'clicked');\n    // Each button remembers its own i!\n  });\n}\n\n// ✅ Or use array methods:\nbuttons.forEach((button, i) => {\n  button.addEventListener('click', function() {\n    console.log('Button', i, 'clicked');\n    // Each callback has its own i parameter\n  });\n});\n```\n\n**Capturing the value (workaround for var):**\n```javascript\nfor (var i = 0; i < 3; i++) {\n  (function(capturedValue) {\n    // capturedValue is a parameter, so it's a NEW variable each time\n    functions.push(function() {\n      console.log(capturedValue);  // Uses the captured parameter\n    });\n  })(i);  // Pass current i value\n}\n\nfunctions[0]();  // 0 ✓\nfunctions[1]();  // 1 ✓\nfunctions[2]();  // 2 ✓\n```\n\n**Why this matters:**\n```javascript\nfunction createGreeter() {\n  let greeting = 'Hello';\n  \n  function greet(name) {\n    console.log(greeting + ', ' + name);\n  }\n  \n  function changeGreeting(newGreeting) {\n    greeting = newGreeting;  // Changes the SAME greeting variable\n  }\n  \n  return { greet, changeGreeting };\n}\n\nconst greeter = createGreeter();\ngreeter.greet('Alice');           // 'Hello, Alice'\ngreeter.changeGreeting('Hi');    // Modifies the shared variable\ngreeter.greet('Bob');             // 'Hi, Bob' (sees the updated value!)\n```\n\n**Memory tricks:**\n- Closures capture by **reference** (live connection), not by value (snapshot)\n- Think: \"The closure has the variable's **address**, not a copy\"\n- Changes to the variable BEFORE the closure runs are reflected\n- `var` in loops = one shared variable (reference problem)\n- `let` in loops = new variable per iteration (separate references)\n\n**Technical insight:**\nClosures capture the **lexical environment**, not the values. The lexical environment is like a dictionary of variable names → memory locations. When you change `x = 20`, you're changing what's stored at that memory location, but the closure still points to the same location.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-195',
    question: "📝 What's the output?\n\n```javascript\nfunction makeMultiplier(x) {\n  return function(y) {\n    return x * y;\n  };\n}\n\nconst double = makeMultiplier(2);\nconst triple = makeMultiplier(3);\n\nconsole.log(double(5));\nconsole.log(triple(5));\nconsole.log(double(10));\n```",
    category: 'javascript',
    subcategory: 'closures',
    difficulty: 'easy',
    options: [
      '10 15 20',
      '10 10 10',
      '7 8 12',
      '10 15 30',
    ],
    correctAnswer: 0,
    explanation: "This is a beautiful example of **function factories** using closures - creating specialized functions with \"baked-in\" configuration!\n\n**Think of it like a cookie cutter factory:**\n- `makeMultiplier()` is the factory\n- Each call creates a specialized cookie cutter (function)\n- The number you pass in gets \"baked into\" that cutter\n- Each cutter remembers its own number\n\n**What's happening:**\n\n```javascript\nfunction makeMultiplier(x) {\n  // x is captured in the closure\n  return function(y) {\n    return x * y;  // Uses the captured x\n  };\n}\n```\n\n**Creating double:**\n```javascript\nconst double = makeMultiplier(2);\n// Returns a function that remembers x = 2\n// Equivalent to: function(y) { return 2 * y; }\n```\n\n**Creating triple:**\n```javascript\nconst triple = makeMultiplier(3);\n// Returns a function that remembers x = 3\n// Equivalent to: function(y) { return 3 * y; }\n```\n\n**Now let's execute:**\n\n**Line 1: `double(5)`** → **10**\n```javascript\ndouble(5)\n↓\nfunction(y) { return x * y; }\n// x = 2 (from closure), y = 5 (from argument)\n↓\n2 * 5 = 10 ✓\n```\n\n**Line 2: `triple(5)`** → **15**\n```javascript\ntriple(5)\n↓\nfunction(y) { return x * y; }\n// x = 3 (from closure), y = 5 (from argument)\n↓\n3 * 5 = 15 ✓\n```\n\n**Line 3: `double(10)`** → **20**\n```javascript\ndouble(10)\n↓\nfunction(y) { return x * y; }\n// x = 2 (still remembers!), y = 10 (from argument)\n↓\n2 * 10 = 20 ✓\n```\n\n**The pattern - Partial Application:**\n\nThis technique is called **partial application** or **currying** - you provide some arguments now, and the rest later!\n\n```javascript\n// Original function: multiply(x, y)\n// Partially applied: makeMultiplier(x) returns function(y)\n\n// Create specialized versions:\nconst double = makeMultiplier(2);\nconst triple = makeMultiplier(3);\nconst quadruple = makeMultiplier(4);\nconst times10 = makeMultiplier(10);\n\n// Use them easily:\nconst numbers = [1, 2, 3, 4, 5];\nnumbers.map(double);     // [2, 4, 6, 8, 10]\nnumbers.map(triple);     // [3, 6, 9, 12, 15]\nnumbers.map(times10);    // [10, 20, 30, 40, 50]\n```\n\n**Real-world examples:**\n\n**1. Tax calculators:**\n```javascript\nfunction makeTaxCalculator(taxRate) {\n  return function(amount) {\n    return amount * (1 + taxRate);\n  };\n}\n\nconst addNYTax = makeTaxCalculator(0.08875);  // 8.875% NYC tax\nconst addCATax = makeTaxCalculator(0.0725);   // 7.25% CA tax\n\naddNYTax(100);   // 108.875\naddCATax(100);   // 107.25\n```\n\n**2. String formatters:**\n```javascript\nfunction makeFormatter(prefix, suffix) {\n  return function(content) {\n    return `${prefix}${content}${suffix}`;\n  };\n}\n\nconst bold = makeFormatter('<b>', '</b>');\nconst italic = makeFormatter('<i>', '</i>');\nconst parentheses = makeFormatter('(', ')');\n\nbold('Important');       // '<b>Important</b>'\nitalic('Emphasized');    // '<i>Emphasized</i>'\nparentheses('aside');    // '(aside)'\n```\n\n**3. API fetchers:**\n```javascript\nfunction makeAPI(baseURL) {\n  return function(endpoint) {\n    return fetch(`${baseURL}${endpoint}`);\n  };\n}\n\nconst githubAPI = makeAPI('https://api.github.com');\nconst twitterAPI = makeAPI('https://api.twitter.com');\n\ngithubAPI('/users/octocat');  // Fetches from GitHub\ntwitterAPI('/users/jack');    // Fetches from Twitter\n```\n\n**4. Event throttling:**\n```javascript\nfunction makeThrottler(delay) {\n  let lastCall = 0;\n  \n  return function(callback) {\n    const now = Date.now();\n    if (now - lastCall >= delay) {\n      lastCall = now;\n      callback();\n    }\n  };\n}\n\nconst throttle500ms = makeThrottler(500);\nconst throttle1s = makeThrottler(1000);\n\n// Use in event handlers:\nwindow.addEventListener('scroll', () => {\n  throttle500ms(() => {\n    console.log('Scrolled!');\n  });\n});\n```\n\n**More complex example - Function composition:**\n```javascript\nfunction makeAdder(x) {\n  return function(y) {\n    return x + y;\n  };\n}\n\nfunction makePowerOf(x) {\n  return function(y) {\n    return Math.pow(y, x);\n  };\n}\n\nconst add5 = makeAdder(5);\nconst square = makePowerOf(2);\nconst cube = makePowerOf(3);\n\n// Combine them:\nconst squareThenAdd5 = (n) => add5(square(n));\n\nsquareThenAdd5(3);  // 3² + 5 = 9 + 5 = 14\nsquareThenAdd5(4);  // 4² + 5 = 16 + 5 = 21\n```\n\n**Why closures make this powerful:**\n1. **Configuration**: Set up behavior once, use many times\n2. **Reusability**: Create multiple specialized versions\n3. **Cleaner code**: No need to repeat arguments\n4. **Composability**: Easy to combine functions\n\n**Memory tricks:**\n- Factory function + parameter = specialized function\n- Closure \"bakes in\" the configuration\n- Each call to factory creates independent closure\n- Original parameter stays accessible forever\n\n**Comparison to objects:**\n```javascript\n// Closure approach:\nconst double = makeMultiplier(2);\ndouble(5);  // 10\n\n// Object approach (more verbose):\nconst doubler = {\n  multiplier: 2,\n  multiply(y) {\n    return this.multiplier * y;\n  }\n};\ndoubler.multiply(5);  // 10\n\n// Closure is cleaner for simple cases!\n```",
    tags: ['javascript', 'quiz'],
  }
];
