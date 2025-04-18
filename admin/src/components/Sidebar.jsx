import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          to="/addproducts"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 rounded-l"
        >
          <img className="w-5 h-5 icon" src={assets.add_icon} alt="" />
          {/* from 767 to less the text will be hidden */}
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/listproducts"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 rounded-l"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          {/* from 767 to less the text will be hidden */}
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 rounded-l"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          {/* from 767 to less the text will be hidden */}
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
