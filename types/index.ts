export interface FridgeItem {
  id: string;
  originalId: string; // Store the original ID from our data
  name: string;
  category: string;
  addedAt: number;
}

export interface RegrowableItem {
  id: string;
  name: string;
  fridgeItemId: string;
  regrowablePart: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeToGrow: string;
  instructions: string[];
  tips: string[];
  conditions: {
    light: string;
    water: string;
    soil?: string;
  };
  imageUrl: string;
}
