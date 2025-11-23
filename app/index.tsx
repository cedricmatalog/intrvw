import { StyleSheet, View } from 'react-native';
import { HomePage } from '@/components/home/HomePage';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
