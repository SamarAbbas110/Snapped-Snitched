import React from "react";

const Newsletter = () => {

    const SubmitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className="text-center">
      <p className="text-xl text-gray-800 poppins-regular poppins-bold">
        Subscribe and get 30% Off
      </p>
      <p className="mt-2 text-gray-500">
        Stay updated with our latest collections, special offers, and more.
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your Email" required/>
        <button onSubmit={SubmitHandler} type="submit" className="bg-black text-white text-base px-10 py-4">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default Newsletter;
