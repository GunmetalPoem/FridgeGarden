import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { RegrowableItem } from '@/types';

interface RegrowableItemCardProps {
  item: RegrowableItem;
}

export default function RegrowableItemCard({ item }: RegrowableItemCardProps) {
  const router = useRouter();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '#4CAF50';
      case 'medium':
        return '#FFC107';
      case 'hard':
        return '#F44336';
      default:
        return Colors.lightText;
    }
  };

  const handlePress = () => {
    router.push(`/regrowable/${item.id}`);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image 
        source={{ uri: item.imageUrl }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.part}>{item.regrowablePart}</Text>
        <View style={styles.metaContainer}>
          <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(item.difficulty) }]}>
            <Text style={styles.difficultyText}>{item.difficulty}</Text>
          </View>
          <Text style={styles.timeText}>{item.timeToGrow}</Text>
        </View>
      </View>
      <ChevronRight size={20} color={Colors.lightText} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  part: {
    fontSize: 14,
    color: Colors.lightText,
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  difficultyText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  timeText: {
    fontSize: 12,
    color: Colors.lightText,
  },
});
