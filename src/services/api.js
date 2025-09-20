export const searchBooks = async (query) => {
  if (!query) return [];
  
  const url = new URL('https://openlibrary.org/search.json');
  url.searchParams.append('title', query);
  url.searchParams.append('limit', '12');
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