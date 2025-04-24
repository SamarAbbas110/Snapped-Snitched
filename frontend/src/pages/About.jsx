import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

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
            At <span className="poppins-bold">Snapped & Stitched</span>, fashion
            meets craftsmanship. We’re not just another clothing brand — we’re a
            movement built on stories woven into every stitch. Born from a
            passion for minimalist elegance and everyday comfort, our pieces are
            designed to be timeless yet tailored to modern lifestyles. Each
            garment tells a story — of thoughtful design, sustainable choices,
            and the people behind every seam. We believe clothing should do more
            than just look good; it should feel good, do good, and last long.
            Whether it's a cozy knit or a structured essential, we bring
            together quality fabrics, ethical production, and style that speaks
            for itself.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is simple: to stitch together style and sustainability.
            We’re committed to creating apparel that empowers — from the makers
            who craft it to the wearers who rock it. Through responsible
            sourcing, fair labor practices, and slow fashion values, we aim to
            redefine what it means to look good while doing good. Welcome to the
            future of fashion — one snap and stitch at a time.
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
    </div>
  );
};

export default About;
