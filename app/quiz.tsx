import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { QuizFeed } from '@/components/quizzes/QuizFeed';
import { quizQuestions } from '@/data/quizzes';
import { QuizCategory, JavaScriptSubCategory } from '@/types/quiz';
import { CATEGORY_LABELS, JS_SUBCATEGORY_LABELS } from '@/constants/AppConstants';

export default function QuizScreen() {
  const { category, subcategory } = useLocalSearchParams<{
    category?: QuizCategory | 'all';
    subcategory?: JavaScriptSubCategory | 'all';
  }>();

  // Filter by category first
  let filteredQuestions = category && category !== 'all'
    ? quizQuestions.filter((q) => q.category === category)
    : quizQuestions;

  // Filter by subcategory if provided (for JavaScript)
  if (category === 'javascript' && subcategory && subcategory !== 'all') {
    filteredQuestions = filteredQuestions.filter((q) => q.subcategory === subcategory);
  }

  // Get dynamic title based on category and subcategory
  let title = 'ALL QUESTIONS';
  if (category && category !== 'all') {
    if (category === 'javascript' && subcategory && subcategory !== 'all') {
      title = JS_SUBCATEGORY_LABELS[subcategory as JavaScriptSubCategory];
    } else {
      title = CATEGORY_LABELS[category as QuizCategory];
    }
  }

  return (
    <>
      <Stack.Screen
        options={{
          title,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#00FF41',
          headerTitleStyle: {
            fontFamily: 'monospace',
            fontWeight: 'bold',
            fontSize: 16,
          },
        }}
      />
      <View style={styles.container}>
        <QuizFeed questions={filteredQuestions} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
