import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { QuestionFeed } from '@/components/questions/QuestionFeed';
import { questions } from '@/data/questions';
import { QuestionType } from '@/types/question';

export default function PracticeScreen() {
  const { filter } = useLocalSearchParams<{ filter?: QuestionType | 'all' }>();

  const filteredQuestions = filter && filter !== 'all'
    ? questions.filter((q) => q.type === filter)
    : questions;

  return (
    <View style={styles.container}>
      <QuestionFeed questions={filteredQuestions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});