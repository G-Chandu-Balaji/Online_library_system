import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function Book_Details() {
  const { bookId } = useParams();
  const Books = useSelector((store) => store.BookList.Books);
  const book = Books.filter((item) => item.id == bookId);
  if (book.length === 0) {
    throw new Error("No Book Found (Enter Valid BookId!)");
  }

  return (
    <div className="min-h-[80vh]">
      <div className="  mx-auto w-[max-content] shadow-2xl rounded-xl mt-10 justify-center ">
        <div className="flex items-center">
          <div className="p-4 ">
            <div className="border-2 hover:rotate-x-10 hover:rotate-y-[-20deg] hover:perspective-[1000px] hover:ease-in-out  rounded-md hover:duration-400 relative z-10">
              <img src={book[0].image} alt="" className="w-[225px] h-[300px]" />
            </div>
            <div className="mt-2 flex justify-center">
              <StarRating rating={book[0].rating} />
            </div>
          </div>
          <div className="mx-5 ">
            <div className="grid grid-cols-6 border-2 border-black p-10 gap-1  ">
              <p className="col-span-1">Title:</p>
              <p className="col-span-5">{book[0].title}</p>
              <p className="col-span-1">Author:</p>
              <p className="col-span-5">{book[0].author}</p>
              <p className="col-span-1">Year:</p>
              <p className="col-span-5">{book[0].year}</p>
              <p className="col-span-1">Category:</p>
              <p className="col-span-5">{book[0].category}</p>
              <p className="col-span-1">Description:</p>
              <p className="col-span-5 italic">{book[0].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 ">
        <Link to="/Browser_Page">
          <button className="p-3 bg-blue-600 text-white rounded-xl hover:underline hover:underline-offset-4 duration-500 hover:scale-[1.1] flex justify-center">
            Back to Browse Page
          </button>
        </Link>
      </div>
    </div>
  );
}
