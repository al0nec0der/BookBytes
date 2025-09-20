export default function Button({ children, className = '', ...props }) {
  return (
    <button 
      className={`px-6 py-3 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 transition-all duration-200 ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}