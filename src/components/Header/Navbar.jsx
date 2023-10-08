import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCartFill, BsCheckLg } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
  ];
  return (
    <>
      <nav className="fixed w-full h-14 top-2 group border-gray-100/30 flex items-center p-5 overflow-hidden rounded-lg border bg-gray-700 shadow-md z-50">
        <div className="w-[100px] overflow-hidden sm:w-full sm:overflow-auto h-6">
          <h1 className="text-md text-white font-bold">
            <Link to={"/"}>Dummy Store</Link>
          </h1>
        </div>
        <ul className="flex gap-2">
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className="py-1 px-3 bg-red-500 rounded-md text-white font-semibold hover:opacity-80 transition-all duration-200 inline-flex items-center"
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
          <li className="flex justify-center items-center bg-red-500 p-2 rounded-md ">
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center gap-2"
            >
              <BsCartFill color="white" />{" "}
              {cart.length > 0 && (
                <span className="text-white w-[25px] rounded-md font-bold  bg-orange-500">
                  {cart.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
