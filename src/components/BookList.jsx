import React, { useState } from "react";
import { Books } from "../utils/data";
import BookCard from "./BookCard";

export default function BookList() {
  const [filteredBooks, setFilteredBooks] = useState(Books);
  return (
    <div className="flex flex-wrap gap-6 justify-center  ">
      {filteredBooks.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}
