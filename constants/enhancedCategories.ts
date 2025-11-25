/**
 * Tracks JavaScript quiz subcategories that have been enhanced with Feynman-style explanations
 *
 * Categories marked as enhanced have:
 * - Comprehensive analogies and real-world examples
 * - Step-by-step explanations
 * - Memory tricks and gotchas
 * - "Quick Answer" sections for fast understanding
 */

import { JavaScriptSubCategory } from '@/types/quiz';

export interface EnhancedCategoryMetadata {
  subcategory: JavaScriptSubCategory;
  updatedDate: string;
  label: string;
}

export const ENHANCED_JS_SUBCATEGORIES: EnhancedCategoryMetadata[] = [
  {
    subcategory: 'advanced-operators',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'array-operations',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'type-coercion',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'closures',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'promises',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'this',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'functions',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'scope',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'async-await',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'arrays',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'destructuring',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'objects',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'classes',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'prototypes',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'event-loop',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'generators',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'error-handling',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'references',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'iterators',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'map-set',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'operators',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'symbols',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'modules',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'internationalization',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'weak-collections',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'proxy-reflect',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'object-fundamentals',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'type-system',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'string-methods',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'miscellaneous',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'object-methods',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
  {
    subcategory: 'regex',
    updatedDate: '2025',
    label: '✨ Enhanced',
  },
];

/**
 * Check if a JavaScript subcategory has been enhanced
 */
export function isEnhancedSubcategory(subcategory: JavaScriptSubCategory): boolean {
  return ENHANCED_JS_SUBCATEGORIES.some(meta => meta.subcategory === subcategory);
}

/**
 * Get metadata for an enhanced subcategory
 */
export function getEnhancedMetadata(subcategory: JavaScriptSubCategory): EnhancedCategoryMetadata | undefined {
  return ENHANCED_JS_SUBCATEGORIES.find(meta => meta.subcategory === subcategory);
}
