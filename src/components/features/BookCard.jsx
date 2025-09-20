import ImageWithFallback from "../ui/ImageWithFallback";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function BookCard({ book, onClick }) {
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : null;

  return (
    <li 
      className="flex flex-col text-center bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer group"
      onClick={() => onClick(book)}
    >
      <div className="aspect-w-8 aspect-h-12 w-full relative">
        <ImageWithFallback
          src={coverUrl}
          alt={`Cover of ${book.title}`}
          className="object-cover w-full h-full"
          fallbackComponent={<ImagePlaceholder className="w-full h-full" />}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-sm sm:text-base flex-grow line-clamp-2">{book.title}</h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-2 line-clamp-1">
          {Array.isArray(book.author) ? book.author[0] : book.author}
        </p>
      </div>
    </li>
  );
}
