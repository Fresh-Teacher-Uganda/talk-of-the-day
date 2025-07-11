
import React, { useState } from 'react';
import { StudentTableActions } from './StudentTableActions';
import { StudentTableDialogs } from './StudentTableDialogs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Student } from '@/hooks/useStudents';
import { User } from 'lucide-react';

interface StudentsTableProps {
  students: Student[];
  onEdit?: (student: Student) => void;
  onDelete?: (id: string) => void;
  onArchive?: (id: string) => void;
  onView: (student: Student) => void;
  onUpdateStatus?: (id: string, status: 'active' | 'inactive' | 'suspended' | 'archived' | 'expelled') => void;
  readOnly?: boolean;
}

export const StudentsTable: React.FC<StudentsTableProps> = ({
  students,
  onEdit,
  onDelete,
  onArchive,
  onView,
  onUpdateStatus,
  readOnly = false
}) => {
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    type: 'delete';
    studentName: string;
    studentId: string;
  }>({ open: false, type: 'delete', studentName: '', studentId: '' });

  const [accountActionDialog, setAccountActionDialog] = useState<{
    open: boolean;
    action: 'archive' | 'suspend' | 'expel';
    student: Student | null;
  }>({ open: false, action: 'archive', student: null });

  const getFeesStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAccountStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'suspended':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      case 'expelled':
        return 'bg-red-100 text-red-800';
      case 'inactive':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSuspend = (student: Student) => {
    setAccountActionDialog({
      open: true,
      action: 'suspend',
      student
    });
  };

  const handleArchive = (student: Student) => {
    setAccountActionDialog({
      open: true,
      action: 'archive',
      student
    });
  };

  const handleExpel = (student: Student) => {
    setAccountActionDialog({
      open: true,
      action: 'expel',
      student
    });
  };

  const handleDelete = (student: Student) => {
    setConfirmDialog({
      open: true,
      type: 'delete',
      studentName: student.name,
      studentId: student.id
    });
  };

  const handleStatusUpdate = (action: 'archive' | 'suspend' | 'expel', studentId: string) => {
    if (onUpdateStatus) {
      const statusMap = {
        archive: 'archived' as const,
        suspend: 'suspended' as const,
        expel: 'expelled' as const
      };
      onUpdateStatus(studentId, statusMap[action]);
    }
  };

  if (students.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No students found</p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Parent/Guardian</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Fees Status</TableHead>
              <TableHead>Account Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    {student.photo ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                        <img 
                          src={student.photo} 
                          alt={student.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                    )}
                    <span className="font-medium">{student.name}</span>
                  </div>
                </TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.parent}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getFeesStatusColor(student.fees)}>
                    {student.fees}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getAccountStatusColor(student.status)}>
                    {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <StudentTableActions
                    student={student}
                    onView={onView}
                    onEdit={onEdit}
                    onArchive={handleArchive}
                    onSuspend={handleSuspend}
                    onExpel={handleExpel}
                    onDelete={handleDelete}
                    readOnly={readOnly}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <StudentTableDialogs
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
        accountActionDialog={accountActionDialog}
        setAccountActionDialog={setAccountActionDialog}
        onDelete={onDelete}
        onArchive={(id) => {
          if (onArchive) onArchive(id);
          handleStatusUpdate('archive', id);
        }}
        onSuspend={(id) => handleStatusUpdate('suspend', id)}
        onExpel={(id) => handleStatusUpdate('expel', id)}
      />
    </>
  );
};
