import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletter from "../components/Newsletter";
import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title titleText1={"CONTACT"} titleText2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-28 my-10">
        <img
          className="w-full md:w-[480px] rounded"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 text-sm">
          <p className="poppins-bold text-xl text-gray-600 ">Our Store</p>
          <p className="text-gray-500">
            {" "}
            Plot no 69 Room no 1 gate no 7 NCC Malad(West) Mumbai -95
          </p>
          <p className="text-gray-500">
            Tel: +91 8108138743
            <br /> Email: sa707510@gmail.com
          </p>
          <p className="text-gray-500 text-xl poppins-bold">
            Careers at Snapped and Stitched
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button
            onClick={() => toast.error("Will be available soon")}
            className="border px-6 py-3 hover:bg-black hover:text-white transition-all ease-in-out"
          >
            Explore Jobs
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
