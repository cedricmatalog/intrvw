import { QuizQuestion } from '../../types/quiz';

export const string_methodsQuizzes: QuizQuestion[] = [
{
    id: 'js-009',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(\"🥑\" + \"💻\");\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'medium',
    options: [
          "\"🥑💻\"",
          "257548",
          "A string containing their code points",
          "Error"
    ],
    correctAnswer: 0,
    explanation: "With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `\"🥑\"` with the string `\"💻\"`, resulting in `\"🥑💻\"`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-066',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(String.raw`Hello\\nworld`);\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'medium',
    options: [
          "Hello world!",
          "Hello <br />&nbsp; &nbsp; &nbsp;world",
          "Hello\\nworld",
          "Hello\\n <br /> &nbsp; &nbsp; &nbsp;world"
    ],
    correctAnswer: 2,
    explanation: "`String.raw` returns a string where the escapes (`\\n`, `\\v`, `\\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:\n\n`` const path = `C:\\Documents\\Projects\\table.html` ``\n\nWhich would result in:\n\n`\"C:DocumentsProjects able.html\"`\n\nWith `String.raw`, it would simply ignore the escape and print:\n\n`C:\\Documents\\Projects\\table.html`\n\nIn this case, the string is `Hello\\nworld`, which gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-067',
    question: "📝 What's its value?\n\n```javascript\nconsole.log(\"❤️\" === \"❤️\");\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'medium',
    options: [
          "true",
          "false",
          "undefined",
          "SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "Under the hood, emojis are unicodes. The unicodes for the heart emoji is `\"U+2764 U+FE0F\"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-103',
    question: "📝 What's the output?\n\n```javascript\nconsole.log(\"I want pizza\"[0]);\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'medium',
    options: [
          "\"\"\"",
          "\"I\"",
          "SyntaxError",
          "undefined"
    ],
    correctAnswer: 1,
    explanation: "In order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character `\"I'`, which gets logged.\n\nNote that this method is not supported in IE7 and below. In that case, use `.charAt()`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-117',
    question: "🖥️ What's the output?\n\n```javascript\nconst name = \"Lydia Hallie\";\nconsole.log(name.padStart(13));\nconsole.log(name.padStart(2));\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'medium',
    options: [
          "\"Lydia Hallie\", \"Lydia Hallie\"",
          "\" Lydia Hallie\", \" Lydia Hallie\" (\"[13x whitespace]Lydia Hallie\", \"[2x whitespace]Lydia Hallie\")",
          "\" Lydia Hallie\", \"Lydia Hallie\" (\"[1x whitespace]Lydia Hallie\", \"Lydia Hallie\")",
          "\"Lydia Hallie\", \"Lyd\","
    ],
    correctAnswer: 2,
    explanation: "With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `\"Lydia Hallie\"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.\n\nIf the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-185',
    question: "📝 What's the output?\n\n```javascript\nconst str = 'hello';\n\nconsole.log(str.startsWith('hel'));\nconsole.log(str.endsWith('lo'));\nconsole.log(str.startsWith('llo', 2));\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'easy',
    options: [
          "true true true",
          "true true false",
          "true false true",
          "false true true"
    ],
    correctAnswer: 0,
    explanation: "`startsWith('hel')` checks if the string starts with 'hel', which is true. `endsWith('lo')` checks if it ends with 'lo', which is true. `startsWith('llo', 2)` checks if the string starting from index 2 ('llo') starts with 'llo', which is also true.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-187',
    question: "📝 What's the output?\n\n```javascript\nconst str = 'ha';\n\nconsole.log(str.repeat(3));\nconsole.log(str.repeat(0));\nconsole.log(str.repeat(1));\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'easy',
    options: [
          "'hahaha' '' 'ha'",
          "'ha ha ha' 'ha' 'ha'",
          "'hahaha' 'ha' 'ha'",
          "Error"
    ],
    correctAnswer: 0,
    explanation: "`repeat(n)` returns a new string with n copies of the original string. `'ha'.repeat(3)` returns 'hahaha'. `repeat(0)` returns an empty string ''. `repeat(1)` returns 'ha' (the original string once).",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-188',
    question: "📝 What's the output?\n\n```javascript\nconst num = 5;\n\nconsole.log(num.toString().padStart(3, '0'));\nconsole.log('Hello'.padEnd(10, '!'));\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'medium',
    options: [
          "'005' 'Hello!!!!!'",
          "'500' 'Hello!!!!!'",
          "'005' 'Hello!'",
          "'5' 'Hello'"
    ],
    correctAnswer: 0,
    explanation: "`padStart(length, fillString)` pads the string from the start until it reaches the specified length. '5'.padStart(3, '0') returns '005'. `padEnd(length, fillString)` pads from the end. 'Hello'.padEnd(10, '!') returns 'Hello!!!!!' (5 exclamation marks to reach length 10).",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-115',
    question: "📝 What's the output?\n\n```javascript\nfunction getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = \"Lydia\";\nconst age = 21;\n\ngetPersonInfo`${person} is ${age} years old`;\n```",
    category: 'javascript',
    subcategory: 'string-methods',
    difficulty: 'medium',
    options: [
          "\"Lydia\" 21 [\"\", \" is \", \" years old\"]",
          "[\"\", \" is \", \" years old\"] \"Lydia\" 21",
          "\"Lydia\" [\"\", \" is \", \" years old\"] 21",
          "SyntaxError"
    ],
    correctAnswer: 1,
    explanation: "If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!",
    tags: ["javascript","quiz"],
  },
];
