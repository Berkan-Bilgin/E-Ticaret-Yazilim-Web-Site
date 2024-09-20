"use client";
import React from "react";
import MenuLinks from "./MenuLinks";
import LanguageDropdown from "./LanguageDropdown";
import MobileCart from "./MobileCart";

const Topbar = () => {
  return (
    <div className="text-text-primary text-xs">
      <div className="flex justify-between items-center mt-2 px-4 container mx-auto">
        <div></div>
        {/* Desktop & Tablet */}
        <div className="hidden sm:flex items-center space-x-4">
          <MenuLinks />
          <LanguageDropdown />
        </div>

        {/* Mobile */}
        <MobileCart />
      </div>
    </div>
  );
};

export default Topbar;
