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
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center" role="status">
        <div className="bg-gray-900 rounded-full p-4 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-300 mb-2">No results found</h3>
        <p className="text-gray-500 max-w-md mb-6">
          We couldn't find any books matching your search. Try adjusting your search terms or browse a different category.
        </p>
        <button 
          onClick={onRetry}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500"
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