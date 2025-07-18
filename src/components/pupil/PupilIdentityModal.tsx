import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  User, 
  GraduationCap, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Hash,
  School
} from 'lucide-react';

interface PupilData {
  id: string;
  name: string;
  class: string;
  section?: string;
  rollNumber?: string;
  age?: number;
  dateOfBirth?: string;
  parent?: string;
  phone?: string;
  email?: string;
  address?: string;
  avatar?: string;
}

interface PupilIdentityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pupilData: PupilData | null;
}

export const PupilIdentityModal: React.FC<PupilIdentityModalProps> = ({
  open,
  onOpenChange,
  pupilData
}) => {
  if (!pupilData) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden">
        <div className="relative">
          {/* Header with school branding */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <School className="h-8 w-8" />
              <div>
                <h2 className="text-lg font-bold">EduManage Pro School</h2>
                <p className="text-sm opacity-90">Student Identity Card</p>
              </div>
            </div>
            
            {/* Student Avatar */}
            <div className="relative mx-auto w-24 h-24 mb-4">
              <Avatar className="w-24 h-24 border-4 border-white/20">
                <AvatarImage src={pupilData.avatar} alt={pupilData.name} />
                <AvatarFallback className="text-2xl font-bold bg-white/20 text-white">
                  {pupilData.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <h3 className="text-xl font-bold">{pupilData.name}</h3>
            <p className="text-sm opacity-90">Student ID: {pupilData.id}</p>
          </div>

          {/* Student Details */}
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Class</p>
                  <p className="font-medium">
                    {pupilData.class}
                    {pupilData.section && ` - ${pupilData.section}`}
                  </p>
                </div>
              </div>

              {pupilData.rollNumber && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Hash className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Roll No.</p>
                    <p className="font-medium">{pupilData.rollNumber}</p>
                  </div>
                </div>
              )}

              {pupilData.age && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{pupilData.age} years</p>
                  </div>
                </div>
              )}

              {pupilData.dateOfBirth && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">DOB</p>
                    <p className="font-medium">{pupilData.dateOfBirth}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            {(pupilData.parent || pupilData.phone || pupilData.email) && (
              <div className="border-t pt-4 space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Contact Information
                </h4>
                
                {pupilData.parent && (
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Parent/Guardian</p>
                      <p className="font-medium">{pupilData.parent}</p>
                    </div>
                  </div>
                )}

                {pupilData.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{pupilData.phone}</p>
                    </div>
                  </div>
                )}

                {pupilData.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{pupilData.email}</p>
                    </div>
                  </div>
                )}

                {pupilData.address && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">{pupilData.address}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Footer */}
            <div className="border-t pt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Valid for Academic Year 2024-2025
              </p>
              <Badge variant="secondary" className="mt-2">
                Active Student
              </Badge>
            </div>
          </CardContent>
        </div>
      </DialogContent>
    </Dialog>
  );
};