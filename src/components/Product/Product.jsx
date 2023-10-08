// import React, { useState, useEffect } from "react";
// import useCurrencyInfo from "../../hooks/useCurrencyInfo";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../store/cartSlice";
// import { toast } from "react-hot-toast";
// import { BsCheckLg } from "react-icons/bs";

// const Product = ({ product }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [currency, setCurrency] = useState("usd");
//   const [amount, setAmount] = useState(product.price);
//   const [options, setOptions] = useState([]);
//   const currencies = useCurrencyInfo(currency);

//   useEffect(() => {
//     setOptions(Object.keys(currencies));
//   }, [currencies]);
//   useEffect(() => {
//     if (currency !== "usd") {
//       setAmount(amount * currencies[currency]);
//     }
//   }, [currency]);

//   return (
//     <>
//       {/* Card */}
//       <div className="px-2 flex flex-wrap w-full max-w-md">
//         <div className="flex flex-col w-full max-w-md p-2 pb-4 bg-gray-500 rounded-md mx-auto mt-3 cursor-pointer hover:scale-[1.01] transition-all duration-200 shadow shadow-slate-950 ">
//           <div
//             className="rounded-sm overflow-hidden"
//             onClick={() => {
//               navigate(`/products/${product.id}`);
//             }}
//           >
//             <img
//               className="w-full h-56 object-cover object-center"
//               src={product.thumbnail}
//               alt=""
//             />
//           </div>
//           <div className="flex flex-col gap-2 mt-3">
//             <div className="text-2xl font-bold text-white">{product.title}</div>
//             <div className="text-sm text-gray-300">{product.description}</div>
//           </div>
//           <div className="w-full mx-auto mt-3 flex justify-between items-center">
//             <h1 className="text-white text-xl font-bold bg-slate-950 px-3 py-1 rounded-md">
//               {amount.toFixed(2)} {currency.toUpperCase()}
//             </h1>
//             <select
//               onChange={(e) => {
//                 setCurrency(e.target.value);
//               }}
//             >
//               <option value={currency}>{currency}</option>
//               {options.map((option) => {
//                 return (
//                   <option value={option} key={option}>
//                     {option}
//                   </option>
//                 );
//               })}
//             </select>
//             <button
//               onClick={() => {
//                 const productToAdd = {
//                   product: product,
//                   quantity: 1,
//                 };
//                 dispatch(addToCart(productToAdd));
//                 toast.success("Added to Cart");
//               }}
//               className=" text-center bg-gray-800 rounded-md px-4 py-1 text-white font-semibold hover:opacity-80 transition-all duration-200"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import toast from "react-hot-toast";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState("usd");
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(product.price);
  const [options, setOptions] = useState([]);
  const currencies = useCurrencyInfo(currency);

  useEffect(() => {
    setOptions(Object.keys(currencies));
  }, [currencies]);
  useEffect(() => {
    if (currency !== "usd") {
      setAmount(amount * currencies[currency]);
    }
  }, [currency]);
  return (
    <>
      <div></div>
      <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="peer absolute top-0 right-0 h-full w-full object-cover"
            src={product.thumbnail}
            alt="product image"
          />
          <img
            className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
            src={product.images[0]}
            alt="product image"
          />
          <svg
            className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
            />
          </svg>
        </a>
        <div className="mt-4 px-5 pb-5">
          <div className="flex justify-between">
            <h5 className="text-xl tracking-tight text-white">
              {product.title}
            </h5>
            <div class="flex items-center border-gray-100">
              <span
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                class="cursor-pointer rounded-l bg-gray-400 font-bold py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                -{" "}
              </span>
              <input
                class="h-8 w-8 border bg-gray-600 font-bold text-white text-center text-xs outline-none"
                type="number"
                value={quantity}
                disabled
                min="1"
              />
              <span
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                class="cursor-pointer rounded-r bg-gray-400 font-bold py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                +{" "}
              </span>
            </div>
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-white">
                ${product.price}&nbsp;
              </span>
              <span className="text-sm text-white line-through">
                ${(product.price + Math.random() * 100).toFixed(0)}
              </span>
            </p>
            <div class="flex items-center  space-x-1 ">
              <h1 className="font-bold text-xl text-white">{product.rating}</h1>
              <div>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
            {/*? CHANGE CURRENCY FROM ONE TO ANOTHER */}
            {/* <select
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <option value={currency}>{currency}</option>
              {options.map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select> */}
          </div>
          <button
            onClick={() => {
              const productToAdd = {
                product: product,
                quantity: quantity,
              };
              dispatch(addToCart(productToAdd));
              toast.success("Added to Cart");
            }}
            href="#"
            className="w-full hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
