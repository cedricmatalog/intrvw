import { QuizQuestion } from '../../types/quiz';

export const event_loopQuizzes: QuizQuestion[] = [
{
    id: 'js-150',
    question: "📝 What's the output?\n\n```javascript\nconst foo = () => console.log(\"First\");\nconst bar = () => setTimeout(() => console.log(\"Second\"));\nconst baz = () => console.log(\"Third\");\n\nbar();\nfoo();\nbaz();\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'medium',
    options: [
          "First Second Third",
          "First Third Second",
          "Second First Third",
          "Second Third First"
    ],
    correctAnswer: 1,
    explanation: "We have a `setTimeout` function and invoked it first. Yet, it was logged last.\n\nThis is because in browsers, we don't just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM.\n\nAfter the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack.\n\nNow, `foo` gets invoked, and `\"First\"` is being logged.\n\n`foo` is popped off the stack, and `baz` gets invoked. `\"Third\"` gets logged.\n\nThe WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the _queue_.\n\nThis is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.\n\n`bar` gets invoked, `\"Second\"` gets logged, and it's popped off the stack.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-196',
    question: "📝 What's the output?\n\n```javascript\nconsole.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nPromise.resolve().then(() => console.log('3'));\n\nconsole.log('4');\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'hard',
    options: [
      "1 4 2 3",
      "1 4 3 2",
      "1 2 3 4",
      "1 3 4 2",
    ],
    correctAnswer: 1,
    explanation: "Synchronous code runs first: '1' and '4'. Then microtasks (Promises) run before macrotasks (setTimeout). Promise callbacks go in the microtask queue, setTimeout goes in the macrotask queue. So the order is: 1, 4, 3 (microtask), 2 (macrotask).",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-197',
    question: "📝 What's the order of execution?\n\n```javascript\nsetTimeout(() => console.log('A'), 0);\n\nPromise.resolve()\n  .then(() => console.log('B'))\n  .then(() => console.log('C'));\n\nsetTimeout(() => console.log('D'), 0);\n\nconsole.log('E');\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'hard',
    options: [
      "E B C A D",
      "A B C D E",
      "E A D B C",
      "E A B C D",
    ],
    correctAnswer: 0,
    explanation: "Execution order: 1) Synchronous code runs first ('E'). 2) Microtasks (Promise callbacks) run next ('B', then 'C'). 3) Macrotasks (setTimeout callbacks) run last ('A', then 'D'). The event loop prioritizes microtasks over macrotasks.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-198',
    question: "📝 What happens when you have nested setTimeout calls?\n\n```javascript\nsetTimeout(() => {\n  console.log('1');\n  setTimeout(() => console.log('2'), 0);\n}, 0);\n\nsetTimeout(() => console.log('3'), 0);\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'medium',
    options: [
      "1 2 3",
      "1 3 2",
      "3 1 2",
      "Order is unpredictable",
    ],
    correctAnswer: 1,
    explanation: "The first two setTimeout callbacks are added to the macrotask queue together. '1' executes first, logging '1'. Then '3' executes (from the second setTimeout). Finally, the nested setTimeout callback (logging '2') is added to the queue and executes last.",
    tags: ['javascript', 'quiz'],
  }
];
