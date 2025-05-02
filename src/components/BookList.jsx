import { useSelector } from "react-redux";
import Book_notFound from "./Book_notFound";
import BookCard from "./BookCard";

export default function BookList({ searchBook }) {
  const Books = useSelector((store) => store.BookList.Books);
  const booksData = searchBook && searchBook.length > 0 ? searchBook : Books;

  return (
    <div className="flex flex-wrap gap-6 justify-center min-h-[51vh]">
      {searchBook && searchBook.length === 0 ? (
        <Book_notFound />
      ) : (
        booksData.map((book) => <BookCard book={book} key={book.id} />)
      )}
    </div>
  );
}
