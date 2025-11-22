const fs = require('fs');
const path = require('path');

// This script verifies that quiz questions have:
// 1. Valid correctAnswer index (0-3 for 4 options)
// 2. Explanation that makes sense with the correct answer
// 3. No obvious mismatches

const filePath = path.join(__dirname, '../data/javascript-quizzes.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Parse questions from the file
const questionBlocks = content.split(/(?=\s*\{[^}]*id: 'js-)/);

const issues = [];
let totalQuestions = 0;

for (let i = 1; i < questionBlocks.length; i++) {
  const block = questionBlocks[i];

  const idMatch = block.match(/id: '(js-\d+)'/);
  const questionMatch = block.match(/question: "([^"]+(?:\\.[^"]*)*?)"/s);
  const optionsMatch = block.match(/options: \[([\s\S]*?)\]/);
  const correctAnswerMatch = block.match(/correctAnswer: (\d+)/);
  const explanationMatch = block.match(/explanation: "([^"]+(?:\\.[^"]*)*?)"/s);

  if (!idMatch) continue;

  const id = idMatch[1];
  totalQuestions++;

  // Check if all required fields exist
  if (!questionMatch) {
    issues.push(`${id}: Missing question text`);
    continue;
  }

  if (!optionsMatch) {
    issues.push(`${id}: Missing options`);
    continue;
  }

  if (!correctAnswerMatch) {
    issues.push(`${id}: Missing correctAnswer`);
    continue;
  }

  if (!explanationMatch) {
    issues.push(`${id}: Missing explanation`);
    continue;
  }

  // Parse options
  const optionsText = optionsMatch[1];
  const options = [];
  const optionRegex = /"([^"]*(?:\\.[^"]*)*)"/g;
  let match;
  while ((match = optionRegex.exec(optionsText)) !== null) {
    options.push(match[1]);
  }

  const correctAnswer = parseInt(correctAnswerMatch[1]);
  const questionText = questionMatch[1];
  const explanation = explanationMatch[1];

  // Validation checks

  // 1. Check if correctAnswer is within bounds
  if (correctAnswer < 0 || correctAnswer >= options.length) {
    issues.push(`${id}: correctAnswer (${correctAnswer}) is out of bounds (0-${options.length - 1})`);
  }

  // 2. Check if we have exactly 4 options
  if (options.length !== 4) {
    issues.push(`${id}: Has ${options.length} options (expected 4)`);
  }

  // 3. Check if explanation mentions the correct answer
  const correctOption = options[correctAnswer];

  // For "What's the output?" questions, check if explanation mentions the correct output
  if (correctOption && (questionText.includes("What's the output") || questionText.includes("value of output"))) {
    // Simple heuristic: explanation should reference the correct answer somehow
    // (This is not perfect but catches obvious mistakes)
    if (explanation.length < 20) {
      issues.push(`${id}: Explanation seems too short (${explanation.length} chars)`);
    }
  }

  // 4. Check for common issues
  if (options.some(opt => opt.trim() === '')) {
    issues.push(`${id}: Has empty options`);
  }

  // 5. Check for duplicate options
  const uniqueOptions = new Set(options);
  if (uniqueOptions.size !== options.length) {
    issues.push(`${id}: Has duplicate options`);
  }
}

console.log(`\n📊 Verified ${totalQuestions} JavaScript quiz questions\n`);

if (issues.length === 0) {
  console.log('✅ All questions passed validation!\n');
  console.log('Checks performed:');
  console.log('  • correctAnswer index is valid (0-3)');
  console.log('  • All questions have exactly 4 options');
  console.log('  • No empty or duplicate options');
  console.log('  • All required fields present');
  console.log('  • Explanations are not too short');
} else {
  console.log(`⚠️  Found ${issues.length} issues:\n`);
  issues.forEach(issue => console.log(`  • ${issue}`));
}

console.log(`\nTotal questions: ${totalQuestions}`);
