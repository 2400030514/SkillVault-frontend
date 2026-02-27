import React from 'react';

const AccountLocked = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-black">
    <div className="backdrop-blur-md bg-white/5 rounded-lg p-8">
      <h1 className="text-2xl font-bold text-red-400">Your account is deactivated</h1>
      <p className="mt-4 text-gray-300">Please contact the Admin to restore access.</p>
    </div>
  </div>
);

export default AccountLocked;
