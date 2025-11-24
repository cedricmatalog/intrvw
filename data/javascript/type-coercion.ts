import { QuizQuestion } from '../../types/quiz';

export const type_coercionQuizzes: QuizQuestion[] = [
{
    id: 'js-005',
    question: "🖥️ What's the output?\n\n```javascript\nconsole.log(+true);\nconsole.log(!\"Lydia\");\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "1 and false",
          "false and NaN",
          "false and false",
          "1 and true"
    ],
    correctAnswer: 0,
    explanation: "These operators **force type conversion** - they convert values to other types without you asking explicitly.\n\n**Think of operators as machines:**\n- The `+` machine only accepts numbers → converts input to number\n- The `!` machine only outputs booleans → converts input to boolean first, then flips it\n\n**Line 1: `+true`** → **1**\n```javascript\n+true\n↓\n\"The + operator needs a NUMBER\"\n↓\nConvert true to number → 1\n↓\nResult: 1\n```\n\n**Type conversion table for numbers:**\n```javascript\n+true      // 1  (true converts to 1)\n+false     // 0  (false converts to 0)\n+\"5\"       // 5  (string number converts to actual number)\n+\"hello\"   // NaN (can't convert to number)\n+null      // 0  (null converts to 0)\n+undefined // NaN (undefined converts to NaN)\n+[]        // 0  (empty array converts to 0)\n+[5]       // 5  (single-item array converts to that number)\n+[1,2]     // NaN (multi-item array can't convert)\n```\n\n**Line 2: `!\"Lydia\"`** → **false**\n```javascript\n!\"Lydia\"\n↓\nStep 1: Is \"Lydia\" truthy? YES (non-empty strings are truthy)\n↓\nStep 2: Flip it with ! → false\n↓\nResult: false\n```\n\n**The `!` operator in 2 steps:**\n1. Convert to boolean (truthy/falsy check)\n2. Flip it (true → false, false → true)\n\n**Truthy vs Falsy values:**\n```javascript\n// Only 6 falsy values in JavaScript:\n!false      // true  (false is falsy)\n!0          // true  (0 is falsy)\n!\"\"         // true  (empty string is falsy)\n!null       // true  (null is falsy)\n!undefined  // true  (undefined is falsy)\n!NaN        // true  (NaN is falsy)\n\n// Everything else is truthy:\n!\"Lydia\"    // false (non-empty string is truthy)\n!\"0\"        // false (string \"0\" is truthy!)\n![]         // false (empty array is truthy!)\n!{}         // false (empty object is truthy!)\n!-1         // false (negative numbers are truthy!)\n```\n\n**Real-world use:**\n```javascript\n// Convert to number:\nconst str = \"42\";\nconst num = +str;  // 42 (number)\n\n// Check if value exists:\nif (!username) {\n  console.log(\"Please enter username\");\n}\n\n// Double negation (!!) to get boolean:\nconst hasValue = !!username;  // true if username exists\n```\n\n**Common gotcha:**\n```javascript\n+\"\"    // 0  (empty string converts to 0, not NaN!)\n+\" \"   // 0  (whitespace also converts to 0)\n+\"0\"   // 0  (string zero converts to number zero)\n```\n\n**Memory trick:**\n- `+` = \"Make it a number!\"\n- `!` = \"Flip the truth!\" (converts to boolean first, then flips)",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-011',
    question: "📝 What's the output?\n\n```javascript\nfor (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "1 2",
          "1 2 3",
          "1 2 4",
          "1 3 4"
    ],
    correctAnswer: 2,
    explanation: "The `continue` statement skips an iteration if a certain condition returns `true`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-016',
    question: "🖥️ What's the value of output?\n\n```javascript\n// 🎉✨ This is my 100th question! ✨🎉\n\nconst output = `${[] && \"Im\"}possible!\nYou should${\"\" && `n't`} see a therapist after so much JavaScript lol`;\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "possible! You should see a therapist after so much JavaScript lol",
          "Impossible! You should see a therapist after so much JavaScript lol",
          "possible! You shouldn't see a therapist after so much JavaScript lol",
          "Impossible! You shouldn't see a therapist after so much JavaScript lol"
    ],
    correctAnswer: 1,
    explanation: "`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `\"Im'` gets returned.\n\n`\"\"` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-017',
    question: "🖥️ What's the value of output?\n\n```javascript\nconst one = false || {} || null;\nconst two = null || false || \"\";\nconst three = [] || 0 || true;\n\nconsole.log(one, two, three);\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "false null []",
          "null \"\" true",
          "{} \"\" []",
          "null null true"
    ],
    correctAnswer: 2,
    explanation: "With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.\n\n`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.\n\n`(null || false || \"\")`: all operands are falsy values. This means that the last operand, `\"\"` gets returned. `two` is equal to `\"\"`.\n\n`([] || 0 || \"\")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-068',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia Hallie\";\nconst age = 21;\n\nconsole.log(Number.isNaN(name));\nconsole.log(Number.isNaN(age));\n\nconsole.log(isNaN(name));\nconsole.log(isNaN(age));\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "true false true false",
          "true false false false",
          "false false true false",
          "false true false true"
    ],
    correctAnswer: 2,
    explanation: "These two functions sound similar but work VERY differently. One does **type coercion**, the other doesn't!\n\n**Think of them as bouncers at a club:**\n- `Number.isNaN()` = Strict bouncer: \"Are you EXACTLY NaN? Show me your ID!\"\n- `isNaN()` = Loose bouncer: \"Let me try converting you to a number first, then check if you're NaN\"\n\n**Understanding NaN:**\n`NaN` stands for \"Not a Number\" - it's a special numeric value that represents an invalid number.\n```javascript\nconst invalid = 0 / 0;        // NaN\nconst failed = parseInt(\"hi\"); // NaN\nconst weird = Math.sqrt(-1);   // NaN (in real numbers)\n```\n\n**Line 1: `Number.isNaN(name)`** → **false**\n```javascript\nname = \"Lydia Hallie\"  (a string)\n\nNumber.isNaN(\"Lydia Hallie\")\n↓\n\"Is this value EXACTLY NaN?\"\n↓\nNo! It's a string, not NaN → false\n```\n\n**Line 2: `Number.isNaN(age)`** → **false**\n```javascript\nage = 21  (a number)\n\nNumber.isNaN(21)\n↓\n\"Is this value EXACTLY NaN?\"\n↓\nNo! It's 21, not NaN → false\n```\n\n**Line 3: `isNaN(name)`** → **true**\n```javascript\nname = \"Lydia Hallie\"  (a string)\n\nisNaN(\"Lydia Hallie\")\n↓\n\"Let me try converting to number first...\"\n↓\nNumber(\"Lydia Hallie\") → NaN\n↓\n\"Now, is NaN equal to NaN?\" → YES! → true\n```\n\n**Line 4: `isNaN(age)`** → **false**\n```javascript\nage = 21  (a number)\n\nisNaN(21)\n↓\n\"Let me try converting to number first...\"\n↓\nNumber(21) → 21  (already a number)\n↓\n\"Is 21 equal to NaN?\" → NO! → false\n```\n\n**The key difference:**\n```javascript\n// Number.isNaN() - NO type coercion (strict)\nNumber.isNaN(NaN)       // true  ✓ (exactly NaN)\nNumber.isNaN(\"hello\")   // false ✗ (it's a string, not NaN)\nNumber.isNaN(undefined) // false ✗ (it's undefined, not NaN)\nNumber.isNaN(\"NaN\")     // false ✗ (it's a string \"NaN\", not actual NaN)\n\n// isNaN() - DOES type coercion (converts first)\nisNaN(NaN)       // true  ✓ (NaN → NaN)\nisNaN(\"hello\")   // true  ✓ (\"hello\" → NaN)\nisNaN(undefined) // true  ✓ (undefined → NaN)\nisNaN(\"NaN\")     // true  ✓ (\"NaN\" → NaN)\nisNaN(\"123\")     // false ✗ (\"123\" → 123, which is not NaN)\nisNaN(true)      // false ✗ (true → 1, which is not NaN)\n```\n\n**Real-world gotcha:**\n```javascript\n// ❌ Old way (buggy):\nif (isNaN(userInput)) {\n  // This triggers for strings like \"hello\" but also empty strings!\n}\n\n// ✅ Modern way (correct):\nif (Number.isNaN(Number(userInput))) {\n  // Only triggers if conversion results in NaN\n}\n\n// Even better:\nconst num = Number(userInput);\nif (Number.isNaN(num)) {\n  // Handle invalid number\n}\n```\n\n**Checking if something is NaN:**\n```javascript\nconst value = NaN;\n\n// ❌ This doesn't work!\nvalue === NaN  // false (NaN is never equal to itself!)\n\n// ✅ These work:\nNumber.isNaN(value)  // true\nisNaN(value)         // true\n```\n\n**When to use which:**\n- Use `Number.isNaN()` when you want to check if a value **IS EXACTLY** NaN (no conversion)\n- Use `isNaN()` when you want to check if a value **BECOMES** NaN when converted to number\n- In modern code, prefer `Number.isNaN()` for clarity and predictability!\n\n**Memory trick:**\n- `Number.isNaN()` = \"Is it NaN RIGHT NOW?\" (strict, no conversion)\n- `isNaN()` = \"Is it NaN AFTER converting?\" (loose, converts first)",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-073',
    question: "📝 What's the output?\n\n```javascript\nfunction checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log(\"You are an adult!\");\n  } else if (data == { age: 18 }) {\n    console.log(\"You are still an adult.\");\n  } else {\n    console.log(`Hmm.. You don't have an age I guess`);\n  }\n}\n\ncheckAge({ age: 18 });\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "You are an adult!",
          "You are still an adult.",
          "Hmm.. You don't have an age I guess",
          "TypeError"
    ],
    correctAnswer: 2,
    explanation: "When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.\n\nThe two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.\n\nThis is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-086',
    question: "📝 What's its value?\n\n```javascript\nfunction compareMembers(person1, person2 = person) {\n  if (person1 !== person2) {\n    console.log(\"Not the same!\");\n  } else {\n    console.log(\"They are the same!\");\n  }\n}\n\nconst person = { name: \"Lydia\" };\n\ncompareMembers(person);\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "Not the same!",
          "They are the same!",
          "ReferenceError",
          "SyntaxError"
    ],
    correctAnswer: 1,
    explanation: "Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references.\n\nWe set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.\n\nThis means that both values have a reference to the same spot in memory, thus they are equal.\n\nThe code block in the `else` statement gets run, and `They are the same!` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-125',
    question: "🖥️ What's the output?\n\n```javascript\n[1, 2, 3].map((num) => {\n  if (typeof num === \"number\") return;\n  return num * 2;\n});\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "[]",
          "[null, null, null]",
          "[undefined, undefined, undefined]",
          "[ 3 x empty ]"
    ],
    correctAnswer: 2,
    explanation: "When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === \"number\"` returns `true`. The map function creates a new array and inserts the values returned from the function.\n\nHowever, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-136',
    question: "📝 What's the output?\n\n```javascript\nlet a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'medium',
    options: [
          "true false true",
          "false false true",
          "true false false",
          "false true true"
    ],
    correctAnswer: 2,
    explanation: "This is about **primitive vs object wrapper** - one of JavaScript's sneaky gotchas!\n\n**Think of it like money:**\n- Primitive: A $3 bill in your pocket (lightweight, simple)\n- Object wrapper: $3 in a fancy wallet with ID, credit cards, photos (heavyweight, complex)\n\nBoth represent \"3\", but one is an object!\n\n**What's happening:**\n```javascript\nlet a = 3;              // Primitive number\nlet b = new Number(3);  // Object wrapper (contains a number)\nlet c = 3;              // Primitive number\n\ntypeof a  // \"number\"\ntypeof b  // \"object\"  ← Surprise!\ntypeof c  // \"number\"\n```\n\n**Line 1: `a == b`** → **true**\n```javascript\n3 == new Number(3)\n↓\n\"The == operator tries to convert both sides to the same type\"\n↓\nConvert object to primitive:\nnew Number(3) → 3\n↓\n3 == 3 → true ✓\n```\n\n**The `==` (loose equality) process:**\n1. Are they the same type? No (number vs object)\n2. Try to convert them to the same type\n3. Object converts to primitive: calls `.valueOf()` → 3\n4. Compare: 3 == 3 → true\n\n**Line 2: `a === b`** → **false**\n```javascript\n3 === new Number(3)\n↓\n\"The === operator checks type AND value without conversion\"\n↓\nType check:\n- a is \"number\"\n- b is \"object\"\n↓\nDifferent types! → false ✗\n```\n\n**The `===` (strict equality) process:**\n1. Are they the same type? No (number vs object)\n2. Stop immediately → false (no conversion happens!)\n\n**Line 3: `b === c`** → **false**\n```javascript\nnew Number(3) === 3\n↓\nType check:\n- b is \"object\"\n- c is \"number\"\n↓\nDifferent types! → false ✗\n```\n\n**Visual representation:**\n```javascript\n// Primitive (stored directly)\na: 3\nc: 3\n\n// Object wrapper (stored in heap memory)\nb: {\n  [[PrimitiveValue]]: 3,\n  constructor: Number,\n  toFixed: function,\n  toString: function,\n  // ... many more methods\n}\n```\n\n**More examples:**\n```javascript\n// Strings:\nconst str1 = \"hello\";              // Primitive\nconst str2 = new String(\"hello\");  // Object\n\nstr1 == str2   // true  (loose equality converts)\nstr1 === str2  // false (different types)\n\n// Booleans:\nconst bool1 = true;              // Primitive\nconst bool2 = new Boolean(true); // Object\n\nbool1 == bool2   // true  (loose equality converts)\nbool1 === bool2  // false (different types)\n```\n\n**Object wrappers are weird:**\n```javascript\nconst a = new Number(3);\nconst b = new Number(3);\n\na == b   // false! (different objects in memory)\na === b  // false! (different objects in memory)\n\n// Even with same value, different object instances!\n```\n\n**Real-world gotcha:**\n```javascript\n// ❌ Never do this:\nconst num = new Number(42);\nif (num) {\n  // Always executes! Objects are always truthy!\n}\n\n// Even with 0:\nconst zero = new Number(0);\nif (zero) {\n  console.log(\"Executes!\");  // Objects are truthy, even wrapping 0\n}\n\n// ✅ Do this instead:\nconst num = 42;  // Just use primitives!\n```\n\n**When to use object wrappers:**\nBasically never! JavaScript automatically wraps primitives when you call methods:\n```javascript\nconst str = \"hello\";  // Primitive\nstr.toUpperCase();     // JS temporarily wraps it, calls method, unwraps\n// Behind the scenes: new String(\"hello\").toUpperCase()\n\n// So you get the benefits without the downsides!\n```\n\n**Why they exist:**\nObject wrappers exist for compatibility and to allow methods on primitives:\n```javascript\n(3).toFixed(2)      // \"3.00\" - JS wraps 3, calls toFixed(), unwraps\n\"hi\".toUpperCase()  // \"HI\"  - JS wraps \"hi\", calls method, unwraps\ntrue.toString()     // \"true\" - JS wraps true, calls method, unwraps\n```\n\n**Memory tricks:**\n- `==` asks \"Same value?\" (converts types if needed)\n- `===` asks \"Same value AND same type?\" (no conversion)\n- `new Number(3)` creates an object wrapper (heavy, avoid it!)\n- `3` is a primitive (light, use this!)\n\n**Best practice:**\nNever use `new Number()`, `new String()`, or `new Boolean()` - just use primitives directly!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-193',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(1 + \"2\" + \"2\");\nconsole.log(1 + +\"2\" + \"2\");\nconsole.log(1 + -\"1\" + \"2\");\nconsole.log(+\"1\" + \"1\" + \"2\");\nconsole.log(\"A\" - \"B\" + \"2\");\nconsole.log(\"A\" - \"B\" + 2);\n```",
    category: 'javascript',
    subcategory: 'type-coercion',
    difficulty: 'hard',
    options: [
      '"122" "32" "02" "112" "NaN2" NaN2',
      '"122" "32" "02" "112" "NaN2" NaN',
      '"32" "32" "02" "22" "NaN2" NaN',
      '"122" "122" "22" "112" "NaN2" NaN',
    ],
    correctAnswer: 0,
    explanation: "The `+` operator is JavaScript's **most confusing operator** because it does TWO different things:\n1. Addition (with numbers)\n2. Concatenation (with strings)\n\n**The rule: If EITHER side is a string, concatenate! Otherwise, add numbers.**\n\nThink of `+` like a chameleon that changes behavior based on what it sees.\n\n**Line 1: `1 + \"2\" + \"2\"`** → **\"122\"**\n```javascript\n1 + \"2\" + \"2\"\n↓ Step 1: 1 + \"2\"\nString detected! Concatenate: \"1\" + \"2\" = \"12\"\n↓ Step 2: \"12\" + \"2\"\nString detected! Concatenate: \"12\" + \"2\" = \"122\"\n↓\nResult: \"122\"\n```\n\n**Line 2: `1 + +\"2\" + \"2\"`** → **\"32\"**\n```javascript\n1 + +\"2\" + \"2\"\n    ↑\n   Unary plus converts \"2\" to 2\n↓\n1 + 2 + \"2\"\n↓ Step 1: 1 + 2\nBoth numbers! Add: 1 + 2 = 3\n↓ Step 2: 3 + \"2\"\nString detected! Concatenate: \"3\" + \"2\" = \"32\"\n↓\nResult: \"32\"\n```\n\n**Line 3: `1 + -\"1\" + \"2\"`** → **\"02\"**\n```javascript\n1 + -\"1\" + \"2\"\n    ↑\n   Unary minus converts \"1\" to -1\n↓\n1 + (-1) + \"2\"\n↓ Step 1: 1 + (-1)\nBoth numbers! Add: 1 + (-1) = 0\n↓ Step 2: 0 + \"2\"\nString detected! Concatenate: \"0\" + \"2\" = \"02\"\n↓\nResult: \"02\"\n```\n\n**Line 4: `+\"1\" + \"1\" + \"2\"`** → **\"112\"**\n```javascript\n+\"1\" + \"1\" + \"2\"\n ↑\nUnary plus converts \"1\" to 1\n↓\n1 + \"1\" + \"2\"\n↓ Step 1: 1 + \"1\"\nString detected! Concatenate: \"1\" + \"1\" = \"11\"\n↓ Step 2: \"11\" + \"2\"\nString detected! Concatenate: \"11\" + \"2\" = \"112\"\n↓\nResult: \"112\"\n```\n\n**Line 5: `\"A\" - \"B\" + \"2\"`** → **\"NaN2\"**\n```javascript\n\"A\" - \"B\" + \"2\"\n↓\nKey insight: The - operator ONLY does math (no concatenation)\n↓ Step 1: \"A\" - \"B\"\nConvert to numbers: \"A\" → NaN, \"B\" → NaN\nNaN - NaN = NaN\n↓ Step 2: NaN + \"2\"\nString detected! Concatenate: \"NaN\" + \"2\" = \"NaN2\"\n↓\nResult: \"NaN2\" (string!)\n```\n\n**Line 6: `\"A\" - \"B\" + 2`** → **NaN**\n```javascript\n\"A\" - \"B\" + 2\n↓ Step 1: \"A\" - \"B\"\nConvert to numbers: \"A\" → NaN, \"B\" → NaN\nNaN - NaN = NaN\n↓ Step 2: NaN + 2\nBoth are numbers (NaN is type \"number\"!)\nNaN + 2 = NaN\n↓\nResult: NaN (number type!)\n```\n\n**The key difference between operators:**\n```javascript\n// + does TWO things:\n1 + 2        // 3   (addition)\n\"1\" + \"2\"    // \"12\" (concatenation)\n1 + \"2\"      // \"12\" (concatenation wins!)\n\n// -, *, /, % ONLY do math:\n\"5\" - \"2\"    // 3   (converts to numbers)\n\"5\" * \"2\"    // 10  (converts to numbers)\n\"10\" / \"2\"   // 5   (converts to numbers)\n\"A\" - \"B\"    // NaN (can't convert to numbers)\n```\n\n**More wild examples:**\n```javascript\n[] + []        // \"\" (empty string)\n[] + {}        // \"[object Object]\"\n{} + []        // 0 (in some contexts)\n{} + {}        // \"[object Object][object Object]\"\n\ntrue + false   // 1 (true=1, false=0)\ntrue + true    // 2\n\n\"5\" + 3        // \"53\" (concatenate)\n\"5\" - 3        // 2   (math)\n\n3 + 4 + \"5\"    // \"75\" (3+4=7, then \"7\"+\"5\")\n\"5\" + 3 + 4    // \"534\" (\"5\"+\"3\"=\"53\", then \"53\"+\"4\")\n```\n\n**Real-world gotcha:**\n```javascript\n// Getting values from HTML inputs (always strings!):\nconst input1 = \"5\";   // From <input>\nconst input2 = \"3\";   // From <input>\n\n// ❌ Wrong:\nconst sum = input1 + input2;  // \"53\" (concatenation!)\n\n// ✅ Correct:\nconst sum = Number(input1) + Number(input2);  // 8 (addition)\nconst sum = +input1 + +input2;  // 8 (shorter, but less clear)\n```\n\n**Decision tree for `+` operator:**\n```\nIs one side a string?\n├─ YES → Concatenate (convert other side to string)\n└─ NO  → Add (convert both to numbers)\n```\n\n**Memory tricks:**\n- `+` with string? **Glue things together** (concatenate)\n- `+` with only numbers? **Calculate** (add)\n- `-`, `*`, `/` always try to do **math** (convert to numbers)\n- Can't convert to number? Get **NaN**\n- `NaN` + string = **\"NaN\"** (string)\n- `NaN` + number = **NaN** (number)\n\n**Best practice:**\nExplicitly convert types to avoid surprises:\n```javascript\n// ✅ Clear intent:\nconst num = Number(str);\nconst str = String(num);\nconst str = `${num}`;  // Template literal\n```",
    tags: ['javascript', 'quiz'],
  }
];
