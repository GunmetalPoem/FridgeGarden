import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { regrowableItems } from '@/data/regrowableItems';
import Colors from '@/constants/colors';
import { Sun, Droplets, Leaf } from 'lucide-react-native';

export default function RegrowableDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const item = regrowableItems.find(item => item.id === id);
  
  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Item not found</Text>
      </View>
    );
  }

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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image 
        source={{ uri: item.imageUrl }} 
        style={styles.image} 
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.regrowablePart}</Text>
        
        <View style={styles.metaContainer}>
          <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(item.difficulty) }]}>
            <Text style={styles.difficultyText}>{item.difficulty}</Text>
          </View>
          <Text style={styles.timeText}>Time to grow: {item.timeToGrow}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Growing Conditions</Text>
          <View style={styles.conditionsContainer}>
            <View style={styles.conditionItem}>
              <Sun size={24} color={Colors.accent} style={styles.conditionIcon} />
              <Text style={styles.conditionLabel}>Light</Text>
              <Text style={styles.conditionValue}>{item.conditions.light}</Text>
            </View>
            
            <View style={styles.conditionItem}>
              <Droplets size={24} color={Colors.primary} style={styles.conditionIcon} />
              <Text style={styles.conditionLabel}>Water</Text>
              <Text style={styles.conditionValue}>{item.conditions.water}</Text>
            </View>
            
            {item.conditions.soil && (
              <View style={styles.conditionItem}>
                <Leaf size={24} color={Colors.secondary} style={styles.conditionIcon} />
                <Text style={styles.conditionLabel}>Soil</Text>
                <Text style={styles.conditionValue}>{item.conditions.soil}</Text>
              </View>
            )}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Growing Instructions</Text>
          {item.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips & Tricks</Text>
          {item.tips.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <Text style={styles.tipText}>• {tip}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.lightText,
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 12,
  },
  difficultyText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  timeText: {
    fontSize: 14,
    color: Colors.lightText,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  conditionsContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  conditionItem: {
    marginBottom: 16,
    flexDirection: 'column',
  },
  conditionIcon: {
    marginBottom: 8,
  },
  conditionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  conditionValue: {
    fontSize: 14,
    color: Colors.lightText,
  },
  instructionItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  instructionNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  instructionNumberText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
  tipItem: {
    marginBottom: 12,
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tipText: {
    fontSize: 16,
    color: Colors.text,
  },
  errorText: {
    fontSize: 18,
    color: Colors.error,
    textAlign: 'center',
    marginTop: 20,
  },
});
