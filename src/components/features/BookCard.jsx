export default function BookCard({ book }) {
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : "https://via.placeholder.com/128x192.png?text=No+Cover";

  return (
    <li className="flex flex-col text-center bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer">
      <div className="aspect-w-8 aspect-h-12 w-full">
        <img
          src={coverUrl}
          alt={`Cover of ${book.title}`}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-sm sm:text-base flex-grow line-clamp-2">{book.title}</h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-2 line-clamp-1">{book.author}</p>
      </div>
    </li>
  );
}
