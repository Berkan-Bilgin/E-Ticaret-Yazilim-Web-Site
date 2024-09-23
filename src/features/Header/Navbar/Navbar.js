"use client";
import React from "react";
import NavbarCategories from "./NavbarCategories";
import NavbarMenu from "./NavbarMenu";
import NavbarContact from "./NavbarContact";

const NavbarYeni = () => {
  return (
    <div className="hidden lg:block">
      <nav className=" grid grid-cols-12 items-center container ">
        <NavbarCategories />
        <NavbarMenu />
        <NavbarContact />
      </nav>
    </div>
  );
};

export default NavbarYeni;
