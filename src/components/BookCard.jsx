import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div
      className=" w-[300px] bg-amber-500 rounded-lg shadow-2xl border-1 border-black p-1 text-center gap-1 hover:scale-[1.1] duration-300
    "
    >
      <img src={book.image} alt="book image" className=" h-[250px] w-[100%] " />
      <h3 className="font-bold">{book.title}</h3>
      <p>
        by {""}
        <span className="italic">{book.author}</span>
      </p>

      <Link
        to={`/book/${book.id}`}
        className="hover:underline hover:text-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
