import { useState } from 'react';
import BookList from "../features/BookList";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorMessage from "../ui/ErrorMessage";
import BookDetailModal from "../ui/BookDetailModal";

export default function ResultsContainer({ books, loading, error, hasSearched, onRetry }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />;
  }

  if (hasSearched && books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center" role="status">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-full p-5 mb-8 shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-200 mb-4">No results found</h3>
        <p className="text-gray-500 max-w-md mb-8 text-lg">
          We couldn't find any books matching your search. Try adjusting your search terms or browse a different category.
        </p>
        <button 
          onClick={onRetry}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 shadow-lg hover:shadow-blue-500/30"
        >
          Try a different search
        </button>
      </div>
    );
  }

  if (books.length > 0) {
    return (
      <>
        <BookList books={books} onBookClick={handleBookClick} />
        {selectedBook && (
          <BookDetailModal book={selectedBook} onClose={closeModal} />
        )}
      </>
    );
  }

  return null;
}