import fs from 'fs';
import path from 'path';

interface ParsedQuestion {
  id: string;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

function parseMarkdownQuestions(filePath: string): ParsedQuestion[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const questions: ParsedQuestion[] = [];

  // Split by question markers
  const questionBlocks = content.split(/######\s+\d+\.\s+/);

  for (let i = 1; i < questionBlocks.length; i++) {
    const block = questionBlocks[i];

    // Extract question text
    const questionMatch = block.match(/^(.+?)\n/);
    if (!questionMatch) continue;

    let questionText = questionMatch[1].trim();

    // Extract code block if present
    let code = '';
    const codeMatch = block.match(/```javascript\n([\s\S]+?)\n```/);
    if (codeMatch) {
      code = codeMatch[1].trim();
      questionText = questionText.replace(/\?$/, '') + '?\n\n```javascript\n' + code + '\n```';
    }

    // Extract options
    const optionsMatch = block.match(/- ([A-Z]):\s*(.+)/g);
    if (!optionsMatch) continue;

    const options: string[] = [];
    optionsMatch.forEach(opt => {
      const match = opt.match(/- [A-Z]:\s*(.+)/);
      if (match) {
        // Remove all backticks and clean up the text
        const cleanedOption = match[1].replace(/`/g, '').trim();
        options.push(cleanedOption);
      }
    });

    // Extract correct answer
    const answerMatch = block.match(/####\s+Answer:\s+([A-Z])/);
    if (!answerMatch) continue;

    const correctLetter = answerMatch[1];
    const correctAnswer = correctLetter.charCodeAt(0) - 65; // A=0, B=1, etc.

    // Extract explanation
    const explanationMatch = block.match(/#### Answer: [A-Z]\n\n([\s\S]+?)(?:\n<\/p>|\n<details>|\n---|\n######|$)/);
    let explanation = 'Check the answer details for explanation.';
    if (explanationMatch) {
      explanation = explanationMatch[1]
        .replace(/<[^>]+>/g, '') // Remove HTML tags
        .replace(/\n{3,}/g, '\n\n') // Normalize newlines
        .trim();
    }

    questions.push({
      id: `js-${String(i).padStart(3, '0')}`,
      question: questionText,
      options,
      correctAnswer,
      explanation,
    });
  }

  return questions;
}

function generateQuizData(questions: ParsedQuestion[]): string {
  let output = `import { QuizQuestion } from '../types/quiz';

// JavaScript Questions converted from javascript-questions.md
// Source: https://github.com/lydiahallie/javascript-questions

export const javascriptQuizzes: QuizQuestion[] = [\n`;

  questions.forEach((q, index) => {
    output += `  {
    id: '${q.id}',
    question: ${JSON.stringify(q.question)},
    category: 'javascript',
    difficulty: 'medium',
    options: ${JSON.stringify(q.options, null, 6).replace(/\n/g, '\n    ')},
    correctAnswer: ${q.correctAnswer},
    explanation: ${JSON.stringify(q.explanation)},
    tags: ['javascript', 'quiz'],
  },\n`;

    if (index < questions.length - 1) {
      output += '\n';
    }
  });

  output += '];\n';
  return output;
}

// Main execution
const markdownPath = path.join(__dirname, '../javasript-questions.md');
const outputPath = path.join(__dirname, '../data/javascript-quizzes.ts');

console.log('Parsing JavaScript questions...');
const questions = parseMarkdownQuestions(markdownPath);
console.log(`Found ${questions.length} questions`);

console.log('Generating TypeScript file...');
const output = generateQuizData(questions); // All questions

fs.writeFileSync(outputPath, output);
console.log(`✓ Created ${outputPath} with ${questions.length} questions`);
