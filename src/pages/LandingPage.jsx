import React from 'react';

const LandingPage = ({ setView }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <svg
            className="w-8 h-8 text-purple-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
            CertVault
          </span>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setView('login')}
            className="text-gray-300 hover:text-white transition"
          >
            Sign In
          </button>
          <button
            onClick={() => setView('signup')}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold transition hover:shadow-lg hover:shadow-purple-500/50"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-8 py-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Manage Your Certifications {' '}
          <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Smartly
          </span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl">
          Track, organize, and manage all your professional certifications in one secure platform. Stay
          on top of renewals, analytics, and reports with a sleek interface designed for professionals.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setView('signup')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-400/50 transition"
          >
            Start Free Trial
          </button>
          <button
            onClick={() => setView('login')}
            className="px-8 py-3 border border-cyan-400 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-white transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
