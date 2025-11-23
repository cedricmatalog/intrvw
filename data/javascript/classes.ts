import { QuizQuestion } from '../../types/quiz';

export const classesQuizzes: QuizQuestion[] = [
{
    id: 'js-137',
    question: "🖥️ What's the output?\n\n```javascript\nfunction Car() {\n  this.make = \"Lamborghini\";\n  return { make: \"Maserati\" };\n}\n\nconst myCar = new Car();\nconsole.log(myCar.make);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "\"Lamborghini\"",
          "\"Maserati\"",
          "ReferenceError",
          "TypeError"
    ],
    correctAnswer: 1,
    explanation: "When a constructor function is called with the `new` keyword, it creates an object and sets the `this` keyword to refer to that object. By default, if the constructor function doesn't explicitly return anything, it will return the newly created object.\n\nIn this case, the constructor function `Car` explicitly returns a new object with `make` set to `\"Maserati\"`, which overrides the default behavior. Therefore, when `new Car()` is called, the _returned_ object is assigned to `myCar`, resulting in the output being `\"Maserati\"` when `myCar.make` is accessed.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-138',
    question: "🖥️ What's the output?\n\n```javascript\nclass Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = \"green\" } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: \"purple\" });\nconsole.log(freddie.colorChange(\"orange\"));\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "orange",
          "purple",
          "green",
          "TypeError"
    ],
    correctAnswer: 3,
    explanation: "The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since `freddie` is an instance of class Chameleon, the function cannot be called upon it. A `TypeError` is thrown.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-142',
    question: "🏛️ With which constructor can we successfully extend the `Dog` class?\n\n```javascript\nclass Dog {\n  constructor(name) {\n    this.name = name;\n  }\n};\n\nclass Labrador extends Dog {\n  // 1\n  constructor(name, size) {\n    this.size = size;\n  }\n  // 2\n  constructor(name, size) {\n    super(name);\n    this.size = size;\n  }\n  // 3\n  constructor(size) {\n    super(name);\n    this.size = size;\n  }\n  // 4\n  constructor(name, size) {\n    this.name = name;\n    this.size = size;\n  }\n\n};\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "1",
          "2",
          "3",
          "4"
    ],
    correctAnswer: 1,
    explanation: "In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.\n\nWith the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`.\n\nThe `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly using constructor 2.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-143',
    question: "🖥️ What's the output?\n\n```javascript\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst member = new Person(\"John\");\nconsole.log(typeof member);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "\"class\"",
          "\"function\"",
          "\"object\"",
          "\"string\""
    ],
    correctAnswer: 2,
    explanation: "Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:\n\n```javascript\nfunction Person(name) {\n  this.name = name;\n}\n```\n\nCalling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `\"object\"` for an instance. `typeof member` returns `\"object\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-145',
    question: "🖥️ What's the output?\n\n```javascript\nclass Person {\n  constructor() {\n    this.name = \"Lydia\";\n  }\n}\n\nPerson = class AnotherPerson {\n  constructor() {\n    this.name = \"Sarah\";\n  }\n};\n\nconst member = new Person();\nconsole.log(member.name);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "\"Lydia\"",
          "\"Sarah\"",
          "Error: cannot redeclare Person",
          "SyntaxError"
    ],
    correctAnswer: 1,
    explanation: "We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `\"Sarah\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-146',
    question: "📝 What's the output?\n\n```javascript\nclass Counter {\n  constructor() {\n    this.count = 0;\n  }\n\n  increment() {\n    this.count++;\n  }\n}\n\nconst counterOne = new Counter();\ncounterOne.increment();\ncounterOne.increment();\n\nconst counterTwo = counterOne;\ncounterTwo.increment();\n\nconsole.log(counterOne.count);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "0",
          "1",
          "2",
          "3"
    ],
    correctAnswer: 3,
    explanation: "`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.\n\nThen, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.\n\nWe invoke `counterTwo.increment()`, which sets `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-147',
    question: "📝 What's the output?\n\n```javascript\nclass Counter {\n  #number = 10;\n\n  increment() {\n    this.#number++;\n  }\n\n  getNum() {\n    return this.#number;\n  }\n}\n\nconst counter = new Counter();\ncounter.increment();\n\nconsole.log(counter.#number);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "10",
          "11",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 3,
    explanation: "In ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot access it outside the `Counter` class!",
    tags: ["javascript","quiz"],
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
          "Nothing, we didn't call any method"
    ],
    correctAnswer: 1,
    explanation: "We create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `\"I'm pink. 🌸\"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. The constructor in `Bird` gets called, and logs `\"I'm a bird. 🦢\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-149',
    question: "📝 What's the output?\n\n```javascript\nclass Calc {\n  constructor() {\n    this.count = 0;\n  }\n\n  increase() {\n    this.count++;\n  }\n}\n\nconst calc = new Calc();\nnew Calc().increase();\n\nconsole.log(calc.count);\n```",
    category: 'javascript',
    subcategory: 'classes',
    difficulty: 'medium',
    options: [
          "0",
          "1",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "We set the variable `calc` equal to a new instance of the `Calc` class. Then, we instantiate a new instance of `Calc`, and invoke the `increase` method on this instance. Since the count property is within the constructor of the `Calc` class, the count property is not shared on the prototype of `Calc`. This means that the value of count has not been updated for the instance calc points to, count is still `0`.",
    tags: ["javascript","quiz"],
  }
];
