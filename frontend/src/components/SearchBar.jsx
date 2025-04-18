import React, { useContext , useEffect , useState } from "react";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router";

const SearchBar = () => {
    const [visible, setvisible] = useState(false)
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(shopContext);


const location = useLocation();

useEffect(() => {
  if(location.pathname.includes("collections")){ //it checks if 'localhost:5173/collections is there then show searchBar
    setvisible(true)
  }
  else{
    setvisible(false)
  }
}, [location])


  return showSearch && visible  ? (
    <div className="text-center">
      <div
        className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full
    w-3/4 sm:w-1/2
    "
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4  cursor-pointer" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="cursor-pointer inline w-3"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
