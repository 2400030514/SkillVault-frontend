import React from 'react';

function arrayToCSV(arr) {
  if (arr.length === 0) return '';
  const headers = Object.keys(arr[0]);
  const lines = arr.map(obj => headers.map(h => obj[h]).join(','));
  return [headers.join(','), ...lines].join('\n');
}

const Reports = ({ certifications }) => {
  const handleExport = () => {
    const csv = arrayToCSV(certifications);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'certifications.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSummary = () => {
    const total = certifications.length;
    const valid = certifications.filter(c => new Date(c.expiryDate) > new Date()).length;
    const expired = total - valid;
    alert(`Total: ${total}\nValid: ${valid}\nExpired: ${expired}`);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Reports</h1>
      <button
        onClick={handleExport}
        className="py-2 px-4 bg-blue-600 rounded hover:bg-blue-500"
      >
        Export CSV
      </button>
      <button
        onClick={handleSummary}
        className="py-2 px-4 bg-green-600 rounded hover:bg-green-500"
      >
        Generate Summary
      </button>
    </div>
  );
};

export default Reports;