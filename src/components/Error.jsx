import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="flex justify-center items-center mt-40 gap-5">
        <img
          src="404-error.png"
          alt="monitor"
          className="w-[150px] h-[150px]"
        />
        <h1 className="text-2xl capitalize italic bold">Page Not Found...</h1>
      </div>
      <Link to="/" className="flex justify-center mt-40 ">
        <button className="p-2 px-3 bg-blue-600 text-white rounded-md hover:scale-[1.1] gap-3 flex items-center ">
          <span className="text-xl ">&larr; </span>
          <span className="text-lg hover:underline">Go to Home</span>
        </button>
      </Link>
    </>
  );
}
