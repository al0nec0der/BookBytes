import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}