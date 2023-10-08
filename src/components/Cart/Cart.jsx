// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addQuantity,
//   decreaseQuantity,
//   removeFromCart,
// } from "../../store/cartSlice";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1 className="p-5  text-white text-5xl text-center font-sans font-bold">
//         Your Cart
//       </h1>
//       {cart.length <= 0 ? (
//         <div className="flex flex-col justify-center items-center">
//           <h1 className="p-5  text-white text-5xl text-center font-sans font-bold">
//             Cart is Empty
//           </h1>
//           <Link
//             className="px-4 py-2 text-white bg-red-400 rounded-full mx-auto text-center"
//             to={"/products"}
//           >
//             Shop Now
//           </Link>
//         </div>
//       ) : null}
//       {cart?.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className="flex p-3 bg-red-100 gap-1 mb-1 rounded-xl mx-2 justify-between items-center"
//           >
//             <div className="flex items-center gap-2">
//               <p>{index + 1}. </p>
//               <h1 className="text-xl">{item.product.title}</h1>
//               <img src={item.product.thumbnail} width="30px" height="50px" />
//               <button
//                 className="px-2 bg-red-500 rounded-md py-1 text-white font-semibold hover:opacity-90"
//                 onClick={() => {
//                   toast.success(
//                     "Removed 1 more " + item.product.title + " to cart"
//                   );
//                   dispatch(decreaseQuantity(item));
//                 }}
//               >
//                 -
//               </button>
//               <p>Quantity: {item.quantity}</p>
//               <button
//                 className="px-2 bg-red-500 rounded-md py-1 text-white font-semibold hover:opacity-90"
//                 onClick={() => {
//                   toast.success(
//                     "Added 1 more " + item.product.title + " to cart"
//                   );
//                   dispatch(addQuantity(item));
//                 }}
//               >
//                 +
//               </button>
//               <p>Price: {item.product.price * item.quantity} USD</p>
//             </div>
//             <button
//               onClick={() => {
//                 dispatch(removeFromCart(item));
//               }}
//               className="p-4 bg-red-500 rounded-full py-2 text-white font-semibold hover:opacity-90"
//             >
//               Remove From Cart
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    let subTOTAL = 0;
    cart.map((item) => {
      subTOTAL += item.product.price * item.quantity;
    });
    setSubTotal(subTOTAL);
  }, [cart]);
  return (
    <div>
      <div class=" bg-gray-800 pt-20 h-screen">
        <h1 class="mb-10 text-center text-5xl text-white font-bold">
          Cart Items
        </h1>
        {cart.length <= 0 ? (
          <h1 className=" text-center text-white font-bold text-2xl bg-red-600 p-2 rounded-md mx-10">
            Cart is Empty
          </h1>
        ) : null}
        {cart?.length > 0 && (
          <div
            class={`mx-auto ${
              cart.length === 0 ? "h-screen" : ""
            } max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0`}
          >
            <div class="rounded-lg md:w-2/3">
              {cart?.map((item) => {
                return (
                  <div class="justify-between mb-6 rounded-lg bg-gray-700 border border-gray-500 p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={item.product.thumbnail}
                      alt="product-image"
                      class="w-full rounded-lg sm:w-40"
                    />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-100">
                          {item.product.title}
                        </h2>
                        <p class="mt-1 text-xs text-gray-200">
                          {item.product.description}
                        </p>
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <span
                            onClick={() => {
                              dispatch(decreaseQuantity(item));
                              toast.success("Removed 1 " + item.product.title);
                            }}
                            class="cursor-pointer rounded-l bg-gray-400 font-bold py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            -{" "}
                          </span>
                          <input
                            class="h-8 w-8 border bg-gray-600 font-bold text-white text-center text-xs outline-none"
                            type="number"
                            value={item.quantity}
                            disabled
                            min="1"
                          />
                          <span
                            onClick={() => {
                              dispatch(addQuantity(item));
                              toast.success(
                                "Added 1 more " + item.product.title
                              );
                            }}
                            class="cursor-pointer rounded-r bg-gray-400 font-bold py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-md font-bold text-white bg-red-500 px-2 rounded-md">
                            ${item.product.price * item.quantity}
                          </p>
                          <svg
                            onClick={() => {
                              dispatch(removeFromCart(item));
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="h-5 w-5 cursor-pointer text-white duration-150 hover:text-red-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Sub Total */}
            <div class="mt-6 h-full rounded-lg border bg-gray-400 p-6 shadow-md md:mt-0 md:w-1/3">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">${subTotal}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">$4.99</p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">${subTotal + 4.99} USD</p>
                  <p class="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
