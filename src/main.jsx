import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Cart, Category, Header, Products } from "./components/index.js";
import ProductInfo from "./components/ProductInfo/ProductInfo.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout.jsx";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Header />}></Route>
      <Route path="category/:category" element={<Category />} />
      <Route path="products" element={<Products />}></Route>
      <Route path="products/:id" element={<ProductInfo />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </PersistGate>
    <Toaster />
  </Provider>
);
