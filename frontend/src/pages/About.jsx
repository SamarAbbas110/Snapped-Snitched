import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title titleText1={"ABOUT"} titleText2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded-full"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col text-sm justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse porro
            eius reiciendis qui quasi architecto maxime recusandae, harum in
            laborum, alias laboriosam doloribus nemo. Voluptas aut vel commodi
            quae nobis ipsam repellat rerum reiciendis quisquam! Reprehenderit,
            nemo cupiditate! Ex, amet ipsa ipsam nemo animi aperiam dolores
            quibusdam consequuntur nihil quis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime
            amet, ut consectetur dignissimos ex similique nemo alias! Dolorum
            dolores voluptate aut corrupti minima? Doloremque deleniti facilis
            aliquam dignissimos sapiente, voluptatum nam, quae voluptates culpa
            ex officiis animi consequatur ipsum corrupti necessitatibus
            reprehenderit eum adipisci est quod? Corrupti, porro repellendus?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            veritatis molestiae quibusdam tempora porro pariatur nisi corporis
            nobis ullam quisquam aperiam, facere, fugiat voluptas ex, ipsum rem!
            Laborum animi repellat nulla odit assumenda, voluptas voluptatem
            doloribus ullam inventore molestias deserunt facilis necessitatibus
            accusantium, numquam libero eos voluptatum. Magnam, cumque
            veritatis.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title titleText1={"WHY"} titleText2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5 rounded-l">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5 rounded-r">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
       
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
