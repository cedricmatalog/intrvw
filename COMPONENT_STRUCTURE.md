# Component Folder Structure

## 🎯 New Feature-Based Organization

```
components/
├── questions/              # Interview Questions Feature
│   ├── QuestionCard.tsx   # Individual question card
│   ├── QuestionFeed.tsx   # TikTok-style feed
│   └── index.ts           # Barrel export
│
├── quizzes/               # Quiz Feature
│   ├── QuizCard.tsx      # Quiz question with multiple choice
│   ├── QuizFeed.tsx      # Quiz practice feed
│   └── index.ts          # Barrel export
│
├── learning/              # Learning Feature (TikTok-style lessons)
│   ├── LessonCard.tsx    # Bite-sized lesson card
│   ├── LessonFeed.tsx    # Learning feed
│   ├── LearnPage.tsx     # Learning paths browser
│   └── index.ts          # Barrel export
│
├── home/                  # Home Page Components
│   ├── HomePage.tsx      # Main home page
│   ├── CategoryCard.tsx  # Reusable category card (extracted)
│   └── index.ts          # Barrel export
│
├── shared/                # Shared Components (used across features)
│   ├── Badge.tsx         # Category/level badges
│   └── index.ts          # Barrel export
│
└── ui/                    # Base UI Components
    ├── icon-symbol.tsx   # Icon component
    ├── haptic-tab.tsx    # Tab with haptic feedback
    └── index.ts          # Barrel export
```

## 📦 Benefits of This Structure

### 1. **Feature Isolation**
- All question-related components together
- Easy to find what you need
- Clear separation of concerns

### 2. **Scalability**
- Add new features easily
- Each folder can have its own utilities if needed
- Can add feature-specific types/hooks

### 3. **Better Imports**
```typescript
// Instead of:
import { QuestionCard } from '@/components/QuestionCard';
import { QuestionFeed } from '@/components/QuestionFeed';

// Now:
import { QuestionCard, QuestionFeed } from '@/components/questions';
```

### 4. **Reusability**
- `shared/` for components used across features
- `ui/` for basic building blocks
- Clear distinction between specific and generic

## 🔄 Migration Plan

### Phase 1: Create Folders
```bash
mkdir -p components/questions
mkdir -p components/quizzes
mkdir -p components/learning
mkdir -p components/home
mkdir -p components/shared
```

### Phase 2: Move Files
- `QuestionCard.tsx` → `questions/`
- `QuestionFeed.tsx` → `questions/`
- `QuizCard.tsx` → `quizzes/`
- `QuizFeed.tsx` → `quizzes/`
- `LessonCard.tsx` → `learning/`
- `LessonFeed.tsx` → `learning/`
- `LearnPage.tsx` → `learning/`
- `HomePage.tsx` → `home/`

### Phase 3: Extract Reusable Components
- Extract `CategoryCard` from `HomePage.tsx` → `home/CategoryCard.tsx`
- Extract `Badge` pattern → `shared/Badge.tsx`

### Phase 4: Add Barrel Exports
Create `index.ts` in each folder to simplify imports

### Phase 5: Update All Imports
Update imports across the app to use new paths

## 📝 Component Responsibilities

### `/questions` - Interview Questions
**Purpose:** Everything related to practicing interview questions
- `QuestionCard`: Display question, answer, tips, key points
- `QuestionFeed`: Vertical scrolling feed of questions

### `/quizzes` - Technical Quizzes
**Purpose:** Multiple-choice quiz questions with instant feedback
- `QuizCard`: Quiz question with options and explanation
- `QuizFeed`: Vertical scrolling quiz practice

### `/learning` - TikTok Learning
**Purpose:** Bite-sized progressive lessons
- `LessonCard`: Lesson with concept, examples, try-it
- `LessonFeed`: Vertical scrolling lessons
- `LearnPage`: Browse and select learning paths

### `/home` - Home Page
**Purpose:** Landing page and navigation
- `HomePage`: Main entry point with categories
- `CategoryCard`: Reusable card for displaying categories

### `/shared` - Shared Components
**Purpose:** Components used across multiple features
- `Badge`: Display category/level/type badges
- Future: `ProgressBar`, `InfoBox`, etc.

### `/ui` - Base UI
**Purpose:** Basic building blocks
- Atomic components
- No feature-specific logic
- Highly reusable

## 🎨 Future Additions

As the app grows, you might add:

```
components/
├── stats/                 # Statistics feature
│   ├── StatsPage.tsx
│   ├── ProgressChart.tsx
│   └── index.ts
│
├── profile/              # User profile
│   ├── ProfilePage.tsx
│   ├── AchievementCard.tsx
│   └── index.ts
│
├── search/               # Search functionality
│   ├── SearchBar.tsx
│   ├── SearchResults.tsx
│   └── index.ts
│
└── shared/
    ├── Badge.tsx
    ├── ProgressBar.tsx
    ├── InfoBox.tsx       # Terminal-style info boxes
    ├── EmptyState.tsx    # No content states
    └── LoadingState.tsx  # Loading states
```

## 🔧 Barrel Export Pattern

Each folder has an `index.ts` that exports all components:

```typescript
// components/questions/index.ts
export { QuestionCard } from './QuestionCard';
export { QuestionFeed } from './QuestionFeed';
```

**Usage:**
```typescript
// Clean import
import { QuestionCard, QuestionFeed } from '@/components/questions';

// Instead of
import { QuestionCard } from '@/components/questions/QuestionCard';
import { QuestionFeed } from '@/components/questions/QuestionFeed';
```

## 📋 Naming Conventions

### Files
- PascalCase for component files: `QuestionCard.tsx`
- camelCase for utilities: `questionHelpers.ts`
- lowercase for barrel exports: `index.ts`

### Folders
- lowercase with hyphens: `questions/`, `learning/`
- Descriptive feature names

### Components
- PascalCase: `QuestionCard`, `QuizFeed`
- Suffix with type when helpful: `Card`, `Feed`, `Page`

## 🚀 Migration Checklist

- [ ] Create new folder structure
- [ ] Move components to new folders
- [ ] Extract `CategoryCard` from `HomePage`
- [ ] Extract `Badge` component
- [ ] Create barrel exports (`index.ts`)
- [ ] Update imports in `/app` folder
- [ ] Update imports in other components
- [ ] Update `PROJECT_STRUCTURE.md`
- [ ] Update `DEVELOPER_GUIDE.md`
- [ ] Test that everything still works

## 📖 Documentation Updates

After migration, update:
1. `PROJECT_STRUCTURE.md` - New folder structure
2. `DEVELOPER_GUIDE.md` - New import patterns
3. This file - Mark as implemented

---

**Goal:** Make it easy to find, understand, and extend components!
