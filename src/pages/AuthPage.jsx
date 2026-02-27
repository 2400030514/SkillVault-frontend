import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import LandingPage from './LandingPage';

const AuthPage = () => {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'login' | 'signup'

  let content;
  switch (currentPage) {
    case 'login':
      content = <LoginPage setView={setCurrentPage} />;
      break;
    case 'signup':
      content = <SignupPage setView={setCurrentPage} />;
      break;
    case 'landing':
    default:
      content = <LandingPage setView={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen w-full bg-black bg-gradient-to-br from-purple-900 via-black to-black">
      {content}
    </div>
  );
};

export default AuthPage;
