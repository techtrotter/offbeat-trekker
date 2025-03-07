
// Destination types
export interface Destination {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  category: 'trek' | 'waterfall' | 'lake' | 'homestay' | 'hotel' | 'adventure';
  rating: number;
  price: number;
  duration: string;
  difficulty?: 'easy' | 'moderate' | 'hard';
  featured?: boolean;
}

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  bio?: string;
  interests?: string[];
}

// Mock destinations data
export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Sandakphu Trek',
    location: 'Darjeeling, West Bengal',
    description: 'The highest peak in West Bengal offering stunning views of four of the five highest peaks in the world including Mount Everest.',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    category: 'trek',
    rating: 4.8,
    price: 12000,
    duration: '6 days',
    difficulty: 'moderate',
    featured: true
  },
  {
    id: '2',
    title: 'Suntalekhola Homestay',
    location: 'Suntalekhola, West Bengal',
    description: 'A peaceful homestay nestled in the lap of nature with panoramic views of the Eastern Himalayas.',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    category: 'homestay',
    rating: 4.6,
    price: 2500,
    duration: 'per night',
    featured: true
  },
  {
    id: '3',
    title: 'Changey Waterfall',
    location: 'Kalimpong, West Bengal',
    description: 'A serene waterfall hidden in the forests of Kalimpong, perfect for a day trip.',
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    category: 'waterfall',
    rating: 4.3,
    price: 500,
    duration: 'day trip',
    difficulty: 'easy',
    featured: false
  },
  {
    id: '4',
    title: 'Sillery Gaon Adventure Camp',
    location: 'Sillery Gaon, West Bengal',
    description: 'An adventure camp with activities like rappelling, rock climbing, and trekking.',
    imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    category: 'adventure',
    rating: 4.7,
    price: 3500,
    duration: '2 days',
    difficulty: 'moderate',
    featured: true
  },
  {
    id: '5',
    title: 'Icche Gaon Retreat',
    location: 'Icche Gaon, West Bengal',
    description: 'A quaint village offering breathtaking views of Kanchenjunga and surrounding valleys.',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    category: 'homestay',
    rating: 4.5,
    price: 1800,
    duration: 'per night',
    featured: false
  },
  {
    id: '6',
    title: 'Mirik Lake Boating',
    location: 'Mirik, West Bengal',
    description: 'Enjoy boating in the serene Mirik Lake surrounded by pine forests and garden.',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    category: 'lake',
    rating: 4.2,
    price: 800,
    duration: 'day trip',
    difficulty: 'easy',
    featured: false
  },
  {
    id: '7',
    title: 'Neora Valley Trek',
    location: 'Kalimpong, West Bengal',
    description: 'A biodiversity hotspot offering trekking through dense forests with chances to spot rare wildlife.',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
    category: 'trek',
    rating: 4.9,
    price: 8000,
    duration: '4 days',
    difficulty: 'hard',
    featured: true
  },
  {
    id: '8',
    title: 'Mayfair Darjeeling',
    location: 'Darjeeling, West Bengal',
    description: 'A luxury hotel with colonial architecture offering panoramic views of the Himalayas.',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    category: 'hotel',
    rating: 4.7,
    price: 12000,
    duration: 'per night',
    featured: true
  }
];

// Featured destinations
export const featuredDestinations = destinations.filter(dest => dest.featured);

// Categories
export const categories = [
  {
    id: 'trek',
    name: 'Treks',
    description: 'Explore beautiful hiking trails',
    icon: 'mountain'
  },
  {
    id: 'waterfall',
    name: 'Waterfalls',
    description: 'Discover hidden waterfalls',
    icon: 'droplet'
  },
  {
    id: 'lake',
    name: 'Lakes',
    description: 'Serene lakes for relaxation',
    icon: 'waves'
  },
  {
    id: 'homestay',
    name: 'Homestays',
    description: 'Live like a local',
    icon: 'home'
  },
  {
    id: 'hotel',
    name: 'Hotels',
    description: 'Comfortable accommodations',
    icon: 'building'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    description: 'Thrilling outdoor activities',
    icon: 'compass'
  }
];

// Mock users
export const users: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    profileImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    bio: 'Adventure enthusiast and photography lover. Always seeking new trails and hidden spots.',
    interests: ['trekking', 'photography', 'camping']
  },
  {
    id: '2',
    name: 'Maya Patel',
    email: 'maya@example.com',
    profileImage: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    bio: 'Travel blogger exploring offbeat destinations. Love meeting new people during my journeys.',
    interests: ['blogging', 'culture', 'food']
  }
];
