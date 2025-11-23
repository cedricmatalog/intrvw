import { QuizQuestion } from '../../types/quiz';

export const operatorsQuizzes: QuizQuestion[] = [
{
    id: 'js-006',
    question: "📝 What's the output?\n\n```javascript\nlet number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "1 1 2",
          "1 2 2",
          "0 2 2",
          "0 1 2"
    ],
    correctAnswer: 2,
    explanation: "The **postfix** unary operator `++`:\n\n1. Returns the value (this returns `0`)\n2. Increments the value (number is now `1`)\n\nThe **prefix** unary operator `++`:\n\n1. Increments the value (number is now `2`)\n2. Returns the value (this returns `2`)\n\nThis returns `0 2 2`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-007',
    question: "📤 What does this return?\n\n```javascript\n[...\"Lydia\"];\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "[\"L\", \"y\", \"d\", \"i\", \"a\"]",
          "[\"Lydia\"]",
          "[[], \"Lydia\"]",
          "[[\"L\", \"y\", \"d\", \"i\", \"a\"]]"
    ],
    correctAnswer: 0,
    explanation: "A string is an iterable. The spread operator maps every character of an iterable to one element.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-008',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(3 + 4 + \"5\");\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "\"345\"",
          "\"75\"",
          "12",
          "\"12\""
    ],
    correctAnswer: 1,
    explanation: "Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.\n\n`3 + 4` gets evaluated first. This results in the number `7`.\n\n`7 + '5'` results in `\"75\"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `\"7\" + \"5\"` results in `\"75\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-014',
    question: "🖥️ What's the output?\n\n```javascript\nconst user = { name: \"Lydia\", age: 21 };\nconst admin = { admin: true, ...user };\n\nconsole.log(admin);\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "{ admin: true, user: { name: \"Lydia\", age: 21 } }",
          "{ admin: true, name: \"Lydia\", age: 21 }",
          "{ admin: true, user: [\"Lydia\", 21] }",
          "{ admin: true }"
    ],
    correctAnswer: 1,
    explanation: "It's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: \"Lydia\", age: 21 }`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-019',
    question: "🔤 Which of the following options will return `6`?\n\n```javascript\nfunction sumValues(x, y, z) {\n  return x + y + z;\n}\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "sumValues([...1, 2, 3])",
          "sumValues([...[1, 2, 3]])",
          "sumValues(...[1, 2, 3])",
          "sumValues([1, 2, 3])"
    ],
    correctAnswer: 2,
    explanation: "With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-104',
    question: "📝 What's the output?\n\n```javascript\nfunction getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "\"number\"",
          "\"array\"",
          "\"object\"",
          "\"NaN\""
    ],
    correctAnswer: 2,
    explanation: "The rest parameter (`...args`) lets us \"collect\" all remaining arguments into an array. An array is an object, so `typeof args` returns `\"object\"`",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-118',
    question: "🖥️ What's the output?\n\n```javascript\nfunction getItems(fruitList, ...args, favoriteFruit) {\n  return [...fruitList, ...args, favoriteFruit]\n}\n\ngetItems([\"banana\", \"apple\"], \"pear\", \"orange\")\n```",
    category: 'javascript',
    subcategory: 'operators',
    difficulty: 'medium',
    options: [
          "[\"banana\", \"apple\", \"pear\", \"orange\"]",
          "[[\"banana\", \"apple\"], \"pear\", \"orange\"]",
          "[\"banana\", \"apple\", [\"pear\"], \"orange\"]",
          "SyntaxError"
    ],
    correctAnswer: 3,
    explanation: "`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.\n\n```javascript\nfunction getItems(fruitList, favoriteFruit, ...args) {\n  return [...fruitList, ...args, favoriteFruit];\n}\n\ngetItems([\"banana\", \"apple\"], \"pear\", \"orange\");\n```\n\nThe above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`",
    tags: ["javascript","quiz"],
  }
];
