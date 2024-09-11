"use client";
import React from "react";
import Topbar from "./components/Topbar";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";

const Header = () => {
  return (
    <div>
      <Topbar />
      <Searchbar />
      <Navbar />
    </div>
  );
};

export default Header;
