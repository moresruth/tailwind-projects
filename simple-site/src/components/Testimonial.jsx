import React from "react";
import { avatar01 } from "../assets";

const Testimonial = () => {
  return (
    <section id="testimonial">
      {/* Container to heading and testimonial card */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">This is Heading</h2>
        {/* Testimonial container */}
        <div className="flex flex-col mt-24  md:flex-row md:space-x-6">
          {/* testimonial 1 */}
          <div className="flex flex-col items-center py-6 my-7 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatar01} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Mary Copper</h5>
            <p className="text-sm text-darkGrayishBlue ">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
          {/* end of testimonial 1 */}

          {/* testimonial 2 */}
          <div className="flex flex-col items-center py-6  my-7  space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatar01} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Mary Copper</h5>
            <p className="text-sm text-darkGrayishBlue">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
          {/* end of testimonial 2 */}

          {/* testimonial 3 */}
          <div className="flex flex-col items-center py-6 my-7  space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatar01} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Mary Copper</h5>
            <p className="text-sm text-darkGrayishBlue">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
          {/* end of testimonial  */}
        </div>
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
