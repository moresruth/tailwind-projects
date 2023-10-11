import React from "react";

const CTA = () => {
  return (
    <section id="cta" className="bg-brightRed">
      {/* flex container */}
      <div className="container flex flex-col items-cent justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Lorem, ipsum dolor.
        </h2>
        {/* button */}
        <div>
          <a
            href=""
            //   hidden by default
            className=" hidden md:block p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
