import defaultAvatar from '@/assets/default-avatar.png';

export interface ParentData {
  id: string;
  email: string;
  password: string;
  role: 'parent';
  name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  address: string;
  title: string;
  gender: string;
  subject: 'N/A';
  department: 'N/A';
  qualification: string;
  experience: 'N/A';
  joinDate: string;
  bio: string;
  emergencyContact: string;
  emergencyPhone: string;
  children: string[];
  avatar: string;
  accountStatus: 'active' | 'inactive' | 'suspended' | 'archived';
}

export const localParentsDatabase = {
  users: [
    {
      id: '1002',
      email: 'grace.nalongo@parent.springingstars.ac.ug',
      password: 'parent123',
      role: 'parent' as const,
      name: 'Grace Nalongo',
      firstName: 'Grace',
      middleName: '',
      lastName: 'Nalongo',
      phone: '+256 772 444 444',
      address: '123 Makerere Hill, Kampala',
      title: 'Mrs.',
      gender: 'female',
      subject: 'N/A' as const,
      department: 'N/A' as const,
      qualification: 'B.Com from Makerere University',
      experience: 'N/A' as const,
      joinDate: '2023-01-15',
      bio: 'A dedicated parent committed to supporting her children\'s education and school activities.',
      emergencyContact: 'David Mukasa',
      emergencyPhone: '+256 772 111 112',
      children: ['Nassali Yasmeen', 'Mulungi Divine Gabriella'],
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    },
    {
      id: '1006',
      email: 'james.ssemwanga@parent.springingstars.ac.ug',
      password: 'parent123',
      role: 'parent' as const,
      name: 'James Ssemwanga',
      firstName: 'James',
      middleName: '',
      lastName: 'Ssemwanga',
      phone: '+256 772 777 888',
      address: '456 Muyenga Hill, Kampala',
      title: 'Mr.',
      gender: 'male',
      subject: 'N/A' as const,
      department: 'N/A' as const,
      qualification: 'B.Eng from Kyambogo University',
      experience: 'N/A' as const,
      joinDate: '2023-03-10',
      bio: 'An involved father who believes in the power of quality education.',
      emergencyContact: 'Susan Ssemwanga',
      emergencyPhone: '+256 772 777 889',
      children: ['Harry Jotham Ssemwanga', 'Ssemwanga Liam'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    },
    {
      id: '1007',
      email: 'florence.nakato@parent.springingstars.ac.ug',
      password: 'parent123',
      role: 'parent' as const,
      name: 'Florence Nakato',
      firstName: 'Florence',
      middleName: '',
      lastName: 'Nakato',
      phone: '+256 772 999 000',
      address: '789 Ntinda, Kampala',
      title: 'Mrs.',
      gender: 'female',
      subject: 'N/A' as const,
      department: 'N/A' as const,
      qualification: 'Diploma in Nursing',
      experience: 'N/A' as const,
      joinDate: '2023-02-20',
      bio: 'A caring mother who prioritizes her children\'s holistic development.',
      emergencyContact: 'Peter Nakato',
      emergencyPhone: '+256 772 999 001',
      children: ['Nandegeya Samantha', 'Emmanuel Wafula'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    }
  ] as ParentData[]
};