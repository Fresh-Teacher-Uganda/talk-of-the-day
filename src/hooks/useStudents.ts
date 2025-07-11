
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/contexts/ProfileContext';
import { generateStudentsFromPhotos } from '@/data/pupilsData';

export interface Student {
  id: string;
  name: string;
  class: string;
  age: number;
  parent: string;
  phone: string;
  fees: 'Paid' | 'Pending' | 'Overdue';
  email?: string;
  address?: string;
  status: 'active' | 'inactive' | 'suspended' | 'archived' | 'expelled';
  photo?: string;
}

export const useStudents = () => {
  const { user } = useAuth();
  const { profileData } = useProfile();
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [loading, setLoading] = useState(false);

  // Load initial data
  useEffect(() => {
    loadStudents();
  }, []);

  // Filter students based on search, status, and teacher's classes
  useEffect(() => {
    let filtered = allStudents;

    // Filter by teacher's classes if user is a teacher
    if (user?.role === 'teacher' && profileData?.classesTaught) {
      try {
        const classesTaught = Array.isArray(profileData.classesTaught) 
          ? profileData.classesTaught 
          : JSON.parse(profileData.classesTaught || '[]');
        
        filtered = filtered.filter(student => 
          classesTaught.includes(student.class)
        );
      } catch (error) {
        console.error('Error parsing classes taught:', error);
        filtered = [];
      }
    }

    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.class.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(student => student.fees === filterStatus);
    }

    setFilteredStudents(filtered);
  }, [allStudents, searchTerm, filterStatus, user, profileData]);

  const loadStudents = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const studentsWithPhotos = generateStudentsFromPhotos();
      setAllStudents(studentsWithPhotos);
      setLoading(false);
    }, 1000);
  };

  const getStats = () => {
    const total = filteredStudents.length;
    const paid = filteredStudents.filter(s => s.fees === 'Paid').length;
    const pending = filteredStudents.filter(s => s.fees === 'Pending').length;
    const overdue = filteredStudents.filter(s => s.fees === 'Overdue').length;
    
    return { total, paid, pending, overdue };
  };

  const addStudent = (student: Omit<Student, 'id'>) => {
    const newStudent = {
      ...student,
      id: `SS${String(allStudents.length + 1).padStart(3, '0')}`,
      status: 'active' as const
    };
    setAllStudents(prev => [...prev, newStudent]);
  };

  const updateStudent = (id: string, updates: Partial<Student>) => {
    setAllStudents(prev => 
      prev.map(student => 
        student.id === id ? { ...student, ...updates } : student
      )
    );
  };

  const updateStudentStatus = (id: string, status: 'active' | 'inactive' | 'suspended' | 'archived' | 'expelled') => {
    setAllStudents(prev => 
      prev.map(student => 
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const deleteStudent = (id: string) => {
    setAllStudents(prev => prev.filter(student => student.id !== id));
  };

  return {
    students: filteredStudents,
    allStudents,
    loading,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    stats: getStats(),
    addStudent,
    updateStudent,
    updateStudentStatus,
    deleteStudent,
    refreshStudents: loadStudents
  };
};
