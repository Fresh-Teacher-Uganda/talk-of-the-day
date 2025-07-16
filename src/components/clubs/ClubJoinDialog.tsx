import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

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
}

interface ClubJoinDialogProps {
  isOpen: boolean;
  onClose: () => void;
  club: Club | null;
  onJoin: (clubId: string, memberData: any) => void;
}

export const ClubJoinDialog: React.FC<ClubJoinDialogProps> = ({
  isOpen,
  onClose,
  club,
  onJoin
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [reason, setReason] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = () => {
    if (!club) return;

    if (club.participants >= club.maxParticipants) {
      toast({
        title: 'Club Full',
        description: 'This club has reached its maximum capacity.',
        variant: 'destructive'
      });
      return;
    }

    const memberData = {
      userId: user?.id,
      userName: user?.name || `${user?.firstName} ${user?.lastName}`,
      reason: reason.trim(),
      experience: experience.trim(),
      joinDate: new Date().toISOString()
    };

    onJoin(club.id, memberData);
    
    toast({
      title: 'Application Submitted',
      description: `Your application to join ${club.name} has been submitted successfully.`,
    });

    setReason('');
    setExperience('');
    onClose();
  };

  if (!club) return null;

  const isClubFull = club.participants >= club.maxParticipants;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Join {club.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">{club.name}</h4>
            <p className="text-sm text-muted-foreground mb-2">{club.description}</p>
            <div className="text-sm space-y-1">
              <p><strong>Schedule:</strong> {club.day}, {club.time}</p>
              <p><strong>Location:</strong> {club.location}</p>
              <p><strong>Coordinator:</strong> {club.coordinator}</p>
              <p><strong>Availability:</strong> {club.participants}/{club.maxParticipants} members</p>
            </div>
          </div>

          {isClubFull ? (
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-red-600 font-medium">This club is currently full</p>
              <p className="text-sm text-red-500">Please check back later or join the waiting list</p>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="reason">Why do you want to join this club?</Label>
                <Textarea
                  id="reason"
                  placeholder="Tell us about your interest in this club..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="min-h-20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Previous experience (optional)</Label>
                <Input
                  id="experience"
                  placeholder="Any relevant experience or skills..."
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>

              <div className="flex space-x-2 pt-4">
                <Button onClick={handleSubmit} className="flex-1" disabled={!reason.trim()}>
                  Submit Application
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};