import React from 'react';

const InputBar = () => {
  return (
    <div className="flex items-center p-2 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-grow p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
        Send
      </button>
    </div>
  );
};

export default InputBar;