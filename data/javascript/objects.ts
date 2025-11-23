import { QuizQuestion } from '../../types/quiz';

export const objectsQuizzes: QuizQuestion[] = [
{
    id: 'js-056',
    question: "📝 What's the output?\n\n```javascript\nconst config = {\n  languages: [],\n  set language(lang) {\n    return this.languages.push(lang);\n  },\n};\n\nconsole.log(config.language);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "function language(lang) { this.languages.push(lang }",
          "0",
          "[]",
          "undefined"
    ],
    correctAnswer: 3,
    explanation: "The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-090',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n};\n\nconst changeAge = (x = { ...person }) => (x.age += 1);\nconst changeAgeAndName = (x = { ...person }) => {\n  x.age += 1;\n  x.name = \"Sarah\";\n};\n\nchangeAge(person);\nchangeAgeAndName();\n\nconsole.log(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "{name: \"Sarah\", age: 22}",
          "{name: \"Sarah\", age: 23}",
          "{name: \"Lydia\", age: 22}",
          "{name: \"Lydia\", age: 23}"
    ],
    correctAnswer: 2,
    explanation: "Both the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object.\n\nFirst, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: \"Lydia\", age: 22 }`.\n\nThen, we invoke the `changeAgeAndName` function, however we don't pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it's a new object, it doesn't affect the values of the properties on the `person` object. `person` is still equal to `{ name: \"Lydia\", age: 22 }`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-097',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = { name: \"Lydia\" };\n\nObject.defineProperty(person, \"age\", { value: 21 });\n\nconsole.log(person);\nconsole.log(Object.keys(person));\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "{ name: \"Lydia\", age: 21 }, [\"name\", \"age\"]",
          "{ name: \"Lydia\", age: 21 }, [\"name\"]",
          "{ name: \"Lydia\"}, [\"name\", \"age\"]",
          "{ name: \"Lydia\"}, [\"age\"]"
    ],
    correctAnswer: 1,
    explanation: "With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `\"name\"`.\n\nProperties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-098',
    question: "📝 What's the output?\n\n```javascript\nconst box = { x: 10, y: 20 };\n\nObject.freeze(box);\n\nconst shape = box;\nshape.x = 100;\n\nconsole.log(shape);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "{ x: 100, y: 20 }",
          "{ x: 10, y: 20 }",
          "{ x: 100 }",
          "ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).\n\nWhen we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` would return true, since the variable `shape` has a reference to a frozen object.\n\nSince `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-099',
    question: "📦 Which of the following will modify the `person` object?\n\n```javascript\nconst person = { name: \"Lydia Hallie\" };\n\nObject.seal(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "person.name = \"Evan Bacon\"",
          "person.age = 21",
          "delete person.name",
          "Object.assign(person, { age: 21 })"
    ],
    correctAnswer: 0,
    explanation: "With `Object.seal` we can prevent new properties from being _added_, or existing properties to be _removed_.\n\nHowever, you can still modify the value of existing properties.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-100',
    question: "📦 Which of the following will modify the `person` object?\n\n```javascript\nconst person = {\n  name: \"Lydia Hallie\",\n  address: {\n    street: \"100 Main St\",\n  },\n};\n\nObject.freeze(person);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "person.name = \"Evan Bacon\"",
          "delete person.address",
          "person.address.street = \"101 Main St\"",
          "person.pet = { name: \"Mara\" }"
    ],
    correctAnswer: 2,
    explanation: "The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.\n\nHowever, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-113',
    question: "🖥️ What's the output?\n\n```javascript\nconst spookyItems = [\"👻\", \"🎃\", \"🕸\"];\n({ item: spookyItems[3] } = { item: \"💀\" });\n\nconsole.log(spookyItems);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "[\"👻\", \"🎃\", \"🕸\"]",
          "[\"👻\", \"🎃\", \"🕸\", \"💀\"]",
          "[\"👻\", \"🎃\", \"🕸\", { item: \"💀\" }]",
          "[\"👻\", \"🎃\", \"🕸\", \"[object Object]\"]"
    ],
    correctAnswer: 1,
    explanation: "By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value \"💀\" to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the \"💀\" to it. When logging `spookyItems`, `[\"👻\", \"🎃\", \"🕸\", \"💀\"]` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-152',
    question: "🖥️ What is the output?\n\n```javascript\nvar status = \"😎\";\n\nsetTimeout(() => {\n  const status = \"😍\";\n\n  const data = {\n    status: \"🥑\",\n    getStatus() {\n      return this.status;\n    },\n  };\n\n  console.log(data.getStatus());\n  console.log(data.getStatus.call(this));\n}, 0);\n```",
    category: 'javascript',
    subcategory: 'objects',
    difficulty: 'medium',
    options: [
          "\"🥑\" and \"😍\"",
          "\"🥑\" and \"😎\"",
          "\"😍\" and \"😎\"",
          "\"😎\" and \"😎\""
    ],
    correctAnswer: 1,
    explanation: "The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `\"🥑\"`.\n\nWith the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `\"😎\"`. When logging `this.status`, `\"😎\"` gets logged.",
    tags: ["javascript","quiz"],
  }
];
