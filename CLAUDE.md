# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**intrvw** is a TikTok-style interview preparation app built with React Native and Expo. It features vertical-scrolling feeds for interview questions, quizzes, and bite-sized learning lessons with a retro terminal aesthetic.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (choose platform from menu)
npm start

# Platform-specific commands
npm run android    # Start on Android emulator
npm run ios        # Start on iOS simulator
npm run web        # Start web version

# Linting
npm run lint

# Reset project (moves starter code to app-example/)
npm run reset-project
```

## Architecture Overview

### Routing System (Expo Router)
- **File-based routing** in `app/` directory
- Uses `expo-router` with typed routes enabled
- Tab navigation defined in `app/(tabs)/`
- Modal screens available via Stack navigator
- Path aliases: `@/*` maps to project root

### Design System: Retro Terminal Theme
All UI follows a strict terminal aesthetic:
- **Colors**: Defined in `constants/RetroTheme.ts` (terminal green, amber, cyan, etc.)
- **Typography**: Monospace font family throughout
- **Layout**: Full-screen cards with TikTok-style vertical scrolling
- **Category Mapping**: Each content category has an assigned color from the theme

### Content Architecture
Three main content types, each with parallel structure:

1. **Interview Questions** (`data/questions.ts`, `types/question.ts`)
   - Types: behavioral, technical, situational, culture-fit
   - Components: `QuestionCard`, `QuestionFeed`

2. **Quizzes** (`data/quizzes.ts`, `types/quiz.ts`)
   - Multiple-choice with instant feedback
   - Categories: javascript, typescript, react, node, algorithms, etc.
   - Components: `QuizCard`, `QuizFeed`

3. **Learning Lessons** (`data/lessons.ts`, `types/learning.ts`)
   - Progressive learning paths (ordered by level)
   - Includes: concept, explanation, example, keyPoints, tryIt challenge
   - Components: `LessonCard`, `LessonFeed`, `LearnPage`

### Centralized Constants Pattern
**Critical**: All categories, colors, labels, and descriptions are centralized in `constants/AppConstants.ts`. This is the single source of truth:
- `CATEGORY_COLORS` - Color mapping for every category
- `CATEGORY_LABELS` - Display names (uppercase)
- `LEVEL_COLORS` - Difficulty/level colors
- `*_DESCRIPTIONS` - Category descriptions by feature
- `UI_CONSTANTS` - Spacing, padding, border widths

### Utility Functions
Before writing data manipulation code, check `utils/`:

**`utils/dataUtils.ts`** - Data operations:
- Counting: `getQuestionCountByType()`, `getQuizCountByCategory()`, `getLessonCountByCategory()`
- Filtering: `filterQuestionsByType()`, `filterQuizzesByCategory()`, `getLessonsByCategory()`
- Lookup: `getQuestionById()`, `getQuizById()`, `getLessonById()`
- Lesson helpers: `getLessonCountByLevel()`, `getLessonLevelBreakdown()`

**`utils/uiUtils.ts`** - UI helpers:
- Colors: `getCategoryColor()`, `getLevelColor()`
- Labels: `getCategoryLabel()`
- Formatting: `formatQuestionCount()`, `formatProgress()`, `formatReadTime()`

### Component Patterns

**Feed Components** (TikTok-style vertical scrolling):
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

**Card Components** (full-screen content):
```typescript
<View style={[styles.container, { height: SCREEN_HEIGHT }]}>
  <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
    {/* Content */}
  </ScrollView>
</View>
```

## Key Development Guidelines

### Adding New Content

**Interview Question**:
Add to `data/questions.ts` - counts update automatically via utilities

**Quiz Question**:
Add to `data/quizzes.ts` - ensure category exists in `AppConstants.ts`

**Lesson**:
Add to `data/lessons.ts` - set `order` field for learning path progression

**New Category** (requires 4 steps):
1. Update type in `types/` (e.g., `QuizCategory`, `LearningCategory`)
2. Add to `CATEGORY_COLORS` in `constants/AppConstants.ts`
3. Add to `CATEGORY_LABELS` in `constants/AppConstants.ts`
4. Add to appropriate `*_DESCRIPTIONS` mapping in `constants/AppConstants.ts`

### Code Standards

**Always use constants and utilities**:
- ✅ `getCategoryColor('javascript')` from `utils/uiUtils.ts`
- ❌ Hardcoding `'#FFB000'`
- ✅ `getQuestionCountByType('behavioral')` from `utils/dataUtils.ts`
- ❌ `questions.filter(q => q.type === 'behavioral').length`

**Always use RetroTheme colors**:
- ✅ `color: RetroColors.terminal`
- ❌ `color: '#00FF41'`

**Always use monospace font**:
- All text components should have `fontFamily: 'monospace'`

### Component Organization (Planned Migration)
The codebase is transitioning to feature-based component organization:
- `components/questions/` - Interview questions feature
- `components/quizzes/` - Quiz feature
- `components/learning/` - Learning lessons feature
- `components/home/` - Home page components
- `components/shared/` - Shared components (badges, etc.)
- `components/ui/` - Base UI components

See `COMPONENT_STRUCTURE.md` for migration details.

## TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` maps to project root
- Expo base config extended
- All files use `.tsx` or `.ts` extensions

## Platform Notes

- **iOS**: Haptic feedback supported
- **Android**: Edge-to-edge enabled, predictive back disabled
- **Web**: Static output, works with mouse/trackpad gestures
- **Orientation**: Portrait only
- **Theme**: Dark mode by default

## App Configuration

- Uses Expo's new architecture (`newArchEnabled: true`)
- React compiler experimental feature enabled
- Typed routes enabled for better navigation safety
- Expo Router handles all navigation
