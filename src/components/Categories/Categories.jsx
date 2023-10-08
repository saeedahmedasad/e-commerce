import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then(({ data }) => {
      setCategories(data);
    });
  }, []);
  return (
    <>
      <h1 className=" text-center text-5xl p-5 font-bold text-white">
        Categories
      </h1>
      <div className="flex flex-wrap justify-center items-center p-5 gap-4">
        {/* Categoy */}
        {categories.map((category) => {
          return (
            <div
              onClick={() => {
                navigate(`/category/${category}`);
              }}
              key={category}
              className="w-full max-w-sm p-1 shadow-2xl shadow-black bg-blue-500 rounded-md cursor-pointer"
            >
              <div className="w-full bg-gray-800 h-60 rounded-t overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-50 hover:opacity-90 transition-all duration-500 ease-in-out"
                  src={`https://source.unsplash.com/random/1080x1920/?${category}`}
                  alt=""
                />
              </div>
              <div className="w-full text-center p-1 bg-red-300 rounded-b-lg">
                <h1 className="font-bold">{category.toUpperCase()}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
