import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  TouchableOpacity, 
  FlatList,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { X, Search } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { fridgeItemsList } from '@/data/regrowableItems';
import { FridgeItem } from '@/types';

interface AddItemModalProps {
  visible: boolean;
  onClose: () => void;
  onAddItem: (item: Omit<FridgeItem, 'id' | 'addedAt'>) => void;
}

type ListItem = { id: string; name: string; category: string; isHeader?: boolean };

export default function AddItemModal({ visible, onClose, onAddItem }: AddItemModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(fridgeItemsList);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredItems(fridgeItemsList);
    } else {
      const filtered = fridgeItemsList.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchQuery]);

  const handleSelectItem = (item: { id: string; name: string; category: string }) => {
    // Pass the original ID to ensure we can match with regrowable items
    onAddItem({
      name: item.name,
      category: item.category,
      originalId: item.id
    });
    onClose();
  };

  const renderCategoryHeader = (category: string) => (
    <Text style={styles.categoryHeader}>{category}</Text>
  );

  const renderItem = ({ item }: { item: ListItem }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => handleSelectItem(item)}
    >
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof filteredItems>);

  // Flatten the grouped items for FlatList with section headers
  const flattenedItems: ListItem[] = Object.entries(groupedItems).flatMap(([category, items]) => [
    { id: `header-${category}`, name: category, isHeader: true, category },
    ...items
  ]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Add Fridge Item</Text>
            <Pressable onPress={onClose} hitSlop={10}>
              <X size={24} color={Colors.text} />
            </Pressable>
          </View>
          
          <View style={styles.searchContainer}>
            <Search size={20} color={Colors.lightText} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search items..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor={Colors.lightText}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery('')} hitSlop={10}>
                <X size={18} color={Colors.lightText} />
              </Pressable>
            )}
          </View>
          
          <FlatList
            data={flattenedItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
              'isHeader' in item && item.isHeader 
                ? renderCategoryHeader(item.name) 
                : renderItem({ item })
            }
            style={styles.list}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    color: Colors.text,
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  categoryHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  itemName: {
    fontSize: 16,
    color: Colors.text,
  },
});
