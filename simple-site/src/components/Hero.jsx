import React from "react";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <section id="hero">
      {/* flex container */}
      <div className="container flex flex-col-reverse md:flex-row items-center px-6     mx-auto mt-10 space-y-0 md:space-y-0 ">
        {/* left item */}
        <div className="flex flex-col mb-32 space-y-10 md:w-1/2 ">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, id
            labore eos eaque magnam libero? Nobis aliquam deserunt repellendus
            sapiente perspiciatis laborum quos. Delectus neque facere ab nulla
            laboriosam sed?
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href=""
              className=" p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight "
            >
              Get started
            </a>
          </div>
        </div>
        {/* right item image */}

        <div className="md:w-1/2">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
