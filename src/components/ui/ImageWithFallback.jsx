import { useState, useEffect } from 'react';

export default function ImageWithFallback({ 
  src, 
  alt, 
  className,
  fallbackComponent
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError && fallbackComponent) {
      setHasError(true);
    }
  };

  if (hasError || !src) {
    return fallbackComponent || null;
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}