import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { category } from "../utils/data";
import { Link } from "react-router-dom";

export default function Home() {
  const Books = useSelector((store) => store.BookList.Books);

  return (
    <div className="capitalize pb-10 mx-5 realtive">
      {/* backgroundd of image */}

      <div className="bg-[url('/background.jpg')] bg-cover bg-center mt-3 rounded-md  w-[95vw] mx-auto h-[60vh] absolute  z-0"></div>

      {/* Animation and welcome message
       */}
      <div className="bg-white/50 absolute mt-3  w-[95vw] mx-auto h-[60vh] z-0 "></div>
      <div className=" w-[50vw] mx-auto text-center rounded-xl py-3 px-6  font-extrabold    relative z-10 top-[15vh]  ">
        <div className="w-[full] mx-auto text-center typewriter-container ">
          <h1 className="text-4xl   mb-7 block bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-black typewriter ">
            Welcome, Explorer of Knowledge!
          </h1>
        </div>

        <div className="border-2  w-[80%] mx-auto rounded-lg  backdrop-blur-lg text-purple-950 overflow-hidden show">
          <p className="text-lg italic to-left">
            Every great journey begins with a single page.
          </p>
          <p className="text-lg italic to-right">
            Here, your curiosity is the compass — our library is the map.
          </p>
        </div>
        <h3 className="text-xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-green-950 to-black text-rotate ">
          Uncover something amazing today.
        </h3>
      </div>

      {/* dipplaying Categories of booka */}

      <div className="mt-[40vh]">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-black ">
          catergories of books
        </h2>
        <div className="flex gap-6  mt-5 mx-2">
          {category.map((item, index) => {
            return (
              <Link to={`/books/${item.category}`} key={index}>
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

      {/* Diaplaying popular book (rating >= 4) */}

      <div className="mt-5">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-black">
          popular books
        </h2>
        <div className="flex gap-5 mx-2 mt-5">
          {Books.filter((bookitem) => bookitem.rating >= 4)
            .slice(0, 5)
            .map((book) => (
              <BookCard book={book} key={book.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
