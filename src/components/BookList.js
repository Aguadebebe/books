import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";
// useBooksContext is a custom hook that combines useContext and BooksContext into one function that is easier to reference.
 

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return (
        <BookShow key={book.id} book={book} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;