import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    // px|mx- padding|margin left and right
    // py|my- padding|margin top and bottom
    <nav className="relative container  mx-auto p-6">
      {/* flex container */}
      {/* flex = put all items inside of it into a flex row by default */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        {/* menu items 
            space-x = horizontal
            space-y = vertical
            mobile-first method
        */}
        <div className="hidden md:flex space-x-6 ">
          <a href="#" className="hover:text-red-500">
            Pricing
          </a>
          <a href="#" className="hover:text-red-500">
            Pricing
          </a>
          <a href="#" className="hover:text-red-500">
            Pricing
          </a>
          <a href="#" className="hover:text-red-500">
            Pricing
          </a>
          <a href="#" className="hover:text-red-500">
            Pricing
          </a>
        </div>
        <a
          href=""
          //   hidden by default
          className=" hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get started
        </a>

        {/*  Hamburger Icon */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/*  mobile menu*/}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Pricing</a>
          <a href="#">Pricing</a>
          <a href="#">Pricing</a>
          <a href="#">Pricing</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
