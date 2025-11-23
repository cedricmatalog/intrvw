import { QuizQuestion } from '../../types/quiz';

export const proxy_reflectQuizzes: QuizQuestion[] = [
{
    id: 'js-064',
    question: "🖥️ When you click the paragraph, what's the logged output?",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
          "p div",
          "div p",
          "p",
          "div"
    ],
    correctAnswer: 0,
    explanation: "If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, targeting, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-171',
    question: "📝 What's the output?\n\n```javascript\nconst handler = {\n  set: () => console.log(\"Added a new property!\"),\n  get: () => console.log(\"Accessed a property!\"),\n};\n\nconst person = new Proxy({}, handler);\n\nperson.name = \"Lydia\";\nperson.name;\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
          "Added a new property!",
          "Accessed a property!",
          "Added a new property! Accessed a property!",
          "Nothing gets logged"
    ],
    correctAnswer: 2,
    explanation: "With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In this case, we pass the `handler` object which contains two properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, and `get` gets invoked whenever we _get_ (access) property values.\n\nThe first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.\n\nFirst, we added a new property `name` to the proxy object (`person.name = \"Lydia\"`). `set` gets invoked, and logs `\"Added a new property!\"`.\n\nThen, we access a property value on the proxy object, and the `get` property on the handler object is invoked. `\"Accessed a property!\"` gets logged.",
    tags: ["javascript","quiz"],
  },

{
    id: 'js-201',
    question: "📝 What's the output?\n\n```javascript\nconst target = { name: 'John' };\nconst handler = {\n  get(target, prop) {\n    return prop in target ? target[prop] : 'Not found';\n  }\n};\n\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.name);\nconsole.log(proxy.age);\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
      "'John' undefined",
      "'John' 'Not found'",
      "Error",
      "'John' null",
    ],
    correctAnswer: 1,
    explanation: "The Proxy intercepts property access. The `get` trap checks if the property exists in the target. `proxy.name` returns 'John' from the target. `proxy.age` doesn't exist in the target, so the trap returns 'Not found'.",
    tags: ['javascript', 'quiz'],
  },

{
    id: 'js-202',
    question: "❌ What happens here?\n\n```javascript\nconst obj = { count: 0 };\nconst handler = {\n  set(target, prop, value) {\n    if (prop === 'count' && typeof value !== 'number') {\n      throw new TypeError('Count must be a number');\n    }\n    target[prop] = value;\n    return true;\n  }\n};\n\nconst proxy = new Proxy(obj, handler);\nproxy.count = '5';\n```",
    category: 'javascript',
    subcategory: 'proxy-reflect',
    difficulty: 'medium',
    options: [
      "Sets count to '5'",
      "Sets count to 5",
      "Throws TypeError",
      "Returns false",
    ],
    correctAnswer: 2,
    explanation: "The Proxy's `set` trap validates the value before setting. When we try to set `count` to '5' (a string), the trap checks if it's a number. Since it's not, it throws a TypeError. Proxies allow you to add validation and custom behavior to property setting.",
    tags: ['javascript', 'quiz'],
  }
];
