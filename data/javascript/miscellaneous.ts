import { QuizQuestion } from '../../types/quiz';

export const miscellaneousQuizzes: QuizQuestion[] = [
{
    id: 'js-003',
    question: "🖥️ What's the output?\n\n```javascript\nfunction sum(a, b) {\n  return a + b;\n}\n\nsum(1, \"2\");\n```",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "NaN",
          "TypeError",
          "\"12\"",
          "3"
    ],
    correctAnswer: 2,
    explanation: "JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.\n\nIn this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `\"Hello\" + \"World\"`, so what's happening here is `\"1\" + \"2\"` which returns `\"12\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-018',
    question: "🖥️ What's the value of output?\n\n```javascript\nconst set = new Set();\n\nset.add(1);\nset.add(\"Lydia\");\nset.add({ name: \"Lydia\" });\n\nfor (let item of set) {\n  console.log(item + 2);\n}\n```",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "3, NaN, NaN",
          "3, 7, NaN",
          "3, Lydia2, [object Object]2",
          "\"12\", Lydia2, [object Object]2"
    ],
    correctAnswer: 2,
    explanation: "The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.\n\nThe first one is `1`, which is a numerical value. `1 + 2` returns the number 3.\n\nHowever, the second one is a string `\"Lydia\"`. `\"Lydia\"` is a string and `2` is a number: `2` gets coerced into a string. `\"Lydia\"` and `\"2\"` get concatenated, which results in the string `\"Lydia2\"`.\n\n`{ name: \"Lydia\" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `\"[object Object]\"`. `\"[object Object]\"` concatenated with `\"2\"` becomes `\"[object Object]2\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-027',
    question: "📚 What's the value of `num`?\n\n```javascript\nconst num = parseInt(\"7*6\", 10);\n```",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "42",
          "\"42\"",
          "7",
          "NaN"
    ],
    correctAnswer: 2,
    explanation: "Only the first number in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.\n\n`*` is not a valid number. It only parses `\"7\"` into the decimal `7`. `num` now holds the value of `7`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-061',
    question: "🤝 What's the value of `sum`?\n\n```javascript\nconst sum = eval(\"10*10+5\");\n```",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "105",
          "\"105\"",
          "TypeError",
          "\"10*10+5\""
    ],
    correctAnswer: 0,
    explanation: "`eval` evaluates code that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-112',
    question: "🔤 What does this method do?\n\n```javascript\nJSON.parse();\n```",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "Parses JSON to a JavaScript value",
          "Parses a JavaScript object to JSON",
          "Parses any JavaScript value to JSON",
          "Parses JSON to a JavaScript object only"
    ],
    correctAnswer: 0,
    explanation: "With the `JSON.parse()` method, we can parse JSON string to a JavaScript value.\n\n```javascript\n// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonNumber = JSON.stringify(4); // '4'\nJSON.parse(jsonNumber); // 4\n\n// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'\nJSON.parse(jsonArray); // [1, 2, 3]\n\n// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray = JSON.stringify({ name: \"Lydia\" }); // '{\"name\":\"Lydia\"}'\nJSON.parse(jsonArray); // { name: 'Lydia' }\n```",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-140',
    question: "🖥️ What's the output?\n\n```javascript\nString.prototype.giveLydiaPizza = () => {\n  return \"Just give Lydia pizza already!\";\n};\n\nconst name = \"Lydia\";\n\nconsole.log(name.giveLydiaPizza());\n```",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "\"Just give Lydia pizza already!\"",
          "TypeError: not a function",
          "SyntaxError",
          "undefined"
    ],
    correctAnswer: 0,
    explanation: "`String` is a built-in constructor, that we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!",
    tags: ["javascript","quiz"],
  },
];
