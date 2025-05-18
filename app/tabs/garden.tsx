import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useFridgeStore } from '@/store/fridgeStore';
import { getRegrowableItemsForFridgeItems } from '@/data/regrowableItems';
import RegrowableItemCard from '@/components/RegrowableItemCard';
import EmptyState from '@/components/EmptyState';
import Colors from '@/constants/colors';
import { RegrowableItem } from '@/types';

export default function GardenScreen() {
  const { items } = useFridgeStore();
  
  // We need to use the original item IDs from the data, not the generated IDs
  const fridgeItemIds = items.map(item => item.originalId);
  const regrowableItems = getRegrowableItemsForFridgeItems(fridgeItemIds);

  const renderItem = ({ item }: { item: RegrowableItem }) => (
    <RegrowableItemCard item={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Regrowable Items</Text>
        <Text style={styles.subtitle}>
          {regrowableItems.length} item{regrowableItems.length !== 1 ? 's' : ''} can be regrown
        </Text>
      </View>

      {regrowableItems.length > 0 ? (
        <FlatList
          data={regrowableItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyState
          title="No regrowable items yet"
          message="Add items to your fridge to discover what you can regrow in your garden."
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.lightText,
  },
  listContent: {
    paddingBottom: 20,
  },
});
