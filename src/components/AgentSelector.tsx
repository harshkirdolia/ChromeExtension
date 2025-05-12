import React from 'react';

const AgentSelector = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800">Select an Agent</h2>
      <ul className="mt-2 space-y-2">
        <li className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-50">Agent 1</li>
        <li className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-50">Agent 2</li>
        <li className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-50">Agent 3</li>
      </ul>
    </div>
  );
};

export default AgentSelector;