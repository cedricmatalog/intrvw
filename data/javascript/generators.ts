import { QuizQuestion } from '../../types/quiz';

export const generatorsQuizzes: QuizQuestion[] = [
{
    id: 'js-165',
    question: "📝 What's the output?\n\n```javascript\nfunction* generator(i) {\n  yield i;\n  yield i * 2;\n}\n\nconst gen = generator(10);\n\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          '[0, 10], [10, 20]',
          '20, 20',
          '10, 20',
          '0, 10 and 10, 20'
    ],
    correctAnswer: 2,
    explanation: "**Generators pause at each yield** - they're like pausable functions!\n\n**Think of generators like a vending machine** - you press next(), get one item (yield), then it waits for the next button press!\n\n**Step-by-step execution:**\n```javascript\nfunction* generator(i) {  // function* = generator function\n  yield i;       // Pause point 1\n  yield i * 2;   // Pause point 2\n}\n\nconst gen = generator(10);  // Creates generator (doesn't run yet!)\n```\n\n**First next() call:**\n```javascript\ngen.next()\n// Execution:\n// 1. Runs until first yield\n// 2. yield i → yields 10\n// 3. Pauses!\n// Returns: { value: 10, done: false }\n\nconsole.log(gen.next().value);  // 10 ✅\n```\n\n**Second next() call:**\n```javascript\ngen.next()\n// Execution:\n// 1. Resumes from where it paused\n// 2. yield i * 2 → yields 20 (i is still 10)\n// 3. Pauses!\n// Returns: { value: 20, done: false }\n\nconsole.log(gen.next().value);  // 20 ✅\n```\n\n**What next() returns:**\n```javascript\nconst gen = generator(10);\n\ngen.next();  // { value: 10, done: false }\ngen.next();  // { value: 20, done: false }\ngen.next();  // { value: undefined, done: true } (no more yields)\n```\n\n**Visual execution flow:**\n```javascript\nfunction* generator(i) {\n  console.log('Start');\n  yield i;           // ← Pause 1\n  console.log('Resumed');\n  yield i * 2;       // ← Pause 2\n  console.log('Done');\n}\n\nconst gen = generator(10);\ngen.next();  // Logs: 'Start', returns { value: 10, done: false }\ngen.next();  // Logs: 'Resumed', returns { value: 20, done: false }\ngen.next();  // Logs: 'Done', returns { value: undefined, done: true }\n```\n\n**Memory trick:** yield = pause and give a value, next() = resume from pause!",
    tags: ['javascript', 'quiz', 'generators', 'yield'],
  },

{
    id: 'js-168',
    question: "📝 How can we log the values that are commented out after the console.log statement?\n\n```javascript\nfunction* startGame() {\n  const answer = yield \"Do you love JavaScript?\";\n  if (answer !== \"Yes\") {\n    return \"Oh wow... Guess we're done here\";\n  }\n  return \"JavaScript loves you back ❤️\";\n}\n\nconst game = startGame();\nconsole.log(/* 1 */); // Do you love JavaScript?\nconsole.log(/* 2 */); // JavaScript loves you back ❤️\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          'game.next("Yes").value and game.next().value',
          'game.next.value("Yes") and game.next.value()',
          'game.next().value and game.next("Yes").value',
          'game.next.value() and game.next.value("Yes")'
    ],
    correctAnswer: 2,
    explanation: "**next() with arguments replaces the previous yield** - it's two-way communication!\n\n**Think of yield like asking a question** - next(answer) sends back the answer!\n\n**Complete execution breakdown:**\n\n**Call 1: game.next().value**\n```javascript\nfunction* startGame() {\n  const answer = yield \"Do you love JavaScript?\";\n  // ↑                  ↑\n  // Not assigned yet   This is returned!\n}\n\ngame.next()\n// Runs until first yield\n// Yields: \"Do you love JavaScript?\"\n// Pauses BEFORE assigning to answer\n// Returns: { value: \"Do you love JavaScript?\", done: false }\n\nconsole.log(game.next().value);  // \"Do you love JavaScript?\" ✅\n```\n\n**Call 2: game.next(\"Yes\").value**\n```javascript\ngame.next(\"Yes\")\n// Argument \"Yes\" REPLACES the previous yield\n// const answer = yield \"...\" → const answer = \"Yes\"\n// Continues execution:\n// if (\"Yes\" !== \"Yes\") → false, skip if block\n// return \"JavaScript loves you back ❤️\"\n// Returns: { value: \"JavaScript loves you back ❤️\", done: true }\n\nconsole.log(game.next(\"Yes\").value);  // \"JavaScript loves you back ❤️\" ✅\n```\n\n**Visual flow:**\n```javascript\nfunction* startGame() {\n  const answer = yield \"Do you love JavaScript?\";\n  //             ↑     ↑\n  //             |     First next() returns this\n  //             Second next(\"Yes\") fills this\n  \n  if (answer !== \"Yes\") {\n    return \"Oh wow... Guess we're done here\";\n  }\n  return \"JavaScript loves you back ❤️\";\n}\n```\n\n**Step-by-step with state:**\n```javascript\nconst game = startGame();  // Generator created, not started\n\n// Step 1: First next() - no argument\ngame.next()\n  → Executes: const answer = yield \"Do you love JavaScript?\";\n  → Yields: \"Do you love JavaScript?\"\n  → Pauses: answer NOT assigned yet!\n  → State: Waiting at yield\n\n// Step 2: Second next(\"Yes\") - with argument\ngame.next(\"Yes\")\n  → Replaces previous yield with \"Yes\"\n  → Executes: const answer = \"Yes\"\n  → Continues: if (\"Yes\" !== \"Yes\") → false\n  → Returns: \"JavaScript loves you back ❤️\"\n  → Done: true\n```\n\n**Why order matters:**\n```javascript\n// ❌ Wrong order:\ngame.next(\"Yes\").value\n// First next() with argument\n// But there's NO previous yield to replace!\n// answer = \"Yes\" but yield returns undefined\n\ngame.next().value\n// Second next() without argument\n// Previous yield gets replaced with undefined\n// answer = undefined → fails if check\n```\n\n**Real-world analogy:**\n```javascript\nfunction* conversation() {\n  const name = yield \"What's your name?\";\n  const age = yield \"How old are you?\";\n  return `${name} is ${age} years old`;\n}\n\nconst chat = conversation();\n\nchat.next();           // { value: \"What's your name?\", done: false }\nchat.next(\"Alice\");    // { value: \"How old are you?\", done: false }\nchat.next(25);         // { value: \"Alice is 25 years old\", done: true }\n```\n\n**Memory trick:** First next() asks the question, second next(answer) provides the answer!",
    tags: ['javascript', 'quiz', 'generators', 'yield', 'next'],
  },

{
    id: 'js-170',
    question: "🖥️ What's the output?\n\n```javascript\nfunction* generatorOne() {\n  yield [\"a\", \"b\", \"c\"];\n}\n\nfunction* generatorTwo() {\n  yield* [\"a\", \"b\", \"c\"];\n}\n\nconst one = generatorOne();\nconst two = generatorTwo();\n\nconsole.log(one.next().value);\nconsole.log(two.next().value);\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          'a and a',
          'a and undefined',
          "['a', 'b', 'c'] and a",
          "a and ['a', 'b', 'c']"
    ],
    correctAnswer: 2,
    explanation: "**yield vs yield*** - yield returns the value, yield* delegates to an iterable!\n\n**Think of it like packages:**\n- **yield** = Give the whole box\n- **yield*** = Unpack the box and give items one by one\n\n**generatorOne: yield (entire array):**\n```javascript\nfunction* generatorOne() {\n  yield [\"a\", \"b\", \"c\"];  // Yields the ENTIRE array\n}\n\nconst one = generatorOne();\none.next().value;  // ['a', 'b', 'c'] ✅ (whole array)\none.next().value;  // undefined (no more yields)\n```\n\n**generatorTwo: yield* (delegate to array):**\n```javascript\nfunction* generatorTwo() {\n  yield* [\"a\", \"b\", \"c\"];  // Delegates to array's iterator\n  // Equivalent to:\n  // yield \"a\";\n  // yield \"b\";\n  // yield \"c\";\n}\n\nconst two = generatorTwo();\ntwo.next().value;  // 'a' ✅ (first item)\ntwo.next().value;  // 'b' (second item)\ntwo.next().value;  // 'c' (third item)\ntwo.next().value;  // undefined (done)\n```\n\n**Visual comparison:**\n```javascript\n// yield - one big yield\nfunction* gen1() {\n  yield [1, 2, 3];  // Single yield\n}\nconst g1 = gen1();\ng1.next();  // { value: [1, 2, 3], done: false }\ng1.next();  // { value: undefined, done: true }\n\n// yield* - multiple yields\nfunction* gen2() {\n  yield* [1, 2, 3];  // Expands to 3 yields\n}\nconst g2 = gen2();\ng2.next();  // { value: 1, done: false }\ng2.next();  // { value: 2, done: false }\ng2.next();  // { value: 3, done: false }\ng2.next();  // { value: undefined, done: true }\n```\n\n**yield* with different iterables:**\n```javascript\n// With string\nfunction* gen1() {\n  yield* \"abc\";\n}\nconst g1 = gen1();\ng1.next().value;  // 'a'\ng1.next().value;  // 'b'\ng1.next().value;  // 'c'\n\n// With another generator\nfunction* inner() {\n  yield 1;\n  yield 2;\n}\nfunction* outer() {\n  yield* inner();  // Delegate to inner generator\n  yield 3;\n}\nconst g2 = outer();\ng2.next().value;  // 1\ng2.next().value;  // 2\ng2.next().value;  // 3\n```\n\n**Memory trick:** yield = wrap it, yield* = unwrap and delegate!",
    tags: ['javascript', 'quiz', 'generators', 'yield', 'delegation'],
  },

{
    id: 'js-172',
    question: "🪞 What's missing?\n\n```javascript\nconst teams = [\n  { name: \"Team 1\", members: [\"Paul\", \"Lisa\"] },\n  { name: \"Team 2\", members: [\"Laura\", \"Tim\"] },\n];\n\nfunction* getMembers(members) {\n  for (let i = 0; i < members.length; i++) {\n    yield members[i];\n  }\n}\n\nfunction* getTeams(teams) {\n  for (let i = 0; i < teams.length; i++) {\n    // ✨ SOMETHING IS MISSING HERE ✨\n  }\n}\n\nconst obj = getTeams(teams);\nobj.next(); // { value: \"Paul\", done: false }\nobj.next(); // { value: \"Lisa\", done: false }\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          'yield getMembers(teams[i].members)',
          'yield* getMembers(teams[i].members)',
          'return getMembers(teams[i].members)',
          'return yield getMembers(teams[i].members)'
    ],
    correctAnswer: 1,
    explanation: "**Delegating to another generator requires yield*** - to flatten the nested generators!\n\n**Think of nested generators like Russian dolls** - yield* unpacks each layer!\n\n**What we need:**\n```javascript\nfunction* getTeams(teams) {\n  for (let i = 0; i < teams.length; i++) {\n    yield* getMembers(teams[i].members);  // ✅ Delegate!\n  }\n}\n```\n\n**Why each option works or fails:**\n\n**Option 1: yield getMembers(...) ❌**\n```javascript\nyield getMembers(teams[i].members);\n// Returns the GENERATOR OBJECT, not values!\n\nobj.next();  // { value: GeneratorObject, done: false }\n// Not what we want!\n```\n\n**Option 2: yield* getMembers(...) ✅**\n```javascript\nyield* getMembers(teams[i].members);\n// Delegates to the generator, yielding each member\n\nobj.next();  // { value: \"Paul\", done: false } ✅\nobj.next();  // { value: \"Lisa\", done: false } ✅\n```\n\n**Option 3: return getMembers(...) ❌**\n```javascript\nreturn getMembers(teams[i].members);\n// Returns generator and STOPS the outer generator\n// Only processes first team!\n```\n\n**Option 4: return yield getMembers(...) ❌**\n```javascript\nreturn yield getMembers(teams[i].members);\n// Yields generator object, then returns on next call\n// Doesn't iterate members!\n```\n\n**Complete execution flow:**\n```javascript\nconst teams = [\n  { members: [\"Paul\", \"Lisa\"] },\n  { members: [\"Laura\", \"Tim\"] }\n];\n\nfunction* getMembers(members) {\n  for (let i = 0; i < members.length; i++) {\n    yield members[i];\n  }\n}\n\nfunction* getTeams(teams) {\n  for (let i = 0; i < teams.length; i++) {\n    yield* getMembers(teams[i].members);\n    // Expands to:\n    // yield \"Paul\";\n    // yield \"Lisa\";\n    // (then next iteration)\n    // yield \"Laura\";\n    // yield \"Tim\";\n  }\n}\n\nconst obj = getTeams(teams);\nobj.next().value;  // \"Paul\"\nobj.next().value;  // \"Lisa\"\nobj.next().value;  // \"Laura\"\nobj.next().value;  // \"Tim\"\nobj.next().done;   // true\n```\n\n**Visual representation:**\n```javascript\n// Without yield* (wrong):\nfunction* getTeams(teams) {\n  for (let team of teams) {\n    yield getMembers(team.members);  // Yields generator\n  }\n}\n// Results in: [Generator, Generator]\n\n// With yield* (correct):\nfunction* getTeams(teams) {\n  for (let team of teams) {\n    yield* getMembers(team.members);  // Yields members\n  }\n}\n// Results in: \"Paul\", \"Lisa\", \"Laura\", \"Tim\"\n```\n\n**Memory trick:** yield* = flatten nested generators into single sequence!",
    tags: ['javascript', 'quiz', 'generators', 'yield*', 'delegation'],
  },

{
    id: 'js-173',
    question: "📦 What do we need to add to the `person` object to get `[\"Lydia Hallie\", 21]` as the output of `[...person]`?\n\n```javascript\nconst person = {\n  name: \"Lydia Hallie\",\n  age: 21\n}\n\n[...person] // [\"Lydia Hallie\", 21]\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'medium',
    options: [
          'Nothing, object are iterable by default',
          '*[Symbol.iterator]() { for (let x in this) yield* this[x] }',
          '*[Symbol.iterator]() { yield* Object.values(this) }',
          '*[Symbol.iterator]() { for (let x in this) yield this }'
    ],
    correctAnswer: 2,
    explanation: "**Objects need Symbol.iterator to be iterable** - add a generator to make them spreadable!\n\n**Think of Symbol.iterator like adding wheels to furniture** - it makes it movable (iterable)!\n\n**The problem:**\n```javascript\nconst person = { name: \"Lydia\", age: 21 };\n[...person];  // TypeError: person is not iterable ❌\n```\n\n**The solution:**\n```javascript\nconst person = {\n  name: \"Lydia Hallie\",\n  age: 21,\n  *[Symbol.iterator]() {  // Generator method\n    yield* Object.values(this);\n  }\n};\n\n[...person];  // [\"Lydia Hallie\", 21] ✅\n```\n\n**Why this works:**\n```javascript\n*[Symbol.iterator]() {\n  yield* Object.values(this);\n  // Object.values(this) = [\"Lydia Hallie\", 21]\n  // yield* delegates to array's iterator\n  // Yields each value: \"Lydia Hallie\", then 21\n}\n```\n\n**Step-by-step execution:**\n```javascript\nconst person = {\n  name: \"Lydia Hallie\",\n  age: 21,\n  *[Symbol.iterator]() {\n    yield* Object.values(this);\n  }\n};\n\n// When you spread:\n[...person]\n// 1. Calls person[Symbol.iterator]()\n// 2. Gets generator object\n// 3. Calls next() repeatedly\n// 4. Collects values: [\"Lydia Hallie\", 21]\n```\n\n**Why other options fail:**\n\n**Option 1: Nothing ❌**\n```javascript\n// Objects are NOT iterable by default\nconst obj = { a: 1 };\n[...obj];  // TypeError!\n```\n\n**Option 2: yield* this[x] ❌**\n```javascript\n*[Symbol.iterator]() {\n  for (let x in this) {\n    yield* this[x];  // Tries to iterate over string \"Lydia Hallie\"!\n  }\n}\n// Would yield: 'L', 'y', 'd', 'i', 'a', ..., '2', '1'\n```\n\n**Option 4: yield this ❌**\n```javascript\n*[Symbol.iterator]() {\n  for (let x in this) {\n    yield this;  // Yields entire object each time!\n  }\n}\n// Would yield: person, person, person\n```\n\n**Complete example with different outputs:**\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n  \n  // Yield values\n  *[Symbol.iterator]() {\n    yield* Object.values(this);\n  }\n};\n[...person];  // [\"Lydia\", 21]\n\n// Alternative: Yield keys\nconst person2 = {\n  name: \"Lydia\",\n  age: 21,\n  \n  *[Symbol.iterator]() {\n    yield* Object.keys(this);\n  }\n};\n[...person2];  // [\"name\", \"age\"]\n\n// Alternative: Yield entries\nconst person3 = {\n  name: \"Lydia\",\n  age: 21,\n  \n  *[Symbol.iterator]() {\n    yield* Object.entries(this);\n  }\n};\n[...person3];  // [[\"name\", \"Lydia\"], [\"age\", 21]]\n```\n\n**Memory trick:** Symbol.iterator + generator = make objects spreadable!",
    tags: ['javascript', 'quiz', 'generators', 'Symbol.iterator', 'iterables'],
  },

{
    id: 'js-175',
    question: "📝 What's the output?\n\n```javascript\nfunction* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst gen = generator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n```",
    category: 'javascript',
    subcategory: 'generators',
    difficulty: 'hard',
    options: [
          '1 and 2',
          '1 and 1',
          'undefined and undefined',
          'SyntaxError'
    ],
    correctAnswer: 0,
    explanation: "**Basic generator execution** - each next() resumes from the last yield!\n\n**Think of generators like a playlist** - next() plays the next song!\n\n**Execution flow:**\n```javascript\nfunction* generator() {\n  yield 1;  // Pause 1\n  yield 2;  // Pause 2\n  yield 3;  // Pause 3\n}\n\nconst gen = generator();  // Create generator (doesn't start)\n\n// First next()\ngen.next()\n// → Runs until: yield 1\n// → Returns: { value: 1, done: false }\n// → Pauses\n\nconsole.log(gen.next().value);  // 1 ✅\n\n// Second next()\ngen.next()\n// → Resumes from pause\n// → Runs until: yield 2\n// → Returns: { value: 2, done: false }\n// → Pauses\n\nconsole.log(gen.next().value);  // 2 ✅\n```\n\n**Complete sequence:**\n```javascript\nconst gen = generator();\n\ngen.next();  // { value: 1, done: false }\ngen.next();  // { value: 2, done: false }\ngen.next();  // { value: 3, done: false }\ngen.next();  // { value: undefined, done: true }\n```\n\n**Generator state:**\n```javascript\nfunction* generator() {\n  console.log('Start');\n  yield 1;           // State: Suspended at yield 1\n  console.log('After 1');\n  yield 2;           // State: Suspended at yield 2\n  console.log('After 2');\n  yield 3;           // State: Suspended at yield 3\n  console.log('Done');\n}\n\nconst gen = generator();\ngen.next();  // Logs: 'Start', returns { value: 1, done: false }\ngen.next();  // Logs: 'After 1', returns { value: 2, done: false }\ngen.next();  // Logs: 'After 2', returns { value: 3, done: false }\ngen.next();  // Logs: 'Done', returns { value: undefined, done: true }\n```\n\n**Memory trick:** Each next() picks up where the last yield left off!",
    tags: ['functions', 'generators', 'iterators', 'yield'],
  }
];
