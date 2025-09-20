import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}