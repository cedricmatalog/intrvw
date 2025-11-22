import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import { QuizCard } from './QuizCard';
import { QuizQuestion } from '../../types/quiz';
import { RetroColors } from '../../constants/RetroTheme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface QuizFeedProps {
  questions: QuizQuestion[];
}

export const QuizFeed: React.FC<QuizFeedProps> = ({ questions }) => {
  if (questions.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{'> NO_QUIZZES_FOUND'}</Text>
        <Text style={styles.emptySubtext}>
          No quiz questions available for this category
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={questions}
      renderItem={({ item }) => <QuizCard question={item} />}
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
