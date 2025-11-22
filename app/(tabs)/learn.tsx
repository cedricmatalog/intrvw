import { StyleSheet, View } from 'react-native';
import { LearnPage } from '@/components/learning/LearnPage';

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <LearnPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
