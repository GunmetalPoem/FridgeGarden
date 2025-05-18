import { RegrowableItem } from '@/types';

export const regrowableItems: RegrowableItem[] = [
  {
    id: '1',
    name: 'Green Onions',
    fridgeItemId: 'green-onions',
    regrowablePart: 'Root end (white part with roots)',
    difficulty: 'easy',
    timeToGrow: '1-2 weeks',
    instructions: [
      'Cut off the green onion about 1-2 inches from the root end',
      'Place the root end in a small glass or jar with water',
      'Change the water every 2-3 days',
      'Once new growth appears, you can either keep in water or transplant to soil'
    ],
    tips: [
      'You can harvest repeatedly - just cut what you need and leave the roots',
      'Place in a sunny window for best results',
      'If growth slows down, consider transplanting to soil with some fertilizer'
    ],
    conditions: {
      light: 'Bright, indirect sunlight',
      water: 'Keep roots submerged in water, change every 2-3 days',
      soil: 'Well-draining potting soil if transplanting'
    },
    imageUrl: 'https://images.unsplash.com/photo-1615477550927-6ec413976ea2?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Lettuce',
    fridgeItemId: 'lettuce',
    regrowablePart: 'Base/stem of lettuce head',
    difficulty: 'easy',
    timeToGrow: '2-3 weeks',
    instructions: [
      'Cut off the lettuce leaves, leaving about 1 inch of the base',
      'Place the base in a shallow dish with a small amount of water',
      'Change the water every 1-2 days',
      'Once new leaves start growing from the center, transplant to soil'
    ],
    tips: [
      'Lettuce regrown this way won\'t produce a full head, but will give you some fresh leaves',
      'Harvest outer leaves as they grow to encourage more growth',
      'Works best with romaine and butter lettuce varieties'
    ],
    conditions: {
      light: 'Partial sun to bright indirect light',
      water: 'Keep base barely submerged in water initially, then moist soil',
      soil: 'Rich, well-draining potting soil when transplanting'
    },
    imageUrl: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?q=80&w=2825&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Celery',
    fridgeItemId: 'celery',
    regrowablePart: 'Base of celery bunch',
    difficulty: 'medium',
    timeToGrow: '3-4 weeks',
    instructions: [
      'Cut off the celery stalks about 2 inches from the base',
      'Place the base in a shallow bowl with water, cut side up',
      'Change the water every 1-2 days',
      'When new growth appears from the center and roots form, transplant to soil'
    ],
    tips: [
      'New growth will be thinner than store-bought celery',
      'Celery likes cool weather, so avoid extreme heat',
      'Harvest outer stalks first to encourage continued growth'
    ],
    conditions: {
      light: 'Bright, indirect sunlight',
      water: 'Keep consistently moist but not waterlogged',
      soil: 'Rich, well-draining soil with compost'
    },
    imageUrl: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Basil',
    fridgeItemId: 'basil',
    regrowablePart: 'Stem cuttings',
    difficulty: 'medium',
    timeToGrow: '2-4 weeks',
    instructions: [
      'Cut a 4-inch stem below a leaf node',
      'Remove leaves from the bottom 2 inches of the stem',
      'Place in a glass of water, ensuring the bare stem is submerged',
      'Once roots are 1-2 inches long, transplant to soil'
    ],
    tips: [
      'Change water every few days to prevent bacteria growth',
      'Pinch off flower buds to encourage leaf growth',
      'Harvest from the top to encourage bushier growth'
    ],
    conditions: {
      light: 'Full sun (6+ hours of direct sunlight)',
      water: 'Keep soil consistently moist but not soggy',
      soil: 'Rich, well-draining potting mix'
    },
    imageUrl: 'https://images.unsplash.com/photo-1600689042827-f1e5c9f05c83?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Garlic',
    fridgeItemId: 'garlic',
    regrowablePart: 'Individual cloves',
    difficulty: 'medium',
    timeToGrow: '3-6 months',
    instructions: [
      'Separate a garlic bulb into individual cloves',
      'Plant each clove 2 inches deep in soil, pointed end up',
      'Space cloves 4-6 inches apart',
      'Water regularly but avoid overwatering'
    ],
    tips: [
      'Plant in fall for harvest the following summer',
      'You can harvest garlic scapes (flower stems) in spring',
      'Harvest when lower leaves turn brown but top leaves are still green'
    ],
    conditions: {
      light: 'Full sun',
      water: 'Regular watering, letting soil dry slightly between waterings',
      soil: 'Well-draining, fertile soil'
    },
    imageUrl: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Ginger',
    fridgeItemId: 'ginger',
    regrowablePart: 'Rhizome pieces with growth buds',
    difficulty: 'medium',
    timeToGrow: '8-10 months',
    instructions: [
      'Select a piece of ginger with growth buds (small points)',
      'Soak overnight in warm water',
      'Plant 1 inch deep in soil with growth buds facing up',
      'Keep soil moist and warm'
    ],
    tips: [
      'Ginger loves humidity and warmth',
      'Can be grown indoors in cooler climates',
      'Harvest by carefully digging up parts of the rhizome as needed'
    ],
    conditions: {
      light: 'Partial shade to filtered sunlight',
      water: 'Keep soil consistently moist but not waterlogged',
      soil: 'Rich, well-draining potting mix'
    },
    imageUrl: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Avocado',
    fridgeItemId: 'avocado',
    regrowablePart: 'Pit/seed',
    difficulty: 'hard',
    timeToGrow: '3-6 years for fruit, 2-3 months for sprout',
    instructions: [
      'Clean the pit and insert 3-4 toothpicks around its middle',
      'Suspend the pit over water with the pointed end up, bottom half submerged',
      'Place in a warm location and change water regularly',
      'When roots are several inches long and a stem with leaves appears, transplant to soil'
    ],
    tips: [
      'Be patient - it can take 2-8 weeks for the pit to sprout',
      'Pinch off top leaves when the stem reaches 6-7 inches to encourage branching',
      'Indoor avocado plants rarely produce fruit, but make attractive houseplants'
    ],
    conditions: {
      light: 'Bright, indirect light; protect from intense afternoon sun',
      water: 'Keep soil evenly moist but not soggy',
      soil: 'Well-draining potting mix with perlite or sand'
    },
    imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=2075&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'Potato',
    fridgeItemId: 'potato',
    regrowablePart: 'Potato with eyes/sprouts',
    difficulty: 'medium',
    timeToGrow: '2-3 months',
    instructions: [
      'Cut potato into pieces with at least 2-3 eyes (sprouts) each',
      'Let pieces dry for 1-2 days to form a protective layer',
      'Plant 4-6 inches deep in soil, sprouts facing up',
      'As plants grow, mound soil around stems (hilling)'
    ],
    tips: [
      'Use seed potatoes or organic potatoes (some store-bought are treated to prevent sprouting)',
      'Harvest when plants flower and begin to yellow',
      'For "new potatoes," harvest a few weeks after flowering'
    ],
    conditions: {
      light: 'Full sun',
      water: 'Regular watering, especially during flowering',
      soil: 'Loose, well-draining soil; slightly acidic'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: '9',
    name: 'Carrot',
    fridgeItemId: 'carrot',
    regrowablePart: 'Carrot tops',
    difficulty: 'easy',
    timeToGrow: '1-2 weeks for greens',
    instructions: [
      'Cut off the top inch of a carrot with the greens attached',
      'Place in a shallow dish with water, cut side down',
      'Change water every 1-2 days',
      'Harvest the greens for salads or as garnish'
    ],
    tips: [
      'Carrot tops won\'t regrow new carrots, just edible greens',
      'The greens have a parsley-like flavor',
      'Can be transplanted to soil for longer growth'
    ],
    conditions: {
      light: 'Bright, indirect sunlight',
      water: 'Keep base in shallow water, then moist soil if transplanted',
      soil: 'Well-draining potting soil if transplanting'
    },
    imageUrl: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=2942&auto=format&fit=crop'
  },
  {
    id: '10',
    name: 'Pineapple',
    fridgeItemId: 'pineapple',
    regrowablePart: 'Crown (leafy top)',
    difficulty: 'hard',
    timeToGrow: '2-3 years for fruit',
    instructions: [
      'Twist or cut off the crown, leaving about half an inch of fruit',
      'Remove lower leaves to expose stem',
      'Let dry for 1-2 days',
      'Place in water or directly in soil and keep warm'
    ],
    tips: [
      'Be patient - roots take 1-2 months to develop',
      'Indoor pineapples rarely fruit, but make interesting houseplants',
      'If it does fruit, you\'ll get just one pineapple per plant'
    ],
    conditions: {
      light: 'Bright, direct sunlight',
      water: 'Allow soil to dry between waterings',
      soil: 'Well-draining, slightly acidic soil'
    },
    imageUrl: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=2787&auto=format&fit=crop'
  }
];

export const fridgeItemsList = [
  { id: 'green-onions', name: 'Green Onions', category: 'Vegetables' },
  { id: 'lettuce', name: 'Lettuce', category: 'Vegetables' },
  { id: 'celery', name: 'Celery', category: 'Vegetables' },
  { id: 'basil', name: 'Basil', category: 'Herbs' },
  { id: 'garlic', name: 'Garlic', category: 'Vegetables' },
  { id: 'ginger', name: 'Ginger', category: 'Spices' },
  { id: 'avocado', name: 'Avocado', category: 'Fruits' },
  { id: 'potato', name: 'Potato', category: 'Vegetables' },
  { id: 'carrot', name: 'Carrot', category: 'Vegetables' },
  { id: 'pineapple', name: 'Pineapple', category: 'Fruits' },
  { id: 'tomato', name: 'Tomato', category: 'Vegetables' },
  { id: 'bell-pepper', name: 'Bell Pepper', category: 'Vegetables' },
  { id: 'onion', name: 'Onion', category: 'Vegetables' },
  { id: 'lemon', name: 'Lemon', category: 'Fruits' },
  { id: 'apple', name: 'Apple', category: 'Fruits' },
  { id: 'banana', name: 'Banana', category: 'Fruits' },
  { id: 'broccoli', name: 'Broccoli', category: 'Vegetables' },
  { id: 'cauliflower', name: 'Cauliflower', category: 'Vegetables' },
  { id: 'cucumber', name: 'Cucumber', category: 'Vegetables' },
  { id: 'kale', name: 'Kale', category: 'Vegetables' },
  { id: 'spinach', name: 'Spinach', category: 'Vegetables' },
  { id: 'strawberry', name: 'Strawberry', category: 'Fruits' },
  { id: 'blueberry', name: 'Blueberry', category: 'Fruits' },
  { id: 'mint', name: 'Mint', category: 'Herbs' },
  { id: 'rosemary', name: 'Rosemary', category: 'Herbs' },
  { id: 'thyme', name: 'Thyme', category: 'Herbs' },
  { id: 'cilantro', name: 'Cilantro', category: 'Herbs' },
  { id: 'parsley', name: 'Parsley', category: 'Herbs' },
  { id: 'sweet-potato', name: 'Sweet Potato', category: 'Vegetables' },
  { id: 'cabbage', name: 'Cabbage', category: 'Vegetables' }
];

export const getRegrowableItemsForFridgeItems = (fridgeItemIds: string[]): RegrowableItem[] => {
  return regrowableItems.filter(item => fridgeItemIds.includes(item.fridgeItemId));
};
