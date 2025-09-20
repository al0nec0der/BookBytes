export default function Button({ children, className = '', ...props }) {
  return (
    <button 
      className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}