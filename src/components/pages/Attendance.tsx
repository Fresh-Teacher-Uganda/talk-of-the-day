
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Users, BookOpen, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import AnimatedInView from '@/components/AnimatedInView';
import { exportAttendanceToCSV } from '@/utils/attendanceExport';
import { AttendanceStats } from '@/components/attendance/AttendanceStats';
import { AttendanceFilters } from '@/components/attendance/AttendanceFilters';
import { AttendanceTable } from '@/components/attendance/AttendanceTable';
import { useAttendanceData } from '@/hooks/useAttendanceData';
import { format } from 'date-fns';
import { localStudentDatabase } from '@/data/studentdata';

export const Attendance = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { attendanceRecords, updateAttendanceStatus, bulkUpdateAttendance } = useAttendanceData();
  
  // Get available classes from student database with student counts
  const classesWithCounts = useMemo(() => {
    const studentsData = localStudentDatabase.users.filter(user => user.role === 'pupil');
    const classCounts: Record<string, number> = {};
    
    studentsData.forEach(student => {
      classCounts[student.class] = (classCounts[student.class] || 0) + 1;
    });
    
    return Object.entries(classCounts)
      .map(([className, count]) => ({ name: className, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);
  
  const availableClasses = classesWithCounts.map(c => c.name);
  
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [showClassSelection, setShowClassSelection] = useState(selectedClass === 'all');

  const handleQuickAttendance = (studentId: string, status: 'present' | 'absent') => {
    updateAttendanceStatus(studentId, status);
    
    const student = attendanceRecords.find(r => r.studentId === studentId);
    toast({
      title: 'Attendance Updated',
      description: `${student?.studentName} marked as ${status}`,
    });
  };

  const handleBulkAttendance = (status: 'present' | 'absent') => {
    if (selectedStudents.length === 0) {
      toast({
        title: 'No Students Selected',
        description: 'Please select students to update attendance.',
        variant: 'destructive',
      });
      return;
    }

    bulkUpdateAttendance(selectedStudents, status);
    setSelectedStudents([]);
    
    toast({
      title: 'Bulk Attendance Updated',
      description: `${selectedStudents.length} students marked as ${status}`,
    });
  };

  const handleSelectAll = () => {
    if (selectedStudents.length === filteredRecords.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(filteredRecords.map(record => record.studentId));
    }
  };

  const handleExport = () => {
    const filteredData = filteredRecords;
    
    if (filteredData.length === 0) {
      toast({
        title: 'No Data to Export',
        description: 'No attendance records match your current filters.',
        variant: 'destructive',
      });
      return;
    }

    exportAttendanceToCSV(filteredData);
    
    toast({
      title: 'Export Successful',
      description: `Exported ${filteredData.length} attendance records to CSV.`,
    });
  };

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || record.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  console.log('Available classes:', availableClasses);
  console.log('Selected class:', selectedClass);
  console.log('Total attendance records:', attendanceRecords.length);
  console.log('Filtered records:', filteredRecords.length);
  console.log('Sample record classes:', attendanceRecords.slice(0, 5).map(r => r.class));

  const canManageAttendance = user?.role === 'admin' || user?.role === 'teacher';

  const handleClassSelect = (className: string) => {
    setSelectedClass(className);
    setShowClassSelection(false);
    setSelectedStudents([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <AnimatedInView>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Attendance Management</h1>
            <p className="text-muted-foreground">
              Track and manage student attendance for {format(selectedDate, 'MMMM dd, yyyy')}
            </p>
          </div>
          {canManageAttendance && (
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          )}
        </div>
      </AnimatedInView>

      {/* Class Selection Overview */}
      {showClassSelection && (
        <AnimatedInView>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Select Class for Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classesWithCounts.map((classInfo) => (
                  <Card 
                    key={classInfo.name}
                    className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary"
                    onClick={() => handleClassSelect(classInfo.name)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{classInfo.name}</h3>
                            <p className="text-sm text-muted-foreground">{classInfo.count} students</p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => handleClassSelect('all')}
                  className="w-full sm:w-auto"
                >
                  <Users className="h-4 w-4 mr-2" />
                  View All Classes
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedInView>
      )}

      {/* Current Selection & Stats */}
      {!showClassSelection && (
        <>
          <AnimatedInView>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      {selectedClass === 'all' ? 'All Classes' : selectedClass}
                    </Badge>
                    <span className="text-muted-foreground">
                      {filteredRecords.length} students
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowClassSelection(true)}
                  >
                    Change Class
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedInView>

          {/* Stats Cards */}
          <AnimatedInView>
            <AttendanceStats records={filteredRecords} />
          </AnimatedInView>
        </>
      )}

      {/* Filters */}
      {!showClassSelection && (
        <AnimatedInView>
          <AttendanceFilters
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            availableClasses={availableClasses}
          />
        </AnimatedInView>
      )}

      {/* Attendance Table */}
      {!showClassSelection && (
        <AnimatedInView>
          <AttendanceTable
            records={filteredRecords}
            selectedDate={selectedDate}
            canManageAttendance={canManageAttendance}
            onStatusChange={handleQuickAttendance}
            selectedStudents={selectedStudents}
            onStudentSelect={(studentId) => {
              setSelectedStudents(prev => 
                prev.includes(studentId) 
                  ? prev.filter(id => id !== studentId)
                  : [...prev, studentId]
              );
            }}
            onSelectAll={handleSelectAll}
            onBulkAttendance={handleBulkAttendance}
          />
        </AnimatedInView>
      )}
    </div>
  );
};
