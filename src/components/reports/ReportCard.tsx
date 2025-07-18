import React from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Student {
  id: string;
  name: string;
  class: string;
  dob?: string;
  dateOfBirth?: string;
  admissionNumber?: string;
  rollNumber?: string;
  schoolPayCode?: string;
  section?: string;
  houseColor?: string;
  fatherName?: string;
  motherName?: string;
  address?: string;
  phoneNumber?: string;
}

interface Grade {
  id?: number;
  student_id?: string;
  subject: string;
  score?: number;
  grade?: number;
  teacher?: string;
  comment?: string;
  remarks?: string;
  attendance?: number | null;
  practicalMarks?: number;
  theoryMarks?: number;
  totalMarks?: number;
  maxMarks?: number;
}

interface Subject {
  name: string;
  score: number;
  grade: string;
  remarks: string;
}

interface ReportCardProps {
  student?: Student;
  term?: string;
  studentClass?: string;
  subjects?: Subject[];
  totalMarks?: number;
  average?: number;
  overallGrade?: string;
  data?: { students: Student[]; grades: Grade[] };
  studentId?: string;
}

export const ReportCard = ({ 
  student: propStudent, 
  term = "Term 1", 
  studentClass, 
  subjects: propSubjects, 
  totalMarks: propTotalMarks, 
  average: propAverage, 
  overallGrade: propOverallGrade,
  data,
  studentId 
}: ReportCardProps) => {

  const getLetterGrade = (score: number): string => {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
  };

  const getGradePoint = (score: number): number => {
    if (score >= 90) return 4.0;
    if (score >= 80) return 3.5;
    if (score >= 70) return 3.0;
    if (score >= 60) return 2.5;
    if (score >= 50) return 2.0;
    return 1.0;
  };

  // Handle both data formats (legacy and new)
  let student = propStudent;
  let subjects = propSubjects || [];
  let totalMarks = propTotalMarks || 0;
  let average = propAverage || 0;
  let overallGrade = propOverallGrade || '';

  if (data && studentId) {
    student = data.students.find((s: Student) => s.id === studentId);
    if (!student) {
      return <p className="text-red-500">Student not found</p>;
    }

    const grades = data.grades.filter((g: Grade) => g.student_id === studentId);
    let total = 0, totalAttendance = 0, count = 0, totalGradePoints = 0;
    
    grades.forEach((g: Grade) => {
      total += g.grade || 0;
      totalAttendance += g.attendance || 0;
      totalGradePoints += getGradePoint(g.grade || 0);
      count++;
    });
    
    average = count > 0 ? (total / count) : 0;
    overallGrade = getLetterGrade(average);
    totalMarks = total;

    subjects = grades.map((grade: Grade) => ({
      name: grade.subject || 'N/A',
      score: grade.totalMarks || grade.grade || 0,
      grade: getLetterGrade(grade.grade || 0),
      remarks: grade.comment || grade.remarks || 'N/A'
    }));
  }

  if (!student) {
    return (
      <div className="p-8 text-center">
        <p>Please select a student to generate a report card.</p>
      </div>
    );
  }

  const downloadReportCard = async () => {
    try {
      const doc = new jsPDF();
      
      // Add header image
      const headerImg = new Image();
      headerImg.crossOrigin = 'anonymous';
      headerImg.src = '/lovable-uploads/f91d04b1-d5ab-41ee-8d13-81d239c07fb6.png';
      
      headerImg.onload = () => {
        // Add header
        doc.addImage(headerImg, 'PNG', 10, 10, 190, 40);
        
        // Add report title
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(128, 0, 0);
        doc.text('STUDENT PROGRESS REPORT', 105, 60, { align: 'center' });
        doc.text(`${term.toUpperCase()} - ACADEMIC YEAR 2024/2025`, 105, 65, { align: 'center' });

        // Student Information
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(0, 51, 102);
        doc.text('STUDENT INFORMATION', 15, 80);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(0, 0, 0);
        
        // Student data
        doc.text('Name:', 15, 90);
        doc.text('Class:', 15, 95);
        doc.text('Student ID:', 15, 100);
        
        doc.setFont('helvetica', 'bold');
        doc.text(student.name || 'N/A', 35, 90);
        doc.text(student.class || studentClass || 'N/A', 35, 95);
        doc.text(`SS${student.id?.toString().padStart(4, '0') || '0000'}`, 35, 100);

        // Grades table
        const tableData = subjects.map((subject) => [
          subject.name,
          subject.score.toString(),
          subject.grade,
          subject.remarks
        ]);

        autoTable(doc, {
          startY: 110,
          head: [['Subject', 'Score (%)', 'Grade', 'Remarks']],
          body: tableData,
          theme: 'grid',
          styles: { 
            fontSize: 8,
            cellPadding: 2,
            halign: 'center'
          },
          headStyles: { 
            fillColor: [59, 130, 246],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
          }
        });

        // Summary
        const finalY = (doc as any).lastAutoTable.finalY + 10;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.text('ACADEMIC SUMMARY', 15, finalY);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(`Total Marks: ${totalMarks}`, 15, finalY + 8);
        doc.text(`Average: ${average}%`, 15, finalY + 14);
        doc.text(`Overall Grade: ${overallGrade}`, 15, finalY + 20);

        // Add footer image
        const footerImg = new Image();
        footerImg.crossOrigin = 'anonymous';
        footerImg.src = '/lovable-uploads/69f85098-6acb-4686-aa5b-048c47189b90.png';
        
        footerImg.onload = () => {
          doc.addImage(footerImg, 'PNG', 10, 250, 190, 30);
          doc.save(`${(student.name || 'Student').replace(/\s+/g, '_')}_Report_Card_${term}_2025.pdf`);
        };
        
        footerImg.onerror = () => {
          doc.save(`${(student.name || 'Student').replace(/\s+/g, '_')}_Report_Card_${term}_2025.pdf`);
        };
      };
      
      headerImg.onerror = () => {
        console.log('Header image failed to load');
        alert('Header image could not be loaded. PDF generated without header.');
      };
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <div className="relative bg-white border-2 border-gray-300 shadow-lg overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
        <img 
          src="https://gloriouschools.github.io/rising-star-connect/schoologo.png" 
          alt="Watermark" 
          className="w-96 h-96 object-contain"
        />
      </div>

      {/* Header */}
      <header className="text-center mb-8 relative z-10">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/f91d04b1-d5ab-41ee-8d13-81d239c07fb6.png" 
            alt="Springing Stars Header" 
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="border-t-4 border-b-4 border-double border-blue-900 py-2 mt-4">
          <h2 className="text-2xl font-semibold text-blue-900 tracking-wider">STUDENT PROGRESS REPORT</h2>
          <p className="text-sm text-gray-600 mt-1">{term.toUpperCase()} - ACADEMIC YEAR 2024/2025</p>
        </div>
      </header>

      {/* Student Information */}
      <section className="mb-8 relative z-10">
        <div className="bg-white/80 p-6 rounded-lg border">
          <h3 className="font-semibold text-lg mb-4 text-blue-900">Student Information</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-baseline">
              <span className="font-semibold text-gray-700 w-32">Student Name:</span>
              <span className="flex-1 border-b border-dotted border-gray-400 px-2 text-gray-900">{student?.name}</span>
            </div>
            <div className="flex items-baseline">
              <span className="font-semibold text-gray-700 w-32">Term:</span>
              <span className="flex-1 border-b border-dotted border-gray-400 px-2 text-gray-900">{term}</span>
            </div>
            <div className="flex items-baseline">
              <span className="font-semibold text-gray-700 w-32">Class:</span>
              <span className="flex-1 border-b border-dotted border-gray-400 px-2 text-gray-900">{student.class || studentClass}</span>
            </div>
            <div className="flex items-baseline">
              <span className="font-semibold text-gray-700 w-32">Academic Year:</span>
              <span className="flex-1 border-b border-dotted border-gray-400 px-2 text-gray-900">2024</span>
            </div>
            <div className="flex items-baseline">
              <span className="font-semibold text-gray-700 w-32">Student ID:</span>
              <span className="flex-1 border-b border-dotted border-gray-400 px-2 text-gray-900">SS{student?.id?.toString().padStart(4, '0')}</span>
            </div>
            <div className="flex items-baseline">
              <span className="font-semibold text-gray-700 w-32">Date Issued:</span>
              <span className="flex-1 border-b border-dotted border-gray-400 px-2 text-gray-900">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grades Table */}
      <section className="mb-8 relative z-10">
        <div className="bg-white/80 rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-50/80">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700">Subject</th>
                <th className="p-4 text-center font-semibold text-gray-700">Score (%)</th>
                <th className="p-4 text-center font-semibold text-gray-700">Grade</th>
                <th className="p-4 text-left font-semibold text-gray-700">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">{subject.name}</td>
                  <td className="p-4 text-center">{subject.score}</td>
                  <td className="p-4 text-center font-bold text-lg">{subject.grade}</td>
                  <td className="p-4">{subject.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Summary and Performance */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 relative z-10">
        <div className="p-6 bg-white/80 rounded-lg border">
          <h3 className="font-semibold text-lg mb-4 text-center text-blue-900">Overall Performance</h3>
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Marks</p>
            <p className="text-3xl font-bold text-gray-800">{totalMarks}</p>
          </div>
          <div className="text-center my-4">
            <p className="text-sm text-gray-600">Average Score</p>
            <p className="text-3xl font-bold text-gray-800">{average}%</p>
          </div>
          <div className="text-center bg-blue-100 rounded-lg p-3">
            <p className="text-sm font-semibold text-blue-800">Overall Grade</p>
            <p className="text-4xl font-extrabold text-blue-900">{overallGrade}</p>
          </div>
        </div>

        <div className="p-6 bg-white/80 rounded-lg border">
          <h3 className="font-semibold text-lg mb-4 text-blue-900">Grading Scale</h3>
          <div className="text-sm space-y-2 text-gray-700">
            <div className="flex justify-between"><span>A+: 90-100%</span> <span>Excellent</span></div>
            <div className="flex justify-between"><span>A: 80-89%</span> <span>Very Good</span></div>
            <div className="flex justify-between"><span>B: 70-79%</span> <span>Good</span></div>
            <div className="flex justify-between"><span>C: 60-69%</span> <span>Fair</span></div>
            <div className="flex justify-between"><span>D: 50-59%</span> <span>Satisfactory</span></div>
            <div className="flex justify-between"><span>F: Below 50%</span> <span>Needs Improvement</span></div>
          </div>
        </div>

        <div className="p-6 bg-white/80 rounded-lg border">
          <h3 className="font-semibold text-lg mb-4 text-blue-900">Class Performance</h3>
          <div className="text-sm space-y-3 text-gray-700">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Class Average:</span>
              <span className="font-bold text-lg">76%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Student Position:</span>
              <span className="font-bold text-lg">3rd <span className="text-sm font-normal">out of 25</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Highest Score:</span>
              <span className="font-bold text-lg">92%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Comments */}
      <section className="mb-8 relative z-10">
        <div className="bg-white/80 p-6 rounded-lg border">
          <h3 className="font-semibold text-lg mb-3 text-blue-900">Class Teacher's Comments</h3>
          <div className="bg-gray-50/70 p-4 rounded-md min-h-[80px]">
            <p className="text-sm text-gray-800">
              {student?.name} has shown excellent performance this term. Keep up the good work and continue striving for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Signatures */}
      <section className="grid grid-cols-3 gap-8 pt-8 mb-8 relative z-10">
        <div className="text-center">
          <div className="border-t-2 border-gray-300 pt-3">
            <p className="text-sm font-semibold">Class Teacher</p>
            <p className="text-xs text-gray-500">Ms. Sarah Namubiru</p>
          </div>
        </div>
        <div className="text-center">
          <div className="border-t-2 border-gray-300 pt-3">
            <p className="text-sm font-semibold">Head Teacher</p>
            <p className="text-xs text-gray-500">Mr. John Kasozi</p>
          </div>
        </div>
        <div className="text-center">
          <div className="border-t-2 border-gray-300 pt-3">
            <p className="text-sm font-semibold">Parent/Guardian</p>
            <p className="text-xs text-gray-500">Signature & Date</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 relative z-10">
        <div className="mb-4">
          <img 
            src="/lovable-uploads/69f85098-6acb-4686-aa5b-048c47189b90.png" 
            alt="Springing Stars Footer" 
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-center p-4 bg-gray-100 border-t">
          <p className="text-xs text-gray-600 mb-4">This is a computer-generated report. For queries, contact the school administration.</p>
          <p className="text-xs text-gray-500 mb-4">Generated on {new Date().toLocaleDateString()} • Report ID: MS{Date.now()}</p>
          <button
            onClick={downloadReportCard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Download PDF Report Card
          </button>
        </div>
      </footer>
    </div>
  );
};