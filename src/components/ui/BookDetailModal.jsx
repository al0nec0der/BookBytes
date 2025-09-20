import { useEffect } from 'react';
import ImageWithFallback from './ImageWithFallback';
import ImagePlaceholder from './ImagePlaceholder';

export default function BookDetailModal({ book, onClose }) {
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

  // Use the largest available cover size
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`
    : null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
              <ImageWithFallback
                src={coverUrl}
                alt={`Cover of ${book.title}`}
                className="w-full rounded-lg shadow-lg object-cover"
                fallbackComponent={<ImagePlaceholder className="w-full rounded-lg shadow-lg aspect-[2/3]" />}
              />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}