import { FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';
import AppCard from '../components/AppCard';
import { APPS } from '../data/apps';

const PADDING = 16;
const GAP = 12;
const COLUMNS = 2;
const MAX_CONTENT_WIDTH = 520;

export default function HomeScreen({ navigation }) {
  const { width } = useWindowDimensions();

  const contentWidth = Math.min(width, MAX_CONTENT_WIDTH) - PADDING * 2;
  const sidePadding = (width - contentWidth) / 2;
  const tileWidth = (contentWidth - GAP * (COLUMNS - 1)) / COLUMNS;

  return (
    <View style={styles.container}>
      <FlatList
        data={APPS}
        keyExtractor={(item) => item.id}
        numColumns={COLUMNS}
        renderItem={({ item }) => (
          <AppCard item={item} width={tileWidth} onPress={() => navigation.navigate(item.screen)} />
        )}
        columnWrapperStyle={{ gap: GAP }}
        contentContainerStyle={{ paddingVertical: PADDING, paddingHorizontal: sidePadding }}
        ItemSeparatorComponent={() => <View style={{ height: GAP }} />}
        removeClippedSubviews={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
});
