
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { EmailInput } from '@/components/ui/email-input';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { LogIn } from 'lucide-react';
import { userDatabase } from '@/data/userDatabase';

interface LoginFormProps {
  onRestrictedUser: (user: any) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onRestrictedUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await login(email, password);
      
      if (result.success) {
        toast({
          title: "Login Successful",
          description: "Welcome to Glorious Schools!",
        });
        // Navigate to dashboard after successful login
        navigate('/');
      } else {
        // Check if the login failed due to account status
        if (result.accountStatus && result.accountStatus !== 'active') {
          const user = userDatabase.users.find(u => u.email === email && u.password === password);
          if (user) {
            onRestrictedUser(user);
            return;
          }
        }
        
        toast({
          title: "Login Failed",
          description: result.error,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          id="email"
          type="email"
          placeholder="School e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12 text-base"
        />
      </div>

      <div className="space-y-4">
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12 text-base"
        />
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="remember" 
            className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500"
          />
          <label htmlFor="remember" className="text-white text-sm">Remember Me</label>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 text-lg font-semibold shadow-lg"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Signing in...</span>
          </div>
        ) : (
          <span>Login</span>
        )}
      </Button>
      
      <div className="text-center">
        <a href="#" className="text-blue-300 hover:text-blue-200 text-sm underline">
          Forgot E-mail?
        </a>
      </div>
    </form>
  );
};
