const DiscoverTab = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Understand this doc
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center mb-1 font-semibold text-gray-800 dark:text-gray-100">
          <span className="material-icons text-base mr-2">description</span>
          Executive Summary
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Group-based permissions will enable scalable role management for large enterprises using IdPs like Azure and Okta.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center mb-1 font-semibold text-gray-800 dark:text-gray-100">
          <span className="material-icons text-base mr-2">flag</span>
          Organizational Goals
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          How do these group permissions align with Presto’s broader product vision for enterprise customers?
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center mb-1 font-semibold text-gray-800 dark:text-gray-100">
          <span className="material-icons text-base mr-2">warning</span>
          Potential Challenges
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          What risks or trade-offs arise when implementing group-based controls?
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center mb-1 font-semibold text-gray-800 dark:text-gray-100">
          <span className="material-icons text-base mr-2">feedback</span>
          Customer Feedback
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          How might user feedback influence further improvements to group-based permissions?
        </p>
      </div>
    </div>
  );
};

export default DiscoverTab;