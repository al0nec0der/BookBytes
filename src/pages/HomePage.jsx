import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import SearchBar from '../components/features/SearchBar';

export default function HomePage() {
  return (
    <Container>
      <Header />
      <SearchBar />
    </Container>
  );
}