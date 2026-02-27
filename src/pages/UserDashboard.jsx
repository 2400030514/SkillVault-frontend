import React from 'react';
import StatCard from '../components/StatCard';

const StatusChart = () => (
  <div className="card bg-white/5 p-6 rounded-lg w-full h-64 flex items-center justify-center">
    <div className="text-center text-gray-300">
      <div className="font-semibold mb-2">Status Distribution</div>
      <div className="text-sm">(Chart placeholder)</div>
    </div>
  </div>
);

const UserDashboard = ({ stats = {} }) => {
  const { total = 0, active = 0, expiring = 0, expired = 0 } = stats;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Dashboard Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total" value={total} color="blue" />
        <StatCard title="Active" value={active} color="green" />
        <StatCard title="Expiring Soon" value={expiring} color="yellow" />
        <StatCard title="Expired" value={expired} color="red" />
      </div>

      <StatusChart />
    </div>
  );
};

export default UserDashboard;
