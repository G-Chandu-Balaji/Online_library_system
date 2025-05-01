import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../utils/bookListSlice";

export default function Add_Book() {
  const Books = useSelector((store) => store.BookList.Books);
  console.log("Books by reducer", Books);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmission = (data) => {
    console.log("form data", data);
    data.id = Books.length + 1;
    console.log("new data", data);
    dispatch(addBook(data));

    reset();
  };

  return (
    <>
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
          <label className="col-span-2 text-xl text-xl">Title Name:</label>
          <div className="col-span-4 flex flex-col">
            <input
              type="text"
              {...register("title", { required: true })}
              className="border-2  w-[100%] h-8 rounded-md pl-2"
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
              className="border-2 w-[100%] h-8 rounded-md pl-2"
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
              className="border-2 w-[100%] h-8 rounded-md pl-2"
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
              className="border-2 w-[100%] h-8 rounded-md pl-2"
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
              {...register("category", { required: true })}
              className="border-2 w-[100%] h-8 rounded-md"
            >
              <option value="">Select a Category</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Fiction">Fiction</option>
              <option value="Thriller">Thriller</option>
              <option value="Literature">Literature</option>
              <option value="Romance">Romance</option>
            </select>
            {errors.topic && (
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

          <label className="col-span-2 text-xl">About The Book:</label>
          <div className="col-span-4 flex">
            <textarea
              {...register("description", { required: true, minLength: 10 })}
              placeholder="Write about book here..."
              rows={5}
              className="w-[100%] border-2 rounded-md pl-2"
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
    </>
  );
}
