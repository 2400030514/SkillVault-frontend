import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <div className="p-6 z-10">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg shadow-lg p-6">{children}</div>
    </div>
  );
};

export default PageContainer;
