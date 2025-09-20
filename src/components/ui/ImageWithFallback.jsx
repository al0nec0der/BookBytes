import { useState, useEffect } from 'react';
import { searchGoogleBooks, getGoogleBooksCoverUrl } from '../../services/googleBooks';

export default function ImageWithFallback({ 
  src, 
  alt, 
  className,
  fallbackComponent,
  book // Book object for Google Books fallback
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [googleBooksChecked, setGoogleBooksChecked] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
    setGoogleBooksChecked(false);
  }, [src]);

  const handleError = async () => {
    // If we haven't checked Google Books yet and we have book data
    if (!googleBooksChecked && book && !hasError) {
      setGoogleBooksChecked(true);
      
      try {
        const googleVolume = await searchGoogleBooks(book);
        const googleCoverUrl = getGoogleBooksCoverUrl(googleVolume);
        
        if (googleCoverUrl) {
          setImgSrc(googleCoverUrl);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.error('Error fetching Google Books cover:', error);
      }
    }
    
    // If no Google Books cover or error, show fallback
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // If there's no source or there was an error and we've checked Google Books, show fallback
  if ((!src && googleBooksChecked) || hasError) {
    return fallbackComponent || <div className={`bg-gray-900 ${className}`} />;
  }

  return (
    <>
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-900 ${className}`} />
      )}
    </>
  );
}