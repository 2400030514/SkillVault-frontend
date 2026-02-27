import React from 'react';

const StatCard = ({ title, value, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500'
  };

  return (
    <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-4 w-full ${colors[color]} text-white drop-shadow-lg`}>
      <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default StatCard;