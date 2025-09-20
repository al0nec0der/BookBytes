import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import SearchBar from "../components/features/SearchBar";
import { useBookSearch } from "../hooks/useBookSearch";
import ResultsContainer from "../components/features/ResultsContainer";

export default function HomePage() {
  const { books, loading, error, hasSearched, performSearch } = useBookSearch();

  return (
    <Container>
      <Header />
      <SearchBar onSearch={performSearch} />
      <ResultsContainer 
        books={books} 
        loading={loading} 
        error={error} 
        hasSearched={hasSearched} 
        onRetry={() => performSearch(document.querySelector('input')?.value || '')}
      />
    </Container>
  );
}