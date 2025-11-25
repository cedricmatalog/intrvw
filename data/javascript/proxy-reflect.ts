import { QuizQuestion } from '../../types/quiz';

export const proxy_reflectQuizzes: QuizQuestion[] = [
{
    id: 'js-064',
    question: "🖥️ When you click the paragraph, what's the logged output?\n\n```html\n<div onclick=\"console.log('div')\">\n  <p onclick=\"console.log('p')\">\n    Click me!\n  </p>\n</div>\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
          "p div",
          "div p",
          "p",
          "div"
    ],
    correctAnswer: 0,
    explanation: "**Event bubbling: events propagate from innermost to outermost** - like ripples in water!\n\n**Think of event bubbling like sound echoing up a well** - starts at the bottom (target), travels up to the top (document)!\n\n**What happens:**\n```html\n<div onclick=\"console.log('div')\">\n  <p onclick=\"console.log('p')\">\n    Click me!\n  </p>\n</div>\n```\n\n**When you click `<p>`:**\n```javascript\n// Phase 1: Capturing (top → target)\n// document → div → p\n// (handlers with useCapture:true run here)\n\n// Phase 2: Target (at the element clicked)\n// p's handler runs\nconsole.log('p');  // ✅ First output\n\n// Phase 3: Bubbling (target → top)\n// p → div → document  \n// div's handler runs\nconsole.log('div');  // ✅ Second output\n\n// Final output: \"p\" \"div\"\n```\n\n**Event propagation phases:**\n```javascript\n// 1. Capturing phase (top-down):\n// document → html → body → div → p\n\n// 2. Target phase:\n// The actual element clicked (p)\n\n// 3. Bubbling phase (bottom-up):\n// p → div → body → html → document\n\n// By default, handlers run in BUBBLING phase\n```\n\n**Visual flow:**\n```\nClick on <p>:\n\n↓ Capturing (ignored by default)\ndocument\n  html\n    body\n      div\n        p  ← Target (runs first)\n          ↑\nBubbling |\n        div (runs second)\n      body\n    html\n  document\n```\n\n**Stopping propagation:**\n```javascript\n<p onclick=\"event.stopPropagation(); console.log('p');\">\n  Click me!\n</p>\n// Output: only \"p\"\n// Bubbling stopped, div handler doesn't run\n```\n\n**Memory trick:** Bubbling = innermost to outermost, like bubbles rising!",
    tags: ["javascript","quiz", "event-bubbling"],
  },

{
    id: 'js-171',
    question: "📝 What's the output?\n\n```javascript\nconst handler = {\n  set: () => console.log(\"Added a new property!\"),\n  get: () => console.log(\"Accessed a property!\"),\n};\n\nconst person = new Proxy({}, handler);\n\nperson.name = \"Lydia\";\nperson.name;\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
          "Added a new property!",
          "Accessed a property!",
          "Added a new property! Accessed a property!",
          "Nothing gets logged"
    ],
    correctAnswer: 2,
    explanation: "**Proxy intercepts operations** - set trap runs on assignment, get trap runs on access!\n\n**Think of Proxy like a security guard** - every time someone enters (get) or adds something (set), the guard logs it!\n\n**What happens:**\n```javascript\nconst person = new Proxy({}, handler);\n\n// Assignment triggers 'set' trap:\nperson.name = \"Lydia\";\n// Console: \"Added a new property!\" ✅\n\n// Access triggers 'get' trap:\nperson.name;\n// Console: \"Accessed a property!\" ✅\n\n// Total output:\n// \"Added a new property!\"\n// \"Accessed a property!\"\n```\n\n**Proxy trap timeline:**\n```javascript\n// Step 1: person.name = \"Lydia\"\n// → Calls handler.set()\n// → Logs: \"Added a new property!\"\n// → Property is set on target {}\n\n// Step 2: person.name\n// → Calls handler.get()\n// → Logs: \"Accessed a property!\"\n// → Returns value from target\n```\n\n**Complete handler with parameters:**\n```javascript\nconst handler = {\n  set(target, property, value) {\n    console.log(`Setting ${property} to ${value}`);\n    target[property] = value;  // Actually set the value\n    return true;  // Indicate success\n  },\n  get(target, property) {\n    console.log(`Getting ${property}`);\n    return target[property];  // Actually return the value\n  }\n};\n\nconst obj = new Proxy({}, handler);\n\nobj.name = \"Lydia\";\n// Logs: \"Setting name to Lydia\"\n\nconst value = obj.name;\n// Logs: \"Getting name\"\n// value = \"Lydia\"\n```\n\n**Common Proxy traps:**\n```javascript\nconst handler = {\n  get(target, prop) {       // Property access\n    return target[prop];\n  },\n  set(target, prop, value) { // Property assignment\n    target[prop] = value;\n    return true;\n  },\n  has(target, prop) {       // 'in' operator\n    return prop in target;\n  },\n  deleteProperty(target, prop) { // delete operator\n    delete target[prop];\n    return true;\n  }\n};\n```\n\n**Proxy use cases:**\n```javascript\n// Validation:\nconst validator = {\n  set(target, prop, value) {\n    if (prop === 'age' && typeof value !== 'number') {\n      throw new TypeError('Age must be a number');\n    }\n    target[prop] = value;\n    return true;\n  }\n};\n\n// Default values:\nconst defaults = {\n  get(target, prop) {\n    return prop in target ? target[prop] : 'N/A';\n  }\n};\n\n// Logging/debugging:\nconst logger = {\n  get(target, prop) {\n    console.log(`Read ${prop}`);\n    return target[prop];\n  },\n  set(target, prop, value) {\n    console.log(`Write ${prop} = ${value}`);\n    target[prop] = value;\n    return true;\n  }\n};\n```\n\n**Memory trick:** Proxy = intercepts operations, set on write, get on read!",
    tags: ["javascript","quiz", "Proxy", "traps"],
  },

{
    id: 'js-201',
    question: "📝 What's the output?\n\n```javascript\nconst target = { name: 'John' };\nconst handler = {\n  get(target, prop) {\n    return prop in target ? target[prop] : 'Not found';\n  }\n};\n\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.name);\nconsole.log(proxy.age);\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
      "'John' undefined",
      "'John' 'Not found'",
      "Error",
      "'John' null",
    ],
    correctAnswer: 1,
    explanation: "**Proxy get trap can provide default values** - perfect for handling missing properties!\n\n**Think of Proxy get like a helpful receptionist** - if they can find the person (property), they connect you. If not, they say \"Not found\" instead of silence (undefined)!\n\n**What happens:**\n```javascript\nconst proxy = new Proxy(target, handler);\n\n// Access existing property:\nproxy.name\n// → Handler checks: 'name' in target? Yes!\n// → Returns target['name']\n// → Output: 'John' ✅\n\n// Access missing property:\nproxy.age\n// → Handler checks: 'age' in target? No!\n// → Returns 'Not found'\n// → Output: 'Not found' ✅\n```\n\n**Step-by-step get trap:**\n```javascript\nget(target, prop) {\n  // Check if property exists:\n  if (prop in target) {\n    return target[prop];  // Return actual value\n  } else {\n    return 'Not found';   // Return default\n  }\n}\n\n// Calling proxy.age:\n// 1. prop = 'age'\n// 2. 'age' in { name: 'John' }? → false\n// 3. Return 'Not found'\n```\n\n**Without Proxy:**\n```javascript\nconst target = { name: 'John' };\n\ntarget.name;  // 'John' ✅\ntarget.age;   // undefined ❌ (no default value)\n```\n\n**Common get trap patterns:**\n```javascript\n// Pattern 1: Default values\nconst withDefaults = new Proxy({}, {\n  get(target, prop) {\n    return prop in target ? target[prop] : 0;\n  }\n});\nwithDefaults.missing;  // 0 instead of undefined\n\n// Pattern 2: Property normalization\nconst caseInsensitive = new Proxy({ Name: 'John' }, {\n  get(target, prop) {\n    const key = Object.keys(target)\n      .find(k => k.toLowerCase() === prop.toLowerCase());\n    return target[key];\n  }\n});\ncaseInsensitive.name;  // 'John' (finds 'Name')\ncaseInsensitive.NAME;  // 'John' (finds 'Name')\n\n// Pattern 3: Nested property access\nconst safe = new Proxy({}, {\n  get(target, prop) {\n    return target[prop] || new Proxy({}, this);\n  }\n});\nsafe.a.b.c.d;  // Doesn't throw, returns Proxy\n```\n\n**Comparison:**\n```javascript\n// Regular object:\nconst obj = { name: 'John' };\nobj.age;  // undefined\nobj.age.toString();  // TypeError!\n\n// Proxied object:\nconst proxy = new Proxy(obj, {\n  get(target, prop) {\n    return prop in target ? target[prop] : 'N/A';\n  }\n});\nproxy.age;  // 'N/A' (safe!)\n```\n\n**Memory trick:** Proxy get = custom property access, can provide defaults!",
    tags: ['javascript', 'quiz', 'Proxy', 'get-trap'],
  },

{
    id: 'js-202',
    question: "❌ What happens here?\n\n```javascript\nconst obj = { count: 0 };\nconst handler = {\n  set(target, prop, value) {\n    if (prop === 'count' && typeof value !== 'number') {\n      throw new TypeError('Count must be a number');\n    }\n    target[prop] = value;\n    return true;\n  }\n};\n\nconst proxy = new Proxy(obj, handler);\nproxy.count = '5';\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
      "Sets count to '5'",
      "Sets count to 5",
      "Throws TypeError",
      "Returns false",
    ],
    correctAnswer: 2,
    explanation: "**Proxy set trap enables validation** - throw errors BEFORE invalid data is set!\n\n**Think of Proxy set like a bouncer at a club** - checks ID (validation) before letting you in (setting value)!\n\n**What happens:**\n```javascript\nproxy.count = '5';\n\n// Set trap runs:\nset(target, prop, value) {\n  // prop = 'count'\n  // value = '5' (string)\n  \n  if (prop === 'count' && typeof value !== 'number') {\n    throw new TypeError('Count must be a number');\n    // ↑ Throws here! ✅\n  }\n  \n  // Never reaches this:\n  target[prop] = value;\n  return true;\n}\n\n// Result: TypeError thrown ✅\n// obj.count remains 0 (unchanged)\n```\n\n**Validation prevents invalid state:**\n```javascript\n// Without Proxy:\nconst obj = { count: 0 };\nobj.count = '5';  // ✅ Silently accepts string\nobj.count + 10;   // '510' ❌ String concatenation!\n\n// With Proxy:\nconst proxy = new Proxy({ count: 0 }, {\n  set(target, prop, value) {\n    if (prop === 'count' && typeof value !== 'number') {\n      throw new TypeError('Count must be a number');\n    }\n    target[prop] = value;\n    return true;\n  }\n});\n\nproxy.count = '5';  // ❌ TypeError!\nproxy.count = 5;    // ✅ Works\n```\n\n**Common validation patterns:**\n```javascript\n// Type validation:\nconst validator = {\n  set(target, prop, value) {\n    const types = { age: 'number', name: 'string' };\n    \n    if (types[prop] && typeof value !== types[prop]) {\n      throw new TypeError(\n        `${prop} must be ${types[prop]}, got ${typeof value}`\n      );\n    }\n    \n    target[prop] = value;\n    return true;\n  }\n};\n\nconst person = new Proxy({}, validator);\nperson.age = 25;      // ✅\nperson.age = '25';    // ❌ TypeError\nperson.name = 'John'; // ✅\nperson.name = 123;    // ❌ TypeError\n\n// Range validation:\nconst rangeCheck = {\n  set(target, prop, value) {\n    if (prop === 'age' && (value < 0 || value > 150)) {\n      throw new RangeError('Age must be between 0 and 150');\n    }\n    target[prop] = value;\n    return true;\n  }\n};\n\n// Read-only properties:\nconst readOnly = {\n  set(target, prop, value) {\n    if (prop === 'id') {\n      throw new Error('Cannot modify id');\n    }\n    target[prop] = value;\n    return true;\n  }\n};\n```\n\n**Set trap return value:**\n```javascript\nset(target, prop, value) {\n  target[prop] = value;\n  return true;  // MUST return true/truthy for success\n  // Returning false/falsy throws TypeError in strict mode\n}\n```\n\n**Memory trick:** Proxy set = gatekeeper, validates before setting!",
    tags: ['javascript', 'quiz', 'Proxy', 'validation'],
  }
];
