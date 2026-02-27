import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotes(stored.reverse());
  }, []);

  if (!notes || notes.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Notifications</h1>
        <div className="card bg-white/5 p-6 mt-4">No notifications</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Notifications</h1>
      <div className="space-y-4 mt-4">
        {notes.map((n, idx) => (
          <div key={idx} className="backdrop-blur-md bg-white/5 p-4 rounded-lg">
            <div className="text-gray-200">{n.message}</div>
            <div className="text-sm text-gray-400 mt-2">{n.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
