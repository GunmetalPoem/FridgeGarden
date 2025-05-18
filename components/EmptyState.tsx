import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '@/constants/colors';

interface EmptyStateProps {
  title: string;
  message: string;
}

export default function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image 
          source={{ 
            uri: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=300&auto=format&fit=crop' 
          }} 
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  icon: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: Colors.lightText,
    textAlign: 'center',
    maxWidth: 300,
  },
});
