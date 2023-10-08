import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Categories } from "../index";

const Header = () => {
  return (
    <>
      <Navbar />
      {/* Header Image and Text */}
      <div className="relative h-screen bg-gray-700">
        <div className="w-full md:max-w-md absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="w-full text-5xl text-center font-bold text-white p-5 ">
            Just Dummy Products for Dummy People
          </h1>
          <Link
            to={"/products"}
            className="p-2 px-5 bg-red-500 text-center rounded-full text-white font-bold hover:opacity-90"
          >
            Shop Now
          </Link>
        </div>
      </div>
      {/* Categories Section */}
      <Categories />
    </>
  );
};

export default Header;
