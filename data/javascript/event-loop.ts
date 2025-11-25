import { QuizQuestion } from '../../types/quiz';

export const event_loopQuizzes: QuizQuestion[] = [
{
    id: 'js-150',
    question: "📝 What's the output?\n\n```javascript\nconst foo = () => console.log(\"First\");\nconst bar = () => setTimeout(() => console.log(\"Second\"));\nconst baz = () => console.log(\"Third\");\n\nbar();\nfoo();\nbaz();\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'medium',
    options: [
          'First Second Third',
          'First Third Second',
          'Second First Third',
          'Second Third First'
    ],
    correctAnswer: 1,
    explanation: "**setTimeout callbacks run AFTER all synchronous code** - even with 0ms delay!\n\n**Think of setTimeout like sending a letter** - even if it's next-day delivery, it doesn't arrive until the mail runs tomorrow!\n\n**Step-by-step execution:**\n```javascript\n// 1. bar() is called\nbar();\n// Executes: setTimeout(() => console.log(\"Second\"))\n// Callback sent to Web API, setTimeout returns immediately\n// Stack is now empty, callback waiting in queue\n\n// 2. foo() is called  \nfoo();\n// Executes: console.log(\"First\")\n// Output: \"First\" ✅\n// Stack is now empty again\n\n// 3. baz() is called\nbaz();\n// Executes: console.log(\"Third\")\n// Output: \"Third\" ✅\n// Stack is now empty\n\n// 4. Event loop checks: stack empty? Yes!\n// Takes callback from queue and runs it\n// Output: \"Second\" ✅\n```\n\n**Event loop mechanics:**\n```javascript\n// Call Stack (LIFO):\n[bar] → setTimeout → [empty]\n[foo] → console.log → [empty]\n[baz] → console.log → [empty]\n\n// Web API:\nsetTimeout callback waiting...\n\n// Task Queue (FIFO):\n[callback] → waits for empty stack\n\n// Event Loop:\nif (stack.isEmpty()) {\n  stack.push(queue.shift());\n}\n```\n\n**Why setTimeout isn't immediate:**\n```javascript\nsetTimeout(() => console.log('A'), 0);\nconsole.log('B');\n\n// Always:\n// B ← synchronous (runs now)\n// A ← asynchronous (waits for stack to clear)\n```\n\n**Memory trick:** Sync code runs NOW, setTimeout waits for ALL sync code to finish!",
    tags: ['javascript', 'quiz', 'event-loop', 'setTimeout'],
  },

{
    id: 'js-196',
    question: "📝 What's the output?\n\n```javascript\nconsole.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nPromise.resolve().then(() => console.log('3'));\n\nconsole.log('4');\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'hard',
    options: [
      '1 4 2 3',
      '1 4 3 2',
      '1 2 3 4',
      '1 3 4 2',
    ],
    correctAnswer: 1,
    explanation: "**Microtasks (Promises) run BEFORE macrotasks (setTimeout)** - this is the event loop priority system!\n\n**Think of it like airport boarding** - first class (microtasks) boards before economy (macrotasks), even if economy checked in first!\n\n**The three-tier execution model:**\n\n**1. Synchronous code (runs immediately):**\n```javascript\nconsole.log('1');  // ✅ Runs now\n// Output: 1\n\nsetTimeout(() => console.log('2'), 0);\n// ⚠️ Callback goes to MACROTASK queue\n\nPromise.resolve().then(() => console.log('3'));\n// ⚠️ Callback goes to MICROTASK queue\n\nconsole.log('4');  // ✅ Runs now\n// Output: 4\n```\n\n**2. Microtasks (run after sync, before macrotasks):**\n```javascript\n// Microtask queue: [() => console.log('3')]\n// Runs now!\n// Output: 3\n```\n\n**3. Macrotasks (run last):**\n```javascript\n// Macrotask queue: [() => console.log('2')]\n// Runs last!\n// Output: 2\n```\n\n**Final output: 1 4 3 2**\n\n**Event loop priority:**\n```javascript\nwhile (true) {\n  // 1. Run all synchronous code\n  runSyncCode();\n  \n  // 2. Run ALL microtasks (until queue empty)\n  while (microtaskQueue.length > 0) {\n    microtaskQueue.shift()();\n  }\n  \n  // 3. Run ONE macrotask\n  if (macrotaskQueue.length > 0) {\n    macrotaskQueue.shift()();\n  }\n  \n  // Repeat!\n}\n```\n\n**Queue assignments:**\n```javascript\n// Microtasks (high priority):\nPromise.resolve().then()  // ✅\nqueueMicrotask()          // ✅\nMutationObserver          // ✅\n\n// Macrotasks (low priority):\nsetTimeout()              // ❌\nsetInterval()             // ❌\nsetImmediate()            // ❌\nI/O operations            // ❌\n```\n\n**Complete visual:**\n```javascript\n┌─ Call Stack ─────────────┐\n│ 1. console.log('1') ✅   │ → Output: 1\n│ 2. setTimeout setup      │ → Macrotask queue\n│ 3. Promise setup         │ → Microtask queue\n│ 4. console.log('4') ✅   │ → Output: 4\n│ [Stack empty]            │\n└──────────────────────────┘\n         ↓\n┌─ Microtask Queue ────────┐\n│ () => console.log('3') ✅│ → Output: 3\n│ [Queue empty]            │\n└──────────────────────────┘\n         ↓\n┌─ Macrotask Queue ────────┐\n│ () => console.log('2') ✅│ → Output: 2\n└──────────────────────────┘\n```\n\n**Memory trick:** Sync → Microtasks (Promises) → Macrotasks (setTimeout)!",
    tags: ['javascript', 'quiz', 'event-loop', 'microtasks', 'macrotasks'],
  },

{
    id: 'js-197',
    question: "📝 What's the order of execution?\n\n```javascript\nsetTimeout(() => console.log('A'), 0);\n\nPromise.resolve()\n  .then(() => console.log('B'))\n  .then(() => console.log('C'));\n\nsetTimeout(() => console.log('D'), 0);\n\nconsole.log('E');\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'hard',
    options: [
      'E B C A D',
      'A B C D E',
      'E A D B C',
      'E A B C D',
    ],
    correctAnswer: 0,
    explanation: "**Chained promises stay in microtask queue** - all microtasks run before any macrotasks!\n\n**Think of it like a relay race** - the microtask team finishes their entire relay before the macrotask team even starts!\n\n**Complete execution breakdown:**\n\n**Phase 1: Synchronous code ✅**\n```javascript\nsetTimeout(() => console.log('A'), 0);\n// → Macrotask queue: [A]\n\nPromise.resolve()\n  .then(() => console.log('B'))\n  // → Microtask queue: [B]\n  .then(() => console.log('C'));\n  // → Will be added to microtask queue after B runs\n\nsetTimeout(() => console.log('D'), 0);\n// → Macrotask queue: [A, D]\n\nconsole.log('E');  // ✅ Runs now\n// Output: E\n```\n\n**Phase 2: Microtasks (ALL of them) ✅**\n```javascript\n// Microtask queue: [B]\n// Run B:\nconsole.log('B');  // Output: B\n// B's .then() adds C to microtask queue\n\n// Microtask queue: [C]\n// Run C:\nconsole.log('C');  // Output: C\n\n// Microtask queue: []\n// All microtasks done!\n```\n\n**Phase 3: Macrotasks (one at a time) ✅**\n```javascript\n// Macrotask queue: [A, D]\n// Run A:\nconsole.log('A');  // Output: A\n\n// Check microtask queue (empty)\n// Run next macrotask D:\nconsole.log('D');  // Output: D\n```\n\n**Final output: E B C A D**\n\n**Event loop cycle:**\n```javascript\nCycle 1:\n  Sync: E ✅\n  Microtasks: B, C ✅ (all at once!)\n  Macrotask: A ✅ (one only)\n  \nCycle 2:\n  Microtasks: (check, empty)\n  Macrotask: D ✅\n```\n\n**Why chained promises run together:**\n```javascript\nPromise.resolve()\n  .then(() => console.log('B'))\n  // When B finishes, C is added to microtask queue\n  .then(() => console.log('C'));\n  // Event loop checks: microtask queue empty? No!\n  // Run C before moving to macrotasks\n```\n\n**Compare with setTimeout chain:**\n```javascript\nsetTimeout(() => {\n  console.log('A');\n  setTimeout(() => console.log('B'), 0);\n}, 0);\nsetTimeout(() => console.log('C'), 0);\n\n// Output: A C B\n// Why? A runs, then C runs (both in original queue)\n// Then B runs (added later)\n```\n\n**Visual timeline:**\n```javascript\nQueue State:\n\nStart:\nMicro: []\nMacro: [A, D]\nSync: E\n\nAfter E:\nMicro: [B]\nMacro: [A, D]\n\nAfter B:\nMicro: [C]  ← B's .then() added this\nMacro: [A, D]\n\nAfter C:\nMicro: []  ← All done!\nMacro: [A, D]\n\nAfter A:\nMicro: []\nMacro: [D]\n\nAfter D:\nDone!\n```\n\n**Memory trick:** ALL microtasks drain before ANY macrotask, even chained ones!",
    tags: ['javascript', 'quiz', 'event-loop', 'promise-chaining', 'microtasks'],
  },

{
    id: 'js-198',
    question: "📝 What happens when you have nested setTimeout calls?\n\n```javascript\nsetTimeout(() => {\n  console.log('1');\n  setTimeout(() => console.log('2'), 0);\n}, 0);\n\nsetTimeout(() => console.log('3'), 0);\n```",
    category: 'javascript',
    subcategory: 'event-loop',
    difficulty: 'medium',
    options: [
      '1 2 3',
      '1 3 2',
      '3 1 2',
      'Order is unpredictable',
    ],
    correctAnswer: 1,
    explanation: "**Nested setTimeout callbacks are added AFTER their parent executes** - they go to the back of the queue!\n\n**Think of it like a ticket system** - even if you get a fast-pass (0ms), you still wait behind everyone already in line!\n\n**Step-by-step execution:**\n```javascript\n// Initial macrotask queue:\n[() => { console.log('1'); setTimeout(...) }, () => console.log('3')]\n//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^      ^^^^^^^^^^^^^^^^^^^^^\n//  First callback                              Second callback\n\n// 1. Run first macrotask:\nconsole.log('1');  // Output: 1 ✅\nsetTimeout(() => console.log('2'), 0);\n// Adds new callback to BACK of queue\n\n// Macrotask queue now:\n[() => console.log('3'), () => console.log('2')]\n//  ^^^^^^^^^^^^^^^^^^^^   ^^^^^^^^^^^^^^^^^^^^\n//  Was already queued      Just added\n\n// 2. Run next macrotask:\nconsole.log('3');  // Output: 3 ✅\n\n// 3. Run last macrotask:\nconsole.log('2');  // Output: 2 ✅\n```\n\n**Final output: 1 3 2**\n\n**Visual timeline:**\n```javascript\nTime 0ms:\n  Queue: [callback1, callback3]\n  \nTime 0ms + tick:\n  Run: callback1\n    → console.log('1')\n    → setTimeout adds callback2 to queue\n  Queue: [callback3, callback2]\n  \nTime 0ms + tick:\n  Run: callback3\n    → console.log('3')\n  Queue: [callback2]\n  \nTime 0ms + tick:\n  Run: callback2\n    → console.log('2')\n  Queue: []\n```\n\n**Key insight:**\n```javascript\n// Scheduled at same time ≠ same queue position!\n\nsetTimeout(() => {\n  console.log('A');\n  setTimeout(() => console.log('B'), 0);  // Added AFTER A runs\n}, 0);\n\nsetTimeout(() => console.log('C'), 0);  // Added BEFORE A runs\n\n// Queue initially: [A_callback, C_callback]\n// After A runs: [C_callback, B_callback]\n// Output: A C B\n```\n\n**Memory trick:** Nested setTimeout = join back of queue, not front!",
    tags: ['javascript', 'quiz', 'event-loop', 'setTimeout', 'macrotasks'],
  }
];
