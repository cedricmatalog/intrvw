import { QuizQuestion } from '../../types/quiz';

export const objectsQuizzes: QuizQuestion[] = [
{
    id: 'js-056',
    question: "📝 What's the output?\n\n```javascript\nconst config = {\n  languages: [],\n  set language(lang) {\n    return this.languages.push(lang);\n  },\n};\n\nconsole.log(config.language);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          'function language(lang) { this.languages.push(lang }',
          '0',
          '[]',
          'undefined'
    ],
    correctAnswer: 3,
    explanation: "**Getters return values, setters don't** - they just modify properties!\n\n**Think of a setter like a mailbox slot** - you push mail in (modify), but pulling on it doesn't give you anything back!\n\n**Code breakdown:**\n```javascript\nset language(lang) {  // Setter function\n  return this.languages.push(lang);\n  // ⚠️ This return is ignored!\n}\n\nconsole.log(config.language);\n//          ^^^^^^^^^^^^^^\n//          Reading a setter → undefined\n```\n\n**Why undefined?**\n- Setters are for **writing** (setting values)\n- When you **read** a setter, JavaScript returns `undefined`\n- The `return` inside a setter is ignored\n\n**Compare:**\n```javascript\n// Getter - for reading ✅\nget language() {\n  return this.languages[0];\n}\nconsole.log(config.language); // Returns value\n\n// Setter - for writing ✅\nset language(lang) {\n  this.languages.push(lang);\n}\nconfig.language = 'ES'; // Sets value\nconsole.log(config.language); // undefined\n```\n\n**Memory trick:** SET = write only, GET = read only!",
    tags: ['javascript', 'quiz', 'getters-setters', 'objects'],
  },

{
    id: 'js-090',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n};\n\nconst changeAge = (x = { ...person }) => (x.age += 1);\nconst changeAgeAndName = (x = { ...person }) => {\n  x.age += 1;\n  x.name = \"Sarah\";\n};\n\nchangeAge(person);\nchangeAgeAndName();\n\nconsole.log(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          '{name: "Sarah", age: 22}',
          '{name: "Sarah", age: 23}',
          '{name: "Lydia", age: 22}',
          '{name: "Lydia", age: 23}'
    ],
    correctAnswer: 2,
    explanation: "**Default parameters with spread create NEW objects** - but only when no argument is passed!\n\n**Think of default parameters like backup plans** - you only use them when nothing is provided!\n\n**Step-by-step execution:**\n```javascript\n// 1. changeAge(person) - argument provided ✅\nchangeAge(person);\n//        ^^^^^^ - Uses actual person object\nx.age += 1;  // person.age: 21 → 22\nperson = { name: \"Lydia\", age: 22 }\n\n// 2. changeAgeAndName() - NO argument ⚠️\nchangeAgeAndName();\n//               ^^ - No argument!\n// Default kicks in: x = { ...person }\n// Creates NEW object: { name: \"Lydia\", age: 22 }\nx.age += 1;        // NEW object.age: 22 → 23\nx.name = \"Sarah\";  // NEW object.name: \"Sarah\"\n// Original person unchanged!\n\nperson = { name: \"Lydia\", age: 22 } ✅\n```\n\n**Visual:**\n```javascript\nchangeAge(person)   → Modifies original ✅\nchangeAge()         → Modifies copy ❌\n```\n\n**Memory trick:** No argument = default kicks in = new object = original untouched!",
    tags: ['javascript', 'quiz', 'default-parameters', 'spread-operator'],
  },

{
    id: 'js-097',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = { name: \"Lydia\" };\n\nObject.defineProperty(person, \"age\", { value: 21 });\n\nconsole.log(person);\nconsole.log(Object.keys(person));\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          '{ name: "Lydia", age: 21 }, ["name", "age"]',
          '{ name: "Lydia", age: 21 }, ["name"]',
          '{ name: "Lydia"}, ["name", "age"]',
          '{ name: "Lydia"}, ["age"]'
    ],
    correctAnswer: 1,
    explanation: "**defineProperty creates non-enumerable properties by default** - the property exists but is hidden from loops and Object.keys!\n\n**Think of it like invisible ink** - the property is there, but only visible with special detection!\n\n**What happens:**\n```javascript\nObject.defineProperty(person, \"age\", { value: 21 });\n//                                     ^^^^^^^^^^^^\n//                                     Default flags:\n//                                     enumerable: false ⚠️\n//                                     writable: false\n//                                     configurable: false\n\nconsole.log(person);\n// { name: \"Lydia\", age: 21 }\n// Console can see it! ✅\n\nconsole.log(Object.keys(person));\n// [\"name\"]\n// Object.keys can't see it! ❌\n```\n\n**Why the difference?**\n- `console.log()` shows **all** properties (even non-enumerable)\n- `Object.keys()` shows **only enumerable** properties\n\n**To make it enumerable:**\n```javascript\nObject.defineProperty(person, \"age\", {\n  value: 21,\n  enumerable: true,  // ✅ Now visible!\n});\n```\n\n**Memory trick:** defineProperty = hidden by default, must opt-in to visibility!",
    tags: ['javascript', 'quiz', 'Object.defineProperty', 'enumerable'],
  },

{
    id: 'js-098',
    question: "📝 What's the output?\n\n```javascript\nconst box = { x: 10, y: 20 };\n\nObject.freeze(box);\n\nconst shape = box;\nshape.x = 100;\n\nconsole.log(shape);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          '{ x: 100, y: 20 }',
          '{ x: 10, y: 20 }',
          '{ x: 100 }',
          'ReferenceError'
    ],
    correctAnswer: 1,
    explanation: "**Object.freeze prevents all modifications** - frozen objects are completely immutable (for their direct properties)!\n\n**Think of freeze like putting an object in ice** - you can still look at it, but you can't change it!\n\n**What happens:**\n```javascript\nObject.freeze(box);\n// box is now immutable ❄️\n\nconst shape = box;\n// shape and box reference the SAME frozen object\n\nshape.x = 100;  // ⚠️ Silently fails (strict mode would throw)\n\nconsole.log(shape);  // { x: 10, y: 20 }\n//                        ^^^ Still 10!\n```\n\n**Freeze effects:**\n```javascript\nconst frozen = { a: 1 };\nObject.freeze(frozen);\n\nfrozen.a = 999;      // ❌ Can't modify\nfrozen.b = 2;        // ❌ Can't add\ndelete frozen.a;     // ❌ Can't delete\n\nObject.isFrozen(frozen);  // true ✅\n```\n\n**Memory trick:** freeze = read-only mode, all changes ignored!",
    tags: ['javascript', 'quiz', 'Object.freeze', 'immutability'],
  },

{
    id: 'js-099',
    question: "📦 Which of the following will modify the `person` object?\n\n```javascript\nconst person = { name: \"Lydia Hallie\" };\n\nObject.seal(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          'person.name = "Evan Bacon"',
          'person.age = 21',
          'delete person.name',
          'Object.assign(person, { age: 21 })'
    ],
    correctAnswer: 0,
    explanation: "**Object.seal prevents adding/removing properties, but allows modifications** - like a sealed box where you can only change what's already inside!\n\n**Think of seal like a fixed-size container** - can't add or remove compartments, but can change what's in each one!\n\n**Seal vs Freeze comparison:**\n```javascript\nconst sealed = { name: \"Lydia\" };\nObject.seal(sealed);\n\nsealed.name = \"Evan\";     // ✅ Can modify existing\nsealed.age = 21;          // ❌ Can't add new\ndelete sealed.name;       // ❌ Can't delete\n\nconst frozen = { name: \"Lydia\" };\nObject.freeze(frozen);\n\nfrozen.name = \"Evan\";     // ❌ Can't modify\nfrozen.age = 21;          // ❌ Can't add new\ndelete frozen.name;       // ❌ Can't delete\n```\n\n**Why Object.assign fails:**\n```javascript\nObject.assign(person, { age: 21 });\n// Tries to ADD 'age' property\n// Seal prevents adding ❌\n```\n\n**Memory trick:** seal = modify YES, add/delete NO | freeze = everything NO!",
    tags: ['javascript', 'quiz', 'Object.seal', 'immutability'],
  },

{
    id: 'js-100',
    question: "📦 Which of the following will modify the `person` object?\n\n```javascript\nconst person = {\n  name: \"Lydia Hallie\",\n  address: {\n    street: \"100 Main St\",\n  },\n};\n\nObject.freeze(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          'person.name = "Evan Bacon"',
          'delete person.address',
          'person.address.street = "101 Main St"',
          'person.pet = { name: "Mara" }'
    ],
    correctAnswer: 2,
    explanation: "**Object.freeze is SHALLOW** - it only freezes the first level of properties, nested objects remain mutable!\n\n**Think of freeze like freezing the surface of a lake** - the top is solid ice, but the water underneath still flows!\n\n**Visual breakdown:**\n```javascript\nconst person = {\n  name: \"Lydia\",      // ❄️ Frozen (direct property)\n  address: {          // ❄️ Reference frozen\n    street: \"100\"     // 🌊 NOT frozen (nested property)\n  }\n};\n\nObject.freeze(person);\n```\n\n**What's frozen vs not:**\n```javascript\n// Direct properties - FROZEN ❄️\nperson.name = \"Evan\";        // ❌ Can't change\ndelete person.address;       // ❌ Can't delete reference\nperson.pet = { name: \"M\" };  // ❌ Can't add\n\n// Nested properties - NOT FROZEN 🌊\nperson.address.street = \"101\";  // ✅ CAN change!\nperson.address.city = \"NYC\";    // ✅ CAN add!\ndelete person.address.street;   // ✅ CAN delete!\n```\n\n**Why this happens:**\n```javascript\nObject.freeze(person);\n// Freezes: person's direct properties\n// person.address → Reference is frozen\n// BUT the object that reference points to is NOT frozen!\n```\n\n**Deep freeze solution:**\n```javascript\nfunction deepFreeze(obj) {\n  Object.freeze(obj);\n  Object.values(obj).forEach(value => {\n    if (typeof value === 'object' && value !== null) {\n      deepFreeze(value);  // Recursively freeze\n    }\n  });\n}\n\ndeepFreeze(person);\nperson.address.street = \"101\";  // ❌ Now this fails too!\n```\n\n**Real-world analogy:**\n```javascript\nconst house = {\n  owner: \"John\",     // ❄️ Can't change owner\n  rooms: {           // ❄️ Can't remove rooms object\n    bedroom: 3,      // 🌊 Can change number of bedrooms!\n    bathroom: 2      // 🌊 Can change number of bathrooms!\n  }\n};\n```\n\n**Memory trick:** Freeze stops at the first layer - nested objects need their own freeze!",
    tags: ['javascript', 'quiz', 'Object.freeze', 'shallow-freeze', 'immutability'],
  },

{
    id: 'js-113',
    question: "🖥️ What's the output?\n\n```javascript\nconst spookyItems = [\"👻\", \"🎃\", \"🕸\"];\n({ item: spookyItems[3] } = { item: \"💀\" });\n\nconsole.log(spookyItems);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          '["👻", "🎃", "🕸"]',
          '["👻", "🎃", "🕸", "💀"]',
          '["👻", "🎃", "🕸", { item: "💀" }]',
          '["👻", "🎃", "🕸", "[object Object]"]'
    ],
    correctAnswer: 1,
    explanation: "**Destructuring assignment can modify arrays** - the left side doesn't have to be a simple variable!\n\n**Think of destructuring like a two-way mirror** - left side gets value from right side!\n\n**What's happening:**\n```javascript\n({ item: spookyItems[3] } = { item: \"💀\" });\n//       ^^^^^^^^^^^^^^       ^\n//       Target (left)         Source (right)\n//\n// Reads: \"Take 'item' from right side,\n//         assign it to spookyItems[3]\"\n```\n\n**Step-by-step:**\n```javascript\n// 1. Right side has: { item: \"💀\" }\n// 2. Extract value of 'item' property: \"💀\"\n// 3. Assign to left side target: spookyItems[3]\n// 4. spookyItems[3] = \"💀\"\n\n// Result:\nspookyItems = [\"👻\", \"🎃\", \"🕸\", \"💀\"]\n//             0     1     2     3\n```\n\n**Compare normal destructuring:**\n```javascript\n// Normal: creates new variable\nlet x;\n({ item: x } = { item: \"💀\" });\n// x = \"💀\"\n\n// Advanced: assigns to array index\n({ item: arr[0] } = { item: \"💀\" });\n// arr[0] = \"💀\"\n```\n\n**Memory trick:** Destructuring left side = assignment target, can be variable OR array index!",
    tags: ['javascript', 'quiz', 'destructuring', 'arrays'],
  },

{
    id: 'js-152',
    question: "🖥️ What is the output?\n\n```javascript\nvar status = \"😎\";\n\nsetTimeout(() => {\n  const status = \"😍\";\n\n  const data = {\n    status: \"🥑\",\n    getStatus() {\n      return this.status;\n    },\n  };\n\n  console.log(data.getStatus());\n  console.log(data.getStatus.call(this));\n}, 0);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          '"🥑" and "😍"',
          '"🥑" and "😎"',
          '"😍" and "😎"',
          '"😎" and "😎"'
    ],
    correctAnswer: 1,
    explanation: "**The 'this' keyword depends on HOW a function is called** - normal call uses object, .call() changes it!\n\n**Think of 'this' like a chameleon** - it changes color based on where it sits!\n\n**Complete breakdown:**\n```javascript\nvar status = \"😎\";  // Global variable (on window/global)\n\nsetTimeout(() => {\n  const status = \"😍\";  // Local variable (in arrow function)\n\n  const data = {\n    status: \"🥑\",  // Object property\n    getStatus() {\n      return this.status;  // 'this' depends on call!\n    },\n  };\n\n  // Call 1: Normal method call\n  data.getStatus();\n  // When called as: object.method()\n  // 'this' = object (data)\n  // this.status = data.status = \"🥑\" ✅\n\n  // Call 2: Using .call(this)\n  data.getStatus.call(this);\n  // .call() changes what 'this' refers to\n  // Inside arrow function, 'this' = outer scope 'this'\n  // Arrow function 'this' = global 'this'\n  // this.status = global status = \"😎\" ✅\n});\n```\n\n**Why local status \"😍\" is ignored:**\n```javascript\nconst status = \"😍\";  // Local variable\n\nreturn this.status;\n//     ^^^^\n// 'this' doesn't look at local variables!\n// 'this' only looks at object properties\n```\n\n**Visual 'this' binding rules:**\n```javascript\n// Method call: this = object\ndata.getStatus();        // this = data\n\n// call/apply/bind: this = first argument\ndata.getStatus.call(x);  // this = x\n\n// Arrow function: this = outer scope\n() => this.status;       // this from parent scope\n\n// Regular function: this = global (non-strict)\nfunction() { this.x }    // this = global/window\n```\n\n**The three status values:**\n```javascript\nvar status = \"😎\";        // Global (window.status)\nconst status = \"😍\";      // Local variable\ndata.status = \"🥑\";       // Object property\n\n// Which one gets used?\nthis.status  // Depends on what 'this' is!\n```\n\n**Arrow function 'this' inheritance:**\n```javascript\nsetTimeout(() => {  // Arrow function\n  // Arrow functions inherit 'this' from outer scope\n  // Outer scope = global scope\n  // So 'this' here = global object\n\n  data.getStatus.call(this);\n  //                  ^^^^\n  //                  global object\n});\n```\n\n**Output explanation:**\n```javascript\n1. data.getStatus()\n   → Method call on 'data' object\n   → this = data\n   → this.status = \"🥑\"\n\n2. data.getStatus.call(this)\n   → .call() with arrow function's 'this'\n   → this = global object\n   → this.status = \"😎\" (global var)\n```\n\n**Memory trick:** Method call = object 'this', .call() = custom 'this', arrow function = inherited 'this'!",
    tags: ['javascript', 'quiz', 'this', 'call', 'arrow-functions', 'scope'],
  }
];
