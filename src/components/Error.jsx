import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <>
      <div className="flex justify-center items-center mt-40 gap-5">
        <img
          src="/404-error.png"
          alt="monitor"
          className="w-[150px] h-[150px]"
        />
        <div className="text-red-500 text-2xl capitalize italic bold">
          <h1>Error !</h1>
          <p>{error.status}</p>
          {/* <p>{error.statusText || error.error.message}</p> */}
          <p>Page not found</p>
        </div>
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
