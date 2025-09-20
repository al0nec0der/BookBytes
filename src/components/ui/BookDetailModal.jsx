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
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-white">Book Details</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2 transition-colors duration-200"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              <div className="aspect-w-8 aspect-h-12 rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={coverUrl}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-full rounded-xl object-cover"
                  fallbackComponent={<ImagePlaceholder className="w-full h-full rounded-xl" />}
                  book={book}
                />
              </div>
            </div>
            
            <div className="md:w-3/5">
              <h3 className="text-2xl font-bold text-white mb-4">{book.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Author(s)</h4>
                  <p className="text-gray-200 text-lg">
                    {Array.isArray(book.author) ? book.author.join(', ') : book.author}
                  </p>
                </div>
                
                {book.publishYear && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Publish Year</h4>
                    <p className="text-gray-200 text-lg">{book.publishYear}</p>
                  </div>
                )}
                
                {book.publisher && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Publisher</h4>
                    <p className="text-gray-200 text-lg">{book.publisher}</p>
                  </div>
                )}
                
                {book.isbn13 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">ISBN-13</h4>
                    <p className="text-gray-200 text-lg">{book.isbn13}</p>
                  </div>
                )}
                
                {book.isbn10 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">ISBN-10</h4>
                    <p className="text-gray-200 text-lg">{book.isbn10}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-8">
                <a
                  href={googleBooksUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 shadow-lg hover:shadow-blue-500/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
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