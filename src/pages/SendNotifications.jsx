import React, { useState } from 'react';

const SendNotifications = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const stored = JSON.parse(localStorage.getItem('notifications')) || [];
    const item = { message: message.trim(), date: new Date().toLocaleString() };
    stored.push(item);
    localStorage.setItem('notifications', JSON.stringify(stored));
    setMessage('');
    alert('Notification sent');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Send Notifications</h1>
      <div className="mt-4">
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={4}
          className="w-full bg-black bg-opacity-30 border border-white/10 rounded-lg p-3 text-white"
          placeholder="Type your message here"
        />
        <div className="mt-3">
          <button onClick={handleSend} className="py-2 px-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-lg shadow-[0_0_8px_rgba(0,255,255,0.7)] hover:shadow-[0_0_12px_rgba(0,255,255,0.9)]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendNotifications;
