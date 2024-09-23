import React from "react";

const NavbarMenu = () => {
  return (
    <div className="col-span-12 lg:col-span-6 sm:flex justify-center md:justify-start items-center overflow-hidden hidden lg:block">
      <ul className="flex flex-nowrap items-center space-x-2 justify-center bg-gray-700 text-white py-4 w-full whitespace-nowrap">
        <li className="hover:text-yellow-500 cursor-pointer">ÜRÜNLER</li>
        <li className="hover:text-yellow-500 cursor-pointer">MEDICAL1</li>
        <li className="hover:text-yellow-500 cursor-pointer">MEDICAL2</li>
        <li className="hover:text-yellow-500 cursor-pointer">SSS</li>
        <li className="hover:text-yellow-500 cursor-pointer">BLOG</li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
