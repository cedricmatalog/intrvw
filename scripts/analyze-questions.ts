import { javascriptQuizzes } from '../data/javascript-quizzes';

// Analyze question topics and progression
const topics = javascriptQuizzes.map((q, index) => {
  const question = q.question.toLowerCase();
  const explanation = q.explanation.toLowerCase();

  // Detect topics based on keywords
  const topicKeywords: { [key: string]: string[] } = {
    'hoisting': ['hoist', 'temporal dead zone', 'tdz'],
    'scope': ['scope', 'block-scoped', 'closure', 'lexical'],
    'this': ['this keyword', 'this.', 'arrow function'],
    'objects': ['object', 'property', 'key', 'value'],
    'arrays': ['array', 'length', 'push', 'pop', 'shift'],
    'prototypes': ['prototype', '__proto__', 'inheritance'],
    'async': ['async', 'await', 'promise', 'settimeout', 'event loop'],
    'types': ['typeof', 'type coercion', 'truthy', 'falsy', 'nan'],
    'operators': ['operator', 'unary', '++', '--', 'spread'],
    'functions': ['function', 'arrow function', 'return'],
    'classes': ['class', 'constructor', 'extends', 'super'],
    'modules': ['import', 'export', 'module'],
    'destructuring': ['destructur', 'spread', '...'],
  };

  const detectedTopics: string[] = [];
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    if (keywords.some(kw => question.includes(kw) || explanation.includes(kw))) {
      detectedTopics.push(topic);
    }
  }

  return {
    id: q.id,
    index: index + 1,
    topics: detectedTopics.length > 0 ? detectedTopics : ['general'],
    firstLine: q.question.split('\n')[0].substring(0, 60),
  };
});

console.log('\n=== QUESTION TOPIC ANALYSIS ===\n');

// Group by topics
const topicGroups: { [key: string]: number[] } = {};
topics.forEach(t => {
  t.topics.forEach(topic => {
    if (!topicGroups[topic]) topicGroups[topic] = [];
    topicGroups[topic].push(t.index);
  });
});

console.log('Topic Distribution:');
Object.entries(topicGroups)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([topic, indices]) => {
    console.log(`\n${topic.toUpperCase()} (${indices.length} questions):`);
    console.log(`  Positions: ${indices.slice(0, 10).join(', ')}${indices.length > 10 ? '...' : ''}`);
  });

console.log('\n\n=== PROGRESSION ANALYSIS ===\n');

// Check if topics are clustered or mixed
const isLinear = (indices: number[]): boolean => {
  if (indices.length < 3) return true;
  const sorted = [...indices].sort((a, b) => a - b);
  const avgGap = (sorted[sorted.length - 1] - sorted[0]) / sorted.length;
  return avgGap < 10; // Clustered if average gap is small
};

Object.entries(topicGroups)
  .filter(([_, indices]) => indices.length >= 5)
  .forEach(([topic, indices]) => {
    const linear = isLinear(indices);
    console.log(`${topic}: ${linear ? '✓ CLUSTERED' : '✗ SCATTERED'}`);
  });

console.log('\n\n=== FIRST 20 QUESTIONS ===\n');
topics.slice(0, 20).forEach(t => {
  console.log(`${t.index}. [${t.topics.join(', ')}] ${t.firstLine}`);
});
