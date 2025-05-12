// No import needed for React with new JSX transform

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white dark:bg-gray-900">
      {/* Logo */}
      <div className="text-lg font-semibold text-[#6C5DD3] tracking-tight">presto</div>

      {/* Tabs */}
      <div className="flex items-center gap-6">
        <button className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">Discover</button>
        <button className="text-sm font-medium text-[#6C5DD3] bg-[#F1EEFC] px-3 py-1 rounded-full">Chat</button>
        <button className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">Search</button>
      </div>

      {/* Close */}
      <button
        className="text-gray-400 hover:text-gray-600 text-xl focus:outline-none"
        onClick={() => window.close()}
      >
        ×
      </button>
    </div>
  );
};

export default Header;