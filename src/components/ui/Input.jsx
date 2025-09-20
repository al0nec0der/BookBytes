export default function Input({ ...props }) {
  return (
    <input 
      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
      {...props} 
    />
  );
}