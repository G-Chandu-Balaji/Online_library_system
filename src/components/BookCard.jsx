import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div
      className=" w-[300px] bg-amber-500 rounded-lg shadow-2xl border-1 border-black
    "
    >
      <img src={book.image} alt="book image" className=" h-[250px] w-[100%]" />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}
