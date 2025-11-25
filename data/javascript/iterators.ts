import { QuizQuestion } from '../../types/quiz';

export const iteratorsQuizzes: QuizQuestion[] = [
{
    id: 'js-193',
    question: "📝 What's the output?\n\n```javascript\nconst obj = {\n  [Symbol.iterator]() {\n    let count = 0;\n    return {\n      next() {\n        count++;\n        if (count <= 3) {\n          return { value: count, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n};\n\nconsole.log([...obj]);\n```",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'hard',
    options: [
      "[1, 2, 3]",
      "[0, 1, 2]",
      "Error",
      "[]",
    ],
    correctAnswer: 0,
    explanation: "**Symbol.iterator makes any object iterable** - it's the secret protocol that spread, for...of, and destructuring use!\n\n**Think of Symbol.iterator like a ticket dispenser** - it creates a machine (iterator) that hands out numbered tickets (values) one at a time until it's empty!\n\n**How it works:**\n```javascript\nconst obj = {\n  [Symbol.iterator]() {\n    // This method CREATES an iterator\n    let count = 0;\n    return {\n      next() {\n        // Each next() call gets one value\n        count++;\n        if (count <= 3) {\n          return { value: count, done: false };\n          //       ^^^^^ The actual value\n          //                    ^^^^^ Keep going!\n        }\n        return { done: true };  // No more values\n      }\n    };\n  }\n};\n```\n\n**Step-by-step execution:**\n```javascript\nconst iterator = obj[Symbol.iterator]();  // Get the iterator\n\n// Spread operator calls next() repeatedly:\niterator.next()  // { value: 1, done: false } → Add 1 to array\niterator.next()  // { value: 2, done: false } → Add 2 to array\niterator.next()  // { value: 3, done: false } → Add 3 to array\niterator.next()  // { done: true }            → Stop!\n\n// Result: [1, 2, 3] ✅\n```\n\n**The iterator protocol:**\n```javascript\n// Iterator must return object with:\n{\n  value: any,    // The actual value (optional if done is true)\n  done: boolean  // false = more values, true = finished\n}\n```\n\n**Built-in iterables use this:**\n```javascript\nconst arr = [10, 20, 30];\nconst iter = arr[Symbol.iterator]();\n\niter.next();  // { value: 10, done: false }\niter.next();  // { value: 20, done: false }\niter.next();  // { value: 30, done: false }\niter.next();  // { done: true }\n\n// Arrays, strings, Maps, Sets all implement Symbol.iterator!\n```\n\n**What uses iterators:**\n```javascript\n// All these use Symbol.iterator internally:\n[...obj]               // Spread operator ✅\nfor (const x of obj)   // for...of loop ✅\nArray.from(obj)        // Array.from ✅\nconst [a, b] = obj     // Destructuring ✅\n```\n\n**Memory trick:** Symbol.iterator = ticket dispenser that hands out values via next()!",
    tags: ['javascript', 'quiz', 'iterators', 'Symbol.iterator'],
  },

{
    id: 'js-194',
    question: "📝 What's the output?\n\n```javascript\nconst arr = [10, 20, 30];\nconst iterator = arr[Symbol.iterator]();\n\nconsole.log(iterator.next().value);\nconsole.log(iterator.next().value);\nconsole.log(iterator.next());\n```",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'medium',
    options: [
      "10 20 {value: 30, done: false}",
      "10 20 {value: 30, done: true}",
      "10 20 30",
      "10 20 {value: undefined, done: true}",
    ],
    correctAnswer: 0,
    explanation: "**Iterators track their position** - each next() advances to the next value, done becomes true AFTER the last value!\n\n**Think of an iterator like reading a book** - you're still reading chapter 3 even if it's the last chapter. You're only 'done' when you try to turn to chapter 4!\n\n**Step-by-step:**\n```javascript\nconst arr = [10, 20, 30];\nconst iterator = arr[Symbol.iterator]();\n//              ^^^^^^^^^^^^^^^^^^^^^\n//              Get the iterator (like opening the book)\n\n// Call 1: Read position 0\niterator.next().value;\n// { value: 10, done: false }.value → 10 ✅\n\n// Call 2: Read position 1\niterator.next().value;\n// { value: 20, done: false }.value → 20 ✅\n\n// Call 3: Read position 2 (last element, but NOT done yet!)\niterator.next();\n// { value: 30, done: false } ✅\n// done: false because we're AT 30, not past it\n```\n\n**Why done is false:**\n```javascript\nconst arr = [10, 20, 30];\nconst iter = arr[Symbol.iterator]();\n\niter.next();  // Position 0: { value: 10, done: false } ← More left!\niter.next();  // Position 1: { value: 20, done: false } ← More left!\niter.next();  // Position 2: { value: 30, done: false } ← This is the last VALUE\niter.next();  // Position 3: { value: undefined, done: true } ← NOW done!\n//                          ^^^^^^^^^^^\n//                          No more values!\n```\n\n**Complete iteration:**\n```javascript\nconst arr = ['a', 'b'];\nconst iter = arr[Symbol.iterator]();\n\niter.next();  // { value: 'a', done: false } ← Has value\niter.next();  // { value: 'b', done: false } ← Last value, still not done\niter.next();  // { value: undefined, done: true } ← Done now!\n```\n\n**Visual timeline:**\n```javascript\nArray: [10, 20, 30]\n       ↑\n       Position 0: next() → { value: 10, done: false }\n           ↑\n           Position 1: next() → { value: 20, done: false }\n               ↑\n               Position 2: next() → { value: 30, done: false } ✅\n                   ↑\n                   Position 3: next() → { done: true }\n```\n\n**Memory trick:** done = true only AFTER you've passed the last element!",
    tags: ['javascript', 'quiz', 'iterators', 'next'],
  },

{
    id: 'js-195',
    question: "📦 What makes an object iterable in JavaScript?",
    category: 'javascript',
    subcategory: 'iterators',
    difficulty: 'medium',
    options: [
      "Having a length property",
      "Implementing the Symbol.iterator method",
      "Being an instance of Array",
      "Having numeric keys",
    ],
    correctAnswer: 1,
    explanation: "**Only Symbol.iterator makes objects iterable** - it's the universal contract for iteration!\n\n**Think of Symbol.iterator like a USB port** - it's the standard interface. Doesn't matter what's inside (array, string, custom object), if it has the port, it can connect!\n\n**The iterable contract:**\n```javascript\n// To be iterable, object MUST have Symbol.iterator method:\nconst iterable = {\n  [Symbol.iterator]() {\n    // Must return an iterator object with next() method\n    return {\n      next() {\n        // Must return { value, done }\n        return { value: someValue, done: false };\n      }\n    };\n  }\n};\n\n// Now it works with:\n[...iterable]           // ✅\nfor (const x of iterable) {}  // ✅\n```\n\n**Why other options don't work:**\n```javascript\n// ❌ Having length doesn't make it iterable:\nconst obj = { length: 3, 0: 'a', 1: 'b', 2: 'c' };\n[...obj];  // TypeError: obj is not iterable\n\n// ❌ Numeric keys don't make it iterable:\nconst obj = { 0: 'a', 1: 'b', 2: 'c' };\nfor (const x of obj) {}  // TypeError: not iterable\n\n// ✅ Arrays work because they HAVE Symbol.iterator:\nconst arr = ['a', 'b', 'c'];\narr[Symbol.iterator];  // function values() { [native code] }\n```\n\n**Built-in iterables:**\n```javascript\n// All these have Symbol.iterator:\nArray.prototype[Symbol.iterator]    // ✅\nString.prototype[Symbol.iterator]   // ✅\nMap.prototype[Symbol.iterator]      // ✅\nSet.prototype[Symbol.iterator]      // ✅\n\n// Plain objects DON'T:\nObject.prototype[Symbol.iterator]   // undefined ❌\n```\n\n**Custom iterable example:**\n```javascript\nconst range = {\n  from: 1,\n  to: 5,\n  [Symbol.iterator]() {\n    let current = this.from;\n    const last = this.to;\n    return {\n      next() {\n        if (current <= last) {\n          return { value: current++, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n};\n\n[...range];  // [1, 2, 3, 4, 5] ✅\n```\n\n**Memory trick:** Symbol.iterator = the ONLY way to make objects iterable!",
    tags: ['javascript', 'quiz', 'iterators', 'Symbol.iterator', 'protocols'],
  }
];
