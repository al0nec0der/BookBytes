export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500 border-opacity-30 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-gray-400 text-lg">Searching for books...</p>
    </div>
  );
}