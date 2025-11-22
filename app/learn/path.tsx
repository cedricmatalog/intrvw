import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { LessonFeed } from '@/components/learning/LessonFeed';
import { lessons } from '@/data/lessons';
import { LearningCategory } from '@/types/learning';

export default function LearningPathScreen() {
  const { category } = useLocalSearchParams<{ category: LearningCategory }>();

  // Filter lessons by category
  const pathLessons = lessons.filter((lesson) => lesson.category === category);

  return (
    <View style={styles.container}>
      <LessonFeed lessons={pathLessons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
