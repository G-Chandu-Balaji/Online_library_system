import React from "react";

export default function Home() {
  return (
    <div className="capitalize">
      <div
        className="w-[80%] mx-auto text-center h-[50vh] flex flex-col justify-center  
      "
      >
        <h1 className="text-2xl font-bold   mb-3">
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
      <div>
        <h2 className="text-xl">catergories of books</h2>
        <div></div>
      </div>
      <div>
        <h2>popular books</h2>
        <div></div>
      </div>
    </div>
  );
}
