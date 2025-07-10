
export interface LibraryDocument {
  id: string;
  title: string;
  url: string;
  class: string;
  subject: string;
  type: 'lesson-notes' | 'past-papers' | 'schemes-of-work' | 'textbooks' | 'holiday-packages';
  uploadedDate: string;
  fileSize?: string;
}

// Helper function to extract title from PDF filename
const extractTitle = (filename: string): string => {
  const name = filename.split('/').pop()?.replace('.pdf', '') || '';
  return name.replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim();
};

// Helper function to determine subject from filename
const determineSubject = (filename: string): string => {
  const name = filename.toLowerCase();
  if (name.includes('eng') || name.includes('english')) return 'English';
  if (name.includes('math') || name.includes('mtc')) return 'Mathematics';
  if (name.includes('sci') || name.includes('science')) return 'Science';
  if (name.includes('sst') || name.includes('social')) return 'Social Studies';
  if (name.includes('re') || name.includes('religious') || name.includes('ire') || name.includes('cre')) return 'Religious Education';
  if (name.includes('ict')) return 'Science';
  return 'English'; // Default
};

// Helper function to determine resource type
const determineType = (filename: string): 'lesson-notes' | 'past-papers' | 'schemes-of-work' | 'textbooks' | 'holiday-packages' => {
  const name = filename.toLowerCase();
  if (name.includes('syllabus') || name.includes('curriculum')) return 'schemes-of-work';
  if (name.includes('revision') || name.includes('exercise')) return 'past-papers';
  return 'lesson-notes'; // Default
};

// Helper function to generate realistic file size
const generateFileSize = (): string => {
  const sizes = ['1.2 MB', '2.1 MB', '3.4 MB', '4.7 MB', '5.9 MB', '2.8 MB', '1.9 MB', '3.1 MB'];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

// Transform dummy data to library format
const dummyData = [
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/EDITED P.4 ENGLISH LAST.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/Edited Primary four SST Lesson  notes  2nd term.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/Eng P.4 notes - Copy.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/Eng P.4 notes.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/ENGLISH LESSON NOTES FOR P.4 2021).pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/EXCEL P.4 SST term I.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/EXCEL P.4 SST TERM II.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/EXCEL P.4 SST TERM III.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/ICT THEORY PRIMARY-1.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/LOWER I.R.E NOTES.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/math P.4 notes.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/Maths P.4 notes Term 2 (2).pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/mother majeri p4 Sci term 1.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P 4 English lesson notes_out.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P 4 LESSON NOTES FOR ENGLISH TERM I - III.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/p. 4 Notes good .pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P. 4 SOCIAL- STUDIES LESSON NOTES.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4  ENG & SST LESSON NOTES  TERM III - 2023.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 COMPREHENSION LESSON NOTES TERM III.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 CRE NOTES ALL TERMS.docx P.4 ENG GRAMMAR LESSON NOTES FOR TERM 11.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 ENG LESSON NOTES TERM  3.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 ENG NOTES-2.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 ENGLISH LESSON NOTES ALL TERMS .pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 ENGLISH LESSON NOTES ALL TERMS -1.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 GRAMMAR  LESSON NOTES TERM III.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 MATHS  NOTES SCHEME, NOTES..pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 MATHS LESSON NOTES TERM 1 (1).pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/p.4 maths notes.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 R.E LESSON NOTES TERM 1 (1).pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 R.E LESSON NOTES TERM III.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 R.E notes tem iii.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 R.E Notes.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 RE LESSON NOTES TERM II.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 RELIGIOUS EDUCATION 2019.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 sci notes.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SCIENCE LESSON NOTES FOR ALL TERMS.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SCIENCE LESSON NOTES TERM II.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SCIENCE LESSON NOTES.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SCIENCE Notes &amp; Exercises.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 Science Notes.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SST LESSON NOTES FOR  ALL TERMS.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SST LESSON NOTES TERM III.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SST notes term 2 2022.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SST notes term 2 edited.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SST NOTES.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 SST-1.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4 TERM TWO SCIENCE LESSON NOTES 2023.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4. TERM I, II, III SCIE NOTES.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4. TERM I, II, III SCIE NOTES-1.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4-COMPREHENSION -NOTES-TERM-1.pdf"
  },
  {
    "title": "",
    "description": "Primary Four",
    "price": 5000,
    "pdfUrl": "https://fresh-teacher.github.io/p4/P.4-COMPRE-TERM-2.pdf"
  }
];

export const libraryData: LibraryDocument[] = dummyData.map((item, index) => ({
  id: (index + 1).toString(),
  title: extractTitle(item.pdfUrl),
  url: item.pdfUrl,
  class: 'Primary Four',
  subject: determineSubject(item.pdfUrl),
  type: determineType(item.pdfUrl),
  uploadedDate: new Date(2023, 11, Math.floor(Math.random() * 30) + 1).toISOString().split('T')[0],
  fileSize: generateFileSize()
}));

export const classes = ['Baby Class', 'Middle Class', 'Top Class', 'Primary One', 'Primary Two', 'Primary Three', 'Primary Four', 'Primary Five', 'Primary Six', 'Primary Seven'];

export const subjects = ['Mathematics', 'English', 'Science', 'Social Studies', 'Religious Education', 'Art', 'Physical Education'];

export const resourceTypes = [
  { id: 'lesson-notes', label: 'Lesson Notes' },
  { id: 'past-papers', label: 'Past Papers' },
  { id: 'schemes-of-work', label: 'Schemes of Work' },
  { id: 'textbooks', label: 'Textbooks' },
  { id: 'holiday-packages', label: 'Holiday Packages' }
];

// Function to extract file name from URL
export const extractFileName = (url: string): string => {
  try {
    const urlParts = url.split('/');
    const fileNameWithExtension = urlParts[urlParts.length - 1];
    const fileName = fileNameWithExtension.split('.')[0];
    return fileName.replace(/-/g, ' ').replace(/_/g, ' ');
  } catch (error) {
    console.error('Error extracting file name:', error);
    return 'Document';
  }
};
