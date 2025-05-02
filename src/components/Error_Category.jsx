import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function Error_Category() {
  const error = useRouteError();
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center gap-5">
      <div className="text-red-500 p-4 flex items-center justify-center  gap-5">
        <img
          src="/notFound.png"
          alt="NotFOund"
          className="w-[150px] h-[150px]"
        />
        <div className="mt-4">
          <h1 className="text-2xl font-extrabold ">Something went wrong</h1>
          <p className="font-bold text-xl">
            {error.statusText || error.message}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5 ">
        <Link to="/">
          <button className="p-3 bg-blue-600 text-white rounded-xl hover:underline hover:underline-offset-4 duration-500 hover:scale-[1.1] flex justify-center">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
