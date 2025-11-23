const fs = require('fs');
const path = require('path');

// Read the main quiz file
const quizFilePath = path.join(__dirname, '../data/javascript-quizzes.ts');
const content = fs.readFileSync(quizFilePath, 'utf-8');

// Extract the array content
const arrayMatch = content.match(/export const javascriptQuizzes: QuizQuestion\[\] = \[([\s\S]*)\];/);
if (!arrayMatch) {
  console.error('Could not find javascriptQuizzes array');
  process.exit(1);
}

// Parse the quiz objects (basic parsing)
const quizzesText = arrayMatch[1];

// Split by quiz objects
const quizObjects = [];
let braceCount = 0;
let currentQuiz = '';
let inString = false;
let stringChar = '';

for (let i = 0; i < quizzesText.length; i++) {
  const char = quizzesText[i];
  const prevChar = i > 0 ? quizzesText[i - 1] : '';

  // Handle strings
  if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
    if (!inString) {
      inString = true;
      stringChar = char;
    } else if (char === stringChar) {
      inString = false;
    }
  }

  if (!inString) {
    if (char === '{') {
      if (braceCount === 0) {
        currentQuiz = '';
      }
      braceCount++;
    }

    currentQuiz += char;

    if (char === '}') {
      braceCount--;
      if (braceCount === 0 && currentQuiz.trim()) {
        quizObjects.push(currentQuiz.trim());
      }
    }
  } else {
    currentQuiz += char;
  }
}

// Group by subcategory
const quizzesByCategory = {};

quizObjects.forEach(quizText => {
  const subcatMatch = quizText.match(/subcategory:\s*['"]([^'"]+)['"]/);
  if (subcatMatch) {
    const subcategory = subcatMatch[1];
    if (!quizzesByCategory[subcategory]) {
      quizzesByCategory[subcategory] = [];
    }
    quizzesByCategory[subcategory].push(quizText);
  }
});

// Create output directory
const outputDir = path.join(__dirname, '../data/javascript');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write category files
Object.keys(quizzesByCategory).sort().forEach(subcategory => {
  const fileName = `${subcategory}.ts`;
  const filePath = path.join(outputDir, fileName);

  const fileContent = `import { QuizQuestion } from '../../types/quiz';

export const ${subcategory.replace(/-/g, '_')}Quizzes: QuizQuestion[] = [
${quizzesByCategory[subcategory].join(',\n\n')}
];
`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`Created ${fileName} with ${quizzesByCategory[subcategory].length} quizzes`);
});

// Create index file
const indexContent = `import { QuizQuestion } from '../types/quiz';

${Object.keys(quizzesByCategory).sort().map(subcategory =>
  `import { ${subcategory.replace(/-/g, '_')}Quizzes } from './javascript/${subcategory}';`
).join('\n')}

export const javascriptQuizzes: QuizQuestion[] = [
${Object.keys(quizzesByCategory).sort().map(subcategory =>
  `  ...${subcategory.replace(/-/g, '_')}Quizzes`
).join(',\n')}
];
`;

const indexPath = path.join(__dirname, '../data/javascript-quizzes.ts');
fs.writeFileSync(indexPath + '.new', indexContent);
console.log('\nCreated new index file: javascript-quizzes.ts.new');
console.log('Review and rename to javascript-quizzes.ts when ready');
