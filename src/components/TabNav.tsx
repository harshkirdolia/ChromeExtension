import React from 'react';

interface TabNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange }) => {
  const TABS = ['Discover', 'Chat', 'Search'];

  return (
    <div className="flex items-center gap-6 px-6 pb-4 border-b">
      {TABS.map(tab => (
        <button
          key={tab}
          className={`relative pb-2 text-lg font-medium transition-colors ${
            activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNav;