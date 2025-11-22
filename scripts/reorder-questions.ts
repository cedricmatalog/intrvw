import fs from 'fs';
import path from 'path';
import { javascriptQuizzes } from '../data/javascript-quizzes';
import { QuizQuestion } from '../types/quiz';

// Categorize questions by learning progression
interface CategorizedQuestions {
  basics: QuizQuestion[];
  functions: QuizQuestion[];
  objects: QuizQuestion[];
  arrays: QuizQuestion[];
  advanced: QuizQuestion[];
}

function categorizeQuestion(q: QuizQuestion): keyof CategorizedQuestions {
  const text = (q.question + ' ' + q.explanation).toLowerCase();

  // Advanced topics - check first
  if (text.includes('prototype') || text.includes('__proto__') ||
      text.includes('inheritance') || text.includes('class') ||
      text.includes('async') || text.includes('await') || text.includes('promise') ||
      text.includes('generator') || text.includes('symbol') ||
      text.includes('proxy') || text.includes('reflect')) {
    return 'advanced';
  }

  // Arrays
  if (text.includes('array') && !text.includes('object')) {
    return 'arrays';
  }

  // Objects (but not classes)
  if ((text.includes('object') || text.includes('{') || text.includes('property')) &&
      !text.includes('class')) {
    return 'objects';
  }

  // Functions (arrow functions, closures, this)
  if (text.includes('arrow function') || text.includes('=>') ||
      text.includes('this keyword') || text.includes('closure') ||
      text.includes('scope') || text.includes('lexical')) {
    return 'functions';
  }

  // Default to basics
  return 'basics';
}

const categorized: CategorizedQuestions = {
  basics: [],
  functions: [],
  objects: [],
  arrays: [],
  advanced: [],
};

// Categorize all questions
javascriptQuizzes.forEach(q => {
  const category = categorizeQuestion(q);
  categorized[category].push(q);
});

console.log('\n=== QUESTION CATEGORIZATION ===\n');
console.log(`Basics: ${categorized.basics.length}`);
console.log(`Functions & Scope: ${categorized.functions.length}`);
console.log(`Objects: ${categorized.objects.length}`);
console.log(`Arrays: ${categorized.arrays.length}`);
console.log(`Advanced: ${categorized.advanced.length}`);
console.log(`Total: ${javascriptQuizzes.length}`);

// Identify gaps
const gaps = [
  {
    topic: 'Basics - Variable declarations',
    needed: categorized.basics.length < 15,
    count: Math.max(0, 15 - categorized.basics.length),
  },
  {
    topic: 'Functions - Basic concepts',
    needed: categorized.functions.length < 20,
    count: Math.max(0, 20 - categorized.functions.length),
  },
  {
    topic: 'Objects - Fundamentals',
    needed: categorized.objects.length < 25,
    count: Math.max(0, 25 - categorized.objects.length),
  },
  {
    topic: 'Arrays - Methods & manipulation',
    needed: categorized.arrays.length < 20,
    count: Math.max(0, 20 - categorized.arrays.length),
  },
];

console.log('\n=== IDENTIFIED GAPS ===\n');
gaps.forEach(gap => {
  if (gap.needed) {
    console.log(`❌ ${gap.topic}: Need ${gap.count} more questions`);
  } else {
    console.log(`✓ ${gap.topic}: Sufficient coverage`);
  }
});

// Create new ordered list
const reordered = [
  ...categorized.basics,
  ...categorized.functions,
  ...categorized.objects,
  ...categorized.arrays,
  ...categorized.advanced,
];

console.log(`\n✓ Reordered ${reordered.length} questions into learning progression`);

// Generate new file with reordered questions
function generateReorderedFile(questions: QuizQuestion[]): string {
  let output = `import { QuizQuestion } from '../types/quiz';

// JavaScript Questions - Reordered for Learning Progression
// Source: https://github.com/lydiahallie/javascript-questions
// Organized from basics to advanced concepts

export const javascriptQuizzes: QuizQuestion[] = [\n`;

  questions.forEach((q, index) => {
    // Update ID to reflect new order
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

const outputPath = path.join(__dirname, '../data/javascript-quizzes-reordered.ts');
const output = generateReorderedFile(reordered);
fs.writeFileSync(outputPath, output);

console.log(`\n✓ Created ${outputPath}`);
console.log('\nReview the reordered questions before replacing the original file.');
