import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-blue-950 text-black text-center p-2">
      <Link to="https://github.com/G-Chandu-Balaji/Online_library_system">
        <button className="bg-yellow-400 rounded-lg  p-1 font-bold hover:scale-[1.1] hover:cursor-grab ">
          GitHUb Link
        </button>
      </Link>
    </div>
  );
}
