import { Lesson } from '../types/learning';

export const lessons: Lesson[] = [
  // JavaScript - Beginner Lessons
  {
    id: 'js-001',
    category: 'javascript',
    level: 'beginner',
    order: 1,
    title: 'What is JavaScript?',
    concept: 'Introduction to JavaScript',
    explanation: 'JavaScript is a programming language that runs in web browsers. It makes websites interactive - like buttons that respond when you click them, forms that validate your input, and animations that catch your eye.',
    keyPoints: [
      'JavaScript runs in your browser',
      'Makes websites interactive and dynamic',
      'One of the core technologies of the web',
      'Can also run on servers (Node.js)',
    ],
    nextUp: 'Let\'s learn about variables - how to store information!',
  },
  {
    id: 'js-002',
    category: 'javascript',
    level: 'beginner',
    order: 2,
    title: 'Variables: Storing Data',
    concept: 'let, const, and var',
    explanation: 'Variables are like boxes where you store information. In JavaScript, you can create variables using "let", "const", or "var". Use "let" for values that change, "const" for values that stay the same.',
    example: `// Use const for values that don't change
const name = "Alex";
const age = 25;

// Use let for values that might change
let score = 0;
score = 100; // This is OK!

// const values can't be reassigned
// name = "Sam"; // This would be an error!`,
    keyPoints: [
      'const - for values that never change',
      'let - for values that can change',
      'Always use const by default',
      'Only use let when you need to reassign',
    ],
    tryIt: 'Try creating a const for your name and a let for your current mood!',
    nextUp: 'Next: Data types - what kinds of information can we store?',
  },
  {
    id: 'js-003',
    category: 'javascript',
    level: 'beginner',
    order: 3,
    title: 'Data Types',
    concept: 'Numbers, Strings, Booleans',
    explanation: 'JavaScript has different types of data. Numbers (1, 2, 3.14), Strings (text in quotes), and Booleans (true or false). Each type is used for different purposes.',
    example: `// Number - for math and counting
const age = 25;
const price = 9.99;

// String - for text
const name = "Alex";
const greeting = 'Hello!';

// Boolean - for yes/no, true/false
const isStudent = true;
const hasLicense = false;`,
    keyPoints: [
      'Number: whole numbers and decimals',
      'String: text in quotes (" or \')',
      'Boolean: true or false',
      'typeof tells you the type: typeof 42',
    ],
    tryIt: 'Create variables for your age (number), name (string), and whether you like coding (boolean)!',
    nextUp: 'Functions - writing reusable code!',
  },
  {
    id: 'js-004',
    category: 'javascript',
    level: 'beginner',
    order: 4,
    title: 'Functions Basics',
    concept: 'Creating and calling functions',
    explanation: 'Functions are reusable blocks of code. Instead of writing the same code over and over, you write it once in a function and call it whenever you need it. Think of it like a recipe you can follow multiple times.',
    example: `// Define a function
function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function
greet("Alex");  // Returns: "Hello, Alex!"
greet("Sam");   // Returns: "Hello, Sam!"

// Arrow function (modern way)
const add = (a, b) => a + b;
add(5, 3);  // Returns: 8`,
    keyPoints: [
      'Functions group code you want to reuse',
      'Parameters are inputs to functions',
      'return sends a value back',
      'Arrow functions => are shorter syntax',
    ],
    tryIt: 'Write a function that takes a name and returns "Welcome, [name]!"',
    nextUp: 'Arrays - storing lists of data!',
  },
  {
    id: 'js-005',
    category: 'javascript',
    level: 'beginner',
    order: 5,
    title: 'Arrays: Lists of Data',
    concept: 'Working with arrays',
    explanation: 'Arrays store lists of items. Like a shopping list or playlist, arrays keep multiple values in order. You can access items by their position (index), starting from 0.',
    example: `// Create an array
const fruits = ["apple", "banana", "orange"];

// Access items (starts at 0!)
fruits[0];  // "apple"
fruits[1];  // "banana"

// Array methods
fruits.push("grape");     // Add to end
fruits.length;            // How many items
fruits.includes("apple"); // true`,
    keyPoints: [
      'Arrays store ordered lists',
      'Index starts at 0, not 1!',
      'Use [] to access items',
      'Many helpful methods: push, pop, includes',
    ],
    tryIt: 'Create an array of your top 3 favorite foods!',
    nextUp: 'Objects - storing related data together!',
  },

  // JavaScript - Intermediate Lessons
  {
    id: 'js-101',
    category: 'javascript',
    level: 'intermediate',
    order: 10,
    title: 'Objects: Grouped Data',
    concept: 'Working with objects',
    explanation: 'Objects store related data together using key-value pairs. Like a person has a name, age, and email, an object groups these properties. Perfect for representing real-world things.',
    example: `// Create an object
const person = {
  name: "Alex",
  age: 25,
  email: "alex@example.com",
  greet() {
    return "Hi, I'm " + this.name;
  }
};

// Access properties
person.name;        // "Alex"
person["age"];      // 25
person.greet();     // "Hi, I'm Alex"`,
    keyPoints: [
      'Objects use key-value pairs',
      'Access with dot notation: obj.key',
      'Or bracket notation: obj["key"]',
      'Can contain functions (methods)',
    ],
    tryIt: 'Create an object representing your favorite book with title, author, and pages!',
    nextUp: 'Array methods - powerful ways to transform data!',
  },
  {
    id: 'js-102',
    category: 'javascript',
    level: 'intermediate',
    order: 11,
    title: 'Array Methods: Map',
    concept: 'Transforming arrays with map',
    explanation: 'map() creates a new array by transforming each item. It applies a function to every element and returns the results. Perfect for converting data from one form to another.',
    example: `// Double each number
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
// Result: [2, 4, 6, 8]

// Extract property from objects
const users = [
  { name: "Alex", age: 25 },
  { name: "Sam", age: 30 }
];
const names = users.map(user => user.name);
// Result: ["Alex", "Sam"]`,
    keyPoints: [
      'map() transforms each array element',
      'Returns a new array (doesn\'t modify original)',
      'Same length as original array',
      'Use when converting data',
    ],
    tryIt: 'Take an array of prices and add $1 to each using map!',
    nextUp: 'Filter - selecting specific items from arrays!',
  },
  {
    id: 'js-103',
    category: 'javascript',
    level: 'intermediate',
    order: 12,
    title: 'Array Methods: Filter',
    concept: 'Filtering arrays',
    explanation: 'filter() creates a new array with only items that pass a test. Like filtering emails to show only unread ones, it keeps items that match your condition.',
    example: `// Keep only even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
// Result: [2, 4, 6]

// Find users over 21
const users = [
  { name: "Alex", age: 25 },
  { name: "Sam", age: 17 }
];
const adults = users.filter(user => user.age >= 21);
// Result: [{ name: "Alex", age: 25 }]`,
    keyPoints: [
      'filter() keeps items that pass a test',
      'Returns new array (shorter or same length)',
      'Doesn\'t modify original array',
      'Use when selecting specific items',
    ],
    tryIt: 'Filter an array of numbers to keep only ones greater than 10!',
    nextUp: 'Destructuring - unpacking values easily!',
  },
  {
    id: 'js-104',
    category: 'javascript',
    level: 'intermediate',
    order: 13,
    title: 'Destructuring',
    concept: 'Unpacking values from arrays and objects',
    explanation: 'Destructuring is a shortcut to extract values from arrays or objects. Instead of accessing properties one by one, you can unpack multiple values in one line.',
    example: `// Array destructuring
const [first, second] = ["apple", "banana", "orange"];
// first = "apple", second = "banana"

// Object destructuring
const person = { name: "Alex", age: 25, city: "NYC" };
const { name, age } = person;
// name = "Alex", age = 25

// With different names
const { name: userName } = person;
// userName = "Alex"`,
    keyPoints: [
      'Extract multiple values in one line',
      'Works with arrays and objects',
      'Can rename variables during destructuring',
      'Makes code cleaner and shorter',
    ],
    tryIt: 'Destructure the first two items from [10, 20, 30, 40]!',
    nextUp: 'Template literals - better string formatting!',
  },
  {
    id: 'js-105',
    category: 'javascript',
    level: 'intermediate',
    order: 14,
    title: 'Template Literals',
    concept: 'Modern string formatting',
    explanation: 'Template literals use backticks (`) and make it easy to create strings with variables. Instead of concatenating with +, you can embed expressions directly with ${}.',
    example: `const name = "Alex";
const age = 25;

// Old way (concatenation)
const msg1 = "Hi " + name + ", you are " + age;

// New way (template literal)
const msg2 = \`Hi \${name}, you are \${age}\`;

// Multi-line strings
const poem = \`
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
\`;`,
    keyPoints: [
      'Use backticks: ` instead of quotes',
      'Embed expressions with ${}',
      'Easy multi-line strings',
      'More readable than concatenation',
    ],
    tryIt: 'Create a template literal: "My name is [name] and I am [age] years old"',
    nextUp: 'Spread operator - copying and combining data!',
  },

  // JavaScript - Advanced Lessons
  {
    id: 'js-201',
    category: 'javascript',
    level: 'advanced',
    order: 20,
    title: 'Closures',
    concept: 'Functions that remember their environment',
    explanation: 'A closure is when a function "remembers" variables from where it was created, even after that outer function finishes. This is powerful for data privacy and creating function factories.',
    example: `function createCounter() {
  let count = 0;  // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.getCount();   // 2
// count is private - can't access directly!`,
    keyPoints: [
      'Inner functions access outer variables',
      'Variables stay alive in memory',
      'Great for data privacy',
      'Created every time a function is created',
    ],
    tryIt: 'Create a function that returns a function which increments a private counter!',
    nextUp: 'Promises - handling async operations!',
  },
  {
    id: 'js-202',
    category: 'javascript',
    level: 'advanced',
    order: 21,
    title: 'Promises Basics',
    concept: 'Handling asynchronous operations',
    explanation: 'Promises represent a value that will be available in the future. Like ordering food - you get a receipt (promise) and eventually get your food (resolved value) or a refund (rejected).',
    example: `// Creating a promise
const fetchData = new Promise((resolve, reject) => {
  // Simulate API call
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ data: "User info" });
    } else {
      reject("Failed to fetch");
    }
  }, 1000);
});

// Using the promise
fetchData
  .then(result => console.log(result))
  .catch(error => console.log(error));`,
    keyPoints: [
      'Promises have 3 states: pending, fulfilled, rejected',
      '.then() handles success',
      '.catch() handles errors',
      '.finally() runs regardless of outcome',
    ],
    tryIt: 'Create a promise that resolves after 2 seconds with "Done!"',
    nextUp: 'Async/await - cleaner promise syntax!',
  },
  {
    id: 'js-203',
    category: 'javascript',
    level: 'advanced',
    order: 22,
    title: 'Async/Await',
    concept: 'Cleaner asynchronous code',
    explanation: 'Async/await is syntactic sugar over Promises. It makes async code look and behave more like synchronous code, which is easier to read and understand.',
    example: `// Without async/await
function getUser() {
  return fetch('/api/user')
    .then(res => res.json())
    .then(data => data.user)
    .catch(err => console.error(err));
}

// With async/await (cleaner!)
async function getUser() {
  try {
    const res = await fetch('/api/user');
    const data = await res.json();
    return data.user;
  } catch (err) {
    console.error(err);
  }
}`,
    keyPoints: [
      'async functions always return a Promise',
      'await pauses until Promise resolves',
      'Use try/catch for error handling',
      'Much more readable than .then() chains',
    ],
    tryIt: 'Convert a .then() chain to async/await syntax!',
    nextUp: 'Array reduce - the most powerful array method!',
  },
  {
    id: 'js-204',
    category: 'javascript',
    level: 'advanced',
    order: 23,
    title: 'Array Reduce',
    concept: 'Reducing arrays to single values',
    explanation: 'reduce() is the Swiss Army knife of array methods. It processes each element and accumulates a result - perfect for summing numbers, grouping data, or transforming arrays into objects.',
    example: `// Sum all numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);
// Result: 15

// Group by property
const users = [
  { name: "Alex", role: "admin" },
  { name: "Sam", role: "user" },
  { name: "Jordan", role: "admin" }
];
const byRole = users.reduce((groups, user) => {
  if (!groups[user.role]) groups[user.role] = [];
  groups[user.role].push(user);
  return groups;
}, {});
// Result: { admin: [...], user: [...] }`,
    keyPoints: [
      'reduce() accumulates values into a result',
      'Takes reducer function and initial value',
      'Most flexible array method',
      'Can replicate map, filter, and more',
    ],
    tryIt: 'Use reduce to find the maximum number in an array!',
    nextUp: 'Object methods - keys, values, and entries!',
  },
  {
    id: 'js-205',
    category: 'javascript',
    level: 'advanced',
    order: 24,
    title: 'Object Methods',
    concept: 'Object.keys(), values(), and entries()',
    explanation: 'JavaScript provides methods to work with object properties. These methods convert objects into arrays, making it easy to iterate over properties or transform objects.',
    example: `const person = {
  name: "Alex",
  age: 25,
  city: "NYC"
};

// Get all keys
Object.keys(person);
// ["name", "age", "city"]

// Get all values
Object.values(person);
// ["Alex", 25, "NYC"]

// Get key-value pairs
Object.entries(person);
// [["name", "Alex"], ["age", 25], ["city", "NYC"]]

// Convert back to object
const entries = [["a", 1], ["b", 2]];
Object.fromEntries(entries);
// { a: 1, b: 2 }`,
    keyPoints: [
      'Object.keys() returns array of keys',
      'Object.values() returns array of values',
      'Object.entries() returns array of [key, value]',
      'Object.fromEntries() converts back to object',
    ],
    tryIt: 'Use Object.entries() to loop through an object and log each key-value pair!',
    nextUp: 'Keep practicing - you\'re becoming a JavaScript expert!',
  },
];
