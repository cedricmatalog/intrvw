import { QuizQuestion } from '../types/quiz';

// JavaScript quizzes by subcategory
import { advanced_operatorsQuizzes } from './javascript/advanced-operators';
import { array_operationsQuizzes } from './javascript/array-operations';
import { arraysQuizzes } from './javascript/arrays';
import { async_awaitQuizzes } from './javascript/async-await';
import { classesQuizzes } from './javascript/classes';
import { closuresQuizzes } from './javascript/closures';
import { destructuringQuizzes } from './javascript/destructuring';
import { error_handlingQuizzes } from './javascript/error-handling';
import { event_loopQuizzes } from './javascript/event-loop';
import { functionsQuizzes } from './javascript/functions';
import { generatorsQuizzes } from './javascript/generators';
import { internationalizationQuizzes } from './javascript/internationalization';
import { iteratorsQuizzes } from './javascript/iterators';
import { map_setQuizzes } from './javascript/map-set';
import { miscellaneousQuizzes } from './javascript/miscellaneous';
import { modulesQuizzes } from './javascript/modules';
import { object_fundamentalsQuizzes } from './javascript/object-fundamentals';
import { object_methodsQuizzes } from './javascript/object-methods';
import { objectsQuizzes } from './javascript/objects';
import { operatorsQuizzes } from './javascript/operators';
import { promisesQuizzes } from './javascript/promises';
import { prototypesQuizzes } from './javascript/prototypes';
import { proxy_reflectQuizzes } from './javascript/proxy-reflect';
import { referencesQuizzes } from './javascript/references';
import { regexQuizzes } from './javascript/regex';
import { scopeQuizzes } from './javascript/scope';
import { string_methodsQuizzes } from './javascript/string-methods';
import { symbolsQuizzes } from './javascript/symbols';
import { thisQuizzes } from './javascript/this';
import { type_coercionQuizzes } from './javascript/type-coercion';
import { type_systemQuizzes } from './javascript/type-system';
import { weak_collectionsQuizzes } from './javascript/weak-collections';

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
  ...advanced_operatorsQuizzes,
  ...array_operationsQuizzes,
  ...arraysQuizzes,
  ...async_awaitQuizzes,
  ...classesQuizzes,
  ...closuresQuizzes,
  ...destructuringQuizzes,
  ...error_handlingQuizzes,
  ...event_loopQuizzes,
  ...functionsQuizzes,
  ...generatorsQuizzes,
  ...internationalizationQuizzes,
  ...iteratorsQuizzes,
  ...map_setQuizzes,
  ...miscellaneousQuizzes,
  ...modulesQuizzes,
  ...object_fundamentalsQuizzes,
  ...object_methodsQuizzes,
  ...objectsQuizzes,
  ...operatorsQuizzes,
  ...promisesQuizzes,
  ...prototypesQuizzes,
  ...proxy_reflectQuizzes,
  ...referencesQuizzes,
  ...regexQuizzes,
  ...scopeQuizzes,
  ...string_methodsQuizzes,
  ...symbolsQuizzes,
  ...thisQuizzes,
  ...type_coercionQuizzes,
  ...type_systemQuizzes,
  ...weak_collectionsQuizzes,

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
