import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Books } from "../utils/data";

export default function Book_Details() {
  const { bookId } = useParams();
  const book = Books.filter((item) => item.id == bookId);

  return (
    <div className="flex items-center  mx-auto w-[95%] shadow-2xl rounded-xl mt-10 ">
      <div className="p-4 ">
        <div className="border-2 hover:rotate-x-10 hover:rotate-y-[-20deg] hover:perspective-[1000px] hover:ease-in-out  rounded-md hover:duration-400 relative z-10">
          <img src={book[0].image} alt="" className="w-[225px] h-[300px]" />
        </div>
      </div>
      <div className="mx-5 ">
        <div className="grid grid-cols-6 border-2 border-black p-10  ">
          <p className="col-span-1">Title:</p>
          <p className="col-span-5">{book[0].title}</p>
          <p className="col-span-1">Author:</p>
          <p className="col-span-5">{book[0].author}</p>
          <p className="col-span-1">Year:</p>
          <p className="col-span-5">{book[0].year}</p>
          <p className="col-span-1">Category:</p>
          <p className="col-span-5">{book[0].category}</p>
          <p className="col-span-1">Description:</p>
          <p className="col-span-5 italic">{book[0].description}</p>
        </div>
      </div>
    </div>
  );
}
