import { QuizQuestion } from '../../types/quiz';

export const referencesQuizzes: QuizQuestion[] = [
{
    id: 'js-071',
    question: "🖥️ What's the output?\n\n```javascript\nlet c = { greeting: \"Hey!\" };\nlet d;\n\nd = c;\nc.greeting = \"Hello\";\nconsole.log(d.greeting);\n```",
    category: 'javascript',
    subcategory: 'references',
    difficulty: 'medium',
    options: [
          'Hello',
          'Hey!',
          'undefined',
          'ReferenceError'
    ],
    correctAnswer: 0,
    explanation: "**Objects are assigned by reference** - both variables point to the same object!\n\n**Think of it like two remotes controlling one TV** - change the channel on either remote, and the TV changes for both!\n\n**What happens:**\n```javascript\nlet c = { greeting: \"Hey!\" };  // c → Object in memory\nlet d;\n\nd = c;  // d → SAME object (not a copy!)\n// Both c and d now reference the same object\n\nc.greeting = \"Hello\";  // Modify the object via c\n\nconsole.log(d.greeting);  // \"Hello\" ✅\n// d sees the change because it points to the same object!\n```\n\n**Visual representation:**\n```javascript\nMemory:\n  Address 0x123: { greeting: \"Hey!\" }\n         ↑              ↑\n         c              d\n    (both point to same object)\n\nAfter c.greeting = \"Hello\":\n  Address 0x123: { greeting: \"Hello\" }\n         ↑              ↑\n         c              d\n    (both still point to same object)\n```\n\n**Key concept:**\n```javascript\n// Assignment copies the REFERENCE, not the object\nlet obj1 = { value: 1 };\nlet obj2 = obj1;  // obj2 references same object\n\nobj2.value = 2;\nconsole.log(obj1.value);  // 2 (both see the change!)\n```\n\n**Memory trick:** d = c copies the address, not the house. Both variables have keys to the same house!",
    tags: ['javascript', 'quiz', 'references', 'objects'],
  },

{
    id: 'js-083',
    question: "🖥️ What is the output?\n\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n};\n\nlet city = person.city;\ncity = \"Amsterdam\";\n\nconsole.log(person);\n```",
    category: 'javascript',
    subcategory: 'references',
    difficulty: 'medium',
    options: [
          '{ name: "Lydia", age: 21 }',
          '{ name: "Lydia", age: 21, city: "Amsterdam" }',
          '{ name: "Lydia", age: 21, city: undefined }',
          '"Amsterdam"'
    ],
    correctAnswer: 0,
    explanation: "**Assigning undefined creates no link to the object** - you're just working with a primitive value!\n\n**Think of it like copying a phone number** - if you change the copy, the original phone book doesn't change!\n\n**Step-by-step:**\n```javascript\nconst person = {\n  name: \"Lydia\",\n  age: 21,\n  // No 'city' property!\n};\n\nlet city = person.city;  // person.city is undefined\n// city = undefined (primitive value, not a reference!)\n\ncity = \"Amsterdam\";  // Reassign city variable\n// This only changes the 'city' variable\n// Does NOT affect person object!\n\nconsole.log(person);  // { name: \"Lydia\", age: 21 } ✅\n// No 'city' property was ever added\n```\n\n**Why this doesn't create a reference:**\n```javascript\n// When you access a non-existent property:\nperson.city  // undefined (primitive)\n\n// Primitives are copied by VALUE:\nlet city = undefined;  // Just a copy of undefined\ncity = \"Amsterdam\";    // Changes local variable only\n```\n\n**Compare with actual reference:**\n```javascript\nconst person = {\n  name: \"Lydia\",\n  address: { city: \"New York\" }  // Nested object\n};\n\n// This DOES create a reference:\nlet addr = person.address;  // Reference to object\naddr.city = \"Amsterdam\";    // Modifies person.address.city ✅\n\nconsole.log(person.address.city);  // \"Amsterdam\"\n```\n\n**Memory trick:** Accessing undefined property gives you undefined (primitive), not a reference!",
    tags: ['javascript', 'quiz', 'references', 'primitives'],
  },

{
    id: 'js-105',
    question: "🖥️ What's the output?\n\n```javascript\nlet person = { name: \"Lydia\" };\nconst members = [person];\nperson = null;\n\nconsole.log(members);\n```",
    category: 'javascript',
    subcategory: 'references',
    difficulty: 'medium',
    options: [
          'null',
          '[null]',
          '[{}]',
          '[{ name: "Lydia" }]'
    ],
    correctAnswer: 3,
    explanation: "**Reassigning a variable doesn't affect copies of its previous reference** - the array still has the original reference!\n\n**Think of it like photocopying a business card** - throwing away the original doesn't erase the photocopy!\n\n**What happens:**\n```javascript\n// 1. Create object\nlet person = { name: \"Lydia\" };  // person → Object A\n\n// 2. Array stores COPY of reference\nconst members = [person];  // members[0] → Object A (copy of reference)\n\n// 3. Reassign person variable\nperson = null;  // person → null\n// BUT members[0] STILL points to Object A!\n\nconsole.log(members);  // [{ name: \"Lydia\" }] ✅\n```\n\n**Visual timeline:**\n```javascript\nStep 1:\n  Object A: { name: \"Lydia\" }\n  person → Object A\n\nStep 2:\n  Object A: { name: \"Lydia\" }\n  person → Object A\n  members[0] → Object A (independent reference!)\n\nStep 3:\n  Object A: { name: \"Lydia\" } (still exists!)\n  person → null\n  members[0] → Object A (unchanged!)\n```\n\n**Key insight:**\n```javascript\nlet a = { x: 1 };\nlet b = a;  // b gets COPY of reference\n\na = null;   // Only changes 'a' variable\n\nconsole.log(b);  // { x: 1 } (b still has the reference!)\n```\n\n**Compare with actual modification:**\n```javascript\nlet person = { name: \"Lydia\" };\nconst members = [person];\n\n// Modify the object (not reassign variable):\nperson.name = \"Sarah\";\n\nconsole.log(members);  // [{ name: \"Sarah\" }]\n// Both references see the change!\n```\n\n**Memory trick:** Reassigning variable = change what variable points to, doesn't affect other references!",
    tags: ['javascript', 'quiz', 'references', 'null'],
  },

{
    id: 'js-111',
    question: "🖥️ What's the output?\n\n```javascript\nconst food = [\"🍕\", \"🍫\", \"🥑\", \"🍔\"];\nconst info = { favoriteFood: food[0] };\n\ninfo.favoriteFood = \"🍝\";\n\nconsole.log(food);\n```",
    category: 'javascript',
    subcategory: 'references',
    difficulty: 'medium',
    options: [
          "['🍕', '🍫', '🥑', '🍔']",
          "['🍝', '🍫', '🥑', '🍔']",
          "['🍝', '🍕', '🍫', '🥑', '🍔']",
          'ReferenceError'
    ],
    correctAnswer: 0,
    explanation: "**Primitives are copied by value, not reference** - changing the copy doesn't affect the original!\n\n**Think of it like writing down a number** - changing your note doesn't change the original number!\n\n**What happens:**\n```javascript\nconst food = [\"🍕\", \"🍫\", \"🥑\", \"🍔\"];\n\n// Get primitive value from array:\nconst info = { favoriteFood: food[0] };\n// food[0] = \"🍕\" (string primitive)\n// favoriteFood gets a COPY of the string \"🍕\"\n// No connection to food[0]!\n\ninfo.favoriteFood = \"🍝\";  // Changes the copy only\n\nconsole.log(food);  // ['🍕', '🍫', '🥑', '🍔'] ✅\n// Original array unchanged!\n```\n\n**Primitives vs Objects:**\n```javascript\n// Primitives (by value):\nlet a = \"pizza\";\nlet b = a;  // b gets COPY of value\nb = \"pasta\";\nconsole.log(a);  // \"pizza\" (unchanged)\n\n// Objects (by reference):\nlet obj1 = { food: \"pizza\" };\nlet obj2 = obj1;  // obj2 gets reference\nobj2.food = \"pasta\";\nconsole.log(obj1.food);  // \"pasta\" (changed!)\n```\n\n**If food contained objects:**\n```javascript\nconst food = [{ name: \"🍕\" }, { name: \"🍫\" }];\nconst info = { favoriteFood: food[0] };  // Reference!\n\ninfo.favoriteFood.name = \"🍝\";  // Modifies object\n\nconsole.log(food[0].name);  // \"🍝\" (changed!)\n// Because info.favoriteFood references the same object\n```\n\n**Memory trick:** String/number/boolean = copy by value, objects/arrays = copy by reference!",
    tags: ['javascript', 'quiz', 'references', 'primitives', 'by-value'],
  },
];
