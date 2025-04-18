import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const PolicyComponent = () => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 
    text-center py-20 text-xs sm:text-xl md:text-base text-gray-700
    "
    >
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5 hover:scale-110 cursor-pointer" alt="" />
        <p className="poppins-extrabold">7 Days Return Policy</p>
        <p className="text-gray-400">
        We offer a 100% refund within 7 days if you're not satisfied with your purchase.
        </p>
      </div>

      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5  hover:scale-110 cursor-pointer" alt="" />
        <p className="poppins-extrabold">Easy Exchange Policy</p>
        <p className="text-gray-400">
        We offer a 30-day exchange policy if you're not satisfied with your purchase.
        </p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5  hover:scale-110 cursor-pointer" alt="" />
        <p className="poppins-extrabold">Cusomer Support 24/7</p>
        <p className="text-gray-400">
          We are here to help you with any questions or concerns you may have.
        </p>
      </div>
    </div>
  );
};

export default PolicyComponent;
