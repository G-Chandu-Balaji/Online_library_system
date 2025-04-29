import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex bg-blue-950 text-white justify-between px-3 items-center h-[8vh]">
      <div className="flex gap-1 items-center">
        <img src="book.png" alt="logo" className="w-[60px] h-[60px] mb-[5px]" />
        <h1
          className="text-3xl  capitalize font-bold bg-clip-text text-transparent bg-gradient-to-bl
      from-red-500 to-blue-400"
        >
          Online Library System
        </h1>
      </div>
      <nav className="flex gap-5 h-[100%] items-center ">
        <Link
          to=""
          className="hover:bg-blue-700 p-2 rounded-lg hover:scale-[1.08]"
        >
          Home
        </Link>
        <Link
          to="/Browser_Page"
          className="hover:bg-blue-700 p-2 rounded-lg hover:scale-[1.08]"
        >
          Browse Books
        </Link>
        <Link
          to="/Add_Book"
          className="hover:bg-blue-700 p-2 rounded-lg hover:scale-[1.08]"
        >
          Add Book
        </Link>
      </nav>
    </div>
  );
}

export default Header;
