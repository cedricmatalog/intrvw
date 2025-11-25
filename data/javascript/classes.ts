import { QuizQuestion } from '../../types/quiz';

export const classesQuizzes: QuizQuestion[] = [
{
    id: 'js-137',
    question: "🖥️ What's the output?\n\n```javascript\nfunction Car() {\n  this.make = \"Lamborghini\";\n  return { make: \"Maserati\" };\n}\n\nconst myCar = new Car();\nconsole.log(myCar.make);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          '"Lamborghini"',
          '"Maserati"',
          'ReferenceError',
          'TypeError'
    ],
    correctAnswer: 1,
    explanation: "**Constructors can override the default object** - explicit object returns replace the auto-created object!\n\n**Think of a constructor like a factory** - normally it gives you what it built (`this`), but if it explicitly hands you something else, you get that instead!\n\n**What happens:**\n```javascript\nfunction Car() {\n  this.make = \"Lamborghini\";  // Sets property on default object\n  return { make: \"Maserati\" }; // ⚠️ Overrides default!\n}\n\nconst myCar = new Car();\n// 'new' creates object → this.make = \"Lamborghini\"\n// Constructor returns different object → override!\n// myCar = { make: \"Maserati\" }\n```\n\n**Constructor return rules:**\n```javascript\n// Rule 1: Return object → use that object ✅\nfunction A() {\n  this.x = 1;\n  return { x: 2 };  // Returns this object\n}\nnew A().x;  // 2\n\n// Rule 2: Return primitive → ignore, use 'this' ✅\nfunction B() {\n  this.x = 1;\n  return 999;  // Ignored!\n}\nnew B().x;  // 1\n\n// Rule 3: No return → use 'this' ✅\nfunction C() {\n  this.x = 1;\n}\nnew C().x;  // 1\n```\n\n**Memory trick:** Constructor return object = override, return primitive = ignore!",
    tags: ['javascript', 'quiz', 'constructors', 'classes'],
  },

{
    id: 'js-138',
    question: "🖥️ What's the output?\n\n```javascript\nclass Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = \"green\" } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: \"purple\" });\nconsole.log(freddie.colorChange(\"orange\"));\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          'orange',
          'purple',
          'green',
          'TypeError'
    ],
    correctAnswer: 3,
    explanation: "**Static methods belong to the class, not instances** - you can't call them on instances!\n\n**Think of static methods like class-level utilities** - they belong to the blueprint, not the houses built from it!\n\n**What happens:**\n```javascript\nclass Chameleon {\n  static colorChange() {  // ⚠️ STATIC method\n    // Belongs to Chameleon class itself\n  }\n}\n\nconst freddie = new Chameleon();\nfreddie.colorChange();  // ❌ TypeError!\n// freddie doesn't have colorChange method\n```\n\n**Where static methods live:**\n```javascript\n// Class has it ✅\nChameleon.colorChange(\"orange\");  // Works!\n\n// Instance doesn't ❌\nfreddie.colorChange(\"orange\");  // TypeError!\n\n// Why?\nfreddie.hasOwnProperty('colorChange');  // false\nChameleon.hasOwnProperty('colorChange');  // true\n```\n\n**Compare static vs instance:**\n```javascript\nclass Dog {\n  static describe() {  // Class method\n    return \"Dogs are mammals\";\n  }\n\n  bark() {  // Instance method\n    return \"Woof!\";\n  }\n}\n\nconst fido = new Dog();\n\n// Static - call on class ✅\nDog.describe();  // Works!\n\n// Instance - call on instance ✅\nfido.bark();  // Works!\n\n// Mixing them up ❌\nfido.describe();  // TypeError!\nDog.bark();       // TypeError!\n```\n\n**Memory trick:** STATIC = on the CLASS, regular methods = on INSTANCES!",
    tags: ['javascript', 'quiz', 'static-methods', 'classes'],
  },

{
    id: 'js-142',
    question: "🏛️ With which constructor can we successfully extend the `Dog` class?\n\n```javascript\nclass Dog {\n  constructor(name) {\n    this.name = name;\n  }\n};\n\nclass Labrador extends Dog {\n  // 1\n  constructor(name, size) {\n    this.size = size;\n  }\n  // 2\n  constructor(name, size) {\n    super(name);\n    this.size = size;\n  }\n  // 3\n  constructor(size) {\n    super(name);\n    this.size = size;\n  }\n  // 4\n  constructor(name, size) {\n    this.name = name;\n    this.size = size;\n  }\n\n};\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          '1',
          '2',
          '3',
          '4'
    ],
    correctAnswer: 1,
    explanation: "**In child classes, must call super() BEFORE using 'this'** - the parent must create the object first!\n\n**Think of super() like laying the foundation** - you must build the base before adding your own floors!\n\n**Why each option fails or succeeds:**\n```javascript\n// Option 1 ❌\nconstructor(name, size) {\n  this.size = size;  // ReferenceError!\n  // Can't use 'this' before super()\n}\n\n// Option 2 ✅\nconstructor(name, size) {\n  super(name);       // ✅ Call parent first\n  this.size = size;  // ✅ Now 'this' exists\n}\n\n// Option 3 ❌\nconstructor(size) {\n  super(name);  // ReferenceError!\n  // 'name' parameter doesn't exist\n}\n\n// Option 4 ❌\nconstructor(name, size) {\n  this.name = name;  // ReferenceError!\n  // Can't use 'this' before super()\n}\n```\n\n**The super() rules:**\n```javascript\nclass Child extends Parent {\n  constructor() {\n    // 1. Must call super() first ✅\n    super();\n    \n    // 2. Then can use 'this' ✅\n    this.x = 1;\n    \n    // Wrong order ❌\n    // this.x = 1;  // ReferenceError!\n    // super();\n  }\n}\n```\n\n**Why this order matters:**\n```javascript\nclass Dog {\n  constructor(name) {\n    this.name = name;  // Parent sets up object\n  }\n}\n\nclass Labrador extends Dog {\n  constructor(name, size) {\n    // 'this' doesn't exist yet!\n    // super() calls Dog constructor → creates 'this'\n    super(name);  // Now 'this' exists\n    this.size = size;  // Can use 'this'\n  }\n}\n```\n\n**Memory trick:** super() first = parent creates object, then child can modify it!",
    tags: ['javascript', 'quiz', 'inheritance', 'super', 'classes'],
  },

{
    id: 'js-143',
    question: "🖥️ What's the output?\n\n```javascript\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst member = new Person(\"John\");\nconsole.log(typeof member);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          '"class"',
          '"function"',
          '"object"',
          '"string"'
    ],
    correctAnswer: 2,
    explanation: "**Classes are syntactic sugar for constructor functions** - instances are always objects!\n\n**Think of classes like fancy wrappers** - they look different but create the same thing: objects!\n\n**What typeof returns:**\n```javascript\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst member = new Person(\"John\");\ntypeof member;  // \"object\" ✅\n\n// Behind the scenes, class syntax is equivalent to:\nfunction Person(name) {\n  this.name = name;\n}\nconst member = new Person(\"John\");\ntypeof member;  // \"object\" ✅ (same!)\n```\n\n**typeof on different things:**\n```javascript\nclass Person {}\n\ntypeof Person;  // \"function\" (classes are functions!)\ntypeof new Person();  // \"object\" (instances are objects!)\ntypeof Person.prototype;  // \"object\"\n```\n\n**No \"class\" type:**\n```javascript\n// JavaScript has NO \"class\" type!\ntypeof new Person();  // \"object\", not \"class\"\n```\n\n**Memory trick:** new + Class/Constructor = object, the class itself = function!",
    tags: ['javascript', 'quiz', 'classes', 'typeof'],
  },

{
    id: 'js-145',
    question: "🖥️ What's the output?\n\n```javascript\nclass Person {\n  constructor() {\n    this.name = \"Lydia\";\n  }\n}\n\nPerson = class AnotherPerson {\n  constructor() {\n    this.name = \"Sarah\";\n  }\n};\n\nconst member = new Person();\nconsole.log(member.name);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          '"Lydia"',
          '"Sarah"',
          'Error: cannot redeclare Person',
          'SyntaxError'
    ],
    correctAnswer: 1,
    explanation: "**Classes declared with 'class' can be reassigned** - they're just variables holding class definitions!\n\n**Think of class names like containers** - you can replace what's inside the container!\n\n**What happens:**\n```javascript\n// 1. First definition\nclass Person {\n  constructor() {\n    this.name = \"Lydia\";\n  }\n}\n\n// 2. Reassign Person variable ✅\nPerson = class AnotherPerson {\n  constructor() {\n    this.name = \"Sarah\";\n  }\n};\n\n// 3. Create instance from NEW definition\nconst member = new Person();\n// Uses the latest definition (Sarah)\nmember.name;  // \"Sarah\"\n```\n\n**Compare const vs class:**\n```javascript\n// const - can't reassign ❌\nconst Person = class {};\nPerson = class {};  // TypeError!\n\n// class - can reassign ✅\nclass Person {}\nPerson = class {};  // Works!\n```\n\n**Memory trick:** class keyword = let (reassignable), not const!",
    tags: ['javascript', 'quiz', 'classes'],
  },

{
    id: 'js-146',
    question: "📝 What's the output?\n\n```javascript\nclass Counter {\n  constructor() {\n    this.count = 0;\n  }\n\n  increment() {\n    this.count++;\n  }\n}\n\nconst counterOne = new Counter();\ncounterOne.increment();\ncounterOne.increment();\n\nconst counterTwo = counterOne;\ncounterTwo.increment();\n\nconsole.log(counterOne.count);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          '0',
          '1',
          '2',
          '3'
    ],
    correctAnswer: 3,
    explanation: "**Objects are assigned by reference** - counterTwo and counterOne point to the SAME object!\n\n**Think of references like two keys to the same house** - any changes through one key affect the same house!\n\n**Step-by-step:**\n```javascript\n// 1. Create instance\nconst counterOne = new Counter();\n// counterOne → { count: 0 }\n\n// 2. Increment twice\ncounterOne.increment();  // count: 0 → 1\ncounterOne.increment();  // count: 1 → 2\n// counterOne → { count: 2 }\n\n// 3. Create reference (NOT a copy!)\nconst counterTwo = counterOne;\n// counterTwo → same object as counterOne\n// Both variables point to { count: 2 }\n\n// 4. Increment via counterTwo\ncounterTwo.increment();  // count: 2 → 3\n// Since they reference the SAME object:\n// counterOne → { count: 3 }\n// counterTwo → { count: 3 }\n\nconsole.log(counterOne.count);  // 3 ✅\n```\n\n**Visual:**\n```javascript\n       counterOne ──┐\n                    ├──→ { count: 3 }\n       counterTwo ──┘\n       (same object in memory!)\n```\n\n**Memory trick:** Assignment copies the REFERENCE, not the object!",
    tags: ['javascript', 'quiz', 'references', 'classes'],
  },

{
    id: 'js-147',
    question: "📝 What's the output?\n\n```javascript\nclass Counter {\n  #number = 10;\n\n  increment() {\n    this.#number++;\n  }\n\n  getNum() {\n    return this.#number;\n  }\n}\n\nconst counter = new Counter();\ncounter.increment();\n\nconsole.log(counter.#number);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          '10',
          '11',
          'undefined',
          'SyntaxError'
    ],
    correctAnswer: 3,
    explanation: "**Private fields (# prefix) cannot be accessed outside the class** - they're truly private!\n\n**Think of # like a locked safe** - only the class has the key, outsiders can't open it!\n\n**What happens:**\n```javascript\nclass Counter {\n  #number = 10;  // Private field (# prefix)\n  \n  getNum() {\n    return this.#number;  // ✅ Inside class - works!\n  }\n}\n\nconst counter = new Counter();\n\n// From outside class ❌\nconsole.log(counter.#number);  // SyntaxError!\n// \"Private field '#number' must be declared in an enclosing class\"\n\n// Must use public method ✅\nconsole.log(counter.getNum());  // 10\n```\n\n**Private vs public:**\n```javascript\nclass Example {\n  publicField = 1;    // Public - accessible anywhere\n  #privateField = 2;  // Private - only inside class\n  \n  getPrivate() {\n    return this.#privateField;  // ✅ Works\n  }\n}\n\nconst ex = new Example();\nex.publicField;    // 1 ✅\nex.#privateField;  // SyntaxError! ❌\nex.getPrivate();   // 2 ✅\n```\n\n**Memory trick:** # = private = class eyes only!",
    tags: ['javascript', 'quiz', 'private-fields', 'classes'],
  },

{
    id: 'js-148',
    question: "📝 What's the output?\n\n```javascript\nclass Bird {\n  constructor() {\n    console.log(\"I'm a bird. 🦢\");\n  }\n}\n\nclass Flamingo extends Bird {\n  constructor() {\n    console.log(\"I'm pink. 🌸\");\n    super();\n  }\n}\n\nconst pet = new Flamingo();\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "I'm pink. 🌸",
          "I'm pink. 🌸 I'm a bird. 🦢",
          "I'm a bird. 🦢 I'm pink. 🌸",
          'Nothing, we didn\'t call any method'
    ],
    correctAnswer: 1,
    explanation: "**Code in child constructor runs BEFORE super() call** - but super() executes the parent constructor!\n\n**Think of super() like calling your parent** - you can do things before and after the call!\n\n**Execution order:**\n```javascript\nclass Flamingo extends Bird {\n  constructor() {\n    // 1. Child code before super() runs first ✅\n    console.log(\"I'm pink. 🌸\");\n    \n    // 2. super() executes parent constructor ✅\n    super();\n    // Inside Bird constructor:\n    // console.log(\"I'm a bird. 🦢\");\n    \n    // 3. Any code after super() would run last\n  }\n}\n\nnew Flamingo();\n// Output:\n// I'm pink. 🌸\n// I'm a bird. 🦢\n```\n\n**Important caveat:**\n```javascript\nclass Flamingo extends Bird {\n  constructor() {\n    console.log(\"I'm pink.\");  // ✅ OK (no 'this')\n    // this.color = 'pink';    // ❌ Error! Can't use 'this'\n    super();                   // Now 'this' exists\n    this.color = 'pink';       // ✅ OK\n  }\n}\n```\n\n**Memory trick:** Code before super() runs first, but can't use 'this' until after super()!",
    tags: ['javascript', 'quiz', 'super', 'inheritance', 'classes'],
  },

{
    id: 'js-149',
    question: "📝 What's the output?\n\n```javascript\nclass Calc {\n  constructor() {\n    this.count = 0;\n  }\n\n  increase() {\n    this.count++;\n  }\n}\n\nconst calc = new Calc();\nnew Calc().increase();\n\nconsole.log(calc.count);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          '0',
          '1',
          'undefined',
          'ReferenceError'
    ],
    correctAnswer: 0,
    explanation: "**Each 'new' creates a separate instance** - modifying one instance doesn't affect others!\n\n**Think of instances like separate copies of a template** - changing one copy doesn't change other copies!\n\n**What happens:**\n```javascript\n// 1. Create first instance\nconst calc = new Calc();\n// calc → { count: 0 }\n\n// 2. Create DIFFERENT instance and call increase\nnew Calc().increase();\n// Creates → { count: 0 }\n// Increases → { count: 1 }\n// But this is a DIFFERENT object!\n// No reference to it, gets garbage collected\n\n// 3. Check original instance\nconsole.log(calc.count);  // 0 ✅\n// calc was never modified!\n```\n\n**Visual:**\n```javascript\ncalc                 new Calc()\n{ count: 0 }         { count: 0 } → increase() → { count: 1 }\n    ↑                                                  ↑\n    |                                                  |\nUntouched                                         Lost (no ref)\n```\n\n**Compare with shared prototype:**\n```javascript\n// Instance properties - NOT shared ❌\nconst c1 = new Calc();\nconst c2 = new Calc();\nc1.count = 5;\nc2.count;  // 0 (separate instances)\n\n// Prototype properties - shared ✅\nCalc.prototype.shared = 100;\nc1.shared;  // 100\nc2.shared;  // 100\n```\n\n**Memory trick:** new = new instance = separate object = independent state!",
    tags: ['javascript', 'quiz', 'classes', 'instances'],
  }
];
