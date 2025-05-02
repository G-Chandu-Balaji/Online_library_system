import React from "react";
import { Link, useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";

export default function Book_Category() {
  const { category } = useParams();
  const Books = useSelector((store) => store.BookList.Books);
  const categoryBooks = Books.filter((book) =>
    book.category.toLowerCase().includes(category.toLowerCase())
  );
  if (categoryBooks.length === 0) {
    throw new Error("Invalid Category");
  }
  return (
    <div className="min-h-[84vh]">
      <div className="text-3xl capitalize bold text-center mt-4 bold bg-gradient-to-bl from-yellow-500 to-green-700 bg-clip-text text-transparent">
        {category} Books
      </div>
      <div className="flex flex-wrap  justify-evenly mt-5 gap-y-6 gap-x-2 pb-4  ">
        {categoryBooks.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-5">
        <Link to="/Browse_Books">
          <button className="p-3 bg-blue-600 text-white rounded-xl hover:underline hover:underline-offset-4 duration-500 hover:scale-[1.1] flex justify-center">
            Back to Browse
          </button>
        </Link>
      </div>
    </div>
  );
}
