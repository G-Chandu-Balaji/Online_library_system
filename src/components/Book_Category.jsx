import React from "react";
import { Books } from "../utils/data";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

export default function Book_Category() {
  const { category } = useParams();
  const categoryBooks = Books.filter((book) =>
    book.category.toLowerCase().includes(category.toLowerCase())
  );
  console.log(categoryBooks);
  return (
    <>
      <div className="text-3xl capitalize bold text-center mt-4 bold bg-gradient-to-bl from-yellow-500 to-green-700 bg-clip-text text-transparent">
        {category} Books
      </div>
      <div className="flex flex-wrap  justify-evenly mt-5 gap-y-6 gap-x-2 pb-4  ">
        {categoryBooks.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </>
  );
}
