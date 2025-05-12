import React from 'react';

const Header = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Logo */}
      <div className="text-blue-600 text-3xl font-medium font-satoshi text-center">Presto</div>

      {/* Tabs */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="px-4 py-2 bg-gray-200 rounded-full text-black text-sm font-satoshi hover:bg-gray-300">Discover</button>
        <button className="px-4 py-2 bg-gray-200 rounded-full text-black text-sm font-satoshi hover:bg-gray-300">Chat</button>
        <button className="px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-satoshi hover:bg-blue-200">Search</button>
      </div>

      {/* Search Bar */}
      <div className="mt-6 flex items-center bg-gray-200 rounded-full px-4 py-2">
        <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
        </svg>
        <input
          type="text"
          placeholder="Search for anything"
          className="ml-4 flex-grow bg-transparent text-gray-500 text-sm font-satoshi focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Header;