import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppIcon from '../components/AppIcon';

export default function DetailScreen({ navigation, route }) {
  const { title, message, icon } = route.params ?? {};

  useLayoutEffect(() => {
    navigation.setOptions({ title, headerBackTitle: 'Home' });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <AppIcon icon={icon} size={96} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 24,
  },
  message: { fontSize: 22, fontWeight: '600', textAlign: 'center', color: '#1C1C1E' },
});
