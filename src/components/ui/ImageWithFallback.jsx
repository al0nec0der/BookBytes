import { useState, useEffect } from 'react';

export default function ImageWithFallback({ 
  src, 
  alt, 
  className,
  fallbackComponent
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // If there's no source or there was an error, show fallback
  if (!src || hasError) {
    return fallbackComponent || <div className={`bg-gray-700 ${className}`} />;
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
        <div className={`absolute inset-0 bg-gray-700 ${className}`} />
      )}
    </>
  );
}