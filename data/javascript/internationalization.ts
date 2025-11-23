import { QuizQuestion } from '../../types/quiz';

export const internationalizationQuizzes: QuizQuestion[] = [
{
    id: 'js-093',
    question: "🖥️ What's the output?\n\n```javascript\nfunction getFine(speed, amount) {\n  const formattedSpeed = new Intl.NumberFormat(\"en-US\", {\n    style: \"unit\",\n    unit: \"mile-per-hour\",\n  }).format(speed);\n\n  const formattedAmount = new Intl.NumberFormat(\"en-US\", {\n    style: \"currency\",\n    currency: \"USD\",\n  }).format(amount);\n\n  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;\n}\n\nconsole.log(getFine(130, 300));\n```",
    category: 'javascript',
    subcategory: 'internationalization',
    difficulty: 'medium',
    options: [
          "The driver drove 130 and has to pay 300",
          "The driver drove 130 mph and has to pay \\$300.00",
          "The driver drove undefined and has to pay undefined",
          "The driver drove 130.00 and has to pay 300.00"
    ],
    correctAnswer: 1,
    explanation: "With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currency` in `USD` results in `$300.00`.",
    tags: ["javascript","quiz"],
  },
];
