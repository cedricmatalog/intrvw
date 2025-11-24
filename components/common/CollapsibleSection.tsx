import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, LayoutAnimation, Platform, UIManager } from 'react-native';
import { RetroColors } from '../../constants/RetroTheme';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  accentColor?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultExpanded = false,
  accentColor = RetroColors.terminal
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.header, { borderLeftColor: accentColor }]}
        onPress={toggleExpand}
      >
        <Text style={[styles.arrow, { color: accentColor }]}>
          {isExpanded ? '▼' : '▶'}
        </Text>
        <Text style={[styles.title, { color: accentColor }]}>
          {title}
        </Text>
      </Pressable>

      {isExpanded && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
    borderColor: RetroColors.surfaceBorder,
    borderLeftWidth: 4,
  },
  arrow: {
    fontFamily: 'monospace',
    fontSize: 12,
    marginRight: 8,
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  content: {
    padding: 16,
    backgroundColor: RetroColors.surface,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: RetroColors.surfaceBorder,
  },
});
