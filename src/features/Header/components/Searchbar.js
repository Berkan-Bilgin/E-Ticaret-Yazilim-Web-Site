"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/common/store/authSlice";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import UserMenu from "./UserMenu";
import CartButton from "./CartButton";
import Button from "@/common/components/Button";

const Searchbar = () => {
  const dispatch = useDispatch();

  // Redux store'dan isLoggedIn durumunu alıyoruz
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menü kontrolü

  const handleLogout = () => {
    dispatch(logout()); // Redux store'dan kullanıcıyı çıkış yaptırıyoruz
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Dropdown menüyü aç/kapa
  };

  return (
    <div className="bg-white sticky top-0 z-[19]">
      <div className="flex items-center sm:space-x-4 px-4 py-2 justify-between container ">
        <Logo />
        <SearchInput />

        <div className="hidden sm:block relative">
          {isLoggedIn ? (
            <>
              <button
                onClick={toggleDropdown}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Hesabım
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                  <ul className="py-2">
                    {/* Dropdown menü içeriği */}
                    <li>
                      <Button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Hesaptan Çık
                      </Button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <UserMenu />
          )}
        </div>

        <CartButton />
      </div>
    </div>
  );
};

export default Searchbar;
