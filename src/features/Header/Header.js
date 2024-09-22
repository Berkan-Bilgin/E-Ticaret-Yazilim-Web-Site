"use client";
import React from "react";
import Topbar from "./components/Topbar";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import NavbarYeni from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Searchbar />
      {/* <div className="hidden sm:block">
        <Navbar />
      </div> */}
      <NavbarYeni />
    </div>
  );
};

export default Header;
