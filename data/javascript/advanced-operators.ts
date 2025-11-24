import { QuizQuestion } from '../../types/quiz';

export const advanced_operatorsQuizzes: QuizQuestion[] = [
{
    id: 'js-010',
    question: "📝 What's the output?\n\n```javascript\nlet num = 10;\n\nconst increaseNumber = () => num++;\nconst increasePassedNumber = (number) => number++;\n\nconst num1 = increaseNumber();\nconst num2 = increasePassedNumber(num1);\n\nconsole.log(num1);\nconsole.log(num2);\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
          "10, 10",
          "10, 11",
          "11, 11",
          "11, 12"
    ],
    correctAnswer: 0,
    explanation: "Think of `num++` like taking a photo of a number, THEN increasing it. The photo shows the old value.\n\n**Step 1 - num1:**\n- `num` is 10\n- `num++` takes a 'photo' (returns 10), THEN increases num to 11\n- So `num1 = 10` (the photo), even though `num` is now 11\n\n**Step 2 - num2:**\nHere's the trick: JavaScript gives functions a COPY of numbers, like photocopying a document.\n- We pass `num1` (which is 10) to the function\n- The function gets its own copy called `number = 10`\n- `number++` returns 10, then increases the COPY to 11\n- But we threw away that copy! So `num2 = 10`\n\n**Key insight:** Post-increment (`++`) always returns first, increments second. Plus, functions can't change the original number - they only get a photocopy to work with.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-055',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  firstName: \"Lydia\",\n  lastName: \"Hallie\",\n  pet: {\n    name: \"Mara\",\n    breed: \"Dutch Tulip Hound\",\n  },\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n};\n\nconsole.log(person.pet?.name);\nconsole.log(person.pet?.family?.name);\nconsole.log(person.getFullName?.());\nconsole.log(member.getLastName?.());\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
          "undefined undefined undefined undefined",
          "Mara undefined Lydia Hallie ReferenceError",
          "Mara null Lydia Hallie null",
          "null ReferenceError null ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "Think of `?.` as a safety net that says 'only continue if this exists, otherwise give me undefined'.\n\n**Without ?. (the old way):**\n```javascript\n// This crashes if pet doesn't exist!\nperson.pet.name  // TypeError: Cannot read property 'name' of undefined\n```\n\n**With ?. (the safe way):**\nLet's trace through each line:\n\n1️⃣ `person.pet?.name` → `'Mara'`\n   - person exists ✓\n   - person.pet exists ✓\n   - So grab pet.name safely → 'Mara'\n\n2️⃣ `person.pet?.family?.name` → `undefined`\n   - person.pet exists ✓\n   - person.pet.family does NOT exist ✗\n   - Safety net catches it → returns undefined (no crash!)\n\n3️⃣ `person.getFullName?.()` → `'Lydia Hallie'`\n   - getFullName exists ✓\n   - It's a function ✓\n   - Call it safely → 'Lydia Hallie'\n\n4️⃣ `member.getLastName?.()` → `ReferenceError`\n   - **GOTCHA:** The variable 'member' doesn't even exist!\n   - `?.` only protects against null/undefined PROPERTIES\n   - It can't protect against variables that were never declared\n\n**Real-world use:** API responses often have missing data. `?.` prevents your app from crashing when data is incomplete.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-178',
    question: "📝 Compare ?? (nullish coalescing) vs || (logical OR):\n\n```javascript\nconst a = null ?? 'default';\nconst b = 0 ?? 'default';\nconst c = '' ?? 'default';\nconst d = false ?? 'default';\n\nconst e = null || 'default';\nconst f = 0 || 'default';\nconst g = '' || 'default';\nconst h = false || 'default';\n\nconsole.log(a, b, c, d);\nconsole.log(e, f, g, h);\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
      "'default' 0 '' false | 'default' 'default' 'default' 'default'",
      "'default' 'default' 'default' 'default' | 'default' 0 '' false",
      "null 0 '' false | 'default' 'default' 'default' 'default'",
      "'default' 0 '' false | null 0 '' false",
    ],
    correctAnswer: 0,
    explanation: "Imagine you're setting up user preferences with default values. Here's the key difference:\n\n**?? (nullish coalescing) = 'Use default ONLY if null/undefined'**\n- Treats ONLY `null` and `undefined` as 'missing'\n- Keeps valid values like `0`, `''`, `false`\n- Think: 'Is there NO value at all?'\n\n**|| (logical OR) = 'Use default if ANY falsy value'**\n- Treats `0`, `''`, `false`, `null`, `undefined`, `NaN` as 'missing'\n- Replaces even valid falsy values\n- Think: 'Is this value falsy?'\n\n**Breaking it down:**\n```javascript\n// ?? only replaces null/undefined\nnull ?? 'default'   → 'default' ✓ (null = no value)\n0 ?? 'default'      → 0         ✓ (0 is a valid number!)\n'' ?? 'default'     → ''        ✓ (empty string is valid!)\nfalse ?? 'default'  → false     ✓ (false is a valid boolean!)\n\n// || replaces ALL falsy values\nnull || 'default'   → 'default' (null is falsy)\n0 || 'default'      → 'default' (0 is falsy - OOPS!)\n'' || 'default'     → 'default' ('' is falsy - OOPS!)\nfalse || 'default'  → 'default' (false is falsy - OOPS!)\n```\n\n**Real-world example:**\n```javascript\n// User wants timeout of 0ms (disable timeout)\nconst timeout = userTimeout ?? 5000;  // ✓ Keeps 0\nconst timeout = userTimeout || 5000;  // ✗ Replaces 0 with 5000 (bug!)\n\n// User wants empty string as placeholder\nconst placeholder = userText ?? 'Enter text';  // ✓ Keeps ''\nconst placeholder = userText || 'Enter text';  // ✗ Replaces '' (bug!)\n```\n\n**Rule of thumb:** Use `??` when you want to preserve meaningful falsy values like `0`, `''`, or `false`.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-191',
    question: "🔥 Combine your knowledge! What's the output?\n\n```javascript\nconst config = {\n  timeout: 0,\n  retries: null,\n  cache: {\n    enabled: false\n  }\n};\n\nconst a = config.timeout ?? 3000;\nconst b = config.timeout || 3000;\nconst c = config.retries ?? 5;\nconst d = config.cache?.enabled ?? true;\nconst e = config.cache?.ttl ?? 600;\nconst f = config.logging?.level ?? 'info';\n\nconsole.log(a, b, c, d, e, f);\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'hard',
    options: [
      "0 3000 5 false 600 'info'",
      "3000 3000 5 true 600 'info'",
      "0 0 null false undefined 'info'",
      "0 3000 null false 600 'info'",
    ],
    correctAnswer: 0,
    explanation: "This combines `?.` (optional chaining) and `??` (nullish coalescing) - two operators that work great together!\n\n**The pattern: `object?.property ?? defaultValue`**\nThis safely checks if a property exists, and provides a fallback if it's null/undefined.\n\nLet's trace through each line:\n\n**a: `config.timeout ?? 3000` → `0`**\n- `timeout` exists and equals `0`\n- `0` is NOT null/undefined (it's a valid number!)\n- `??` keeps the `0` ✓\n\n**b: `config.timeout || 3000` → `3000`**\n- `timeout` equals `0`\n- `0` is falsy, so `||` uses the fallback\n- Result: `3000` (this is why `||` can cause bugs!) ✗\n\n**c: `config.retries ?? 5` → `5`**\n- `retries` exists but equals `null`\n- `null` IS nullish\n- `??` uses the fallback: `5` ✓\n\n**d: `config.cache?.enabled ?? true` → `false`**\n- `cache` exists ✓\n- `cache.enabled` exists and equals `false`\n- `false` is NOT null/undefined\n- `??` keeps the `false` ✓\n\n**e: `config.cache?.ttl ?? 600` → `600`**\n- `cache` exists ✓\n- `cache.ttl` does NOT exist → `undefined`\n- `undefined` IS nullish\n- `??` uses the fallback: `600` ✓\n\n**f: `config.logging?.level ?? 'info'` → `'info'`**\n- `logging` does NOT exist\n- `?.` safely returns `undefined` (no crash!)\n- `undefined` IS nullish\n- `??` uses the fallback: `'info'` ✓\n\n**Real-world lesson:**\nWhen loading config from APIs/files, combine these operators:\n```javascript\nconst userConfig = fetchedConfig?.settings ?? DEFAULT_SETTINGS;\nconst port = userConfig?.server?.port ?? 8080;\n```\n\nThis pattern safely handles:\n- Missing objects (`?.` prevents crashes)\n- Missing properties (`??` provides defaults)\n- Valid falsy values like `0`, `false`, `''` (preserved by `??`)",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-192',
    question: "📝 What's the output?\n\n```javascript\nconst a = 'hello' || 'world';\nconst b = 0 || 5 || 10;\nconst c = null || undefined || 0;\n\nconst d = 'hello' && 0 && 'world';\nconst e = 1 && 2 && 3;\nconst f = true && false && true;\n\nconsole.log(a, b, c);\nconsole.log(d, e, f);\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
      "'hello' 5 0 | 0 3 false",
      "'world' 10 0 | 'world' 3 true",
      "'hello' 5 null | 'hello' 1 true",
      "'hello' 5 undefined | 0 2 false",
    ],
    correctAnswer: 0,
    explanation: "Think of `||` and `&&` as operators that **short-circuit** - they stop evaluating as soon as they know the answer.\n\n**|| (Logical OR) = 'Find the first truthy OR return the last value'**\n\nImagine asking friends if they want pizza until someone says yes:\n\n```javascript\n'hello' || 'world'  → 'hello'  (found truthy! stop here)\n0 || 5 || 10        → 5        (0 is falsy, 5 is truthy! stop)\nnull || undefined || 0 → 0     (all falsy, return LAST value)\n```\n\n**Why does the last one return 0?**\nBecause `||` checks left to right:\n- `null`? Nope, falsy → keep going\n- `undefined`? Nope, falsy → keep going  \n- `0`? Falsy too, but it's the last one → return it\n\n**&& (Logical AND) = 'Find the first falsy OR return the last value'**\n\nImagine checking requirements until one fails:\n\n```javascript\n'hello' && 0 && 'world' → 0      (0 is falsy! stop here)\n1 && 2 && 3             → 3      (all truthy, return LAST value)\ntrue && false && true   → false  (false is falsy! stop)\n```\n\n**The Pattern:**\n- `||` returns **first truthy** OR **last value** (if all falsy)\n- `&&` returns **first falsy** OR **last value** (if all truthy)\n\n**Real-world examples:**\n\n```javascript\n// Default values with ||\nconst username = inputName || 'Guest';  // Use 'Guest' if input is falsy\nconst port = process.env.PORT || 3000;  // Use 3000 if PORT not set\n\n// Conditional execution with &&\nuser && user.save();  // Only call save() if user exists\nisLoggedIn && showDashboard();  // Only show if logged in\n\n// Chaining with &&\nconst city = user && user.address && user.address.city;\n// Stops at first falsy (safer than user.address.city which crashes)\n```\n\n**Common gotcha:**\n```javascript\nconst count = 0;\nconst display = count || 'No items';  // Returns 'No items' (0 is falsy!)\n// Better: count ?? 'No items'  → Returns 0 (preserves valid 0)\n```\n\n**Memory trick:**\n- OR (`||`): Looking for YES → stops at first truthy\n- AND (`&&`): Looking for NO → stops at first falsy",
    tags: ['javascript', 'quiz'],
  },
];
