
import React, { useState } from 'react';
import { AccountStatusPage } from './AccountStatusPage';
import { SchoolHeader } from './login/SchoolHeader';
import { LoginCard } from './login/LoginCard';
import { LoginForm } from './login/LoginForm';

const LoginPage = () => {
  const [restrictedUser, setRestrictedUser] = useState<any>(null);

  const handleRestrictedUser = (user: any) => {
    setRestrictedUser(user);
  };

  // Show account status page if user is restricted
  if (restrictedUser) {
    return <AccountStatusPage user={restrictedUser} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 flex flex-col items-center justify-center p-4 relative">
      {/* Navigation bar */}
      <div className="absolute top-0 left-0 w-full bg-orange-500 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-2">
              <img 
                src="https://springingstars.ac.ug/wp-content/uploads/2023/04/logo.png" 
                alt="Glorious Schools Logo" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <h1 className="text-white text-xl font-bold">Glorious Schools</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-orange-200 font-medium">Home</a>
            <a href="#" className="text-white hover:text-orange-200 font-medium">Games</a>
            <a href="#" className="text-white hover:text-orange-200 font-medium">Gallery</a>
            <a href="#" className="text-white hover:text-orange-200 font-medium">Library</a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-md space-y-8 mt-20">
        <SchoolHeader />
        <LoginCard>
          <LoginForm onRestrictedUser={handleRestrictedUser} />
        </LoginCard>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-orange-500 p-4">
        <div className="text-center">
          <p className="text-white text-sm">© Glorious Schools 2025</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
