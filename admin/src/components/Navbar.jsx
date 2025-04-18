import React from "react";

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between px-[4%] py-4">
      <h1 className="text-2xl poppins-extrabold">SNAPPED & STITCHED</h1>
      <button onClick={() => setToken("")} className="bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full">Logout</button>
    </div>
  );
};

export default Navbar;
