import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const link = <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          <li><NavLink to="/ListedBooks">Listed Books</NavLink></li>
          

    </>
  return (
    <div className="navbar bg-white px-[100px] md:flex grid py-10">
      <div className="navbar-start flex md:justify-start justify-between gap-7">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
          {link}
          </ul>
        </div>
        <div className="flex justify-start items-center">
        <a className="btn  btn-ghost text-2xl font-semibold text-black">Book Vibe</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 md:flex gap-4">
        {link}
        </ul>
      </div>
      <div className="md:navbar-end flex gap-6 md:gap-0 ">
        <button className="btn lg:mr-3 border-none text-white text-xl font-semibold bg-[#23BE0A]">Sign In</button>
        <button className="btn text-white  border-none text-xl font-semibold bg-[#59C6D2]">Loge In</button>
      </div>
    </div>
  );
};

export default Header;
