import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { RetroColors } from '../../constants/RetroTheme';
import {
  CATEGORY_LABELS,
  QUIZ_CATEGORY_DESCRIPTIONS,
} from '../../constants/AppConstants';
import { getAllQuizCategoryCounts } from '../../utils/dataUtils';
import { getCategoryColor } from '../../utils/uiUtils';
import { QuizCategory } from '../../types/quiz';

interface CategoryCardProps {
  title: string;
  description: string;
  count: number;
  color: string;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  count,
  color,
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.card, { borderColor: color }]}
      onPress={onPress}
    >
      <View style={styles.cardHeader}>
        <Text style={[styles.cardTitle, { color }]}>{title}</Text>
        <Text style={[styles.cardCount, { color }]}>
          {count} {count === 1 ? 'QUESTION' : 'QUESTIONS'}
        </Text>
      </View>
      <Text style={styles.cardDescription}>{description}</Text>
      <Text style={[styles.cardAction, { color }]}>
        {'> START PRACTICING'}
      </Text>
    </Pressable>
  );
};

export const HomePage: React.FC = () => {
  const router = useRouter();

  // Get quiz counts using utility function
  const quizCounts = getAllQuizCategoryCounts();

  // Define technology categories to show
  const technologies: QuizCategory[] = [
    'javascript',
    'typescript',
    'react',
    'node',
    'web-fundamentals',
    'algorithms',
    'data-structures',
    'system-design',
    'databases',
    'git',
  ];

  // Build technology cards dynamically
  const technologyCards = technologies
    .map((tech) => ({
      category: tech,
      title: CATEGORY_LABELS[tech],
      description: QUIZ_CATEGORY_DESCRIPTIONS[tech],
      count: quizCounts[tech] || 0,
      color: getCategoryColor(tech),
    }))
    .filter((card) => card.count > 0); // Only show technologies with questions

  const handleTechnologyPress = (category: QuizCategory) => {
    router.push({
      pathname: '/quiz',
      params: { category },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>intrvw</Text>
          <Text style={styles.tagline}>Learn by Practicing</Text>
        </View>

        {/* Info Box */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{'> SYSTEM_READY'}</Text>
          <Text style={styles.infoText}>
            {`> ${quizCounts.all}_QUESTIONS_LOADED`}
          </Text>
          <Text style={styles.infoText}>{'> SELECT_TECHNOLOGY_TO_BEGIN'}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Choose a technology to start learning. Swipe through TikTok-style questions with instant feedback and detailed explanations.
        </Text>

        {/* Technologies Section */}
        <Text style={styles.sectionTitle}>{'> CHOOSE_YOUR_PATH'}</Text>
        <View style={styles.categoriesContainer}>
          {technologyCards.map((tech) => (
            <CategoryCard
              key={tech.category}
              title={tech.title}
              description={tech.description}
              count={tech.count}
              color={tech.color}
              onPress={() => handleTechnologyPress(tech.category)}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Swipe up/down to navigate • Tap to reveal answers
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RetroColors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
    paddingTop: 20,
  },
  logo: {
    fontFamily: 'monospace',
    fontSize: 48,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: RetroColors.amber,
    marginBottom: 24,
  },
  infoContainer: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: RetroColors.surface,
    borderWidth: 1,
    borderColor: RetroColors.terminal,
    gap: 4,
  },
  infoText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.terminal,
    lineHeight: 18,
  },
  description: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 22,
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 8,
  },
  sectionDescription: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.textSecondary,
    lineHeight: 20,
    marginBottom: 20,
  },
  categoriesContainer: {
    gap: 16,
    marginBottom: 32,
  },
  card: {
    padding: 20,
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardCount: {
    fontFamily: 'monospace',
    fontSize: 11,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: RetroColors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  cardAction: {
    fontFamily: 'monospace',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: RetroColors.surface,
  },
  footerText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
    textAlign: 'center',
  },
});