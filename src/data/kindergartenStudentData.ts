import defaultAvatar from '@/assets/default-avatar.png';

// Utility function to convert image name to proper avatar URL with fallback
const formatAvatarUrl = (imageName: string): string => {
  if (!imageName) return defaultAvatar;
  
  // Clean the name and replace spaces with %20 for URL encoding
  const cleanName = imageName.replace('src/assets/photos/', '').replace('.JPG', '.JPG');
  const encodedName = encodeURIComponent(cleanName);
  
  // Return GitHub URL with fallback
  return `https://gloriouschools.github.io/rising-star-connect/src/assets/photos/${encodedName}`;
};

// Fallback function for missing photos
const getAvatarWithFallback = (photoName?: string): string => {
  if (!photoName) return defaultAvatar;
  return formatAvatarUrl(photoName);
};

// Map student names to photo filenames for kindergarten students
const kindergartenPhotoMap: Record<string, string> = {
  // Add any kindergarten student photos here when available
};

// Function to get photo filename for a student name
const getPhotoFilename = (name: string): string | undefined => {
  // Direct match
  if (kindergartenPhotoMap[name]) return kindergartenPhotoMap[name];
  
  // Try partial matches for similar names
  const keys = Object.keys(kindergartenPhotoMap);
  const similarKey = keys.find(key => {
    const keyParts = key.toLowerCase().split(' ');
    const nameParts = name.toLowerCase().split(' ');
    return keyParts.some(part => nameParts.some(namePart => part.includes(namePart) || namePart.includes(part)));
  });
  
  return similarKey ? kindergartenPhotoMap[similarKey] : undefined;
};

// Kindergarten student data organized by class
const kindergartenStudentsByClass = {
  "PRE_PRIMARY_CLASS_HERONS": [
    { "name": "Byamukama Peter Micheal", "dob": "", "school_pay_code": "" },
    { "name": "Dhedonga Jenovic", "dob": "", "school_pay_code": "" },
    { "name": "Karungi Myrah", "dob": "", "school_pay_code": "" },
    { "name": "Matovu Jayden Dirham", "dob": "", "school_pay_code": "" },
    { "name": "Kalungi Treasure Divine", "dob": "", "school_pay_code": "" },
    { "name": "Wokyalya Hannah", "dob": "", "school_pay_code": "" },
    { "name": "Namirembe Ariella Masembe", "dob": "", "school_pay_code": "" },
    { "name": "Kaganzi Tyler", "dob": "", "school_pay_code": "" },
    { "name": "Ssenyimba Dollars Raphaella", "dob": "", "school_pay_code": "" },
    { "name": "Kayemba Wynn", "dob": "", "school_pay_code": "" },
    { "name": "Nalukwago Rania", "dob": "", "school_pay_code": "" },
    { "name": "Najjingo Hannan", "dob": "", "school_pay_code": "" },
    { "name": "Tebusweke Jamirah", "dob": "", "school_pay_code": "" },
    { "name": "Mawanda Jude Quincy", "dob": "", "school_pay_code": "" },
    { "name": "Mirembe Grace", "dob": "", "school_pay_code": "" },
    { "name": "Nsereko Ryan", "dob": "", "school_pay_code": "" },
    { "name": "Mbugudde Kendrick", "dob": "", "school_pay_code": "" },
    { "name": "Ssimbwa Derick", "dob": "", "school_pay_code": "" },
    { "name": "Esiagi Ronald", "dob": "", "school_pay_code": "" },
    { "name": "Kayizi Keron", "dob": "", "school_pay_code": "" },
    { "name": "Nakato Queen", "dob": "", "school_pay_code": "" },
    { "name": "Katono Ryan", "dob": "", "school_pay_code": "" },
    { "name": "Namubiru Samuel", "dob": "", "school_pay_code": "" },
    { "name": "Naludongya Irene", "dob": "", "school_pay_code": "" },
    { "name": "Basunga Keziah", "dob": "", "school_pay_code": "" },
    { "name": "Kirumira Racheal", "dob": "", "school_pay_code": "" },
    { "name": "Nambooze Glory", "dob": "", "school_pay_code": "" },
    { "name": "Kizito Reema", "dob": "", "school_pay_code": "" },
    { "name": "Nakawuki Amina", "dob": "", "school_pay_code": "" },
    { "name": "Nakirya Lilian", "dob": "", "school_pay_code": "" },
    { "name": "Najjuuko Latifah", "dob": "", "school_pay_code": "" },
    { "name": "Nansali Juliet", "dob": "", "school_pay_code": "" },
    { "name": "Walukagga Joanitah", "dob": "", "school_pay_code": "" },
    { "name": "Nakawesa Jamillah", "dob": "", "school_pay_code": "" },
    { "name": "Nalukwago Grace", "dob": "", "school_pay_code": "" },
    { "name": "Magulu Irene", "dob": "", "school_pay_code": "" },
    { "name": "Nabatanzi Angel", "dob": "", "school_pay_code": "" },
    { "name": "Nakirya Elizabeth", "dob": "", "school_pay_code": "" },
    { "name": "Nabbosa Priscila", "dob": "", "school_pay_code": "" },
    { "name": "Nakito Pricilia", "dob": "", "school_pay_code": "" }
  ],
  "BABY_CLASS": [
    { "name": "Kamukama Jayden Amos", "dob": "", "school_pay_code": "" },
    { "name": "Kibalama Kaylah Devine", "dob": "", "school_pay_code": "" },
    { "name": "Lubega Faith Ezra", "dob": "", "school_pay_code": "" },
    { "name": "Kanyiginya Darlington", "dob": "", "school_pay_code": "" },
    { "name": "Kirabo Israel Hope", "dob": "", "school_pay_code": "" },
    { "name": "Kamoga Mercy Amina", "dob": "", "school_pay_code": "" },
    { "name": "Byekwaso Kestine Amaru", "dob": "", "school_pay_code": "" },
    { "name": "Akatukunda Myrah", "dob": "", "school_pay_code": "" },
    { "name": "Bwogi Abigail", "dob": "", "school_pay_code": "" },
    { "name": "Turyatunga Ethan", "dob": "", "school_pay_code": "" },
    { "name": "Ntume Dandin", "dob": "", "school_pay_code": "" },
    { "name": "Nalongo Dainah", "dob": "", "school_pay_code": "" },
    { "name": "Mpeera Keziah", "dob": "", "school_pay_code": "" },
    { "name": "Anyapo Juliet", "dob": "", "school_pay_code": "" },
    { "name": "Baguma Promise", "dob": "", "school_pay_code": "" },
    { "name": "Amuheirwe Tracy", "dob": "", "school_pay_code": "" },
    { "name": "Kajumba Kabeera Abigail", "dob": "", "school_pay_code": "" },
    { "name": "Kayizzi Jenipher", "dob": "", "school_pay_code": "" },
    { "name": "Kivunike Daina", "dob": "", "school_pay_code": "" },
    { "name": "Ssengooba Glory Faith", "dob": "", "school_pay_code": "" },
    { "name": "Kagoya Samiah", "dob": "", "school_pay_code": "" },
    { "name": "Nabbale Debrah", "dob": "", "school_pay_code": "" },
    { "name": "Kyakuwaire Joseph Kyagulanyi", "dob": "", "school_pay_code": "" },
    { "name": "Bafaki Kimberly", "dob": "", "school_pay_code": "" },
    { "name": "Nakabuye Racheal", "dob": "", "school_pay_code": "" },
    { "name": "Nakigozi Faith", "dob": "", "school_pay_code": "" },
    { "name": "Kulubya Caroline", "dob": "", "school_pay_code": "" },
    { "name": "Kanyiginya Brendah", "dob": "", "school_pay_code": "" },
    { "name": "Ssenoga Esther", "dob": "", "school_pay_code": "" },
    { "name": "Kyagulanyi Rahmat", "dob": "", "school_pay_code": "" },
    { "name": "Namubiru Hadijah", "dob": "", "school_pay_code": "" },
    { "name": "Muwonge Aaron", "dob": "", "school_pay_code": "" },
    { "name": "Katelemba Aaron", "dob": "", "school_pay_code": "" },
    { "name": "Kavuma Dan", "dob": "", "school_pay_code": "" },
    { "name": "Kiyingi Emmanuel", "dob": "", "school_pay_code": "" },
    { "name": "Kulubya Kiprotich", "dob": "", "school_pay_code": "" },
    { "name": "Nakalema Joweria", "dob": "", "school_pay_code": "" },
    { "name": "Nsereko Joshua", "dob": "", "school_pay_code": "" },
    { "name": "Oboth Joanitah", "dob": "", "school_pay_code": "" }
  ],
  "MIDDLE_CLASS": [
    { "name": "Kato Shaddai Hakim", "dob": "", "school_pay_code": "" },
    { "name": "Kizza Leander", "dob": "", "school_pay_code": "" },
    { "name": "Mpumwire Dedan", "dob": "", "school_pay_code": "" },
    { "name": "Kanaabi Ariellah", "dob": "", "school_pay_code": "" },
    { "name": "Kabuye Jayden", "dob": "", "school_pay_code": "" },
    { "name": "Tugume Destiny", "dob": "", "school_pay_code": "" },
    { "name": "Kwekundu Martha", "dob": "", "school_pay_code": "" },
    { "name": "Kagyigye Jayden Kevin", "dob": "", "school_pay_code": "" },
    { "name": "Mukisa Nathan", "dob": "", "school_pay_code": "" },
    { "name": "Katakirwa Lyla", "dob": "", "school_pay_code": "" },
    { "name": "Adaku Miracle Akin", "dob": "", "school_pay_code": "" },
    { "name": "Kakungulu Kimberly", "dob": "", "school_pay_code": "" },
    { "name": "Ssemwanga Gavin", "dob": "", "school_pay_code": "" },
    { "name": "Tumuhimbise Elijah", "dob": "", "school_pay_code": "" },
    { "name": "Kaddu Hanan", "dob": "", "school_pay_code": "" },
    { "name": "Kyeyune Kamara", "dob": "", "school_pay_code": "" },
    { "name": "Kalule Keylon", "dob": "", "school_pay_code": "" },
    { "name": "Ojera Micheal", "dob": "", "school_pay_code": "" },
    { "name": "Kiwanuka Jerome", "dob": "", "school_pay_code": "" },
    { "name": "Atugonza Shantel", "dob": "", "school_pay_code": "" },
    { "name": "Kisakye Serene Hope", "dob": "", "school_pay_code": "" },
    { "name": "Sserugo Ashley Nilofer", "dob": "", "school_pay_code": "" },
    { "name": "Nakamya Kimberly", "dob": "", "school_pay_code": "" },
    { "name": "Namara Blessing", "dob": "", "school_pay_code": "" },
    { "name": "Baleke Ashraf", "dob": "", "school_pay_code": "" },
    { "name": "Mubarak Myah", "dob": "", "school_pay_code": "" },
    { "name": "Ssemwanga Joweria", "dob": "", "school_pay_code": "" },
    { "name": "Nakazibwe Azaria", "dob": "", "school_pay_code": "" },
    { "name": "Nakanwagi Kimberly", "dob": "", "school_pay_code": "" },
    { "name": "Katongole Brenda", "dob": "", "school_pay_code": "" },
    { "name": "Nanfuka Aisha", "dob": "", "school_pay_code": "" },
    { "name": "Kamoga Abdoul", "dob": "", "school_pay_code": "" },
    { "name": "Kabenge Enoch", "dob": "", "school_pay_code": "" },
    { "name": "Kyejjusa Mark", "dob": "", "school_pay_code": "" },
    { "name": "Ssekitoleko Morris", "dob": "", "school_pay_code": "" },
    { "name": "Kyeyune Rashidah", "dob": "", "school_pay_code": "" },
    { "name": "Nwagi Hilda", "dob": "", "school_pay_code": "" },
    { "name": "Najwa Ralia", "dob": "", "school_pay_code": "" },
    { "name": "Nsereko Julia", "dob": "", "school_pay_code": "" },
    { "name": "Nabisubi Purity", "dob": "", "school_pay_code": "" },
    { "name": "Nakirya Hilda", "dob": "", "school_pay_code": "" },
    { "name": "Nakabugo Esther", "dob": "", "school_pay_code": "" },
    { "name": "Nabakooza Charity", "dob": "", "school_pay_code": "" },
    { "name": "Kiyemba Rachel", "dob": "", "school_pay_code": "" },
    { "name": "Kiwewa Caroline", "dob": "", "school_pay_code": "" },
    { "name": "Nakimera Gloria", "dob": "", "school_pay_code": "" },
    { "name": "Nabawanuka Angel", "dob": "", "school_pay_code": "" },
    { "name": "Kamara Florence", "dob": "", "school_pay_code": "" },
    { "name": "Nakatudde Hadijah", "dob": "", "school_pay_code": "" },
    { "name": "Nsekuye Dianah", "dob": "", "school_pay_code": "" }
  ],
  "TOP_CLASS": [
    { "name": "Kabulengane Davina", "dob": "", "school_pay_code": "" },
    { "name": "Karagwa Daniel", "dob": "", "school_pay_code": "" },
    { "name": "Kyarimpa Daniella Sarah", "dob": "", "school_pay_code": "" },
    { "name": "Bakkabulindi Gideon", "dob": "", "school_pay_code": "" },
    { "name": "Luwemba Devine Aruho", "dob": "", "school_pay_code": "" },
    { "name": "Kasaija Abigail", "dob": "", "school_pay_code": "" },
    { "name": "Natukwasa Lilian", "dob": "", "school_pay_code": "" },
    { "name": "Wagaba Judah", "dob": "", "school_pay_code": "" },
    { "name": "Kibirige Philip", "dob": "", "school_pay_code": "" },
    { "name": "Nabanja Julian", "dob": "", "school_pay_code": "" },
    { "name": "Namumbya Lillian", "dob": "", "school_pay_code": "" },
    { "name": "Nansubuga Racheal", "dob": "", "school_pay_code": "" },
    { "name": "Kirunda Mark", "dob": "", "school_pay_code": "" },
    { "name": "Kizza Ruth Abby", "dob": "", "school_pay_code": "" },
    { "name": "Kirenga Juliet", "dob": "", "school_pay_code": "" },
    { "name": "Kiggundu Adriana", "dob": "", "school_pay_code": "" },
    { "name": "Kyagulanyi Lucky", "dob": "", "school_pay_code": "" },
    { "name": "Jjuuko Esther", "dob": "", "school_pay_code": "" },
    { "name": "Kamara Lynne Lynda", "dob": "", "school_pay_code": "" },
    { "name": "Walusimbi Micah", "dob": "", "school_pay_code": "" },
    { "name": "Akiteng Ashraf", "dob": "", "school_pay_code": "" },
    { "name": "Kiwanuka Aaron", "dob": "", "school_pay_code": "" },
    { "name": "Kasozi Hamza", "dob": "", "school_pay_code": "" },
    { "name": "Katamba Deborah", "dob": "", "school_pay_code": "" },
    { "name": "Nakigozi Julian", "dob": "", "school_pay_code": "" },
    { "name": "Talemwa Dylan", "dob": "", "school_pay_code": "" },
    { "name": "Mukwasa Alpha", "dob": "", "school_pay_code": "" },
    { "name": "Kafuko Kizito", "dob": "", "school_pay_code": "" },
    { "name": "Kiiza Abdoul", "dob": "", "school_pay_code": "" },
    { "name": "Kyaligonza Precious", "dob": "", "school_pay_code": "" },
    { "name": "Kalungi Alpha", "dob": "", "school_pay_code": "" },
    { "name": "Nalweyiso Kimberly", "dob": "", "school_pay_code": "" },
    { "name": "Mwijukye Liam", "dob": "", "school_pay_code": "" },
    { "name": "Nakanjako Ashraf", "dob": "", "school_pay_code": "" },
    { "name": "Kanyanja Kimberly", "dob": "", "school_pay_code": "" },
    { "name": "Lutalo Enock", "dob": "", "school_pay_code": "" },
    { "name": "Kyomukama Keron", "dob": "", "school_pay_code": "" },
    { "name": "Nabbuto Marian", "dob": "", "school_pay_code": "" },
    { "name": "Bashaija Dylan", "dob": "", "school_pay_code": "" },
    { "name": "Najjuka Esther", "dob": "", "school_pay_code": "" },
    { "name": "Namakula Anita", "dob": "", "school_pay_code": "" },
    { "name": "Namagembe Sarah", "dob": "", "school_pay_code": "" },
    { "name": "Kirumira Mark", "dob": "", "school_pay_code": "" },
    { "name": "Kyobe Edwin", "dob": "", "school_pay_code": "" },
    { "name": "Nabayego Caroline", "dob": "", "school_pay_code": "" },
    { "name": "Nasiwera Phoebe", "dob": "", "school_pay_code": "" },
    { "name": "Nabazzi Phoebe", "dob": "", "school_pay_code": "" },
    { "name": "Namukose Joweria", "dob": "", "school_pay_code": "" },
    { "name": "Nakalembe Charity", "dob": "", "school_pay_code": "" },
    { "name": "Nalubogo Esther", "dob": "", "school_pay_code": "" },
    { "name": "Nalwanga Joanitah", "dob": "", "school_pay_code": "" },
    { "name": "Nabudere Lydia", "dob": "", "school_pay_code": "" },
    { "name": "Nabbanja Sarah", "dob": "", "school_pay_code": "" }
  ],
  "BEGINNER_CLASS": [
    { "name": "Katende Jayden Gideon", "dob": "", "school_pay_code": "" },
    { "name": "Katabaazi Mercy", "dob": "", "school_pay_code": "" },
    { "name": "Kikomeko Juliet", "dob": "", "school_pay_code": "" },
    { "name": "Nabulya Arafat", "dob": "", "school_pay_code": "" },
    { "name": "Mugiga Prince Joachim", "dob": "", "school_pay_code": "" },
    { "name": "Asinasio Blessed", "dob": "", "school_pay_code": "" },
    { "name": "Kakembo Ethan", "dob": "", "school_pay_code": "" },
    { "name": "Lubogo Blessing Calvin", "dob": "", "school_pay_code": "" },
    { "name": "Ssekiranda Julian", "dob": "", "school_pay_code": "" },
    { "name": "Ssekanku Kyden Levi", "dob": "", "school_pay_code": "" },
    { "name": "Mutebi Kimberly", "dob": "", "school_pay_code": "" },
    { "name": "Magara Joella", "dob": "", "school_pay_code": "" },
    { "name": "Lubega Keron", "dob": "", "school_pay_code": "" },
    { "name": "Muteesa Ashraf", "dob": "", "school_pay_code": "" },
    { "name": "Kemirembe Brahim", "dob": "", "school_pay_code": "" },
    { "name": "Namiyonga Joyce", "dob": "", "school_pay_code": "" },
    { "name": "Ssebuufu Richard", "dob": "", "school_pay_code": "" },
    { "name": "Ssenku Gideon", "dob": "", "school_pay_code": "" },
    { "name": "Ssekitto Moses", "dob": "", "school_pay_code": "" },
    { "name": "Wabwire Pricillar", "dob": "", "school_pay_code": "" },
    { "name": "Wamimo Ethan", "dob": "", "school_pay_code": "" },
    { "name": "Kakeeto Seth", "dob": "", "school_pay_code": "" },
    { "name": "Kabunga Ashraf", "dob": "", "school_pay_code": "" },
    { "name": "Kyomugisha Tracy", "dob": "", "school_pay_code": "" },
    { "name": "Kato Alpha", "dob": "", "school_pay_code": "" },
    { "name": "Nampijja Nakkiria Enidu", "dob": "", "school_pay_code": "" },
    { "name": "Kyakulaga Katelyn", "dob": "", "school_pay_code": "" },
    { "name": "Kyobutungi Esther", "dob": "", "school_pay_code": "" },
    { "name": "Nabatanzi Latifah", "dob": "", "school_pay_code": "" },
    { "name": "Nabisere Shallom", "dob": "", "school_pay_code": "" },
    { "name": "Nakaima Proscovia", "dob": "", "school_pay_code": "" },
    { "name": "Namakula Esther", "dob": "", "school_pay_code": "" },
    { "name": "Namboowa Joanitah", "dob": "", "school_pay_code": "" },
    { "name": "Kimbugwe Enock", "dob": "", "school_pay_code": "" },
    { "name": "Matovu Gabriel", "dob": "", "school_pay_code": "" },
    { "name": "Mirembe Annet", "dob": "", "school_pay_code": "" },
    { "name": "Mubiru Shamir", "dob": "", "school_pay_code": "" },
    { "name": "Mulyabaruli Moris", "dob": "", "school_pay_code": "" },
    { "name": "Mukimbugwe Cathy", "dob": "", "school_pay_code": "" },
    { "name": "Mutebi Alpha", "dob": "", "school_pay_code": "" },
    { "name": "Nambi Catherine", "dob": "", "school_pay_code": "" },
    { "name": "Ssemaganda Adam", "dob": "", "school_pay_code": "" },
    { "name": "Nakatudde Queen", "dob": "", "school_pay_code": "" },
    { "name": "Nalubega Rachel", "dob": "", "school_pay_code": "" },
    { "name": "Namuyiga Sarah", "dob": "", "school_pay_code": "" },
    { "name": "Nakiyimba Juliet", "dob": "", "school_pay_code": "" },
    { "name": "Nakiwala Bridget", "dob": "", "school_pay_code": "" },
    { "name": "Nafula Lucky", "dob": "", "school_pay_code": "" },
    { "name": "Namuliika Immaculate", "dob": "", "school_pay_code": "" },
    { "name": "Nakassajja Kimberly", "dob": "", "school_pay_code": "" }
  ],
  "RECEPTION": [
    { "name": "Nabbenja Ashley", "dob": "", "school_pay_code": "" },
    { "name": "Mukasa Abraham", "dob": "", "school_pay_code": "" },
    { "name": "Katumba Arafat", "dob": "", "school_pay_code": "" },
    { "name": "Nankabirwa Blessing", "dob": "", "school_pay_code": "" },
    { "name": "Nakayemba Julia", "dob": "", "school_pay_code": "" },
    { "name": "Kakaire Devine Love", "dob": "", "school_pay_code": "" },
    { "name": "Bazirake Blessed", "dob": "", "school_pay_code": "" },
    { "name": "Nantongo Charity", "dob": "", "school_pay_code": "" },
    { "name": "Nakimuli Faidhah", "dob": "", "school_pay_code": "" },
    { "name": "Nalubega Phoebe", "dob": "", "school_pay_code": "" },
    { "name": "Kanyamunyu Esther", "dob": "", "school_pay_code": "" },
    { "name": "Kajubi Blessed", "dob": "", "school_pay_code": "" },
    { "name": "Namubiru Olivia", "dob": "", "school_pay_code": "" },
    { "name": "Nabboya Faith", "dob": "", "school_pay_code": "" },
    { "name": "Kawuma Geofrey", "dob": "", "school_pay_code": "" },
    { "name": "Kanyikirira Alpha", "dob": "", "school_pay_code": "" },
    { "name": "Lubwama Brahim", "dob": "", "school_pay_code": "" },
    { "name": "Kittu Ian", "dob": "", "school_pay_code": "" },
    { "name": "Nankinga Charity", "dob": "", "school_pay_code": "" },
    { "name": "Naluwagga Annet", "dob": "", "school_pay_code": "" },
    { "name": "Ssenyimba Gideon", "dob": "", "school_pay_code": "" },
    { "name": "Naluvadde Gloria", "dob": "", "school_pay_code": "" },
    { "name": "Namubiru Alicia", "dob": "", "school_pay_code": "" },
    { "name": "Namatovu Aidah", "dob": "", "school_pay_code": "" },
    { "name": "Nanteza Rachel", "dob": "", "school_pay_code": "" },
    { "name": "Nakyejwe Phoebe", "dob": "", "school_pay_code": "" },
    { "name": "Nalujja Sarah", "dob": "", "school_pay_code": "" },
    { "name": "Namuwaya Faith", "dob": "", "school_pay_code": "" },
    { "name": "Namubiru Hadijah", "dob": "", "school_pay_code": "" },
    { "name": "Nakibogo Julian", "dob": "", "school_pay_code": "" },
    { "name": "Nambogo Bridget", "dob": "", "school_pay_code": "" },
    { "name": "Bamuwamye Gabriel", "dob": "", "school_pay_code": "" },
    { "name": "Mulindwa Isaac", "dob": "", "school_pay_code": "" },
    { "name": "Namulaaka Esther", "dob": "", "school_pay_code": "" },
    { "name": "Nalubimbi Rachel", "dob": "", "school_pay_code": "" },
    { "name": "Nalubega Catherine", "dob": "", "school_pay_code": "" },
    { "name": "Nalubwama Faith", "dob": "", "school_pay_code": "" },
    { "name": "Nabawanda Mercy", "dob": "", "school_pay_code": "" },
    { "name": "Nalugga Gloria", "dob": "", "school_pay_code": "" },
    { "name": "Nalugya Racheal", "dob": "", "school_pay_code": "" },
    { "name": "Naluyima Phoebe", "dob": "", "school_pay_code": "" },
    { "name": "Nakiguli Annet", "dob": "", "school_pay_code": "" },
    { "name": "Nabayego Faith", "dob": "", "school_pay_code": "" },
    { "name": "Naggita Charity", "dob": "", "school_pay_code": "" },
    { "name": "Namulindwa Sarah", "dob": "", "school_pay_code": "" },
    { "name": "Nakiwala Caroline", "dob": "", "school_pay_code": "" },
    { "name": "Nakasiima Annet", "dob": "", "school_pay_code": "" },
    { "name": "Namayanja Esther", "dob": "", "school_pay_code": "" },
    { "name": "Nabisere Joanitah", "dob": "", "school_pay_code": "" },
    { "name": "Nalwanga Faith", "dob": "", "school_pay_code": "" }
  ]
};

// Merge all classes and transform to the expected format
const transformKindergartenStudentData = () => {
  const students: any[] = [];
  
  Object.entries(kindergartenStudentsByClass).forEach(([className, classStudents]) => {
    classStudents.forEach((student, index) => {
      const photoName = getPhotoFilename(student.name);
      const avatar = getAvatarWithFallback(photoName);
      
      students.push({
        id: `KS${String(students.length + 1).padStart(3, '0')}`,
        name: student.name,
        class: className.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
        email: `${student.name.toLowerCase().replace(/\s+/g, '.')}.${student.school_pay_code}@student.springingstars.ac.ug`,
        dateOfBirth: student.dob,
        schoolPayCode: student.school_pay_code,
        avatar
      });
    });
  });
  
  return students;
};

export const localKindergartenStudentDatabase = {
  users: transformKindergartenStudentData()
};