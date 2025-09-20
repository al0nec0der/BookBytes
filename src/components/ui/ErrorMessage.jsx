export default function ErrorMessage({ message }) {
  return (
    <div className="text-center p-4 mt-8 bg-red-900/50 text-red-300 border border-red-700 rounded-lg" role="alert">
      <p>⚠️ {message}</p>
    </div>
  );
}