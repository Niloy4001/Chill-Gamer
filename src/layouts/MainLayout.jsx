import React from "react";
import Navbar from "../compnents/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../compnents/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100lvh-400px)] bg-cyan-100">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
