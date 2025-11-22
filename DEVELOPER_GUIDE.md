# Developer Guide - intrvw

Quick reference for maintaining and extending the intrvw codebase.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on specific platform
npm run android
npm run ios
npm run web
```

## 📦 Folder Organization

### `/constants` - Single Source of Truth
**Always check here first!** All category colors, labels, and descriptions are centralized.

```typescript
// ✅ GOOD - Use constants
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/constants/AppConstants';
const color = CATEGORY_COLORS.javascript;

// ❌ BAD - Don't hardcode
const color = '#FFB000';
```

### `/utils` - Reusable Logic
Before writing data manipulation code, check if a utility exists.

```typescript
// ✅ GOOD - Use utilities
import { getQuestionCountByType } from '@/utils/dataUtils';
const count = getQuestionCountByType('behavioral');

// ❌ BAD - Don't repeat logic
const count = questions.filter(q => q.type === 'behavioral').length;
```

### `/data` - Content Files
Add new content here. Counts and filtering happen automatically.

### `/types` - TypeScript Definitions
Update types when adding new categories or fields.

## 🎨 Styling Guidelines

### Always Use RetroTheme
```typescript
import { RetroColors } from '@/constants/RetroTheme';

// ✅ Use theme colors
color: RetroColors.terminal
backgroundColor: RetroColors.background

// ❌ Don't hardcode colors
color: '#00FF41'
```

### Consistent Spacing
```typescript
import { UI_CONSTANTS } from '@/constants/AppConstants';

padding: UI_CONSTANTS.SCREEN_PADDING  // 20
gap: UI_CONSTANTS.CARD_SPACING        // 16
borderWidth: UI_CONSTANTS.BORDER_WIDTH // 2
```

### Monospace Font
All text should use monospace font:
```typescript
fontFamily: 'monospace'
```

## 🔧 Common Modifications

### 1. Add New Interview Question

**File:** `data/questions.ts`

```typescript
{
  id: 'new-q1',
  question: 'Your question here?',
  type: 'behavioral',  // or 'technical', 'situational', 'culture-fit'
  category: 'general',
  sampleAnswer: 'Sample answer...',
  tips: ['Tip 1', 'Tip 2'],
  keyPoints: ['Key point 1', 'Key point 2'],
  whatToAvoid: ['Avoid this', 'Avoid that'],
}
```

✅ That's it! The HomePage will automatically show the updated count.

### 2. Add New Quiz Question

**File:** `data/quizzes.ts`

```typescript
{
  id: 'quiz-new',
  question: 'What is...?',
  category: 'javascript',
  difficulty: 'medium',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 1,  // Index of correct option (0-based)
  explanation: 'Explanation of the answer...',
  tags: ['tag1', 'tag2'],
}
```

### 3. Add New Lesson

**File:** `data/lessons.ts`

```typescript
{
  id: 'js-new',
  category: 'javascript',
  level: 'beginner',  // or 'intermediate', 'advanced'
  order: 6,  // Position in learning path
  title: 'Lesson Title',
  concept: 'Main concept being taught',
  explanation: 'Detailed explanation...',
  example: `// Code example
const x = 5;`,
  keyPoints: ['Point 1', 'Point 2'],
  tryIt: 'Challenge for the learner',
  nextUp: 'Preview of next lesson',
}
```

### 4. Add New Category

**Step 1:** Update type definition

**File:** `types/quiz.ts` (or `types/learning.ts`)
```typescript
export type QuizCategory =
  | 'javascript'
  | 'typescript'
  | 'your-new-category'  // Add here
  // ...
```

**Step 2:** Add constants

**File:** `constants/AppConstants.ts`
```typescript
export const CATEGORY_COLORS = {
  // ...
  'your-new-category': RetroColors.purple,
};

export const CATEGORY_LABELS = {
  // ...
  'your-new-category': 'YOUR NEW CATEGORY',
};

export const QUIZ_CATEGORY_DESCRIPTIONS = {
  // ...
  'your-new-category': 'Description of this category',
};
```

**Step 3:** Add to HomePage list

**File:** `components/HomePage.tsx`
```typescript
const quizCategoryList: Array<QuizCategory | 'all'> = [
  'all',
  'javascript',
  'your-new-category',  // Add here
  // ...
];
```

### 5. Change Category Color

**File:** `constants/AppConstants.ts`
```typescript
export const CATEGORY_COLORS: Record<string, string> = {
  javascript: RetroColors.blue,  // Change from amber to blue
  // ...
};
```

✅ All components using `getCategoryColor('javascript')` update automatically!

## 🎯 Utility Function Reference

### Data Utils (`utils/dataUtils.ts`)

```typescript
// Counts
getQuestionCountByType('behavioral')      // Number of questions
getQuizCountByCategory('javascript')      // Number of quizzes
getLessonCountByCategory('react')         // Number of lessons
getAllQuizCategoryCounts()                // Object with all counts

// Filtering
filterQuestionsByType('technical')        // Array of questions
filterQuizzesByCategory('typescript')     // Array of quizzes
getLessonsByCategory('javascript')        // Array of lessons (sorted)

// By ID
getQuestionById('q1')
getQuizById('js-001')
getLessonById('js-001')

// Lesson helpers
getLessonCountByLevel('react', 'beginner')
getLessonLevelBreakdown('javascript')     // { beginner: 5, intermediate: 5, advanced: 5 }
```

### UI Utils (`utils/uiUtils.ts`)

```typescript
// Colors
getCategoryColor('javascript')    // Returns color from CATEGORY_COLORS
getLevelColor('hard')            // Returns color from LEVEL_COLORS

// Labels
getCategoryLabel('javascript')   // Returns "JAVASCRIPT"

// Formatting
formatQuestionCount(5)           // "5 QUESTIONS"
formatLessonCount(1)            // "1 LESSON"
formatProgress(3, 10)           // "30% Complete"
formatReadTime(5)               // "5 MIN READ"
getProgressPercentage(3, 10)    // 30
```

## 🐛 Debugging

### TypeScript Errors
- Check if types are imported from the right location
- Ensure new categories are added to type definitions
- Verify utility function signatures match usage

### Category Not Showing
1. Check if added to `AppConstants.ts`
2. Verify data exists in `/data` folder
3. Check if category is in the list (e.g., `quizCategoryList` in HomePage)

### Wrong Color Displaying
- Verify category name matches exactly (case-sensitive, hyphens)
- Check `CATEGORY_COLORS` in `AppConstants.ts`
- Use `getCategoryColor()` utility, don't hardcode

## 📋 Code Review Checklist

Before committing:
- [ ] Used constants from `AppConstants.ts` (no hardcoded values)
- [ ] Used utility functions from `utils/` (no duplicate logic)
- [ ] Followed existing component patterns
- [ ] Used `RetroColors` for all colors
- [ ] Used `monospace` font family
- [ ] Added TypeScript types
- [ ] Tested on multiple screen sizes
- [ ] No console errors or warnings

## 🎨 Component Patterns

### Feed Component Pattern
```typescript
<FlatList
  data={items}
  renderItem={({ item }) => <ItemCard item={item} />}
  keyExtractor={(item) => item.id}
  pagingEnabled
  showsVerticalScrollIndicator={false}
  snapToInterval={SCREEN_HEIGHT}
  snapToAlignment="start"
  decelerationRate="fast"
/>
```

### Card Component Pattern
```typescript
<View style={[styles.container, { height: SCREEN_HEIGHT }]}>
  <ScrollView
    style={styles.scrollView}
    contentContainerStyle={styles.scrollContent}
  >
    {/* Content */}
  </ScrollView>
</View>
```

### Badge Pattern
```typescript
<View style={[styles.badge, { borderColor: color }]}>
  <Text style={[styles.badgeText, { color }]}>
    {label.toUpperCase()}
  </Text>
</View>
```

## 🔄 State Management

Currently using **local state only** (useState). No global state management.

Future: If app grows, consider:
- React Context for user progress
- AsyncStorage for persistence
- Zustand/Redux if needed

## 📱 Platform-Specific Notes

### iOS
- Monospace font renders well
- Haptic feedback works

### Android
- Monospace font supported
- Haptic feedback works

### Web
- Monospace font: use CSS fallback
- Swipe gestures work with mouse/trackpad

## 🚨 Common Pitfalls

### ❌ Don't
```typescript
// Hardcoded colors
const color = '#00FF41';

// Duplicate counting logic
const count = questions.filter(q => q.type === 'behavioral').length;

// Hardcoded labels
const label = 'JAVASCRIPT';

// Inline styles for colors
<Text style={{ color: '#00FF41' }}>
```

### ✅ Do
```typescript
// Use constants
const color = RetroColors.terminal;

// Use utilities
const count = getQuestionCountByType('behavioral');

// Use constants
const label = CATEGORY_LABELS.javascript;

// Use theme colors
<Text style={{ color: RetroColors.terminal }}>
```

## 📞 Need Help?

1. Check `PROJECT_STRUCTURE.md` for architecture overview
2. Look at similar existing components
3. Use utility functions from `/utils`
4. Check constants in `/constants`
5. Follow the patterns established in existing code

---

**Remember:** Maintainable code is consistent code. Follow the patterns!
