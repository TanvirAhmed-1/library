import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStorRead, addToStorwish } from "../utiliti/savedata";

const Booksdatils = () => {
  const param = useParams();
  const { bookId } = param;
  const id = parseInt(bookId);

  const data = useLoaderData();
  console.log(typeof bookId, typeof data[0].bookId);

  const book = data.find((book) => book.bookId === id);
  console.log(book);
  const {
    review,
    category,
    image,
    author,
    bookName,
    rating,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
  } = book;

  const handalReadBook = (id) => {
    addToStorRead(id);
  };

  const handlewish = (id) => {
    addToStorwish(id);
  };
  return (
    <div className=" max-w-[1240px] mx-auto my-11">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10 mx-4">
        <div className=" bg-[#1313130D] p-20 grid justify-center rounded-3xl items-center">
          <img
            src={image}
            alt={bookName}
            className="w-[425px] h-[565px] p-5 rounded-xl"
          />
        </div>
        <div className=" grid gap-3">
          <h2 className="text-4xl font-bold text-black ">{bookName}</h2>
          <p className="text-sm font-normal text-black">By: {author}</p>
          <div className="border-t-2 border-solid "></div>
          <h4 className=" text-xl font-semibold text-black ">{category}</h4>
          <div className="border-t-2 border-solid "></div>
          <div className="flex">
            <p>
              <span className="text-base text-black font-bold">Review:</span>
              <samp className="text-sm font-normal text-gray-600">
                {review}
              </samp>{" "}
            </p>
          </div>
          <div className=" flex gap-4 ">
            <p className="text-base text-black font-bold">Tag</p>
            {tags.map((tag) => (
              <p className="py-2 px-4 bg-[#eef0ed] border-none rounded-3xl text-[#23BE0A] font-normal text-sm">
                {tag}
              </p>
            ))}
          </div>
          <div className="border-t-2 border-solid "></div>
          <div className="flex gap-x-48">
            <div className=" text-base font-normal text-gray-600 text-start grid gap-y-2">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className=" text-start text-black font-normal text-base grid gap-y-2">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handalReadBook(bookId)}
              className="px-4 py-2 rounded-xl border-none text-white text-base  font-medium hover:bg-[#236472] bg-[#50B1C9]"
            >
              Read
            </button>
            <button onClick={() => handlewish(bookId)} className="px-4 py-2 rounded-xl text-white  border-none text-base font-medium bg-[#50a9b3] hover:bg-[#236472]">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booksdatils;
