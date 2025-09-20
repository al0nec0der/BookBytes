export default function ImagePlaceholder({ className }) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-gray-900 to-black ${className}`}>
      <div className="text-center p-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-gray-700 mx-auto" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <span className="text-xs text-gray-600 mt-2 block">No cover available</span>
      </div>
    </div>
  );
}