import { QuizQuestion } from '../../types/quiz';

export const referencesQuizzes: QuizQuestion[] = [
{
    id: 'js-071',
    question: "🖥️ What's the output?\n\n```javascript\nlet c = { greeting: \"Hey!\" };\nlet d;\n\nd = c;\nc.greeting = \"Hello\";\nconsole.log(d.greeting);\n```",
    category: 'javascript',
    subcategory: 'references',
    difficulty: 'medium',
    options: [
          "Hello",
          "Hey!",
          "undefined",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "In JavaScript, all objects interact by _reference_ when setting them equal to each other.\n\nFirst, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.\n\nWhen you change one object, you change all of them.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-083',
    question: "🖥️ What is the output?\n\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n};\n\nlet city = person.city;\ncity = \"Amsterdam\";\n\nconsole.log(person);\n```",
    category: 'javascript',
    subcategory: 'references',
    difficulty: 'medium',
    options: [
          "{ name: \"Lydia\", age: 21 }",
          "{ name: \"Lydia\", age: 21, city: \"Amsterdam\" }",
          "{ name: \"Lydia\", age: 21, city: undefined }",
          "\"Amsterdam\""
    ],
    correctAnswer: 0,
    explanation: "We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`.\n\nNote that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.\n\nThen, we set `city` equal to the string `\"Amsterdam\"`. This doesn't change the person object: there is no reference to that object.\n\nWhen logging the `person` object, the unmodified object gets returned.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-105',
    question: "🖥️ What's the output?\n\n```javascript\nlet person = { name: \"Lydia\" };\nconst members = [person];\nperson = null;\n\nconsole.log(members);\n```",
    category: 'javascript',
    subcategory: 'references',
    difficulty: 'medium',
    options: [
          "null",
          "[null]",
          "[{}]",
          "[{ name: \"Lydia\" }]"
    ],
    correctAnswer: 3,
    explanation: "First, we declare a variable `person` with the value of an object that has a `name` property.\n\nThen, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don't have the _same_ reference!)\n\nThen, we set the variable `person` equal to `null`.\n\nWe are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-111',
    question: "🖥️ What's the output?\n\n```javascript\nconst food = [\"🍕\", \"🍫\", \"🥑\", \"🍔\"];\nconst info = { favoriteFood: food[0] };\n\ninfo.favoriteFood = \"🍝\";\n\nconsole.log(food);\n```",
    category: 'javascript',
    subcategory: 'references',
    difficulty: 'medium',
    options: [
          "['🍕', '🍫', '🥑', '🍔']",
          "['🍝', '🍫', '🥑', '🍔']",
          "['🍝', '🍕', '🍫', '🥑', '🍔']",
          "ReferenceError"
    ],
    correctAnswer: 0,
    explanation: "We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types don't interact by reference.\n\nIn JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)\n\nThen, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`.",
    tags: ["javascript","quiz"],
  },
];
