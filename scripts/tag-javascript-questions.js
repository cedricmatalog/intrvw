const fs = require('fs');
const path = require('path');

// Keyword patterns for each subcategory
const subcategoryPatterns = {
  'type-coercion': [
    'coercion', 'typeof', 'implicit', 'explicit', 'convert', 'string concatenation',
    'NaN', 'truthy', 'falsy', '==', '===', 'strict equality'
  ],
  'operators': [
    'unary', '++', '--', 'postfix', 'prefix', 'operator',
    'arithmetic', 'comparison', 'logical', 'spread operator', '...'
  ],
  'functions': [
    'function declaration', 'function expression', 'arrow function',
    'parameters', 'arguments', 'return', 'default parameter', 'rest parameter'
  ],
  'scope': [
    'scope', 'hoisting', 'block scoped', 'global', 'temporal dead zone',
    'TDZ', 'let', 'const', 'var', 'lexical'
  ],
  'closures': [
    'closure', 'lexical scope', 'outer function', 'inner function',
    'function factory', 'private variable'
  ],
  'this': [
    'this keyword', 'context', 'bind', 'call', 'apply',
    'arrow function this', 'method', 'constructor'
  ],
  'objects': [
    'object literal', 'property', 'method', 'Object.keys', 'Object.values',
    'Object.entries', 'Object.assign', 'Object.freeze', 'Object.seal',
    'computed property', 'getter', 'setter', 'destructuring'
  ],
  'arrays': [
    'array', '.map', '.filter', '.reduce', '.forEach', '.find', '.findIndex',
    '.slice', '.splice', '.push', '.pop', '.shift', '.unshift',
    'array method', 'spread array'
  ],
  'classes': [
    'class', 'constructor', 'extends', 'super', 'static', 'instanceof',
    'new keyword', 'class method'
  ],
  'prototypes': [
    'prototype', '__proto__', 'prototypal inheritance', 'prototype chain',
    'Object.create', 'Object.getPrototypeOf', 'Object.setPrototypeOf'
  ],
  'promises': [
    'promise', 'resolve', 'reject', '.then', '.catch', '.finally',
    'Promise.all', 'Promise.race', 'promise chaining'
  ],
  'async': [
    'async', 'await', 'async function', 'async/await',
    'asynchronous', 'microtask', 'macrotask'
  ],
  'event-loop': [
    'event loop', 'call stack', 'task queue', 'microtask',
    'setTimeout', 'setInterval', 'execution order'
  ],
  'modules': [
    'import', 'export', 'module', 'es6 module', 'default export',
    'named export', 'import *'
  ],
  'generators': [
    'generator', 'yield', 'function*', 'generator function',
    '.next()', 'iterator', 'iterable'
  ],
  'iterators': [
    'iterator', 'iterable', 'Symbol.iterator', 'for...of',
    'iteration protocol'
  ],
  'proxy-reflect': [
    'proxy', 'reflect', 'handler', 'trap', 'Proxy object',
    'Reflect API'
  ],
  'symbols': [
    'symbol', 'Symbol()', 'unique', 'Symbol.for', 'well-known symbol'
  ],
  'regex': [
    'regex', 'regular expression', 'pattern', '.test', '.match',
    '.replace', 'RegExp'
  ],
  'basics': [
    // Fallback for basic concepts
    'console.log', 'variable', 'undefined', 'null', 'number', 'string',
    'boolean', 'primitive'
  ]
};

// Read the javascript-quizzes.ts file
const filePath = path.join(__dirname, '../data/javascript-quizzes.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Function to escape regex special characters
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Function to determine subcategory based on question and explanation
function determineSubcategory(questionText, explanation) {
  const combined = (questionText + ' ' + explanation).toLowerCase();

  const scores = {};

  for (const [subcategory, patterns] of Object.entries(subcategoryPatterns)) {
    scores[subcategory] = 0;
    for (const pattern of patterns) {
      const escapedPattern = escapeRegex(pattern.toLowerCase());
      const regex = new RegExp(escapedPattern, 'gi');
      const matches = combined.match(regex);
      if (matches) {
        scores[subcategory] += matches.length;
      }
    }
  }

  // Find the subcategory with highest score
  let maxScore = 0;
  let bestCategory = 'basics';

  for (const [subcategory, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      bestCategory = subcategory;
    }
  }

  return bestCategory;
}

// Process the file
let updatedContent = content;
const questionBlocks = content.split(/(?=\s*\{[^}]*id: 'js-)/);

let categoryCounts = {};
let processedCount = 0;

for (let i = 1; i < questionBlocks.length; i++) {
  const block = questionBlocks[i];

  // Extract question and explanation
  const questionMatch = block.match(/question: "([^"]+(?:\\.[^"]*)*)"/s);
  const explanationMatch = block.match(/explanation: "([^"]+(?:\\.[^"]*)*)"/s);

  if (!questionMatch || !explanationMatch) continue;

  const questionText = questionMatch[1];
  const explanation = explanationMatch[1];

  // Determine subcategory
  const subcategory = determineSubcategory(questionText, explanation);
  categoryCounts[subcategory] = (categoryCounts[subcategory] || 0) + 1;

  // Add subcategory field if it doesn't exist
  if (!block.includes('subcategory:')) {
    // Insert subcategory after category
    const updatedBlock = block.replace(
      /category: 'javascript',/,
      `category: 'javascript',\n    subcategory: '${subcategory}',`
    );
    questionBlocks[i] = updatedBlock;
    processedCount++;
  }
}

// Rejoin the content
updatedContent = questionBlocks.join('');

// Write back to file
fs.writeFileSync(filePath, updatedContent, 'utf8');

console.log(`✅ Tagged ${processedCount} JavaScript questions with subcategories`);
console.log('\nBreakdown by subcategory:');
Object.entries(categoryCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count}`);
  });
