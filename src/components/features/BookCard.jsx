export default function BookCard({ book }) {
  const coverUrl = book.coverId 
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg` 
    : 'https://via.placeholder.com/128x192.png?text=No+Cover';
    
  return (
    <li className="flex flex-col text-center bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img 
        src={coverUrl} 
        alt={`Cover of ${book.title}`} 
        className="w-full h-48 object-cover" 
        loading="lazy" 
      />
      <div className="p-2 flex flex-col flex-grow">
        <h3 className="font-bold text-sm flex-grow">{book.title}</h3>
        <p className="text-xs text-gray-400 mt-1">{book.author}</p>
      </div>
    </li>
  );
}