import { QuizQuestion } from '../../types/quiz';

export const advanced_operatorsQuizzes: QuizQuestion[] = [
{
    id: 'js-010',
    question: "📝 What's the output?\n\n```javascript\nlet num = 10;\n\nconst increaseNumber = () => num++;\nconst increasePassedNumber = (number) => number++;\n\nconst num1 = increaseNumber();\nconst num2 = increasePassedNumber(num1);\n\nconsole.log(num1);\nconsole.log(num2);\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
          "10, 10",
          "10, 11",
          "11, 11",
          "11, 12"
    ],
    correctAnswer: 0,
    explanation: "The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterward.\n\n`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`). Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-055',
    question: "🖥️ What's the output?\n\n```javascript\nconst person = {\n  firstName: \"Lydia\",\n  lastName: \"Hallie\",\n  pet: {\n    name: \"Mara\",\n    breed: \"Dutch Tulip Hound\",\n  },\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n};\n\nconsole.log(person.pet?.name);\nconsole.log(person.pet?.family?.name);\nconsole.log(person.getFullName?.());\nconsole.log(member.getLastName?.());\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
          "undefined undefined undefined undefined",
          "Mara undefined Lydia Hallie ReferenceError",
          "Mara null Lydia Hallie null",
          "null ReferenceError null ReferenceError"
    ],
    correctAnswer: 1,
    explanation: "With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.\n\n`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`.\n`person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`.\n`person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`.\n`member.getLastName?.()`: variable `member` is non-existent therefore a `ReferenceError` gets thrown!",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-178',
    question: "📝 What's the output?\n\n```javascript\nconst foo = null ?? 'default';\nconst bar = 0 ?? 'default';\nconst baz = '' ?? 'default';\n\nconsole.log(foo, bar, baz);\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
      'default default default',
      'default 0 empty-string',
      'null 0 empty-string',
      'default default empty-string',
    ],
    correctAnswer: 1,
    explanation: "The nullish coalescing operator (??) returns the right operand only when the left operand is `null` or `undefined`. Unlike ||, it doesn't treat 0, '', false as falsy values. So `null ?? 'default'` returns 'default', but `0 ?? 'default'` returns 0, and `'' ?? 'default'` returns ''.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-179',
    question: "📝 What's the difference between ?? and ||?\n\n```javascript\nconst a = 0 || 'fallback';\nconst b = 0 ?? 'fallback';\n\nconsole.log(a);\nconsole.log(b);\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
      'fallback and fallback',
      'fallback and 0',
      '0 and fallback',
      '0 and 0',
    ],
    correctAnswer: 1,
    explanation: "The || operator returns the right operand for any falsy value (0, '', false, null, undefined, NaN). The ?? operator only returns the right operand for null or undefined. Since 0 is falsy but not nullish, `0 || 'fallback'` returns 'fallback', while `0 ?? 'fallback'` returns 0.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-191',
    question: "📝 What's the output?\n\n```javascript\nconst user = {\n  name: 'John',\n  address: {\n    street: 'Main St'\n  }\n};\n\nconsole.log(user.address?.street);\nconsole.log(user.phone?.number);\nconsole.log(user.getInfo?.());\n```",
    category: 'javascript',
    subcategory: 'advanced-operators',
    difficulty: 'medium',
    options: [
      "'Main St' undefined undefined",
      "'Main St' null null",
      "'Main St' Error Error",
      "Error",
    ],
    correctAnswer: 0,
    explanation: "Optional chaining (?.) safely accesses nested properties. `user.address?.street` returns 'Main St'. `user.phone?.number` returns undefined (not an error) because phone doesn't exist. `user.getInfo?.()` returns undefined because getInfo doesn't exist, avoiding a 'not a function' error.",
    tags: ['javascript', 'quiz'],
  },
];
