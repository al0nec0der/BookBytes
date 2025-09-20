import BookCard from "./BookCard";

export default function BookList({ books, onBookClick }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8">
      {books.map(book => (
        <BookCard key={book.id} book={book} onClick={onBookClick} />
      ))}
    </ul>
  );
}