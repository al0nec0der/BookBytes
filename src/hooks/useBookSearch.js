import { useState, useCallback } from 'react';
import { searchBooks } from '../services/api';

export const useBookSearch = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const performSearch = useCallback(async (query) => {
    if (!query) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const results = await searchBooks(query);
      setBooks(results);
    } catch (e) {
      setError('Failed to fetch books. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { books, loading, error, performSearch };
};