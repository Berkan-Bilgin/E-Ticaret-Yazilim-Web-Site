import React from "react";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <div className="col-span-12 lg:col-span-6 sm:flex justify-center md:justify-start items-center overflow-hidden hidden lg:block">
      <ul className="flex flex-nowrap items-center space-x-2 justify-center bg-gray-700 text-white py-4 w-full whitespace-nowrap">
        <li className="hover:text-yellow-500 cursor-pointer">
          <Link href="/kategori/urunler">ÜRÜNLER</Link>
        </li>
        <li className="hover:text-yellow-500 cursor-pointer">
          <Link href="/kategori/medical1">MEDICAL1</Link>
        </li>
        <li className="hover:text-yellow-500 cursor-pointer">
          <Link href="/kategori/medical2">MEDICAL2</Link>
        </li>
        <li className="hover:text-yellow-500 cursor-pointer">
          <Link href="/faq">SSS</Link>
        </li>
        <li className="hover:text-yellow-500 cursor-pointer">
          <Link href="/blog">BLOG</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
