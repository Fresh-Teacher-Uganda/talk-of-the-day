import { User } from '@/types/auth';
import { ProfileData } from '@/types/profile';
import { localJuniorStudentDatabase } from './juniorStudentData';
import { localKindergartenStudentDatabase } from './kindergartenStudentData';
import { localJuniorTeachersDatabase } from './juniorTeachersData';
import { localKindergartenTeachersDatabase } from './kindergartenTeachersData';
import { localParentsDatabase } from './parentdata';
import { localNonTeachingStaffDatabase } from './nonteachingstaff';
import { localAdminDatabase } from './admindata';

// Combine all user data from separate files with actual data
export const userDatabase = {
  users: [
    // Junior students with role mapping
    ...localJuniorStudentDatabase.users.map(student => ({
      ...student,
      role: 'pupil' as const,
      phone: student.phone || `+256 77${Math.floor(1000000 + Math.random() * 9000000)}`,
      address: student.address || 'Kampala, Uganda',
      title: '',
      subject: 'All Subjects',
      department: 'Primary',
      qualification: 'PLE Candidate',
      experience: 'N/A',
      joinDate: '2024-01-01',
      bio: `A dedicated student at Springing Stars Junior School.`,
      emergencyContact: 'Parent/Guardian',
      emergencyPhone: `+256 77${Math.floor(1000000 + Math.random() * 9000000)}`,
      accountStatus: 'active' as const
    })),
    // Kindergarten students with role mapping
    ...localKindergartenStudentDatabase.users.map(student => ({
      ...student,
      role: 'pupil' as const,
      phone: student.phone || `+256 77${Math.floor(1000000 + Math.random() * 9000000)}`,
      address: student.address || 'Kampala, Uganda',
      title: '',
      subject: 'Pre-Primary Subjects',
      department: 'Kindergarten',
      qualification: 'Early Learner',
      experience: 'N/A',
      joinDate: '2024-01-01',
      bio: `A young learner at Springing Stars Kindergarten.`,
      emergencyContact: 'Parent/Guardian',
      emergencyPhone: `+256 77${Math.floor(1000000 + Math.random() * 9000000)}`,
      accountStatus: 'active' as const
    })),
    // Junior Section Teachers
    ...localJuniorTeachersDatabase.users,
    // Kindergarten Teachers
    ...localKindergartenTeachersDatabase.users,
    // Parents
    ...localParentsDatabase.users,
    // Non-teaching staff
    ...localNonTeachingStaffDatabase.users,
    // Admin
    ...localAdminDatabase.users
  ] as User[],

  // Combine profile data
  dummyProfiles: {
    // Generate profiles for all junior students
    ...Object.fromEntries(
      localJuniorStudentDatabase.users.map(student => [
        student.id,
        {
          firstName: student.firstName,
          middleName: student.middleName,
          lastName: student.lastName,
          email: student.email,
          phone: student.phone || `+256 77${Math.floor(1000000 + Math.random() * 9000000)}`,
          address: student.address || 'Kampala, Uganda',
          title: '',
          gender: student.gender?.toLowerCase() || 'unknown',
          subject: 'All Subjects',
          department: 'Primary',
          qualification: 'PLE Candidate',
          experience: 'N/A',
          joinDate: '2024-01-01',
          bio: `A dedicated student at Springing Stars Junior School.`,
          emergencyContact: 'Parent/Guardian',
          emergencyPhone: `+256 77${Math.floor(1000000 + Math.random() * 9000000)}`,
          avatar: student.avatar,
          class: student.class
        }
      ])
    ),
    // Generate profiles for all kindergarten students
    ...Object.fromEntries(
      localKindergartenStudentDatabase.users.map(student => [
        student.id,
        {
          firstName: student.firstName,
          middleName: student.middleName,
          lastName: student.lastName,
          email: student.email,
          phone: student.phone || `+256 77${Math.floor(1000000 + Math.random() * 9000000)}`,
          address: student.address || 'Kampala, Uganda',
          title: '',
          gender: student.gender?.toLowerCase() || 'unknown',
          subject: 'Pre-Primary Subjects',
          department: 'Kindergarten',
          qualification: 'Early Learner',
          experience: 'N/A',
          joinDate: '2024-01-01',
          bio: `A young learner at Springing Stars Kindergarten.`,
          emergencyContact: 'Parent/Guardian',
          emergencyPhone: `+256 77${Math.floor(1000000 + Math.random() * 9000000)}`,
          avatar: student.avatar,
          class: student.class
        }
      ])
    ),
    // Junior Section Teachers profiles
    ...Object.fromEntries(
      localJuniorTeachersDatabase.users.map(teacher => [
        teacher.id,
        {
          firstName: teacher.firstName,
          middleName: teacher.middleName,
          lastName: teacher.lastName,
          email: teacher.email,
          phone: teacher.phone,
          address: teacher.address,
          title: teacher.title,
          gender: teacher.gender,
          subject: teacher.subject,
          department: teacher.department,
          qualification: teacher.qualification,
          experience: teacher.experience,
          joinDate: teacher.joinDate,
          bio: teacher.bio,
          emergencyContact: teacher.emergencyContact,
          emergencyPhone: teacher.emergencyPhone,
          avatar: teacher.avatar,
          classesTaught: teacher.classesTaught
        }
      ])
    ),
    // Kindergarten Teachers profiles
    ...Object.fromEntries(
      localKindergartenTeachersDatabase.users.map(teacher => [
        teacher.id,
        {
          firstName: teacher.firstName,
          middleName: teacher.middleName,
          lastName: teacher.lastName,
          email: teacher.email,
          phone: teacher.phone,
          address: teacher.address,
          title: teacher.title,
          gender: teacher.gender,
          subject: teacher.subject,
          department: teacher.department,
          qualification: teacher.qualification,
          experience: teacher.experience,
          joinDate: teacher.joinDate,
          bio: teacher.bio,
          emergencyContact: teacher.emergencyContact,
          emergencyPhone: teacher.emergencyPhone,
          avatar: teacher.avatar,
          classesTaught: teacher.classesTaught
        }
      ])
    ),
    // Parents profiles
    ...Object.fromEntries(
      localParentsDatabase.users.map(parent => [
        parent.id,
        {
          firstName: parent.firstName,
          middleName: parent.middleName,
          lastName: parent.lastName,
          email: parent.email,
          phone: parent.phone,
          address: parent.address,
          title: parent.title,
          gender: parent.gender,
          subject: parent.subject,
          department: parent.department,
          qualification: parent.qualification,
          experience: parent.experience,
          joinDate: parent.joinDate,
          bio: parent.bio,
          emergencyContact: parent.emergencyContact,
          emergencyPhone: parent.emergencyPhone,
          avatar: parent.avatar,
          children: parent.children
        }
      ])
    ),
    // Non-teaching staff profiles
    ...Object.fromEntries(
      localNonTeachingStaffDatabase.users.map(staff => [
        staff.id,
        {
          firstName: staff.firstName,
          middleName: staff.middleName,
          lastName: staff.lastName,
          email: staff.email,
          phone: staff.phone,
          address: staff.address,
          title: staff.title,
          gender: staff.gender,
          subject: staff.subject,
          department: staff.department,
          qualification: staff.qualification,
          experience: staff.experience,
          joinDate: staff.joinDate,
          bio: staff.bio,
          emergencyContact: staff.emergencyContact,
          emergencyPhone: staff.emergencyPhone,
          avatar: staff.avatar
        }
      ])
    ),
    // Admin profiles
    ...Object.fromEntries(
      localAdminDatabase.users.map(admin => [
        admin.id,
        {
          firstName: admin.firstName,
          middleName: admin.middleName,
          lastName: admin.lastName,
          email: admin.email,
          phone: admin.phone,
          address: admin.address,
          title: admin.title,
          gender: admin.gender,
          subject: admin.subject,
          department: admin.department,
          qualification: admin.qualification,
          experience: admin.experience,
          joinDate: admin.joinDate,
          bio: admin.bio,
          emergencyContact: admin.emergencyContact,
          emergencyPhone: admin.emergencyPhone,
          avatar: admin.avatar
        }
      ])
    )
  } as Record<string, ProfileData>
};

// Export combined student databases for compatibility
export const localStudentDatabase = {
  studentsByClass: {
    // Get junior student classes as arrays of basic student objects
    JUNIOR_ONE: localJuniorStudentDatabase.users.filter(s => s.class === 'Junior One').map(s => ({ name: s.name, dob: s.dateOfBirth || '', school_pay_code: s.schoolPayCode || '' })),
    JUNIOR_TWO: localJuniorStudentDatabase.users.filter(s => s.class === 'Junior Two').map(s => ({ name: s.name, dob: s.dateOfBirth || '', school_pay_code: s.schoolPayCode || '' })),
    JUNIOR_THREE: localJuniorStudentDatabase.users.filter(s => s.class === 'Junior Three').map(s => ({ name: s.name, dob: s.dateOfBirth || '', school_pay_code: s.schoolPayCode || '' })),
    JUNIOR_FOUR: localJuniorStudentDatabase.users.filter(s => s.class === 'Junior Four').map(s => ({ name: s.name, dob: s.dateOfBirth || '', school_pay_code: s.schoolPayCode || '' })),
    // Get kindergarten classes
    BABY_CLASS: localKindergartenStudentDatabase.users.filter(s => s.class === 'Baby Class').map(s => ({ name: s.name, dob: s.dateOfBirth || '', school_pay_code: s.schoolPayCode || '' })),
    MIDDLE_CLASS: localKindergartenStudentDatabase.users.filter(s => s.class === 'Middle Class').map(s => ({ name: s.name, dob: s.dateOfBirth || '', school_pay_code: s.schoolPayCode || '' })),
    TOP_CLASS: localKindergartenStudentDatabase.users.filter(s => s.class === 'Top Class').map(s => ({ name: s.name, dob: s.dateOfBirth || '', school_pay_code: s.schoolPayCode || '' })),
    PRE_PRIMARY_CLASS_HERONS: localKindergartenStudentDatabase.users.filter(s => s.class === 'Pre Primary Class Herons').map(s => ({ name: s.name, dob: s.dateOfBirth || '', school_pay_code: s.schoolPayCode || '' })),
  },
  users: [
    ...localJuniorStudentDatabase.users,
    ...localKindergartenStudentDatabase.users
  ]
};