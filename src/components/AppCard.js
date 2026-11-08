import { Pressable, StyleSheet, Text } from 'react-native';
import AppIcon from './AppIcon';

export default function AppCard({ item, width, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Open ${item.title}`}
      style={({ pressed }) => [styles.card, { width }, pressed && styles.pressed]}
    >
      <AppIcon icon={item.icon} size={width * 0.78} />
      <Text style={styles.label}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 12,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  label: { fontSize: 13, fontWeight: '600', color: '#1C1C1E' },
  pressed: { opacity: 0.6, transform: [{ scale: 0.98 }] },
});
