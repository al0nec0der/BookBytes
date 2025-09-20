import { useEffect, useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import ImagePlaceholder from './ImagePlaceholder';
import { searchGoogleBooks, getGoogleBooksUrl } from '../../services/googleBooks';

export default function BookDetailModal({ book, onClose }) {
  const [googleVolume, setGoogleVolume] = useState(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Fetch Google Books data for the book
  useEffect(() => {
    const fetchGoogleBooksData = async () => {
      try {
        const volume = await searchGoogleBooks(book);
        setGoogleVolume(volume);
      } catch (error) {
        console.error('Error fetching Google Books data:', error);
      }
    };
    
    fetchGoogleBooksData();
  }, [book]);

  // Use the largest available cover size
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`
    : null;
    
  // Construct Google Books URL
  const googleBooksUrl = getGoogleBooksUrl(book, googleVolume);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">Book Details</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="aspect-w-8 aspect-h-12">
                <ImageWithFallback
                  src={coverUrl}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-full rounded-lg shadow-lg object-cover"
                  fallbackComponent={<ImagePlaceholder className="w-full h-full rounded-lg shadow-lg" />}
                  book={book}
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Author(s)</h4>
                  <p className="text-gray-200">
                    {Array.isArray(book.author) ? book.author.join(', ') : book.author}
                  </p>
                </div>
                
                {book.publishYear && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Publish Year</h4>
                    <p className="text-gray-200">{book.publishYear}</p>
                  </div>
                )}
                
                {book.publisher && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Publisher</h4>
                    <p className="text-gray-200">{book.publisher}</p>
                  </div>
                )}
                
                {book.isbn13 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">ISBN-13</h4>
                    <p className="text-gray-200">{book.isbn13}</p>
                  </div>
                )}
                
                {book.isbn10 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">ISBN-10</h4>
                    <p className="text-gray-200">{book.isbn10}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <a
                  href={googleBooksUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-3H7v-2h4v2zm0-3H7V9h4v2zm6 6h-4V9h4v8zm0-10h-4V7h4v2z"/>
                  </svg>
                  View on Google Books
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}