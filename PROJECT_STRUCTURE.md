# intrvw - Project Structure

A TikTok-style interview preparation app built with React Native and Expo.

## 📁 Project Structure

```
intrvw/
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Home screen
│   │   ├── learn.tsx      # Learn tab
│   │   └── explore.tsx    # Stats tab
│   ├── learn/             # Learn feature routes
│   │   ├── path.tsx       # Learning path lessons
│   │   └── content.tsx    # (deprecated)
│   ├── practice.tsx       # Practice interview questions
│   └── quiz.tsx           # Quiz practice
│
├── components/            # Reusable UI components
│   ├── HomePage.tsx       # Home page with categories
│   ├── LearnPage.tsx      # Learning paths browser
│   ├── QuestionCard.tsx   # Interview question card
│   ├── QuestionFeed.tsx   # TikTok-style question feed
│   ├── QuizCard.tsx       # Quiz question card
│   ├── QuizFeed.tsx       # Quiz practice feed
│   ├── LessonCard.tsx     # Bite-sized lesson card
│   └── LessonFeed.tsx     # TikTok-style lesson feed
│
├── constants/             # App-wide constants
│   ├── RetroTheme.ts      # Color theme
│   └── AppConstants.ts    # Category colors, labels, descriptions
│
├── data/                  # Content data
│   ├── questions.ts       # Interview questions
│   ├── quizzes.ts         # Quiz questions
│   └── lessons.ts         # Learning lessons
│
├── types/                 # TypeScript type definitions
│   ├── question.ts        # Interview question types
│   ├── quiz.ts            # Quiz types
│   └── learning.ts        # Learning/lesson types
│
└── utils/                 # Utility functions
    ├── dataUtils.ts       # Data operations (counting, filtering)
    └── uiUtils.ts         # UI helpers (colors, formatting)
```

## 🎨 Design System

### Colors (RetroTheme.ts)
- **terminal**: `#00FF41` - Primary green
- **amber**: `#FFB000` - Warnings/intermediate
- **blue**: `#00B4D8` - Technical content
- **cyan**: `#00D9FF` - React/modern
- **red**: `#FF006E` - Advanced/errors
- **purple**: `#8338EC` - Culture/special
- **background**: `#000000` - Black background
- **text**: `#FFFFFF` - White text

### Category Color Mapping
Each content category has an associated color (see `AppConstants.ts`):
- JavaScript → Amber
- TypeScript → Blue
- React → Cyan
- Node.js → Green
- Algorithms → Purple
- etc.

## 🧩 Key Components

### Feed Components (TikTok-style)
All feed components follow the same pattern:
```typescript
<FlatList
  pagingEnabled
  snapToInterval={SCREEN_HEIGHT}
  snapToAlignment="start"
  decelerationRate="fast"
/>
```

- **QuestionFeed**: Interview questions
- **QuizFeed**: Quiz questions
- **LessonFeed**: Learning lessons

### Card Components
Full-screen cards that display content:
- **QuestionCard**: Shows question, answer, tips, key points
- **QuizCard**: Multiple choice with instant feedback
- **LessonCard**: Concept, explanation, code example, try-it challenge

## 🛠️ Utility Functions

### dataUtils.ts
```typescript
// Get counts
getQuestionCountByType('behavioral')
getQuizCountByCategory('javascript')
getLessonCountByCategory('react')

// Filter data
filterQuestionsByType('technical')
filterQuizzesByCategory('typescript')
getLessonsByCategory('javascript')

// Get by ID
getQuestionById('q1')
getQuizById('js-001')
getLessonById('js-001')
```

### uiUtils.ts
```typescript
// Get colors
getCategoryColor('javascript')  // Returns amber
getLevelColor('hard')          // Returns red

// Format text
formatQuestionCount(5)         // "5 QUESTIONS"
formatProgress(3, 10)          // "30% Complete"
getCategoryLabel('javascript')  // "JAVASCRIPT"
```

## 📊 Content Types

### Interview Questions
```typescript
{
  id: string
  question: string
  type: 'behavioral' | 'technical' | 'situational' | 'culture-fit'
  category: Category
  sampleAnswer: string
  tips?: string[]
  keyPoints?: string[]
  whatToAvoid?: string[]
}
```

### Quiz Questions
```typescript
{
  id: string
  question: string
  category: QuizCategory
  difficulty: 'easy' | 'medium' | 'hard'
  options: string[]
  correctAnswer: number
  explanation: string
}
```

### Lessons
```typescript
{
  id: string
  category: LearningCategory
  level: 'beginner' | 'intermediate' | 'advanced'
  order: number
  title: string
  concept: string
  explanation: string
  example?: string
  keyPoints: string[]
  tryIt?: string
  nextUp?: string
}
```

## 🔄 Adding New Content

### Add Interview Questions
1. Edit `data/questions.ts`
2. Add new question object
3. Counts update automatically

### Add Quiz Questions
1. Edit `data/quizzes.ts`
2. Add new quiz object
3. Use existing categories or add to `AppConstants.ts`

### Add Lessons
1. Edit `data/lessons.ts`
2. Set appropriate `order` number for progression
3. Mark with `level`: beginner → intermediate → advanced

### Add New Category
1. Add to type in `types/` (QuizCategory, LearningCategory, etc.)
2. Add color mapping in `AppConstants.ts` → `CATEGORY_COLORS`
3. Add label in `AppConstants.ts` → `CATEGORY_LABELS`
4. Add description in `AppConstants.ts`

## 🎯 Best Practices

### When Adding Features
1. **Use existing utilities** - Check `utils/` before writing new logic
2. **Use constants** - Never hardcode colors/labels, use `AppConstants.ts`
3. **Follow patterns** - Look at existing components for consistency
4. **Update types** - Keep TypeScript types in sync

### Component Guidelines
- Use `RetroColors` for all colors
- Use `monospace` font family
- Keep full-screen cards at `SCREEN_HEIGHT`
- Use utility functions for data operations
- Add JSDoc comments for exported functions

### Code Organization
- **Constants**: App-wide values → `constants/`
- **Utils**: Reusable logic → `utils/`
- **Types**: TypeScript definitions → `types/`
- **Data**: Content → `data/`
- **Components**: UI → `components/`

## 🚀 Common Tasks

### Change Category Color
Edit `constants/AppConstants.ts`:
```typescript
export const CATEGORY_COLORS = {
  javascript: RetroColors.amber,  // Change this
  // ...
}
```

### Add New Question Type
1. Add to `types/question.ts`
2. Add color in `AppConstants.ts`
3. Add label in `AppConstants.ts`
4. Add description in `AppConstants.ts`
5. Add to HomePage categories list

### Modify Card Layout
All card components follow similar patterns. Edit the specific card component:
- `QuestionCard.tsx` - Interview questions
- `QuizCard.tsx` - Quizzes
- `LessonCard.tsx` - Lessons

## 📝 Development Notes

- **Retro Terminal Theme**: All UI uses monospace fonts and terminal colors
- **TikTok-style UX**: Vertical scrolling, one card per screen
- **Progressive Learning**: Lessons ordered beginner → advanced
- **Type Safety**: Full TypeScript coverage
- **Maintainability**: Centralized constants and utilities

## 🤝 Contributing

When adding new features:
1. Check if utilities exist for your use case
2. Add to `AppConstants.ts` if adding categories/types
3. Follow existing component patterns
4. Keep code DRY - extract repeated logic
5. Update this documentation
