// School Classes Data
export interface Class {
  id: string;
  name: string;
  level: string;
  section: 'kindergarten' | 'junior' | 'senior';
  capacity: number;
  subjects: string[];
}

export const classes: Class[] = [
  // Kindergarten Section
  {
    id: 'baby-class',
    name: 'Baby Class',
    level: 'Baby Class',
    section: 'kindergarten',
    capacity: 20,
    subjects: ['letter-recognition', 'number-recognition', 'art', 'music-movement']
  },
  {
    id: 'middle-class',
    name: 'Middle Class',
    level: 'Middle Class',
    section: 'kindergarten',
    capacity: 20,
    subjects: ['pre-reading', 'pre-math', 'creative-play', 'physical-development']
  },
  {
    id: 'top-class',
    name: 'Top Class',
    level: 'Top Class',
    section: 'kindergarten',
    capacity: 25,
    subjects: ['phonics', 'basic-math', 'art', 'physical-education']
  },
  
  // Junior Section
  {
    id: 'primary-one',
    name: 'Primary One',
    level: 'Primary 1',
    section: 'junior',
    capacity: 35,
    subjects: ['mathematics', 'english', 'science', 'social-studies']
  },
  {
    id: 'primary-two',
    name: 'Primary Two',
    level: 'Primary 2',
    section: 'junior',
    capacity: 35,
    subjects: ['mathematics', 'english', 'science', 'social-studies']
  },
  {
    id: 'primary-three',
    name: 'Primary Three',
    level: 'Primary 3',
    section: 'junior',
    capacity: 35,
    subjects: ['mathematics', 'english', 'science', 'social-studies', 'art', 'computer']
  },
  {
    id: 'primary-four',
    name: 'Primary Four',
    level: 'Primary 4',
    section: 'junior',
    capacity: 35,
    subjects: ['mathematics', 'english', 'science', 'social-studies', 'art', 'computer']
  },
  {
    id: 'primary-five',
    name: 'Primary Five',
    level: 'Primary 5',
    section: 'junior',
    capacity: 35,
    subjects: ['mathematics', 'english', 'science', 'social-studies']
  },
  {
    id: 'primary-six',
    name: 'Primary Six',
    level: 'Primary 6',
    section: 'junior',
    capacity: 35,
    subjects: ['mathematics', 'english', 'science', 'social-studies']
  },
  {
    id: 'primary-seven',
    name: 'Primary Seven',
    level: 'Primary 7',
    section: 'junior',
    capacity: 35,
    subjects: ['mathematics', 'english', 'science', 'social-studies']
  }
];

// Helper functions
export const getClassesBySection = (section: 'kindergarten' | 'junior' | 'senior') => {
  return classes.filter(cls => cls.section === section);
};

export const getClassById = (id: string) => {
  return classes.find(cls => cls.id === id);
};

export const getClassByName = (name: string) => {
  return classes.find(cls => cls.name === name);
};

// Class names array for backward compatibility
export const classNames = classes.map(cls => cls.name);