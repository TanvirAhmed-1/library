import React from "react";
import img from '../../img/img2.jpg'

const Nave = () => {
  return (
    <div className=" mx-auto bg-[#1313130D] min-h-screen rounded-2xl flex justify-center items-center lg:gap-24 lg:mx-24 lg:m-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-[120px]  ">
        <img
          src={img}
          className="lg:max-w-[550px] w-full rounded-lg shadow-2xl"
        />
        <div >
          <h1 className="lg:w-[526px] lg:text-5xl text-4xl font-bold text-black  ">Books to freshen up your bookshelf</h1>
          <button className="btn lg:mt-14 mt-10 text-xl font-bold bg-[#23BE0A] text-white btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Nave;
