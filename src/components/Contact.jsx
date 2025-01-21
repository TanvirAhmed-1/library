import React, { useState } from "react";
import img from '../../img/img1.jpg'

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    // Replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/XXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message || "An error occurred. Please try again.");
        }
      })
      .catch((error) => setError(error.message || "An error occurred."));
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }

  return (
        
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6  justify-center items-center bg-[#1313130D] mx-4 px-10">
        <div className="max-h-screen bg-slate-200  py-8 rounded-2xl mt-8 md:mt-0 lg:mt-0">
        <h1 className="text-3xl font-bold text-black text-center">Contact Me</h1>
        <div className="p-8 border-2 border-solid rounded-xl w-full  ">
      <img className="rounded-2xl" src={img} alt="" srcset="" />
        </div>

        </div>
        <div>
            <form onSubmit={submit} className="max-h-screen grid justify-center items-center gap-5 py-28 lg:my-20 md:my-10 my-6 mx-auto bg-slate-200 rounded-2xl text-black font-semibold text-xl">
      <div className="grid justify-start items-center ">
        <label htmlFor="email">Email</label>
        <input
        className="bg-white border-2 border-solid border-green-400 shadow-lg shadow-green-800 mt-4 rounded-xl"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="grid justify-start items-center">
        <label htmlFor="message">Message</label>
        <textarea
        className="bg-white border-2 border-solid border-green-400 shadow-lg shadow-green-800 mt-4  rounded-xl"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div>
      <button className="px-12 rounded-xl py-3 bg-green-500 text-xl font-semibold  " type="submit">Send</button>
      </div>
    </form>
        </div>
    </div>
  );
};

export default Contact;
