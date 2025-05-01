import React from "react";

export default function Book_notFound() {
  return (
    <div className="flex flex-col mt-5 items-center">
      <img src="notFound.png" alt="NotFOund" className="w-[150px] h-[150px]" />
      <p className="text-center italic capitalize text-2xl bold">
        {" "}
        Book Not Found....
      </p>
    </div>
  );
}
