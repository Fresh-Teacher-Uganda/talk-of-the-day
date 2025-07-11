import { Student } from '@/hooks/useStudents';

// Photo filename to student data mapping
const photoStudents = [
  'ADRIANA LIAM MIRIMU',
  'AHIMBISIBWE EMMANUEL', 
  'ALBA PROMISE KOBUSINGYE',
  'ALBARA-U YAHAYA MUSOKE',
  'AMANYABYONA JOSEPH COLLINS',
  'ANKUNDA LIAM',
  'ATUNGIRE ELIJAH',
  'AVA MALAIKA DHAMUZUNGU',
  'BAGABE ABEL',
  'BIRUNGI HIDAYA',
  'BWOGI DEIGHTON',
  'BYAMUKAMA MATTHEW CHARLES',
  'DHEDONGA REHEMA MARINA',
  'EGLAH ABI GARA',
  'ELI TIMAO EDUBE',
  'FAVOUR GIDEON MAYIGA',
  'ITUNGO LIONEL RUTA',
  'JAKE WILLIAM KATENDE',
  'JEAN BRIGHT JOOGA',
  'JEAN PETER DDAMULIRA',
  'JEDIDIAH KAHUMA KAZOOBA',
  'KALULE VICTOR LEANDER',
  'KATENDE JOSIAH CHARLES',
  'KATONGOLE GERTRUDE',
  'KATONGOLE MONA',
  'KATUMBA DALTON SURPRISE',
  'KAWEESI JAYDEN HOPE',
  'KIJJAMBU MARK MORGAN',
  'KIRABO BRYSON KYLE',
  'KOBUFURA ASHLEY KRYSTEN',
  'KRYSTABELL ARIANA WAVAMUNNO',
  'KUKUNDA KIRSTEN',
  'LEVI GATAALI MUZIMA',
  'LUBEGA KERON',
  'MATSIKO DAN',
  'MUGENYI CALVIN',
  'MUKISA JESSE',
  'MUKULA ODYSSEUS BRIDGEOUS',
  'MULUNGI ADONAI',
  'MULWANA BERNICE',
  'MUTEBI HAFIZU KIGONGO',
  'MUTYABA KERON',
  'MUWANGUZI ISRAEL',
  'MWIZA ATALIA ABRIELLE',
  'MWIZA MARTHA KIMBERLY',
  'NABUKENYA SAMANTHA',
  'NABUULE ELIANA MALAIKA KAYE',
  'NABUYONDO NAIRAH',
  'NAKADDU ELLYVICK',
  'NAKAMATTE NORAH CHRISTINE',
  'NAKANWAGI JEAN ALBA',
  'NAKAYIWA ESTHER',
  'NAKITTO RASHIMAH',
  'NALUBOWA ALLISON JULIET',
  'NALUTAAYA PETRONILLAH',
  'NAMAKULA SOPHIA',
  'NAMBAJJWE VALERIA',
  'NANSUBUGA THEO ELSIE',
  'NATUMI SHAHID PAPA',
  'NAZEBA LEO',
  'NOWAMANI SHARAPOVA',
  'NTAMBAZI JEISON JOSEPH',
  'NYABUN BITH',
  'NYESIGA OTHNIEL',
  'ODEKE MIRACLE DANIEL',
  'OJAMBO DEVLIN PAUL',
  'OWORI CALVIN FRANKLIN',
  'PRIA ANGEL',
  'RUKUNDO ELIZABETH',
  'RUKUNDO FAITH CANTY',
  'SSEMPA MALCOM MATHEW',
  'SSEMPEBWA JONATHAN GIDEON',
  'SSENGENDO VICTORIA MIRACLE',
  'SSENGOOBA TENDO ENOCK',
  'SSENYIMBA DON ELIJAH',
  'SSENYONGA ELIJAH ADRIAN',
  'SUKU HOLLY LAELLE',
  'TAMARA AVA MULUNGI NDUGWA',
  'TWEBAZE ESTHER',
  'WASAJJA CHARLES DICKENS'
];

// Generate student data from photo names
export const generateStudentsFromPhotos = (): Student[] => {
  const classes = ['P.1A', 'P.1B', 'P.2A', 'P.2B', 'P.3A', 'P.3B', 'P.4A', 'P.4B', 'P.5A', 'P.5B', 'P.6A', 'P.6B', 'P.7A', 'P.7B'];
  const feeStatuses: Array<'Paid' | 'Pending' | 'Overdue'> = ['Paid', 'Pending', 'Overdue'];
  const statuses: Array<'active' | 'inactive' | 'suspended' | 'archived' | 'expelled'> = ['active', 'inactive', 'suspended', 'archived', 'expelled'];
  
  return photoStudents.map((name, index) => {
    // Generate basic info
    const studentId = `SS${String(index + 1).padStart(3, '0')}`;
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const age = Math.floor(Math.random() * 6) + 8; // Age 8-13
    const randomFeeStatus = feeStatuses[Math.floor(Math.random() * feeStatuses.length)];
    const randomStatus = index < 70 ? 'active' : statuses[Math.floor(Math.random() * statuses.length)]; // Most students are active
    
    // Generate parent info (first name + surname)
    const nameParts = name.split(' ');
    const parentName = `${generateParentName()} ${nameParts[nameParts.length - 1]}`;
    
    // Generate phone number
    const phoneNumber = `+256 7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 900 + 100)} ${Math.floor(Math.random() * 900 + 100)}`;
    
    return {
      id: studentId,
      name: formatName(name),
      class: randomClass,
      age,
      parent: parentName,
      phone: phoneNumber,
      fees: randomFeeStatus,
      status: randomStatus,
      photo: `src/assets/photos/${name}.JPG`,
      email: generateEmail(name),
      address: generateAddress()
    };
  });
};

// Helper functions
function formatName(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function generateParentName(): string {
  const parentNames = [
    'Grace', 'David', 'Sarah', 'John', 'Mary', 'Peter', 'Jane', 'James',
    'Helen', 'Moses', 'Ruth', 'Paul', 'Rebecca', 'Samuel', 'Esther', 'Daniel',
    'Rachel', 'Michael', 'Agnes', 'Robert', 'Patricia', 'Francis', 'Monica', 'Vincent'
  ];
  return parentNames[Math.floor(Math.random() * parentNames.length)];
}

function generateEmail(name: string): string {
  const firstName = name.split(' ')[0].toLowerCase();
  const domain = ['gmail.com', 'yahoo.com', 'hotmail.com'][Math.floor(Math.random() * 3)];
  return `${firstName}@${domain}`;
}

function generateAddress(): string {
  const areas = [
    'Kampala', 'Entebbe', 'Mukono', 'Jinja', 'Masaka', 'Mbarara', 
    'Fort Portal', 'Gulu', 'Lira', 'Soroti', 'Mbale', 'Kabale'
  ];
  const area = areas[Math.floor(Math.random() * areas.length)];
  const houseNumber = Math.floor(Math.random() * 999) + 1;
  return `${houseNumber} ${area} District, Uganda`;
}

export const getPhotoPath = (photoFileName: string): string => {
  return `src/assets/photos/${photoFileName}`;
};