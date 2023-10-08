import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);
  return (
    <>
      <h1>Title: {product?.title}</h1>
      <h1>Category: {product?.category}</h1>
      <h1>Price: {product?.price}</h1>
      <h1>Stock: {product?.stock}</h1>
      <h1>Rating: {product?.rating}</h1>
      <h1>Brand: {product?.brand}</h1>
      {product?.images?.map((image) => {
        return <img src={image} />;
      })}
    </>
  );
};

export default ProductInfo;
