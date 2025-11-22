const fs = require('fs');
const path = require('path');

// Emoji mapping by subcategory and keywords
const emojiMap = {
  // Subcategory-based emojis
  subcategory: {
    'basics': '🔤',
    'operators': '➕',
    'functions': '⚡',
    'objects': '📦',
    'arrays': '📚',
    'classes': '🏛️',
    'prototypes': '🔗',
    'promises': '🤝',
    'async': '⏳',
    'event-loop': '🔄',
    'modules': '📦',
    'generators': '🔁',
    'iterators': '🔢',
    'proxy-reflect': '🪞',
    'symbols': '🔑',
    'regex': '🔍',
    'closures': '🔒',
    'scope': '🎯',
    'this': '👈',
    'type-coercion': '🔀',
  },

  // Keyword-based emojis (for more specific cases)
  keywords: [
    { pattern: /console\.log/i, emoji: '📝' },
    { pattern: /output/i, emoji: '🖥️' },
    { pattern: /error/i, emoji: '❌' },
    { pattern: /map|filter|reduce/i, emoji: '🗺️' },
    { pattern: /promise/i, emoji: '🤝' },
    { pattern: /async|await/i, emoji: '⏳' },
    { pattern: /class/i, emoji: '🏛️' },
    { pattern: /spread|\.\.\./, emoji: '📤' },
    { pattern: /destructur/i, emoji: '📂' },
    { pattern: /setTimeout|setInterval/i, emoji: '⏰' },
    { pattern: /null|undefined/i, emoji: '🔴' },
    { pattern: /true|false/i, emoji: '✅' },
    { pattern: /number/i, emoji: '🔢' },
    { pattern: /string/i, emoji: '📝' },
    { pattern: /object/i, emoji: '📦' },
    { pattern: /array/i, emoji: '📚' },
  ]
};

function getEmojiForQuestion(question, subcategory) {
  // Check for specific keywords first
  for (const { pattern, emoji } of emojiMap.keywords) {
    if (pattern.test(question)) {
      return emoji;
    }
  }

  // Fall back to subcategory emoji
  return emojiMap.subcategory[subcategory] || '💡';
}

// Read the file
const filePath = path.join(__dirname, '../data/javascript-quizzes.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Process questions
const questionRegex = /question: "([^"]*(?:\\.[^"]*)*)"/g;
const subcategoryRegex = /subcategory: '([^']+)'/g;

let updatedContent = content;
let changeCount = 0;

// Find all questions and their subcategories
const lines = content.split('\n');
let currentSubcategory = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Track current subcategory
  const subMatch = line.match(/subcategory: '([^']+)'/);
  if (subMatch) {
    currentSubcategory = subMatch[1];
  }

  // Process question lines
  const questionMatch = line.match(/question: "([^"]*)/);
  if (questionMatch && currentSubcategory) {
    const questionStart = questionMatch[1];

    // Check if it already has an emoji at the start
    const hasEmoji = /^[\u{1F300}-\u{1F9FF}]/u.test(questionStart);

    if (!hasEmoji) {
      // Get the full question text (may span multiple lines)
      let fullQuestion = questionStart;
      let j = i;
      while (j < lines.length && !lines[j].includes('",')) {
        j++;
        if (j < lines.length) {
          fullQuestion += lines[j];
        }
      }

      const emoji = getEmojiForQuestion(fullQuestion, currentSubcategory);

      // Add emoji to the start of the question
      const oldLine = lines[i];
      const newLine = oldLine.replace(
        /question: "([^"]*)/,
        `question: "${emoji} $1`
      );

      if (oldLine !== newLine) {
        lines[i] = newLine;
        changeCount++;
      }
    }
  }
}

// Write updated content
updatedContent = lines.join('\n');
fs.writeFileSync(filePath, updatedContent, 'utf8');

console.log(`✅ Added emojis to ${changeCount} JavaScript questions!`);
