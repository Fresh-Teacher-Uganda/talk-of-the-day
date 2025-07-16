// School Clubs Data
export interface Club {
  id: string;
  name: string;
  day: string;
  time: string;
  location: string;
  coordinator: string;
  description: string;
  participants: number;
  maxParticipants: number;
  category: "sports" | "arts" | "academic" | "other";
  targetSections?: ('kindergarten' | 'junior' | 'senior')[];
  requirements?: string[];
}

export const clubs: Club[] = [
  // Sports Clubs
  {
    id: "swimming",
    name: "Swimming",
    day: "Thursday",
    time: "2:00 PM - 4:00 PM",
    location: "Swimming Pool",
    coordinator: "Swimming Instructor",
    description: "Learn swimming techniques and water safety skills",
    participants: 15,
    maxParticipants: 20,
    category: "sports",
    targetSections: ['junior', 'senior'],
    requirements: ['Swimming costume', 'Towel', 'Swimming cap']
  },
  {
    id: "badminton",
    name: "Badminton",
    day: "Wednesday",
    time: "3:00 PM - 5:00 PM",
    location: "Sports Hall",
    coordinator: "Sports Teacher",
    description: "Develop badminton skills and competitive spirit",
    participants: 12,
    maxParticipants: 16,
    category: "sports",
    targetSections: ['junior', 'senior']
  },
  {
    id: "football",
    name: "Football",
    day: "Tuesday",
    time: "3:30 PM - 5:30 PM",
    location: "Football Field",
    coordinator: "PE Teacher",
    description: "Football training and team building",
    participants: 22,
    maxParticipants: 25,
    category: "sports",
    targetSections: ['junior', 'senior']
  },
  {
    id: "basketball",
    name: "Basketball",
    day: "Friday",
    time: "3:00 PM - 5:00 PM",
    location: "Basketball Court",
    coordinator: "Sports Coach",
    description: "Basketball skills development and teamwork",
    participants: 14,
    maxParticipants: 18,
    category: "sports",
    targetSections: ['junior', 'senior']
  },

  // Arts Clubs
  {
    id: "art-club",
    name: "Art Club",
    day: "Monday",
    time: "3:00 PM - 5:00 PM",
    location: "Art Room",
    coordinator: "Art Teacher",
    description: "Creative expression through various art mediums",
    participants: 18,
    maxParticipants: 25,
    category: "arts",
    targetSections: ['kindergarten', 'junior', 'senior']
  },
  {
    id: "music-club",
    name: "Music Club",
    day: "Wednesday",
    time: "3:00 PM - 4:30 PM",
    location: "Music Room",
    coordinator: "Music Teacher",
    description: "Learn instruments, singing, and music theory",
    participants: 20,
    maxParticipants: 30,
    category: "arts",
    targetSections: ['kindergarten', 'junior', 'senior']
  },
  {
    id: "drama-club",
    name: "Drama Club",
    day: "Thursday",
    time: "3:00 PM - 5:00 PM",
    location: "School Hall",
    coordinator: "Drama Teacher",
    description: "Acting, storytelling, and theatrical performances",
    participants: 16,
    maxParticipants: 25,
    category: "arts",
    targetSections: ['junior', 'senior']
  },
  {
    id: "ballet-club",
    name: "Ballet Club",
    day: "Friday",
    time: "3:00 PM - 4:30 PM",
    location: "Dance Studio",
    coordinator: "Dance Instructor",
    description: "Classical ballet technique and performance",
    participants: 12,
    maxParticipants: 20,
    category: "arts",
    targetSections: ['kindergarten', 'junior']
  },

  // Academic Clubs
  {
    id: "debate-club",
    name: "Debate Club",
    day: "Tuesday",
    time: "3:00 PM - 4:30 PM",
    location: "Library",
    coordinator: "English Teacher",
    description: "Develop public speaking and critical thinking skills",
    participants: 10,
    maxParticipants: 15,
    category: "academic",
    targetSections: ['junior', 'senior']
  },
  {
    id: "science-club",
    name: "Science Club",
    day: "Friday",
    time: "3:00 PM - 4:30 PM",
    location: "Science Laboratory",
    coordinator: "Science Teacher",
    description: "Hands-on experiments and scientific exploration",
    participants: 15,
    maxParticipants: 20,
    category: "academic",
    targetSections: ['junior', 'senior']
  },
  {
    id: "reading-club",
    name: "Reading Club",
    day: "Monday",
    time: "3:00 PM - 4:00 PM",
    location: "Library",
    coordinator: "Librarian",
    description: "Develop reading habits and comprehension skills",
    participants: 25,
    maxParticipants: 35,
    category: "academic",
    targetSections: ['kindergarten', 'junior', 'senior']
  },

  // Other Clubs
  {
    id: "environmental-club",
    name: "Environmental Club",
    day: "Saturday",
    time: "9:00 AM - 11:00 AM",
    location: "School Garden",
    coordinator: "Environmental Coordinator",
    description: "Environmental awareness and conservation activities",
    participants: 18,
    maxParticipants: 25,
    category: "other",
    targetSections: ['junior', 'senior']
  }
];

// Helper functions
export const getClubsByCategory = (category: Club['category']) => {
  return clubs.filter(club => club.category === category);
};

export const getClubsByDay = (day: string) => {
  return clubs.filter(club => club.day === day);
};

export const getClubsBySection = (section: 'kindergarten' | 'junior' | 'senior') => {
  return clubs.filter(club => 
    !club.targetSections || club.targetSections.includes(section)
  );
};

export const getClubById = (id: string) => {
  return clubs.find(club => club.id === id);
};

export const groupClubsByDay = () => {
  return clubs.reduce((acc, club) => {
    if (!acc[club.day]) acc[club.day] = [];
    acc[club.day].push(club);
    return acc;
  }, {} as Record<string, Club[]>);
};

// Available days for clubs
export const clubDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Club categories
export const clubCategories = [
  { id: 'sports', label: 'Sports' },
  { id: 'arts', label: 'Arts' },
  { id: 'academic', label: 'Academic' },
  { id: 'other', label: 'Other' }
] as const;
