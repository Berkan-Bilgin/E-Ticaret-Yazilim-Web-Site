"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logout } from "@/common/store/authSlice";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import UserMenu from "./UserMenu";
import CartButton from "./CartButton";
import Button from "@/common/components/Button";

const Searchbar = () => {
  const dispatch = useDispatch();

  // Redux store'dan isLoggedIn durumunu alıyoruz
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout()); // Redux store'dan kullanıcıyı çıkış yaptırıyoruz
  };

  return (
    <div className="bg-white sticky top-0 z-[19]">
      <div className="flex items-center sm:space-x-4 px-4 py-2 justify-between container">
        <Logo />
        <SearchInput />
        <h1>{isLoggedIn.toString()}</h1>
        <div className="hidden sm:block">
          {isLoggedIn ? <h1>Hesabım</h1> : <UserMenu />}
        </div>
        <Button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Hesaptan Çık
        </Button>
        <CartButton />
      </div>
    </div>
  );
};

export default Searchbar;
