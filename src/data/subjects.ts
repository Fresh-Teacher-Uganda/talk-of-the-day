// School Subjects Data
export interface Subject {
  id: string;
  name: string;
  displayName: string;
  category: 'core' | 'elective' | 'creative' | 'physical' | 'technical' | 'spiritual';
  sections: ('kindergarten' | 'junior' | 'senior')[];
  description?: string;
}

export const subjects: Subject[] = [
  // Core Academic Subjects
  {
    id: 'mathematics',
    name: 'Mathematics',
    displayName: 'Mathematics',
    category: 'core',
    sections: ['kindergarten', 'junior', 'senior'],
    description: 'Mathematical concepts and problem-solving skills'
  },
  {
    id: 'english',
    name: 'English',
    displayName: 'English Language',
    category: 'core',
    sections: ['kindergarten', 'junior', 'senior'],
    description: 'English language communication and literacy'
  },
  {
    id: 'science',
    name: 'Science',
    displayName: 'General Science',
    category: 'core',
    sections: ['junior', 'senior'],
    description: 'Basic scientific concepts and experiments'
  },
  {
    id: 'social-studies',
    name: 'Social Studies',
    displayName: 'Social Studies',
    category: 'core',
    sections: ['junior', 'senior'],
    description: 'Geography, history, and social concepts'
  },

  // Kindergarten Specific Subjects
  {
    id: 'letter-recognition',
    name: 'Letter Recognition',
    displayName: 'Letter Recognition',
    category: 'core',
    sections: ['kindergarten'],
    description: 'Learning alphabet and letter sounds'
  },
  {
    id: 'number-recognition',
    name: 'Number Recognition',
    displayName: 'Number Recognition',
    category: 'core',
    sections: ['kindergarten'],
    description: 'Basic number identification and counting'
  },
  {
    id: 'pre-reading',
    name: 'Pre-Reading',
    displayName: 'Pre-Reading Skills',
    category: 'core',
    sections: ['kindergarten'],
    description: 'Reading readiness and comprehension'
  },
  {
    id: 'pre-math',
    name: 'Pre-Math',
    displayName: 'Pre-Mathematics',
    category: 'core',
    sections: ['kindergarten'],
    description: 'Mathematical concepts for early learners'
  },
  {
    id: 'phonics',
    name: 'Phonics',
    displayName: 'Phonics',
    category: 'core',
    sections: ['kindergarten'],
    description: 'Sound-letter relationships and reading'
  },
  {
    id: 'basic-math',
    name: 'Basic Math',
    displayName: 'Basic Mathematics',
    category: 'core',
    sections: ['kindergarten'],
    description: 'Fundamental math concepts'
  },

  // Creative & Arts Subjects
  {
    id: 'art',
    name: 'Art',
    displayName: 'Art & Craft',
    category: 'creative',
    sections: ['kindergarten', 'junior', 'senior'],
    description: 'Visual arts, crafts, and creative expression'
  },
  {
    id: 'music-movement',
    name: 'Music & Movement',
    displayName: 'Music & Movement',
    category: 'creative',
    sections: ['kindergarten'],
    description: 'Music, rhythm, and physical coordination'
  },
  {
    id: 'creative-play',
    name: 'Creative Play',
    displayName: 'Creative Play',
    category: 'creative',
    sections: ['kindergarten'],
    description: 'Imaginative play and creativity'
  },

  // Physical Development
  {
    id: 'physical-education',
    name: 'Physical Education',
    displayName: 'Physical Education',
    category: 'physical',
    sections: ['kindergarten', 'junior', 'senior'],
    description: 'Physical fitness and sports activities'
  },
  {
    id: 'physical-development',
    name: 'Physical Development',
    displayName: 'Physical Development',
    category: 'physical',
    sections: ['kindergarten'],
    description: 'Motor skills and physical coordination'
  },

  // Technical Subjects
  {
    id: 'computer',
    name: 'Computer',
    displayName: 'Computer Studies',
    category: 'technical',
    sections: ['junior', 'senior'],
    description: 'Basic computer skills and digital literacy'
  },

  // Spiritual & Moral Education
  {
    id: 'religious-education',
    name: 'Religious Education',
    displayName: 'Religious Education',
    category: 'spiritual',
    sections: ['junior', 'senior'],
    description: 'Spiritual and moral development'
  }
];

// Helper functions
export const getSubjectsBySection = (section: 'kindergarten' | 'junior' | 'senior') => {
  return subjects.filter(subject => subject.sections.includes(section));
};

export const getSubjectsByCategory = (category: Subject['category']) => {
  return subjects.filter(subject => subject.category === category);
};

export const getSubjectById = (id: string) => {
  return subjects.find(subject => subject.id === id);
};

export const getSubjectByName = (name: string) => {
  return subjects.find(subject => subject.name === name);
};

// Subject names array for backward compatibility
export const subjectNames = subjects.map(subject => subject.displayName);