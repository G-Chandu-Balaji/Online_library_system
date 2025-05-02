import React, { useState } from "react";
import BookList from "../components/BookList";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Browser_Page() {
  const [inputText, setInputText] = useState(null);
  const [searchBook, SetSearchBook] = useState(null);
  const navigate = useNavigate();
  const Books = useSelector((store) => store.BookList.Books);

  function handleSearch() {
    const found = Books.filter(
      (book) =>
        book.title.toLowerCase().includes(inputText.toLowerCase()) ||
        book.author.toLowerCase().includes(inputText.toLowerCase())
    );

    SetSearchBook(found);
  }

  const handleChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="mx-auto p-5">
      <div className="flex justify-center gap-10">
        <h3 className="text-xl font-bold text-blue-900">Books by Categories</h3>
        <nav>
          <select
            onChange={handleChange}
            className=" w-[100%] h-8 rounded-md border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none  "
          >
            <option value="">Select a Category</option>
            <option value="/books/Fiction">Fiction</option>
            <option value="/books/Fantasy">Fantasy</option>
            <option value="/books/Romance">Romance</option>
            <option value="/books/Thriller">Thriller</option>
          </select>
        </nav>
      </div>
      <div className="flex justify-center items-center gap-5 mt-5">
        <img
          src="searchbook.png"
          alt="search book icon"
          className="w-[50px] h-[50px]"
        />
        <h3 className=" text-xl font-bold text-blue-900">
          Search By Tilte/Author Name
        </h3>
      </div>

      <div className="flex justify-center p-4 gap-3 ">
        <input
          type="text"
          placeholder="Enter the Book Title or Author..."
          className="w-[35vw] rounded-lg pl-2 h-[40px] border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none  "
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white hover:scale-[1.1] px-2 py-1 rounded-md flex items-center "
        >
          <img
            src="search.png"
            alt="search_icon"
            className="w-[30px] h-[30px]"
          />
          Search
        </button>
      </div>

      <div className="mt-10">
        <BookList searchBook={searchBook} />
      </div>
    </div>
  );
}
