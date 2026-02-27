import React, { useEffect, useMemo } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { calculateStatus, daysUntil } from '../utils/dateUtils';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Analytics = ({ certifications }) => {
  const statusData = useMemo(() => {
    const counts = { Valid: 0, 'Expiring Soon': 0, Expired: 0 };
    certifications.forEach(c => {
      const stat = calculateStatus(c.expiryDate);
      counts[stat] += 1;
    });
    return counts;
  }, [certifications]);

  const donutData = {
    labels: Object.keys(statusData),
    datasets: [
      {
        data: Object.values(statusData),
        backgroundColor: ['#10B981', '#F59E0B', '#EF4444'],
        hoverOffset: 4
      }
    ]
  };

  const barData = useMemo(() => {
    // count expirations per month for the next year
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const counts = months.map(() => 0);

    certifications.forEach(c => {
      const exp = new Date(c.expiryDate);
      const month = exp.getMonth();
      const now = new Date();
      if (exp >= now && exp <= new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())) {
        counts[month] += 1;
      }
    });

    return {
      labels: months.map(m => new Date(0, m - 1).toLocaleString('default', { month: 'short' })),
      datasets: [
        {
          label: 'Expirations',
          data: counts,
          backgroundColor: '#3B82F6'
        }
      ]
    };
  }, [certifications]);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl mb-2">Status Distribution</h2>
          <Doughnut data={donutData} />
        </div>
        <div className="card">
          <h2 className="text-xl mb-2">Monthly Expirations</h2>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;