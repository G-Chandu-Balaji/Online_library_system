import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Books } from "../utils/data";

export default function Book_Details() {
  const { bookId } = useParams();
  const book = Books.filter((item) => item.id == bookId);

  return (
    <div className="flex">
      <div>
        <img src={book[0].image} alt="" className="w-[200px] h-[300px]" />
      </div>
      <div className="">
        <div className="grid grid-cols-2">
          <p>Title:</p>
          <p>{book[0].title}</p>
          <p>Author:</p>
          <p>{book[0].author}</p>
          <p>Year:</p>
          <p>{book[0].year}</p>
          <p>Category:</p>
          <p>{book[0].category}</p>
          <p>Description:</p>
          <p>{book[0].description}</p>
        </div>
      </div>
    </div>
  );
}
