import { QuizQuestion } from '../../types/quiz';

export const prototypesQuizzes: QuizQuestion[] = [
{
    id: 'js-102',
    question: "📦 All object have prototypes.",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          'true',
          'false',
          "only if created with 'new'",
          'only in ES6+'
    ],
    correctAnswer: 1,
    explanation: "**FALSE - not all objects have prototypes!** The prototype chain must end somewhere, and you can create prototype-less objects.\n\n**Think of the prototype chain like a family tree** - it must have a starting ancestor (null), and you can create orphans with no parents!\n\n**Two key exceptions:**\n\n**1. Object.prototype has no prototype:**\n```javascript\nObject.getPrototypeOf(Object.prototype) === null;  // true ✅\n// This is the TOP of the chain!\n\n// The chain:\nconst obj = {};\nobj → Object.prototype → null\n           ↑\n     No prototype!\n```\n\n**2. Objects created with Object.create(null):**\n```javascript\nconst dict = Object.create(null);\nObject.getPrototypeOf(dict) === null;  // true ✅\n\n// No prototype means:\ndict.toString();  // TypeError! No inherited methods\ndict.hasOwnProperty('x');  // TypeError!\n\n// Use case: Pure dictionaries\nconst map = Object.create(null);\nmap['toString'] = 'my value';  // ✅ Safe, no conflicts!\nmap['hasOwnProperty'] = 'data';  // ✅ Works!\n```\n\n**Compare:**\n```javascript\n// Regular object - HAS prototype\nconst regular = {};\nObject.getPrototypeOf(regular) === Object.prototype;  // true\nregular.toString();  // '[object Object]' ✅\n\n// Prototype-less object\nconst pure = Object.create(null);\nObject.getPrototypeOf(pure) === null;  // true\npure.toString();  // TypeError! ❌\n```\n\n**Why Object.create(null) is useful:**\n```javascript\n// Problem with regular objects:\nconst data = {};\ndata['constructor'] = 'my data';\ndata.constructor;  // [Function: Object] ⚠️ Conflicts!\n\n// Solution with prototype-less objects:\nconst data = Object.create(null);\ndata['constructor'] = 'my data';\ndata.constructor;  // 'my data' ✅ No conflicts!\n```\n\n**Memory trick:** Prototype chain needs a top (null), and you can create orphan objects!",
    tags: ['javascript', 'quiz', 'prototypes', 'Object.create'],
  },

{
    id: 'js-139',
    question: "🖥️ What's the output?\n\n```javascript\nfunction Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person(\"Lydia\", \"Hallie\");\nPerson.getFullName = function () {\n  return `${this.firstName} ${this.lastName}`;\n};\n\nconsole.log(member.getFullName());\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          'TypeError',
          'SyntaxError',
          'Lydia Hallie',
          'undefined undefined'
    ],
    correctAnswer: 0,
    explanation: "**Adding methods to constructor function doesn't make them available to instances** - you need to add them to the prototype!\n\n**Think of constructors like blueprints** - writing on the blueprint itself doesn't add features to houses already built!\n\n**What happens:**\n```javascript\n// Add method to constructor function itself\nPerson.getFullName = function() { /*...*/ };\n// This makes it a STATIC method on Person\n\n// Instance doesn't have it ❌\nmember.getFullName();  // TypeError!\n//     ^^^^^^^^^^^\n//     undefined (not a function)\n\n// Only the constructor has it\nPerson.getFullName();  // Would work if 'this' was correct\n```\n\n**Where methods should go:**\n```javascript\n// ❌ Wrong: On constructor\nPerson.getFullName = function() { };\nmember.getFullName();  // TypeError!\n\n// ✅ Right: On prototype\nPerson.prototype.getFullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\nmember.getFullName();  // 'Lydia Hallie' ✅\n```\n\n**Visual:**\n```javascript\nPerson (function)\n  ├─ getFullName (static method) ❌\n  └─ prototype\n       └─ getFullName (instance method) ✅\n            ↑\n         member instance can access this!\n```\n\n**Memory trick:** Constructor properties = static, prototype properties = shared by all instances!",
    tags: ['javascript', 'quiz', 'prototypes', 'constructors'],
  },

{
    id: 'js-141',
    question: "📝 What's the output?\n\n```javascript\nclass Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nDog.prototype.bark = function () {\n  console.log(`Woof I am ${this.name}`);\n};\n\nconst pet = new Dog(\"Mara\");\n\npet.bark();\n\ndelete Dog.prototype.bark;\n\npet.bark();\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          '"Woof I am Mara", TypeError',
          '"Woof I am Mara", "Woof I am Mara"',
          '"Woof I am Mara", undefined',
          'TypeError, TypeError'
    ],
    correctAnswer: 0,
    explanation: "**Deleting prototype methods affects ALL instances** - they all share the same prototype!\n\n**Think of the prototype like a shared library** - removing a book affects everyone using that library!\n\n**Step-by-step:**\n```javascript\n// 1. Add bark to prototype\nDog.prototype.bark = function() { /*...*/ };\n\n// 2. Create instance\nconst pet = new Dog(\"Mara\");\n\n// 3. First call works ✅\npet.bark();  // 'Woof I am Mara'\n// pet doesn't have bark, looks up chain → finds on Dog.prototype\n\n// 4. Delete from prototype ❌\ndelete Dog.prototype.bark;\n// Now Dog.prototype.bark is undefined\n\n// 5. Second call fails ❌\npet.bark();  // TypeError!\n// pet.bark is undefined (not a function)\n```\n\n**Why TypeError:**\n```javascript\ndelete Dog.prototype.bark;\n\npet.bark;  // undefined (property lookup fails)\npet.bark();  // TypeError: pet.bark is not a function\n```\n\n**Prototype lookup:**\n```javascript\n// Before delete:\npet.bark\n  → Check pet? No\n  → Check Dog.prototype? Yes! ✅\n\n// After delete:\npet.bark\n  → Check pet? No\n  → Check Dog.prototype? No (deleted!)\n  → Check Object.prototype? No\n  → undefined ❌\n```\n\n**Memory trick:** Delete from prototype = all instances lose access!",
    tags: ['javascript', 'quiz', 'prototypes', 'delete'],
  },

{
    id: 'js-144',
    question: "🖥️ What's the output?\n\n```javascript\nfunction giveLydiaPizza() {\n  return \"Here is pizza!\";\n}\n\nconst giveLydiaChocolate = () =>\n  \"Here's chocolate... now go hit the gym already.\";\n\nconsole.log(giveLydiaPizza.prototype);\nconsole.log(giveLydiaChocolate.prototype);\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          '{ constructor: ...} { constructor: ...}',
          '{} { constructor: ...}',
          '{ constructor: ...} {}',
          '{ constructor: ...} undefined'
    ],
    correctAnswer: 3,
    explanation: "**Arrow functions don't have prototype property** - they can't be used as constructors!\n\n**Think of prototypes like construction plans** - regular functions have them, arrows don't because they're not meant to build objects!\n\n**Key difference:**\n```javascript\n// Regular function - HAS prototype ✅\nfunction regular() {}\nconsole.log(regular.prototype);  // { constructor: regular }\n\n// Arrow function - NO prototype ❌\nconst arrow = () => {};\nconsole.log(arrow.prototype);  // undefined\n```\n\n**Why this matters:**\n```javascript\n// Regular function - can use 'new' ✅\nfunction Person(name) {\n  this.name = name;\n}\nconst p = new Person('John');  // Works!\n\n// Arrow function - can't use 'new' ❌\nconst PersonArrow = (name) => {\n  this.name = name;\n};\nconst p = new PersonArrow('John');  // TypeError!\n// \"PersonArrow is not a constructor\"\n```\n\n**What's in the prototype:**\n```javascript\nfunction Dog() {}\nDog.prototype;  \n// { constructor: Dog }\n//   ^^^^^^^^^^^ Points back to Dog\n\n// You can add methods:\nDog.prototype.bark = function() {};\nDog.prototype;  \n// { constructor: Dog, bark: function }\n```\n\n**Memory trick:** Arrow functions = no prototype = can't be constructors!",
    tags: ['javascript', 'quiz', 'arrow-functions', 'prototypes'],
  },

{
    id: 'js-192',
    question: "📝 What's the output?\n\n```javascript\nconst person = {\n  greet() {\n    return 'Hello';\n  }\n};\n\nconst john = Object.create(person);\njohn.name = 'John';\n\nconsole.log(john.name);\nconsole.log(john.greet());\nconsole.log(john.hasOwnProperty('greet'));\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
      "'John' 'Hello' true",
      "'John' 'Hello' false",
      "'John' undefined false",
      'Error',
    ],
    correctAnswer: 1,
    explanation: "**Object.create() sets up prototypal inheritance** - child can access parent properties but they're not 'own' properties!\n\n**Think of inheritance like borrowing from parents** - you can use their stuff, but it's not yours!\n\n**What happens:**\n```javascript\nconst person = {\n  greet() { return 'Hello'; }\n};\n\nconst john = Object.create(person);\n// john's prototype is now 'person'\njohn.name = 'John';\n\n// 1. john.name - own property ✅\njohn.name;  // 'John'\njohn.hasOwnProperty('name');  // true\n\n// 2. john.greet() - inherited, works! ✅\njohn.greet();  // 'Hello'\n// Looks up chain: john → person.greet() found!\n\n// 3. hasOwnProperty('greet') - NOT own property ❌\njohn.hasOwnProperty('greet');  // false\n// It's on the prototype, not on john directly\n```\n\n**Prototype chain:**\n```javascript\njohn\n  ├─ name: 'John' (own property)\n  └─ [[Prototype]]: person\n       └─ greet() (inherited)\n```\n\n**Own vs inherited:**\n```javascript\n// Own properties\nfor (let key in john) {\n  if (john.hasOwnProperty(key)) {\n    console.log(key);  // Only 'name'\n  }\n}\n\n// All properties (own + inherited)\nfor (let key in john) {\n  console.log(key);  // 'name', 'greet'\n}\n```\n\n**Memory trick:** Object.create = prototype link, hasOwnProperty = only direct properties!",
    tags: ['javascript', 'quiz', 'Object.create', 'prototypes', 'hasOwnProperty'],
  },

{
    id: 'js-207',
    question: "📝 What's the output?\n\n```javascript\nfunction Animal(name) {\n  this.name = name;\n}\n\nAnimal.prototype.speak = function() {\n  return `${this.name} makes a sound`;\n};\n\nconst dog = new Animal('Dog');\nconsole.log(dog.speak());\nconsole.log(dog.hasOwnProperty('speak'));\nconsole.log(dog.hasOwnProperty('name'));\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
      "'Dog makes a sound' true true",
      "'Dog makes a sound' false true",
      "'Dog makes a sound' true false",
      'Error',
    ],
    correctAnswer: 1,
    explanation: "**Properties set in constructor are 'own', methods on prototype are 'inherited'** - this is the standard pattern!\n\n**Think of constructor like personalizing** - you write your name on it, making it yours. Shared tools stay in the toolbox (prototype).\n\n**What happens:**\n```javascript\nfunction Animal(name) {\n  this.name = name;  // Set directly on instance\n}\n\nAnimal.prototype.speak = function() {  // On prototype\n  return `${this.name} makes a sound`;\n};\n\nconst dog = new Animal('Dog');\n\n// 1. speak() works via prototype ✅\ndog.speak();  // 'Dog makes a sound'\n\n// 2. speak is NOT own property ❌\ndog.hasOwnProperty('speak');  // false\n// It's on Animal.prototype\n\n// 3. name IS own property ✅\ndog.hasOwnProperty('name');  // true\n// Set by constructor: this.name = name\n```\n\n**Property locations:**\n```javascript\ndog\n  ├─ name: 'Dog' (own property) ✅\n  └─ [[Prototype]]: Animal.prototype\n       └─ speak: function (shared) ✅\n```\n\n**Why this pattern:**\n```javascript\n// ✅ Efficient: Method shared by all instances\nAnimal.prototype.speak = function() { };\n\nconst dog1 = new Animal('Rex');\nconst dog2 = new Animal('Max');\ndog1.speak === dog2.speak;  // true (same function!)\n\n// ❌ Wasteful: Method duplicated per instance\nfunction Animal(name) {\n  this.speak = function() { };  // New function each time!\n}\ndog1.speak === dog2.speak;  // false (different functions!)\n```\n\n**Memory trick:** Constructor sets 'own', prototype shares methods!",
    tags: ['javascript', 'quiz', 'prototypes', 'constructors', 'hasOwnProperty'],
  },

{
    id: 'js-208',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3];\nconsole.log(arr.__proto__ === Array.prototype);\nconsole.log(Array.prototype.__proto__ === Object.prototype);\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
      'true true',
      'true false',
      'false true',
      'false false',
    ],
    correctAnswer: 0,
    explanation: "**The prototype chain: array → Array.prototype → Object.prototype → null** - everything inherits from Object (except null)!\n\n**Think of it like a family tree** - arrays inherit from Array family, which inherits from Object family, which has no parent (null)!\n\n**The complete chain:**\n```javascript\nconst arr = [1, 2, 3];\n\n// Level 1: array inherits from Array.prototype ✅\narr.__proto__ === Array.prototype;  // true\n// This is why arr.push() works!\n\n// Level 2: Array.prototype inherits from Object.prototype ✅\nArray.prototype.__proto__ === Object.prototype;  // true\n// This is why arr.toString() works!\n\n// Level 3: Object.prototype has no prototype\nObject.prototype.__proto__ === null;  // true\n// Top of the chain!\n```\n\n**Visual chain:**\n```javascript\narr [1, 2, 3]\n  ↓ __proto__\nArray.prototype (has push, map, filter, etc.)\n  ↓ __proto__\nObject.prototype (has toString, hasOwnProperty, etc.)\n  ↓ __proto__\nnull (end of chain)\n```\n\n**Why this matters:**\n```javascript\nconst arr = [1, 2, 3];\n\n// Array methods from Array.prototype\narr.push(4);     // ✅ Works\narr.map(x => x); // ✅ Works\n\n// Object methods from Object.prototype\narr.toString();           // ✅ Works\narr.hasOwnProperty('0');  // ✅ Works\n\n// Method lookup:\narr.push()\n  → Check arr? No\n  → Check Array.prototype? Yes! ✅ Found\n\narr.toString()\n  → Check arr? No\n  → Check Array.prototype? No\n  → Check Object.prototype? Yes! ✅ Found\n```\n\n**Same pattern for other types:**\n```javascript\n// String chain\n'hello'.__proto__ === String.prototype;  // true\nString.prototype.__proto__ === Object.prototype;  // true\n\n// Number chain\n(123).__proto__ === Number.prototype;  // true\nNumber.prototype.__proto__ === Object.prototype;  // true\n\n// Function chain\nfunction f() {}\nf.__proto__ === Function.prototype;  // true\nFunction.prototype.__proto__ === Object.prototype;  // true\n```\n\n**Memory trick:** All roads lead to Object.prototype, then null!",
    tags: ['javascript', 'quiz', 'prototypes', 'prototype-chain'],
  }
];
