import React, { useState, useRef } from 'react';
import { calculateStatus } from '../utils/dateUtils';

const AddCertification = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const fileInputRef = useRef(null);

  const parseCsv = text => {
    const lines = text.trim().split(/\r?\n/);
    const headers = lines.shift().split(',').map(h => h.trim().toLowerCase());
    return lines.map(line => {
      const cols = line.split(',').map(c => c.trim());
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = cols[i] || '';
      });
      return obj;
    });
  };

  const handleFileImport = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      try {
        const text = evt.target.result;
        let imported = [];
        if (file.name.toLowerCase().endsWith('.json')) {
          const data = JSON.parse(text);
          if (Array.isArray(data)) {
            imported = data;
          } else if (data.certifications) {
            imported = data.certifications;
          }
        } else {
          imported = parseCsv(text);
        }
        let count = 0;
        imported.forEach(item => {
          const cert = {
            name: item.name || item['certification name'] || '',
            issuer: item.issuer || '',
            issueDate: item['issue date'] || item.date || '',
            expiryDate: item['expiry date'] || ''
          };
          if (cert.name && cert.issuer && cert.issueDate && cert.expiryDate) {
            const status = calculateStatus(cert.expiryDate);
            onAdd({ ...cert, status });
            count++;
          }
        });
        alert(`Successfully imported ${count} certifications!`);
      } catch (err) {
        console.error(err);
        alert('Failed to import file');
      }
    };
    reader.readAsText(file);
    // reset input
    e.target.value = null;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const status = calculateStatus(expiryDate);
    onAdd({ name, issuer, issueDate, expiryDate, status });
    setName('');
    setIssuer('');
    setIssueDate('');
    setExpiryDate('');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Add Certification</h1>
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
          className="py-2 px-4 border border-white/20 rounded-lg backdrop-blur-md bg-gradient-to-r from-cyan-400 to-purple-600 bg-opacity-20 flex items-center gap-2 hover:bg-opacity-30 shadow-[0_0_8px_rgba(0,255,255,0.7)] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Import from File
        </button>
        <input
          type="file"
          accept=".csv,.json"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileImport}
        />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Issuer</label>
          <input
            type="text"
            value={issuer}
            onChange={e => setIssuer(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Issue Date</label>
          <input
            type="date"
            value={issueDate}
            onChange={e => setIssueDate(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1">Expiry Date</label>
          <input
            type="date"
            value={expiryDate}
            onChange={e => setExpiryDate(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-green-600 rounded hover:bg-green-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCertification;