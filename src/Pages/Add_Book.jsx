import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../utils/bookListSlice";
import { useNavigate } from "react-router-dom";

export default function Add_Book() {
  const Books = useSelector((store) => store.BookList.Books);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmission = (data) => {
    data.id = Books.length + 1;

    dispatch(addBook(data));
    navigate("/Browser_page");

    reset();
  };

  return (
    <div className="min-h-[85vh]">
      <div className="w-[80%] mx-auto mt-5 py-2 capitalize">
        <div className="flex justify-center gsp-10 items-center mb-4">
          <img
            src="addBook.png"
            alt="search icon"
            className="w-[60px] h-[60px]"
          />
          <h1 className="text-4xl   bold bg-clip-text text-transparent bg-gradient-to-bl from-black to-red-600">
            Enter Book Details
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onsubmission)}
          className="grid grid-cols-6 gap-2 w-[62%] min-h-[70vh] mx-auto p-8 pt-10 bg-gray-400 items-center  rounded-2xl "
        >
          <label className="col-span-2 text-xl">Title Name:</label>
          <div className="col-span-4 flex flex-col">
            <input
              type="text"
              {...register("title", { required: true })}
              className={` w-[100%] h-8 rounded-md pl-2 border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none  ${
                errors.title ? "border-red-500" : "border-black"
              }`}
            />
            {errors.title && (
              <p className="text-red-600 ml-5 flex items-center">
                <span>
                  <img
                    src="exclamation.png"
                    alt="sign"
                    className="w-[15px] h-[15px]"
                  />
                </span>
                Enter vaild name
              </p>
            )}
          </div>

          <label className="col-span-2 text-xl"> Author Name:</label>
          <div className="col-span-4 flex flex-col">
            <input
              type="text"
              {...register("author", { required: true })}
              className={` w-[100%] h-8 rounded-md pl-2 border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none  ${
                errors.author ? "border-red-500" : "border-black"
              }`}
            />
            {errors.author && (
              <p className="text-red-600 ml-5 flex items-center gap-0.5">
                <span>
                  <img
                    src="exclamation.png"
                    alt="sign"
                    className="w-[15px] h-[15px]"
                  />
                </span>
                Enter vaild author name
              </p>
            )}
          </div>

          <label className="col-span-2 text-xl">Year of Publication:</label>
          <div className="col-span-4 flex flex-col">
            <input
              type="number"
              {...register("year", { required: true })}
              className={` w-[100%] h-8 rounded-md pl-2 border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none  ${
                errors.year ? "border-red-500" : "border-black"
              }`}
              min="1800"
              max="2025"
            />
            {errors.year && (
              <p className="text-red-600 ml-5 flex gap-0.5 items-center">
                <span>
                  <img
                    src="exclamation.png"
                    alt="sign"
                    className="w-[15px] h-[15px]"
                  />
                </span>
                Enter vaild year
              </p>
            )}
          </div>

          <label className="col-span-2 text-xl"> Image:</label>
          <div className="col-span-4 flex flex-col">
            <input
              type="url"
              {...register("image", { required: true })}
              className={`w-[100%] h-8 rounded-md pl-2 border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none  ${
                errors.image ? "border-red-500" : "border-black"
              }`}
              placeholder="Enter image url"
            />
            {errors.image && (
              <p className="text-red-600 ml-5 flex items-center gap-0.5">
                <span>
                  <img
                    src="exclamation.png"
                    alt="sign"
                    className="w-[15px] h-[15px]"
                  />
                </span>
                Enter vaild image URL
              </p>
            )}
          </div>

          <label className="col-span-2 text-xl">Category Type:</label>
          <div className="col-span-4 flex flex-col">
            <select
              {...register("category", {
                required: "Please select a category.",
              })}
              className={` w-[100%] h-8 rounded-md border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none ${
                errors.category ? "border-red-500" : "border-black"
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value="Fantasy">Fantasy</option>
              <option value="Fiction">Fiction</option>
              <option value="Thriller">Thriller</option>
              <option value="Literature">Literature</option>
              <option value="Romance">Romance</option>
            </select>
            {errors.category && (
              <p className="text-red-600 ml-5 flex gap-0.5 items-center">
                <span>
                  <img
                    src="exclamation.png"
                    alt="sign"
                    className="w-[15px] h-[15px]"
                  />
                </span>
                Category is required
              </p>
            )}
          </div>

          <label className="col-span-2 text-xl">Rating :</label>
          <div className="col-span-4 flex flex-col">
            <input
              type="number"
              {...register("rating", { required: true })}
              className={` w-[100%] h-8 rounded-md pl-2 border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none ${
                errors.rating ? "border-red-500" : "border-black"
              }`}
              min="0"
              max="5"
              step="0.5"
              placeholder="Enter value in multiples of 0.5"
            />
            {errors.rating && (
              <p className="text-red-600 ml-5 flex gap-0.5 items-center">
                <span>
                  <img
                    src="exclamation.png"
                    alt="sign"
                    className="w-[15px] h-[15px]"
                  />
                </span>
                Rating Cannot be empty
              </p>
            )}
          </div>

          <label className="col-span-2 text-xl">About The Book:</label>
          <div className="col-span-4 flex">
            <textarea
              {...register("description", { required: true, minLength: 10 })}
              placeholder="Write about book here..."
              rows={5}
              className={`w-[100%]  rounded-md pl-2 border-1 focus:border-3 focus:border-blue-500 focus:bg-blue-50 focus:outline-none   ${
                errors.description ? "border-red-500" : "border-black"
              }`}
            />
            {errors.description && (
              <p className="text-red-600 ml-5  flex gap-0.5 ">
                <img
                  src="exclamation.png"
                  alt="sign"
                  className="w-[15px] h-[15px] mt-1"
                />
                Message is required and must be at least 10 characters.{" "}
              </p>
            )}
          </div>
          <div className=" col-start-3 col-end-5 justify-center flex">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg hover:scale-[1.1] p-2"
            >
              {" "}
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
