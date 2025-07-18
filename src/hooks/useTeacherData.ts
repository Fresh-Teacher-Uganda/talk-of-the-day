
import { useState } from 'react';
import { Teacher } from '@/components/teachers/TeachersTable';
import { localJuniorTeachersDatabase } from '@/data/juniorTeachersData';

// Transform the teacher data from juniorTeachersDatabase to match Teacher interface
const transformTeacherData = (): Teacher[] => {
  return localJuniorTeachersDatabase.users.map(teacher => ({
    id: teacher.id,
    name: teacher.name,
    subject: teacher.subject,
    phone: teacher.phone,
    status: teacher.accountStatus as Teacher['status'],
    experience: teacher.experience,
    email: teacher.email,
    qualification: teacher.qualification,
    department: teacher.department,
    joinDate: teacher.joinDate,
    classesTaught: teacher.classesTaught || [],
    avatar: teacher.avatar,
    bio: teacher.bio,
    title: teacher.title,
    gender: teacher.gender,
    address: teacher.address,
    emergencyContact: teacher.emergencyContact,
    emergencyPhone: teacher.emergencyPhone,
    clubsResponsibility: teacher.clubsResponsibility || [],
    isClassTeacher: teacher.isClassTeacher || false,
    classTeacherFor: teacher.classTeacherFor,
    isChiefOfStaff: teacher.isChiefOfStaff || false
  }));
};

export const useTeacherData = () => {
  const [teachers, setTeachers] = useState<Teacher[]>(transformTeacherData());

  const addTeacher = (teacherData: any) => {
    // Convert classes string to classesTaught array if needed
    const processedData = {
      ...teacherData,
      classesTaught: teacherData.classes ? teacherData.classes.split(', ').filter((c: string) => c.trim() !== '') : []
    };
    delete processedData.classes;

    const newTeacher: Teacher = {
      id: `TCH${String(teachers.length + 1).padStart(3, '0')}`,
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active',
      ...processedData
    };
    setTeachers(prev => [...prev, newTeacher]);
  };

  const updateTeacher = (editingTeacher: Teacher, teacherData: any) => {
    // Convert classes string to classesTaught array if needed
    const processedData = {
      ...teacherData,
      classesTaught: teacherData.classes ? teacherData.classes.split(', ').filter((c: string) => c.trim() !== '') : []
    };
    delete processedData.classes;

    setTeachers(prev => prev.map(t => t.id === editingTeacher.id ? { ...editingTeacher, ...processedData } : t));
  };

  const updateTeacherStatus = (id: string, status: Teacher['status']) => {
    setTeachers(prev => prev.map(t => t.id === id ? { ...t, status } : t));
  };

  const archiveTeacher = (id: string) => {
    updateTeacherStatus(id, 'archived');
  };

  const suspendTeacher = (id: string) => {
    updateTeacherStatus(id, 'suspended');
  };

  const terminateTeacher = (id: string) => {
    updateTeacherStatus(id, 'terminated');
  };

  const deleteTeacher = (id: string) => {
    setTeachers(prev => prev.filter(t => t.id !== id));
  };

  return {
    teachers,
    addTeacher,
    updateTeacher,
    updateTeacherStatus,
    archiveTeacher,
    suspendTeacher,
    terminateTeacher,
    deleteTeacher
  };
};
