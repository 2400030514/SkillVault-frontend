import React from 'react';
import StatCard from '../components/StatCard';
import { calculateStatus } from '../utils/dateUtils';

const Dashboard = ({ certifications }) => {
  const total = certifications.length;
  const statusCounts = { Valid: 0, 'Expiring Soon': 0, Expired: 0 };
  certifications.forEach(c => {
    const status = calculateStatus(c.expiryDate);
    statusCounts[status] += 1;
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Certifications" value={total} color="blue" />
        <StatCard
          title="Valid"
          value={statusCounts.Valid}
          color="green"
        />
        <StatCard
          title="Expiring Soon"
          value={statusCounts['Expiring Soon']}
          color="yellow"
        />
        <StatCard
          title="Expired"
          value={statusCounts.Expired}
          color="red"
        />
      </div>
    </div>
  );
};

export default Dashboard;