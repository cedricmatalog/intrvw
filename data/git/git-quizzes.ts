import { QuizQuestion } from '../../types/quiz';

export const gitQuizzes: QuizQuestion[] = [
  {
    id: 'git-1',
    question: 'What is the difference between "git merge" and "git rebase"?',
    category: 'git',
    difficulty: 'medium',
    options: [
      'They do the same thing',
      'Merge creates a merge commit, rebase rewrites history',
      'Rebase is deprecated',
      'Merge is faster than rebase',
    ],
    correctAnswer: 1,
    explanation: 'git merge combines branches by creating a new merge commit, preserving history. git rebase rewrites commit history by moving commits to a new base, creating a linear history. Rebase should not be used on public branches.',
    tags: ['git', 'merge', 'rebase', 'version-control'],
  },
  {
    id: 'git-2',
    question: 'What does "git stash" do?',
    category: 'git',
    difficulty: 'easy',
    options: [
      'Deletes uncommitted changes',
      'Temporarily stores uncommitted changes',
      'Creates a new branch',
      'Pushes changes to remote',
    ],
    correctAnswer: 1,
    explanation: 'git stash temporarily stores uncommitted changes (both staged and unstaged) so you can work on something else. You can later reapply these changes with "git stash pop" or "git stash apply".',
    tags: ['git', 'stash', 'workflow'],
  },
];
