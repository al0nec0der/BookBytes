import { useState, useCallback } from 'react';
import { searchBooks } from '../services/api';

export const useBookSearch = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const performSearch = useCallback(async (query, searchType = 'title') => {
    if (!query) return;
    
    setLoading(true);
    setError(null);
    setHasSearched(true);
    
    try {
      const results = await searchBooks(query, searchType);
      setBooks(results);
    } catch (error) {
      console.error('Search failed:', error);
      setError('Failed to fetch books. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { books, loading, error, hasSearched, performSearch };
};