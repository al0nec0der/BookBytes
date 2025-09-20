import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import SearchBar from "../components/features/SearchBar";
import { useBookSearch } from "../hooks/useBookSearch";
import BookList from "../components/features/BookList";

export default function HomePage() {
  const { books, loading, error, performSearch } = useBookSearch();
  
  return (
    <Container>
      <Header />
      <SearchBar onSearch={performSearch} />
      {books.length > 0 && <BookList books={books} />}
    </Container>
  );
}