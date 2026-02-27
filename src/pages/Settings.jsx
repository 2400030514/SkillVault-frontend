import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert('Settings saved (mock)');
  };

  return (
    <div className="p-6 max-w-md">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded hover:shadow-[0_0_8px_rgba(0,255,255,0.7)] transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;