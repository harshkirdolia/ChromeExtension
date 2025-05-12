const SearchTab = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Search Input */}
      <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 shadow-sm">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
        <input
          className="flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Search for anything at your company"
        />
      </div>

      {/* Recommended Results */}
      <div className="flex flex-col gap-3">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm">
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Sales Plan 2024</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Updated 2 days ago • Google Docs</div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm">
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Quarterly Business Review</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Updated 5 days ago • Notion</div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm">
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Customer Feedback Summary</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Updated 1 week ago • Slack</div>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;