import { FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppCard from '../components/AppCard';
import { APPS } from '../data/apps';

const PADDING = 16;
const GAP = 12;
const COLUMNS = 2;
const MAX_CONTENT_WIDTH = 520;
const TOP_SPACE = 64;

export default function HomeScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  // Cap the grid width on tablets/landscape, center it with the leftover space,
  // then split the remaining width into columns minus the gaps between them.
  const contentWidth = Math.min(width, MAX_CONTENT_WIDTH) - PADDING * 2;
  const sidePadding = (width - contentWidth) / 2;
  const tileWidth = (contentWidth - GAP * (COLUMNS - 1)) / COLUMNS;

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <FlatList
        data={APPS}
        keyExtractor={(item) => item.id}
        numColumns={COLUMNS}
        renderItem={({ item }) => (
          <AppCard item={item} width={tileWidth} onPress={() => navigation.navigate(item.screen)} />
        )}
        columnWrapperStyle={{ gap: GAP }}
        contentContainerStyle={{ paddingTop: TOP_SPACE, paddingBottom: PADDING, paddingHorizontal: sidePadding }}
        ItemSeparatorComponent={() => <View style={{ height: GAP }} />}
        removeClippedSubviews={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
});
