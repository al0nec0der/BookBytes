import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import SearchBar from "../components/features/SearchBar";
import { useBookSearch } from "../hooks/useBookSearch";
import BookList from "../components/features/BookList";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";

export default function HomePage() {
  const { books, loading, error, hasSearched, performSearch } = useBookSearch();

  const renderContent = () => {
    if (loading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />;
    if (hasSearched && books.length === 0) return <p className="text-center mt-8 text-gray-400">No books found for your query.</p>;
    if (books.length > 0) return <BookList books={books} />;
    return null;
  };

  return (
    <Container>
      <Header />
      <SearchBar onSearch={performSearch} />
      {renderContent()}
    </Container>
  );
}