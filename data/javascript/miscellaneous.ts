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

{
    id: 'js-060',
    question: "👈 What are the three phases of event propagation?",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "Target > Capturing > Bubbling",
          "Bubbling > Target > Capturing",
          "Target > Bubbling > Capturing",
          "Capturing > Target > Bubbling"
    ],
    correctAnswer: 3,
    explanation: "**Event propagation flows like a dive and resurface** - down to the target, then back up!\n\n**The three phases:**\n```javascript\n1. Capturing: document → down to target (going down)\n2. Target: reaches the actual clicked element\n3. Bubbling: target → back up to document (coming up)\n```\n\n**Visual example:**\n```javascript\n<div id=\"grandpa\">       // Phase 1: Capturing goes through here first ↓\n  <div id=\"parent\">      // Phase 1: Then here ↓\n    <button>Click</button> // Phase 2: TARGET reached!\n  </div>                   // Phase 3: Bubbling comes back ↑\n</div>                      // Phase 3: Finally here ↑\n```\n\n**Timeline when clicking button:**\n```\nCapturing Phase (1):\ndocument → grandpa → parent → button\n\nTarget Phase (2):\nbutton (the element you clicked)\n\nBubbling Phase (3):\nbutton → parent → grandpa → document\n```\n\n**How to listen for each phase:**\n```javascript\n// Bubbling (default, 3rd param = false or omitted)\nelement.addEventListener('click', handler); // Bubbling phase\n\n// Capturing (3rd param = true)\nelement.addEventListener('click', handler, true); // Capturing phase\n```\n\n**Memory trick:** **Capturing** dives down, hits the **Target**, then **Bubbles** back up!",
    tags: ["javascript","quiz","events"],
  },

{
    id: 'js-062',
    question: "🔤 How long is cool_secret accessible?\n\n```javascript\nsessionStorage.setItem(\"cool_secret\", 123);\n```",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "Forever, the data doesn't get lost.",
          "When the user closes the tab.",
          "When the user closes the entire browser, not only the tab.",
          "When the user shuts off their computer."
    ],
    correctAnswer: 1,
    explanation: "**`sessionStorage` = session only, dies with the tab!** Like a sticky note on your desk that gets thrown away at the end of the workday.\n\n**What happens:**\n```javascript\nsessionStorage.setItem(\"cool_secret\", 123);\n↓\nStored for THIS TAB'S SESSION only\n↓\nClose tab → Data gone forever!\n```\n\n**Storage lifespans:**\n```javascript\n// sessionStorage: Tab lifetime\nsessionStorage.setItem(\"key\", \"value\");\n// Gone when: Tab closes\n\n// localStorage: Forever (until manually cleared)\nlocalStorage.setItem(\"key\", \"value\");\n// Gone when: localStorage.clear() or user clears browser data\n\n// Cookie: Can be configured\ndocument.cookie = \"key=value; max-age=3600\";\n// Gone when: Expires, session ends, or manually deleted\n```\n\n**Tab vs Browser:**\n```javascript\n// Open Tab A\nsessionStorage.setItem(\"data\", \"A\");\n\n// Open Tab B (new tab, same site)\nconsole.log(sessionStorage.getItem(\"data\"));  // null (different session!)\n\n// Close Tab A\n// sessionStorage from Tab A is destroyed\n\n// localStorage persists across tabs:\nlocalStorage.setItem(\"data\", \"shared\");\n// Available in ALL tabs, even after closing and reopening browser\n```\n\n**Memory trick:** **Session**Storage = lasts the **session** (tab lifetime). **Local**Storage = stored **locally** forever.",
    tags: ["javascript","quiz","web-apis"],
  },

{
    id: 'js-063',
    question: "🔒 What is the event.target when clicking the button?",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "Outer div",
          "Inner div",
          "button",
          "An array of all nested elements."
    ],
    correctAnswer: 2,
    explanation: "**`event.target` = the element you ACTUALLY clicked** - always the deepest element under your cursor!\n\n**What happens:**\n```javascript\n<div>                    // Outer\n  <div>                  // Inner\n    <button>Click</button>  // ← You click THIS\n  </div>\n</div>\n↓\nevent.target = button  // The actual element clicked\n```\n\n**The difference:**\n```javascript\n// event.target = what you clicked (doesn't change during bubbling)\n// event.currentTarget = what the listener is attached to\n\nouter.addEventListener('click', (e) => {\n  console.log(e.target);         // button (what was clicked)\n  console.log(e.currentTarget);  // outer div (where listener is)\n});\n```\n\n**Visual example:**\n```javascript\n// Click the button:\nbutton click\n  ↓\nevent.target = button (always)\n  ↓ (event bubbles up)\ninner div listener: target=button, currentTarget=inner\n  ↓\nouter div listener: target=button, currentTarget=outer\n  ↓\ndocument listener: target=button, currentTarget=document\n```\n\n**Memory trick:** `target` = what you **targeted** with your click. It never changes as the event bubbles!",
    tags: ["javascript","quiz","events"],
  },

{
    id: 'js-096',
    question: "⚡ What is the purpose of the 'use strict' directive?",
    category: 'javascript',
    subcategory: 'miscellaneous',
    difficulty: 'medium',
    options: [
          "Enables strict mode, catching common coding errors",
          "Makes code run faster",
          "Enables ES6 features",
          "Disables all warnings"
    ],
    correctAnswer: 0,
    explanation: "'use strict' enables strict mode which catches common mistakes (like using undeclared variables), prevents certain actions, and throws more exceptions. It helps write more secure and optimized code.",
    tags: ["functions","strict-mode","best-practices"],
  },
];
