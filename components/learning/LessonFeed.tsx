import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import { LessonCard } from './LessonCard';
import { Lesson } from '../../types/learning';
import { RetroColors } from '../../constants/RetroTheme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface LessonFeedProps {
  lessons: Lesson[];
}

export const LessonFeed: React.FC<LessonFeedProps> = ({ lessons }) => {
  if (lessons.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{'> NO_LESSONS_FOUND'}</Text>
        <Text style={styles.emptySubtext}>
          No lessons available for this learning path
        </Text>
      </View>
    );
  }

  // Sort lessons by order
  const sortedLessons = [...lessons].sort((a, b) => a.order - b.order);

  return (
    <FlatList
      data={sortedLessons}
      renderItem={({ item, index }) => (
        <LessonCard
          lesson={item}
          currentIndex={index}
          totalLessons={sortedLessons.length}
        />
      )}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToInterval={SCREEN_HEIGHT}
      snapToAlignment="start"
      decelerationRate="fast"
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RetroColors.background,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RetroColors.background,
    padding: 20,
  },
  emptyText: {
    fontFamily: 'monospace',
    fontSize: 18,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  emptySubtext: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});
