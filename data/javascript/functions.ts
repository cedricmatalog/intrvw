import { QuizQuestion } from '../../types/quiz';

export const functionsQuizzes: QuizQuestion[] = [
{
    id: 'js-029',
    question: "🔤 Is this a pure function?\n\n```javascript\nfunction sum(a, b) {\n  return a + b;\n}\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "Yes",
          "No",
          "Only if a and b are numbers",
          "Only in strict mode"
    ],
    correctAnswer: 0,
    explanation: "Yes, this is a **pure function**! Let's understand what makes a function \"pure\".\n\n**Think of a pure function like a vending machine:**\n- Insert $1 → Always get the same candy\n- Same input → Same output\n- No surprises, no side effects\n- Doesn't affect anything outside itself\n\n**The Two Rules of Pure Functions:**\n\n**Rule 1: Same input → Same output (Deterministic)**\n```javascript\n// ✅ Pure function\nfunction sum(a, b) {\n  return a + b;\n}\nsum(1, 2)  // Always returns 3\nsum(1, 2)  // Always returns 3 (predictable!)\nsum(5, 10) // Always returns 15\n\n// ❌ NOT pure - depends on external variable\nlet multiplier = 2;\nfunction impureSum(a, b) {\n  return (a + b) * multiplier;  // Output changes if multiplier changes!\n}\nimpureSum(1, 2)  // 6\nmultiplier = 3;\nimpureSum(1, 2)  // 9 (different output for same input!)\n```\n\n**Rule 2: No side effects**\n```javascript\n// ✅ Pure - doesn't modify anything outside\nfunction sum(a, b) {\n  return a + b;  // Just returns a value\n}\n\n// ❌ NOT pure - modifies external state\nlet total = 0;\nfunction impureAdd(n) {\n  total += n;  // Side effect: modifies external variable!\n  return total;\n}\n\n// ❌ NOT pure - performs I/O operations\nfunction impureSave(data) {\n  console.log(data);  // Side effect: logs to console\n  return data;\n}\n\n// ❌ NOT pure - mutates input\nfunction impureAddItem(arr, item) {\n  arr.push(item);  // Side effect: modifies input array!\n  return arr;\n}\n\n// ✅ Pure version - creates new array\nfunction pureAddItem(arr, item) {\n  return [...arr, item];  // Returns new array, doesn't modify original\n}\n```\n\n**Why the `sum` function IS pure:**\n```javascript\nfunction sum(a, b) {\n  return a + b;  // ✓ Only uses its parameters\n                 // ✓ Doesn't access external variables\n                 // ✓ Doesn't modify anything outside\n                 // ✓ No console.log, no API calls, no mutations\n                 // ✓ Always returns same result for same inputs\n}\n```\n\n**Common side effects that make functions impure:**\n```javascript\n// ❌ Modifying global/external variables\nfunction bad1() { globalVar++; }\n\n// ❌ Mutating objects/arrays passed as arguments\nfunction bad2(obj) { obj.name = \"changed\"; }\n\n// ❌ Console logging\nfunction bad3(x) { console.log(x); return x; }\n\n// ❌ Making API calls\nfunction bad4() { fetch('/api'); }\n\n// ❌ Generating random numbers or dates\nfunction bad5() { return Math.random(); }  // Different output each time!\nfunction bad6() { return Date.now(); }     // Different output each time!\n\n// ❌ Accessing DOM\nfunction bad7() { return document.title; }\n```\n\n**Real-world benefits of pure functions:**\n```javascript\n// Easy to test:\nconst result = sum(2, 3);\nassert(result === 5);  // Always passes!\n\n// Easy to reason about:\nconst x = sum(1, 2);  // You know x is 3, forever\nconst y = sum(1, 2);  // You know y is 3, forever\n\n// Can cache results (memoization):\nconst cache = {};\nfunction memoizedSum(a, b) {\n  const key = `${a},${b}`;\n  if (cache[key]) return cache[key];  // Reuse previous result\n  const result = a + b;\n  cache[key] = result;\n  return result;\n}\n\n// Safe for parallel execution:\n// Multiple calls can run at same time without conflicts\n```\n\n**Note about type coercion:**\nThe question asks \"Only if a and b are numbers?\" - The function is pure regardless of types! Even if you pass strings:\n```javascript\nsum(\"hello\", \"world\")  // Always returns \"helloworld\"\nsum(\"hello\", \"world\")  // Always returns \"helloworld\" (still predictable!)\n```\nIt's still pure because same inputs → same output, no side effects.\n\n**Memory trick:**\nPure functions are like **math functions**:\n- f(x) = x + 2\n- If x = 5, f(x) is ALWAYS 7\n- No surprises, no side effects, completely predictable!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-030',
    question: "📝 What is the output?\n\n```javascript\nfunction sayHi(name) {\n  return `Hi there, ${name}`;\n}\n\nconsole.log(sayHi());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "Hi there,",
          "Hi there, undefined",
          "Hi there, null",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "Missing parameters default to `undefined` - like ordering a pizza without choosing toppings, you get the \"default\" (nothing).\n\n**What happens:**\n```javascript\nfunction sayHi(name) {  // name parameter declared\n  return `Hi there, ${name}`;\n}\n\nsayHi()  // Called with NO arguments\n↓\nname = undefined  // Default value for missing parameters\n↓\n`Hi there, ${undefined}`  // Template literal converts to string\n↓\n\"Hi there, undefined\"\n```\n\n**Default parameters to the rescue:**\n```javascript\n// ✅ With default value\nfunction sayHi(name = \"Guest\") {\n  return `Hi there, ${name}`;\n}\n\nsayHi()          // \"Hi there, Guest\"\nsayHi(\"Sarah\")   // \"Hi there, Sarah\"\nsayHi(undefined) // \"Hi there, Guest\" (undefined triggers default)\nsayHi(null)      // \"Hi there, null\" (null doesn't trigger default!)\n```\n\n**Common gotcha:** Only `undefined` triggers default parameters, not `null` or other falsy values.\n\n**Memory trick:** No argument = `undefined`, not an error. Use default parameters (`name = \"default\"`) to provide fallback values.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-031',
    question: "📝 What's the output?\n\n```javascript\nfunction sum(num1, num2 = num1) {\n  console.log(num1 + num2);\n}\n\nsum(10);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "NaN",
          "20",
          "ReferenceError",
          "undefined"
    ],
    correctAnswer: 1,
    explanation: "**Default parameters can reference earlier parameters** - like a recipe where step 2 can use ingredients from step 1, but not step 3!\n\n**What happens:**\n```javascript\nsum(10)\n↓\nnum1 = 10         // First parameter gets the value\nnum2 = num1       // Second parameter defaults to first (num1 = 10)\n↓\n10 + 10 = 20\n```\n\n**The rule:**\n```javascript\n// ✅ Can reference parameters to the LEFT (already defined)\nfunction sum(a, b = a) { }         // OK: b uses a\nfunction sum(a, b = a, c = b) { }  // OK: c uses b, b uses a\n\n// ❌ Cannot reference parameters to the RIGHT (not yet defined)\nfunction sum(a = b, b) { }         // ReferenceError: b not defined yet!\n```\n\n**Real-world example:**\n```javascript\n// Common pattern: optional multiplier defaults to value\nfunction calculate(value, multiplier = value) {\n  return value * multiplier;\n}\n\ncalculate(5);      // 5 * 5 = 25\ncalculate(5, 2);   // 5 * 2 = 10\n```\n\n**Memory trick:** Default parameters are evaluated **left-to-right**, like reading a book. You can only reference what you've already read!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-032',
    question: "📝 What's the output?\n\n```javascript\nfunction nums(a, b) {\n  if (a > b) console.log(\"a is bigger\");\n  else console.log(\"b is bigger\");\n  return;\n  a + b;\n}\n\nconsole.log(nums(4, 2));\nconsole.log(nums(1, 2));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "a is bigger, 6 and b is bigger, 3",
          "a is bigger, undefined and b is bigger, undefined",
          "undefined and undefined",
          "SyntaxError"
    ],
    correctAnswer: 1,
    explanation: "**Automatic Semicolon Insertion (ASI)** strikes! JavaScript adds invisible semicolons, turning your code into something you didn't write.\n\n**What happens:**\n```javascript\nfunction nums(a, b) {\n  if (a > b) console.log(\"a is bigger\");\n  else console.log(\"b is bigger\");\n  return;  // ← JavaScript adds semicolon HERE!\n  a + b;   // ← This line is unreachable!\n}\n```\n\n**JavaScript sees it as:**\n```javascript\nreturn;  // Returns undefined\n// Everything below is unreachable dead code\na + b;\n```\n\n**Execution:**\n```javascript\nnums(4, 2)\n↓\n4 > 2 → true → logs \"a is bigger\"\n↓\nreturn; → returns undefined\n↓\nconsole.log(undefined) → \"undefined\"\n\nnums(1, 2)\n↓\n1 > 2 → false → logs \"b is bigger\"\n↓\nreturn; → returns undefined\n↓\nconsole.log(undefined) → \"undefined\"\n```\n\n**The fix:**\n```javascript\n// ✅ Return on same line\nfunction nums(a, b) {\n  if (a > b) console.log(\"a is bigger\");\n  else console.log(\"b is bigger\");\n  return a + b;  // Works!\n}\n\n// ✅ Or use parentheses for multi-line\nfunction nums(a, b) {\n  if (a > b) console.log(\"a is bigger\");\n  else console.log(\"b is bigger\");\n  return (\n    a + b  // Works! Parentheses prevent ASI\n  );\n}\n```\n\n**Common ASI gotchas:**\n```javascript\n// ❌ return on new line\nreturn\n  a + b;  // Becomes: return; a + b;\n\n// ❌ Object literal on new line\nreturn\n  { name: \"John\" };  // Becomes: return; { name: \"John\" };\n\n// ✅ Fix: Keep on same line or use parentheses\nreturn {\n  name: \"John\"\n};\n```\n\n**Memory trick:** `return` with nothing after it on the same line = `return undefined`. Never put a line break right after `return`!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-033',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(`${((x) => x)(\"I love\")} to program`);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "I love to program",
          "undefined to program",
          "${(x => x)('I love') to program",
          "TypeError"
    ],
    correctAnswer: 0,
    explanation: "Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-034',
    question: "📝 What's the output?\n\n```javascript\nconst add = (x) => (y) => (z) => {\n  console.log(x, y, z);\n  return x + y + z;\n};\n\nadd(4)(5)(6);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "4 5 6",
          "6 5 4",
          "4 function function",
          "undefined undefined 6"
    ],
    correctAnswer: 0,
    explanation: "This is **currying** - a function that returns functions! Let's break down this \"function inception\".\n\n**Think of currying like a multi-step vending machine:**\n- Step 1: Insert coin → Machine opens next slot\n- Step 2: Press button → Machine opens next slot\n- Step 3: Choose item → Finally get your snack!\n\n**Understanding the structure:**\n```javascript\nconst add = (x) => (y) => (z) => {\n  console.log(x, y, z);\n  return x + y + z;\n};\n\n// This is equivalent to:\nconst add = function(x) {\n  return function(y) {\n    return function(z) {\n      console.log(x, y, z);\n      return x + y + z;\n    };\n  };\n};\n```\n\n**Step-by-step execution of `add(4)(5)(6)`:**\n\n**Step 1: Call `add(4)`**\n```javascript\nadd(4)\n↓\nReceives x = 4\n↓\nReturns: (y) => (z) => { console.log(4, y, z); return 4 + y + z; }\n↓\nResult: A function waiting for 'y'\n```\n\n**Step 2: Call the returned function with `(5)`**\n```javascript\nadd(4)(5)\n        ↑\n        This calls the function from Step 1\n↓\nReceives y = 5\n↓\nReturns: (z) => { console.log(4, 5, z); return 4 + 5 + z; }\n↓\nResult: A function waiting for 'z'\n```\n\n**Step 3: Call the returned function with `(6)`**\n```javascript\nadd(4)(5)(6)\n            ↑\n            This calls the function from Step 2\n↓\nReceives z = 6\n↓\nExecutes: console.log(4, 5, 6)  // Prints \"4 5 6\"\n↓\nReturns: 4 + 5 + 6 = 15\n```\n\n**How closures make this work:**\n```javascript\nconst add = (x) => (y) => (z) => {\n  console.log(x, y, z);  // Can access x, y, z from outer scopes!\n  return x + y + z;\n};\n\n// When the innermost function runs:\n// - 'z' is its own parameter ✓\n// - 'y' is remembered from the parent function (closure!) ✓\n// - 'x' is remembered from the grandparent function (closure!) ✓\n```\n\n**Visual scope chain:**\n```javascript\n┌─ Outer function (x=4) ─────────────────┐\n│  const add = (x) =>                     │\n│  ┌─ Middle function (y=5) ───────────┐ │\n│  │  (y) =>                            │ │\n│  │  ┌─ Inner function (z=6) ───────┐ │ │\n│  │  │  (z) => {                    │ │ │\n│  │  │    console.log(x, y, z);     │ │ │\n│  │  │    return x + y + z;         │ │ │\n│  │  │  }                            │ │ │\n│  │  └──────────────────────────────┘ │ │\n│  └─────────────────────────────────────┘ │\n└─────────────────────────────────────────┘\n\nInner function can \"see through\" all layers!\n```\n\n**Common currying patterns:**\n```javascript\n// 1. Partial application - \"lock in\" arguments gradually\nconst add = (x) => (y) => x + y;\nconst add5 = add(5);        // Lock in x=5\nconsole.log(add5(3));       // 8\nconsole.log(add5(10));      // 15\n\n// 2. Configuration functions\nconst log = (level) => (message) => console.log(`[${level}] ${message}`);\nconst errorLog = log('ERROR');  // Create specialized logger\nconst infoLog = log('INFO');\nerrorLog('Something broke!');   // [ERROR] Something broke!\ninfoLog('All good');            // [INFO] All good\n\n// 3. Multiplier factory\nconst multiply = (a) => (b) => (c) => a * b * c;\nconst double = multiply(2);      // Waiting for b and c\nconst doubleThenTriple = double(3);  // Waiting for c\nconsole.log(doubleThenTriple(4));   // 2 * 3 * 4 = 24\n```\n\n**Why use currying?**\n```javascript\n// Instead of:\nfunction calculatePrice(price, tax, discount) {\n  return (price + price * tax) - discount;\n}\ncalculatePrice(100, 0.2, 10);\ncalculatePrice(200, 0.2, 10);\ncalculatePrice(300, 0.2, 10);  // Repeating tax and discount!\n\n// With currying:\nconst calculatePrice = (tax) => (discount) => (price) => {\n  return (price + price * tax) - discount;\n};\nconst withStandardRates = calculatePrice(0.2)(10);\n// Now reuse:\nwithStandardRates(100);  // 110\nwithStandardRates(200);  // 230\nwithStandardRates(300);  // 350\n```\n\n**Common gotcha:**\n```javascript\n// ❌ Calling all at once\nconst result = add(4, 5, 6);  // Error! add expects one argument\n\n// ✅ Call one at a time\nconst result = add(4)(5)(6);  // Works!\n\n// ✅ Or store intermediate results\nconst step1 = add(4);\nconst step2 = step1(5);\nconst result = step2(6);  // 15\n```\n\n**Memory trick:**\nCurrying = **Nesting dolls of functions**\n- Open first doll (call first function) → Find another doll inside\n- Open second doll (call second function) → Find another doll inside  \n- Open final doll (call last function) → Get the treasure (result)!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-036',
    question: "📝 What's the output?\n\n```javascript\nconst add = (x) => x + x;\n\nfunction myFunc(num = 2, value = add(num)) {\n  console.log(num, value);\n}\n\nmyFunc();\nmyFunc(3);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "2 4 and 3 6",
          "2 NaN and 3 NaN",
          "2 Error and 3 6",
          "2 4 and 3 Error"
    ],
    correctAnswer: 0,
    explanation: "First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` is the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.\n\nThen, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-037',
    question: "📝 What's the output?\n\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('World'));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
          "Hello, World!",
          "Hello, ${name}!",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "Template literals (enclosed by backticks) allow embedded expressions using ${expression} syntax. The function parameter 'name' is replaced with 'World', resulting in 'Hello, World!'.",
    tags: ["functions","template-literals","parameters"],
  },

{
    id: 'js-038',
    question: "📝 What's the output?\n\n```javascript\nconst multiply = (a, b = 2) => a * b;\n\nconsole.log(multiply(5));\nconsole.log(multiply(5, 3));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
          "10 and 15",
          "NaN and 15",
          "5 and 8",
          "undefined and 15"
    ],
    correctAnswer: 0,
    explanation: "Default parameters allow function parameters to have default values if no value or undefined is passed. multiply(5) uses the default b=2, giving 10. multiply(5, 3) uses the passed value 3, giving 15.",
    tags: ["functions","default-parameters","arrow-functions"],
  },

{
    id: 'js-039',
    question: "📝 What's the output?\n\n```javascript\nconst fn = function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n};\n\nconsole.log(fn(5));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "120",
          "5",
          "ReferenceError",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "Named function expressions can reference themselves by name for recursion. factorial(5) = 5 * 4 * 3 * 2 * 1 = 120. The name 'factorial' is only available inside the function, not outside.",
    tags: ["functions","recursion","function-expressions"],
  },

{
    id: 'js-040',
    question: "📝 What's the output?\n\n```javascript\nfunction add(a) {\n  return function(b) {\n    return a + b;\n  };\n}\n\nconsole.log(add(2)(3));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "5",
          "23",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "This is currying - transforming a function that takes multiple arguments into a sequence of functions each taking a single argument. add(2) returns a function that adds 2 to its argument, so add(2)(3) = 2 + 3 = 5.",
    tags: ["functions","currying","closures","higher-order"],
  },

{
    id: 'js-047',
    question: "🔤 What's the difference between function declarations and function expressions?",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "Function declarations are hoisted, expressions are not",
          "Function expressions are hoisted, declarations are not",
          "There is no difference",
          "Expressions cannot be named"
    ],
    correctAnswer: 0,
    explanation: "**Function declarations are hoisted, expressions are not** - declarations jump to the top like eager students, expressions wait their turn!\n\n**What happens:**\n```javascript\n// ✅ Function Declaration - Hoisted (works!)\nsayHi();  // \"Hi!\" - Called BEFORE definition\n\nfunction sayHi() {\n  console.log(\"Hi!\");\n}\n\n// ❌ Function Expression - NOT Hoisted (error!)\nsayBye();  // ReferenceError: Cannot access before initialization\n\nconst sayBye = function() {\n  console.log(\"Bye!\");\n};\n```\n\n**The difference:**\n```javascript\n// Declaration: Whole function jumps to top\nfunction declared() { }    // Available immediately everywhere\n\n// Expression: Only variable is hoisted (as undefined)\nvar expressed = function() { };  // Variable hoisted, function isn't\nlet expressed = function() { };  // In TDZ until this line\nconst expressed = function() { }; // In TDZ until this line\n```\n\n**Visual comparison:**\n```javascript\n// What you write:\nconsole.log(declaration);  // [Function: declaration]\nconsole.log(expression);   // ReferenceError\n\nfunction declaration() { }\nconst expression = function() { };\n\n// What JavaScript sees (after hoisting):\nfunction declaration() { }  // ← Moved to top!\nconst expression;           // ← Only declaration hoisted (TDZ)\n\nconsole.log(declaration);  // [Function: declaration]\nconsole.log(expression);   // ReferenceError (still in TDZ)\n\nexpression = function() { };  // Assignment stays here\n```\n\n**When to use each:**\n```javascript\n// Declaration: When you want it available everywhere\nfunction utility() {\n  return \"Available everywhere\";\n}\n\n// Expression: When you want controlled initialization\nconst api = someCondition\n  ? function() { return \"API A\"; }\n  : function() { return \"API B\"; };\n```\n\n**Memory trick:** Function **declarations** declare their presence loudly (hoisted). Function **expressions** are shy and wait for their turn (not hoisted).",
    tags: ["functions","hoisting","declarations"],
  },

{
    id: 'js-050',
    question: "📝 What's the output?\n\n```javascript\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = outer();\nconsole.log(counter());\nconsole.log(counter());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "1 and 2",
          "0 and 0",
          "1 and 1",
          "undefined and undefined"
    ],
    correctAnswer: 0,
    explanation: "This demonstrates closure. The inner function retains access to the outer function's variables even after outer() has returned. Each call to counter() increments and returns the same 'count' variable, resulting in 1, then 2.",
    tags: ["functions","closures","scope"],
  },

{
    id: 'js-051',
    question: "📝 What's the output?\n\n```javascript\nconst shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius,\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "20 and 62.83185307179586",
          "20 and NaN",
          "20 and 63",
          "NaN and 63"
    ],
    correctAnswer: 1,
    explanation: "This demonstrates the **crucial difference** between regular functions and arrow functions with `this` binding!\n\n**Quick Answer:** `20 and NaN`\n- `diameter()` works ✓ (regular function, `this` = shape object)\n- `perimeter()` fails ✗ (arrow function, `this` ≠ shape object)\n\n**Think of `this` like a chameleon:**\n- **Regular function** = Chameleon changes color based on WHO calls it\n- **Arrow function** = Chameleon is painted - color is fixed when created, never changes\n\n**Understanding the code:**\n```javascript\nconst shape = {\n  radius: 10,\n  diameter() {              // Regular function (method shorthand)\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius,  // Arrow function\n};\n```\n\n**Part 1: `shape.diameter()` → 20 ✓**\n```javascript\nshape.diameter()\n↓\nRegular function called as object method\n↓\n'this' = the object that called it = shape\n↓\nthis.radius = shape.radius = 10\n↓\nResult: 10 * 2 = 20\n```\n\n**Part 2: `shape.perimeter()` → NaN ✗**\n```javascript\nshape.perimeter()\n↓\nArrow function called\n↓\n'this' = surrounding scope when DEFINED (not when called!)\n↓\nSurrounding scope = global/window (outside the object)\n↓\nthis.radius = undefined (no radius in global scope)\n↓\nResult: 2 * Math.PI * undefined = NaN\n```\n\n**The fundamental difference:**\n```javascript\n// Regular function - 'this' depends on HOW it's called\nfunction regular() {\n  return this;\n}\n\nconst obj = { fn: regular };\nobj.fn();           // this = obj ✓\nconst standalone = obj.fn;\nstandalone();       // this = window/undefined ✗ (depends on call site!)\n\n// Arrow function - 'this' depends on WHERE it's defined\nconst arrow = () => this;\n\nconst obj2 = { fn: arrow };\nobj2.fn();          // this = window (defined in global scope)\nconst standalone2 = obj2.fn;\nstandalone2();      // this = window (still same!)\n```\n\n**Visualizing `this` binding:**\n```javascript\n// Regular function: Dynamic 'this' (call-time binding)\n┌─────────────────┐\n│   shape.diameter()    │ ← Called on shape\n└────────┬────────┘\n         ↓\n    this = shape ✓\n\n// Arrow function: Lexical 'this' (definition-time binding)\n┌─────────────────┐\n│  shape.perimeter  │ ← Defined in global scope\n└────────┬────────┘\n         ↓\n    this = global ✗\n```\n\n**Real-world examples:**\n```javascript\n// ❌ Arrow function in object method (WRONG)\nconst user = {\n  name: 'Alice',\n  greet: () => {\n    console.log(`Hi, I'm ${this.name}`);\n  }\n};\nuser.greet();  // \"Hi, I'm undefined\" ✗\n\n// ✅ Regular function in object method (CORRECT)\nconst user2 = {\n  name: 'Alice',\n  greet() {\n    console.log(`Hi, I'm ${this.name}`);\n  }\n};\nuser2.greet();  // \"Hi, I'm Alice\" ✓\n\n// ✅ Arrow function inside regular function (CORRECT - captures outer 'this')\nconst user3 = {\n  name: 'Alice',\n  friends: ['Bob', 'Charlie'],\n  greetFriends() {\n    // 'this' here = user3 ✓\n    this.friends.forEach((friend) => {\n      // Arrow function inherits 'this' from greetFriends\n      console.log(`${this.name} says hi to ${friend}`);\n    });\n  }\n};\nuser3.greetFriends();\n// \"Alice says hi to Bob\"\n// \"Alice says hi to Charlie\"\n\n// ❌ Regular function in callback (WRONG - loses 'this')\nconst user4 = {\n  name: 'Alice',\n  friends: ['Bob'],\n  greetFriends() {\n    this.friends.forEach(function(friend) {\n      console.log(`${this.name} says hi to ${friend}`);\n      //              ↑ 'this' is undefined here!\n    });\n  }\n};\n```\n\n**When to use each:**\n```javascript\n// Use REGULAR functions for:\n// ✓ Object methods\n// ✓ Constructors\n// ✓ When you need dynamic 'this'\n\nconst obj = {\n  value: 42,\n  getValue() { return this.value; }  // ✓\n};\n\n// Use ARROW functions for:\n// ✓ Callbacks where you want to keep outer 'this'\n// ✓ Functions that don't need their own 'this'\n\nclass Component {\n  constructor() {\n    this.count = 0;\n  }\n  \n  setupHandler() {\n    // Arrow function keeps 'this' = component instance\n    button.addEventListener('click', () => {\n      this.count++;  // ✓ 'this' is the component\n    });\n  }\n}\n```\n\n**Common gotcha:**\n```javascript\nconst calculator = {\n  value: 0,\n  add: (n) => this.value += n,  // ❌ Won't work!\n  subtract: (n) => this.value -= n,  // ❌ Won't work!\n};\n\n// Fix:\nconst calculator2 = {\n  value: 0,\n  add(n) { this.value += n; },  // ✓ Works!\n  subtract(n) { this.value -= n; },  // ✓ Works!\n};\n```\n\n**Memory trick:**\n- **Regular function** = \"I'll figure out `this` when you call me\" (flexible)\n- **Arrow function** = \"I already know `this` from where I was born\" (fixed)\n- **In objects** = Use regular functions for methods, arrow functions for callbacks!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-057',
    question: "🖥️ What's the output?\n\n```javascript\nconst user = {\n  email: \"my@email.com\",\n  updateEmail: (email) => {\n    this.email = email;\n  },\n};\n\nuser.updateEmail(\"new@email.com\");\nconsole.log(user.email);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "my@email.com",
          "new@email.com",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "The `updateEmail` function is an arrow function, and is not bound to the `user` object. This means that the `this` keyword is not referring to the `user` object, but refers to the global scope in this case. The value of `email` within the `user` object does not get updated. When logging the value of `user.email`, the original value of `my@email.com` gets returned.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-058',
    question: "📝 What's the output?\n\n```javascript\nconst person = {\n  name: 'John',\n  greet: function() {\n    return () => console.log(this.name);\n  }\n};\n\nconst greetFn = person.greet();\ngreetFn();\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'hard',
    options: [
          "John",
          "undefined",
          "TypeError",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "Arrow functions don't have their own 'this' - they inherit it from the parent scope. The arrow function is created inside greet() where 'this' refers to 'person', so this.name is 'John' even when called later.",
    tags: ["functions","arrow-functions","this","lexical-scope"],
  },

{
    id: 'js-069',
    question: "📝 What does the `setInterval` method return in the browser?\n\n```javascript\nsetInterval(() => console.log(\"Hi\"), 1000);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "a unique id",
          "the amount of milliseconds specified",
          "the passed function",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-078',
    question: "🖥️ What's the output?\n\n```javascript\n[\n  [0, 1],\n  [2, 3],\n].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },\n  [1, 2]\n);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "[0, 1, 2, 3, 1, 2]",
          "[6, 1, 2]",
          "[1, 2, 0, 1, 2, 3]",
          "[1, 2, 6]"
    ],
    correctAnswer: 2,
    explanation: "`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.\n\nThen, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-079',
    question: "🖥️ What's the output?\n\n```javascript\nfunction getInfo(member, year) {\n  member.name = \"Lydia\";\n  year = \"1998\";\n}\n\nconst person = { name: \"Sarah\" };\nconst birthYear = \"1997\";\n\ngetInfo(person, birthYear);\n\nconsole.log(person, birthYear);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "{ name: \"Lydia\" }, \"1997\"",
          "{ name: \"Sarah\" }, \"1998\"",
          "{ name: \"Lydia\" }, \"1998\"",
          "{ name: \"Sarah\" }, \"1997\""
    ],
    correctAnswer: 0,
    explanation: "Arguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).\n\nThe variable `birthYear` has a reference to the value `\"1997\"`. The argument `year` also has a reference to the value `\"1997\"`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `\"1998\"`, we are only updating the value of `year`. `birthYear` is still equal to `\"1997\"`.\n\nThe value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `\"Lydia\"`",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-082',
    question: "📝 What is the output?\n\n```javascript\nconst add = () => {\n  const cache = {};\n  return (num) => {\n    if (num in cache) {\n      return `From cache! ${cache[num]}`;\n    } else {\n      const result = num + 10;\n      cache[num] = result;\n      return `Calculated! ${result}`;\n    }\n  };\n};\n\nconst addFunction = add();\nconsole.log(addFunction(10));\nconsole.log(addFunction(10));\nconsole.log(addFunction(5 * 2));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "Calculated! 20 Calculated! 20 Calculated! 20",
          "Calculated! 20 From cache! 20 Calculated! 20",
          "Calculated! 20 From cache! 20 From cache! 20",
          "Calculated! 20 From cache! 20 Error"
    ],
    correctAnswer: 2,
    explanation: "This is **memoization** - caching function results to avoid recalculating! Let's understand this powerful optimization technique.\n\n**Think of memoization like a recipe notebook:**\n- First time making a dish → Calculate ingredients, write result in notebook\n- Next time → \"Oh! I made this before!\" → Read from notebook (faster!)\n\n**Understanding the code structure:**\n```javascript\nconst add = () => {\n  const cache = {};  // Private storage (closure!)\n  return (num) => {\n    if (num in cache) {\n      return `From cache! ${cache[num]}`;  // Return saved result\n    } else {\n      const result = num + 10;  // Calculate\n      cache[num] = result;      // Save for later\n      return `Calculated! ${result}`;\n    }\n  };\n};\n```\n\n**Step-by-step execution:**\n\n**Setup:**\n```javascript\nconst addFunction = add();\n↓\nCreates a closure with:\n- cache = {}  (empty object)\n- Returns the inner function\n```\n\n**Call 1: `addFunction(10)`**\n```javascript\naddFunction(10)\n↓\nCheck: Is 10 in cache? → NO (cache is {})\n↓\nExecute else block:\n  const result = 10 + 10;  // 20\n  cache[10] = 20;  // Store it!\n↓\ncache is now: { 10: 20 }\n↓\nReturn: \"Calculated! 20\"\n```\n\n**Call 2: `addFunction(10)`** (same argument!)\n```javascript\naddFunction(10)\n↓\nCheck: Is 10 in cache? → YES! (cache = { 10: 20 })\n↓\nExecute if block:\n  return `From cache! ${cache[10]}`;  // cache[10] = 20\n↓\nNo calculation needed! ⚡\n↓\nReturn: \"From cache! 20\"\n```\n\n**Call 3: `addFunction(5 * 2)`** (evaluates to 10!)\n```javascript\naddFunction(5 * 2)\n↓\n5 * 2 evaluates to 10\n↓\nCheck: Is 10 in cache? → YES! (cache = { 10: 20 })\n↓\nExecute if block:\n  return `From cache! ${cache[10]}`;  // cache[10] = 20\n↓\nReturn: \"From cache! 20\"\n```\n\n**Visualizing the cache over time:**\n```javascript\n// Initial state\ncache = {}\n\n// After addFunction(10)\ncache = { 10: 20 }\n\n// After addFunction(10) again\ncache = { 10: 20 }  // Unchanged, just read from it\n\n// After addFunction(5 * 2)  [5 * 2 = 10]\ncache = { 10: 20 }  // Still unchanged, 10 was already cached\n```\n\n**Why this works (Closures!):**\n```javascript\nconst add = () => {\n  const cache = {};  // ← This variable persists!\n  \n  return (num) => {\n    // Inner function \"remembers\" cache from outer function\n    // Even after add() has finished executing!\n  };\n};\n\n// Each call to add() creates a NEW cache\nconst addFunction1 = add();  // Has its own cache: {}\nconst addFunction2 = add();  // Has different cache: {}\n\naddFunction1(10);  // Caches in addFunction1's cache\naddFunction2(10);  // Caches in addFunction2's cache (separate!)\n```\n\n**Real-world memoization examples:**\n```javascript\n// 1. Expensive calculation (Fibonacci)\nconst fibonacci = () => {\n  const cache = {};\n  return function fib(n) {\n    if (n in cache) return cache[n];\n    if (n <= 1) return n;\n    \n    const result = fib(n - 1) + fib(n - 2);\n    cache[n] = result;\n    return result;\n  };\n};\n\nconst fib = fibonacci();\nfib(40);  // First call: slow (calculates everything)\nfib(40);  // Second call: instant! (from cache)\n\n// 2. API call memoization\nconst fetchUser = () => {\n  const cache = {};\n  return async (userId) => {\n    if (userId in cache) {\n      console.log('From cache!');\n      return cache[userId];\n    }\n    \n    console.log('Fetching from API...');\n    const user = await fetch(`/api/users/${userId}`).then(r => r.json());\n    cache[userId] = user;\n    return user;\n  };\n};\n\nconst getUser = fetchUser();\nawait getUser(1);  // Fetching from API...\nawait getUser(1);  // From cache! (no API call)\n\n// 3. Complex calculations\nconst expensiveOperation = () => {\n  const cache = {};\n  return (a, b, c) => {\n    const key = `${a},${b},${c}`;  // Multi-argument cache key\n    if (key in cache) return cache[key];\n    \n    // Simulate expensive calculation\n    const result = Math.sqrt(a) * Math.pow(b, 2) + Math.log(c);\n    cache[key] = result;\n    return result;\n  };\n};\n```\n\n**Performance comparison:**\n```javascript\n// Without memoization\nfunction slowFib(n) {\n  if (n <= 1) return n;\n  return slowFib(n - 1) + slowFib(n - 2);\n}\nslowFib(40);  // Takes ~1-2 seconds!\nslowFib(40);  // Takes another ~1-2 seconds!\n\n// With memoization\nconst fastFib = fibonacci();\nfastFib(40);  // Takes ~few milliseconds\nfastFib(40);  // Instant! (< 1ms)\n```\n\n**Common gotcha:**\n```javascript\n// ❌ Objects/arrays as keys need special handling\nconst cache = {};\nconst obj = { id: 1 };\ncache[obj] = 'value';  // Converts obj to string \"[object Object]\"\ncache[{id: 1}];        // Different object, but same string key!\n\n// ✅ Use JSON.stringify for object keys\nconst key = JSON.stringify(obj);  // \"{\\\"id\\\":1}\"\ncache[key] = 'value';\n\n// ✅ Or use Map instead\nconst cache = new Map();\ncache.set(obj, 'value');  // Can use object as key directly\n```\n\n**When to use memoization:**\n- ✅ Expensive calculations called repeatedly with same inputs\n- ✅ Recursive functions (like Fibonacci)\n- ✅ API calls that don't change often\n- ✅ Pure functions (same input → same output)\n- ❌ Functions with side effects\n- ❌ Functions with rarely repeated inputs\n- ❌ When memory usage is a concern (cache grows indefinitely)\n\n**Memory trick:**\nMemoization = **Remember-ization**\n- First time: Calculate and remember\n- Next time: \"I remember this!\" Return saved answer\n- Like a smart student who writes down answers and reuses them later!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-084',
    question: "✅ Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?\n\n```javascript\nfunction getName(name) {\n  const hasName = //\n}\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "!!name",
          "name",
          "new Boolean(name)",
          "name.length"
    ],
    correctAnswer: 0,
    explanation: "With `!!name`, we determine whether the value of `name` is truthy or falsy. If the name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.\n\nBy setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.\n\n`new Boolean(true)` returns an object wrapper, not the boolean value itself.\n\n`name.length` returns the length of the passed argument, not whether it's `true`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-089',
    question: "🗺️ Which method(s) will return the value `'Hello world!'`?\n\n```javascript\nconst myMap = new Map();\nconst myFunc = () => \"greeting\";\n\nmyMap.set(myFunc, \"Hello world!\");\n\n//1\nmyMap.get(\"greeting\");\n//2\nmyMap.get(myFunc);\n//3\nmyMap.get(() => \"greeting\");\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "1",
          "2",
          "2 and 3",
          "All of them"
    ],
    correctAnswer: 1,
    explanation: "When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`.\n\n1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.\n3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interacts by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-091',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia Hallie\";\n\nconsole.log(!typeof name === \"object\");\nconsole.log(!typeof name === \"string\");\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "false true",
          "true false",
          "false false",
          "true true"
    ],
    correctAnswer: 2,
    explanation: "`typeof name` returns `\"string\"`. The string `\"string\"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === \"object\"` and `false === \"string\"` both return`false`.\n\n(If we wanted to check whether the type was (un)equal to a certain type, we should've written `!==` instead of `!typeof`)",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-095',
    question: "🖥️ What's the output?\n\n```javascript\nconst createMember = ({ email, address = {} }) => {\n  const validEmail = /.+\\@.+\\..+/.test(email);\n  if (!validEmail) throw new Error(\"Valid email pls\");\n\n  return {\n    email,\n    address: address ? address : null,\n  };\n};\n\nconst member = createMember({ email: \"my@email.com\" });\nconsole.log(member);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "{ email: \"my@email.com\", address: null }",
          "{ email: \"my@email.com\" }",
          "{ email: \"my@email.com\", address: {} }",
          "{ email: \"my@email.com\", address: undefined }"
    ],
    correctAnswer: 2,
    explanation: "The default value of `address` is an empty object `{}`. When we set the variable `member` equal to the object returned by the `createMember` function, we didn't pass a value for the address, which means that the value of the address is the default empty object `{}`. An empty object is a truthy value, which means that the condition of the `address ? address : null` conditional returns `true`. The value of the address is the empty object `{}`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-101',
    question: "🖥️ What's the output?\n\n```javascript\nconst user = {\n  email: \"e@mail.com\",\n  password: \"12345\",\n};\n\nconst updateUser = ({ email, password }) => {\n  if (email) {\n    Object.assign(user, { email });\n  }\n\n  if (password) {\n    user.password = password;\n  }\n\n  return user;\n};\n\nconst updatedUser = updateUser({ email: \"new@email.com\" });\n\nconsole.log(updatedUser === user);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "false",
          "true",
          "TypeError",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "The `updateUser` function updates the values of the `email` and `password` properties on user, if their values are passed to the function, after which the function returns the `user` object. The returned value of the `updateUser` function is the `user` object, which means that the value of updatedUser is a reference to the same `user` object that `user` points to. `updatedUser === user` equals `true`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-110',
    question: "🖥️ What's the output?\n\n```javascript\nconst getList = ([x, ...y]) => [x, y]\nconst getUser = user => { name: user.name, age: user.age }\n\nconst list = [1, 2, 3, 4]\nconst user = { name: \"Lydia\", age: 21 }\n\nconsole.log(getList(list))\nconsole.log(getUser(user))\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "[1, [2, 3, 4]] and SyntaxError",
          "[1, [2, 3, 4]] and { name: \"Lydia\", age: 21 }",
          "[1, 2, 3, 4] and { name: \"Lydia\", age: 21 }",
          "Error and { name: \"Lydia\", age: 21 }"
    ],
    correctAnswer: 0,
    explanation: "The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:\n\n`[x, ...y] = [1, 2, 3, 4]`\n\nWith the rest parameter `...y`, we put all \"remaining\" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.\n\nThe `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to instantly return an _object_ from an arrow function, you have to write it between parentheses, otherwise everything between the two braces will be interpreted as a block statement. In this case the code between the braces is not a valid JavaScript code, so a `SyntaxError` gets thrown.\n\nThe following function would have returned an object:\n\n`const getUser = user => ({ name: user.name, age: user.age })`",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-120',
    question: "📝 What's the output?\n\n```javascript\nfunction test() {\n  console.log(arguments[0]);\n  console.log(arguments.length);\n}\n\ntest('a', 'b', 'c');\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
          "a and 3",
          "a and 1",
          "undefined and 0",
          "TypeError"
    ],
    correctAnswer: 0,
    explanation: "The 'arguments' object is an array-like object available in all non-arrow functions. It contains all arguments passed to the function. arguments[0] is 'a' and arguments.length is 3.",
    tags: ["functions","arguments","parameters"],
  },

{
    id: 'js-122',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3, 4, 5];\nconst found = arr.find(n => n > 2);\nconst foundIndex = arr.findIndex(n => n > 2);\n\nconsole.log(found, foundIndex);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
          "3 and 2",
          "3 and 3",
          "[3, 4, 5] and 2",
          "true and 2"
    ],
    correctAnswer: 0,
    explanation: "find() returns the first element that satisfies the condition (3). findIndex() returns the index of that element (2). Both stop searching after finding the first match. If no match is found, find() returns undefined and findIndex() returns -1.",
    tags: ["arrays","find","findIndex","search"],
  },

{
    id: 'js-132',
    question: "📝 What's the output?\n\n```javascript\nfunction sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "10",
          "1234",
          "[1, 2, 3, 4]",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "The rest parameter (...numbers) collects all arguments into an array. reduce() then sums all elements: 0+1+2+3+4 = 10. The rest parameter must be the last parameter in a function.",
    tags: ["functions","rest-parameters","reduce"],
  },

{
    id: 'js-162',
    question: "🖥️ What's the output?\n\n```javascript\nconst obj = { 1: \"a\", 2: \"b\", 3: \"c\" };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty(\"1\");\nobj.hasOwnProperty(1);\nset.has(\"1\");\nset.has(1);\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "false true false true",
          "false true true true",
          "true true false true",
          "true true true true"
    ],
    correctAnswer: 2,
    explanation: "All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.\n\nIt doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-163',
    question: "📝 What's the output?\n\n```javascript\nfunction sayHi() {\n  return (() => 0)();\n}\n\nconsole.log(typeof sayHi());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
          "\"object\"",
          "\"number\"",
          "\"function\"",
          "\"undefined\""
    ],
    correctAnswer: 1,
    explanation: "The `sayHi` function returns the returned value of the immediately invoked function expression (IIFE). This function returned `0`, which is type `\"number\"`.\nFYI: `typeof` can return the following list of values: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` and `object`. Note that `typeof null` returns `\"object\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-174',
    question: "📝 What's the output?\n\n```javascript\nconst double = n => n * 2;\nconst square = n => n * n;\nconst compose = (f, g) => x => f(g(x));\n\nconst doubleThenSquare = compose(square, double);\nconsole.log(doubleThenSquare(3));\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'hard',
    options: [
          "36",
          "18",
          "12",
          "9"
    ],
    correctAnswer: 0,
    explanation: "Function composition applies functions from right to left. doubleThenSquare(3) first doubles 3 (= 6), then squares the result (6 * 6 = 36). Compose is a higher-order function that returns a new function.",
    tags: ["functions","composition","higher-order","functional-programming"],
  },

{
    id: 'js-186',
    question: "📝 What's the output?\n\n```javascript\nconst str = '  hello  ';\n\nconsole.log(str.trim());\nconsole.log(str.trimStart());\nconsole.log(str.trimEnd());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'easy',
    options: [
      "'hello' 'hello  ' '  hello'",
      "'hello' 'hello' 'hello'",
      "'  hello  ' '  hello  ' '  hello  '",
      "'hello' '  hello' 'hello  '",
    ],
    correctAnswer: 0,
    explanation: "`trim()` removes whitespace from both ends, returning 'hello'. `trimStart()` (or `trimLeft()`) removes whitespace only from the start, returning 'hello  '. `trimEnd()` (or `trimRight()`) removes whitespace only from the end, returning '  hello'.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-205',
    question: "📝 What's the output?\n\n```javascript\nconst obj = {\n  name: 'Object',\n  getName: function() { return this.name; },\n  getNameArrow: () => this.name\n};\n\nconsole.log(obj.getName());\nconsole.log(obj.getNameArrow());\n```",
    category: 'javascript',
    subcategory: 'functions',
    difficulty: 'medium',
    options: [
      "'Object' 'Object'",
      "'Object' undefined",
      "undefined undefined",
      "'Object' 'Window'",
    ],
    correctAnswer: 1,
    explanation: "Regular functions have their own `this` context. When called as `obj.getName()`, `this` refers to `obj`, so it returns 'Object'. Arrow functions don't have their own `this`; they inherit it from the enclosing scope. `getNameArrow` inherits `this` from the global scope, where `name` is undefined.",
    tags: ['javascript', 'quiz'],
  }
];
