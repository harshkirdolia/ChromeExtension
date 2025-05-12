import { useState } from 'react';
import Header from './components/Header.tsx';
import TabNav from './components/TabNav.tsx';
import ChatTab from './components/ChatTab.tsx';
import DiscoverTab from './components/DiscoverTab.tsx';
import SearchTab from './components/SearchTab.tsx';
import InputBar from './components/InputBar.tsx';

function App() {
  const [activeTab, setActiveTab] = useState('Chat');

  return (
    <div className="fixed inset-0 flex flex-col w-[420px] h-[600px] bg-white">
      <div className="flex-none">
        <Header />
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      <div className="flex-1 overflow-auto">
        {activeTab === 'Chat' && <ChatTab />}
        {activeTab === 'Discover' && <DiscoverTab />}
        {activeTab === 'Search' && <SearchTab />}
      </div>

      {(activeTab === 'Chat' || activeTab === 'Search') && (
        <div className="flex-none">
          <InputBar />
        </div>
      )}
    </div>
  );
}

export default App;
