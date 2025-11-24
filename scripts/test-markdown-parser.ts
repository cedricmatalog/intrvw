/**
 * Quick test to verify markdown parser works correctly
 * Run with: npx ts-node scripts/test-markdown-parser.ts
 */

import { parseExplanationSections } from '../utils/markdownParser';

const sampleExplanation = `Think of **array destructuring** like unpacking a suitcase - you take items out one by one.

**The pattern:**
\`\`\`javascript
const [first, second, third] = [1, 2, 3];
// first = 1, second = 2, third = 3
\`\`\`

JavaScript matches positions: first variable gets first value, second variable gets second value, etc.

**In our question:**
\`\`\`javascript
const [y] = [1, 2, 3, 4, 5];
//     ↑    ↑
//  variable  array
\`\`\`

We're creating ONE variable \`y\` and unpacking ONLY the first item from the array.
- Position 0: \`y = 1\` ✓
- Positions 1-4: We don't care about these (not destructured)

**Memory trick:** Square brackets \`[ ]\` on the LEFT = unpacking. On the RIGHT = creating array.`;

console.log('Testing Markdown Parser...\n');

const sections = parseExplanationSections(sampleExplanation);

console.log(`Found ${sections.length} sections:\n`);

sections.forEach((section, index) => {
  console.log(`Section ${index + 1}: "${section.title}"`);
  console.log(`  - Is Quick Answer: ${section.isQuickAnswer || false}`);
  console.log(`  - Number of elements: ${section.content.length}`);
  console.log(`  - Element types: ${section.content.map(e => e.type).join(', ')}`);
  console.log('');
});

console.log('✓ Parser test completed successfully!');
