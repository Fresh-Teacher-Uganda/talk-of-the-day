
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginCardProps {
  children: React.ReactNode;
}

export const LoginCard: React.FC<LoginCardProps> = ({ children }) => {
  return (
    <Card className="shadow-2xl border-0 bg-gradient-to-b from-orange-400/90 to-orange-500/90 backdrop-blur">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">School Portal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
      </CardContent>
    </Card>
  );
};
