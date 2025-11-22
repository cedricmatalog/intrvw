import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { QuizFeed } from '@/components/quizzes/QuizFeed';
import { quizQuestions } from '@/data/quizzes';
import { QuizCategory } from '@/types/quiz';
import { CATEGORY_LABELS } from '@/constants/AppConstants';

export default function QuizScreen() {
  const { category } = useLocalSearchParams<{ category?: QuizCategory | 'all' }>();

  const filteredQuestions = category && category !== 'all'
    ? quizQuestions.filter((q) => q.category === category)
    : quizQuestions;

  // Get dynamic title based on category
  const title = category && category !== 'all'
    ? CATEGORY_LABELS[category as QuizCategory]
    : 'ALL QUESTIONS';

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
