import fs from 'fs';
import path from 'path';
import { additionalQuestions } from '../data/additional-questions';
import { QuizQuestion } from '../types/quiz';

// Load original 155 questions from the first reorder attempt
const originalPath = path.join(__dirname, '../data/javascript-quizzes-reordered.ts');
// Import the original questions directly
import { javascriptQuizzes as originalQuestions } from '../data/javascript-quizzes-reordered';

console.log(`\nOriginal questions: ${originalQuestions.length}`);
console.log(`Additional questions: ${additionalQuestions.length}`);

// Combine all questions
const allQuestions = [...originalQuestions, ...additionalQuestions];

// Detailed categorization with sub-topics
interface DetailedCategories {
  '1-basics-types': QuizQuestion[];
  '2-basics-operators': QuizQuestion[];
  '3-basics-variables': QuizQuestion[];
  '4-functions-basics': QuizQuestion[];
  '5-functions-scope': QuizQuestion[];
  '6-functions-closures': QuizQuestion[];
  '7-functions-this': QuizQuestion[];
  '8-objects-basics': QuizQuestion[];
  '9-objects-methods': QuizQuestion[];
  '10-objects-prototypes': QuizQuestion[];
  '11-arrays-basics': QuizQuestion[];
  '12-arrays-methods': QuizQuestion[];
  '13-advanced-classes': QuizQuestion[];
  '14-advanced-async': QuizQuestion[];
  '15-advanced-patterns': QuizQuestion[];
}

function categorizeDetailed(q: QuizQuestion): keyof DetailedCategories {
  const text = (q.question + ' ' + q.explanation).toLowerCase();

  // Advanced - Async (check first, high priority)
  if (text.includes('async') || text.includes('await') || text.includes('promise') ||
      text.includes('settimeout') || text.includes('event loop') || text.includes('event queue')) {
    return '14-advanced-async';
  }

  // Advanced - Classes (check before objects)
  if (text.includes('class ') || text.includes('constructor') ||
      text.includes('extends') || text.includes('super') || text.includes('static')) {
    return '13-advanced-classes';
  }

  // Advanced - Patterns (generators, symbols, etc.)
  if (text.includes('generator') || text.includes('yield') || text.includes('symbol') ||
      text.includes('proxy') || text.includes('reflect') || text.includes('compose') ||
      text.includes('iterator')) {
    return '15-advanced-patterns';
  }

  // Objects - Prototypes (check before objects-basics)
  if (text.includes('prototype') || text.includes('__proto__') || text.includes('inheritance') ||
      text.includes('getprototypeof')) {
    return '10-objects-prototypes';
  }

  // Functions - this keyword (high specificity)
  if ((text.includes('this.') || text.includes('this keyword')) &&
      !text.includes('class') && !text.includes('constructor')) {
    return '7-functions-this';
  }

  // Functions - Closures
  if (text.includes('closure') || text.includes('lexical') ||
      (text.includes('inner function') && text.includes('outer')) ||
      (text.includes('return') && text.includes('function()') && text.includes('access'))) {
    return '6-functions-closures';
  }

  // Functions - Scope (hoisting, TDZ, block scope)
  if ((text.includes('hoist') || text.includes('temporal dead zone') ||
       text.includes('tdz') || text.includes('block-scoped')) &&
      !text.includes('class')) {
    return '5-functions-scope';
  }

  // Basics - Variables (var, let, const declarations)
  if ((text.includes('var ') || text.includes('let ') || text.includes('const ')) &&
      (text.includes('declare') || text.includes('variable') || text.includes('keyword')) &&
      !text.includes('function') && !text.includes('object') && !text.includes('class')) {
    return '3-basics-variables';
  }

  // Basics - Operators
  if (text.includes('operator') || text.includes('unary plus') ||
      (text.includes('++') || text.includes('--')) ||
      (text.includes('spread') && !text.includes('array')) ||
      text.includes('nullish coalescing') || text.includes('optional chaining')) {
    return '2-basics-operators';
  }

  // Basics - Types
  if ((text.includes('typeof') || text.includes('type coercion') ||
      text.includes('truthy') || text.includes('falsy') || text.includes(' nan')) &&
      !text.includes('object') && !text.includes('array')) {
    return '1-basics-types';
  }

  // Arrays - Methods (specific array methods)
  if (text.includes('array') &&
      (text.includes('.map') || text.includes('.filter') || text.includes('.reduce') ||
       text.includes('.find') || text.includes('.slice') || text.includes('.splice') ||
       text.includes('.flat') || text.includes('.sort') || text.includes('.push') ||
       text.includes('.pop') || text.includes('.shift'))) {
    return '12-arrays-methods';
  }

  // Arrays - Basics
  if (text.includes('array') || (text.includes('[') && text.includes(']') && text.includes('index'))) {
    return '11-arrays-basics';
  }

  // Objects - Methods (Object.keys, Object.values, etc.)
  if (text.includes('object.keys') || text.includes('object.values') ||
      text.includes('object.entries') || text.includes('object.assign') ||
      text.includes('object.freeze') || text.includes('object.seal')) {
    return '9-objects-methods';
  }

  // Functions - Basics (functions that don't fit other categories)
  if ((text.includes('function') || text.includes('arrow function') ||
       text.includes('parameter') || text.includes('argument')) &&
      !text.includes('this.') && !text.includes('object') && !text.includes('method')) {
    return '4-functions-basics';
  }

  // Objects - Basics (default for object-related questions)
  if (text.includes('object') || text.includes('property') || text.includes('key') ||
      (text.includes('{') && text.includes('}')) || text.includes('reference')) {
    return '8-objects-basics';
  }

  // Default fallback
  return '8-objects-basics';
}

const categorized: DetailedCategories = {
  '1-basics-types': [],
  '2-basics-operators': [],
  '3-basics-variables': [],
  '4-functions-basics': [],
  '5-functions-scope': [],
  '6-functions-closures': [],
  '7-functions-this': [],
  '8-objects-basics': [],
  '9-objects-methods': [],
  '10-objects-prototypes': [],
  '11-arrays-basics': [],
  '12-arrays-methods': [],
  '13-advanced-classes': [],
  '14-advanced-async': [],
  '15-advanced-patterns': [],
};

// Categorize all questions
allQuestions.forEach(q => {
  const category = categorizeDetailed(q);
  categorized[category].push(q);
});

console.log('\n=== FINAL CATEGORIZATION ===\n');
Object.entries(categorized).forEach(([cat, questions]) => {
  console.log(`${cat.replace(/^\d+-/, '').replace(/-/g, ' ').toUpperCase()}: ${questions.length}`);
});

// Create final ordered list
const finalOrdered = [
  ...categorized['1-basics-types'],
  ...categorized['2-basics-operators'],
  ...categorized['3-basics-variables'],
  ...categorized['4-functions-basics'],
  ...categorized['5-functions-scope'],
  ...categorized['6-functions-closures'],
  ...categorized['7-functions-this'],
  ...categorized['8-objects-basics'],
  ...categorized['9-objects-methods'],
  ...categorized['10-objects-prototypes'],
  ...categorized['11-arrays-basics'],
  ...categorized['12-arrays-methods'],
  ...categorized['13-advanced-classes'],
  ...categorized['14-advanced-async'],
  ...categorized['15-advanced-patterns'],
];

console.log(`\n✓ Total questions: ${finalOrdered.length}`);
console.log(`  Original: ${originalQuestions.length}`);
console.log(`  Added: ${additionalQuestions.length}`);

// Generate final file
function generateFinalFile(questions: QuizQuestion[]): string {
  let output = `import { QuizQuestion } from '../types/quiz';

// JavaScript Questions - Optimized Learning Path
// Source: https://github.com/lydiahallie/javascript-questions
// Additional questions created to fill curriculum gaps
// Organized in progressive difficulty: Basics → Functions → Objects → Arrays → Advanced

export const javascriptQuizzes: QuizQuestion[] = [\n`;

  questions.forEach((q, index) => {
    const newId = `js-${String(index + 1).padStart(3, '0')}`;
    output += `  {
    id: '${newId}',
    question: ${JSON.stringify(q.question)},
    category: 'javascript',
    difficulty: '${q.difficulty}',
    options: ${JSON.stringify(q.options, null, 6).replace(/\n/g, '\n    ')},
    correctAnswer: ${q.correctAnswer},
    explanation: ${JSON.stringify(q.explanation)},
    tags: ${JSON.stringify(q.tags)},
  },\n\n`;
  });

  output += '];\n';
  return output;
}

const outputPath = path.join(__dirname, '../data/javascript-quizzes.ts');
const backupPath = path.join(__dirname, '../data/javascript-quizzes.backup.ts');

// Backup original
fs.copyFileSync(outputPath, backupPath);
console.log(`\n✓ Backed up original to: javascript-quizzes.backup.ts`);

// Write new file
const output = generateFinalFile(finalOrdered);
fs.writeFileSync(outputPath, output);
console.log(`✓ Updated: javascript-quizzes.ts`);
console.log(`\n🎓 Questions are now organized in learning progression!`);
