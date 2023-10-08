import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../index.js";
import axios from "axios";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then(({ data }) => {
        setProducts(data.products);
      });
  }, [category]);
  return (
    <div>
      <h1 className="text-center text-5xl p-4 font-bold text-white">
        Showing result for {category}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-1">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Category;
