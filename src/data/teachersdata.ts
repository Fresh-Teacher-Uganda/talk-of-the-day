import defaultAvatar from '@/assets/default-avatar.png';

export interface TeacherData {
  id: string;
  email: string;
  password: string;
  role: 'teacher';
  name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  address: string;
  title: string;
  gender: string;
  subject: string;
  department: string;
  qualification: string;
  experience: string;
  joinDate: string;
  bio: string;
  emergencyContact: string;
  emergencyPhone: string;
  class?: string;
  classesTaught?: string[];
  avatar: string;
  accountStatus: 'active' | 'inactive' | 'suspended' | 'archived';
}

export const localTeachersDatabase = {
  users: [
    {
      id: '1000',
      email: 'sarah.nambi@teacher.springingstars.ac.ug',
      password: 'teacher123',
      role: 'teacher' as const,
      name: 'Sarah Nambi',
      firstName: 'Sarah',
      middleName: '',
      lastName: 'Nambi',
      phone: '+256 772 222 222',
      address: '456 Kololo Rd, Kampala',
      title: 'Ms.',
      gender: 'female',
      subject: 'Mathematics & Science',
      department: 'Academics',
      qualification: 'B.Ed. from Makerere University',
      experience: '8 years',
      joinDate: '2016-05-20',
      bio: 'A passionate educator dedicated to fostering a love for learning in her students.',
      emergencyContact: 'Michael Nambi',
      emergencyPhone: '+256 772 222 223',
      class: 'Primary 5 & 6',
      classesTaught: ['JUNIOR_FIVE', 'JUNIOR_SIX'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    },
    {
      id: '1004',
      email: 'john.doe@teacher.springingstars.ac.ug',
      password: 'teacher123',
      role: 'teacher' as const,
      name: 'John Doe',
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      phone: '+256 772 333 444',
      address: '123 Nakasero Rd, Kampala',
      title: 'Mr.',
      gender: 'male',
      subject: 'English & Literature',
      department: 'Languages',
      qualification: 'B.A. in English Literature',
      experience: '5 years',
      joinDate: '2019-03-15',
      bio: 'Dedicated to improving students\' communication and writing skills.',
      emergencyContact: 'Jane Doe',
      emergencyPhone: '+256 772 333 445',
      class: 'Primary 3 & 4',
      classesTaught: ['JUNIOR_THREE', 'JUNIOR_FOUR'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    },
    {
      id: '1005',
      email: 'mary.johnson@teacher.springingstars.ac.ug',
      password: 'teacher123',
      role: 'teacher' as const,
      name: 'Mary Johnson',
      firstName: 'Mary',
      middleName: '',
      lastName: 'Johnson',
      phone: '+256 772 555 666',
      address: '789 Bugolobi Rd, Kampala',
      title: 'Mrs.',
      gender: 'female',
      subject: 'Social Studies & History',
      department: 'Humanities',
      qualification: 'B.A. in History',
      experience: '12 years',
      joinDate: '2012-08-20',
      bio: 'Passionate about making history come alive for young learners.',
      emergencyContact: 'Robert Johnson',
      emergencyPhone: '+256 772 555 667',
      class: 'Primary 1 & 2',
      classesTaught: ['JUNIOR_ONE', 'JUNIOR_TWO'],
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      accountStatus: 'active' as const
    }
  ] as TeacherData[]
};