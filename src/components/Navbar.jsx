import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, role } = useContext(AuthContext);

  return (
    <header className="w-full bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l9-9 9 9v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-9z"
          />
        </svg>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          CertVault {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard` : 'Guest'}
        </h2>
      </div>
      <div>
        {user && (
          <span className="mr-4">Hello, {typeof user === 'string' ? user : user.username}</span>
        )}
      </div>
    </header>
  );
};

export default Navbar;