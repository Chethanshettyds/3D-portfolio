import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-purple-900">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-4"></div>
        <p className="text-white text-xl font-semibold">Loading Experience...</p>
      </div>
    </div>
  );
};

export default Loader;
