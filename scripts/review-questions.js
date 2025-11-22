const { javascriptQuizzes } = require('../data/javascript-quizzes.ts');

// Sample questions from different subcategories
const samplesToCheck = [
  'js-001', // basics
  'js-003', // type coercion - the one with the display issue
  'js-029', // functions - we just fixed
  'js-052', // scope - we just fixed
  'js-071', // basics - we just fixed
  'js-102', // prototypes - we just fixed
  'js-150', // event-loop
  'js-193', // iterators - new question
  'js-196', // event-loop - new question
  'js-199', // symbols - new question
  'js-201', // proxy-reflect - new question
];

samplesToCheck.forEach(id => {
  const q = javascriptQuizzes.find(q => q.id === id);
  if (q) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`ID: ${q.id} | Subcategory: ${q.subcategory} | Difficulty: ${q.difficulty}`);
    console.log(`${'='.repeat(60)}`);
    console.log('QUESTION:', q.question.substring(0, 200));
    console.log('\nOPTIONS:');
    q.options.forEach((opt, i) => {
      const marker = i === q.correctAnswer ? '✓' : ' ';
      console.log(` [${marker}] ${i}. ${opt}`);
    });
    console.log('\nEXPLANATION:', q.explanation.substring(0, 200) + '...');
  }
});
