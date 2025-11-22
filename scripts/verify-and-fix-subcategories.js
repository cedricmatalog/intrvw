const fs = require('fs');
const path = require('path');

// Enhanced subcategory patterns - more specific matching
const subcategoryPatterns = {
  // Order matters - most specific first!
  'closures': {
    priority: 100,
    keywords: ['closure', 'lexical scope', 'outer function', 'inner function', 'function factory', 'private variable', 'encapsulation'],
    antiKeywords: ['class'], // Don't match if it's about classes
  },
  'event-loop': {
    priority: 95,
    keywords: ['event loop', 'call stack', 'task queue', 'microtask', 'macrotask', 'execution order', 'setTimeout', 'setInterval', 'promise.*then.*settimeout'],
  },
  'promises': {
    priority: 90,
    keywords: ['promise', 'resolve', 'reject', '.then', '.catch', '.finally', 'Promise.all', 'Promise.race', 'promise chaining', 'async.*promise'],
  },
  'async': {
    priority: 85,
    keywords: ['async function', 'await', 'async/await', 'async.*await'],
    antiKeywords: ['promise'], // If it mentions promises heavily, it's about promises
  },
  'generators': {
    priority: 80,
    keywords: ['generator', 'yield', 'function\\*', 'generator function', '\\.next\\(\\)', 'iterator.*yield'],
  },
  'iterators': {
    priority: 75,
    keywords: ['iterator', 'iterable', 'Symbol.iterator', 'for\\.\\.\\.of', 'iteration protocol', '\\[Symbol\\.iterator\\]'],
    antiKeywords: ['generator'], // Generators are iterators but more specific
  },
  'proxy-reflect': {
    priority: 70,
    keywords: ['proxy', 'reflect', 'handler', 'trap', 'Proxy object', 'Reflect API', 'new Proxy'],
  },
  'symbols': {
    priority: 65,
    keywords: ['symbol', 'Symbol\\(', 'Symbol\\.for', 'unique', 'well-known symbol', 'Symbol\\.iterator'],
  },
  'modules': {
    priority: 60,
    keywords: ['import', 'export', 'module', 'es6 module', 'default export', 'named export', 'import \\*', 'dynamic import'],
  },
  'classes': {
    priority: 55,
    keywords: ['class', 'constructor', 'extends', 'super', 'static', 'instanceof', 'new keyword', 'class method', 'private field', '#'],
  },
  'prototypes': {
    priority: 50,
    keywords: ['prototype', '__proto__', 'prototypal inheritance', 'prototype chain', 'Object.create', 'Object.getPrototypeOf', 'Object.setPrototypeOf'],
  },
  'this': {
    priority: 45,
    keywords: ['this keyword', '\\bthis\\b.*context', 'bind', 'call', 'apply', 'arrow function.*this', '\\.bind\\(', '\\.call\\(', '\\.apply\\('],
  },
  'arrays': {
    priority: 40,
    keywords: ['array', '\\.map\\(', '\\.filter\\(', '\\.reduce\\(', '\\.forEach\\(', '\\.find\\(', '\\.findIndex\\(', '\\.slice\\(', '\\.splice\\(', '\\.push\\(', '\\.pop\\(', 'array method', 'spread.*array'],
  },
  'objects': {
    priority: 35,
    keywords: ['object literal', 'property', 'Object\\.keys', 'Object\\.values', 'Object\\.entries', 'Object\\.assign', 'Object\\.freeze', 'Object\\.seal', 'computed property', 'getter', 'setter', 'destructuring.*object'],
  },
  'functions': {
    priority: 30,
    keywords: ['function declaration', 'function expression', 'arrow function', 'parameters', 'arguments', 'return', 'default parameter', 'rest parameter', '\\=\\>'],
    antiKeywords: ['generator', 'async'], // More specific categories
  },
  'scope': {
    priority: 25,
    keywords: ['scope', 'hoisting', 'block scoped', 'global', 'temporal dead zone', 'TDZ', '\\blet\\b', '\\bconst\\b', '\\bvar\\b', 'lexical'],
    antiKeywords: ['closure'], // Closures are about scope but more specific
  },
  'type-coercion': {
    priority: 20,
    keywords: ['coercion', 'implicit', 'explicit', 'convert', 'string concatenation', 'NaN', 'truthy', 'falsy', '==', '===', 'strict equality', 'type conversion'],
  },
  'operators': {
    priority: 15,
    keywords: ['unary', '\\+\\+', '--', 'postfix', 'prefix', 'operator', 'arithmetic', 'comparison', 'logical', 'spread operator', '\\.\\.\\.'],
  },
  'regex': {
    priority: 10,
    keywords: ['regex', 'regular expression', 'pattern', '\\.test\\(', '\\.match\\(', '\\.replace\\(', 'RegExp'],
  },
  'basics': {
    priority: 1,
    keywords: ['console\\.log', 'variable', 'undefined', 'null', 'number', 'string', 'boolean', 'primitive', 'typeof'],
  },
};

// Read the file
const filePath = path.join(__dirname, '../data/javascript-quizzes.ts');
const content = fs.readFileSync(filePath, 'utf8');

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function determineSubcategory(questionText, explanation) {
  const combined = (questionText + ' ' + explanation).toLowerCase();

  let bestMatch = {
    category: 'basics',
    score: 0,
    priority: 0,
  };

  for (const [subcategory, config] of Object.entries(subcategoryPatterns)) {
    let score = 0;

    // Check anti-keywords first (disqualifiers)
    if (config.antiKeywords) {
      const hasAntiKeyword = config.antiKeywords.some(anti => {
        const regex = new RegExp(anti, 'gi');
        return regex.test(combined);
      });
      if (hasAntiKeyword) continue; // Skip this category
    }

    // Calculate score based on keyword matches
    for (const pattern of config.keywords) {
      const regex = new RegExp(pattern, 'gi');
      const matches = combined.match(regex);
      if (matches) {
        score += matches.length;
      }
    }

    // If this category has a better score, or same score but higher priority
    if (score > bestMatch.score || (score === bestMatch.score && config.priority > bestMatch.priority)) {
      bestMatch = {
        category: subcategory,
        score: score,
        priority: config.priority,
      };
    }
  }

  return bestMatch.category;
}

// Process questions
const questionBlocks = content.split(/(?=\s*\{[^}]*id: 'js-)/);
let changes = [];
let categoryCounts = {};

for (let i = 1; i < questionBlocks.length; i++) {
  const block = questionBlocks[i];

  const idMatch = block.match(/id: '(js-\d+)'/);
  const questionMatch = block.match(/question: "([^"]+(?:\\.[^"]*)*)"/s);
  const explanationMatch = block.match(/explanation: "([^"]+(?:\\.[^"]*)*)"/s);
  const currentSubcategoryMatch = block.match(/subcategory: '([^']+)'/);

  if (!idMatch || !questionMatch || !explanationMatch) continue;

  const id = idMatch[1];
  const questionText = questionMatch[1];
  const explanation = explanationMatch[1];
  const currentSubcategory = currentSubcategoryMatch ? currentSubcategoryMatch[1] : null;

  // Determine best subcategory
  const suggestedSubcategory = determineSubcategory(questionText, explanation);
  categoryCounts[suggestedSubcategory] = (categoryCounts[suggestedSubcategory] || 0) + 1;

  // Track changes
  if (currentSubcategory !== suggestedSubcategory) {
    changes.push({
      id,
      from: currentSubcategory || 'none',
      to: suggestedSubcategory,
      snippet: questionText.substring(0, 60) + '...',
    });

    // Update the subcategory in the block
    if (currentSubcategoryMatch) {
      questionBlocks[i] = block.replace(
        /subcategory: '[^']+'/,
        `subcategory: '${suggestedSubcategory}'`
      );
    } else {
      questionBlocks[i] = block.replace(
        /category: 'javascript',/,
        `category: 'javascript',\n    subcategory: '${suggestedSubcategory}',`
      );
    }
  }
}

// Write changes
const updatedContent = questionBlocks.join('');
fs.writeFileSync(filePath, updatedContent, 'utf8');

console.log(`✅ Verified and fixed subcategories for ${questionBlocks.length - 1} JavaScript questions\n`);
console.log(`📝 Changes made: ${changes.length}\n`);

if (changes.length > 0) {
  console.log('=== SUBCATEGORY CHANGES ===\n');
  changes.slice(0, 20).forEach(change => {
    console.log(`${change.id}: ${change.from} → ${change.to}`);
    console.log(`  "${change.snippet}"`);
  });

  if (changes.length > 20) {
    console.log(`\n... and ${changes.length - 20} more changes`);
  }
}

console.log('\n=== FINAL DISTRIBUTION ===\n');
Object.entries(categoryCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    console.log(`  ${cat.padEnd(20)} ${count}`);
  });
