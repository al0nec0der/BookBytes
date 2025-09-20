import { parseSearchQuery, buildOpenLibraryQuery } from '../utils/searchParser';

export const searchBooks = async (query, searchType = 'title') => {
  if (!query) return [];
  
  const url = new URL('https://openlibrary.org/search.json');
  
  // Parse the search query
  const parsedQuery = parseSearchQuery(query);
  
  // Build Open Library query string
  const openLibraryQuery = buildOpenLibraryQuery(parsedQuery);
  
  // Set the appropriate search parameter based on searchType
  switch (searchType) {
    case 'author':
      url.searchParams.append('author', openLibraryQuery);
      break;
    case 'subject':
      url.searchParams.append('subject', openLibraryQuery);
      break;
    case 'title':
    default:
      url.searchParams.append('title', openLibraryQuery);
      break;
  }
  
  url.searchParams.append('limit', '20'); // Increase limit for more results
  url.searchParams.append('fields', 'key,title,author_name,cover_i,first_publish_year,publisher,isbn');
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response failed');
    
    const data = await response.json();
    return data.docs.map(({ key, title, author_name, cover_i, first_publish_year, publisher, isbn }) => {
      // Extract ISBN10 and ISBN13 if available
      let isbn10 = null;
      let isbn13 = null;
      
      if (isbn && Array.isArray(isbn)) {
        isbn13 = isbn.find(code => code && code.length === 13) || null;
        isbn10 = isbn.find(code => code && code.length === 10) || null;
      }
      
      return {
        id: key,
        title,
        author: author_name || ['Unknown Author'],
        coverId: cover_i,
        publishYear: first_publish_year,
        publisher: publisher?.[0] || 'Unknown Publisher',
        isbn10,
        isbn13
      };
    });
  } catch (error) {
    console.error('Failed to fetch books:', error);
    throw error;
  }
};