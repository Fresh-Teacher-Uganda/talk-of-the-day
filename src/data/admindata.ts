import defaultAvatar from '@/assets/default-avatar.png';

export interface AdminData {
  id: string;
  email: string;
  password: string;
  role: 'admin';
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

export const localAdminDatabase = {
  users: [
    {
      id: '1003',
      email: 'admin@springingstars.ac.ug',
      password: 'admin123',
      role: 'admin' as const,
      name: 'Moses Ssebunya',
      firstName: 'Moses',
      middleName: '',
      lastName: 'Ssebunya',
      phone: '+256 772 555 555',
      address: '101 Parliament Ave, Kampala',
      title: 'Mr.',
      gender: 'male',
      subject: 'N/A' as const,
      department: 'School Administration',
      qualification: 'M.Ed. in Educational Leadership',
      experience: '15 years',
      joinDate: '2010-01-01',
      bio: 'A visionary leader focused on providing a world-class educational experience.',
      emergencyContact: 'Esther Ssebunya',
      emergencyPhone: '+256 772 555 556',
      avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    },
    {
      id: '1010',
      email: 'deputy@springingstars.ac.ug',
      password: 'admin123',
      role: 'admin' as const,
      name: 'Ruth Nakamya',
      firstName: 'Ruth',
      middleName: '',
      lastName: 'Nakamya',
      phone: '+256 772 666 777',
      address: '202 Kololo Ave, Kampala',
      title: 'Mrs.',
      gender: 'female',
      subject: 'N/A' as const,
      department: 'Academic Affairs',
      qualification: 'M.Ed. in Curriculum Development',
      experience: '12 years',
      joinDate: '2012-09-01',
      bio: 'Deputy head teacher with expertise in curriculum development and academic excellence.',
      emergencyContact: 'Paul Nakamya',
      emergencyPhone: '+256 772 666 778',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    }
  ] as AdminData[]
};