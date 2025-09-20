import ImageWithFallback from "../ui/ImageWithFallback";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function BookCard({ book, onClick }) {
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : null;

  return (
    <li 
      className="flex flex-col text-center bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer group relative"
      onClick={() => onClick(book)}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-sm -z-10"></div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
      
      <div className="aspect-w-8 aspect-h-12 w-full relative">
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black bg-opacity-50 rounded-full p-2 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
        <ImageWithFallback
          src={coverUrl}
          alt={`Cover of ${book.title}`}
          className="object-cover w-full h-full"
          fallbackComponent={<ImagePlaceholder className="w-full h-full" />}
          book={book}
        />
      </div>
      <div className="p-3 flex flex-col flex-grow bg-gradient-to-b from-gray-900 to-gray-950">
        <h3 className="font-bold text-sm text-white flex-grow line-clamp-2">{book.title}</h3>
        <p className="text-xs text-gray-400 mt-2 line-clamp-1">
          {Array.isArray(book.author) ? book.author[0] : book.author}
        </p>
      </div>
    </li>
  );
}
