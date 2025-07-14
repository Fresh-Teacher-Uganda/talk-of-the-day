import React from 'react';
import { Loader2, Users, BookOpen, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ColorfulSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  className?: string;
  type?: 'students' | 'grades' | 'attendance' | 'default';
}

export const ColorfulSpinner: React.FC<ColorfulSpinnerProps> = ({ 
  size = 'md', 
  message = 'Loading...', 
  className,
  type = 'default'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const iconSizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-6 w-6', 
    lg: 'h-10 w-10'
  };

  const getTypeConfig = () => {
    switch (type) {
      case 'students':
        return { 
          color: 'text-blue-500', 
          bgColor: 'bg-blue-50', 
          icon: Users,
          gradient: 'from-blue-400 to-blue-600'
        };
      case 'grades':
        return { 
          color: 'text-green-500', 
          bgColor: 'bg-green-50', 
          icon: GraduationCap,
          gradient: 'from-green-400 to-green-600'
        };
      case 'attendance':
        return { 
          color: 'text-purple-500', 
          bgColor: 'bg-purple-50', 
          icon: BookOpen,
          gradient: 'from-purple-400 to-purple-600'
        };
      default:
        return { 
          color: 'text-primary', 
          bgColor: 'bg-primary/5', 
          icon: Loader2,
          gradient: 'from-primary to-primary-foreground'
        };
    }
  };

  const config = getTypeConfig();
  const Icon = config.icon;

  return (
    <div className={cn('flex flex-col items-center justify-center p-8 space-y-4', config.bgColor, className)}>
      <div className="relative">
        {/* Spinning outer ring */}
        <div className={cn(
          'absolute inset-0 rounded-full border-4 border-t-transparent border-opacity-20 animate-spin',
          config.color.replace('text-', 'border-'),
          sizeClasses[size]
        )} />
        
        {/* Inner icon */}
        <div className={cn(
          'flex items-center justify-center rounded-full bg-gradient-to-r',
          config.gradient,
          sizeClasses[size]
        )}>
          {type === 'default' ? (
            <Loader2 className={cn('animate-spin text-white', iconSizeClasses[size])} />
          ) : (
            <Icon className={cn('text-white', iconSizeClasses[size])} />
          )}
        </div>
      </div>
      
      <div className="text-center space-y-1">
        <p className={cn('font-medium', config.color)}>{message}</p>
        <div className="flex space-x-1 justify-center">
          <div className={cn('h-2 w-2 rounded-full animate-bounce', config.color.replace('text-', 'bg-'))} style={{ animationDelay: '0ms' }} />
          <div className={cn('h-2 w-2 rounded-full animate-bounce', config.color.replace('text-', 'bg-'))} style={{ animationDelay: '150ms' }} />
          <div className={cn('h-2 w-2 rounded-full animate-bounce', config.color.replace('text-', 'bg-'))} style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};