import React, { useState } from "react";
import BookList from "./BookList";

export default function Browser_Page() {
  const [inputText, setInputText] = useState(null);

  function handleSearch() {}
  return (
    <div className="mx-auto">
      <div>
        <input
          type="text"
          placeholder="Enter the Book Title..."
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        <BookList />
      </div>
    </div>
  );
}
