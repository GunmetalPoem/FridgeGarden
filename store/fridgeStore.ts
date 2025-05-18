import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FridgeItem } from '@/types';

interface FridgeState {
  items: FridgeItem[];
  addItem: (item: Omit<FridgeItem, 'id' | 'addedAt'>) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
}

export const useFridgeStore = create<FridgeState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({
        items: [
          ...state.items,
          {
            ...item,
            id: Math.random().toString(36).substring(2, 9),
            addedAt: Date.now(),
          },
        ],
      })),
      removeItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
      clearItems: () => set({ items: [] }),
    }),
    {
      name: 'fridge-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
