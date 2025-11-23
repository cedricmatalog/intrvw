import { QuizQuestion } from '../types/quiz';

// JavaScript quizzes by subcategory
import { arraysQuizzes } from './javascript/arrays';
import { basicsQuizzes } from './javascript/basics';
import { classesQuizzes } from './javascript/classes';
import { closuresQuizzes } from './javascript/closures';
import { event_loopQuizzes } from './javascript/event-loop';
import { functionsQuizzes } from './javascript/functions';
import { generatorsQuizzes } from './javascript/generators';
import { iteratorsQuizzes } from './javascript/iterators';
import { modulesQuizzes } from './javascript/modules';
import { objectsQuizzes } from './javascript/objects';
import { operatorsQuizzes } from './javascript/operators';
import { promisesQuizzes } from './javascript/promises';
import { prototypesQuizzes } from './javascript/prototypes';
import { proxy_reflectQuizzes } from './javascript/proxy-reflect';
import { scopeQuizzes } from './javascript/scope';
import { symbolsQuizzes } from './javascript/symbols';
import { thisQuizzes } from './javascript/this';
import { type_coercionQuizzes } from './javascript/type-coercion';

// Other technology quizzes
import { typescriptQuizzes } from './typescript/typescript-quizzes';
import { reactQuizzes } from './react/react-quizzes';
import { nodeQuizzes } from './node/node-quizzes';
import { algorithmsQuizzes } from './algorithms/algorithms-quizzes';
import { dataStructuresQuizzes } from './data-structures/data-structures-quizzes';
import { systemDesignQuizzes } from './system-design/system-design-quizzes';
import { databasesQuizzes } from './databases/databases-quizzes';
import { webFundamentalsQuizzes } from './web-fundamentals/web-fundamentals-quizzes';
import { gitQuizzes } from './git/git-quizzes';

export const quizQuestions: QuizQuestion[] = [
  // JavaScript Questions
  ...arraysQuizzes,
  ...basicsQuizzes,
  ...classesQuizzes,
  ...closuresQuizzes,
  ...event_loopQuizzes,
  ...functionsQuizzes,
  ...generatorsQuizzes,
  ...iteratorsQuizzes,
  ...modulesQuizzes,
  ...objectsQuizzes,
  ...operatorsQuizzes,
  ...promisesQuizzes,
  ...prototypesQuizzes,
  ...proxy_reflectQuizzes,
  ...scopeQuizzes,
  ...symbolsQuizzes,
  ...thisQuizzes,
  ...type_coercionQuizzes,

  // TypeScript Questions
  ...typescriptQuizzes,

  // React Questions
  ...reactQuizzes,

  // Node.js Questions
  ...nodeQuizzes,

  // Algorithms Questions
  ...algorithmsQuizzes,

  // Data Structures Questions
  ...dataStructuresQuizzes,

  // System Design Questions
  ...systemDesignQuizzes,

  // Database Questions
  ...databasesQuizzes,

  // Web Fundamentals Questions
  ...webFundamentalsQuizzes,

  // Git Questions
  ...gitQuizzes,
];
