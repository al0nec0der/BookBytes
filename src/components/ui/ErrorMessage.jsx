export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center p-6 mt-8 bg-red-900/20 text-red-300 border border-red-700 rounded-xl max-w-md mx-auto" role="alert">
      <div className="flex items-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="font-medium text-lg">Error</p>
      </div>
      <p className="mb-5 text-center">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-500"
        >
          Try Again
        </button>
      )}
    </div>
  );
}