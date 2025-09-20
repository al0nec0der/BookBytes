export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-500 border-opacity-30 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
      </div>
      <p className="mt-8 text-gray-300 text-xl font-medium">Searching for books...</p>
    </div>
  );
}