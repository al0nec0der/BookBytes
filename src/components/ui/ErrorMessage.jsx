export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center p-8 mt-10 bg-gradient-to-br from-red-900/20 to-black border border-red-800 rounded-2xl max-w-md mx-auto shadow-xl" role="alert">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="font-bold text-xl text-red-300">Error</p>
      </div>
      <p className="mb-6 text-center text-gray-300">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-500 shadow-lg hover:shadow-red-500/30"
        >
          Try Again
        </button>
      )}
    </div>
  );
}