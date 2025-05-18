import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { Plus } from 'lucide-react-native';
import { useFridgeStore } from '@/store/fridgeStore';
import FridgeItemCard from '@/components/FridgeItemCard';
import AddItemModal from '@/components/AddItemModal';
import EmptyState from '@/components/EmptyState';
import Colors from '@/constants/colors';
import { FridgeItem } from '@/types';

export default function FridgeScreen() {
  const { items, addItem, removeItem } = useFridgeStore();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddItem = (item: Omit<FridgeItem, 'id' | 'addedAt'>) => {
    addItem(item);
  };

  const renderItem = ({ item }: { item: FridgeItem }) => (
    <FridgeItemCard
      name={item.name}
      category={item.category}
      onRemove={() => removeItem(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Fridge Items</Text>
        <Pressable 
          style={styles.addButton} 
          onPress={() => setIsModalVisible(true)}
        >
          <Plus size={20} color={Colors.white} />
        </Pressable>
      </View>

      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyState
          title="Your fridge is empty"
          message="Add items to your fridge to see what you can regrow in your garden."
        />
      )}

      <AddItemModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddItem={handleAddItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  addButton: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  listContent: {
    paddingBottom: 20,
  },
});
