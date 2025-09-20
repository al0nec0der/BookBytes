export default function Container({ children }) {
  return (
    <main className="container mx-auto max-w-4xl px-4">
      {children}
    </main>
  );
}