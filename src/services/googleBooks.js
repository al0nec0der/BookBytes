// Utility functions for Google Books API integration

/**
 * Search for a book on Google Books API
 * @param {Object} book - Book object with title and author information
 * @returns {Promise<Object|null>} Google Books volume data or null if not found
 */
export const searchGoogleBooks = async (book) => {
  try {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    
    // Try ISBN search first if available
    if (book.isbn13) {
      const isbnQuery = `isbn:${book.isbn13}`;
      const response = await fetch(`${baseUrl}?q=${encodeURIComponent(isbnQuery)}&maxResults=1`);
      if (response.ok) {
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          return data.items[0];
        }
      }
    }
    
    if (book.isbn10) {
      const isbnQuery = `isbn:${book.isbn10}`;
      const response = await fetch(`${baseUrl}?q=${encodeURIComponent(isbnQuery)}&maxResults=1`);
      if (response.ok) {
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          return data.items[0];
        }
      }
    }
    
    // Fallback to title and author search
    const title = Array.isArray(book.title) ? book.title[0] : book.title;
    const author = Array.isArray(book.author) ? book.author[0] : book.author;
    
    let query = `intitle:${title}`;
    if (author && author !== 'Unknown Author') {
      query += `+inauthor:${author}`;
    }
    
    const response = await fetch(`${baseUrl}?q=${encodeURIComponent(query)}&maxResults=1`);
    if (response.ok) {
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        return data.items[0];
      }
    }
    
    return null;
  } catch (error) {
    console.error('Failed to search Google Books:', error);
    return null;
  }
};

/**
 * Get the best available cover image from Google Books volume data
 * @param {Object} volume - Google Books volume data
 * @returns {string|null} Best available image URL or null
 */
export const getGoogleBooksCoverUrl = (volume) => {
  if (!volume || !volume.volumeInfo || !volume.volumeInfo.imageLinks) {
    return null;
  }
  
  const imageLinks = volume.volumeInfo.imageLinks;
  
  // Return in order of preference: large, medium, thumbnail, smallThumbnail
  return imageLinks.large || 
         imageLinks.medium || 
         imageLinks.thumbnail || 
         imageLinks.smallThumbnail || 
         null;
};

/**
 * Construct Google Books detail URL
 * @param {Object} book - Book object with ISBN or volumeId
 * @param {Object} [googleVolume=null] - Optional Google Books volume data
 * @returns {string} Google Books detail URL
 */
export const getGoogleBooksUrl = (book, googleVolume = null) => {
  // Prefer ISBN if available
  if (book.isbn13) {
    return `https://books.google.com/books?vid=ISBN${book.isbn13}`;
  }
  
  if (book.isbn10) {
    return `https://books.google.com/books?vid=ISBN${book.isbn10}`;
  }
  
  // Use volumeId if available from Google Books API
  if (googleVolume && googleVolume.id) {
    return `https://books.google.com/books?id=${googleVolume.id}`;
  }
  
  // Fallback to search URL
  const title = Array.isArray(book.title) ? book.title[0] : book.title;
  const author = Array.isArray(book.author) ? book.author[0] : book.author;
  
  let query = `intitle:${title}`;
  if (author && author !== 'Unknown Author') {
    query += `+inauthor:${author}`;
  }
  
  return `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=bks`;
};