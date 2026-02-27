import React from 'react';
import { calculateStatus, daysUntil } from '../utils/dateUtils';

const RenewalTracking = ({ certifications }) => {
  const now = new Date();
  const soon = certifications.filter(cert => {
    const status = calculateStatus(cert.expiryDate);
    return status === 'Expiring Soon' || status === 'Expired';
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Renewal Tracking</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Expiry Date</th>
              <th className="px-6 py-3 text-left">Days Left</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {soon.map(cert => {
              const status = calculateStatus(cert.expiryDate);
              const days = daysUntil(cert.expiryDate);
              const rowClass =
                status === 'Expired'
                  ? 'bg-red-600'
                  : 'bg-yellow-600';

              return (
                <tr key={cert.id} className={`${rowClass} text-white`}>                
                  <td className="px-6 py-2">{cert.name}</td>
                  <td className="px-6 py-2">{cert.expiryDate}</td>
                  <td className="px-6 py-2">{days}</td>
                  <td className="px-6 py-2">{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenewalTracking;