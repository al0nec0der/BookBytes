export default function Container({ children }) {
  return (
    <main className="container mx-auto max-w-6xl px-4 sm:px-6">
      {children}
    </main>
  );
}