import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletter from "../components/Newsletter";

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
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br /> Email: care@snappendandstiched.com
          </p>
          <p className="text-gray-500 text-xl poppins-bold">
            Careers at Snapped and Stitched
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border px-6 py-3 hover:bg-black hover:text-white transition-all ease-in-out">Explore Jobs</button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
