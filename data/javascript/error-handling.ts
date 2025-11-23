import { QuizQuestion } from '../../types/quiz';

export const error_handlingQuizzes: QuizQuestion[] = [
{
    id: 'js-043',
    question: "📝 What's the output?\n\n```javascript\n(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();\n```",
    category: 'javascript',
    subcategory: 'error-handling',
    difficulty: 'medium',
    options: [
          "1 undefined 2",
          "undefined undefined undefined",
          "1 1 2",
          "1 undefined undefined"
    ],
    correctAnswer: 0,
    explanation: "The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.\n\nLater, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.\n\nOutside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-080',
    question: "🖥️ What's the output?\n\n```javascript\nfunction greeting() {\n  throw \"Hello world!\";\n}\n\nfunction sayHi() {\n  try {\n    const data = greeting();\n    console.log(\"It worked!\", data);\n  } catch (e) {\n    console.log(\"Oh no an error:\", e);\n  }\n}\n\nsayHi();\n```",
    category: 'javascript',
    subcategory: 'error-handling',
    difficulty: 'medium',
    options: [
          "It worked! Hello world!",
          "Oh no an error: undefined",
          "SyntaxError: can only throw Error objects",
          "Oh no an error: Hello world!"
    ],
    correctAnswer: 3,
    explanation: "With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, a boolean or an object. In this case, our exception is the string `'Hello world!'`.\n\nWith the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world!'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world!'`.",
    tags: ["javascript","quiz"],
  },
];
