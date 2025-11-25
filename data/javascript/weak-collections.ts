import { QuizQuestion } from '../../types/quiz';

export const weak_collectionsQuizzes: QuizQuestion[] = [
{
    id: 'js-176',
    question: "🗺️ What's the difference between WeakMap and Map?\n\n```javascript\nconst map = new Map();\nconst weakMap = new WeakMap();\n\nlet obj = { name: 'John' };\nmap.set(obj, 'value1');\nweakMap.set(obj, 'value2');\n\nobj = null;\n```",
    category: 'javascript',
    subcategory: 'weak-collections',
    difficulty: 'hard',
    options: [
      'They are the same',
      'WeakMap keys must be objects and are garbage collected',
      'WeakMap can only store numbers',
      'Map is faster than WeakMap',
    ],
    correctAnswer: 1,
    explanation: "**WeakMap keys are weakly held** - when the object is garbage collected, the entry vanishes!\n\n**Think of Map like a photo album** - even if the person dies, the photo stays. WeakMap is like a live video feed - when the subject disappears, the feed goes blank!\n\n**What happens:**\n```javascript\nconst map = new Map();\nconst weakMap = new WeakMap();\n\nlet obj = { name: 'John' };\n\n// Both store the object:\nmap.set(obj, 'value1');      // Strong reference\nweakMap.set(obj, 'value2');  // Weak reference\n\n// Break the reference:\nobj = null;\n\n// Map STILL holds the object (memory leak!):\nmap.size;  // 1 ← Object still in memory\n\n// WeakMap WILL release it (garbage collected):\n// The { name: 'John' } object can now be garbage collected\n// WeakMap entry automatically removed\n```\n\n**Key differences:**\n```javascript\n// MAP:\n// ✅ Keys can be ANY type (primitives, objects)\n// ✅ Has size property\n// ✅ Can iterate (forEach, for...of)\n// ❌ Holds strong references (potential memory leaks)\n\nconst map = new Map();\nmap.set('string', 1);  // ✅\nmap.set(123, 2);       // ✅\nmap.set({}, 3);        // ✅\nmap.size;              // 3\n\n// WEAKMAP:\n// ✅ Garbage collection friendly\n// ❌ Keys must be OBJECTS only\n// ❌ No size property\n// ❌ Not iterable\n\nconst wm = new WeakMap();\nwm.set({}, 'value');      // ✅ Objects only\nwm.set('string', 'x');    // ❌ TypeError!\nwm.size;                  // undefined (no size!)\n```\n\n**Memory leak prevention:**\n```javascript\n// Problem: Map holds strong references\nconst cache = new Map();\n\nfunction process(element) {\n  cache.set(element, expensiveComputation(element));\n}\n\n// Even if element is removed from DOM:\nelement.remove();\n// Map still holds it → memory leak! ❌\n\n// Solution: WeakMap releases when no longer needed\nconst cache = new WeakMap();\n\nfunction process(element) {\n  cache.set(element, expensiveComputation(element));\n}\n\n// When element is removed:\nelement.remove();\n// WeakMap can garbage collect → no leak! ✅\n```\n\n**Use cases:**\n```javascript\n// WeakMap: DOM node metadata\nconst nodeData = new WeakMap();\n\nfunction attachData(node, data) {\n  nodeData.set(node, data);  // ✅\n}\n\n// When node is removed, data is auto-cleaned!\n\n// WeakMap: Private object data\nconst privateData = new WeakMap();\n\nclass User {\n  constructor(name) {\n    privateData.set(this, { password: 'secret' });\n  }\n}\n\nconst user = new User('John');\n// When user is deleted, private data is cleaned up!\n```\n\n**Memory trick:** WeakMap = weak references, auto garbage collection, prevents leaks!",
    tags: ['javascript', 'quiz', 'WeakMap', 'garbage-collection'],
  },

{
    id: 'js-177',
    question: "📝 What's the output?\n\n```javascript\nconst ws = new WeakSet();\nconst obj1 = {};\nconst obj2 = {};\n\nws.add(obj1);\nws.add(obj2);\nws.add(obj1);\n\nconsole.log(ws.has(obj1));\nconsole.log(ws.size);\n```",
    category: 'javascript',
    subcategory: 'weak-collections',
    difficulty: 'hard',
    options: [
      'true and 2',
      'true and undefined',
      'false and 2',
      'true and 3',
    ],
    correctAnswer: 1,
    explanation: "**WeakSet has no size property** - weak references make size unpredictable!\n\n**Think of WeakSet like counting ghosts** - they might disappear at any time, so you can't maintain an accurate count!\n\n**What happens:**\n```javascript\nconst ws = new WeakSet();\nconst obj1 = {};\nconst obj2 = {};\n\nws.add(obj1);  // WeakSet { obj1 }\nws.add(obj2);  // WeakSet { obj1, obj2 }\nws.add(obj1);  // WeakSet { obj1, obj2 } ← Duplicate ignored (like Set)\n\n// Check membership:\nws.has(obj1);  // true ✅\n\n// No size property:\nws.size;  // undefined ✅\n// WeakSet doesn't track size!\n```\n\n**Why no size property:**\n```javascript\n// Weak references = unpredictable size\nconst ws = new WeakSet();\nlet obj = {};\n\nws.add(obj);\n// Size would be 1... but:\n\nobj = null;\n// Object can be garbage collected at ANY time\n// Size becomes 0... or does it? When?\n// JavaScript doesn't tell you when GC runs!\n\n// Solution: No size property to avoid confusion\nws.size;  // undefined\n```\n\n**WeakSet vs Set:**\n```javascript\n// SET:\n// ✅ Any type of values\n// ✅ Has size property\n// ✅ Iterable\n// ❌ Strong references\n\nconst set = new Set();\nset.add(1);\nset.add('string');\nset.add({});\nset.size;  // 3 ✅\nfor (const item of set) {}  // ✅ Iterable\n\n// WEAKSET:\n// ✅ Weak references (GC friendly)\n// ❌ Only objects\n// ❌ No size property\n// ❌ Not iterable\n\nconst ws = new WeakSet();\nws.add({});     // ✅\nws.add(1);      // ❌ TypeError!\nws.size;        // undefined ❌\nfor (const item of ws) {}  // ❌ TypeError!\n```\n\n**What WeakSet HAS:**\n```javascript\nconst ws = new WeakSet();\nconst obj = {};\n\n// add() - add object:\nws.add(obj);  // ✅\n\n// has() - check membership:\nws.has(obj);  // true ✅\n\n// delete() - remove object:\nws.delete(obj);  // true (was present)\nws.has(obj);     // false (now gone)\n\n// That's it! No size, no iteration, no clear()\n```\n\n**Use case - preventing duplicates:**\n```javascript\nconst processed = new WeakSet();\n\nfunction processElement(element) {\n  if (processed.has(element)) {\n    return;  // Already processed\n  }\n  \n  // Process element...\n  processed.add(element);\n}\n\n// When element is removed from DOM,\n// WeakSet automatically cleans it up!\n```\n\n**Memory trick:** WeakSet = no size, no iteration, only has()/add()/delete()!",
    tags: ['javascript', 'quiz', 'WeakSet'],
  },
];
