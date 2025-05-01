import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { category } from "../utils/data";
import { Link } from "react-router-dom";

export default function Home() {
  const Books = useSelector((store) => store.BookList.Books);

  return (
    <div className="capitalize pb-10 mx-5 realtive">
      <div className="bg-[url('background.jpg')] bg-cover bg-center mt-3 rounded-md  w-[95vw] mx-auto h-[60vh] absolute  z-0"></div>
      <div className="bg-white/30 absolute mt-3  w-[95vw] mx-auto h-[60vh] z-0 "></div>
      <div className=" w-[30vw] mx-auto text-center rounded-xl py-3 px-6   flex flex-col justify-center  items-center  relative z-10 top-[15vh] ">
        <h1 className="text-2xl font-bold  mb-3">
          Welcome, Explorer of Knowledge!
        </h1>
        <p className="text-lg italic">
          Every great journey begins with a single page.
        </p>
        <p className="text-lg italic">
          Here, your curiosity is the compass — our library is the map.
        </p>
        <h3 className="text-xl font-medium  ">
          Uncover something amazing today.
        </h3>
      </div>

      <div className="mt-[40vh]">
        <h2 className="text-2xl ">catergories of books</h2>
        <div className="flex gap-6  mt-5 mx-2">
          {category.map((item) => {
            return (
              <Link to={`/books/${item.category}`}>
                <div className="w-[275px] bg-amber-500 rounded-lg shadow-2xl border-1 border-black p-1 text-center gap-1 hover:scale-[1.1] duration-300  ">
                  <img
                    src={item.image}
                    alt="book image"
                    className=" h-[250px] w-[100%] "
                  />
                  <h1 className="text-xl bold p-1 ">{item.category}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl">popular books</h2>
        <div className="flex gap-5 mx-2 mt-5">
          {Books.slice(0, 5).map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
