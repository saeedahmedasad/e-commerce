import React from "react";
import Navbar from "./components/Header/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-16"></div>
      <Outlet />
    </>
  );
};

export default Layout;
