import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { LearningCard } from '@/components/learning/LearningCard';
import { learningContent } from '@/data/learning';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function LearningContentScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Find the content by ID
  const content = learningContent.find((c) => c.id === id);

  if (!content) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={[content]}
        renderItem={({ item }) => <LearningCard content={item} />}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={SCREEN_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  list: {
    flex: 1,
  },
});
