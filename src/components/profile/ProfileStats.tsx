
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { localJuniorTeachersDatabase } from '@/data/juniorTeachersData';
import { localKindergartenTeachersDatabase } from '@/data/kindergartenTeachersData';
import { localStudentDatabase } from '@/data/userDatabase';

export const ProfileStats: React.FC = () => {
  const { user } = useAuth();

  const stats = useMemo(() => {
    if (!user || user.role !== 'teacher') {
      return [
        { value: '0', label: 'Classes Teaching', color: 'bg-blue-50 text-blue-600' },
        { value: '0', label: 'Total Students', color: 'bg-green-50 text-green-600' },
        { value: '0', label: 'Assignments Given', color: 'bg-orange-50 text-orange-600' },
        { value: '0%', label: 'Attendance Rate', color: 'bg-purple-50 text-purple-600' }
      ];
    }

    // Find current teacher data (check both junior and kindergarten teachers)
    const teacherData = localJuniorTeachersDatabase.users.find(t => t.email === user.email) ||
                       localKindergartenTeachersDatabase.users.find(t => t.email === user.email);
    
    if (!teacherData) {
      return [
        { value: '0', label: 'Classes Teaching', color: 'bg-blue-50 text-blue-600' },
        { value: '0', label: 'Total Students', color: 'bg-green-50 text-green-600' },
        { value: '0', label: 'Assignments Given', color: 'bg-orange-50 text-orange-600' },
        { value: '0%', label: 'Attendance Rate', color: 'bg-purple-50 text-purple-600' }
      ];
    }

    // Calculate actual stats based on teacher's classes
    const classesTaught = teacherData.classesTaught || [];
    const classesCount = classesTaught.length;

    // Calculate total students in teacher's classes
    let totalStudents = 0;
    classesTaught.forEach(className => {
      const students = localStudentDatabase.studentsByClass[className as keyof typeof localStudentDatabase.studentsByClass];
      if (Array.isArray(students)) {
        totalStudents += students.length;
      }
    });

    // Mock calculations for assignments and attendance (would come from actual data in real app)
    const estimatedAssignments = classesCount * 8; // Approximate 8 assignments per class
    const attendanceRate = Math.floor(85 + Math.random() * 10); // Random between 85-95%

    return [
      { value: classesCount.toString(), label: 'Classes Teaching', color: 'bg-blue-50 text-blue-600' },
      { value: totalStudents.toString(), label: 'Total Students', color: 'bg-green-50 text-green-600' },
      { value: estimatedAssignments.toString(), label: 'Assignments Given', color: 'bg-orange-50 text-orange-600' },
      { value: `${attendanceRate}%`, label: 'Attendance Rate', color: 'bg-purple-50 text-purple-600' }
    ];
  }, [user]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
        <CardDescription>A quick overview of your key metrics based on your current assignments.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center p-4 ${stat.color} rounded-lg`}>
              <div className="text-2xl font-bold">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
