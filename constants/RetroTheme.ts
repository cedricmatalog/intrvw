export const RetroColors = {
  // Primary accent colors (VSCode inspired)
  terminal: '#4EC9B0',      // Teal/cyan (like VSCode's function color)
  terminalDim: '#3BA089',
  amber: '#DCDCAA',         // Light yellow (like VSCode's parameter color)
  amberDim: '#B8B888',
  orange: '#CE9178',        // Muted orange (like VSCode's string color)
  blue: '#569CD6',          // Light blue (like VSCode's keyword color)
  cyan: '#4FC1FF',
  red: '#F48771',           // Soft red (like VSCode's error color)
  purple: '#C586C0',        // Muted purple (like VSCode's type color)
  magenta: '#D16D9E',
  pink: '#F48771',
  green: '#6A9955',         // Muted green (like VSCode's comment color)

  // Background colors (VSCode dark theme)
  background: '#1E1E1E',    // Main background (VSCode default)
  backgroundLight: '#252526', // Slightly lighter
  surface: '#2D2D30',       // Card/surface background
  surfaceLight: '#3E3E42',  // Hover/active surface
  surfaceBorder: '#3E3E42', // Border color

  // Accent and borders
  border: '#4EC9B0',

  // Text colors
  text: '#D4D4D4',          // Main text (VSCode default)
  textDim: '#858585',       // Dimmed text
  textSecondary: '#9D9D9D', // Secondary text
};

export const RetroFonts = {
  mono: 'monospace',
};

export const DifficultyColors = {
  easy: RetroColors.terminal,
  medium: RetroColors.amber,
  hard: RetroColors.red,
};