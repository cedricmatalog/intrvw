const { javascriptQuizzes } = require('../data/javascript-quizzes.ts');

console.log('🔍 Deep Review of 208 JavaScript Quiz Questions\n');

const issues = [];
const warnings = [];

javascriptQuizzes.forEach((q, index) => {
  // Check 1: Question should end with proper punctuation or code block
  const questionText = q.question.toLowerCase();

  // Check 2: "What's the output?" questions should have code
  if (questionText.includes("what's the output") || questionText.includes("what's its value")) {
    if (!q.question.includes('```')) {
      issues.push(`${q.id}: "What's the output?" question missing code block`);
    }
  }

  // Check 3: Explanation should not be too generic
  if (q.explanation.length < 30) {
    warnings.push(`${q.id}: Explanation seems very short (${q.explanation.length} chars)`);
  }

  // Check 4: Check for common mistakes in options
  const optionsStr = q.options.join(' ').toLowerCase();

  // Check 5: For output questions, check if correct answer makes sense
  if (questionText.includes("what's the output")) {
    const correctOpt = q.options[q.correctAnswer];
    // Output should typically be a value, not a statement
    if (correctOpt && correctOpt.toLowerCase().startsWith('it ')) {
      warnings.push(`${q.id}: Correct answer seems like explanation, not output: "${correctOpt}"`);
    }
  }

  // Check 6: True/False questions should have sensible distractors
  if (q.options.includes('true') && q.options.includes('false')) {
    if (q.options.length === 4) {
      const others = q.options.filter(o => o !== 'true' && o !== 'false');
      if (others.some(o => o.toLowerCase() === 'maybe' || o === 'null')) {
        warnings.push(`${q.id}: True/false question has weak distractor options`);
      }
    }
  }

  // Check 7: Check for placeholder text
  if (q.explanation.includes('TODO') || q.explanation.includes('FIXME')) {
    issues.push(`${q.id}: Explanation contains placeholder text`);
  }

  // Check 8: Emoji in question should match content
  const hasOutputQuestion = questionText.includes('output') || questionText.includes('value');
  const hasCodeBlock = q.question.includes('```');

  // Check 9: Options should not all be similar
  const uniqueFirstWords = new Set(q.options.map(opt => opt.split(' ')[0].toLowerCase()));
  if (uniqueFirstWords.size === 1 && q.options.length === 4) {
    warnings.push(`${q.id}: All options start with the same word - may be confusing`);
  }

  // Check 10: Difficulty matches question complexity
  const hasMultipleCodeBlocks = (q.question.match(/```/g) || []).length > 2;
  const hasAdvancedConcepts = q.question.toLowerCase().match(/closure|prototype|async|promise|generator|proxy|reflect|symbol/);

  if (q.difficulty === 'easy' && (hasMultipleCodeBlocks || hasAdvancedConcepts)) {
    warnings.push(`${q.id}: Marked as 'easy' but seems complex (has advanced concepts or multiple code blocks)`);
  }
});

console.log(`✅ Reviewed ${javascriptQuizzes.length} questions\n`);

if (issues.length > 0) {
  console.log(`❌ ISSUES (${issues.length}):\n`);
  issues.forEach(issue => console.log(`  • ${issue}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log(`⚠️  WARNINGS (${warnings.length}):\n`);
  warnings.slice(0, 20).forEach(warning => console.log(`  • ${warning}`));
  if (warnings.length > 20) {
    console.log(`\n  ... and ${warnings.length - 20} more warnings`);
  }
  console.log('');
}

if (issues.length === 0 && warnings.length === 0) {
  console.log('🎉 No issues or warnings found! All questions look good.');
}

// Summary stats
const byDifficulty = javascriptQuizzes.reduce((acc, q) => {
  acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
  return acc;
}, {});

const bySubcategory = javascriptQuizzes.reduce((acc, q) => {
  acc[q.subcategory] = (acc[q.subcategory] || 0) + 1;
  return acc;
}, {});

console.log('\n📊 Statistics:\n');
console.log('By Difficulty:');
Object.entries(byDifficulty).sort((a, b) => b[1] - a[1]).forEach(([diff, count]) => {
  console.log(`  ${diff.padEnd(10)} ${count}`);
});

console.log('\nBy Subcategory (top 10):');
Object.entries(bySubcategory)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([cat, count]) => {
    console.log(`  ${cat.padEnd(20)} ${count}`);
  });
