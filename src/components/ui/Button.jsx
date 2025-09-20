export default function Button({ children, ...props }) {
  return (
    <button 
      className="px-6 py-2 bg-blue-600 rounded-md font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500" 
      {...props}
    >
      {children}
    </button>
  );
}