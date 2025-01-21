import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  console.log(book);
  const { image, author, bookName, rating, bookId, tags, publisher } = book;
  return (
    <div className="card bg-white md:w-96 w-80 shadow-xl p-6 border-[#F3F3F3] border-2 grid justify-center items-center mx-auto">
      <figure className=" w-[326px] h-[230px] bg-[#F3F3F3] rounded-2xl">
        <img
          src={image}
          alt={bookName}
          className="object-cover w-[124px] h-[166px]"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-4 ">
          {tags.map((tag) => (
            <button className="py-2 px-4 bg-[#eef0ed] border-none rounded-3xl text-[#23BE0A] font-normal text-sm">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          <h3 className="font-bold text-2xl pt-2 text-black">{publisher}</h3>
        </h2>
        <p className="text-black pt-3">By: {author}</p>
        <div className="border-dashed border-2 my-2"></div>
        <div className="flex justify-between items-center ">
          <h5 className="font-semibold text-base text-black">Fiction</h5>
          <div className="flex text-base text-black justify-between items-center gap-2">
            <p>{rating}</p>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star  border-gray-500" />
            </div>
          </div>
          
        </div>
        <div className="flex justify-start items-center">
        <Link to={`/books/${bookId}`}>
        <button className="btn mt-4 text-xl font-bold bg-[#23BE0A] rounded-3xl text-white btn-primary">View Details</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
