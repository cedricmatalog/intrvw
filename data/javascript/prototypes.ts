import { QuizQuestion } from '../../types/quiz';

export const prototypesQuizzes: QuizQuestion[] = [
{
    id: 'js-102',
    question: "📦 All object have prototypes.",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          "true",
          "false",
          "only if created with 'new'",
          "only in ES6+"
    ],
    correctAnswer: 1,
    explanation: "The answer is **false** because `Object.prototype` itself doesn't have a prototype - its prototype is `null`. This is the top of the prototype chain. You can verify this: `Object.getPrototypeOf(Object.prototype) === null` returns `true`. Additionally, you can create objects without prototypes using `Object.create(null)`, which is useful for creating true dictionaries/hash maps without inherited properties.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-139',
    question: "🖥️ What's the output?\n\n```javascript\nfunction Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person(\"Lydia\", \"Hallie\");\nPerson.getFullName = function () {\n  return `${this.firstName} ${this.lastName}`;\n};\n\nconsole.log(member.getFullName());\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          "TypeError",
          "SyntaxError",
          "Lydia Hallie",
          "undefined undefined"
    ],
    correctAnswer: 0,
    explanation: "In JavaScript, functions are objects, and therefore, the method `getFullName` gets added to the constructor function object itself. For that reason, we can call `Person.getFullName()`, but `member.getFullName` throws a `TypeError`.\n\nIf you want a method to be available to all object instances, you have to add it to the prototype property:\n\n```js\nPerson.prototype.getFullName = function () {\n  return `${this.firstName} ${this.lastName}`;\n};\n```",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-141',
    question: "📝 What's the output?\n\n```javascript\nclass Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nDog.prototype.bark = function () {\n  console.log(`Woof I am ${this.name}`);\n};\n\nconst pet = new Dog(\"Mara\");\n\npet.bark();\n\ndelete Dog.prototype.bark;\n\npet.bark();\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          "\"Woof I am Mara\", TypeError",
          "\"Woof I am Mara\", \"Woof I am Mara\"",
          "\"Woof I am Mara\", undefined",
          "TypeError, TypeError"
    ],
    correctAnswer: 0,
    explanation: "We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.\n\nWhen we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-144',
    question: "🖥️ What's the output?\n\n```javascript\nfunction giveLydiaPizza() {\n  return \"Here is pizza!\";\n}\n\nconst giveLydiaChocolate = () =>\n  \"Here's chocolate... now go hit the gym already.\";\n\nconsole.log(giveLydiaPizza.prototype);\nconsole.log(giveLydiaChocolate.prototype);\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
          "{ constructor: ...} { constructor: ...}",
          "{} { constructor: ...}",
          "{ constructor: ...} {}",
          "{ constructor: ...} undefined"
    ],
    correctAnswer: 3,
    explanation: "Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.",
    tags: ["javascript","quiz"],
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
      "Error",
    ],
    correctAnswer: 1,
    explanation: "`Object.create(person)` creates a new object with `person` as its prototype. `john.name` is 'John' (own property). `john.greet()` returns 'Hello' (inherited from prototype). `hasOwnProperty('greet')` returns false because `greet` is on the prototype, not john's own property.",
    tags: ['javascript', 'quiz'],
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
      "Error",
    ],
    correctAnswer: 1,
    explanation: "`speak()` works because it's found on the prototype chain. `hasOwnProperty('speak')` returns false because `speak` is on the prototype, not directly on `dog`. `hasOwnProperty('name')` returns true because `name` is set directly on the instance by the constructor.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-208',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [1, 2, 3];\nconsole.log(arr.__proto__ === Array.prototype);\nconsole.log(Array.prototype.__proto__ === Object.prototype);\n```",
    category: 'javascript',
    subcategory: 'prototypes',
    difficulty: 'medium',
    options: [
      "true true",
      "true false",
      "false true",
      "false false",
    ],
    correctAnswer: 0,
    explanation: "Arrays inherit from `Array.prototype`, so `arr.__proto__ === Array.prototype` is true. `Array.prototype` itself is an object that inherits from `Object.prototype`, so the second comparison is also true. This is the prototype chain: arr → Array.prototype → Object.prototype → null.",
    tags: ['javascript', 'quiz'],
  }
];
