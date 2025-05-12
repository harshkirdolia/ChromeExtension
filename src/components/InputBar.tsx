const InputBar = () => {
  return (
    <div className="flex items-center gap-4 px-6 py-4 border-t bg-gray-50">
      {/* Input Field */}
      <input
        className="flex-1 px-4 py-2 border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ask a follow-up question..."
        aria-label="Input message"
      />

      {/* Send Button */}
      <button
        aria-label="Send message"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  );
};

export default InputBar;