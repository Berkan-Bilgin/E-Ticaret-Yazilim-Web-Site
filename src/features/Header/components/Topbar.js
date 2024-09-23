"use client";
import React from "react";
import MenuLinks from "./MenuLinks";
import LanguageDropdown from "./LanguageDropdown";
import MobileCart from "./MobileCart";
import CartButton from "./CartButton";
import UserMenu from "./UserMenu";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div className="text-text-primary text-xs">
      <div className="h-12 flex justify-between items-center container mx-auto">
        <div className="hidden sm:block"></div>
        {/* Desktop & Tablet */}
        <div className="hidden sm:flex items-center space-x-4">
          <MenuLinks />
          <LanguageDropdown />
        </div>

        {/* Mobile */}
        <Link href="/" className="sm:hidden flex">
          LOGO
        </Link>

        <div className="sm:hidden flex items-center space-x-4">
          <Link href="/login" className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="text-md" />
            <span className="ml-2">Giriş Yap</span>
          </Link>
          <Link href="/sepetim" className="flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="text-md" />
            <span className="ml-2">Sepetim</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
