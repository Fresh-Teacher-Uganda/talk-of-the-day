// Central export for all organized school data
export { 
  classes as schoolClasses, 
  classNames, 
  getClassesBySection, 
  getClassById, 
  getClassByName 
} from './classes';

export { 
  subjects as schoolSubjects, 
  subjectNames, 
  getSubjectsBySection, 
  getSubjectById, 
  getSubjectByName 
} from './subjects';

export { 
  clubs as schoolClubs, 
  getClubsByCategory, 
  getClubsByDay, 
  groupClubsByDay 
} from './clubs';

export { 
  departments as schoolDepartments, 
  departmentNames, 
  getDepartmentsBySection 
} from './departments';

// Keep existing user data exports
export * from './userDatabase';
export * from './juniorStudentData';
export * from './juniorTeachersData';
export * from './kindergartenTeachersData';
export * from './parentdata';
export * from './admindata';
export * from './nonteachingstaff';
export * from './libraryData';
