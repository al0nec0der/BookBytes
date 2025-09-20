export default function Input({ ...props }) {
  return (
    <input 
      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
      {...props} 
    />
  );
}