import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(
        <FaStar
          key={i}
          className="h-7 w-7 text-yellow-400"
          style={{ stroke: "black", strokeWidth: 5 }}
        />
      );
    } else if (i - 0.5 === rating) {
      // Half star
      stars.push(
        <FaStarHalfAlt
          key={i}
          className="h-7 w-7 text-yellow-400"
          style={{ stroke: "black", strokeWidth: 5 }}
        />
      );
    } else {
      // Empty star
      stars.push(
        <FaRegStar
          key={i}
          className="h-7 w-7 text-white "
          style={{ stroke: "black", strokeWidth: 5 }}
        />
      );
    }
  }

  return (
    <div className="flex space-x-1  items-center">
      <span className="text-bold text-xl pr-3 pt-2">
        {Number.isInteger(rating) ? `${rating}.0` : rating.toString()}
      </span>
      {stars}
    </div>
  );
}
