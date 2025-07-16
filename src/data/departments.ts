// School Departments Data
export interface Department {
  id: string;
  name: string;
  displayName: string;
  description: string;
  headOfDepartment?: string;
  sections: ('kindergarten' | 'junior' | 'senior')[];
  subjects: string[]; // Subject IDs
}

export const departments: Department[] = [
  {
    id: 'kindergarten',
    name: 'Kindergarten',
    displayName: 'Kindergarten Department',
    description: 'Early childhood education and development',
    sections: ['kindergarten'],
    subjects: [
      'letter-recognition', 'number-recognition', 'pre-reading', 'pre-math',
      'phonics', 'basic-math', 'art', 'music-movement', 'creative-play',
      'physical-development', 'physical-education'
    ]
  },
  {
    id: 'languages',
    name: 'Languages',
    displayName: 'Languages Department',
    description: 'Language arts and communication skills',
    sections: ['junior', 'senior'],
    subjects: ['english']
  },
  {
    id: 'mathematics-ict',
    name: 'Mathematics & ICT',
    displayName: 'Mathematics & ICT Department',
    description: 'Mathematical concepts and information technology',
    sections: ['junior', 'senior'],
    subjects: ['mathematics', 'computer']
  },
  {
    id: 'science',
    name: 'Science',
    displayName: 'Science Department',
    description: 'General science and natural phenomena',
    sections: ['junior', 'senior'],
    subjects: ['science']
  },
  {
    id: 'social-studies',
    name: 'Social Studies',
    displayName: 'Social Studies Department',
    description: 'Geography, history, and social concepts',
    sections: ['junior', 'senior'],
    subjects: ['social-studies']
  },
  {
    id: 'creative-arts',
    name: 'Creative Arts',
    displayName: 'Creative Arts Department',
    description: 'Visual arts, music, and creative expression',
    sections: ['kindergarten', 'junior', 'senior'],
    subjects: ['art', 'music-movement']
  },
  {
    id: 'physical-education',
    name: 'Physical Education',
    displayName: 'Physical Education Department',
    description: 'Physical fitness and sports activities',
    sections: ['kindergarten', 'junior', 'senior'],
    subjects: ['physical-education', 'physical-development']
  },
  {
    id: 'religious-studies',
    name: 'Religious Studies',
    displayName: 'Religious Studies Department',
    description: 'Spiritual and moral education',
    sections: ['junior', 'senior'],
    subjects: ['religious-education']
  },
  {
    id: 'school-administration',
    name: 'School Administration',
    displayName: 'School Administration',
    description: 'Administrative and management functions',
    sections: ['kindergarten', 'junior', 'senior'],
    subjects: []
  },
  {
    id: 'academic-affairs',
    name: 'Academic Affairs',
    displayName: 'Academic Affairs',
    description: 'Academic oversight and curriculum development',
    sections: ['kindergarten', 'junior', 'senior'],
    subjects: []
  }
];

// Helper functions
export const getDepartmentsBySection = (section: 'kindergarten' | 'junior' | 'senior') => {
  return departments.filter(dept => dept.sections.includes(section));
};

export const getDepartmentById = (id: string) => {
  return departments.find(dept => dept.id === id);
};

export const getDepartmentByName = (name: string) => {
  return departments.find(dept => dept.name === name);
};

export const getDepartmentsBySubject = (subjectId: string) => {
  return departments.filter(dept => dept.subjects.includes(subjectId));
};

// Department names array for backward compatibility
export const departmentNames = departments.map(dept => dept.displayName);

// Available departments for teachers
export const availableDepartments = [
  'Kindergarten',
  'Languages & Religious Studies',
  'Mathematics & ICT',
  'Science & ICT',
  'Mathematics & Local Languages',
  'Languages',
  'Creative Arts',
  'Physical Education',
  'Religious Studies',
  'School Administration',
  'Academic Affairs',
  'Administration'
];