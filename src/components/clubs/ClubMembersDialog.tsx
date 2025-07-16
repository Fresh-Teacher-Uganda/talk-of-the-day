import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, MapPin, Clock } from 'lucide-react';
import { localStudentDatabase } from '@/data/studentdata';

interface Club {
  id: string;
  name: string;
  day: string;
  time: string;
  location: string;
  coordinator: string;
  description: string;
  participants: number;
  maxParticipants: number;
  category: "sports" | "arts" | "academic" | "other";
  members?: Array<{
    userId: string;
    userName: string;
    joinDate: string;
    role?: string;
  }>;
}

interface ClubMembersDialogProps {
  isOpen: boolean;
  onClose: () => void;
  club: Club | null;
}

export const ClubMembersDialog: React.FC<ClubMembersDialogProps> = ({
  isOpen,
  onClose,
  club
}) => {
  if (!club) return null;

  // Generate sample members based on club participants count
  const generateMembers = () => {
    const allStudents = [
      ...localStudentDatabase.studentsByClass.JUNIOR_ONE,
      ...localStudentDatabase.studentsByClass.JUNIOR_TWO,
      ...localStudentDatabase.studentsByClass.JUNIOR_THREE,
      ...localStudentDatabase.studentsByClass.JUNIOR_FOUR
    ];

    // Shuffle and take a sample based on participants count
    const shuffled = allStudents.sort(() => 0.5 - Math.random());
    const selectedStudents = shuffled.slice(0, club.participants);

    return selectedStudents.map((student, index) => {
      // Find the full student data with avatar
      const fullStudentData = localStudentDatabase.users.find(u => u.name === student.name);
      
      return {
        id: `${club.id}-member-${index}`,
        name: student.name,
        class: Object.entries(localStudentDatabase.studentsByClass).find(([className, students]) => 
          Array.isArray(students) && students.some((s: any) => s.name === student.name)
        )?.[0].replace(/_/g, ' ') || 'Unknown',
        avatar: fullStudentData?.avatar || '',
        joinDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        role: index === 0 ? 'Captain' : index === 1 ? 'Vice Captain' : 'Member'
      };
    });
  };

  const members = generateMembers();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sports":
        return "bg-blue-100 text-blue-800";
      case "arts":
        return "bg-purple-100 text-purple-800";
      case "academic":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>{club.name} Members</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Club Info */}
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-lg">{club.name}</h4>
              <Badge className={getCategoryColor(club.category)}>
                {club.category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{club.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{club.day}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{club.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{club.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{club.participants}/{club.maxParticipants} members</span>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div>
            <h5 className="font-medium mb-4">Club Members ({club.participants})</h5>
            <div className="space-y-3">
              {members.map((member, index) => (
                <div key={member.id} className="flex items-center space-x-3 p-3 bg-card rounded-lg border">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium truncate">{member.name}</p>
                      {member.role !== 'Member' && (
                        <Badge variant="secondary" className="text-xs">
                          {member.role}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{member.class}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Joined</p>
                    <p className="text-xs font-medium">{member.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coordinator Info */}
          <div className="border-t pt-4">
            <h5 className="font-medium mb-2">Club Coordinator</h5>
            <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border">
              <Avatar className="h-10 w-10">
                <AvatarFallback>
                  {club.coordinator.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{club.coordinator}</p>
                <p className="text-xs text-muted-foreground">Club Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};