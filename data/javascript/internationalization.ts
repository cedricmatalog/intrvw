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
    explanation: "**Intl.NumberFormat automatically adds locale-specific formatting** - mph for units, $X.00 for currency!\n\n**Think of Intl.NumberFormat like a translator** - it speaks the language (locale) and knows the customs (units, currency symbols)!\n\n**What happens:**\n```javascript\n// Format speed as unit:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"unit\",\n  unit: \"mile-per-hour\"\n}).format(130);\n// Result: \"130 mph\" ✅\n// Adds unit abbreviation automatically\n\n// Format amount as currency:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"currency\",\n  currency: \"USD\"\n}).format(300);\n// Result: \"$300.00\" ✅\n// Adds $ symbol and decimal places\n\n// Final output:\n// \"The driver drove 130 mph and has to pay $300.00\"\n```\n\n**Why automatic formatting:**\n```javascript\n// Currency style adds:\n// - Currency symbol ($, €, ¥, etc.)\n// - Decimal places (.00)\n// - Grouping separators for large numbers (1,000)\n\nconst formatter = new Intl.NumberFormat(\"en-US\", {\n  style: \"currency\",\n  currency: \"USD\"\n});\n\nformatter.format(300);      // \"$300.00\" ✅\nformatter.format(1234.56);  // \"$1,234.56\" ✅\nformatter.format(0.99);     // \"$0.99\" ✅\n```\n\n**Different locales, same value:**\n```javascript\nconst amount = 1234.56;\n\n// US format:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"currency\",\n  currency: \"USD\"\n}).format(amount);  // \"$1,234.56\"\n\n// European format:\nnew Intl.NumberFormat(\"de-DE\", {\n  style: \"currency\",\n  currency: \"EUR\"\n}).format(amount);  // \"1.234,56 €\"\n\n// Japanese format:\nnew Intl.NumberFormat(\"ja-JP\", {\n  style: \"currency\",\n  currency: \"JPY\"\n}).format(amount);  // \"¥1,235\" (no decimals for yen)\n```\n\n**Unit formatting options:**\n```javascript\n// Speed:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"unit\",\n  unit: \"mile-per-hour\"\n}).format(65);  // \"65 mph\"\n\n// Temperature:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"unit\",\n  unit: \"celsius\"\n}).format(25);  // \"25°C\"\n\n// Distance:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"unit\",\n  unit: \"kilometer\"\n}).format(100);  // \"100 km\"\n```\n\n**Common Intl.NumberFormat styles:**\n```javascript\nconst num = 1234.567;\n\n// Decimal (default):\nnew Intl.NumberFormat(\"en-US\").format(num);\n// \"1,234.567\"\n\n// Percent:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"percent\"\n}).format(0.85);\n// \"85%\"\n\n// Currency:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"currency\",\n  currency: \"USD\"\n}).format(num);\n// \"$1,234.57\"\n\n// Unit:\nnew Intl.NumberFormat(\"en-US\", {\n  style: \"unit\",\n  unit: \"liter\"\n}).format(num);\n// \"1,234.567 L\"\n```\n\n**Memory trick:** Intl.NumberFormat = automatic locale-aware formatting with symbols!",
    tags: ["javascript","quiz", "Intl", "internationalization"],
  },
];
