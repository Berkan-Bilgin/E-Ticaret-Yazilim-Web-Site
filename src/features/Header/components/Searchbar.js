import React, { useEffect } from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import UserMenu from "./UserMenu";
import CartButton from "./CartButton";

const Searchbar = () => {
  useEffect(() => {
    console.log("search bar component güncellendi");
  }, []);

  return (
    <div className="bg-white">
      <div className="flex items-center sm:space-x-4 px-4 py-2 justify-between container bg">
        <Logo />
        <SearchInput />
        <UserMenu />
        <CartButton />
      </div>
    </div>
  );
};

export default Searchbar;
