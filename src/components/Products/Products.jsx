import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../index.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100").then(({ data }) => {
      setProducts(data.products);
    });
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-5xl text-white p-4">
        All Products
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-1">
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;
