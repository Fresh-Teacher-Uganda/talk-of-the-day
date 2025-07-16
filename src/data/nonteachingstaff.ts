import defaultAvatar from '@/assets/default-avatar.png';

export interface NonTeachingStaffData {
  id: string;
  email: string;
  password: string;
  role: 'non-teaching';
  name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  address: string;
  title: string;
  gender: string;
  subject: 'N/A';
  department: string;
  qualification: string;
  experience: string;
  joinDate: string;
  bio: string;
  emergencyContact: string;
  emergencyPhone: string;
  avatar: string;
  accountStatus: 'active' | 'inactive' | 'suspended' | 'archived';
}

export const localNonTeachingStaffDatabase = {
  users: [
    {
      id: '1001',
      email: 'david.kato@staff.springingstars.ac.ug',
      password: 'staff123',
      role: 'non-teaching' as const,
      name: 'David Kato',
      firstName: 'David',
      middleName: '',
      lastName: 'Kato',
      phone: '+256 772 333 333',
      address: '789 Muyenga Ave, Kampala',
      title: 'Mr.',
      gender: 'male',
      subject: 'N/A' as const,
      department: 'Administration',
      qualification: 'Diploma in Business Administration',
      experience: '4 years',
      joinDate: '2020-08-10',
      bio: 'An efficient and organized administrator ensuring the smooth running of the school.',
      emergencyContact: 'Mary Kato',
      emergencyPhone: '+256 772 333 334',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    },
    {
      id: '1008',
      email: 'susan.namugga@staff.springingstars.ac.ug',
      password: 'staff123',
      role: 'non-teaching' as const,
      name: 'Susan Namugga',
      firstName: 'Susan',
      middleName: '',
      lastName: 'Namugga',
      phone: '+256 772 111 222',
      address: '234 Bukoto St, Kampala',
      title: 'Ms.',
      gender: 'female',
      subject: 'N/A' as const,
      department: 'Library Services',
      qualification: 'B.Lib from Uganda Christian University',
      experience: '6 years',
      joinDate: '2018-05-15',
      bio: 'A dedicated librarian passionate about promoting reading culture among students.',
      emergencyContact: 'John Namugga',
      emergencyPhone: '+256 772 111 223',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    },
    {
      id: '1009',
      email: 'moses.lubega@staff.springingstars.ac.ug',
      password: 'staff123',
      role: 'non-teaching' as const,
      name: 'Moses Lubega',
      firstName: 'Moses',
      middleName: '',
      lastName: 'Lubega',
      phone: '+256 772 444 555',
      address: '567 Wandegeya, Kampala',
      title: 'Mr.',
      gender: 'male',
      subject: 'N/A' as const,
      department: 'Maintenance',
      qualification: 'Certificate in Building Technology',
      experience: '10 years',
      joinDate: '2014-03-20',
      bio: 'Skilled maintenance officer ensuring the school facilities are in excellent condition.',
      emergencyContact: 'Sarah Lubega',
      emergencyPhone: '+256 772 444 556',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    }
  ] as NonTeachingStaffData[]
};