import React from 'react';

function PredictionPage() {
 
    return (
      <div className="flex items-center justify-center min-h-300px  ">
  <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      />
      <button 
        className="absolute inset-y-0 right-0 px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        <svg 
          className="h-5 w-5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M20 20l-5.6-5.6a7.5 7.5 0 10-1.4 1.4L20 20z"></path>
          <path d="M9 15a6 6 0 11 6-6 6 6 0 01-6 6z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>

    );
  }

export default PredictionPage;
