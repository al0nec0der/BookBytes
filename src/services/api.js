export const searchBooks = async (query, searchType = 'title') => {
  if (!query) return [];
  
  const url = new URL('https://openlibrary.org/search.json');
  
  // Dynamically set the search parameter based on searchType
  switch (searchType) {
    case 'author':
      url.searchParams.append('author', query);
      break;
    case 'subject':
      url.searchParams.append('subject', query);
      break;
    case 'title':
    default:
      url.searchParams.append('title', query);
      break;
  }
  
  url.searchParams.append('limit', '20'); // Increase limit for more results
  url.searchParams.append('fields', 'key,title,author_name,cover_i,first_publish_year,publisher');
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response failed');
    
    const data = await response.json();
    return data.docs.map(({ key, title, author_name, cover_i, first_publish_year, publisher }) => ({
      id: key,
      title,
      author: author_name || ['Unknown Author'],
      coverId: cover_i,
      publishYear: first_publish_year,
      publisher: publisher?.[0] || 'Unknown Publisher',
    }));
  } catch (error) {
    console.error('Failed to fetch books:', error);
    throw error;
  }
};