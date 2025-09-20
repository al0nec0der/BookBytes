export const searchBooks = async (query) => {
  if (!query) return [];
  
  const url = new URL('https://openlibrary.org/search.json');
  url.searchParams.append('title', query);
  url.searchParams.append('limit', '12');
  url.searchParams.append('fields', 'key,title,author_name,cover_i');
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response failed');
    
    const data = await response.json();
    return data.docs.map(({ key, title, author_name, cover_i }) => ({
      id: key,
      title,
      author: author_name?.[0] || 'Unknown Author',
      coverId: cover_i,
    }));
  } catch (error) {
    console.error('Failed to fetch books:', error);
    throw error;
  }
};