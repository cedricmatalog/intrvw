import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LearningContent } from '../../types/learning';
import { RetroColors } from '../../constants/RetroTheme';
import { CONTENT_TYPE_LABELS } from '../../constants/AppConstants';
import { getCategoryColor } from '../../utils/uiUtils';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface LearningCardProps {
  content: LearningContent;
}

export const LearningCard: React.FC<LearningCardProps> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryColor = getCategoryColor(content.category);

  return (
    <View style={[styles.container, { height: SCREEN_HEIGHT }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.badges}>
            <View style={[styles.badge, { borderColor: categoryColor }]}>
              <Text style={[styles.badgeText, { color: categoryColor }]}>
                {content.category.toUpperCase().replace('-', ' ')}
              </Text>
            </View>
            <View style={[styles.badge, { borderColor: RetroColors.textDim }]}>
              <Text style={[styles.badgeText, { color: RetroColors.textDim }]}>
                {CONTENT_TYPE_LABELS[content.type]}
              </Text>
            </View>
            <View style={[styles.badge, { borderColor: RetroColors.textDim }]}>
              <Text style={[styles.badgeText, { color: RetroColors.textDim }]}>
                {content.readTime} MIN READ
              </Text>
            </View>
          </View>
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: categoryColor }]}>
            {content.title}
          </Text>
          <Text style={styles.description}>{content.description}</Text>
        </View>

        {/* Expand/Collapse Button */}
        <Pressable
          style={[styles.expandButton, { borderColor: categoryColor }]}
          onPress={() => setIsExpanded(!isExpanded)}
        >
          <Text style={[styles.expandButtonText, { color: categoryColor }]}>
            {isExpanded ? '[-] COLLAPSE' : '[+] EXPAND TO READ'}
          </Text>
        </Pressable>

        {/* Content Sections */}
        {isExpanded && (
          <View style={styles.contentContainer}>
            {content.content.sections.map((section, sectionIndex) => (
              <View key={sectionIndex} style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {'> ' + section.title.toUpperCase()}
                </Text>
                <View style={styles.itemsContainer}>
                  {section.items.map((item, itemIndex) => (
                    <View key={itemIndex} style={styles.itemRow}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.itemText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Tags */}
        {content.tags && content.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            <Text style={styles.tagsLabel}>{'> TAGS'}</Text>
            <View style={styles.tagsRow}>
              {content.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>#{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Instruction */}
        {!isExpanded && (
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>
              Tap [+] EXPAND TO READ to view the full content
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: RetroColors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    paddingTop: 60,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    fontFamily: 'monospace',
    fontSize: 10,
    fontWeight: 'bold',
  },
  titleContainer: {
    marginBottom: 24,
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 12,
  },
  description: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.textSecondary,
    lineHeight: 22,
  },
  expandButton: {
    borderWidth: 2,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  expandButtonText: {
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: RetroColors.terminal,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemsContainer: {
    gap: 12,
  },
  itemRow: {
    flexDirection: 'row',
    paddingLeft: 8,
  },
  bullet: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.terminal,
    marginRight: 12,
    marginTop: 2,
  },
  itemText: {
    flex: 1,
    fontFamily: 'monospace',
    fontSize: 14,
    color: RetroColors.text,
    lineHeight: 22,
  },
  tagsContainer: {
    marginBottom: 24,
  },
  tagsLabel: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
    marginBottom: 12,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: RetroColors.textDim,
  },
  tagText: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: RetroColors.textDim,
  },
  instructionContainer: {
    marginTop: 20,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: RetroColors.surface,
  },
  instructionText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: RetroColors.textDim,
    textAlign: 'center',
  },
});
