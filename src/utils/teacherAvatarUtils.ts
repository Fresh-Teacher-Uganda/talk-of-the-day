// Utility functions for teacher avatar management

// Map teacher names to their exact photo names on GitHub
const teacherPhotoNameMap: Record<string, string> = {
  // Junior Teachers
  'MBABAZI SETH': 'MBABAZI SETH',
  'NAKIYEMBA SHAKIRA': 'NAKIYEMBA SHAKIRA', 
  'KAMOGA JOHN': 'KAMOGA JOHN',
  'LUBWAMA DAVID HANNINGTON': 'LUBWAMA DAVID HANNINGTON',
  'NANSEKO REBECCA': 'NANSEKO REBECCA',
  'MPERESE CHARLES': 'MPERESE CHARLES',
  'NAMUYANJA JUSTINE': 'NAMUYANJA JUSTINE',
  'KAGOYA ESTHER': 'KAGOYA ESTHER'
};

// Generate avatar URL for teacher based on their name
export const getTeacherAvatarUrl = (firstName: string, lastName: string, middleName?: string): string => {
  // Construct full name in uppercase
  const fullName = middleName 
    ? `${firstName.toUpperCase()} ${middleName.toUpperCase()} ${lastName.toUpperCase()}`
    : `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  
  // Check if we have a photo for this teacher
  const photoName = teacherPhotoNameMap[fullName];
  
  if (photoName) {
    return `https://raw.githubusercontent.com/ssebowa/spring-stars-school/main/${encodeURIComponent(photoName)}.jpg`;
  }
  
  // Fallback to default avatar if no photo found
  return '';
};

// Get teacher initials for fallback display
export const getTeacherInitials = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

// Update existing teacher name to match photo naming convention
export const normalizeTeacherName = (name: string): { firstName: string; middleName: string; lastName: string } => {
  // Remove "Tr." prefix if present
  const cleanName = name.replace(/^Tr\.\s*/, '');
  
  // Split name parts
  const parts = cleanName.split(' ');
  
  if (parts.length === 2) {
    return {
      firstName: parts[0],
      middleName: '',
      lastName: parts[1]
    };
  } else if (parts.length === 3) {
    return {
      firstName: parts[0],
      middleName: parts[1],
      lastName: parts[2]
    };
  } else {
    // Handle edge cases
    return {
      firstName: parts[0] || '',
      middleName: parts.slice(1, -1).join(' '),
      lastName: parts[parts.length - 1] || ''
    };
  }
};