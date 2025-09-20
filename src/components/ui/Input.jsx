export default function Input({ placeholder, ...props }) {
  return (
    <input 
      className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm" 
      placeholder={placeholder || 'Enter search terms (try: "fantasy" AND dragons)'}
      {...props} 
    />
  );
}